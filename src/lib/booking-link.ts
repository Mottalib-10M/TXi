// Liens signés envoyés par e-mail : le client suit sa course sans compte, le chauffeur ajoute
// la sienne à son agenda sans être connecté dans le navigateur qui ouvre le mail.

import { createHmac, timingSafeEqual } from "crypto";

const VALID_AFTER_TRIP_MS = 30 * 24 * 60 * 60 * 1000;

function sign(payload: string): string {
  const secret = process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET;
  if (!secret) throw new Error("NEXTAUTH_SECRET is required");
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function clientBookingToken(bookingId: string): string {
  return sign(`client:${bookingId}`);
}

/** Lié au chauffeur : si la course change de chauffeur, le lien de l'ancien ne vaut plus. */
export function calendarToken(bookingId: string, driverId: string): string {
  return sign(`calendar:${bookingId}:${driverId}`);
}

export function sameToken(given: string | null | undefined, expected: string): boolean {
  if (!given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Les coordonnées de la course cessent d'être accessibles 30 jours après le trajet. */
export function bookingLinkExpired(requestedDate: Date): boolean {
  return Date.now() > requestedDate.getTime() + VALID_AFTER_TRIP_MS;
}

export function bookingCookieName(bookingId: string): string {
  return `bk_${bookingId}`;
}

/** Passe par /api/reservation, qui retire le jeton de l'adresse avant d'afficher la page (outils de mesure). */
export function clientBookingUrl(baseUrl: string, bookingId: string, locale: "fr" | "en"): string {
  const params = new URLSearchParams({ id: bookingId, t: clientBookingToken(bookingId) });
  if (locale !== "fr") params.set("l", locale);
  return `${baseUrl}/api/reservation?${params}`;
}
