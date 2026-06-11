import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getRoutingDistance } from "@/lib/geo";
import { generateUniqueReference } from "@/lib/reference";
import { createNotification } from "@/lib/notifications";
import { z } from "zod";
import crypto from "crypto";

const createP2PSchema = z.object({
  clientName: z.string().min(1),
  clientPhone: z.string().min(1),
  departureName: z.string().min(1),
  departureLat: z.number(),
  departureLng: z.number(),
  arrivalName: z.string().min(1),
  arrivalLat: z.number(),
  arrivalLng: z.number(),
  requestedDate: z.string().min(1),
  price: z.number().positive(),
  commissionRate: z.number().min(0).max(1),
});

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = createP2PSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const driver = await prisma.driver.findUnique({
      where: { id: session.user.id },
      select: { firstName: true, lastName: true },
    });

    if (!driver) {
      return NextResponse.json({ error: "Chauffeur introuvable" }, { status: 404 });
    }

    const { distanceKm, durationMinutes } = await getRoutingDistance(
      data.departureLat, data.departureLng, data.arrivalLat, data.arrivalLng
    );

    const reference = await generateUniqueReference();
    const p2pToken = crypto.randomUUID();
    const commissionAmount = Math.round(data.price * data.commissionRate * 100) / 100;

    const booking = await prisma.booking.create({
      data: {
        reference,
        clientName: data.clientName,
        clientEmail: "",
        clientPhone: data.clientPhone,
        departureName: data.departureName,
        departureLat: data.departureLat,
        departureLng: data.departureLng,
        arrivalName: data.arrivalName,
        arrivalLat: data.arrivalLat,
        arrivalLng: data.arrivalLng,
        requestedDate: new Date(data.requestedDate),
        estimatedDistance: distanceKm,
        estimatedDuration: durationMinutes,
        lockedPrice: data.price,
        source: "P2P",
        status: "PENDING",
        referrerDriverId: session.user.id,
        p2pCommissionRate: data.commissionRate,
        p2pCommissionAmount: commissionAmount,
        p2pToken,
      },
    });

    createNotification({
      type: "P2P_CREATED",
      title: "Course P2P créée",
      body: `${driver.firstName} ${driver.lastName} a partagé une course. ${data.departureName} → ${data.arrivalName}, ${data.price} €`,
      metadata: {
        bookingId: booking.id,
        referrerDriverId: session.user.id,
      },
    });

    return NextResponse.json({
      booking: {
        id: booking.id,
        reference: booking.reference,
        p2pToken: booking.p2pToken,
        clientName: booking.clientName,
        clientPhone: booking.clientPhone,
        departureName: booking.departureName,
        arrivalName: booking.arrivalName,
        requestedDate: booking.requestedDate,
        lockedPrice: booking.lockedPrice,
        estimatedDistance: booking.estimatedDistance,
        p2pCommissionRate: booking.p2pCommissionRate,
        p2pCommissionAmount: booking.p2pCommissionAmount,
      },
    });
  } catch (error) {
    console.error("P2P create error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id || session.user.role !== "driver") {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { referrerDriverId: session.user.id },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        reference: true,
        clientName: true,
        departureName: true,
        arrivalName: true,
        requestedDate: true,
        lockedPrice: true,
        status: true,
        targetDriverName: true,
        targetDriverPhone: true,
        p2pCommissionRate: true,
        p2pCommissionAmount: true,
        p2pToken: true,
        driverId: true,
        driver: {
          select: { firstName: true, lastName: true },
        },
        createdAt: true,
      },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("P2P list error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
