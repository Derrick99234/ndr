import nodemailer from "nodemailer";

function getTransporter() {
  const host = process.env.SMTP_HOST || "mail.nightofdivinereversal.org";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true"; // false for port 587 (STARTTLS)
  const user = process.env.SMTP_USER || "info@nightofdivinereversal.org";
  const pass = process.env.SMTP_PASS || "";

  if (!pass) {
    console.warn("SMTP_PASS is not set in environment variables. Email will not be sent.");
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      // Do not fail on invalid certs in case of self-signed server certs
      rejectUnauthorized: false,
    },
  });
}

export interface AttendeeData {
  ticketId: string;
  fullName: string;
  email: string;
  phone?: string;
  city?: string;
  mode: "virtual" | "physical";
  isFirstTime: string;
  prayerLineInterest: boolean;
  prayerRequest?: string;
  registeredAt?: string;
}

export async function sendRegistrationEmails(attendee: AttendeeData) {
  const transporter = getTransporter();
  if (!transporter) return { success: false, reason: "Transporter not configured" };

  const senderEmail = process.env.SMTP_USER || "info@nightofdivinereversal.org";
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@nightofdivinereversal.org";

  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(245, 158, 11, 0.3);">
      <h2 style="color: #f59e0b; margin-top: 0;">🎉 New NDR Attendee Registration</h2>
      <p style="font-size: 15px; color: #d1d5db;">A new attendee has registered for the Night of Divine Reversal:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Ticket ID:</td>
          <td style="padding: 10px; color: #fbbf24; font-weight: bold;">${attendee.ticketId}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Full Name:</td>
          <td style="padding: 10px; color: #ffffff;">${attendee.fullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Email:</td>
          <td style="padding: 10px; color: #ffffff;"><a href="mailto:${attendee.email}" style="color: #60a5fa;">${attendee.email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; color: #ffffff;">${attendee.phone || "Not provided"}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Location/City:</td>
          <td style="padding: 10px; color: #ffffff;">${attendee.city || "Not provided"}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Attendance Mode:</td>
          <td style="padding: 10px; color: #ffffff; text-transform: uppercase;">${attendee.mode}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">First Time:</td>
          <td style="padding: 10px; color: #ffffff;">${attendee.isFirstTime === "yes" ? "Yes" : "No"}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Prayer Line Interest:</td>
          <td style="padding: 10px; color: #ffffff;">${attendee.prayerLineInterest ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; color: #9ca3af; font-weight: bold; vertical-align: top;">Prayer Request:</td>
          <td style="padding: 10px; color: #ffffff; line-height: 1.5;">${attendee.prayerRequest || "None submitted"}</td>
        </tr>
      </table>
      
      <p style="margin-top: 24px; font-size: 12px; color: #6b7280; text-align: center;">
        Sent automatically from NDR Live Portal • ${new Date().toUTCString()}
      </p>
    </div>
  `;

  const attendeeEmailHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #060913; color: #f3f4f6; padding: 32px 20px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(245, 158, 11, 0.35);">
      <div style="text-align: center; margin-bottom: 24px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #f59e0b; background: rgba(245, 158, 11, 0.12); padding: 4px 14px; border-radius: 9999px; border: 1px solid rgba(245, 158, 11, 0.3);">
          Official Registration Pass
        </span>
        <h1 style="color: #ffffff; margin: 16px 0 6px 0; font-size: 24px;">Night of Divine Reversal</h1>
        <p style="color: #9ca3af; margin: 0; font-size: 14px;">The Ark of Light for All Nations</p>
      </div>

      <div style="background: rgba(17, 24, 39, 0.7); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 10px; padding: 20px; text-align: center; margin-bottom: 24px;">
        <div style="font-size: 12px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.08em;">Your Attendee E-Pass Number</div>
        <div style="font-size: 28px; font-weight: 800; color: #fbbf24; letter-spacing: 0.08em; margin: 8px 0;">${attendee.ticketId}</div>
        <div style="font-size: 13px; color: #d1d5db;">Registered to: <strong>${attendee.fullName}</strong> (${attendee.mode.toUpperCase()} ACCESS)</div>
      </div>

      <div style="font-size: 14px; color: #d1d5db; line-height: 1.6; margin-bottom: 24px;">
        <p>Dear <strong>${attendee.fullName}</strong>,</p>
        <p>Your registration for the <strong>Night of Divine Reversal</strong> has been confirmed! Prepare your heart for an extraordinary atmosphere of prophetic worship, apostolic declarations, and irreversible divine turnarounds.</p>
        
        <div style="background: rgba(255, 255, 255, 0.03); border-left: 3px solid #f59e0b; padding: 12px 16px; margin: 20px 0;">
          <div>📅 <strong>Date:</strong> Friday, October 2, 2026</div>
          <div style="margin-top: 6px;">⏰ <strong>Time:</strong> 10:00 PM GMT+1 (All-Night Encounter)</div>
          <div style="margin-top: 6px;">📍 <strong>Access:</strong> ${attendee.mode === "physical" ? "The Ark of Light for All Nations, Alausa, Ikeja, Lagos (Physical Group)" : "Global Live Broadcast (YouTube & Facebook Live)"}</div>
        </div>

        <p>Join the live broadcast links below on service night:</p>
        <div style="display: flex; gap: 12px; margin-top: 14px; text-align: center;">
          <a href="https://www.youtube.com/@isaiahmacwealth" style="display: inline-block; background: #dc2626; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; margin-right: 8px;">
            📺 Watch on YouTube
          </a>
          <a href="https://www.facebook.com/GospelPillars" style="display: inline-block; background: #1877f2; color: #ffffff; padding: 10px 18px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px;">
            📘 Watch on Facebook
          </a>
        </div>
      </div>

      <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
        For inquiries or prayer assistance: <a href="mailto:info@nightofdivinereversal.org" style="color: #fbbf24;">info@nightofdivinereversal.org</a> | +234 703 690 5175
      </div>
    </div>
  `;

  try {
    const results = await Promise.allSettled([
      // Send to Admin
      transporter.sendMail({
        from: `"NDR Registration Desk" <${senderEmail}>`,
        to: receiverEmail,
        subject: `[NDR Registration] ${attendee.fullName} (${attendee.ticketId})`,
        html: adminEmailHtml,
      }),
      // Send E-Pass to Attendee
      transporter.sendMail({
        from: `"Night of Divine Reversal" <${senderEmail}>`,
        to: attendee.email,
        subject: `Your NDR E-Pass: ${attendee.ticketId} - Night of Divine Reversal`,
        html: attendeeEmailHtml,
      }),
    ]);

    return { success: true, results };
  } catch (error) {
    console.error("Failed to send registration email:", error);
    return { success: false, error };
  }
}

export interface ContactInquiry {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function sendContactInquiryEmail(inquiry: ContactInquiry) {
  const transporter = getTransporter();
  if (!transporter) return { success: false, reason: "Transporter not configured" };

  const senderEmail = process.env.SMTP_USER || "info@nightofdivinereversal.org";
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@nightofdivinereversal.org";

  const adminEmailHtml = `
    <div style="font-family: Arial, sans-serif; background-color: #0b0f19; color: #f3f4f6; padding: 30px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid rgba(245, 158, 11, 0.3);">
      <h2 style="color: #f59e0b; margin-top: 0;">📬 New Contact Form Message</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Sender Name:</td>
          <td style="padding: 10px; color: #ffffff;">${inquiry.name}</td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Sender Email:</td>
          <td style="padding: 10px; color: #ffffff;"><a href="mailto:${inquiry.email}" style="color: #60a5fa;">${inquiry.email}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
          <td style="padding: 10px; color: #9ca3af; font-weight: bold;">Subject:</td>
          <td style="padding: 10px; color: #fbbf24;">${inquiry.subject || "NDR Website Inquiry"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; color: #9ca3af; font-weight: bold; vertical-align: top;">Message:</td>
          <td style="padding: 10px; color: #ffffff; line-height: 1.6; white-space: pre-wrap;">${inquiry.message}</td>
        </tr>
      </table>
      <p style="margin-top: 24px; font-size: 12px; color: #6b7280; text-align: center;">
        Sent from NDR Contact Page • Reply directly to this email to respond to ${inquiry.name}.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"NDR Portal Contact" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: inquiry.email,
      subject: `[NDR Inquiry] ${inquiry.subject || "Message from " + inquiry.name}`,
      html: adminEmailHtml,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact inquiry email:", error);
    return { success: false, error };
  }
}
