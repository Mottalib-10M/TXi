export interface BlogArticle {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  metaTitle: {
    fr: string;
    en: string;
  };
  metaDescription: {
    fr: string;
    en: string;
  };
  excerpt: {
    fr: string;
    en: string;
  };
  date: string;
  readingTime: number;
  content: {
    fr: string;
    en: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "taxi-vs-vtc-differences",
    title: {
      fr: "Taxi vs VTC : les 7 vraies différences à connaître",
      en: "Taxi vs Rideshare: 7 real differences you need to know",
    },
    metaTitle: {
      fr: "Taxi vs VTC : 7 différences clés | TaxiNeo Blog",
      en: "Taxi vs Rideshare: 7 key differences | TaxiNeo Blog",
    },
    metaDescription: {
      fr: "Tarifs, réglementation, voies de bus, assurance... Découvrez les 7 vraies différences entre un taxi et un VTC en France pour faire le bon choix.",
      en: "Fares, regulation, bus lanes, insurance... Discover the 7 real differences between a taxi and a rideshare in France to make the right choice.",
    },
    excerpt: {
      fr: "Tarifs, réglementation, voies de bus, assurance... Découvrez les 7 vraies différences entre un taxi et un VTC en France.",
      en: "Fares, regulation, bus lanes, insurance... Discover the 7 real differences between a taxi and a rideshare in France.",
    },
    date: "2026-03-15",
    readingTime: 6,
    content: {
      fr: `## Taxi ou VTC : comment choisir ?

En France, taxis et VTC coexistent sur le marché du transport de personnes. Mais derrière une apparence similaire, ces deux services présentent des **différences fondamentales** que tout voyageur devrait connaître.

### 1. La licence et la réglementation

Le taxi est un **service réglementé par l'État**. Chaque chauffeur détient une autorisation de stationnement (ADS) délivrée par la préfecture, qui garantit son professionnalisme. Le VTC (Véhicule de Tourisme avec Chauffeur) répond à une réglementation différente, plus souple, avec une simple carte professionnelle.

### 2. Les tarifs : réglementés vs algorithmiques

C'est la différence la plus impactante pour le client. Les **tarifs taxi sont fixés par arrêté préfectoral** : un trajet coûte le même prix le vendredi soir que le mardi matin. Les VTC, eux, utilisent le **surge pricing** (tarification dynamique) : le prix peut doubler ou tripler en cas de forte demande — soirées, grèves, événements.

### 3. L'accès aux voies de bus

Seuls les taxis ont le droit d'emprunter les **couloirs de bus réservés**. En heure de pointe, un taxi traverse Paris en 20 minutes là où un VTC mettra 45 minutes, coincé dans les embouteillages comme n'importe quelle voiture.

### 4. Le droit de stationnement et la maraude

Les taxis peuvent **stationner aux bornes** (gares, aéroports, hôpitaux) et prendre des clients dans la rue (maraude). Les VTC n'ont pas ce droit : ils doivent obligatoirement être pré-réservés via une application.

### 5. La formation et l'examen

Pour devenir chauffeur de taxi, il faut réussir un **examen préfectoral exigeant** comprenant la réglementation, la géographie locale, la sécurité routière et le français. La formation VTC est plus courte et moins exigeante.

### 6. L'assurance et la responsabilité

Les taxis bénéficient d'une **assurance professionnelle spécifique** couvrant les passagers de manière renforcée. Le contrôle technique est annuel et les véhicules sont inspectés régulièrement.

### 7. Le prix fixe avec TaxiNeo

Avec TaxiNeo, vous combinez les avantages du taxi réglementé avec la transparence du **prix fixe garanti**. Vous connaissez le tarif avant de monter, sans risque de surge pricing. Le meilleur des deux mondes.

---

**En résumé** : si vous cherchez un service fiable, au prix juste et qui avance même dans les bouchons, le taxi reste la solution la plus avantageuse. Et avec TaxiNeo, réserver n'a jamais été aussi simple.`,
      en: `## Taxi or rideshare: how to choose?

In France, taxis and rideshare services coexist in the passenger transport market. But behind a similar appearance, these two services have **fundamental differences** that every traveler should know.

### 1. Licensing and regulation

A taxi is a **government-regulated service**. Each driver holds a parking authorization (ADS) issued by the prefecture, guaranteeing their professionalism. Rideshare drivers (VTC) respond to different, more flexible regulations, with a simple professional card.

### 2. Fares: regulated vs algorithmic

This is the most impactful difference for the customer. **Taxi fares are set by prefectural decree**: a trip costs the same on a Friday night as on a Tuesday morning. Rideshare services use **surge pricing** (dynamic pricing): the price can double or triple during high demand — evenings, strikes, events.

### 3. Access to bus lanes

Only taxis are allowed to use **dedicated bus lanes**. During rush hour, a taxi crosses Paris in 20 minutes where a rideshare will take 45 minutes, stuck in traffic like any other car.

### 4. Parking rights and street hailing

Taxis can **park at designated stands** (train stations, airports, hospitals) and pick up clients on the street. Rideshare services don't have this right: they must be pre-booked through an app.

### 5. Training and examination

To become a taxi driver, you must pass a **demanding prefectural exam** covering regulations, local geography, road safety, and French language. Rideshare training is shorter and less demanding.

### 6. Insurance and liability

Taxis benefit from **specific professional insurance** covering passengers with enhanced protection. Vehicle inspection is annual and vehicles are regularly inspected.

### 7. Fixed pricing with TaxiNeo

With TaxiNeo, you combine the advantages of a regulated taxi with the transparency of a **guaranteed fixed price**. You know the fare before getting in, with no risk of surge pricing. The best of both worlds.

---

**In summary**: if you're looking for a reliable service, at a fair price, that keeps moving even in traffic jams, a taxi remains the most advantageous solution. And with TaxiNeo, booking has never been easier.`,
    },
  },
  {
    slug: "prix-taxi-paris-cdg",
    title: {
      fr: "Prix taxi Paris CDG : tarifs officiels, jour, nuit et dimanche",
      en: "Paris CDG taxi prices: official fares, day, night and Sunday",
    },
    metaTitle: {
      fr: "Prix taxi Paris ↔ CDG : tarifs officiels 2026 | TaxiNeo",
      en: "Paris ↔ CDG taxi prices: official 2026 fares | TaxiNeo",
    },
    metaDescription: {
      fr: "Combien coûte un taxi entre Paris et l'aéroport CDG ? Découvrez les tarifs forfaitaires officiels 2026, de jour comme de nuit, et réservez au meilleur prix.",
      en: "How much does a taxi cost between Paris and CDG airport? Discover the official 2026 flat rates, day and night, and book at the best price.",
    },
    excerpt: {
      fr: "Combien coûte un taxi entre Paris et l'aéroport CDG ? Découvrez les tarifs forfaitaires officiels 2026, de jour comme de nuit.",
      en: "How much does a taxi cost between Paris and CDG airport? Discover the official 2026 flat rates, day and night.",
    },
    date: "2026-03-10",
    readingTime: 5,
    content: {
      fr: `## Tarifs taxi Paris – Aéroport Charles de Gaulle (CDG)

Vous préparez un voyage depuis ou vers l'aéroport Roissy-Charles de Gaulle ? Voici tout ce qu'il faut savoir sur les **tarifs officiels** d'un taxi entre Paris et CDG en 2026.

### Le tarif forfaitaire officiel

Depuis 2016, un **arrêté préfectoral** fixe un tarif forfaitaire entre Paris et les aéroports parisiens :

- **Paris → CDG (Rive droite)** : 56 €
- **Paris → CDG (Rive gauche)** : 65 €

Ces prix sont **fixes et identiques** de jour comme de nuit, en semaine comme le dimanche. Pas de supplément bagages, pas de majoration.

### Quand le forfait s'applique-t-il ?

Le tarif forfaitaire s'applique pour tout trajet **entre Paris intra-muros et l'aéroport CDG**. Il ne s'applique pas si :

- Votre départ ou arrivée est en banlieue (dans ce cas, compteur classique)
- Vous prenez le taxi à la borne de l'aéroport pour une destination hors Paris

### Tarif de nuit et dimanche

Bonne nouvelle : le **forfait ne change pas** la nuit ni le dimanche. Contrairement au compteur classique qui applique un tarif C (nuit) ou D (dimanche), le forfait reste identique.

### Comparaison avec les autres modes de transport

| Mode de transport | Prix | Durée |
|---|---|---|
| Taxi (forfait) | 56-65 € | 30-50 min |
| VTC (estimatif) | 50-120 € | 30-50 min |
| RER B | 11,45 € | 35-50 min |
| Bus Roissybus | 16,60 € | 60-75 min |

Le taxi offre le meilleur **rapport confort/prix/temps**, surtout si vous voyagez à plusieurs (le forfait est par course, pas par personne).

### Réserver avec TaxiNeo

Avec TaxiNeo, vous réservez votre taxi Paris-CDG en quelques secondes avec un **prix fixe garanti** affiché avant la réservation. Pas de surprise, pas de compteur, pas de stress.

- Prix fixe garanti
- Chauffeur agréé qui vous attend
- Suivi en temps réel
- Paiement sécurisé via l'application

---

**Conseil** : pour les vols du matin, réservez votre taxi la veille. TaxiNeo vous garantit un chauffeur à l'heure, même à 4h du matin.`,
      en: `## Taxi fares Paris – Charles de Gaulle Airport (CDG)

Planning a trip to or from Roissy-Charles de Gaulle airport? Here's everything you need to know about the **official taxi fares** between Paris and CDG in 2026.

### The official flat rate

Since 2016, a **prefectural decree** sets a flat rate between Paris and Parisian airports:

- **Paris → CDG (Right Bank)**: €56
- **Paris → CDG (Left Bank)**: €65

These prices are **fixed and identical** day and night, weekdays and Sundays. No luggage surcharge, no extra fees.

### When does the flat rate apply?

The flat rate applies for any trip **between central Paris and CDG airport**. It does not apply if:

- Your departure or arrival is in the suburbs (standard meter applies)
- You take a taxi from the airport stand to a destination outside Paris

### Night and Sunday rates

Good news: the **flat rate doesn't change** at night or on Sundays. Unlike the standard meter which applies rate C (night) or D (Sunday), the flat rate remains identical.

### Comparison with other transport modes

| Transport mode | Price | Duration |
|---|---|---|
| Taxi (flat rate) | €56-65 | 30-50 min |
| Rideshare (estimate) | €50-120 | 30-50 min |
| RER B | €11.45 | 35-50 min |
| Roissybus | €16.60 | 60-75 min |

Taxis offer the best **comfort/price/time ratio**, especially when traveling in groups (the flat rate is per ride, not per person).

### Book with TaxiNeo

With TaxiNeo, book your Paris-CDG taxi in seconds with a **guaranteed fixed price** displayed before booking. No surprises, no meter, no stress.

- Guaranteed fixed price
- Licensed driver waiting for you
- Real-time tracking
- Secure payment via the app

---

**Tip**: for early morning flights, book your taxi the night before. TaxiNeo guarantees a driver on time, even at 4am.`,
    },
  },
  {
    slug: "taxi-aeroport-conseils",
    title: {
      fr: "Taxi aéroport : 10 conseils pour un transfert sans stress",
      en: "Airport taxi: 10 tips for a stress-free transfer",
    },
    metaTitle: {
      fr: "Taxi aéroport : 10 conseils pour un transfert réussi | TaxiNeo",
      en: "Airport taxi: 10 tips for a successful transfer | TaxiNeo",
    },
    metaDescription: {
      fr: "Réservation, horaires, bagages, point de rencontre... 10 conseils pratiques pour réussir votre transfert aéroport en taxi en France.",
      en: "Booking, timing, luggage, meeting point... 10 practical tips for a successful airport taxi transfer in France.",
    },
    excerpt: {
      fr: "Réservation, horaires, bagages, point de rencontre... 10 conseils pratiques pour réussir votre transfert aéroport en taxi.",
      en: "Booking, timing, luggage, meeting point... 10 practical tips for a successful airport taxi transfer.",
    },
    date: "2026-03-05",
    readingTime: 5,
    content: {
      fr: `## 10 conseils pour un transfert aéroport en taxi sans stress

Que ce soit pour un vol d'affaires ou des vacances, le transfert vers l'aéroport est souvent source de stress. Voici nos **10 conseils** pour un trajet serein.

### 1. Réservez la veille

Ne comptez pas sur la disponibilité immédiate. Réservez votre taxi **au moins 12 heures à l'avance**, surtout pour les vols du matin (avant 8h) ou les périodes de vacances.

### 2. Prévoyez une marge de sécurité

Ajoutez **30 minutes de marge** à votre temps de trajet estimé. Les embouteillages, travaux ou accidents sont imprévisibles. Mieux vaut attendre à l'aéroport qu'arriver en panique.

### 3. Communiquez votre numéro de vol

En indiquant votre numéro de vol lors de la réservation, le chauffeur peut **suivre le statut de votre vol** en temps réel et adapter son arrivée en cas de retard.

### 4. Précisez le terminal

Les grands aéroports ont plusieurs terminaux. Indiquez le bon terminal pour éviter les tours inutiles. À CDG, la différence entre le terminal 1 et 2E peut représenter 15 minutes supplémentaires.

### 5. Vérifiez le tarif forfaitaire

Pour les trajets Paris-aéroport, un **tarif forfaitaire officiel** s'applique. Vérifiez que votre chauffeur l'applique bien. Avec TaxiNeo, le prix fixe est garanti avant la réservation.

### 6. Optimisez vos bagages

Signalez les **bagages volumineux** lors de la réservation (vélo, matériel de ski, poussette). Le chauffeur pourra prévoir un véhicule adapté.

### 7. Partagez votre trajet

Avec le **taxi partagé TaxiNeo**, vous pouvez économiser jusqu'à 50% sur votre transfert aéroport en partageant avec d'autres voyageurs sur le même itinéraire.

### 8. Gardez vos documents accessibles

Passeport, carte d'embarquement, réservation d'hôtel... Gardez tout **dans un dossier accessible** pour les contrôles à l'aéroport.

### 9. Privilégiez le paiement par application

Le paiement via l'application est **plus rapide et plus sûr**. Pas besoin de chercher de la monnaie ou de négocier le prix.

### 10. Notez les coordonnées du chauffeur

En cas de problème (oubli dans le véhicule, question), vous pourrez **recontacter facilement** votre chauffeur via l'application TaxiNeo.

---

**Avec TaxiNeo**, réservez votre taxi aéroport en quelques secondes. Prix fixe, chauffeur agréé, suivi en temps réel.`,
      en: `## 10 tips for a stress-free airport taxi transfer

Whether it's a business flight or vacation, the airport transfer is often a source of stress. Here are our **10 tips** for a smooth ride.

### 1. Book the night before

Don't count on immediate availability. Book your taxi **at least 12 hours in advance**, especially for early morning flights (before 8am) or holiday periods.

### 2. Allow a safety margin

Add **30 minutes of buffer** to your estimated travel time. Traffic jams, road works, or accidents are unpredictable. It's better to wait at the airport than arrive in a panic.

### 3. Share your flight number

By providing your flight number when booking, the driver can **track your flight status** in real time and adjust their arrival in case of delay.

### 4. Specify the terminal

Large airports have multiple terminals. Indicate the correct terminal to avoid unnecessary detours. At CDG, the difference between Terminal 1 and 2E can add 15 minutes.

### 5. Check the flat rate

For Paris-airport trips, an **official flat rate** applies. Make sure your driver applies it. With TaxiNeo, the fixed price is guaranteed before booking.

### 6. Optimize your luggage

Report **bulky luggage** when booking (bicycle, ski equipment, stroller). The driver can arrange a suitable vehicle.

### 7. Share your ride

With **TaxiNeo shared taxi**, you can save up to 50% on your airport transfer by sharing with other travelers on the same route.

### 8. Keep your documents accessible

Passport, boarding pass, hotel reservation... Keep everything **in an accessible folder** for airport checks.

### 9. Prefer app payment

Payment via the app is **faster and safer**. No need to look for change or negotiate the price.

### 10. Note the driver's contact info

In case of problems (forgotten item, questions), you can **easily recontact** your driver through the TaxiNeo app.

---

**With TaxiNeo**, book your airport taxi in seconds. Fixed price, licensed driver, real-time tracking.`,
    },
  },
  {
    slug: "taxi-partage-fonctionnement",
    title: {
      fr: "Taxi partagé : comment ça marche et combien ça coûte",
      en: "Shared taxi: how it works and how much it costs",
    },
    metaTitle: {
      fr: "Taxi partagé : fonctionnement et tarifs | TaxiNeo",
      en: "Shared taxi: how it works and prices | TaxiNeo",
    },
    metaDescription: {
      fr: "Le taxi partagé permet d'économiser jusqu'à 50% sur vos courses. Découvrez comment fonctionne le service, les tarifs et les avantages du taxi partagé TaxiNeo.",
      en: "Shared taxis let you save up to 50% on your rides. Discover how the service works, pricing, and the advantages of TaxiNeo shared taxi.",
    },
    excerpt: {
      fr: "Le taxi partagé permet d'économiser jusqu'à 50% sur vos courses. Découvrez comment fonctionne le service et ses avantages.",
      en: "Shared taxis let you save up to 50% on your rides. Discover how the service works and its advantages.",
    },
    date: "2026-02-28",
    readingTime: 4,
    content: {
      fr: `## Le taxi partagé : économique et écologique

Le taxi partagé est une solution de transport qui combine **l'économie du covoiturage** avec le **confort et la sécurité d'un taxi professionnel**. Avec TaxiNeo, c'est simple, sûr et avantageux.

### Comment ça marche ?

1. **Entrez votre trajet** : départ, destination, date et heure
2. **TaxiNeo trouve des co-passagers** ayant un itinéraire compatible
3. **Le prix est calculé** en fonction du nombre de passagers
4. **Un chauffeur agréé** vous prend en charge et dépose chaque passager

### Combien ça coûte ?

Le prix d'un taxi partagé dépend du nombre de passagers :

- **2 passagers** : environ 40% d'économie par rapport à une course individuelle
- **3 passagers** : environ 50% d'économie
- Le prix est **fixé avant la réservation** — pas de surprise

### Les avantages

- **Économique** : jusqu'à 50% moins cher qu'un taxi individuel
- **Écologique** : moins de voitures, moins d'émissions CO2
- **Sécurisé** : chauffeur professionnel agréé, trajet suivi en temps réel
- **Confortable** : véhicule propre et climatisé, Wi-Fi disponible

### Idéal pour quels trajets ?

Le taxi partagé est particulièrement adapté pour :

- Les **transferts aéroport** : même terminal, mêmes horaires
- Les **trajets quotidiens** : domicile-travail, les mêmes passagers réguliers
- Les **événements** : concerts, matchs, salons professionnels

### Sécurité et confidentialité

Chaque passager est **identifié** lors de la réservation. Le trajet est suivi en temps réel. Le chauffeur est un professionnel agréé. Vous pouvez partager votre trajet avec un proche pour plus de tranquillité.

---

**Essayez le taxi partagé TaxiNeo** et économisez sur votre prochain trajet tout en réduisant votre empreinte carbone.`,
      en: `## Shared taxi: economical and ecological

The shared taxi is a transport solution that combines **the savings of carpooling** with the **comfort and safety of a professional taxi**. With TaxiNeo, it's simple, safe, and advantageous.

### How does it work?

1. **Enter your trip**: departure, destination, date and time
2. **TaxiNeo finds co-passengers** with a compatible route
3. **The price is calculated** based on the number of passengers
4. **A licensed driver** picks you up and drops off each passenger

### How much does it cost?

The price of a shared taxi depends on the number of passengers:

- **2 passengers**: approximately 40% savings compared to an individual ride
- **3 passengers**: approximately 50% savings
- The price is **set before booking** — no surprises

### The advantages

- **Economical**: up to 50% cheaper than an individual taxi
- **Ecological**: fewer cars, fewer CO2 emissions
- **Secure**: licensed professional driver, real-time ride tracking
- **Comfortable**: clean, air-conditioned vehicle, Wi-Fi available

### Ideal for which trips?

Shared taxis are particularly suited for:

- **Airport transfers**: same terminal, same schedule
- **Daily commutes**: home-work, same regular passengers
- **Events**: concerts, matches, trade shows

### Safety and privacy

Each passenger is **identified** at booking. The trip is tracked in real time. The driver is a licensed professional. You can share your trip with a loved one for peace of mind.

---

**Try TaxiNeo shared taxi** and save on your next trip while reducing your carbon footprint.`,
    },
  },
  {
    slug: "taxi-entreprise-b2b",
    title: {
      fr: "Taxi entreprise : simplifiez la mobilité de vos collaborateurs",
      en: "Business taxi: simplify your team's mobility",
    },
    metaTitle: {
      fr: "Taxi entreprise B2B : solution mobilité professionnelle | TaxiNeo",
      en: "Business taxi B2B: professional mobility solution | TaxiNeo",
    },
    metaDescription: {
      fr: "TaxiNeo Business simplifie la gestion des courses taxi de votre entreprise : facturation centralisée, reporting, politiques de déplacement. Demandez une démo.",
      en: "TaxiNeo Business simplifies managing your company's taxi rides: centralized billing, reporting, travel policies. Request a demo.",
    },
    excerpt: {
      fr: "TaxiNeo Business simplifie la gestion des courses taxi de votre entreprise : facturation centralisée, reporting, politiques de déplacement.",
      en: "TaxiNeo Business simplifies managing your company's taxi rides: centralized billing, reporting, travel policies.",
    },
    date: "2026-02-20",
    readingTime: 5,
    content: {
      fr: `## TaxiNeo Business : la solution taxi pour les entreprises

Gérer les déplacements professionnels de vos collaborateurs ne devrait pas être un casse-tête. **TaxiNeo Business** offre une solution complète pour simplifier la mobilité de votre entreprise.

### Le problème actuel

Les entreprises font face à plusieurs défis avec les taxis :

- **Notes de frais** : récupération manuelle des reçus, ressaisie, validation
- **Pas de visibilité** sur les dépenses en temps réel
- **Aucune politique** de déplacement applicable automatiquement
- **Factures multiples** de différents chauffeurs

### La solution TaxiNeo Business

#### Facturation centralisée
Une seule facture mensuelle pour toutes les courses de votre entreprise. Plus de notes de frais, plus de reçus papier.

#### Tableau de bord en temps réel
Suivez les dépenses de mobilité de votre entreprise en direct :
- Nombre de courses par service/collaborateur
- Budget consommé vs budget alloué
- Tendances et optimisations possibles

#### Politiques de déplacement
Définissez des règles automatiques :
- Plafond de dépense par course ou par mois
- Horaires autorisés (pas de courses après 22h sauf exceptions)
- Zones géographiques autorisées
- Validation managériale au-delà d'un certain montant

#### Réservation simplifiée
Vos collaborateurs réservent en quelques secondes via l'application TaxiNeo. Pas besoin de créer de compte séparé, leur profil entreprise est automatiquement lié.

### Les chiffres

Les entreprises utilisant TaxiNeo Business constatent en moyenne :
- **30% de réduction** sur le budget transport
- **2h/mois gagnées** par collaborateur sur les notes de frais
- **100% de visibilité** sur les dépenses de mobilité

### Comment démarrer ?

1. **Demandez une démo** : un account manager dédié vous présente la solution
2. **Configuration** : vos règles, vos utilisateurs, votre budget
3. **Déploiement** : vos collaborateurs commencent à réserver

---

**Demandez votre démo gratuite** et découvrez comment TaxiNeo Business peut transformer la mobilité de votre entreprise.`,
      en: `## TaxiNeo Business: the taxi solution for companies

Managing your team's business travel shouldn't be a headache. **TaxiNeo Business** offers a complete solution to simplify your company's mobility.

### The current problem

Companies face several challenges with taxis:

- **Expense reports**: manual receipt collection, re-entry, validation
- **No visibility** on expenses in real time
- **No travel policy** automatically enforceable
- **Multiple invoices** from different drivers

### The TaxiNeo Business solution

#### Centralized billing
A single monthly invoice for all your company's rides. No more expense reports, no more paper receipts.

#### Real-time dashboard
Track your company's mobility expenses live:
- Number of rides per department/employee
- Budget consumed vs. allocated
- Trends and possible optimizations

#### Travel policies
Define automatic rules:
- Spending cap per ride or per month
- Authorized hours (no rides after 10pm except exceptions)
- Authorized geographic areas
- Managerial approval above a certain amount

#### Simplified booking
Your team books in seconds via the TaxiNeo app. No need to create a separate account, their company profile is automatically linked.

### The numbers

Companies using TaxiNeo Business see on average:
- **30% reduction** in transport budget
- **2h/month saved** per employee on expense reports
- **100% visibility** on mobility expenses

### How to get started?

1. **Request a demo**: a dedicated account manager presents the solution
2. **Configuration**: your rules, your users, your budget
3. **Deployment**: your team starts booking

---

**Request your free demo** and discover how TaxiNeo Business can transform your company's mobility.`,
    },
  },
  {
    slug: "taxi-nuit-paris",
    title: {
      fr: "Taxi de nuit à Paris : tarifs, disponibilité et conseils",
      en: "Night taxi in Paris: fares, availability and tips",
    },
    metaTitle: {
      fr: "Taxi de nuit Paris : tarifs et disponibilité 24h/24 | TaxiNeo",
      en: "Night taxi Paris: 24/7 fares and availability | TaxiNeo",
    },
    metaDescription: {
      fr: "Besoin d'un taxi à Paris après minuit ? Découvrez les tarifs de nuit, les zones couvertes et comment réserver un taxi fiable 24h/24 avec TaxiNeo.",
      en: "Need a taxi in Paris after midnight? Discover night fares, covered areas and how to book a reliable 24/7 taxi with TaxiNeo.",
    },
    excerpt: {
      fr: "Besoin d'un taxi à Paris après minuit ? Découvrez les tarifs de nuit, les zones couvertes et comment réserver facilement.",
      en: "Need a taxi in Paris after midnight? Discover night fares, covered areas and how to book easily.",
    },
    date: "2026-02-15",
    readingTime: 4,
    content: {
      fr: `## Prendre un taxi la nuit à Paris

Paris ne dort jamais, et ses taxis non plus. Que vous rentriez d'une soirée, d'un spectacle ou d'un dîner, voici ce qu'il faut savoir pour prendre un **taxi de nuit à Paris**.

### Les tarifs de nuit

Les taxis parisiens appliquent différents tarifs selon l'heure et la zone :

- **Tarif A** (jour, Paris) : 1,14 €/km
- **Tarif B** (nuit, Paris / jour, banlieue) : 1,46 €/km
- **Tarif C** (nuit, banlieue) : 1,61 €/km

Le **tarif de nuit** s'applique de **19h à 7h** du lundi au samedi, et **toute la journée** le dimanche et jours fériés.

**Avec TaxiNeo** : vous connaissez le prix exact avant de réserver, de nuit comme de jour. Plus besoin de calculer.

### Disponibilité 24h/24

Contrairement aux VTC qui réduisent leur flotte la nuit (et augmentent leurs prix), les taxis parisiens circulent **24 heures sur 24**. Les bornes de taxi restent actives, et avec TaxiNeo, vous pouvez réserver à n'importe quelle heure.

### Sécurité nocturne

Prendre un taxi la nuit est l'une des options les plus sûres :

- **Chauffeur identifié** : licence visible, numéro de véhicule enregistré
- **Trajet suivi** : GPS en temps réel
- **Pas de risque** de chauffeur non déclaré
- **Paiement sécurisé** : pas besoin de manipuler du liquide

### Conseils pour un taxi de nuit réussi

1. **Réservez à l'avance** via TaxiNeo plutôt que d'attendre dans la rue
2. **Partagez votre trajet** avec un proche via l'application
3. **Privilégiez les stations de taxi** si vous n'avez pas réservé (gares, places principales)
4. **Vérifiez le lumineux** : un taxi libre affiche "TAXI" en vert

### Les quartiers les plus demandés la nuit

- **Bastille / Oberkampf** : sortie de bars et restaurants
- **Châtelet / Les Halles** : derniers métros
- **Champs-Élysées** : sorties de soirée
- **Pigalle / Montmartre** : vie nocturne

---

**Avec TaxiNeo**, réservez votre taxi de nuit en quelques secondes. Prix fixe garanti, même après minuit.`,
      en: `## Taking a taxi at night in Paris

Paris never sleeps, and neither do its taxis. Whether you're coming home from a night out, a show, or a dinner, here's what you need to know about taking a **night taxi in Paris**.

### Night fares

Parisian taxis apply different rates depending on the time and zone:

- **Rate A** (day, Paris): €1.14/km
- **Rate B** (night, Paris / day, suburbs): €1.46/km
- **Rate C** (night, suburbs): €1.61/km

The **night rate** applies from **7pm to 7am** Monday to Saturday, and **all day** on Sundays and holidays.

**With TaxiNeo**: you know the exact price before booking, night or day. No need to calculate.

### 24/7 availability

Unlike rideshare services that reduce their fleet at night (and increase prices), Parisian taxis operate **24 hours a day**. Taxi stands remain active, and with TaxiNeo, you can book at any hour.

### Night safety

Taking a taxi at night is one of the safest options:

- **Identified driver**: visible license, registered vehicle number
- **Tracked ride**: real-time GPS
- **No risk** of unlicensed drivers
- **Secure payment**: no need to handle cash

### Tips for a successful night taxi

1. **Book in advance** via TaxiNeo rather than waiting on the street
2. **Share your ride** with a loved one via the app
3. **Use taxi stands** if you haven't booked (stations, main squares)
4. **Check the sign**: an available taxi displays "TAXI" in green

### Most requested neighborhoods at night

- **Bastille / Oberkampf**: bar and restaurant area
- **Châtelet / Les Halles**: last metro trains
- **Champs-Élysées**: nightlife
- **Pigalle / Montmartre**: nightlife district

---

**With TaxiNeo**, book your night taxi in seconds. Fixed price guaranteed, even after midnight.`,
    },
  },
  {
    slug: "taxi-hopital-medical",
    title: {
      fr: "Taxi conventionné : transport médical et hôpital",
      en: "Medical taxi: hospital transport and healthcare rides",
    },
    metaTitle: {
      fr: "Taxi conventionné hôpital : transport médical remboursé | TaxiNeo",
      en: "Medical taxi: reimbursed hospital transport | TaxiNeo",
    },
    metaDescription: {
      fr: "Le taxi conventionné permet le transport médical remboursé par l'Assurance Maladie. Découvrez les conditions, les démarches et comment réserver avec TaxiNeo.",
      en: "Approved medical taxis provide healthcare transport reimbursed by French health insurance. Discover conditions, procedures and how to book with TaxiNeo.",
    },
    excerpt: {
      fr: "Le taxi conventionné permet le transport médical remboursé par l'Assurance Maladie. Conditions, démarches et réservation.",
      en: "Approved medical taxis provide healthcare transport reimbursed by French health insurance. Conditions and booking.",
    },
    date: "2026-02-10",
    readingTime: 5,
    content: {
      fr: `## Taxi conventionné : le transport médical simplifié

Pour les rendez-vous médicaux, hospitalisations ou traitements réguliers, le **taxi conventionné** est une solution prise en charge par l'Assurance Maladie. Voici tout ce qu'il faut savoir.

### Qu'est-ce qu'un taxi conventionné ?

Un taxi conventionné est un taxi qui a signé une **convention avec la CPAM** (Caisse Primaire d'Assurance Maladie). Il est autorisé à effectuer des transports médicaux remboursés.

### Conditions de prise en charge

Pour bénéficier du remboursement, vous devez disposer d'une **prescription médicale de transport** (PMT) établie par votre médecin. Cette prescription est nécessaire dans les cas suivants :

- Hospitalisation (entrée et sortie)
- Traitements réguliers (chimiothérapie, dialyse, kinésithérapie)
- Consultations spécialisées à plus de 150 km
- Convocations par un médecin conseil

### Taux de remboursement

Le remboursement est de **65% par l'Assurance Maladie**. Les 35% restants sont pris en charge par votre mutuelle (si vous en avez une). En cas d'ALD (Affection Longue Durée), le remboursement peut atteindre **100%**.

### Comment réserver un taxi conventionné ?

1. **Obtenez la prescription** de votre médecin
2. **Réservez via TaxiNeo** en précisant "transport médical"
3. **Présentez votre prescription** au chauffeur
4. **Signez le bon de transport** à la fin du trajet
5. La CPAM rembourse directement dans la plupart des cas (tiers-payant)

### Les avantages du taxi médical

- **Porte à porte** : le chauffeur vous accompagne de votre domicile à l'hôpital
- **Adapté** : véhicule confortable, chauffeur formé à l'accompagnement médical
- **Sans avance de frais** : tiers-payant dans la plupart des cas
- **Flexible** : rendez-vous réguliers, horaires adaptés

### TaxiNeo et le transport médical

Nos chauffeurs partenaires conventionnés assurent vos **transports médicaux** avec professionnalisme et bienveillance. Réservez facilement via l'application et nous nous occupons du reste.

---

**Réservez votre taxi conventionné** avec TaxiNeo pour un transport médical serein et pris en charge.`,
      en: `## Approved medical taxi: simplified healthcare transport

For medical appointments, hospitalizations, or regular treatments, the **approved medical taxi** is a solution covered by French health insurance. Here's everything you need to know.

### What is an approved medical taxi?

An approved medical taxi is a taxi that has signed an **agreement with the CPAM** (French Primary Health Insurance Fund). It is authorized to provide reimbursed medical transport.

### Coverage conditions

To receive reimbursement, you need a **medical transport prescription** (PMT) issued by your doctor. This prescription is required for:

- Hospitalization (admission and discharge)
- Regular treatments (chemotherapy, dialysis, physiotherapy)
- Specialized consultations over 150 km away
- Summons by a medical advisor

### Reimbursement rates

Reimbursement is **65% by health insurance**. The remaining 35% is covered by your supplementary insurance (if you have one). For ALD (Long-Term Condition), reimbursement can reach **100%**.

### How to book an approved medical taxi?

1. **Get the prescription** from your doctor
2. **Book via TaxiNeo** specifying "medical transport"
3. **Show your prescription** to the driver
4. **Sign the transport slip** at the end of the trip
5. The CPAM reimburses directly in most cases (third-party payment)

### Advantages of medical taxi

- **Door to door**: the driver accompanies you from home to the hospital
- **Adapted**: comfortable vehicle, driver trained in medical accompaniment
- **No upfront costs**: third-party payment in most cases
- **Flexible**: regular appointments, adapted schedules

### TaxiNeo and medical transport

Our approved partner drivers provide your **medical transport** with professionalism and care. Book easily via the app and we take care of the rest.

---

**Book your approved medical taxi** with TaxiNeo for worry-free, covered healthcare transport.`,
    },
  },
  {
    slug: "prix-fixe-vs-compteur-taxi",
    title: {
      fr: "Prix fixe vs compteur : quelle tarification taxi choisir ?",
      en: "Fixed price vs meter: which taxi pricing to choose?",
    },
    metaTitle: {
      fr: "Prix fixe vs compteur taxi : comparatif complet | TaxiNeo",
      en: "Fixed price vs taxi meter: complete comparison | TaxiNeo",
    },
    metaDescription: {
      fr: "Prix fixe ou compteur ? Découvrez les avantages et inconvénients de chaque mode de tarification taxi et pourquoi le prix fixe TaxiNeo est souvent plus avantageux.",
      en: "Fixed price or meter? Discover the pros and cons of each taxi pricing mode and why TaxiNeo fixed pricing is often more advantageous.",
    },
    excerpt: {
      fr: "Prix fixe ou compteur ? Découvrez les avantages de chaque mode de tarification taxi et pourquoi le prix fixe est souvent préférable.",
      en: "Fixed price or meter? Discover the advantages of each taxi pricing mode and why fixed pricing is often preferable.",
    },
    date: "2026-02-05",
    readingTime: 4,
    content: {
      fr: `## Prix fixe vs compteur : le comparatif

Quand vous prenez un taxi, deux modes de tarification existent : le **compteur horokilométrique** traditionnel et le **prix fixe** proposé par des plateformes comme TaxiNeo. Lequel choisir ?

### Le compteur : fonctionnement

Le compteur calcule le prix en combinant :
- La **distance parcourue** (€/km)
- Le **temps d'attente** (embouteillages, feux rouges)
- Le **tarif applicable** (A, B, C ou D selon l'heure et la zone)

**Avantages** :
- Système officiel et réglementé
- Équitable pour les trajets très courts

**Inconvénients** :
- **Impossible de connaître le prix à l'avance**
- Le prix augmente avec les embouteillages
- Stress pendant le trajet (on voit le compteur tourner)
- Surprises possibles (détours, temps d'attente)

### Le prix fixe : fonctionnement

Le prix fixe est calculé **avant la réservation** en fonction de :
- L'adresse de départ et d'arrivée
- La distance et le temps de trajet estimés
- Le tarif réglementé applicable

**Avantages** :
- **Vous savez exactement combien vous payez**
- Pas de stress pendant le trajet
- Les embouteillages ne changent rien
- Facile à comparer et à budgéter

**Inconvénients** :
- Peut être légèrement plus cher qu'un compteur dans des conditions idéales (pas de trafic)

### Quand choisir le prix fixe ?

Le prix fixe est presque toujours avantageux :
- **Heures de pointe** : les embouteillages gonflent le compteur
- **Longs trajets** : aéroport, banlieue, intercité
- **Budget serré** : vous connaissez le coût exact
- **Sérénité** : pas de mauvaise surprise

### Quand le compteur reste intéressant ?

- **Trajet très court** (moins de 2 km) dans Paris sans trafic
- **Prise en charge spontanée** dans la rue (pas de réservation)

### L'approche TaxiNeo

TaxiNeo combine le meilleur : des **taxis réglementés** avec un **prix fixe garanti**. Vous bénéficiez de la qualité et de la sécurité d'un taxi officiel, avec la transparence et la prévisibilité d'un prix fixe.

---

**Essayez le prix fixe TaxiNeo** : entrez votre trajet et voyez le prix en quelques secondes. Pas de compteur, pas de stress.`,
      en: `## Fixed price vs meter: the comparison

When you take a taxi, two pricing modes exist: the traditional **kilometric meter** and the **fixed price** offered by platforms like TaxiNeo. Which one to choose?

### The meter: how it works

The meter calculates the price by combining:
- **Distance traveled** (€/km)
- **Waiting time** (traffic jams, red lights)
- **Applicable rate** (A, B, C, or D depending on time and zone)

**Advantages**:
- Official and regulated system
- Fair for very short trips

**Disadvantages**:
- **Impossible to know the price in advance**
- Price increases with traffic
- Stress during the ride (watching the meter run)
- Possible surprises (detours, waiting time)

### Fixed price: how it works

The fixed price is calculated **before booking** based on:
- Pickup and drop-off addresses
- Estimated distance and travel time
- Applicable regulated rate

**Advantages**:
- **You know exactly how much you'll pay**
- No stress during the ride
- Traffic jams don't change anything
- Easy to compare and budget

**Disadvantages**:
- May be slightly more expensive than a meter in ideal conditions (no traffic)

### When to choose fixed price?

Fixed pricing is almost always advantageous:
- **Rush hour**: traffic inflates the meter
- **Long trips**: airport, suburbs, intercity
- **Tight budget**: you know the exact cost
- **Peace of mind**: no unpleasant surprises

### When is the meter still interesting?

- **Very short trip** (less than 2 km) in Paris without traffic
- **Spontaneous pickup** on the street (no booking)

### The TaxiNeo approach

TaxiNeo combines the best of both: **regulated taxis** with a **guaranteed fixed price**. You get the quality and safety of an official taxi, with the transparency and predictability of a fixed price.

---

**Try TaxiNeo fixed pricing**: enter your trip and see the price in seconds. No meter, no stress.`,
    },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
