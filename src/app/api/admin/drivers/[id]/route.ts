import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { isAdminEmail } from "@/lib/admin";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.email || !isAdminEmail(session.user.email)) {
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
