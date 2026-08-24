import { expect, test } from "@playwright/test";

test("présente clairement la proposition revendeur", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText(/Vendez des solutions digitales|Transformez votre prospection terrain/);
  await expect(page.getByRole("link", { name: /parcours revendeur/i })).toBeVisible();
  await expect(page.getByText("Votre offre.", { exact: false }).first()).toBeVisible();
});

test("ne crée pas de débordement horizontal", async ({ page }) => {
  await page.goto("/");
  const widths = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, page: document.documentElement.scrollWidth }));
  expect(widths.page).toBeLessThanOrEqual(widths.viewport + 1);
});
