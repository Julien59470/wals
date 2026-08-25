import type { MetadataRoute } from "next";
import { canonicalDomain, isIndexableProduction } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexableProduction) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }], sitemap: `${canonicalDomain}/sitemap.xml`, host: canonicalDomain };
}
