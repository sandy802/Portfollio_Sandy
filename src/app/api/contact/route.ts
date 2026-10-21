import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, projectType, budget, timeline, message } = result.data;

    // Log the validated inquiry for server tracking
    console.log("=== NEW CLIENT INQUIRY RECEIVED ===");
    console.log({
      name,
      email,
      projectType,
      budget,
      timeline,
      message,
      receivedAt: new Date().toISOString(),
    });

    // In production, integrate Resend, Nodemailer, or Discord/Slack Webhook:
    // await resend.emails.send({ ... })

    return NextResponse.json({
      success: true,
      message: `Thank you ${name}! Your inquiry has been received. Sandesh will get back to you within 24 hours.`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again or reach out directly via WhatsApp." },
      { status: 500 }
    );
  }
}
