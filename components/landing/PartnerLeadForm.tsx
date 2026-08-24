"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function PartnerLeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/partner-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          email: data.get("email"),
          phone: data.get("phone"),
          activity: data.get("activity"),
          message: data.get("message"),
          consentPrivacy: data.get("consentPrivacy") === "on",
          website: data.get("website"),
        }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(payload.message ?? "Impossible d’envoyer la demande.");

      form.reset();
      setState("success");
    } catch (caught) {
      setState("error");
      setError(caught instanceof Error ? caught.message : "Une erreur est survenue.");
    }
  }

  if (state === "success") {
    return (
      <div className="grid min-h-[420px] place-items-center rounded-[26px] border border-black/[0.06] bg-white p-8 text-center">
        <div className="max-w-sm">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#eaf7e4] text-2xl text-[#477440]">✓</span>
          <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[#162019]">Demande bien reçue.</h3>
          <p className="mt-2 text-sm leading-6 text-[#6e7a72]">Votre demande d’accès partenaire a été enregistrée. L’équipe pourra vous recontacter avec les prochaines étapes.</p>
          <button type="button" onClick={() => setState("idle")} className="mt-6 rounded-xl border border-black/[0.08] px-4 py-2.5 text-sm font-bold text-[#243029]">Envoyer une autre demande</button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[26px] border border-black/[0.06] bg-white p-5 shadow-[0_22px_70px_rgba(25,44,31,.08)] sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="form-field sm:col-span-2"><span>Nom & prénom *</span><input name="fullName" required minLength={2} maxLength={120} placeholder="Jean Dupont" autoComplete="name" /></label>
        <label className="form-field"><span>Email *</span><input name="email" required type="email" maxLength={254} placeholder="jean@exemple.fr" autoComplete="email" /></label>
        <label className="form-field"><span>Téléphone</span><input name="phone" maxLength={32} placeholder="06 12 34 56 78" autoComplete="tel" /></label>
        <label className="form-field sm:col-span-2"><span>Votre activité *</span><select name="activity" required defaultValue=""><option value="" disabled>Sélectionner</option><option value="independent">Démarcheur indépendant</option><option value="agency">Agence</option><option value="sales">Commercial / apporteur d’affaires</option><option value="other">Autre</option></select></label>
        <label className="form-field sm:col-span-2"><span>Message</span><textarea name="message" maxLength={1200} rows={4} placeholder="Présentez rapidement votre activité ou votre zone de prospection…" /></label>
        <label className="absolute left-[-9999px]" aria-hidden="true">Site web<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <label className="flex items-start gap-3 text-[12px] leading-5 text-[#6f7972] sm:col-span-2"><input name="consentPrivacy" type="checkbox" required className="mt-1 size-4 accent-[#567d4d]" /><span>J’accepte que les informations saisies soient utilisées pour traiter ma demande d’accès à la plateforme.</span></label>
      </div>
      {state === "error" && <p role="alert" className="mt-4 rounded-xl bg-[#fff1ef] px-4 py-3 text-sm font-semibold text-[#a2483e]">{error}</p>}
      <button disabled={state === "loading"} className="mt-5 w-full rounded-2xl bg-[#17201a] px-5 py-4 text-sm font-black text-white transition hover:bg-[#243128] disabled:cursor-not-allowed disabled:opacity-60" type="submit">{state === "loading" ? "Envoi en cours…" : "Demander un accès partenaire"}</button>
    </form>
  );
}
