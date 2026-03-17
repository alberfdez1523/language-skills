import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";

import "lenis/dist/lenis.css";

import { LenisProvider } from "@/components/lenis-provider";
import { RevealObserver } from "@/components/reveal-observer";

import "./globals.css";

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Language Skills — Alberto Fernández Palomo",
  description:
    "Cross-agent language skills for Python, Java, Rust, C++, TypeScript, React, R, PHP, and Ruby.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body>
        <LenisProvider />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
