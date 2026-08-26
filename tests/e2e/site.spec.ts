import { expect, test } from "@playwright/test";

test("la racine oriente vers les deux audiences avec la DA historique", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Comment voulez-vous/i);
  await expect(page.getByRole("link", { name: /parcours commerce/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /parcours partenaire/i })).toBeVisible();
  await expect(page.locator(".device.iphone")).toBeVisible();
  await expect(page.locator(".device.samsung")).toBeVisible();
  await expect(page.getByText(/Plateforme en cours de développement/i).first()).toBeVisible();
});

test("le parcours commerçant indique le développement et demande uniquement un email", async ({ page }) => {
  await page.goto("/commercants");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Faites revenir vos clients/i);
  await expect(page.getByText(/Plateforme en cours de développement/i).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /Me prévenir au lancement/i })).toBeVisible();
  await expect(page.locator('input[name="email"]')).toHaveCount(1);
  await expect(page.locator('input[name="fullName"]')).toHaveCount(0);
  await expect(page.locator(".device.iphone").first()).toBeVisible();
  await expect(page.locator(".device.samsung").first()).toBeVisible();
  await expect(page.locator(".merchant-dashboard")).toContainText("1 284");
});

test("le parcours partenaire restaure les scénarios 29 à 69 euros", async ({ page }) => {
  await page.goto("/partenaires");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Préparez votre futur business/i);
  for (const price of [29, 39, 49, 59, 69]) await expect(page.getByRole("button", { name: `${price} €`, exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /Me prévenir au lancement/i })).toBeVisible();
  await expect(page.locator('input[name="fullName"]')).toHaveCount(0);
  await expect(page.locator(".dashboard-showcase")).toContainText("702 €");
  await expect(page.getByText(/ni un prix WALS/i)).toBeVisible();
});

test("une page sectorielle apporte un contenu spécifique et une liste de lancement simple", async ({ page }) => {
  await page.goto("/commercants/boulangeries");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/boulangerie/i);
  await expect(page.getByRole("heading", { name: "Au comptoir", exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: /Me prévenir au lancement/i })).toBeVisible();
});

test("les principales pages restent sans débordement horizontal", async ({ page }) => {
  for (const path of ["/", "/commercants", "/partenaires", "/commercants/coiffeurs-barbiers", "/partenaires/agences"]) {
    await page.goto(path);
    const widths = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, page: document.documentElement.scrollWidth }));
    expect(widths.page, path).toBeLessThanOrEqual(widths.viewport + 1);
  }
});

test("le contenu critique reste paintable dans un budget de rendu local", async ({ page }) => {
  await page.addInitScript(() => {
    const target = window as typeof window & { __walsLcp?: number };
    target.__walsLcp = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      if (last) target.__walsLcp = last.startTime;
    }).observe({ type: "largest-contentful-paint", buffered: true });
  });

  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.waitForTimeout(150);
  const metrics = await page.evaluate(() => ({
    fcp: performance.getEntriesByName("first-contentful-paint")[0]?.startTime ?? 0,
    lcp: (window as typeof window & { __walsLcp?: number }).__walsLcp ?? 0,
    opacity: getComputedStyle(document.querySelector("h1") as HTMLElement).opacity,
  }));

  expect(metrics.opacity).toBe("1");
  expect(metrics.fcp).toBeGreaterThan(0);
  expect(metrics.fcp).toBeLessThan(2500);
  expect(metrics.lcp).toBeGreaterThan(0);
  expect(metrics.lcp).toBeLessThan(3500);
});
