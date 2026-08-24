import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import "./motion.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://wals.fr"),
  title: "WALS — Plateforme pour revendeurs de solutions digitales aux commerces",
  description: "Fidélité digitale, roue interactive, démonstrations personnalisées et cockpit commercial : WALS prépare la plateforme de vente terrain des revendeurs, commerciaux indépendants et agences.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "WALS — Transformez votre prospection terrain en offres digitales à revendre",
    description: "Fidélité digitale, roue interactive, démos personnalisées et cockpit revendeur. WALS est conçu pour vendre aux commerces sur le terrain.",
    url: "https://wals.fr",
    siteName: "WALS",
    images: [{ url: "/wals-logo.png", width: 445, height: 181, alt: "WALS" }],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALS — Plateforme de vente terrain pour revendeurs",
    description: "Fidélité, roue, démos personnalisées et cockpit commercial pour construire une offre digitale à revendre aux commerces.",
    images: ["/wals-logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#07192f", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
