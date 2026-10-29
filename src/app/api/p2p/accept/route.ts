import { NextResponse } from "next/server";
import { excludedDriversFor, isBlockedBetweenDrivers } from "@/lib/moderation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notifyDriver } from "@/lib/push";
import { createNotification } from "@/lib/notifications";
import { escalateIfDue } from "@/lib/escalation";
import { contactForDriver, generalPlace } from "@/lib/p2p";
import { ACCEPTED_BOOKING_INCLUDE, sendAcceptedNotices } from "@/lib/booking-accepted";

// Lien d'une course proposée à un collègue : course transmise (P2P, src/app/api/driver/p2p)
// ou course Taxineo refusée et « passée à un collègue » (PATCH driver/bookings, share).
// Avant l'acceptation, seules la ville ou le lieu public, la date et le prix sont montrés ;
// le client n'est donné qu'au chauffeur qui accepte, validé et avec sa carte pro.

/** Chauffeur qui peut prendre une course par lien : compte validé, carte pro déposée, pas suspendu. */
function canTakeRides(driver: { isVerified: boolean; carteProUrl: string | null; suspendedAt: Date | null } | null) {
  return Boolean(driver?.isVerified && driver.carteProUrl && !driver.suspendedAt);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token manquant" }, { status: 400 });
  }

  try {
    // Déclenchement à la lecture de l'ouverture aux chauffeurs proches (src/lib/escalation.ts).
    await escalateIfDue();

    const booking = await prisma.booking.findUnique({
      where: { p2pToken: token },
      select: {
        id: true,
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        estimatedPrice: true,
        estimatedDistance: true,
        status: true,
        source: true,
        driverId: true,
        sharedByDriverId: true,
        p2pCommissionRate: true,
        p2pCommissionAmount: true,
        referrerDriver: {
          select: { firstName: true, lastName: true },
        },
      },
    });

    if (!booking) {
      return NextResponse.json({ error: "Course introuvable" }, { status: 404 });
    }

    const session = await auth();
    const isDriver = session?.user?.role === "driver";

    let driverFirstName: string | null = null;
    let needsVerification = false;
    if (isDriver && session?.user?.id) {
      const driver = await prisma.driver.findUnique({
        where: { id: session.user.id },
        select: { firstName: true, isVerified: true, carteProUrl: true, suspendedAt: true },
      });
      driverFirstName = driver?.firstName ?? null;
      needsVerification = !canTakeRides(driver);
    }

    const sharer = booking.source === "P2P" ? booking.referrerDriver : booking.sharedByDriverId
      ? await prisma.driver.findUnique({ where: { id: booking.sharedByDriverId }, select: { firstName: true, lastName: true } })
      : null;

    return NextResponse.json({
      booking: {
        id: booking.id,
        departureName: generalPlace(booking.departureName),
        arrivalName: generalPlace(booking.arrivalName),
        requestedDate: booking.requestedDate,
        lockedPrice: booking.lockedPrice ?? booking.estimatedPrice,
        estimatedDistance: booking.estimatedDistance,
        p2pCommissionRate: booking.p2pCommissionRate,
        p2pCommissionAmount: booking.p2pCommissionAmount,
        referrerDriverName: `${sharer?.firstName ?? ""} ${sharer?.lastName ?? ""}`.trim(),
        alreadyAccepted: booking.status !== "PENDING",
        status: booking.status,
      },
      needsAuth: !isDriver,
      needsVerification,
      driverFirstName,
    });
  } catch (error) {
    console.error("P2P accept GET error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: "Token manquant" }, { status: 400 });
    }

    const taker = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { isVerified: true, carteProUrl: true, suspendedAt: true },
    });
    if (!canTakeRides(taker)) {
      return NextResponse.json(
        { error: "Votre compte doit être validé, avec votre carte professionnelle, pour prendre une course.", code: "NOT_VERIFIED" },
        { status: 403 }
      );
    }

    // Course telle qu'elle est avant l'acceptation (chauffeurs déjà sollicités, avis au client).
    const existing = await prisma.booking.findUnique({
      where: { p2pToken: token },
      include: ACCEPTED_BOOKING_INCLUDE,
    });
    if (!existing) {
      return NextResponse.json({ error: "Course déjà prise ou introuvable" }, { status: 409 });
    }
    // Prevent referrer from accepting their own ride
    if (existing.referrerDriverId === session.user.id || existing.sharedByDriverId === session.user.id) {
      return NextResponse.json(
        { error: "Vous ne pouvez pas accepter votre propre course" },
        { status: 403 }
      );
    }
    // Chauffeurs bloqués entre eux, ou écartés par l'organisation (src/lib/moderation.ts).
    if (
      (existing.referrerDriverId && (await isBlockedBetweenDrivers(existing.referrerDriverId, session.user.id))) ||
      (existing.sharedByDriverId && (await isBlockedBetweenDrivers(existing.sharedByDriverId, session.user.id))) ||
      (await excludedDriversFor(existing)).includes(session.user.id)
    ) {
      return NextResponse.json({ error: "Cette course n'est plus disponible" }, { status: 403 });
    }

    // Race condition protection: only update if still PENDING
    const result = await prisma.booking.updateMany({
      where: {
        p2pToken: token,
        status: "PENDING",
      },
      data: {
        driverId: session.user.id,
        status: "ACCEPTED",
      },
    });

    if (result.count === 0) {
      return NextResponse.json(
        { error: "Course déjà prise ou introuvable" },
        { status: 409 }
      );
    }

    // Fetch the updated booking for notification + response
    const booking = await prisma.booking.findUnique({
      where: { p2pToken: token },
      select: {
        id: true,
        reference: true,
        clientName: true,
        clientPhone: true,
        clientEmail: true,
        source: true,
        p2pOpenedAt: true,
        referrerDriverId: true,
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        referrerDriver: {
          select: { firstName: true, lastName: true, phone: true },
        },
      },
    });

    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { firstName: true, lastName: true, phone: true },
    });

    // Course Taxineo passée à un collègue : mêmes avis qu'une acceptation dans l'espace chauffeur.
    if (booking && existing.source !== "P2P") {
      createNotification({
        type: "BOOKING_ACCEPTED",
        title: `Course acceptée #${booking.reference}`,
        body: `${booking.clientName} — ${booking.departureName} → ${booking.arrivalName} (passée par un collègue)`,
        metadata: { bookingId: booking.id, reference: booking.reference, driverId: session.user.id },
      });
      await sendAcceptedNotices(existing, session.user.id, existing.clientLocale === "en" ? "en" : "fr");
    } else if (booking) {
      createNotification({
        type: "BOOKING_ACCEPTED",
        title: "Course P2P acceptée",
        body: `${driver?.firstName} ${driver?.lastName} a accepté la course P2P ${booking.reference} (partagée par ${booking.referrerDriver?.firstName} ${booking.referrerDriver?.lastName}). ${booking.departureName} → ${booking.arrivalName}, ${booking.lockedPrice} €`,
        metadata: {
          bookingId: booking.id,
          driverId: session.user.id,
          source: "P2P",
        },
      });
    }

    // Le chauffeur qui a transmis la course apprend qu'un confrère la prend.
    if (booking && existing.source === "P2P" && existing.referrerDriverId) {
      await notifyDriver(existing.referrerDriverId, "p2pAccepted", { from: booking.departureName, to: booking.arrivalName, date: booking.requestedDate, driver: `${driver?.firstName ?? ""} ${driver?.lastName ?? ""}`.trim() }, "/dashboard/p2p");
    }

    // Déjà ouverte aux chauffeurs proches : le contact est le chauffeur qui l'a transmise.
    const contact = booking ? contactForDriver(booking, session.user.id, booking.referrerDriver) : null;

    return NextResponse.json({
      message: "Course acceptée",
      booking: booking && contact ? {
        reference: booking.reference,
        clientName: contact.clientName,
        clientPhone: contact.clientPhone,
        contactIsReferrer: contact.contactIsReferrer,
        departureName: booking.departureName,
        arrivalName: booking.arrivalName,
        requestedDate: booking.requestedDate,
        lockedPrice: booking.lockedPrice,
      } : null,
      driver: driver ? {
        firstName: driver.firstName,
        lastName: driver.lastName,
        phone: driver.phone,
      } : null,
    });
  } catch (error) {
    console.error("P2P accept POST error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
