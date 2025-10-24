"use client";

import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "svg" | "png" | "pngWhite";
  alt?: string;
  priority?: boolean;
  className?: string;
};

const sizeMap = {
  sm: { container: "h-6 w-24", sizes: "96px" },
  md: { container: "h-8 w-32", sizes: "128px" },
  lg: { container: "h-12 w-48", sizes: "192px" },
  xl: { container: "h-16 w-60", sizes: "240px" },
} as const;

export default function Logo({
  size = "md",
  variant = "svg",
  alt = "JVE Capital Investments LLC logo",
  priority = false,
  className = "",
}: LogoProps) {
  const { container, sizes } = sizeMap[size];
  const src =
    variant === "png"
      ? "/assets/brand/JVE Capital - transparent-large.png"
      : variant === "pngWhite"
      ? "/assets/brand/JVE Capital - White-large.png"
      : "/assets/brand/JVE Capital - large.svg";

  return (
    <div className={`relative ${container} overflow-hidden`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-contain ${className}`} priority={priority} />
    </div>
  );
}