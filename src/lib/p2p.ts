// Courses transmises (P2P) : un chauffeur transmet une course à un collègue par un
// lien (src/app/api/driver/p2p). Si personne ne l'accepte dans les 30 minutes, elle
// est ouverte aux chauffeurs proches de la plateforme (src/lib/escalation.ts) ; le
// chauffeur qui l'a transmise reste alors le contact (pas le client final) et garde
// sa commission (p2pCommissionAmount, rattachée à referrerDriverId).

export const P2P_OPEN_DELAY_MS = 30 * 60 * 1000;

type ContactBooking = {
  source: string;
  p2pOpenedAt: Date | string | null;
  referrerDriverId: string | null;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
};

type Referrer = { firstName: string; lastName: string; phone: string | null; email?: string | null } | null | undefined;

/** Vrai si ce chauffeur voit la course par l'ouverture aux chauffeurs proches : son contact est le chauffeur qui l'a transmise. */
export function contactIsReferrer(booking: ContactBooking, viewerId: string): boolean {
  return booking.source === "P2P" && Boolean(booking.p2pOpenedAt) && Boolean(booking.referrerDriverId) && booking.referrerDriverId !== viewerId;
}

/** Coordonnées à montrer au chauffeur viewerId : le client, ou le chauffeur qui a transmis si la course a été ouverte. */
export function contactForDriver(booking: ContactBooking, viewerId: string, referrer: Referrer) {
  if (contactIsReferrer(booking, viewerId) && referrer) {
    return {
      clientName: `${referrer.firstName} ${referrer.lastName}`.trim(),
      clientPhone: referrer.phone ?? "",
      clientEmail: referrer.email ?? "",
      contactIsReferrer: true,
    };
  }
  return {
    clientName: booking.clientName,
    clientPhone: booking.clientPhone,
    clientEmail: booking.clientEmail,
    contactIsReferrer: false,
  };
}

// Rue, numéro, lieu-dit : retirés des adresses montrées avant qu'un chauffeur accepte.
const STREET = /^\d{1,4}\s*(bis|ter)?\s+\D|\b(rue|avenue|av\.|boulevard|bd|chemin|all[ée]e|place|impasse|route|quai|cours|square|passage|lieu-dit|r[ée]sidence|rond-point|voie|sentier|lotissement)\b/i;

/**
 * Adresse ramenée à la ville ou au lieu public (gare, aéroport) : ce qu'on montre
 * d'une course passée à un collègue tant qu'elle n'est pas acceptée.
 * « 12 rue de la Paix, 75002 Paris, France » → « 75002 Paris ».
 */
export function generalPlace(name: string): string {
  const parts = name.split(",").map((p) => p.trim()).filter((p) => p && !/^france$/i.test(p));
  const kept = parts
    .map((p) => (STREET.test(p) ? p.match(/\b\d{5}\s+\S.*$/)?.[0] ?? null : p))
    .filter((p): p is string => Boolean(p));
  if (kept.length) return kept.join(", ");
  return parts.length ? parts[parts.length - 1].replace(/^\d{1,4}\s*(bis|ter)?\s+/i, "") : name;
}
