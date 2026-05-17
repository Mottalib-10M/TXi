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
      metaTitle: `Taxi m\u00e9dical ${city.name} \u2014 Conventionn\u00e9 CPAM | Prise en charge S\u00e9cu`,
      metaDescription: `Taxi m\u00e9dical conventionn\u00e9 CPAM \u00e0 ${city.name}. Transport assis professionnalis\u00e9 (TAP) vers h\u00f4pitaux, dialyse, chimioth\u00e9rapie, r\u00e9\u00e9ducation. Tiers payant, v\u00e9hicule PMR, devis gratuit.`,
    };
  }
  return {
    metaTitle: `Medical taxi ${city.name} \u2014 CPAM approved | Health insurance covered`,
    metaDescription: `CPAM-approved medical taxi in ${city.name}. Professional seated transport (TAP) to hospitals, dialysis, chemotherapy, rehabilitation. Third-party billing, wheelchair-accessible vehicles, free quote.`,
  };
}

// ─── Hero ─────────────────────────────────────────────

export function generateTmHero(city: City, loc: Loc): { heroTitle: string; heroSubtitle: string } {
  if (loc === "fr") {
    return {
      heroTitle: `Taxi m\u00e9dical conventionn\u00e9 \u00e0 ${city.name}`,
      heroSubtitle: `Transport sanitaire assis professionnalis\u00e9 (TAP) \u00e0 ${city.name}. Chauffeur form\u00e9 au transport de patients, v\u00e9hicule adapt\u00e9 PMR, prise en charge CPAM en tiers payant. Dialyse, chimioth\u00e9rapie, consultations sp\u00e9cialistes, r\u00e9\u00e9ducation.`,
    };
  }
  return {
    heroTitle: `Medical taxi in ${city.name} \u2014 CPAM approved`,
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
      introBody: `${city.name}, commune de ${pop} habitants ${isIDF(city) ? "en \u00cele-de-France" : "en France"}, dispose d\u2019un r\u00e9seau hospitalier dense qui n\u00e9cessite un acc\u00e8s fiable au transport m\u00e9dical. Le taxi m\u00e9dical conventionn\u00e9 CPAM \u00e0 ${city.name} est la solution de r\u00e9f\u00e9rence pour les patients qui doivent se rendre r\u00e9guli\u00e8rement dans un \u00e9tablissement de sant\u00e9 : h\u00f4pital, centre de dialyse, service de chimioth\u00e9rapie, cabinet de kin\u00e9sith\u00e9rapie ou consultation sp\u00e9cialiste.

Le transport assis professionnalis\u00e9 (TAP) est un mode de transport sanitaire r\u00e9glement\u00e9 par le Code de la sant\u00e9 publique. Contrairement \u00e0 une course de taxi classique, le taxi m\u00e9dical conventionn\u00e9 implique un v\u00e9hicule agr\u00e9\u00e9 par la CPAM, un chauffeur form\u00e9 au transport de personnes malades ou \u00e0 mobilit\u00e9 r\u00e9duite, et la possibilit\u00e9 de b\u00e9n\u00e9ficier du tiers payant \u2014 c\u2019est-\u00e0-dire que la CPAM r\u00e8gle directement le taxi, sans avance de frais pour le patient.

\u00c0 ${city.name}, nos chauffeurs assurent quotidiennement des transports vers ${hospitals}. Chaque trajet est organis\u00e9 en coordination avec votre \u00e9tablissement de sant\u00e9 pour respecter vos horaires de rendez-vous. Le chauffeur vous prend en charge \u00e0 domicile, vous accompagne jusqu\u2019\u00e0 l\u2019accueil de l\u2019\u00e9tablissement, attend la fin de votre s\u00e9ance ou consultation, puis vous ram\u00e8ne chez vous.

Pour les patients suivant un traitement r\u00e9gulier (dialyse 3 fois par semaine, chimioth\u00e9rapie toutes les 2 semaines, s\u00e9ances de kin\u00e9sith\u00e9rapie quotidiennes), le taxi m\u00e9dical conventionn\u00e9 \u00e0 ${city.name} propose des forfaits s\u00e9ries (5 ou 10 aller-retour) qui r\u00e9duisent le co\u00fbt par trajet et simplifient la gestion administrative. Un seul bon de transport couvre l\u2019ensemble de la s\u00e9rie.`,
      introComplement: `Le conventionnement CPAM est le point central du taxi m\u00e9dical \u00e0 ${city.name}. Pour en b\u00e9n\u00e9ficier, le patient doit disposer d\u2019une prescription m\u00e9dicale de transport (PMT) \u00e9tablie par son m\u00e9decin traitant ou le m\u00e9decin hospitalier avant le transport. Cette prescription indique le mode de transport prescrit (taxi, VSL ou ambulance), le lieu de consultation et la dur\u00e9e pr\u00e9visible du traitement.

Les patients en affection de longue dur\u00e9e (ALD), en accident du travail (AT), en invalidit\u00e9, ou b\u00e9n\u00e9ficiant de la CMU-C ou de l\u2019ACS b\u00e9n\u00e9ficient d\u2019une prise en charge \u00e0 100 % par la S\u00e9curit\u00e9 sociale. Pour les autres patients, la prise en charge est de 65 %, le compl\u00e9ment pouvant \u00eatre assur\u00e9 par la mutuelle.

Nos ${drivers}+ chauffeurs partenaires \u00e0 ${city.name} sont tous conventionn\u00e9s CPAM, \u00e9quip\u00e9s pour le tiers payant (t\u00e9l\u00e9transmission des feuilles de soins), et form\u00e9s \u00e0 l\u2019accueil des patients fragiles, \u00e2g\u00e9s ou \u00e0 mobilit\u00e9 r\u00e9duite. Chaque v\u00e9hicule est \u00e9quip\u00e9 d\u2019une trousse de premiers secours, d\u2019un brancard et, pour les v\u00e9hicules PMR, d\u2019une rampe d\u2019acc\u00e8s et de fixations pour fauteuil roulant.`,
    };
  }

  return {
    introBody: `${city.name}, a municipality of ${pop} inhabitants ${isIDF(city) ? "in \u00cele-de-France" : "in France"}, has a dense hospital network that requires reliable medical transport. The CPAM-approved medical taxi in ${city.name} is the go-to solution for patients who need regular transport to healthcare facilities: hospitals, dialysis centres, chemotherapy units, physiotherapy clinics or specialist consultations.

Professional seated transport (TAP \u2014 Transport Assis Professionnalis\u00e9) is a healthcare transport mode regulated by the French Public Health Code. Unlike a standard taxi ride, an approved medical taxi involves a CPAM-certified vehicle, a driver trained in transporting patients with reduced mobility or medical conditions, and the option for third-party billing (tiers payant) \u2014 meaning the CPAM pays the taxi directly, with no upfront cost for the patient.

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
      return `**${hospital}** \u2014 Le taxi m\u00e9dical conventionn\u00e9 pour ${hospital} \u00e0 ${city.name} assure un trajet direct depuis votre domicile, sans d\u00e9tour ni attente inutile. Notre chauffeur conna\u00eet les acc\u00e8s sp\u00e9cifiques de ${hospital} : entr\u00e9e des urgences, d\u00e9pose patients, acc\u00e8s handicap\u00e9s, parking r\u00e9serv\u00e9 aux taxis m\u00e9dicaux. Pour les patients en dialyse ou en chimioth\u00e9rapie \u00e0 ${hospital}, le chauffeur vous accompagne jusqu\u2019au service concern\u00e9, attend la fin de la s\u00e9ance (g\u00e9n\u00e9ralement 3 \u00e0 4 heures pour la dialyse), puis vous reconduit \u00e0 domicile. Le tiers payant est appliqu\u00e9 syst\u00e9matiquement pour ${hospital}, sous r\u00e9serve de pr\u00e9sentation de la prescription m\u00e9dicale de transport et de la carte Vitale.`;
    }
    return `**${hospital}** \u2014 The CPAM-approved medical taxi to ${hospital} in ${city.name} provides a direct journey from your home, with no detours or unnecessary waiting. Our driver knows the specific access points for ${hospital}: emergency entrance, patient drop-off, disabled access, and taxi-reserved parking. For dialysis or chemotherapy patients at ${hospital}, the driver accompanies you to the relevant department, waits for the session to end (typically 3 to 4 hours for dialysis), then takes you home. Third-party billing is systematically applied for ${hospital}, subject to presenting the medical transport prescription and Carte Vitale.`;
  });

  return paragraphs.join("\n\n");
}

// ─── Quartiers Access (~500 mots) ─────────────────────────

export function generateTmQuartiersAccess(city: City, loc: Loc): string {
  const paragraphs = city.quartiers.slice(0, 6).map((quartier) => {
    if (loc === "fr") {
      return `**${quartier}** \u2014 La prise en charge taxi m\u00e9dical depuis le quartier ${quartier} \u00e0 ${city.name} est assur\u00e9e par nos chauffeurs qui connaissent parfaitement les acc\u00e8s, les sens uniques et les zones de stationnement de ${quartier}. Pour les patients \u00e0 mobilit\u00e9 r\u00e9duite dans ${quartier}, le chauffeur se pr\u00e9sente \u00e0 votre porte, vous aide \u00e0 monter dans le v\u00e9hicule et s\u2019assure de votre confort tout au long du trajet. Les patients r\u00e9guliers de ${quartier} b\u00e9n\u00e9ficient souvent du m\u00eame chauffeur, cr\u00e9ant une relation de confiance essentielle pour les personnes fragilis\u00e9es par la maladie.`;
    }
    return `**${quartier}** \u2014 Medical taxi pickup from the ${quartier} area of ${city.name} is handled by drivers who know the access points, one-way streets and parking areas of ${quartier} inside out. For patients with reduced mobility in ${quartier}, the driver comes to your door, helps you into the vehicle and ensures your comfort throughout the journey. Regular patients from ${quartier} often benefit from the same driver, creating a trust relationship that is essential for people weakened by illness.`;
  });

  return paragraphs.join("\n\n");
}

// ─── Practical Info (~600 mots) ─────────────────────────

export function generateTmPracticalInfo(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `**Prescription m\u00e9dicale de transport (PMT)** \u2014 La PMT est obligatoire pour b\u00e9n\u00e9ficier du remboursement CPAM de votre taxi m\u00e9dical \u00e0 ${city.name}. Elle doit \u00eatre \u00e9tablie par votre m\u00e9decin traitant ou le m\u00e9decin hospitalier AVANT le transport. La prescription mentionne le mode de transport prescrit (taxi/TAP), la destination, le motif m\u00e9dical et le nombre de trajets autoris\u00e9s. Sans prescription pr\u00e9alable, le transport ne sera pas rembours\u00e9.

**Carte Vitale et mutuelle** \u2014 Pr\u00e9sentez votre carte Vitale et votre carte de mutuelle au chauffeur \u00e0 chaque trajet. Le chauffeur proc\u00e8de \u00e0 la t\u00e9l\u00e9transmission de la feuille de soins directement depuis le v\u00e9hicule. En tiers payant int\u00e9gral (ALD, AT, CMU-C), vous n\u2019avancez aucun frais. En tiers payant partiel, la part compl\u00e9mentaire est factur\u00e9e \u00e0 votre mutuelle.

**ALD et prise en charge \u00e0 100 %** \u2014 Les patients en Affection de Longue Dur\u00e9e (ALD) reconnue par la S\u00e9curit\u00e9 sociale b\u00e9n\u00e9ficient d\u2019une prise en charge \u00e0 100 % de leurs transports m\u00e9dicaux \u00e0 ${city.name}. C\u2019est le cas notamment pour la dialyse r\u00e9nale, les traitements de chimioth\u00e9rapie, la radioth\u00e9rapie, certaines maladies chroniques (diab\u00e8te, scl\u00e9rose en plaques, insuffisance cardiaque) et les soins post-AVC.

**Transport Assis Professionnalis\u00e9 (TAP)** \u2014 Le TAP est le mode de transport m\u00e9dical adapt\u00e9 aux patients qui peuvent se d\u00e9placer assis mais n\u00e9cessitent une aide ou une surveillance pendant le trajet. C\u2019est la cat\u00e9gorie de transport m\u00e9dical la plus fr\u00e9quente \u00e0 ${city.name}. Le taxi conventionn\u00e9 TAP est \u00e9quip\u00e9 pour accueillir les patients en fauteuil roulant (v\u00e9hicule PMR) ou les patients n\u00e9cessitant une position semi-allong\u00e9e.

**Documents \u00e0 fournir** \u2014 Pour votre premier taxi m\u00e9dical \u00e0 ${city.name}, pr\u00e9parez : (1) la prescription m\u00e9dicale de transport, (2) votre carte Vitale \u00e0 jour, (3) votre carte de mutuelle, (4) une pi\u00e8ce d\u2019identit\u00e9. Pour les s\u00e9ries de transports (dialyse, chimio), un seul bon de transport couvre l\u2019ensemble de la s\u00e9rie.

**R\u00e9servation et annulation** \u2014 R\u00e9servez votre taxi m\u00e9dical \u00e0 ${city.name} par t\u00e9l\u00e9phone au 07 59 59 29 34, via le formulaire en ligne ou par email. La r\u00e9servation est possible jusqu\u2019\u00e0 30 jours \u00e0 l\u2019avance. Pour les transports r\u00e9guliers, nous mettons en place un planning r\u00e9current automatique. L\u2019annulation est gratuite jusqu\u2019\u00e0 12 heures avant le transport.

**Urgences m\u00e9dicales** \u2014 Le taxi m\u00e9dical conventionn\u00e9 n\u2019est PAS un service d\u2019urgence. En cas d\u2019urgence m\u00e9dicale, appelez le 15 (SAMU) ou le 112. Le taxi m\u00e9dical est destin\u00e9 aux transports programm\u00e9s et r\u00e9guliers vers les \u00e9tablissements de sant\u00e9.`;
  }

  return `**Medical transport prescription (PMT)** \u2014 The PMT is mandatory to qualify for CPAM reimbursement of your medical taxi in ${city.name}. It must be issued by your GP or hospital doctor BEFORE the transport. The prescription states the prescribed transport mode (taxi/TAP), the destination, the medical reason and the number of authorised trips. Without a prior prescription, the transport will not be reimbursed.

**Carte Vitale and supplementary insurance** \u2014 Present your Carte Vitale and supplementary insurance card (mutuelle) to the driver at each trip. The driver processes the electronic claims form directly from the vehicle. With full third-party billing (ALD, AT, CMU-C), you pay nothing upfront. With partial third-party billing, the complementary portion is invoiced to your mutuelle.

**ALD and 100% coverage** \u2014 Patients with a recognised Long-Term Condition (ALD \u2014 Affection de Longue Dur\u00e9e) benefit from 100% coverage of their medical transport in ${city.name}. This includes kidney dialysis, chemotherapy, radiotherapy, certain chronic conditions (diabetes, multiple sclerosis, heart failure) and post-stroke care.

**Professional Seated Transport (TAP)** \u2014 TAP is the medical transport mode designed for patients who can travel seated but need assistance or monitoring during the journey. It is the most common category of medical transport in ${city.name}. The TAP-approved taxi is equipped to accommodate wheelchair patients (PMR vehicle) or patients requiring a semi-reclined position.

**Documents required** \u2014 For your first medical taxi in ${city.name}, please have ready: (1) the medical transport prescription, (2) your up-to-date Carte Vitale, (3) your supplementary insurance card, (4) a form of ID. For transport series (dialysis, chemotherapy), a single transport prescription covers the entire series.

**Booking and cancellation** \u2014 Book your medical taxi in ${city.name} by phone at +33 7 59 59 29 34, via the online form or by email. Booking is possible up to 30 days in advance. For regular transports, we set up an automatic recurring schedule. Cancellation is free up to 12 hours before the transport.

**Medical emergencies** \u2014 The CPAM-approved medical taxi is NOT an emergency service. In case of medical emergency, call 15 (SAMU) or 112. The medical taxi is intended for scheduled and regular transport to healthcare facilities.`;
}

// ─── Comparison (~800 mots) ─────────────────────────

export function generateTmComparison(city: City, loc: Loc): string {
  if (loc === "fr") {
    return `Le transport m\u00e9dical \u00e0 ${city.name} peut \u00eatre assur\u00e9 par trois types de v\u00e9hicules, chacun adapt\u00e9 \u00e0 un niveau de d\u00e9pendance diff\u00e9rent. Comprendre les diff\u00e9rences permet de choisir le mode de transport le plus adapt\u00e9 et le plus \u00e9conomique.

**Taxi m\u00e9dical conventionn\u00e9 (TAP)** \u2014 Le taxi m\u00e9dical conventionn\u00e9 CPAM \u00e0 ${city.name} est destin\u00e9 aux patients capables de se d\u00e9placer assis, avec ou sans aide. C\u2019est le mode de transport m\u00e9dical le plus fr\u00e9quent et le plus \u00e9conomique pour la S\u00e9curit\u00e9 sociale. Le patient est pris en charge \u00e0 domicile, transport\u00e9 directement \u00e0 l\u2019\u00e9tablissement de sant\u00e9, puis reconduit apr\u00e8s sa consultation ou s\u00e9ance. Le v\u00e9hicule peut \u00eatre une berline standard ou un v\u00e9hicule adapt\u00e9 PMR (fauteuil roulant).

**V\u00e9hicule Sanitaire L\u00e9ger (VSL)** \u2014 Le VSL est un v\u00e9hicule exploit\u00e9 par une entreprise d\u2019ambulances, avec un conducteur form\u00e9 au transport sanitaire. Il est prescrit pour les patients n\u00e9cessitant une surveillance l\u00e9g\u00e8re pendant le trajet (perfusion, oxyg\u00e8ne). Le VSL est g\u00e9n\u00e9ralement plus cher que le taxi m\u00e9dical car il int\u00e8gre le co\u00fbt d\u2019un \u00e9quipement sanitaire embarqu\u00e9. Pour les patients autonomes ou semi-autonomes, le taxi m\u00e9dical est souvent privil\u00e9gi\u00e9 par le m\u00e9decin prescripteur.

**Ambulance** \u2014 L\u2019ambulance est r\u00e9serv\u00e9e aux patients devant \u00eatre transport\u00e9s en position allong\u00e9e ou n\u00e9cessitant une surveillance m\u00e9dicale continue pendant le trajet. C\u2019est le mode de transport le plus co\u00fbteux, avec un \u00e9quipage de 2 personnes (ambulancier + auxiliaire). L\u2019ambulance est obligatoire pour certaines situations (post-op\u00e9ratoire imm\u00e9diat, patients intub\u00e9s, urgences vitales).

| Crit\u00e8re | Taxi m\u00e9dical (TAP) | VSL | Ambulance |
|---------|-------------------|-----|-----------|
| Position patient | Assis | Assis | Allong\u00e9 |
| Surveillance m\u00e9dicale | Non | L\u00e9g\u00e8re | Continue |
| \u00c9quipage | 1 chauffeur | 1 conducteur | 2 personnes |
| Co\u00fbt pour la CPAM | Le moins cher | Interm\u00e9diaire | Le plus cher |
| Acc\u00e8s fauteuil roulant | Oui (v\u00e9hicule PMR) | Oui | Oui |
| Tiers payant | Oui | Oui | Oui |
| Voies de bus | Oui | Non | Oui (urgence) |

Pour la grande majorit\u00e9 des transports m\u00e9dicaux r\u00e9guliers \u00e0 ${city.name} (dialyse, chimioth\u00e9rapie, r\u00e9\u00e9ducation, consultations), le taxi m\u00e9dical conventionn\u00e9 est le mode de transport le plus adapt\u00e9, le plus \u00e9conomique et le plus confortable.`;
  }

  return `Medical transport in ${city.name} can be provided by three types of vehicles, each suited to a different level of patient dependency. Understanding the differences helps choose the most appropriate and cost-effective transport mode.

**CPAM-approved medical taxi (TAP)** \u2014 The CPAM-approved medical taxi in ${city.name} is designed for patients who can travel seated, with or without assistance. It is the most common and most cost-effective medical transport mode for the national health insurance. The patient is picked up at home, transported directly to the healthcare facility, then taken home after their consultation or session. The vehicle can be a standard sedan or a wheelchair-accessible vehicle (PMR).

**Light Sanitary Vehicle (VSL)** \u2014 The VSL is a vehicle operated by an ambulance company, with a driver trained in healthcare transport. It is prescribed for patients requiring light monitoring during the journey (IV drip, oxygen). The VSL is generally more expensive than a medical taxi as it includes onboard medical equipment costs. For autonomous or semi-autonomous patients, the medical taxi is often preferred by the prescribing doctor.

**Ambulance** \u2014 The ambulance is reserved for patients who must be transported in a lying position or require continuous medical monitoring during the journey. It is the most expensive transport mode, with a 2-person crew (paramedic + auxiliary). Ambulances are mandatory in certain situations (immediate post-operative, intubated patients, life-threatening emergencies).

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
        title: "S\u00e9ances de dialyse",
        desc: `Transport r\u00e9gulier 3 fois par semaine vers le centre de dialyse depuis ${city.name}. Prise en charge \u00e0 domicile, accompagnement jusqu\u2019au service, attente pendant la s\u00e9ance (3-4h), retour \u00e0 domicile. Prise en charge CPAM 100 % en ALD.`,
        example: `Patient de ${q1} transport\u00e9 3 fois par semaine vers ${mainHospital} pour h\u00e9modialyse. M\u00eame chauffeur \u00e0 chaque s\u00e9ance, forfait s\u00e9rie 10 aller-retour, tiers payant int\u00e9gral.`,
      },
      {
        icon: "solar:test-tube-linear",
        title: "Chimioth\u00e9rapie",
        desc: `Transport vers les centres de chimioth\u00e9rapie \u00e0 ${city.name}. Le chauffeur adapte sa conduite au confort du patient (conduite douce, temp\u00e9rature contr\u00f4l\u00e9e). Retour s\u00e9curis\u00e9 apr\u00e8s la s\u00e9ance, m\u00eame en cas de fatigue ou de naus\u00e9es.`,
        example: `Patiente de ${q2} suivant un protocole de chimio toutes les 3 semaines \u00e0 ${tmCity.hospitals[1] || mainHospital}. V\u00e9hicule climatis\u00e9, sac vomitoire \u00e0 disposition, couverture chauffante en hiver.`,
      },
      {
        icon: "solar:running-2-linear",
        title: "R\u00e9\u00e9ducation et kin\u00e9sith\u00e9rapie",
        desc: `Transport quotidien ou plurihebdomadaire vers les centres de r\u00e9\u00e9ducation \u00e0 ${city.name}. Id\u00e9al pour les patients post-op\u00e9ratoires (proth\u00e8se de hanche, genou) ou post-AVC n\u00e9cessitant une kin\u00e9sith\u00e9rapie intensive.`,
        example: `Patient op\u00e9r\u00e9 de la hanche transport\u00e9 5 jours par semaine vers le centre de r\u00e9\u00e9ducation depuis ${city.name}. Aide \u00e0 la mont\u00e9e/descente du v\u00e9hicule, transport du fauteuil roulant.`,
      },
      {
        icon: "solar:stethoscope-linear",
        title: "Consultations sp\u00e9cialistes",
        desc: `Transport ponctuel vers les consultations sp\u00e9cialistes (cardiologue, oncologue, n\u00e9phrologue, neurologue) dans les h\u00f4pitaux de ${city.name} ou ${isIDF(city) ? "de Paris" : "de la r\u00e9gion"}.`,
        example: `Patient \u00e2g\u00e9 de ${city.name} se rendant \u00e0 une consultation cardiologique \u00e0 ${mainHospital}. Prise en charge \u00e0 domicile, accompagnement jusqu\u2019au service, attente, retour.`,
      },
      {
        icon: "mdi:wheelchair-accessibility",
        title: "Personnes \u00e0 mobilit\u00e9 r\u00e9duite (PMR)",
        desc: `V\u00e9hicules sp\u00e9cialement \u00e9quip\u00e9s pour le transport de patients en fauteuil roulant \u00e0 ${city.name}. Rampe d\u2019acc\u00e8s, fixations int\u00e9rieures, espace adapt\u00e9.`,
        example: `Patiente en fauteuil roulant de ${city.name} transport\u00e9e 2 fois par semaine vers son centre de soins. V\u00e9hicule van PMR avec rampe \u00e9lectrique, chauffeur form\u00e9 \u00e0 la manipulation du fauteuil.`,
      },
      {
        icon: "solar:hospital-linear",
        title: "Hospitalisations programm\u00e9es",
        desc: `Transport aller vers l\u2019h\u00f4pital pour une hospitalisation programm\u00e9e \u00e0 ${city.name}, puis retour \u00e0 la sortie. Le chauffeur vous aide avec vos bagages et vous accompagne jusqu\u2019au service d\u2019accueil.`,
        example: `Patient de ${city.name} admis pour une intervention chirurgicale \u00e0 ${mainHospital}. Aller le dimanche soir, retour le vendredi. Aide aux bagages, accompagnement \u00e0 l\u2019accueil.`,
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
        title: "Conventionn\u00e9 CPAM — Tiers payant",
        shortDesc: "Pas d\u2019avance de frais, la CPAM r\u00e8gle directement le taxi",
        longDesc: `Le taxi m\u00e9dical conventionn\u00e9 \u00e0 ${city.name} fonctionne en tiers payant : la CPAM r\u00e8gle directement le chauffeur, vous n\u2019avancez aucun frais (en ALD, AT, CMU-C). Pour les patients non exon\u00e9r\u00e9s, le ticket mod\u00e9rateur de 35 % est factur\u00e9 \u00e0 la mutuelle. La t\u00e9l\u00e9transmission des feuilles de soins est r\u00e9alis\u00e9e en temps r\u00e9el depuis le v\u00e9hicule.`,
      },
      {
        icon: "mdi:wheelchair-accessibility",
        title: "V\u00e9hicules adapt\u00e9s PMR",
        shortDesc: "Rampe d\u2019acc\u00e8s, fixations fauteuil roulant, espace adapt\u00e9",
        longDesc: `Notre flotte de taxi m\u00e9dical \u00e0 ${city.name} inclut des v\u00e9hicules sp\u00e9cialement am\u00e9nag\u00e9s pour les personnes \u00e0 mobilit\u00e9 r\u00e9duite : vans avec rampe d\u2019acc\u00e8s \u00e9lectrique ou manuelle, fixations au sol pour fauteuil roulant, espace int\u00e9rieur suffisant pour les fauteuils \u00e9lectriques. Les chauffeurs sont form\u00e9s \u00e0 la manipulation des fauteuils et \u00e0 l\u2019aide \u00e0 la mont\u00e9e et descente du v\u00e9hicule.`,
      },
      {
        icon: "solar:clock-circle-linear",
        title: "Ponctualit\u00e9 garantie",
        shortDesc: "Arriv\u00e9e 10 minutes avant l\u2019heure de rendez-vous m\u00e9dical",
        longDesc: `La ponctualit\u00e9 est critique pour les transports m\u00e9dicaux : un retard \u00e0 la dialyse peut d\u00e9caler l\u2019ensemble du planning du centre, un retard en chimioth\u00e9rapie peut reporter la s\u00e9ance. Nos chauffeurs \u00e0 ${city.name} s\u2019engagent \u00e0 arriver 10 minutes avant l\u2019heure de votre rendez-vous. Le temps de trajet est calcul\u00e9 en tenant compte des conditions de circulation en temps r\u00e9el et des sp\u00e9cificit\u00e9s de ${city.name}.`,
      },
      {
        icon: "solar:user-heart-linear",
        title: "Chauffeurs form\u00e9s au m\u00e9dical",
        shortDesc: "Formation premiers secours, accueil patient, gestes adapt\u00e9s",
        longDesc: `Nos chauffeurs de taxi m\u00e9dical \u00e0 ${city.name} suivent une formation sp\u00e9cifique au transport sanitaire : premiers secours (PSC1), gestes d\u2019aide aux personnes \u00e0 mobilit\u00e9 r\u00e9duite, accueil et communication avec les patients fragillis\u00e9s, conduite adapt\u00e9e (douce, sans \u00e0-coups). Ils sont \u00e9galement form\u00e9s aux protocoles d\u2019hygi\u00e8ne sp\u00e9cifiques au transport sanitaire.`,
      },
      {
        icon: "solar:calendar-minimalistic-linear",
        title: "Planning r\u00e9current automatique",
        shortDesc: "Un seul appel pour programmer toutes vos s\u00e9ances de la semaine",
        longDesc: `Pour les transports r\u00e9guliers (dialyse, chimio, r\u00e9\u00e9ducation), nous mettons en place un planning r\u00e9current \u00e0 ${city.name}. Vous appelez une seule fois, nous programmons tous vos trajets pour la semaine ou le mois. Le m\u00eame chauffeur est attribu\u00e9 \u00e0 chaque s\u00e9ance dans la mesure du possible, cr\u00e9ant une relation de confiance essentielle pour le bien-\u00eatre du patient.`,
      },
      {
        icon: "solar:route-linear",
        title: "Voies de bus et acc\u00e8s taxis",
        shortDesc: "Trajets plus rapides gr\u00e2ce aux couloirs r\u00e9serv\u00e9s",
        longDesc: `En tant que taxis professionnels, nos chauffeurs de taxi m\u00e9dical \u00e0 ${city.name} acc\u00e8dent aux voies de bus et aux files r\u00e9serv\u00e9es aux taxis. C\u2019est un avantage majeur pour les transports m\u00e9dicaux ${isIDF(city) ? "en \u00cele-de-France, o\u00f9 les couloirs de bus repr\u00e9sentent des dizaines de kilom\u00e8tres de voies prioritaires" : "en agglom\u00e9ration, o\u00f9 les embouteillages peuvent retarder un rendez-vous m\u00e9dical"}. Un trajet plus rapide, c\u2019est aussi moins de fatigue pour le patient.`,
      },
    ];
  }

  return [
    {
      icon: "solar:shield-check-linear",
      title: "CPAM approved \u2014 Third-party billing",
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
      longDesc: `As professional taxis, our medical taxi drivers in ${city.name} have access to bus lanes and taxi-reserved lanes. This is a major advantage for medical transports ${isIDF(city) ? "in \u00cele-de-France, where bus lanes represent dozens of kilometres of priority routes" : "in urban areas, where traffic jams can delay a medical appointment"}. A faster journey also means less fatigue for the patient.`,
    },
  ];
}

// ─── Testimonials (4 items) ─────────────────────────

export function generateTmTestimonials(city: City, tmCity: TaxiMedicalCityData, loc: Loc): TmTestimonial[] {
  const mainHospital = tmCity.hospitals[0];

  if (loc === "fr") {
    return [
      {
        text: `Je suis dialys\u00e9 3 fois par semaine \u00e0 ${mainHospital} depuis ${city.name}. Le chauffeur TaxiNeo est toujours l\u00e0 10 minutes avant l\u2019heure, il m\u2019aide \u00e0 monter dans le v\u00e9hicule et m\u2019accompagne jusqu\u2019au service. Apr\u00e8s 4 heures de dialyse, il est l\u00e0 pour me ramener. Le tiers payant fait que je ne paie rien. Apr\u00e8s 2 ans, c\u2019est devenu un ami.`,
        name: "Robert M.",
        initials: "RM",
        role: `Patient dialys\u00e9, ${city.name}`,
      },
      {
        text: `Ma m\u00e8re suit un traitement de chimioth\u00e9rapie \u00e0 ${tmCity.hospitals[1] || mainHospital}. Le taxi m\u00e9dical la prend \u00e0 la maison, la conduit doucement (elle est tr\u00e8s sensible aux mouvements apr\u00e8s les s\u00e9ances), attend et la ram\u00e8ne. Le m\u00eame chauffeur \u00e0 chaque fois, il conna\u00eet ses besoins. La prise en charge CPAM est totale en ALD.`,
        name: "Catherine D.",
        initials: "CD",
        role: `Fille de patiente, ${city.name}`,
      },
      {
        text: `Apr\u00e8s mon op\u00e9ration du genou, j\u2019ai eu besoin d\u2019un taxi m\u00e9dical \u00e0 ${city.name} pour mes s\u00e9ances de kin\u00e9 quotidiennes pendant 6 semaines. Le chauffeur transportait mon fauteuil roulant, m\u2019aidait \u00e0 chaque transfert. Le forfait s\u00e9rie de 10 aller-retour \u00e9tait tr\u00e8s avantageux.`,
        name: "Philippe G.",
        initials: "PG",
        role: `Patient en r\u00e9\u00e9ducation, ${city.name}`,
      },
      {
        text: `En tant qu\u2019infirmi\u00e8re coordinatrice, je recommande TaxiNeo pour le transport des patients de notre service \u00e0 ${mainHospital}. Ponctualit\u00e9 irr\u00e9prochable, v\u00e9hicules propres, chauffeurs respectueux et patients. Le conventionnement CPAM simplifie tout pour nos patients \u00e2g\u00e9s.`,
        name: "Nathalie P.",
        initials: "NP",
        role: `Infirmi\u00e8re coordinatrice, ${mainHospital}`,
      },
    ];
  }

  return [
    {
      text: `I\u2019ve been on dialysis 3 times a week at ${mainHospital} from ${city.name}. The TaxiNeo driver is always there 10 minutes early, helps me into the vehicle and accompanies me to the department. After 4 hours of dialysis, they\u2019re there to take me home. With third-party billing, I pay nothing. After 2 years, they\u2019ve become a friend.`,
      name: "Robert M.",
      initials: "RM",
      role: `Dialysis patient, ${city.name}`,
    },
    {
      text: `My mother is undergoing chemotherapy at ${tmCity.hospitals[1] || mainHospital}. The medical taxi picks her up at home, drives gently (she\u2019s very sensitive to movement after sessions), waits and brings her back. Same driver every time, they know her needs. The CPAM coverage is total under ALD.`,
      name: "Catherine D.",
      initials: "CD",
      role: `Patient\u2019s daughter, ${city.name}`,
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
        question: `Qu\u2019est-ce qu\u2019un taxi m\u00e9dical conventionn\u00e9 \u00e0 ${city.name} ?`,
        answer: `Un taxi m\u00e9dical conventionn\u00e9 est un taxi ayant sign\u00e9 une convention avec la CPAM pour le transport sanitaire assis professionnalis\u00e9 (TAP). Le chauffeur est form\u00e9 au transport de patients, le v\u00e9hicule est agr\u00e9\u00e9, et le service fonctionne en tiers payant : la CPAM r\u00e8gle directement le taxi. \u00c0 ${city.name}, tous nos chauffeurs partenaires sont conventionn\u00e9s CPAM.`,
      },
      {
        question: `Comment b\u00e9n\u00e9ficier du tiers payant pour mon taxi m\u00e9dical \u00e0 ${city.name} ?`,
        answer: `Pour b\u00e9n\u00e9ficier du tiers payant, vous devez disposer d\u2019une prescription m\u00e9dicale de transport (PMT) \u00e9tablie par votre m\u00e9decin AVANT le transport. Pr\u00e9sentez la PMT, votre carte Vitale et votre carte de mutuelle au chauffeur. Si vous \u00eates en ALD, AT, invalidit\u00e9 ou CMU-C, la prise en charge est \u00e0 100 % sans avance de frais. Sinon, la CPAM couvre 65 % et votre mutuelle le compl\u00e9ment.`,
      },
      {
        question: `Ai-je besoin d\u2019une prescription m\u00e9dicale pour prendre un taxi m\u00e9dical ?`,
        answer: `Oui, la prescription m\u00e9dicale de transport (PMT) est obligatoire pour le remboursement par la CPAM. Elle doit \u00eatre \u00e9tablie AVANT le transport par votre m\u00e9decin traitant ou le m\u00e9decin hospitalier. Sans prescription, le transport sera factur\u00e9 comme un taxi classique, sans remboursement. En urgence, la prescription peut \u00eatre \u00e9tablie a posteriori par le m\u00e9decin hospitalier.`,
      },
      {
        question: `Quels traitements sont couverts par le taxi m\u00e9dical \u00e0 ${city.name} ?`,
        answer: `Le taxi m\u00e9dical conventionn\u00e9 couvre tous les transports li\u00e9s \u00e0 des soins m\u00e9dicaux prescrits : dialyse r\u00e9nale, chimioth\u00e9rapie, radioth\u00e9rapie, r\u00e9\u00e9ducation fonctionnelle, consultations sp\u00e9cialistes, hospitalisations programm\u00e9es, examens m\u00e9dicaux (IRM, scanner, biopsie), soins post-op\u00e9ratoires. La condition est d\u2019avoir une prescription m\u00e9dicale de transport.`,
      },
      {
        question: `Combien co\u00fbte un taxi m\u00e9dical \u00e0 ${city.name} ?`,
        answer: `Le tarif du taxi m\u00e9dical \u00e0 ${city.name} est calcul\u00e9 selon le tarif conventionnel fix\u00e9 par la CPAM (forfait de prise en charge + kilom\u00e8tres). En tiers payant, vous ne payez rien si vous \u00eates en ALD, AT ou CMU-C. Pour les patients non exon\u00e9r\u00e9s, la part restante (35 %) est g\u00e9n\u00e9ralement couverte par la mutuelle. Nous proposons des forfaits s\u00e9ries (5 ou 10 aller-retour) pour les traitements r\u00e9guliers.`,
      },
      {
        question: `Avez-vous des v\u00e9hicules adapt\u00e9s aux fauteuils roulants \u00e0 ${city.name} ?`,
        answer: `Oui, notre flotte \u00e0 ${city.name} comprend des v\u00e9hicules PMR (Personnes \u00e0 Mobilit\u00e9 R\u00e9duite) : vans \u00e9quip\u00e9s de rampes d\u2019acc\u00e8s \u00e9lectriques ou manuelles, de fixations au sol pour fauteuil roulant, et d\u2019un espace int\u00e9rieur suffisant pour les fauteuils \u00e9lectriques. Pr\u00e9cisez votre besoin PMR lors de la r\u00e9servation pour garantir la disponibilit\u00e9 d\u2019un v\u00e9hicule adapt\u00e9.`,
      },
      {
        question: `Le chauffeur attend-il pendant ma consultation ou ma s\u00e9ance ?`,
        answer: `Oui, pour les transports aller-retour, le chauffeur de taxi m\u00e9dical attend pendant toute la dur\u00e9e de votre consultation ou s\u00e9ance \u00e0 ${city.name}. Pour les s\u00e9ances de dialyse (3-4h), le chauffeur reste disponible et vous reprend d\u00e8s la fin de la s\u00e9ance. Le temps d\u2019attente est inclus dans le tarif conventionnel et pris en charge par la CPAM.`,
      },
      {
        question: `Comment r\u00e9server un taxi m\u00e9dical r\u00e9gulier \u00e0 ${city.name} ?`,
        answer: `Pour les transports r\u00e9guliers (dialyse, chimio, r\u00e9\u00e9ducation), appelez-nous au 07 59 59 29 34 ou remplissez le formulaire en ligne. Nous mettons en place un planning r\u00e9current : m\u00eames jours, m\u00eames horaires, m\u00eame chauffeur autant que possible. Une seule prescription m\u00e9dicale de transport couvre l\u2019ensemble de la s\u00e9rie. Modification et annulation possibles avec un pr\u00e9avis de 12h.`,
      },
      {
        question: `Quelle est la diff\u00e9rence entre un taxi m\u00e9dical et un VSL ?`,
        answer: `Le taxi m\u00e9dical (TAP) est un taxi conventionn\u00e9 CPAM pour le transport assis de patients autonomes ou semi-autonomes. Le VSL (V\u00e9hicule Sanitaire L\u00e9ger) est exploit\u00e9 par une soci\u00e9t\u00e9 d\u2019ambulances et convient aux patients n\u00e9cessitant une surveillance l\u00e9g\u00e8re (perfusion, oxyg\u00e8ne). Le taxi m\u00e9dical est g\u00e9n\u00e9ralement moins cher, plus rapide (acc\u00e8s voies de bus) et offre un service porte-\u00e0-porte plus personnalis\u00e9.`,
      },
      {
        question: `Un accompagnant peut-il voyager dans le taxi m\u00e9dical ?`,
        answer: `Oui, un accompagnant peut voyager gratuitement dans le taxi m\u00e9dical \u00e0 ${city.name}. C\u2019est fr\u00e9quent pour les enfants accompagn\u00e9s d\u2019un parent, les patients \u00e2g\u00e9s accompagn\u00e9s d\u2019un proche, ou les patients dont l\u2019\u00e9tat n\u00e9cessite la pr\u00e9sence d\u2019un aidant. L\u2019accompagnant n\u2019engendre pas de co\u00fbt suppl\u00e9mentaire. Si la pr\u00e9sence de l\u2019accompagnant est m\u00e9dicalement justifi\u00e9e, elle peut \u00eatre mentionn\u00e9e sur la prescription.`,
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
        desc: `Demandez \u00e0 votre m\u00e9decin traitant ou au m\u00e9decin hospitalier une prescription m\u00e9dicale de transport (PMT) mentionnant le mode \u00ab taxi \u00bb ou \u00ab TAP \u00bb. Cette prescription est obligatoire pour la prise en charge CPAM de votre taxi m\u00e9dical \u00e0 ${city.name}.`,
      },
      {
        step: "2",
        title: "R\u00e9servez votre taxi m\u00e9dical",
        desc: `Appelez-nous au 07 59 59 29 34 ou remplissez le formulaire en ligne. Indiquez la date, l\u2019heure de rendez-vous, l\u2019\u00e9tablissement de sant\u00e9, le type de v\u00e9hicule souhait\u00e9 (berline ou van PMR), et si un accompagnant sera pr\u00e9sent. Pour les s\u00e9ries, un seul appel suffit pour programmer toutes les s\u00e9ances.`,
      },
      {
        step: "3",
        title: "Le chauffeur vous transporte",
        desc: `Le jour du rendez-vous, votre chauffeur se pr\u00e9sente \u00e0 votre domicile \u00e0 ${city.name} avec 10 minutes d\u2019avance. Il vous aide \u00e0 monter dans le v\u00e9hicule, vous conduit directement \u00e0 l\u2019\u00e9tablissement de sant\u00e9, vous accompagne jusqu\u2019au service, attend la fin de votre s\u00e9ance, puis vous ram\u00e8ne chez vous.`,
      },
      {
        step: "4",
        title: "La CPAM r\u00e8gle directement",
        desc: `\u00c0 la fin du transport, le chauffeur proc\u00e8de \u00e0 la t\u00e9l\u00e9transmission de la feuille de soins avec votre carte Vitale. La CPAM r\u00e8gle directement le taxi. Vous n\u2019avancez aucun frais si vous \u00eates en ALD, AT, CMU-C ou invalidit\u00e9. Sinon, seul le ticket mod\u00e9rateur (35 %) reste \u00e0 votre charge ou est factur\u00e9 \u00e0 votre mutuelle.`,
      },
    ];
  }

  return [
    {
      step: "1",
      title: "Get your prescription",
      desc: `Ask your GP or hospital doctor for a medical transport prescription (PMT) specifying \u201ctaxi\u201d or \u201cTAP\u201d mode. This prescription is mandatory for CPAM coverage of your medical taxi in ${city.name}.`,
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
