export default function GalleryPage() {
  const base = "/assets/gallery/Willams Residences";
  const images = [
    `${base}/Photo Dec 06 2023, 2 27 07 PM.jpg`,
    `${base}/Photo Dec 06 2023, 2 27 12 PM.jpg`,
    `${base}/Photo Jun 05 2024, 10 12 27 AM.jpg`,
    `${base}/Photo Jun 06 2024, 2 50 59 PM.jpg`,
    `${base}/Photo Nov 16 2023, 3 58 45 PM.jpg`,
    `${base}/Photo Nov 21 2023, 10 09 02 AM.jpg`,
    `${base}/Photo May 16 2024, 11 03 52 AM.jpg`,
    `${base}/Photo May 29 2024, 1 01 11 PM.jpg`,
    `${base}/Photo May 29 2024, 12 48 18 PM.jpg`,
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold sm:text-4xl">Project Gallery</h1>
      <p className="mt-3 max-w-2xl text-gray-300">
        A selection of completed work showcasing craftsmanship, finish quality, and attention to detail.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src) => (
          <figure
            key={src}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow hover:bg-white/10"
          >
            <div className="aspect-[4/3] w-full bg-black/30">
              <img
                src={src}
                alt="JVE Capital project"
                className="h-full w-full object-cover opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
            <figcaption className="p-4 text-sm text-gray-300">Williams Residences</figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}