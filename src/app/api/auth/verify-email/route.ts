import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

  // Mark email as verified on Driver or Organization
  const driver = await prisma.driver.findUnique({ where: { email: record.email } });
  if (driver) {
    await prisma.driver.update({
      where: { id: driver.id },
      data: { emailVerified: true },
    });
  } else {
    const org = await prisma.organization.findUnique({ where: { email: record.email } });
    if (org) {
      await prisma.organization.update({
        where: { id: org.id },
        data: { emailVerified: true },
      });
    }
  }

  // Delete the used token
  await prisma.emailVerificationToken.delete({ where: { id: record.id } });

  return NextResponse.redirect(new URL("/fr/connexion?verified=true", request.url));
}
