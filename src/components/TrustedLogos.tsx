import Image from "next/image";

export default function TrustedLogos() {
  const logos = [
    { src: "/assets/logos/pittsburgh-restoration-logo.png", alt: "Pittsburgh Restoration" },
    { src: "/assets/logos/smoot-construction-logo.png", alt: "Smoot Construction" },
    { src: "/assets/logos/turner-construction-company-logo.png", alt: "Turner Construction Company" },
  ];

  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="text-sm uppercase tracking-widest text-slate-600">Trusted by</p>
        <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3">
          {logos.map((logo) => (
            <div key={logo.src} className="flex h-20 items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}