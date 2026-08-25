import { NextResponse } from "next/server";

import { getRequestFingerprint, isAllowedBrowserRequest, isHoneypotFilled } from "@/lib/request-security";
import { createPublicServerClient } from "@/lib/supabase/server";
import { parseLeadInput } from "@/lib/validation";

export const dynamic = "force-dynamic";

const noStoreHeaders = { "cache-control": "no-store, max-age=0" };

export async function POST(request: Request) {
  if (!isAllowedBrowserRequest(request)) {
    return NextResponse.json({ message: "Origine de requête refusée." }, { status: 403, headers: noStoreHeaders });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Requête invalide." }, { status: 400, headers: noStoreHeaders });
  }

  if (body && typeof body === "object" && isHoneypotFilled((body as Record<string, unknown>).website)) {
    return NextResponse.json({ message: "Votre demande est enregistrée." }, { headers: noStoreHeaders });
  }

  const parsed = parseLeadInput(body);
  if (!parsed.data) {
    return NextResponse.json({ message: parsed.error || "Requête invalide." }, { status: 400, headers: noStoreHeaders });
  }

  const fingerprint = getRequestFingerprint(request);
  const supabase = createPublicServerClient();
  const { error } = await supabase.rpc("record_website_lead", {
    p_audience: parsed.data.audience,
    p_full_name: parsed.data.fullName,
    p_email: parsed.data.email,
    p_business_name: parsed.data.businessName ?? "",
    p_phone: parsed.data.phone ?? "",
    p_activity: parsed.data.activity ?? "",
    p_message: parsed.data.message ?? "",
    p_privacy_acknowledged: parsed.data.privacyAcknowledged,
    p_marketing_opt_in: parsed.data.marketingOptIn,
    p_fingerprint: fingerprint,
  });

  if (error) {
    if (error.message.includes("rate_limited")) {
      return NextResponse.json({ message: "Trop de demandes ont été envoyées depuis ce navigateur. Réessayez dans quelques minutes." }, { status: 429, headers: noStoreHeaders });
    }
    console.error("website_lead_failed", { code: error.code, audience: parsed.data.audience });
    return NextResponse.json({ message: "Votre demande n'a pas pu être enregistrée pour le moment." }, { status: 500, headers: noStoreHeaders });
  }

  return NextResponse.json({ message: parsed.data.audience === "merchant" ? "Votre demande est enregistrée. WALS pourra vous recontacter au sujet de votre commerce." : "Votre demande partenaire est enregistrée. WALS pourra vous recontacter au sujet du programme." }, { headers: noStoreHeaders });
}
