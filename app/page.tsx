import type { Metadata } from "next";

import { AudienceGateway } from "@/components/landing/AudienceGateway";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "WALS — Fidélité digitale pour commerces et partenaires",
  description: "Découvrez WALS, ses parcours dédiés aux commerçants et aux partenaires en marque blanche, puis soyez prévenu dès l'ouverture.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: canonicalDomain, title: "WALS — Une technologie, deux parcours", description: "Fidélité digitale pour les commerces et programme en marque blanche pour les partenaires. Ouverture prochaine." },
};

const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "WALS", url: canonicalDomain, description: "Plateforme de fidélité digitale avec un parcours commerçant et un parcours partenaire en marque blanche.", inLanguage: "fr-FR" };

export default function HomePage() {
  return <><AudienceGateway/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
