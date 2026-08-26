import { NextResponse } from "next/server";

import { getRequestFingerprint, isAllowedBrowserRequest, isHoneypotFilled, readPublicFormJson } from "@/lib/request-security";
import { createPublicServerClient } from "@/lib/supabase/server";
import { normalizeEmail } from "@/lib/validation";

export const dynamic = "force-dynamic";

const noStoreHeaders = { "cache-control": "no-store, max-age=0" };

export async function POST(request: Request) {
  if (!isAllowedBrowserRequest(request)) return NextResponse.json({ message: "Origine de requête refusée." }, { status: 403, headers: noStoreHeaders });

  const parsed = await readPublicFormJson(request);
  if (!parsed.data) {
    const status = parsed.error === "too_large" ? 413 : 400;
    return NextResponse.json({ message: parsed.error === "too_large" ? "Requête trop volumineuse." : "Requête invalide." }, { status, headers: noStoreHeaders });
  }
  const body = parsed.data;

  if (isHoneypotFilled(body.website)) return NextResponse.json({ message: "Votre email est enregistré." }, { headers: noStoreHeaders });

  const email = normalizeEmail(body.email);
  const audience = body.audience === "merchant" || body.audience === "partner" ? body.audience : null;
  if (!email || !audience) return NextResponse.json({ message: "Saisissez une adresse email valide." }, { status: 400, headers: noStoreHeaders });

  const supabase = createPublicServerClient();
  const { error } = await supabase.rpc("subscribe_launch", {
    p_email: email,
    p_audience: audience,
    p_fingerprint: getRequestFingerprint(request),
  });

  if (error) {
    if (error.message.includes("rate_limited")) return NextResponse.json({ message: "Trop de tentatives. Réessayez dans quelques minutes." }, { status: 429, headers: noStoreHeaders });
    console.error("launch_subscription_failed", { code: error.code, audience });
    return NextResponse.json({ message: "L'inscription n'a pas pu être enregistrée pour le moment." }, { status: 500, headers: noStoreHeaders });
  }

  return NextResponse.json({ message: "C'est enregistré. Vous serez prévenu dès l'ouverture de WALS." }, { headers: noStoreHeaders });
}
