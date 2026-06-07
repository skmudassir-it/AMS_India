import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const execAsync = promisify(exec);

const PHONE_NUMBER = "+16456541857";
const AMS_EMAIL = "skmudassir.it@gmail.com";

// Production: use env vars. Local: fall back to Hermes token files.
function getGoogleAuth() {
  // Check for env vars first (Vercel production)
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (clientId && clientSecret && refreshToken) {
    const auth = new google.auth.OAuth2(clientId, clientSecret);
    auth.setCredentials({ refresh_token: refreshToken });
    return auth;
  }

  // Local fallback: read from Hermes token files
  try {
    const hermesHome = process.env.HERMES_HOME || path.join(process.env.HOME || "/home/shaik", ".hermes");
    const clientSecretPath = path.join(hermesHome, "google_client_secret.json");
    const tokenPath = path.join(hermesHome, "google_token.json");

    if (fs.existsSync(clientSecretPath) && fs.existsSync(tokenPath)) {
      const clientSecret = JSON.parse(fs.readFileSync(clientSecretPath, "utf-8"));
      const installed = clientSecret.installed || clientSecret.web || {};
      const token = JSON.parse(fs.readFileSync(tokenPath, "utf-8"));

      if (installed.client_id && installed.client_secret && token.refresh_token) {
        const auth = new google.auth.OAuth2(installed.client_id, installed.client_secret);
        auth.setCredentials({ refresh_token: token.refresh_token });
        return auth;
      }
    }
  } catch (e) {
    console.error("[schedule] Failed to read local Google credentials:", e);
  }

  return null;
}

interface ScheduleBody {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  notes?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ScheduleBody = await request.json();
    const { name, email, phone, date, time, notes } = body;

    // Validation
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, date, time" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const dateTimeStr = `${date}T${time}:00`;
    const startDate = new Date(dateTimeStr);
    if (isNaN(startDate.getTime())) {
      return NextResponse.json({ error: "Invalid date/time" }, { status: 400 });
    }

    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    const summary = `AMS IT Services - Call with ${name}`;
    const description = [
      `Appointment scheduled via amsitservices.com`,
      ``,
      `Customer: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      notes ? `Notes: ${notes}` : "",
      ``,
      `Call us at ${formatPhone(PHONE_NUMBER)}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Try Node.js Google API first (works on Vercel)
    let calendarCreated = false;
    const auth = getGoogleAuth();

    if (auth) {
      try {
        const calendar = google.calendar({ version: "v3", auth });
        await calendar.events.insert({
          calendarId: "primary",
          requestBody: {
            summary,
            description,
            start: { dateTime: startDate.toISOString(), timeZone: "Asia/Kolkata" },
            end: { dateTime: endDate.toISOString(), timeZone: "Asia/Kolkata" },
            location: `Phone: ${formatPhone(PHONE_NUMBER)}`,
            attendees: [{ email }, { email: AMS_EMAIL }],
          },
          sendUpdates: "all",
        });
        calendarCreated = true;
      } catch (err: any) {
        console.error("[schedule] Google Calendar API error:", err.message);
      }
    }

    // Fallback: Python script (local machine)
    if (!calendarCreated) {
      const tzOffset = "+05:30";
      const startISO = startDate.toISOString().replace("Z", tzOffset);
      const endISO = endDate.toISOString().replace("Z", tzOffset);

      const pythonScript = "/home/shaik/google-venv/bin/python3";
      const apiScript = "/home/shaik/.hermes/skills/productivity/google-workspace/scripts/google_api.py";

      try {
        const cmd = [
          pythonScript, apiScript, "calendar", "create",
          `--summary '${summary.replace(/'/g, "'\\''")}'`,
          `--start '${startISO}'`,
          `--end '${endISO}'`,
          `--description '${description.replace(/'/g, "'\\''")}'`,
          `--attendees '${email},${AMS_EMAIL}'`,
          `--location 'Phone: ${formatPhone(PHONE_NUMBER)}'`,
        ].join(" ");

        await execAsync(cmd, { timeout: 15000 });
        calendarCreated = true;
      } catch (err: any) {
        console.error("[schedule] Python fallback error:", err.message);
      }
    }

    // Send confirmation email via Python script
    const emailBody = [
      `Hi ${name},`,
      ``,
      `Your appointment with AMS IT Services has been scheduled!`,
      ``,
      `📅 Date: ${formatDate(date)}`,
      `⏰ Time: ${formatTime(time)} (IST)`,
      `📞 Our Number: ${formatPhone(PHONE_NUMBER)}`,
      ``,
      `We'll call you at ${phone} at the scheduled time.`,
      ``,
      notes ? `You mentioned: "${notes}"` : "",
      ``,
      `If you need to reschedule, please reply to this email or call us at ${formatPhone(PHONE_NUMBER)}.`,
      ``,
      `Looking forward to speaking with you!`,
      `— AMS IT Services Team`,
    ]
      .filter(Boolean)
      .join("\n");

    let emailSent = false;
    try {
      // Try Node.js Gmail API
      if (auth) {
        const gmail = google.gmail({ version: "v1", auth });
        const emailContent = [
          `From: ${AMS_EMAIL}`,
          `To: ${email}`,
          `Subject: =?UTF-8?B?${Buffer.from(`Appointment Confirmed — ${formatDate(date)} at ${formatTime(time)}`).toString("base64")}?=`,
          `Content-Type: text/plain; charset=UTF-8`,
          ``,
          emailBody,
        ].join("\r\n");

        await gmail.users.messages.send({
          userId: "me",
          requestBody: { raw: Buffer.from(emailContent).toString("base64url") },
        });
        emailSent = true;
      }
    } catch (err: any) {
      console.error("[schedule] Gmail API error:", err.message);
    }

    // Fallback email via Python
    if (!emailSent) {
      try {
        const pythonScript = "/home/shaik/google-venv/bin/python3";
        const apiScript = "/home/shaik/.hermes/skills/productivity/google-workspace/scripts/google_api.py";
        const cmd = [
          pythonScript, apiScript, "gmail", "send",
          `--to '${email.replace(/'/g, "'\\''")}'`,
          `--subject 'Appointment Confirmed — ${formatDate(date)} at ${formatTime(time)}'`,
          `--body '${emailBody.replace(/'/g, "'\\''")}'`,
        ].join(" ");
        await execAsync(cmd, { timeout: 15000 });
        emailSent = true;
      } catch (err: any) {
        console.error("[schedule] Python email fallback error:", err.message);
      }
    }

    // Notify AMS team
    const teamBody = [
      `New appointment scheduled via website:`,
      ``,
      `Customer: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${formatDate(date)}`,
      `Time: ${formatTime(time)} (IST)`,
      notes ? `Notes: ${notes}` : "",
    ].join("\n");

    if (auth) {
      try {
        const gmail = google.gmail({ version: "v1", auth });
        const emailContent = [
          `From: ${AMS_EMAIL}`,
          `To: ${AMS_EMAIL}`,
          `Subject: =?UTF-8?B?${Buffer.from(`📅 New Appointment: ${name} — ${formatDate(date)}`).toString("base64")}?=`,
          `Content-Type: text/plain; charset=UTF-8`,
          ``,
          teamBody,
        ].join("\r\n");

        await gmail.users.messages.send({
          userId: "me",
          requestBody: { raw: Buffer.from(emailContent).toString("base64url") },
        });
      } catch (err: any) {
        console.error("[schedule] Team email error:", err.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Appointment scheduled successfully",
      details: {
        date: formatDate(date),
        time: formatTime(time),
        calendarCreated,
        emailSent,
      },
    });
  } catch (error: any) {
    console.error("[schedule-appointment] Unexpected error:", error);
    return NextResponse.json(
      {
        error: "Internal server error. Please call us directly at " + formatPhone(PHONE_NUMBER),
      },
      { status: 500 }
    );
  }
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function formatTime(timeStr: string): string {
  try {
    const [h, m] = timeStr.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
  } catch {
    return timeStr;
  }
}

function formatPhone(phone: string): string {
  if (phone.startsWith("+1") && phone.length === 12) {
    return `+1 (${phone.slice(2, 5)}) ${phone.slice(5, 8)}-${phone.slice(8)}`;
  }
  return phone;
}
