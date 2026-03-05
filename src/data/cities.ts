// ─── Interfaces ─────────────────────────────────────────────

export interface CityTestimonial {
  text: string;
  name: string;
  initials: string;
  role: string;
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityI18n {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  testimonials: CityTestimonial[];
  faq: CityFAQ[];
}

export interface City {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  population: number;
  landmarks: string[];
  nearbyCities: string[];
  driverCount: number;
  avgWaitTime: string;
  rating: number;
  i18n: {
    fr: CityI18n;
    en: CityI18n;
  };
}

// ─── Helper ─────────────────────────────────────────────────

function city(
  name: string,
  slug: string,
  lat: number,
  lng: number,
  population: number,
  landmarks: string[],
  nearbyCities: string[],
  testimonials: CityTestimonial[],
  faq: CityFAQ[],
  driverCount: number,
  avgWaitTime: string,
): City {
  return {
    name,
    slug,
    lat,
    lng,
    population,
    landmarks,
    nearbyCities,
    driverCount,
    avgWaitTime,
    rating: 4.8,
    i18n: {
      fr: {
        metaTitle: `Taxi à ${name} - Réservez en ligne 24h/24 | Tarif fixe`,
        metaDescription: `Réservez votre taxi à ${name} en quelques clics. Chauffeurs professionnels, tarifs réglementés, disponible 24h/24 pour vos transferts et courses en ville.`,
        heroTitle: `Votre taxi à ${name}`,
        heroSubtitle: `Réservez un taxi professionnel à ${name} en quelques secondes. Tarifs réglementés, chauffeurs agréés, disponible 24h/24.`,
        intro: `TaxiNeo vous connecte avec les meilleurs chauffeurs de taxi à ${name}. Que ce soit pour une course en ville, un transfert vers la gare ou l'aéroport, ou un déplacement professionnel, nos chauffeurs partenaires sont disponibles jour et nuit pour vous transporter en toute sécurité.`,
        testimonials,
        faq: [
          {
            question: `Quel est le prix d'un taxi à ${name} ?`,
            answer: `Les taxis à ${name} appliquent les tarifs réglementés par la préfecture. Le prix dépend de la distance, de l'heure et du jour (tarif A, B ou C). Avec TaxiNeo, vous obtenez une estimation avant de réserver.`,
          },
          {
            question: `Comment réserver un taxi à ${name} ?`,
            answer: `Utilisez le formulaire de réservation sur cette page. Entrez votre point de départ et votre destination, choisissez votre horaire et confirmez. Un chauffeur vous sera attribué en quelques minutes.`,
          },
          {
            question: `Les taxis TaxiNeo à ${name} sont-ils disponibles la nuit ?`,
            answer: `Oui, nos chauffeurs partenaires à ${name} sont disponibles 24h/24 et 7j/7, y compris les nuits, week-ends et jours fériés.`,
          },
          {
            question: `Peut-on réserver un taxi à l'avance à ${name} ?`,
            answer: `Absolument. Vous pouvez réserver votre taxi à ${name} jusqu'à 30 jours à l'avance via notre formulaire. Idéal pour les transferts aéroport ou les rendez-vous importants.`,
          },
          ...faq,
        ],
      },
      en: {
        metaTitle: `Taxi ${name} - Book your ride online 24/7 | Fixed fares`,
        metaDescription: `Book your taxi in ${name} in a few clicks. Licensed professional drivers, regulated fares, available 24/7 for all airport, station and city transfers.`,
        heroTitle: `Your taxi in ${name}`,
        heroSubtitle: `Book a professional taxi in ${name} in seconds. Regulated fares, licensed drivers, available 24/7.`,
        intro: `TaxiNeo connects you with the best taxi drivers in ${name}. Whether for a city ride, a transfer to the station or airport, or a business trip, our partner drivers are available day and night to transport you safely.`,
        testimonials,
        faq: [
          {
            question: `How much does a taxi cost in ${name}?`,
            answer: `Taxis in ${name} follow fares regulated by the local prefecture. The price depends on distance, time and day (fare A, B or C). With TaxiNeo, you get an estimate before booking.`,
          },
          {
            question: `How do I book a taxi in ${name}?`,
            answer: `Use the booking form on this page. Enter your pickup point and destination, choose your time and confirm. A driver will be assigned to you within minutes.`,
          },
          {
            question: `Are TaxiNeo taxis in ${name} available at night?`,
            answer: `Yes, our partner drivers in ${name} are available 24/7, including nights, weekends and public holidays.`,
          },
          {
            question: `Can I book a taxi in advance in ${name}?`,
            answer: `Absolutely. You can book your taxi in ${name} up to 30 days in advance through our form. Ideal for airport transfers or important appointments.`,
          },
          ...faq,
        ],
      },
    },
  };
}

// ─── 50 Cities ──────────────────────────────────────────────

export const cities: City[] = [
  city("Paris", "paris", 48.8566, 2.3522, 2161000, [
    "Aéroport Charles de Gaulle", "Aéroport d'Orly", "Gare du Nord", "Gare de Lyon",
    "Gare Montparnasse", "La Défense", "Quartier d'affaires Opéra", "Hôpital Pitié-Salpêtrière",
  ], ["versailles", "argenteuil", "nantes", "lyon", "lille"], [
    { text: "Un service impeccable pour mes trajets quotidiens vers La Défense. Le chauffeur connaît tous les raccourcis.", name: "Sophie L.", initials: "SL", role: "Cadre, Paris 16e" },
    { text: "Transfert Orly parfait à 5h du matin. Ponctuel, véhicule propre, prix fixe annoncé respecté.", name: "Marc D.", initials: "MD", role: "Voyageur fréquent" },
    { text: "Je réserve chaque semaine pour mes rendez-vous médicaux. Chauffeurs toujours patients et serviables.", name: "Jeanne P.", initials: "JP", role: "Retraitée, Paris 5e" },
  ], [
    { question: "Combien coûte un taxi Paris-CDG ?", answer: "Le trajet Paris-CDG est au forfait réglementé : 56 € depuis la rive droite, 65 € depuis la rive gauche. Pas de surprise avec TaxiNeo." },
    { question: "Les taxis TaxiNeo utilisent-ils les voies de bus à Paris ?", answer: "Oui, en tant que taxis officiels, nos chauffeurs ont accès aux couloirs de bus parisiens, ce qui réduit considérablement les temps de trajet." },
  ], 2500, "4 min"),

  city("Marseille", "marseille", 43.2965, 5.3698, 873076, [
    "Aéroport Marseille-Provence", "Gare Saint-Charles", "Vieux-Port", "La Joliette",
    "Hôpital de la Timone", "Quartier Euroméditerranée", "Stade Vélodrome", "Calanques",
  ], ["aix-en-provence", "toulon", "nimes", "avignon", "montpellier"], [
    { text: "Taxi toujours disponible même à la sortie du Vélodrome un soir de match. Service au top !", name: "Karim B.", initials: "KB", role: "Habitant, 13e arrondissement" },
    { text: "Transfert fiable vers l'aéroport Provence. Le chauffeur m'a aidé avec mes bagages sans hésiter.", name: "Claire M.", initials: "CM", role: "Entrepreneuse" },
    { text: "J'utilise TaxiNeo pour mes déplacements entre la Timone et mon domicile. Rapide et ponctuel.", name: "Dr. Farid A.", initials: "FA", role: "Médecin hospitalier" },
  ], [
    { question: "Combien coûte un taxi Marseille-Aéroport Provence ?", answer: "Le trajet entre le centre de Marseille et l'aéroport Provence coûte environ 50-60 € selon la circulation. Estimation disponible avant réservation." },
  ], 800, "5 min"),

  city("Lyon", "lyon", 45.7640, 4.8357, 522250, [
    "Aéroport Lyon-Saint Exupéry", "Gare Part-Dieu", "Gare Perrache",
    "Quartier d'affaires Part-Dieu", "Hôpitaux Est", "Confluence", "Université Lyon 1",
  ], ["villeurbanne", "saint-etienne", "grenoble", "annecy", "valence"], [
    { text: "Trajet Part-Dieu – Saint Exupéry en 30 minutes, chauffeur professionnel qui connaît Lyon par cœur.", name: "Thomas R.", initials: "TR", role: "Consultant, Lyon 3e" },
    { text: "Service Business parfait pour notre entreprise à Confluence. Facturation simplifiée.", name: "Nathalie G.", initials: "NG", role: "Directrice administrative" },
    { text: "Réservation simple, chauffeur ponctuel, véhicule confortable. Je recommande à tous les Lyonnais.", name: "Pierre V.", initials: "PV", role: "Architecte, Lyon 6e" },
  ], [
    { question: "Combien coûte un taxi Lyon-Saint Exupéry ?", answer: "Le forfait taxi Lyon centre – Aéroport Saint Exupéry est d'environ 60-70 €. Le prix exact est estimé avant votre réservation sur TaxiNeo." },
  ], 650, "4 min"),

  city("Toulouse", "toulouse", 43.6047, 1.4442, 504078, [
    "Aéroport Toulouse-Blagnac", "Gare Matabiau", "Place du Capitole",
    "CHU Purpan", "Airbus Blagnac", "Université Toulouse 1", "Quartier Compans-Caffarelli",
  ], ["montpellier", "bordeaux", "pau", "perpignan"], [
    { text: "Taxi fiable pour mes trajets quotidiens vers Airbus à Blagnac. Toujours à l'heure.", name: "Laurent F.", initials: "LF", role: "Ingénieur aéronautique" },
    { text: "Transfert aéroport Blagnac rapide et agréable. Le chauffeur connaît tous les raccourcis.", name: "Isabelle C.", initials: "IC", role: "Commerciale" },
    { text: "Super service pour mes déplacements médicaux vers Purpan. Chauffeurs très attentionnés.", name: "André M.", initials: "AM", role: "Retraité, Toulouse" },
  ], [
    { question: "Combien coûte un taxi Toulouse-Blagnac ?", answer: "Le trajet Toulouse centre – Aéroport Blagnac coûte environ 25-35 € selon l'heure. Prix estimé avant réservation." },
  ], 450, "5 min"),

  city("Nice", "nice", 43.7102, 7.2620, 342669, [
    "Aéroport Nice Côte d'Azur", "Gare Nice-Ville", "Promenade des Anglais",
    "Hôpital Pasteur", "Port de Nice", "Quartier d'affaires Arénas", "Université Sophia Antipolis",
  ], ["cannes", "antibes", "monaco", "avignon", "marseille"], [
    { text: "Taxi disponible même en plein Festival de Jazz. Service remarquable sur la Côte d'Azur.", name: "Brigitte S.", initials: "BS", role: "Hôtelière, Nice" },
    { text: "Transfert aéroport Nice – Monaco en toute sérénité. Chauffeur professionnel et discret.", name: "Maxime L.", initials: "ML", role: "Homme d'affaires" },
    { text: "Utilisation régulière pour mes déplacements à Sophia Antipolis. Fiable et ponctuel.", name: "Julie D.", initials: "JD", role: "Développeuse, Nice" },
  ], [
    { question: "Combien coûte un taxi Nice-Aéroport ?", answer: "Le forfait taxi Nice centre – Aéroport Côte d'Azur est d'environ 25-35 €. Estimation disponible sur TaxiNeo avant réservation." },
  ], 400, "4 min"),

  city("Nantes", "nantes", 47.2184, -1.5536, 320732, [
    "Aéroport Nantes Atlantique", "Gare de Nantes", "CHU de Nantes",
    "Île de Nantes", "Quartier Euronantes", "Université de Nantes", "Machines de l'île",
  ], ["rennes", "angers", "le-mans", "tours", "la-rochelle"], [
    { text: "Service excellent pour mes trajets vers l'aéroport Atlantique. Jamais en retard.", name: "Yann B.", initials: "YB", role: "Entrepreneur, Nantes" },
    { text: "Chauffeur sympa et efficace pour mes déplacements sur l'Île de Nantes.", name: "Marine K.", initials: "MK", role: "Designer, Nantes" },
    { text: "TaxiNeo est devenu indispensable pour mes rendez-vous d'affaires à Euronantes.", name: "François H.", initials: "FH", role: "Avocat, Nantes" },
  ], [
    { question: "Combien coûte un taxi Nantes-Aéroport ?", answer: "Le trajet Nantes centre – Aéroport Atlantique coûte environ 30-40 €. Estimation précise disponible avant réservation." },
  ], 350, "5 min"),

  city("Montpellier", "montpellier", 43.6108, 3.8767, 299096, [
    "Aéroport Montpellier-Méditerranée", "Gare Saint-Roch", "CHU Lapeyronie",
    "Place de la Comédie", "Quartier Antigone", "Université de Montpellier", "Odysseum",
  ], ["nimes", "marseille", "toulouse", "perpignan", "avignon"], [
    { text: "Taxi réactif même en période de festivals. Le chauffeur connaît Montpellier comme sa poche.", name: "Emma T.", initials: "ET", role: "Étudiante, Montpellier" },
    { text: "Transfert gare Saint-Roch vers Lapeyronie rapide et confortable.", name: "Michel R.", initials: "MR", role: "Patient régulier" },
    { text: "Service pro pour mes déplacements d'affaires à Antigone. Je recommande.", name: "Sandrine L.", initials: "SaL", role: "Consultante" },
  ], [
    { question: "Combien coûte un taxi à Montpellier ?", answer: "Les courses en ville à Montpellier coûtent en moyenne 10-20 €. Le trajet vers l'aéroport environ 25-35 €." },
  ], 300, "5 min"),

  city("Strasbourg", "strasbourg", 48.5734, 7.7521, 287228, [
    "Aéroport Strasbourg-Entzheim", "Gare de Strasbourg", "Parlement européen",
    "Hôpitaux Universitaires", "Quartier européen", "Petite France", "Université de Strasbourg",
  ], ["colmar", "mulhouse", "nancy", "metz"], [
    { text: "Parfait pour mes trajets vers le Parlement européen. Service ponctuel et professionnel.", name: "Hans M.", initials: "HM", role: "Fonctionnaire européen" },
    { text: "Transfert gare – aéroport Entzheim rapide. Chauffeur très agréable.", name: "Catherine W.", initials: "CW", role: "Voyageuse, Strasbourg" },
    { text: "Service fiable pour mes déplacements médicaux aux Hôpitaux Universitaires.", name: "René K.", initials: "RK", role: "Retraité, Strasbourg" },
  ], [
    { question: "Combien coûte un taxi Strasbourg-Entzheim ?", answer: "Le trajet Strasbourg centre – Aéroport Entzheim coûte environ 25-35 €, selon l'heure et la circulation." },
  ], 300, "5 min"),

  city("Bordeaux", "bordeaux", 44.8378, -0.5792, 260958, [
    "Aéroport Bordeaux-Mérignac", "Gare Saint-Jean", "CHU Pellegrin",
    "Quartier Mériadeck", "Place de la Bourse", "Université de Bordeaux", "Cité du Vin",
  ], ["toulouse", "pau", "la-rochelle", "limoges", "poitiers"], [
    { text: "Transfert aéroport Mérignac impeccable. Le chauffeur était là 10 minutes avant l'heure.", name: "Jean-Luc P.", initials: "JLP", role: "Viticulteur, Bordeaux" },
    { text: "Taxi disponible rapidement un soir de match au Matmut Atlantique. Très pratique.", name: "Alexis D.", initials: "AD", role: "Étudiant, Bordeaux" },
    { text: "Service régulier pour mes trajets vers Pellegrin. Chauffeurs attentionnés.", name: "Monique V.", initials: "MV", role: "Patiente, Bordeaux" },
  ], [
    { question: "Combien coûte un taxi Bordeaux-Mérignac ?", answer: "Le forfait taxi Bordeaux centre – Aéroport Mérignac est d'environ 30-45 € selon l'heure." },
  ], 400, "5 min"),

  city("Lille", "lille", 50.6292, 3.0573, 236234, [
    "Aéroport Lille-Lesquin", "Gare Lille-Flandres", "Gare Lille-Europe",
    "CHU de Lille", "Quartier Euralille", "Université de Lille", "Vieux-Lille",
  ], ["dunkerque", "calais", "amiens", "reims"], [
    { text: "Taxi fiable depuis Lille-Europe après chaque Eurostar. Service rapide et efficace.", name: "Philippe B.", initials: "PB", role: "Homme d'affaires, Lille" },
    { text: "Parfait pour mes déplacements à Euralille. Chauffeurs professionnels.", name: "Valérie T.", initials: "VT", role: "Cadre, Lille" },
    { text: "Transfert vers Lesquin toujours impeccable, même tôt le matin.", name: "Damien C.", initials: "DC", role: "Commercial, Lille" },
  ], [
    { question: "Combien coûte un taxi Lille-Lesquin ?", answer: "Le trajet Lille centre – Aéroport Lesquin coûte environ 20-30 € selon l'heure de la journée." },
  ], 350, "4 min"),

  city("Rennes", "rennes", 48.1173, -1.6778, 222485, [
    "Gare de Rennes", "CHU Pontchaillou", "Quartier Beauregard",
    "Université Rennes 1", "Les Champs Libres", "Centre commercial Alma", "Parc des Gayeulles",
  ], ["nantes", "brest", "le-mans", "angers", "caen"], [
    { text: "Taxi rapide depuis la gare TGV. En 10 minutes j'étais à mon hôtel.", name: "Olivier G.", initials: "OG", role: "Voyageur, Rennes" },
    { text: "Service parfait pour mes trajets CHU Pontchaillou. Merci TaxiNeo !", name: "Anne-Marie F.", initials: "AMF", role: "Infirmière, Rennes" },
    { text: "Chauffeur agréable et véhicule propre pour tous mes déplacements rennais.", name: "Julien N.", initials: "JN", role: "Développeur, Rennes" },
  ], [
    { question: "Y a-t-il un aéroport à Rennes ?", answer: "Oui, l'aéroport Rennes-Bretagne se trouve à 15 minutes du centre. TaxiNeo assure les transferts pour environ 20-30 €." },
  ], 250, "5 min"),

  city("Reims", "reims", 49.2583, 4.0317, 187181, [
    "Gare de Reims", "CHU de Reims", "Centre des Congrès",
    "Cathédrale Notre-Dame", "Université de Reims", "Quartier Clairmarais", "Parc de Champagne",
  ], ["paris", "lille", "metz", "nancy", "amiens"], [
    { text: "Transfert gare – domicile toujours rapide. Idéal après un TGV depuis Paris.", name: "Stéphane M.", initials: "SM", role: "Cadre, Reims" },
    { text: "Service fiable pour les visites de caves de Champagne avec des clients.", name: "Dominique L.", initials: "DL", role: "Négociant en vins" },
    { text: "Taxi ponctuel pour mes rendez-vous au Centre des Congrès.", name: "Céline R.", initials: "CR", role: "Organisatrice événementiel" },
  ], [
    { question: "Peut-on visiter les caves de Champagne en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour visiter les maisons de Champagne. Contactez-nous pour un devis personnalisé." },
  ], 180, "5 min"),

  city("Saint-Étienne", "saint-etienne", 45.4397, 4.3872, 177480, [
    "Gare de Châteaucreux", "CHU de Saint-Étienne", "Quartier Châteaucreux",
    "Université Jean Monnet", "Musée d'Art Moderne", "Stade Geoffroy-Guichard", "Cité du Design",
  ], ["lyon", "villeurbanne", "clermont-ferrand", "grenoble", "valence"], [
    { text: "Taxi rapide depuis Châteaucreux vers le centre. Service au top.", name: "David P.", initials: "DP", role: "Ingénieur, Saint-Étienne" },
    { text: "Transfert fiable Saint-Étienne – Lyon Saint Exupéry pour mes vols.", name: "Sylvie A.", initials: "SA", role: "Cadre commerciale" },
    { text: "Chauffeur ponctuel les soirs de match au Chaudron. Merci !", name: "Nicolas J.", initials: "NJ", role: "Supporter stéphanois" },
  ], [
    { question: "Peut-on prendre un taxi Saint-Étienne – Lyon ?", answer: "Oui, nos chauffeurs assurent les trajets Saint-Étienne – Lyon (environ 60 km). Comptez 70-90 € selon la circulation." },
  ], 200, "5 min"),

  city("Le Havre", "le-havre", 49.4944, 0.1079, 172366, [
    "Port du Havre", "Gare du Havre", "Hôpital Jacques Monod",
    "Quartier Perret", "Université Le Havre Normandie", "Plage du Havre", "Docks Vauban",
  ], ["rouen", "caen", "amiens", "paris"], [
    { text: "Taxi disponible même au retour des ferries. Service pratique et fiable.", name: "Patrick L.", initials: "PL", role: "Voyageur, Le Havre" },
    { text: "Trajet port – gare rapide pour attraper mon train vers Paris.", name: "Élise B.", initials: "EB", role: "Cadre, Le Havre" },
    { text: "Chauffeur agréable pour mes déplacements dans le quartier Perret.", name: "Gérard F.", initials: "GF", role: "Retraité, Le Havre" },
  ], [
    { question: "Peut-on prendre un taxi depuis le port du Havre ?", answer: "Oui, nos chauffeurs sont disponibles au port pour les passagers de ferries et croisières. Réservez à l'avance pour être sûr." },
  ], 150, "6 min"),

  city("Toulon", "toulon", 43.1242, 5.9280, 171953, [
    "Port de Toulon", "Gare de Toulon", "Hôpital Sainte-Musse",
    "Arsenal de Toulon", "Université de Toulon", "Mont Faron", "Mourillon",
  ], ["marseille", "aix-en-provence", "nice", "cannes"], [
    { text: "Taxi fiable depuis la gare vers le port. Idéal avant l'embarquement pour la Corse.", name: "Jean-Marc D.", initials: "JMD", role: "Voyageur, Toulon" },
    { text: "Service rapide pour mes déplacements vers l'hôpital Sainte-Musse.", name: "Martine C.", initials: "MC", role: "Patiente, Toulon" },
    { text: "Chauffeur ponctuel et véhicule propre. Je recommande TaxiNeo à Toulon.", name: "Fabien S.", initials: "FS", role: "Militaire, Toulon" },
  ], [
    { question: "Peut-on prendre un taxi pour le port de Toulon ?", answer: "Oui, nos chauffeurs assurent les transferts vers le port pour les ferries vers la Corse et les îles d'Hyères." },
  ], 180, "5 min"),

  city("Grenoble", "grenoble", 45.1885, 5.7245, 160779, [
    "Gare de Grenoble", "CHU Grenoble Alpes", "Quartier Europole",
    "Université Grenoble Alpes", "Bastille", "Presqu'île scientifique", "Alpexpo",
  ], ["lyon", "valence", "chambery", "annecy", "saint-etienne"], [
    { text: "Taxi fiable pour mes trajets vers le campus universitaire. Toujours ponctuel.", name: "Lucie B.", initials: "LB", role: "Chercheuse, Grenoble" },
    { text: "Transfert Grenoble – Lyon Saint Exupéry confortable et à l'heure.", name: "Antoine G.", initials: "AG", role: "Cadre, Grenoble" },
    { text: "Service parfait pour accéder à la Presqu'île scientifique.", name: "Rémi T.", initials: "RT", role: "Ingénieur, Grenoble" },
  ], [
    { question: "Peut-on prendre un taxi Grenoble – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers les stations (Chamrousse, les 2 Alpes, l'Alpe d'Huez). Réservez à l'avance en saison." },
  ], 200, "5 min"),

  city("Dijon", "dijon", 47.3220, 5.0415, 159346, [
    "Gare Dijon-Ville", "CHU Dijon", "Quartier Toison d'Or",
    "Université de Bourgogne", "Centre-ville historique", "Palais des Ducs", "Zénith de Dijon",
  ], ["besancon", "lyon", "metz", "nancy", "reims"], [
    { text: "Taxi rapide depuis la gare TGV. Parfait pour mes déplacements professionnels.", name: "Christian P.", initials: "CP", role: "Cadre, Dijon" },
    { text: "Service fiable pour les visites des vignobles bourguignons.", name: "Marie-Claire D.", initials: "MCD", role: "Touriste" },
    { text: "Transfert régulier vers le CHU. Chauffeurs toujours aimables.", name: "Bernard G.", initials: "BG", role: "Patient, Dijon" },
  ], [
    { question: "Peut-on visiter les vignobles en taxi depuis Dijon ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour la route des Grands Crus. Contactez-nous pour un devis." },
  ], 170, "5 min"),

  city("Angers", "angers", 47.4784, -0.5632, 157175, [
    "Gare d'Angers Saint-Laud", "CHU d'Angers", "Quartier La Doutre",
    "Université d'Angers", "Château d'Angers", "Terra Botanica", "Parc des Expositions",
  ], ["nantes", "le-mans", "tours", "rennes"], [
    { text: "Taxi depuis la gare Saint-Laud toujours disponible et rapide.", name: "Guillaume R.", initials: "GR", role: "Voyageur, Angers" },
    { text: "Service parfait pour mes trajets vers le CHU. Merci TaxiNeo.", name: "Françoise M.", initials: "FM", role: "Patiente, Angers" },
    { text: "Chauffeur ponctuel pour mes rendez-vous au Parc des Expositions.", name: "Benoît L.", initials: "BL", role: "Commercial, Angers" },
  ], [
    { question: "Y a-t-il un aéroport à Angers ?", answer: "L'aéroport Angers-Loire se trouve à 20 minutes du centre. TaxiNeo assure les transferts pour environ 25-35 €." },
  ], 160, "5 min"),

  city("Nîmes", "nimes", 43.8367, 4.3601, 151001, [
    "Gare de Nîmes", "CHU de Nîmes", "Arènes de Nîmes",
    "Université de Nîmes", "Quartier Costières", "Maison Carrée", "Jardins de la Fontaine",
  ], ["montpellier", "avignon", "marseille", "aix-en-provence"], [
    { text: "Taxi disponible rapidement pour les événements aux Arènes. Très pratique.", name: "Pascal D.", initials: "PD", role: "Nîmois" },
    { text: "Transfert gare TGV fiable après chaque voyage depuis Paris.", name: "Agnès S.", initials: "AS", role: "Cadre, Nîmes" },
    { text: "Service régulier pour mes consultations au CHU. Toujours satisfaite.", name: "Mireille V.", initials: "MiV", role: "Patiente, Nîmes" },
  ], [
    { question: "Y a-t-il un aéroport à Nîmes ?", answer: "Oui, l'aéroport Nîmes-Garons (Alès-Camargue-Cévennes) est à 15 minutes. Transferts assurés par TaxiNeo." },
  ], 150, "6 min"),

  city("Villeurbanne", "villeurbanne", 45.7660, 4.8795, 154781, [
    "Campus de la Doua", "Gratte-Ciel", "Hôpital Desgenettes",
    "INSA Lyon", "Université Lyon 1", "Tonkin", "Palais des Sports",
  ], ["lyon", "saint-etienne", "grenoble", "annecy"], [
    { text: "Taxi fiable pour mes trajets campus Doua – Part-Dieu. Indispensable.", name: "Sarah K.", initials: "SK", role: "Étudiante, Villeurbanne" },
    { text: "Service ponctuel pour mes déplacements depuis les Gratte-Ciel.", name: "Alain B.", initials: "AB", role: "Cadre, Villeurbanne" },
    { text: "Chauffeur agréable pour mes trajets vers l'hôpital. Merci.", name: "Denise P.", initials: "DeP", role: "Retraitée, Villeurbanne" },
  ], [
    { question: "Villeurbanne est-elle couverte par TaxiNeo Lyon ?", answer: "Oui, Villeurbanne est entièrement couverte. Nos chauffeurs assurent toutes les courses dans la métropole lyonnaise." },
  ], 200, "4 min"),

  city("Clermont-Ferrand", "clermont-ferrand", 45.7772, 3.0870, 147865, [
    "Aéroport Clermont-Ferrand Auvergne", "Gare de Clermont-Ferrand", "CHU Gabriel-Montpied",
    "Place de Jaude", "Université Clermont Auvergne", "Quartier République", "Vulcania",
  ], ["saint-etienne", "lyon", "limoges", "dijon", "valence"], [
    { text: "Taxi rapide depuis la gare vers le plateau de Gergovie. Chauffeur passionné par l'Auvergne.", name: "Didier C.", initials: "DiC", role: "Touriste" },
    { text: "Service fiable pour mes trajets vers le CHU Montpied chaque semaine.", name: "Hélène A.", initials: "HA", role: "Patiente, Clermont" },
    { text: "Transfert aéroport Aulnat ponctuel et professionnel.", name: "Xavier B.", initials: "XB", role: "Cadre, Clermont" },
  ], [
    { question: "Combien coûte un taxi Clermont – Vulcania ?", answer: "Le trajet Clermont-Ferrand – Vulcania (environ 25 km) coûte entre 35 et 45 €. Idéal pour une sortie en famille." },
  ], 170, "5 min"),

  city("Aix-en-Provence", "aix-en-provence", 43.5297, 5.4474, 147122, [
    "Gare TGV Aix-en-Provence", "Cours Mirabeau", "Hôpital du Pays d'Aix",
    "Université Aix-Marseille", "Quartier Sextius", "Atelier Cézanne", "Parc Saint-Mitre",
  ], ["marseille", "toulon", "avignon", "nimes", "montpellier"], [
    { text: "Transfert gare TGV – centre-ville toujours parfait. Rapide et agréable.", name: "Véronique M.", initials: "VM", role: "Aixoise" },
    { text: "Mise à disposition idéale pour visiter la Provence avec des amis étrangers.", name: "Robert T.", initials: "RoT", role: "Retraité, Aix" },
    { text: "Service pro pour mes déplacements universitaires. Je recommande.", name: "Camille F.", initials: "CF", role: "Professeure, Aix" },
  ], [
    { question: "La gare TGV d'Aix est-elle loin du centre ?", answer: "La gare TGV est à 15 km du centre d'Aix. Le taxi TaxiNeo vous y conduit en 15-20 minutes pour environ 30-40 €." },
  ], 180, "5 min"),

  city("Le Mans", "le-mans", 47.9960, 0.1996, 146105, [
    "Gare du Mans", "Centre Hospitalier du Mans", "Circuit des 24 Heures",
    "Université du Mans", "Cité Plantagenêt", "Antarès", "Centre-Sud",
  ], ["angers", "tours", "rennes", "nantes", "paris"], [
    { text: "Taxi disponible même pendant les 24 Heures. Impressionnant.", name: "Vincent L.", initials: "VL", role: "Fan de sport auto" },
    { text: "Trajet gare TGV – domicile rapide et fiable. Mon taxi de confiance.", name: "Colette B.", initials: "CoB", role: "Cadre, Le Mans" },
    { text: "Service régulier pour le Centre Hospitalier. Chauffeurs sympathiques.", name: "Jacques D.", initials: "JaD", role: "Patient, Le Mans" },
  ], [
    { question: "Peut-on prendre un taxi pendant les 24H du Mans ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant les 24 Heures du Mans. Réservez à l'avance pour plus de sérénité." },
  ], 140, "6 min"),

  city("Brest", "brest", 48.3904, -4.4861, 142722, [
    "Aéroport Brest-Bretagne", "Gare de Brest", "CHU de Brest",
    "Port de Brest", "Université de Bretagne Occidentale", "Océanopolis", "Quartier Siam",
  ], ["rennes", "nantes", "caen"], [
    { text: "Taxi fiable depuis l'aéroport Guipavas. Service rapide et ponctuel.", name: "Yves G.", initials: "YG", role: "Marin, Brest" },
    { text: "Transfert port – gare sans problème. Chauffeur arrangeant.", name: "Nolwenn R.", initials: "NR", role: "Voyageuse, Brest" },
    { text: "Service de qualité pour mes trajets CHU de Brest.", name: "Jean-Pierre M.", initials: "JPM", role: "Patient, Brest" },
  ], [
    { question: "Combien coûte un taxi Brest-Aéroport ?", answer: "Le trajet Brest centre – Aéroport Guipavas coûte environ 15-25 €. Estimation avant réservation sur TaxiNeo." },
  ], 140, "6 min"),

  city("Tours", "tours", 47.3941, 0.6848, 138588, [
    "Gare de Tours", "Gare TGV Saint-Pierre-des-Corps", "CHU Trousseau",
    "Université de Tours", "Place Plumereau", "Centre de Congrès Vinci", "Quartier des Prébendes",
  ], ["le-mans", "angers", "orleans", "poitiers", "nantes"], [
    { text: "Transfert gare Saint-Pierre-des-Corps – centre de Tours impeccable.", name: "Florence D.", initials: "FD", role: "Voyageuse, Tours" },
    { text: "Taxi pour visiter les châteaux de la Loire. Chauffeur-guide formidable.", name: "Richard S.", initials: "RS", role: "Touriste" },
    { text: "Service régulier vers le CHU Trousseau. Toujours satisfait.", name: "Maurice L.", initials: "MaL", role: "Patient, Tours" },
  ], [
    { question: "Peut-on visiter les châteaux de la Loire en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour visiter Chambord, Chenonceau, Amboise et d'autres châteaux. Demandez un devis." },
  ], 150, "5 min"),

  city("Amiens", "amiens", 49.8941, 2.2958, 136105, [
    "Gare d'Amiens", "CHU Amiens-Picardie", "Cathédrale Notre-Dame",
    "Université de Picardie", "Quartier Saint-Leu", "Zénith d'Amiens", "Hortillonnages",
  ], ["lille", "paris", "reims", "rouen", "calais"], [
    { text: "Taxi rapide depuis la gare pour mes rendez-vous au CHU.", name: "Christophe M.", initials: "ChM", role: "Médecin, Amiens" },
    { text: "Service fiable pour mes trajets professionnels dans Amiens.", name: "Delphine B.", initials: "DeB", role: "Cadre, Amiens" },
    { text: "Chauffeur sympa et ponctuel. Je recommande TaxiNeo.", name: "Thierry R.", initials: "ThR", role: "Amiénois" },
  ], [
    { question: "Amiens est-elle bien desservie par les taxis ?", answer: "Oui, TaxiNeo couvre toute l'agglomération d'Amiens avec des chauffeurs disponibles 24h/24. Temps d'attente moyen : 6 minutes." },
  ], 130, "6 min"),

  city("Limoges", "limoges", 45.8336, 1.2611, 133968, [
    "Aéroport Limoges-Bellegarde", "Gare des Bénédictins", "CHU Dupuytren",
    "Université de Limoges", "Quartier de la Cathédrale", "Musée de la Porcelaine", "Zénith de Limoges",
  ], ["clermont-ferrand", "poitiers", "bordeaux", "tours"], [
    { text: "La gare des Bénédictins est magnifique et le taxi TaxiNeo m'attendait à la sortie.", name: "Daniel F.", initials: "DF", role: "Voyageur" },
    { text: "Transfert aéroport Bellegarde rapide et abordable.", name: "Pauline G.", initials: "PG", role: "Étudiante, Limoges" },
    { text: "Service de qualité pour mes trajets CHU Dupuytren.", name: "Odette V.", initials: "OV", role: "Patiente, Limoges" },
  ], [
    { question: "Combien coûte un taxi Limoges-Aéroport ?", answer: "Le trajet Limoges centre – Aéroport Bellegarde coûte environ 15-25 €. Disponible 24h/24." },
  ], 120, "6 min"),

  city("Annecy", "annecy", 45.8992, 6.1294, 132654, [
    "Gare d'Annecy", "Centre Hospitalier Annecy Genevois", "Lac d'Annecy",
    "Vieille ville", "Quartier Novel", "Parc des Expositions", "Semnoz",
  ], ["lyon", "chambery", "grenoble", "geneve"], [
    { text: "Taxi depuis la gare vers les bords du lac. Chauffeur qui connaît les meilleurs spots.", name: "Éric L.", initials: "EL", role: "Touriste" },
    { text: "Transfert Annecy – Genève Aéroport confortable et ponctuel.", name: "Isabelle K.", initials: "IK", role: "Cadre, Annecy" },
    { text: "Service fiable pour mes trajets médicaux au CHANGE.", name: "Roger B.", initials: "RoB", role: "Patient, Annecy" },
  ], [
    { question: "Peut-on prendre un taxi Annecy – Genève ?", answer: "Oui, nos chauffeurs assurent les transferts Annecy – Genève (aéroport ou centre). Comptez 80-100 € pour environ 45 minutes." },
  ], 140, "5 min"),

  city("Perpignan", "perpignan", 42.6988, 2.8954, 121875, [
    "Gare de Perpignan", "Aéroport Perpignan-Rivesaltes", "Hôpital de Perpignan",
    "Université de Perpignan", "Palais des Rois de Majorque", "Quartier Saint-Jacques", "Polygone Nord",
  ], ["montpellier", "toulouse", "nimes", "narbonne"], [
    { text: "Taxi fiable pour mes trajets gare – plage de Canet. Chauffeur sympa.", name: "Carmen S.", initials: "CS", role: "Perpignanaise" },
    { text: "Transfert aéroport Rivesaltes rapide et ponctuel.", name: "Luis P.", initials: "LP", role: "Voyageur" },
    { text: "Service de qualité pour mes visites médicales. Merci TaxiNeo.", name: "Marie-Thérèse D.", initials: "MTD", role: "Patiente, Perpignan" },
  ], [
    { question: "Peut-on prendre un taxi Perpignan – plages ?", answer: "Oui, nos chauffeurs assurent les transferts vers Canet-en-Roussillon, Saint-Cyprien et les plages environnantes (10-20 €)." },
  ], 120, "6 min"),

  city("Besançon", "besancon", 47.2378, 6.0241, 120271, [
    "Gare Besançon Franche-Comté TGV", "Gare Besançon-Viotte", "CHU Jean Minjoz",
    "Université de Franche-Comté", "Citadelle Vauban", "Quartier Planoise", "Micropolis",
  ], ["dijon", "mulhouse", "strasbourg", "nancy"], [
    { text: "Transfert gare TGV – centre rapide et confortable. Parfait.", name: "Hervé M.", initials: "HeM", role: "Cadre, Besançon" },
    { text: "Service fiable pour mes déplacements vers le CHU Jean Minjoz.", name: "Annick L.", initials: "AnL", role: "Patiente, Besançon" },
    { text: "Chauffeur ponctuel pour visiter la Citadelle. Très pro.", name: "Fabrice R.", initials: "FaR", role: "Touriste" },
  ], [
    { question: "La gare TGV de Besançon est-elle loin du centre ?", answer: "La gare TGV Besançon Franche-Comté est à 10 km du centre. Le taxi TaxiNeo vous y conduit en 15 minutes pour environ 20-30 €." },
  ], 110, "6 min"),

  city("Metz", "metz", 49.1193, 6.1757, 119962, [
    "Gare de Metz", "CHR Metz-Thionville", "Centre Pompidou-Metz",
    "Université de Lorraine", "Quartier Amphithéâtre", "Technopôle", "Place Saint-Louis",
  ], ["nancy", "strasbourg", "luxembourg", "reims"], [
    { text: "Taxi depuis la gare vers le Centre Pompidou en 5 minutes. Impeccable.", name: "Frédéric W.", initials: "FW", role: "Artiste, Metz" },
    { text: "Service fiable pour mes trajets Metz – Luxembourg. Chauffeur pro.", name: "Marie B.", initials: "MaB", role: "Frontalière" },
    { text: "Transfert régulier vers le CHR. Toujours satisfait.", name: "Georges N.", initials: "GN", role: "Patient, Metz" },
  ], [
    { question: "Peut-on prendre un taxi Metz – Luxembourg ?", answer: "Oui, nos chauffeurs assurent les transferts Metz – Luxembourg (environ 60 km). Comptez 80-100 € pour le trajet." },
  ], 130, "5 min"),

  city("Orléans", "orleans", 47.9029, 1.9039, 116238, [
    "Gare d'Orléans", "CHR d'Orléans", "Cathédrale Sainte-Croix",
    "Université d'Orléans", "Quartier Source", "Centre de Conférences", "Place du Martroi",
  ], ["tours", "paris", "le-mans", "reims"], [
    { text: "Taxi rapide depuis la gare vers le centre. Chauffeur connaisseur.", name: "Nathalie S.", initials: "NaS", role: "Orléanaise" },
    { text: "Service fiable pour mes allers-retours Paris – Orléans.", name: "Christophe V.", initials: "ChV", role: "Cadre" },
    { text: "Transfert CHR ponctuel et chauffeur aimable.", name: "Josette P.", initials: "JoP", role: "Patiente, Orléans" },
  ], [
    { question: "Combien de temps met un taxi Orléans – Paris ?", answer: "Le trajet Orléans – Paris en taxi dure environ 1h30. Comptez 150-180 €. Idéal si vous avez beaucoup de bagages." },
  ], 130, "5 min"),

  city("Rouen", "rouen", 49.4432, 1.0993, 114007, [
    "Gare de Rouen-Rive-Droite", "CHU de Rouen", "Cathédrale Notre-Dame",
    "Université de Rouen", "Quartier Saint-Sever", "Panorama XXL", "Place du Vieux-Marché",
  ], ["le-havre", "caen", "amiens", "paris"], [
    { text: "Taxi fiable entre la gare et le CHU. Service de qualité.", name: "Laurent G.", initials: "LaG", role: "Médecin, Rouen" },
    { text: "Chauffeur ponctuel pour mes déplacements dans le centre historique.", name: "Brigitte L.", initials: "BrL", role: "Rouennaise" },
    { text: "Transfert Rouen – Le Havre confortable. Je recommande.", name: "Arnaud D.", initials: "ArD", role: "Commercial" },
  ], [
    { question: "Peut-on prendre un taxi Rouen – Paris ?", answer: "Oui, nos chauffeurs assurent les transferts Rouen – Paris (environ 130 km). Comptez 170-200 € pour le trajet." },
  ], 140, "5 min"),

  city("Mulhouse", "mulhouse", 47.7508, 7.3359, 112063, [
    "Aéroport Bâle-Mulhouse-Fribourg", "Gare de Mulhouse", "Hôpital Émile Muller",
    "Université de Haute-Alsace", "Cité de l'Automobile", "KMØ", "Quartier Fonderie",
  ], ["colmar", "strasbourg", "besancon", "dijon"], [
    { text: "Transfert aéroport Bâle-Mulhouse rapide et fiable. Chauffeur pro.", name: "Klaus M.", initials: "KM", role: "Frontalier" },
    { text: "Taxi pour la Cité de l'Automobile. Service impeccable.", name: "Joëlle S.", initials: "JoS", role: "Touriste" },
    { text: "Chauffeur ponctuel pour mes rendez-vous médicaux.", name: "Albert W.", initials: "AW", role: "Patient, Mulhouse" },
  ], [
    { question: "Combien coûte un taxi Mulhouse – Aéroport Bâle ?", answer: "Le trajet Mulhouse – Aéroport Bâle-Mulhouse coûte environ 35-45 €. Réservez à l'avance pour un service garanti." },
  ], 120, "6 min"),

  city("Caen", "caen", 49.1829, -0.3707, 108365, [
    "Gare de Caen", "CHU de Caen", "Mémorial de Caen",
    "Université de Caen", "Château de Caen", "Port de Ouistreham", "Quartier Beaulieu",
  ], ["rouen", "le-havre", "rennes", "tours"], [
    { text: "Taxi fiable pour le ferry de Ouistreham. Le chauffeur était là à 4h du matin.", name: "Gilles F.", initials: "GiF", role: "Voyageur" },
    { text: "Service de qualité pour mes déplacements au CHU.", name: "Jacqueline P.", initials: "JaP", role: "Patiente, Caen" },
    { text: "Transfert gare – Mémorial parfait pour les visiteurs.", name: "Andrew B.", initials: "AnB", role: "Touriste britannique" },
  ], [
    { question: "Peut-on prendre un taxi vers les plages du Débarquement ?", answer: "Oui, nos chauffeurs proposent des transferts et mises à disposition pour visiter les plages du Débarquement depuis Caen." },
  ], 120, "6 min"),

  city("Nancy", "nancy", 48.6921, 6.1844, 105382, [
    "Gare de Nancy", "CHU de Nancy", "Place Stanislas",
    "Université de Lorraine", "Quartier Vaudemont", "Zénith de Nancy", "Parc de la Pépinière",
  ], ["metz", "strasbourg", "reims", "dijon"], [
    { text: "Taxi rapide depuis la gare vers la Place Stanislas. Chauffeur au top.", name: "Sébastien L.", initials: "SeL", role: "Touriste" },
    { text: "Service fiable pour mes trajets Nancy – Metz quotidiens.", name: "Éliane M.", initials: "ElM", role: "Frontalière" },
    { text: "Chauffeur ponctuel pour le CHU. Merci TaxiNeo.", name: "Marcel R.", initials: "MaR", role: "Patient, Nancy" },
  ], [
    { question: "Peut-on prendre un taxi Nancy – Metz ?", answer: "Oui, nos chauffeurs assurent les transferts Nancy – Metz (environ 55 km). Comptez 70-85 € pour le trajet." },
  ], 120, "5 min"),

  city("Argenteuil", "argenteuil", 48.9472, 2.2467, 113748, [
    "Gare d'Argenteuil", "Hôpital d'Argenteuil", "Centre-ville",
    "Quartier Val-d'Argent", "Bords de Seine", "La Défense", "Marché du centre",
  ], ["paris", "versailles", "nantes"], [
    { text: "Taxi vers La Défense rapide même aux heures de pointe.", name: "Moussa D.", initials: "MoD", role: "Cadre, Argenteuil" },
    { text: "Service fiable depuis la gare d'Argenteuil. Toujours ponctuel.", name: "Catherine N.", initials: "CaN", role: "Argenteuillaise" },
    { text: "Transfert vers les aéroports parisiens confortable.", name: "Rachid A.", initials: "RA", role: "Voyageur, Argenteuil" },
  ], [
    { question: "Les taxis d'Argenteuil vont-ils à Paris ?", answer: "Oui, nos chauffeurs assurent toutes les courses entre Argenteuil, Paris, La Défense et les aéroports parisiens." },
  ], 120, "5 min"),

  city("Avignon", "avignon", 43.9493, 4.8055, 93671, [
    "Gare TGV Avignon", "Gare Avignon-Centre", "CH Henri Duffaut",
    "Université d'Avignon", "Palais des Papes", "Pont d'Avignon", "Parc des Expositions",
  ], ["nimes", "montpellier", "marseille", "aix-en-provence", "orange"], [
    { text: "Taxi depuis la gare TGV vers le centre parfait pendant le Festival.", name: "Laure P.", initials: "LaP", role: "Festivalière" },
    { text: "Service fiable pour mes trajets vers l'hôpital Duffaut.", name: "Henri M.", initials: "HeM", role: "Patient, Avignon" },
    { text: "Mise à disposition pour visiter les vignobles du Lubéron. Superbe expérience.", name: "Diana K.", initials: "DK", role: "Touriste" },
  ], [
    { question: "La gare TGV d'Avignon est-elle loin du centre ?", answer: "La gare TGV est à 5 km du centre historique. Le taxi TaxiNeo vous y conduit en 10 minutes pour environ 15-20 €." },
  ], 100, "6 min"),

  city("Poitiers", "poitiers", 46.5802, 0.3404, 90340, [
    "Gare de Poitiers", "CHU de Poitiers", "Futuroscope",
    "Université de Poitiers", "Centre-ville historique", "Technopôle du Futuroscope", "Notre-Dame la Grande",
  ], ["tours", "limoges", "la-rochelle", "bordeaux", "orleans"], [
    { text: "Taxi vers le Futuroscope parfait pour une sortie en famille.", name: "Aurélien B.", initials: "AuB", role: "Papa, Poitiers" },
    { text: "Transfert gare – CHU toujours fiable. Merci.", name: "Régine S.", initials: "ReS", role: "Patiente, Poitiers" },
    { text: "Service pro pour mes déplacements vers le Technopôle.", name: "Karine D.", initials: "KD", role: "Ingénieure" },
  ], [
    { question: "Combien coûte un taxi Poitiers – Futuroscope ?", answer: "Le trajet Poitiers centre – Futuroscope coûte environ 20-30 €. Nos chauffeurs connaissent bien le site." },
  ], 100, "6 min"),

  city("Dunkerque", "dunkerque", 51.0343, 2.3768, 88108, [
    "Port de Dunkerque", "Gare de Dunkerque", "CH de Dunkerque",
    "Université du Littoral", "Place Jean Bart", "Plage de Malo-les-Bains", "Terminal ferry",
  ], ["lille", "calais", "amiens"], [
    { text: "Taxi disponible au terminal ferry même à 23h. Parfait.", name: "Michel V.", initials: "MiV2", role: "Voyageur" },
    { text: "Service fiable pendant le Carnaval de Dunkerque. Chapeau !", name: "Élodie C.", initials: "ElC", role: "Dunkerquoise" },
    { text: "Transfert vers Lille rapide et confortable.", name: "Bruno T.", initials: "BrT", role: "Cadre, Dunkerque" },
  ], [
    { question: "Peut-on prendre un taxi au port ferry de Dunkerque ?", answer: "Oui, nos chauffeurs sont disponibles au terminal ferry pour les arrivées et départs vers l'Angleterre." },
  ], 80, "7 min"),

  city("Versailles", "versailles", 48.8014, 2.1301, 87549, [
    "Château de Versailles", "Gare Versailles-Chantiers", "CH de Versailles",
    "Quartier Saint-Louis", "Gare Versailles Rive-Droite", "Parly 2", "Quartier Montreuil",
  ], ["paris", "argenteuil", "nantes"], [
    { text: "Taxi depuis Paris vers le Château sans stress. Chauffeur passionné d'histoire.", name: "Emily W.", initials: "EW", role: "Touriste américaine" },
    { text: "Service fiable pour mes trajets gare – domicile quotidiens.", name: "Geneviève L.", initials: "GeL", role: "Versaillaise" },
    { text: "Transfert vers CDG confortable. Prix raisonnable.", name: "Youssef A.", initials: "YA", role: "Voyageur, Versailles" },
  ], [
    { question: "Combien coûte un taxi Paris – Versailles ?", answer: "Le trajet Paris centre – Versailles coûte environ 40-55 € selon la circulation et le point de départ." },
  ], 100, "5 min"),

  city("Pau", "pau", 43.2951, -0.3708, 78506, [
    "Aéroport Pau-Pyrénées", "Gare de Pau", "CH de Pau",
    "Université de Pau", "Boulevard des Pyrénées", "Quartier du Hédas", "Palais Beaumont",
  ], ["toulouse", "bordeaux", "bayonne", "lourdes"], [
    { text: "Taxi avec vue sur les Pyrénées ! Transfert aéroport au top.", name: "Jean-Claude B.", initials: "JCB", role: "Béarnais" },
    { text: "Service fiable pour mes trajets vers l'hôpital de Pau.", name: "Simone D.", initials: "SiD", role: "Patiente, Pau" },
    { text: "Mise à disposition parfaite pour un week-end dans le Béarn.", name: "Alexandra M.", initials: "AlM", role: "Touriste, Pau" },
  ], [
    { question: "Peut-on prendre un taxi Pau – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers les stations pyrénéennes (Gourette, La Pierre Saint-Martin). Réservez à l'avance." },
  ], 80, "6 min"),

  city("La Rochelle", "la-rochelle", 46.1591, -1.1520, 79622,  [
    "Aéroport La Rochelle-Île de Ré", "Gare de La Rochelle", "Hôpital de La Rochelle",
    "Vieux Port", "Université de La Rochelle", "Aquarium de La Rochelle", "Les Minimes",
  ], ["nantes", "poitiers", "bordeaux", "angers"], [
    { text: "Taxi vers l'Île de Ré depuis La Rochelle. Chauffeur au top.", name: "Mathilde F.", initials: "MaF", role: "Vacancière" },
    { text: "Service disponible même en plein été. Très appréciable.", name: "Roland P.", initials: "RoP", role: "Rochelais" },
    { text: "Transfert aéroport fiable et ponctuel.", name: "Corinne J.", initials: "CoJ", role: "Voyageuse" },
  ], [
    { question: "Peut-on prendre un taxi La Rochelle – Île de Ré ?", answer: "Oui, nos chauffeurs assurent les transferts vers l'Île de Ré via le pont. Comptez 25-35 € depuis le centre." },
  ], 80, "6 min"),

  city("Calais", "calais", 50.9513, 1.8587, 73911, [
    "Port de Calais", "Terminal Eurotunnel", "Gare Calais-Fréthun",
    "CH de Calais", "Cité de la Dentelle", "Plage de Calais", "Centre-ville",
  ], ["dunkerque", "lille", "amiens", "boulogne"], [
    { text: "Taxi au terminal Eurotunnel toujours disponible. Service parfait.", name: "Peter H.", initials: "PH", role: "Voyageur britannique" },
    { text: "Transfert port ferry – gare Fréthun rapide et fiable.", name: "Martine B.", initials: "MaB2", role: "Calaisienne" },
    { text: "Service de qualité pour mes trajets transfrontaliers.", name: "Simon L.", initials: "SiL", role: "Frontalier" },
  ], [
    { question: "Peut-on prendre un taxi au terminal Eurotunnel ?", answer: "Oui, nos chauffeurs sont disponibles au terminal Eurotunnel de Coquelles et au port ferry de Calais." },
  ], 70, "7 min"),

  city("Cannes", "cannes", 43.5528, 7.0174, 74285, [
    "Gare de Cannes", "Palais des Festivals", "La Croisette",
    "Hôpital de Cannes", "Port de Cannes", "Mougins", "Quartier Californie",
  ], ["nice", "antibes", "marseille", "avignon"], [
    { text: "Taxi disponible même pendant le Festival de Cannes. Impressionnant.", name: "Charlotte V.", initials: "ChV2", role: "Journaliste" },
    { text: "Transfert aéroport Nice – Cannes confortable et ponctuel.", name: "Roberto F.", initials: "RF", role: "Homme d'affaires" },
    { text: "Service impeccable sur la Croisette. Chauffeur discret et pro.", name: "Léa M.", initials: "LeM", role: "Résidente, Cannes" },
  ], [
    { question: "Combien coûte un taxi Nice Aéroport – Cannes ?", answer: "Le forfait taxi Nice Aéroport – Cannes est d'environ 70-90 €. Réservez à l'avance pendant le Festival." },
  ], 100, "5 min"),

  city("Antibes", "antibes", 43.5804, 7.1254, 74875, [
    "Gare d'Antibes", "Sophia Antipolis", "Port Vauban",
    "Hôpital de la Fontonne", "Marineland", "Juan-les-Pins", "Cap d'Antibes",
  ], ["nice", "cannes", "marseille"], [
    { text: "Taxi Antibes – Sophia Antipolis fiable pour mes trajets quotidiens.", name: "Sylvain T.", initials: "SyT", role: "Ingénieur, Sophia" },
    { text: "Service parfait pour rejoindre Juan-les-Pins depuis la gare.", name: "Magali R.", initials: "MgR", role: "Antiboise" },
    { text: "Transfert vers l'aéroport de Nice ponctuel et confortable.", name: "Patrick D.", initials: "PaD", role: "Voyageur" },
  ], [
    { question: "Combien coûte un taxi Antibes – Sophia Antipolis ?", answer: "Le trajet Antibes – Sophia Antipolis coûte environ 20-30 € selon votre destination exacte dans le technopôle." },
  ], 90, "5 min"),

  city("Colmar", "colmar", 48.0794, 7.3588, 70284, [
    "Gare de Colmar", "Hôpitaux Civils de Colmar", "Petite Venise",
    "Musée Unterlinden", "Quartier de la Krutenau", "Parc des Expositions", "Vignoble d'Alsace",
  ], ["strasbourg", "mulhouse", "nancy", "dijon"], [
    { text: "Taxi pour visiter la Route des Vins d'Alsace. Chauffeur formidable.", name: "Marie-France H.", initials: "MFH", role: "Touriste" },
    { text: "Service rapide depuis la gare vers la Petite Venise.", name: "Claude W.", initials: "ClW", role: "Colmarien" },
    { text: "Transfert fiable vers Strasbourg ou Bâle-Mulhouse.", name: "Ingrid S.", initials: "InS", role: "Voyageuse" },
  ], [
    { question: "Peut-on visiter la Route des Vins en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour la Route des Vins d'Alsace. Idéal pour déguster en toute sérénité." },
  ], 70, "6 min"),

  city("Bayonne", "bayonne", 43.4933, -1.4753, 52006, [
    "Gare de Bayonne", "Aéroport Biarritz Pays Basque", "CH de Bayonne",
    "Grand Bayonne", "Petit Bayonne", "Port de Bayonne", "Quartier Saint-Esprit",
  ], ["pau", "bordeaux", "toulouse"], [
    { text: "Taxi vers l'aéroport de Biarritz toujours fiable. Service au top.", name: "Mikel E.", initials: "ME", role: "Bayonnais" },
    { text: "Mise à disposition parfaite pour les Fêtes de Bayonne.", name: "Hélène S.", initials: "HeS", role: "Festivalière" },
    { text: "Transfert Bayonne – Saint-Jean-de-Luz confortable.", name: "Pierre-Jean L.", initials: "PJL", role: "Touriste" },
  ], [
    { question: "Combien coûte un taxi Bayonne – Biarritz Aéroport ?", answer: "Le trajet Bayonne – Aéroport Biarritz coûte environ 20-30 €. Service disponible 24h/24." },
  ], 70, "6 min"),

  city("Chambéry", "chambery", 45.5646, 5.9178, 60466, [
    "Gare de Chambéry", "CH de Chambéry", "Quartier Biollay",
    "Université Savoie Mont Blanc", "Château des Ducs de Savoie", "Fontaine des Éléphants", "Savoie Technolac",
  ], ["grenoble", "annecy", "lyon", "valence"], [
    { text: "Taxi fiable vers les stations de ski de Savoie. Service au top.", name: "Frédérique B.", initials: "FrB", role: "Skieuse" },
    { text: "Transfert gare – Technolac rapide et ponctuel.", name: "Stéphane A.", initials: "StA", role: "Cadre, Chambéry" },
    { text: "Service de qualité pour mes trajets médicaux.", name: "Lucette G.", initials: "LuG", role: "Patiente, Chambéry" },
  ], [
    { question: "Peut-on prendre un taxi Chambéry – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers Courchevel, Méribel, Val Thorens et toutes les stations de Savoie." },
  ], 80, "6 min"),

  city("Valence", "valence", 44.9334, 4.8924, 67018, [
    "Gare de Valence TGV", "Gare Valence-Ville", "CH de Valence",
    "Université Grenoble Alpes – Valence", "Parc Jouvet", "Quartier Victor Hugo", "Latour-Maubourg",
  ], ["grenoble", "lyon", "saint-etienne", "chambery", "montpellier"], [
    { text: "Transfert gare TGV – centre-ville rapide. Le chauffeur était très aimable.", name: "Pascale D.", initials: "PaD2", role: "Voyageuse" },
    { text: "Service fiable pour mes déplacements au CH de Valence.", name: "Robert N.", initials: "RoN", role: "Patient, Valence" },
    { text: "Taxi ponctuel pour mes rendez-vous professionnels.", name: "Chantal M.", initials: "ChM2", role: "Cadre, Valence" },
  ], [
    { question: "La gare TGV de Valence est-elle loin du centre ?", answer: "La gare TGV Valence est à 10 km du centre. Le taxi TaxiNeo vous y conduit en 15 minutes pour environ 20-25 €." },
  ], 80, "6 min"),
];

// ─── Helpers ────────────────────────────────────────────────

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getNearbyCities(city: City): City[] {
  return city.nearbyCities
    .map((slug) => getCityBySlug(slug))
    .filter((c): c is City => c !== undefined);
}

export const popularCities = cities.filter((c) =>
  ["paris", "marseille", "lyon", "toulouse", "nice", "nantes", "bordeaux", "lille"].includes(c.slug)
);

export const services = [
  {
    icon: "solar:city-linear",
    title: "Courses en ville",
    description: "Déplacements rapides et confortables dans toute l'agglomération, 24h/24 et 7j/7.",
  },
  {
    icon: "mdi:airplane",
    title: "Transfert aéroport",
    description: "Transferts fiables vers les aéroports avec suivi des vols et aide aux bagages.",
  },
  {
    icon: "solar:user-check-linear",
    title: "Chauffeur privé",
    description: "Un chauffeur dédié pour vos rendez-vous, événements et soirées.",
  },
  {
    icon: "solar:clock-circle-linear",
    title: "Mise à disposition",
    description: "Véhicule avec chauffeur à votre disposition pour la durée de votre choix.",
  },
  {
    icon: "solar:routing-2-linear",
    title: "Longue distance",
    description: "Trajets interurbains confortables avec tarifs négociés à l'avance.",
  },
  {
    icon: "solar:heart-pulse-linear",
    title: "Transport médical",
    description: "Transport adapté vers les hôpitaux et cliniques, avec prise en charge attentionnée.",
  },
];
