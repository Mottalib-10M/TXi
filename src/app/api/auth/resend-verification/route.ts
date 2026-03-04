import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendEmail, buildVerificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    const locale: "fr" | "en" = body.locale === "en" ? "en" : "fr";

    if (!email) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    // Check if account exists and is not yet verified
    const driver = await prisma.driver.findUnique({ where: { email } });
    const org = !driver ? await prisma.organization.findUnique({ where: { email } }) : null;

    const account = driver || org;
    if (!account || account.emailVerified) {
      // Return success even if not found (prevent email enumeration)
      return NextResponse.json({ message: "OK" });
    }

    // Delete old tokens for this email
    await prisma.emailVerificationToken.deleteMany({ where: { email } });

    // Create new token
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await prisma.emailVerificationToken.create({
      data: { token, email, expiresAt },
    });

    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${token}`;
    const name = driver ? driver.firstName : (org?.contactName ?? "");
    const { subject, html } = buildVerificationEmail(name, verifyUrl, locale);
    await sendEmail({ to: email, subject, html });

    return NextResponse.json({ message: "OK" });
  } catch (error) {
    console.error("Resend verification error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
