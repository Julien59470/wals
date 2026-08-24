import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité — WALS",
  description: "Informations relatives au traitement des données de la liste d'attente WALS.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <a className="legal-back" href="/">← Retour à WALS</a>
        <h1>Politique de confidentialité</h1>
        <p className="legal-intro">Cette page concerne la liste d'attente permettant d'être averti lors de l'ouverture des accès partenaires WALS.</p>

        <section className="legal-section"><h2>Données collectées</h2><p>WALS collecte uniquement l'adresse email renseignée dans le formulaire d'inscription, ainsi que la date d'inscription et la source technique de la demande.</p></section>
        <section className="legal-section"><h2>Finalité et base légale</h2><p>L'adresse email est utilisée uniquement pour envoyer les informations liées à l'ouverture de WALS et aux accès partenaires. Le traitement repose sur votre consentement, exprimé lorsque vous demandez à être averti.</p></section>
        <section className="legal-section"><h2>Durée de conservation</h2><p>Les données sont conservées jusqu'à votre désinscription et, au plus tard, pendant trois ans après le dernier contact ou l'ouverture de WALS lorsqu'aucune relation n'est ensuite engagée.</p></section>
        <section className="legal-section"><h2>Destinataires</h2><p>Les données sont accessibles uniquement à WALS et aux sous-traitants techniques strictement nécessaires au fonctionnement de la plateforme et de son hébergement, notamment Supabase et Vercel.</p></section>
        <section className="legal-section"><h2>Vos droits</h2><p>Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ainsi que retirer votre consentement à tout moment. Vous pouvez également introduire une réclamation auprès de la CNIL.</p></section>
        <section className="legal-section"><h2>Contact relatif aux données</h2><p>Pour exercer vos droits ou poser une question relative à vos données : <a href="mailto:contact@wals.fr">contact@wals.fr</a>.</p></section>
      </div>
    </main>
  );
}
