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
      title="Démarche d'accessibilité"
      intro={<p>WALS applique des bonnes pratiques d'accessibilité dès sa phase de développement. Cette page ne constitue pas une déclaration officielle de conformité RGAA.</p>}
    >
      <section className="legal-section">
        <h2>Mesures intégrées</h2>
        <ul className="legal-check-list">
          <li>navigation et actions principales accessibles au clavier ;</li>
          <li>focus visible sur les éléments interactifs ;</li>
          <li>structure HTML sémantique avec titres, liens, formulaires et zones de navigation identifiables ;</li>
          <li>libellés et messages d'état accessibles pour les formulaires ;</li>
          <li>prise en charge de la préférence système « réduire les animations » ;</li>
          <li>mise en page responsive vérifiée sur ordinateur, tablette et mobile ;</li>
          <li>contenu critique disponible sans dépendre d'une animation JavaScript.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>État de conformité</h2>
        <p>Aucun audit RGAA complet n'a encore été publié pour WALS. Le site ne se déclare donc ni « conforme » ni « partiellement conforme ». Une déclaration réglementaire ne sera publiée que si un audit formel permet de l'établir et si le cadre applicable à l'éditeur l'exige.</p>
      </section>

      <section className="legal-section">
        <h2>Évolution lors du lancement</h2>
        <p>Le site actuel est une vitrine de pré-lancement et ne permet pas de conclure un achat ou un abonnement. Si WALS ouvre ultérieurement un service de commerce électronique destiné aux consommateurs, les exigences d'accessibilité applicables à ce service devront être réévaluées avant sa mise à disposition.</p>
      </section>

      <section className="legal-section">
        <h2>Signaler une difficulté</h2>
        <p>Si vous rencontrez un obstacle d'accès au contenu ou à une fonctionnalité, écrivez à <a href={`mailto:${contactEmail}`}>{contactEmail}</a> en précisant la page et le problème rencontré.</p>
      </section>
    </LegalPageShell>
  );
}
