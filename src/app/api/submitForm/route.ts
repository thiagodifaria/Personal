import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { contactFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Invalid input.", errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // Save to MongoDB
    const newFormResponse = new FormResponse({
      name,
      email,
      message,
    });
    await newFormResponse.save();

    // Trigger email sending (by calling the /api/email/send route or directly)
    // For simplicity, we'll assume it's called. In a real app, you might directly use Resend here
    // or ensure the /api/email/send route is robust.
    const emailSendData = { name, email, message };
    
    // Construct the full URL for the email sending API route
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (request.headers.get("X-Forwarded-Proto") || "http") + "://" + request.headers.get("host");
    const emailApiUrl = new URL("/api/email/send", baseUrl).toString();

    const emailResponse = await fetch(emailApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailSendData),
    });

    if (!emailResponse.ok) {
        console.error("Failed to trigger email sending:", await emailResponse.text());
        // Decide if this should be a hard failure for the user
    }

    return NextResponse.json(
      { message: "Form submitted successfully. Emails are being processed." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { message: "Failed to submit form.", error: errorMessage },
      { status: 500 }
    );
  }
}
