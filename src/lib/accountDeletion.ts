// Suppression d'un compte depuis son espace (exigée par l'App Store et Google
// Play) : tout ce qui appartient au compte part, sans retour possible.
// - chauffeur : sa fiche, ses favoris chez les organisations, ses jetons ;
//   les réservations des clients restent (elles leur appartiennent) mais ne
//   sont plus rattachées à lui, ni ses trajets partagés ;
// - organisation : sa fiche, ses chauffeurs favoris, sa cagnotte, ses jetons ;
//   ses courses restent, détachées d'elle.

import { prisma } from "@/lib/prisma";

export async function deleteDriverAccount(driverId: string): Promise<void> {
  const driver = await prisma.driver.findUnique({ where: { id: driverId }, select: { email: true } });
  if (!driver) return;
  await prisma.$transaction([
    prisma.booking.updateMany({ where: { driverId }, data: { driverId: null } }),
    prisma.booking.updateMany({ where: { referrerDriverId: driverId }, data: { referrerDriverId: null } }),
    prisma.sharedRoute.updateMany({ where: { driverId }, data: { driverId: null } }),
    prisma.favoriteDriver.deleteMany({ where: { driverId } }),
    prisma.emailVerificationToken.deleteMany({ where: { email: driver.email } }),
    prisma.passwordResetToken.deleteMany({ where: { email: driver.email } }),
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
    prisma.emailVerificationToken.deleteMany({ where: { email: org.email } }),
    prisma.passwordResetToken.deleteMany({ where: { email: org.email } }),
    prisma.organization.delete({ where: { id: organizationId } }),
  ]);
}
