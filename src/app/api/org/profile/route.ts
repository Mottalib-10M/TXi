import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const org = await prisma.organization.findUnique({
      where: { id: session.user.id },
      include: {
        cagnotteHistory: {
          include: {
            booking: {
              select: {
                reference: true,
                beneficiaryName: true,
                lockedPrice: true,
              },
            },
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!org) {
      return NextResponse.json({ error: "Organisation non trouvée" }, { status: 404 });
    }

    return NextResponse.json({
      id: org.id,
      name: org.name,
      type: org.type,
      contactName: org.contactName,
      email: org.email,
      phone: org.phone,
      address: org.address,
      cagnotteBalance: org.cagnotteBalance,
      cagnotteHistory: org.cagnotteHistory,
    });
  } catch (error) {
    console.error("Org profile error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { name, contactName, phone, address, password } = body;

    const updateData: Record<string, unknown> = {};
    if (name) updateData.name = name;
    if (contactName) updateData.contactName = contactName;
    if (phone !== undefined) updateData.phone = phone;
    if (address !== undefined) updateData.address = address;
    if (password && password.length >= 6) {
      updateData.passwordHash = await hash(password, 12);
    }

    await prisma.organization.update({
      where: { id: session.user.id },
      data: updateData,
    });

    return NextResponse.json({ message: "Profil mis à jour" });
  } catch (error) {
    console.error("Org profile update error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
