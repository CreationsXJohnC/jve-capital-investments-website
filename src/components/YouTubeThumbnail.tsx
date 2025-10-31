"use client";

import Image from "next/image";

export default function YouTubeThumbnail({ id, title }: { id: string; title: string }) {
  const href = `https://www.youtube.com/watch?v=${id}`;
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-xl border border-black/20 shadow"
      aria-label={`Watch ${title} on YouTube`}
    >
      <Image
        src={thumb}
        alt={title}
        width={480}
        height={270}
        className="transition-transform duration-200 group-hover:scale-[1.02]"
        priority={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
        <span className="text-sm font-semibold line-clamp-1">{title}</span>
        <span className="rounded bg-red-600 px-2.5 py-0.5 text-xs font-bold">Watch on YouTube</span>
      </div>
    </a>
  );
}