import { describe, expect, it } from "vitest";

import { normalizeWaitlistEmail } from "../lib/waitlist";

describe("normalizeWaitlistEmail", () => {
  it("normalise une adresse valide", () => {
    expect(normalizeWaitlistEmail("  Revendeur@Example.FR ")).toBe("revendeur@example.fr");
  });

  it("rejette une valeur invalide", () => {
    expect(normalizeWaitlistEmail("pas-un-email")).toBeNull();
    expect(normalizeWaitlistEmail(null)).toBeNull();
  });
});
