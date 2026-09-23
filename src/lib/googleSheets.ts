import { AttendeeData } from "./mail";

export async function appendToGoogleSheet(attendee: AttendeeData) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl || !webhookUrl.startsWith("http")) {
    // If webhook URL is not set yet, return gracefully
    return { success: false, reason: "Google Sheets Webhook URL not configured yet" };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ticketId: attendee.ticketId,
        fullName: attendee.fullName,
        email: attendee.email,
        phone: attendee.phone ? `'${attendee.phone.trim()}` : "",
        city: attendee.city || "",
        mode: attendee.mode,
        isFirstTime: attendee.isFirstTime,
        prayerLineInterest: attendee.prayerLineInterest ? "Yes" : "No",
        prayerRequest: attendee.prayerRequest || "",
      }),
      // Use standard redirect follow mode because Google Apps Script redirects after doPost
      redirect: "follow",
    });

    if (response.ok) {
      return { success: true };
    } else {
      console.warn("Google Sheet webhook returned non-OK status:", response.status);
      return { success: false, status: response.status };
    }
  } catch (error) {
    console.error("Error posting to Google Sheets Webhook:", error);
    return { success: false, error };
  }
}
