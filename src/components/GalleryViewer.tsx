"use client";

import { useEffect, useState, useCallback } from "react";

type Collection = {
  name: string;
  images: string[];
};

export default function GalleryViewer({ collections }: { collections: Collection[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCollectionIndex, setActiveCollectionIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const openCollection = (index: number) => {
    setActiveCollectionIndex(index);
    setActiveImageIndex(0);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const next = useCallback(() => {
    if (activeCollectionIndex === null) return;
    const len = collections[activeCollectionIndex].images.length;
    setActiveImageIndex((i) => (i + 1) % len);
  }, [activeCollectionIndex, collections]);

  const prev = useCallback(() => {
    if (activeCollectionIndex === null) return;
    const len = collections[activeCollectionIndex].images.length;
    setActiveImageIndex((i) => (i - 1 + len) % len);
  }, [activeCollectionIndex, collections]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, next, prev]);

  return (
    <section className="mt-10">
      {/* Collections Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((c, idx) => {
          const cover = c.images[0];
          return (
            <button
              key={c.name}
              onClick={() => openCollection(idx)}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow hover:bg-white/10 text-left"
            >
              <div className="aspect-[4/3] w-full bg-black/30">
                {cover ? (
                  <img
                    src={cover}
                    alt={`${c.name} cover`}
                    className="h-full w-full object-cover opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">No images</div>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="mt-1 text-xs text-gray-400">{c.images.length} photo{c.images.length === 1 ? "" : "s"}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {isOpen && activeCollectionIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="absolute inset-0" onClick={close} />
          <div className="relative z-10 mx-4 w-full max-w-5xl">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-300">
                {collections[activeCollectionIndex].name} — {activeImageIndex + 1} / {collections[activeCollectionIndex].images.length}
              </div>
              <button onClick={close} className="rounded bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20">Close</button>
            </div>

            <div className="mt-4 relative">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-black">
                <img
                  src={collections[activeCollectionIndex].images[activeImageIndex]}
                  alt={`${collections[activeCollectionIndex].name} photo ${activeImageIndex + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>

              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}