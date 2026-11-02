// Vérification des chauffeurs : tout chauffeur inscrit a l'app et le Radar, mais seules
// les courses venues de Taxineo (recherche, relances, organisations, taxi partagé)
// demandent un compte validé. Un nouvel inscrit n'est validé qu'après l'envoi de sa carte
// professionnelle ; les chauffeurs validés avant cette règle le restent sans carte.
// Les réservations par sa propre fiche ou son QR code ne sont pas concernées.

import { isDemoEmail } from "@/lib/demo";

/** Filtre Prisma des chauffeurs qui reçoivent les courses de Taxineo. Comptes de démo : pas de carte à fournir. */
export function platformRidesFilter(demo = false) {
  return demo ? {} : { isVerified: true, suspendedAt: null };
}

export type VerificationStatus = "missing" | "pending" | "verified";

export function verificationStatus(driver: {
  email?: string | null;
  isVerified: boolean;
  carteProUrl: string | null;
}): VerificationStatus {
  if (isDemoEmail(driver.email)) return "verified";
  if (driver.isVerified) return "verified";
  return driver.carteProUrl ? "pending" : "missing";
}
