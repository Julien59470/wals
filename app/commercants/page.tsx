import type { Metadata } from "next";

import { MerchantExperience } from "@/components/landing/MerchantExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carte de fidélité digitale pour commerces — WALS",
  description: "Découvrez le parcours WALS pour les commerces : fidélité Wallet, récompenses, parrainage, campagnes et statistiques. Ouverture prochaine.",
  alternates: { canonical: "/commercants" },
  openGraph: { type: "website", url: `${canonicalDomain}/commercants`, title: "WALS pour les commerces — Fidélité digitale", description: "Découvrez l'expérience WALS pensée pour les commerces et soyez prévenu dès son ouverture." },
};

export default function MerchantsPage() { return <MerchantExperience/>; }
