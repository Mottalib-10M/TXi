import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encode } from "next-auth/jwt";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isAdminEmail } from "@/lib/admin";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.email || !isAdminEmail(session.user.email)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
  }

  const { driverId, organizationId } = await request.json();
  if (!driverId && !organizationId) {
    return NextResponse.json({ error: "ID chauffeur ou organisation requis" }, { status: 400 });
  }

  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const isSecure = process.env.NODE_ENV === "production";
  const cookieName = isSecure ? "__Secure-authjs.session-token" : "authjs.session-token";

  const impersonatingFrom = {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
  };

  let tokenPayload: Record<string, unknown>;
  let displayName: string;

  if (organizationId) {
    const org = await prisma.organization.findUnique({
      where: { id: organizationId },
      select: { id: true, email: true, name: true, type: true, contactName: true },
    });

    if (!org) {
      return NextResponse.json({ error: "Organisation non trouvée" }, { status: 404 });
    }

    displayName = org.name;
    tokenPayload = {
      id: org.id,
      email: org.email,
      name: org.name,
      role: "organization" as const,
      orgType: org.type,
      impersonatingFrom,
    };
  } else {
    const driver = await prisma.driver.findUnique({
      where: { id: driverId },
      select: { id: true, email: true, firstName: true, lastName: true, companyName: true },
    });

    if (!driver) {
      return NextResponse.json({ error: "Chauffeur non trouvé" }, { status: 404 });
    }

    displayName = driver.lastName
      ? `${driver.firstName} ${driver.lastName}`
      : driver.companyName
        ? `${driver.firstName} — ${driver.companyName}`
        : driver.firstName;

    tokenPayload = {
      id: driver.id,
      email: driver.email,
      name: displayName,
      role: "driver" as const,
      impersonatingFrom,
    };
  }

  const token = await encode({
    secret,
    salt: cookieName,
    token: tokenPayload,
    maxAge: 60 * 60, // 1 hour
  });

  const cookieStore = await cookies();

  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: isSecure,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60,
  });

  return NextResponse.json({ message: "Impersonation active", name: displayName });
}
