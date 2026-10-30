// L'app inscrit le téléphone aux notifications (components/NativeBridge.tsx), à
// chaque ouverture une fois l'autorisation donnée : le jeton suit la personne
// connectée (chauffeur ou organisation), ou reste sans compte pour un client.
// Après une réservation, la page de confirmation envoie sa référence : la
// course est reliée au téléphone pour en suivre l'acceptation ou l'annulation.

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { serverTrack } from "@/lib/usage-server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { token?: unknown; platform?: unknown; locale?: unknown; bookingRef?: unknown } | null;
  const token = typeof body?.token === "string" ? body.token.trim().slice(0, 400) : "";
  if (!/^[\w:.-]{20,400}$/.test(token)) return NextResponse.json({ ok: false }, { status: 400 });
  const platform = body?.platform === "android" ? "android" : "ios";
  const locale = body?.locale === "en" ? "en" : "fr";
  const session = await auth();
  const role = session?.user?.role;
  const data = {
    platform,
    locale,
    driverId: role === "driver" ? session!.user.id : null,
    organizationId: role === "organization" ? session!.user.id : null,
    lastSeenAt: new Date(),
  };
  const device = await prisma.deviceToken.upsert({ where: { token }, create: { token, ...data }, update: data, select: { id: true } });
  // Mesure d'usage : chaque ouverture de l'app par un compte connecté.
  if (role) serverTrack(session!.user.id, "app_opened", { role, os: platform });

  // Course réservée depuis ce téléphone il y a moins de deux heures, pas encore reliée.
  const ref = typeof body?.bookingRef === "string" ? body.bookingRef.trim().slice(0, 40) : "";
  if (ref) {
    await prisma.booking.updateMany({
      where: { reference: ref, clientDeviceId: null, organizationId: null, createdAt: { gte: new Date(Date.now() - 2 * 60 * 60 * 1000) } },
      data: { clientDeviceId: device.id },
    });
  }
  return NextResponse.json({ ok: true, id: device.id });
}
