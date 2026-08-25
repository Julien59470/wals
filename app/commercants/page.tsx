import type { Metadata } from "next";

import { MerchantExperience } from "@/components/landing/MerchantExperience";
import { canonicalDomain } from "@/lib/site";

export const metadata: Metadata = {
  title: "Carte de fidélité digitale pour commerces — WALS",
  description: "Fidélité Wallet, récompenses, parrainage, campagnes et statistiques : découvrez le parcours WALS destiné directement aux commerces de proximité.",
  alternates: { canonical: "/commercants" },
  openGraph: { type: "website", url: `${canonicalDomain}/commercants`, title: "WALS pour les commerces — Faites revenir vos clients", description: "Une expérience de fidélité digitale pensée pour rester simple au comptoir et visible dans le téléphone du client." },
};

export default function MerchantsPage() { return <MerchantExperience/>; }
