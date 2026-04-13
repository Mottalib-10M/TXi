import { test, expect } from "@playwright/test";
import { loginAsDriver, DRIVERS } from "./helpers/auth";

test.describe("Driver dashboard", () => {
  test("should login and see dashboard", async ({ page }) => {
    await loginAsDriver(page, DRIVERS.lucas);

    // Verify dashboard greeting
    await expect(page.locator("text=/Bonjour|Hello/i")).toBeVisible();

    // Check that profile section or stats are visible
    await expect(
      page.locator("text=/réservation|booking|profil|profile/i").first()
    ).toBeVisible();
  });

  test("should navigate to reservations page", async ({ page }) => {
    await loginAsDriver(page, DRIVERS.lucas);

    // Navigate to reservations
    await page.goto("/dashboard/reservations");
    await page.waitForLoadState("networkidle");

    // Verify the reservations page loaded — filter buttons should be visible
    await expect(
      page.locator("button", { hasText: /toutes|all/i })
    ).toBeVisible();
  });

  test("should accept a pending reservation", async ({ page }) => {
    await loginAsDriver(page, DRIVERS.lucas);
    await page.goto("/dashboard/reservations");
    await page.waitForLoadState("networkidle");

    // Filter by pending
    const pendingFilter = page.locator("button", { hasText: /attente|pending/i }).first();
    await pendingFilter.click();

    // Check if there are pending reservations
    const acceptButton = page.locator("button", { hasText: /accepter|accept/i }).first();
    const hasPending = await acceptButton.isVisible().catch(() => false);

    if (!hasPending) {
      test.skip(true, "No pending reservations to accept");
      return;
    }

    // Accept the reservation
    await acceptButton.click();

    // Wait for status change
    await expect(
      page.locator("text=/accepté|accepted/i").first()
    ).toBeVisible({ timeout: 5000 });
  });

  test("should reject a pending reservation", async ({ page }) => {
    await loginAsDriver(page, DRIVERS.lucas);
    await page.goto("/dashboard/reservations");
    await page.waitForLoadState("networkidle");

    // Filter by pending
    const pendingFilter = page.locator("button", { hasText: /attente|pending/i }).first();
    await pendingFilter.click();

    // Check if there are pending reservations
    const rejectButton = page.locator("button", { hasText: /refuser|reject/i }).first();
    const hasPending = await rejectButton.isVisible().catch(() => false);

    if (!hasPending) {
      test.skip(true, "No pending reservations to reject");
      return;
    }

    // Reject the reservation
    await rejectButton.click();

    // Wait for status change
    await expect(
      page.locator("text=/refusé|rejected/i").first()
    ).toBeVisible({ timeout: 5000 });
  });
});
