import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import type React from "react";
import { NotificationEmailTemplate } from "@/components/email/NotificationEmailTemplate";
import { SenderEmailTemplate } from "@/components/email/SenderEmailTemplate";
import { siteData } from "@/config/siteData";

const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing required fields: name, email, or message" }, { status: 400 });
  }

  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not configured. Email sending is disabled.");
    return NextResponse.json(
      { message: "Email service is not configured. Please contact the site administrator." },
      { status: 503 }
    );
  }

  const resend = new Resend(resendApiKey);

  const fromAddressOwner = `Portfolio Contact <onboarding@resend.dev>`;
  const fromAddressSender = `${siteData.personalInfo.name} <onboarding@resend.dev>`;
  const ownerNotificationEmail = siteData.personalInfo.email;

  try {
    const ownerEmailResult = await resend.emails.send({
      from: fromAddressOwner,
      to: ownerNotificationEmail,
      subject: `Nova mensagem de ${name} via Portfólio`,
      react: NotificationEmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (ownerEmailResult.error) {
      console.error("Error sending notification email to owner:", ownerEmailResult.error);
      throw new Error(`Failed to send notification email: ${ownerEmailResult.error.message}`);
    }

    const senderEmailResult = await resend.emails.send({
      from: fromAddressSender,
      to: email,
      subject: "Obrigado pelo seu contato!",
      react: SenderEmailTemplate({ name }) as React.ReactElement,
    });

    if (senderEmailResult.error) {
      console.error("Error sending confirmation email to sender:", senderEmailResult.error);
      throw new Error(`Failed to send confirmation email: ${senderEmailResult.error.message}`);
    }

    return NextResponse.json({ message: "Emails sent successfully." }, { status: 200 });

  } catch (error) {
    console.error("Failed to send email(s):", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred during email processing.";
    return NextResponse.json(
      { message: "Failed to send email(s).", error: errorMessage },
      { status: 500 }
    );
  }
}