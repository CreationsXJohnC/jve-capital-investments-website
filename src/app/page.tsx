import ContactForm from "../components/ContactForm";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TrustedLogos from "../components/TrustedLogos";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <TrustedLogos />
      <Services />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                Commercial & Residential Contracting
              </h1>
              <p className="mt-4 max-w-xl text-base text-gray-300">
                JVE Capital Investments LLC, led by CEO Jordan Edmunds, delivers
                end-to-end construction services across commercial and residential sectors.
                From tenant improvements and build-outs to remodels and new construction.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  General contracting
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Commercial build-outs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Residential remodels
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Project management
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
