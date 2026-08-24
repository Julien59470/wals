import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WALS — La plateforme des démarcheurs qui font grandir les commerces",
  description:
    "Créez, personnalisez et gérez des solutions digitales pour vos commerces : fidélité Wallet, roue digitale, démonstrations et pilotage multi-clients.",
  metadataBase: new URL("https://wals.fr"),
  openGraph: {
    title: "WALS — Développez votre activité auprès des commerces",
    description:
      "Une seule plateforme pour présenter, déployer et gérer vos solutions digitales chez les commerçants.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
