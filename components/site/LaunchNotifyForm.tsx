"use client";

import { FormEvent, useState } from "react";

export function LaunchNotifyForm({ audience }: { audience: "merchant" | "partner" }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setState("loading");
    setMessage("");

    try {
      const response = await fetch("/api/launch", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), audience, website: data.get("website") }),
      });
      const body = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(body.message || "L'inscription n'a pas pu être enregistrée.");
      setState("success");
      setMessage(body.message || "Votre email est enregistré.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "L'inscription n'a pas pu être enregistrée.");
    }
  }

  return (
    <form className="launch-notify-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor={`launch-email-${audience}`}>Votre adresse email</label>
      <div className="launch-notify-row">
        <input id={`launch-email-${audience}`} name="email" type="email" inputMode="email" autoComplete="email" placeholder="votre@email.fr" required />
        <button type="submit" disabled={state === "loading"}>{state === "loading" ? "Inscription…" : "Me prévenir au lancement"}</button>
      </div>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="launch-notify-privacy">En vous inscrivant, vous demandez uniquement à recevoir l'information d'ouverture de WALS pour ce parcours. Désinscription possible à tout moment. <a href="/confidentialite">Confidentialité</a></p>
      <p className={`launch-notify-status ${state}`} aria-live="polite">{message}</p>
    </form>
  );
}
