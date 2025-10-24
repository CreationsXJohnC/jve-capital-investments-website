"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 -ml-6">
            <Logo size="xl" variant="pngWhite" />
            <span className="text-lg font-semibold tracking-wide text-black">
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
                    ? "text-black"
                    : "text-black/70 hover:text-black")
                }
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-brand-light"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}