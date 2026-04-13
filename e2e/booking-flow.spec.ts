import { test, expect } from "@playwright/test";

// Fontainebleau area coordinates
const FONTAINEBLEAU = { lat: 48.4049, lng: 2.6986 };
const GARE_AVON = { lat: 48.4091, lng: 2.7211 };

test.describe("Booking flow — client complet", () => {
  test("should complete a full booking from homepage", async ({ page }) => {
    // 1. Go to homepage
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();

    // 2. Fill in the booking form — departure
    const departureInput = page.locator("#departure-input");
    await departureInput.fill("Fontainebleau");
    // Wait for autocomplete suggestions and select the first one
    const departureSuggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await departureSuggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {
      // If no autocomplete, that's OK — the API might use the typed text
    });
    if (await departureSuggestion.isVisible()) {
      await departureSuggestion.click();
    }

    // 2b. Fill arrival
    const arrivalInputs = page.locator('input[type="text"]');
    // The second text input is the arrival field
    const arrivalInput = arrivalInputs.nth(1);
    await arrivalInput.fill("Gare de Fontainebleau-Avon");
    const arrivalSuggestion = page.locator('[class*="shadow-lg"] button, [class*="shadow-lg"] div[class*="cursor-pointer"]').first();
    await arrivalSuggestion.waitFor({ state: "visible", timeout: 5000 }).catch(() => {});
    if (await arrivalSuggestion.isVisible()) {
      await arrivalSuggestion.click();
    }

    // 3. Click search button ("Voir les tarifs")
    const searchButton = page.locator("button", { hasText: /tarifs|prices/i });
    await searchButton.click();

    // 4. Wait for results step
    await expect(
      page.locator("h2", { hasText: /disponibles|available/i })
    ).toBeVisible({ timeout: 15_000 });

    // Check there are driver results OR "no taxis" message
    const hasResults = await page.locator("button", { hasText: /choisir|choose/i }).first().isVisible().catch(() => false);
    const noResults = await page.locator("text=/aucun taxi|no taxi/i").isVisible().catch(() => false);

    expect(hasResults || noResults).toBeTruthy();

    if (!hasResults) {
      test.skip(true, "No drivers available in Fontainebleau — seed data may be missing");
      return;
    }

    // 5. Select the first driver
    await page.locator("button", { hasText: /choisir|choose/i }).first().click();

    // 6. Fill client details
    await expect(
      page.locator("h2", { hasText: /coordonnées|details|confirmation/i })
    ).toBeVisible();

    // Fill name, email, phone
    const nameInput = page.locator('input[placeholder*="nom" i], input[placeholder*="name" i]').first();
    await nameInput.fill("Jean Test");

    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill("jean.test@example.com");

    const phoneInput = page.locator('input[type="tel"]');
    await phoneInput.fill("06 99 99 99 99");

    // 7. Submit booking ("Confirmer la réservation")
    const confirmButton = page.locator("button", {
      hasText: /confirmer|confirm/i,
    });
    await confirmButton.click();

    // 8. Check confirmation page
    await page.waitForURL("**/confirmation**", { timeout: 15_000 });
    await expect(page).toHaveURL(/\/confirmation/);

    // Verify reference number is visible (TN-XXXXXX format)
    await expect(page.locator("text=/TN-[A-Z0-9]+/")).toBeVisible({ timeout: 5000 });
  });
});
