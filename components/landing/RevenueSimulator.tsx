"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

const formatEuro = (value: number) => new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

export function RevenueSimulator() {
  const [priceInput, setPriceInput] = useState("");
  const [clients, setClients] = useState(10);
  const price = Number(priceInput.replace(",", "."));
  const validPrice = Number.isFinite(price) && price > 0 ? price : 0;
  const monthly = useMemo(() => validPrice * clients, [validPrice, clients]);

  return (
    <div className="bo-revenue-card" data-reveal>
      <div className="bo-revenue-controls">
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Votre prix mensuel</span><strong>{validPrice ? formatEuro(validPrice) : "À définir"}</strong></div>
          <label className="bo-price-custom"><input type="number" min="0" step="1" inputMode="decimal" value={priceInput} onChange={(event) => setPriceInput(event.target.value)} placeholder="Saisissez votre tarif" aria-label="Votre prix mensuel par commerce" /><span>€ / mois</span></label>
        </div>
        <div className="bo-control-block">
          <div className="bo-control-head"><span>Nombre de commerces</span><strong>{clients}</strong></div>
          <input className="bo-range" type="range" min="1" max="100" step="1" value={clients} onChange={(event) => setClients(Number(event.target.value))} aria-label="Nombre de commerces" style={{ "--range-progress": `${clients}%` } as CSSProperties} />
        </div>
      </div>
      <div className="bo-revenue-result" aria-live="polite">
        <div><strong>{clients}</strong><span>COMMERCES</span></div><b>×</b><div><strong>{validPrice ? formatEuro(validPrice) : "—"}</strong><span>/ MOIS</span></div><b>=</b><div className="bo-revenue-total"><strong>{validPrice ? formatEuro(monthly) : "—"}</strong><span>/ MOIS</span></div>
      </div>
      <div className="bo-revenue-foot"><strong>Vous choisissez votre prix de vente.</strong><small>Simulation indicative du chiffre d'affaires brut à partir des seules valeurs saisies. Aucun tarif ni revenu n'est garanti ou recommandé par WALS.</small></div>
    </div>
  );
}
