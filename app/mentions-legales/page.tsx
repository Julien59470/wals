import type { Metadata } from "next";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { legalIdentity, legalIdentityReady } from "@/lib/legal";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales et informations sur l'éditeur et l'hébergement du site WALS.",
  alternates: { canonical: "/mentions-legales" },
};

const optional = (value: string | null, fallback: string) => value || fallback;

export default function LegalPage() {
  return (
    <LegalPageShell
      eyebrow="INFORMATIONS LÉGALES"
      title="Mentions légales"
      intro={<p>Informations relatives à l'éditeur, au responsable de publication et à l'hébergement du site WALS.</p>}
    >
      {!legalIdentityReady ? (
        <div className="legal-alert" role="note">
          <strong>Configuration juridique incomplète.</strong>
          <p>Le site n'invente aucune identité légale. Tant que les coordonnées réelles de l'éditeur ne sont pas renseignées dans l'environnement de production, l'indexation publique est désactivée par le code.</p>
        </div>
      ) : null}

      <section className="legal-section">
        <h2>Éditeur du site</h2>
        <dl className="legal-data-list">
          <div><dt>Nom / dénomination</dt><dd>{optional(legalIdentity.name, "À renseigner")}</dd></div>
          <div><dt>Forme juridique</dt><dd>{optional(legalIdentity.legalForm, "À renseigner si applicable")}</dd></div>
          <div><dt>Capital social</dt><dd>{optional(legalIdentity.capital, "À renseigner si applicable")}</dd></div>
          <div><dt>Adresse</dt><dd>{optional(legalIdentity.address, "À renseigner")}</dd></div>
          <div><dt>SIREN</dt><dd>{optional(legalIdentity.siren, "À renseigner")}</dd></div>
          <div><dt>RCS</dt><dd>{optional(legalIdentity.rcs, "À renseigner si applicable")}</dd></div>
          <div><dt>RNE</dt><dd>{optional(legalIdentity.rne, "À renseigner si applicable")}</dd></div>
          <div><dt>TVA intracommunautaire</dt><dd>{optional(legalIdentity.vat, "À renseigner si applicable")}</dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${contactEmail}`}>{contactEmail}</a></dd></div>
          <div><dt>Téléphone</dt><dd>{optional(legalIdentity.contactPhone, "À renseigner")}</dd></div>
        </dl>
      </section>

      <section className="legal-section">
        <h2>Direction de la publication</h2>
        <p>{optional(legalIdentity.publicationDirector, "Nom du directeur ou de la directrice de la publication à renseigner")}</p>
      </section>

      <section className="legal-section">
        <h2>Hébergement</h2>
        <dl className="legal-data-list">
          <div><dt>Hébergeur</dt><dd>{optional(legalIdentity.hostName, "À renseigner")}</dd></div>
          <div><dt>Adresse</dt><dd>{optional(legalIdentity.hostAddress, "À renseigner")}</dd></div>
          <div><dt>Téléphone</dt><dd>{optional(legalIdentity.hostPhone, "À renseigner")}</dd></div>
        </dl>
        <p className="legal-muted">Lorsque l'application est exécutée sur Vercel et qu'aucune valeur d'hébergement n'est surchargée, le site utilise les coordonnées publiques de Vercel Inc. configurées dans le code.</p>
      </section>

      <section className="legal-section">
        <h2>Propriété intellectuelle</h2>
        <p>Les textes, interfaces, illustrations réalisées pour WALS, éléments graphiques et signes distinctifs originaux sont protégés par les règles applicables de propriété intellectuelle. Les noms, marques, logos et services de tiers cités restent la propriété de leurs titulaires respectifs.</p>
      </section>

      <section className="legal-section">
        <h2>État du service</h2>
        <p>WALS est en cours de développement. Le site ne permet actuellement ni achat, ni souscription payante, ni conclusion d'un contrat de service. Les interfaces, fonctionnalités annoncées comme « en préparation » et montants utilisés dans le simulateur partenaire sont des démonstrations non contractuelles.</p>
      </section>
    </LegalPageShell>
  );
}
