import { expect, test } from "@playwright/test";

test("la racine oriente vers les deux audiences", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Deux parcours");
  await expect(page.getByRole("link", { name: /WALS pour mon commerce/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /parcours partenaire/i })).toBeVisible();
});

test("le parcours commerçant possède son propre message et formulaire", async ({ page }) => {
  await page.goto("/commercants");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Faites revenir vos clients/i);
  await expect(page.getByRole("button", { name: /Demander une présentation/i })).toBeVisible();
  await expect(page.getByText(/APERÇU PRODUIT|EN PRÉPARATION/i).first()).toBeVisible();
});

test("le parcours partenaire ne publie aucun prix fixe", async ({ page }) => {
  await page.goto("/partenaires");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Construisez votre offre/i);
  await expect(page.locator("body")).not.toContainText(/(?:29|39|49|59|69|99|159)\s*€/);
  await expect(page.getByText(/Aucune promesse de revenu/i)).toBeVisible();
});

test("une page sectorielle apporte un contenu spécifique", async ({ page }) => {
  await page.goto("/commercants/boulangeries");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/boulangerie/i);
  await expect(page.getByRole("heading", { name: "Au comptoir", exact: true })).toBeVisible();
});

test("les principales pages restent sans débordement horizontal", async ({ page }) => {
  for (const path of ["/", "/commercants", "/partenaires", "/commercants/coiffeurs-barbiers"]) {
    await page.goto(path);
    const widths = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, page: document.documentElement.scrollWidth }));
    expect(widths.page, path).toBeLessThanOrEqual(widths.viewport + 1);
  }
});
