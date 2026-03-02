// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

// 1. Configure each font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",  // becomes a CSS variable
  display: "swap",
});


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "dR CleaN House — Cleaning & Construction Services",
  description:
    "Professional house cleaning and construction services serving the Inland Empire, Orange County, and Los Angeles areas.",
};

// 2. Apply both variables to <html>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

