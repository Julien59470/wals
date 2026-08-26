import type { Metadata } from "next";

import { AudienceGateway } from "@/components/landing/AudienceGateway";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "WALS — Fidélité digitale en développement",
  description: "WALS est en cours de développement. Découvrez le futur parcours commerçant et le futur parcours partenaire en marque blanche.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: canonicalDomain, title: "WALS — Deux parcours en préparation, une même technologie", description: "Découvrez le futur WALS pour les commerces et les futurs partenaires, puis soyez prévenu du lancement." },
};

const structuredData = { "@context": "https://schema.org", "@type": "WebSite", name: "WALS", url: canonicalDomain, description: "Plateforme de fidélité digitale en développement avec un parcours commerçant et un parcours partenaire en marque blanche.", inLanguage: "fr-FR" };

export default function HomePage() {
  return <><AudienceGateway/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
