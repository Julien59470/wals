import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookies et mesure d'audience",
  description: "Informations sur les outils de mesure d'audience et de performance utilisés par WALS.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPageShell
      eyebrow="TRACEURS & MESURE"
      title="Cookies et mesure d'audience"
      intro={<p>WALS limite volontairement les outils de suivi et n'utilise actuellement aucun dispositif publicitaire ou de personnalisation comportementale.</p>}
    >
      <section className="legal-section">
        <h2>Aucune publicité ciblée</h2>
        <p>Le site n'intègre actuellement ni régie publicitaire, ni pixel publicitaire, ni contenu social tiers destiné au suivi des visiteurs.</p>
      </section>

      <section className="legal-section">
        <h2>Vercel Web Analytics</h2>
        <p>Web Analytics permet à WALS de mesurer la fréquentation générale du site, notamment les pages consultées, les référents, les appareils et les navigateurs utilisés. Ce service fonctionne sans cookie publicitaire et fournit des données agrégées destinées à comprendre l'usage du site.</p>
      </section>

      <section className="legal-section">
        <h2>Vercel Speed Insights</h2>
        <p>Speed Insights mesure les performances techniques du site et les Core Web Vitals afin d'améliorer la rapidité et la qualité d'affichage sur ordinateur, tablette et mobile.</p>
      </section>

      <section className="legal-section">
        <h2>Consentement</h2>
        <p>Les outils actuellement utilisés ne servent ni à la publicité ciblée ni à la personnalisation commerciale. Aucun bandeau de consentement n'est donc affiché pour ces seuls usages.</p>
        <p>Si WALS active ultérieurement un outil nécessitant votre consentement, celui-ci sera demandé avant le dépôt ou la lecture des traceurs concernés.</p>
      </section>

      <section className="legal-section">
        <h2>Évolution des outils utilisés</h2>
        <p>Cette page sera mise à jour en cas d'ajout ou de modification d'un outil de mesure, de publicité, de personnalisation ou de contenu tiers.</p>
        <p>Pour en savoir plus sur le traitement de vos données personnelles et vos droits, consultez la <Link href="/confidentialite">politique de confidentialité</Link>.</p>
      </section>
    </LegalPageShell>
  );
}
