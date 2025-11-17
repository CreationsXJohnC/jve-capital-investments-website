import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-20 pt-20 overflow-hidden bg-gradient-to-b from-brand-dark via-black to-brand-dark text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/assets/backgrounds/DSCF7030.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          {/* Left: Hero text */}
          <div>
            <h1 className="text-brand text-4xl font-semibold tracking-tight sm:text-5xl">
              Building Excellence with Integrity, Precision, and Vision
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              From historic landmarks to modern developments, JVE Capital Investments LLC delivers craftsmanship, reliability, and results that stand the test of time. Founded by Jordan Edmunds, a seasoned operations and construction manager with over a decade of hands-on experience, JVE specializes in both commercial and residential projects—executed safely, efficiently, and with exceptional attention to detail. 
 Whether you're envisioning a large-scale renovation, a community restoration, or a new build, our team brings the professionalism, expertise, and commitment needed to turn your ideas into lasting structures.
            </p>
            <div className="mt-10 flex items-start gap-6">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-md border border-brand-muted px-5 py-2.5 text-base font-semibold text-white hover:bg-black text-center whitespace-nowrap"
              >
                View Projects
              </Link>
              <ul className="ml-2 sm:ml-4 font-bold italic text-xl sm:text-2xl leading-snug space-y-2">
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Project Oversight</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Budgeting and Cost Estimation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Roof Inspection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Flooring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Additions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Remodeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1 text-white">✓</span>
                  <span className="mt-2 text-brand">Subcontractor Coordination</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Right: Contact form, half width on large screens */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}