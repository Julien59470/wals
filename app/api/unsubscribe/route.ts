import { NextResponse } from "next/server";

import { isAllowedBrowserRequest } from "@/lib/request-security";
import { createPublicServerClient } from "@/lib/supabase/server";
import { normalizeEmail } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!isAllowedBrowserRequest(request)) {
    return NextResponse.json({ message: "Origine de requête refusée." }, { status: 403, headers: { "cache-control": "no-store" } });
  }

  let body: { email?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400, headers: { "cache-control": "no-store" } });
  }

  const email = normalizeEmail(body.email);
  if (!email) return NextResponse.json({ message: "Saisissez une adresse email valide." }, { status: 400, headers: { "cache-control": "no-store" } });

  const supabase = createPublicServerClient();
  const { error } = await supabase.rpc("unsubscribe_launch", { p_email: email });
  if (error) {
    console.error("launch_unsubscribe_failed", { code: error.code });
    return NextResponse.json({ message: "La désinscription n'a pas pu être traitée pour le moment." }, { status: 500, headers: { "cache-control": "no-store" } });
  }

  return NextResponse.json({ message: "Si cette adresse était inscrite, elle ne recevra plus les informations de lancement WALS." }, { headers: { "cache-control": "no-store" } });
}
