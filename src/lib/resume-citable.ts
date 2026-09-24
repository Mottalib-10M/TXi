/**
 * Bloc de réponse citable placé sous le titre (RECETTE §21).
 *
 * Google et les moteurs de réponse reprennent un paragraphe entier, à condition
 * qu'il réponde à la question de la page dès le haut et qu'il soit assez
 * dense : moins de cent vingt mots, et il n'est pas retenu. Nos pages
 * engendrées ouvraient sur un chapeau de deux lignes, ce qui ne pouvait pas
 * être cité.
 *
 * Chaque résumé est construit à partir des données de la page — distance,
 * durée, fourchette de prix, autoroute, péages, quartiers, lignes desservies —
 * de sorte que deux pages n'aient pas le même texte et qu'aucun chiffre ne
 * soit inventé.
 */
import type { Trajet } from "@/data/trajets";
import type { Airport } from "@/data/airports";
import type { Station } from "@/data/stations";
import type { City } from "@/data/cities";

const liste = (xs: string[], loc: "fr" | "en", max = 3) => {
  const v = xs.slice(0, max);
  if (v.length <= 1) return v[0] ?? "";
  const et = loc === "fr" ? " et " : " and ";
  return v.slice(0, -1).join(", ") + et + v[v.length - 1];
};

export function resumeTrajet(t: Trajet, loc: "fr" | "en"): string {
  const fr = loc === "fr";
  const prix = t.prixMin && t.prixMax
    ? (fr ? `entre ${t.prixMin} € et ${t.prixMax} €` : `between €${t.prixMin} and €${t.prixMax}`)
    : t.priceEstimate;
  const duree = t.dureeMax && t.dureeMax > t.durationMin
    ? (fr ? `de ${t.durationMin} à ${t.dureeMax} minutes selon le trafic`
          : `from ${t.durationMin} to ${t.dureeMax} minutes depending on traffic`)
    : (fr ? `environ ${t.durationMin} minutes` : `about ${t.durationMin} minutes`);
  const route = t.autoroute
    ? (fr ? ` L'itinéraire habituel emprunte ${t.autoroute}${t.peages ? `, avec ${t.peages.toLowerCase()}` : ""}.`
          : ` The usual route takes ${t.autoroute}${t.peages ? `, with ${t.peages.toLowerCase()}` : ""}.`)
    : "";
  const van = t.prixVan
    ? (fr ? ` Un van jusqu'à sept passagers est proposé à partir de ${t.prixVan} €.`
          : ` A van for up to seven passengers starts at €${t.prixVan}.`)
    : "";

  return fr
    ? `Un taxi entre ${t.from} et ${t.to} coûte ${prix} lorsqu'il est réservé à l'avance à prix fixe, pour une distance d'environ ${t.distanceKm} kilomètres par la route et un temps de parcours ${duree}.${route}${van} Ce prix comprend les bagages, les péages et l'approche du chauffeur, et il ne bouge pas si la circulation se dégrade : c'est la différence avec une course au compteur, où chaque minute d'attente se facture et où le tarif applicable dépend de l'heure. Sur une course non réservée, le montant suit le barème de l'arrêté préfectoral applicable au lieu de prise en charge, plus élevé de dix-neuf heures à dix heures ainsi que le dimanche et les jours fériés. Le chauffeur suit le numéro de vol ou de train indiqué à la réservation et décale la prise en charge sans supplément en cas de retard, et l'annulation reste gratuite jusqu'à six heures avant le départ.`
    : `A taxi between ${t.from} and ${t.to} costs ${prix} when booked in advance at a fixed price, over a road distance of about ${t.distanceKm} kilometres and a journey time of ${duree}.${route}${van} That price includes luggage, tolls and the driver's approach, and it does not move if traffic builds up: that is the difference with a metered ride, where every minute of waiting is charged and the applicable rate depends on the hour. On an unbooked ride, the amount follows the scale of the prefectoral order applying where the passenger is picked up, higher from seven in the evening to ten in the morning as well as on Sundays and public holidays. The driver tracks the flight or train number given at booking and shifts the pick-up at no extra cost if it is delayed, and cancelling remains free up to six hours before departure.`;
}

export function resumeAeroport(a: Airport, loc: "fr" | "en"): string {
  const fr = loc === "fr";
  const terminaux = a.terminals?.length
    ? (fr ? ` L'aéroport compte ${a.terminals.length} terminal${a.terminals.length > 1 ? "x" : ""} : ${liste(a.terminals, loc)}.`
          : ` The airport has ${a.terminals.length} terminal${a.terminals.length > 1 ? "s" : ""}: ${liste(a.terminals, loc)}.`)
    : "";
  return fr
    ? `Un taxi depuis ${a.name} vers le centre de ${a.city} coûte ${a.transferPrice} et dure environ ${a.transferTime}, pour une distance de ${a.distanceFromCity}.${terminaux} Le prix réservé à l'avance est ferme : il comprend les bagages, l'accès à la zone de dépose et les péages éventuels, et il ne change pas si le vol atterrit en retard. C'est ce qui le distingue d'une course prise au compteur, dont le montant suit le barème de l'arrêté préfectoral et augmente de dix-neuf heures à dix heures, ainsi que le dimanche et les jours fériés. Le chauffeur suit le numéro de vol communiqué à la réservation et décale la prise en charge sans supplément, le temps d'attente offert courant à partir de l'heure réelle d'atterrissage. Le point de rendez-vous exact est envoyé par message avant l'arrivée, avec le nom du chauffeur et la plaque du véhicule.`
    : `A taxi from ${a.name} to the centre of ${a.city} costs ${a.transferPrice} and takes about ${a.transferTime}, over a distance of ${a.distanceFromCity}.${terminaux} The price booked in advance is firm: it includes luggage, access to the drop-off area and any tolls, and it does not change if the flight lands late. That is what sets it apart from a metered ride, whose amount follows the prefectoral order's scale and rises from seven in the evening to ten in the morning, as well as on Sundays and public holidays. The driver tracks the flight number given at booking and shifts the pick-up at no extra cost, the free waiting time starting from the actual landing time. The exact meeting point is sent by message before arrival, with the driver's name and the vehicle's plate.`;
}

export function resumeGare(s: Station, loc: "fr" | "en"): string {
  const fr = loc === "fr";
  const lignes = s.lines?.length
    ? (fr ? ` La gare est desservie par ${liste(s.lines, loc)}.` : ` The station is served by ${liste(s.lines, loc)}.`)
    : "";
  return fr
    ? `Un taxi depuis la ${s.name} vers le centre de ${s.city} coûte ${s.transferPrice} et dure environ ${s.transferTime}, pour une distance de ${s.distanceFromCity}.${lignes} Le prix réservé à l'avance est ferme : il comprend les bagages et l'approche du chauffeur, et il ne bouge pas si le train arrive en retard. Sur une course prise à la station, le montant suit le barème de l'arrêté préfectoral applicable au département, plus élevé de dix-neuf heures à dix heures ainsi que le dimanche et les jours fériés, et le compteur affiche la lettre du tarif en cours. Le chauffeur suit le numéro de train indiqué à la réservation et ajuste l'heure de prise en charge sans supplément. Le point de rendez-vous, souvent la sortie principale ou la station de taxis, est confirmé par message avec le nom du chauffeur et la plaque du véhicule.`
    : `A taxi from ${s.name} to the centre of ${s.city} costs ${s.transferPrice} and takes about ${s.transferTime}, over a distance of ${s.distanceFromCity}.${lignes} The price booked in advance is firm: it includes luggage and the driver's approach, and it does not move if the train arrives late. On a ride taken at the rank, the amount follows the scale of the prefectoral order applying to the department, higher from seven in the evening to ten in the morning as well as on Sundays and public holidays, and the meter shows the letter of the current rate. The driver tracks the train number given at booking and adjusts the pick-up time at no extra cost. The meeting point, usually the main exit or the taxi rank, is confirmed by message with the driver's name and the vehicle's plate.`;
}

export function resumeVille(c: City, loc: "fr" | "en"): string {
  const fr = loc === "fr";
  const quartiers = c.quartiers?.length
    ? (fr ? ` Les prises en charge les plus fréquentes se font à ${liste(c.quartiers, loc)}.`
          : ` The most frequent pick-ups are in ${liste(c.quartiers, loc)}.`)
    : "";
  const trajet = c.popularRoutes?.length
    ? (fr ? ` Le trajet le plus demandé, ${c.popularRoutes[0].from} — ${c.popularRoutes[0].to}, est proposé à ${c.popularRoutes[0].price}.`
          : ` The most requested route, ${c.popularRoutes[0].from} — ${c.popularRoutes[0].to}, is offered at ${c.popularRoutes[0].price}.`)
    : "";
  return fr
    ? `Réserver un taxi à ${c.name} revient à choisir entre une course au compteur et un prix fixe annoncé avant le départ. ${c.driverCount} chauffeurs partenaires couvrent la ville, pour une attente moyenne de ${c.avgWaitTime}.${quartiers}${trajet} Le tarif au compteur n'est pas libre : il suit l'arrêté préfectoral du département, qui plafonne la prise en charge, le prix au kilomètre et l'heure d'attente, avec un tarif plus élevé de dix-neuf heures à dix heures ainsi que le dimanche et les jours fériés. Le compteur affiche la lettre du tarif en cours, ce qui permet de vérifier. Le prix réservé à l'avance, lui, comprend les bagages et l'approche du chauffeur et ne change pas en cas d'embouteillage. Le paiement par carte ne peut jamais être refusé, et une note est remise automatiquement dès vingt-cinq euros.`
    : `Booking a taxi in ${c.name} means choosing between a metered ride and a fixed price quoted before departure. ${c.driverCount} partner drivers cover the city, for an average wait of ${c.avgWaitTime}.${quartiers}${trajet} The metered fare is not set freely: it follows the department's prefectoral order, which caps the pick-up charge, the price per kilometre and the waiting hour, with a higher rate from seven in the evening to ten in the morning as well as on Sundays and public holidays. The meter shows the letter of the current rate, which lets you check it. The price booked in advance includes luggage and the driver's approach and does not change in traffic. Card payment can never be refused, and a receipt is issued automatically from twenty-five euros.`;
}
