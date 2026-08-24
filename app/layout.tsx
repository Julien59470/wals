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
  title: "WALS — Lancez votre business de fidélité digitale en marque blanche",
  description: "Créez votre marque, construisez vos offres, choisissez vos prix et développez votre portefeuille de commerces. WALS fournit la technologie de fidélité digitale et les outils pour piloter votre activité.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WALS — Votre marque. Vos prix. Vos clients. Notre technologie.",
    description: "Lancez votre propre activité de fidélité digitale : marque blanche, offres personnalisées, revenus mensuels récurrents et Cockpit pour gérer vos commerces.",
    url: siteUrl,
    siteName: "WALS",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALS — Lancez votre business de fidélité digitale",
    description: "WALS fournit les outils. Le business vous appartient.",
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
