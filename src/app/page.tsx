import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import LatestVideos from "../components/LatestVideos";
import YouTubeLite from "../components/YouTubeLite";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />

      <About />
      {/* Featured single video above testimonials */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-12 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Featured Video</h2>
            <a
              href="https://www.youtube.com/watch?v=Pxv3DtRfxRg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand hover:underline"
            >
              Watch on YouTube →
            </a>
          </div>
          <YouTubeLite
            id="Pxv3DtRfxRg"
            title="Quality You Can See — JVE Capital Project Spotlight"
          />
        </div>
      </section>
      <Testimonials />
      <LatestVideos />
      <Footer />
    </main>
  );
}
