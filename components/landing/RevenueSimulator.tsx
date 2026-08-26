"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

const priceOptions = [29, 39, 49, 59, 69] as const;
const clientExamples = [18, 30, 50, 100] as const;

const formatEuro = (value: number) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

export function RevenueSimulator() {
  const [price, setPrice] = useState(39);
  const [clients, setClients] = useState(18);
  const monthly = useMemo(() => price * clients, [price, clients]);

  return (
    <div className="bo-revenue-card" data-reveal>
      <div className="bo-revenue-controls">
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Exemple de prix mensuel</span><strong>{formatEuro(price)}</strong></div>
          <div className="bo-price-pills" role="group" aria-label="Choisir un exemple de prix mensuel">
            {priceOptions.map((value) => <button key={value} type="button" className={price === value ? "is-active" : ""} onClick={() => setPrice(value)}>{value} €</button>)}
          </div>
        </div>
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Nombre de commerces</span><strong>{clients}</strong></div>
          <input className="bo-range" type="range" min="1" max="100" step="1" value={clients} onChange={(event) => setClients(Number(event.target.value))} aria-label="Nombre de commerces" style={{ "--range-progress": `${clients}%` } as CSSProperties} />
          <div className="bo-client-presets" role="group" aria-label="Exemples de portefeuille">
            {clientExamples.map((value) => <button key={value} type="button" onClick={() => setClients(value)}>{value}</button>)}
          </div>
        </div>
      </div>
      <div className="bo-revenue-result" aria-live="polite"><div><strong>{clients}</strong><span>COMMERCES</span></div><b>×</b><div><strong>{formatEuro(price)}</strong><span>/ MOIS</span></div><b>=</b><div className="bo-revenue-total"><strong>{formatEuro(monthly)}</strong><span>/ MOIS</span></div></div>
      <div className="bo-revenue-foot"><strong>Vous restez libre de votre tarification.</strong><small>Les montants 29, 39, 49, 59 et 69 € servent uniquement d'exemples de simulation de chiffre d'affaires brut. Ils ne constituent ni un prix WALS, ni une recommandation, ni une promesse de revenu.</small></div>
    </div>
  );
}
