import { type Page, expect } from "@playwright/test";

export const TEST_PASSWORD = "Test1234!";

export const DRIVERS = {
  lucas: "lucas.moreau@test.fontainebleau.com",
  emma: "emma.bernard@test.fontainebleau.com",
  hugo: "hugo.lefevre@test.fontainebleau.com",
  lea: "lea.rousseau@test.fontainebleau.com",
};

export const HOTEL = {
  email: "hotel@test.fontainebleau.com",
  name: "Hôtel & Spa du Château",
};

export async function loginAsDriver(page: Page, email: string) {
  await page.goto("/connexion");
  await page.locator("#email").fill(email);
  await page.locator("#password").fill(TEST_PASSWORD);
  await page.locator('button[type="submit"]').click();
  // Wait for redirect to dashboard
  await page.waitForURL("**/dashboard**", { timeout: 10_000 });
  await expect(page).toHaveURL(/\/dashboard/);
}

export async function loginAsOrg(page: Page, email: string) {
  await page.goto("/connexion");
  await page.locator("#email").fill(email);
  await page.locator("#password").fill(TEST_PASSWORD);
  await page.locator('button[type="submit"]').click();
  // Wait for redirect to org dashboard
  await page.waitForURL("**/org**", { timeout: 10_000 });
  await expect(page).toHaveURL(/\/org/);
}
