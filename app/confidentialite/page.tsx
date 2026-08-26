import type { Metadata } from "next";
import Link from "next/link";

import { LegalPageShell } from "@/components/site/LegalPageShell";
import { legalIdentity } from "@/lib/legal";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Informations sur le traitement des données personnelles par WALS.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  const controller = legalIdentity.name || "l'éditeur du site WALS";

  return (
    <LegalPageShell
      eyebrow="DONNÉES PERSONNELLES"
      title="Politique de confidentialité"
      intro={<p>WALS veille à limiter la collecte de données au strict nécessaire. La liste de lancement demande uniquement votre adresse email afin de vous informer de l'ouverture du parcours choisi.</p>}
    >
      <section className="legal-section">
        <h2>Responsable du traitement</h2>
        <p>Le responsable du traitement est {controller}. Les informations d'identification disponibles figurent dans les <Link href="/mentions-legales">mentions légales</Link>. Pour toute question relative à vos données personnelles, vous pouvez écrire à <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      </section>

      <section className="legal-section">
        <h2>Données collectées</h2>
        <p>L'adresse email est nécessaire pour rejoindre la liste de lancement. Le parcours sélectionné, « commerçant » ou « partenaire », est également enregistré afin de vous envoyer l'information correspondant à votre demande.</p>
        <p>Des informations techniques temporaires sont utilisées pour protéger les formulaires contre les abus. WALS ne conserve pas l'adresse IP brute dans la base applicative dédiée à cette protection.</p>
      </section>

      <section className="legal-section">
        <h2>Finalités et base juridique</h2>
        <p>Votre adresse email est utilisée pour vous prévenir de l'ouverture du parcours WALS demandé. Ce traitement repose sur votre consentement, donné lorsque vous saisissez volontairement votre adresse et validez votre inscription.</p>
        <p>Cette inscription ne vaut ni commande, ni création de compte, ni consentement à recevoir des communications promotionnelles sans lien avec l'ouverture de WALS.</p>
      </section>

      <section className="legal-section">
        <h2>Destinataires et prestataires</h2>
        <p>Les données sont accessibles uniquement aux personnes habilitées à gérer le lancement de WALS et aux prestataires techniques nécessaires au fonctionnement du site. Supabase est utilisé pour le stockage applicatif et Vercel pour l'hébergement, la mesure d'audience et le suivi des performances.</p>
        <p>Les données ne sont ni vendues ni cédées à des tiers à des fins de prospection commerciale.</p>
      </section>

      <section className="legal-section">
        <h2>Mesure d'audience et performance</h2>
        <p>WALS utilise Vercel Web Analytics et Vercel Speed Insights afin de mesurer la fréquentation du site et ses performances techniques. Les informations relatives à ces outils sont détaillées sur la page <Link href="/cookies">Cookies et mesure d'audience</Link>.</p>
      </section>

      <section className="legal-section">
        <h2>Transferts hors Espace économique européen</h2>
        <p>Certains prestataires techniques peuvent traiter des informations en dehors de l'Espace économique européen. Lorsque cela est nécessaire, ces transferts reposent sur les mécanismes juridiques prévus par la réglementation applicable.</p>
      </section>

      <section className="legal-section">
        <h2>Durée de conservation</h2>
        <p>Votre inscription est conservée jusqu'au premier des événements suivants : retrait de votre consentement, fin de la finalité de lancement ou expiration du délai maximal de 24 mois après votre dernière inscription volontaire. Les données techniques utilisées pour limiter les abus sont conservées pour une durée courte.</p>
      </section>

      <section className="legal-section">
        <h2>Vos droits</h2>
        <p>Vous pouvez demander l'accès, la rectification, l'effacement ou la limitation de vos données et, lorsque les conditions sont réunies, leur portabilité. Vous pouvez également retirer votre consentement à tout moment.</p>
        <p>Pour exercer vos droits, écrivez à <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Vous disposez également du droit d'introduire une réclamation auprès de la CNIL.</p>
      </section>

      <section className="legal-section">
        <h2>Désinscription</h2>
        <p>La page <Link href="/desinscription">Désinscription</Link> permet de retirer immédiatement une adresse de la liste de lancement WALS. Pour préserver la confidentialité, le résultat ne révèle pas si l'adresse était inscrite auparavant.</p>
      </section>
    </LegalPageShell>
  );
}
