"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "loading" }
    | { type: "success"; message: string }
    | { type: "error"; message: string }
  >({ type: "idle" });

  // Compute minimum selectable start date = today + 14 days
  const minStartDate = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 14);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  })();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const description = String(formData.get("description") || "");
    if (!name || !email || !description) {
      setStatus({ type: "error", message: "Name, email, and description are required." });
      return;
    }

    // Client-side validation: start date must be at least 14 days from today
    const startDateStr = String(formData.get("startDate") || "");
    if (startDateStr) {
      const threshold = new Date();
      threshold.setHours(0, 0, 0, 0);
      threshold.setDate(threshold.getDate() + 14);
      const startDate = new Date(`${startDateStr}T00:00:00`);
      if (startDate < threshold) {
        setStatus({ type: "error", message: "Please choose a start date at least 14 days from today." });
        return;
      }
    }

    // Validate optional media files: max 5 files, each <= ~10MB, only image/video
    const mediaFiles = formData.getAll("media").filter((v) => v instanceof File) as File[];
    if (mediaFiles.length > 5) {
      setStatus({ type: "error", message: "Please select up to 5 files." });
      return;
    }
    for (const file of mediaFiles) {
      if (file.size > 10 * 1024 * 1024) {
        setStatus({ type: "error", message: `File ${file.name} is larger than 10MB.` });
        return;
      }
      if (!(file.type.startsWith("image/") || file.type.startsWith("video/"))) {
        setStatus({ type: "error", message: `Unsupported file type: ${file.name}.` });
        return;
      }
    }

    try {
      setStatus({ type: "loading" });
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
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
          Have a project in mind? Submit your idea below and let's build something exceptional together.
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
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Project Budget (USD)</label>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">$</span>
              <input
                type="number"
                name="budget"
                min="0"
                step="0.01"
                className="mt-1 w-full rounded-md border border-white/10 bg-black/60 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none pl-7 pr-3"
                placeholder="25000"
              />
            </div>
            <p className="mt-1 text-xs text-gray-400">Enter your estimated total budget in US dollars.</p>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Approved Plans</label>
            <select
              name="approvedPlans"
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select status
              </option>
              <option value="yes">Yes — plans approved</option>
              <option value="no">No — plans not approved</option>
            </select>
            <p className="mt-1 text-xs text-gray-400">Indicate whether the project has approved plans.</p>
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-200">Desired Start Date</label>
            <input
              type="date"
              name="startDate"
              min={minStartDate}
              className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
            />
            <p className="mt-1 text-xs text-gray-400">Select the preferred project start date.</p>
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
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-200">Project Media (photos or videos)</label>
          <input
            type="file"
            name="media"
            multiple
            accept="image/*,video/*"
            className="mt-1 w-full rounded-md border border-white/10 bg-black/60 px-3 py-2 text-white placeholder-gray-400 focus:border-white/30 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-400">Optional. Up to 5 files, max ~10MB each. Accepted: images or videos.</p>
        </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black shadow-sm transition hover:bg-brand disabled:opacity-60"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending…" : "Get a Quote"}
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