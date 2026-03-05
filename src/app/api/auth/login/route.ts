import { NextResponse } from "next/server";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { encode } from "@auth/core/jwt";
import { cookies } from "next/headers";

const COOKIE_NAME = "__Secure-authjs.session-token";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "MISSING_FIELDS" }, { status: 400 });
    }

    // Check Driver table first
    const driver = await prisma.driver.findUnique({ where: { email } });

    if (driver) {
      const isValid = await compare(password, driver.passwordHash);
      if (!isValid) {
        return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
      }
      if (!driver.emailVerified) {
        return NextResponse.json({ error: "EMAIL_NOT_VERIFIED" }, { status: 403 });
      }

      const user = {
        id: driver.id,
        email: driver.email,
        name: driver.lastName
          ? `${driver.firstName} ${driver.lastName}`
          : driver.companyName
            ? `${driver.firstName} — ${driver.companyName}`
            : driver.firstName,
        role: "driver" as const,
      };

      // Create JWT token (same format as NextAuth)
      const secret = process.env.NEXTAUTH_SECRET!;
      const token = await encode({
        token: {
          name: user.name,
          email: user.email,
          sub: user.id,
          id: user.id,
          role: user.role,
        },
        secret,
        salt: COOKIE_NAME,
        maxAge: 30 * 24 * 60 * 60, // 30 days
      });

      // Set session cookie
      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      return NextResponse.json({ ok: true, role: "driver" });
    }

    // Check Organization table
    const org = await prisma.organization.findUnique({ where: { email } });

    if (org) {
      const isValid = await compare(password, org.passwordHash);
      if (!isValid) {
        return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
      }
      if (!org.emailVerified) {
        return NextResponse.json({ error: "EMAIL_NOT_VERIFIED" }, { status: 403 });
      }

      const secret = process.env.NEXTAUTH_SECRET!;
      const token = await encode({
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
      cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      return NextResponse.json({ ok: true, role: "organization" });
    }

    return NextResponse.json({ error: "INVALID_CREDENTIALS" }, { status: 401 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
  }
}
