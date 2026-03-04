import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { encode } from "next-auth/jwt";
import { auth } from "@/lib/auth";

export async function POST() {
  const session = await auth();
  if (!session?.user?.impersonatingFrom) {
    return NextResponse.json({ error: "Pas en mode impersonation" }, { status: 400 });
  }

  const admin = session.user.impersonatingFrom;
  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const isSecure = process.env.NODE_ENV === "production";
  const cookieName = isSecure ? "__Secure-authjs.session-token" : "authjs.session-token";

  // Recreate an admin JWT token
  const token = await encode({
    secret,
    salt: cookieName,
    token: {
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: "driver" as const,
    },
    maxAge: 30 * 24 * 60 * 60, // 30 days
  });

  const cookieStore = await cookies();

  cookieStore.set(cookieName, token, {
    httpOnly: true,
    secure: isSecure,
    sameSite: "lax",
    path: "/",
    maxAge: 30 * 24 * 60 * 60,
  });

  return NextResponse.json({ message: "Impersonation terminée" });
}
