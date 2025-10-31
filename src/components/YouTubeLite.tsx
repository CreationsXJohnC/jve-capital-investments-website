"use client";

import { useState } from "react";

export default function YouTubeLite({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  const src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`;
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-black/20 bg-black shadow">
      {!play ? (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="group relative block h-full w-full"
          aria-label={`Play ${title}`}
        >
          {/* Use plain img to avoid preloading heavy logic; it's fine here */}
          <img src={thumb} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-full bg-white/95 p-4 shadow-lg group-hover:bg-white">
              <svg width="36" height="36" fill="#ff0000" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      ) : (
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
      {/* Caption bar under the video */}
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="line-clamp-1 text-slate-200">{title}</span>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-red-600 px-3 py-1 font-semibold text-white hover:bg-red-500"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}