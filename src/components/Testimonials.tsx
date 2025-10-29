export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Placeholder testimonial about quality, reliability, and professional communication.",
      author: "Client Name",
      company: "Company",
    },
    {
      quote:
        "Placeholder testimonial highlighting craftsmanship, attention to detail, and timely delivery.",
      author: "Client Name",
      company: "Company",
    },
    {
      quote:
        "Placeholder testimonial emphasizing professionalism, clear communication, and strong results.",
      author: "Client Name",
      company: "Company",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-lg bg-brand-dark/30 p-8 shadow">
              <p className="text-lg text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">— {t.author}, {t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}