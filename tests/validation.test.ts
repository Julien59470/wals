import { describe, expect, it } from "vitest";

import { normalizeEmail } from "../lib/validation";

describe("normalizeEmail", () => {
  it("normalise une adresse valide", () => {
    expect(normalizeEmail("  Commerce@Example.FR ")).toBe("commerce@example.fr");
  });

  it("rejette les adresses invalides", () => {
    expect(normalizeEmail("pas-un-email")).toBeNull();
    expect(normalizeEmail(null)).toBeNull();
    expect(normalizeEmail("a@b")).toBeNull();
  });
});
