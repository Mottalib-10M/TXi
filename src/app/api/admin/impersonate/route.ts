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

  const { driverId } = await request.json();
  if (!driverId) {
    return NextResponse.json({ error: "ID chauffeur requis" }, { status: 400 });
  }

  const driver = await prisma.driver.findUnique({
    where: { id: driverId },
    select: { id: true, email: true, firstName: true, lastName: true, companyName: true },
  });

  if (!driver) {
    return NextResponse.json({ error: "Chauffeur non trouvé" }, { status: 404 });
  }

  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const isSecure = process.env.NODE_ENV === "production";
  const cookieName = isSecure ? "__Secure-authjs.session-token" : "authjs.session-token";

  const driverName = driver.lastName
    ? `${driver.firstName} ${driver.lastName}`
    : driver.companyName
      ? `${driver.firstName} — ${driver.companyName}`
      : driver.firstName;

  // Create a new JWT token with the driver's identity + impersonation info
  const token = await encode({
    secret,
    salt: cookieName,
    token: {
      id: driver.id,
      email: driver.email,
      name: driverName,
      role: "driver" as const,
      impersonatingFrom: {
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      },
    },
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

  return NextResponse.json({ message: "Impersonation active", driverName });
}
