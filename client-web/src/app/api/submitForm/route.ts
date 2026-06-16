
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import FormResponse from "@/models/formResponse.model";
import { contactFormSchemaServer } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const validation = contactFormSchemaServer.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.flatten(issue => ({
        message: issue.message,
        path: issue.path.join('.'),
      })).fieldErrors;
      
      return NextResponse.json(
        { message: "Invalid input.", errors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    const newFormResponse = new FormResponse({
      name,
      email,
      message,
    });
    await newFormResponse.save();
    
    const emailSendData = { name, email, message };
    
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (request.headers.get("X-Forwarded-Proto") || "http") + "://" + request.headers.get("host");
    const emailApiUrl = new URL("/api/email/send", baseUrl).toString();

    const emailResponse = await fetch(emailApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailSendData),
    });

    if (!emailResponse.ok) {
        console.error("Failed to trigger email sending:", await emailResponse.text());
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