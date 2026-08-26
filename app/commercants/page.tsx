import type { Metadata } from "next";

import { MerchantExperience } from "@/components/landing/MerchantExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Future carte de fidélité digitale pour commerces — WALS",
  description: "WALS est en développement : découvrez le futur parcours Wallet, récompenses, parrainage, campagnes et statistiques destiné aux commerces de proximité.",
  alternates: { canonical: "/commercants" },
  openGraph: { type: "website", url: `${canonicalDomain}/commercants`, title: "WALS pour les commerces — Plateforme en développement", description: "Découvrez l'expérience de fidélité digitale que WALS prépare pour les commerces et inscrivez-vous pour être prévenu de sa sortie." },
};

export default function MerchantsPage() { return <MerchantExperience/>; }
