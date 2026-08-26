"use client";

import { FormEvent, useId, useState } from "react";

export function UnsubscribeForm() {
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
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: data.get("email"), website: data.get("website") }),
      });
      const body = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(body.message || "La désinscription n'a pas pu être traitée.");
      setState("success");
      setMessage(body.message || "La demande a été prise en compte.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "La demande n'a pas pu être traitée pour le moment.");
    }
  }

  const emailId = `unsubscribe-email-${id}`;
  const helpId = `unsubscribe-help-${id}`;
  const statusId = `unsubscribe-status-${id}`;

  return (
    <form className="unsubscribe-form unsubscribe-form-card" onSubmit={onSubmit}>
      <div className="unsubscribe-field">
        <label htmlFor={emailId}>Adresse email à retirer</label>
        <input id={emailId} name="email" type="email" inputMode="email" autoComplete="email" placeholder="votre@email.fr" aria-describedby={`${helpId} ${statusId}`} required />
      </div>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p id={helpId} className="unsubscribe-help">La désinscription concerne les informations de lancement WALS associées à cette adresse, quel que soit le parcours choisi.</p>
      <button className="primary-button unsubscribe-button" disabled={state === "loading"} type="submit">{state === "loading" ? "Traitement…" : "Confirmer la désinscription"}</button>
      <p id={statusId} className={`unsubscribe-status ${state}`} role="status" aria-live="polite">{message}</p>
    </form>
  );
}
