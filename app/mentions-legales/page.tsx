import type { Metadata } from "next";

import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";
import { legalIdentity } from "@/lib/legal";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales", description: "Mentions légales du site WALS.", alternates: { canonical: "/mentions-legales" } };

export default function LegalPage(){
  const identityReady = Boolean(legalIdentity.name && legalIdentity.address && legalIdentity.siren);
  return <><main className="legal-shell"><BrandMark/><span className="eyebrow dark">INFORMATIONS LÉGALES</span><h1>Mentions légales</h1><p className="legal-intro">Cette page est structurée pour recevoir les informations légales définitives de l'entité qui exploitera WALS.</p>
    {!identityReady ? <p className="legal-notice"><strong>Ouverture commerciale non finalisée :</strong> l'identité juridique complète n'est pas présente dans la configuration du projet. WALS ne fabrique pas de dénomination, SIREN, capital ou adresse. Ces champs doivent être renseignés dans les variables d'environnement avant la mise en production commerciale.</p> : null}
    <section className="legal-section"><h2>Éditeur</h2><p>{legalIdentity.name || "Dénomination juridique à renseigner"}{legalIdentity.legalForm ? ` — ${legalIdentity.legalForm}` : ""}{legalIdentity.capital ? ` — capital ${legalIdentity.capital}` : ""}</p><p>{legalIdentity.address || "Adresse du siège à renseigner"}</p><p>SIREN : {legalIdentity.siren || "à renseigner"}{legalIdentity.rcs ? ` — RCS ${legalIdentity.rcs}` : ""}{legalIdentity.vat ? ` — TVA ${legalIdentity.vat}` : ""}</p><p>Contact : <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p></section>
    <section className="legal-section"><h2>Hébergement</h2><p>{legalIdentity.hostName || "Hébergeur de production à renseigner"}</p><p>{legalIdentity.hostAddress || "Adresse de l'hébergeur à renseigner"}{legalIdentity.hostPhone ? ` — ${legalIdentity.hostPhone}` : ""}</p></section>
    <section className="legal-section"><h2>Propriété intellectuelle</h2><p>Les éléments originaux du site WALS, notamment sa marque, ses textes, ses interfaces et ses créations graphiques, sont protégés par les règles applicables de propriété intellectuelle. Les marques et services tiers éventuellement cités restent la propriété de leurs titulaires respectifs.</p></section>
    <section className="legal-section"><h2>Informations produit</h2><p>WALS est en cours de développement. Les aperçus d'interface, fonctions indiquées comme en préparation et descriptions du futur programme partenaire ne constituent pas une offre contractuelle. Les conditions commerciales et techniques applicables seront celles publiées lors de l'ouverture effective.</p></section>
  </main><SiteFooter/></>;
}
