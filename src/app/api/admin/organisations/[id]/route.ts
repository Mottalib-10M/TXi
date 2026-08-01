import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const org = await prisma.organization.findUnique({
      where: { id: params.id },
      select: { id: true, email: true },
    });

    if (!org) {
      return NextResponse.json({ error: "Organisation introuvable" }, { status: 404 });
    }

    await prisma.$transaction(async (tx) => {
      // 1. Delete cagnotte transactions
      await tx.cagnotteTransaction.deleteMany({ where: { organizationId: org.id } });

      // 2. Delete favorite driver entries
      await tx.favoriteDriver.deleteMany({ where: { organizationId: org.id } });

      // 3. Unlink bookings
      await tx.booking.updateMany({
        where: { organizationId: org.id },
        data: { organizationId: null },
      });

      // 4. Delete verification/reset tokens
      await tx.emailVerificationToken.deleteMany({ where: { email: org.email } });
      await tx.passwordResetToken.deleteMany({ where: { email: org.email } });

      // 5. Delete the organization
      await tx.organization.delete({ where: { id: org.id } });
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin org delete error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    );
  }
}
