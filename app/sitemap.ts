import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://wals.fr", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
