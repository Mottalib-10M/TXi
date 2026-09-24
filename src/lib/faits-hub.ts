/**
 * Faits propres à une gare ou à un aéroport (RECETTE §7).
 *
 * Même principe que `faits-trajet` : les compléments apportés aux réponses de
 * FAQ trop courtes viennent des données de la page — distance au centre, durée
 * et prix du transfert, terminaux, lignes desservies — jamais d'une formule
 * générique. Une donnée absente ne produit pas de phrase.
 */
import type { Airport } from "@/data/airports";
import type { Station } from "@/data/stations";

export function faitsAeroport(a: Airport, loc: "fr" | "en"): string[] {
  const fr = loc === "fr";
  const p: string[] = [];
  if (a.distanceFromCity) {
    p.push(fr
      ? `${a.name} se trouve à ${a.distanceFromCity} du centre de ${a.city}.`
      : `${a.name} is ${a.distanceFromCity} from the centre of ${a.city}.`);
  }
  if (a.transferTime && a.transferPrice) {
    p.push(fr
      ? `Le transfert en taxi dure environ ${a.transferTime} et coûte ${a.transferPrice}.`
      : `The taxi transfer takes about ${a.transferTime} and costs ${a.transferPrice}.`);
  }
  if (a.terminals?.length) {
    p.push(fr
      ? `L'aéroport compte ${a.terminals.length} terminal${a.terminals.length > 1 ? "x" : ""} : ${a.terminals.join(", ")}.`
      : `The airport has ${a.terminals.length} terminal${a.terminals.length > 1 ? "s" : ""}: ${a.terminals.join(", ")}.`);
  }
  if (a.annualPassengers) {
    p.push(fr
      ? `Il accueille ${a.annualPassengers} de passagers par an.`
      : `It handles ${a.annualPassengers} passengers a year.`);
  }
  p.push(
    fr ? "Le chauffeur suit le numéro de vol et attend gratuitement en cas de retard." 
       : "The driver tracks the flight number and waits free of charge if it is delayed.",
    fr ? "Le prix est fixé avant la course et inclut les bagages ainsi que l'accès à la zone de dépose."
       : "The price is set before the ride and includes luggage and access to the drop-off area.",
    fr ? "La réservation peut être annulée sans frais jusqu'à six heures avant la prise en charge."
       : "The booking can be cancelled free of charge up to six hours before pick-up.",
  );
  return p;
}

export function faitsGare(s: Station, loc: "fr" | "en"): string[] {
  const fr = loc === "fr";
  const p: string[] = [];
  if (s.distanceFromCity) {
    p.push(fr
      ? `${s.name} est à ${s.distanceFromCity} du centre de ${s.city}.`
      : `${s.name} is ${s.distanceFromCity} from the centre of ${s.city}.`);
  }
  if (s.transferTime && s.transferPrice) {
    p.push(fr
      ? `Le transfert en taxi dure environ ${s.transferTime} pour ${s.transferPrice}.`
      : `The taxi transfer takes about ${s.transferTime} for ${s.transferPrice}.`);
  }
  if (s.lines?.length) {
    p.push(fr
      ? `La gare est desservie par ${s.lines.join(", ")}.`
      : `The station is served by ${s.lines.join(", ")}.`);
  }
  if (s.annualPassengers) {
    p.push(fr
      ? `Elle voit passer ${s.annualPassengers} de voyageurs par an.`
      : `It sees ${s.annualPassengers} travellers a year.`);
  }
  p.push(
    fr ? "Le chauffeur suit le numéro de train et attend gratuitement en cas de retard."
       : "The driver tracks the train number and waits free of charge if it is delayed.",
    fr ? "Le prix est fixé avant la course et inclut les bagages."
       : "The price is set before the ride and includes luggage.",
    fr ? "La réservation peut être annulée sans frais jusqu'à six heures avant la prise en charge."
       : "The booking can be cancelled free of charge up to six hours before pick-up.",
  );
  return p;
}

export function faitsVille(c: import("@/data/cities").City, loc: "fr" | "en"): string[] {
  const fr = loc === "fr";
  const p: string[] = [];
  if (c.driverCount && c.avgWaitTime) {
    p.push(fr
      ? `${c.driverCount} chauffeurs partenaires couvrent ${c.name}, pour une attente moyenne de ${c.avgWaitTime}.`
      : `${c.driverCount} partner drivers cover ${c.name}, for an average wait of ${c.avgWaitTime}.`);
  }
  if (c.population) {
    p.push(fr
      ? `${c.name} compte environ ${c.population.toLocaleString("fr-FR")} habitants, ce qui explique la densité de l'offre de taxis.`
      : `${c.name} has about ${c.population.toLocaleString("en-GB")} inhabitants, which explains the density of the taxi supply.`);
  }
  if (c.quartiers?.length) {
    p.push(fr
      ? `Les prises en charge les plus fréquentes se font à ${c.quartiers.slice(0, 3).join(", ")}.`
      : `The most frequent pick-ups are in ${c.quartiers.slice(0, 3).join(", ")}.`);
  }
  if (c.popularRoutes?.length) {
    const r = c.popularRoutes[0];
    p.push(fr
      ? `Le trajet le plus demandé, ${r.from} — ${r.to}, est proposé à ${r.price}.`
      : `The most requested route, ${r.from} — ${r.to}, is offered at ${r.price}.`);
  }
  if (c.landmarks?.length) {
    p.push(fr
      ? `Les chauffeurs desservent notamment ${c.landmarks.slice(0, 3).join(", ")}.`
      : `Drivers serve ${c.landmarks.slice(0, 3).join(", ")} among others.`);
  }
  p.push(
    fr ? "Le prix est annoncé avant la réservation et ne change pas pendant la course."
       : "The price is announced before booking and does not change during the ride.",
    fr ? "Le paiement se fait par carte dans le véhicule ou en ligne au moment de la réservation."
       : "Payment is by card in the vehicle or online at the time of booking.",
    fr ? "La réservation peut être annulée sans frais jusqu'à six heures avant la prise en charge."
       : "The booking can be cancelled free of charge up to six hours before pick-up.",
  );
  return p;
}

/**
 * Questions de réserve pour une page de ville (§7).
 *
 * Elles ne servent qu'aux villes dont la fiche compte moins de six questions.
 * Le préfixe de lieu appliqué ensuite par `etofferFaq` les rend propres à la
 * page : la même question n'apparaît jamais deux fois à l'identique.
 */
export function reserveVille(nom: string, loc: "fr" | "en") {
  const fr = loc === "fr";
  return [
    {
      cle: fr ? "carte" : "card",
      question: fr ? "Peut-on payer la course par carte bancaire ?" : "Can the ride be paid by bank card?",
      answer: fr
        ? "Oui, et le chauffeur ne peut pas refuser la carte, quel que soit le montant de la course : tout taxi doit être équipé d'un terminal en état de marche. Une note vous est remise automatiquement dès vingt-cinq euros, et sur simple demande en dessous de ce seuil. Le paiement en ligne au moment de la réservation reste possible si vous préférez régler à l'avance."
        : "Yes, and the driver cannot refuse a card, whatever the fare: every taxi must have a working terminal. A receipt is issued automatically from twenty-five euros, and on request below that threshold. Paying online when booking remains possible if you would rather settle in advance.",
    },
    {
      cle: fr ? "bagage" : "luggage",
      question: fr ? "Les bagages coûtent-ils un supplément ?" : "Is there a supplement for luggage?",
      answer: fr
        ? "Le premier bagage placé en soute est gratuit, et l'aide au chargement est comprise. Au-delà, l'arrêté préfectoral peut prévoir un supplément par bagage, dont le montant doit être affiché dans le véhicule. Un objet hors gabarit comme un vélo non démonté ou du matériel sportif suppose un van : signalez-le à la réservation, faute de quoi le chauffeur peut le refuser."
        : "The first item placed in the boot is free, and help loading it is included. Beyond that, the prefectoral order may set a supplement per item, whose amount must be displayed in the vehicle. An oversized item such as an assembled bicycle or sports equipment requires a van: state it when booking, otherwise the driver may refuse it.",
    },
    {
      cle: fr ? "nuit" : "night",
      question: fr ? "Le tarif de nuit change-t-il le prix de la course ?" : "Does the night rate change the fare?",
      answer: fr
        ? "Sur une course au compteur, oui : le tarif de nuit s'applique de dix-neuf heures à dix heures, ainsi que le dimanche et les jours fériés, et le prix au kilomètre y est plus élevé. Le passage se fait automatiquement pendant la course, et le compteur indique la lettre en cours. Sur une réservation à prix fixe, le tarif applicable est déjà compris dans le montant annoncé."
        : "On a metered ride, yes: the night rate applies from seven in the evening to ten in the morning, as well as on Sundays and public holidays, and the price per kilometre is higher. The switch happens automatically during the ride, and the meter shows the current letter. On a fixed-price booking, the applicable rate is already included in the amount quoted.",
    },
    {
      cle: fr ? "annul" : "cancel",
      question: fr ? "Comment annuler une réservation déjà confirmée ?" : "How do you cancel a booking already confirmed?",
      answer: fr
        ? "Depuis la confirmation reçue par courriel, l'annulation est gratuite jusqu'à six heures avant le départ. Passé ce délai, appelez le chauffeur : son numéro figure sur la confirmation, et une course annulée alors qu'il est déjà sur place peut rester due. Si aucun chauffeur n'a été affecté, rien ne vous est prélevé et un autre créneau vous est proposé."
        : "From the confirmation received by email, cancelling is free up to six hours before departure. After that, call the driver: their number is on the confirmation, and a ride cancelled once they are already on site may remain payable. If no driver has been assigned, nothing is charged and another slot is offered.",
    },
  ];
}
