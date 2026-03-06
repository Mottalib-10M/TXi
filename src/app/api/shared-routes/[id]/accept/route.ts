import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { sendEmail, buildSharedTaxiDriverFoundEmail } from "@/lib/email";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id || session.user.role !== "driver") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { id } = await params;

    // Use a transaction to prevent race conditions
    const result = await prisma.$transaction(async (tx) => {
      const route = await tx.sharedRoute.findUnique({
        where: { id },
      });

      if (!route) {
        throw new Error("NOT_FOUND");
      }

      if (route.status !== "PENDING_DRIVER") {
        throw new Error("ALREADY_TAKEN");
      }

      // Assign driver and activate
      const updated = await tx.sharedRoute.update({
        where: { id },
        data: {
          driverId: session.user.id,
          status: "ACTIVE",
        },
      });

      return updated;
    });

    // Fetch driver details for the confirmation email
    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: {
        firstName: true,
        lastName: true,
        phone: true,
        vehicleBrand: true,
        vehicleModel: true,
        vehicleColor: true,
      },
    });

    // Send confirmation email to proposer
    if (result.proposerEmail && result.proposerName && driver) {
      const driverName = driver.lastName
        ? `${driver.firstName} ${driver.lastName}`
        : driver.firstName;

      const vehicleParts = [driver.vehicleBrand, driver.vehicleModel, driver.vehicleColor].filter(Boolean);
      const vehicleDescription = vehicleParts.length > 0 ? vehicleParts.join(" ") : "—";

      const departureDate = result.departureTime.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      });

      const emailData = buildSharedTaxiDriverFoundEmail({
        proposerName: result.proposerName,
        driverName,
        driverPhone: driver.phone,
        vehicleDescription,
        departure: result.departureName,
        destination: result.destinationName,
        departureDate,
      });

      sendEmail({
        to: result.proposerEmail,
        subject: emailData.subject,
        html: emailData.html,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === "NOT_FOUND") {
        return NextResponse.json({ error: "Trajet introuvable" }, { status: 404 });
      }
      if (error.message === "ALREADY_TAKEN") {
        return NextResponse.json({ error: "Ce trajet a déjà été accepté par un autre chauffeur" }, { status: 409 });
      }
    }
    console.error("SharedRoute accept error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
