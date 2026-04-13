import { test, expect } from "@playwright/test";

test.describe("Driver public profile", () => {
  test("should display driver info on public profile page", async ({ page }) => {
    // Go to Lucas Moreau's public profile
    await page.goto("/taxi/lucas-moreau");
    await page.waitForLoadState("networkidle");

    // Verify driver name is visible
    await expect(page.locator("text=/Lucas/i")).toBeVisible();

    // Verify vehicle info
    await expect(page.locator("text=/Peugeot|508/")).toBeVisible();

    // Verify zone info
    await expect(page.locator("text=/Fontainebleau/i")).toBeVisible();
  });

  test("should show booking form on driver profile", async ({ page }) => {
    await page.goto("/taxi/lucas-moreau");
    await page.waitForLoadState("networkidle");

    // Check that there's a booking/fare form section
    const hasForm = await page.locator('input[type="text"]').first().isVisible().catch(() => false);
    expect(hasForm).toBeTruthy();
  });

  test("should display all 4 test driver profiles", async ({ page }) => {
    const slugs = ["lucas-moreau", "emma-bernard", "hugo-lefevre", "lea-rousseau"];

    for (const slug of slugs) {
      await page.goto(`/taxi/${slug}`);
      await page.waitForLoadState("networkidle");

      // Each page should have a visible heading or driver name
      const nameVisible = await page.locator("h1, h2").first().isVisible().catch(() => false);
      expect(nameVisible).toBeTruthy();
    }
  });
});
