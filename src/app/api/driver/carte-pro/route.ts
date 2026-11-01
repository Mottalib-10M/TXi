import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { applyStrictRateLimit } from "@/lib/rate-limit";
import { carteProError, notifyAdminsCartePro, storeCartePro } from "@/lib/carte-pro";
import { isDemoEmail } from "@/lib/demo";

// Le chauffeur envoie sa carte depuis l'écran Courses : son compte passe en attente
// de validation par l'administration (src/lib/driver-verification.ts).
export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }
  const rateLimited = await applyStrictRateLimit();
  if (rateLimited) return rateLimited;

  try {
    const { carteProBase64 } = await request.json();
    if (typeof carteProBase64 !== "string") {
      return NextResponse.json({ error: "Aucun fichier" }, { status: 400 });
    }
    const invalid = carteProError(carteProBase64);
    if (invalid) return NextResponse.json({ error: invalid }, { status: 400 });

    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { id: true, email: true, isVerified: true, carteProUrl: true, carteProRefusedAt: true },
    });
    if (!driver || isDemoEmail(driver.email)) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
    }
    // Une carte déjà envoyée ne se remplace pas : le chauffeur ne relance pas l'attente de 24 h
    // et une carte validée reste celle qu'on a vue. Il la renvoie après un refus.
    // Un chauffeur déjà validé n'a rien à envoyer : un dépôt lui retirerait ses courses.
    if (driver.carteProUrl || driver.isVerified) {
      return NextResponse.json({ error: "Carte déjà envoyée" }, { status: 409 });
    }

    const autoApproval = !driver.carteProRefusedAt;
    const carteProUrl = await storeCartePro(carteProBase64);
    await prisma.driver.update({
      where: { id: driver.id },
      data: {
        carteProUrl,
        isVerified: false,
        carteProSubmittedAt: autoApproval ? new Date() : null,
        carteProAutoApprovedAt: null,
      },
    });

    await notifyAdminsCartePro(driver.id, autoApproval);

    return NextResponse.json({ status: "pending" });
  } catch (error) {
    console.error("Carte pro upload error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
