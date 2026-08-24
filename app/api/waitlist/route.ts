import { NextResponse } from "next/server";

import { createPublicServerClient } from "@/lib/supabase/server";
import { normalizeWaitlistEmail } from "@/lib/waitlist";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { email?: unknown; website?: unknown };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ message: "Votre adresse est enregistrée." });
  }

  const email = normalizeWaitlistEmail(body.email);
  if (!email) {
    return NextResponse.json({ message: "Saisissez une adresse email valide." }, { status: 400 });
  }

  const supabase = createPublicServerClient();
  const { error } = await supabase.from("partner_waitlist").insert({
    email,
    consent_launch: true,
    source: "website",
  });

  if (error && error.code !== "23505") {
    console.error("waitlist_insert_failed", error.code);
    return NextResponse.json({ message: "Inscription impossible pour le moment. Réessayez dans quelques instants." }, { status: 500 });
  }

  return NextResponse.json({ message: "C'est enregistré. Vous serez averti à l'ouverture de WALS." });
}
