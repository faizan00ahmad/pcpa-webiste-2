import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchDialog } from "@/components/SearchDialog";
import "./globals.css";

// Fonts are bundled in src/fonts, so no network is needed in dev or build.
const inter = localFont({ src: "../fonts/inter-latin.woff2", variable: "--font-inter", display: "swap", weight: "100 900" });
const tight = localFont({ src: "../fonts/inter-tight-latin.woff2", variable: "--font-tight", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  title: { default: "PCPA – Pakistan Crop Protection Association", template: "%s | PCPA" },
  description: "Pakistan Crop Protection Association – membership, leadership, meetings, elections and downloads.",
};
export const viewport: Viewport = { themeColor: "#0b5d3b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${tight.variable}`}>
      <body>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <SearchDialog />
      </body>
    </html>
  );
}
