"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function login(email: string, password: string, locale: string) {
  // Determine redirect destination based on user type
  const driver = await prisma.driver.findUnique({
    where: { email },
    select: { id: true },
  });
  const dest = driver ? `/${locale}/dashboard` : `/${locale}/org`;

  try {
    await signIn("credentials", { email, password, redirectTo: dest });
  } catch (error) {
    if (error instanceof AuthError) {
      const cause = error.cause as
        | { err?: { message?: string }; message?: string }
        | undefined;
      if (
        error.message?.includes("EMAIL_NOT_VERIFIED") ||
        cause?.message?.includes("EMAIL_NOT_VERIFIED") ||
        cause?.err?.message?.includes("EMAIL_NOT_VERIFIED")
      ) {
        return { error: "EMAIL_NOT_VERIFIED" as const };
      }
      return { error: "INVALID_CREDENTIALS" as const };
    }
    throw error; // Re-throw NEXT_REDIRECT (expected on successful signIn)
  }
}
