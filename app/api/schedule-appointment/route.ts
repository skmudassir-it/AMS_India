import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

const PYTHON_SCRIPT =
  "/home/shaik/google-venv/bin/python3 /home/shaik/.hermes/skills/productivity/google-workspace/scripts/google_api.py";

const PHONE_NUMBER = "+16456541857";
const AMS_EMAIL = "skmudassir.it@gmail.com";

interface ScheduleBody {
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
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

    // Parse date and time into ISO 8601
    const dateTimeStr = `${date}T${time}:00`;
    const startDate = new Date(dateTimeStr);
    if (isNaN(startDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date/time combination" },
        { status: 400 }
      );
    }

    // 30-minute appointment
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
    const tzOffset = "+05:30"; // IST
    const startISO = startDate.toISOString().replace("Z", tzOffset);
    const endISO = endDate.toISOString().replace("Z", tzOffset);

    const summary = `AMS IT Services - Call with ${name}`;
    const description = [
      `Appointment scheduled via amsitservices.com`,
      ``,
      `Customer: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      notes ? `Notes: ${notes}` : "",
      ``,
      `Call us at ${PHONE_NUMBER}`,
    ]
      .filter(Boolean)
      .join("\n");

    // Create Google Calendar event
    const calendarCmd = [
      PYTHON_SCRIPT,
      "calendar",
      "create",
      `--summary ${shellQuote(summary)}`,
      `--start ${shellQuote(startISO)}`,
      `--end ${shellQuote(endISO)}`,
      `--description ${shellQuote(description)}`,
      `--attendees ${shellQuote(email + "," + AMS_EMAIL)}`,
      `--location "Phone: ${PHONE_NUMBER}"`,
    ].join(" ");

    console.log("[schedule-appointment] Running:", calendarCmd);

    let calendarResult: { stdout: string; stderr: string };
    try {
      calendarResult = await execAsync(calendarCmd, { timeout: 15000 });
      if (calendarResult.stderr && !calendarResult.stderr.includes("Warning")) {
        console.error("[schedule-appointment] Calendar stderr:", calendarResult.stderr);
      }
    } catch (err: any) {
      console.error("[schedule-appointment] Calendar error:", err.message);
      // Don't fail — calendar is best-effort
    }

    // Send confirmation email to customer
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

    const emailCmd = [
      PYTHON_SCRIPT,
      "gmail",
      "send",
      `--to ${shellQuote(email)}`,
      `--subject ${shellQuote(`Appointment Confirmed — ${formatDate(date)} at ${formatTime(time)}`)}`,
      `--body ${shellQuote(emailBody)}`,
    ].join(" ");

    let emailSent = false;
    try {
      await execAsync(emailCmd, { timeout: 15000 });
      emailSent = true;
    } catch (err: any) {
      console.error("[schedule-appointment] Email error:", err.message);
      // Continue even if email fails
    }

    // Notify AMS team
    const teamEmailBody = [
      `New appointment scheduled via website:`,
      ``,
      `Customer: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${formatDate(date)}`,
      `Time: ${formatTime(time)} (IST)`,
      notes ? `Notes: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const teamEmailCmd = [
      PYTHON_SCRIPT,
      "gmail",
      "send",
      `--to ${shellQuote(AMS_EMAIL)}`,
      `--subject ${shellQuote(`📅 New Appointment: ${name} — ${formatDate(date)}`)}`,
      `--body ${shellQuote(teamEmailBody)}`,
    ].join(" ");

    try {
      await execAsync(teamEmailCmd, { timeout: 15000 });
    } catch (err: any) {
      console.error("[schedule-appointment] Team email error:", err.message);
    }

    return NextResponse.json({
      success: true,
      message: "Appointment scheduled successfully",
      details: {
        date: formatDate(date),
        time: formatTime(time),
        emailSent,
      },
    });
  } catch (error: any) {
    console.error("[schedule-appointment] Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call us directly at " + formatPhone(PHONE_NUMBER) },
      { status: 500 }
    );
  }
}

function shellQuote(s: string): string {
  return `'${s.replace(/'/g, "'\\''")}'`;
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
