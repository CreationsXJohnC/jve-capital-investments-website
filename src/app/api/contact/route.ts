import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let name = "";
    let email = "";
    let phone = "";
    let companyOrProject = "";
    let serviceArea = "";
    let budget = "";
    let approvedPlans = "";
    let startDate = "";
    let description = "";
    let attachments: { filename: string; content: Buffer }[] | undefined;

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      name = String(form.get("name") || "");
      email = String(form.get("email") || "");
      phone = String(form.get("phone") || "");
      companyOrProject = String(form.get("companyOrProject") || "");
      serviceArea = String(form.get("serviceArea") || "");
      budget = String(form.get("budget") || "");
      approvedPlans = String(form.get("approvedPlans") || "");
      startDate = String(form.get("startDate") || "");
      description = String(form.get("description") || "");

      const files = form
        .getAll("media")
        .filter((v) => v instanceof File) as File[];

      if (files.length) {
        // Server-side validation: up to 5 files, each <= ~10MB
        if (files.length > 5) {
          return NextResponse.json({ error: "Please select up to 5 files." }, { status: 400 });
        }
        for (const file of files) {
          if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
              { error: `File ${file.name} is larger than 10MB.` },
              { status: 400 }
            );
          }
        }
        attachments = await Promise.all(
          files.map(async (file) => ({
            filename: file.name,
            content: Buffer.from(await file.arrayBuffer()),
          }))
        );
      }
    } else {
      // Fallback: JSON body
      const body = await req.json();
      name = String(body?.name || "");
      email = String(body?.email || "");
      phone = String(body?.phone || "");
      companyOrProject = String(body?.companyOrProject || "");
      serviceArea = String(body?.serviceArea || "");
      budget = String(body?.budget || "");
      approvedPlans = String(body?.approvedPlans || "");
      startDate = String(body?.startDate || "");
      description = String(body?.description || "");
    }

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate start date is at least 14 days from today, if provided
    if (startDate) {
      const threshold = new Date();
      threshold.setHours(0, 0, 0, 0);
      threshold.setDate(threshold.getDate() + 14);
      const start = new Date(`${startDate}T00:00:00`);
      if (start < threshold) {
        return NextResponse.json(
          { error: "Desired start date must be at least 14 days from today." },
          { status: 400 }
        );
      }
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
        <p><strong>Budget (USD):</strong> ${budget || "N/A"}</p>
        <p><strong>Approved Plans:</strong> ${approvedPlans || "N/A"}</p>
        <p><strong>Desired Start Date:</strong> ${startDate || "N/A"}</p>
        <p><strong>Description:</strong></p>
        <p>${(description || "").replace(/\n/g, "<br/>")}</p>
        ${attachments?.length ? `<p><strong>Attachments:</strong> ${attachments.length} file(s) included.</p>` : ""}
      </div>
    `;

    // For initial testing, Resend supports `onboarding@resend.dev`. Use a verified domain later.
    const { data, error } = await resend.emails.send({
      from: "JVE Capital Website <onboarding@resend.dev>",
      to: "jve.capital@gmail.com",
      replyTo: email,
      subject,
      html,
      attachments,
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