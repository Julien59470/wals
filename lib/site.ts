const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");

export const siteUrl = configuredUrl || "https://walsfr.vercel.app";
export const canonicalDomain = "https://wals.fr";
export const isCanonicalProduction = siteUrl === canonicalDomain;
