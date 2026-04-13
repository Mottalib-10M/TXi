import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { encode } from "@auth/core/jwt";
import { cookies } from "next/headers";

const IS_PROD = process.env.NODE_ENV === "production";
const COOKIE_NAME = IS_PROD ? "__Secure-authjs.session-token" : "authjs.session-token";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(new URL("/fr/connexion?error=invalid_token", request.url));
  }

  const record = await prisma.emailVerificationToken.findUnique({
    where: { token },
  });

  if (!record || record.expiresAt < new Date()) {
    // Clean up expired token if it exists
    if (record) {
      await prisma.emailVerificationToken.delete({ where: { id: record.id } });
    }
    return NextResponse.redirect(new URL("/fr/connexion?error=expired_token", request.url));
  }

  // Mark email as verified on Driver or Organization and auto-login
  const driver = await prisma.driver.findUnique({ where: { email: record.email } });
  if (driver) {
    await prisma.driver.update({
      where: { id: driver.id },
      data: { emailVerified: true },
    });

    // Delete the used token
    await prisma.emailVerificationToken.delete({ where: { id: record.id } });

    // Auto-login: create JWT session
    const secret = process.env.NEXTAUTH_SECRET!;
    const sessionToken = await encode({
      token: {
        name: driver.lastName
          ? `${driver.firstName} ${driver.lastName}`
          : driver.companyName
            ? `${driver.firstName} — ${driver.companyName}`
            : driver.firstName,
        email: driver.email,
        sub: driver.id,
        id: driver.id,
        role: "driver" as const,
      },
      secret,
      salt: COOKIE_NAME,
      maxAge: 30 * 24 * 60 * 60,
    });

    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: IS_PROD,
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return NextResponse.redirect(new URL("/fr/dashboard", request.url));
  }

  const org = await prisma.organization.findUnique({ where: { email: record.email } });
  if (org) {
    await prisma.organization.update({
      where: { id: org.id },
      data: { emailVerified: true },
    });

    // Delete the used token
    await prisma.emailVerificationToken.delete({ where: { id: record.id } });

    // Auto-login: create JWT session
    const secret = process.env.NEXTAUTH_SECRET!;
    const sessionToken = await encode({
      token: {
        name: org.name,
        email: org.email,
        sub: org.id,
        id: org.id,
        role: "organization" as const,
        orgType: org.type,
      },
      secret,
      salt: COOKIE_NAME,
      maxAge: 30 * 24 * 60 * 60,
    });

    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: IS_PROD,
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    // Redirect based on org type: INDIVIDUAL goes to /dashboard, others to /org
    const redirectPath = org.type === "INDIVIDUAL" ? "/fr/dashboard" : "/fr/org";
    return NextResponse.redirect(new URL(redirectPath, request.url));
  }

  // No account found — fallback
  await prisma.emailVerificationToken.delete({ where: { id: record.id } });
  return NextResponse.redirect(new URL("/fr/connexion?verified=true", request.url));
}
