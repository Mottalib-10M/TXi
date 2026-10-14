// Suppression d'un compte depuis son espace (exigée par l'App Store et Google
// Play) : tout ce qui appartient au compte part, sans retour possible.
// - chauffeur : sa fiche (photo, carte pro et véhicules sont stockés dedans),
//   ses favoris chez les organisations, ses téléphones inscrits aux
//   notifications, son parrainage, ses blocages et les signalements le visant ;
//   les réservations des clients restent (elles leur appartiennent) mais ne
//   sont plus rattachées à lui, ni ses trajets partagés ; une course à venir
//   qu'il devait faire repart chercher un chauffeur (src/lib/escalation.ts) ;
//   il disparaît des invitations en cours ;
// - organisation : sa fiche, ses chauffeurs favoris, sa cagnotte, ses
//   téléphones, ses blocages ; ses courses restent, détachées d'elle.
// Les signalements qu'un compte a envoyés restent, sans son identité.
// Une session encore ouverte sur un autre appareil est renvoyée à la connexion
// (le layout de chaque espace relit le compte).

import { prisma } from "@/lib/prisma";

export async function deleteDriverAccount(driverId: string): Promise<void> {
  const driver = await prisma.driver.findUnique({
    where: { id: driverId },
    select: { email: true, referralCode: true },
  });
  if (!driver) return;
  const invitedIn = await prisma.booking.findMany({
    where: { invitedDriverIds: { has: driverId } },
    select: { id: true, invitedDriverIds: true },
  });
  await prisma.$transaction([
    // Course à venir encore à faire : repart chercher un chauffeur proche.
    prisma.booking.updateMany({
      where: { driverId, status: { in: ["PENDING", "ACCEPTED"] }, requestedDate: { gt: new Date() } },
      data: { driverId: null, status: "PENDING", escalationPhase: 0, escalatedAt: null },
    }),
    prisma.booking.updateMany({ where: { driverId }, data: { driverId: null } }),
    prisma.booking.updateMany({ where: { referrerDriverId: driverId }, data: { referrerDriverId: null } }),
    ...invitedIn.map((b) =>
      prisma.booking.update({
        where: { id: b.id },
        data: { invitedDriverIds: b.invitedDriverIds.filter((id) => id !== driverId) },
      }),
    ),
    prisma.sharedRoute.updateMany({ where: { driverId }, data: { driverId: null } }),
    prisma.favoriteDriver.deleteMany({ where: { driverId } }),
    prisma.deviceToken.deleteMany({ where: { driverId } }),
    prisma.driverReport.updateMany({ where: { reporterId: driverId }, data: { reporterId: null, reporterEmail: null } }),
    ...(driver.referralCode
      ? [
          prisma.referralClick.deleteMany({ where: { referralCode: driver.referralCode } }),
          prisma.driver.updateMany({ where: { referredByCode: driver.referralCode }, data: { referredByCode: null } }),
        ]
      : []),
    prisma.emailVerificationToken.deleteMany({ where: { email: driver.email } }),
    prisma.passwordResetToken.deleteMany({ where: { email: driver.email } }),
    // Blocages et signalements visant le chauffeur : supprimés avec lui (ON DELETE CASCADE).
    prisma.driver.delete({ where: { id: driverId } }),
  ]);
}

export async function deleteOrganizationAccount(organizationId: string): Promise<void> {
  const org = await prisma.organization.findUnique({ where: { id: organizationId }, select: { email: true } });
  if (!org) return;
  await prisma.$transaction([
    prisma.cagnotteTransaction.deleteMany({ where: { organizationId } }),
    prisma.favoriteDriver.deleteMany({ where: { organizationId } }),
    prisma.booking.updateMany({ where: { organizationId }, data: { organizationId: null } }),
    prisma.deviceToken.deleteMany({ where: { organizationId } }),
    prisma.driverReport.updateMany({ where: { reporterId: organizationId }, data: { reporterId: null, reporterEmail: null } }),
    prisma.emailVerificationToken.deleteMany({ where: { email: org.email } }),
    prisma.passwordResetToken.deleteMany({ where: { email: org.email } }),
    // Ses blocages partent avec elle (ON DELETE CASCADE).
    prisma.organization.delete({ where: { id: organizationId } }),
  ]);
}
