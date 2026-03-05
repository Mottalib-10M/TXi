"use server";

import { signIn } from "@/lib/auth";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function login(email: string, password: string, locale: string) {
  // 1. Check Driver table
  const driver = await prisma.driver.findUnique({ where: { email } });

  if (driver) {
    const isValid = await compare(password, driver.passwordHash);
    if (!isValid) return { error: "INVALID_CREDENTIALS" as const };
    if (!driver.emailVerified) return { error: "EMAIL_NOT_VERIFIED" as const };

    // Credentials valid — signIn creates session and redirects
    await signIn("credentials", {
      email,
      password,
      redirectTo: `/${locale}/dashboard`,
    });
    return; // never reached — signIn redirects
  }

  // 2. Check Organization table
  const org = await prisma.organization.findUnique({ where: { email } });

  if (org) {
    const isValid = await compare(password, org.passwordHash);
    if (!isValid) return { error: "INVALID_CREDENTIALS" as const };
    if (!org.emailVerified) return { error: "EMAIL_NOT_VERIFIED" as const };

    await signIn("credentials", {
      email,
      password,
      redirectTo: `/${locale}/org`,
    });
    return;
  }

  // 3. Email not found
  return { error: "INVALID_CREDENTIALS" as const };
}
