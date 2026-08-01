import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data: Record<string, boolean> = {};

    if (typeof body.isActive === "boolean") {
      data.isActive = body.isActive;
    }
    if (typeof body.isVerified === "boolean") {
      data.isVerified = body.isVerified;
    }

    if (Object.keys(data).length === 0) {
      return NextResponse.json({ error: "Aucun champ à modifier" }, { status: 400 });
    }

    const driver = await prisma.driver.update({
      where: { id: params.id },
      data,
      select: { id: true, isActive: true, isVerified: true },
    });

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

    await prisma.$transaction(async (tx) => {
      // 1. Delete favorite driver entries
      await tx.favoriteDriver.deleteMany({ where: { driverId: driver.id } });

      // 2. Unlink shared routes
      await tx.sharedRoute.updateMany({
        where: { driverId: driver.id },
        data: { driverId: null },
      });

      // 3. Unlink bookings (driver)
      await tx.booking.updateMany({
        where: { driverId: driver.id },
        data: { driverId: null },
      });

      // 4. Unlink bookings (referrer)
      await tx.booking.updateMany({
        where: { referrerDriverId: driver.id },
        data: { referrerDriverId: null },
      });

      // 5. Delete referral clicks
      if (driver.referralCode) {
        await tx.referralClick.deleteMany({
          where: { referralCode: driver.referralCode },
        });

        // 6. Unlink other drivers referred by this driver
        await tx.driver.updateMany({
          where: { referredByCode: driver.referralCode },
          data: { referredByCode: null },
        });
      }

      // 7. Delete verification/reset tokens
      await tx.emailVerificationToken.deleteMany({ where: { email: driver.email } });
      await tx.passwordResetToken.deleteMany({ where: { email: driver.email } });

      // 8. Delete the driver
      await tx.driver.delete({ where: { id: driver.id } });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin driver delete error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
