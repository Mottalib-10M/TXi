import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { getLocationById } from "@/data/predefined-locations";
import { haversineDistance } from "@/lib/geo";
import { sendEmail, buildSharedTaxiProposalEmail } from "@/lib/email";

const proposeSchema = z.object({
  departureLocationId: z.string().min(1),
  destinationLocationId: z.string().min(1),
  departureTime: z.string(),
  totalSeats: z.number().min(1).max(4),
  proposerName: z.string().min(1).optional(),
  proposerEmail: z.string().email().optional(),
  proposerPhone: z.string().optional().default(""),
  comment: z.string().max(500).optional().default(""),
  locale: z.enum(["fr", "en"]).optional().default("fr"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = proposeSchema.parse(body);

    // Check auth — if session exists, use session user info
    const session = await auth();
    let proposerName = data.proposerName || "";
    let proposerEmail = data.proposerEmail || "";
    let proposerPhone = data.proposerPhone || "";

    if (session?.user) {
      proposerName = session.user.name || proposerName;
      proposerEmail = session.user.email || proposerEmail;
      // Try to get phone from driver record if available
      if (session.user.id) {
        const driver = await prisma.driver.findUnique({
          where: { id: session.user.id },
          select: { phone: true },
        });
        if (driver?.phone) proposerPhone = driver.phone;
      }
    }

    // Require name and email (either from session or body)
    if (!proposerName || !proposerEmail) {
      return NextResponse.json({ error: "Nom et email requis" }, { status: 400 });
    }

    const departure = getLocationById(data.departureLocationId);
    if (!departure) {
      return NextResponse.json({ error: "Lieu de départ invalide" }, { status: 400 });
    }

    const destination = getLocationById(data.destinationLocationId);
    if (!destination) {
      return NextResponse.json({ error: "Destination invalide" }, { status: 400 });
    }

    // Create the shared route with PENDING_DRIVER status
    const route = await prisma.sharedRoute.create({
      data: {
        driverId: null,
        departureLocationId: data.departureLocationId,
        departureName: departure.name,
        departureLat: departure.lat,
        departureLng: departure.lng,
        destinationName: destination.name,
        destinationLat: destination.lat,
        destinationLng: destination.lng,
        departureTime: new Date(data.departureTime),
        totalSeats: data.totalSeats,
        status: "PENDING_DRIVER",
        proposerName,
        proposerEmail,
        proposerPhone,
      },
    });

    // Add proposer as first passenger
    await prisma.sharedRoutePassenger.create({
      data: {
        sharedRouteId: route.id,
        passengerName: proposerName,
        passengerEmail: proposerEmail,
        passengerPhone: proposerPhone,
        seatCount: 1,
      },
    });

    // Find eligible drivers (active, with zone coordinates, within 50km of departure)
    const drivers = await prisma.driver.findMany({
      where: {
        isActive: true,
        zoneLat: { not: null },
        zoneLng: { not: null },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        zoneLat: true,
        zoneLng: true,
      },
    });

    const dateLocale = data.locale === "en" ? "en-GB" : "fr-FR";
    const departureDate = new Date(data.departureTime).toLocaleDateString(dateLocale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });

    const eligibleDrivers = drivers.filter((d) => {
      if (d.zoneLat == null || d.zoneLng == null) return false;
      const dist = haversineDistance(departure.lat, departure.lng, d.zoneLat, d.zoneLng);
      return dist <= 50;
    });

    // Send email to each eligible driver (fire-and-forget)
    for (const driver of eligibleDrivers) {
      const driverName = driver.lastName
        ? `${driver.firstName} ${driver.lastName}`
        : driver.firstName;

      const emailData = buildSharedTaxiProposalEmail({
        driverName,
        proposerName,
        departure: departure.name,
        destination: destination.name,
        departureDate,
        totalSeats: data.totalSeats,
        routeId: route.id,
        comment: data.comment || undefined,
        locale: data.locale,
      });

      sendEmail({
        to: driver.email,
        subject: emailData.subject,
        html: emailData.html,
      });
    }

    console.log(`[SharedRoute] Proposed route ${route.id} by ${proposerName}, notified ${eligibleDrivers.length} drivers`);

    return NextResponse.json({ id: route.id, driversNotified: eligibleDrivers.length }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("SharedRoute propose error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
