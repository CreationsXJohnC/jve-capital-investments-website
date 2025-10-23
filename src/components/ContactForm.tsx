"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      companyOrProject: String(formData.get("companyOrProject") || ""),
      serviceArea: String(formData.get("serviceArea") || ""),
      description: String(formData.get("description") || ""),
    };

    if (!payload.name || !payload.email || !payload.description) {
      setStatus({ type: "error", message: "Name, email, and description are required." });
      return;
    }

    try {
      setStatus({ type: "loading" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");

      setStatus({ type: "success", message: "Thanks! We’ll be in touch shortly." });
      form.reset();
    } catch (err: any) {
      setStatus({ type: "error", message: err.message || "Something went wrong." });
    }
  }

  return (
    <section id="contact" className="w-full">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur sm:p-8">
        <h2 className="text-xl font-semibold text-white">Get In Touch</h2>
        <p className="mt-1 text-sm text-gray-300">
          Tell us about your project. Commercial or residential, we’ve got you covered.
        </p>
        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="Your full name"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Phone</label>
            <input
              name="phone"
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="(555) 555-5555"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Company or Project Name</label>
            <input
              name="companyOrProject"
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="Business name or project title"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Service Area</label>
            <input
              name="serviceArea"
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="City, region, or state"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-200">Project Description</label>
            <textarea
              name="description"
              required
              className="mt-1 min-h-[120px] w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              placeholder="Describe your project, timeline, budget, and any details."
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-gray-100 disabled:opacity-60"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending…" : "Send Message"}
            </button>
            {status.type === "error" && (
              <p className="text-sm text-red-400">{status.message}</p>
            )}
            {status.type === "success" && (
              <p className="text-sm text-green-400">{status.message}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}