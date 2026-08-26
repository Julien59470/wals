import type { Metadata } from "next";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { legalIdentity, legalIdentityReady } from "@/lib/legal";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales relatives à l'éditeur et à l'hébergement du site WALS.",
  alternates: { canonical: "/mentions-legales" },
};

function LegalRow({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return <div><dt>{label}</dt><dd>{value}</dd></div>;
}

export default function LegalPage() {
  return (
    <LegalPageShell
      eyebrow="INFORMATIONS LÉGALES"
      title="Mentions légales"
      intro={<p>Cette page présente les informations relatives à l'éditeur du site WALS, à la direction de la publication et à son hébergement.</p>}
    >
      {!legalIdentityReady ? (
        <div className="legal-alert" role="note">
          <strong>WALS est actuellement en pré-lancement.</strong>
          <p>Les informations d'identification complètes de l'éditeur seront publiées avant l'ouverture commerciale du service.</p>
        </div>
      ) : null}

      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <dl className="legal-data-list">
          <LegalRow label="Nom / dénomination" value={legalIdentity.name} />
          <LegalRow label="Forme juridique" value={legalIdentity.legalForm} />
          <LegalRow label="Capital social" value={legalIdentity.capital} />
          <LegalRow label="Adresse" value={legalIdentity.address} />
          <LegalRow label="SIREN" value={legalIdentity.siren} />
          <LegalRow label="RCS" value={legalIdentity.rcs} />
          <LegalRow label="RNE" value={legalIdentity.rne} />
          <LegalRow label="TVA intracommunautaire" value={legalIdentity.vat} />
          <div><dt>Email</dt><dd><a href={`mailto:${contactEmail}`}>{contactEmail}</a></dd></div>
          <LegalRow label="Téléphone" value={legalIdentity.contactPhone} />
        </dl>
      </section>

      {legalIdentity.publicationDirector ? (
        <section className="legal-section">
          <h2>Direction de la publication</h2>
          <p>{legalIdentity.publicationDirector}</p>
        </section>
      ) : null}

      {legalIdentity.hostName || legalIdentity.hostAddress || legalIdentity.hostPhone ? (
        <section className="legal-section">
          <h2>Hébergement</h2>
          <dl className="legal-data-list">
            <LegalRow label="Hébergeur" value={legalIdentity.hostName} />
            <LegalRow label="Adresse" value={legalIdentity.hostAddress} />
            <LegalRow label="Téléphone" value={legalIdentity.hostPhone} />
          </dl>
        </section>
      ) : null}

      <section className="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>Les textes, interfaces, illustrations, éléments graphiques et signes distinctifs originaux de WALS sont protégés par les règles applicables en matière de propriété intellectuelle. Les noms, marques, logos et services de tiers cités restent la propriété de leurs titulaires respectifs.</p>
      </section>

      <section className="legal-section">
        <h2>Disponibilité du service</h2>
        <p>WALS est actuellement proposé en pré-lancement. Le site permet de découvrir les parcours commerce et partenaire et de s'inscrire pour être informé de leur ouverture. Aucun achat ni abonnement payant n'est proposé à ce stade.</p>
      </section>
    </LegalPageShell>
  );
}
