import { NextRequest, NextResponse } from "next/server";
import { AttendeeData, sendRegistrationEmails } from "@/lib/mail";
import { appendToGoogleSheet } from "@/lib/googleSheets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      city,
      mode = "virtual",
      isFirstTime = "yes",
      prayerLineInterest = false,
      prayerRequest = "",
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required" },
        { status: 400 }
      );
    }

    // Generate unique Ticket ID
    const ticketId = `NDR13-${Math.floor(100000 + Math.random() * 900000)}`;

    const attendee: AttendeeData = {
      ticketId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "",
      city: city?.trim() || "",
      mode,
      isFirstTime,
      prayerLineInterest: !!prayerLineInterest,
      prayerRequest: prayerRequest?.trim() || "",
      registeredAt: new Date().toISOString(),
    };

    // Forward to Google Sheets and send confirmation & admin emails concurrently
    // (We use Promise.allSettled so neither Google Sheets nor SMTP blocks or fails the attendee's ticket issuance)
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendToGoogleSheet(attendee),
      sendRegistrationEmails(attendee),
    ]);

    console.log("Registration results:", {
      ticketId,
      sheetStatus: sheetResult.status === "fulfilled" ? sheetResult.value : "error",
      emailStatus: emailResult.status === "fulfilled" ? emailResult.value : "error",
    });

    return NextResponse.json({
      success: true,
      ticketId,
      message: "Registration successful! Your NDR E-Pass has been generated.",
    });
  } catch (error) {
    console.error("API /api/register error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while processing registration" },
      { status: 500 }
    );
  }
}
