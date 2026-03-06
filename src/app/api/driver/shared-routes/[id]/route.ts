import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { sendEmail, buildSharedTaxiCancelEmail } from "@/lib/email";

const updateSchema = z.object({
  status: z.enum(["DEPARTED", "CANCELLED"]),
});

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user?.id || session.user.role !== "driver") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();
    const data = updateSchema.parse(body);

    const route = await prisma.sharedRoute.findUnique({
      where: { id },
      include: {
        passengers: { where: { status: "CONFIRMED" } },
        driver: { select: { firstName: true, lastName: true } },
      },
    });

    if (!route) {
      return NextResponse.json({ error: "Trajet introuvable" }, { status: 404 });
    }

    if (route.driverId !== session.user.id) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 });
    }

    const updated = await prisma.sharedRoute.update({
      where: { id },
      data: { status: data.status },
    });

    // Notify all confirmed passengers when the route is cancelled
    if (data.status === "CANCELLED" && route.passengers.length > 0) {
      const driverName = route.driver ? `${route.driver.firstName} ${route.driver.lastName}` : "Chauffeur";
      const departureDate = route.departureTime.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await Promise.all(
        route.passengers.map((passenger) => {
          const emailData = buildSharedTaxiCancelEmail({
            passengerName: passenger.passengerName,
            driverName,
            departure: route.departureName,
            destination: route.destinationName,
            departureDate,
          });
          return sendEmail({
            to: passenger.passengerEmail,
            subject: emailData.subject,
            html: emailData.html,
          });
        })
      );
    }

    return NextResponse.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("Update shared route error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
