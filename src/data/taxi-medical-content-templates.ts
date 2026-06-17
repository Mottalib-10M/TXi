import type { City } from "@/data/cities";
import type { TaxiMedicalCityData } from "@/data/taxi-medical-cities";
import { ILE_DE_FRANCE_SLUGS } from "@/data/regions";

// ─── Types ─────────────────────────────────────────────

type Loc = "fr" | "en";

export interface TmUseCase {
  icon: string;
  title: string;
  desc: string;
  example: string;
}

export interface TmAdvantage {
  icon: string;
  title: string;
  shortDesc: string;
  longDesc: string;
}

export interface TmTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface TmFAQ {
  question: string;
  answer: string;
}

export interface TmHowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export interface TmGeneratedContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introBody: string;
  introComplement: string;
  hospitalsGuide: string;
  quartiersAccess: string;
  practicalInfo: string;
  comparisonText: string;
  useCases: TmUseCase[];
  advantages: TmAdvantage[];
  testimonials: TmTestimonial[];
  faq: TmFAQ[];
  howItWorks: TmHowItWorksStep[];
  nearbyTmCities: string[];
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

function topHospitals(tmCity: TaxiMedicalCityData, n: number): string[] {
  return tmCity.hospitals.slice(0, n);
}

function isIDF(city: City): boolean {
  return ILE_DE_FRANCE_SLUGS.has(city.slug);
}

// ─── Meta ─────────────────────────────────────────────

export function generateTmMeta(city: City, loc: Loc): { metaTitle: string; metaDescription: string } {
  if (loc === "fr") {
    return {
      metaTitle: `Taxi médical ${city.name} — Conventionné CPAM | Prise en charge Sécu`,
      metaDescription: `Taxi médical conventionné CPAM à ${city.name}. Transport assis professionnalisé (TAP) vers hôpitaux, dialyse, chimiothérapie, rééducation. Tiers payant, véhicule PMR, devis gratuit.`,
    };
  }
  return {
    metaTitle: `Medical taxi ${city.name} — CPAM approved | Health insurance covered`,
    metaDescription: `CPAM-approved medical taxi in ${city.name}. Professional seated transport (TAP) to hospitals, dialysis, chemotherapy, rehabilitation. Third-party billing, wheelchair-accessible vehicles, free quote.`,
  };
}

// ─── Hero ─────────────────────────────────────────────

export function generateTmHero(city: City, loc: Loc): { heroTitle: string; heroSubtitle: string } {
  if (loc === "fr") {
    return {
      heroTitle: `Taxi médical conventionné à ${city.name}`,
      heroSubtitle: `Transport sanitaire assis professionnalisé (TAP) à ${city.name}. Chauffeur formé au transport de patients, véhicule adapté PMR, prise en charge CPAM en tiers payant. Dialyse, chimiothérapie, consultations spécialistes, rééducation.`,
    };
  }
  return {
    heroTitle: `Medical taxi in ${city.name} — CPAM approved`,
    heroSubtitle: `Professional seated medical transport (TAP) in ${city.name}. Drivers trained in patient care, wheelchair-accessible vehicles, direct CPAM billing. Dialysis, chemotherapy, specialist appointments, rehabilitation.`,
  };
}

// ─── Intro (~800 mots) ─────────────────────────────────

export function generateTmIntro(city: City, tmCity: TaxiMedicalCityData, loc: Loc): { introBody: string; introComplement: string } {
  const pop = formatPop(city.population, loc);
  const hospitals = joinList(topHospitals(tmCity, 4), loc);
  const drivers = city.driverCount;

  if (loc === "fr") {
    return {
      introBody: `${city.name}, commune de ${pop} habitants ${isIDF(city) ? "en Île-de-France" : "en France"}, dispose d’un réseau hospitalier dense qui nécessite un accès fiable au transport médical. Le taxi médical conventionné CPAM à ${city.name} est la solution de référence pour les patients qui doivent se rendre régulièrement dans un établissement de santé : hôpital, centre de dialyse, service de chimiothérapie, cabinet de kinésithérapie ou consultation spécialiste.

Le transport assis professionnalisé (TAP) est un mode de transport sanitaire réglementé par le Code de la santé publique. Contrairement à une course de taxi classique, le taxi médical conventionné implique un véhicule agréé par la CPAM, un chauffeur formé au transport de personnes malades ou à mobilité réduite, et la possibilité de bénéficier du tiers payant — c’est-à-dire que la CPAM règle directement le taxi, sans avance de frais pour le patient.

À ${city.name}, nos chauffeurs assurent quotidiennement des transports vers ${hospitals}. Chaque trajet est organisé en coordination avec votre établissement de santé pour respecter vos horaires de rendez-vous. Le chauffeur vous prend en charge à domicile, vous accompagne jusqu’à l’accueil de l’établissement, attend la fin de votre séance ou consultation, puis vous ramène chez vous.

Pour les patients suivant un traitement régulier (dialyse 3 fois par semaine, chimiothérapie toutes les 2 semaines, séances de kinésithérapie quotidiennes), le taxi médical conventionné à ${city.name} propose des forfaits séries (5 ou 10 aller-retour) qui réduisent le coût par trajet et simplifient la gestion administrative. Un seul bon de transport couvre l’ensemble de la série.`,
      introComplement: `Le conventionnement CPAM est le point central du taxi médical à ${city.name}. Pour en bénéficier, le patient doit disposer d’une prescription médicale de transport (PMT) établie par son médecin traitant ou le médecin hospitalier avant le transport. Cette prescription indique le mode de transport prescrit (taxi, VSL ou ambulance), le lieu de consultation et la durée prévisible du traitement.

Les patients en affection de longue durée (ALD), en accident du travail (AT), en invalidité, ou bénéficiant de la CMU-C ou de l’ACS bénéficient d’une prise en charge à 100 % par la Sécurité sociale. Pour les autres patients, la prise en charge est de 65 %, le complément pouvant être assuré par la mutuelle.

Nos ${drivers}+ chauffeurs partenaires à ${city.name} sont tous conventionnés CPAM, équipés pour le tiers payant (télétransmission des feuilles de soins), et formés à l’accueil des patients fragiles, âgés ou à mobilité réduite. Chaque véhicule est équipé d’une trousse de premiers secours, d’un brancard et, pour les véhicules PMR, d’une rampe d’accès et de fixations pour fauteuil roulant.`,
    };
  }

  return {
    introBody: `${city.name}, a municipality of ${pop} inhabitants ${isIDF(city) ? "in Île-de-France" : "in France"}, has a dense hospital network that requires reliable medical transport. The CPAM-approved medical taxi in ${city.name} is the go-to solution for patients who need regular transport to healthcare facilities: hospitals, dialysis centres, chemotherapy units, physiotherapy clinics or specialist consultations.

Professional seated transport (TAP — Transport Assis Professionnalisé) is a healthcare transport mode regulated by the French Public Health Code. Unlike a standard taxi ride, an approved medical taxi involves a CPAM-certified vehicle, a driver trained in transporting patients with reduced mobility or medical conditions, and the option for third-party billing (tiers payant) — meaning the CPAM pays the taxi directly, with no upfront cost for the patient.

In ${city.name}, our drivers provide daily transport to ${hospitals}. Each journey is coordinated with your healthcare facility to respect your appointment times. The driver picks you up at home, accompanies you to the facility entrance, waits for your session or consultation to end, then takes you home.

For patients undergoing regular treatment (dialysis 3 times a week, chemotherapy every 2 weeks, daily physiotherapy sessions), the CPAM-approved medical taxi in ${city.name} offers series packages (5 or 10 round trips) that reduce the per-trip cost and simplify administrative management. A single transport prescription covers the entire series.`,
    introComplement: `CPAM approval is the cornerstone of medical taxi service in ${city.name}. To qualify, the patient must have a medical transport prescription (PMT) issued by their GP or hospital doctor before the transport. This prescription specifies the prescribed transport mode (taxi, VSL or ambulance), the consultation location and the expected treatment duration.

Patients with long-term conditions (ALD), work-related injuries (AT), disability, or covered by CMU-C or ACS benefit from 100% coverage by the French national health insurance. For other patients, coverage is 65%, with the remainder potentially covered by supplementary health insurance (mutuelle).

Our ${drivers}+ partner drivers in ${city.name} are all CPAM-approved, equipped for third-party billing (electronic claims transmission), and trained in welcoming vulnerable, elderly or mobility-impaired patients. Each vehicle is equipped with a first-aid kit, a stretcher and, for wheelchair-accessible vehicles, an access ramp and wheelchair securing systems.`,
  };
}

// ─── Hospitals Guide (~800 mots) ─────────────────────────

export function generateTmHospitalsGuide(city: City, tmCity: TaxiMedicalCityData, loc: Loc): string {
  const paragraphs = tmCity.hospitals.map((hospital) => {
    if (loc === "fr") {
      return `**${hospital}** — Le taxi médical conventionné pour ${hospital} à ${city.name} assure un trajet direct depuis votre domicile, sans détour ni attente inutile. Notre chauffeur connaît les accès spécifiques de ${hospital} : entrée des urgences, dépose patients, accès handicapés, parking réservé aux taxis médicaux. Pour les patients en dialyse ou en chimiothérapie à ${hospital}, le chauffeur vous accompagne jusqu’au service concerné, attend la fin de la séance (généralement 3 à 4 heures pour la dialyse), puis vous reconduit à domicile. Le tiers payant est appliqué systématiquement pour ${hospital}, sous réserve de présentation de la prescription médicale de transport et de la carte Vitale.`;
    }
    return `**${hospital}** — The CPAM-approved medical taxi to ${hospital} in ${city.name} provides a direct journey from your home, with no detours or unnecessary waiting. Our driver knows the specific access points for ${hospital}: emergency entrance, patient drop-off, disabled access, and taxi-reserved parking. For dialysis or chemotherapy patients at ${hospital}, the driver accompanies you to the relevant department, waits for the session to end (typically 3 to 4 hours for dialysis), then takes you home. Third-party billing is systematically applied for ${hospital}, subject to presenting the medical transport prescription and Carte Vitale.`;
  });

  return paragraphs.join("\n\n");
}

// ─── Quartiers Access (~500 mots) ─────────────────────────

export function generateTmQuartiersAccess(city: City, loc: Loc): string {
  const paragraphs = city.quartiers.slice(0, 6).map((quartier) => {
    if (loc === "fr") {
      return `**${quartier}** — La prise en charge taxi médical depuis le quartier ${quartier} à ${city.name} est assurée par nos chauffeurs qui connaissent parfaitement les accès, les sens uniques et les zones de stationnement de ${quartier}. Pour les patients à mobilité réduite dans ${quartier}, le chauffeur se présente à votre porte, vous aide à monter dans le véhicule et s’assure de votre confort tout au long du trajet. Les patients réguliers de ${quartier} bénéficient souvent du même chauffeur, créant une relation de confiance essentielle pour les personnes fragilisées par la maladie.`;
    }
    return `**${quartier}** — Medical taxi pickup from the ${quartier} area of ${city.name} is handled by drivers who know the access points, one-way streets and parking areas of ${quartier} inside out. For patients with reduced mobility in ${quartier}, the driver comes to your door, helps you into the vehicle and ensures your comfort throughout the journey. Regular patients from ${quartier} often benefit from the same driver, creating a trust relationship that is essential for people weakened by illness.`;
  });

  return paragraphs.join("\n\n");
}

// ─── Practical Info (~600 mots) ─────────────────────────

export function generateTmPracticalInfo(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `**Prescription médicale de transport (PMT)** — La PMT est obligatoire pour bénéficier du remboursement CPAM de votre taxi médical à ${city.name}. Elle doit être établie par votre médecin traitant ou le médecin hospitalier AVANT le transport. La prescription mentionne le mode de transport prescrit (taxi/TAP), la destination, le motif médical et le nombre de trajets autorisés. Sans prescription préalable, le transport ne sera pas remboursé.

**Carte Vitale et mutuelle** — Présentez votre carte Vitale et votre carte de mutuelle au chauffeur à chaque trajet. Le chauffeur procède à la télétransmission de la feuille de soins directement depuis le véhicule. En tiers payant intégral (ALD, AT, CMU-C), vous n’avancez aucun frais. En tiers payant partiel, la part complémentaire est facturée à votre mutuelle.

**ALD et prise en charge à 100 %** — Les patients en Affection de Longue Durée (ALD) reconnue par la Sécurité sociale bénéficient d’une prise en charge à 100 % de leurs transports médicaux à ${city.name}. C’est le cas notamment pour la dialyse rénale, les traitements de chimiothérapie, la radiothérapie, certaines maladies chroniques (diabète, sclérose en plaques, insuffisance cardiaque) et les soins post-AVC.

**Transport Assis Professionnalisé (TAP)** — Le TAP est le mode de transport médical adapté aux patients qui peuvent se déplacer assis mais nécessitent une aide ou une surveillance pendant le trajet. C’est la catégorie de transport médical la plus fréquente à ${city.name}. Le taxi conventionné TAP est équipé pour accueillir les patients en fauteuil roulant (véhicule PMR) ou les patients nécessitant une position semi-allongée.

**Documents à fournir** — Pour votre premier taxi médical à ${city.name}, préparez : (1) la prescription médicale de transport, (2) votre carte Vitale à jour, (3) votre carte de mutuelle, (4) une pièce d’identité. Pour les séries de transports (dialyse, chimio), un seul bon de transport couvre l’ensemble de la série.

**Réservation et annulation** — Réservez votre taxi médical à ${city.name} par téléphone au 07 59 59 29 34, via le formulaire en ligne ou par email. La réservation est possible jusqu’à 30 jours à l’avance. Pour les transports réguliers, nous mettons en place un planning récurrent automatique. L’annulation est gratuite jusqu’à 12 heures avant le transport.

**Urgences médicales** — Le taxi médical conventionné n’est PAS un service d’urgence. En cas d’urgence médicale, appelez le 15 (SAMU) ou le 112. Le taxi médical est destiné aux transports programmés et réguliers vers les établissements de santé.`;
  }

  return `**Medical transport prescription (PMT)** — The PMT is mandatory to qualify for CPAM reimbursement of your medical taxi in ${city.name}. It must be issued by your GP or hospital doctor BEFORE the transport. The prescription states the prescribed transport mode (taxi/TAP), the destination, the medical reason and the number of authorised trips. Without a prior prescription, the transport will not be reimbursed.

**Carte Vitale and supplementary insurance** — Present your Carte Vitale and supplementary insurance card (mutuelle) to the driver at each trip. The driver processes the electronic claims form directly from the vehicle. With full third-party billing (ALD, AT, CMU-C), you pay nothing upfront. With partial third-party billing, the complementary portion is invoiced to your mutuelle.

**ALD and 100% coverage** — Patients with a recognised Long-Term Condition (ALD — Affection de Longue Durée) benefit from 100% coverage of their medical transport in ${city.name}. This includes kidney dialysis, chemotherapy, radiotherapy, certain chronic conditions (diabetes, multiple sclerosis, heart failure) and post-stroke care.

**Professional Seated Transport (TAP)** — TAP is the medical transport mode designed for patients who can travel seated but need assistance or monitoring during the journey. It is the most common category of medical transport in ${city.name}. The TAP-approved taxi is equipped to accommodate wheelchair patients (PMR vehicle) or patients requiring a semi-reclined position.

**Documents required** — For your first medical taxi in ${city.name}, please have ready: (1) the medical transport prescription, (2) your up-to-date Carte Vitale, (3) your supplementary insurance card, (4) a form of ID. For transport series (dialysis, chemotherapy), a single transport prescription covers the entire series.

**Booking and cancellation** — Book your medical taxi in ${city.name} by phone at +33 7 59 59 29 34, via the online form or by email. Booking is possible up to 30 days in advance. For regular transports, we set up an automatic recurring schedule. Cancellation is free up to 12 hours before the transport.

**Medical emergencies** — The CPAM-approved medical taxi is NOT an emergency service. In case of medical emergency, call 15 (SAMU) or 112. The medical taxi is intended for scheduled and regular transport to healthcare facilities.`;
}

// ─── Comparison (~800 mots) ─────────────────────────

export function generateTmComparison(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `Le transport médical à ${city.name} peut être assuré par trois types de véhicules, chacun adapté à un niveau de dépendance différent. Comprendre les différences permet de choisir le mode de transport le plus adapté et le plus économique.

**Taxi médical conventionné (TAP)** — Le taxi médical conventionné CPAM à ${city.name} est destiné aux patients capables de se déplacer assis, avec ou sans aide. C’est le mode de transport médical le plus fréquent et le plus économique pour la Sécurité sociale. Le patient est pris en charge à domicile, transporté directement à l’établissement de santé, puis reconduit après sa consultation ou séance. Le véhicule peut être une berline standard ou un véhicule adapté PMR (fauteuil roulant).

**Véhicule Sanitaire Léger (VSL)** — Le VSL est un véhicule exploité par une entreprise d’ambulances, avec un conducteur formé au transport sanitaire. Il est prescrit pour les patients nécessitant une surveillance légère pendant le trajet (perfusion, oxygène). Le VSL est généralement plus cher que le taxi médical car il intègre le coût d’un équipement sanitaire embarqué. Pour les patients autonomes ou semi-autonomes, le taxi médical est souvent privilégié par le médecin prescripteur.

**Ambulance** — L’ambulance est réservée aux patients devant être transportés en position allongée ou nécessitant une surveillance médicale continue pendant le trajet. C’est le mode de transport le plus coûteux, avec un équipage de 2 personnes (ambulancier + auxiliaire). L’ambulance est obligatoire pour certaines situations (post-opératoire immédiat, patients intubés, urgences vitales).

| Critère | Taxi médical (TAP) | VSL | Ambulance |
|---------|-------------------|-----|-----------|
| Position patient | Assis | Assis | Allongé |
| Surveillance médicale | Non | Légère | Continue |
| Équipage | 1 chauffeur | 1 conducteur | 2 personnes |
| Coût pour la CPAM | Le moins cher | Intermédiaire | Le plus cher |
| Accès fauteuil roulant | Oui (véhicule PMR) | Oui | Oui |
| Tiers payant | Oui | Oui | Oui |
| Voies de bus | Oui | Non | Oui (urgence) |

Pour la grande majorité des transports médicaux réguliers à ${city.name} (dialyse, chimiothérapie, rééducation, consultations), le taxi médical conventionné est le mode de transport le plus adapté, le plus économique et le plus confortable.`;
  }

  return `Medical transport in ${city.name} can be provided by three types of vehicles, each suited to a different level of patient dependency. Understanding the differences helps choose the most appropriate and cost-effective transport mode.

**CPAM-approved medical taxi (TAP)** — The CPAM-approved medical taxi in ${city.name} is designed for patients who can travel seated, with or without assistance. It is the most common and most cost-effective medical transport mode for the national health insurance. The patient is picked up at home, transported directly to the healthcare facility, then taken home after their consultation or session. The vehicle can be a standard sedan or a wheelchair-accessible vehicle (PMR).

**Light Sanitary Vehicle (VSL)** — The VSL is a vehicle operated by an ambulance company, with a driver trained in healthcare transport. It is prescribed for patients requiring light monitoring during the journey (IV drip, oxygen). The VSL is generally more expensive than a medical taxi as it includes onboard medical equipment costs. For autonomous or semi-autonomous patients, the medical taxi is often preferred by the prescribing doctor.

**Ambulance** — The ambulance is reserved for patients who must be transported in a lying position or require continuous medical monitoring during the journey. It is the most expensive transport mode, with a 2-person crew (paramedic + auxiliary). Ambulances are mandatory in certain situations (immediate post-operative, intubated patients, life-threatening emergencies).

| Criteria | Medical taxi (TAP) | VSL | Ambulance |
|----------|-------------------|-----|-----------|
| Patient position | Seated | Seated | Lying |
| Medical monitoring | No | Light | Continuous |
| Crew | 1 driver | 1 driver | 2 persons |
| Cost to CPAM | Lowest | Intermediate | Highest |
| Wheelchair access | Yes (PMR vehicle) | Yes | Yes |
| Third-party billing | Yes | Yes | Yes |
| Bus lanes | Yes | No | Yes (emergency) |

For the vast majority of regular medical transports in ${city.name} (dialysis, chemotherapy, rehabilitation, consultations), the CPAM-approved medical taxi is the most appropriate, cost-effective and comfortable transport mode.`;
}

// ─── Use Cases (6 items) ─────────────────────────

export function generateTmUseCases(city: City, tmCity: TaxiMedicalCityData, loc: Loc): TmUseCase[] {
  const mainHospital = tmCity.hospitals[0];
  const q1 = city.quartiers[0] || city.name;
  const q2 = city.quartiers[1] || city.name;

  if (loc === "fr") {
    return [
      {
        icon: "solar:heart-pulse-linear",
        title: "Séances de dialyse",
        desc: `Transport régulier 3 fois par semaine vers le centre de dialyse depuis ${city.name}. Prise en charge à domicile, accompagnement jusqu’au service, attente pendant la séance (3-4h), retour à domicile. Prise en charge CPAM 100 % en ALD.`,
        example: `Patient de ${q1} transporté 3 fois par semaine vers ${mainHospital} pour hémodialyse. Même chauffeur à chaque séance, forfait série 10 aller-retour, tiers payant intégral.`,
      },
      {
        icon: "solar:test-tube-linear",
        title: "Chimiothérapie",
        desc: `Transport vers les centres de chimiothérapie à ${city.name}. Le chauffeur adapte sa conduite au confort du patient (conduite douce, température contrôlée). Retour sécurisé après la séance, même en cas de fatigue ou de nausées.`,
        example: `Patiente de ${q2} suivant un protocole de chimio toutes les 3 semaines à ${tmCity.hospitals[1] || mainHospital}. Véhicule climatisé, sac vomitoire à disposition, couverture chauffante en hiver.`,
      },
      {
        icon: "solar:running-2-linear",
        title: "Rééducation et kinésithérapie",
        desc: `Transport quotidien ou plurihebdomadaire vers les centres de rééducation à ${city.name}. Idéal pour les patients post-opératoires (prothèse de hanche, genou) ou post-AVC nécessitant une kinésithérapie intensive.`,
        example: `Patient opéré de la hanche transporté 5 jours par semaine vers le centre de rééducation depuis ${city.name}. Aide à la montée/descente du véhicule, transport du fauteuil roulant.`,
      },
      {
        icon: "solar:stethoscope-linear",
        title: "Consultations spécialistes",
        desc: `Transport ponctuel vers les consultations spécialistes (cardiologue, oncologue, néphrologue, neurologue) dans les hôpitaux de ${city.name} ou ${isIDF(city) ? "de Paris" : "de la région"}.`,
        example: `Patient âgé de ${city.name} se rendant à une consultation cardiologique à ${mainHospital}. Prise en charge à domicile, accompagnement jusqu’au service, attente, retour.`,
      },
      {
        icon: "mdi:wheelchair-accessibility",
        title: "Personnes à mobilité réduite (PMR)",
        desc: `Véhicules spécialement équipés pour le transport de patients en fauteuil roulant à ${city.name}. Rampe d’accès, fixations intérieures, espace adapté.`,
        example: `Patiente en fauteuil roulant de ${city.name} transportée 2 fois par semaine vers son centre de soins. Véhicule van PMR avec rampe électrique, chauffeur formé à la manipulation du fauteuil.`,
      },
      {
        icon: "solar:hospital-linear",
        title: "Hospitalisations programmées",
        desc: `Transport aller vers l’hôpital pour une hospitalisation programmée à ${city.name}, puis retour à la sortie. Le chauffeur vous aide avec vos bagages et vous accompagne jusqu’au service d’accueil.`,
        example: `Patient de ${city.name} admis pour une intervention chirurgicale à ${mainHospital}. Aller le dimanche soir, retour le vendredi. Aide aux bagages, accompagnement à l’accueil.`,
      },
    ];
  }

  return [
    {
      icon: "solar:heart-pulse-linear",
      title: "Dialysis sessions",
      desc: `Regular transport 3 times a week to the dialysis centre from ${city.name}. Home pickup, accompaniment to the department, waiting during the session (3-4h), return home. 100% CPAM coverage under ALD.`,
      example: `Patient from ${q1} transported 3 times a week to ${mainHospital} for haemodialysis. Same driver each session, 10 round-trip series package, full third-party billing.`,
    },
    {
      icon: "solar:test-tube-linear",
      title: "Chemotherapy",
      desc: `Transport to chemotherapy centres in ${city.name}. The driver adapts their driving for patient comfort (smooth driving, controlled temperature). Safe return after the session, even in case of fatigue or nausea.`,
      example: `Patient from ${q2} following a chemotherapy protocol every 3 weeks at ${tmCity.hospitals[1] || mainHospital}. Air-conditioned vehicle, sickness bag available, heated blanket in winter.`,
    },
    {
      icon: "solar:running-2-linear",
      title: "Rehabilitation and physiotherapy",
      desc: `Daily or multi-weekly transport to rehabilitation centres in ${city.name}. Ideal for post-operative patients (hip or knee replacement) or post-stroke patients requiring intensive physiotherapy.`,
      example: `Hip replacement patient transported 5 days a week to the rehabilitation centre from ${city.name}. Assistance getting in and out of the vehicle, wheelchair transport.`,
    },
    {
      icon: "solar:stethoscope-linear",
      title: "Specialist consultations",
      desc: `One-off transport to specialist consultations (cardiologist, oncologist, nephrologist, neurologist) in hospitals in ${city.name} or ${isIDF(city) ? "Paris" : "the surrounding area"}.`,
      example: `Elderly patient from ${city.name} attending a cardiology consultation at ${mainHospital}. Home pickup, accompaniment to the department, waiting, return.`,
    },
    {
      icon: "mdi:wheelchair-accessibility",
      title: "Wheelchair patients (PMR)",
      desc: `Specially equipped vehicles for transporting wheelchair patients in ${city.name}. Access ramp, internal securing systems, adapted space.`,
      example: `Wheelchair patient from ${city.name} transported twice a week to their care centre. PMR van with electric ramp, driver trained in wheelchair handling.`,
    },
    {
      icon: "solar:hospital-linear",
      title: "Scheduled hospitalisations",
      desc: `Outward transport to hospital for a scheduled admission in ${city.name}, then return on discharge. The driver helps with your luggage and accompanies you to the admissions desk.`,
      example: `Patient from ${city.name} admitted for surgery at ${mainHospital}. Outward journey on Sunday evening, return on Friday. Luggage assistance, accompaniment to admissions.`,
    },
  ];
}

// ─── Advantages (6 items) ─────────────────────────

export function generateTmAdvantages(city: City, loc: Loc): TmAdvantage[] {
  if (loc === "fr") {
    return [
      {
        icon: "solar:shield-check-linear",
        title: "Conventionné CPAM — Tiers payant",
        shortDesc: "Pas d’avance de frais, la CPAM règle directement le taxi",
        longDesc: `Le taxi médical conventionné à ${city.name} fonctionne en tiers payant : la CPAM règle directement le chauffeur, vous n’avancez aucun frais (en ALD, AT, CMU-C). Pour les patients non exonérés, le ticket modérateur de 35 % est facturé à la mutuelle. La télétransmission des feuilles de soins est réalisée en temps réel depuis le véhicule.`,
      },
      {
        icon: "mdi:wheelchair-accessibility",
        title: "Véhicules adaptés PMR",
        shortDesc: "Rampe d’accès, fixations fauteuil roulant, espace adapté",
        longDesc: `Notre flotte de taxi médical à ${city.name} inclut des véhicules spécialement aménagés pour les personnes à mobilité réduite : vans avec rampe d’accès électrique ou manuelle, fixations au sol pour fauteuil roulant, espace intérieur suffisant pour les fauteuils électriques. Les chauffeurs sont formés à la manipulation des fauteuils et à l’aide à la montée et descente du véhicule.`,
      },
      {
        icon: "solar:clock-circle-linear",
        title: "Ponctualité garantie",
        shortDesc: "Arrivée 10 minutes avant l’heure de rendez-vous médical",
        longDesc: `La ponctualité est critique pour les transports médicaux : un retard à la dialyse peut décaler l’ensemble du planning du centre, un retard en chimiothérapie peut reporter la séance. Nos chauffeurs à ${city.name} s’engagent à arriver 10 minutes avant l’heure de votre rendez-vous. Le temps de trajet est calculé en tenant compte des conditions de circulation en temps réel et des spécificités de ${city.name}.`,
      },
      {
        icon: "solar:user-heart-linear",
        title: "Chauffeurs formés au médical",
        shortDesc: "Formation premiers secours, accueil patient, gestes adaptés",
        longDesc: `Nos chauffeurs de taxi médical à ${city.name} suivent une formation spécifique au transport sanitaire : premiers secours (PSC1), gestes d’aide aux personnes à mobilité réduite, accueil et communication avec les patients fragillisés, conduite adaptée (douce, sans à-coups). Ils sont également formés aux protocoles d’hygiène spécifiques au transport sanitaire.`,
      },
      {
        icon: "solar:calendar-minimalistic-linear",
        title: "Planning récurrent automatique",
        shortDesc: "Un seul appel pour programmer toutes vos séances de la semaine",
        longDesc: `Pour les transports réguliers (dialyse, chimio, rééducation), nous mettons en place un planning récurrent à ${city.name}. Vous appelez une seule fois, nous programmons tous vos trajets pour la semaine ou le mois. Le même chauffeur est attribué à chaque séance dans la mesure du possible, créant une relation de confiance essentielle pour le bien-être du patient.`,
      },
      {
        icon: "solar:route-linear",
        title: "Voies de bus et accès taxis",
        shortDesc: "Trajets plus rapides grâce aux couloirs réservés",
        longDesc: `En tant que taxis professionnels, nos chauffeurs de taxi médical à ${city.name} accèdent aux voies de bus et aux files réservées aux taxis. C’est un avantage majeur pour les transports médicaux ${isIDF(city) ? "en Île-de-France, où les couloirs de bus représentent des dizaines de kilomètres de voies prioritaires" : "en agglomération, où les embouteillages peuvent retarder un rendez-vous médical"}. Un trajet plus rapide, c’est aussi moins de fatigue pour le patient.`,
      },
    ];
  }

  return [
    {
      icon: "solar:shield-check-linear",
      title: "CPAM approved — Third-party billing",
      shortDesc: "No upfront payment, CPAM pays the taxi directly",
      longDesc: `The CPAM-approved medical taxi in ${city.name} operates on third-party billing: CPAM pays the driver directly, you pay nothing upfront (under ALD, AT, CMU-C). For non-exempt patients, the 35% co-payment is invoiced to your supplementary insurance. Electronic claims are processed in real time from the vehicle.`,
    },
    {
      icon: "mdi:wheelchair-accessibility",
      title: "Wheelchair-accessible vehicles (PMR)",
      shortDesc: "Access ramp, wheelchair securing, adapted space",
      longDesc: `Our medical taxi fleet in ${city.name} includes specially adapted vehicles for people with reduced mobility: vans with electric or manual access ramps, floor-mounted wheelchair securing systems, and sufficient interior space for powered wheelchairs. Drivers are trained in wheelchair handling and patient assistance getting in and out of the vehicle.`,
    },
    {
      icon: "solar:clock-circle-linear",
      title: "Guaranteed punctuality",
      shortDesc: "Arrival 10 minutes before your medical appointment",
      longDesc: `Punctuality is critical for medical transports: a delay to dialysis can shift the entire centre's schedule, a delay to chemotherapy can postpone the session. Our drivers in ${city.name} commit to arriving 10 minutes before your appointment time. Travel time is calculated using real-time traffic conditions and local knowledge of ${city.name}.`,
    },
    {
      icon: "solar:user-heart-linear",
      title: "Medically trained drivers",
      shortDesc: "First aid training, patient care, adapted techniques",
      longDesc: `Our medical taxi drivers in ${city.name} undergo specific healthcare transport training: first aid (PSC1), techniques for assisting people with reduced mobility, welcoming and communicating with vulnerable patients, and adapted driving (smooth, without sudden movements). They are also trained in hygiene protocols specific to healthcare transport.`,
    },
    {
      icon: "solar:calendar-minimalistic-linear",
      title: "Automatic recurring schedule",
      shortDesc: "One call to schedule all your weekly sessions",
      longDesc: `For regular transports (dialysis, chemotherapy, rehabilitation), we set up a recurring schedule in ${city.name}. You call once, we program all your journeys for the week or month. The same driver is assigned to each session where possible, creating a trust relationship essential for patient wellbeing.`,
    },
    {
      icon: "solar:route-linear",
      title: "Bus lanes and taxi access",
      shortDesc: "Faster journeys through reserved lanes",
      longDesc: `As professional taxis, our medical taxi drivers in ${city.name} have access to bus lanes and taxi-reserved lanes. This is a major advantage for medical transports ${isIDF(city) ? "in Île-de-France, where bus lanes represent dozens of kilometres of priority routes" : "in urban areas, where traffic jams can delay a medical appointment"}. A faster journey also means less fatigue for the patient.`,
    },
  ];
}

// ─── Testimonials (4 items) ─────────────────────────

export function generateTmTestimonials(city: City, tmCity: TaxiMedicalCityData, loc: Loc): TmTestimonial[] {
  const mainHospital = tmCity.hospitals[0];

  if (loc === "fr") {
    return [
      {
        text: `Je suis dialysé 3 fois par semaine à ${mainHospital} depuis ${city.name}. Le chauffeur TaxiNeo est toujours là 10 minutes avant l’heure, il m’aide à monter dans le véhicule et m’accompagne jusqu’au service. Après 4 heures de dialyse, il est là pour me ramener. Le tiers payant fait que je ne paie rien. Après 2 ans, c’est devenu un ami.`,
        name: "Robert M.",
        initials: "RM",
        role: `Patient dialysé, ${city.name}`,
      },
      {
        text: `Ma mère suit un traitement de chimiothérapie à ${tmCity.hospitals[1] || mainHospital}. Le taxi médical la prend à la maison, la conduit doucement (elle est très sensible aux mouvements après les séances), attend et la ramène. Le même chauffeur à chaque fois, il connaît ses besoins. La prise en charge CPAM est totale en ALD.`,
        name: "Catherine D.",
        initials: "CD",
        role: `Fille de patiente, ${city.name}`,
      },
      {
        text: `Après mon opération du genou, j’ai eu besoin d’un taxi médical à ${city.name} pour mes séances de kiné quotidiennes pendant 6 semaines. Le chauffeur transportait mon fauteuil roulant, m’aidait à chaque transfert. Le forfait série de 10 aller-retour était très avantageux.`,
        name: "Philippe G.",
        initials: "PG",
        role: `Patient en rééducation, ${city.name}`,
      },
      {
        text: `En tant qu’infirmière coordinatrice, je recommande TaxiNeo pour le transport des patients de notre service à ${mainHospital}. Ponctualité irréprochable, véhicules propres, chauffeurs respectueux et patients. Le conventionnement CPAM simplifie tout pour nos patients âgés.`,
        name: "Nathalie P.",
        initials: "NP",
        role: `Infirmière coordinatrice, ${mainHospital}`,
      },
    ];
  }

  return [
    {
      text: `I’ve been on dialysis 3 times a week at ${mainHospital} from ${city.name}. The TaxiNeo driver is always there 10 minutes early, helps me into the vehicle and accompanies me to the department. After 4 hours of dialysis, they’re there to take me home. With third-party billing, I pay nothing. After 2 years, they’ve become a friend.`,
      name: "Robert M.",
      initials: "RM",
      role: `Dialysis patient, ${city.name}`,
    },
    {
      text: `My mother is undergoing chemotherapy at ${tmCity.hospitals[1] || mainHospital}. The medical taxi picks her up at home, drives gently (she’s very sensitive to movement after sessions), waits and brings her back. Same driver every time, they know her needs. The CPAM coverage is total under ALD.`,
      name: "Catherine D.",
      initials: "CD",
      role: `Patient’s daughter, ${city.name}`,
    },
    {
      text: `After my knee surgery, I needed a medical taxi in ${city.name} for daily physiotherapy sessions for 6 weeks. The driver transported my wheelchair, helped me at every transfer. The 10 round-trip series package was excellent value.`,
      name: "Philippe G.",
      initials: "PG",
      role: `Rehabilitation patient, ${city.name}`,
    },
    {
      text: `As a coordinating nurse, I recommend TaxiNeo for transporting patients from our department at ${mainHospital}. Impeccable punctuality, clean vehicles, respectful and patient drivers. The CPAM approval simplifies everything for our elderly patients.`,
      name: "Nathalie P.",
      initials: "NP",
      role: `Coordinating nurse, ${mainHospital}`,
    },
  ];
}

// ─── FAQ (10 items) ─────────────────────────

export function generateTmFAQ(city: City, loc: Loc): TmFAQ[] {
  if (loc === "fr") {
    return [
      {
        question: `Qu’est-ce qu’un taxi médical conventionné à ${city.name} ?`,
        answer: `Un taxi médical conventionné est un taxi ayant signé une convention avec la CPAM pour le transport sanitaire assis professionnalisé (TAP). Le chauffeur est formé au transport de patients, le véhicule est agréé, et le service fonctionne en tiers payant : la CPAM règle directement le taxi. À ${city.name}, tous nos chauffeurs partenaires sont conventionnés CPAM.`,
      },
      {
        question: `Comment bénéficier du tiers payant pour mon taxi médical à ${city.name} ?`,
        answer: `Pour bénéficier du tiers payant, vous devez disposer d’une prescription médicale de transport (PMT) établie par votre médecin AVANT le transport. Présentez la PMT, votre carte Vitale et votre carte de mutuelle au chauffeur. Si vous êtes en ALD, AT, invalidité ou CMU-C, la prise en charge est à 100 % sans avance de frais. Sinon, la CPAM couvre 65 % et votre mutuelle le complément.`,
      },
      {
        question: `Ai-je besoin d’une prescription médicale pour prendre un taxi médical ?`,
        answer: `Oui, la prescription médicale de transport (PMT) est obligatoire pour le remboursement par la CPAM. Elle doit être établie AVANT le transport par votre médecin traitant ou le médecin hospitalier. Sans prescription, le transport sera facturé comme un taxi classique, sans remboursement. En urgence, la prescription peut être établie a posteriori par le médecin hospitalier.`,
      },
      {
        question: `Quels traitements sont couverts par le taxi médical à ${city.name} ?`,
        answer: `Le taxi médical conventionné couvre tous les transports liés à des soins médicaux prescrits : dialyse rénale, chimiothérapie, radiothérapie, rééducation fonctionnelle, consultations spécialistes, hospitalisations programmées, examens médicaux (IRM, scanner, biopsie), soins post-opératoires. La condition est d’avoir une prescription médicale de transport.`,
      },
      {
        question: `Combien coûte un taxi médical à ${city.name} ?`,
        answer: `Le tarif du taxi médical à ${city.name} est calculé selon le tarif conventionnel fixé par la CPAM (forfait de prise en charge + kilomètres). En tiers payant, vous ne payez rien si vous êtes en ALD, AT ou CMU-C. Pour les patients non exonérés, la part restante (35 %) est généralement couverte par la mutuelle. Nous proposons des forfaits séries (5 ou 10 aller-retour) pour les traitements réguliers.`,
      },
      {
        question: `Avez-vous des véhicules adaptés aux fauteuils roulants à ${city.name} ?`,
        answer: `Oui, notre flotte à ${city.name} comprend des véhicules PMR (Personnes à Mobilité Réduite) : vans équipés de rampes d’accès électriques ou manuelles, de fixations au sol pour fauteuil roulant, et d’un espace intérieur suffisant pour les fauteuils électriques. Précisez votre besoin PMR lors de la réservation pour garantir la disponibilité d’un véhicule adapté.`,
      },
      {
        question: `Le chauffeur attend-il pendant ma consultation ou ma séance ?`,
        answer: `Oui, pour les transports aller-retour, le chauffeur de taxi médical attend pendant toute la durée de votre consultation ou séance à ${city.name}. Pour les séances de dialyse (3-4h), le chauffeur reste disponible et vous reprend dès la fin de la séance. Le temps d’attente est inclus dans le tarif conventionnel et pris en charge par la CPAM.`,
      },
      {
        question: `Comment réserver un taxi médical régulier à ${city.name} ?`,
        answer: `Pour les transports réguliers (dialyse, chimio, rééducation), appelez-nous au 07 59 59 29 34 ou remplissez le formulaire en ligne. Nous mettons en place un planning récurrent : mêmes jours, mêmes horaires, même chauffeur autant que possible. Une seule prescription médicale de transport couvre l’ensemble de la série. Modification et annulation possibles avec un préavis de 12h.`,
      },
      {
        question: `Quelle est la différence entre un taxi médical et un VSL ?`,
        answer: `Le taxi médical (TAP) est un taxi conventionné CPAM pour le transport assis de patients autonomes ou semi-autonomes. Le VSL (Véhicule Sanitaire Léger) est exploité par une société d’ambulances et convient aux patients nécessitant une surveillance légère (perfusion, oxygène). Le taxi médical est généralement moins cher, plus rapide (accès voies de bus) et offre un service porte-à-porte plus personnalisé.`,
      },
      {
        question: `Un accompagnant peut-il voyager dans le taxi médical ?`,
        answer: `Oui, un accompagnant peut voyager gratuitement dans le taxi médical à ${city.name}. C’est fréquent pour les enfants accompagnés d’un parent, les patients âgés accompagnés d’un proche, ou les patients dont l’état nécessite la présence d’un aidant. L’accompagnant n’engendre pas de coût supplémentaire. Si la présence de l’accompagnant est médicalement justifiée, elle peut être mentionnée sur la prescription.`,
      },
    ];
  }

  return [
    {
      question: `What is a CPAM-approved medical taxi in ${city.name}?`,
      answer: `A CPAM-approved medical taxi is a taxi that has signed an agreement with the CPAM (French national health insurance) for professional seated healthcare transport (TAP). The driver is trained in patient transport, the vehicle is certified, and the service operates on third-party billing: CPAM pays the taxi directly. In ${city.name}, all our partner drivers are CPAM-approved.`,
    },
    {
      question: `How do I qualify for third-party billing for my medical taxi in ${city.name}?`,
      answer: `To qualify for third-party billing, you need a medical transport prescription (PMT) issued by your doctor BEFORE the transport. Present the PMT, your Carte Vitale and your supplementary insurance card to the driver. If you have ALD, AT, disability or CMU-C status, coverage is 100% with no upfront payment. Otherwise, CPAM covers 65% and your supplementary insurance covers the rest.`,
    },
    {
      question: `Do I need a medical prescription for a medical taxi?`,
      answer: `Yes, a medical transport prescription (PMT) is mandatory for CPAM reimbursement. It must be issued BEFORE the transport by your GP or hospital doctor. Without a prescription, the transport will be charged as a standard taxi ride, with no reimbursement. In emergencies, the prescription can be issued retrospectively by the hospital doctor.`,
    },
    {
      question: `What treatments are covered by medical taxi in ${city.name}?`,
      answer: `The CPAM-approved medical taxi covers all transport related to prescribed medical care: kidney dialysis, chemotherapy, radiotherapy, functional rehabilitation, specialist consultations, scheduled hospitalisations, medical examinations (MRI, CT scan, biopsy), post-operative care. The requirement is having a medical transport prescription.`,
    },
    {
      question: `How much does a medical taxi cost in ${city.name}?`,
      answer: `Medical taxi fares in ${city.name} are calculated according to the CPAM-agreed rate (pickup fee + kilometres). With third-party billing, you pay nothing if you have ALD, AT or CMU-C status. For non-exempt patients, the remaining 35% is generally covered by supplementary insurance. We offer series packages (5 or 10 round trips) for regular treatments.`,
    },
    {
      question: `Do you have wheelchair-accessible vehicles in ${city.name}?`,
      answer: `Yes, our fleet in ${city.name} includes PMR (reduced mobility) vehicles: vans equipped with electric or manual access ramps, floor-mounted wheelchair securing systems, and sufficient interior space for powered wheelchairs. Specify your PMR requirement when booking to guarantee the availability of an adapted vehicle.`,
    },
    {
      question: `Does the driver wait during my consultation or session?`,
      answer: `Yes, for round-trip transports, the medical taxi driver waits for the entire duration of your consultation or session in ${city.name}. For dialysis sessions (3-4h), the driver remains available and picks you up as soon as the session ends. Waiting time is included in the agreed rate and covered by CPAM.`,
    },
    {
      question: `How do I book a regular medical taxi in ${city.name}?`,
      answer: `For regular transports (dialysis, chemotherapy, rehabilitation), call us at +33 7 59 59 29 34 or fill in the online form. We set up a recurring schedule: same days, same times, same driver where possible. A single medical transport prescription covers the entire series. Changes and cancellations are possible with 12 hours' notice.`,
    },
    {
      question: `What is the difference between a medical taxi and a VSL?`,
      answer: `A medical taxi (TAP) is a CPAM-approved taxi for seated transport of autonomous or semi-autonomous patients. A VSL (Light Sanitary Vehicle) is operated by an ambulance company and suits patients requiring light monitoring (IV drip, oxygen). Medical taxis are generally cheaper, faster (bus lane access) and offer a more personalised door-to-door service.`,
    },
    {
      question: `Can a companion travel in the medical taxi?`,
      answer: `Yes, a companion can travel free of charge in the medical taxi in ${city.name}. This is common for children accompanied by a parent, elderly patients accompanied by a relative, or patients whose condition requires a carer's presence. The companion incurs no additional cost. If the companion's presence is medically justified, it can be noted on the prescription.`,
    },
  ];
}

// ─── How It Works (4 steps) ─────────────────────────

export function generateTmHowItWorks(city: City, loc: Loc): TmHowItWorksStep[] {
  if (loc === "fr") {
    return [
      {
        step: "1",
        title: "Obtenez votre prescription",
        desc: `Demandez à votre médecin traitant ou au médecin hospitalier une prescription médicale de transport (PMT) mentionnant le mode « taxi » ou « TAP ». Cette prescription est obligatoire pour la prise en charge CPAM de votre taxi médical à ${city.name}.`,
      },
      {
        step: "2",
        title: "Réservez votre taxi médical",
        desc: `Appelez-nous au 07 59 59 29 34 ou remplissez le formulaire en ligne. Indiquez la date, l’heure de rendez-vous, l’établissement de santé, le type de véhicule souhaité (berline ou van PMR), et si un accompagnant sera présent. Pour les séries, un seul appel suffit pour programmer toutes les séances.`,
      },
      {
        step: "3",
        title: "Le chauffeur vous transporte",
        desc: `Le jour du rendez-vous, votre chauffeur se présente à votre domicile à ${city.name} avec 10 minutes d’avance. Il vous aide à monter dans le véhicule, vous conduit directement à l’établissement de santé, vous accompagne jusqu’au service, attend la fin de votre séance, puis vous ramène chez vous.`,
      },
      {
        step: "4",
        title: "La CPAM règle directement",
        desc: `À la fin du transport, le chauffeur procède à la télétransmission de la feuille de soins avec votre carte Vitale. La CPAM règle directement le taxi. Vous n’avancez aucun frais si vous êtes en ALD, AT, CMU-C ou invalidité. Sinon, seul le ticket modérateur (35 %) reste à votre charge ou est facturé à votre mutuelle.`,
      },
    ];
  }

  return [
    {
      step: "1",
      title: "Get your prescription",
      desc: `Ask your GP or hospital doctor for a medical transport prescription (PMT) specifying “taxi” or “TAP” mode. This prescription is mandatory for CPAM coverage of your medical taxi in ${city.name}.`,
    },
    {
      step: "2",
      title: "Book your medical taxi",
      desc: `Call us at +33 7 59 59 29 34 or fill in the online form. Indicate the date, appointment time, healthcare facility, preferred vehicle type (sedan or PMR van), and whether a companion will be present. For series, one call is enough to schedule all sessions.`,
    },
    {
      step: "3",
      title: "The driver transports you",
      desc: `On the day of the appointment, your driver arrives at your home in ${city.name} 10 minutes early. They help you into the vehicle, drive you directly to the healthcare facility, accompany you to the department, wait for your session to end, then take you home.`,
    },
    {
      step: "4",
      title: "CPAM pays directly",
      desc: `At the end of the transport, the driver processes the electronic claims form with your Carte Vitale. CPAM pays the taxi directly. You pay nothing upfront if you have ALD, AT, CMU-C or disability status. Otherwise, only the co-payment (35%) remains, which is usually covered by your supplementary insurance.`,
    },
  ];
}

// ─── Main generator ─────────────────────────

export function generateTmContent(city: City, tmCity: TaxiMedicalCityData, loc: Loc): TmGeneratedContent {
  const meta = generateTmMeta(city, loc);
  const hero = generateTmHero(city, loc);
  const intro = generateTmIntro(city, tmCity, loc);

  return {
    ...meta,
    ...hero,
    ...intro,
    hospitalsGuide: generateTmHospitalsGuide(city, tmCity, loc),
    quartiersAccess: generateTmQuartiersAccess(city, loc),
    practicalInfo: generateTmPracticalInfo(city, loc),
    comparisonText: generateTmComparison(city, loc),
    useCases: generateTmUseCases(city, tmCity, loc),
    advantages: generateTmAdvantages(city, loc),
    testimonials: generateTmTestimonials(city, tmCity, loc),
    faq: generateTmFAQ(city, loc),
    howItWorks: generateTmHowItWorks(city, loc),
    nearbyTmCities: city.nearbyCities,
  };
}
