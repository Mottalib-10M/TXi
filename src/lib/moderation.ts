// Modération (règle 1.2 de l'App Store) : signaler un chauffeur, bloquer un
// chauffeur, suspendre un compte. Les signalements arrivent dans l'onglet
// Signalements de l'administration (et par e-mail aux ADMIN_EMAILS), à traiter
// sous REPORT_DEADLINE_HOURS.
// - une organisation (hôtel, entreprise, particulier) qui bloque un chauffeur ne
//   le voit plus proposé pour ses courses ;
// - deux chauffeurs bloqués (dans un sens ou dans l'autre) ne se transmettent
//   plus de course ;
// - un chauffeur suspendu ne peut plus se connecter, ne reçoit plus de course et
//   son profil public disparaît (isActive passe à false).

import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { createNotification } from "@/lib/notifications";

export const REPORT_DEADLINE_HOURS = 2;

export const REPORT_REASONS = ["behaviour", "content", "safety", "price", "other"] as const;
export type ReportReason = (typeof REPORT_REASONS)[number];

export const REASON_LABELS_FR: Record<ReportReason, string> = {
  behaviour: "Comportement",
  content: "Photo ou texte inapproprié",
  safety: "Sécurité",
  price: "Prix ou fraude",
  other: "Autre",
};

/** Chauffeurs qu'une organisation a bloqués. */
export async function blockedForOrg(orgId: string | null | undefined): Promise<string[]> {
  if (!orgId) return [];
  const rows = await prisma.driverBlock.findMany({ where: { blockerOrgId: orgId }, select: { driverId: true } });
  return rows.map((r) => r.driverId);
}

/** Chauffeurs avec qui ce chauffeur ne doit plus échanger de course (blocage dans un sens ou dans l'autre). */
export async function blockedBetweenDrivers(driverId: string | null | undefined): Promise<string[]> {
  if (!driverId) return [];
  const rows = await prisma.driverBlock.findMany({
    where: { OR: [{ blockerDriverId: driverId }, { driverId, blockerDriverId: { not: null } }] },
    select: { driverId: true, blockerDriverId: true },
  });
  return rows.map((r) => (r.driverId === driverId ? r.blockerDriverId! : r.driverId));
}

export async function isBlockedBetweenDrivers(a: string, b: string): Promise<boolean> {
  const n = await prisma.driverBlock.count({
    where: { OR: [{ driverId: a, blockerDriverId: b }, { driverId: b, blockerDriverId: a }] },
  });
  return n > 0;
}

export async function createDriverReport(input: {
  driverId: string;
  reporterKind: "client" | "organization" | "driver";
  reporterId?: string | null;
  reporterEmail?: string | null;
  bookingRef?: string | null;
  reason: ReportReason;
  message?: string | null;
}) {
  const driver = await prisma.driver.findUnique({
    where: { id: input.driverId },
    select: { firstName: true, lastName: true, slug: true },
  });
  if (!driver) return null;
  const report = await prisma.driverReport.create({
    data: {
      driverId: input.driverId,
      reporterKind: input.reporterKind,
      reporterId: input.reporterId || null,
      reporterEmail: input.reporterEmail?.trim().slice(0, 200) || null,
      bookingRef: input.bookingRef?.trim().slice(0, 40) || null,
      reason: input.reason,
      message: input.message?.trim().slice(0, 2000) || null,
    },
  });
  const name = `${driver.firstName} ${driver.lastName}`;
  const title = `Signalement : ${name}`;
  const body = `${REASON_LABELS_FR[input.reason]}${input.bookingRef ? `, course ${input.bookingRef}` : ""}. À traiter sous ${REPORT_DEADLINE_HOURS} h.`;
  createNotification({ type: "DRIVER_REPORTED", title, body, metadata: { reportId: report.id, driverId: input.driverId } });
  const adminEmails = (process.env.ADMIN_EMAILS || "support@taxineo.fr").split(",").map((e) => e.trim()).filter(Boolean);
  const url = `${process.env.NEXT_PUBLIC_APP_URL || "https://www.taxineo.fr"}/admin/signalements`;
  await Promise.all(
    adminEmails.map((to) =>
      sendEmail({
        to,
        subject: title,
        html: `<p>${body}</p>${input.message ? `<p>« ${escapeHtml(input.message.slice(0, 2000))} »</p>` : ""}<p><a href="${url}">Ouvrir les signalements</a></p>`,
      }).catch((e) => console.error("[Report] email failed", e)),
    ),
  );
  return report;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

/**
 * Chauffeurs à ne jamais proposer pour une course : ceux que l'organisation a
 * bloqués, et ceux qui sont bloqués avec le chauffeur qui a transmis la course.
 */
export async function excludedDriversFor(booking: { organizationId?: string | null; referrerDriverId?: string | null }): Promise<string[]> {
  const [org, peers] = await Promise.all([
    blockedForOrg(booking.organizationId),
    blockedBetweenDrivers(booking.referrerDriverId),
  ]);
  return [...org, ...peers];
}
