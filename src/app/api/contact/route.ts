import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Lazily initialize SMTP to avoid build-time errors when env vars are not set
    const host = process.env.SMTP_HOST || "";
    const portStr = process.env.SMTP_PORT || "";
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";
    const toEmail = process.env.CONTACT_TO || "jve.capital@gmail.com";

    const port = Number(portStr) || 465;
    const secure = port === 465; // true for 465, false for other ports

    const smtpConfigured = host && user && pass;
    const transporter = smtpConfigured
      ? nodemailer.createTransport({
          host,
          port,
          secure,
          auth: { user, pass },
        })
      : null;
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

    if (!transporter) {
      return NextResponse.json(
        { error: "Email service not configured. Set SMTP_* and CONTACT_TO." },
        { status: 500 }
      );
    }

    const info = await transporter.sendMail({
      from: `JVE Capital Website <${user}>`,
      to: toEmail,
      replyTo: email,
      subject,
      html,
      attachments: attachments?.map((a) => ({ filename: a.filename, content: a.content })),
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}