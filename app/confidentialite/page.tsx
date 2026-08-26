import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { legalIdentity } from "@/lib/legal";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Informations sur le traitement des données personnelles par le site WALS.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  const controller = legalIdentity.name || "l'éditeur du site WALS indiqué dans les mentions légales";

  return (
    <LegalPageShell
      eyebrow="DONNÉES PERSONNELLES"
      title="Politique de confidentialité"
      intro={<p>WALS est en développement. La seule donnée demandée par les formulaires publics de lancement est votre adresse email, afin de vous prévenir lorsque le parcours choisi ouvrira.</p>}
    >
      <section className="legal-section">
        <h2>Responsable du traitement</h2>
        <p>Le responsable du traitement est {controller}. Ses informations d'identification sont publiées dans les <Link href="/mentions-legales">mentions légales</Link>. Pour toute question relative aux données personnelles : <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      </section>

      <section className="legal-section">
        <h2>Données collectées et caractère obligatoire</h2>
        <p>Pour rejoindre la liste de lancement, l'adresse email est obligatoire : sans elle, WALS ne peut pas envoyer l'information demandée. Le parcours concerné (« commerçant » ou « partenaire ») est transmis automatiquement par la page utilisée.</p>
        <p>Pour sécuriser le formulaire, le serveur calcule temporairement une empreinte SHA-256 à partir d'informations techniques de la requête afin de limiter les abus. L'adresse IP brute n'est pas enregistrée dans la table applicative de limitation de fréquence.</p>
      </section>

      <section className="legal-section">
        <h2>Finalité et base juridique</h2>
        <p>La finalité est strictement limitée à l'envoi de l'information d'ouverture du parcours WALS demandé et à la protection technique du formulaire. L'inscription repose sur votre consentement, matérialisé par la saisie volontaire de votre email puis l'action « Me prévenir au lancement ». La date du consentement et la version de la mention affichée sont enregistrées afin de documenter ce choix.</p>
        <p>Cette inscription n'autorise pas WALS à utiliser l'adresse pour des promotions commerciales générales sans base légale appropriée. Elle ne constitue ni une commande, ni une création de compte, ni une demande d'accès contractuelle.</p>
      </section>

      <section className="legal-section">
        <h2>Destinataires et sous-traitants</h2>
        <p>L'adresse email est destinée aux personnes habilitées à gérer le lancement WALS et aux prestataires techniques nécessaires au fonctionnement du service. Supabase est utilisé pour le stockage applicatif. Vercel est utilisé pour l'hébergement applicatif ainsi que pour les mesures d'audience et de performance activées dans le code.</p>
        <p>Les données ne sont pas vendues ni cédées à des tiers à des fins de prospection commerciale.</p>
      </section>

      <section className="legal-section">
        <h2>Mesure d'audience et performance</h2>
        <p>Le site utilise Vercel Web Analytics et Vercel Speed Insights. Vercel indique que Web Analytics repose sur des données agrégées et anonymisées sans cookie tiers et qu'il ne permet pas de suivre un visiteur entre différents sites. Speed Insights collecte des métriques de performance anonymes qui ne sont pas associées à un visiteur ou à une adresse IP.</p>
        <p>Le détail du dispositif actuel est présenté sur la page <Link href="/cookies">Cookies et mesure d'audience</Link>.</p>
      </section>

      <section className="legal-section">
        <h2>Transferts hors Espace économique européen</h2>
        <p>Certains prestataires d'infrastructure peuvent traiter des informations techniques en dehors de l'Espace économique européen. Vercel indique notamment utiliser, lorsque cela est requis, le cadre UE–États-Unis de protection des données et/ou des clauses contractuelles types ou autres mécanismes appropriés. Les garanties applicables dépendent du service effectivement utilisé et de sa configuration.</p>
      </section>

      <section className="legal-section">
        <h2>Durée de conservation</h2>
        <p>L'inscription de lancement est conservée jusqu'au premier des événements suivants : retrait de votre consentement, fin de la finalité de lancement, ou 24 mois après la dernière inscription volontaire. Une tâche de purge quotidienne supprime automatiquement les inscriptions arrivées à échéance. Les compteurs anti-abus sont temporaires et expirent automatiquement.</p>
      </section>

      <section className="legal-section">
        <h2>Vos droits</h2>
        <p>Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou, lorsque les conditions sont réunies, la portabilité de vos données. Vous pouvez retirer votre consentement à tout moment sans remettre en cause la licéité des traitements effectués avant ce retrait.</p>
        <p>Vous pouvez exercer ces droits à <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Vous pouvez également introduire une réclamation auprès de la CNIL.</p>
      </section>

      <section className="legal-section">
        <h2>Désinscription</h2>
        <p>La page <Link href="/desinscription">Désinscription</Link> permet de supprimer l'inscription correspondant à une adresse de l'ensemble des informations de lancement WALS. La suppression est immédiate côté liste de lancement. Pour protéger la confidentialité, le résultat ne révèle jamais si l'adresse était auparavant inscrite.</p>
      </section>
    </LegalPageShell>
  );
}
