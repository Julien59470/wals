import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";

export const metadata: Metadata = {
  title: "Cookies et mesure d'audience",
  description: "Informations sur les traceurs, Web Analytics et Speed Insights utilisés sur WALS.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPageShell
      eyebrow="TRACEURS & MESURE"
      title="Cookies et mesure d'audience"
      intro={<p>Le site WALS limite volontairement les outils de suivi pendant sa phase de développement. Cette page décrit les mécanismes présents dans le code actuel.</p>}
    >
      <section className="legal-section">
        <h2>Pas de publicité ciblée ni de réseau social embarqué</h2>
        <p>Le site n'intègre actuellement ni régie publicitaire, ni pixel publicitaire, ni bouton social chargé depuis une plateforme tierce. Aucun outil de personnalisation publicitaire n'est configuré dans l'application.</p>
      </section>

      <section className="legal-section">
        <h2>Vercel Web Analytics</h2>
        <p>Web Analytics mesure notamment les pages vues, les référents, le type d'appareil, le navigateur et des informations géographiques agrégées. Vercel indique que cette solution n'utilise pas de cookies pour identifier les visiteurs, génère un identifiant haché temporaire et ne permet pas de suivre une personne entre différents sites.</p>
      </section>

      <section className="legal-section">
        <h2>Vercel Speed Insights</h2>
        <p>Speed Insights mesure les Core Web Vitals et d'autres informations techniques de performance. Vercel indique que les points de données sont anonymes et ne sont pas reliés à un visiteur ni à une adresse IP, et qu'ils ne permettent pas de reconstruire une session de navigation.</p>
      </section>

      <section className="legal-section">
        <h2>Pourquoi aucun bandeau de consentement n'est affiché actuellement ?</h2>
        <p>Le code actuel n'intègre ni régie publicitaire, ni pixel publicitaire, ni widget social. Vercel indique que Web Analytics fonctionne sans cookies et avec des données agrégées anonymisées, et que Speed Insights n'associe pas ses mesures à un visiteur ou à une adresse IP. Sur cette base, aucun bandeau n'est injecté par l'application actuelle.</p>
        <p>Cette décision doit rester liée à la configuration réellement déployée : l'exemption de consentement pour une mesure d'audience n'est valable que si les critères applicables sont effectivement respectés. Tout nouveau traceur ou usage sortant de ce cadre devra être bloqué avant consentement.</p>
      </section>

      <section className="legal-section">
        <h2>Évolution de la configuration</h2>
        <p>Cette page doit être mise à jour avant toute activation d'un nouvel outil de mesure, de publicité, de personnalisation ou de contenu tiers susceptible de déposer ou lire des informations sur le terminal.</p>
        <p>Pour le traitement des données personnelles et vos droits, consultez la <Link href="/confidentialite">politique de confidentialité</Link>.</p>
      </section>
    </LegalPageShell>
  );
}
