export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "url('/public/vendor/landisent/images/hero-placeholder.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Precision Contracting, Design, and Project Management
          </h1>
          <p className="mt-6 text-lg text-slate-300">
            Commercial and residential expertise. Full-service general contracting backed by craftsmanship and reliability.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Get a Quote
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-slate-500 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}