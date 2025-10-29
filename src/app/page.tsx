import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />

      <About />
      <Testimonials />
      <Footer />
    </main>
  );
}
