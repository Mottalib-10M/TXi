import type { City } from "@/data/cities";
import type { AssistanceCityData } from "@/data/assistance-cities";

// ─── Types ─────────────────────────────────────────────

type Loc = "fr" | "en";

export interface AdUseCase {
  icon: string;
  title: string;
  desc: string;
  example: string;
}

export interface AdAdvantage {
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

export interface AdTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface AdFAQ {
  question: string;
  answer: string;
}

export interface AdHowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface AdGeneratedContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introBody: string;
  introComplement: string;
  garagesGuide: string;
  quartiersAccess: string;
  practicalInfo: string;
  comparisonText: string;
  useCases: AdUseCase[];
  advantages: AdAdvantage[];
  testimonials: AdTestimonial[];
  faq: AdFAQ[];
  howItWorks: AdHowItWorksStep[];
  nearbyAdCities: string[];
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

function topGarages(adCity: AssistanceCityData, n: number): string[] {
  return adCity.garages.slice(0, n);
}

// ─── Meta ─────────────────────────────────────────────

/**
 * Pick the first candidate whose length is in [min, max].
 * Falls back to the first candidate ≤ max, then the last candidate.
 */
function pickByLength(candidates: string[], min: number, max: number): string {
  return candidates.find(c => c.length >= min && c.length <= max)
    || candidates.find(c => c.length <= max)
    || candidates[candidates.length - 1];
}

export function generateAdMeta(city: City, loc: Loc): { metaTitle: string; metaDescription: string } {
  const n = city.name;

  if (loc === "fr") {
    const metaTitle = pickByLength([
      `Voiture en panne à ${n} ? Taxi dépannage en 20 min`,
      `Panne de voiture à ${n} — Taxi dépannage 20 min`,
      `Panne à ${n} — Taxi dépannage 20 min 24h/24`,
    ], 50, 60);

    const metaDescription = pickByLength([
      `Votre voiture est en panne à ${n} ? Un taxi dépannage arrive en 20 min. Transport vers garage, domicile ou gare. Tarif fixe garanti, sans surprise. 24h/24.`,
      `En panne à ${n} ? Taxi dépannage en 20 min. Transport garage, domicile ou gare. Tarif fixe, sans supplément nuit ni week-end. Service disponible 24h/24.`,
      `Panne à ${n} ? Taxi dépannage 20 min. Transport garage, domicile ou gare. Tarif fixe, sans supplément nuit ni jour férié. Disponible 24h/24, 7j/7.`,
    ], 150, 160);

    return { metaTitle, metaDescription };
  }

  const metaTitle = pickByLength([
    `Car broke down in ${n}? Breakdown taxi within 20 min`,
    `Car breakdown in ${n} — Breakdown taxi in 20 min`,
    `Breakdown in ${n} — Breakdown taxi 20 min, 24/7`,
  ], 50, 60);

  const metaDescription = pickByLength([
    `Stranded in ${n} with a broken-down car? A breakdown taxi reaches you in 20 min. Transport to garage, home or station. Fixed fare, no surcharges. 24/7.`,
    `Car broke down in ${n}? Breakdown taxi in 20 min. Transport to garage, home or station. Fixed fare, no hidden fees. Available 24/7 across the region.`,
    `Breakdown in ${n}? Taxi in 20 min. Transport to garage, home or station. Fixed fare, no night or weekend surcharges. Available 24/7.`,
  ], 150, 160);

  return { metaTitle, metaDescription };
}

// ─── Hero ─────────────────────────────────────────────

export function generateAdHero(city: City, loc: Loc): { heroTitle: string; heroSubtitle: string } {
  if (loc === "fr") {
    return {
      heroTitle: `Panne de voiture à ${city.name} ? Un chauffeur arrive en 20 minutes`,
      heroSubtitle: `Votre véhicule est immobilisé à ${city.name} ? Ne restez pas bloqué. TaxiNeo envoie un chauffeur privé pour vous conduire immédiatement où vous devez aller : garage, domicile, gare, travail.`,
    };
  }
  return {
    heroTitle: `Car broke down in ${city.name}? A driver arrives in 20 minutes`,
    heroSubtitle: `Your vehicle is stranded in ${city.name}? Don't stay stuck. TaxiNeo sends a private driver to take you wherever you need to go: garage, home, station, work.`,
  };
}

// ─── Intro (~800 words) ─────────────────────────────────────────────

export function generateAdIntro(city: City, adCity: AssistanceCityData, loc: Loc): { introBody: string; introComplement: string } {
  const pop = formatPop(city.population, loc);
  const roads = joinList(adCity.majorRoads.slice(0, 4), loc);
  const garagesList = joinList(topGarages(adCity, 3), loc);

  if (loc === "fr") {
    const introBody = `Une panne de voiture est toujours un événement stressant, et quand elle survient à ${city.name}, agglomération de ${pop} habitants, les conséquences peuvent rapidement s'accumuler : rendez-vous manqué, enfants à récupérer, réunion professionnelle compromise. Le réseau routier dense de ${city.name} — notamment ${roads} — est emprunté quotidiennement par des dizaines de milliers d'automobilistes. Statistiquement, une voiture sur cinq connaîtra au moins une panne significative dans l'année. Batterie à plat, pneu crevé, surchauffe moteur, panne d'essence, problème d'alternateur ou de démarreur : les causes sont multiples et souvent imprévisibles.

Face à cette situation, l'automobiliste en panne à ${city.name} se retrouve avec des options limitées. Appeler une dépanneuse implique un délai d'attente moyen de 45 à 90 minutes, un coût de remorquage souvent supérieur à 120 €, et aucune solution pour se déplacer soi-même pendant que le véhicule est pris en charge. Les transports en commun ne sont pas toujours accessibles depuis le lieu de la panne, surtout en zone périurbaine ou la nuit. C'est précisément pour répondre à ce besoin que TaxiNeo a développé son service d'assistance dépannage à ${city.name}.

Notre service fonctionne de manière simple et efficace : dès que votre voiture est immobilisée, vous nous contactez par téléphone ou via notre formulaire en ligne. Un chauffeur privé professionnel, basé à proximité de ${city.name}, est dispatché immédiatement. En moyenne, il arrive sur place en 15 à 25 minutes. Il vous prend en charge — vous, vos passagers, vos bagages — et vous conduit directement à la destination de votre choix : votre garage de confiance (${garagesList}), votre domicile, votre lieu de travail, la gare la plus proche, ou tout autre point que vous indiquez.

Ce service est disponible 24 heures sur 24, 7 jours sur 7, y compris les jours fériés, les week-ends et en période nocturne. Que votre panne survienne à 3h du matin sur un axe isolé ou à 17h en pleine heure de pointe, notre réseau de chauffeurs couvre l'intégralité de ${city.name} et sa périphérie immédiate. Le tarif est fixé à l'avance, sans surprise, et la réservation peut se faire en quelques secondes.

TaxiNeo ne remplace pas le dépanneur — nous complétons son intervention. Pendant que votre véhicule attend la dépanneuse ou est remorqué vers un garage, vous, vous êtes déjà en route vers votre destination. Plus de temps perdu, plus de stress, plus d'attente interminable sur le bord de la route.`;

    const introComplement = `**L'assistance automobile en France : ce que couvre votre assurance** — La plupart des contrats d'assurance auto incluent une garantie assistance, mais celle-ci comporte souvent des limitations importantes. La franchise kilométrique (souvent 25 ou 50 km du domicile) signifie que si votre panne survient à proximité de chez vous à ${city.name}, l'assistance de votre assureur ne sera pas déclenchée. C'est ce qu'on appelle l'assistance « 0 km » — et tous les contrats ne la proposent pas. De plus, même lorsque l'assistance est déclenchée, le délai d'intervention peut varier entre 1h et 3h selon la disponibilité des prestataires et la localisation exacte de la panne.

**L'alternative TaxiNeo** — Notre service comble précisément ce vide. Que vous soyez à 500 mètres ou à 50 km de votre domicile, que votre assurance couvre ou non la situation, TaxiNeo vous offre une solution de transport immédiate. Le chauffeur arrive en 20 minutes maximum, vous transporte confortablement dans un véhicule récent (berline ou van selon vos besoins), et vous dépose où vous le souhaitez. Le tout à un tarif transparent, communiqué avant la prise en charge.

**Les bons réflexes en cas de panne à ${city.name}** — Mettez-vous en sécurité (bande d'arrêt d'urgence ou accotement), activez vos feux de détresse, enfilez votre gilet jaune, posez le triangle de signalisation à 30 mètres minimum, puis contactez-nous. Pendant que vous attendez votre chauffeur TaxiNeo (15-25 min en moyenne), vous pouvez sereinement organiser le remorquage de votre véhicule avec votre assureur ou un dépanneur local.`;

    return { introBody, introComplement };
  }

  // English version
  const introBody = `A car breakdown is always stressful, and when it happens in ${city.name}, a city of ${pop} residents, the consequences can quickly snowball: missed appointments, children to collect, compromised work meetings. The dense road network of ${city.name} — including ${roads} — carries tens of thousands of motorists daily. Statistically, one in five cars will experience at least one significant breakdown per year. Dead battery, flat tyre, engine overheating, fuel shortage, alternator or starter motor failure: the causes are numerous and often unpredictable.

When facing this situation, a stranded motorist in ${city.name} has limited options. Calling a tow truck means waiting 45 to 90 minutes on average, paying over €120 for towing, and having no personal transport while the vehicle is being handled. Public transport isn't always accessible from the breakdown location, especially in suburban areas or at night. This is precisely why TaxiNeo developed its breakdown assistance service in ${city.name}.

Our service works simply and effectively: as soon as your car is immobilised, you contact us by phone or through our online form. A professional private driver, based near ${city.name}, is dispatched immediately. On average, they arrive within 15 to 25 minutes. They pick up you, your passengers, and your luggage, then drive you directly to your chosen destination: your trusted garage (${garagesList}), your home, your workplace, the nearest station, or any other location you specify.

This service is available 24 hours a day, 7 days a week, including public holidays, weekends, and overnight. Whether your breakdown happens at 3am on a quiet road or at 5pm during rush hour, our driver network covers all of ${city.name} and its immediate surroundings. The fare is fixed in advance with no surprises, and booking takes just seconds.

TaxiNeo doesn't replace the tow truck — we complement their service. While your vehicle waits for the tow truck or is being towed to a garage, you're already on your way to your destination. No more wasted time, no more stress, no more endless roadside waiting.`;

  const introComplement = `**Car insurance assistance in France: what's actually covered** — Most French car insurance policies include a breakdown assistance guarantee, but they often come with significant limitations. The distance franchise (usually 25 or 50 km from home) means that if your breakdown occurs near your home in ${city.name}, your insurer's assistance won't be triggered. This is known as "0 km assistance" — and not all policies include it. Moreover, even when assistance is triggered, response times can vary from 1 to 3 hours depending on provider availability and your exact location.

**The TaxiNeo alternative** — Our service fills precisely this gap. Whether you're 500 metres or 50 km from home, whether your insurance covers the situation or not, TaxiNeo offers immediate transport. The driver arrives within 20 minutes maximum, transports you comfortably in a recent vehicle (sedan or van depending on your needs), and drops you wherever you wish. All at a transparent rate communicated before pickup.

**What to do if your car breaks down in ${city.name}** — Get to safety (hard shoulder or verge), turn on your hazard lights, put on your high-visibility vest, place the warning triangle at least 30 metres behind your vehicle, then contact us. While you wait for your TaxiNeo driver (15-25 min on average), you can calmly arrange your vehicle's towing with your insurer or a local breakdown service.`;

  return { introBody, introComplement };
}

// ─── Garages Guide ─────────────────────────────────────────────

export function generateAdGaragesGuide(city: City, adCity: AssistanceCityData, loc: Loc): string {
  const garages = adCity.garages;
  if (loc === "fr") {
    const paragraphs = garages.map((garage) => {
      return `**${garage}** — Ce garage situé à ${city.name} propose des services de mécanique générale, diagnostic électronique, entretien courant et réparations. En cas de panne, TaxiNeo peut vous y déposer directement ou vous ramener chez vous pendant que votre véhicule est pris en charge. Nos chauffeurs connaissent parfaitement l'accès à ${garage} et peuvent vous y conduire de jour comme de nuit, 7j/7. Si le garage est fermé à votre arrivée (panne nocturne ou week-end), nous vous déposons à votre domicile et vous pourrez y revenir aux horaires d'ouverture.`;
    });
    return paragraphs.join("\n\n");
  }

  const paragraphs = garages.map((garage) => {
    return `**${garage}** — This garage in ${city.name} offers general mechanical services, electronic diagnostics, routine maintenance and repairs. In case of breakdown, TaxiNeo can drop you off there directly or take you home while your vehicle is being handled. Our drivers know exactly how to reach ${garage} and can take you there day or night, 7 days a week. If the garage is closed when you arrive (night-time or weekend breakdown), we'll take you home and you can return during opening hours.`;
  });
  return paragraphs.join("\n\n");
}

// ─── Quartiers Access ─────────────────────────────────────────────

export function generateAdQuartiersAccess(city: City, loc: Loc): string {
  const quartiers = city.quartiers.slice(0, 6);
  if (loc === "fr") {
    const paragraphs = quartiers.map((q) => {
      return `**${q}** — Notre service d'assistance dépannage couvre intégralement le quartier ${q} à ${city.name}. Qu'il s'agisse d'une panne sur une artère principale ou dans une rue résidentielle, nos chauffeurs connaissent parfaitement ce secteur et arrivent en 15 à 25 minutes. Zone de stationnement difficile, sens uniques, accès riverains : nous maîtrisons toutes les particularités de circulation du quartier ${q}. Service disponible 24h/24, y compris les zones les moins bien desservies par les transports en commun.`;
    });
    return paragraphs.join("\n\n");
  }

  const paragraphs = quartiers.map((q) => {
    return `**${q}** — Our breakdown assistance service fully covers the ${q} area in ${city.name}. Whether your car breaks down on a main road or a residential street, our drivers know this area perfectly and arrive within 15 to 25 minutes. Difficult parking zones, one-way streets, restricted access: we master all traffic particularities of the ${q} neighbourhood. Service available 24/7, including areas poorly served by public transport.`;
  });
  return paragraphs.join("\n\n");
}

// ─── Practical Info ─────────────────────────────────────────────

export function generateAdPracticalInfo(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `**Que faire en cas de panne sur la voie publique à ${city.name}** — Lorsque votre véhicule tombe en panne sur la voie publique, vous disposez de 7 jours pour le déplacer avant qu'il ne soit considéré comme en stationnement abusif. Si le véhicule représente un danger (au milieu de la chaussée), la police municipale de ${city.name} peut ordonner son enlèvement immédiat. Prévenez la fourrière municipale si vous ne pouvez pas faire remorquer dans les délais. Pendant ce temps, TaxiNeo vous transporte immédiatement pour que vous ne restiez pas bloqué.

**Le constat amiable en cas d'accident** — Si votre véhicule est immobilisé suite à un accident à ${city.name}, établissez d'abord le constat amiable avec l'autre partie. Prenez des photos de la scène, notez les coordonnées des témoins. Une fois les formalités accomplies, contactez TaxiNeo : un chauffeur vous récupère sur place et vous conduit où vous le souhaitez pendant que l'assurance gère la suite.

**Votre assurance et la franchise kilométrique** — Vérifiez votre contrat d'assurance auto : la plupart appliquent une franchise de 25 km ou 50 km du domicile pour l'assistance dépannage. Si votre panne survient en deçà de cette distance à ${city.name} (ce qui est statistiquement le cas le plus fréquent), votre assureur ne prendra pas en charge le remorquage. TaxiNeo intervient sans condition de distance : que vous soyez à 200 mètres ou à 50 km de chez vous.

**Les numéros d'urgence** — En cas d'accident avec blessés à ${city.name}, appelez le 15 (SAMU), le 18 (pompiers) ou le 112 (numéro européen). Pour une simple panne sans danger immédiat, appelez directement TaxiNeo au 07 59 59 29 34 pour un transport immédiat. Si vous êtes sur autoroute, utilisez les bornes d'appel d'urgence orange tous les 2 km.

**Documents à avoir dans votre véhicule** — Carte grise (certificat d'immatriculation), attestation d'assurance valide, permis de conduire, constat amiable vierge, gilet jaune homologué (obligatoire depuis 2008), triangle de signalisation. En cas de contrôle lors d'une panne à ${city.name}, l'absence de gilet ou de triangle peut entraîner une amende de 135 €.`;
  }

  return `**What to do when your car breaks down on a public road in ${city.name}** — When your vehicle breaks down on a public road, you have 7 days to move it before it's considered illegally parked. If the vehicle is a hazard (blocking the road), ${city.name}'s municipal police can order immediate removal. Notify the municipal impound if you cannot arrange towing in time. Meanwhile, TaxiNeo transports you immediately so you're not left stranded.

**Filing an accident report** — If your vehicle is immobilised following an accident in ${city.name}, first complete the joint accident report (constat amiable) with the other party. Take photos of the scene and note witness details. Once formalities are complete, contact TaxiNeo: a driver picks you up on-site and takes you wherever you need while insurance handles the rest.

**Your insurance and the distance franchise** — Check your car insurance policy: most apply a 25 km or 50 km distance franchise from home for breakdown assistance. If your breakdown occurs within this distance in ${city.name} (statistically the most common scenario), your insurer won't cover the towing. TaxiNeo operates with no distance condition: whether you're 200 metres or 50 km from home.

**Emergency numbers in France** — In case of an accident with injuries in ${city.name}, call 15 (SAMU/ambulance), 18 (fire brigade) or 112 (European emergency number). For a simple breakdown with no immediate danger, call TaxiNeo directly at +33 7 59 59 29 34 for immediate transport. If you're on a motorway, use the orange emergency phones located every 2 km.

**Documents to keep in your vehicle** — Vehicle registration certificate (carte grise), valid insurance certificate, driving licence, blank accident report form, approved high-visibility vest (mandatory since 2008), warning triangle. During a roadside check in ${city.name}, missing a vest or triangle can result in a €135 fine.`;
}

// ─── Comparison ─────────────────────────────────────────────

export function generateAdComparison(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `Lorsque votre voiture tombe en panne à ${city.name}, plusieurs options s'offrent à vous pour vous déplacer. Voici une comparaison objective des solutions disponibles :

**Taxi TaxiNeo (assistance dépannage)** — Délai d'arrivée : 15-25 minutes. Coût : tarif fixe communiqué à l'avance (35-65 € selon la distance). Avantages : disponible 24h/24, véhicule confortable, prix garanti, chauffeur professionnel, pas de surplus en heures creuses ou de nuit. Vous êtes transporté exactement où vous voulez aller.

**Dépanneuse / Remorquage** — Délai d'arrivée : 45-90 minutes. Coût : 120-250 € (remorquage seul). Limite : ne transporte que le véhicule, pas toujours les passagers (1 seul autorisé en cabine). Vous devez ensuite trouver un autre moyen de transport pour rentrer chez vous depuis le garage.

**Location de voiture d'urgence** — Délai : nécessite de se rendre à une agence (pas toujours possible en panne). Coût : 50-100 €/jour. Contraintes : horaires d'ouverture limités, caution requise, indisponible la nuit et les jours fériés. Ne résout pas le problème immédiat du transport depuis le lieu de panne.

**Transports en commun** — Délai : variable selon l'horaire et la localisation. Coût : 1,50-5 €. Limites : non disponible la nuit dans de nombreuses zones de ${city.name}, nécessite de marcher jusqu'à un arrêt (potentiellement dangereux au bord d'une route), pas de transport de bagages volumineux, correspondances multiples possibles.

| Critère | TaxiNeo | Dépanneuse | Location | Transports |
|---------|---------|-----------|----------|------------|
| Délai | 15-25 min | 45-90 min | Variable | Variable |
| Disponibilité 24/7 | ✓ | ✓ | ✗ | ✗ |
| Tarif fixe garanti | ✓ | ✗ | ✗ | ✓ |
| Porte-à-porte | ✓ | ✗ | ✗ | ✗ |
| Transport passagers | ✓ | 1 seul | ✓ | ✓ |
| Confort | ★★★★★ | ★★ | ★★★★ | ★★ |`;
  }

  return `When your car breaks down in ${city.name}, you have several options to get moving again. Here's an objective comparison of available solutions:

**TaxiNeo taxi (breakdown assistance)** — Arrival time: 15-25 minutes. Cost: fixed fare communicated in advance (€35-65 depending on distance). Advantages: available 24/7, comfortable vehicle, guaranteed price, professional driver, no surcharges at night or off-peak. You're transported exactly where you want to go.

**Tow truck / Recovery** — Arrival time: 45-90 minutes. Cost: €120-250 (towing only). Limitation: only transports the vehicle, not always passengers (only 1 allowed in cab). You then need to find another way home from the garage.

**Emergency car hire** — Delay: requires getting to an agency (not always possible during breakdown). Cost: €50-100/day. Constraints: limited opening hours, deposit required, unavailable at night and on public holidays. Doesn't solve the immediate transport problem from the breakdown location.

**Public transport** — Delay: variable depending on schedule and location. Cost: €1.50-5. Limitations: unavailable at night in many areas of ${city.name}, requires walking to a stop (potentially dangerous on a roadside), no bulky luggage transport, multiple connections possible.

| Criteria | TaxiNeo | Tow truck | Car hire | Public transport |
|----------|---------|-----------|----------|-----------------|
| Response time | 15-25 min | 45-90 min | Variable | Variable |
| 24/7 availability | ✓ | ✓ | ✗ | ✗ |
| Fixed guaranteed fare | ✓ | ✗ | ✗ | ✓ |
| Door-to-door | ✓ | ✗ | ✗ | ✗ |
| Passenger transport | ✓ | 1 only | ✓ | ✓ |
| Comfort | ★★★★★ | ★★ | ★★★★ | ★★ |`;
}

// ─── Use Cases (6) ─────────────────────────────────────────────

export function generateAdUseCases(city: City, adCity: AssistanceCityData, loc: Loc): AdUseCase[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:battery-charge-minimalistic-linear",
        title: "Batterie à plat",
        desc: "Votre batterie a lâché et votre voiture ne démarre plus. Plutôt que d'attendre un dépanneur, un chauffeur TaxiNeo vous emmène immédiatement.",
        example: `"Ma batterie était morte ce matin à ${city.name}. En 20 min j'étais au travail grâce à TaxiNeo, et le dépanneur est venu tranquillement pendant la journée."`,
      },
      {
        icon: "solar:wheel-linear",
        title: "Pneu crevé",
        desc: "Crevaison en route et pas de roue de secours ou impossible de changer ? Notre chauffeur arrive en 15 minutes pour vous déposer à destination.",
        example: `"Pneu crevé devant ${adCity.garages[0] || "un garage"}, impossible de changer. TaxiNeo m'a ramené chez moi en 15 min, j'ai fait venir un dépanneur le lendemain."`,
      },
      {
        icon: "solar:fire-linear",
        title: "Surchauffe moteur",
        desc: "Voyant température allumé, fumée sous le capot. Impossible de continuer. TaxiNeo vous met en sécurité et vous transporte pendant la prise en charge du véhicule.",
        example: `"Surchauffe en plein embouteillage à ${city.name}. Le chauffeur TaxiNeo est arrivé avant même la dépanneuse. J'ai pu aller chercher mes enfants à l'école à l'heure."`,
      },
      {
        icon: "solar:gas-station-linear",
        title: "Panne d'essence",
        desc: "Jauge à zéro, moteur calé. C'est embarrassant mais ça arrive. Un chauffeur vient vous chercher et vous dépose à la station-service la plus proche ou chez vous.",
        example: `"Panne sèche sur ${adCity.majorRoads[0] || "la nationale"} à ${city.name}. Le chauffeur m'a déposé à la station à 2 km, j'ai pris un jerrican et c'était réglé."`,
      },
      {
        icon: "solar:danger-triangle-linear",
        title: "Accident sans blessé",
        desc: "Après un accrochage, votre voiture n'est plus roulable. Une fois le constat fait, TaxiNeo vous récupère pour vous ramener chez vous ou au travail.",
        example: `"Accrochage à un carrefour de ${city.name}. Après le constat, TaxiNeo m'a ramené au bureau. L'assurance a géré le reste."`,
      },
      {
        icon: "solar:moon-linear",
        title: "Panne nocturne",
        desc: `En panne la nuit à ${city.name}, les options sont limitées. TaxiNeo est disponible 24h/24 : un chauffeur arrive même à 3h du matin.`,
        example: `"Panne à 2h du matin en rentrant de soirée à ${city.name}. Pas de métro, pas de bus. TaxiNeo m'a sauvé en 15 min."`,
      },
    ];
  }

  return [
    {
      icon: "solar:battery-charge-minimalistic-linear",
      title: "Dead battery",
      desc: "Your battery died and your car won't start. Rather than waiting for roadside assistance, a TaxiNeo driver takes you immediately.",
      example: `"My battery was dead this morning in ${city.name}. Within 20 min I was at work thanks to TaxiNeo, and the mechanic came during the day."`,
    },
    {
      icon: "solar:wheel-linear",
      title: "Flat tyre",
      desc: "Puncture on the road with no spare or can't change it? Our driver arrives in 15 minutes to take you to your destination.",
      example: `"Flat tyre near ${adCity.garages[0] || "a garage"}, couldn't change it. TaxiNeo took me home in 15 min, I called a mechanic the next day."`,
    },
    {
      icon: "solar:fire-linear",
      title: "Engine overheating",
      desc: "Temperature warning light on, smoke under the bonnet. Can't continue driving. TaxiNeo gets you to safety while your vehicle is handled.",
      example: `"Overheating in traffic in ${city.name}. The TaxiNeo driver arrived before the tow truck. I made it to school pickup on time."`,
    },
    {
      icon: "solar:gas-station-linear",
      title: "Out of fuel",
      desc: "Gauge on empty, engine stalled. It's embarrassing but it happens. A driver picks you up and drops you at the nearest petrol station or home.",
      example: `"Ran out of fuel on ${adCity.majorRoads[0] || "the main road"} in ${city.name}. Driver dropped me at the station 2 km away, I grabbed a jerry can and sorted it."`,
    },
    {
      icon: "solar:danger-triangle-linear",
      title: "Minor accident",
      desc: "After a fender bender, your car is undriveable. Once the accident report is filed, TaxiNeo picks you up and takes you home or to work.",
      example: `"Fender bender at a junction in ${city.name}. After the report, TaxiNeo took me to the office. Insurance handled the rest."`,
    },
    {
      icon: "solar:moon-linear",
      title: "Night-time breakdown",
      desc: `Breaking down at night in ${city.name} leaves few options. TaxiNeo is available 24/7: a driver arrives even at 3am.`,
      example: `"Broke down at 2am coming home from a night out in ${city.name}. No metro, no bus. TaxiNeo saved me in 15 min."`,
    },
  ];
}

// ─── Advantages (6) ─────────────────────────────────────────────

export function generateAdAdvantages(city: City, loc: Loc): AdAdvantage[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:clock-circle-linear",
        title: "Arrivée en 20 minutes",
        shortDesc: "Rapidité garantie",
        longDesc: `Notre réseau de chauffeurs à ${city.name} garantit une prise en charge en 15 à 25 minutes maximum, de jour comme de nuit. Plus rapide qu'une dépanneuse classique.`,
      },
      {
        icon: "solar:shield-check-linear",
        title: "Service 24h/24, 7j/7",
        shortDesc: "Toujours disponible",
        longDesc: `Panne nocturne, week-end, jour férié : TaxiNeo est opérationnel en permanence à ${city.name}. Un chauffeur est toujours disponible, quelle que soit l'heure.`,
      },
      {
        icon: "solar:tag-price-linear",
        title: "Tarif fixe garanti",
        shortDesc: "Pas de mauvaise surprise",
        longDesc: `Le prix est communiqué à l'avance avant la prise en charge. Pas de compteur qui tourne, pas de supplément nuit ou jour férié. Vous savez exactement ce que vous paierez.`,
      },
      {
        icon: "solar:users-group-rounded-linear",
        title: "Tous vos passagers",
        shortDesc: "Berline ou Van",
        longDesc: `Contrairement à la dépanneuse (1 seul passager en cabine), nos berlines et vans transportent jusqu'à 7 personnes. Idéal en famille ou entre collègues.`,
      },
      {
        icon: "solar:map-point-linear",
        title: "Destination au choix",
        shortDesc: "Vous décidez",
        longDesc: `Garage, domicile, gare, travail, aéroport : vous choisissez votre destination à ${city.name} ou en dehors. Le chauffeur vous dépose exactement où vous le souhaitez.`,
      },
      {
        icon: "solar:star-linear",
        title: "Chauffeurs professionnels",
        shortDesc: "Notés 4.9/5",
        longDesc: `Nos chauffeurs sont des professionnels du transport à ${city.name}, formés au service client, avec des véhicules récents, propres et climatisés. Note moyenne : 4.9/5.`,
      },
    ];
  }

  return [
    {
      icon: "solar:clock-circle-linear",
      title: "Arrival in 20 minutes",
      shortDesc: "Guaranteed speed",
      longDesc: `Our driver network in ${city.name} guarantees pickup within 15 to 25 minutes maximum, day or night. Faster than a standard breakdown service.`,
    },
    {
      icon: "solar:shield-check-linear",
      title: "24/7 service",
      shortDesc: "Always available",
      longDesc: `Night breakdown, weekend, public holiday: TaxiNeo operates round-the-clock in ${city.name}. A driver is always available, whatever the time.`,
    },
    {
      icon: "solar:tag-price-linear",
      title: "Fixed guaranteed fare",
      shortDesc: "No nasty surprises",
      longDesc: `The price is communicated before pickup. No running meter, no night or holiday surcharge. You know exactly what you'll pay.`,
    },
    {
      icon: "solar:users-group-rounded-linear",
      title: "All your passengers",
      shortDesc: "Sedan or Van",
      longDesc: `Unlike a tow truck (only 1 passenger in the cab), our sedans and vans transport up to 7 people. Ideal for families or groups of colleagues.`,
    },
    {
      icon: "solar:map-point-linear",
      title: "Destination of your choice",
      shortDesc: "You decide",
      longDesc: `Garage, home, station, work, airport: you choose your destination in ${city.name} or beyond. The driver drops you exactly where you want.`,
    },
    {
      icon: "solar:star-linear",
      title: "Professional drivers",
      shortDesc: "Rated 4.9/5",
      longDesc: `Our drivers are transport professionals in ${city.name}, trained in customer service, with recent, clean, air-conditioned vehicles. Average rating: 4.9/5.`,
    },
  ];
}

// ─── Testimonials (4) ─────────────────────────────────────────────

export function generateAdTestimonials(city: City, adCity: AssistanceCityData, loc: Loc): AdTestimonial[] {
  if (loc === "fr") {
    return [
      {
        text: `Panne de batterie à ${city.name} un lundi matin. En 15 minutes le chauffeur était là, et 20 minutes plus tard j'étais au bureau. Sans TaxiNeo j'aurais raté ma réunion de 9h. Service impeccable et tarif raisonnable.`,
        name: "Laurent M.",
        initials: "LM",
        role: `Cadre à ${city.name}`,
      },
      {
        text: `Ma voiture a lâché sur ${adCity.majorRoads[0] || "la route"} à 23h. J'étais seule avec ma fille de 8 ans. Le chauffeur TaxiNeo est arrivé en 18 minutes, très rassurant. Il nous a déposées à la maison. Je recommande à 100%.`,
        name: "Sophie D.",
        initials: "SD",
        role: `Mère de famille à ${city.name}`,
      },
      {
        text: `Après un accrochage à ${city.name}, ma voiture n'était plus roulable. Le temps de faire le constat, le chauffeur TaxiNeo était déjà là. Il m'a ramené au travail et j'ai pu gérer le reste par téléphone. Très pratique.`,
        name: "Thomas R.",
        initials: "TR",
        role: `Commercial à ${city.name}`,
      },
      {
        text: `Pneu crevé devant ${adCity.garages[0] || "un garage"} un dimanche. Garage fermé, pas de roue de secours. TaxiNeo m'a déposé chez moi en 20 min. Le lundi j'ai fait remorquer la voiture. Simple, efficace, pas cher.`,
        name: "Marie-Claire B.",
        initials: "MB",
        role: `Retraitée à ${city.name}`,
      },
    ];
  }

  return [
    {
      text: `Dead battery in ${city.name} on a Monday morning. Within 15 minutes the driver was there, and 20 minutes later I was at the office. Without TaxiNeo I'd have missed my 9am meeting. Impeccable service at a reasonable price.`,
      name: "Laurent M.",
      initials: "LM",
      role: `Executive in ${city.name}`,
    },
    {
      text: `My car died on ${adCity.majorRoads[0] || "the road"} at 11pm. I was alone with my 8-year-old daughter. The TaxiNeo driver arrived in 18 minutes, very reassuring. He dropped us home. 100% recommend.`,
      name: "Sophie D.",
      initials: "SD",
      role: `Mother in ${city.name}`,
    },
    {
      text: `After a fender bender in ${city.name}, my car was undriveable. By the time I'd done the report, the TaxiNeo driver was already there. Took me back to work and I handled the rest by phone. Very practical.`,
      name: "Thomas R.",
      initials: "TR",
      role: `Sales rep in ${city.name}`,
    },
    {
      text: `Flat tyre outside ${adCity.garages[0] || "a garage"} on a Sunday. Garage closed, no spare. TaxiNeo got me home in 20 min. Monday I had the car towed. Simple, effective, affordable.`,
      name: "Marie-Claire B.",
      initials: "MB",
      role: `Retired in ${city.name}`,
    },
  ];
}

// ─── FAQ (10) ─────────────────────────────────────────────

export function generateAdFAQ(city: City, loc: Loc): AdFAQ[] {
  if (loc === "fr") {
    return [
      {
        question: `Comment fonctionne le service assistance dépannage TaxiNeo à ${city.name} ?`,
        answer: `Lorsque votre voiture est en panne à ${city.name}, vous nous contactez par téléphone (07 59 59 29 34) ou via le formulaire en ligne. Un chauffeur privé est dispatché immédiatement et arrive en 15-25 minutes. Il vous transporte — vous et vos passagers — vers la destination de votre choix : garage, domicile, gare, lieu de travail. Le tarif est fixe et communiqué à l'avance.`,
      },
      {
        question: `Combien de temps faut-il pour qu'un chauffeur arrive en cas de panne à ${city.name} ?`,
        answer: `Notre temps de réponse moyen à ${city.name} est de 15 à 25 minutes, 24 heures sur 24. En heures de pointe, le délai peut atteindre 25-30 minutes en raison du trafic. La nuit et le week-end, les délais sont souvent inférieurs à 15 minutes grâce à une circulation plus fluide.`,
      },
      {
        question: `Quel est le tarif pour le service d'assistance dépannage à ${city.name} ?`,
        answer: `Le tarif dépend de la distance entre le lieu de panne et votre destination. Pour une intervention immédiate à ${city.name}, comptez entre 35 € et 65 € en berline. Le prix exact est communiqué avant la prise en charge, sans surprise. Pas de supplément nuit, week-end ou jour férié.`,
      },
      {
        question: `Le service est-il disponible la nuit et le week-end à ${city.name} ?`,
        answer: `Oui, notre service d'assistance dépannage est disponible 24 heures sur 24, 7 jours sur 7 à ${city.name}, y compris les nuits, week-ends et jours fériés. Le tarif reste identique quelle que soit l'heure : pas de supplément nocturne ou de majoration le dimanche.`,
      },
      {
        question: `Combien de passagers pouvez-vous transporter ?`,
        answer: `Nos berlines accueillent jusqu'à 4 passagers et nos vans jusqu'à 7 passagers. Contrairement à une dépanneuse qui n'accepte qu'un seul passager en cabine, TaxiNeo transporte toute votre famille ou vos collègues en une seule course. Précisez le nombre de personnes lors de la réservation.`,
      },
      {
        question: `Est-ce que TaxiNeo remorque mon véhicule ?`,
        answer: `Non, TaxiNeo est un service de transport de personnes, pas un service de remorquage. Nous vous transportons, vous et vos passagers, pendant que votre véhicule est pris en charge par un dépanneur. Nous pouvons cependant vous recommander des dépanneurs partenaires à ${city.name} si besoin.`,
      },
      {
        question: `Puis-je être déposé dans un garage de mon choix à ${city.name} ?`,
        answer: `Absolument. Vous choisissez votre destination : votre garage habituel, un garage de proximité, ou toute autre adresse à ${city.name} ou en dehors. Si vous ne connaissez pas de garage, nos chauffeurs peuvent vous conseiller les garages les mieux notés du secteur.`,
      },
      {
        question: `Comment payer le service d'assistance dépannage ?`,
        answer: `Le paiement s'effectue à la fin de la course par carte bancaire directement dans le véhicule. Vous pouvez aussi régler par virement ou PayPal sur facture. Pour les entreprises, nous proposons la facturation mensuelle. Le tarif est celui communiqué avant la prise en charge, sans supplément.`,
      },
      {
        question: `Mon assurance auto rembourse-t-elle le transport TaxiNeo ?`,
        answer: `Certaines assurances auto remboursent les frais de transport alternatif en cas de panne. Vérifiez votre contrat (garantie "frais de transport" ou "véhicule de remplacement"). Nous fournissons une facture détaillée que vous pouvez transmettre à votre assureur. Le remboursement dépend des conditions de votre contrat.`,
      },
      {
        question: `Quelle zone couvrez-vous autour de ${city.name} ?`,
        answer: `Notre service couvre l'intégralité de ${city.name} et un rayon de 30 km autour. Cela inclut toutes les communes limitrophes, les zones industrielles, les axes routiers principaux et les autoroutes à proximité. Pour des destinations plus éloignées, contactez-nous : nous établirons un devis personnalisé.`,
      },
    ];
  }

  return [
    {
      question: `How does TaxiNeo's breakdown assistance service work in ${city.name}?`,
      answer: `When your car breaks down in ${city.name}, contact us by phone (+33 7 59 59 29 34) or online form. A private driver is dispatched immediately and arrives within 15-25 minutes. They transport you and your passengers to your chosen destination: garage, home, station, workplace. The fare is fixed and communicated in advance.`,
    },
    {
      question: `How long does it take for a driver to arrive in ${city.name}?`,
      answer: `Our average response time in ${city.name} is 15 to 25 minutes, 24 hours a day. During rush hour, it may reach 25-30 minutes due to traffic. At night and weekends, times are often under 15 minutes thanks to lighter traffic.`,
    },
    {
      question: `How much does the breakdown assistance service cost in ${city.name}?`,
      answer: `The fare depends on the distance between the breakdown location and your destination. For immediate response in ${city.name}, expect €35-65 by sedan. The exact price is communicated before pickup with no surprises. No night, weekend or public holiday surcharges.`,
    },
    {
      question: `Is the service available at night and weekends in ${city.name}?`,
      answer: `Yes, our breakdown assistance service is available 24/7 in ${city.name}, including nights, weekends and public holidays. The rate remains the same regardless of time: no night surcharge or Sunday premium.`,
    },
    {
      question: `How many passengers can you transport?`,
      answer: `Our sedans accommodate up to 4 passengers and our vans up to 7. Unlike a tow truck that only accepts one passenger in the cab, TaxiNeo transports your whole family or group of colleagues in one trip. Specify numbers when booking.`,
    },
    {
      question: `Does TaxiNeo tow my vehicle?`,
      answer: `No, TaxiNeo is a passenger transport service, not a towing service. We transport you and your passengers while your vehicle is handled by a tow truck. However, we can recommend partner breakdown services in ${city.name} if needed.`,
    },
    {
      question: `Can I be dropped at a garage of my choice in ${city.name}?`,
      answer: `Absolutely. You choose your destination: your regular garage, a nearby one, or any other address in ${city.name} or beyond. If you don't know a garage, our drivers can recommend the best-rated ones in the area.`,
    },
    {
      question: `How do I pay for the breakdown assistance service?`,
      answer: `Payment is made at the end of the trip by bank card directly in the vehicle. You can also pay by bank transfer or PayPal on invoice. For businesses, we offer monthly billing. The fare is the one communicated before pickup, with no surcharge.`,
    },
    {
      question: `Will my car insurance reimburse TaxiNeo transport?`,
      answer: `Some car insurance policies reimburse alternative transport costs in case of breakdown. Check your policy ("transport costs" or "replacement vehicle" coverage). We provide a detailed invoice you can submit to your insurer. Reimbursement depends on your specific policy terms.`,
    },
    {
      question: `What area do you cover around ${city.name}?`,
      answer: `Our service covers all of ${city.name} and a 30 km radius. This includes all neighbouring towns, industrial zones, main roads and nearby motorways. For more distant destinations, contact us: we'll provide a personalised quote.`,
    },
  ];
}

// ─── How It Works (4 steps) ─────────────────────────

export function generateAdHowItWorks(city: City, loc: Loc): AdHowItWorksStep[] {
  if (loc === "fr") {
    return [
      {
        step: "1",
        title: "Mettez-vous en sécurité",
        desc: `Activez vos feux de détresse, enfilez votre gilet jaune, et garez-vous en sécurité (accotement, parking, bande d'arrêt d'urgence). Posez votre triangle de signalisation à 30 mètres. Vous êtes maintenant en sécurité à ${city.name}.`,
      },
      {
        step: "2",
        title: "Contactez TaxiNeo",
        desc: `Appelez le 07 59 59 29 34 ou remplissez le formulaire en ligne. Indiquez votre position exacte à ${city.name}, le nombre de passagers, et votre destination souhaitée (garage, domicile, gare...). Le tarif fixe vous est communiqué immédiatement.`,
      },
      {
        step: "3",
        title: "Votre chauffeur arrive",
        desc: `Un chauffeur professionnel basé à proximité de ${city.name} est dispatché instantanément. Il arrive sur place en 15 à 25 minutes dans un véhicule confortable (berline ou van selon vos besoins). Il vous aide avec vos affaires.`,
      },
      {
        step: "4",
        title: "Transport à destination",
        desc: `Le chauffeur vous conduit directement à votre destination : garage pour déposer les clés, domicile pour vous reposer, gare pour prendre un train, travail pour ne pas rater votre journée. Paiement par carte à l'arrivée.`,
      },
    ];
  }

  return [
    {
      step: "1",
      title: "Get to safety",
      desc: `Turn on your hazard lights, put on your high-visibility vest, and park safely (verge, car park, hard shoulder). Place your warning triangle 30 metres behind. You're now safe in ${city.name}.`,
    },
    {
      step: "2",
      title: "Contact TaxiNeo",
      desc: `Call +33 7 59 59 29 34 or fill in the online form. Indicate your exact location in ${city.name}, number of passengers, and desired destination (garage, home, station...). The fixed fare is communicated immediately.`,
    },
    {
      step: "3",
      title: "Your driver arrives",
      desc: `A professional driver based near ${city.name} is dispatched instantly. They arrive within 15 to 25 minutes in a comfortable vehicle (sedan or van depending on your needs). They help with your belongings.`,
    },
    {
      step: "4",
      title: "Transport to destination",
      desc: `The driver takes you directly to your destination: garage to drop off keys, home to rest, station to catch a train, work to not miss your day. Payment by card on arrival.`,
    },
  ];
}

// ─── Main generator ─────────────────────────

export function generateAdContent(city: City, adCity: AssistanceCityData, loc: Loc): AdGeneratedContent {
  const meta = generateAdMeta(city, loc);
  const hero = generateAdHero(city, loc);
  const intro = generateAdIntro(city, adCity, loc);

  return {
    ...meta,
    ...hero,
    ...intro,
    garagesGuide: generateAdGaragesGuide(city, adCity, loc),
    quartiersAccess: generateAdQuartiersAccess(city, loc),
    practicalInfo: generateAdPracticalInfo(city, loc),
    comparisonText: generateAdComparison(city, loc),
    useCases: generateAdUseCases(city, adCity, loc),
    advantages: generateAdAdvantages(city, loc),
    testimonials: generateAdTestimonials(city, adCity, loc),
    faq: generateAdFAQ(city, loc),
    howItWorks: generateAdHowItWorks(city, loc),
    nearbyAdCities: city.nearbyCities,
  };
}
