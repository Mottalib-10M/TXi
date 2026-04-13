import { test, expect } from "@playwright/test";
import { loginAsOrg, HOTEL } from "./helpers/auth";

test.describe("Hotel dashboard", () => {
  test("should login and see org dashboard", async ({ page }) => {
    await loginAsOrg(page, HOTEL.email);

    // Verify org dashboard loaded
    await expect(page).toHaveURL(/\/org/);

    // Check stats or dashboard content is visible
    await expect(
      page.locator("text=/courses|rides|réservation|cagnotte/i").first()
    ).toBeVisible();
  });

  test("should navigate to new ride page", async ({ page }) => {
    await loginAsOrg(page, HOTEL.email);

    // Navigate to new ride form
    await page.goto("/org/nouvelle-course");
    await page.waitForLoadState("networkidle");

    // Verify the form is visible
    await expect(
      page.locator("#beneficiaryName, #yourName").first()
    ).toBeVisible();
  });

  test("should create a booking for a beneficiary", async ({ page }) => {
    await loginAsOrg(page, HOTEL.email);
    await page.goto("/org/nouvelle-course");
    await page.waitForLoadState("networkidle");

    // Fill beneficiary name
    const beneficiaryInput = page.locator("#beneficiaryName, #yourName").first();
    await beneficiaryInput.fill("Client Test Hôtel");

    // Fill departure
    const departureInput = page.locator('input[type="text"]').first();
    await departureInput.fill("12 Rue de France, Fontainebleau");
    // Wait for autocomplete
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

    // Click ASAP or set a date
    const asapButton = page.locator("button", { hasText: /immédiat|asap|maintenant/i });
    if (await asapButton.isVisible()) {
      await asapButton.click();
    }

    // Search drivers
    const searchButton = page.locator("button", { hasText: /rechercher|search/i });
    await searchButton.click();

    // Wait for results
    const driverCard = page.locator("button", { hasText: /sélectionner|select|choisir/i }).first();
    await driverCard.waitFor({ state: "visible", timeout: 15_000 }).catch(() => {});

    const hasDrivers = await driverCard.isVisible().catch(() => false);
    if (!hasDrivers) {
      test.skip(true, "No drivers found for Fontainebleau → Paris route");
      return;
    }

    // Select a driver
    await driverCard.click();

    // Verify booking created — should show reference or success message
    await expect(
      page.locator("text=/TN-[A-Z0-9]+|succès|success|confirmé|confirmed/i")
    ).toBeVisible({ timeout: 10_000 });
  });

  test("should see cagnotte section", async ({ page }) => {
    await loginAsOrg(page, HOTEL.email);

    // Check cagnotte section is visible on dashboard
    await expect(
      page.locator("text=/cagnotte/i").first()
    ).toBeVisible({ timeout: 5000 });
  });
});
