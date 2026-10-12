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
