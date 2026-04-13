import { test, expect } from "@playwright/test";

test.describe("Search & results", () => {
  test("should search and find drivers in Fontainebleau", async ({ page }) => {
    await page.goto("/");

    // Fill departure
    const departureInput = page.locator("#departure-input");
    await departureInput.fill("Fontainebleau");
    const suggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await suggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await suggestion.isVisible()) {
      await suggestion.click();
    }

    // Fill arrival
    const arrivalInput = page.locator('input[type="text"]').nth(1);
    await arrivalInput.fill("Paris");
    const arrivalSuggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await arrivalSuggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await arrivalSuggestion.isVisible()) {
      await arrivalSuggestion.click();
    }

    // Search
    const searchButton = page.locator("button", { hasText: /tarifs|prices/i });
    await searchButton.click();

    // Wait for results
    await expect(
      page.locator("h2", { hasText: /disponibles|available/i })
    ).toBeVisible({ timeout: 15_000 });

    // Check that we have driver cards with "Choisir" buttons
    const chooseButtons = page.locator("button", { hasText: /choisir|choose/i });
    const count = await chooseButtons.count();

    // We expect at least 1 driver (ideally 4 from the seed)
    expect(count).toBeGreaterThan(0);
  });

  test("should display estimated prices for each driver", async ({ page }) => {
    await page.goto("/");

    // Fill departure
    const departureInput = page.locator("#departure-input");
    await departureInput.fill("Fontainebleau");
    const suggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await suggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await suggestion.isVisible()) {
      await suggestion.click();
    }

    // Fill arrival
    const arrivalInput = page.locator('input[type="text"]').nth(1);
    await arrivalInput.fill("Gare de Lyon, Paris");
    const arrivalSuggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await arrivalSuggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await arrivalSuggestion.isVisible()) {
      await arrivalSuggestion.click();
    }

    // Search
    await page.locator("button", { hasText: /tarifs|prices/i }).click();

    // Wait for results
    await expect(
      page.locator("h2", { hasText: /disponibles|available/i })
    ).toBeVisible({ timeout: 15_000 });

    // Verify prices are displayed (€ symbol)
    await expect(page.locator("text=/\\d+.*€/").first()).toBeVisible();
  });

  test("should show no results for a zone without drivers", async ({ page }) => {
    await page.goto("/");

    // Fill departure with a remote location
    const departureInput = page.locator("#departure-input");
    await departureInput.fill("Brest");
    const suggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await suggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await suggestion.isVisible()) {
      await suggestion.click();
    }

    // Fill arrival
    const arrivalInput = page.locator('input[type="text"]').nth(1);
    await arrivalInput.fill("Quimper");
    const arrivalSuggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await arrivalSuggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await arrivalSuggestion.isVisible()) {
      await arrivalSuggestion.click();
    }

    // Search
    await page.locator("button", { hasText: /tarifs|prices/i }).click();

    // Wait for results section
    await expect(
      page.locator("h2", { hasText: /disponibles|available/i })
    ).toBeVisible({ timeout: 15_000 });

    // Should show "no taxis available" message
    await expect(
      page.locator("text=/aucun taxi|no taxi/i")
    ).toBeVisible({ timeout: 5000 });
  });
});
