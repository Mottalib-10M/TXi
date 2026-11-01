import type { Prisma } from "@prisma/client";
import { notifyDriver } from "@/lib/push";
import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";
import { deleteDriverAccount } from "@/lib/accountDeletion";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data: Prisma.DriverUpdateInput = {};
    const before = await prisma.driver.findUnique({ where: { id: params.id }, select: { isVerified: true } });

    if (typeof body.isActive === "boolean") {
      data.isActive = body.isActive;
    }
    if (typeof body.isVerified === "boolean") {
      data.isVerified = body.isVerified;
      // Décision de l'administration : plus d'autorisation automatique (src/lib/carte-pro.ts).
      data.carteProSubmittedAt = null;
      data.carteProAutoApprovedAt = null;
      if (body.isVerified) data.carteProRefusedAt = null;
    }

    // Carte refusée : le chauffeur la renvoie depuis l'écran Courses.
    const refuseCarte = body.refuseCartePro === true;
    if (refuseCarte) {
      data.carteProUrl = null;
      data.isVerified = false;
      data.carteProSubmittedAt = null;
      data.carteProAutoApprovedAt = null;
      data.carteProRefusedAt = new Date();
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "Aucun champ à modifier" }, { status: 400 });
    }

    const driver = await prisma.driver.update({
      where: { id: params.id },
      data,
      select: { id: true, isActive: true, isVerified: true },
    });

    if (refuseCarte) await notifyDriver(driver.id, "carteRefused", {});
    else if (driver.isVerified && before && !before.isVerified) await notifyDriver(driver.id, "carteVerified", {});

    return NextResponse.json(driver);
  } catch (error) {
    console.error("Admin driver update error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la mise à jour" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const driver = await prisma.driver.findUnique({
      where: { id: params.id },
      select: { id: true, email: true, referralCode: true },
    });

    if (!driver) {
      return NextResponse.json({ error: "Chauffeur introuvable" }, { status: 404 });
    }

    // Même suppression complète que « Supprimer mon compte » (src/lib/accountDeletion.ts).
    await deleteDriverAccount(driver.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin driver delete error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
