import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    const name = (data.name || "").toString().trim();
    const phone = (data.phone || "").toString().trim();
    const email = (data.email || "Not provided").toString().trim();
    const condition = (data.condition || "Not specified").toString().trim();
    const message = (data.message || "No message").toString().trim();

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: "Name and phone are required" }, { status: 400 });
    }

    const subject = `New Consultation Request — ${name} (${condition})`;
    const textBody = [
      "New consultation request from drsurabhinikam.com:",
      "",
      `Name:      ${name}`,
      `Phone:     ${phone}`,
      `Email:     ${email}`,
      `Condition: ${condition}`,
      "",
      "Message:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Dr. Surabhi Website" <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL!,
      subject,
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
