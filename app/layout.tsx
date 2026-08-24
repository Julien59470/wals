import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { isCanonicalProduction, siteUrl } from "@/lib/site";

import "./globals.css";
import "./motion.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "WALS — Plateforme pour revendeurs de solutions digitales aux commerces",
  description: "Fidélité digitale, roue interactive, démonstrations personnalisées et cockpit terrain : WALS prépare la plateforme des revendeurs, commerciaux indépendants et agences.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WALS — Transformez votre prospection terrain en offres digitales à revendre",
    description: "Fidélité digitale, roue interactive, démos personnalisées et cockpit revendeur. WALS est conçu pour la vente terrain aux commerces.",
    url: siteUrl,
    siteName: "WALS",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALS — Plateforme de vente terrain pour revendeurs",
    description: "Fidélité, roue, démos personnalisées et cockpit commercial pour construire une offre digitale à revendre aux commerces.",
  },
  robots: {
    index: isCanonicalProduction,
    follow: isCanonicalProduction,
    googleBot: { index: isCanonicalProduction, follow: isCanonicalProduction },
  },
};

export const viewport: Viewport = { themeColor: "#07192f", colorScheme: "light dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}<Analytics /><SpeedInsights /></body>
    </html>
  );
}
