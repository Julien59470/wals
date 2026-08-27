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
  const yearly = monthly * 12;

  return (
    <div className="bo-revenue-card ux-revenue-card" data-reveal>
      <div className="bo-revenue-controls">
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Exemple de prix mensuel</span><strong>{formatEuro(price)}</strong></div>
          <div className="bo-price-pills" role="group" aria-label="Choisir un exemple de prix mensuel">
            {priceOptions.map((value) => <button key={value} type="button" className={price === value ? "is-active" : ""} onClick={() => setPrice(value)}>{value} €</button>)}
          </div>
        </div>
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Nombre de commerces</span><strong>{clients}</strong></div>
          <input className="bo-range" type="range" min="1" max="100" step="1" value={clients} onChange={(event) => setClients(Number(event.target.value))} aria-label="Nombre de commerces" style={{ "--range-progress": `${clients}%` } as CSSProperties}/>
          <div className="bo-client-presets" role="group" aria-label="Exemples de portefeuille">
            {clientExamples.map((value) => <button key={value} type="button" onClick={() => setClients(value)}>{value}</button>)}
          </div>
        </div>
      </div>

      <div className="ux-revenue-focus" aria-live="polite">
        <div className="ux-revenue-formula"><span>{clients} commerces</span><b>×</b><span>{formatEuro(price)}</span></div>
        <strong>{formatEuro(monthly)}<small>/mois</small></strong>
        <p>{formatEuro(yearly)} / an</p>
        <span>Chiffre d'affaires brut indicatif</span>
      </div>

      <div className="bo-revenue-foot">
        <strong>Vous restez libre de votre tarification.</strong>
        <small>Les montants proposés sont des exemples de tarifs de revente. Le résultat correspond à un chiffre d'affaires brut indicatif ; il ne représente pas le prix de WALS et ne constitue ni une recommandation tarifaire ni une garantie de revenu.</small>
      </div>
    </div>
  );
}
