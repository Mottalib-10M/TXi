# Audit SEO complet — Snippets hors tolérance Google
## Cibles : Titre 50-60 caractères | Description 150-160 caractères

Pour chaque entrée ci-dessous, écris un nouveau texte qui respecte la longueur cible.
Le texte doit être accrocheur, pertinent, et inciter au clic.
Site : **TaxiNeo** (taxineo.fr) — réservation de taxi à prix fixe en France.

---

## 1. Pages globales FR (messages/fr.json)

- **home.metaDescription** (metaDescription) [162 chars] TROP LONG
  Actuel: `Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises. Pas de mauvaise surprise.`
  Nouveau:

- **solutionAssistance.metaTitle** (metaTitle) [66 chars] TROP LONG
  Actuel: `TaxiNeo pour l'Assistance & Dépannage — Transport d'assurés 24h/24`
  Nouveau:

- **howItWorksPage.metaTitle** (metaTitle) [46 chars] TROP COURT
  Actuel: `Comment ça marche — Taxi à prix fixe | TaxiNeo`
  Nouveau:

- **howItWorksPage.metaDescription** (metaDescription) [110 chars] TROP COURT
  Actuel: `Découvrez comment fonctionne la réservation de taxi à prix fixe garanti. Simple, transparent et sans surprise.`
  Nouveau:

- **taxiVsVtc.metaTitle** (metaTitle) [47 chars] TROP COURT
  Actuel: `Taxi vs VTC — Comparatif complet 2026 | TaxiNeo`
  Nouveau:

- **taxiVsVtc.metaDescription** (metaDescription) [161 chars] TROP LONG
  Actuel: `Taxi ou VTC ? Découvrez les différences de tarifs, réglementation, disponibilité et qualité de service. Pourquoi le taxi reste le choix le plus fiable en France.`
  Nouveau:

- **alternativeVtc.metaTitle** (metaTitle) [67 chars] TROP LONG
  Actuel: `Alternative VTC au prix fixe — TaxiNeo, le taxi nouvelle génération`
  Nouveau:

- **alternativeVtc.metaDescription** (metaDescription) [164 chars] TROP LONG
  Actuel: `Marre des prix variables des VTC ? TaxiNeo propose une alternative fiable au prix fixe. Tarifs réglementés, chauffeurs licenciés, voies de bus. Réservez maintenant.`
  Nouveau:

- **blog.metaDescription** (metaDescription) [147 chars] TROP COURT
  Actuel: `Retrouvez nos articles sur les tarifs taxi, les différences taxi/VTC, les transferts aéroport et tous nos conseils pour vos déplacements en France.`
  Nouveau:

- **miseADisposition.metaTitle** (metaTitle) [75 chars] TROP LONG
  Actuel: `TaxiNeo — Taxi à disposition | Chauffeur agréé à la journée ou demi-journée`
  Nouveau:

- **miseADisposition.metaDescription** (metaDescription) [182 chars] TROP LONG
  Actuel: `Réservez un taxi agréé à la journée ou demi-journée. Idéal pour séminaires, événements, déplacements professionnels. Chauffeur professionnel, prix fixe, disponible partout en France.`
  Nouveau:

---

## 2. Pages globales EN (messages/en.json)

- **home.metaDescription** (metaDescription) [129 chars] TROP COURT
  Actuel: `Book a licensed taxi in seconds. Fixed price guaranteed, professional drivers, available 24/7 in 50+ French cities. No surprises.`
  Nouveau:

- **solutionHotel.metaDescription** (metaDescription) [138 chars] TROP COURT
  Actuel: `Offer a guaranteed-fare taxi service to your guests. Centralized dashboard, book in 2 clicks, 5% commission paid back. 100% free solution.`
  Nouveau:

- **solutionAssistance.metaDescription** (metaDescription) [143 chars] TROP COURT
  Actuel: `Transport your policyholders after a breakdown or accident with a guaranteed-fare taxi. Available 24/7, nationwide coverage, billing per claim.`
  Nouveau:

- **howItWorksPage.metaTitle** (metaTitle) [41 chars] TROP COURT
  Actuel: `How it works — Fixed-price taxi | TaxiNeo`
  Nouveau:

- **howItWorksPage.metaDescription** (metaDescription) [82 chars] TROP COURT
  Actuel: `Discover how fixed-price taxi booking works. Simple, transparent and no surprises.`
  Nouveau:

- **chauffeurPrive.metaDescription** (metaDescription) [139 chars] TROP COURT
  Actuel: `Enjoy a private chauffeur service with taxi advantages: regulated fares, bus lane access, airport flat rates. Book your driver in 2 clicks.`
  Nouveau:

- **alternativeVtc.metaDescription** (metaDescription) [142 chars] TROP COURT
  Actuel: `Tired of variable rideshare prices? TaxiNeo offers a reliable fixed-price alternative. Regulated fares, licensed drivers, bus lanes. Book now.`
  Nouveau:

- **blog.metaDescription** (metaDescription) [123 chars] TROP COURT
  Actuel: `Read our articles on taxi fares, taxi vs rideshare differences, airport transfers and all our tips for traveling in France.`
  Nouveau:

- **miseADisposition.metaTitle** (metaTitle) [70 chars] TROP LONG
  Actuel: `TaxiNeo — Chauffeur Hire | Licensed taxi driver for a full or half day`
  Nouveau:

---

## 3. Villes (src/data/cities.ts) — 50 pages

Note: Les titres des villes sont générés par template i18n, seules les descriptions sont par ville.

### paris
  - metaDescriptionEn [126] : `Taxi in Paris: flat-rate CDG from €56, Orly from €37. Book online 24/7, bus lane access, 20,000 licensed drivers. Reserve now.`
    Nouveau:

### marseille
  - metaDescriptionFr [145] : `Taxi à Marseille : transfert aéroport Provence, Vieux-Port, Calanques. Tarifs réglementés, chauffeurs locaux experts. Réservation immédiate 7j/7.`
    Nouveau:

  - metaDescriptionEn [138] : `Taxi in Marseille: Provence airport transfer, Vieux-Port, Calanques. Regulated fares, expert local drivers. Instant booking 7 days a week.`
    Nouveau:

### lyon
  - metaDescriptionFr [147] : `Taxi à Lyon : transfert Saint-Exupéry, Part-Dieu, Eurexpo. Prix fixe avant réservation, voies de bus, chauffeurs lyonnais. Réservez en 30 secondes.`
    Nouveau:

  - metaDescriptionEn [130] : `Taxi in Lyon: Saint-Exupéry transfer, Part-Dieu, Eurexpo. Fixed price before booking, bus lanes, Lyon drivers. Book in 30 seconds.`
    Nouveau:

### toulouse
  - metaDescriptionFr [149] : `Taxi à Toulouse : transfert aéroport Blagnac, Capitole, sites Airbus. Forfait garanti, chauffeurs disponibles 24h/24. Réservez votre course en ligne.`
    Nouveau:

  - metaDescriptionEn [136] : `Taxi in Toulouse: Blagnac airport transfer, Capitole, Airbus sites. Guaranteed flat rate, drivers available 24/7. Book your ride online.`
    Nouveau:

### nice
  - metaDescriptionFr [144] : `Taxi à Nice : transfert aéroport Côte d'Azur, Monaco, Cannes. Tarifs réglementés sans majoration estivale. Réservation en ligne, service 24h/24.`
    Nouveau:

  - metaDescriptionEn [131] : `Taxi in Nice: Côte d'Azur airport transfer, Monaco, Cannes. Regulated fares with no summer surcharge. Online booking, 24/7 service.`
    Nouveau:

### nantes
  - metaDescriptionFr [142] : `Taxi à Nantes : transfert aéroport Atlantique, gare TGV, Euronantes. Forfait compétitif, voies réservées tramway. Réservez votre taxi nantais.`
    Nouveau:

  - metaDescriptionEn [139] : `Taxi in Nantes: Atlantique airport transfer, TGV station, Euronantes. Competitive flat rate, tramway reserved lanes. Book your Nantes taxi.`
    Nouveau:

### montpellier
  - metaDescriptionFr [146] : `Taxi à Montpellier : aéroport Méditerranée, Écusson, plages de Palavas. Tarifs préfectoraux, chauffeurs disponibles 7j/7. Réservation instantanée.`
    Nouveau:

  - metaDescriptionEn [127] : `Taxi in Montpellier: Méditerranée airport, Écusson, Palavas beaches. Prefectural fares, drivers available 7/7. Instant booking.`
    Nouveau:

### strasbourg
  - metaDescriptionFr [140] : `Taxi à Strasbourg : aéroport Entzheim, Parlement européen, Petite France. Service trilingue FR/DE/EN, tarifs réglementés. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [132] : `Taxi in Strasbourg: Entzheim airport, European Parliament, Petite France. Trilingual FR/DE/EN service, regulated fares. Book online.`
    Nouveau:

### bordeaux
  - metaDescriptionFr [130] : `Taxi à Bordeaux : gare Saint-Jean, aéroport Mérignac, Euratlantique. 2h04 de Paris en TGV. Tarifs réglementés, réservation 24h/24.`
    Nouveau:

  - metaDescriptionEn [122] : `Taxi in Bordeaux: Gare Saint-Jean, Mérignac airport, Euratlantique. 2h04 from Paris by TGV. Regulated fares, 24/7 booking.`
    Nouveau:

### lille
  - metaDescriptionFr [139] : `Taxi à Lille : gares Flandres et Europe, Eurostar, aéroport Lesquin. Forfait garanti 24h/24, même pendant la Braderie. Réservez maintenant.`
    Nouveau:

  - metaDescriptionEn [132] : `Taxi in Lille: Flandres & Europe stations, Eurostar, Lesquin airport. Guaranteed flat rate 24/7, even during the Braderie. Book now.`
    Nouveau:

### rennes
  - metaDescriptionFr [128] : `Taxi à Rennes : gare TGV, aéroport Saint-Jacques, technopole Atalante. 1h25 de Paris. Navettes campus et CHU. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [129] : `Taxi in Rennes: TGV station, Saint-Jacques airport, Atalante tech park. 1h25 from Paris. Campus & hospital shuttles. Book online.`
    Nouveau:

### reims
  - metaDescriptionFr [135] : `Taxi à Reims : gare TGV Bezannes, cathédrale, caves de champagne. Forfait gare–centre compétitif. 45 min de Paris. Réservez maintenant.`
    Nouveau:

  - metaDescriptionEn [133] : `Taxi in Reims: Bezannes TGV station, cathedral, champagne cellars. Competitive station–centre flat rate. 45 min from Paris. Book now.`
    Nouveau:

### saint-etienne
  - metaDescriptionFr [149] : `Taxi à Saint-Étienne : gare Châteaucreux, navette aéroport Lyon, Geoffroy-Guichard. Ville UNESCO du Design. Tarifs réglementés, réservation en ligne.`
    Nouveau:

  - metaDescriptionEn [141] : `Taxi in Saint-Étienne: Châteaucreux station, Lyon airport shuttle, Geoffroy-Guichard. UNESCO City of Design. Regulated fares, online booking.`
    Nouveau:

### le-havre
  - metaDescriptionFr [141] : `Taxi au Havre : terminal croisières, ferry Angleterre, Étretat, Honfleur. Plus grand port de la Manche. Tarifs réglementés, réservation 7j/7.`
    Nouveau:

  - metaDescriptionEn [130] : `Taxi in Le Havre: cruise terminal, England ferry, Étretat, Honfleur. Largest Channel port. Regulated fares, booking 7 days a week.`
    Nouveau:

### toulon
  - metaDescriptionFr [141] : `Taxi à Toulon : aéroport Hyères, Arsenal, Porquerolles, Port-Cros. 1er port militaire de France. Service estival renforcé. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [129] : `Taxi in Toulon: Hyères airport, Arsenal, Porquerolles, Port-Cros. France's main naval port. Enhanced summer service. Book online.`
    Nouveau:

### grenoble
  - metaDescriptionFr [134] : `Taxi à Grenoble : aéroport Isère, Alpe d'Huez, Deux Alpes, CHU. Véhicules équipés neige. Forfait aéroport disponible. Réservez 24h/24.`
    Nouveau:

  - metaDescriptionEn [142] : `Taxi in Grenoble: Isère airport, Alpe d'Huez, Deux Alpes, university hospital. Snow-equipped vehicles. Airport flat rate available. Book 24/7.`
    Nouveau:

### dijon
  - metaDescriptionFr [134] : `Taxi à Dijon : gare TGV, Cité de la Gastronomie, Route des Grands Crus. Capitale UNESCO de la Bourgogne. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [126] : `Taxi in Dijon: TGV station, Cité de la Gastronomie, Route des Grands Crus. UNESCO Burgundy capital. Regulated fares. Book now.`
    Nouveau:

### angers
  - metaDescriptionFr [131] : `Taxi à Angers : gare Saint-Laud, aéroport Loire, CHU, châteaux de la Loire. 1h30 de Paris en TGV. Réservation en ligne instantanée.`
    Nouveau:

  - metaDescriptionEn [132] : `Taxi in Angers: Gare Saint-Laud, Loire airport, university hospital, Loire châteaux. 1h30 from Paris by TGV. Instant online booking.`
    Nouveau:

### nimes
  - metaDescriptionFr [132] : `Taxi à Nîmes : gare TGV Pont du Gard, Arènes, Maison Carrée. Transferts Pont du Gard et Cévennes. Tarifs réglementés. Réservez vite.`
    Nouveau:

  - metaDescriptionEn [128] : `Taxi in Nîmes: Pont du Gard TGV station, Arena, Maison Carrée. Pont du Gard & Cévennes transfers. Regulated fares. Book quickly.`
    Nouveau:

### villeurbanne
  - metaDescriptionFr [139] : `Taxi à Villeurbanne : campus La Doua, Part-Dieu, aéroport Saint-Exupéry. Même réseau que Lyon, tarifs réglementés. Réservation instantanée.`
    Nouveau:

  - metaDescriptionEn [127] : `Taxi in Villeurbanne: La Doua campus, Part-Dieu, Saint-Exupéry airport. Same network as Lyon, regulated fares. Instant booking.`
    Nouveau:

### clermont-ferrand
  - metaDescriptionFr [137] : `Taxi à Clermont-Ferrand : aéroport Auvergne, Vulcania, Puy de Dôme. Berceau de Michelin, relief volcanique. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [134] : `Taxi in Clermont-Ferrand: Auvergne airport, Vulcania, Puy de Dôme. Michelin's birthplace, volcanic terrain. Regulated fares. Book now.`
    Nouveau:

### aix-en-provence
  - metaDescriptionFr [136] : `Taxi à Aix-en-Provence : gare TGV Arbois, aéroport Marseille-Provence, cours Mirabeau. Festival d'Aix en juillet. Réservez votre course.`
    Nouveau:

  - metaDescriptionEn [126] : `Taxi in Aix-en-Provence: Arbois TGV station, Marseille-Provence airport, Cours Mirabeau. Aix Festival in July. Book your ride.`
    Nouveau:

### le-mans
  - metaDescriptionFr [130] : `Taxi au Mans : gare TGV, circuit 24 Heures, cité Plantagenêt. 54 min de Paris. Navettes circuit jour et nuit. Réservez maintenant.`
    Nouveau:

  - metaDescriptionEn [124] : `Taxi in Le Mans: TGV station, 24 Hours circuit, Plantagenêt city. 54 min from Paris. Circuit shuttles day & night. Book now.`
    Nouveau:

### brest
  - metaDescriptionFr [125] : `Taxi à Brest : aéroport Bretagne, port militaire, Océanopolis, presqu'île de Crozon. Pointe de la Bretagne. Réservation 7j/7.`
    Nouveau:

  - metaDescriptionEn [115] : `Taxi in Brest: Bretagne airport, naval port, Océanopolis, Crozon peninsula. Tip of Brittany. Booking 7 days a week.`
    Nouveau:

### tours
  - metaDescriptionFr [139] : `Taxi à Tours : gare TGV Saint-Pierre-des-Corps, Chenonceau, Chambord, Amboise. Circuits châteaux de la Loire. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [129] : `Taxi in Tours: Saint-Pierre-des-Corps TGV station, Chenonceau, Chambord, Amboise. Loire château tours. Regulated fares. Book now.`
    Nouveau:

### amiens
  - metaDescriptionFr [132] : `Taxi à Amiens : gare SNCF, cathédrale UNESCO, baie de Somme. 1h10 de Paris. Navettes CHU et université. Réservation en ligne rapide.`
    Nouveau:

  - metaDescriptionEn [129] : `Taxi in Amiens: SNCF station, UNESCO cathedral, Somme Bay. 1h10 from Paris. Hospital & university shuttles. Quick online booking.`
    Nouveau:

### limoges
  - metaDescriptionFr [140] : `Taxi à Limoges : gare des Bénédictins, aéroport Bellegarde, CHU Dupuytren. Capitale de la porcelaine. Tarifs réglementés. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [129] : `Taxi in Limoges: Bénédictins station, Bellegarde airport, Dupuytren hospital. Capital of porcelain. Regulated fares. Book online.`
    Nouveau:

### annecy
  - metaDescriptionFr [134] : `Taxi à Annecy : aéroport Genève, La Clusaz, Megève, lac d'Annecy. Venise des Alpes. Véhicules équipés neige. Réservez votre transfert.`
    Nouveau:

  - metaDescriptionEn [127] : `Taxi in Annecy: Geneva airport, La Clusaz, Megève, Lake Annecy. Venice of the Alps. Snow-equipped vehicles. Book your transfer.`
    Nouveau:

### perpignan
  - metaDescriptionFr [138] : `Taxi à Perpignan : gare TGV, aéroport Rivesaltes, Collioure, frontière espagnole. Capitale du Roussillon. Service bilingue. Réservez vite.`
    Nouveau:

  - metaDescriptionEn [134] : `Taxi in Perpignan: TGV station, Rivesaltes airport, Collioure, Spanish border. Capital of Roussillon. Bilingual service. Book quickly.`
    Nouveau:

### besancon
  - metaDescriptionFr [132] : `Taxi à Besançon : gare TGV Franche-Comté, Citadelle Vauban UNESCO, Métabief. Capitale de l'horlogerie. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [125] : `Taxi in Besançon: Franche-Comté TGV station, Vauban Citadel UNESCO, Métabief. Watchmaking capital. Regulated fares. Book now.`
    Nouveau:

### metz
  - metaDescriptionFr [138] : `Taxi à Metz : gare TGV, Centre Pompidou-Metz, aéroport Lorraine, Luxembourg. Carrefour franco-luxembourgeois. Réservation en ligne 24h/24.`
    Nouveau:

  - metaDescriptionEn [132] : `Taxi in Metz: TGV station, Centre Pompidou-Metz, Lorraine airport, Luxembourg. Franco-Luxembourgish crossroads. Online booking 24/7.`
    Nouveau:

### orleans
  - metaDescriptionFr [137] : `Taxi à Orléans : gare des Aubrais, cathédrale, Chambord, Cheverny. Cité johannique, 1h10 de Paris. Tarifs réglementés. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [135] : `Taxi in Orléans: Les Aubrais station, cathedral, Chambord, Cheverny. Joan of Arc's city, 1h10 from Paris. Regulated fares. Book online.`
    Nouveau:

### rouen
  - metaDescriptionFr [129] : `Taxi à Rouen : gare Rive-Droite, port maritime, plages normandes. Capitale de la Normandie, 1h15 de Paris. Réservation immédiate.`
    Nouveau:

  - metaDescriptionEn [123] : `Taxi in Rouen: Rive-Droite station, maritime port, Normandy beaches. Capital of Normandy, 1h15 from Paris. Instant booking.`
    Nouveau:

### mulhouse
  - metaDescriptionFr [134] : `Taxi à Mulhouse : EuroAirport Bâle-Mulhouse, Cité de l'Automobile, Cité du Train. Triangle trinational. Service multilingue. Réservez.`
    Nouveau:

  - metaDescriptionEn [136] : `Taxi in Mulhouse: EuroAirport Basel-Mulhouse, Cité de l'Automobile, Cité du Train. Trinational triangle. Multilingual service. Book now.`
    Nouveau:

### caen
  - metaDescriptionFr [136] : `Taxi à Caen : gare SNCF, ferry Ouistreham, Mémorial, plages du Débarquement. Capitale normande. Service en anglais. Réservez maintenant.`
    Nouveau:

  - metaDescriptionEn [126] : `Taxi in Caen: SNCF station, Ouistreham ferry, Memorial, D-Day beaches. Normandy's capital. English-speaking service. Book now.`
    Nouveau:

### nancy
  - metaDescriptionFr [134] : `Taxi à Nancy : gare TGV, Place Stanislas UNESCO, campus ARTEM, aéroport Lorraine. Joyau Art Nouveau, 1h30 de Paris. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [130] : `Taxi in Nancy: TGV station, Place Stanislas UNESCO, ARTEM campus, Lorraine airport. Art Nouveau gem, 1h30 from Paris. Book online.`
    Nouveau:

### argenteuil
  - metaDescriptionFr [142] : `Taxi à Argenteuil : gare, La Défense, CDG, Orly. 3e commune d'Île-de-France, 15 min de Saint-Lazare. Tarifs franciliens réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [139] : `Taxi in Argenteuil: station, La Défense, CDG, Orly. 3rd largest Île-de-France commune, 15 min from Saint-Lazare. Regulated fares. Book now.`
    Nouveau:

### avignon
  - metaDescriptionFr [130] : `Taxi à Avignon : gare TGV Courtine, Palais des Papes, Festival d'Avignon, Luberon. Cité des Papes. Service jour et nuit. Réservez.`
    Nouveau:

  - metaDescriptionEn [133] : `Taxi in Avignon: Courtine TGV station, Palais des Papes, Avignon Festival, Luberon. City of the Popes. Day & night service. Book now.`
    Nouveau:

### poitiers
  - metaDescriptionFr [135] : `Taxi à Poitiers : gare TGV, Futuroscope, CHU, Marais Poitevin. 2 millions de visiteurs/an au Futuroscope. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [141] : `Taxi in Poitiers: TGV station, Futuroscope, university hospital, Marais Poitevin. 2M visitors/year at Futuroscope. Regulated fares. Book now.`
    Nouveau:

### dunkerque
  - metaDescriptionFr [137] : `Taxi à Dunkerque : port ferry Douvres, Malo-les-Bains, frontière belge. 3e port de France. Service bilingue FR/EN. Réservation immédiate.`
    Nouveau:

  - metaDescriptionEn [135] : `Taxi in Dunkirk: Dover ferry port, Malo-les-Bains, Belgian border. France's 3rd largest port. Bilingual FR/EN service. Instant booking.`
    Nouveau:

### versailles
  - metaDescriptionFr [134] : `Taxi à Versailles : Château, Trianon, gares Chantiers et Rive-Gauche. 15 millions de visiteurs/an. Forfait Paris–Versailles. Réservez.`
    Nouveau:

  - metaDescriptionEn [127] : `Taxi in Versailles: Palace, Trianon, Chantiers & Rive-Gauche stations. 15M visitors/year. Paris–Versailles flat rate. Book now.`
    Nouveau:

### pau
  - metaDescriptionFr [136] : `Taxi à Pau : aéroport Pyrénées, Gourette, Boulevard des Pyrénées, circuit auto. Capitale du Béarn. Véhicules équipés montagne. Réservez.`
    Nouveau:

  - metaDescriptionEn [136] : `Taxi in Pau: Pyrénées airport, Gourette, Boulevard des Pyrénées, racing circuit. Capital of Béarn. Mountain-equipped vehicles. Book now.`
    Nouveau:

### la-rochelle
  - metaDescriptionFr [132] : `Taxi à La Rochelle : gare SNCF, aéroport, île de Ré, Vieux-Port. Perle de l'Atlantique. Service estival renforcé. Réservez en ligne.`
    Nouveau:

  - metaDescriptionEn [127] : `Taxi in La Rochelle: SNCF station, airport, Île de Ré, Vieux-Port. Pearl of the Atlantic. Enhanced summer service. Book online.`
    Nouveau:

### calais
  - metaDescriptionFr [139] : `Taxi à Calais : Eurostar Fréthun, terminal ferry, tunnel sous la Manche, Côte d'Opale. Porte de l'Europe. Service bilingue FR/EN. Réservez.`
    Nouveau:

  - metaDescriptionEn [131] : `Taxi in Calais: Eurostar Fréthun, ferry terminal, Channel Tunnel, Opal Coast. Gateway to Europe. Bilingual FR/EN service. Book now.`
    Nouveau:

### cannes
  - metaDescriptionFr [134] : `Taxi à Cannes : aéroport Nice, Palais des Festivals, Croisette, îles de Lérins. Tarifs réglementés même pendant le Festival. Réservez.`
    Nouveau:

  - metaDescriptionEn [130] : `Taxi in Cannes: Nice airport, Palais des Festivals, Croisette, Lérins Islands. Regulated fares even during the Festival. Book now.`
    Nouveau:

### antibes
  - metaDescriptionFr [143] : `Taxi à Antibes : aéroport Nice, Port Vauban, Cap d'Antibes, Juan-les-Pins. Plus grand port de plaisance d'Europe. Tarifs réglementés. Réservez.`
    Nouveau:

  - metaDescriptionEn [125] : `Taxi in Antibes: Nice airport, Port Vauban, Cap d'Antibes, Juan-les-Pins. Europe's largest marina. Regulated fares. Book now.`
    Nouveau:

### colmar
  - metaDescriptionFr [139] : `Taxi à Colmar : gare SNCF, EuroAirport, Route des Vins, marchés de Noël. Petite Venise alsacienne. Circuits vignobles. Réservez maintenant.`
    Nouveau:

  - metaDescriptionEn [123] : `Taxi in Colmar: SNCF station, EuroAirport, Wine Route, Christmas markets. Alsatian Petite Venise. Vineyard tours. Book now.`
    Nouveau:

### bayonne
  - metaDescriptionFr [130] : `Taxi à Bayonne : gare TGV, aéroport Biarritz, Biarritz, Saint-Jean-de-Luz, frontière espagnole. Capitale basque. Réservation 7j/7.`
    Nouveau:

  - metaDescriptionEn [121] : `Taxi in Bayonne: TGV station, Biarritz airport, Biarritz, Saint-Jean-de-Luz, Spanish border. Basque capital. Booking 7/7.`
    Nouveau:

### chambery
  - metaDescriptionFr [130] : `Taxi à Chambéry : aéroport Savoie, Courchevel, Méribel, Val Thorens, lac du Bourget. Porte des Alpes. 4x4 équipés neige. Réservez.`
    Nouveau:

  - metaDescriptionEn [134] : `Taxi in Chambéry: Savoie airport, Courchevel, Méribel, Val Thorens, Lac du Bourget. Gateway to the Alps. Snow-equipped 4x4s. Book now.`
    Nouveau:

### valence
  - metaDescriptionFr [134] : `Taxi à Valence : gare TGV, Montélimar, Vercors, Drôme provençale. Mi-chemin Paris–Marseille. Transfert gare–centre dès 20 €. Réservez.`
    Nouveau:

  - metaDescriptionEn [137] : `Taxi in Valence: TGV station, Montélimar, Vercors, Drôme Provençale. Halfway Paris–Marseille. Station–centre transfer from €20. Book now.`
    Nouveau:

---

## 4. Aéroports (src/data/airports.ts) — 50 pages

### paris-orly
  - metaDescription EN [142] : `Orly airport taxi: fixed fare 38-44 EUR, pickup in arrivals across sectors 1-4, reserved A6 lanes. Fast Paris-Orly transfer, book online 24/7.`
    Nouveau:

### nice-cote-d-azur
  - metaDescription EN [144] : `Nice Côte d'Azur taxi: 14M passengers/year, fixed-fare transfers to Cannes, Monaco, Antibes. Pickup at Terminal 1 & 2, reserved Promenade lanes.`
    Nouveau:

### lyon-saint-exupery
  - metaDescription FR [147] : `Taxi Lyon-Saint Exupéry : hub multimodal avec gare TGV, forfait garanti, moins cher que le Rhônexpress à 2+. Transferts ski Alpes en hiver, 24h/24.`
    Nouveau:

### toulouse-blagnac
  - metaDescription FR [147] : `Taxi Toulouse-Blagnac : forfait 28 € vers le Capitole, 4 halls desservis, rocade Arc-en-Ciel. Capitale de l'aéronautique, transfert express 24h/24.`
    Nouveau:

  - metaDescription EN [138] : `Toulouse-Blagnac taxi: 28 EUR fixed fare to Capitole, all 4 halls served, Arc-en-Ciel ring road. Aerospace capital, express transfer 24/7.`
    Nouveau:

### bordeaux-merignac
  - metaDescription EN [144] : `Bordeaux-Mérignac taxi: 7.7M passengers, 3 terminals, fixed-fare transfers to Saint-Émilion, Arcachon, Médoc. Arrivals pickup, book online 24/7.`
    Nouveau:

### strasbourg-entzheim
  - metaDescription EN [144] : `Strasbourg-Entzheim taxi: European capital airport, faster than train (15 min), Parliament and Petite France transfer. Wine Route, Colmar, 24/7.`
    Nouveau:

### lille-lesquin
  - metaDescription FR [149] : `Taxi Lille-Lesquin : forfait 25 € vers le centre, correspondances Eurostar et TGV Bruxelles. 2,2 M passagers, accueil en arrivée, réservation 24h/24.`
    Nouveau:

  - metaDescription EN [139] : `Lille-Lesquin taxi: 25 EUR fixed fare to centre, Eurostar and Brussels TGV connections. 2.2M passengers, arrivals pickup, book online 24/7.`
    Nouveau:

### paris-beauvais
  - metaDescription FR [149] : `Taxi Paris-Beauvais : alternative confortable à la navette, forfait fixe, 4 M passagers Ryanair/Wizz Air. Transfert porte-à-porte vers Paris, 24h/24.`
    Nouveau:

  - metaDescription EN [149] : `Paris-Beauvais taxi: comfortable alternative to the shuttle, fixed fare, 4M Ryanair/Wizz Air passengers. Door-to-door Paris transfer, available 24/7.`
    Nouveau:

### montpellier-mediterranee
  - metaDescription EN [147] : `Montpellier-Méditerranée taxi: 2M passengers, 8 km from centre, Comédie transfer in 15 min. Palavas and Sète beaches, fixed fare, book online 24/7.`
    Nouveau:

### ajaccio-napoleon-bonaparte
  - metaDescription EN [142] : `Ajaccio Napoleon Bonaparte taxi: 1.7M passengers, transfers to Porticcio and Calanques de Piana. Corsican driver in arrivals, fixed fare 24/7.`
    Nouveau:

### bastia-poretta
  - metaDescription EN [148] : `Bastia-Poretta taxi: gateway to Cap Corse, 1.3M passengers, Old Port transfer in 20 min. Driver who knows Corsican mountain passes, fixed fare 24/7.`
    Nouveau:

### brest-bretagne
  - metaDescription EN [143] : `Brest-Bretagne taxi: Finistère gateway, 1.1M passengers, Roscoff ferry and Océanopolis transfers. RN12 dual carriageway, fixed fare, book 24/7.`
    Nouveau:

### biarritz-pays-basque
  - metaDescription EN [139] : `Biarritz-Pays Basque taxi: 3 km from Grande Plage, 5-min express transfer. Saint-Jean-de-Luz, San Sebastián, Basque coast. Fixed fare 24/7.`
    Nouveau:

### toulon-hyeres
  - metaDescription FR [146] : `Taxi Toulon-Hyères : accès Saint-Tropez et Îles d'Or (Porquerolles), 700 000 passagers. Chauffeur varois, routes côtières, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [141] : `Toulon-Hyères taxi: access to Saint-Tropez and Golden Islands (Porquerolles), 700K passengers. Local driver, coastal routes, fixed fare 24/7.`
    Nouveau:

### rennes-bretagne
  - metaDescription FR [149] : `Taxi Rennes-Bretagne : capitale bretonne, 800 000 passagers, correspondances TGV Paris 1h25. Transfert Saint-Malo et côte d'Émeraude, forfait 24h/24.`
    Nouveau:

  - metaDescription EN [149] : `Rennes-Bretagne taxi: Brittany's capital, 800K passengers, TGV connections to Paris in 1h25. Saint-Malo and Emerald Coast transfers, fixed fare 24/7.`
    Nouveau:

### clermont-ferrand-auvergne
  - metaDescription FR [143] : `Taxi Clermont-Ferrand Auvergne : Chaîne des Puys UNESCO, Vulcania, siège Michelin. Forfait place de Jaude en 12 min, accueil en arrivée 24h/24.`
    Nouveau:

  - metaDescription EN [140] : `Clermont-Ferrand Auvergne taxi: UNESCO Chaîne des Puys, Vulcania, Michelin HQ. Fixed fare to Place de Jaude in 12 min, arrivals pickup 24/7.`
    Nouveau:

### pau-pyrenees
  - metaDescription FR [148] : `Taxi Pau-Pyrénées : porte des Pyrénées, transfert Lourdes 35 min, stations Gourette. Chauffeur béarnais, véhicules montagne, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [139] : `Pau-Pyrénées taxi: Pyrenees gateway, Lourdes transfer in 35 min, Gourette ski resorts. Béarnais driver, mountain vehicles, fixed fare 24/7.`
    Nouveau:

### perpignan-rivesaltes
  - metaDescription FR [142] : `Taxi Perpignan-Rivesaltes : « centre du monde » selon Dalí, Collioure et Font-Romeu ski. 500 000 passagers, chauffeur catalan, forfait 24h/24.`
    Nouveau:

  - metaDescription EN [138] : `Perpignan-Rivesaltes taxi: 'centre of the world' per Dalí, Collioure and Font-Romeu ski. 500K passengers, Catalan driver, fixed fare 24/7.`
    Nouveau:

### la-rochelle-ile-de-re
  - metaDescription FR [148] : `Taxi La Rochelle-Île de Ré : à 4 km du Vieux Port, pont Île de Ré inclus dans le forfait. Vols UK easyJet/Ryanair, prise en charge immédiate 24h/24.`
    Nouveau:

  - metaDescription EN [136] : `La Rochelle-Île de Ré taxi: 4 km from Old Port, Île de Ré bridge toll included in fare. UK easyJet/Ryanair flights, instant pickup 24/7.`
    Nouveau:

### figari-sud-corse
  - metaDescription EN [137] : `Figari-Sud Corse taxi: Palombaggia, Bonifacio, Porto-Vecchio. 700K summer passengers, local driver, fixed fare. Book 72h ahead in summer.`
    Nouveau:

### calvi-sainte-catherine
  - metaDescription FR [144] : `Taxi Calvi-Sainte Catherine : piste face à la mer, citadelle et plages de Balagne. 350 000 passagers, chauffeur balanin, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [136] : `Calvi-Sainte Catherine taxi: runway facing the sea, citadel and Balagne beaches. 350K passengers, local Balagne driver, fixed fare 24/7.`
    Nouveau:

### limoges-bellegarde
  - metaDescription FR [137] : `Taxi Limoges-Bellegarde : vols Ryanair Londres, Gare des Bénédictins en 10 min. 300 000 passagers, Périgord Vert, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [136] : `Limoges-Bellegarde taxi: Ryanair London flights, Gare des Bénédictins in 10 min. 300K passengers, Périgord Vert access, fixed fare 24/7.`
    Nouveau:

### caen-carpiquet
  - metaDescription FR [141] : `Taxi Caen-Carpiquet : porte de la Normandie, plages du Débarquement en 30 min, ferry Ouistreham. Ancien terrain WWII, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [123] : `Caen-Carpiquet taxi: gateway to Normandy, D-Day beaches in 30 min, Ouistreham ferry. Former WWII airfield, fixed fare 24/7.`
    Nouveau:

### tours-val-de-loire
  - metaDescription FR [149] : `Taxi Tours-Val de Loire : Châteaux Amboise, Chenonceau, Chambord. Vols Ryanair Londres/Porto, gare TGV en 15 min. Forfait garanti, circuits châteaux.`
    Nouveau:

  - metaDescription EN [147] : `Tours-Val de Loire taxi: Châteaux Amboise, Chenonceau, Chambord. Ryanair London/Porto flights, TGV station in 15 min. Fixed fare, château circuits.`
    Nouveau:

### grenoble-isere
  - metaDescription FR [144] : `Taxi Grenoble-Isère : spécialiste transferts ski, Alpe d'Huez et Deux Alpes. Véhicules équipés neige, chauffeurs alpins, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [134] : `Grenoble-Isère taxi: ski transfer specialist, Alpe d'Huez and Les Deux Alpes. Snow-equipped vehicles, Alpine drivers, fixed fare 24/7.`
    Nouveau:

### tarbes-lourdes-pyrenees
  - metaDescription FR [147] : `Taxi Tarbes-Lourdes-Pyrénées : sanctuaire de Lourdes en 12 min, stations Cauterets et Gavarnie. Seul aéroport pèlerinage de France, forfait 24h/24.`
    Nouveau:

  - metaDescription EN [141] : `Tarbes-Lourdes-Pyrénées taxi: Lourdes sanctuary in 12 min, Cauterets and Gavarnie resorts. France's only pilgrimage airport, fixed fare 24/7.`
    Nouveau:

### bergerac-dordogne-perigord
  - metaDescription EN [138] : `Bergerac Dordogne Périgord taxi: Sarlat, Lascaux, Monbazillac vineyards. 3 km from centre, UK Ryanair flights. Fixed fare, instant pickup.`
    Nouveau:

### carcassonne-salvaza
  - metaDescription FR [149] : `Taxi Carcassonne-Salvaza : Cité Médiévale UNESCO à 3 km, transfert en 5 min à 12 €. Pays Cathare, Canal du Midi. Forfait garanti, réservation 24h/24.`
    Nouveau:

  - metaDescription EN [140] : `Carcassonne-Salvaza taxi: UNESCO Medieval Citadel 3 km away, 5-min transfer at 12 EUR. Cathar Country, Canal du Midi. Fixed fare, book 24/7.`
    Nouveau:

### dinard-bretagne
  - metaDescription FR [146] : `Taxi Dinard-Bretagne : Saint-Malo intra-muros en 12 min, Côte d'Émeraude, Dinan médiéval. Vols Ryanair UK, forfait garanti, seul transport fiable.`
    Nouveau:

  - metaDescription EN [143] : `Dinard-Bretagne taxi: Saint-Malo intra-muros in 12 min, Emerald Coast, medieval Dinan. UK Ryanair flights, fixed fare, only reliable transport.`
    Nouveau:

### poitiers-biard
  - metaDescription FR [137] : `Taxi Poitiers-Biard : aéroport le plus proche du Futuroscope (12 min), gare TGV en 8 min. Terminal ultra-compact, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [124] : `Poitiers-Biard taxi: nearest airport to Futuroscope (12 min), TGV station in 8 min. Ultra-compact terminal, fixed fare 24/7.`
    Nouveau:

### rodez-aveyron
  - metaDescription FR [146] : `Taxi Rodez-Aveyron : musée Soulages, Conques (Compostelle), viaduc de Millau. 180 000 passagers, chauffeur local routes sinueuses, forfait 24h/24.`
    Nouveau:

  - metaDescription EN [140] : `Rodez-Aveyron taxi: Soulages Museum, Conques (Compostela), Millau Viaduct. 180K passengers, local driver for winding roads, fixed fare 24/7.`
    Nouveau:

### metz-nancy-lorraine
  - metaDescription FR [135] : `Taxi Metz-Nancy-Lorraine : Metz, Nancy et Luxembourg desservis, gare TGV adjacente en 5 min. 300 000 passagers, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [126] : `Metz-Nancy-Lorraine taxi: serving Metz, Nancy and Luxembourg, adjacent TGV station in 5 min. 300K passengers, fixed fare 24/7.`
    Nouveau:

### chambery-savoie-mont-blanc
  - metaDescription FR [142] : `Taxi Chambéry-Savoie : stations 3 Vallées (Courchevel, Méribel, Val Thorens). 4x4 équipés neige, chauffeurs savoyards, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [130] : `Chambéry-Savoie taxi: 3 Valleys resorts (Courchevel, Méribel, Val Thorens). Snow-equipped 4x4s, Savoyard drivers, fixed fare 24/7.`
    Nouveau:

### annecy-haute-savoie
  - metaDescription EN [137] : `Annecy-Haute-Savoie taxi: Lake Annecy in 8 min, La Clusaz skiing, Geneva alternative. Mountain vehicles, instant pickup, fixed fare 24/7.`
    Nouveau:

### lorient-bretagne-sud
  - metaDescription FR [147] : `Taxi Lorient-Bretagne Sud : Belle-Île, Carnac mégalithes, Festival Interceltique. 150 000 passagers, seul transport fiable, forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [138] : `Lorient-Bretagne Sud taxi: Belle-Île, Carnac megaliths, Interceltique Festival. 150K passengers, only reliable transport, fixed fare 24/7.`
    Nouveau:

### avignon-provence
  - metaDescription FR [149] : `Taxi Avignon-Provence : Palais des Papes en 12 min, gare TGV en 8 min, Lubéron et Gordes. Festival d'Avignon, saison lavande. Forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [146] : `Avignon-Provence taxi: Palais des Papes in 12 min, TGV station in 8 min, Lubéron and Gordes. Festival d'Avignon, lavender season. Fixed fare 24/7.`
    Nouveau:

### nimes-garons
  - metaDescription FR [145] : `Taxi Nîmes-Garons : Arènes romaines, Pont du Gard, Camargue sauvage. Ancienne base aéronavale, 200 000 passagers. Forfait garanti, férias 24h/24.`
    Nouveau:

  - metaDescription EN [133] : `Nîmes-Garons taxi: Roman Arena, Pont du Gard, wild Camargue. Former naval air base, 200K passengers. Fixed fare, ferias service 24/7.`
    Nouveau:

### deauville-normandie
  - metaDescription EN [141] : `Deauville-Normandie taxi: boardwalk in 10 min, Honfleur, Côte Fleurie. Film Festival, horse racing. Only comfortable option, fixed fare 24/7.`
    Nouveau:

### dole-jura
  - metaDescription FR [136] : `Taxi Dole-Jura : entre Besançon et Dijon, Salines UNESCO, ville de Pasteur. Vols Ryanair/TUI, ski nordique Jura. Forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [141] : `Dole-Jura taxi: between Besançon and Dijon, UNESCO Saltworks, Pasteur's birthplace. Ryanair/TUI flights, Jura Nordic skiing. Fixed fare 24/7.`
    Nouveau:

### agen-la-garenne
  - metaDescription FR [143] : `Taxi Agen-La Garenne : centre-ville en 6 min, l'un des plus rapides de France. Vols HOP! Paris-CDG, Moissac, rugby SUA. Forfait garanti 24h/24.`
    Nouveau:

  - metaDescription EN [129] : `Agen-La Garenne taxi: city centre in 6 min, one of France's fastest. HOP! Paris-CDG flights, Moissac, SUA rugby. Fixed fare 24/7.`
    Nouveau:

### lannion-cote-de-granit-rose
  - metaDescription FR [147] : `Taxi Lannion-Côte de Granit Rose : rochers roses Ploumanac'h, pôle télécom. Perros-Guirec en 15 min, vols Paris. Forfait garanti, aucun bus 24h/24.`
    Nouveau:

  - metaDescription EN [143] : `Lannion-Côte de Granit Rose taxi: pink Ploumanac'h rocks, telecom hub. Perros-Guirec in 15 min, Paris flights. Fixed fare, no bus service 24/7.`
    Nouveau:

### quimper-cornouaille
  - metaDescription EN [146] : `Quimper-Cornouaille taxi: Concarneau, Pont-Aven (Gauguin), Bénodet. Daily Paris-Orly flights, southern Finistère. Instant pickup, fixed fare 24/7.`
    Nouveau:

### castres-mazamet
  - metaDescription FR [145] : `Taxi Castres-Mazamet : siège Pierre Fabre, Albi UNESCO en 40 min, Montagne Noire. Vols HOP! Paris-Orly, Sidobre. Forfait garanti, compact 24h/24.`
    Nouveau:

  - metaDescription EN [137] : `Castres-Mazamet taxi: Pierre Fabre HQ, UNESCO Albi in 40 min, Montagne Noire. HOP! Paris-Orly flights, Sidobre. Fixed fare, compact 24/7.`
    Nouveau:

### aurillac-tronquieres
  - metaDescription EN [149] : `Aurillac-Tronquières taxi: centre in 5 min, Salers most beautiful village, Puy Mary, Le Lioran skiing. HOP! Paris-Orly, mountain vehicles, fare 24/7.`
    Nouveau:

### le-puy-loudes
  - metaDescription FR [145] : `Taxi Le Puy-Loudes : cathédrale et GR65 Compostelle en 12 min, plus petit terminal de France. Pèlerins Via Podiensis, HOP! Paris. Forfait 24h/24.`
    Nouveau:

  - metaDescription EN [137] : `Le Puy-Loudes taxi: cathedral and GR65 Camino in 12 min, France's smallest terminal. Via Podiensis pilgrims, HOP! Paris. Fixed fare 24/7.`
    Nouveau:

---

## 5. Gares (src/data/stations.ts) — 50 pages

### paris-gare-du-nord
  - metaDescription FR [145] : `Taxi Gare du Nord : 292 M voyageurs/an, hub Eurostar & Thalys. Forfait garanti, chauffeur à la sortie rue de Dunkerque. Réservez en ligne 24h/24.`
    Nouveau:

  - metaDescription EN [135] : `Taxi Gare du Nord: Europe's busiest station, 292M passengers/year. Eurostar & Thalys hub. Fixed fare, driver at exit. Book online 24/7.`
    Nouveau:

### paris-gare-de-lyon
  - metaDescription FR [134] : `Taxi Gare de Lyon : 148 M voyageurs/an, TGV Sud-Est, Suisse & Italie. Forfait fixe, suivi TGV temps réel. Réservation en ligne rapide.`
    Nouveau:

  - metaDescription EN [133] : `Taxi Gare de Lyon: 148M passengers/year, TGV to South, Switzerland & Italy. Fixed fare, real-time TGV tracking. Quick online booking.`
    Nouveau:

### paris-saint-lazare
  - metaDescription FR [138] : `Taxi Gare Saint-Lazare : 100 M voyageurs/an, porte de la Normandie. Chauffeur cour de Rome, forfait fixe. Réservez votre transfert 24h/24.`
    Nouveau:

  - metaDescription EN [132] : `Taxi Gare Saint-Lazare: 100M passengers/year, gateway to Normandy. Driver at cour de Rome exit, fixed fare. Book your transfer 24/7.`
    Nouveau:

### paris-montparnasse
  - metaDescription FR [131] : `Taxi Gare Montparnasse : 90 M voyageurs/an, TGV Bordeaux 2h04, Rennes 1h27. Forfait fixe, transfert Orly 20 min. Réservez en ligne.`
    Nouveau:

  - metaDescription EN [126] : `Taxi Gare Montparnasse: 90M passengers/year, TGV to Bordeaux 2h04, Rennes 1h27. Fixed fare, Orly transfer 20 min. Book online.`
    Nouveau:

### paris-gare-de-l-est
  - metaDescription FR [134] : `Taxi Gare de l'Est : 50 M voyageurs/an, TGV Strasbourg 1h46, ICE Francfort. Prix fixe, correspondance Gare du Nord en 3 min. Réservez.`
    Nouveau:

  - metaDescription EN [133] : `Taxi Gare de l'Est: 50M passengers/year, TGV to Strasbourg 1h46, ICE to Frankfurt. Fixed price, Gare du Nord link in 3 min. Book now.`
    Nouveau:

### paris-gare-d-austerlitz
  - metaDescription FR [136] : `Taxi Gare d'Austerlitz : trains de nuit & Intercités, 30 M voyageurs/an. Prise en charge dès 6h, transfert Orly 20 min. Forfait garanti.`
    Nouveau:

  - metaDescription EN [131] : `Taxi Gare d'Austerlitz: overnight trains & Intercites, 30M passengers/year. Pickup from 6am, Orly transfer 20 min. Guaranteed fare.`
    Nouveau:

### paris-gare-de-bercy
  - metaDescription FR [141] : `Taxi Gare de Bercy : trains de nuit vers l'Italie, 2 M voyageurs/an. Prise en charge tôt le matin, forfait fixe. Réservation rapide en ligne.`
    Nouveau:

  - metaDescription EN [122] : `Taxi Gare de Bercy: overnight trains to Italy, 2M passengers/year. Early morning pickup, fixed fare. Quick online booking.`
    Nouveau:

### lyon-part-dieu
  - metaDescription FR [135] : `Taxi Lyon Part-Dieu : plus grande gare TGV de France, 34 M voyageurs/an. Paris en 2h, Marseille en 1h40. Forfait fixe, réservez 24h/24.`
    Nouveau:

  - metaDescription EN [122] : `Taxi Lyon Part-Dieu: France's largest TGV hub, 34M passengers/year. Paris in 2h, Marseille in 1h40. Fixed fare, book 24/7.`
    Nouveau:

### lyon-perrache
  - metaDescription FR [130] : `Taxi Lyon-Perrache : gare historique, 10 M voyageurs/an. Quartier Confluence à 3 min. Forfait fixe, chauffeur disponible dès 5h30.`
    Nouveau:

  - metaDescription EN [122] : `Taxi Lyon-Perrache: historic station, 10M passengers/year. Confluence district 3 min away. Fixed fare, driver from 5:30am.`
    Nouveau:

### marseille-saint-charles
  - metaDescription FR [140] : `Taxi Marseille Saint-Charles : 14 M voyageurs/an, TGV Paris 3h15. Accueil nominatif, transfert ferry Corse. Forfait fixe, réservez en ligne.`
    Nouveau:

  - metaDescription EN [134] : `Taxi Marseille Saint-Charles: 14M passengers/year, TGV to Paris 3h15. Name-board welcome, Corsica ferry link. Fixed fare, book online.`
    Nouveau:

### lille-flandres
  - metaDescription FR [135] : `Taxi Lille Flandres : 22 M voyageurs/an, TGV Paris 1h. Correspondance Lille Europe en 3 min. Forfait fixe, réservation en ligne 24h/24.`
    Nouveau:

  - metaDescription EN [122] : `Taxi Lille Flandres: 22M passengers/year, TGV to Paris 1h. Lille Europe connection in 3 min. Fixed fare, book online 24/7.`
    Nouveau:

### lille-europe
  - metaDescription FR [135] : `Taxi Lille Europe : gare Eurostar & Thalys, 7 M voyageurs/an. Londres 1h20, Bruxelles 35 min. Chauffeurs multilingues, forfait garanti.`
    Nouveau:

  - metaDescription EN [130] : `Taxi Lille Europe: Eurostar & Thalys hub, 7M passengers/year. London 1h20, Brussels 35 min. Multilingual drivers, guaranteed fare.`
    Nouveau:

### bordeaux-saint-jean
  - metaDescription FR [134] : `Taxi Bordeaux Saint-Jean : 15 M voyageurs/an, TGV Paris 2h04. Parvis sud, forfait garanti, chauffeur dès 6h. Réservez votre transfert.`
    Nouveau:

  - metaDescription EN [128] : `Taxi Bordeaux Saint-Jean: 15M passengers/year, TGV from Paris 2h04. South forecourt, guaranteed fare, driver from 6am. Book now.`
    Nouveau:

### toulouse-matabiau
  - metaDescription FR [131] : `Taxi Toulouse-Matabiau : 12 M voyageurs/an, TGV Paris 4h20. Transfert Airbus Blagnac, forfait garanti. Réservation en ligne rapide.`
    Nouveau:

  - metaDescription EN [127] : `Taxi Toulouse-Matabiau: 12M passengers/year, TGV to Paris 4h20. Airbus Blagnac transfer, guaranteed fare. Quick online booking.`
    Nouveau:

### nice-ville
  - metaDescription FR [134] : `Taxi Nice-Ville : 8 M voyageurs/an, Côte d'Azur & Monaco. Transfert aéroport, forfait fixe avenue Thiers. Réservez votre Riviera taxi.`
    Nouveau:

  - metaDescription EN [129] : `Taxi Nice-Ville: 8M passengers/year, Cote d'Azur & Monaco. Airport transfer, fixed fare on avenue Thiers. Book your Riviera taxi.`
    Nouveau:

### nantes
  - metaDescription FR [126] : `Taxi Gare de Nantes : 12 M voyageurs/an, TGV Paris 2h15. Transfert aéroport 15 min, La Baule, forfait fixe. Réservez en ligne.`
    Nouveau:

  - metaDescription EN [120] : `Taxi Nantes station: 12M passengers/year, TGV to Paris 2h15. Airport transfer 15 min, La Baule, fixed fare. Book online.`
    Nouveau:

### strasbourg
  - metaDescription FR [129] : `Taxi Gare de Strasbourg : 15 M voyageurs/an, TGV Paris 1h46, ICE Francfort. Transfert Parlement européen, forfait fixe. Réservez.`
    Nouveau:

  - metaDescription EN [128] : `Taxi Strasbourg station: 15M passengers/year, TGV to Paris 1h46, ICE to Frankfurt. EU Parliament transfer, fixed fare. Book now.`
    Nouveau:

### montpellier-saint-roch
  - metaDescription FR [127] : `Taxi Montpellier Saint-Roch : 9 M voyageurs/an, TGV Paris 3h20. Aéroport 10 min, plages Palavas 15 min. Forfait fixe, réservez.`
    Nouveau:

  - metaDescription EN [129] : `Taxi Montpellier Saint-Roch: 9M passengers/year, TGV to Paris 3h20. Airport 10 min, Palavas beaches 15 min. Fixed fare, book now.`
    Nouveau:

### rennes
  - metaDescription FR [132] : `Taxi Gare de Rennes : 10 M voyageurs/an, TGV Paris 1h27. Transferts Saint-Malo & Mont-Saint-Michel. Forfait fixe, réservez en ligne.`
    Nouveau:

  - metaDescription EN [127] : `Taxi Rennes station: 10M passengers/year, TGV to Paris 1h27. Saint-Malo & Mont-Saint-Michel transfers. Fixed fare, book online.`
    Nouveau:

### marne-la-vallee-chessy
  - metaDescription FR [130] : `Taxi Marne-la-Vallée Chessy : Disneyland Paris, 15 M voyageurs/an. Sièges enfants, hôtels Disney en 2 min. Forfait fixe, réservez.`
    Nouveau:

  - metaDescription EN [126] : `Taxi Marne-la-Vallee Chessy: Disneyland Paris, 15M passengers/year. Child seats, Disney hotels in 2 min. Fixed fare, book now.`
    Nouveau:

### lyon-saint-exupery-tgv
  - metaDescription FR [127] : `Taxi Lyon Saint-Exupéry TGV : gare-aéroport, 4 M voyageurs/an. Transfert ski Alpes, pneus neige. Forfait fixe, réservez 24h/24.`
    Nouveau:

  - metaDescription EN [122] : `Taxi Lyon Saint-Exupery TGV: airport-station, 4M passengers/year. Alpine ski transfers, snow tyres. Fixed fare, book 24/7.`
    Nouveau:

### avignon-tgv
  - metaDescription FR [127] : `Taxi Avignon TGV : 4 M voyageurs/an, Paris 2h40. Transfert Luberon, Gordes, Festival d'Avignon. Centre en 10 min, forfait fixe.`
    Nouveau:

  - metaDescription EN [126] : `Taxi Avignon TGV: 4M passengers/year, Paris 2h40. Luberon, Gordes, Festival d'Avignon transfers. Centre in 10 min, fixed fare.`
    Nouveau:

### aix-en-provence-tgv
  - metaDescription FR [127] : `Taxi Aix-en-Provence TGV : 4 M voyageurs/an, Paris 3h. Centre Aix 15 min, aéroport Marseille 10 min. Forfait garanti, réservez.`
    Nouveau:

  - metaDescription EN [127] : `Taxi Aix-en-Provence TGV: 4M passengers/year, Paris 3h. Aix centre 15 min, Marseille airport 10 min. Guaranteed fare, book now.`
    Nouveau:

### valence-tgv
  - metaDescription FR [130] : `Taxi Valence TGV : 2 M voyageurs/an, Paris 2h15. Gare isolée, taxi indispensable. Centre en 10 min, Vercors, forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [127] : `Taxi Valence TGV: 2M passengers/year, Paris 2h15. Isolated station, taxi essential. Centre in 10 min, Vercors, guaranteed fare.`
    Nouveau:

### metz
  - metaDescription FR [127] : `Taxi Gare de Metz : 7 M voyageurs/an, TGV Paris 1h24. Transfert Luxembourg 40 min, Pompidou-Metz. Forfait fixe transfrontalier.`
    Nouveau:

  - metaDescription EN [125] : `Taxi Metz station: 7M passengers/year, TGV to Paris 1h24. Luxembourg transfer 40 min, Pompidou-Metz. Cross-border fixed fare.`
    Nouveau:

### nancy
  - metaDescription FR [125] : `Taxi Gare de Nancy : 7 M voyageurs/an, TGV Paris 1h30, Place Stanislas UNESCO. Aéroport 25 min, Vosges. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [129] : `Taxi Nancy station: 7M passengers/year, TGV to Paris 1h30, Place Stanislas UNESCO. Airport 25 min, Vosges. Guaranteed fixed fare.`
    Nouveau:

### reims
  - metaDescription FR [131] : `Taxi Gare de Reims : 5 M voyageurs/an, TGV Paris 45 min. Circuits caves Champagne, Épernay. Forfait fixe, réservez votre transfert.`
    Nouveau:

  - metaDescription EN [128] : `Taxi Reims station: 5M passengers/year, TGV to Paris 45 min. Champagne cellar circuits, Epernay. Fixed fare, book your transfer.`
    Nouveau:

### dijon-ville
  - metaDescription FR [129] : `Taxi Gare de Dijon : 7 M voyageurs/an, TGV Paris 1h40. Route des Grands Crus, Beaune, vendanges. Forfait fixe, réservez en ligne.`
    Nouveau:

  - metaDescription EN [130] : `Taxi Dijon station: 7M passengers/year, TGV to Paris 1h40. Route des Grands Crus, Beaune, harvest season. Fixed fare, book online.`
    Nouveau:

### grenoble
  - metaDescription FR [127] : `Taxi Gare de Grenoble : 5 M voyageurs/an, Alpe d'Huez & Deux Alpes. Pneus neige, transfert ski. Forfait fixe garanti, réservez.`
    Nouveau:

  - metaDescription EN [132] : `Taxi Grenoble station: 5M passengers/year, Alpe d'Huez & Les Deux Alpes. Snow tyres, ski transfers. Guaranteed fixed fare, book now.`
    Nouveau:

### tours
  - metaDescription FR [128] : `Taxi Gare de Tours : 7 M voyageurs/an, TGV Paris 1h15. Circuits châteaux de la Loire, Chenonceau, Amboise. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [126] : `Taxi Tours station: 7M passengers/year, TGV to Paris 1h15. Loire chateau circuits, Chenonceau, Amboise. Guaranteed fixed fare.`
    Nouveau:

### le-mans
  - metaDescription FR [123] : `Taxi Gare du Mans : 5 M voyageurs/an, TGV Paris 55 min. Circuit 24 Heures en 8 min, Cité Plantagenêt. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [130] : `Taxi Le Mans station: 5M passengers/year, TGV to Paris 55 min. 24 Hours circuit in 8 min, Cite Plantagenet. Guaranteed fixed fare.`
    Nouveau:

### rouen-rive-droite
  - metaDescription FR [128] : `Taxi Gare Rouen : 8 M voyageurs/an, Paris 1h20. Circuits Honfleur, Étretat, Giverny. Forfait fixe, chauffeur dès 5h30. Réservez.`
    Nouveau:

  - metaDescription EN [133] : `Taxi Rouen station: 8M passengers/year, Paris 1h20. Circuits to Honfleur, Etretat, Giverny. Fixed fare, driver from 5:30am. Book now.`
    Nouveau:

### toulon
  - metaDescription FR [128] : `Taxi Gare de Toulon : 3 M voyageurs/an, port ferry Corse en 5 min. Transfert Porquerolles, Saint-Tropez. Forfait fixe, réservez.`
    Nouveau:

  - metaDescription EN [129] : `Taxi Toulon station: 3M passengers/year, Corsica ferry port in 5 min. Porquerolles, Saint-Tropez transfers. Fixed fare, book now.`
    Nouveau:

### clermont-ferrand
  - metaDescription FR [123] : `Taxi Clermont-Ferrand : 4 M voyageurs/an, Intercités Paris 3h30. Vulcania 25 min, Puy de Dôme 20 min. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [128] : `Taxi Clermont-Ferrand: 4M passengers/year, Intercites to Paris 3h30. Vulcania 25 min, Puy de Dome 20 min. Guaranteed fixed fare.`
    Nouveau:

### saint-etienne-chateaucreux
  - metaDescription FR [124] : `Taxi Saint-Étienne Châteaucreux : 4 M voyageurs/an, TER Lyon 50 min. Stade ASSE 5 min, Cité du Design. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [125] : `Taxi Saint-Etienne Chateaucreux: 4M passengers/year, TER to Lyon 50 min. ASSE stadium 5 min, Cite du Design. Guaranteed fare.`
    Nouveau:

### angers-saint-laud
  - metaDescription FR [126] : `Taxi Angers Saint-Laud : 5 M voyageurs/an, TGV Paris 1h30. Saumur 30 min, vignobles Anjou. Forfait fixe, réservation en ligne.`
    Nouveau:

  - metaDescription EN [119] : `Taxi Angers Saint-Laud: 5M passengers/year, TGV to Paris 1h30. Saumur 30 min, Anjou vineyards. Fixed fare, book online.`
    Nouveau:

### poitiers
  - metaDescription FR [127] : `Taxi Gare de Poitiers : 4 M voyageurs/an, TGV Paris 1h20. Futuroscope en 10 min, poussettes bienvenues. Forfait fixe, réservez.`
    Nouveau:

  - metaDescription EN [123] : `Taxi Poitiers station: 4M passengers/year, TGV to Paris 1h20. Futuroscope in 10 min, family-friendly. Fixed fare, book now.`
    Nouveau:

### perpignan
  - metaDescription FR [128] : `Taxi Perpignan : 2 M voyageurs/an, TGV Barcelone 1h30. Collioure 18 min, Côte Vermeille. Forfait fixe franco-espagnol, réservez.`
    Nouveau:

  - metaDescription EN [129] : `Taxi Perpignan: 2M passengers/year, TGV to Barcelona 1h30. Collioure 18 min, Cote Vermeille. Franco-Spanish fixed fare, book now.`
    Nouveau:

### caen
  - metaDescription FR [127] : `Taxi Gare de Caen : 4 M voyageurs/an, Paris 2h. Circuits plages du Débarquement, ferry Ouistreham 12 min. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [118] : `Taxi Caen station: 4M passengers/year, Paris 2h. D-Day beach circuits, Ouistreham ferry 12 min. Guaranteed fixed fare.`
    Nouveau:

### limoges-benedictins
  - metaDescription FR [125] : `Taxi Limoges-Bénédictins : plus belle gare de France, 3 M voyageurs/an. Oradour 20 min, aéroport 8 min. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [126] : `Taxi Limoges-Benedictins: France's most beautiful station, 3M passengers/year. Oradour 20 min, airport 8 min. Guaranteed fare.`
    Nouveau:

### orleans
  - metaDescription FR [125] : `Taxi Gare d'Orléans : 5 M voyageurs/an, Paris 1h10. Chambord en taxi 30 min, Blois, Sologne. Forfait fixe, réservez en ligne.`
    Nouveau:

  - metaDescription EN [119] : `Taxi Orleans station: 5M passengers/year, Paris 1h10. Chambord by taxi 30 min, Blois, Sologne. Fixed fare, book online.`
    Nouveau:

### mulhouse-ville
  - metaDescription FR [124] : `Taxi Mulhouse : 4 M voyageurs/an, gare trinationale FR-CH-DE. Bâle 20 min, EuroAirport 20 min. Forfait fixe transfrontalier.`
    Nouveau:

  - metaDescription EN [123] : `Taxi Mulhouse: 4M passengers/year, trinational station FR-CH-DE. Basel 20 min, EuroAirport 20 min. Cross-border fixed fare.`
    Nouveau:

### amiens
  - metaDescription FR [125] : `Taxi Gare d'Amiens : 4 M voyageurs/an, Paris 1h10. Baie de Somme 40 min, mémoriaux 14-18. Forfait fixe, réservation en ligne.`
    Nouveau:

  - metaDescription EN [114] : `Taxi Amiens station: 4M passengers/year, Paris 1h10. Baie de Somme 40 min, WWI memorials. Fixed fare, book online.`
    Nouveau:

### besancon-viotte
  - metaDescription FR [122] : `Taxi Besançon Viotte : 3 M voyageurs/an, Citadelle Vauban UNESCO. Navette gare TGV 10 min, Jura ski. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [128] : `Taxi Besancon Viotte: 3M passengers/year, UNESCO Vauban Citadel. TGV station shuttle 10 min, Jura skiing. Guaranteed fixed fare.`
    Nouveau:

### la-rochelle-ville
  - metaDescription FR [124] : `Taxi La Rochelle : 2 M voyageurs/an, TGV Paris 3h. Île de Ré 20 min, Aquarium, Francofolies. Forfait fixe garanti, réservez.`
    Nouveau:

  - metaDescription EN [129] : `Taxi La Rochelle: 2M passengers/year, TGV to Paris 3h. Ile de Re 20 min, Aquarium, Francofolies. Guaranteed fixed fare, book now.`
    Nouveau:

### bayonne
  - metaDescription FR [124] : `Taxi Bayonne : 2 M voyageurs/an, Pays Basque. Biarritz 10 min, San Sebastián 45 min. Forfait transfrontalier fixe, réservez.`
    Nouveau:

  - metaDescription EN [123] : `Taxi Bayonne: 2M passengers/year, Basque Country. Biarritz 10 min, San Sebastian 45 min. Cross-border fixed fare, book now.`
    Nouveau:

### chambery
  - metaDescription FR [130] : `Taxi Chambéry : 3 M voyageurs/an, porte des 3 Vallées. Courchevel, Méribel, Val Thorens. Véhicules montagne, forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [130] : `Taxi Chambery: 3M passengers/year, gateway to the 3 Valleys. Courchevel, Meribel, Val Thorens. Mountain vehicles, guaranteed fare.`
    Nouveau:

### cannes
  - metaDescription FR [126] : `Taxi Cannes : 3 M voyageurs/an, ville du Festival. Croisette 3 min, aéroport Nice 30 min, Grasse 15 min. Forfait fixe garanti.`
    Nouveau:

  - metaDescription EN [123] : `Taxi Cannes: 3M passengers/year, Festival city. Croisette 3 min, Nice airport 30 min, Grasse 15 min. Guaranteed fixed fare.`
    Nouveau:

### versailles-chantiers
  - metaDescription FR [131] : `Taxi Versailles-Chantiers : 15 M voyageurs/an, Château 3 min. Transfert Orly 25 min, CDG 50 min. Forfait fixe, familles bienvenues.`
    Nouveau:

  - metaDescription EN [125] : `Taxi Versailles-Chantiers: 15M passengers/year, Palace 3 min. Orly transfer 25 min, CDG 50 min. Fixed fare, families welcome.`
    Nouveau:

### pau
  - metaDescription FR [129] : `Taxi Pau : 1,5 M voyageurs/an, porte des Pyrénées. Lourdes 30 min, aéroport 10 min, ski. Forfait fixe garanti, réservez en ligne.`
    Nouveau:

  - metaDescription EN [125] : `Taxi Pau: 1.5M passengers/year, Pyrenees gateway. Lourdes 30 min, airport 10 min, skiing. Guaranteed fixed fare, book online.`
    Nouveau:

---

## 6. Blog (src/data/blog.ts) — 17 articles

### tarifs-taxi-france-bareme
  - metaTitle FR [65] : `Tarifs taxi en France : barème officiel et astuces | TaxiNeo Blog`
    Nouveau:

  - metaDescription EN [132] : `Discover the official taxi fare schedule in France (A, B, C, D), meter price calculation, airport flat rates and 5 tips to pay less.`
    Nouveau:

### taxi-paris-orly-tarifs
  - metaTitle FR [69] : `Taxi Paris Orly : tarifs forfaitaires 2026 et conseils | TaxiNeo Blog`
    Nouveau:

  - metaDescription EN [133] : `Paris-Orly taxi flat rates (32 to 37 euros), terminals, routes, comparison with other transport and practical tips for your transfer.`
    Nouveau:

### devenir-chauffeur-taxi-france
  - metaTitle FR [71] : `Devenir chauffeur de taxi en France : guide complet 2026 | TaxiNeo Blog`
    Nouveau:

  - metaDescription FR [128] : `Conditions, examen, formation, licence ADS, statut, revenus : le guide complet pour devenir chauffeur de taxi en France en 2026.`
    Nouveau:

  - metaTitle EN [66] : `Become a taxi driver in France: complete 2026 guide | TaxiNeo Blog`
    Nouveau:

  - metaDescription EN [122] : `Requirements, exam, training, ADS license, status, income: the complete guide to becoming a taxi driver in France in 2026.`
    Nouveau:

### taxi-longue-distance-intercite
  - metaTitle FR [66] : `Taxi longue distance en France : tarifs et conseils | TaxiNeo Blog`
    Nouveau:

  - metaDescription FR [143] : `Taxi longue distance en France : calcul du prix, exemples de tarifs, comparaison train/covoiturage et conseils pour un trajet intercité réussi.`
    Nouveau:

  - metaDescription EN [133] : `Long distance taxi in France: price calculation, fare examples, train/carpooling comparison and tips for a successful intercity trip.`
    Nouveau:

### taxi-vs-vtc-differences
  - metaTitle FR [47] : `Taxi vs VTC : 7 différences clés | TaxiNeo Blog`
    Nouveau:

  - metaDescription FR [144] : `Tarifs, réglementation, voies de bus, assurance... Découvrez les 7 vraies différences entre un taxi et un VTC en France pour faire le bon choix.`
    Nouveau:

  - metaDescription EN [141] : `Fares, regulation, bus lanes, insurance... Discover the 7 real differences between a taxi and a rideshare in France to make the right choice.`
    Nouveau:

### prix-taxi-paris-cdg
  - metaDescription EN [138] : `How much does a taxi cost between Paris and CDG airport? Discover the official 2026 flat rates, day and night, and book at the best price.`
    Nouveau:

### taxi-aeroport-conseils
  - metaTitle FR [62] : `Taxi aéroport : 10 conseils pour un transfert réussi | TaxiNeo`
    Nouveau:

  - metaDescription FR [132] : `Réservation, horaires, bagages, point de rencontre... 10 conseils pratiques pour réussir votre transfert aéroport en taxi en France.`
    Nouveau:

  - metaDescription EN [110] : `Booking, timing, luggage, meeting point... 10 practical tips for a successful airport taxi transfer in France.`
    Nouveau:

### taxi-entreprise-b2b
  - metaTitle FR [65] : `Taxi entreprise B2B : solution mobilité professionnelle | TaxiNeo`
    Nouveau:

  - metaDescription EN [128] : `TaxiNeo Business simplifies managing your company's taxi rides: centralized billing, reporting, travel policies. Request a demo.`
    Nouveau:

### taxi-nuit-paris
  - metaTitle FR [61] : `Taxi de nuit Paris : tarifs et disponibilité 24h/24 | TaxiNeo`
    Nouveau:

  - metaDescription FR [145] : `Besoin d'un taxi à Paris après minuit ? Découvrez les tarifs de nuit, les zones couvertes et comment réserver un taxi fiable 24h/24 avec TaxiNeo.`
    Nouveau:

  - metaDescription EN [123] : `Need a taxi in Paris after midnight? Discover night fares, covered areas and how to book a reliable 24/7 taxi with TaxiNeo.`
    Nouveau:

### taxi-hopital-medical
  - metaTitle FR [65] : `Taxi conventionné hôpital : transport médical remboursé | TaxiNeo`
    Nouveau:

### prix-fixe-vs-compteur-taxi
  - metaDescription FR [162] : `Prix fixe ou compteur ? Découvrez les avantages et inconvénients de chaque mode de tarification taxi et pourquoi le prix fixe TaxiNeo est souvent plus avantageux.`
    Nouveau:

  - metaDescription EN [132] : `Fixed price or meter? Discover the pros and cons of each taxi pricing mode and why TaxiNeo fixed pricing is often more advantageous.`
    Nouveau:

### taxi-evenement-mariage-seminaire
  - metaDescription EN [145] : `Organize transport for your events: wedding, seminar, party. Shuttles, chauffeur service, group packages. Complete guide and quotes with TaxiNeo.`
    Nouveau:

### droits-passagers-taxi-france
  - metaDescription FR [176] : `Tarifs réglementés, paiement par carte, choix de l'itinéraire, reçu obligatoire... Découvrez tous vos droits en tant que passager de taxi en France et comment les faire valoir.`
    Nouveau:

  - metaTitle EN [46] : `Taxi passenger rights in France | TaxiNeo Blog`
    Nouveau:

  - metaDescription EN [145] : `Regulated fares, card payment, route choice, mandatory receipt... Discover all your rights as a taxi passenger in France and how to enforce them.`
    Nouveau:

### taxi-ou-transport-en-commun
  - metaTitle FR [63] : `Taxi ou transport en commun : comparatif complet | TaxiNeo Blog`
    Nouveau:

  - metaDescription FR [149] : `Budget, temps, confort, bagages... Découvrez quand le taxi est plus avantageux que les transports en commun et inversement. Guide comparatif complet.`
    Nouveau:

  - metaDescription EN [140] : `Budget, time, comfort, luggage... Find out when a taxi is more advantageous than public transport and vice versa. Complete comparison guide.`
    Nouveau:

### reserver-taxi-avance-pourquoi-comment
  - metaDescription FR [126] : `Découvrez pourquoi réserver un taxi à l'avance est indispensable et comment optimiser votre réservation pour un trajet serein.`
    Nouveau:

  - metaDescription EN [103] : `Find out why booking a taxi in advance is essential and how to optimize your booking for a smooth ride.`
    Nouveau:

### taxi-ecologique-transition-verte
  - metaTitle FR [62] : `Taxi écologique : la transition verte en France | TaxiNeo Blog`
    Nouveau:

  - metaTitle EN [64] : `Eco-friendly taxi: the green transition in France | TaxiNeo Blog`
    Nouveau:

  - metaDescription EN [137] : `Electric vehicles, hybrids, low emission zones, conversion grants... Discover how France's taxi sector is transforming to become greener.`
    Nouveau:


---

## Résumé

- **161 pages** avec au moins un champ hors tolérance
- **331 champs** à corriger au total
- Cible titre : 50-60 caractères
- Cible description : 150-160 caractères
