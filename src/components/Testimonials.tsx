export default function Testimonials() {

  type Testimonial = { quote: string; author: string; company?: string };

  const testimonials: Testimonial[] = [
    {
      quote:
        "JVE Capital delivered flawless concrete work from start to finish. The team was professional, precise, and finished the job ahead of schedule with outstanding quality.",
      author: "Mark R.",
    },
    {
      quote:
        "Our new heated floors turned out even better than we imagined. Jordan’s team combined craftsmanship and attention to detail to create comfort and perfection in every step.",
      author: "Andrea L.",
    },
    {
      quote:
        "JVE Capital transformed our space with expert framing and a custom room design that fits our home perfectly. The results exceeded our expectations in both quality and craftsmanship.",
      author: "Che L.",
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">What Clients Say</h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-lg bg-brand-dark/30 p-8 shadow">
              <p className="text-lg text-slate-200">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-400">— {t.author}{t.company ? `, ${t.company}` : ""}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}