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

export interface PopularRoute {
  from: string;
  to: string;
  price: string;
}

export interface City {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  population: number;
  landmarks: string[];
  quartiers: string[];
  popularRoutes: PopularRoute[];
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
  quartiers: string[],
  popularRoutes: PopularRoute[],
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
    quartiers,
    popularRoutes,
    nearbyCities,
    driverCount,
    avgWaitTime,
    rating: 4.8,
    i18n: {
      fr: {
        metaTitle: name.length > 13
          ? `Taxi ${name} — Réservation en ligne | Tarif fixe`
          : `Taxi à ${name} - Réservez en ligne 24h/24 | Tarif fixe`,
        metaDescription: name.length > 10
          ? `Réservez votre taxi à ${name} en quelques clics. Tarifs réglementés, chauffeurs professionnels, transferts et courses en ville. Disponible 24h/24.`
          : `Réservez votre taxi à ${name} en quelques clics. Chauffeurs professionnels, tarifs réglementés, disponible 24h/24 pour vos transferts et courses en ville.`,
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
        metaTitle: name.length > 12
          ? `Taxi ${name} — Book your taxi online | Fixed fares`
          : `Taxi ${name} - Book your ride online 24/7 | Fixed fares`,
        metaDescription: name.length <= 7
          ? `Book your taxi in ${name} in just a few clicks. Licensed professional drivers, regulated fares, available 24/7 for all airport, station and city transfers.`
          : `Book your taxi in ${name} in a few clicks. Licensed professional drivers, regulated fares, available 24/7 for all airport, station and city transfers.`,
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
    "Gare Montparnasse", "Gare de l'Est", "La Défense", "Quartier d'affaires Opéra",
    "Hôpital Pitié-Salpêtrière", "Hôpital Necker", "Université Paris-Saclay", "Parc des Expositions Villepinte",
    "Stade de France", "Palais des Congrès", "Centre commercial Westfield Forum des Halles",
  ], [
    "Montmartre", "Le Marais", "Saint-Germain-des-Prés", "Champs-Élysées", "Belleville",
    "Bastille", "Oberkampf", "République", "Nation", "Pigalle", "Batignolles",
    "Auteuil", "Passy", "Bercy", "Les Halles",
  ], [
    { from: "Paris Centre", to: "Aéroport CDG", price: "56-65 €" },
    { from: "Paris Centre", to: "Aéroport Orly", price: "35-45 €" },
    { from: "Gare du Nord", to: "Tour Eiffel", price: "15-20 €" },
    { from: "Paris", to: "Disneyland", price: "65-80 €" },
    { from: "Paris", to: "Versailles", price: "40-55 €" },
    { from: "Gare de Lyon", to: "La Défense", price: "35-45 €" },
  ], ["versailles", "argenteuil", "nantes", "lyon", "lille"], [
    { text: "Un service impeccable pour mes trajets quotidiens vers La Défense. Le chauffeur connaît tous les raccourcis.", name: "Sophie L.", initials: "SL", role: "Cadre, Paris 16e" },
    { text: "Transfert Orly parfait à 5h du matin. Ponctuel, véhicule propre, prix fixe annoncé respecté.", name: "Marc D.", initials: "MD", role: "Voyageur fréquent" },
    { text: "Je réserve chaque semaine pour mes rendez-vous médicaux. Chauffeurs toujours patients et serviables.", name: "Jeanne P.", initials: "JP", role: "Retraitée, Paris 5e" },
  ], [
    { question: "Combien coûte un taxi Paris-CDG ?", answer: "Le trajet Paris-CDG est au forfait réglementé : 56 € depuis la rive droite, 65 € depuis la rive gauche. Pas de surprise avec TaxiNeo." },
    { question: "Les taxis TaxiNeo utilisent-ils les voies de bus à Paris ?", answer: "Oui, en tant que taxis officiels, nos chauffeurs ont accès aux couloirs de bus parisiens, ce qui réduit considérablement les temps de trajet." },
    { question: "Combien de temps met un taxi de Montmartre à l'aéroport d'Orly ?", answer: "Comptez environ 45-60 minutes selon la circulation. Le forfait depuis la rive droite est de 37 €. Nos chauffeurs connaissent les meilleurs itinéraires." },
    { question: "Peut-on payer un taxi par carte bancaire à Paris ?", answer: "Oui, tous nos taxis à Paris acceptent le paiement par carte bancaire, sans supplément. Vous pouvez aussi payer via l'application TaxiNeo." },
  ], 2500, "4 min"),

  city("Marseille", "marseille", 43.2965, 5.3698, 873076, [
    "Aéroport Marseille-Provence", "Gare Saint-Charles", "Vieux-Port", "La Joliette",
    "Hôpital de la Timone", "Quartier Euroméditerranée", "Stade Vélodrome", "Calanques",
    "Centre commercial Grand Littoral", "Campus de Luminy", "Gare de la Blancarde",
    "Zone commerciale La Valentine", "Palais Longchamp", "Mucem", "Hôpital Nord",
  ], [
    "Vieux-Port", "La Joliette", "Le Panier", "Castellane", "La Canebière", "Endoume",
    "Saint-Julien", "Les Cinq Avenues", "Bonneveine", "La Valentine", "Saint-Barnabé",
    "Mazargues", "La Plaine", "Belsunce",
  ], [
    { from: "Marseille Centre", to: "Aéroport Provence", price: "50-65 €" },
    { from: "Vieux-Port", to: "Gare Saint-Charles", price: "10-15 €" },
    { from: "Marseille", to: "Aix-en-Provence", price: "55-70 €" },
    { from: "Marseille", to: "Cassis", price: "35-45 €" },
    { from: "Gare Saint-Charles", to: "Stade Vélodrome", price: "12-18 €" },
  ], ["aix-en-provence", "toulon", "nimes", "avignon", "montpellier"], [
    { text: "Taxi toujours disponible même à la sortie du Vélodrome un soir de match. Service au top !", name: "Karim B.", initials: "KB", role: "Habitant, 13e arrondissement" },
    { text: "Transfert fiable vers l'aéroport Provence. Le chauffeur m'a aidé avec mes bagages sans hésiter.", name: "Claire M.", initials: "CM", role: "Entrepreneuse" },
    { text: "J'utilise TaxiNeo pour mes déplacements entre la Timone et mon domicile. Rapide et ponctuel.", name: "Dr. Farid A.", initials: "FA", role: "Médecin hospitalier" },
  ], [
    { question: "Combien coûte un taxi Marseille-Aéroport Provence ?", answer: "Le trajet entre le centre de Marseille et l'aéroport Provence coûte environ 50-60 € selon la circulation. Estimation disponible avant réservation." },
    { question: "Peut-on prendre un taxi pour visiter les Calanques ?", answer: "Oui, nos chauffeurs vous déposent aux principaux points d'accès des Calanques (Sormiou, Morgiou, Sugiton). Mise à disposition possible pour la journée." },
    { question: "Quel taxi pour aller du Vieux-Port au Stade Vélodrome ?", answer: "Le trajet Vieux-Port – Stade Vélodrome dure environ 15 minutes en taxi. Comptez 12-18 € selon la circulation." },
  ], 800, "5 min"),

  city("Lyon", "lyon", 45.7640, 4.8357, 522250, [
    "Aéroport Lyon-Saint Exupéry", "Gare Part-Dieu", "Gare Perrache",
    "Quartier d'affaires Part-Dieu", "Hôpitaux Est", "Confluence", "Université Lyon 1",
    "Centre commercial Part-Dieu", "Hôpital Édouard Herriot", "Quartier Gerland",
    "Cité Internationale", "Musée des Confluences", "Parc de la Tête d'Or", "Campus LyonTech", "Eurexpo",
  ], [
    "Presqu'île", "Vieux Lyon", "Croix-Rousse", "Guillotière", "Gerland", "Monplaisir",
    "Brotteaux", "Bellecour", "Saxe-Gambetta", "Jean Macé", "Vaise", "Part-Dieu", "Confluence",
  ], [
    { from: "Lyon Centre", to: "Aéroport Saint Exupéry", price: "60-75 €" },
    { from: "Gare Part-Dieu", to: "Gare Perrache", price: "10-15 €" },
    { from: "Lyon", to: "Villeurbanne Campus", price: "12-18 €" },
    { from: "Lyon", to: "Annecy", price: "120-150 €" },
    { from: "Bellecour", to: "Eurexpo", price: "30-40 €" },
  ], ["villeurbanne", "saint-etienne", "grenoble", "annecy", "valence"], [
    { text: "Trajet Part-Dieu – Saint Exupéry en 30 minutes, chauffeur professionnel qui connaît Lyon par cœur.", name: "Thomas R.", initials: "TR", role: "Consultant, Lyon 3e" },
    { text: "Service Business parfait pour notre entreprise à Confluence. Facturation simplifiée.", name: "Nathalie G.", initials: "NG", role: "Directrice administrative" },
    { text: "Réservation simple, chauffeur ponctuel, véhicule confortable. Je recommande à tous les Lyonnais.", name: "Pierre V.", initials: "PV", role: "Architecte, Lyon 6e" },
  ], [
    { question: "Combien coûte un taxi Lyon-Saint Exupéry ?", answer: "Le forfait taxi Lyon centre – Aéroport Saint Exupéry est d'environ 60-70 €. Le prix exact est estimé avant votre réservation sur TaxiNeo." },
    { question: "Combien de temps met un taxi Lyon Part-Dieu – Saint Exupéry ?", answer: "Le trajet Part-Dieu – Aéroport Saint Exupéry dure environ 30-40 minutes. Le forfait est d'environ 60-75 € selon l'heure." },
    { question: "Les taxis sont-ils disponibles pendant la Fête des Lumières ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant la Fête des Lumières à Lyon. Réservez à l'avance pour garantir votre course." },
  ], 650, "4 min"),

  city("Toulouse", "toulouse", 43.6047, 1.4442, 504078, [
    "Aéroport Toulouse-Blagnac", "Gare Matabiau", "Place du Capitole",
    "CHU Purpan", "Airbus Blagnac", "Université Toulouse 1", "Quartier Compans-Caffarelli",
    "Centre commercial Blagnac", "Cité de l'Espace", "Hôpital Rangueil",
    "Quartier Saint-Cyprien", "Université Toulouse III", "Stade Ernest-Wallon",
    "Zone aéronautique Blagnac", "Médiathèque José Cabanis",
  ], [
    "Capitole", "Saint-Cyprien", "Carmes", "Les Minimes", "Compans-Caffarelli", "Rangueil",
    "Côte Pavée", "Saint-Agne", "Arnaud-Bernard", "Borderouge", "Lardenne", "Balma", "Colomiers",
  ], [
    { from: "Toulouse Centre", to: "Aéroport Blagnac", price: "25-35 €" },
    { from: "Capitole", to: "Cité de l'Espace", price: "15-22 €" },
    { from: "Toulouse", to: "Airbus Blagnac", price: "20-30 €" },
    { from: "Gare Matabiau", to: "CHU Purpan", price: "12-18 €" },
    { from: "Toulouse", to: "Carcassonne", price: "90-110 €" },
  ], ["montpellier", "bordeaux", "pau", "perpignan"], [
    { text: "Taxi fiable pour mes trajets quotidiens vers Airbus à Blagnac. Toujours à l'heure.", name: "Laurent F.", initials: "LF", role: "Ingénieur aéronautique" },
    { text: "Transfert aéroport Blagnac rapide et agréable. Le chauffeur connaît tous les raccourcis.", name: "Isabelle C.", initials: "IC", role: "Commerciale" },
    { text: "Super service pour mes déplacements médicaux vers Purpan. Chauffeurs très attentionnés.", name: "André M.", initials: "AM", role: "Retraité, Toulouse" },
  ], [
    { question: "Combien coûte un taxi Toulouse-Blagnac ?", answer: "Le trajet Toulouse centre – Aéroport Blagnac coûte environ 25-35 € selon l'heure. Prix estimé avant réservation." },
    { question: "Combien coûte un taxi pour la Cité de l'Espace ?", answer: "Le trajet Toulouse centre – Cité de l'Espace coûte environ 15-22 €. Idéal pour une sortie en famille sans souci de stationnement." },
    { question: "Y a-t-il des taxis disponibles à la sortie d'Airbus Blagnac ?", answer: "Oui, nos chauffeurs sont habitués aux horaires décalés du site Airbus. Réservez à l'avance pour être pris en charge à la sortie." },
  ], 450, "5 min"),

  city("Nice", "nice", 43.7102, 7.2620, 342669, [
    "Aéroport Nice Côte d'Azur", "Gare Nice-Ville", "Promenade des Anglais",
    "Hôpital Pasteur", "Port de Nice", "Quartier d'affaires Arénas", "Université Sophia Antipolis",
    "Centre commercial Cap 3000", "Hôpital L'Archet", "Stade Allianz Riviera",
    "Musée Matisse", "Palais Nikaia", "Acropolis", "Quartier Libération", "Gare SNCF Riquier",
  ], [
    "Vieux-Nice", "Cimiez", "Libération", "Musiciens", "Riquier", "Port", "Arenas",
    "Saint-Roch", "Magnan", "Fabron", "Saint-Isidore", "Lingostière", "Caucade", "Mont Boron",
  ], [
    { from: "Nice Centre", to: "Aéroport Côte d'Azur", price: "25-35 €" },
    { from: "Nice", to: "Monaco", price: "40-55 €" },
    { from: "Nice", to: "Cannes", price: "70-90 €" },
    { from: "Nice", to: "Antibes", price: "35-50 €" },
    { from: "Gare Nice-Ville", to: "Promenade des Anglais", price: "8-12 €" },
  ], ["cannes", "antibes", "monaco", "avignon", "marseille"], [
    { text: "Taxi disponible même en plein Festival de Jazz. Service remarquable sur la Côte d'Azur.", name: "Brigitte S.", initials: "BS", role: "Hôtelière, Nice" },
    { text: "Transfert aéroport Nice – Monaco en toute sérénité. Chauffeur professionnel et discret.", name: "Maxime L.", initials: "ML", role: "Homme d'affaires" },
    { text: "Utilisation régulière pour mes déplacements à Sophia Antipolis. Fiable et ponctuel.", name: "Julie D.", initials: "JD", role: "Développeuse, Nice" },
  ], [
    { question: "Combien coûte un taxi Nice-Aéroport ?", answer: "Le forfait taxi Nice centre – Aéroport Côte d'Azur est d'environ 25-35 €. Estimation disponible sur TaxiNeo avant réservation." },
    { question: "Combien coûte un taxi Nice – Monaco ?", answer: "Le trajet Nice centre – Monaco dure environ 25-30 minutes et coûte entre 40 et 55 € selon la circulation sur la basse corniche." },
    { question: "Les taxis sont-ils disponibles tard le soir à Nice ?", answer: "Oui, nos chauffeurs à Nice sont disponibles 24h/24, y compris pour les sorties nocturnes sur le Vieux-Nice et le port." },
  ], 400, "4 min"),

  city("Nantes", "nantes", 47.2184, -1.5536, 320732, [
    "Aéroport Nantes Atlantique", "Gare de Nantes", "CHU de Nantes",
    "Île de Nantes", "Quartier Euronantes", "Université de Nantes", "Machines de l'île",
    "Château des Ducs de Bretagne", "Centre commercial Atlantis", "Quartier Beaulieu",
    "Hôpital Nord Laennec", "Parc des Expositions La Beaujoire", "Stade de la Beaujoire",
  ], [
    "Centre-ville", "Île de Nantes", "Beaulieu", "Dervallières", "Chantenay", "Doulon",
    "Hauts Pavés", "Saint-Félix", "Talensac", "Graslin", "Bouffay", "Malakoff",
  ], [
    { from: "Nantes Centre", to: "Aéroport Atlantique", price: "30-40 €" },
    { from: "Gare de Nantes", to: "Île de Nantes", price: "8-12 €" },
    { from: "Nantes", to: "Saint-Nazaire", price: "65-80 €" },
    { from: "Nantes", to: "La Baule", price: "75-95 €" },
    { from: "Centre-ville", to: "CHU de Nantes", price: "10-15 €" },
  ], ["rennes", "angers", "le-mans", "tours", "la-rochelle"], [
    { text: "Service excellent pour mes trajets vers l'aéroport Atlantique. Jamais en retard.", name: "Yann B.", initials: "YB", role: "Entrepreneur, Nantes" },
    { text: "Chauffeur sympa et efficace pour mes déplacements sur l'Île de Nantes.", name: "Marine K.", initials: "MK", role: "Designer, Nantes" },
    { text: "TaxiNeo est devenu indispensable pour mes rendez-vous d'affaires à Euronantes.", name: "François H.", initials: "FH", role: "Avocat, Nantes" },
  ], [
    { question: "Combien coûte un taxi Nantes-Aéroport ?", answer: "Le trajet Nantes centre – Aéroport Atlantique coûte environ 30-40 €. Estimation précise disponible avant réservation." },
    { question: "Combien de temps met un taxi de Nantes à La Baule ?", answer: "Le trajet Nantes – La Baule dure environ 1 heure en taxi. Comptez 75-95 € pour un transfert direct et confortable." },
    { question: "Y a-t-il des taxis disponibles à la gare de Nantes le soir ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24 à la gare de Nantes, y compris pour les derniers TGV." },
  ], 350, "5 min"),

  city("Montpellier", "montpellier", 43.6108, 3.8767, 299096, [
    "Aéroport Montpellier-Méditerranée", "Gare Saint-Roch", "CHU Lapeyronie",
    "Place de la Comédie", "Quartier Antigone", "Université de Montpellier", "Odysseum",
    "Tramway Ligne 1", "Centre commercial Polygone", "Hôpital Arnaud de Villeneuve",
    "Parc zoologique de Lunaret", "FRAC Occitanie", "Zone commerciale Odysseum",
  ], [
    "Écusson", "Antigone", "Port Marianne", "Les Arceaux", "Boutonnet", "Aiguelongue",
    "Richter", "Hôpitaux-Facultés", "Près d'Arènes", "Figuerolles", "Celleneuve", "La Mosson",
  ], [
    { from: "Montpellier Centre", to: "Aéroport Méditerranée", price: "25-35 €" },
    { from: "Place de la Comédie", to: "CHU Lapeyronie", price: "12-18 €" },
    { from: "Montpellier", to: "Sète", price: "40-55 €" },
    { from: "Montpellier", to: "La Grande-Motte", price: "30-40 €" },
    { from: "Gare Saint-Roch", to: "Odysseum", price: "10-15 €" },
  ], ["nimes", "marseille", "toulouse", "perpignan", "avignon"], [
    { text: "Taxi réactif même en période de festivals. Le chauffeur connaît Montpellier comme sa poche.", name: "Emma T.", initials: "ET", role: "Étudiante, Montpellier" },
    { text: "Transfert gare Saint-Roch vers Lapeyronie rapide et confortable.", name: "Michel R.", initials: "MR", role: "Patient régulier" },
    { text: "Service pro pour mes déplacements d'affaires à Antigone. Je recommande.", name: "Sandrine L.", initials: "SaL", role: "Consultante" },
  ], [
    { question: "Combien coûte un taxi à Montpellier ?", answer: "Les courses en ville à Montpellier coûtent en moyenne 10-20 €. Le trajet vers l'aéroport environ 25-35 €." },
    { question: "Peut-on prendre un taxi Montpellier – La Grande-Motte ?", answer: "Oui, le trajet Montpellier – La Grande-Motte dure environ 25 minutes en taxi. Comptez 30-40 € pour un transfert direct." },
    { question: "Les taxis sont-ils disponibles pendant le Festival de Radio France ?", answer: "Oui, nos chauffeurs sont mobilisés pendant les grands événements montpelliérains. Réservez à l'avance pour plus de sérénité." },
  ], 300, "5 min"),

  city("Strasbourg", "strasbourg", 48.5734, 7.7521, 287228, [
    "Aéroport Strasbourg-Entzheim", "Gare de Strasbourg", "Parlement européen",
    "Hôpitaux Universitaires", "Quartier européen", "Petite France", "Université de Strasbourg",
    "Cathédrale de Strasbourg", "Centre commercial Place des Halles", "Hôpital de Hautepierre",
    "Parc de l'Orangerie", "Palais de la Musique et des Congrès", "Campus Cronenbourg",
    "Quartier Neudorf", "Stade de la Meinau",
  ], [
    "Grande Île", "Petite France", "Neudorf", "Krutenau", "Esplanade", "Orangerie",
    "Cronenbourg", "Koenigshoffen", "Hautepierre", "Robertsau", "Meinau", "Montagne Verte", "Elsau",
  ], [
    { from: "Strasbourg Centre", to: "Aéroport Entzheim", price: "25-35 €" },
    { from: "Gare de Strasbourg", to: "Parlement européen", price: "10-15 €" },
    { from: "Strasbourg", to: "Colmar", price: "65-80 €" },
    { from: "Strasbourg", to: "Europa-Park", price: "55-70 €" },
    { from: "Centre", to: "CHU Hautepierre", price: "12-18 €" },
  ], ["colmar", "mulhouse", "nancy", "metz"], [
    { text: "Parfait pour mes trajets vers le Parlement européen. Service ponctuel et professionnel.", name: "Hans M.", initials: "HM", role: "Fonctionnaire européen" },
    { text: "Transfert gare – aéroport Entzheim rapide. Chauffeur très agréable.", name: "Catherine W.", initials: "CW", role: "Voyageuse, Strasbourg" },
    { text: "Service fiable pour mes déplacements médicaux aux Hôpitaux Universitaires.", name: "René K.", initials: "RK", role: "Retraité, Strasbourg" },
  ], [
    { question: "Combien coûte un taxi Strasbourg-Entzheim ?", answer: "Le trajet Strasbourg centre – Aéroport Entzheim coûte environ 25-35 €, selon l'heure et la circulation." },
    { question: "Peut-on prendre un taxi Strasbourg – Europa-Park ?", answer: "Oui, nos chauffeurs assurent le transfert Strasbourg – Europa-Park en Allemagne (environ 50 km). Comptez 55-70 € et 40 minutes de trajet." },
    { question: "Les taxis sont-ils disponibles pendant le Marché de Noël de Strasbourg ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant le célèbre Marché de Noël. Réservez à l'avance en période de forte affluence." },
  ], 300, "5 min"),

  city("Bordeaux", "bordeaux", 44.8378, -0.5792, 260958, [
    "Aéroport Bordeaux-Mérignac", "Gare Saint-Jean", "CHU Pellegrin",
    "Quartier Mériadeck", "Place de la Bourse", "Université de Bordeaux", "Cité du Vin",
    "Stade Matmut Atlantique", "Centre commercial Mériadeck", "Darwin Écosystème",
    "Hôpital Saint-André", "Campus universitaire Talence", "Base sous-marine",
    "Marché des Capucins", "Quartier Chartrons",
  ], [
    "Centre historique", "Chartrons", "Saint-Michel", "Saint-Pierre", "Bastide", "Nansouty",
    "Caudéran", "Mériadeck", "Bacalan", "Talence", "Pessac", "Bègles", "Bruges",
  ], [
    { from: "Bordeaux Centre", to: "Aéroport Mérignac", price: "30-45 €" },
    { from: "Gare Saint-Jean", to: "Cité du Vin", price: "10-15 €" },
    { from: "Bordeaux", to: "Saint-Émilion", price: "55-70 €" },
    { from: "Bordeaux", to: "Arcachon", price: "65-85 €" },
    { from: "Centre", to: "Stade Matmut Atlantique", price: "15-22 €" },
  ], ["toulouse", "pau", "la-rochelle", "limoges", "poitiers"], [
    { text: "Transfert aéroport Mérignac impeccable. Le chauffeur était là 10 minutes avant l'heure.", name: "Jean-Luc P.", initials: "JLP", role: "Viticulteur, Bordeaux" },
    { text: "Taxi disponible rapidement un soir de match au Matmut Atlantique. Très pratique.", name: "Alexis D.", initials: "AD", role: "Étudiant, Bordeaux" },
    { text: "Service régulier pour mes trajets vers Pellegrin. Chauffeurs attentionnés.", name: "Monique V.", initials: "MV", role: "Patiente, Bordeaux" },
  ], [
    { question: "Combien coûte un taxi Bordeaux-Mérignac ?", answer: "Le forfait taxi Bordeaux centre – Aéroport Mérignac est d'environ 30-45 € selon l'heure." },
    { question: "Peut-on prendre un taxi Bordeaux – Arcachon ?", answer: "Oui, le trajet Bordeaux – Arcachon dure environ 50 minutes. Comptez 65-85 € pour un transfert confortable vers le Bassin." },
    { question: "Combien coûte un taxi pour aller à Saint-Émilion ?", answer: "Le trajet Bordeaux – Saint-Émilion coûte entre 55 et 70 €. Idéal pour visiter les vignobles sans souci." },
  ], 400, "5 min"),

  city("Lille", "lille", 50.6292, 3.0573, 236234, [
    "Aéroport Lille-Lesquin", "Gare Lille-Flandres", "Gare Lille-Europe",
    "CHU de Lille", "Quartier Euralille", "Université de Lille", "Vieux-Lille",
    "Palais des Beaux-Arts", "Centre commercial Euralille", "Hôpital Roger Salengro",
    "Stade Pierre-Mauroy", "Campus Cité Scientifique", "Grand Palais Lille",
    "Zoo de Lille", "Gare Lille-Sud",
  ], [
    "Vieux-Lille", "Centre", "Wazemmes", "Moulins", "Fives", "Hellemmes",
    "Lomme", "Lambersart", "Marcq-en-Baroeul", "Villeneuve-d'Ascq", "Roubaix", "Tourcoing",
  ], [
    { from: "Lille Centre", to: "Aéroport Lesquin", price: "20-30 €" },
    { from: "Gare Lille-Flandres", to: "Gare Lille-Europe", price: "6-10 €" },
    { from: "Lille", to: "Bruxelles", price: "120-150 €" },
    { from: "Lille", to: "Lens", price: "45-60 €" },
    { from: "Centre", to: "Stade Pierre-Mauroy", price: "15-22 €" },
  ], ["dunkerque", "calais", "amiens", "reims"], [
    { text: "Taxi fiable depuis Lille-Europe après chaque Eurostar. Service rapide et efficace.", name: "Philippe B.", initials: "PB", role: "Homme d'affaires, Lille" },
    { text: "Parfait pour mes déplacements à Euralille. Chauffeurs professionnels.", name: "Valérie T.", initials: "VT", role: "Cadre, Lille" },
    { text: "Transfert vers Lesquin toujours impeccable, même tôt le matin.", name: "Damien C.", initials: "DC", role: "Commercial, Lille" },
  ], [
    { question: "Combien coûte un taxi Lille-Lesquin ?", answer: "Le trajet Lille centre – Aéroport Lesquin coûte environ 20-30 € selon l'heure de la journée." },
    { question: "Peut-on prendre un taxi Lille – Bruxelles ?", answer: "Oui, nos chauffeurs assurent les transferts Lille – Bruxelles (environ 110 km). Comptez 120-150 € pour environ 1h15 de trajet." },
    { question: "Y a-t-il des taxis disponibles à la sortie du Stade Pierre-Mauroy ?", answer: "Oui, nos chauffeurs sont mobilisés pour les événements au stade. Réservez votre retour à l'avance pour éviter l'attente." },
  ], 350, "4 min"),

  city("Rennes", "rennes", 48.1173, -1.6778, 222485, [
    "Gare de Rennes", "CHU Pontchaillou", "Quartier Beauregard",
    "Université Rennes 1", "Les Champs Libres", "Centre commercial Alma", "Parc des Gayeulles",
    "Aéroport Rennes-Bretagne", "Stade Roazhon Park", "Centre commercial Colombier",
    "Hôpital Sud", "Parc du Thabor", "Campus Villejean", "Zénith de Rennes", "Opéra de Rennes",
  ], [
    "Centre", "Thabor", "Sainte-Thérèse", "Villejean", "Cleunay", "Maurepas",
    "Bréquigny", "Le Blosne", "Beauregard", "Saint-Martin", "Arsenal-Redon", "Francisco Ferrer",
  ], [
    { from: "Gare de Rennes", to: "Aéroport Rennes-Bretagne", price: "20-30 €" },
    { from: "Centre", to: "CHU Pontchaillou", price: "8-12 €" },
    { from: "Rennes", to: "Saint-Malo", price: "75-95 €" },
    { from: "Rennes", to: "Mont Saint-Michel", price: "120-150 €" },
    { from: "Gare", to: "Université Rennes 1", price: "8-12 €" },
  ], ["nantes", "brest", "le-mans", "angers", "caen"], [
    { text: "Taxi rapide depuis la gare TGV. En 10 minutes j'étais à mon hôtel.", name: "Olivier G.", initials: "OG", role: "Voyageur, Rennes" },
    { text: "Service parfait pour mes trajets CHU Pontchaillou. Merci TaxiNeo !", name: "Anne-Marie F.", initials: "AMF", role: "Infirmière, Rennes" },
    { text: "Chauffeur agréable et véhicule propre pour tous mes déplacements rennais.", name: "Julien N.", initials: "JN", role: "Développeur, Rennes" },
  ], [
    { question: "Y a-t-il un aéroport à Rennes ?", answer: "Oui, l'aéroport Rennes-Bretagne se trouve à 15 minutes du centre. TaxiNeo assure les transferts pour environ 20-30 €." },
    { question: "Combien coûte un taxi Rennes – Saint-Malo ?", answer: "Le trajet Rennes – Saint-Malo dure environ 1 heure. Comptez 75-95 € pour un transfert direct." },
    { question: "Y a-t-il des taxis à l'aéroport Rennes-Bretagne ?", answer: "Oui, nos chauffeurs assurent les transferts depuis l'aéroport Rennes-Bretagne vers le centre et toute la métropole rennaise." },
  ], 250, "5 min"),

  city("Reims", "reims", 49.2583, 4.0317, 187181, [
    "Gare de Reims", "CHU de Reims", "Centre des Congrès",
    "Cathédrale Notre-Dame", "Université de Reims", "Quartier Clairmarais", "Parc de Champagne",
    "Basilique Saint-Remi", "Stade Auguste-Delaune", "Centre des Congrès de Reims",
    "Campus Moulin de la Housse", "Hôpital Maison Blanche", "Mars (Porte de Mars)",
    "Halles du Boulingrin", "Quartier Saint-Remi",
  ], [
    "Centre-ville", "Clairmarais", "Cernay", "Europe", "Orgeval", "Croix-Rouge",
    "Wilson", "Courlancy", "Jean Jaurès", "Murigny", "Laon-Zola", "Châtillons",
  ], [
    { from: "Gare de Reims", to: "Centre-ville", price: "8-12 €" },
    { from: "Reims", to: "Épernay", price: "40-55 €" },
    { from: "Reims Centre", to: "CHU de Reims", price: "10-15 €" },
    { from: "Reims", to: "Aéroport CDG", price: "150-180 €" },
    { from: "Centre", to: "Caves de Champagne", price: "8-12 €" },
  ], ["paris", "lille", "metz", "nancy", "amiens"], [
    { text: "Transfert gare – domicile toujours rapide. Idéal après un TGV depuis Paris.", name: "Stéphane M.", initials: "SM", role: "Cadre, Reims" },
    { text: "Service fiable pour les visites de caves de Champagne avec des clients.", name: "Dominique L.", initials: "DL", role: "Négociant en vins" },
    { text: "Taxi ponctuel pour mes rendez-vous au Centre des Congrès.", name: "Céline R.", initials: "CR", role: "Organisatrice événementiel" },
  ], [
    { question: "Peut-on visiter les caves de Champagne en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour visiter les maisons de Champagne. Contactez-nous pour un devis personnalisé." },
    { question: "Combien coûte un taxi Reims – Épernay ?", answer: "Le trajet Reims – Épernay dure environ 30 minutes. Comptez 40-55 € pour visiter la capitale du Champagne." },
    { question: "Peut-on prendre un taxi depuis Reims vers l'aéroport CDG ?", answer: "Oui, nos chauffeurs assurent les transferts Reims – CDG (environ 130 km). Comptez 150-180 € et environ 1h30 de trajet." },
  ], 180, "5 min"),

  city("Saint-Étienne", "saint-etienne", 45.4397, 4.3872, 177480, [
    "Gare de Châteaucreux", "CHU de Saint-Étienne", "Quartier Châteaucreux",
    "Université Jean Monnet", "Musée d'Art Moderne", "Stade Geoffroy-Guichard", "Cité du Design",
    "Parc Technologique", "Centre commercial Centre Deux", "Planétarium",
    "Musée de la Mine", "Puits Couriot", "Hôpital Nord", "IUT de Saint-Étienne", "Place Jean Jaurès",
  ], [
    "Centre-ville", "Châteaucreux", "Carnot", "Fauriel", "La Terrasse", "Montplaisir",
    "Bergson", "Jacquard", "Bellevue", "La Métare", "Monthieu", "Villebœuf",
  ], [
    { from: "Gare Châteaucreux", to: "Centre-ville", price: "8-12 €" },
    { from: "Saint-Étienne", to: "Lyon Saint Exupéry", price: "90-110 €" },
    { from: "Centre", to: "Stade Geoffroy-Guichard", price: "8-12 €" },
    { from: "Saint-Étienne", to: "Lyon Part-Dieu", price: "70-90 €" },
    { from: "Centre", to: "CHU Nord", price: "10-15 €" },
  ], ["lyon", "villeurbanne", "clermont-ferrand", "grenoble", "valence"], [
    { text: "Taxi rapide depuis Châteaucreux vers le centre. Service au top.", name: "David P.", initials: "DP", role: "Ingénieur, Saint-Étienne" },
    { text: "Transfert fiable Saint-Étienne – Lyon Saint Exupéry pour mes vols.", name: "Sylvie A.", initials: "SA", role: "Cadre commerciale" },
    { text: "Chauffeur ponctuel les soirs de match au Chaudron. Merci !", name: "Nicolas J.", initials: "NJ", role: "Supporter stéphanois" },
  ], [
    { question: "Peut-on prendre un taxi Saint-Étienne – Lyon ?", answer: "Oui, nos chauffeurs assurent les trajets Saint-Étienne – Lyon (environ 60 km). Comptez 70-90 € selon la circulation." },
    { question: "Les taxis sont-ils disponibles les soirs de match au Chaudron ?", answer: "Oui, nos chauffeurs sont mobilisés pour les matchs à Geoffroy-Guichard. Réservez votre taxi retour à l'avance." },
    { question: "Combien de temps met un taxi Saint-Étienne – Lyon Saint Exupéry ?", answer: "Le trajet dure environ 1h15. Comptez 90-110 € pour un transfert direct vers l'aéroport." },
  ], 200, "5 min"),

  city("Le Havre", "le-havre", 49.4944, 0.1079, 172366, [
    "Port du Havre", "Gare du Havre", "Hôpital Jacques Monod",
    "Quartier Perret", "Université Le Havre Normandie", "Plage du Havre", "Docks Vauban",
    "Musée d'Art Moderne MuMa", "Les Jardins Suspendus", "Centre commercial Docks Vauban",
    "Centre commercial Espace Coty", "Stade Océane", "Pont de Normandie",
    "Église Saint-Joseph", "Fort de Sainte-Adresse",
  ], [
    "Centre reconstruit", "Sainte-Adresse", "Sanvic", "Bléville", "Dollemard", "Caucriauville",
    "Mare Rouge", "Aplemont", "Rouelles", "Graville", "Danton", "Perret",
  ], [
    { from: "Centre-ville", to: "Port du Havre", price: "8-12 €" },
    { from: "Le Havre", to: "Étretat", price: "35-45 €" },
    { from: "Gare du Havre", to: "Plage", price: "8-12 €" },
    { from: "Le Havre", to: "Honfleur", price: "35-45 €" },
    { from: "Centre", to: "Hôpital Jacques Monod", price: "10-15 €" },
  ], ["rouen", "caen", "amiens", "paris"], [
    { text: "Taxi disponible même au retour des ferries. Service pratique et fiable.", name: "Patrick L.", initials: "PL", role: "Voyageur, Le Havre" },
    { text: "Trajet port – gare rapide pour attraper mon train vers Paris.", name: "Élise B.", initials: "EB", role: "Cadre, Le Havre" },
    { text: "Chauffeur agréable pour mes déplacements dans le quartier Perret.", name: "Gérard F.", initials: "GF", role: "Retraité, Le Havre" },
  ], [
    { question: "Peut-on prendre un taxi depuis le port du Havre ?", answer: "Oui, nos chauffeurs sont disponibles au port pour les passagers de ferries et croisières. Réservez à l'avance pour être sûr." },
    { question: "Peut-on prendre un taxi Le Havre – Étretat ?", answer: "Oui, le trajet Le Havre – Étretat dure environ 30 minutes. Comptez 35-45 € pour découvrir les célèbres falaises." },
    { question: "Les taxis sont-ils disponibles au terminal ferry du Havre ?", answer: "Oui, nos chauffeurs accueillent les passagers des ferries en provenance d'Angleterre, même très tôt le matin." },
  ], 150, "6 min"),

  city("Toulon", "toulon", 43.1242, 5.9280, 171953, [
    "Port de Toulon", "Gare de Toulon", "Hôpital Sainte-Musse",
    "Arsenal de Toulon", "Université de Toulon", "Mont Faron", "Mourillon",
    "Musée de la Marine", "Opéra de Toulon", "Centre commercial Mayol",
    "Plages du Mourillon", "Téléphérique du Faron", "Stade Mayol", "Tour Royale", "Base navale",
  ], [
    "Centre-ville", "Mourillon", "Le Cap Brun", "Saint-Jean du Var", "La Serinette", "Las Paluns",
    "La Rode", "Pont du Suve", "Le Faron", "La Loubière", "Sainte-Musse", "La Valette",
  ], [
    { from: "Toulon Centre", to: "Port de Toulon", price: "8-12 €" },
    { from: "Toulon", to: "Hyères", price: "30-40 €" },
    { from: "Gare de Toulon", to: "Mourillon", price: "8-12 €" },
    { from: "Toulon", to: "Aéroport Toulon-Hyères", price: "30-40 €" },
    { from: "Centre", to: "Hôpital Sainte-Musse", price: "10-15 €" },
  ], ["marseille", "aix-en-provence", "nice", "cannes"], [
    { text: "Taxi fiable depuis la gare vers le port. Idéal avant l'embarquement pour la Corse.", name: "Jean-Marc D.", initials: "JMD", role: "Voyageur, Toulon" },
    { text: "Service rapide pour mes déplacements vers l'hôpital Sainte-Musse.", name: "Martine C.", initials: "MC", role: "Patiente, Toulon" },
    { text: "Chauffeur ponctuel et véhicule propre. Je recommande TaxiNeo à Toulon.", name: "Fabien S.", initials: "FS", role: "Militaire, Toulon" },
  ], [
    { question: "Peut-on prendre un taxi pour le port de Toulon ?", answer: "Oui, nos chauffeurs assurent les transferts vers le port pour les ferries vers la Corse et les îles d'Hyères." },
    { question: "Peut-on prendre un taxi pour les îles d'Hyères ?", answer: "Nos chauffeurs vous conduisent au port d'embarquement pour les navettes vers Porquerolles, Port-Cros et Le Levant." },
    { question: "Les taxis desservent-ils la base navale de Toulon ?", answer: "Oui, nos chauffeurs connaissent bien les accès à la base navale et l'arsenal de Toulon." },
  ], 180, "5 min"),

  city("Grenoble", "grenoble", 45.1885, 5.7245, 160779, [
    "Gare de Grenoble", "CHU Grenoble Alpes", "Quartier Europole",
    "Université Grenoble Alpes", "Bastille", "Presqu'île scientifique", "Alpexpo",
    "Musée de Grenoble", "Téléphérique de la Bastille", "Stade des Alpes",
    "Centre commercial Grand'Place", "MC2 Grenoble", "Campus Saint-Martin-d'Hères",
    "Caserne de Bonne", "Polygone Scientifique",
  ], [
    "Centre-ville", "Europole", "Île Verte", "Saint-Bruno", "Championnet", "Berriat",
    "Bajatière", "Teisseire", "Village Olympique", "Eaux Claires", "Mistral", "La Capuche", "Abbaye",
  ], [
    { from: "Gare de Grenoble", to: "Centre", price: "8-10 €" },
    { from: "Grenoble", to: "Lyon Saint Exupéry", price: "100-130 €" },
    { from: "Centre", to: "CHU Grenoble Alpes", price: "10-15 €" },
    { from: "Grenoble", to: "Chamrousse", price: "45-60 €" },
    { from: "Grenoble", to: "Alpe d'Huez", price: "80-110 €" },
  ], ["lyon", "valence", "chambery", "annecy", "saint-etienne"], [
    { text: "Taxi fiable pour mes trajets vers le campus universitaire. Toujours ponctuel.", name: "Lucie B.", initials: "LB", role: "Chercheuse, Grenoble" },
    { text: "Transfert Grenoble – Lyon Saint Exupéry confortable et à l'heure.", name: "Antoine G.", initials: "AG", role: "Cadre, Grenoble" },
    { text: "Service parfait pour accéder à la Presqu'île scientifique.", name: "Rémi T.", initials: "RT", role: "Ingénieur, Grenoble" },
  ], [
    { question: "Peut-on prendre un taxi Grenoble – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers les stations (Chamrousse, les 2 Alpes, l'Alpe d'Huez). Réservez à l'avance en saison." },
    { question: "Combien coûte un taxi Grenoble – Chamrousse ?", answer: "Le trajet Grenoble – Chamrousse dure environ 45 minutes. Comptez 45-60 € pour rejoindre la station." },
    { question: "Les taxis sont-ils disponibles la nuit à Grenoble ?", answer: "Oui, nos chauffeurs à Grenoble sont disponibles 24h/24. Réservez en ligne ou appelez même en pleine nuit." },
  ], 200, "5 min"),

  city("Dijon", "dijon", 47.3220, 5.0415, 159346, [
    "Gare Dijon-Ville", "CHU Dijon", "Quartier Toison d'Or",
    "Université de Bourgogne", "Centre-ville historique", "Palais des Ducs", "Zénith de Dijon",
    "Musée des Beaux-Arts de Dijon", "Jardin Darcy", "Centre commercial Toison d'Or",
    "Cité de la Gastronomie", "Campus universitaire", "Parc de la Colombière",
    "Stade Gaston Gérard", "Auditorium de Dijon",
  ], [
    "Centre historique", "Toison d'Or", "Montchapet", "Bourroches", "Grésilles", "Fontaine-d'Ouche",
    "Université", "Chenôve", "Quetigny", "Mansart", "Port du Canal", "Victor Hugo",
  ], [
    { from: "Gare Dijon-Ville", to: "Centre", price: "8-10 €" },
    { from: "Dijon", to: "Beaune", price: "45-60 €" },
    { from: "Centre", to: "CHU Dijon", price: "10-15 €" },
    { from: "Dijon", to: "Nuits-Saint-Georges", price: "35-45 €" },
    { from: "Centre", to: "Toison d'Or", price: "10-15 €" },
  ], ["besancon", "lyon", "metz", "nancy", "reims"], [
    { text: "Taxi rapide depuis la gare TGV. Parfait pour mes déplacements professionnels.", name: "Christian P.", initials: "CP", role: "Cadre, Dijon" },
    { text: "Service fiable pour les visites des vignobles bourguignons.", name: "Marie-Claire D.", initials: "MCD", role: "Touriste" },
    { text: "Transfert régulier vers le CHU. Chauffeurs toujours aimables.", name: "Bernard G.", initials: "BG", role: "Patient, Dijon" },
  ], [
    { question: "Peut-on visiter les vignobles en taxi depuis Dijon ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour la route des Grands Crus. Contactez-nous pour un devis." },
    { question: "Combien coûte un taxi Dijon – Beaune ?", answer: "Le trajet Dijon – Beaune dure environ 35 minutes. Comptez 45-60 € pour rejoindre la capitale des vins de Bourgogne." },
    { question: "Les taxis sont-ils disponibles tôt le matin à la gare de Dijon ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24 à la gare Dijon-Ville pour tous les TGV, même les premiers trains." },
  ], 170, "5 min"),

  city("Angers", "angers", 47.4784, -0.5632, 157175, [
    "Gare d'Angers Saint-Laud", "CHU d'Angers", "Quartier La Doutre",
    "Université d'Angers", "Château d'Angers", "Terra Botanica", "Parc des Expositions",
    "Parc Terra Botanica", "Centre commercial Atoll", "Stade Raymond Kopa",
    "Hôpital Larrey", "IUT d'Angers", "Gare TGV Angers Saint-Laud",
    "Quartier Belle-Beille", "Lac de Maine",
  ], [
    "Centre-ville", "La Doutre", "Belle-Beille", "Monplaisir", "Roseraie",
    "Lac de Maine", "Saint-Serge", "Deux Croix-Banchais", "Madeleine",
    "Justices", "Hauts de Saint-Aubin", "Grand Pigeon",
  ], [
    { from: "Gare Saint-Laud", to: "Centre-ville", price: "6-10 €" },
    { from: "Angers", to: "Aéroport Angers-Loire", price: "25-35 €" },
    { from: "Centre", to: "CHU d'Angers", price: "8-12 €" },
    { from: "Angers", to: "Saumur", price: "55-70 €" },
    { from: "Gare", to: "Parc des Expositions", price: "10-15 €" },
  ], ["nantes", "le-mans", "tours", "rennes"], [
    { text: "Taxi depuis la gare Saint-Laud toujours disponible et rapide.", name: "Guillaume R.", initials: "GR", role: "Voyageur, Angers" },
    { text: "Service parfait pour mes trajets vers le CHU. Merci TaxiNeo.", name: "Françoise M.", initials: "FM", role: "Patiente, Angers" },
    { text: "Chauffeur ponctuel pour mes rendez-vous au Parc des Expositions.", name: "Benoît L.", initials: "BL", role: "Commercial, Angers" },
  ], [
    { question: "Y a-t-il un aéroport à Angers ?", answer: "L'aéroport Angers-Loire se trouve à 20 minutes du centre. TaxiNeo assure les transferts pour environ 25-35 €." },
    { question: "Combien de temps met un taxi pour aller d'Angers à Saumur ?", answer: "Le trajet Angers – Saumur dure environ 45 minutes en taxi. Comptez 55-70 € pour un transfert direct." },
    { question: "Les taxis sont-ils disponibles le week-end à Angers ?", answer: "Oui, nos chauffeurs à Angers sont disponibles 7j/7 y compris les week-ends et jours fériés." },
  ], 160, "5 min"),

  city("Nîmes", "nimes", 43.8367, 4.3601, 151001, [
    "Gare de Nîmes", "CHU de Nîmes", "Arènes de Nîmes",
    "Université de Nîmes", "Quartier Costières", "Maison Carrée", "Jardins de la Fontaine",
    "Pont du Gard", "Aéroport Nîmes-Garons", "Stade des Costières",
    "Centre commercial Nîmes Etoile", "Lycée Alphonse Daudet", "Musée de la Romanité",
    "Colisée de Nîmes", "Halles centrales",
  ], [
    "Centre historique", "Ecusson", "Route d'Arles", "Costières", "Pissevin",
    "Valdegour", "Beausoleil", "Mas de Mingue", "Puech du Teil",
    "Route d'Uzès", "Castanet", "Hoche-Sernam",
  ], [
    { from: "Centre-ville", to: "Gare de Nîmes", price: "6-10 €" },
    { from: "Nîmes", to: "Pont du Gard", price: "30-40 €" },
    { from: "Nîmes", to: "Aéroport Garons", price: "15-25 €" },
    { from: "Nîmes", to: "Avignon", price: "45-60 €" },
    { from: "Centre", to: "CHU de Nîmes", price: "8-12 €" },
  ], ["montpellier", "avignon", "marseille", "aix-en-provence"], [
    { text: "Taxi disponible rapidement pour les événements aux Arènes. Très pratique.", name: "Pascal D.", initials: "PD", role: "Nîmois" },
    { text: "Transfert gare TGV fiable après chaque voyage depuis Paris.", name: "Agnès S.", initials: "AS", role: "Cadre, Nîmes" },
    { text: "Service régulier pour mes consultations au CHU. Toujours satisfaite.", name: "Mireille V.", initials: "MiV", role: "Patiente, Nîmes" },
  ], [
    { question: "Y a-t-il un aéroport à Nîmes ?", answer: "Oui, l'aéroport Nîmes-Garons (Alès-Camargue-Cévennes) est à 15 minutes. Transferts assurés par TaxiNeo." },
    { question: "Peut-on prendre un taxi Nîmes – Pont du Gard ?", answer: "Oui, le trajet Nîmes – Pont du Gard dure environ 25 minutes. Comptez 30-40 €. Mise à disposition possible pour la visite." },
    { question: "Les taxis sont-ils disponibles pendant la Féria de Nîmes ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant la Féria. Réservez à l'avance pour garantir votre course." },
  ], 150, "6 min"),

  city("Villeurbanne", "villeurbanne", 45.7660, 4.8795, 154781, [
    "Campus de la Doua", "Gratte-Ciel", "Hôpital Desgenettes",
    "INSA Lyon", "Université Lyon 1", "Tonkin", "Palais des Sports",
    "Maison du Livre de l'Image et du Son", "Théâtre National Populaire",
    "Centre commercial Westfield La Part-Dieu", "Médipôle Lyon-Villeurbanne",
    "Parc de la Feyssine", "Institut National des Sciences Appliquées",
  ], [
    "Gratte-Ciel", "Tonkin", "Charpennes", "Cusset", "La Doua",
    "Flachet", "Buers", "Croix-Luizet", "Saint-Jean",
    "Cyprian", "Les Brosses", "Grandclément",
  ], [
    { from: "Gratte-Ciel", to: "Lyon Part-Dieu", price: "8-12 €" },
    { from: "Campus Doua", to: "Gare Part-Dieu", price: "10-15 €" },
    { from: "Villeurbanne", to: "Aéroport Saint Exupéry", price: "60-75 €" },
    { from: "Tonkin", to: "Presqu'île Lyon", price: "10-15 €" },
    { from: "Centre", to: "Hôpital Desgenettes", price: "6-10 €" },
  ], ["lyon", "saint-etienne", "grenoble", "annecy"], [
    { text: "Taxi fiable pour mes trajets campus Doua – Part-Dieu. Indispensable.", name: "Sarah K.", initials: "SK", role: "Étudiante, Villeurbanne" },
    { text: "Service ponctuel pour mes déplacements depuis les Gratte-Ciel.", name: "Alain B.", initials: "AB", role: "Cadre, Villeurbanne" },
    { text: "Chauffeur agréable pour mes trajets vers l'hôpital. Merci.", name: "Denise P.", initials: "DeP", role: "Retraitée, Villeurbanne" },
  ], [
    { question: "Villeurbanne est-elle couverte par TaxiNeo Lyon ?", answer: "Oui, Villeurbanne est entièrement couverte. Nos chauffeurs assurent toutes les courses dans la métropole lyonnaise." },
    { question: "Les taxis TaxiNeo desservent-ils le campus de La Doua ?", answer: "Oui, nos chauffeurs connaissent parfaitement le campus universitaire de La Doua et tous ses bâtiments." },
    { question: "Peut-on prendre un taxi de Villeurbanne vers l'aéroport Saint Exupéry ?", answer: "Oui, le trajet Villeurbanne – Saint Exupéry dure environ 35 minutes. Comptez 60-75 €." },
  ], 200, "4 min"),

  city("Clermont-Ferrand", "clermont-ferrand", 45.7772, 3.0870, 147865, [
    "Aéroport Clermont-Ferrand Auvergne", "Gare de Clermont-Ferrand", "CHU Gabriel-Montpied",
    "Place de Jaude", "Université Clermont Auvergne", "Quartier République", "Vulcania",
    "Cathédrale Notre-Dame-de-l'Assomption", "Centre commercial Jaude", "Stade Marcel-Michelin",
    "Campus des Cézeaux", "Parc Montjuzet", "Musée Bargoin",
    "Hôpital Estaing", "Polydôme",
  ], [
    "Centre-ville", "Jaude", "Salins", "Montferrand", "Champratel",
    "La Gauthière", "Croix de Neyrat", "Les Vergnes", "Vallières",
    "Saint-Jacques", "Trudaine", "Fontgiève",
  ], [
    { from: "Centre-ville", to: "Aéroport Aulnat", price: "20-30 €" },
    { from: "Gare de Clermont", to: "Centre", price: "6-10 €" },
    { from: "Clermont", to: "Vulcania", price: "35-45 €" },
    { from: "Centre", to: "CHU Gabriel-Montpied", price: "8-12 €" },
    { from: "Clermont", to: "Vichy", price: "55-70 €" },
  ], ["saint-etienne", "lyon", "limoges", "dijon", "valence"], [
    { text: "Taxi rapide depuis la gare vers le plateau de Gergovie. Chauffeur passionné par l'Auvergne.", name: "Didier C.", initials: "DiC", role: "Touriste" },
    { text: "Service fiable pour mes trajets vers le CHU Montpied chaque semaine.", name: "Hélène A.", initials: "HA", role: "Patiente, Clermont" },
    { text: "Transfert aéroport Aulnat ponctuel et professionnel.", name: "Xavier B.", initials: "XB", role: "Cadre, Clermont" },
  ], [
    { question: "Combien coûte un taxi Clermont – Vulcania ?", answer: "Le trajet Clermont-Ferrand – Vulcania (environ 25 km) coûte entre 35 et 45 €. Idéal pour une sortie en famille." },
    { question: "Combien de temps met un taxi Clermont-Ferrand – Vichy ?", answer: "Le trajet Clermont – Vichy dure environ 50 minutes. Comptez 55-70 € pour un transfert direct." },
    { question: "Y a-t-il des taxis tôt le matin à l'aéroport d'Aulnat ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24 à l'aéroport Clermont-Ferrand Auvergne pour tous les vols." },
  ], 170, "5 min"),

  city("Aix-en-Provence", "aix-en-provence", 43.5297, 5.4474, 147122, [
    "Gare TGV Aix-en-Provence", "Cours Mirabeau", "Hôpital du Pays d'Aix",
    "Université Aix-Marseille", "Quartier Sextius", "Atelier Cézanne", "Parc Saint-Mitre",
    "Fondation Vasarely", "Centre commercial Plan de Campagne", "Thermes Sextius",
    "Cité du Livre", "IEP d'Aix-en-Provence", "Quartier Jas de Bouffan",
    "Camp des Milles", "Grand Théâtre de Provence",
  ], [
    "Centre historique", "Cours Mirabeau", "Mazarin", "Sextius", "Pont de l'Arc",
    "Jas de Bouffan", "La Torse", "Les Milles", "Puyricard",
    "Luynes", "La Duranne", "Encagnane",
  ], [
    { from: "Centre-ville", to: "Gare TGV Aix", price: "30-40 €" },
    { from: "Aix", to: "Aéroport Marseille-Provence", price: "50-65 €" },
    { from: "Centre", to: "Hôpital du Pays d'Aix", price: "8-12 €" },
    { from: "Aix", to: "Marseille Centre", price: "55-70 €" },
    { from: "Centre", to: "Camp des Milles", price: "15-22 €" },
  ], ["marseille", "toulon", "avignon", "nimes", "montpellier"], [
    { text: "Transfert gare TGV – centre-ville toujours parfait. Rapide et agréable.", name: "Véronique M.", initials: "VM", role: "Aixoise" },
    { text: "Mise à disposition idéale pour visiter la Provence avec des amis étrangers.", name: "Robert T.", initials: "RoT", role: "Retraité, Aix" },
    { text: "Service pro pour mes déplacements universitaires. Je recommande.", name: "Camille F.", initials: "CF", role: "Professeure, Aix" },
  ], [
    { question: "La gare TGV d'Aix est-elle loin du centre ?", answer: "La gare TGV est à 15 km du centre d'Aix. Le taxi TaxiNeo vous y conduit en 15-20 minutes pour environ 30-40 €." },
    { question: "Combien coûte un taxi Aix – Aéroport Marseille-Provence ?", answer: "Le trajet Aix-en-Provence – Aéroport Marseille-Provence dure environ 25 minutes. Comptez 50-65 €." },
    { question: "Peut-on visiter la Provence en taxi depuis Aix ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour découvrir le Luberon, les Alpilles ou la Sainte-Victoire." },
  ], 180, "5 min"),

  city("Le Mans", "le-mans", 47.9960, 0.1996, 146105, [
    "Gare du Mans", "Centre Hospitalier du Mans", "Circuit des 24 Heures",
    "Université du Mans", "Cité Plantagenêt", "Antarès", "Centre-Sud",
    "Cathédrale Saint-Julien", "Centre commercial Jacobins", "Hôpital du Mans",
    "Abbaye de l'Épau", "Parc des Expositions", "MMA Arena", "Gare TGV du Mans", "Quartier Novaxis",
  ], [
    "Centre historique", "Bollée", "Pontlieue", "Université", "Gazonfier", "Les Maillets",
    "Ronceray", "Chasse Royale", "Coulaines", "Allonnes", "Arnage", "Sablons",
  ], [
    { from: "Gare du Mans", to: "Centre-ville", price: "6-10 €" },
    { from: "Le Mans", to: "Circuit des 24 Heures", price: "12-18 €" },
    { from: "Le Mans", to: "Tours", price: "90-110 €" },
    { from: "Centre", to: "Centre Hospitalier", price: "8-12 €" },
    { from: "Le Mans", to: "Angers", price: "80-100 €" },
  ], ["angers", "tours", "rennes", "nantes", "paris"], [
    { text: "Taxi disponible même pendant les 24 Heures. Impressionnant.", name: "Vincent L.", initials: "VL", role: "Fan de sport auto" },
    { text: "Trajet gare TGV – domicile rapide et fiable. Mon taxi de confiance.", name: "Colette B.", initials: "CoB", role: "Cadre, Le Mans" },
    { text: "Service régulier pour le Centre Hospitalier. Chauffeurs sympathiques.", name: "Jacques D.", initials: "JaD", role: "Patient, Le Mans" },
  ], [
    { question: "Peut-on prendre un taxi pendant les 24H du Mans ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant les 24 Heures du Mans. Réservez à l'avance pour plus de sérénité." },
    { question: "Combien coûte un taxi pour le Circuit des 24 Heures ?", answer: "Le trajet Le Mans centre – Circuit des 24 Heures coûte environ 12-18 €. Réservez à l'avance pendant l'événement." },
    { question: "Y a-t-il des taxis à la gare TGV du Mans le soir ?", answer: "Oui, nos chauffeurs sont disponibles à la gare du Mans pour tous les TGV, y compris les derniers trains." },
  ], 140, "6 min"),

  city("Brest", "brest", 48.3904, -4.4861, 142722, [
    "Aéroport Brest-Bretagne", "Gare de Brest", "CHU de Brest",
    "Port de Brest", "Université de Bretagne Occidentale", "Océanopolis", "Quartier Siam",
    "Pont de l'Iroise", "Jardin du Conservatoire botanique", "Aéroport Brest-Bretagne Guipavas",
    "Centre commercial Iroise", "Stade Francis-Le Blé", "Base navale", "Capucins", "Technopôle Brest-Iroise",
  ], [
    "Centre-ville", "Siam", "Saint-Martin", "Recouvrance", "Bellevue", "Kérinou",
    "Saint-Marc", "Lambézellec", "Saint-Pierre", "Europe", "Pontanézen", "Quatre Moulins",
  ], [
    { from: "Centre", to: "Aéroport Guipavas", price: "15-25 €" },
    { from: "Brest", to: "Quimper", price: "70-90 €" },
    { from: "Gare de Brest", to: "Océanopolis", price: "10-15 €" },
    { from: "Centre", to: "CHU de Brest", price: "8-12 €" },
    { from: "Brest", to: "Roscoff", price: "55-70 €" },
  ], ["rennes", "nantes", "caen"], [
    { text: "Taxi fiable depuis l'aéroport Guipavas. Service rapide et ponctuel.", name: "Yves G.", initials: "YG", role: "Marin, Brest" },
    { text: "Transfert port – gare sans problème. Chauffeur arrangeant.", name: "Nolwenn R.", initials: "NR", role: "Voyageuse, Brest" },
    { text: "Service de qualité pour mes trajets CHU de Brest.", name: "Jean-Pierre M.", initials: "JPM", role: "Patient, Brest" },
  ], [
    { question: "Combien coûte un taxi Brest-Aéroport ?", answer: "Le trajet Brest centre – Aéroport Guipavas coûte environ 15-25 €. Estimation avant réservation sur TaxiNeo." },
    { question: "Peut-on prendre un taxi Brest – Roscoff pour le ferry ?", answer: "Oui, nos chauffeurs assurent les transferts vers le port de Roscoff pour les ferries vers l'Irlande et l'Angleterre." },
    { question: "Les taxis sont-ils disponibles pendant les Fêtes maritimes de Brest ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant les grandes fêtes maritimes. Réservez à l'avance." },
  ], 140, "6 min"),

  city("Tours", "tours", 47.3941, 0.6848, 138588, [
    "Gare de Tours", "Gare TGV Saint-Pierre-des-Corps", "CHU Trousseau",
    "Université de Tours", "Place Plumereau", "Centre de Congrès Vinci", "Quartier des Prébendes",
    "Cathédrale Saint-Gatien", "Centre commercial Les Atlantes", "Hôpital Bretonneau",
    "Parc des Expositions", "Basilique Saint-Martin", "Jardin botanique", "Quartier Grammont", "Palais des Sports",
  ], [
    "Centre-ville", "Vieux Tours", "Prébendes", "Grammont", "Blanqui", "Sanitas",
    "Febvotte", "Rabelais", "Tonnellé", "Beaujardin", "Saint-Symphorien", "La Riche",
  ], [
    { from: "Gare de Tours", to: "Centre", price: "6-10 €" },
    { from: "Gare TGV Saint-Pierre-des-Corps", to: "Centre Tours", price: "12-18 €" },
    { from: "Tours", to: "Amboise", price: "35-45 €" },
    { from: "Tours", to: "Chenonceau", price: "40-55 €" },
    { from: "Centre", to: "CHU Trousseau", price: "10-15 €" },
  ], ["le-mans", "angers", "orleans", "poitiers", "nantes"], [
    { text: "Transfert gare Saint-Pierre-des-Corps – centre de Tours impeccable.", name: "Florence D.", initials: "FD", role: "Voyageuse, Tours" },
    { text: "Taxi pour visiter les châteaux de la Loire. Chauffeur-guide formidable.", name: "Richard S.", initials: "RS", role: "Touriste" },
    { text: "Service régulier vers le CHU Trousseau. Toujours satisfait.", name: "Maurice L.", initials: "MaL", role: "Patient, Tours" },
  ], [
    { question: "Peut-on visiter les châteaux de la Loire en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour visiter Chambord, Chenonceau, Amboise et d'autres châteaux. Demandez un devis." },
    { question: "Combien coûte un taxi Tours – Amboise ?", answer: "Le trajet Tours – Amboise dure environ 25 minutes. Comptez 35-45 € pour un transfert direct vers le château." },
    { question: "Peut-on visiter plusieurs châteaux de la Loire en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition à la journée pour visiter Chambord, Chenonceau, Azay-le-Rideau et d'autres." },
  ], 150, "5 min"),

  city("Amiens", "amiens", 49.8941, 2.2958, 136105, [
    "Gare d'Amiens", "CHU Amiens-Picardie", "Cathédrale Notre-Dame",
    "Université de Picardie", "Quartier Saint-Leu", "Zénith d'Amiens", "Hortillonnages",
    "Cirque Jules Verne", "Centre commercial Amiens 2", "Maison de Jules Verne",
    "Beffroi d'Amiens", "Parc Saint-Pierre", "Stade de la Licorne", "Campus universitaire", "Quartier Henriville",
  ], [
    "Centre-ville", "Saint-Leu", "Henriville", "Saint-Pierre", "Beauvillé", "Étouvie",
    "Nord", "Saint-Acheul", "Montières", "Renancourt", "Longpré", "Saint-Maurice",
  ], [
    { from: "Gare d'Amiens", to: "Centre-ville", price: "6-10 €" },
    { from: "Amiens", to: "Aéroport CDG", price: "140-170 €" },
    { from: "Centre", to: "CHU Amiens-Picardie", price: "10-15 €" },
    { from: "Amiens", to: "Beauvais", price: "65-80 €" },
    { from: "Centre", to: "Hortillonnages", price: "8-12 €" },
  ], ["lille", "paris", "reims", "rouen", "calais"], [
    { text: "Taxi rapide depuis la gare pour mes rendez-vous au CHU.", name: "Christophe M.", initials: "ChM", role: "Médecin, Amiens" },
    { text: "Service fiable pour mes trajets professionnels dans Amiens.", name: "Delphine B.", initials: "DeB", role: "Cadre, Amiens" },
    { text: "Chauffeur sympa et ponctuel. Je recommande TaxiNeo.", name: "Thierry R.", initials: "ThR", role: "Amiénois" },
  ], [
    { question: "Amiens est-elle bien desservie par les taxis ?", answer: "Oui, TaxiNeo couvre toute l'agglomération d'Amiens avec des chauffeurs disponibles 24h/24. Temps d'attente moyen : 6 minutes." },
    { question: "Peut-on prendre un taxi Amiens – Aéroport CDG ?", answer: "Oui, nos chauffeurs assurent les transferts Amiens – CDG (environ 150 km). Comptez 140-170 € et environ 1h45." },
    { question: "Les taxis desservent-ils les Hortillonnages ?", answer: "Oui, nos chauffeurs vous conduisent au point d'embarquement des Hortillonnages pour 8-12 € depuis le centre." },
  ], 130, "6 min"),

  city("Limoges", "limoges", 45.8336, 1.2611, 133968, [
    "Aéroport Limoges-Bellegarde", "Gare des Bénédictins", "CHU Dupuytren",
    "Université de Limoges", "Quartier de la Cathédrale", "Musée de la Porcelaine", "Zénith de Limoges",
    "Cathédrale Saint-Étienne", "Centre commercial Saint-Martial", "Jardin d'Orsay", "Aquarium du Limousin",
    "Halles centrales", "Parc du Mas Jambost", "Ester Technopole", "Palais des Sports",
  ], [
    "Centre-ville", "Cathédrale", "Carnot-Marceau", "La Bastide", "Beaubreuil", "Val de l'Aurence",
    "Le Sablard", "Landouge", "Corgnac", "Les Portes Ferrées", "Montjovis", "Couzeix",
  ], [
    { from: "Centre-ville", to: "Aéroport Bellegarde", price: "15-25 €" },
    { from: "Gare des Bénédictins", to: "Centre", price: "6-10 €" },
    { from: "Centre", to: "CHU Dupuytren", price: "10-15 €" },
    { from: "Limoges", to: "Brive-la-Gaillarde", price: "80-100 €" },
    { from: "Centre", to: "Ester Technopole", price: "12-18 €" },
  ], ["clermont-ferrand", "poitiers", "bordeaux", "tours"], [
    { text: "La gare des Bénédictins est magnifique et le taxi TaxiNeo m'attendait à la sortie.", name: "Daniel F.", initials: "DF", role: "Voyageur" },
    { text: "Transfert aéroport Bellegarde rapide et abordable.", name: "Pauline G.", initials: "PG", role: "Étudiante, Limoges" },
    { text: "Service de qualité pour mes trajets CHU Dupuytren.", name: "Odette V.", initials: "OV", role: "Patiente, Limoges" },
  ], [
    { question: "Combien coûte un taxi Limoges-Aéroport ?", answer: "Le trajet Limoges centre – Aéroport Bellegarde coûte environ 15-25 €. Disponible 24h/24." },
    { question: "Les taxis sont-ils disponibles à la gare des Bénédictins ?", answer: "Oui, nos chauffeurs sont présents à la gare des Bénédictins pour tous les trains, y compris les TGV." },
    { question: "Peut-on prendre un taxi Limoges – Brive ?", answer: "Oui, le trajet Limoges – Brive dure environ 1h15. Comptez 80-100 € pour un transfert direct." },
  ], 120, "6 min"),

  city("Annecy", "annecy", 45.8992, 6.1294, 132654, [
    "Gare d'Annecy", "Centre Hospitalier Annecy Genevois", "Lac d'Annecy",
    "Vieille ville", "Quartier Novel", "Parc des Expositions", "Semnoz",
    "Palais de l'Île", "Musée-Château d'Annecy", "Centre commercial Courier", "Bonlieu Scène nationale",
    "Plage d'Annecy-le-Vieux", "Base de loisirs des Marquisats", "Parc Charles Bosson", "Aérodrome Annecy-Meythet",
  ], [
    "Vieille ville", "Centre-ville", "Novel", "Les Balmettes", "Annecy-le-Vieux", "Seynod",
    "Cran-Gevrier", "Meythet", "Pringy", "Les Teppes", "Parmelan", "La Prairie",
  ], [
    { from: "Gare d'Annecy", to: "Centre-ville", price: "6-10 €" },
    { from: "Annecy", to: "Genève Aéroport", price: "80-100 €" },
    { from: "Centre", to: "Hôpital CHANGE", price: "8-12 €" },
    { from: "Annecy", to: "La Clusaz", price: "45-60 €" },
    { from: "Annecy", to: "Chamonix", price: "80-110 €" },
  ], ["lyon", "chambery", "grenoble", "geneve"], [
    { text: "Taxi depuis la gare vers les bords du lac. Chauffeur qui connaît les meilleurs spots.", name: "Éric L.", initials: "EL", role: "Touriste" },
    { text: "Transfert Annecy – Genève Aéroport confortable et ponctuel.", name: "Isabelle K.", initials: "IK", role: "Cadre, Annecy" },
    { text: "Service fiable pour mes trajets médicaux au CHANGE.", name: "Roger B.", initials: "RoB", role: "Patient, Annecy" },
  ], [
    { question: "Peut-on prendre un taxi Annecy – Genève ?", answer: "Oui, nos chauffeurs assurent les transferts Annecy – Genève (aéroport ou centre). Comptez 80-100 € pour environ 45 minutes." },
    { question: "Combien coûte un taxi Annecy – La Clusaz ?", answer: "Le trajet Annecy – La Clusaz dure environ 35 minutes. Comptez 45-60 € pour rejoindre la station de ski." },
    { question: "Les taxis sont-ils disponibles en été au bord du lac d'Annecy ?", answer: "Oui, nos chauffeurs desservent toutes les plages et villages autour du lac d'Annecy en été comme en hiver." },
  ], 140, "5 min"),

  city("Perpignan", "perpignan", 42.6988, 2.8954, 121875, [
    "Gare de Perpignan", "Aéroport Perpignan-Rivesaltes", "Hôpital de Perpignan",
    "Université de Perpignan", "Palais des Rois de Majorque", "Quartier Saint-Jacques", "Polygone Nord",
    "Théâtre de l'Archipel", "Centre commercial Porte d'Espagne", "Stade Gilbert Brutus", "Campo Santo",
    "Musée Hyacinthe Rigaud", "Palais des Congrès", "Parc des Sports", "Clinique Saint-Pierre",
  ], [
    "Centre-ville", "Saint-Jacques", "Saint-Mathieu", "Le Vernet", "Moulin à Vent", "Bas-Vernet",
    "Mailloles", "Las Cobas", "Haut-Vernet", "Porte d'Espagne", "Saint-Gaudérique", "Rois de Majorque",
  ], [
    { from: "Centre-ville", to: "Aéroport Rivesaltes", price: "12-18 €" },
    { from: "Gare de Perpignan", to: "Centre", price: "6-10 €" },
    { from: "Perpignan", to: "Canet-en-Roussillon", price: "15-22 €" },
    { from: "Perpignan", to: "Collioure", price: "30-40 €" },
    { from: "Centre", to: "Hôpital de Perpignan", price: "8-12 €" },
  ], ["montpellier", "toulouse", "nimes", "narbonne"], [
    { text: "Taxi fiable pour mes trajets gare – plage de Canet. Chauffeur sympa.", name: "Carmen S.", initials: "CS", role: "Perpignanaise" },
    { text: "Transfert aéroport Rivesaltes rapide et ponctuel.", name: "Luis P.", initials: "LP", role: "Voyageur" },
    { text: "Service de qualité pour mes visites médicales. Merci TaxiNeo.", name: "Marie-Thérèse D.", initials: "MTD", role: "Patiente, Perpignan" },
  ], [
    { question: "Peut-on prendre un taxi Perpignan – plages ?", answer: "Oui, nos chauffeurs assurent les transferts vers Canet-en-Roussillon, Saint-Cyprien et les plages environnantes (10-20 €)." },
    { question: "Combien coûte un taxi Perpignan – Collioure ?", answer: "Le trajet Perpignan – Collioure dure environ 25 minutes. Comptez 30-40 € pour rejoindre ce village pittoresque." },
    { question: "Les taxis traversent-ils la frontière espagnole ?", answer: "Oui, nos chauffeurs assurent les transferts vers l'Espagne (Figueres, Gérone, Barcelone). Contactez-nous pour un devis." },
  ], 120, "6 min"),

  city("Besançon", "besancon", 47.2378, 6.0241, 120271, [
    "Gare Besançon Franche-Comté TGV", "Gare Besançon-Viotte", "CHU Jean Minjoz",
    "Université de Franche-Comté", "Citadelle Vauban", "Quartier Planoise", "Micropolis",
    "Musée du Temps", "Promenade Chamars", "Centre commercial Chateaufarine", "Micropolis",
    "Parc Micaud", "Campus de la Bouloie", "Hôpital Saint-Jacques", "Kursaal",
  ], [
    "Centre historique", "Battant", "Chaprais", "Planoise", "Palente", "Montrapon",
    "Bregille", "Saint-Claude", "Tilleroyes", "Orchamps", "Velotte", "Butte",
  ], [
    { from: "Gare TGV", to: "Centre-ville", price: "20-30 €" },
    { from: "Gare Viotte", to: "Centre", price: "6-10 €" },
    { from: "Centre", to: "CHU Jean Minjoz", price: "8-12 €" },
    { from: "Besançon", to: "Dijon", price: "80-100 €" },
    { from: "Centre", to: "Citadelle Vauban", price: "6-10 €" },
  ], ["dijon", "mulhouse", "strasbourg", "nancy"], [
    { text: "Transfert gare TGV – centre rapide et confortable. Parfait.", name: "Hervé M.", initials: "HeM", role: "Cadre, Besançon" },
    { text: "Service fiable pour mes déplacements vers le CHU Jean Minjoz.", name: "Annick L.", initials: "AnL", role: "Patiente, Besançon" },
    { text: "Chauffeur ponctuel pour visiter la Citadelle. Très pro.", name: "Fabrice R.", initials: "FaR", role: "Touriste" },
  ], [
    { question: "La gare TGV de Besançon est-elle loin du centre ?", answer: "La gare TGV Besançon Franche-Comté est à 10 km du centre. Le taxi TaxiNeo vous y conduit en 15 minutes pour environ 20-30 €." },
    { question: "Combien coûte un taxi entre les deux gares de Besançon ?", answer: "Le trajet gare TGV Franche-Comté – gare Viotte coûte environ 15-20 €. Nos chauffeurs assurent la liaison pour toutes les correspondances." },
    { question: "Les taxis sont-ils disponibles pour visiter la Citadelle ?", answer: "Oui, nos chauffeurs vous conduisent à la Citadelle Vauban et peuvent vous attendre pour le retour." },
  ], 110, "6 min"),

  city("Metz", "metz", 49.1193, 6.1757, 119962, [
    "Gare de Metz", "CHR Metz-Thionville", "Centre Pompidou-Metz",
    "Université de Lorraine", "Quartier Amphithéâtre", "Technopôle", "Place Saint-Louis",
    "Cathédrale Saint-Étienne", "Centre commercial Muse", "Stade Saint-Symphorien", "Jardin botanique",
    "Temple Neuf", "Arsenal de Metz", "Parc de la Seille", "Campus Bridoux",
  ], [
    "Centre-ville", "Nouvelle Ville", "Sablon", "Plantières", "Queuleu", "Borny",
    "Bellecroix", "Devant-les-Ponts", "Patrotte", "Magny", "Vallières", "Grigy-Technopôle",
  ], [
    { from: "Gare de Metz", to: "Centre-ville", price: "6-10 €" },
    { from: "Metz", to: "Luxembourg Aéroport", price: "90-110 €" },
    { from: "Centre", to: "CHR Metz-Thionville", price: "10-15 €" },
    { from: "Metz", to: "Nancy", price: "70-85 €" },
    { from: "Centre", to: "Centre Pompidou-Metz", price: "6-10 €" },
  ], ["nancy", "strasbourg", "luxembourg", "reims"], [
    { text: "Taxi depuis la gare vers le Centre Pompidou en 5 minutes. Impeccable.", name: "Frédéric W.", initials: "FW", role: "Artiste, Metz" },
    { text: "Service fiable pour mes trajets Metz – Luxembourg. Chauffeur pro.", name: "Marie B.", initials: "MaB", role: "Frontalière" },
    { text: "Transfert régulier vers le CHR. Toujours satisfait.", name: "Georges N.", initials: "GN", role: "Patient, Metz" },
  ], [
    { question: "Peut-on prendre un taxi Metz – Luxembourg ?", answer: "Oui, nos chauffeurs assurent les transferts Metz – Luxembourg (environ 60 km). Comptez 80-100 € pour le trajet." },
    { question: "Combien coûte un taxi Metz – Luxembourg Aéroport ?", answer: "Le trajet Metz – Luxembourg Findel dure environ 1 heure. Comptez 90-110 € pour un transfert direct." },
    { question: "Les taxis sont-ils disponibles tôt le matin à la gare de Metz ?", answer: "Oui, nos chauffeurs sont disponibles à la gare de Metz pour les premiers TGV dès 5h du matin." },
  ], 130, "5 min"),

  city("Orléans", "orleans", 47.9029, 1.9039, 116238, [
    "Gare d'Orléans", "CHR d'Orléans", "Cathédrale Sainte-Croix",
    "Université d'Orléans", "Quartier Source", "Centre de Conférences", "Place du Martroi",
    "Parc Floral de la Source", "Centre commercial Place d'Arc", "Zénith d'Orléans",
    "Hôpital de la Source", "Pont George V", "Campus CNRS Orléans", "Médiathèque", "Quartier Argonne",
  ], [
    "Centre-ville", "Martroi", "Source", "Argonne", "Saint-Marceau", "Madeleine",
    "Olivet", "Saint-Jean-de-la-Ruelle", "Fleury-les-Aubrais", "Bannier", "Dunois", "Dauphine",
  ], [
    { from: "Gare d'Orléans", to: "Centre-ville", price: "6-10 €" },
    { from: "Orléans", to: "Aéroport CDG", price: "150-180 €" },
    { from: "Centre", to: "CHR d'Orléans", price: "12-18 €" },
    { from: "Orléans", to: "Blois", price: "55-70 €" },
    { from: "Centre", to: "Parc Floral", price: "15-22 €" },
  ], ["tours", "paris", "le-mans", "reims"], [
    { text: "Taxi rapide depuis la gare vers le centre. Chauffeur connaisseur.", name: "Nathalie S.", initials: "NaS", role: "Orléanaise" },
    { text: "Service fiable pour mes allers-retours Paris – Orléans.", name: "Christophe V.", initials: "ChV", role: "Cadre" },
    { text: "Transfert CHR ponctuel et chauffeur aimable.", name: "Josette P.", initials: "JoP", role: "Patiente, Orléans" },
  ], [
    { question: "Combien de temps met un taxi Orléans – Paris ?", answer: "Le trajet Orléans – Paris en taxi dure environ 1h30. Comptez 150-180 €. Idéal si vous avez beaucoup de bagages." },
    { question: "Combien coûte un taxi Orléans – Blois ?", answer: "Le trajet Orléans – Blois dure environ 50 minutes. Comptez 55-70 € pour un transfert direct." },
    { question: "Les taxis sont-ils disponibles à la gare d'Orléans ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24 à la gare d'Orléans pour tous les trains." },
  ], 130, "5 min"),

  city("Rouen", "rouen", 49.4432, 1.0993, 114007, [
    "Gare de Rouen-Rive-Droite", "CHU de Rouen", "Cathédrale Notre-Dame",
    "Université de Rouen", "Quartier Saint-Sever", "Panorama XXL", "Place du Vieux-Marché",
    "Gros-Horloge", "Palais de Justice", "Centre commercial Dock 76",
    "Hôpital Charles Nicolle", "Jardin des Plantes", "Théâtre des Arts", "Campus universitaire Mont-Saint-Aignan",
  ], [
    "Centre historique", "Saint-Sever", "Martainville", "Vieux-Marché", "Jouvenet", "Saint-Hilaire",
    "Sapins", "Grand'Mare", "Châtelet", "Darnétal", "Sotteville", "Mont-Saint-Aignan",
  ], [
    { from: "Gare de Rouen", to: "Centre-ville", price: "6-10 €" },
    { from: "Rouen", to: "Le Havre", price: "80-100 €" },
    { from: "Centre", to: "CHU de Rouen", price: "8-12 €" },
    { from: "Rouen", to: "Aéroport CDG", price: "170-200 €" },
    { from: "Rouen", to: "Giverny", price: "55-70 €" },
  ], ["le-havre", "caen", "amiens", "paris"], [
    { text: "Taxi fiable entre la gare et le CHU. Service de qualité.", name: "Laurent G.", initials: "LaG", role: "Médecin, Rouen" },
    { text: "Chauffeur ponctuel pour mes déplacements dans le centre historique.", name: "Brigitte L.", initials: "BrL", role: "Rouennaise" },
    { text: "Transfert Rouen – Le Havre confortable. Je recommande.", name: "Arnaud D.", initials: "ArD", role: "Commercial" },
  ], [
    { question: "Peut-on prendre un taxi Rouen – Paris ?", answer: "Oui, nos chauffeurs assurent les transferts Rouen – Paris (environ 130 km). Comptez 170-200 € pour le trajet." },
    { question: "Peut-on prendre un taxi Rouen – Giverny ?", answer: "Oui, le trajet Rouen – Giverny dure environ 50 minutes. Comptez 55-70 € pour visiter les jardins de Monet." },
    { question: "Les taxis desservent-ils le campus de Mont-Saint-Aignan ?", answer: "Oui, nos chauffeurs connaissent parfaitement le campus universitaire et tous ses accès." },
  ], 140, "5 min"),

  city("Mulhouse", "mulhouse", 47.7508, 7.3359, 112063, [
    "Aéroport Bâle-Mulhouse-Fribourg", "Gare de Mulhouse", "Hôpital Émile Muller",
    "Université de Haute-Alsace", "Cité de l'Automobile", "KMØ", "Quartier Fonderie",
    "Cité du Train", "Centre commercial Porte Jeune", "Hôpital du Hasenrain",
    "Tour de l'Europe", "La Filature", "Parc zoologique et botanique", "Campus Illberg", "Stade de l'Ill",
  ], [
    "Centre-ville", "Fonderie", "Rebberg", "Dornach", "Bourtzwiller", "Illzach",
    "Riedisheim", "Kingersheim", "Wittenheim", "Pfastatt", "Brunstatt", "Coteaux",
  ], [
    { from: "Centre-ville", to: "Aéroport Bâle-Mulhouse", price: "35-45 €" },
    { from: "Gare de Mulhouse", to: "Centre", price: "6-10 €" },
    { from: "Mulhouse", to: "Colmar", price: "40-55 €" },
    { from: "Centre", to: "Cité de l'Automobile", price: "8-12 €" },
    { from: "Mulhouse", to: "Bâle", price: "35-45 €" },
  ], ["colmar", "strasbourg", "besancon", "dijon"], [
    { text: "Transfert aéroport Bâle-Mulhouse rapide et fiable. Chauffeur pro.", name: "Klaus M.", initials: "KM", role: "Frontalier" },
    { text: "Taxi pour la Cité de l'Automobile. Service impeccable.", name: "Joëlle S.", initials: "JoS", role: "Touriste" },
    { text: "Chauffeur ponctuel pour mes rendez-vous médicaux.", name: "Albert W.", initials: "AW", role: "Patient, Mulhouse" },
  ], [
    { question: "Combien coûte un taxi Mulhouse – Aéroport Bâle ?", answer: "Le trajet Mulhouse – Aéroport Bâle-Mulhouse coûte environ 35-45 €. Réservez à l'avance pour un service garanti." },
    { question: "Les taxis traversent-ils la frontière vers Bâle ?", answer: "Oui, nos chauffeurs assurent les transferts vers Bâle en Suisse. Comptez 35-45 € depuis Mulhouse centre." },
    { question: "Combien coûte un taxi Mulhouse – Colmar ?", answer: "Le trajet Mulhouse – Colmar dure environ 35 minutes. Comptez 40-55 € pour un transfert direct." },
  ], 120, "6 min"),

  city("Caen", "caen", 49.1829, -0.3707, 108365, [
    "Gare de Caen", "CHU de Caen", "Mémorial de Caen",
    "Université de Caen", "Château de Caen", "Port de Ouistreham", "Quartier Beaulieu",
    "Abbaye aux Hommes", "Abbaye aux Dames", "Centre commercial Rives de l'Orne",
    "Hôpital Côte de Nacre", "Stade d'Ornano", "Port de plaisance", "Parc des Expositions", "Campus 2",
  ], [
    "Centre-ville", "Beaulieu", "Vaucelles", "Sainte-Thérèse", "Grâce de Dieu", "Guérinière",
    "Chemin Vert", "Calvaire Saint-Pierre", "Hérouville", "Mondeville", "Colombelles", "Ifs",
  ], [
    { from: "Gare de Caen", to: "Centre-ville", price: "6-10 €" },
    { from: "Caen", to: "Port de Ouistreham", price: "20-30 €" },
    { from: "Centre", to: "Mémorial de Caen", price: "10-15 €" },
    { from: "Caen", to: "Plages du Débarquement", price: "50-70 €" },
    { from: "Centre", to: "CHU de Caen", price: "8-12 €" },
  ], ["rouen", "le-havre", "rennes", "tours"], [
    { text: "Taxi fiable pour le ferry de Ouistreham. Le chauffeur était là à 4h du matin.", name: "Gilles F.", initials: "GiF", role: "Voyageur" },
    { text: "Service de qualité pour mes déplacements au CHU.", name: "Jacqueline P.", initials: "JaP", role: "Patiente, Caen" },
    { text: "Transfert gare – Mémorial parfait pour les visiteurs.", name: "Andrew B.", initials: "AnB", role: "Touriste britannique" },
  ], [
    { question: "Peut-on prendre un taxi vers les plages du Débarquement ?", answer: "Oui, nos chauffeurs proposent des transferts et mises à disposition pour visiter les plages du Débarquement depuis Caen." },
    { question: "Combien coûte un taxi Caen – Ouistreham ferry ?", answer: "Le trajet Caen – Port de Ouistreham coûte environ 20-30 €. Nos chauffeurs sont disponibles même très tôt le matin." },
    { question: "Peut-on visiter les plages du Débarquement en taxi ?", answer: "Oui, nos chauffeurs proposent des circuits sur les plages du Débarquement (Omaha, Utah, Juno). Mise à disposition à la journée." },
  ], 120, "6 min"),

  city("Nancy", "nancy", 48.6921, 6.1844, 105382, [
    "Gare de Nancy", "CHU de Nancy", "Place Stanislas",
    "Université de Lorraine", "Quartier Vaudemont", "Zénith de Nancy", "Parc de la Pépinière",
    "Musée des Beaux-Arts", "Porte de la Craffe", "Centre commercial Saint-Sébastien",
    "Hôpital Central", "Campus Artem", "Opéra national de Lorraine", "Jardin Godron", "Stade Marcel Picot",
  ], [
    "Centre-ville", "Vieille Ville", "Ville Neuve", "Poincaré-Foch-Anatole France", "Stanislas-Meurthe", "Haussonville",
    "Beauregard", "Mon Désert", "Trois Maisons", "Boudonville", "Haut du Lièvre", "Laxou",
  ], [
    { from: "Gare de Nancy", to: "Centre-ville", price: "6-10 €" },
    { from: "Nancy", to: "Metz", price: "70-85 €" },
    { from: "Centre", to: "CHU de Nancy", price: "10-15 €" },
    { from: "Nancy", to: "Strasbourg", price: "120-150 €" },
    { from: "Centre", to: "Place Stanislas", price: "6-8 €" },
  ], ["metz", "strasbourg", "reims", "dijon"], [
    { text: "Taxi rapide depuis la gare vers la Place Stanislas. Chauffeur au top.", name: "Sébastien L.", initials: "SeL", role: "Touriste" },
    { text: "Service fiable pour mes trajets Nancy – Metz quotidiens.", name: "Éliane M.", initials: "ElM", role: "Frontalière" },
    { text: "Chauffeur ponctuel pour le CHU. Merci TaxiNeo.", name: "Marcel R.", initials: "MaR", role: "Patient, Nancy" },
  ], [
    { question: "Peut-on prendre un taxi Nancy – Metz ?", answer: "Oui, nos chauffeurs assurent les transferts Nancy – Metz (environ 55 km). Comptez 70-85 € pour le trajet." },
    { question: "Les taxis sont-ils disponibles la nuit à Nancy ?", answer: "Oui, nos chauffeurs à Nancy sont disponibles 24h/24, y compris pour les sorties nocturnes dans le Vieux Nancy." },
    { question: "Combien coûte un taxi Nancy – Strasbourg ?", answer: "Le trajet Nancy – Strasbourg dure environ 1h30. Comptez 120-150 € pour un transfert direct." },
  ], 120, "5 min"),

  city("Argenteuil", "argenteuil", 48.9472, 2.2467, 113748, [
    "Gare d'Argenteuil", "Hôpital d'Argenteuil", "Centre-ville",
    "Quartier Val-d'Argent", "Bords de Seine", "La Défense", "Marché du centre",
    "Basilique Saint-Denys", "Butte d'Orgemont", "Centre commercial Côté Seine",
    "Parc des Berges", "Mairie d'Argenteuil", "Piscine olympique", "Lycée Jean Jaurès",
  ], [
    "Centre-ville", "Val-d'Argent Nord", "Val-d'Argent Sud", "Orgemont", "Joliot-Curie",
    "Mazurières", "Coteaux", "Val Notre-Dame", "Champioux", "Lochères",
  ], [
    { from: "Argenteuil", to: "La Défense", price: "20-30 €" },
    { from: "Argenteuil", to: "Aéroport CDG", price: "45-60 €" },
    { from: "Argenteuil", to: "Aéroport Orly", price: "40-55 €" },
    { from: "Gare d'Argenteuil", to: "Paris Centre", price: "25-35 €" },
  ], ["paris", "versailles", "nantes"], [
    { text: "Taxi vers La Défense rapide même aux heures de pointe.", name: "Moussa D.", initials: "MoD", role: "Cadre, Argenteuil" },
    { text: "Service fiable depuis la gare d'Argenteuil. Toujours ponctuel.", name: "Catherine N.", initials: "CaN", role: "Argenteuillaise" },
    { text: "Transfert vers les aéroports parisiens confortable.", name: "Rachid A.", initials: "RA", role: "Voyageur, Argenteuil" },
  ], [
    { question: "Les taxis d'Argenteuil vont-ils à Paris ?", answer: "Oui, nos chauffeurs assurent toutes les courses entre Argenteuil, Paris, La Défense et les aéroports parisiens." },
    { question: "Combien de temps met un taxi Argenteuil – La Défense ?", answer: "Le trajet Argenteuil – La Défense dure environ 15-20 minutes. Comptez 20-30 € selon la circulation." },
    { question: "Peut-on prendre un taxi d'Argenteuil vers les aéroports ?", answer: "Oui, nos chauffeurs assurent les transferts vers CDG (45-60 €) et Orly (40-55 €) depuis Argenteuil." },
  ], 120, "5 min"),

  city("Avignon", "avignon", 43.9493, 4.8055, 93671, [
    "Gare TGV Avignon", "Gare Avignon-Centre", "CH Henri Duffaut",
    "Université d'Avignon", "Palais des Papes", "Pont d'Avignon", "Parc des Expositions",
    "Rocher des Doms", "Musée du Petit Palais", "Île de la Barthelasse",
    "Centre commercial Cap Sud", "Opéra Grand Avignon", "Agroparc Technopôle",
    "Halles d'Avignon", "Cloître Saint-Louis",
  ], [
    "Centre historique", "Intra-muros", "Barthelasse", "Montfavet", "Saint-Ruf", "Rocade Sud",
    "Pont des Deux Eaux", "Agroparc", "Saint-Chamand", "Monclar", "Champfleury",
  ], [
    { from: "Gare TGV", to: "Centre historique", price: "15-20 €" },
    { from: "Avignon", to: "Aéroport Marseille-Provence", price: "80-100 €" },
    { from: "Centre", to: "Pont du Gard", price: "35-45 €" },
    { from: "Centre", to: "CH Henri Duffaut", price: "8-12 €" },
    { from: "Avignon", to: "Nîmes", price: "45-60 €" },
  ], ["nimes", "montpellier", "marseille", "aix-en-provence", "orange"], [
    { text: "Taxi depuis la gare TGV vers le centre parfait pendant le Festival.", name: "Laure P.", initials: "LaP", role: "Festivalière" },
    { text: "Service fiable pour mes trajets vers l'hôpital Duffaut.", name: "Henri M.", initials: "HeM", role: "Patient, Avignon" },
    { text: "Mise à disposition pour visiter les vignobles du Lubéron. Superbe expérience.", name: "Diana K.", initials: "DK", role: "Touriste" },
  ], [
    { question: "La gare TGV d'Avignon est-elle loin du centre ?", answer: "La gare TGV est à 5 km du centre historique. Le taxi TaxiNeo vous y conduit en 10 minutes pour environ 15-20 €." },
    { question: "Les taxis sont-ils disponibles pendant le Festival d'Avignon ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant le Festival. Réservez à l'avance en juillet." },
    { question: "Combien coûte un taxi Avignon – Pont du Gard ?", answer: "Le trajet Avignon – Pont du Gard dure environ 25 minutes. Comptez 35-45 €." },
  ], 100, "6 min"),

  city("Poitiers", "poitiers", 46.5802, 0.3404, 90340, [
    "Gare de Poitiers", "CHU de Poitiers", "Futuroscope",
    "Université de Poitiers", "Centre-ville historique", "Technopôle du Futuroscope", "Notre-Dame la Grande",
    "Baptistère Saint-Jean", "Parc de Blossac", "Centre commercial Cordeliers",
    "Hôpital de la Milétrie", "Stade de la Pépinière", "Médiathèque François Mitterrand",
    "Campus universitaire", "TAP – Théâtre Auditorium",
  ], [
    "Centre-ville", "Trois Quartiers", "Saint-Éloi", "Beaulieu", "Buxerolles", "Montmidi",
    "Couronneries", "Gibauderie", "Chilvert", "Bellejouanne", "République",
  ], [
    { from: "Gare de Poitiers", to: "Centre", price: "6-10 €" },
    { from: "Poitiers", to: "Futuroscope", price: "20-30 €" },
    { from: "Centre", to: "CHU de Poitiers", price: "8-12 €" },
    { from: "Poitiers", to: "La Rochelle", price: "100-130 €" },
    { from: "Centre", to: "Campus universitaire", price: "8-12 €" },
  ], ["tours", "limoges", "la-rochelle", "bordeaux", "orleans"], [
    { text: "Taxi vers le Futuroscope parfait pour une sortie en famille.", name: "Aurélien B.", initials: "AuB", role: "Papa, Poitiers" },
    { text: "Transfert gare – CHU toujours fiable. Merci.", name: "Régine S.", initials: "ReS", role: "Patiente, Poitiers" },
    { text: "Service pro pour mes déplacements vers le Technopôle.", name: "Karine D.", initials: "KD", role: "Ingénieure" },
  ], [
    { question: "Combien coûte un taxi Poitiers – Futuroscope ?", answer: "Le trajet Poitiers centre – Futuroscope coûte environ 20-30 €. Nos chauffeurs connaissent bien le site." },
    { question: "Les taxis sont-ils disponibles au Futuroscope le soir ?", answer: "Oui, nos chauffeurs vous attendent à la sortie du Futuroscope, y compris après les spectacles nocturnes." },
    { question: "Combien de temps met un taxi Poitiers – La Rochelle ?", answer: "Le trajet dure environ 1h30. Comptez 100-130 € pour un transfert direct." },
  ], 100, "6 min"),

  city("Dunkerque", "dunkerque", 51.0343, 2.3768, 88108, [
    "Port de Dunkerque", "Gare de Dunkerque", "CH de Dunkerque",
    "Université du Littoral", "Place Jean Bart", "Plage de Malo-les-Bains", "Terminal ferry",
    "Musée portuaire", "Beffroi de Dunkerque", "Centre commercial Marine",
    "Lieu d'Art et Action Contemporaine", "Phare de Dunkerque",
    "Jardin de sculptures", "Zone portuaire",
  ], [
    "Centre-ville", "Malo-les-Bains", "Rosendaël", "Petite-Synthe", "Grande-Synthe",
    "Fort-Mardyck", "Saint-Pol-sur-Mer", "Coudekerque-Branche", "Cappelle-la-Grande", "Téteghem",
  ], [
    { from: "Centre", to: "Terminal ferry", price: "8-12 €" },
    { from: "Dunkerque", to: "Lille", price: "65-80 €" },
    { from: "Gare de Dunkerque", to: "Plage Malo", price: "8-12 €" },
    { from: "Centre", to: "CH de Dunkerque", price: "6-10 €" },
    { from: "Dunkerque", to: "Calais", price: "35-45 €" },
  ], ["lille", "calais", "amiens"], [
    { text: "Taxi disponible au terminal ferry même à 23h. Parfait.", name: "Michel V.", initials: "MiV2", role: "Voyageur" },
    { text: "Service fiable pendant le Carnaval de Dunkerque. Chapeau !", name: "Élodie C.", initials: "ElC", role: "Dunkerquoise" },
    { text: "Transfert vers Lille rapide et confortable.", name: "Bruno T.", initials: "BrT", role: "Cadre, Dunkerque" },
  ], [
    { question: "Peut-on prendre un taxi au port ferry de Dunkerque ?", answer: "Oui, nos chauffeurs sont disponibles au terminal ferry pour les arrivées et départs vers l'Angleterre." },
    { question: "Les taxis sont-ils disponibles pendant le Carnaval ?", answer: "Oui, nos chauffeurs sont mobilisés pendant le Carnaval de Dunkerque. Réservez à l'avance car la demande est forte." },
    { question: "Combien coûte un taxi Dunkerque – Calais ?", answer: "Le trajet Dunkerque – Calais dure environ 30 minutes. Comptez 35-45 €." },
  ], 80, "7 min"),

  city("Versailles", "versailles", 48.8014, 2.1301, 87549, [
    "Château de Versailles", "Gare Versailles-Chantiers", "CH de Versailles",
    "Quartier Saint-Louis", "Gare Versailles Rive-Droite", "Parly 2", "Quartier Montreuil",
    "Potager du Roi", "Cathédrale Saint-Louis", "Marché Notre-Dame",
    "Domaine de Trianon", "Lycée Hoche", "Parc Balbi",
    "Académie du spectacle équestre",
  ], [
    "Centre-ville", "Notre-Dame", "Saint-Louis", "Montreuil", "Porchefontaine",
    "Clagny-Glatigny", "Chantiers", "Jussieu", "Satory", "Bernard de Jussieu", "Ermitage",
  ], [
    { from: "Versailles", to: "Aéroport CDG", price: "65-85 €" },
    { from: "Versailles", to: "Aéroport Orly", price: "35-50 €" },
    { from: "Château de Versailles", to: "Paris Centre", price: "40-55 €" },
    { from: "Gare Versailles-Chantiers", to: "Centre", price: "6-10 €" },
    { from: "Centre", to: "CH de Versailles", price: "8-12 €" },
  ], ["paris", "argenteuil", "nantes"], [
    { text: "Taxi depuis Paris vers le Château sans stress. Chauffeur passionné d'histoire.", name: "Emily W.", initials: "EW", role: "Touriste américaine" },
    { text: "Service fiable pour mes trajets gare – domicile quotidiens.", name: "Geneviève L.", initials: "GeL", role: "Versaillaise" },
    { text: "Transfert vers CDG confortable. Prix raisonnable.", name: "Youssef A.", initials: "YA", role: "Voyageur, Versailles" },
  ], [
    { question: "Combien coûte un taxi Paris – Versailles ?", answer: "Le trajet Paris centre – Versailles coûte environ 40-55 € selon la circulation et le point de départ." },
    { question: "Combien coûte un taxi Versailles – Aéroport CDG ?", answer: "Le trajet Versailles – CDG dure environ 50 minutes. Comptez 65-85 € selon la circulation." },
    { question: "Les taxis attendent-ils à la sortie du Château ?", answer: "Oui, nos chauffeurs vous attendent à la sortie du Château de Versailles. Réservez à l'avance pour un retour sans attente." },
  ], 100, "5 min"),

  city("Pau", "pau", 43.2951, -0.3708, 78506, [
    "Aéroport Pau-Pyrénées", "Gare de Pau", "CH de Pau",
    "Université de Pau", "Boulevard des Pyrénées", "Quartier du Hédas", "Palais Beaumont",
    "Château de Pau", "Funiculaire de Pau", "Haras de Pau",
    "Centre commercial Quartier Libre", "Stade du Hameau", "Parc Beaumont",
    "Campus universitaire UPPA", "Cité des Pyrénées",
  ], [
    "Centre-ville", "Hédas", "Trespoey", "Jurançon", "Bizanos", "Idron",
    "Lons", "Billère", "Lescar", "Gan", "Ousse", "Mazères-Lezons",
  ], [
    { from: "Centre-ville", to: "Aéroport Pau-Pyrénées", price: "15-25 €" },
    { from: "Gare de Pau", to: "Centre", price: "6-10 €" },
    { from: "Pau", to: "Lourdes", price: "45-60 €" },
    { from: "Pau", to: "Gourette", price: "55-70 €" },
    { from: "Centre", to: "CH de Pau", price: "8-12 €" },
  ], ["toulouse", "bordeaux", "bayonne", "lourdes"], [
    { text: "Taxi avec vue sur les Pyrénées ! Transfert aéroport au top.", name: "Jean-Claude B.", initials: "JCB", role: "Béarnais" },
    { text: "Service fiable pour mes trajets vers l'hôpital de Pau.", name: "Simone D.", initials: "SiD", role: "Patiente, Pau" },
    { text: "Mise à disposition parfaite pour un week-end dans le Béarn.", name: "Alexandra M.", initials: "AlM", role: "Touriste, Pau" },
  ], [
    { question: "Peut-on prendre un taxi Pau – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers les stations pyrénéennes (Gourette, La Pierre Saint-Martin). Réservez à l'avance." },
    { question: "Combien coûte un taxi Pau – Lourdes ?", answer: "Le trajet Pau – Lourdes dure environ 35 minutes. Comptez 45-60 € pour un transfert direct." },
    { question: "Les taxis desservent-ils les thermes du Béarn ?", answer: "Oui, nos chauffeurs assurent les transferts vers les stations thermales de Salies-de-Béarn, Eaux-Bonnes et Eaux-Chaudes." },
  ], 80, "6 min"),

  city("La Rochelle", "la-rochelle", 46.1591, -1.1520, 79622,  [
    "Aéroport La Rochelle-Île de Ré", "Gare de La Rochelle", "Hôpital de La Rochelle",
    "Vieux Port", "Université de La Rochelle", "Aquarium de La Rochelle", "Les Minimes",
    "Tours de La Rochelle", "Bunker de La Rochelle", "Centre commercial La Rochelle 2",
    "Médiathèque Michel Crépeau", "Parc Charruyer", "Plage des Minimes",
    "Port des Minimes", "Technoforum",
  ], [
    "Centre-ville", "Vieux Port", "Les Minimes", "Mireuil", "Villeneuve-les-Salines",
    "La Pallice", "Laleu", "Aytré", "Lagord", "Périgny", "Saint-Éloi",
  ], [
    { from: "Centre-ville", to: "Aéroport La Rochelle", price: "15-25 €" },
    { from: "La Rochelle", to: "Île de Ré", price: "25-35 €" },
    { from: "Gare de La Rochelle", to: "Centre", price: "6-10 €" },
    { from: "Centre", to: "Aquarium", price: "6-10 €" },
    { from: "La Rochelle", to: "Royan", price: "80-100 €" },
  ], ["nantes", "poitiers", "bordeaux", "angers"], [
    { text: "Taxi vers l'Île de Ré depuis La Rochelle. Chauffeur au top.", name: "Mathilde F.", initials: "MaF", role: "Vacancière" },
    { text: "Service disponible même en plein été. Très appréciable.", name: "Roland P.", initials: "RoP", role: "Rochelais" },
    { text: "Transfert aéroport fiable et ponctuel.", name: "Corinne J.", initials: "CoJ", role: "Voyageuse" },
  ], [
    { question: "Peut-on prendre un taxi La Rochelle – Île de Ré ?", answer: "Oui, nos chauffeurs assurent les transferts vers l'Île de Ré via le pont. Comptez 25-35 € depuis le centre." },
    { question: "Les taxis sont-ils disponibles en été à La Rochelle ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant la saison estivale et les Francofolies. Réservez à l'avance." },
    { question: "Combien de temps met un taxi La Rochelle – Royan ?", answer: "Le trajet La Rochelle – Royan dure environ 1h15. Comptez 80-100 € pour un transfert direct." },
  ], 80, "6 min"),

  city("Calais", "calais", 50.9513, 1.8587, 73911, [
    "Port de Calais", "Terminal Eurotunnel", "Gare Calais-Fréthun",
    "CH de Calais", "Cité de la Dentelle", "Plage de Calais", "Centre-ville",
    "Musée des Beaux-Arts de Calais", "Dragon de Calais", "Phare de Calais",
    "Centre commercial Cité Europe", "Place d'Armes", "Fort Risban",
    "Les Six Bourgeois de Calais",
  ], [
    "Centre-ville", "Calais-Nord", "Saint-Pierre", "Beau-Marais", "Fort Nieulay",
    "Coquelles", "Sangatte", "Coulogne", "Marck", "Fréthun",
  ], [
    { from: "Centre-ville", to: "Terminal Eurotunnel", price: "12-18 €" },
    { from: "Centre", to: "Port ferry", price: "8-12 €" },
    { from: "Calais", to: "Lille", price: "80-100 €" },
    { from: "Gare Calais-Fréthun", to: "Centre", price: "12-18 €" },
    { from: "Calais", to: "Boulogne-sur-Mer", price: "30-40 €" },
  ], ["dunkerque", "lille", "amiens", "boulogne"], [
    { text: "Taxi au terminal Eurotunnel toujours disponible. Service parfait.", name: "Peter H.", initials: "PH", role: "Voyageur britannique" },
    { text: "Transfert port ferry – gare Fréthun rapide et fiable.", name: "Martine B.", initials: "MaB2", role: "Calaisienne" },
    { text: "Service de qualité pour mes trajets transfrontaliers.", name: "Simon L.", initials: "SiL", role: "Frontalier" },
  ], [
    { question: "Peut-on prendre un taxi au terminal Eurotunnel ?", answer: "Oui, nos chauffeurs sont disponibles au terminal Eurotunnel de Coquelles et au port ferry de Calais." },
    { question: "Combien coûte un taxi Calais – Cité Europe Coquelles ?", answer: "Le trajet Calais centre – Cité Europe coûte environ 12-18 €. Idéal pour une journée shopping." },
    { question: "Les taxis sont-ils disponibles pour les arrivées de ferry la nuit ?", answer: "Oui, nos chauffeurs sont disponibles 24h/24 au port de Calais, même pour les arrivées nocturnes." },
  ], 70, "7 min"),

  city("Cannes", "cannes", 43.5528, 7.0174, 74285, [
    "Gare de Cannes", "Palais des Festivals", "La Croisette",
    "Hôpital de Cannes", "Port de Cannes", "Mougins", "Quartier Californie",
    "Musée de la Castre", "Îles de Lérins", "Allées de la Liberté",
    "Centre commercial La Bocca", "Marché Forville", "Port Pierre Canto",
    "Quartier du Suquet", "Palais Stéphanie",
  ], [
    "Centre-ville", "La Croisette", "Californie", "Palm Beach", "La Bocca", "Petit Juas",
    "Carnot", "Le Suquet", "Rocheville", "Les Broussailles", "Ranguin",
  ], [
    { from: "Centre-ville", to: "Aéroport Nice", price: "70-90 €" },
    { from: "Gare de Cannes", to: "La Croisette", price: "6-10 €" },
    { from: "Cannes", to: "Monaco", price: "90-120 €" },
    { from: "Cannes", to: "Saint-Tropez", price: "120-160 €" },
    { from: "Centre", to: "Hôpital de Cannes", price: "8-12 €" },
  ], ["nice", "antibes", "marseille", "avignon"], [
    { text: "Taxi disponible même pendant le Festival de Cannes. Impressionnant.", name: "Charlotte V.", initials: "ChV2", role: "Journaliste" },
    { text: "Transfert aéroport Nice – Cannes confortable et ponctuel.", name: "Roberto F.", initials: "RF", role: "Homme d'affaires" },
    { text: "Service impeccable sur la Croisette. Chauffeur discret et pro.", name: "Léa M.", initials: "LeM", role: "Résidente, Cannes" },
  ], [
    { question: "Combien coûte un taxi Nice Aéroport – Cannes ?", answer: "Le forfait taxi Nice Aéroport – Cannes est d'environ 70-90 €. Réservez à l'avance pendant le Festival." },
    { question: "Peut-on prendre un taxi Cannes – Saint-Tropez ?", answer: "Oui, le trajet Cannes – Saint-Tropez dure environ 1h15. Comptez 120-160 € selon la saison et la circulation." },
    { question: "Les taxis sont-ils disponibles pendant le Festival de Cannes ?", answer: "Oui, nos chauffeurs sont mobilisés en nombre pendant le Festival. Réservez à l'avance en mai pour garantir votre course." },
  ], 100, "5 min"),

  city("Antibes", "antibes", 43.5804, 7.1254, 74875, [
    "Gare d'Antibes", "Sophia Antipolis", "Port Vauban",
    "Hôpital de la Fontonne", "Marineland", "Juan-les-Pins", "Cap d'Antibes",
    "Musée Picasso", "Fort Carré", "Marché provençal",
    "Palais des Congrès", "Garoupe Plage", "Parc de la Brague",
    "Centre commercial Antibes",
  ], [
    "Centre-ville", "Vieil Antibes", "Juan-les-Pins", "Cap d'Antibes", "La Fontonne",
    "Les Semboules", "Sophia Antipolis", "La Brague", "Saint-Jean", "Rostagne", "Combes",
  ], [
    { from: "Centre-ville", to: "Sophia Antipolis", price: "20-30 €" },
    { from: "Antibes", to: "Aéroport Nice", price: "35-50 €" },
    { from: "Gare d'Antibes", to: "Juan-les-Pins", price: "8-12 €" },
    { from: "Antibes", to: "Cannes", price: "20-30 €" },
    { from: "Centre", to: "Marineland", price: "10-15 €" },
  ], ["nice", "cannes", "marseille"], [
    { text: "Taxi Antibes – Sophia Antipolis fiable pour mes trajets quotidiens.", name: "Sylvain T.", initials: "SyT", role: "Ingénieur, Sophia" },
    { text: "Service parfait pour rejoindre Juan-les-Pins depuis la gare.", name: "Magali R.", initials: "MgR", role: "Antiboise" },
    { text: "Transfert vers l'aéroport de Nice ponctuel et confortable.", name: "Patrick D.", initials: "PaD", role: "Voyageur" },
  ], [
    { question: "Combien coûte un taxi Antibes – Sophia Antipolis ?", answer: "Le trajet Antibes – Sophia Antipolis coûte environ 20-30 € selon votre destination exacte dans le technopôle." },
    { question: "Les taxis desservent-ils Sophia Antipolis le soir ?", answer: "Oui, nos chauffeurs sont disponibles pour les retours depuis le technopôle de Sophia Antipolis, y compris en soirée." },
    { question: "Combien coûte un taxi d'Antibes à l'aéroport de Nice ?", answer: "Le trajet Antibes – Aéroport Nice dure environ 20 minutes. Comptez 35-50 €." },
  ], 90, "5 min"),

  city("Colmar", "colmar", 48.0794, 7.3588, 70284, [
    "Gare de Colmar", "Hôpitaux Civils de Colmar", "Petite Venise",
    "Musée Unterlinden", "Quartier de la Krutenau", "Parc des Expositions", "Vignoble d'Alsace",
    "Marché de Noël de Colmar", "Musée du Jouet", "Statue de la Liberté",
    "Centre commercial Maison Rouge", "Espace Rapp", "Parc du Champ de Mars",
    "Piscine Nautilia", "Maison des Têtes",
  ], [
    "Centre historique", "Petite Venise", "Krutenau", "Ladhof", "Maraîchers", "Europe",
    "Florimont", "Mittelharth", "Sud", "Ingersheim", "Wintzenheim", "Horbourg-Wihr",
  ], [
    { from: "Gare de Colmar", to: "Centre", price: "6-10 €" },
    { from: "Colmar", to: "Aéroport Bâle-Mulhouse", price: "60-75 €" },
    { from: "Centre", to: "Hôpitaux Civils", price: "6-10 €" },
    { from: "Colmar", to: "Strasbourg", price: "65-80 €" },
    { from: "Centre", to: "Route des Vins Eguisheim", price: "12-18 €" },
  ], ["strasbourg", "mulhouse", "nancy", "dijon"], [
    { text: "Taxi pour visiter la Route des Vins d'Alsace. Chauffeur formidable.", name: "Marie-France H.", initials: "MFH", role: "Touriste" },
    { text: "Service rapide depuis la gare vers la Petite Venise.", name: "Claude W.", initials: "ClW", role: "Colmarien" },
    { text: "Transfert fiable vers Strasbourg ou Bâle-Mulhouse.", name: "Ingrid S.", initials: "InS", role: "Voyageuse" },
  ], [
    { question: "Peut-on visiter la Route des Vins en taxi ?", answer: "Oui, nos chauffeurs proposent des mises à disposition pour la Route des Vins d'Alsace. Idéal pour déguster en toute sérénité." },
    { question: "Les taxis sont-ils disponibles pendant le Marché de Noël ?", answer: "Oui, nos chauffeurs sont mobilisés pendant le célèbre Marché de Noël de Colmar. Réservez à l'avance en décembre." },
    { question: "Combien coûte un taxi pour visiter Eguisheim ?", answer: "Le trajet Colmar – Eguisheim dure environ 10 minutes. Comptez 12-18 € pour ce charmant village alsacien." },
  ], 70, "6 min"),

  city("Bayonne", "bayonne", 43.4933, -1.4753, 52006, [
    "Gare de Bayonne", "Aéroport Biarritz Pays Basque", "CH de Bayonne",
    "Grand Bayonne", "Petit Bayonne", "Port de Bayonne", "Quartier Saint-Esprit",
    "Cathédrale Sainte-Marie", "Musée Basque", "Remparts de Bayonne",
    "Halles de Bayonne", "Nive (quais)", "Centre commercial BAB2",
    "Stade Jean Dauger", "Trinquet Saint-André",
  ], [
    "Grand Bayonne", "Petit Bayonne", "Saint-Esprit", "Saint-Étienne", "Marracq",
    "Mousserolles", "Lachepaillet", "Habas-Sainte-Croix", "Anglet", "Boucau", "Tarnos",
  ], [
    { from: "Centre-ville", to: "Aéroport Biarritz", price: "20-30 €" },
    { from: "Bayonne", to: "Biarritz Centre", price: "15-22 €" },
    { from: "Gare de Bayonne", to: "Centre", price: "6-10 €" },
    { from: "Bayonne", to: "Saint-Jean-de-Luz", price: "25-35 €" },
    { from: "Bayonne", to: "San Sebastián", price: "70-90 €" },
  ], ["pau", "bordeaux", "toulouse"], [
    { text: "Taxi vers l'aéroport de Biarritz toujours fiable. Service au top.", name: "Mikel E.", initials: "ME", role: "Bayonnais" },
    { text: "Mise à disposition parfaite pour les Fêtes de Bayonne.", name: "Hélène S.", initials: "HeS", role: "Festivalière" },
    { text: "Transfert Bayonne – Saint-Jean-de-Luz confortable.", name: "Pierre-Jean L.", initials: "PJL", role: "Touriste" },
  ], [
    { question: "Combien coûte un taxi Bayonne – Biarritz Aéroport ?", answer: "Le trajet Bayonne – Aéroport Biarritz coûte environ 20-30 €. Service disponible 24h/24." },
    { question: "Peut-on prendre un taxi Bayonne – San Sebastián ?", answer: "Oui, nos chauffeurs assurent les transferts vers San Sebastián en Espagne (environ 55 km). Comptez 70-90 €." },
    { question: "Les taxis sont-ils disponibles pendant les Fêtes de Bayonne ?", answer: "Oui, nos chauffeurs sont mobilisés pendant les Fêtes. Réservez à l'avance car la demande est très forte fin juillet." },
  ], 70, "6 min"),

  city("Chambéry", "chambery", 45.5646, 5.9178, 60466, [
    "Gare de Chambéry", "CH de Chambéry", "Quartier Biollay",
    "Université Savoie Mont Blanc", "Château des Ducs de Savoie", "Fontaine des Éléphants", "Savoie Technolac",
    "Cathédrale de Chambéry", "Musée des Beaux-Arts", "Centre commercial Chamnord",
    "Parc du Verney", "Rotonde", "Espace Malraux", "Lac du Bourget",
    "Campus universitaire Jacob-Bellecombette",
  ], [
    "Centre-ville", "Biollay", "Chambéry-le-Haut", "Bissy", "Cognin", "La Ravoire",
    "Jacob-Bellecombette", "Bassens", "Mérande", "Laurier", "Le Nivolet", "Barby",
  ], [
    { from: "Gare de Chambéry", to: "Centre-ville", price: "6-10 €" },
    { from: "Chambéry", to: "Lyon Saint Exupéry", price: "100-130 €" },
    { from: "Chambéry", to: "Courchevel", price: "100-130 €" },
    { from: "Centre", to: "CH de Chambéry", price: "8-12 €" },
    { from: "Chambéry", to: "Aix-les-Bains", price: "20-30 €" },
  ], ["grenoble", "annecy", "lyon", "valence"], [
    { text: "Taxi fiable vers les stations de ski de Savoie. Service au top.", name: "Frédérique B.", initials: "FrB", role: "Skieuse" },
    { text: "Transfert gare – Technolac rapide et ponctuel.", name: "Stéphane A.", initials: "StA", role: "Cadre, Chambéry" },
    { text: "Service de qualité pour mes trajets médicaux.", name: "Lucette G.", initials: "LuG", role: "Patiente, Chambéry" },
  ], [
    { question: "Peut-on prendre un taxi Chambéry – stations de ski ?", answer: "Oui, nos chauffeurs assurent les transferts vers Courchevel, Méribel, Val Thorens et toutes les stations de Savoie." },
    { question: "Combien coûte un taxi Chambéry – Aix-les-Bains ?", answer: "Le trajet Chambéry – Aix-les-Bains dure environ 15 minutes. Comptez 20-30 €." },
    { question: "Les taxis assurent-ils les transferts vers les stations de ski le week-end ?", answer: "Oui, nos chauffeurs assurent les transferts tous les jours, y compris le week-end, vers toutes les stations de Savoie." },
  ], 80, "6 min"),

  city("Valence", "valence", 44.9334, 4.8924, 67018, [
    "Gare de Valence TGV", "Gare Valence-Ville", "CH de Valence",
    "Université Grenoble Alpes – Valence", "Parc Jouvet", "Quartier Victor Hugo", "Latour-Maubourg",
    "Cathédrale Saint-Apollinaire", "Maison des Têtes", "Kiosque Peynet",
    "Centre commercial Victor Hugo", "Champ de Mars", "Musée d'Art et d'Archéologie",
    "Port de l'Épervière",
  ], [
    "Centre-ville", "Châteauvert", "Fontbarlettes", "Le Plan", "Briffaut", "Hugo-Valensolles",
    "Laprat-Chamberlière", "Épervière", "Bourg-lès-Valence", "Portes-lès-Valence", "Guilherand-Granges",
  ], [
    { from: "Gare TGV Valence", to: "Centre-ville", price: "20-25 €" },
    { from: "Gare Valence-Ville", to: "Centre", price: "6-10 €" },
    { from: "Valence", to: "Lyon", price: "100-130 €" },
    { from: "Centre", to: "CH de Valence", price: "8-12 €" },
    { from: "Valence", to: "Montélimar", price: "45-60 €" },
  ], ["grenoble", "lyon", "saint-etienne", "chambery", "montpellier"], [
    { text: "Transfert gare TGV – centre-ville rapide. Le chauffeur était très aimable.", name: "Pascale D.", initials: "PaD2", role: "Voyageuse" },
    { text: "Service fiable pour mes déplacements au CH de Valence.", name: "Robert N.", initials: "RoN", role: "Patient, Valence" },
    { text: "Taxi ponctuel pour mes rendez-vous professionnels.", name: "Chantal M.", initials: "ChM2", role: "Cadre, Valence" },
  ], [
    { question: "La gare TGV de Valence est-elle loin du centre ?", answer: "La gare TGV Valence est à 10 km du centre. Le taxi TaxiNeo vous y conduit en 15 minutes pour environ 20-25 €." },
    { question: "La gare TGV est-elle bien desservie par les taxis ?", answer: "Oui, nos chauffeurs sont disponibles à la gare TGV Valence pour toutes les correspondances, 7j/7." },
    { question: "Combien coûte un taxi Valence – Montélimar ?", answer: "Le trajet Valence – Montélimar dure environ 40 minutes. Comptez 45-60 € pour un transfert direct." },
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
