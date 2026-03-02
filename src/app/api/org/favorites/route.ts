import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const favorites = await prisma.favoriteDriver.findMany({
      where: { organizationId: session.user.id },
      include: {
        driver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            vehicleBrand: true,
            vehicleModel: true,
            zoneAddress: true,
            phone: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ favorites });
  } catch (error) {
    console.error("Favorites fetch error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { driverId } = await request.json();

    if (!driverId) {
      return NextResponse.json({ error: "driverId requis" }, { status: 400 });
    }

    // Verify driver exists
    const driver = await prisma.driver.findUnique({ where: { id: driverId } });
    if (!driver) {
      return NextResponse.json({ error: "Chauffeur non trouvé" }, { status: 404 });
    }

    const favorite = await prisma.favoriteDriver.create({
      data: {
        organizationId: session.user.id,
        driverId,
      },
    });

    return NextResponse.json({ favorite }, { status: 201 });
  } catch (error) {
    // Handle unique constraint violation
    if (error && typeof error === "object" && "code" in error && (error as { code: string }).code === "P2002") {
      return NextResponse.json({ error: "Chauffeur déjà en favoris" }, { status: 409 });
    }
    console.error("Favorite add error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id requis" }, { status: 400 });
  }

  try {
    // Verify ownership
    const favorite = await prisma.favoriteDriver.findUnique({ where: { id } });
    if (!favorite || favorite.organizationId !== session.user.id) {
      return NextResponse.json({ error: "Favori non trouvé" }, { status: 404 });
    }

    await prisma.favoriteDriver.delete({ where: { id } });
    return NextResponse.json({ message: "Favori supprimé" });
  } catch (error) {
    console.error("Favorite delete error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
