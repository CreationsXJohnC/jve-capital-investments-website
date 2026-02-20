import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navbar from "../components/Navbar";



export const metadata: Metadata = {
  title: "JVE Capital Investments LLC",
  description: "Residential & commercial contracting. Built by Jordan Edmunds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} bg-black text-white font-sans`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
