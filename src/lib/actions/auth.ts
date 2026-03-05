"use server";

import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * Validate credentials server-side and return specific error codes.
 * Does NOT create a session — the client handles that with signIn().
 */
export async function validateCredentials(email: string, password: string) {
  // 1. Check Driver table
  const driver = await prisma.driver.findUnique({ where: { email } });

  if (driver) {
    const isValid = await compare(password, driver.passwordHash);
    if (!isValid) return { error: "INVALID_CREDENTIALS" as const };
    if (!driver.emailVerified) return { error: "EMAIL_NOT_VERIFIED" as const };
    return { ok: true as const, role: "driver" as const };
  }

  // 2. Check Organization table
  const org = await prisma.organization.findUnique({ where: { email } });

  if (org) {
    const isValid = await compare(password, org.passwordHash);
    if (!isValid) return { error: "INVALID_CREDENTIALS" as const };
    if (!org.emailVerified) return { error: "EMAIL_NOT_VERIFIED" as const };
    return { ok: true as const, role: "organization" as const };
  }

  // 3. Email not found
  return { error: "INVALID_CREDENTIALS" as const };
}
