import type { Metadata } from "next";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibilité",
  description: "Démarche d'accessibilité numérique du site WALS.",
  alternates: { canonical: "/accessibilite" },
};

export default function AccessibilityPage() {
  return (
    <LegalPageShell
      eyebrow="ACCESSIBILITÉ NUMÉRIQUE"
      title="Accessibilité"
      intro={<p>WALS intègre l'accessibilité numérique dans la conception de son site afin de proposer une expérience claire, lisible et utilisable sur tous les principaux formats d'écran.</p>}
    >
      <section className="legal-section">
        <h2>Principes appliqués</h2>
        <ul className="legal-check-list">
          <li>navigation et actions principales accessibles au clavier ;</li>
          <li>focus visible sur les éléments interactifs ;</li>
          <li>structure sémantique des contenus et formulaires ;</li>
          <li>libellés et messages d'état accessibles ;</li>
          <li>prise en charge de la préférence système de réduction des animations ;</li>
          <li>mise en page adaptée à l'ordinateur, la tablette et le mobile ;</li>
          <li>contenu essentiel disponible indépendamment des animations.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Démarche d'amélioration continue</h2>
        <p>WALS poursuit l'amélioration de l'accessibilité de ses interfaces au fil de leur évolution. Une déclaration de conformité sera publiée si elle devient applicable et après la réalisation d'un audit formel permettant d'en établir le niveau.</p>
      </section>

      <section className="legal-section">
        <h2>Évolution du service</h2>
        <p>Les exigences d'accessibilité applicables seront réévaluées à mesure que de nouveaux services ou parcours transactionnels seront proposés.</p>
      </section>

      <section className="legal-section">
        <h2>Signaler une difficulté</h2>
        <p>Si vous rencontrez un obstacle d'accès à un contenu ou à une fonctionnalité, écrivez à <a href={`mailto:${contactEmail}`}>{contactEmail}</a> en précisant la page concernée et la difficulté rencontrée.</p>
      </section>
    </LegalPageShell>
  );
}
