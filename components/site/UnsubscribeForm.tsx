"use client";

import { FormEvent, useState } from "react";

export function UnsubscribeForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: data.get("email") }),
      });
      const body = (await response.json()) as { message?: string };
      setMessage(body.message || "La demande a été prise en compte.");
      if (response.ok) form.reset();
    } catch {
      setMessage("La demande n'a pas pu être traitée pour le moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="unsubscribe-form" onSubmit={onSubmit}>
      <label><span>Adresse email</span><input name="email" type="email" required autoComplete="email" /></label>
      <button className="primary-button" disabled={loading} type="submit">{loading ? "Traitement…" : "Me désinscrire"}</button>
      <p aria-live="polite">{message}</p>
    </form>
  );
}
