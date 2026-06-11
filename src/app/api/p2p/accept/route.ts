import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createNotification } from "@/lib/notifications";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token manquant" }, { status: 400 });
  }

  try {
    const booking = await prisma.booking.findUnique({
      where: { p2pToken: token },
      select: {
        id: true,
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        estimatedDistance: true,
        status: true,
        source: true,
        driverId: true,
        p2pCommissionRate: true,
        p2pCommissionAmount: true,
        referrerDriver: {
          select: { firstName: true, lastName: true },
        },
      },
    });

    if (!booking || booking.source !== "P2P") {
      return NextResponse.json({ error: "Course introuvable" }, { status: 404 });
    }

    const session = await auth();
    const isDriver = session?.user?.role === "driver";

    let driverFirstName: string | null = null;
    if (isDriver && session?.user?.id) {
      const driver = await prisma.driver.findUnique({
        where: { id: session.user.id },
        select: { firstName: true },
      });
      driverFirstName = driver?.firstName ?? null;
    }

    return NextResponse.json({
      booking: {
        id: booking.id,
        departureName: booking.departureName,
        arrivalName: booking.arrivalName,
        requestedDate: booking.requestedDate,
        lockedPrice: booking.lockedPrice,
        estimatedDistance: booking.estimatedDistance,
        p2pCommissionRate: booking.p2pCommissionRate,
        p2pCommissionAmount: booking.p2pCommissionAmount,
        referrerDriverName: `${booking.referrerDriver?.firstName ?? ""} ${booking.referrerDriver?.lastName ?? ""}`.trim(),
        alreadyAccepted: booking.status !== "PENDING",
        status: booking.status,
      },
      needsAuth: !isDriver,
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

    // Prevent referrer from accepting their own ride
    const existing = await prisma.booking.findUnique({
      where: { p2pToken: token },
      select: { referrerDriverId: true },
    });
    if (existing?.referrerDriverId === session.user.id) {
      return NextResponse.json(
        { error: "Vous ne pouvez pas accepter votre propre course" },
        { status: 403 }
      );
    }

    // Race condition protection: only update if still PENDING + P2P
    const result = await prisma.booking.updateMany({
      where: {
        p2pToken: token,
        source: "P2P",
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
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        referrerDriver: {
          select: { firstName: true, lastName: true },
        },
      },
    });

    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { firstName: true, lastName: true, phone: true },
    });

    if (booking) {
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

    return NextResponse.json({
      message: "Course acceptée",
      booking: booking ? {
        reference: booking.reference,
        clientName: booking.clientName,
        clientPhone: booking.clientPhone,
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
