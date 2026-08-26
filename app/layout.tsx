import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { canonicalDomain, contactEmail, isIndexableProduction, siteName, siteUrl } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "WALS — Fidélité digitale pour commerces et partenaires", template: "%s | WALS" },
  description: "WALS prépare une plateforme de fidélité digitale pour les commerces et un programme en marque blanche pour les partenaires.",
  applicationName: siteName,
  alternates: { canonical: "/" },
  robots: isIndexableProduction ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    url: canonicalDomain,
    title: "WALS — Fidélité digitale pour commerces et partenaires",
    description: "Découvrez les parcours WALS pour les commerces et les partenaires, et soyez prévenu dès leur ouverture.",
  },
  twitter: { card: "summary_large_image", title: "WALS — Fidélité digitale", description: "Deux parcours : commerces et partenaires. Ouverture prochaine." },
  icons: { icon: "/wals-logo.png", apple: "/wals-logo.png" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${canonicalDomain}/#website`, url: canonicalDomain, name: siteName, inLanguage: "fr-FR" },
    { "@type": "Organization", "@id": `${canonicalDomain}/#organization`, name: siteName, url: canonicalDomain, logo: `${canonicalDomain}/wals-logo.png`, email: contactEmail },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
