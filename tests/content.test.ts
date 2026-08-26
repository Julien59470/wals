import { describe, expect, it } from "vitest";

import { sectors } from "../lib/sectors";

describe("contenu sectoriel", () => {
  it("publie des pages sectorielles réellement distinctes", () => {
    expect(new Set(sectors.map((sector) => sector.slug)).size).toBe(sectors.length);
    expect(sectors.every((sector) => sector.scenarios.length >= 3 && sector.rewardIdeas.length >= 4)).toBe(true);
  });
});
