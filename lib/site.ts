const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || null;

export const canonicalDomain = "https://wals.fr";
export const siteUrl = configuredUrl || canonicalDomain;

export const isIndexableProduction =
  process.env.NEXT_PUBLIC_INDEXABLE === "true" && siteUrl === canonicalDomain;

export const siteName = "WALS";
export const contactEmail = "contact@wals.fr";
export const releaseDate = "2026-08-25";

export const audienceRoutes = {
  merchant: "/commercants",
  partner: "/partenaires",
} as const;
