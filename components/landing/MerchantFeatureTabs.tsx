"use client";

import { useState } from "react";

import { Iphone, Samsung } from "@/components/landing/ProductDevices";
import { BenefitInterface, CheckIcon } from "@/components/landing/VisualInterfaces";
import { WalletTrust } from "@/components/landing/WalletTrust";

type FeatureKey = "loyalty" | "referral" | "campaign" | "play" | "stats";

type Feature = {
  key: FeatureKey;
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
};

const features: readonly Feature[] = [
  {
    key: "loyalty",
    label: "Fidélité",
    title: "Carte de fidélité digitale",
    description: "Une carte accessible depuis le Wallet du client, sans application WALS dédiée.",
    bullets: ["Toujours à portée de main", "Tampons, points ou paliers", "Récompenses automatiques"],
  },
  {
    key: "referral",
    label: "Parrainage",
    title: "Transformez vos clients satisfaits en recommandations",
    description: "Encouragez vos clients à faire découvrir votre commerce avec un parcours de parrainage clair et mesurable.",
    bullets: ["Invitation simple à partager", "Avantage défini par le commerce", "Suivi des recommandations"],
  },
  {
    key: "campaign",
    label: "Campagnes",
    title: "Créez une vraie raison de revenir",
    description: "Préparez des messages et des offres adaptés pour rester présent entre deux visites sans multiplier les outils.",
    bullets: ["Messages ciblés", "Offres et rappels", "Pilotage depuis un seul espace"],
  },
  {
    key: "play",
    label: "Play",
    title: "Ajoutez du jeu à l'expérience de fidélité",
    description: "Roue digitale, récompenses et mécaniques ludiques donnent une raison supplémentaire d'interagir avec votre programme.",
    bullets: ["Expériences ludiques", "Récompenses configurables", "Engagement autour du programme"],
  },
  {
    key: "stats",
    label: "Statistiques",
    title: "Comprenez ce qui fait revenir vos clients",
    description: "Suivez l'utilisation du programme et identifiez progressivement les actions qui génèrent le plus de retours.",
    bullets: ["Suivi de l'activité", "Lecture des retours", "Aide au pilotage des campagnes"],
  },
];

function FeatureIcon({ type }: { type: FeatureKey }) {
  if (type === "loyalty") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 9h18M7 14h4"/></svg>;
  if (type === "referral") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3"/><circle cx="17" cy="7" r="2.5"/><path d="M3.5 19c.5-4 2.5-6 5.5-6s5 2 5.5 6M15 13c3.2.2 5 2 5.5 5"/></svg>;
  if (type === "campaign") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 13 2.5-1V8.5L18 4v15l-11.5-4.5V11"/><path d="M7 15.5 8 20h4l-1.3-3.3"/></svg>;
  if (type === "play") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8h10l3 4.5-2 6.5-4-3H10l-4 3-2-6.5L7 8Z"/><path d="M8 12v4M6 14h4M15 13h.01M18 15h.01"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19V10M10 19V5M15 19v-7M20 19V3"/></svg>;
}

function FeatureVisual({ type }: { type: FeatureKey }) {
  if (type === "loyalty") return <div className="ux-feature-phone"><Iphone compact/></div>;
  if (type === "play") return <div className="ux-feature-phone"><Samsung compact/></div>;
  if (type === "referral") return <BenefitInterface type="referral"/>;
  if (type === "campaign") return <BenefitInterface type="campaign"/>;
  return <BenefitInterface type="stats"/>;
}

export function MerchantFeatureTabs() {
  const [activeKey, setActiveKey] = useState<FeatureKey>("loyalty");
  const active = features.find((feature) => feature.key === activeKey) ?? features[0];

  return (
    <div className="ux-feature-shell" data-reveal>
      <div className="ux-feature-tabs" role="tablist" aria-label="Fonctionnalités WALS pour les commerçants">
        {features.map((feature) => (
          <button
            key={feature.key}
            type="button"
            role="tab"
            aria-selected={active.key === feature.key}
            className={active.key === feature.key ? "is-active" : ""}
            onClick={() => setActiveKey(feature.key)}
          >
            <span><FeatureIcon type={feature.key}/></span>
            {feature.label}
          </button>
        ))}
      </div>

      <div className="ux-feature-panel" role="tabpanel" key={active.key}>
        <div className="ux-feature-copy">
          <span className="ux-preview-badge">Aperçu avant ouverture</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <ul>
            {active.bullets.map((bullet) => <li key={bullet}><CheckIcon/>{bullet}</li>)}
          </ul>
          {active.key === "loyalty" && <WalletTrust tone="light" compact className="ux-feature-wallet-trust"/>}
        </div>
        <div className="ux-feature-visual" aria-live="polite"><FeatureVisual type={active.key}/></div>
      </div>

      <div className="ux-feature-assurance" aria-label="Points clés de l'expérience WALS">
        <span><b>01</b><strong>Sans application</strong><small>Aucune app WALS à télécharger.</small></span>
        <span><b>02</b><strong>Compatible Wallet</strong><small>Une carte pensée pour Apple Wallet et Google Wallet.</small></span>
        <span><b>03</b><strong>Mise en place simple</strong><small>Un parcours conçu pour rester fluide au quotidien.</small></span>
        <span><b>04</b><strong>Sécurisé et fiable</strong><small>Données protégées et traitement conforme au cadre prévu.</small></span>
      </div>
    </div>
  );
}
