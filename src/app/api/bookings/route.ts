import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { haversineDistance, estimatePrice } from "@/lib/geo";
import { generateUniqueReference } from "@/lib/reference";
import {
  sendEmail,
  buildDriverNotificationEmail,
  buildClientConfirmationEmail,
} from "@/lib/email";
import { sendSms } from "@/lib/sms";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";

const bookingSchema = z.object({
  clientName: z.string().min(2),
  clientEmail: z.string().email().optional().default("noemail@taxinoir.fr"),
  clientPhone: z.string().optional().default(""),
  clientComments: z.string().optional(),
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
  source: z.enum(["LANDING", "PROFILE"]).optional().default("LANDING"),
  locale: z.enum(["fr", "en"]).optional().default("fr"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    const reference = await generateUniqueReference();
    const requestedDate = new Date(data.requestedDate);

    // Calculate distance between departure and arrival
    let estimatedDistance: number | undefined;
    let estimatedPrice = data.estimatedPrice;

    if (data.departureLat && data.departureLng && data.arrivalLat && data.arrivalLng) {
      estimatedDistance = haversineDistance(
        data.departureLat,
        data.departureLng,
        data.arrivalLat,
        data.arrivalLng
      );
    }

    let driverId = data.driverId;

    // If LANDING source without a specific driver, find nearby drivers
    if (data.source === "LANDING" && !driverId) {
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
          const distA = haversineDistance(
            data.departureLat,
            data.departureLng,
            a.zoneLat!,
            a.zoneLng!
          );
          const distB = haversineDistance(
            data.departureLat,
            data.departureLng,
            b.zoneLat!,
            b.zoneLng!
          );
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
    }

    // Create booking (lock the price at creation time)
    const booking = await prisma.booking.create({
      data: {
        reference,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone || "",
        clientComments: data.clientComments,
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
        lockedPrice: estimatedPrice || null,
        driverId,
        source: data.source,
      },
      include: { driver: true },
    });

    const locale = data.locale || "fr";
    const dateFnsLocale = locale === "en" ? enUS : fr;
    const dateFormat = locale === "en" ? "dd MMMM yyyy 'at' HH:mm" : "dd MMMM yyyy 'à' HH:mm";
    const dateFormatted = format(requestedDate, dateFormat, { locale: dateFnsLocale });

    // Send notifications to driver
    if (booking.driver) {
      if (booking.driver.notifyEmail) {
        const emailData = buildDriverNotificationEmail({
          driverName: booking.driver.firstName,
          clientName: data.clientName,
          departure: data.departureName,
          arrival: data.arrivalName,
          date: dateFormatted,
          reference,
          bookingId: booking.id,
          price: booking.lockedPrice,
          locale,
        });
        await sendEmail({ to: booking.driver.email, ...emailData });
      }

      if (booking.driver.notifySms && booking.driver.phone) {
        const smsText = locale === "en"
          ? `TaxiNeo - New booking #${reference} from ${data.clientName}. ${data.departureName} → ${data.arrivalName}. Log in to accept.`
          : `TaxiNeo - Nouvelle réservation #${reference} de ${data.clientName}. ${data.departureName} → ${data.arrivalName}. Connectez-vous pour accepter.`;
        await sendSms(booking.driver.phone, smsText);
      }
    }

    // Send confirmation to client (skip placeholder emails)
    if (data.clientEmail !== "noemail@taxinoir.fr") {
      const clientEmailData = buildClientConfirmationEmail({
        clientName: data.clientName,
        departure: data.departureName,
        arrival: data.arrivalName,
        date: dateFormatted,
        reference,
        driverName: booking.driver
          ? `${booking.driver.firstName} ${booking.driver.lastName}`
          : undefined,
        price: booking.lockedPrice,
        locale,
      });
      await sendEmail({ to: data.clientEmail, ...clientEmailData });
    }

    return NextResponse.json(
      { message: "Réservation créée", reference, bookingId: booking.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la réservation" },
      { status: 500 }
    );
  }
}
