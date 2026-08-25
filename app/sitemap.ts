import type { MetadataRoute } from "next";

import { sectors } from "@/lib/sectors";
import { canonicalDomain, isIndexableProduction, releaseDate } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexableProduction) return [];

  const lastModified = new Date(releaseDate);
  const paths = [
    "/",
    "/commercants",
    "/partenaires",
    "/partenaires/agences",
    "/partenaires/independants-commerciaux",
    ...sectors.map((sector) => `/commercants/${sector.slug}`),
    "/confidentialite",
    "/mentions-legales",
  ];

  return paths.map((path) => {
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = path === "/" ? "weekly" : "monthly";
    return {
      url: `${canonicalDomain}${path}`,
      lastModified,
      changeFrequency,
      priority: path === "/" ? 1 : path === "/commercants" || path === "/partenaires" ? 0.9 : 0.7,
    };
  });
}
