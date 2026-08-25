import type { Metadata } from "next";

import { PartnerExperience } from "@/components/landing/PartnerExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solution de fidélité en marque blanche pour partenaires — WALS",
  description: "Créez votre marque, vos offres et vos tarifs. WALS prépare la technologie, les démonstrations et le cockpit pour partenaires, agences et commerciaux.",
  alternates: { canonical: "/partenaires" },
  openGraph: { type: "website", url: `${canonicalDomain}/partenaires`, title: "WALS partenaires — Votre marque devant, notre technologie derrière", description: "Construisez votre propre offre de fidélité digitale avec vos prix, vos prospects et vos clients." },
};

export default function PartnersPage() { return <PartnerExperience/>; }
