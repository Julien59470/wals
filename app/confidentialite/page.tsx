import type { Metadata } from "next";
import Link from "next/link";

import { BrandMark } from "@/components/site/BrandMark";
import { SiteFooter } from "@/components/site/SiteFooter";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité", description: "Traitement des données transmises sur le site WALS.", alternates: { canonical: "/confidentialite" } };

export default function PrivacyPage(){
  return <><main className="legal-shell"><BrandMark/><span className="eyebrow dark">DONNÉES PERSONNELLES</span><h1>Politique de confidentialité</h1><p className="legal-intro">WALS est actuellement en développement. Cette politique décrit notamment le traitement de l'adresse email transmise pour être prévenu de l'ouverture du parcours commerçant ou partenaire.</p>
    <section className="legal-section"><h2>Données collectées</h2><p>Le formulaire de lancement collecte uniquement votre adresse email et le parcours concerné. Le serveur traite également des informations techniques nécessaires à la sécurité de la requête. Le mécanisme anti-abus conserve dans la base applicative une empreinte hachée temporaire plutôt que l'adresse IP brute.</p></section>
    <section className="legal-section"><h2>Finalités</h2><ul><li>enregistrer votre demande d'information sur le lancement WALS ;</li><li>vous envoyer l'information d'ouverture correspondant au parcours choisi ;</li><li>protéger le formulaire contre les abus.</li></ul><p>L'inscription à la liste de lancement ne constitue ni une demande d'accès, ni une commande, ni la création d'un compte.</p></section>
    <section className="legal-section"><h2>Base juridique</h2><p>L'inscription aux informations de lancement repose sur votre consentement : le fait de saisir votre email et de cliquer sur « Me prévenir au lancement » exprime une demande spécifique de recevoir cette information. Vous pouvez retirer ce consentement à tout moment.</p></section>
    <section className="legal-section"><h2>Destinataires et sous-traitants</h2><p>Les données sont accessibles aux personnes WALS qui en ont besoin pour gérer le lancement et aux prestataires techniques nécessaires au fonctionnement du service. Le projet utilise notamment Supabase pour la base de données et prévoit un déploiement applicatif sur Vercel. Cette liste sera mise à jour si l'infrastructure de production change.</p></section>
    <section className="legal-section"><h2>Durée de conservation</h2><p>L'adresse inscrite à la liste de lancement reste active jusqu'au retrait de votre consentement ou jusqu'à la fin de la finalité de lancement. Les compteurs anti-abus sont temporaires.</p></section>
    <section className="legal-section"><h2>Vos droits</h2><p>Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation des données vous concernant et retirer votre consentement. Vous pouvez également introduire une réclamation auprès de la CNIL.</p></section>
    <section className="legal-section"><h2>Désinscription</h2><p>Vous pouvez retirer votre adresse depuis la page <Link href="/desinscription">wals.fr/desinscription</Link>. La réponse du formulaire ne révèle pas si une adresse était auparavant enregistrée.</p></section>
    <section className="legal-section"><h2>Contact</h2><p>Pour toute demande relative à vos données : <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p></section>
  </main><SiteFooter/></>;
}
