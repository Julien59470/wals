import { describe, expect, it } from "vitest";

import { productFeatures } from "../lib/content";
import { sectors } from "../lib/sectors";

describe("vérité produit", () => {
  it("attribue un statut public à chaque fonctionnalité", () => {
    expect(productFeatures.length).toBeGreaterThan(0);
    expect(productFeatures.every((feature) => ["En préparation", "Aperçu produit"].includes(feature.status))).toBe(true);
  });

  it("publie des pages sectorielles réellement distinctes", () => {
    expect(new Set(sectors.map((sector) => sector.slug)).size).toBe(sectors.length);
    expect(sectors.every((sector) => sector.scenarios.length >= 3 && sector.rewardIdeas.length >= 4)).toBe(true);
  });
});
