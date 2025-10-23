import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, companyOrProject, serviceArea, description } = body || {};

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const subject = `New Inquiry from ${name}${companyOrProject ? ` - ${companyOrProject}` : ""}`;
    const html = `
      <div style="font-family: Arial, sans-serif;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company/Project:</strong> ${companyOrProject || "N/A"}</p>
        <p><strong>Service Area:</strong> ${serviceArea || "N/A"}</p>
        <p><strong>Description:</strong></p>
        <p>${(description || "").replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    // For initial testing, Resend supports `onboarding@resend.dev`. Use a verified domain later.
    const { data, error } = await resend.emails.send({
      from: "JVE Capital Website <onboarding@resend.dev>",
      to: "jve.capital@gmail.com",
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}