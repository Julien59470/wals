"use client";

import { track } from "@vercel/analytics";
import Link from "next/link";
import { FormEvent, useState } from "react";

export function LeadForm({ audience }: { audience: "merchant" | "partner" }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      audience,
      fullName: data.get("fullName"),
      email: data.get("email"),
      businessName: data.get("businessName"),
      phone: data.get("phone"),
      activity: data.get("activity"),
      message: data.get("message"),
      website: data.get("website"),
      privacyAcknowledged: data.get("privacyAcknowledged") === "on",
      marketingOptIn: data.get("marketingOptIn") === "on",
    };

    setState("loading");
    setMessage("");
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const body = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(body.message || "Votre demande n'a pas pu être envoyée.");
      setState("success");
      setMessage(body.message || "Votre demande est enregistrée.");
      track("Lead submitted", { audience });
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Votre demande n'a pas pu être envoyée.");
    }
  }

  return (
    <form className="lead-form" onSubmit={onSubmit} noValidate>
      <div className="form-grid two">
        <label><span>Nom et prénom</span><input autoComplete="name" name="fullName" required /></label>
        <label><span>Email professionnel</span><input autoComplete="email" inputMode="email" name="email" required type="email" /></label>
      </div>
      {audience === "merchant" ? (
        <div className="form-grid two">
          <label><span>Nom du commerce</span><input autoComplete="organization" name="businessName" required /></label>
          <label><span>Téléphone <em>facultatif</em></span><input autoComplete="tel" inputMode="tel" name="phone" /></label>
        </div>
      ) : (
        <div className="form-grid two">
          <label><span>Votre activité</span><select name="activity" required defaultValue=""><option disabled value="">Sélectionner</option><option value="agency">Agence</option><option value="independent">Indépendant / freelance</option><option value="sales">Commercial</option><option value="business">Entreprise de services</option><option value="other">Autre</option></select></label>
          <label><span>Téléphone <em>facultatif</em></span><input autoComplete="tel" inputMode="tel" name="phone" /></label>
        </div>
      )}
      <label><span>Votre besoin <em>facultatif</em></span><textarea name="message" rows={5} placeholder={audience === "merchant" ? "Votre activité, votre système de fidélité actuel, vos objectifs…" : "Votre activité, vos cibles, la manière dont vous souhaitez proposer WALS…"} /></label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="checkbox-line"><input name="privacyAcknowledged" required type="checkbox" /><span>J'ai pris connaissance de la <Link href="/confidentialite">politique de confidentialité</Link> et j'accepte que mes données soient utilisées pour traiter ma demande.</span></label>
      <label className="checkbox-line"><input name="marketingOptIn" type="checkbox" /><span>Je souhaite aussi recevoir les informations de lancement WALS. Facultatif, désinscription possible à tout moment.</span></label>
      <button className="primary-button" disabled={state === "loading"} type="submit">{state === "loading" ? "Envoi…" : audience === "merchant" ? "Demander une présentation" : "Demander l'accès partenaire"}</button>
      <p className={`form-status ${state}`} aria-live="polite">{message}</p>
    </form>
  );
}
