import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-dark via-black to-brand-dark text-white">
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
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Building Excellence with Integrity, Precision, and Vision
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              From historic landmarks to modern developments, JVE Capital Investments LLC delivers craftsmanship, reliability, and results that stand the test of time. Founded by Jordan Edmunds, a seasoned operations and construction manager with over a decade of hands-on experience, JVE specializes in both commercial and residential projects—executed safely, efficiently, and with exceptional attention to detail. 
 Whether you're envisioning a large-scale renovation, a community restoration, or a new build, our team brings the professionalism, expertise, and commitment needed to turn your ideas into lasting structures.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/gallery"
                className="rounded-full border border-brand-muted px-6 py-3 text-base font-semibold text-white hover:bg-black"
              >
                View Projects
              </Link>
            </div>
          </div>
          {/* Right: Contact form, half width on large screens */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}