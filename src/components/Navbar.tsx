"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded">
              <Image
                src="/assets/brand/JVE Capital - Logo .jpg"
                alt="JVE Capital logo"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">
              JVE Capital Investments LLC
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "text-sm font-medium transition-colors " +
                  (pathname === item.href
                    ? "text-white"
                    : "text-gray-300 hover:text-white")
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-100"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}