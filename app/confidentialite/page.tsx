import type { Metadata } from "next";
import Link from "next/link";

import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité", description: "Traitement des données transmises sur le site WALS.", alternates: { canonical: "/confidentialite" } };

export default function PrivacyPage(){
  return <><main className="legal-shell"><BrandMark/><span className="eyebrow dark">DONNÉES PERSONNELLES</span><h1>Politique de confidentialité</h1><p className="legal-intro">Cette politique décrit les traitements mis en place par la vitrine WALS pour les demandes commerçants, les demandes partenaires et l'inscription facultative aux informations de lancement.</p>
    <section className="legal-section"><h2>Données collectées</h2><p>Selon le parcours, WALS peut recevoir votre nom, votre adresse email professionnelle, le nom de votre commerce ou votre activité, un numéro de téléphone facultatif et le message que vous choisissez d'envoyer. Le serveur traite également des informations techniques nécessaires à la sécurité de la requête. Le dispositif anti-abus enregistre une empreinte hachée temporaire plutôt qu'une adresse IP brute dans la base applicative.</p></section>
    <section className="legal-section"><h2>Finalités</h2><ul><li>répondre à une demande liée à un commerce ;</li><li>qualifier une demande liée au futur programme partenaire ;</li><li>protéger les formulaires contre les abus ;</li><li>envoyer les informations de lancement uniquement lorsque la case facultative correspondante a été cochée.</li></ul><p>Les demandes commerçants et partenaires sont enregistrées avec une audience distincte. Le fait d'envoyer une demande ne vous inscrit pas automatiquement à des communications de lancement.</p></section>
    <section className="legal-section"><h2>Bases juridiques</h2><p>Le traitement d'une demande repose, selon sa nature, sur les mesures précontractuelles demandées par la personne ou sur l'intérêt légitime de WALS à répondre à une sollicitation professionnelle. Les informations de lancement reposent sur un consentement séparé et facultatif, qui peut être retiré à tout moment.</p></section>
    <section className="legal-section"><h2>Destinataires et sous-traitants</h2><p>Les données sont accessibles aux personnes WALS qui en ont besoin pour traiter la demande et aux prestataires techniques nécessaires au fonctionnement du service. Le projet utilise notamment Supabase pour la base de données et prévoit un déploiement applicatif sur Vercel. La liste doit être mise à jour si l'infrastructure de production change.</p></section>
    <section className="legal-section"><h2>Durée de conservation</h2><p>Les données de prospection et de prise de contact sont destinées à être conservées pendant la durée nécessaire au suivi de la demande puis, en l'absence de relation contractuelle, au maximum trois ans à compter du dernier contact pertinent. Une adresse inscrite aux informations de lancement reste active jusqu'au retrait du consentement ou jusqu'à la fin de la finalité concernée. Les compteurs anti-abus sont temporaires.</p></section>
    <section className="legal-section"><h2>Vos droits</h2><p>Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation des données vous concernant, vous opposer à certains traitements et retirer un consentement lorsqu'il constitue la base du traitement. Vous pouvez également introduire une réclamation auprès de la CNIL.</p></section>
    <section className="legal-section"><h2>Désinscription</h2><p>Une page dédiée permet de retirer l'adresse des informations de lancement : <Link href="/desinscription">wals.fr/desinscription</Link>. La réponse du formulaire ne révèle pas si une adresse était auparavant enregistrée.</p></section>
    <section className="legal-section"><h2>Contact</h2><p>Pour toute demande relative à vos données : <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p></section>
  </main><SiteFooter/></>;
}
