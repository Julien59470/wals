"use client";

import { FormEvent, useId, useState } from "react";

export function LaunchNotifyForm({ audience }: { audience: "merchant" | "partner" }) {
  const id = useId();
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

  const emailId = `launch-email-${audience}-${id}`;
  const helpId = `launch-help-${audience}-${id}`;
  const statusId = `launch-status-${audience}-${id}`;

  return (
    <form className="launch-notify-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor={emailId}>Votre adresse email</label>
      <div className="launch-notify-row">
        <input id={emailId} name="email" type="email" inputMode="email" autoComplete="email" placeholder="votre@email.fr" aria-describedby={`${helpId} ${statusId}`} required />
        <button type="submit" disabled={state === "loading"}>{state === "loading" ? "Inscription…" : "Me prévenir au lancement"}</button>
      </div>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="launch-notify-privacy" id={helpId}>Votre email sert uniquement à vous prévenir de l'ouverture de ce parcours WALS. Il n'est pas utilisé pour des promotions générales ni cédé à des tiers à des fins commerciales. Retrait possible à tout moment via la <a href="/desinscription">désinscription</a>. <a href="/confidentialite">En savoir plus sur vos données</a>.</p>
      <p className={`launch-notify-status ${state}`} id={statusId} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
