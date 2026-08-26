import type { Metadata } from "next";

import { PartnerExperience } from "@/components/landing/PartnerExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Future solution de fidélité en marque blanche pour partenaires — WALS",
  description: "Le programme partenaire WALS est en développement : marque blanche, démonstrations, tarifs de revente libres et futur cockpit pour agences, indépendants et commerciaux.",
  alternates: { canonical: "/partenaires" },
  openGraph: { type: "website", url: `${canonicalDomain}/partenaires`, title: "WALS partenaires — Programme en cours de développement", description: "Découvrez le futur parcours partenaire WALS et soyez prévenu dès son ouverture." },
};

export default function PartnersPage() { return <PartnerExperience/>; }
