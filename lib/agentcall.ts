/**
 * Agentcall REST API client — direct HTTP calls for SMS.
 * API base: https://api.agentcall.co
 */

const AGENTCALL_BASE = "https://api.agentcall.co";
const AGENTCALL_AUTH = "Bearer ac_live_kGIkl_dzfujS_kdylrWbvt_Pa5tK7tcA";
export const FROM_NUMBER = "+16456541857";

export interface SendSMSResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Send an SMS via agentcall REST API.
 */
export async function sendSMS(to: string, body: string): Promise<SendSMSResult> {
  // Self-SMS blocked by carriers
  if (to === FROM_NUMBER) {
    return { success: false, error: "Cannot send SMS to own number" };
  }

  try {
    const res = await fetch(`${AGENTCALL_BASE}/v1/sms/send`, {
      method: "POST",
      headers: {
        Authorization: AGENTCALL_AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_NUMBER,
        to,
        body,
      }),
      signal: AbortSignal.timeout(10000),
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      const errMsg =
        typeof data.error === "string"
          ? data.error
          : data.error?.message || data.message || `HTTP ${res.status}`;
      return { success: false, error: errMsg };
    }

    return {
      success: true,
      messageId: data.id || data.messageId || "sent",
    };
  } catch (err: any) {
    console.error("[agentcall] sendSMS error:", err.message);
    return { success: false, error: err.message };
  }
}

/**
 * Build appointment confirmation SMS.
 */
export function appointmentSMS(
  customerName: string,
  date: string,
  time: string
): string {
  return [
    `Hi ${customerName}, your appointment with AMS IT Services is confirmed!`,
    `📅 ${date} at ${time} (IST)`,
    `We'll call you at this number. Questions? Call ${FROM_NUMBER}`,
  ].join("\n");
}
