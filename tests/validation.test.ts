import { describe, expect, it } from "vitest";

import { normalizeEmail, parseLeadInput } from "../lib/validation";

describe("normalizeEmail", () => {
  it("normalise une adresse valide", () => {
    expect(normalizeEmail("  Commerce@Example.FR ")).toBe("commerce@example.fr");
  });

  it("rejette les adresses invalides", () => {
    expect(normalizeEmail("pas-un-email")).toBeNull();
    expect(normalizeEmail(null)).toBeNull();
  });
});

describe("parseLeadInput", () => {
  it("sépare le parcours commerçant", () => {
    const result = parseLeadInput({ audience: "merchant", fullName: "Jean Dupont", email: "JEAN@example.fr", businessName: "Le Fournil", privacyAcknowledged: true, marketingOptIn: false });
    expect(result.error).toBeNull();
    expect(result.data?.audience).toBe("merchant");
    expect(result.data?.email).toBe("jean@example.fr");
    expect(result.data?.marketingOptIn).toBe(false);
  });

  it("exige une activité pour un partenaire", () => {
    const result = parseLeadInput({ audience: "partner", fullName: "Jean Dupont", email: "jean@example.fr", privacyAcknowledged: true });
    expect(result.data).toBeNull();
    expect(result.error).toMatch(/activité/i);
  });

  it("ne confond pas prise de contact et consentement marketing", () => {
    const result = parseLeadInput({ audience: "partner", fullName: "Jean Dupont", email: "jean@example.fr", activity: "agency", privacyAcknowledged: true, marketingOptIn: false });
    expect(result.data?.privacyAcknowledged).toBe(true);
    expect(result.data?.marketingOptIn).toBe(false);
  });
});
