// This is a conceptual API route for sending emails.
// Actual implementation requires Resend SDK and API key.
import { NextResponse } from "next/server";
// import { Resend } from "resend"; // Uncomment when Resend is set up
import { NotificationEmailTemplate } from "@/components/email/NotificationEmailTemplate";
import { SenderEmailTemplate } from "@/components/email/SenderEmailTemplate";
import { siteData } from "@/config/siteData";

// const resend = new Resend(process.env.RESEND_API_KEY); // Uncomment when Resend is set up

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not found. Email sending will be mocked.");
    // return NextResponse.json({ message: "Email sending mocked due to missing API key." }, { status: 200 });
  }

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // ---- Placeholder for Resend logic ----
    // In a real scenario, you would use the Resend SDK here:
    /*
    // Send notification email to site owner
    await resend.emails.send({
      from: `Portfolio Contact <noreply@yourdomain.com>`, // Replace with your verified Resend domain
      to: siteData.personalInfo.email,
      subject: `Nova mensagem de ${name} via Portfólio`,
      react: NotificationEmailTemplate({ name, email, message }) as React.ReactElement,
    });

    // Send confirmation email to sender
    await resend.emails.send({
      from: `${siteData.personalInfo.name} <noreply@yourdomain.com>`, // Replace
      to: email,
      subject: "Obrigado pelo seu contato!",
      react: SenderEmailTemplate({ name }) as React.ReactElement,
    });
    */
    // ---- End of Placeholder ----

    console.log("Mock email sending: ");
    console.log("To Owner:", siteData.personalInfo.email, "Subject: Nova mensagem de", name);
    console.log("To Sender:", email, "Subject: Obrigado pelo seu contato!");


    return NextResponse.json({ message: "Emails sent successfully (mocked)" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: "Failed to send email", error: errorMessage }, { status: 500 });
  }
}
