import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { haversineDistance, estimatePrice } from "@/lib/geo";
import { generateUniqueReference } from "@/lib/reference";

const createBookingSchema = z.object({
  beneficiaryName: z.string().min(1, "Nom du bénéficiaire requis"),
  departureName: z.string().min(1),
  departureLat: z.number(),
  departureLng: z.number(),
  arrivalName: z.string().min(1),
  arrivalLat: z.number(),
  arrivalLng: z.number(),
  requestedDate: z.string(),
  passengerCount: z.number().min(1).max(8).optional().default(1),
  driverId: z.string().optional(),
  estimatedPrice: z.number().optional(),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = createBookingSchema.parse(body);

    const reference = await generateUniqueReference();
    const requestedDate = new Date(data.requestedDate);

    // Calculate distance
    const estimatedDistance = haversineDistance(
      data.departureLat,
      data.departureLng,
      data.arrivalLat,
      data.arrivalLng
    );

    let driverId = data.driverId;
    let estimatedPrice = data.estimatedPrice;

    if (!driverId) {
      // Auto-assign: find nearest available driver
      const drivers = await prisma.driver.findMany({
        where: {
          isActive: true,
          zoneLat: { not: null },
          zoneLng: { not: null },
        },
      });

      const nearbyDrivers = drivers
        .filter((d) => {
          if (!d.zoneLat || !d.zoneLng) return false;
          const distance = haversineDistance(
            data.departureLat,
            data.departureLng,
            d.zoneLat,
            d.zoneLng
          );
          return distance <= d.zoneRadius;
        })
        .sort((a, b) => {
          const distA = haversineDistance(data.departureLat, data.departureLng, a.zoneLat!, a.zoneLng!);
          const distB = haversineDistance(data.departureLat, data.departureLng, b.zoneLat!, b.zoneLng!);
          return distA - distB;
        });

      if (nearbyDrivers.length > 0) {
        driverId = nearbyDrivers[0].id;
        if (estimatedDistance) {
          estimatedPrice = estimatePrice(
            estimatedDistance,
            nearbyDrivers[0].baseFare,
            nearbyDrivers[0].pricePerKm,
            nearbyDrivers[0].minimumFare
          );
        }
      }
    } else {
      // Verify the driver exists
      const driver = await prisma.driver.findUnique({ where: { id: driverId } });
      if (!driver) {
        return NextResponse.json({ error: "Chauffeur non trouvé" }, { status: 404 });
      }
      if (estimatedDistance && !estimatedPrice) {
        estimatedPrice = estimatePrice(
          estimatedDistance,
          driver.baseFare,
          driver.pricePerKm,
          driver.minimumFare
        );
      }
    }

    // Lock the price
    const lockedPrice = estimatedPrice || null;

    // Fetch org info for contact details
    const org = await prisma.organization.findUnique({
      where: { id: session.user.id },
      select: { email: true, phone: true },
    });

    const booking = await prisma.booking.create({
      data: {
        reference,
        clientName: data.beneficiaryName,
        clientEmail: org?.email || session.user.email || "",
        clientPhone: org?.phone || "",
        departureName: data.departureName,
        departureLat: data.departureLat,
        departureLng: data.departureLng,
        arrivalName: data.arrivalName,
        arrivalLat: data.arrivalLat,
        arrivalLng: data.arrivalLng,
        requestedDate,
        passengerCount: data.passengerCount,
        estimatedDistance,
        estimatedPrice,
        lockedPrice,
        driverId,
        organizationId: session.user.id,
        beneficiaryName: data.beneficiaryName,
        source: "ORGANIZATION",
      },
    });

    return NextResponse.json(
      { message: "Course créée", reference: booking.reference, bookingId: booking.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0].message }, { status: 400 });
    }
    console.error("Org booking error:", error);
    return NextResponse.json({ error: "Erreur lors de la réservation" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "organization") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "50");
  const status = searchParams.get("status");

  try {
    const where: Record<string, unknown> = { organizationId: session.user.id };
    if (status) where.status = status;

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: {
          driver: {
            select: {
              firstName: true,
              lastName: true,
              zoneLat: true,
              zoneLng: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        take: limit,
      }),
      prisma.booking.count({ where }),
    ]);

    return NextResponse.json({ bookings, total });
  } catch (error) {
    console.error("Org bookings fetch error:", error);
    return NextResponse.json({ error: "Erreur" }, { status: 500 });
  }
}
