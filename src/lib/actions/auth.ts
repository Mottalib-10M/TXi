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
  } catch (error: unknown) {
    // NEXT_REDIRECT from successful signIn — must re-throw for Next.js to handle
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof (error as { digest: unknown }).digest === "string" &&
      (error as { digest: string }).digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    // Auth errors (wrong credentials, email not verified, etc.)
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

    // Unknown error — re-throw
    throw error;
  }
}
