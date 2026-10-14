"use server";

// Page « Signaler un chauffeur » (/signaler) : signalement (tout le monde, même
// sans compte) et blocage (organisation ou chauffeur connecté). Voir src/lib/moderation.ts.

import { redirect } from "@/i18n/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { applyModerateRateLimit } from "@/lib/rate-limit";
import { createDriverReport, REPORT_REASONS, type ReportReason } from "@/lib/moderation";

function back(form: FormData, done: string): never {
  const slug = String(form.get("slug") || "");
  const course = String(form.get("course") || "");
  const locale = form.get("locale") === "en" ? "en" : "fr";
  const query = new URLSearchParams({ chauffeur: slug, fait: done });
  if (course) query.set("course", course);
  redirect({ href: `/signaler?${query}`, locale });
  throw new Error("unreachable");
}

async function target(form: FormData) {
  const slug = String(form.get("slug") || "");
  if (!slug) return null;
  return prisma.driver.findUnique({ where: { slug }, select: { id: true } });
}

export async function reportDriverAction(form: FormData) {
  const driver = await target(form);
  if (!driver) back(form, "erreur");
  const reason = String(form.get("reason") || "") as ReportReason;
  if (!REPORT_REASONS.includes(reason)) back(form, "motif");
  if (await applyModerateRateLimit()) back(form, "erreur");
  const session = await auth();
  const user = session?.user && !session.user.impersonatingFrom ? session.user : null;
  await createDriverReport({
    driverId: driver!.id,
    reporterKind: user ? (user.role === "organization" ? "organization" : "driver") : "client",
    reporterId: user?.id,
    reporterEmail: user?.email || String(form.get("email") || ""),
    bookingRef: String(form.get("course") || ""),
    reason,
    message: String(form.get("message") || ""),
  });
  back(form, "signale");
}

export async function blockDriverAction(form: FormData) {
  const driver = await target(form);
  const session = await auth();
  const user = session?.user;
  if (!driver || !user?.id || user.impersonatingFrom || user.id === driver.id) back(form, "erreur");
  if (user!.role === "organization") {
    await prisma.$transaction([
      prisma.driverBlock.upsert({
        where: { driverId_blockerOrgId: { driverId: driver!.id, blockerOrgId: user!.id } },
        create: { driverId: driver!.id, blockerOrgId: user!.id },
        update: {},
      }),
      prisma.favoriteDriver.deleteMany({ where: { organizationId: user!.id, driverId: driver!.id } }),
    ]);
  } else {
    await prisma.driverBlock.upsert({
      where: { driverId_blockerDriverId: { driverId: driver!.id, blockerDriverId: user!.id } },
      create: { driverId: driver!.id, blockerDriverId: user!.id },
      update: {},
    });
  }
  back(form, "bloque");
}

export async function unblockDriverAction(form: FormData) {
  const driver = await target(form);
  const session = await auth();
  const user = session?.user;
  if (!driver || !user?.id || user.impersonatingFrom) back(form, "erreur");
  await prisma.driverBlock.deleteMany({
    where: user!.role === "organization"
      ? { driverId: driver!.id, blockerOrgId: user!.id }
      : { driverId: driver!.id, blockerDriverId: user!.id },
  });
  back(form, "debloque");
}
