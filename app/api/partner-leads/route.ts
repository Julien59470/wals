import { NextResponse } from "next/server";

import { createPublicServerClient } from "@/lib/supabase/server";

const allowedActivities = new Set(["independent", "agency", "sales", "other"]);

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const fullName = clean(body.fullName, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 32);
    const activity = clean(body.activity, 32);
    const message = clean(body.message, 1200);
    const consentPrivacy = body.consentPrivacy === true;

    if (fullName.length < 2 || !email.includes("@") || !allowedActivities.has(activity) || !consentPrivacy) {
      return NextResponse.json({ message: "Merci de vérifier les champs obligatoires." }, { status: 400 });
    }

    const supabase = createPublicServerClient();
    const { error } = await supabase.from("partner_leads").insert({
      full_name: fullName,
      email,
      phone: phone || null,
      activity,
      message: message || null,
      consent_privacy: true,
      source: "website",
    });

    if (error) {
      console.error("partner_leads insert failed", { code: error.code, message: error.message });
      return NextResponse.json({ message: "La demande n’a pas pu être enregistrée." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("partner_leads request failed", error);
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }
}
