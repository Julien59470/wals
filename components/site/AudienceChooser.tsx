"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";

const preferenceKey = "wals-audience";
type Audience = "merchant" | "partner";

export function AudienceChooser() {
  function choose(audience: Audience) {
    window.localStorage.setItem(preferenceKey, audience);
    track("Audience selected", { audience });
  }

  return (
    <div className="audience-grid" aria-label="Choisir votre parcours WALS">
      <Link className="audience-card merchant" href="/commercants" onClick={() => choose("merchant")}>
        <span className="audience-kicker">Je suis un commerce</span>
        <h2>Je veux fidéliser mes clients.</h2>
        <p>Carte digitale, récompenses, communications, parrainage et suivi client dans un parcours conçu pour le commerce de proximité.</p>
        <div className="audience-features"><span>Fidélité</span><span>Engagement</span><span>Statistiques</span></div>
        <strong>Découvrir WALS pour mon commerce <span aria-hidden="true">→</span></strong>
      </Link>

      <Link className="audience-card partner" href="/partenaires" onClick={() => choose("partner")}>
        <span className="audience-kicker">Je veux proposer WALS</span>
        <h2>Je veux construire mon offre de fidélité.</h2>
        <p>Marque blanche, démos, offres libres, cockpit commercial et outils pour développer votre propre portefeuille de commerces.</p>
        <div className="audience-features"><span>Votre marque</span><span>Vos offres</span><span>Vos clients</span></div>
        <strong>Découvrir le parcours partenaire <span aria-hidden="true">→</span></strong>
      </Link>
    </div>
  );
}
