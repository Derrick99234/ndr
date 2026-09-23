import { NextRequest, NextResponse } from "next/server";
import { sendContactInquiryEmail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const result = await sendContactInquiryEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "NDR Website Inquiry",
      message: message.trim(),
    });

    if (!result.success && result.reason === "Transporter not configured") {
      console.warn("SMTP credentials not fully set; message logged only.");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We will get back to you shortly.",
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message" },
      { status: 500 }
    );
  }
}
