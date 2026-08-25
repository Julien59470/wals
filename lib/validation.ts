export type LeadAudience = "merchant" | "partner";

export type LeadInput = {
  audience: LeadAudience;
  fullName: string;
  email: string;
  businessName: string | null;
  phone: string | null;
  activity: string | null;
  message: string | null;
  privacyAcknowledged: boolean;
  marketingOptIn: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value: unknown, max: number) => {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
};

export function normalizeEmail(value: unknown) {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (email.length < 5 || email.length > 254 || !emailPattern.test(email)) return null;
  return email;
}

export function parseLeadInput(value: unknown): { data: LeadInput | null; error: string | null } {
  if (!value || typeof value !== "object") return { data: null, error: "Requête invalide." };
  const body = value as Record<string, unknown>;
  const audience = body.audience === "merchant" || body.audience === "partner" ? body.audience : null;
  if (!audience) return { data: null, error: "Parcours invalide." };

  const fullName = clean(body.fullName, 120);
  const email = normalizeEmail(body.email);
  const businessName = clean(body.businessName, 140) || null;
  const phone = clean(body.phone, 32) || null;
  const activity = clean(body.activity, 80) || null;
  const message = clean(body.message, 1600) || null;
  const privacyAcknowledged = body.privacyAcknowledged === true;
  const marketingOptIn = body.marketingOptIn === true;

  if (fullName.length < 2) return { data: null, error: "Indiquez votre nom." };
  if (!email) return { data: null, error: "Saisissez une adresse email valide." };
  if (audience === "merchant" && !businessName) return { data: null, error: "Indiquez le nom du commerce." };
  if (audience === "partner" && !activity) return { data: null, error: "Indiquez votre activité." };
  if (!privacyAcknowledged) return { data: null, error: "Vous devez avoir pris connaissance de l'utilisation de vos données." };

  return {
    data: {
      audience,
      fullName,
      email,
      businessName,
      phone,
      activity,
      message,
      privacyAcknowledged,
      marketingOptIn,
    },
    error: null,
  };
}
