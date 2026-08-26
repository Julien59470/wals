import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { UnsubscribeForm } from "@/components/site/UnsubscribeForm";

export const metadata: Metadata = {
  title: "Désinscription",
  description: "Retirer une adresse des informations de lancement WALS.",
  alternates: { canonical: "/desinscription" },
  robots: { index: false, follow: true },
};

export default function UnsubscribePage() {
  return (
    <LegalPageShell
      className="unsubscribe-page"
      eyebrow="PRÉFÉRENCES DE COMMUNICATION"
      title="Ne plus recevoir les informations de lancement"
      intro={<p>Vous pouvez retirer votre adresse de la liste de lancement WALS à tout moment. La demande est gratuite et prend effet sur tous les parcours associés à l'adresse indiquée.</p>}
    >
      <div className="unsubscribe-layout">
        <div className="unsubscribe-panel">
          <span className="unsubscribe-step">01</span>
          <h2>Saisissez l'adresse concernée</h2>
          <p>Nous ne confirmons jamais si une adresse était inscrite afin d'éviter qu'un tiers puisse vérifier l'existence d'une inscription.</p>
          <UnsubscribeForm />
        </div>
        <aside className="unsubscribe-aside" aria-label="Informations sur la désinscription">
          <span className="unsubscribe-step">02</span>
          <h2>Ce que la demande change</h2>
          <ul>
            <li>L'inscription de lancement associée à l'adresse est supprimée.</li>
            <li>La suppression s'applique aux parcours commerçant et partenaire liés à cette adresse.</li>
            <li>Vous pourrez vous réinscrire plus tard si vous changez d'avis.</li>
          </ul>
          <p>Pour une demande d'accès, de rectification ou d'effacement plus large, consultez la <Link href="/confidentialite">politique de confidentialité</Link>.</p>
        </aside>
      </div>
      <div className="unsubscribe-back"><Link href="/">← Retour à l'accueil WALS</Link></div>
    </LegalPageShell>
  );
}
