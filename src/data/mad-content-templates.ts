import type { City } from "@/data/cities";
import { ILE_DE_FRANCE_SLUGS } from "@/data/regions";

// ─── Types ─────────────────────────────────────────────

type Loc = "fr" | "en";

export interface MadUseCase {
  icon: string;
  title: string;
  desc: string;
  example: string;
}

export interface MadAdvantage {
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

export interface MadTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface MadFAQ {
  question: string;
  answer: string;
}

export interface MadHowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface MadGeneratedContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introBody: string;
  introComplement: string;
  cityGuideBody: string;
  landmarkGuide: string;
  quartiersDetail: string;
  practicalInfo: string;
  comparisonText: string;
  useCases: MadUseCase[];
  advantages: MadAdvantage[];
  testimonials: MadTestimonial[];
  faq: MadFAQ[];
  howItWorks: MadHowItWorksStep[];
  nearbyMadCities: string[];
}

// ─── Helpers ─────────────────────────────────────────────

function formatPop(pop: number, loc: Loc): string {
  return pop.toLocaleString(loc === "fr" ? "fr-FR" : "en-US");
}

function joinList(items: string[], loc: Loc): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  const last = items[items.length - 1];
  const rest = items.slice(0, -1);
  return `${rest.join(", ")} ${loc === "fr" ? "et" : "and"} ${last}`;
}

function topLandmarks(city: City, n: number): string[] {
  return city.landmarks.slice(0, n);
}

function topQuartiers(city: City, n: number): string[] {
  return city.quartiers.slice(0, n);
}

function isIDF(city: City): boolean {
  return ILE_DE_FRANCE_SLUGS.has(city.slug);
}

// ─── Meta ─────────────────────────────────────────────

export function generateMeta(city: City, loc: Loc): { metaTitle: string; metaDescription: string } {
  const isLongName = city.name.length > 12;

  if (loc === "fr") {
    return {
      metaTitle: isLongName
        ? `Chauffeur privé ${city.name} | Dès 45 €/h`
        : `Chauffeur privé ${city.name} — Mise à disposition dès 45 €`,
      metaDescription: isLongName
        ? `Mise à disposition d’un chauffeur privé à ${city.name}. Berline, SUV ou van à l’heure ou à la journée. Tarif fixe garanti, devis gratuit sous 2h.`
        : `Réservez un chauffeur avec véhicule premium à ${city.name}. Mise à disposition 1h, demi-journée ou journée complète. Tarif fixe garanti, devis gratuit sous 2h.`,
    };
  }
  return {
    metaTitle: isLongName
      ? `Private chauffeur in ${city.name} — From €45/hour`
      : `Hire a private chauffeur in ${city.name} — From €45/hour`,
    metaDescription: isLongName
      ? `Hire a dedicated chauffeur with premium vehicle in ${city.name}. Hourly, half-day or full-day service. Fixed rate guaranteed, free quote within 2 hours.`
      : `Book a private chauffeur with premium sedan, SUV or van in ${city.name}. Hourly, half-day or full-day hire. Fixed rate guaranteed, free quote within 2 hours.`,
  };
}

// ─── Hero ─────────────────────────────────────────────

export function generateHero(city: City, loc: Loc): { heroTitle: string; heroSubtitle: string } {
  if (loc === "fr") {
    return {
      heroTitle: `Mise à disposition d'un chauffeur à ${city.name}`,
      heroSubtitle: `Un chauffeur privé dédié à ${city.name} pour vos déplacements professionnels, événements ou journées de visite. Berline, SUV ou van — réservation flexible à l'heure, demi-journée ou journée complète.`,
    };
  }
  return {
    heroTitle: `Chauffeur service in ${city.name}`,
    heroSubtitle: `A dedicated private chauffeur in ${city.name} for business travel, events or sightseeing. Sedan, SUV or van — flexible booking by the hour, half-day or full day.`,
  };
}

// ─── Intro (~1 300 mots) ─────────────────────────────────

export function generateIntro(city: City, loc: Loc): { introBody: string; introComplement: string } {
  const pop = formatPop(city.population, loc);
  const landmarks = joinList(topLandmarks(city, 5), loc);
  const quartiers = joinList(topQuartiers(city, 4), loc);
  const drivers = city.driverCount;

  if (loc === "fr") {
    return {
      introBody: `${city.name}, commune de ${pop} habitants ${isIDF(city) ? "au cœur de l’Île-de-France" : "en France"}, est un territoire aux multiples facettes qui nécessite une mobilité sur mesure. Que vous soyez un professionnel en déplacement, un touriste découvrant la région, ou un particulier avec des besoins ponctuels, la mise à disposition d'un chauffeur privé à ${city.name} vous offre une liberté totale de mouvement sans les contraintes de la conduite, du stationnement ou des transports en commun.

Avec TaxiNeo, la mise à disposition à ${city.name} est pensée pour s'adapter à chaque besoin : une heure pour un rendez-vous d'affaires, une demi-journée pour enchaîner les visites, ou une journée complète pour un événement. Votre chauffeur vous attend à chaque étape, connaît parfaitement ${city.name} et ses environs, et adapte son itinéraire en temps réel aux conditions de circulation.

La ville de ${city.name} dispose de nombreux points d'intérêt, notamment ${landmarks}. Se déplacer entre ces différents lieux sans attente, sans recherche de parking et sans dépendance aux horaires de bus ou de train, c'est tout l'avantage de la mise à disposition. Votre chauffeur reste à proximité immédiate et vous récupère dès que vous avez terminé votre rendez-vous ou votre visite.

Les quartiers de ${city.name} — ${quartiers} — présentent chacun leurs spécificités en termes d'accessibilité et de circulation. Nos ${drivers}+ chauffeurs partenaires sur le secteur connaissent les raccourcis, les zones de stationnement, les accès réservés et les horaires de pointe propres à chaque quartier. C'est cette expertise locale qui fait la différence avec un VTC qui dépend uniquement de son GPS.

Le service de mise à disposition TaxiNeo à ${city.name} inclut l'accueil personnalisé, l'aide aux bagages, l'attente entre les rendez-vous, et la flexibilité totale sur les itinéraires. Vous décidez de votre programme, votre chauffeur s'adapte. Besoin de modifier l'itinéraire en cours de route ? Un arrêt imprévu ? Un prolongement de la durée ? Tout est possible avec un simple échange.`,
      introComplement: `Le choix d'un service de mise à disposition à ${city.name} plutôt qu'une série de courses individuelles présente des avantages économiques significatifs. Dès que vous avez plus de 3 déplacements dans une même demi-journée, le forfait mise à disposition devient plus avantageux qu'autant de réservations séparées, en éliminant les frais de prise en charge multiples et les temps d'attente entre chaque course.

Pour les entreprises implantées à ${city.name}, la mise à disposition est la solution idéale pour les journées de visite de clients, les séminaires, les déplacements de dirigeants ou l'accueil de partenaires internationaux. TaxiNeo fournit une facture professionnelle détaillée avec itinéraire, horaires et kilométrage, compatible avec la gestion des notes de frais.

Les particuliers à ${city.name} apprécient la mise à disposition pour les journées shopping, les visites touristiques en groupe, les mariages et cérémonies, ou simplement pour profiter d'une soirée sans se soucier du retour. Le confort de disposer d'un chauffeur attentif et d'un véhicule premium à portée de main transforme n'importe quelle journée en expérience privilégiée.

La qualité du service TaxiNeo repose sur une sélection rigoureuse des chauffeurs : tous sont titulaires de la carte professionnelle, assurés, et évalués régulièrement par les clients. Notre note moyenne de ${city.rating}/5 à ${city.name} témoigne de l'exigence que nous partageons avec nos chauffeurs partenaires.`,
    };
  }

  return {
    introBody: `${city.name}, a municipality of ${pop} inhabitants ${isIDF(city) ? "in the heart of Île-de-France" : "in France"}, is a multifaceted territory that requires tailored mobility. Whether you are a business professional on the move, a tourist discovering the region, or an individual with occasional needs, hiring a dedicated private chauffeur in ${city.name} gives you complete freedom of movement without the constraints of driving, parking or public transport.

With TaxiNeo, chauffeur service in ${city.name} is designed to fit every need: one hour for a business meeting, a half-day to chain multiple visits, or a full day for an event. Your driver waits at every stop, knows ${city.name} and its surroundings perfectly, and adapts the route in real time to traffic conditions.

${city.name} has many points of interest, including ${landmarks}. Moving between these different locations without waiting, without searching for parking and without depending on bus or train schedules is the key advantage of chauffeur service. Your driver stays close by and picks you up as soon as your meeting or visit is over.

The districts of ${city.name} — ${quartiers} — each have their own characteristics in terms of accessibility and traffic. Our ${drivers}+ partner drivers in the area know the shortcuts, parking areas, reserved access points and peak hours specific to each neighbourhood. This local expertise makes all the difference compared to a rideshare that relies solely on GPS.

TaxiNeo's chauffeur service in ${city.name} includes personalised welcome, luggage assistance, waiting between appointments, and complete flexibility on routes. You decide your schedule, your driver adapts. Need to change the route mid-journey? An unplanned stop? An extension of the duration? Everything is possible with a simple exchange.`,
    introComplement: `Choosing a chauffeur service in ${city.name} rather than a series of individual rides offers significant economic advantages. As soon as you have more than 3 trips in a single half-day, the chauffeur package becomes more cost-effective than separate bookings, eliminating multiple pickup fees and waiting times between each ride.

For businesses based in ${city.name}, chauffeur service is the ideal solution for client visit days, seminars, executive travel or welcoming international partners. TaxiNeo provides a detailed professional invoice with route, times and mileage, compatible with expense management systems.

Individuals in ${city.name} appreciate chauffeur service for shopping days, group sightseeing, weddings and ceremonies, or simply enjoying an evening out without worrying about the return journey. The comfort of having an attentive driver and a premium vehicle at hand transforms any day into a privileged experience.

TaxiNeo's service quality relies on rigorous driver selection: all hold a professional licence, are fully insured, and are regularly rated by clients. Our average rating of ${city.rating}/5 in ${city.name} reflects the high standards we share with our partner drivers.`,
  };
}

// ─── Landmark Guide (~1 500 mots) ─────────────────────────

export function generateLandmarkGuide(city: City, loc: Loc): string {
  const paragraphs = city.landmarks.map((landmark) => {
    if (loc === "fr") {
      return `**${landmark}** — La mise à disposition d'un chauffeur pour visiter ou rejoindre ${landmark} à ${city.name} vous assure un trajet direct, sans attente et sans stress. Votre chauffeur connaît les accès les plus rapides, les zones de dépose autorisées et les alternatives en cas de circulation dense. Que vous ayez un rendez-vous professionnel, une visite médicale ou touristique à ${landmark}, le véhicule reste à proximité et vous récupère dès que vous êtes prêt. C'est la garantie d'un déplacement fluide, ponctuel et confortable, adapté à votre emploi du temps et non l'inverse. En cas d'événement ou de forte affluence autour de ${landmark}, nos chauffeurs connaissent les itinéraires alternatifs et les points de dépose secondaires pour vous éviter les embouteillages.`;
    }
    return `**${landmark}** — Hiring a chauffeur to visit or reach ${landmark} in ${city.name} ensures a direct, stress-free journey with no waiting. Your driver knows the fastest access routes, authorised drop-off zones and alternatives in case of heavy traffic. Whether you have a business meeting, a medical appointment or a tourist visit at ${landmark}, the vehicle stays nearby and picks you up as soon as you are ready. This guarantees a smooth, punctual and comfortable trip that adapts to your schedule, not the other way around. In case of events or heavy crowds around ${landmark}, our drivers know alternative routes and secondary drop-off points to help you avoid congestion.`;
  });

  return paragraphs.join("\n\n");
}

// ─── Quartiers Detail (~1 200 mots) ─────────────────────────

export function generateQuartiersDetail(city: City, loc: Loc): string {
  const paragraphs = city.quartiers.map((quartier) => {
    if (loc === "fr") {
      return `**${quartier}** — Le quartier ${quartier} à ${city.name} possède ses propres particularités en matière de circulation et d'accessibilité. Nos chauffeurs en mise à disposition connaissent les spécificités de ${quartier} : les rues à sens unique, les zones piétonnes, les marchés qui modifient la circulation certains jours, et les emplacements de dépose les plus pratiques. Réserver une mise à disposition pour vos déplacements dans ${quartier} et autour, c'est bénéficier d'un chauffeur qui anticipe les difficultés de stationnement et de circulation propres à ce secteur. Votre chauffeur vous dépose au plus près de votre destination dans ${quartier} et se positionne à proximité immédiate en attendant votre prochain besoin.`;
    }
    return `**${quartier}** — The ${quartier} district in ${city.name} has its own traffic and accessibility characteristics. Our chauffeur service drivers know the specifics of ${quartier}: one-way streets, pedestrian zones, market days that alter traffic flow, and the most convenient drop-off spots. Booking a chauffeur for your travel within and around ${quartier} means having a driver who anticipates the parking and traffic challenges specific to this area. Your driver drops you off as close as possible to your destination in ${quartier} and positions nearby while waiting for your next need.`;
  });

  return paragraphs.join("\n\n");
}

// ─── City Guide (~1 500 mots) ─────────────────────────

export function generateCityGuide(city: City, loc: Loc): string {
  const pop = formatPop(city.population, loc);
  const landmarks = joinList(topLandmarks(city, 3), loc);
  const quartiers = joinList(topQuartiers(city, 3), loc);
  const routes = city.popularRoutes.slice(0, 3);

  if (loc === "fr") {
    const routesText = routes.map((r) => `${r.from} → ${r.to} (${r.price})`).join(", ");
    return `${city.name} est une commune dynamique de ${pop} habitants ${isIDF(city) ? "qui s’inscrit pleinement dans le tissu urbain de l’Île-de-France" : "au dynamisme reconnu"}. La ville est structurée autour de ses principaux quartiers — ${quartiers} — et bénéficie de la proximité de ${landmarks}.

**Circulation et accès routier** — La circulation à ${city.name} varie considérablement selon les heures de la journée et les jours de la semaine. Les heures de pointe (7h30-9h30 et 17h-19h30) concentrent l'essentiel des ralentissements, particulièrement sur les axes principaux reliant ${city.name} aux autoroutes et aux communes voisines. Les soirs de week-end et les jours de marché connaissent également des pics de circulation dans le centre-ville. Nos chauffeurs en mise à disposition connaissent parfaitement ces rythmes et adaptent leurs itinéraires en conséquence.

**Transports en commun et complémentarité** — ${city.name} est desservie par les transports en commun ${isIDF(city) ? "franciliens" : "locaux"}, mais la mise à disposition d'un chauffeur reste la solution la plus efficace pour les déplacements multiples ou les trajets nécessitant flexibilité et ponctualité. Là où les transports en commun imposent des correspondances, des temps d'attente et des horaires fixes, votre chauffeur en mise à disposition s'adapte minute par minute à votre programme.

**Trajets fréquents et tarifs indicatifs** — Les trajets les plus demandés au départ de ${city.name} incluent : ${routesText}. En mise à disposition, ces prix sont intégrés dans un forfait global plus avantageux dès que vous combinez 2 ou 3 déplacements dans la même période.

**Événements et vie locale** — ${city.name} accueille régulièrement des événements culturels, sportifs et professionnels qui modifient les conditions de circulation. Lors de ces événements, la mise à disposition d'un chauffeur qui connaît les alternatives et les accès réservés est un atout considérable. Nos chauffeurs suivent en temps réel les informations de circulation et les fermetures de voirie pour garantir votre ponctualité.

**Conseils pour optimiser votre mise à disposition** — Pour tirer le meilleur parti de votre chauffeur à ${city.name}, planifiez vos rendez-vous par zone géographique plutôt que par ordre chronologique. Regroupez les visites dans un même quartier pour minimiser les trajets intermédiaires. Votre chauffeur peut vous conseiller sur l'enchaînement optimal de vos étapes en fonction de la circulation en temps réel.`;
  }

  const routesText = routes.map((r) => `${r.from} → ${r.to} (${r.price})`).join(", ");
  return `${city.name} is a dynamic municipality of ${pop} inhabitants ${isIDF(city) ? "fully integrated into the urban fabric of Île-de-France" : "with a thriving urban environment"}. The city is structured around its main districts — ${quartiers} — and benefits from proximity to ${landmarks}.

**Traffic and road access** — Traffic in ${city.name} varies considerably depending on the time of day and day of the week. Rush hours (7:30-9:30am and 5-7:30pm) account for most slowdowns, particularly on the main roads connecting ${city.name} to motorways and neighbouring municipalities. Weekend evenings and market days also see traffic peaks in the town centre. Our chauffeur service drivers are fully familiar with these rhythms and adjust their routes accordingly.

**Public transport and complementarity** — ${city.name} is served by ${isIDF(city) ? "Île-de-France" : "local"} public transport, but chauffeur service remains the most efficient solution for multiple trips or journeys requiring flexibility and punctuality. Where public transport imposes connections, waiting times and fixed timetables, your chauffeur adapts minute by minute to your schedule.

**Frequent routes and indicative fares** — The most popular routes from ${city.name} include: ${routesText}. With chauffeur service, these prices are integrated into a more advantageous overall package as soon as you combine 2 or 3 trips in the same period.

**Events and local life** — ${city.name} regularly hosts cultural, sporting and professional events that alter traffic conditions. During these events, having a chauffeur who knows alternatives and reserved access points is a considerable asset. Our drivers follow real-time traffic information and road closures to guarantee your punctuality.

**Tips for getting the most from your chauffeur** — To get the best value from your chauffeur in ${city.name}, plan your appointments by geographic zone rather than chronological order. Group visits in the same district to minimise intermediate trips. Your driver can advise you on the optimal sequence of stops based on real-time traffic conditions.`;
}

// ─── Practical Info (~800 mots) ─────────────────────────

export function generatePracticalInfo(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `**Réservation et disponibilité** — Le service de mise à disposition à ${city.name} est disponible 7j/7, 24h/24. Vous pouvez réserver votre chauffeur jusqu'à 30 jours à l'avance ou avec un préavis de 2 heures pour les demandes urgentes. La réservation se fait en ligne via notre formulaire de devis, par téléphone au 07 59 59 29 34 ou par email.

**Véhicules disponibles** — Trois catégories de véhicules sont proposées pour la mise à disposition à ${city.name} : la **berline** (Mercedes Classe E, BMW Série 5 ou équivalent) pour 1 à 3 passagers, le **SUV** (Mercedes GLC, BMW X5 ou équivalent) pour 1 à 4 passagers avec espace bagages supérieur, et le **van** (Mercedes Classe V ou équivalent) pour 1 à 7 passagers, idéal pour les groupes et familles.

**Durées et tarification** — La mise à disposition est facturée au forfait selon la durée choisie : 1 heure, demi-journée (4h), journée complète (8h) ou soirée (4h à partir de 19h). Le forfait inclut le chauffeur, le véhicule, le carburant, les péages éventuels et l'assurance. Les kilomètres sont inclus dans un rayon de 50 km autour de ${city.name}. Au-delà, un supplément kilométrique s'applique.

**Annulation** — L'annulation est gratuite jusqu'à 24 heures avant le début de la mise à disposition. Entre 24h et 6h avant, des frais de 50 % du montant total s'appliquent. En deçà de 6h, le montant total est dû.

**Prolongation en cours de service** — Si votre programme s'allonge, vous pouvez prolonger la durée de mise à disposition directement avec votre chauffeur. La facturation supplémentaire est calculée au prorata du tarif horaire correspondant à votre catégorie de véhicule.

**Facturation et paiement** — Le paiement s'effectue par carte bancaire en ligne lors de la réservation ou à bord en fin de service. Les entreprises peuvent demander un compte professionnel avec facturation différée. Chaque mise à disposition fait l'objet d'une facture détaillée avec itinéraire, horaires, kilométrage et TVA.

**Qualité et engagement** — Tous nos chauffeurs à ${city.name} sont titulaires de la carte professionnelle T3P, assurés RC Pro, et évalués après chaque service. Le véhicule est nettoyé avant chaque mise à disposition. Eau fraîche et chargeurs USB sont disponibles à bord.`;
  }

  return `**Booking and availability** — Chauffeur service in ${city.name} is available 7 days a week, 24 hours a day. You can book your driver up to 30 days in advance or with 2 hours' notice for urgent requests. Booking is done online via our quote form, by phone at +33 7 59 59 29 34 or by email.

**Available vehicles** — Three vehicle categories are available for chauffeur service in ${city.name}: **sedan** (Mercedes E-Class, BMW 5 Series or equivalent) for 1 to 3 passengers, **SUV** (Mercedes GLC, BMW X5 or equivalent) for 1 to 4 passengers with extra luggage space, and **van** (Mercedes V-Class or equivalent) for 1 to 7 passengers, ideal for groups and families.

**Duration and pricing** — The chauffeur service is charged at a flat rate based on the chosen duration: 1 hour, half-day (4h), full day (8h) or evening (4h from 7pm). The rate includes the driver, vehicle, fuel, any tolls and insurance. Kilometres are included within a 50 km radius of ${city.name}. Beyond that, a per-kilometre supplement applies.

**Cancellation** — Cancellation is free up to 24 hours before the start of the service. Between 24h and 6h before, a fee of 50% of the total amount applies. Less than 6h before, the full amount is due.

**Extension during service** — If your schedule runs longer, you can extend the chauffeur service duration directly with your driver. Additional billing is calculated pro rata based on the hourly rate for your vehicle category.

**Billing and payment** — Payment is made by credit card online at the time of booking or on board at the end of the service. Businesses can request a professional account with deferred billing. Each chauffeur service comes with a detailed invoice showing route, times, mileage and VAT.

**Quality and commitment** — All our drivers in ${city.name} hold a professional T3P card, are fully insured, and are rated after each service. The vehicle is cleaned before each assignment. Fresh water and USB chargers are available on board.`;
}

// ─── Comparison (~800 mots) ─────────────────────────

export function generateComparison(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `La mise à disposition d'un chauffeur à ${city.name} se distingue fondamentalement d'une simple course de taxi ou de VTC. Voici un comparatif détaillé pour vous aider à choisir la formule la plus adaptée à vos besoins.

**Taxi classique** — Le taxi fonctionne au compteur avec prise en charge, tarif kilométrique et tarif horaire d'attente. Chaque course est indépendante : vous payez une prise en charge à chaque déplacement. C'est la formule idéale pour un trajet unique et ponctuel. Cependant, dès que vous avez 2 ou 3 arrêts dans la même période, le cumul des prises en charge rend la formule plus coûteuse que la mise à disposition.

**VTC (Uber, Bolt, etc.)** — Le VTC propose un tarif à la course calculé par algorithme. Les prix varient selon la demande (tarification dynamique) : un même trajet peut coûter le simple ou le triple selon l'heure, la météo ou un événement. En mise à disposition, aucune surprise : le forfait est garanti, quelle que soit la demande.

**Mise à disposition TaxiNeo** — Le forfait mise à disposition inclut un chauffeur dédié, un véhicule premium, le carburant, les péages et l'attente illimitée pendant la durée réservée. Le prix est fixe et garanti dès la réservation. Le chauffeur reste à votre disposition exclusive : pas de course partagée, pas de détour pour prendre un autre passager.

| Critère | Taxi classique | VTC (Uber/Bolt) | Mise à disposition TaxiNeo |
|---------|---------------|-----------------|---------------------------|
| Prix prévisible | Estimation | Variable (dynamique) | Fixe et garanti |
| Attente entre arrêts | Payante au compteur | Nouvelle course | Incluse |
| Connaissance locale | Excellente | Variable | Excellente |
| Voies de bus | Oui | Non | Oui (taxis) |
| Facture pro | Oui | Limitée | Oui, détaillée |
| Véhicule garanti | Variable | Variable | Premium garanti |

En résumé, pour un trajet unique à ${city.name}, le taxi classique reste la solution la plus simple. Dès que vous avez des déplacements multiples, des temps d'attente entre des rendez-vous, ou besoin d'un niveau de service garanti, la mise à disposition est la formule la plus avantageuse et la plus confortable.`;
  }

  return `Chauffeur service in ${city.name} is fundamentally different from a standard taxi or rideshare trip. Here is a detailed comparison to help you choose the formula that best suits your needs.

**Standard taxi** — A taxi works on a meter with pickup charge, per-kilometre rate and hourly waiting rate. Each ride is independent: you pay a pickup charge for each trip. This is ideal for a single, one-off journey. However, as soon as you have 2 or 3 stops in the same period, the cumulative pickup charges make it more expensive than chauffeur service.

**Rideshare (Uber, Bolt, etc.)** — Rideshare offers a per-ride fare calculated by algorithm. Prices vary with demand (surge pricing): the same journey can cost anywhere from single to triple depending on the time, weather or an event. With chauffeur service, there are no surprises: the flat rate is guaranteed regardless of demand.

**TaxiNeo chauffeur service** — The chauffeur package includes a dedicated driver, a premium vehicle, fuel, tolls and unlimited waiting during the booked period. The price is fixed and guaranteed from booking. The driver remains at your exclusive disposal: no ride-sharing, no detours to pick up other passengers.

| Criteria | Standard taxi | Rideshare (Uber/Bolt) | TaxiNeo chauffeur service |
|----------|--------------|----------------------|---------------------------|
| Predictable price | Estimate | Variable (surge) | Fixed & guaranteed |
| Waiting between stops | Metered | New ride | Included |
| Local knowledge | Excellent | Variable | Excellent |
| Bus lanes | Yes | No | Yes (taxis) |
| Professional invoice | Yes | Limited | Yes, detailed |
| Guaranteed vehicle | Variable | Variable | Premium guaranteed |

In summary, for a single trip in ${city.name}, a standard taxi remains the simplest option. As soon as you have multiple trips, waiting time between appointments, or need a guaranteed level of service, chauffeur service is the most cost-effective and comfortable formula.`;
}

// ─── Use Cases (6 items) ─────────────────────────

export function generateUseCases(city: City, loc: Loc): MadUseCase[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:buildings-3-linear",
        title: "Rendez-vous d'affaires",
        desc: `Enchaînez vos rendez-vous professionnels à ${city.name} sans perte de temps. Votre chauffeur vous attend entre chaque meeting et optimise les trajets selon le trafic en temps réel.`,
        example: `Un directeur commercial basé à ${city.name} enchaîne 4 rendez-vous clients dans la matinée entre ${topQuartiers(city, 2).join(" et ")}. Le chauffeur ajuste le parcours et gagne 25 minutes sur la matinée.`,
      },
      {
        icon: "mdi:airplane",
        title: "Transferts aéroport VIP",
        desc: `Accueil personnalisé à l'aéroport avec panneau nominatif, aide aux bagages et trajet direct vers ${city.name}. Suivi des vols en temps réel pour adapter l'heure d'arrivée.`,
        example: `Accueil d'un partenaire japonais à ${isIDF(city) ? "CDG" : "l’aéroport"} : panneau nominatif, bouteille d'eau, wifi à bord. Transfert vers son hôtel à ${city.name} puis mise à disposition pour les visites de la journée.`,
      },
      {
        icon: "solar:calendar-linear",
        title: "Mariages et cérémonies",
        desc: `Pour votre mariage ou événement à ${city.name}, un chauffeur dédié transporte les mariés, la famille ou les invités entre la mairie, le lieu de culte et la salle de réception.`,
        example: `Mariage à ${city.name} : transport des mariés de la mairie à l'église puis au château de réception. Décoration florale du véhicule prévue en option.`,
      },
      {
        icon: "solar:medical-kit-linear",
        title: "Rendez-vous médicaux",
        desc: `Accompagnement pour vos rendez-vous médicaux à ${city.name} ou dans les hôpitaux voisins. Le chauffeur vous attend et vous ramène en toute tranquillité après votre consultation.`,
        example: `Patient de ${city.name} ayant 3 rendez-vous spécialistes dans la journée ${isIDF(city) ? `entre ${city.name} et Paris` : `dans la métropole de ${city.name}`}. Le chauffeur assure l'aller, l'attente et le retour pour chaque rendez-vous.`,
      },
      {
        icon: "solar:map-linear",
        title: "Journées touristiques",
        desc: `Découvrez ${city.name} et ${isIDF(city) ? "l’Île-de-France" : "sa région"} avec un chauffeur-guide local. Visitez les points d'intérêt, les marchés, les parcs et les villages voisins à votre rythme.`,
        example: `Famille américaine en mise à disposition à la journée : visite de ${topLandmarks(city, 2).join(", ")} le matin, déjeuner dans le centre, puis excursion dans les communes voisines l'après-midi.`,
      },
      {
        icon: "solar:moon-linear",
        title: "Soirées et événements",
        desc: `Profitez de votre soirée à ${city.name} sans vous soucier du retour. Votre chauffeur vous emmène au restaurant, au théâtre ou en soirée, et vous raccompagne quand vous le souhaitez.`,
        example: `Couple sortant dîner dans le centre de ${city.name} puis se rendant à un concert. Le chauffeur assure l'aller, attend pendant le spectacle et ramène les convives à domicile.`,
      },
    ];
  }

  return [
    {
      icon: "solar:buildings-3-linear",
      title: "Business meetings",
      desc: `Chain your professional appointments in ${city.name} without wasting time. Your driver waits between each meeting and optimises routes based on real-time traffic.`,
      example: `A sales director based in ${city.name} chains 4 client meetings in the morning between ${topQuartiers(city, 2).join(" and ")}. The driver adjusts the route and saves 25 minutes over the morning.`,
    },
    {
      icon: "solar:airplane-linear",
      title: "VIP airport transfers",
      desc: `Personalised airport welcome with name board, luggage assistance and direct transfer to ${city.name}. Real-time flight tracking to adjust arrival time.`,
      example: `Welcoming a Japanese partner at ${isIDF(city) ? "CDG" : "the airport"}: name board, water bottle, onboard wifi. Transfer to hotel in ${city.name} then chauffeur service for the day's visits.`,
    },
    {
      icon: "solar:calendar-linear",
      title: "Weddings & ceremonies",
      desc: `For your wedding or event in ${city.name}, a dedicated driver transports the couple, family or guests between the town hall, place of worship and reception venue.`,
      example: `Wedding in ${city.name}: transport for the couple from town hall to church then to reception château. Vehicle floral decoration available as an option.`,
    },
    {
      icon: "solar:medical-kit-linear",
      title: "Medical appointments",
      desc: `Support for your medical appointments in ${city.name} or neighbouring hospitals. The driver waits and brings you back comfortably after your consultation.`,
      example: `Patient from ${city.name} with 3 specialist appointments during the day ${isIDF(city) ? `between ${city.name} and Paris` : `across the ${city.name} area`}. The driver handles the journey, waiting and return for each appointment.`,
    },
    {
      icon: "solar:map-linear",
      title: "Sightseeing days",
      desc: `Discover ${city.name} and ${isIDF(city) ? "Île-de-France" : "its surroundings"} with a local chauffeur-guide. Visit points of interest, markets, parks and neighbouring villages at your own pace.`,
      example: `American family on a full-day hire: visiting ${topLandmarks(city, 2).join(", ")} in the morning, lunch in the centre, then afternoon excursion to neighbouring towns.`,
    },
    {
      icon: "solar:moon-linear",
      title: "Evenings & events",
      desc: `Enjoy your evening in ${city.name} without worrying about getting home. Your driver takes you to the restaurant, theatre or party, and drives you back whenever you wish.`,
      example: `Couple dining in central ${city.name} then going to a concert. The driver handles the outward journey, waits during the show and takes the guests home.`,
    },
  ];
}

// ─── Advantages (6 items) ─────────────────────────

export function generateAdvantages(city: City, loc: Loc): MadAdvantage[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:shield-check-linear",
        title: "Chauffeur professionnel certifié",
        shortDesc: "Carte professionnelle T3P, assurance RC Pro, formation continue",
        longDesc: `Chaque chauffeur en mise à disposition à ${city.name} est titulaire de la carte professionnelle T3P délivrée par la préfecture, possède une assurance responsabilité civile professionnelle et suit des formations régulières sur la conduite écoresponsable, l'accueil client et la sécurité. Nos chauffeurs à ${city.name} cumulent en moyenne 8 ans d'expérience dans le transport de personnes. Ils connaissent ${city.name} par cœur, de ses grands axes à ses ruelles les plus étroites.`,
      },
      {
        icon: "solar:clock-circle-linear",
        title: "Disponibilité 24h/24, 7j/7",
        shortDesc: "Prise en charge à toute heure, même les jours fériés",
        longDesc: `Le service de mise à disposition à ${city.name} est opérationnel 24 heures sur 24, 365 jours par an. Que vous ayez besoin d'un chauffeur pour un transfert à 5 heures du matin, une journée complète un dimanche ou une soirée du 31 décembre, nos ${city.driverCount}+ chauffeurs partenaires sur le secteur de ${city.name} garantissent une couverture permanente. Le temps d'attente moyen pour la prise en charge est de ${city.avgWaitTime}.`,
      },
      {
        icon: "solar:tag-price-linear",
        title: "Tarif fixe garanti",
        shortDesc: "Prix annoncé = prix payé, sans surcharge ni tarification dynamique",
        longDesc: `Contrairement aux VTC qui pratiquent la tarification dynamique (prix multipliés par 2 ou 3 aux heures de pointe ou lors d'événements), la mise à disposition TaxiNeo à ${city.name} est facturée au forfait fixe annoncé lors de la réservation. Aucune surprise en fin de course : le prix inclut le chauffeur, le véhicule, le carburant, les péages et l'attente illimitée pendant la durée réservée. Vous savez exactement ce que vous payez avant de confirmer.`,
      },
      {
        icon: "solar:route-linear",
        title: "Accès aux voies réservées",
        shortDesc: "Couloirs de bus et files taxi pour des trajets plus rapides",
        longDesc: `En tant que taxis professionnels, nos chauffeurs en mise à disposition à ${city.name} bénéficient de l'accès aux voies de bus et aux files réservées aux taxis. C'est un avantage considérable ${isIDF(city) ? "en Île-de-France, où les couloirs de bus représentent des dizaines de kilomètres de voies prioritaires" : "dans les grandes agglomérations, où les couloirs de bus permettent d’éviter les embouteillages"}. Sur un trajet ${isIDF(city) ? `${city.name}–Paris` : `à travers ${city.name}`} en heure de pointe, cet accès peut faire gagner 15 à 25 minutes par rapport à un VTC qui reste dans la circulation générale.`,
      },
      {
        icon: "solar:document-text-linear",
        title: "Facture professionnelle détaillée",
        shortDesc: "Itinéraire, horaires, kilométrage, TVA — compatible notes de frais",
        longDesc: `Chaque mise à disposition à ${city.name} fait l'objet d'une facture professionnelle détaillée envoyée par email. La facture inclut l'itinéraire complet, les horaires de départ et d'arrivée, le kilométrage total, le détail de la TVA et les coordonnées du chauffeur. Ce format est compatible avec tous les systèmes de gestion de notes de frais. Les entreprises de ${city.name} peuvent demander un compte professionnel avec facturation mensuelle consolidée.`,
      },
      {
        icon: "solar:star-linear",
        title: "Véhicule premium garanti",
        shortDesc: "Berline, SUV ou van récent, climatisé, wifi et chargeurs",
        longDesc: `La mise à disposition à ${city.name} se fait exclusivement dans des véhicules premium de moins de 4 ans : berlines (Mercedes Classe E, BMW Série 5), SUV (Mercedes GLC, BMW X5) ou vans (Mercedes Classe V). Chaque véhicule est climatisé, équipé du wifi gratuit, de chargeurs USB et d'eau fraîche à disposition. Le véhicule est nettoyé et préparé avant chaque mise à disposition. Vous pouvez demander la catégorie de véhicule qui correspond le mieux à vos besoins lors de la réservation.`,
      },
    ];
  }

  return [
    {
      icon: "solar:shield-check-linear",
      title: "Certified professional chauffeur",
      shortDesc: "T3P professional card, professional liability insurance, ongoing training",
      longDesc: `Every chauffeur available for hire in ${city.name} holds a T3P professional card issued by the prefecture, carries professional liability insurance and undergoes regular training in eco-driving, client hospitality and safety. Our drivers in ${city.name} average 8 years of experience in passenger transport. They know ${city.name} inside out, from its main roads to its narrowest streets.`,
    },
    {
      icon: "solar:clock-circle-linear",
      title: "Available 24/7, 365 days a year",
      shortDesc: "Pickup at any time, including public holidays",
      longDesc: `Chauffeur service in ${city.name} operates 24 hours a day, 365 days a year. Whether you need a driver for a 5am transfer, a full day on a Sunday or a New Year's Eve evening, our ${city.driverCount}+ partner drivers in the ${city.name} area guarantee permanent coverage. Average pickup waiting time is ${city.avgWaitTime}.`,
    },
    {
      icon: "solar:tag-price-linear",
      title: "Guaranteed fixed rate",
      shortDesc: "Quoted price = price paid, no surcharges or surge pricing",
      longDesc: `Unlike rideshares that use surge pricing (prices multiplied by 2 or 3 during peak hours or events), TaxiNeo chauffeur service in ${city.name} is charged at the fixed rate quoted at booking. No surprises at the end of the journey: the price includes the driver, vehicle, fuel, tolls and unlimited waiting during the booked period. You know exactly what you are paying before confirming.`,
    },
    {
      icon: "solar:route-linear",
      title: "Reserved lane access",
      shortDesc: "Bus lanes and taxi lanes for faster journeys",
      longDesc: `As professional taxis, our chauffeur service drivers in ${city.name} have access to bus lanes and taxi-reserved lanes. This is a considerable advantage ${isIDF(city) ? "in Île-de-France, where bus lanes represent dozens of kilometres of priority routes" : "in major urban areas, where bus lanes help avoid traffic jams"}. On a ${isIDF(city) ? `${city.name}–Paris` : `cross-${city.name}`} journey during rush hour, this access can save 15 to 25 minutes compared to a rideshare stuck in general traffic.`,
    },
    {
      icon: "solar:document-text-linear",
      title: "Detailed professional invoice",
      shortDesc: "Route, times, mileage, VAT — expense report compatible",
      longDesc: `Each chauffeur service in ${city.name} comes with a detailed professional invoice sent by email. The invoice includes the complete route, departure and arrival times, total mileage, VAT breakdown and driver details. This format is compatible with all expense management systems. Businesses in ${city.name} can request a professional account with consolidated monthly billing.`,
    },
    {
      icon: "solar:star-linear",
      title: "Guaranteed premium vehicle",
      shortDesc: "Recent sedan, SUV or van, air-conditioned, wifi and chargers",
      longDesc: `Chauffeur service in ${city.name} uses exclusively premium vehicles less than 4 years old: sedans (Mercedes E-Class, BMW 5 Series), SUVs (Mercedes GLC, BMW X5) or vans (Mercedes V-Class). Every vehicle is air-conditioned, equipped with free wifi, USB chargers and fresh water on board. The vehicle is cleaned and prepared before each assignment. You can request the vehicle category that best suits your needs at booking.`,
    },
  ];
}

// ─── Testimonials (4 items) ─────────────────────────

export function generateTestimonials(city: City, loc: Loc): MadTestimonial[] {
  if (loc === "fr") {
    return [
      {
        text: `Mise à disposition d'un chauffeur pour une journée de rendez-vous à ${city.name}. Le chauffeur connaissait parfaitement la ville, les raccourcis et les zones de dépose. J'ai gagné un temps précieux et j'ai pu me concentrer sur mes réunions plutôt que sur la conduite et le parking. Le véhicule était impeccable et le service irréprochable.`,
        name: "Thomas D.",
        initials: "TD",
        role: `Directeur commercial, ${city.name}`,
      },
      {
        text: `J'ai réservé un chauffeur en mise à disposition pour accompagner mes parents âgés à leurs rendez-vous médicaux à ${city.name}. Le chauffeur a été d'une patience et d'une gentillesse remarquables. Il les a aidés à monter et descendre du véhicule, a porté leurs affaires et les a attendus aussi longtemps que nécessaire. Un service humain et professionnel.`,
        name: "Marie-Claire L.",
        initials: "ML",
        role: `Fille de patients, ${city.name}`,
      },
      {
        text: `Pour notre mariage à ${city.name}, nous avons pris le service mise à disposition. Le chauffeur a transporté les mariés, les témoins et les parents entre la mairie, l'église et la salle de réception. Tout était parfait : véhicule décoré, timing respecté, chauffeur souriant et attentionné. Les photos dans la voiture sont magnifiques !`,
        name: "Sophie & Antoine R.",
        initials: "SR",
        role: `Jeunes mariés, ${city.name}`,
      },
      {
        text: `En tant qu'entreprise basée à ${city.name}, nous utilisons régulièrement la mise à disposition TaxiNeo pour nos clients internationaux. Accueil VIP à ${isIDF(city) ? "CDG" : "l’aéroport"}, transfert vers nos bureaux, puis mise à disposition pour les visites de la journée. La facturation professionnelle nous simplifie la comptabilité. Service recommandé sans hésitation.`,
        name: "Jean-François M.",
        initials: "JM",
        role: `DG, entreprise à ${city.name}`,
      },
    ];
  }

  return [
    {
      text: `Chauffeur service for a full day of meetings in ${city.name}. The driver knew the city perfectly, the shortcuts and the drop-off zones. I saved valuable time and was able to focus on my meetings rather than driving and parking. The vehicle was immaculate and the service faultless.`,
      name: "Thomas D.",
      initials: "TD",
      role: `Sales Director, ${city.name}`,
    },
    {
      text: `I booked a chauffeur service to accompany my elderly parents to their medical appointments in ${city.name}. The driver was remarkably patient and kind. He helped them in and out of the vehicle, carried their belongings and waited as long as needed. A human and professional service.`,
      name: "Marie-Claire L.",
      initials: "ML",
      role: `Patient's daughter, ${city.name}`,
    },
    {
      text: `For our wedding in ${city.name}, we used the chauffeur service. The driver transported the couple, witnesses and parents between the town hall, church and reception venue. Everything was perfect: decorated vehicle, timing respected, smiling and attentive driver. The photos in the car are magnificent!`,
      name: "Sophie & Antoine R.",
      initials: "SR",
      role: `Newlyweds, ${city.name}`,
    },
    {
      text: `As a business based in ${city.name}, we regularly use TaxiNeo chauffeur service for our international clients. VIP welcome at ${isIDF(city) ? "CDG" : "the airport"}, transfer to our offices, then chauffeur service for the day's visits. The professional billing simplifies our accounting. Service recommended without hesitation.`,
      name: "Jean-François M.",
      initials: "JM",
      role: `CEO, company in ${city.name}`,
    },
  ];
}

// ─── FAQ (10 items) ─────────────────────────

export function generateFAQ(city: City, loc: Loc): MadFAQ[] {
  if (loc === "fr") {
    return [
      {
        question: `Combien coûte une mise à disposition de chauffeur à ${city.name} ?`,
        answer: `Le tarif dépend de la durée et du type de véhicule. Pour une mise à disposition à ${city.name}, comptez à partir de 45 € pour 1 heure en berline, 180 € pour une demi-journée (4h), 350 € pour une journée complète (8h) et 200 € pour une soirée (4h à partir de 19h). Les tarifs SUV et van sont respectivement 20 % et 40 % supérieurs. Le prix inclut le chauffeur, le véhicule, le carburant, les péages et l'attente illimitée pendant la durée réservée. Demandez un devis personnalisé via notre formulaire pour obtenir un tarif exact.`,
      },
      {
        question: `Comment réserver une mise à disposition à ${city.name} ?`,
        answer: `Remplissez le formulaire de devis sur cette page en indiquant la date souhaitée, la durée, le type de véhicule et le lieu de prise en charge à ${city.name}. Nous vous envoyons un devis détaillé sous 2 heures. Vous pouvez également réserver par téléphone au 07 59 59 29 34. La réservation est possible jusqu'à 30 jours à l'avance ou avec un préavis de 2 heures pour les demandes urgentes.`,
      },
      {
        question: `Quels véhicules sont disponibles pour la mise à disposition à ${city.name} ?`,
        answer: `Nous proposons trois catégories de véhicules pour la mise à disposition à ${city.name} : la berline (Mercedes Classe E, BMW Série 5 ou équivalent) pour 1 à 3 passagers, le SUV (Mercedes GLC, BMW X5 ou équivalent) pour 1 à 4 passagers avec plus d'espace bagages, et le van (Mercedes Classe V ou équivalent) pour 1 à 7 passagers. Tous les véhicules ont moins de 4 ans et sont équipés de climatisation, wifi gratuit et chargeurs USB.`,
      },
      {
        question: `La mise à disposition inclut-elle les péages et le carburant ?`,
        answer: `Oui, le forfait mise à disposition à ${city.name} est tout compris : chauffeur, véhicule, carburant et péages sont inclus dans le prix annoncé. Seuls les kilomètres au-delà de 50 km du point de départ à ${city.name} font l'objet d'un supplément kilométrique communiqué à l'avance.`,
      },
      {
        question: `Peut-on prolonger la durée de mise à disposition en cours de service ?`,
        answer: `Oui, si votre programme s'allonge, vous pouvez prolonger directement avec votre chauffeur. La facturation supplémentaire est calculée au prorata du tarif horaire de votre catégorie de véhicule. Cette souplesse est l'un des avantages majeurs de la mise à disposition par rapport aux courses individuelles.`,
      },
      {
        question: `La mise à disposition est-elle disponible le soir et le week-end à ${city.name} ?`,
        answer: `Oui, le service de mise à disposition à ${city.name} est disponible 24h/24 et 7j/7, y compris les soirs, week-ends et jours fériés. Nous disposons de ${city.driverCount}+ chauffeurs partenaires sur le secteur de ${city.name} qui assurent une couverture permanente. Il n'y a aucun supplément pour les soirs et week-ends : le forfait est le même quelle que soit la plage horaire.`,
      },
      {
        question: `Comment fonctionne l'annulation d'une mise à disposition ?`,
        answer: `L'annulation d'une mise à disposition à ${city.name} est gratuite jusqu'à 24 heures avant le début du service. Entre 24h et 6h avant, des frais de 50 % du montant total s'appliquent. En deçà de 6h, le montant total est dû. En cas de retard de votre côté, le chauffeur vous attend gratuitement pendant la durée de la mise à disposition réservée.`,
      },
      {
        question: `La mise à disposition est-elle plus avantageuse que plusieurs courses séparées ?`,
        answer: `Oui, dès que vous avez 3 déplacements ou plus dans une même demi-journée, la mise à disposition à ${city.name} est plus économique que des courses individuelles. Vous économisez les frais de prise en charge multiples (environ 4 € par course), les temps d'attente entre chaque commande, et vous bénéficiez d'un chauffeur dédié qui connaît déjà votre programme. Pour 2 déplacements, le coût est généralement équivalent, mais le confort et la flexibilité de la mise à disposition restent supérieurs.`,
      },
      {
        question: `Puis-je demander un chauffeur spécifique pour ma mise à disposition à ${city.name} ?`,
        answer: `Oui, si vous avez déjà utilisé notre service et apprécié un chauffeur en particulier, vous pouvez le demander lors de la réservation. Nous ferons notre possible pour le programmer sur votre mise à disposition à ${city.name}, sous réserve de sa disponibilité. C'est un avantage apprécié de nos clients réguliers, notamment les entreprises qui préfèrent un interlocuteur familier pour leurs clients.`,
      },
      {
        question: `Une facture professionnelle est-elle disponible ?`,
        answer: `Oui, chaque mise à disposition à ${city.name} fait l'objet d'une facture professionnelle détaillée envoyée par email. La facture inclut l'itinéraire complet, les horaires de départ et d'arrivée, le kilométrage total, le détail de la TVA et les coordonnées du chauffeur. Les entreprises de ${city.name} peuvent demander un compte professionnel avec facturation mensuelle consolidée et règlement différé.`,
      },
    ];
  }

  return [
    {
      question: `How much does a chauffeur service cost in ${city.name}?`,
      answer: `The rate depends on the duration and vehicle type. For chauffeur service in ${city.name}, expect from €45 for 1 hour in a sedan, €180 for a half-day (4h), €350 for a full day (8h) and €200 for an evening (4h from 7pm). SUV and van rates are respectively 20% and 40% higher. The price includes the driver, vehicle, fuel, tolls and unlimited waiting during the booked period. Request a personalised quote through our form for an exact price.`,
    },
    {
      question: `How do I book a chauffeur service in ${city.name}?`,
      answer: `Fill in the quote form on this page with the desired date, duration, vehicle type and pickup location in ${city.name}. We send you a detailed quote within 2 hours. You can also book by phone at +33 7 59 59 29 34. Booking is possible up to 30 days in advance or with 2 hours' notice for urgent requests.`,
    },
    {
      question: `What vehicles are available for chauffeur service in ${city.name}?`,
      answer: `We offer three vehicle categories for chauffeur service in ${city.name}: sedan (Mercedes E-Class, BMW 5 Series or equivalent) for 1 to 3 passengers, SUV (Mercedes GLC, BMW X5 or equivalent) for 1 to 4 passengers with extra luggage space, and van (Mercedes V-Class or equivalent) for 1 to 7 passengers. All vehicles are less than 4 years old and equipped with air conditioning, free wifi and USB chargers.`,
    },
    {
      question: `Are tolls and fuel included in the chauffeur service?`,
      answer: `Yes, the chauffeur service package in ${city.name} is all-inclusive: driver, vehicle, fuel and tolls are included in the quoted price. Only kilometres beyond 50 km from the starting point in ${city.name} are subject to a per-kilometre supplement communicated in advance.`,
    },
    {
      question: `Can I extend the chauffeur service during the booking?`,
      answer: `Yes, if your schedule runs longer, you can extend directly with your driver. Additional billing is calculated pro rata based on the hourly rate for your vehicle category. This flexibility is one of the key advantages of chauffeur service over individual rides.`,
    },
    {
      question: `Is chauffeur service available in the evening and at weekends in ${city.name}?`,
      answer: `Yes, chauffeur service in ${city.name} is available 24/7, including evenings, weekends and public holidays. We have ${city.driverCount}+ partner drivers in the ${city.name} area ensuring permanent coverage. There is no supplement for evenings and weekends: the package rate is the same regardless of the time slot.`,
    },
    {
      question: `How does cancellation work for chauffeur service?`,
      answer: `Cancellation of chauffeur service in ${city.name} is free up to 24 hours before the start of the service. Between 24h and 6h before, a fee of 50% of the total amount applies. Less than 6h before, the full amount is due. If you are delayed, the driver waits free of charge for the duration of the booked service.`,
    },
    {
      question: `Is chauffeur service more cost-effective than separate rides?`,
      answer: `Yes, as soon as you have 3 or more trips in a single half-day, chauffeur service in ${city.name} is more economical than individual rides. You save on multiple pickup fees (approximately €4 per ride), waiting times between each booking, and you benefit from a dedicated driver who already knows your schedule. For 2 trips, the cost is generally equivalent, but the comfort and flexibility of chauffeur service remain superior.`,
    },
    {
      question: `Can I request a specific driver for my chauffeur service in ${city.name}?`,
      answer: `Yes, if you have used our service before and appreciated a particular driver, you can request them when booking. We will do our best to schedule them for your chauffeur service in ${city.name}, subject to their availability. This is a feature appreciated by our regular clients, particularly businesses who prefer a familiar driver for their clients.`,
    },
    {
      question: `Is a professional invoice available?`,
      answer: `Yes, each chauffeur service in ${city.name} comes with a detailed professional invoice sent by email. The invoice includes the complete route, departure and arrival times, total mileage, VAT breakdown and driver details. Businesses in ${city.name} can request a professional account with consolidated monthly billing and deferred payment.`,
    },
  ];
}

// ─── How It Works (4 steps) ─────────────────────────

export function generateHowItWorks(city: City, loc: Loc): MadHowItWorksStep[] {
  if (loc === "fr") {
    return [
      {
        step: "1",
        title: "Demandez un devis",
        desc: `Remplissez le formulaire sur cette page ou appelez-nous au 07 59 59 29 34. Indiquez la date, la durée souhaitée, le nombre de passagers et le lieu de prise en charge à ${city.name}. Nous vous envoyons un devis détaillé sous 2 heures avec le prix fixe garanti.`,
      },
      {
        step: "2",
        title: "Confirmez votre réservation",
        desc: `Validez le devis en ligne en quelques clics. Vous recevez une confirmation par email avec les détails de votre mise à disposition à ${city.name} : nom et photo du chauffeur, modèle du véhicule, horaires et itinéraire prévu.`,
      },
      {
        step: "3",
        title: "Votre chauffeur vous attend",
        desc: `Le jour J, votre chauffeur se présente à l'heure convenue au lieu de prise en charge à ${city.name}. Il vous accueille, vous aide avec vos bagages et reste à votre disposition exclusive pendant toute la durée du service.`,
      },
      {
        step: "4",
        title: "Profitez de votre journée",
        desc: `Enchaînez vos rendez-vous, visites ou événements à ${city.name} en toute sérénité. Votre chauffeur adapte son itinéraire en temps réel, vous attend entre chaque étape et vous ramène à destination. Facture professionnelle envoyée par email.`,
      },
    ];
  }

  return [
    {
      step: "1",
      title: "Request a quote",
      desc: `Fill in the form on this page or call us at +33 7 59 59 29 34. Indicate the date, desired duration, number of passengers and pickup location in ${city.name}. We send you a detailed quote within 2 hours with the guaranteed fixed price.`,
    },
    {
      step: "2",
      title: "Confirm your booking",
      desc: `Validate the quote online in a few clicks. You receive a confirmation email with the details of your chauffeur service in ${city.name}: driver name and photo, vehicle model, times and planned route.`,
    },
    {
      step: "3",
      title: "Your driver is waiting",
      desc: `On the day, your driver arrives at the agreed time at the pickup location in ${city.name}. They welcome you, help with your luggage and remain at your exclusive disposal for the entire duration of the service.`,
    },
    {
      step: "4",
      title: "Enjoy your day",
      desc: `Chain your meetings, visits or events in ${city.name} with complete peace of mind. Your driver adapts the route in real time, waits between each stop and takes you to your final destination. Professional invoice sent by email.`,
    },
  ];
}

// ─── Main generator ─────────────────────────

export function generateMadContent(city: City, loc: Loc): MadGeneratedContent {
  const meta = generateMeta(city, loc);
  const hero = generateHero(city, loc);
  const intro = generateIntro(city, loc);

  return {
    ...meta,
    ...hero,
    ...intro,
    cityGuideBody: generateCityGuide(city, loc),
    landmarkGuide: generateLandmarkGuide(city, loc),
    quartiersDetail: generateQuartiersDetail(city, loc),
    practicalInfo: generatePracticalInfo(city, loc),
    comparisonText: generateComparison(city, loc),
    useCases: generateUseCases(city, loc),
    advantages: generateAdvantages(city, loc),
    testimonials: generateTestimonials(city, loc),
    faq: generateFAQ(city, loc),
    howItWorks: generateHowItWorks(city, loc),
    nearbyMadCities: city.nearbyCities,
  };
}
