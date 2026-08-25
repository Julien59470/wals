"use client";

import { useMemo, useState } from "react";

const formatEuro = (value: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(value);

export function RevenueSimulator() {
  const [price, setPrice] = useState("");
  const [clients, setClients] = useState("1");

  const result = useMemo(() => {
    const parsedPrice = Number(price.replace(",", "."));
    const parsedClients = Number(clients);
    if (!Number.isFinite(parsedPrice) || parsedPrice <= 0 || !Number.isInteger(parsedClients) || parsedClients <= 0) return null;
    return { parsedPrice, parsedClients, total: parsedPrice * parsedClients };
  }, [price, clients]);

  return (
    <div className="simulator-card">
      <div className="simulator-fields">
        <label>
          <span>Votre tarif mensuel par commerce</span>
          <div className="money-input"><input inputMode="decimal" min="0" name="price" onChange={(event) => setPrice(event.target.value)} placeholder="À définir par vous" type="number" value={price} /><b>€</b></div>
        </label>
        <label>
          <span>Nombre de commerces actifs</span>
          <input inputMode="numeric" min="1" name="clients" onChange={(event) => setClients(event.target.value)} type="number" value={clients} />
        </label>
      </div>
      <div className="simulator-result" aria-live="polite">
        {result ? (
          <>
            <span>{result.parsedClients} commerce{result.parsedClients > 1 ? "s" : ""} × {formatEuro(result.parsedPrice)}</span>
            <strong>{formatEuro(result.total)} <small>/ mois de chiffre d'affaires brut simulé</small></strong>
          </>
        ) : (
          <><span>Entrez votre propre tarif.</span><strong>Aucun prix de revente imposé.</strong></>
        )}
      </div>
      <p>Simulation indicative basée uniquement sur les paramètres saisis. Elle ne constitue ni une promesse de revenus ni une recommandation tarifaire de WALS.</p>
    </div>
  );
}
