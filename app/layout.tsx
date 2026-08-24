import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import "./stability.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WALS — La plateforme terrain en cours de développement",
  description:
    "WALS construit une plateforme pour préparer, présenter et piloter des solutions digitales auprès des commerces. Fidélité, roue digitale et cockpit multi-commerces.",
  metadataBase: new URL("https://wals.fr"),
  openGraph: {
    title: "WALS — La plateforme terrain des démarcheurs",
    description:
      "Fidélité digitale, roue digitale et cockpit multi-commerces. WALS est actuellement en cours de développement.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
