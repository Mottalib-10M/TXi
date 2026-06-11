import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/admin";
import { applyStrictRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const rateLimited = await applyStrictRateLimit();
    if (rateLimited) return rateLimited;

    const { password } = await request.json();

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
      console.error("ADMIN_PASSWORD env var is not set");
      return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: "Mot de passe incorrect" }, { status: 401 });
    }

    const token = await createAdminToken();
    const cookieStore = await cookies();
    const isSecure = process.env.NODE_ENV === "production";

    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: isSecure,
      sameSite: "lax",
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
