"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();

    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const payload = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(payload.message || "Inscription impossible pour le moment.");
      setState("success");
      setMessage(payload.message || "Votre adresse est enregistrée.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Inscription impossible pour le moment.");
    }
  }

  return (
    <form className="waitlist-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="waitlist-email">Votre email</label>
      <div className="waitlist-row">
        <input id="waitlist-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="vous@exemple.fr" required aria-describedby="waitlist-privacy waitlist-status" />
        <input className="waitlist-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button type="submit" disabled={state === "loading"}>{state === "loading" ? "Inscription…" : "M'avertir à l'ouverture"}<span aria-hidden="true">→</span></button>
      </div>
      <p id="waitlist-privacy" className="waitlist-privacy">En vous inscrivant, vous demandez à recevoir par email les informations liées à l'ouverture de WALS. Désinscription à tout moment. <a href="/confidentialite">Confidentialité</a>.</p>
      <p id="waitlist-status" className={`waitlist-status ${state}`} aria-live="polite">{message}</p>
    </form>
  );
}
