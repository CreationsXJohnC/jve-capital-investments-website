"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
  ];
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const scheduleShow = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setVisible(true);
      }, 1500);
    };
    const onScroll = () => {
      setVisible(false);
      scheduleShow();
    };
    scheduleShow();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <header className={
      "sticky top-0 z-50 border-b border-black/10 bg-white transition-transform duration-300 " +
      (visible ? "translate-y-0" : "-translate-y-full")
    }>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-0 -ml-6">
            <Logo size="xl" variant="pngWhite" className="-mr-2" />
            <span className="-ml-13 text-lg font-semibold tracking-wide text-brand max-[565px]:hidden">
              Capital Investments LLC
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/"
                    ? "rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-brand-light"
                    : "text-sm font-medium transition-colors " +
                      (pathname === item.href
                        ? "text-black"
                        : "text-black/70 hover:text-black")
                }
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/gallery"
              className="rounded-md bg-brand px-3 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-brand-light"
            >
              Gallery
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
