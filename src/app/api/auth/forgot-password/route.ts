import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, buildPasswordResetEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const locale: "fr" | "en" = body.locale === "en" ? "en" : "fr";

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // Look up account (driver or organization)
    const driver = await prisma.driver.findUnique({ where: { email } });
    const org = !driver ? await prisma.organization.findUnique({ where: { email } }) : null;
    const account = driver || org;

    // Always return success to prevent email enumeration
    if (!account) {
      return NextResponse.json({ message: "OK" });
    }

    // Delete old tokens for this email
    await prisma.passwordResetToken.deleteMany({ where: { email } });

    // Create new token (1 hour expiry)
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.passwordResetToken.create({
      data: { token, email, expiresAt },
    });

    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const resetUrl = `${baseUrl}/${locale}/reset-password?token=${token}`;
    const name = driver ? driver.firstName : (org?.contactName ?? "");
    const { subject, html } = buildPasswordResetEmail(name, resetUrl, locale);
    await sendEmail({ to: email, subject, html });

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
