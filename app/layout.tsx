import type { Metadata } from "next";
import { Allura, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import GlobalFloatingTools from "./GlobalFloatingTools";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

const allura = Allura({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Roof Builders & Developers",
  description: "Crafting landmarks and building legacies through exceptional real estate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable} ${allura.variable}`}>{children}<GlobalFloatingTools /></body>
    </html>
  );
}
