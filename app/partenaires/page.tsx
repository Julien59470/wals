import type { Metadata } from "next";

import { PartnerExperience } from "@/components/landing/PartnerExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solution de fidélité en marque blanche pour partenaires — WALS",
  description: "Découvrez le programme partenaire WALS : marque blanche, démonstrations, tarifs de revente libres et cockpit dédié. Ouverture prochaine.",
  alternates: { canonical: "/partenaires" },
  openGraph: { type: "website", url: `${canonicalDomain}/partenaires`, title: "WALS partenaires — Fidélité en marque blanche", description: "Découvrez le parcours partenaire WALS et soyez prévenu dès son ouverture." },
};

export default function PartnersPage() { return <PartnerExperience/>; }
