// Provisoire : envoie une notification de test au dernier téléphone inscrit. À supprimer après l'essai.
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyBookingClient, notifyDriver } from "@/lib/push";

export async function POST(request: Request) {
  if (request.headers.get("x-test") !== "2deb62695c7d338ecf64be3becc471dd") return NextResponse.json({ ok: false }, { status: 404 });
  const d = await prisma.deviceToken.findFirst({ orderBy: { lastSeenAt: "desc" } });
  if (!d) return NextResponse.json({ ok: false, reason: "no device" });
  const vars = { from: "Gare de Lyon, Paris", to: "Aéroport Charles de Gaulle", date: new Date(Date.now() + 3600e3) };
  if (d.driverId) await notifyDriver(d.driverId, "newRide", vars);
  else await notifyBookingClient({ organizationId: d.organizationId, clientDeviceId: d.id, reference: "TEST" }, "accepted", { ...vars, driver: "Taxi Test" });
  return NextResponse.json({ ok: true, to: d.driverId ? "driver" : d.organizationId ? "org" : "client", platform: d.platform });
}
