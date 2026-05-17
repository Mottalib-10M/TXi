import type { AutorouteData } from "@/data/autoroutes";
import { getCityBySlug } from "@/data/cities";

// ─── Types ─────────────────────────────────────────────

type Loc = "fr" | "en";

export interface ArUseCase {
  icon: string;
  title: string;
  desc: string;
}

export interface ArAdvantage {
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

export interface ArFAQ {
  question: string;
  answer: string;
}

export interface ArHowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface ArGeneratedContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introBody: string;
  introComplement: string;
  emergencyProcedure: string;
  practicalInfo: string;
  comparisonText: string;
  advantages: ArAdvantage[];
  faq: ArFAQ[];
  howItWorks: ArHowItWorksStep[];
}

// ─── Meta ─────────────────────────────────────────────

function pickByLength(candidates: string[], min: number, max: number): string {
  return candidates.find(c => c.length >= min && c.length <= max)
    || candidates.find(c => c.length <= max)
    || candidates[candidates.length - 1];
}

export function generateArMeta(autoroute: AutorouteData, loc: Loc): { metaTitle: string; metaDescription: string } {
  const name = autoroute.name;
  const short = name.replace("Autoroute ", "");

  if (loc === "fr") {
    const metaTitle = pickByLength([
      `En panne sur l'${name} ? Taxi dépannage en 30 min`,
      `Panne sur ${name} — Taxi dépannage 24h/24`,
      `Panne ${short} — Taxi dépannage 30 min 24h/24`,
    ], 50, 60);

    const metaDescription = pickByLength([
      `Panne sur l'${name} (${autoroute.from}–${autoroute.to}) ? Après le dépanneur, un taxi vous conduit chez vous, en gare ou à l'aéroport. Tarif fixe, 24h/24.`,
      `En panne sur ${short} ? Après le remorquage, un taxi dépannage vous récupère à l'aire de service. Transport domicile, gare ou aéroport. Tarif fixe. 24h/24.`,
      `Panne ${short} ? Taxi dépannage après remorquage. Transport domicile, gare, aéroport. Tarif fixe, sans supplément nuit ni week-end. Service 24h/24.`,
    ], 150, 160);

    return { metaTitle, metaDescription };
  }

  const metaTitle = pickByLength([
    `Breakdown on ${name}? Breakdown taxi in 30 min`,
    `Broke down on ${short}? Breakdown taxi 30 min 24/7`,
    `Breakdown ${short} — Breakdown taxi 30 min, 24/7`,
  ], 50, 60);

  const metaDescription = pickByLength([
    `Broke down on ${name} (${autoroute.from}–${autoroute.to})? After the tow truck, a breakdown taxi takes you home, to a station or airport. Fixed fare, 24/7.`,
    `Stranded on ${short}? After recovery, a breakdown taxi picks you up at the service area. Transport home, station or airport. Fixed fare, 24/7.`,
    `Breakdown on ${short}? Taxi picks you up after towing. Home, station or airport. Fixed fare, no surcharges. 24/7 service across France.`,
  ], 150, 160);

  return { metaTitle, metaDescription };
}

// ─── Hero ─────────────────────────────────────────────

export function generateArHero(autoroute: AutorouteData, loc: Loc): { heroTitle: string; heroSubtitle: string } {
  if (loc === "fr") {
    return {
      heroTitle: `Panne sur ${autoroute.name} ? Un chauffeur vous récupère à l'aire de service`,
      heroSubtitle: `Votre véhicule est immobilisé sur ${autoroute.name} (${autoroute.fullName}, ${autoroute.from}–${autoroute.to}) ? Après intervention du dépanneur autoroutier, TaxiNeo envoie un chauffeur privé vous chercher pour vous conduire à destination.`,
    };
  }
  return {
    heroTitle: `Breakdown on ${autoroute.name}? A driver picks you up at the service area`,
    heroSubtitle: `Your vehicle is stranded on ${autoroute.name} (${autoroute.fullName}, ${autoroute.from}–${autoroute.to})? After the motorway breakdown service intervenes, TaxiNeo sends a private driver to take you to your destination.`,
  };
}

// ─── Intro (~600 words) ─────────────────────────────────────────────

export function generateArIntro(autoroute: AutorouteData, loc: Loc): { introBody: string; introComplement: string } {
  const areasCount = autoroute.serviceAreas.length;
  const citiesNames = autoroute.citiesServed.slice(0, 5).map(s => {
    const c = getCityBySlug(s);
    return c ? c.name : s;
  }).join(", ");

  if (loc === "fr") {
    const introBody = `L'${autoroute.name}, aussi connue sous le nom d'${autoroute.fullName}, est l'un des axes autoroutiers majeurs de France. Reliant ${autoroute.from} à ${autoroute.to} sur ${autoroute.lengthKm} km, elle est empruntée quotidiennement par environ ${autoroute.avgDailyTraffic}. Avec un trafic aussi dense, les pannes sont inévitables : on estime qu'environ 500 000 interventions de dépannage ont lieu chaque année sur les autoroutes françaises.

Lorsque votre véhicule tombe en panne sur ${autoroute.name}, la procédure est réglementée. Vous devez vous ranger sur la bande d'arrêt d'urgence (BAU), mettre votre gilet jaune, vous placer derrière les glissières de sécurité, et appeler les secours via une borne orange ou le 112. Un dépanneur agréé par la société concessionnaire (${autoroute.concessionaire}) interviendra dans un délai moyen de 30 minutes. Sur autoroute, vous n'avez PAS le choix du dépanneur — c'est un monopole réglementé.

Le problème ? Une fois votre véhicule remorqué jusqu'au garage agréé le plus proche (souvent à la sortie d'autoroute), VOUS restez bloqué. Le dépanneur ne vous transporte pas à votre destination finale. Vous vous retrouvez dans un garage au milieu de nulle part, potentiellement à des centaines de kilomètres de chez vous, sans moyen de transport.

C'est exactement là qu'intervient TaxiNeo. Notre service de chauffeur privé après panne sur autoroute fonctionne simplement : dès que vous êtes déposé à une aire de service ou à la sortie d'autoroute, vous nous contactez. Un chauffeur arrive en 20-40 minutes et vous conduit où vous le souhaitez — chez vous, à une gare TGV, à l'aéroport le plus proche, ou dans n'importe quelle ville desservie par ${autoroute.name} : ${citiesNames}.

${autoroute.name} compte ${areasCount} aires de service principales équipées de stations-service, restaurants et parfois hôtels. Nos chauffeurs connaissent parfaitement toutes ces aires et peuvent venir vous y chercher directement. Le tarif est fixe, communiqué à l'avance, et il n'y a aucun supplément lié à l'heure ou au jour.`;

    const introComplement = `**Le dépannage sur autoroute en France : cadre réglementé** — Sur le réseau autoroutier concédé, le dépannage est assuré exclusivement par des sociétés agréées par le concessionnaire. Sur ${autoroute.name}, c'est ${autoroute.concessionaire} qui gère les agréments. Le tarif du remorquage est réglementé par arrêté préfectoral : environ 130 € TTC pour un véhicule léger de jour, 195 € de nuit ou dimanche/férié. Ce tarif couvre le remorquage jusqu'à la sortie d'autoroute la plus proche ou un garage agréé dans un rayon de 5 km.

**Péage et coûts sur ${autoroute.name}** — ${autoroute.tollInfo}. En cas de panne, vous ne payez pas le péage entre votre point de panne et la sortie vers laquelle le dépanneur vous emmène. Conservez votre ticket de péage pour justifier auprès du concessionnaire.

**Assistance assurance et autoroute** — Contrairement aux routes nationales et départementales, la franchise kilométrique de votre assurance NE S'APPLIQUE PAS sur autoroute. Votre contrat d'assistance couvre normalement le dépannage autoroutier, mais uniquement le remorquage — pas votre transport personnel vers votre destination finale. C'est là que TaxiNeo intervient.`;

    return { introBody, introComplement };
  }

  // English
  const introBody = `The ${autoroute.name}, also known as the ${autoroute.fullName}, is one of France's major motorway routes. Connecting ${autoroute.from} to ${autoroute.to} over ${autoroute.lengthKm} km, it carries approximately ${autoroute.avgDailyTraffic} daily. With such dense traffic, breakdowns are inevitable: an estimated 500,000 breakdown interventions occur on French motorways each year.

When your vehicle breaks down on ${autoroute.name}, the procedure is regulated. You must pull onto the hard shoulder (BAU), put on your high-visibility vest, position yourself behind the safety barriers, and call for help via an orange emergency phone or 112. A breakdown service approved by the concession company (${autoroute.concessionaire}) will respond within an average of 30 minutes. On French motorways, you have NO choice of breakdown provider — it's a regulated monopoly.

The problem? Once your vehicle is towed to the nearest approved garage (often at the motorway exit), YOU are left stranded. The tow truck doesn't take you to your final destination. You find yourself at a garage in the middle of nowhere, potentially hundreds of kilometres from home, with no means of transport.

This is exactly where TaxiNeo steps in. Our private driver service for motorway breakdowns works simply: as soon as you're dropped at a service area or motorway exit, you contact us. A driver arrives within 20-40 minutes and takes you wherever you wish — home, a TGV station, the nearest airport, or any city served by ${autoroute.name}: ${citiesNames}.

${autoroute.name} has ${areasCount} main service areas equipped with petrol stations, restaurants and sometimes hotels. Our drivers know all these areas perfectly and can pick you up directly. The fare is fixed, communicated in advance, with no time or day surcharges.`;

  const introComplement = `**Motorway breakdown recovery in France: the regulated framework** — On the conceded motorway network, breakdown recovery is handled exclusively by companies approved by the concessionaire. On ${autoroute.name}, ${autoroute.concessionaire} manages the approvals. The towing rate is regulated by prefectoral decree: approximately €130 inc. VAT for a light vehicle during the day, €195 at night or on Sundays/public holidays. This rate covers towing to the nearest motorway exit or an approved garage within 5 km.

**Tolls and costs on ${autoroute.name}** — ${autoroute.tollInfo}. In case of breakdown, you don't pay the toll between your breakdown point and the exit where the tow truck takes you. Keep your toll ticket to justify this to the concessionaire.

**Insurance assistance and motorways** — Unlike national and departmental roads, your insurance's distance franchise DOES NOT APPLY on motorways. Your assistance policy normally covers motorway breakdown recovery, but only the towing — not your personal transport to your final destination. That's where TaxiNeo comes in.`;

  return { introBody, introComplement };
}

// ─── Emergency Procedure ─────────────────────────────────────────────

export function generateArEmergencyProcedure(autoroute: AutorouteData, loc: Loc): string {
  if (loc === "fr") {
    return `**Étape 1 : Immobilisation en sécurité** — Dès les premiers signes de panne sur ${autoroute.name}, allumez vos feux de détresse et rangez-vous sur la bande d'arrêt d'urgence (BAU) le plus à droite possible. Si impossible, essayez d'atteindre la prochaine aire de repos ou de service. Ne restez JAMAIS sur la voie de circulation.

**Étape 2 : Sécurisation des passagers** — Enfilez votre gilet jaune AVANT de sortir du véhicule (obligatoire, amende de 135 € en cas d'absence). Faites sortir tous les passagers par le côté DROIT (côté glissière, pas côté trafic). Placez-vous tous derrière la glissière de sécurité, à au moins 50 mètres en aval du véhicule.

**Étape 3 : Signalisation** — NE POSEZ PAS de triangle sur autoroute (c'est dangereux et non obligatoire sur autoroute). Vos feux de détresse suffisent. Si vous avez des passagers à bord, faites-les attendre en sécurité derrière la glissière.

**Étape 4 : Appel au secours** — Utilisez une borne orange (tous les 2 km sur ${autoroute.name}) ou appelez le 112. La borne est préférable car elle localise automatiquement votre position. Le PC autoroutier de ${autoroute.concessionaire} enverra un dépanneur agréé en 30 minutes environ.

**Étape 5 : Attente du dépanneur** — Restez derrière la glissière. Ne tentez AUCUNE réparation sur la BAU (interdit et extrêmement dangereux — 40 morts/an sur les BAU en France). Le dépanneur remorquera votre véhicule à la sortie la plus proche.

**Étape 6 : Contactez TaxiNeo** — Une fois à l'aire de service ou au garage de sortie d'autoroute, appelez TaxiNeo au 07 59 59 29 34. Un chauffeur arrive en 20-40 minutes et vous emmène à votre destination finale.`;
  }

  return `**Step 1: Safe immobilisation** — At the first signs of breakdown on ${autoroute.name}, turn on your hazard lights and pull onto the hard shoulder (BAU) as far right as possible. If not possible, try to reach the next rest or service area. NEVER stop on the carriageway.

**Step 2: Securing passengers** — Put on your high-visibility vest BEFORE exiting the vehicle (mandatory, €135 fine if absent). Have all passengers exit from the RIGHT side (barrier side, not traffic side). Position everyone behind the safety barrier, at least 50 metres downstream from the vehicle.

**Step 3: Signalling** — DO NOT place a warning triangle on the motorway (it's dangerous and not mandatory on motorways). Your hazard lights are sufficient. If you have passengers, have them wait safely behind the barrier.

**Step 4: Calling for help** — Use an orange emergency phone (every 2 km on ${autoroute.name}) or call 112. The phone is preferable as it automatically locates your position. ${autoroute.concessionaire}'s motorway control centre will send an approved breakdown service within about 30 minutes.

**Step 5: Waiting for the tow truck** — Stay behind the barrier. Do NOT attempt ANY repairs on the hard shoulder (forbidden and extremely dangerous — 40 deaths/year on French hard shoulders). The tow truck will take your vehicle to the nearest exit.

**Step 6: Contact TaxiNeo** — Once at the service area or motorway exit garage, call TaxiNeo at +33 7 59 59 29 34. A driver arrives within 20-40 minutes and takes you to your final destination.`;
}

// ─── Practical Info ─────────────────────────────────────────────

export function generateArPracticalInfo(autoroute: AutorouteData, loc: Loc): string {
  if (loc === "fr") {
    return `**Caractéristiques de ${autoroute.name}** — ${autoroute.fullName}, ${autoroute.lengthKm} km de ${autoroute.from} à ${autoroute.to}. Concessionnaire : ${autoroute.concessionaire}. Trafic moyen : ${autoroute.avgDailyTraffic}. ${autoroute.tollInfo}.

**Coût du dépannage réglementé sur ${autoroute.name}** — Les tarifs de dépannage sur autoroute sont fixés par arrêté préfectoral et révisés chaque année. Pour un véhicule léger (< 1,8 t) : environ 130 € TTC de jour (8h-18h en semaine), 195 € TTC de nuit, dimanche et jours fériés. Pour un véhicule lourd ou une intervention complexe (accident, véhicule dans le fossé), les tarifs sont majorés.

**Temps d'intervention sur ${autoroute.name}** — Le cahier des charges impose au dépanneur agréé un délai d'intervention maximal de 30 minutes de jour et 45 minutes de nuit. En pratique, les délais sont souvent respectés sur les axes à fort trafic comme ${autoroute.name}. Le PC autoroutier suit votre intervention en temps réel.

**Vos droits en tant qu'automobiliste en panne** — Vous avez le droit de refuser toute réparation sur place (seul le remorquage est obligatoire jusqu'à la sortie). Le garage de sortie peut effectuer un diagnostic mais vous n'êtes pas obligé d'y faire réparer votre véhicule. Après 24h, vous pouvez faire transférer votre véhicule vers le garage de votre choix.

**Péages et remboursement** — En cas de panne sur ${autoroute.name}, vous ne payez pas le péage entre votre point d'immobilisation et la sortie vers laquelle vous êtes remorqué. Gardez votre ticket de péage et signalez la situation au péagiste. Le concessionnaire peut aussi rembourser votre péage si la panne est liée à un défaut d'infrastructure.`;
  }

  return `**${autoroute.name} characteristics** — ${autoroute.fullName}, ${autoroute.lengthKm} km from ${autoroute.from} to ${autoroute.to}. Concessionaire: ${autoroute.concessionaire}. Average traffic: ${autoroute.avgDailyTraffic}. ${autoroute.tollInfo}.

**Regulated breakdown recovery costs on ${autoroute.name}** — Motorway breakdown tariffs are set by prefectoral decree and revised annually. For a light vehicle (< 1.8 t): approximately €130 inc. VAT during the day (8am-6pm weekdays), €195 inc. VAT at night, Sundays and public holidays. For heavy vehicles or complex interventions (accidents, vehicle in ditch), rates are higher.

**Response times on ${autoroute.name}** — The specification requires approved breakdown services to respond within a maximum of 30 minutes during the day and 45 minutes at night. In practice, times are generally met on high-traffic routes like ${autoroute.name}. The motorway control centre tracks your intervention in real time.

**Your rights as a stranded motorist** — You have the right to refuse any on-site repairs (only towing to the exit is mandatory). The exit garage can perform a diagnostic but you're not obliged to have your vehicle repaired there. After 24 hours, you can have your vehicle transferred to the garage of your choice.

**Tolls and reimbursement** — In case of breakdown on ${autoroute.name}, you don't pay the toll between your breakdown point and the exit to which you're towed. Keep your toll ticket and inform the toll operator. The concessionaire may also reimburse your toll if the breakdown is related to an infrastructure defect.`;
}

// ─── Comparison ─────────────────────────────────────────────

export function generateArComparison(autoroute: AutorouteData, loc: Loc): string {
  if (loc === "fr") {
    return `Après l'intervention du dépanneur agréé sur ${autoroute.name}, vous êtes déposé à la sortie d'autoroute ou dans un garage agréé. Quelles sont vos options pour rentrer chez vous ?

**Chauffeur privé TaxiNeo** — Délai : 20-40 min depuis votre appel. Le chauffeur vient vous chercher à l'aire de service ou au garage de sortie. Il vous conduit directement chez vous, à la gare TGV la plus proche, ou n'importe où. Tarif fixe, pas de surprise. Tous vos passagers sont transportés.

**Attendre un taxi local** — Selon votre localisation sur ${autoroute.name}, les taxis locaux peuvent être rares ou inexistants (zone rurale entre deux villes). Délai imprévisible (30 min à 2h), pas de tarif garanti, un seul véhicule disponible.

**Véhicule de remplacement (assurance)** — Certaines assurances proposent un véhicule de remplacement, mais le délai est de 24-48h minimum. Pas de solution immédiate. Vous devez aussi vous rendre à l'agence de location pour récupérer le véhicule.

**Train depuis la gare la plus proche** — Nécessite de vous rendre à la gare (comment sans voiture ?). Horaires contraints, pas de train de nuit sur beaucoup de lignes. Pas de transport de bagages volumineux.

| Critère | TaxiNeo | Taxi local | Assurance | Train |
|---------|---------|-----------|-----------|-------|
| Délai | 20-40 min | 30 min-2h | 24-48h | Variable |
| Porte-à-porte | ✓ | ✓ | ✗ | ✗ |
| Tarif garanti | ✓ | ✗ | Inclus | ✓ |
| Disponibilité 24/7 | ✓ | ✗ | Oui (livraison non) | ✗ |
| Tous passagers | ✓ | ✗ | ✓ | ✓ |`;
  }

  return `After the approved breakdown service on ${autoroute.name} drops you at the motorway exit or approved garage, what are your options for getting home?

**TaxiNeo private driver** — Response: 20-40 min from your call. The driver picks you up at the service area or exit garage. Takes you directly home, to the nearest TGV station, or anywhere. Fixed fare, no surprises. All passengers transported.

**Wait for a local taxi** — Depending on your location on ${autoroute.name}, local taxis may be scarce or non-existent (rural area between cities). Unpredictable wait (30 min to 2h), no guaranteed fare, single vehicle availability.

**Replacement vehicle (insurance)** — Some insurance policies offer a replacement vehicle, but the delay is 24-48h minimum. No immediate solution. You also need to get to the rental agency to collect the vehicle.

**Train from the nearest station** — Requires getting to the station (how without a car?). Constrained timetables, no night trains on many lines. No bulky luggage transport.

| Criteria | TaxiNeo | Local taxi | Insurance | Train |
|----------|---------|-----------|-----------|-------|
| Response | 20-40 min | 30 min-2h | 24-48h | Variable |
| Door-to-door | ✓ | ✓ | ✗ | ✗ |
| Guaranteed fare | ✓ | ✗ | Included | ✓ |
| 24/7 availability | ✓ | ✗ | Yes (delivery no) | ✗ |
| All passengers | ✓ | ✗ | ✓ | ✓ |`;
}

// ─── Advantages (6) ─────────────────────────────────────────────

export function generateArAdvantages(autoroute: AutorouteData, loc: Loc): ArAdvantage[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:map-point-linear",
        title: "Prise en charge à l'aire de service",
        shortDesc: "On vient vous chercher",
        longDesc: `Nos chauffeurs connaissent toutes les aires de service de ${autoroute.name}. Ils viennent directement vous chercher au parking de l'aire ou au garage de sortie d'autoroute.`,
      },
      {
        icon: "solar:clock-circle-linear",
        title: "Arrivée en 20-40 minutes",
        shortDesc: "Après appel du dépanneur",
        longDesc: `Dès que le dépanneur autoroutier vous a déposé en sécurité, appelez-nous. Un chauffeur arrive en 20 à 40 minutes pour vous emmener à destination.`,
      },
      {
        icon: "solar:route-linear",
        title: "Toute destination",
        shortDesc: "Gare, domicile, aéroport",
        longDesc: `Vous êtes bloqué loin de chez vous sur ${autoroute.name} ? Nous vous conduisons à la gare TGV la plus proche, à l'aéroport, chez vous ou dans n'importe quelle ville le long de l'axe ${autoroute.from}–${autoroute.to}.`,
      },
      {
        icon: "solar:users-group-rounded-linear",
        title: "Tous vos passagers",
        shortDesc: "Famille, collègues",
        longDesc: `En panne en famille sur ${autoroute.name} ? Nos véhicules transportent jusqu'à 7 passagers. Pas besoin de séparer le groupe — tout le monde monte dans le même véhicule.`,
      },
      {
        icon: "solar:tag-price-linear",
        title: "Tarif fixe garanti",
        shortDesc: "Prix annoncé à l'avance",
        longDesc: `Le tarif est communiqué par téléphone avant la prise en charge. Pas de compteur, pas de supplément autoroute, pas de majoration nuit ou jour férié. Vous savez exactement ce que vous paierez.`,
      },
      {
        icon: "solar:shield-check-linear",
        title: "Service 24h/24, 7j/7",
        shortDesc: "Même à 3h du matin",
        longDesc: `Les pannes sur ${autoroute.name} n'ont pas d'horaire. Notre service est disponible en permanence : nuit, week-end, jour férié, été comme hiver.`,
      },
    ];
  }

  return [
    {
      icon: "solar:map-point-linear",
      title: "Pickup at service area",
      shortDesc: "We come to you",
      longDesc: `Our drivers know all service areas on ${autoroute.name}. They come directly to pick you up at the service area car park or motorway exit garage.`,
    },
    {
      icon: "solar:clock-circle-linear",
      title: "Arrival in 20-40 minutes",
      shortDesc: "After breakdown service",
      longDesc: `As soon as the motorway breakdown service has dropped you safely, call us. A driver arrives within 20 to 40 minutes to take you to your destination.`,
    },
    {
      icon: "solar:route-linear",
      title: "Any destination",
      shortDesc: "Station, home, airport",
      longDesc: `Stranded far from home on ${autoroute.name}? We take you to the nearest TGV station, airport, your home or any city along the ${autoroute.from}–${autoroute.to} axis.`,
    },
    {
      icon: "solar:users-group-rounded-linear",
      title: "All your passengers",
      shortDesc: "Family, colleagues",
      longDesc: `Broke down with family on ${autoroute.name}? Our vehicles carry up to 7 passengers. No need to split the group — everyone rides in the same vehicle.`,
    },
    {
      icon: "solar:tag-price-linear",
      title: "Fixed guaranteed fare",
      shortDesc: "Price stated upfront",
      longDesc: `The fare is communicated by phone before pickup. No meter, no motorway surcharge, no night or holiday premium. You know exactly what you'll pay.`,
    },
    {
      icon: "solar:shield-check-linear",
      title: "24/7 service",
      shortDesc: "Even at 3am",
      longDesc: `Breakdowns on ${autoroute.name} don't keep office hours. Our service is available round-the-clock: night, weekend, public holiday, summer and winter.`,
    },
  ];
}

// ─── FAQ (10) ─────────────────────────────────────────────

export function generateArFAQ(autoroute: AutorouteData, loc: Loc): ArFAQ[] {
  if (loc === "fr") {
    return [
      {
        question: `Comment fonctionne TaxiNeo après une panne sur ${autoroute.name} ?`,
        answer: `Après l'intervention du dépanneur agréé sur ${autoroute.name}, vous êtes déposé à une aire de service ou à la sortie d'autoroute. Vous nous appelez au 07 59 59 29 34. Un chauffeur privé arrive en 20-40 minutes et vous conduit à votre destination finale (domicile, gare, aéroport, etc.).`,
      },
      {
        question: `Pouvez-vous venir me chercher directement sur la bande d'arrêt d'urgence de ${autoroute.name} ?`,
        answer: `Non, l'accès à la bande d'arrêt d'urgence est strictement interdit aux véhicules non autorisés. Seuls les dépanneurs agréés par ${autoroute.concessionaire} peuvent intervenir sur la chaussée. TaxiNeo vous prend en charge APRÈS l'intervention du dépanneur, à l'aire de service ou à la sortie d'autoroute.`,
      },
      {
        question: `Combien coûte le transport après une panne sur ${autoroute.name} ?`,
        answer: `Le tarif dépend de la distance entre l'aire de service/sortie d'autoroute et votre destination. Comptez entre 50 € et 150 € pour les trajets courants. Le prix exact est communiqué par téléphone avant la prise en charge. Pas de supplément nuit ou jour férié.`,
      },
      {
        question: `Quel est le délai d'arrivée du chauffeur sur ${autoroute.name} ?`,
        answer: `Nos chauffeurs arrivent en 20 à 40 minutes à l'aire de service ou à la sortie d'autoroute. Le délai dépend de la localisation exacte sur ${autoroute.name} et de la proximité de nos chauffeurs disponibles.`,
      },
      {
        question: `Combien coûte le dépannage sur ${autoroute.name} ?`,
        answer: `Le dépannage sur ${autoroute.name} est réglementé : environ 130 € TTC de jour et 195 € TTC de nuit/dimanche pour un véhicule léger. Ce tarif est distinct du service TaxiNeo qui concerne uniquement votre transport personnel après l'intervention du dépanneur.`,
      },
      {
        question: `Puis-je choisir mon dépanneur sur ${autoroute.name} ?`,
        answer: `Non, sur autoroute le dépannage est un monopole réglementé. Seuls les dépanneurs agréés par ${autoroute.concessionaire} sont autorisés à intervenir. En revanche, après le remorquage jusqu'à la sortie, vous pouvez faire transférer votre véhicule vers le garage de votre choix sous 24h.`,
      },
      {
        question: `Le service est-il disponible de nuit sur ${autoroute.name} ?`,
        answer: `Oui, TaxiNeo est disponible 24h/24, 7j/7 sur toutes les aires et sorties de ${autoroute.name}. Les pannes nocturnes sont d'ailleurs celles pour lesquelles notre service est le plus utile, car les alternatives (taxis locaux, transports en commun) sont inexistantes la nuit.`,
      },
      {
        question: `Combien de passagers pouvez-vous transporter depuis ${autoroute.name} ?`,
        answer: `Nos berlines transportent jusqu'à 4 passagers et nos vans jusqu'à 7 passagers avec bagages. Idéal pour les familles en vacances ou les groupes en déplacement professionnel. Précisez le nombre de passagers lors de votre appel.`,
      },
      {
        question: `Mon assurance rembourse-t-elle le transport TaxiNeo après panne sur ${autoroute.name} ?`,
        answer: `Certaines assurances couvrent les "frais de rapatriement" ou "frais de transport" après une panne. Vérifiez votre contrat. Nous fournissons une facture détaillée mentionnant "${autoroute.name}, aire de [nom]" que vous pouvez soumettre à votre assureur pour remboursement.`,
      },
      {
        question: `Quelles aires de service couvrez-vous sur ${autoroute.name} ?`,
        answer: `Nous couvrons TOUTES les aires de service de ${autoroute.name} sur l'intégralité des ${autoroute.lengthKm} km, ainsi que toutes les sorties d'autoroute. Nos chauffeurs connaissent chaque aire et chaque sortie et savent exactement où vous retrouver.`,
      },
    ];
  }

  return [
    {
      question: `How does TaxiNeo work after a breakdown on ${autoroute.name}?`,
      answer: `After the approved breakdown service on ${autoroute.name} drops you at a service area or motorway exit, you call us at +33 7 59 59 29 34. A private driver arrives within 20-40 minutes and takes you to your final destination (home, station, airport, etc.).`,
    },
    {
      question: `Can you pick me up directly from the hard shoulder on ${autoroute.name}?`,
      answer: `No, access to the hard shoulder is strictly forbidden for unauthorised vehicles. Only breakdown services approved by ${autoroute.concessionaire} can operate on the carriageway. TaxiNeo picks you up AFTER the breakdown service, at the service area or motorway exit.`,
    },
    {
      question: `How much does transport cost after a breakdown on ${autoroute.name}?`,
      answer: `The fare depends on the distance between the service area/motorway exit and your destination. Expect €50-150 for common journeys. The exact price is communicated by phone before pickup. No night or holiday surcharges.`,
    },
    {
      question: `How long does the driver take to arrive on ${autoroute.name}?`,
      answer: `Our drivers arrive within 20 to 40 minutes at the service area or motorway exit. The time depends on the exact location on ${autoroute.name} and the proximity of our available drivers.`,
    },
    {
      question: `How much does motorway breakdown recovery cost on ${autoroute.name}?`,
      answer: `Breakdown recovery on ${autoroute.name} is regulated: approximately €130 inc. VAT during the day and €195 at night/Sundays for a light vehicle. This is separate from TaxiNeo's service which covers only your personal transport after the breakdown service.`,
    },
    {
      question: `Can I choose my breakdown provider on ${autoroute.name}?`,
      answer: `No, motorway breakdown recovery is a regulated monopoly. Only services approved by ${autoroute.concessionaire} are authorised to operate. However, after towing to the exit, you can have your vehicle transferred to the garage of your choice within 24 hours.`,
    },
    {
      question: `Is the service available at night on ${autoroute.name}?`,
      answer: `Yes, TaxiNeo is available 24/7 at all service areas and exits on ${autoroute.name}. Night-time breakdowns are actually when our service is most useful, as alternatives (local taxis, public transport) are non-existent at night.`,
    },
    {
      question: `How many passengers can you carry from ${autoroute.name}?`,
      answer: `Our sedans carry up to 4 passengers and our vans up to 7 with luggage. Ideal for families on holiday or groups on business trips. Specify the number of passengers when you call.`,
    },
    {
      question: `Will my insurance reimburse TaxiNeo transport after a breakdown on ${autoroute.name}?`,
      answer: `Some insurance policies cover "repatriation costs" or "transport costs" after a breakdown. Check your policy. We provide a detailed invoice mentioning "${autoroute.name}, service area [name]" that you can submit to your insurer for reimbursement.`,
    },
    {
      question: `Which service areas do you cover on ${autoroute.name}?`,
      answer: `We cover ALL service areas on ${autoroute.name} across the full ${autoroute.lengthKm} km, plus all motorway exits. Our drivers know every area and exit and know exactly where to find you.`,
    },
  ];
}

// ─── How It Works (4 steps) ─────────────────────────

export function generateArHowItWorks(autoroute: AutorouteData, loc: Loc): ArHowItWorksStep[] {
  if (loc === "fr") {
    return [
      {
        step: "1",
        title: "Le dépanneur intervient",
        desc: `Après votre panne sur ${autoroute.name}, le dépanneur agréé ${autoroute.concessionaire} remorque votre véhicule à la sortie d'autoroute la plus proche ou à une aire de service. Vous êtes en sécurité mais loin de votre destination.`,
      },
      {
        step: "2",
        title: "Appelez TaxiNeo",
        desc: `Depuis l'aire de service ou le garage de sortie, appelez le 07 59 59 29 34. Indiquez votre position sur ${autoroute.name} (numéro de sortie ou nom de l'aire), le nombre de passagers, et votre destination souhaitée. Le tarif fixe est communiqué immédiatement.`,
      },
      {
        step: "3",
        title: "Votre chauffeur arrive",
        desc: `Un chauffeur professionnel est dispatché vers votre position sur ${autoroute.name}. Il arrive en 20-40 minutes dans un véhicule confortable (berline ou van selon le nombre de passagers). Il vous retrouve au parking de l'aire ou au garage.`,
      },
      {
        step: "4",
        title: "Transport à destination",
        desc: `Le chauffeur vous conduit à votre destination finale : domicile (même à 200 km), gare TGV la plus proche, aéroport, hôtel, ou toute ville le long de ${autoroute.name}. Paiement par carte à l'arrivée. Facture disponible pour votre assurance.`,
      },
    ];
  }

  return [
    {
      step: "1",
      title: "Breakdown service intervenes",
      desc: `After your breakdown on ${autoroute.name}, the approved ${autoroute.concessionaire} breakdown service tows your vehicle to the nearest motorway exit or service area. You're safe but far from your destination.`,
    },
    {
      step: "2",
      title: "Call TaxiNeo",
      desc: `From the service area or exit garage, call +33 7 59 59 29 34. Indicate your position on ${autoroute.name} (exit number or service area name), number of passengers, and desired destination. The fixed fare is communicated immediately.`,
    },
    {
      step: "3",
      title: "Your driver arrives",
      desc: `A professional driver is dispatched to your location on ${autoroute.name}. They arrive within 20-40 minutes in a comfortable vehicle (sedan or van depending on passenger numbers). They meet you at the service area car park or garage.`,
    },
    {
      step: "4",
      title: "Transport to destination",
      desc: `The driver takes you to your final destination: home (even 200 km away), nearest TGV station, airport, hotel, or any city along ${autoroute.name}. Payment by card on arrival. Invoice available for your insurance.`,
    },
  ];
}

// ─── Main generator ─────────────────────────

export function generateArContent(autoroute: AutorouteData, loc: Loc): ArGeneratedContent {
  const meta = generateArMeta(autoroute, loc);
  const hero = generateArHero(autoroute, loc);
  const intro = generateArIntro(autoroute, loc);

  return {
    ...meta,
    ...hero,
    ...intro,
    emergencyProcedure: generateArEmergencyProcedure(autoroute, loc),
    practicalInfo: generateArPracticalInfo(autoroute, loc),
    comparisonText: generateArComparison(autoroute, loc),
    advantages: generateArAdvantages(autoroute, loc),
    faq: generateArFAQ(autoroute, loc),
    howItWorks: generateArHowItWorks(autoroute, loc),
  };
}
