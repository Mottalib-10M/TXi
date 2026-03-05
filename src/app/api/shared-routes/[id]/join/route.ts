import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";

const joinSchema = z.object({
  passengerName: z.string().min(2),
  passengerEmail: z.string().email(),
  passengerPhone: z.string().optional().default(""),
  seatCount: z.number().min(1).max(8),
  luggageType: z.enum(["NONE", "SMALL", "LARGE"]).optional().default("NONE"),
});

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const data = joinSchema.parse(body);

    const result = await prisma.$transaction(async (tx) => {
      const route = await tx.sharedRoute.findUnique({
        where: { id },
        include: {
          passengers: { where: { status: "CONFIRMED" } },
          driver: { select: { firstName: true, lastName: true, email: true, notifyEmail: true } },
        },
      });

      if (!route) {
        throw new Error("ROUTE_NOT_FOUND");
      }

      if (route.status !== "ACTIVE") {
        throw new Error("ROUTE_NOT_ACTIVE");
      }

      const occupiedSeats = route.passengers.reduce((sum, p) => sum + p.seatCount, 0);
      const availableSeats = route.totalSeats - occupiedSeats;

      if (data.seatCount > availableSeats) {
        throw new Error("NOT_ENOUGH_SEATS");
      }

      const passenger = await tx.sharedRoutePassenger.create({
        data: {
          sharedRouteId: id,
          passengerName: data.passengerName,
          passengerEmail: data.passengerEmail,
          passengerPhone: data.passengerPhone || "",
          seatCount: data.seatCount,
          luggageType: data.luggageType as "NONE" | "SMALL" | "LARGE",
        },
      });

      const newOccupied = occupiedSeats + data.seatCount;
      if (newOccupied >= route.totalSeats) {
        await tx.sharedRoute.update({
          where: { id },
          data: { status: "FULL" },
        });
      }

      return { passenger, route };
    });

    // Send notification email to driver
    if (result.route.driver.notifyEmail) {
      const departureDate = result.route.departureTime.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      await sendEmail({
        to: result.route.driver.email,
        subject: `Nouveau passager — ${result.route.departureName} → ${result.route.destinationName}`,
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #171717;">Nouveau passager pour votre trajet</h2>
            <p>Bonjour ${result.route.driver.firstName},</p>
            <p><strong>${data.passengerName}</strong> a rejoint votre trajet partagé :</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Trajet</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${result.route.departureName} → ${result.route.destinationName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Départ</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${departureDate}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Passager</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.passengerName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; color: #737373;">Places</td><td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-weight: 500;">${data.seatCount}</td></tr>
              <tr><td style="padding: 8px; color: #737373;">Email</td><td style="padding: 8px; font-weight: 500;">${data.passengerEmail}</td></tr>
            </table>
            <p style="color: #a3a3a3; font-size: 12px;">— L'équipe TaxiNeo</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ message: "Inscription confirmée" }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    if (error instanceof Error) {
      if (error.message === "ROUTE_NOT_FOUND") {
        return NextResponse.json({ error: "Trajet introuvable" }, { status: 404 });
      }
      if (error.message === "ROUTE_NOT_ACTIVE") {
        return NextResponse.json({ error: "Ce trajet n'est plus disponible" }, { status: 400 });
      }
      if (error.message === "NOT_ENOUGH_SEATS") {
        return NextResponse.json({ error: "Pas assez de places disponibles" }, { status: 400 });
      }
    }
    console.error("Join route error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
