import type { Metadata } from "next";

import { AudienceGateway } from "@/components/landing/AudienceGateway";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "WALS — Fidélité digitale pour commerces et partenaires",
  description: "WALS propose deux parcours : fidélité digitale pour les commerces et infrastructure en marque blanche pour les partenaires.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: canonicalDomain, title: "WALS — Deux parcours, une même technologie", description: "Fidélisez directement votre commerce ou construisez votre propre offre de fidélité digitale avec WALS." },
};

const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "WALS", url: canonicalDomain, description: "Plateforme de fidélité digitale avec un parcours commerçant et un parcours partenaire en marque blanche.", inLanguage: "fr-FR" };

export default function HomePage() {
  return <><AudienceGateway/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
