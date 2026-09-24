/**
 * Faits propres à un trajet, rédigés en phrases complètes (RECETTE §7).
 *
 * Ils servent à compléter les réponses de FAQ trop courtes. Chaque phrase
 * n'utilise que des données du trajet : rien n'est estimé ni extrapolé, et une
 * donnée absente ne produit aucune phrase plutôt qu'une phrase vague.
 */
import type { Trajet } from "@/data/trajets";

export function faitsTrajet(trajet: Trajet, loc: "fr" | "en"): string[] {
  const fr = loc === "fr";
  const phrases: string[] = [];
  const { from, to, distanceKm, durationMin, dureeMax, prixMin, prixMax, prixVan, autoroute, peages } = trajet;

  if (distanceKm) {
    phrases.push(
      fr
        ? `Le trajet ${from} — ${to} couvre environ ${distanceKm} km par la route.`
        : `The ${from} — ${to} route covers about ${distanceKm} km by road.`,
    );
  }
  if (durationMin && dureeMax && dureeMax > durationMin) {
    phrases.push(
      fr
        ? `Comptez ${durationMin} minutes en circulation fluide et jusqu'à ${dureeMax} minutes aux heures de pointe.`
        : `Allow ${durationMin} minutes in light traffic and up to ${dureeMax} minutes at peak hours.`,
    );
  } else if (durationMin) {
    phrases.push(
      fr
        ? `La durée moyenne relevée sur ce trajet est de ${durationMin} minutes.`
        : `The average duration recorded on this route is ${durationMin} minutes.`,
    );
  }
  if (prixMin && prixMax) {
    phrases.push(
      fr
        ? `Le prix réservé à l'avance se situe entre ${prixMin} € et ${prixMax} €, bagages compris.`
        : `The price booked in advance ranges from €${prixMin} to €${prixMax}, luggage included.`,
    );
  }
  if (prixVan) {
    phrases.push(
      fr
        ? `Un van jusqu'à sept passagers est proposé à partir de ${prixVan} €.`
        : `A van for up to seven passengers starts at €${prixVan}.`,
    );
  }
  if (autoroute) {
    phrases.push(
      fr
        ? `L'itinéraire habituel emprunte ${autoroute}.`
        : `The usual route takes ${autoroute}.`,
    );
  }
  if (peages) {
    phrases.push(fr ? `Péages : ${peages}.` : `Tolls: ${peages}.`);
  }

  // Faits communs à tous les trajets, en dernier recours : ils restent exacts
  // partout, et ne servent qu'aux réponses que les données ne suffisent pas à
  // porter à quarante mots.
  phrases.push(
    fr
      ? "Le prix est confirmé avant la réservation et ne bouge pas en cas d'embouteillage."
      : "The price is confirmed before booking and does not move if traffic builds up.",
    fr
      ? "Le chauffeur suit votre vol ou votre train et ajuste l'heure de prise en charge en cas de retard."
      : "The driver tracks your flight or train and adjusts the pick-up time if it is delayed.",
    fr
      ? "La réservation peut être annulée sans frais jusqu'à six heures avant le départ."
      : "The booking can be cancelled free of charge up to six hours before departure.",
  );

  return phrases;
}
