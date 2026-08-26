import { createHash } from "node:crypto";

const maxPublicFormBytes = 4096;

type JsonReadResult =
  | { data: Record<string, unknown>; error: null }
  | { data: null; error: "invalid" | "too_large" };

export function getRequestFingerprint(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const userAgent = request.headers.get("user-agent")?.slice(0, 180) || "unknown";
  const ip = forwarded || realIp || "unknown";
  return createHash("sha256").update(`${ip}|${userAgent}`).digest("hex");
}

export function isHoneypotFilled(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isAllowedBrowserRequest(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && !["same-origin", "same-site", "none"].includes(fetchSite)) return false;

  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

export async function readPublicFormJson(request: Request): Promise<JsonReadResult> {
  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(declaredLength) && declaredLength > maxPublicFormBytes) {
    return { data: null, error: "too_large" };
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return { data: null, error: "invalid" };
  }

  if (new TextEncoder().encode(raw).byteLength > maxPublicFormBytes) {
    return { data: null, error: "too_large" };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return { data: null, error: "invalid" };
    return { data: parsed as Record<string, unknown>, error: null };
  } catch {
    return { data: null, error: "invalid" };
  }
}
