import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { haversineDistance, getRoutingDistance, estimatePrice, estimateDefaultPrice, isValidCoords, geocodeAddress } from "@/lib/geo";
import { generateUniqueReference } from "@/lib/reference";
import { sendEmail, buildDriverNotificationEmail } from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { runEscalation } from "@/lib/escalation";
import { createNotification } from "@/lib/notifications";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const createBookingSchema = z.object({
  beneficiaryName: z.string().optional().default(""),
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

    // Resolve coordinates — fallback to Google Geocoding if (0,0) or null
    let depLat = data.departureLat;
    let depLng = data.departureLng;
    let arrLat = data.arrivalLat;
    let arrLng = data.arrivalLng;

    if (!isValidCoords(depLat, depLng)) {
      const geo = await geocodeAddress(data.departureName);
      if (geo) { depLat = geo.lat; depLng = geo.lng; }
    }
    if (!isValidCoords(arrLat, arrLng)) {
      const geo = await geocodeAddress(data.arrivalName);
      if (geo) { arrLat = geo.lat; arrLng = geo.lng; }
    }

    // Calculate distance (real driving distance via OSRM)
    let estimatedDistance: number | undefined;
    if (isValidCoords(depLat, depLng) && isValidCoords(arrLat, arrLng)) {
      const routing = await getRoutingDistance(depLat, depLng, arrLat, arrLng);
      estimatedDistance = routing.distanceKm;
    }

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
            depLat,
            depLng,
            d.zoneLat,
            d.zoneLng
          );
          return distance <= d.zoneRadius;
        })
        .sort((a, b) => {
          const distA = haversineDistance(depLat, depLng, a.zoneLat!, a.zoneLng!);
          const distB = haversineDistance(depLat, depLng, b.zoneLat!, b.zoneLng!);
          return distA - distB;
        });

      if (nearbyDrivers.length > 0) {
        driverId = nearbyDrivers[0].id;
        if (estimatedDistance) {
          estimatedPrice = estimatePrice(
            estimatedDistance,
            nearbyDrivers[0].baseFare,
            nearbyDrivers[0].pricePerKm,
            nearbyDrivers[0].minimumFare,
            nearbyDrivers[0].pricePerKmNight,
            requestedDate,
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
          driver.minimumFare,
          driver.pricePerKmNight,
          requestedDate,
        );
      }
    }

    // Fallback: if we have distance but no price (no driver), use national regulated tariffs
    if (estimatedDistance && !estimatedPrice) {
      estimatedPrice = estimateDefaultPrice(estimatedDistance);
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
        departureLat: depLat,
        departureLng: depLng,
        arrivalName: data.arrivalName,
        arrivalLat: arrLat,
        arrivalLng: arrLng,
        requestedDate,
        passengerCount: data.passengerCount,
        estimatedDistance,
        estimatedPrice,
        lockedPrice,
        driverId,
        organizationId: session.user.id,
        beneficiaryName: data.beneficiaryName,
        source: "ORGANIZATION",
        clientLocale: "fr",
      },
      include: { driver: true },
    });

    createNotification({
      type: "ORG_BOOKING_CREATED",
      title: `Réservation org #${reference}`,
      body: `${data.beneficiaryName} — ${data.departureName} → ${data.arrivalName}`,
      metadata: { bookingId: booking.id, reference, organizationId: session.user.id },
    });

    // Send notifications to assigned driver
    if (booking.driver) {
      const dateFormatted = format(requestedDate, "dd MMMM yyyy 'à' HH:mm", { locale: fr });

      if (booking.driver.notifyEmail) {
        const emailData = buildDriverNotificationEmail({
          driverName: booking.driver.firstName,
          clientName: data.beneficiaryName,
          departure: data.departureName,
          arrival: data.arrivalName,
          date: dateFormatted,
          reference,
          bookingId: booking.id,
          price: lockedPrice,
          source: "ORGANIZATION",
          locale: "fr",
        });
        await sendEmail({ to: booking.driver.email, ...emailData });
      }

      if (booking.driver.notifySms && booking.driver.phone) {
        const smsText = `TaxiNeo - Nouvelle réservation #${reference} de ${data.beneficiaryName}. ${data.departureName} → ${data.arrivalName}. Connectez-vous pour accepter.`;
        await sendSms(booking.driver.phone, smsText);
      }
    }

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

    // Escalate pending bookings before fetching
    await runEscalation().catch((e) => console.error("Escalation error:", e));

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: {
          driver: {
            select: {
              firstName: true,
              lastName: true,
              phone: true,
              zoneLat: true,
              zoneLng: true,
              vehicleBrand: true,
              vehicleModel: true,
              vehicles: true,
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
