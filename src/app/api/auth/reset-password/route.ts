import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { token, password } = await request.json();

    if (!token || !password) {
      return NextResponse.json({ error: "Données manquantes" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Le mot de passe doit contenir au moins 6 caractères" }, { status: 400 });
    }

    const record = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!record || record.expiresAt < new Date()) {
      if (record) {
        await prisma.passwordResetToken.delete({ where: { id: record.id } });
      }
      return NextResponse.json({ error: "Lien expiré ou invalide. Veuillez refaire une demande." }, { status: 400 });
    }

    const passwordHash = await hash(password, 12);

    // Update password on Driver or Organization
    const driver = await prisma.driver.findUnique({ where: { email: record.email } });
    if (driver) {
      await prisma.driver.update({
        where: { id: driver.id },
        data: { passwordHash },
      });
    } else {
      const org = await prisma.organization.findUnique({ where: { email: record.email } });
      if (org) {
        await prisma.organization.update({
          where: { id: org.id },
          data: { passwordHash },
        });
      }
    }

    // Delete the used token
    await prisma.passwordResetToken.delete({ where: { id: record.id } });

    return NextResponse.json({ message: "Mot de passe modifié avec succès" });
  } catch (error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
