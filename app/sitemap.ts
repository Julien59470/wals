import type { MetadataRoute } from "next";

import { isCanonicalProduction, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isCanonicalProduction) return [];
  return [{ url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
