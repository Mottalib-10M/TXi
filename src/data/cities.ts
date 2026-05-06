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
  description: string;
  whyUs: { title: string; desc: string }[];
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
        description: `Avec TaxiNeo à ${name}, profitez de tarifs réglementés sans surprise, de l'accès aux voies de bus pour des trajets plus rapides, et d'une réservation en ligne en quelques clics. Nos chauffeurs partenaires connaissent ${name} par cœur et vous garantissent ponctualité, confort et sécurité à chaque course.`,
        whyUs: [],
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
        description: `With TaxiNeo in ${name}, enjoy regulated fares with no surprises, bus lane access for faster rides, and online booking in just a few clicks. Our partner drivers know ${name} inside out and guarantee punctuality, comfort and safety on every trip.`,
        whyUs: [],
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
    { from: "Paris Centre", to: "Aéroport Orly", price: "36-45 €" },
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
    { question: "Combien de temps met un taxi de Montmartre à l'aéroport d'Orly ?", answer: "Comptez environ 45-60 minutes selon la circulation. Le forfait depuis la rive droite est de 45 €. Nos chauffeurs connaissent les meilleurs itinéraires." },
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

  city("Fontainebleau", "fontainebleau", 48.4010, 2.7024, 15000, [
    "Château de Fontainebleau", "Forêt domaniale (25 000 ha)", "INSEAD",
    "Gorges de Franchard", "Barbizon", "Gorges d'Apremont",
  ], [
    "Centre-ville", "Avon", "Samois-sur-Seine", "Thomery",
    "Bourron-Marlotte", "Moret-sur-Loing", "Barbizon", "Montereau-Fault-Yonne",
  ], [
    { from: "Fontainebleau", to: "Paris", price: "80-105 €" },
    { from: "Fontainebleau", to: "Orly", price: "70-90 €" },
    { from: "Fontainebleau", to: "CDG", price: "120-150 €" },
    { from: "Fontainebleau", to: "Melun", price: "25-35 €" },
    { from: "Fontainebleau", to: "Nemours", price: "25-35 €" },
  ], ["melun"], [
    { text: "Transfert parfait château-Paris, chauffeur ponctuel et véhicule impeccable.", name: "S. M.", initials: "SM", role: "Touriste" },
    { text: "Always reliable for my airport transfers. Drivers speak English and know the area perfectly.", name: "J. K.", initials: "JK", role: "INSEAD MBA" },
    { text: "Mon taxi de confiance pour la gare Avon le matin. Toujours à l'heure, même à 5h.", name: "C. D.", initials: "CD", role: "Résident Fontainebleau" },
  ], [
    { question: "Quel est le tarif taxi Fontainebleau-Paris ?", answer: "80-105 €, tarif fixe, péages inclus. Direct par l'A6 en 55 minutes." },
    { question: "Service de nuit à Fontainebleau ?", answer: "Oui, 24h/24. Idéal après le dernier Transilien (vers 22h30). Nos chauffeurs sont disponibles nuits, week-ends et jours fériés." },
    { question: "Transfert INSEAD ?", answer: "Oui, campus principal et campus town, service anglophone. Nos chauffeurs connaissent les horaires des sessions MBA." },
    { question: "Taxi pour le château de Fontainebleau ?", answer: "Dépose parking château, attente possible, prise en charge retour. Idéal pour les visiteurs avec bagages ou en groupe." },
    { question: "Escalade en forêt de Fontainebleau ?", answer: "Dépose aux sites de bloc (Cuvier, Franchard, Apremont). Crashpads volumineux acceptés dans nos véhicules." },
    { question: "Transfert gare Fontainebleau-Avon ?", answer: "Transfert gare inclus, suivi des horaires de trains Transilien R. Prise en charge à la sortie de la gare." },
    { question: "Fontainebleau-Orly combien de temps ?", answer: "45 minutes par l'A6, tarif fixe 70-90 €. Suivi de vol inclus." },
    { question: "Animaux acceptés ?", answer: "Oui, sur demande lors de la réservation. Précisez la taille de l'animal." },
  ], 5, "20 min"),
  // ─── Satellite cities ─────────────────────────────────────
  city("Avon", "avon", 48.4033, 2.7206, 12000, [
    "Gare Fontainebleau-Avon", "Forêt domaniale", "Carmel d'Avon",
    "Marché d'Avon", "INSEAD (commune voisine)", "Rochers d'Avon",
  ], [
    "Centre-ville", "Les Fougères", "Changis", "Bois-le-Roi",
    "Vulaines-sur-Seine", "Samois-sur-Seine",
  ], [
    { from: "Avon", to: "Paris", price: "80-105 €" },
    { from: "Avon", to: "Orly", price: "70-90 €" },
    { from: "Avon", to: "CDG", price: "120-150 €" },
  ], ["fontainebleau"], [
    { text: "Prise en charge rapide devant la gare Fontainebleau-Avon, chauffeur ponctuel et courtois.", name: "L. R.", initials: "LR", role: "Résidente Avon" },
    { text: "Transfert Orly à 5h du matin, impeccable. Le chauffeur connaît le quartier parfaitement.", name: "P. M.", initials: "PM", role: "Voyageur fréquent" },
    { text: "Service fiable pour mes déplacements INSEAD. Chauffeurs anglophones, véhicules propres.", name: "A. S.", initials: "AS", role: "Cadre INSEAD" },
  ], [
    { question: "Différence entre taxi Avon et taxi Fontainebleau ?", answer: "Même zone, même tarif. Avon et Fontainebleau forment une agglomération jumelle partageant la gare." },
    { question: "Transfert gare Fontainebleau-Avon ?", answer: "La gare est à Avon. Prise en charge à la sortie, suivi des horaires Transilien R." },
  ], 5, "20 min"),
  city("Moret-sur-Loing", "moret-sur-loing", 48.3725, 2.8125, 11000, [
    "Remparts XIIe siècle", "Pont Sisley", "Musée du Sucre d'Orge",
    "Confluence Loing/Seine", "Porte de Samois", "Donjon médiéval",
  ], [
    "Centre médiéval", "Orvanne", "Écuelles",
    "Veneux-les-Sablons", "Montarlot",
  ], [
    { from: "Moret-sur-Loing", to: "Paris", price: "90-115 €" },
    { from: "Moret-sur-Loing", to: "Orly", price: "80-100 €" },
    { from: "Moret-sur-Loing", to: "CDG", price: "130-160 €" },
  ], ["fontainebleau"], [
    { text: "Taxi fiable depuis le centre médiéval malgré les rues étroites. Chauffeur très professionnel.", name: "M. B.", initials: "MB", role: "Résident Moret" },
    { text: "Transfert Paris après une journée de visite du village. Service parfait, prix fixe respecté.", name: "C. H.", initials: "CH", role: "Touriste" },
    { text: "Trajet régulier Moret-Paris pour le travail. Bien plus confortable que le Transilien bondé.", name: "D. L.", initials: "DL", role: "Pendulaire" },
  ], [
    { question: "Accès au centre médiéval ?", answer: "Nos chauffeurs connaissent les points d'accès malgré les rues étroites et pavées du centre historique." },
    { question: "Gare de Moret-Veneux-les-Sablons ?", answer: "Transfert gare inclus. Fréquence réduite (8-10 trains/jour), le taxi complète l'offre ferroviaire." },
  ], 3, "25 min"),
  city("Barbizon", "barbizon", 48.4433, 2.6014, 1500, [
    "Musée des Peintres (Auberge Ganne)", "Atelier Rousseau", "Maison Millet",
    "Grande Rue", "Forêt de Fontainebleau", "Galeries d'art",
  ], [
    "Grande Rue", "Entrée forêt", "Quartier résidentiel",
  ], [
    { from: "Barbizon", to: "Paris", price: "75-100 €" },
    { from: "Barbizon", to: "Orly", price: "65-85 €" },
    { from: "Barbizon", to: "CDG", price: "115-145 €" },
  ], ["fontainebleau"], [
    { text: "Seul moyen fiable de rejoindre Paris depuis Barbizon. Service impeccable pour nos clients galeristes.", name: "F. D.", initials: "FD", role: "Galeriste, Barbizon" },
    { text: "Transfert hôtel-Orly parfait, chauffeur ponctuel, véhicule spacieux pour nos bagages.", name: "R. W.", initials: "RW", role: "Touriste international" },
    { text: "Je réserve régulièrement pour mes invités. Toujours une bonne impression du village jusqu'à Paris.", name: "N. P.", initials: "NP", role: "Hôtelier, Barbizon" },
  ], [
    { question: "Y a-t-il une gare à Barbizon ?", answer: "Non. Le taxi est le seul moyen de transport confortable. La gare la plus proche est Melun (15 min)." },
    { question: "Prise en charge devant une galerie ?", answer: "Oui, prise en charge à l'adresse exacte dans la Grande Rue ou ailleurs dans le village." },
  ], 3, "25 min"),
  city("Montereau-Fault-Yonne", "montereau-fault-yonne", 48.3822, 2.9506, 20000, [
    "Confluence Seine/Yonne", "Statue Napoléon", "Collégiale Notre-Dame",
    "Zone industrielle", "Port fluvial", "Musée de la Faïence",
  ], [
    "Centre-ville", "Surville", "Les Ormeaux",
    "Zone industrielle", "Quartier de la gare",
  ], [
    { from: "Montereau", to: "Paris", price: "105-135 €" },
    { from: "Montereau", to: "Orly", price: "85-110 €" },
    { from: "Montereau", to: "CDG", price: "135-170 €" },
  ], ["fontainebleau"], [
    { text: "Taxi indispensable pour mes rendez-vous parisiens. Ponctuel, tarif fixe, confort garanti.", name: "J. T.", initials: "JT", role: "Cadre, zone industrielle" },
    { text: "Transfert Orly fiable pour mes déplacements professionnels. Plus rapide que le train + RER.", name: "S. B.", initials: "SB", role: "Commercial itinérant" },
    { text: "Service de nuit au top quand le dernier train est passé. Indispensable pour Montereau.", name: "A. G.", initials: "AG", role: "Résident Montereau" },
  ], [
    { question: "Prise en charge zone industrielle ?", answer: "Oui, dans toute la zone économique : Schneider Electric, centres logistiques, port fluvial." },
    { question: "Gare de Montereau ?", answer: "Transfert gare possible. Fréquence Transilien limitée (6-8 trains directs/jour), le taxi complète." },
  ], 4, "25 min"),
  // ─── Seine-et-Marne Nord ──────────────────────────────
  city("Chelles", "chelles", 48.8833, 2.5941, 55000, ["Gare de Chelles-Gournay", "Bords de Marne", "Parc du Souvenir"], ["Centre-ville", "Aulnoy", "Bois de Chelles"], [{ from: "Chelles", to: "Paris", price: "40-55 €" }, { from: "Chelles", to: "Orly", price: "55-75 €" }, { from: "Chelles", to: "CDG", price: "35-45 €" }], ["villeparisis", "mitry-mory"], [{ text: "Ponctuel et rapide pour mon vol depuis CDG. Merci !", name: "David M.", initials: "DM", role: "Résident" }, { text: "Taxi réservé pour Paris, trajet impeccable.", name: "Nadia K.", initials: "NK", role: "Résident" }, { text: "Service fiable, je recommande.", name: "Marc T.", initials: "MT", role: "Résident" }], [{ question: "Gare de Chelles ?", answer: "Gare RER E / Transilien P, accès Paris-Est en 15 min." }, { question: "Bords de Marne ?", answer: "Promenades et guinguettes en bord de Marne." }], 6, "18 min"),
  city("Villeparisis", "villeparisis", 48.9450, 2.6108, 27000, ["Gare RER B Villeparisis", "Canal de l'Ourcq", "Forêt de Bondy"], ["Centre", "Les Music's", "ZAC"], [{ from: "Villeparisis", to: "Paris", price: "50-65 €" }, { from: "Villeparisis", to: "Orly", price: "70-95 €" }, { from: "Villeparisis", to: "CDG", price: "20-30 €" }], ["chelles", "mitry-mory"], [{ text: "Transfert CDG parfait, chauffeur aimable.", name: "Fatima B.", initials: "FB", role: "Résident" }, { text: "Bon rapport qualité/prix.", name: "Pierre L.", initials: "PL", role: "Résident" }, { text: "Fiable pour mes déplacements professionnels.", name: "Sarah D.", initials: "SD", role: "Résident" }], [{ question: "Gare ?", answer: "Gare Villeparisis – Mitry-le-Neuf sur le RER B." }], 4, "20 min"),
  city("Mitry-Mory", "mitry-mory", 48.9830, 2.6210, 20000, ["Gare RER B", "Proximité CDG", "Canal de l'Ourcq", "Zone logistique"], ["Mitry", "Mory", "ZAE"], [{ from: "Mitry-Mory", to: "Paris", price: "55-75 €" }, { from: "Mitry-Mory", to: "Orly", price: "75-105 €" }, { from: "Mitry-Mory", to: "CDG", price: "15-25 €" }], ["villeparisis", "claye-souilly"], [{ text: "CDG en 15 min, super service.", name: "Jean-Luc R.", initials: "JR", role: "Résident" }, { text: "Très pratique depuis Mitry.", name: "Amina S.", initials: "AS", role: "Résident" }, { text: "Chauffeur ponctuel.", name: "Laurent P.", initials: "LP", role: "Résident" }], [{ question: "CDG ?", answer: "CDG est à 15 min. L'une des communes les plus proches de l'aéroport." }], 4, "20 min"),
  city("Claye-Souilly", "claye-souilly", 48.9450, 2.6850, 12000, ["Centre commercial", "Canal de l'Ourcq", "Château de Souilly", "Forêt de Claye"], ["Claye", "Souilly", "Le Pin"], [{ from: "Claye-Souilly", to: "Paris", price: "60-80 €" }, { from: "Claye-Souilly", to: "Orly", price: "75-105 €" }, { from: "Claye-Souilly", to: "CDG", price: "30-40 €" }], ["villeparisis", "mitry-mory"], [{ text: "Excellent pour aller à Paris.", name: "Sophie M.", initials: "SM", role: "Résident" }, { text: "Transfert CDG rapide.", name: "Karim A.", initials: "KA", role: "Résident" }, { text: "Service de qualité.", name: "Christine L.", initials: "CL", role: "Résident" }], [{ question: "Centre commercial ?", answer: "Le centre commercial est l'un des plus grands du nord Seine-et-Marne." }], 3, "22 min"),
  // ─── Marne-la-Vallée ──────────────────────────────
  city("Champs-sur-Marne", "champs-sur-marne", 48.8530, 2.6000, 26000, ["Château de Champs", "Cité Descartes", "Université Gustave Eiffel", "RER A"], ["Descartes", "Centre", "Nesles"], [{ from: "Champs-sur-Marne", to: "Paris", price: "45-60 €" }, { from: "Champs-sur-Marne", to: "Orly", price: "50-70 €" }, { from: "Champs-sur-Marne", to: "CDG", price: "40-55 €" }], ["torcy", "noisiel"], [{ text: "Transfert campus-aéroport parfait.", name: "Thomas E.", initials: "TE", role: "Résident" }, { text: "Service fiable depuis Descartes.", name: "Émilie R.", initials: "ÉR", role: "Résident" }, { text: "Rapide et professionnel.", name: "Yann G.", initials: "YG", role: "Résident" }], [{ question: "Château ?", answer: "Le château de Champs-sur-Marne (XVIIIe) est géré par le CMN, visitable." }], 5, "18 min"),
  city("Torcy", "torcy", 48.8500, 2.6530, 24000, ["Bay 1 centre commercial", "Base de loisirs", "RER A", "Lac de Torcy"], ["Centre", "Les Coteaux", "L'Arche Guédon"], [{ from: "Torcy", to: "Paris", price: "50-70 €" }, { from: "Torcy", to: "Orly", price: "60-80 €" }, { from: "Torcy", to: "CDG", price: "45-60 €" }], ["noisiel", "lognes"], [{ text: "Taxi fiable pour CDG.", name: "Julie C.", initials: "JC", role: "Résident" }, { text: "Bon service.", name: "François M.", initials: "FM", role: "Résident" }, { text: "Pratique depuis Bay 1.", name: "Laure S.", initials: "LS", role: "Résident" }], [{ question: "Bay 1 ?", answer: "Centre commercial Bay 1 (ex-Bay 2), l'un des plus grands de l'est parisien." }], 5, "18 min"),
  city("Noisiel", "noisiel", 48.8440, 2.6280, 16000, ["Chocolaterie Menier", "Ferme du Buisson", "RER A", "Marne"], ["Centre", "Luzard", "Ferme du Buisson"], [{ from: "Noisiel", to: "Paris", price: "45-65 €" }, { from: "Noisiel", to: "Orly", price: "55-75 €" }, { from: "Noisiel", to: "CDG", price: "45-60 €" }], ["torcy", "champs-sur-marne"], [{ text: "Très bien pour aller à Paris.", name: "Paul D.", initials: "PD", role: "Résident" }, { text: "Chauffeur agréable.", name: "Lucie V.", initials: "LV", role: "Résident" }, { text: "Ponctuel.", name: "René B.", initials: "RB", role: "Résident" }], [{ question: "Chocolaterie Menier ?", answer: "Site industriel remarquable du XIXe siècle, classé monument historique." }], 4, "18 min"),
  city("Lognes", "lognes", 48.8370, 2.6300, 15000, ["Cité Descartes", "Mandinet", "RER A", "Parc urbain"], ["Mandinet", "Centre", "ZAC"], [{ from: "Lognes", to: "Paris", price: "50-65 €" }, { from: "Lognes", to: "Orly", price: "55-70 €" }, { from: "Lognes", to: "CDG", price: "45-65 €" }], ["noisiel", "torcy"], [{ text: "Rapide pour CDG.", name: "Alice F.", initials: "AF", role: "Résident" }, { text: "Bon rapport qualité/prix.", name: "Damien H.", initials: "DH", role: "Résident" }, { text: "Service régulier.", name: "Nathalie P.", initials: "NP", role: "Résident" }], [{ question: "Mandinet ?", answer: "Grand quartier résidentiel avec commerces et parcs." }], 4, "18 min"),
  city("Bussy-Saint-Georges", "bussy-saint-georges", 48.8370, 2.7080, 30000, ["Golf de Bussy", "Lieu de cultes", "RER A", "Val d'Europe"], ["Centre", "Sycomore", "Le Closeau"], [{ from: "Bussy-Saint-Georges", to: "Paris", price: "60-80 €" }, { from: "Bussy-Saint-Georges", to: "Orly", price: "65-85 €" }, { from: "Bussy-Saint-Georges", to: "CDG", price: "50-70 €" }], ["lognes", "lagny-sur-marne"], [{ text: "Golf → CDG impeccable.", name: "Olivier T.", initials: "OT", role: "Résident" }, { text: "Service ponctuel.", name: "Marie J.", initials: "MJ", role: "Résident" }, { text: "Fiable.", name: "Sébastien L.", initials: "SL", role: "Résident" }], [{ question: "Golf ?", answer: "Golf international de Bussy, 18 trous dans un cadre boisé." }], 5, "20 min"),
  city("Lagny-sur-Marne", "lagny-sur-marne", 48.8730, 2.7130, 21000, ["Cité médiévale", "Marne", "Marché couvert", "Abbatiale Notre-Dame"], ["Centre historique", "Les Coteaux", "Saint-Denis"], [{ from: "Lagny-sur-Marne", to: "Paris", price: "60-80 €" }, { from: "Lagny-sur-Marne", to: "Orly", price: "70-95 €" }, { from: "Lagny-sur-Marne", to: "CDG", price: "45-60 €" }], ["bussy-saint-georges", "torcy"], [{ text: "Transfert Paris rapide.", name: "Claire B.", initials: "CB", role: "Résident" }, { text: "Très bien.", name: "Michel D.", initials: "MD", role: "Résident" }, { text: "Chauffeur sympathique.", name: "Isabelle G.", initials: "IG", role: "Résident" }], [{ question: "Médiéval ?", answer: "Lagny fut une ville de foire rivale de Provins au Moyen Âge." }], 4, "20 min"),
  city("Pontault-Combault", "pontault-combault", 48.7700, 2.6040, 38000, ["Actipôle", "Parc du Cosson", "Sans gare SNCF", "Zone commerciale"], ["Pontault", "Combault", "Actipôle"], [{ from: "Pontault-Combault", to: "Paris", price: "50-65 €" }, { from: "Pontault-Combault", to: "Orly", price: "45-60 €" }, { from: "Pontault-Combault", to: "CDG", price: "60-85 €" }], ["roissy-en-brie", "ozoir-la-ferriere"], [{ text: "Indispensable sans gare.", name: "Vincent R.", initials: "VR", role: "Résident" }, { text: "Rapide vers Paris.", name: "Audrey M.", initials: "AM", role: "Résident" }, { text: "Bon service.", name: "Nicolas C.", initials: "NC", role: "Résident" }], [{ question: "Pas de gare ?", answer: "Non, Pontault-Combault n'a pas de gare. Le taxi est le moyen le plus direct." }], 5, "22 min"),
  city("Roissy-en-Brie", "roissy-en-brie", 48.7914, 2.6530, 22600, ["Gare RER E", "Forêt d'Armainvilliers", "ZAC Nanteuil", "Attention ≠ CDG"], ["Centre", "Pontillault", "Les Music's"], [{ from: "Roissy-en-Brie", to: "Paris", price: "55-70 €" }, { from: "Roissy-en-Brie", to: "Orly", price: "50-70 €" }, { from: "Roissy-en-Brie", to: "CDG", price: "60-80 €" }], ["pontault-combault", "ozoir-la-ferriere"], [{ text: "Ne pas confondre avec CDG !", name: "Stéphane L.", initials: "SL", role: "Résident" }, { text: "Bon transfert Orly.", name: "Patricia D.", initials: "PD", role: "Résident" }, { text: "Fiable.", name: "Bruno G.", initials: "BG", role: "Résident" }], [{ question: "CDG ?", answer: "Non ! Roissy-en-Brie (77) ≠ Roissy-en-France / CDG (95)." }], 4, "20 min"),
  city("Ozoir-la-Ferrière", "ozoir-la-ferriere", 48.7634, 2.6660, 20000, ["Golf d'Ozoir", "Château du Piple", "Forêt de la Grange", "Gare RER E"], ["Centre", "La Doutre", "Piple"], [{ from: "Ozoir-la-Ferrière", to: "Paris", price: "60-80 €" }, { from: "Ozoir-la-Ferrière", to: "Orly", price: "50-70 €" }, { from: "Ozoir-la-Ferrière", to: "CDG", price: "65-90 €" }], ["roissy-en-brie", "pontault-combault"], [{ text: "Golf → CDG parfait.", name: "Philippe R.", initials: "PR", role: "Résident" }, { text: "Commune charmante, taxi efficace.", name: "Sandrine M.", initials: "SM", role: "Résident" }, { text: "Service de qualité.", name: "Éric V.", initials: "ÉV", role: "Résident" }], [{ question: "Golf ?", answer: "Golf d'Ozoir, 18 trous, parcours technique dans les bois." }], 4, "22 min"),
  city("Vaires-sur-Marne", "vaires-sur-marne", 48.8690, 2.6470, 13000, ["Stade nautique olympique 2024", "Marne", "Canal de Chelles", "Guinguettes"], ["Centre", "Les Pêcheurs", "Bords de Marne"], [{ from: "Vaires-sur-Marne", to: "Paris", price: "50-70 €" }, { from: "Vaires-sur-Marne", to: "Orly", price: "60-80 €" }, { from: "Vaires-sur-Marne", to: "CDG", price: "40-55 €" }], ["chelles", "torcy"], [{ text: "Transfert depuis le stade olympique, top.", name: "Antoine J.", initials: "AJ", role: "Résident" }, { text: "Bord de Marne charmant.", name: "Camille P.", initials: "CP", role: "Résident" }, { text: "Service rapide.", name: "Thierry B.", initials: "TB", role: "Résident" }], [{ question: "JO 2024 ?", answer: "Le stade nautique de Vaires-Torcy a accueilli l'aviron et le canoë-kayak des JO 2024." }], 3, "20 min"),
  // ─── Melun-Sénart ──────────────────────────────
  city("Dammarie-les-Lys", "dammarie-les-lys", 48.5188, 2.6367, 22000, ["Abbaye du Lys", "Centre commercial La Mare", "Seine", "Zone industrielle"], ["Centre", "La Plaine du Lys", "Les Mézereaux"], [{ from: "Dammarie-les-Lys", to: "Paris", price: "95-130 €" }, { from: "Dammarie-les-Lys", to: "Orly", price: "70-95 €" }, { from: "Dammarie-les-Lys", to: "CDG", price: "120-165 €" }], ["melun", "le-mee-sur-seine"], [{ text: "Rapide pour Orly.", name: "Rachid A.", initials: "RA", role: "Résident" }, { text: "Bon transfert.", name: "Catherine D.", initials: "CD", role: "Résident" }, { text: "Service fiable.", name: "Moussa K.", initials: "MK", role: "Résident" }], [{ question: "Abbaye ?", answer: "L'abbaye royale du Lys, fondée par Blanche de Castille en 1244, patrimoine cistercien." }], 4, "22 min"),
  city("Le Mée-sur-Seine", "le-mee-sur-seine", 48.5280, 2.6280, 21000, ["Base de loisirs Seine-École", "Forêt de Bréviande", "Seine", "ZAC"], ["Centre", "Croix-Saint-Jacques", "Les Courtillières"], [{ from: "Le Mée-sur-Seine", to: "Paris", price: "95-125 €" }, { from: "Le Mée-sur-Seine", to: "Orly", price: "65-90 €" }, { from: "Le Mée-sur-Seine", to: "CDG", price: "120-160 €" }], ["melun", "dammarie-les-lys"], [{ text: "Base de loisirs agréable, taxi pratique.", name: "David C.", initials: "DC", role: "Résident" }, { text: "Service ponctuel.", name: "Sylvie L.", initials: "SL", role: "Résident" }, { text: "Bon rapport qualité/prix.", name: "Fabrice P.", initials: "FP", role: "Résident" }], [{ question: "Base de loisirs ?", answer: "Seine-École : voile, baignade en été, l'une des rares d'Île-de-France." }], 4, "22 min"),
  city("Combs-la-Ville", "combs-la-ville", 48.6650, 2.5580, 22500, ["Gare RER D", "Forêt de Sénart", "Étang de la Tuilerie", "Zone commerciale"], ["Centre", "Les Bords de l'Yerres", "La Tuilerie"], [{ from: "Combs-la-Ville", to: "Paris", price: "60-80 €" }, { from: "Combs-la-Ville", to: "Orly", price: "40-50 €" }, { from: "Combs-la-Ville", to: "CDG", price: "85-115 €" }], ["savigny-le-temple", "brie-comte-robert"], [{ text: "RER D en retard, taxi sauveur.", name: "Bernard H.", initials: "BH", role: "Résident" }, { text: "Transfert Orly rapide.", name: "Fatou D.", initials: "FD", role: "Résident" }, { text: "Fiable.", name: "Jacques M.", initials: "JM", role: "Résident" }], [{ question: "RER D ?", answer: "Le RER D est souvent en retard. Le taxi est l'alternative fiable." }], 5, "20 min"),
  city("Savigny-le-Temple", "savigny-le-temple", 48.6170, 2.5830, 30000, ["Gare RER D", "Carré Sénart", "Parc urbain 65 ha", "Patinoire"], ["Centre", "Grand-Parc", "La Grange du Bois"], [{ from: "Savigny-le-Temple", to: "Paris", price: "70-95 €" }, { from: "Savigny-le-Temple", to: "Orly", price: "45-65 €" }, { from: "Savigny-le-Temple", to: "CDG", price: "95-130 €" }], ["combs-la-ville", "moissy-cramayel"], [{ text: "Carré Sénart → CDG, nickel.", name: "Kévin R.", initials: "KR", role: "Résident" }, { text: "Parc superbe, taxi pratique.", name: "Amandine V.", initials: "AV", role: "Résident" }, { text: "Bon service.", name: "Youssef E.", initials: "YE", role: "Résident" }], [{ question: "Carré Sénart ?", answer: "Centre commercial de 200 boutiques, moteur économique du secteur." }], 5, "22 min"),
  city("Brie-Comte-Robert", "brie-comte-robert", 48.6920, 2.6110, 18000, ["Château médiéval XIIe", "Roseraie 600 variétés", "Marché couvert XVIIe", "Église Saint-Étienne"], ["Centre historique", "Les Musiciens", "Les Tilleuls"], [{ from: "Brie-Comte-Robert", to: "Paris", price: "60-80 €" }, { from: "Brie-Comte-Robert", to: "Orly", price: "45-60 €" }, { from: "Brie-Comte-Robert", to: "CDG", price: "80-110 €" }], ["combs-la-ville"], [{ text: "Château magnifique, taxi efficace.", name: "Hélène F.", initials: "HF", role: "Résident" }, { text: "Roseraie exceptionnelle.", name: "Gérard B.", initials: "GB", role: "Résident" }, { text: "Bon service.", name: "Monique S.", initials: "MS", role: "Résident" }], [{ question: "Château ?", answer: "Vestiges du XIIe siècle visitables gratuitement. Douves et tours conservées." }, { question: "Roseraie ?", answer: "600+ variétés de roses, ouverte mai-octobre, entrée libre. L'une des plus grandes de France." }], 4, "20 min"),
  // ─── Seine-et-Marne Est ──────────────────────────────
  city("Coulommiers", "coulommiers", 48.8130, 3.0860, 15500, ["Fromage Coulommiers", "Commanderie des Templiers", "Grand Morin", "Parc des Capucins"], ["Centre", "Vaux", "Mouroux"], [{ from: "Coulommiers", to: "Paris", price: "120-160 €" }, { from: "Coulommiers", to: "Orly", price: "120-160 €" }, { from: "Coulommiers", to: "CDG", price: "100-135 €" }], ["provins"], [{ text: "Sous-préfecture bien desservie par TaxiNeo.", name: "André M.", initials: "AM", role: "Résident" }, { text: "Templiers et fromage, taxi rapide.", name: "Christine B.", initials: "CB", role: "Résident" }, { text: "Bon transfert CDG.", name: "Romain F.", initials: "RF", role: "Résident" }], [{ question: "Fromage ?", answer: "Le Coulommiers est un fromage à pâte molle cousin du Brie, fabriqué localement depuis le Moyen Âge." }, { question: "Templiers ?", answer: "Commanderie des Templiers XIIe-XIIIe siècle, l'un des rares sites templiers d'Île-de-France." }], 3, "25 min"),
  city("Provins", "provins", 48.5580, 3.2990, 12000, ["UNESCO", "Tour César", "Remparts XIIIe", "Spectacles médiévaux", "Rose de Provins"], ["Ville haute", "Ville basse", "Champbenoist"], [{ from: "Provins", to: "Paris", price: "170-225 €" }, { from: "Provins", to: "Orly", price: "155-210 €" }, { from: "Provins", to: "CDG", price: "165-220 €" }], ["coulommiers"], [{ text: "Spectacle médiéval puis taxi vers Paris, parfait.", name: "Laura D.", initials: "LD", role: "Résident" }, { text: "Provins UNESCO mérite le détour.", name: "Jean-Pierre K.", initials: "JK", role: "Résident" }, { text: "Transfert fiable.", name: "Emma V.", initials: "EV", role: "Résident" }], [{ question: "UNESCO ?", answer: "Provins est classée UNESCO depuis 2001 pour ses foires de Champagne et son patrimoine médiéval." }, { question: "Spectacles ?", answer: "Spectacles médiévaux d'avril à novembre : aigles, chevaliers, banquet. 300 000 visiteurs/an." }], 3, "30 min"),
  city("Nemours", "nemours", 48.2680, 2.6960, 13000, ["Musée de Préhistoire", "Château-musée XIIe", "Loing", "Rochers d'escalade"], ["Centre", "Saint-Pierre", "Les Closeaux"], [{ from: "Nemours", to: "Paris", price: "155-205 €" }, { from: "Nemours", to: "Orly", price: "125-170 €" }, { from: "Nemours", to: "CDG", price: "180-245 €" }], ["fontainebleau"], [{ text: "Musée de Préhistoire incroyable.", name: "Cédric L.", initials: "CL", role: "Résident" }, { text: "Rochers top pour l'escalade.", name: "Véronique R.", initials: "VR", role: "Résident" }, { text: "Bon taxi vers Paris.", name: "Patrick G.", initials: "PG", role: "Résident" }], [{ question: "Préhistoire ?", answer: "Le Musée de Préhistoire d'Île-de-France (Simounet, 1981) est l'un des plus importants de France." }, { question: "Escalade ?", answer: "Les rochers de Nemours sont un spot de bloc prisé, satellite de Fontainebleau." }], 3, "25 min"),
  // ─── Hauts-de-Seine Nord ──────────────────────────────
  city("Nanterre", "nanterre", 48.8924, 2.2069, 96000, ["Préfecture 92", "La Défense", "Université Paris-Nanterre", "Mont-Valérien", "Parc André-Malraux"], ["Centre", "La Défense", "Université", "Mont-Valérien"], [{ from: "Nanterre", to: "Paris", price: "30-40 €" }, { from: "Nanterre", to: "Orly", price: "50-70 €" }, { from: "Nanterre", to: "CDG", price: "65-85 €" }], ["courbevoie", "rueil-malmaison"], [{ text: "Transfert La Défense → CDG impeccable.", name: "Alexandre D.", initials: "AD", role: "Résident" }, { text: "Service professionnel.", name: "Marine L.", initials: "ML", role: "Résident" }, { text: "Rapide et fiable.", name: "Julien B.", initials: "JB", role: "Résident" }], [{ question: "La Défense ?", answer: "Premier quartier d'affaires d'Europe, 180 000 salariés, à la frontière de Nanterre." }, { question: "Université ?", answer: "Paris-Nanterre : 35 000 étudiants, berceau de Mai 68." }], 8, "15 min"),
  city("Courbevoie", "courbevoie", 48.8978, 2.2530, 82000, ["La Défense", "Bécon-les-Bruyères", "Total", "Société Générale", "Saint-Gobain"], ["La Défense", "Bécon", "Centre", "Charras"], [{ from: "Courbevoie", to: "Orly", price: "50-65 €" }, { from: "Courbevoie", to: "CDG", price: "55-75 €" }], ["nanterre", "levallois-perret"], [{ text: "La Défense → CDG en 30 min, top.", name: "Caroline V.", initials: "CV", role: "Résident" }, { text: "Service de qualité.", name: "Antoine G.", initials: "AG", role: "Résident" }, { text: "Bécon charmant.", name: "Sandrine B.", initials: "SB", role: "Résident" }], [{ question: "La Défense ?", answer: "Courbevoie accueille la majorité des tours de La Défense : Total, SocGen, Saint-Gobain." }], 8, "15 min"),
  city("Levallois-Perret", "levallois-perret", 48.8933, 2.2880, 65000, ["Commune la plus dense de France", "Île de la Jatte", "Celine/LVMH", "Alstom", "Amazon France"], ["Centre", "Front de Seine", "Île de la Jatte"], [{ from: "Levallois-Perret", to: "Orly", price: "45-60 €" }, { from: "Levallois-Perret", to: "CDG", price: "55-70 €" }], ["neuilly-sur-seine", "courbevoie"], [{ text: "Sièges sociaux → CDG, parfait.", name: "Sophie A.", initials: "SA", role: "Résident" }, { text: "Île de la Jatte magnifique.", name: "Romain D.", initials: "RD", role: "Résident" }, { text: "Service excellent.", name: "Claire T.", initials: "CT", role: "Résident" }], [{ question: "Densité ?", answer: "Levallois est la commune la plus dense de France : 27 000 hab./km²." }], 8, "15 min"),
  city("Neuilly-sur-Seine", "neuilly-sur-seine", 48.8848, 2.2688, 61000, ["Commune la plus aisée de France", "Bois de Boulogne", "American Hospital", "Avenue Charles de Gaulle"], ["Sablons", "Bagatelle", "Île de la Jatte", "Centre"], [{ from: "Neuilly-sur-Seine", to: "Orly", price: "45-60 €" }, { from: "Neuilly-sur-Seine", to: "CDG", price: "55-75 €" }], ["levallois-perret", "courbevoie"], [{ text: "Service discret et professionnel, comme attendu.", name: "Frédéric M.", initials: "FM", role: "Résident" }, { text: "Transfert CDG irréprochable.", name: "Valérie P.", initials: "VP", role: "Résident" }, { text: "Chauffeur ponctuel.", name: "Pierre-Henri D.", initials: "PD", role: "Résident" }], [{ question: "American Hospital ?", answer: "Premier hôpital privé anglophone de France, à Neuilly." }], 10, "12 min"),
  city("Colombes", "colombes", 48.9230, 2.2530, 85000, ["Stade Yves-du-Manoir JO 1924/2024", "Coulée verte", "Seine", "Petit-Colombes"], ["Centre", "Petit-Colombes", "Les Fossés-Jean", "Europe"], [{ from: "Colombes", to: "Orly", price: "55-75 €" }, { from: "Colombes", to: "CDG", price: "55-75 €" }], ["asnieres-sur-seine", "courbevoie"], [{ text: "Stade olympique historique, taxi rapide.", name: "Rachid B.", initials: "RB", role: "Résident" }, { text: "Coulée verte agréable.", name: "Martine F.", initials: "MF", role: "Résident" }, { text: "Bon service.", name: "Yannick H.", initials: "YH", role: "Résident" }], [{ question: "JO ?", answer: "Le stade Yves-du-Manoir a accueilli les JO 1924 (athlétisme) et 2024 (hockey)." }], 6, "18 min"),
  city("Rueil-Malmaison", "rueil-malmaison", 48.8769, 2.1810, 80000, ["Château de Malmaison", "Mont-Valérien", "Schneider Electric", "Bords de Seine"], ["Centre", "Buzenval", "Mont-Valérien", "Bords de Seine"], [{ from: "Rueil-Malmaison", to: "Orly", price: "50-70 €" }, { from: "Rueil-Malmaison", to: "CDG", price: "70-95 €" }], ["nanterre"], [{ text: "Château de Malmaison magnifique, taxi top.", name: "Arnaud R.", initials: "AR", role: "Résident" }, { text: "Service de qualité.", name: "Pascale J.", initials: "PJ", role: "Résident" }, { text: "Napoléon aurait approuvé.", name: "Bruno M.", initials: "BM", role: "Résident" }], [{ question: "Malmaison ?", answer: "Résidence de Napoléon et Joséphine. Musée national, 10 €, gratuit -26 ans UE." }], 6, "18 min"),
  city("Asnières-sur-Seine", "asnieres-sur-seine", 48.9120, 2.2850, 86000, ["Château d'Asnières rococo", "Bords de Seine", "Métro 13", "Renouveau urbain"], ["Centre", "Bords de Seine", "Quatre Routes", "Les Courtilles"], [{ from: "Asnières-sur-Seine", to: "Orly", price: "50-65 €" }, { from: "Asnières-sur-Seine", to: "CDG", price: "50-70 €" }], ["colombes", "courbevoie"], [{ text: "Bords de Seine charmants.", name: "Stéphanie L.", initials: "SL", role: "Résident" }, { text: "CDG rapide via A86.", name: "Mehdi A.", initials: "MA", role: "Résident" }, { text: "Bon service.", name: "Céline R.", initials: "CR", role: "Résident" }], [{ question: "Château ?", answer: "Le château d'Asnières (XVIIIe, rococo) est l'un des rares exemples de style rocaille en Île-de-France." }], 6, "18 min"),
  // ─── Hauts-de-Seine Sud ──────────────────────────────
  city("Boulogne-Billancourt", "boulogne-billancourt", 48.8352, 2.2410, 121000, ["Seine Musicale", "Île Seguin", "Bois de Boulogne", "TF1", "Roland-Garros"], ["Centre", "Trapèze", "Point du Jour", "Billancourt"], [{ from: "Boulogne-Billancourt", to: "Paris", price: "20-30 €" }, { from: "Boulogne-Billancourt", to: "Orly", price: "35-50 €" }, { from: "Boulogne-Billancourt", to: "CDG", price: "65-90 €" }], ["issy-les-moulineaux"], [{ text: "Seine Musicale → Paris, super.", name: "Lucas R.", initials: "LR", role: "Résident" }, { text: "Quartier Trapèze dynamique.", name: "Inès M.", initials: "IM", role: "Résident" }, { text: "Service fiable.", name: "Guillaume V.", initials: "GV", role: "Résident" }], [{ question: "Seine Musicale ?", answer: "Salle de concert Shigeru Ban (2017) sur l'île Seguin. 300 représentations/an." }, { question: "Renault ?", answer: "Les usines Renault ont été reconverties en éco-quartier Trapèze (logements, bureaux, commerces)." }], 10, "12 min"),
  city("Issy-les-Moulineaux", "issy-les-moulineaux", 48.8244, 2.2700, 69000, ["Microsoft France", "Héliport de Paris", "Fort d'Issy", "Arte", "Cisco"], ["Centre", "Val de Seine", "Fort", "Les Épinettes"], [{ from: "Issy-les-Moulineaux", to: "Orly", price: "30-45 €" }, { from: "Issy-les-Moulineaux", to: "CDG", price: "65-90 €" }], ["boulogne-billancourt", "meudon"], [{ text: "Microsoft → CDG, nickel.", name: "Victor H.", initials: "VH", role: "Résident" }, { text: "Ville tech dynamique.", name: "Amandine D.", initials: "AD", role: "Résident" }, { text: "Transfert rapide.", name: "Christophe R.", initials: "CR", role: "Résident" }], [{ question: "Tech ?", answer: "Issy accueille Microsoft France, Cisco, HP et Arte. Pionnière du numérique en France." }], 8, "15 min"),
  city("Meudon", "meudon", 48.8122, 2.2350, 46000, ["Observatoire de Meudon", "Terrasse panoramique", "ONERA", "Forêt 1100 ha"], ["Meudon-Val-Fleury", "Bellevue", "Meudon-la-Forêt", "Centre"], [{ from: "Meudon", to: "Orly", price: "35-45 €" }, { from: "Meudon", to: "CDG", price: "70-95 €" }], ["issy-les-moulineaux", "clamart"], [{ text: "Observatoire fascinant, taxi efficace.", name: "Frédérique T.", initials: "FT", role: "Résident" }, { text: "Terrasse avec vue sur tout Paris.", name: "Michel G.", initials: "MG", role: "Résident" }, { text: "Forêt superbe.", name: "Nathalie L.", initials: "NL", role: "Résident" }], [{ question: "Observatoire ?", answer: "Rattaché à l'Observatoire de Paris. Spécialisé en astrophysique solaire. Visites sur réservation." }, { question: "ONERA ?", answer: "Office national d'études et de recherches aérospatiales. Centre de renommée mondiale." }], 5, "18 min"),
  city("Antony", "antony", 48.7533, 2.2977, 62000, ["RER B / Orlyval", "Parc de Sceaux proche", "Marché réputé", "Croix de Berny"], ["Centre", "La Fontaine", "Le Noyer Doré", "Pajeaud"], [{ from: "Antony", to: "Orly", price: "15-20 €" }, { from: "Antony", to: "CDG", price: "75-105 €" }], ["sceaux"], [{ text: "Orly en 15 min, mieux que l'Orlyval !", name: "Pascale V.", initials: "PV", role: "Résident" }, { text: "CDG fiable via A86.", name: "Denis R.", initials: "DR", role: "Résident" }, { text: "Bon service.", name: "Carole M.", initials: "CM", role: "Résident" }], [{ question: "Orlyval ?", answer: "L'Orlyval part d'Antony (11,50 €/pers.). Le taxi est souvent plus avantageux à 2+." }, { question: "Parc de Sceaux ?", answer: "Le parc de Sceaux (Le Nôtre, 181 ha) est à 10 min du centre d'Antony." }], 6, "15 min"),
  // ─── Hauts-de-Seine Ext ──────────────────────────────
  city("Clichy", "clichy", 48.9040, 2.3053, 63000, ["Hôpital Beaujon", "Pavillon Vendôme XVIIe", "L'Oréal siège historique", "Métro 13"], ["Centre", "Berges de Seine", "Beaujon"], [{ from: "Clichy", to: "Orly", price: "45-60 €" }, { from: "Clichy", to: "CDG", price: "50-65 €" }], ["gennevilliers", "levallois-perret"], [{ text: "Transfert Orly impeccable depuis Clichy. Le chauffeur connaissait parfaitement le quartier Beaujon et m'a déposé au terminal en 30 minutes.", name: "Nathalie R.", initials: "NR", role: "Résidente de Clichy" }, { text: "Je prends le taxi chaque semaine pour mes rendez-vous à l'hôpital Beaujon. Ponctualité et gentillesse, un service irréprochable.", name: "Georges M.", initials: "GM", role: "Patient Beaujon" }, { text: "En tant qu'employée L'Oréal, je réserve souvent des taxis pour CDG. TaxiNeo est fiable, propre et toujours à l'heure.", name: "Camille D.", initials: "CD", role: "Cadre L'Oréal" }], [{ question: "Un taxi peut-il me prendre en charge à l'hôpital Beaujon ?", answer: "Oui, nos chauffeurs prennent en charge les patients et visiteurs directement devant l'entrée principale de l'hôpital Beaujon." }, { question: "Quel est le temps d'attente moyen à Clichy ?", answer: "En moyenne 15 minutes. Réservez à l'avance pour une prise en charge immédiate, notamment aux heures de pointe." }], 8, "15 min"),
  city("Gennevilliers", "gennevilliers", 48.9326, 2.2927, 48000, ["Port de Gennevilliers", "Théâtre de Gennevilliers CDN", "Zone industrielle", "T1 tramway"], ["Centre", "Village", "Port", "Luth"], [{ from: "Gennevilliers", to: "Orly", price: "55-70 €" }, { from: "Gennevilliers", to: "CDG", price: "45-60 €" }], ["villeneuve-la-garenne", "colombes"], [{ text: "Taxi fiable pour mes déplacements depuis la zone portuaire. Le chauffeur est venu me chercher au quai exact, impressionnant.", name: "Patrick L.", initials: "PL", role: "Logisticien, Port de Gennevilliers" }, { text: "Retour de CDG à Gennevilliers après un vol retardé. Le chauffeur avait suivi mon vol et m'attendait sans stress. Parfait.", name: "Aïcha B.", initials: "AB", role: "Résidente de Gennevilliers" }, { text: "Soirée au Théâtre de Gennevilliers puis taxi pour rentrer. Réservation simple, chauffeur ponctuel et courtois.", name: "François T.", initials: "FT", role: "Amateur de théâtre" }], [{ question: "Le taxi peut-il venir dans la zone portuaire ?", answer: "Oui, nos chauffeurs connaissent la zone du port de Gennevilliers. Indiquez le nom de l'entreprise ou le numéro de quai pour une prise en charge précise." }, { question: "Gennevilliers est-elle bien desservie pour CDG ?", answer: "Gennevilliers est l'une des villes les plus proches de CDG dans les Hauts-de-Seine grâce à l'A86. Le taxi met seulement 30 minutes." }], 6, "16 min"),
  city("Villeneuve-la-Garenne", "villeneuve-la-garenne", 48.9376, 2.3254, 25000, ["Île de la Jatte", "Bords de Seine", "Centre commercial Qwartz", "T1 tramway"], ["Centre", "Bords de Seine", "Qwartz"], [{ from: "Villeneuve-la-Garenne", to: "Orly", price: "55-75 €" }, { from: "Villeneuve-la-Garenne", to: "CDG", price: "40-55 €" }], ["gennevilliers", "asnieres-sur-seine"], [{ text: "Depuis Villeneuve, CDG n'est qu'à 25 minutes en taxi. Bien plus simple que les transports en commun avec mes valises.", name: "Rachid K.", initials: "RK", role: "Résident de Villeneuve-la-Garenne" }, { text: "Prise en charge devant Qwartz pour un vol à Orly. Chauffeur sympa, voiture propre, prix fixe respecté.", name: "Sandrine V.", initials: "SV", role: "Commerçante" }, { text: "Nous habitons les bords de Seine à Villeneuve. Le taxi TaxiNeo est devenu notre réflexe pour les aéroports.", name: "Jean-Pierre et Marie F.", initials: "JF", role: "Couple retraité" }], [{ question: "Villeneuve-la-Garenne est-elle proche de CDG ?", answer: "Oui, c'est l'une des villes les plus proches de CDG dans le 92. Seulement 22 km et 25 minutes en taxi par l'A86 et l'A1." }, { question: "Peut-on être pris en charge au centre Qwartz ?", answer: "Oui, nos chauffeurs vous attendent devant l'entrée principale du centre commercial Qwartz ou à toute autre adresse de la ville." }], 5, "18 min"),
  city("Puteaux", "puteaux", 48.8843, 2.2387, 45000, ["La Défense", "CNIT", "Grande Arche", "Île de Puteaux"], ["La Défense", "Vieux Puteaux", "Île de Puteaux", "Bas de Puteaux"], [{ from: "Puteaux", to: "Orly", price: "50-65 €" }, { from: "Puteaux", to: "CDG", price: "60-80 €" }], ["suresnes", "courbevoie"], [{ text: "Transfert impeccable depuis ma tour à La Défense. Le chauffeur m'attendait au pied du bâtiment, facture pro reçue par email.", name: "Olivier H.", initials: "OH", role: "Directeur financier, La Défense" }, { text: "Je vis dans le Vieux Puteaux et je prends souvent le taxi pour Orly. Service rapide, prix fixe, rien à redire.", name: "Isabelle G.", initials: "IG", role: "Résidente du Vieux Puteaux" }, { text: "Après un congrès au CNIT, taxi direct pour CDG. Réservation en 2 minutes, chauffeur professionnel. Je recommande.", name: "Dr. Marc S.", initials: "MS", role: "Médecin congressiste" }], [{ question: "Le taxi peut-il me prendre en charge à La Défense ?", answer: "Oui, nos chauffeurs connaissent parfaitement le quartier d'affaires. Précisez le nom de votre tour ou l'adresse exacte sur l'esplanade." }, { question: "Une facture professionnelle est-elle disponible ?", answer: "Oui, une facture détaillée est envoyée par email après chaque course. Idéal pour les notes de frais des entreprises de La Défense." }], 9, "12 min"),
  city("La Garenne-Colombes", "la-garenne-colombes", 48.9065, 2.2452, 29000, ["Village dans la ville", "Gare Transilien J/L", "Quartier résidentiel prisé", "Proximité La Défense"], ["Centre", "Gare", "Champs-Philippe"], [{ from: "La Garenne-Colombes", to: "Orly", price: "50-65 €" }, { from: "La Garenne-Colombes", to: "CDG", price: "50-70 €" }], ["colombes", "courbevoie"], [{ text: "La Garenne est un village, mais pour les aéroports, le taxi est indispensable. TaxiNeo arrive en 12 minutes chez moi.", name: "Stéphane P.", initials: "SP", role: "Résident de La Garenne-Colombes" }, { text: "Famille de 4, nous partons régulièrement en vacances depuis CDG. Le van TaxiNeo est parfait pour nos valises.", name: "Claire et Thomas B.", initials: "CB", role: "Famille garennoise" }, { text: "Cadre à La Défense, j'habite La Garenne pour le calme. Le taxi vers CDG est mon rituel avant chaque déplacement.", name: "Valérie M.", initials: "VM", role: "Consultante, La Défense" }], [{ question: "La Garenne-Colombes est-elle bien desservie en taxi ?", answer: "Oui, nos chauffeurs couvrent toute La Garenne-Colombes. Prise en charge à domicile en moyenne 14 minutes après la réservation." }, { question: "Quelle est la proximité avec La Défense ?", answer: "La Garenne-Colombes est à 10 minutes à pied de La Défense. Nos taxis desservent les deux zones indifféremment." }], 6, "14 min"),
  city("Suresnes", "suresnes", 48.8713, 2.2293, 49000, ["Mont-Valérien", "Vignoble de Suresnes", "Musée d'Histoire urbaine", "Tramway T2"], ["Centre", "Mont-Valérien", "Cité-jardins", "Bords de Seine"], [{ from: "Suresnes", to: "Orly", price: "45-60 €" }, { from: "Suresnes", to: "CDG", price: "60-80 €" }], ["puteaux", "rueil-malmaison"], [{ text: "Habitant les hauteurs du Mont-Valérien, le taxi est vital pour les aéroports. TaxiNeo vient me chercher même dans les petites rues.", name: "Henri D.", initials: "HD", role: "Résident du Mont-Valérien" }, { text: "Transfert Orly depuis Suresnes en 25 minutes. Parfait pour mon vol de 7h. Le chauffeur était là à 5h pile.", name: "Sophie C.", initials: "SC", role: "Voyageuse fréquente" }, { text: "Après la Fête des Vendanges, un taxi pour rentrer tranquillement. TaxiNeo connaît bien Suresnes et ses ruelles.", name: "Antoine R.", initials: "AR", role: "Suresnois depuis 20 ans" }], [{ question: "Le taxi peut-il accéder aux hauteurs du Mont-Valérien ?", answer: "Oui, nos chauffeurs connaissent toutes les rues de Suresnes, y compris les accès au Mont-Valérien et à la cité-jardins." }, { question: "Combien coûte un taxi Suresnes-Orly ?", answer: "Le tarif fixe est de 45-60 € en berline et 78 € en van. Prix garanti, péages et bagages inclus." }], 7, "14 min"),
  city("Saint-Cloud", "saint-cloud", 48.8450, 2.2088, 30000, ["Parc de Saint-Cloud 460 ha", "Hippodrome", "Grande Cascade", "Musée des Avelines", "Tramway T2"], ["Centre", "Montretout", "Val d'Or", "Pasteur"], [{ from: "Saint-Cloud", to: "Orly", price: "40-55 €" }, { from: "Saint-Cloud", to: "CDG", price: "70-90 €" }], ["sevres", "garches"], [{ text: "Transfert impeccable vers Orly à 5h du matin. Le chauffeur connaissait parfaitement les petites rues de Montretout pour éviter le pont de Saint-Cloud encombré.", name: "Isabelle R.", initials: "IR", role: "Résident" }, { text: "Je prends régulièrement un taxi pour aller à CDG. Service ponctuel, véhicule propre, et le prix fixe annoncé est toujours respecté. Recommandé.", name: "Philippe D.", initials: "PD", role: "Résident" }, { text: "Après une soirée à l'Hippodrome, retour rapide et confortable. Le chauffeur était courtois et le véhicule très bien entretenu.", name: "Catherine M.", initials: "CM", role: "Résident" }], [{ question: "Le taxi peut-il me prendre au Domaine national de Saint-Cloud ?", answer: "Oui, prise en charge possible à toutes les entrées du Domaine national, y compris la grille d'honneur et la porte de la Grille Verte." }, { question: "Y a-t-il des taxis disponibles les soirs de courses à l'Hippodrome ?", answer: "Oui, nos chauffeurs sont disponibles les soirs de courses hippiques. Réservez à l'avance pour garantir votre véhicule à la sortie." }], 5, "15 min"),

  city("Garches", "garches", 48.8454, 2.1856, 18000, ["Hôpital Raymond-Poincaré (AP-HP)", "Pavillon de la Lanterne", "Forêt de la Malmaison", "Villageo-résidentiel", "Coteau de la Seine"], ["Centre", "Buzenval", "Les Colonnes", "Procession"], [{ from: "Garches", to: "Orly", price: "45-60 €" }, { from: "Garches", to: "CDG", price: "75-95 €" }], ["saint-cloud", "rueil-malmaison"], [{ text: "Service exceptionnel pour accompagner mon père à l'hôpital Raymond-Poincaré. Le chauffeur a été patient et attentionné, aide avec le fauteuil roulant.", name: "Laurent G.", initials: "LG", role: "Résident" }, { text: "Taxi réservé la veille pour un vol à 6h depuis Orly. Ponctuel à la minute près. Trajet rapide par la N118, arrivée avec de l'avance.", name: "Marie-Hélène B.", initials: "MB", role: "Résident" }, { text: "Nous utilisons TaxiNeo depuis Garches pour nos déplacements professionnels vers CDG. Fiabilité et confort au rendez-vous à chaque course.", name: "Jean-François P.", initials: "JP", role: "Résident" }], [{ question: "Le taxi peut-il prendre en charge à l'hôpital Raymond-Poincaré ?", answer: "Oui, prise en charge devant l'entrée principale de l'hôpital. Nos chauffeurs sont habitués aux patients en fauteuil roulant et au matériel médical." }, { question: "Peut-on se promener en forêt de la Malmaison avant un départ ?", answer: "Absolument. La forêt de la Malmaison (200 ha) est accessible à pied depuis le centre de Garches. Ses sentiers balisés offrent de belles promenades sous les chênes et les hêtres." }], 4, "18 min"),

  city("Chaville", "chaville", 48.8063, 2.1890, 20000, ["Forêt de Fausses-Reposes 600 ha", "Forêt de Meudon", "Étang d'Ursine", "Gare Transilien N", "IRCAM-CNRS"], ["Centre", "Gare Rive Droite", "Gare Vélizy", "Doisu"], [{ from: "Chaville", to: "Orly", price: "35-50 €" }, { from: "Chaville", to: "CDG", price: "70-95 €" }], ["sevres", "ville-d-avray"], [{ text: "Depuis Chaville, Orly en 20 minutes. Incroyable quand on compare aux transports en commun. Le chauffeur a traversé la forêt, c'était magnifique.", name: "Sophie V.", initials: "SV", role: "Résident" }, { text: "Retour de CDG à 23h, le chauffeur m'attendait avec mon nom affiché. Service irréprochable, même tard le soir. Je recommande vivement.", name: "Thierry L.", initials: "TL", role: "Résident" }, { text: "En famille avec trois enfants et des valises, le van était parfait. Le chauffeur nous a aidés avec les bagages. Très professionnel.", name: "Nathalie C.", initials: "NC", role: "Résident" }], [{ question: "Le taxi passe-t-il par la forêt de Fausses-Reposes ?", answer: "Oui, la N118 longe la forêt de Fausses-Reposes. C'est un parcours agréable et boisé qui mène rapidement vers Orly ou l'A86." }, { question: "Peut-on visiter l'Étang d'Ursine à pied depuis Chaville ?", answer: "Oui, l'Étang d'Ursine est accessible en 15 minutes à pied depuis le centre de Chaville. Un sentier balisé fait le tour du plan d'eau au cœur de la forêt." }], 5, "16 min"),

  city("Sèvres", "sevres", 48.8250, 2.2070, 24000, ["Manufacture de Sèvres (1740)", "Musée de la Céramique", "Pont de Sèvres", "Tramway T2", "Île Seguin"], ["Centre", "Brancas", "Croix-Bosset", "Brimborion"], [{ from: "Sèvres", to: "Orly", price: "35-50 €" }, { from: "Sèvres", to: "CDG", price: "70-90 €" }], ["saint-cloud", "chaville"], [{ text: "Habitant près de la Manufacture, je prends souvent le taxi pour Orly. 20 minutes porte-à-porte, prix fixe respecté, chauffeur aimable.", name: "Françoise T.", initials: "FT", role: "Résident" }, { text: "Transport de porcelaine fragile vers CDG pour un salon international. Le chauffeur a manipulé les cartons avec un soin remarquable.", name: "Arnaud L.", initials: "AL", role: "Résident" }, { text: "Prise en charge après un concert à la Seine Musicale. Le chauffeur est arrivé en 5 minutes sur le parvis de l'Île Seguin. Très pratique.", name: "Hélène D.", initials: "HD", role: "Résident" }], [{ question: "Peut-on visiter la Manufacture de Sèvres ?", answer: "Oui, la Manufacture nationale de porcelaine et le Musée de la Céramique sont ouverts au public (7 €, gratuit le 1er dimanche). Ateliers de décor, tournage et émaillage." }, { question: "Le taxi prend-il en charge à la Seine Musicale ?", answer: "Oui, prise en charge sur le parvis de la Seine Musicale côté Sèvres (Île Seguin). Idéal après un concert ou un spectacle." }], 6, "14 min"),

  city("Ville-d'Avray", "ville-d-avray", 48.8262, 2.1878, 11000, ["Étangs de Corot", "Forêt de Fausses-Reposes", "Villa Thiébaut-Sisson", "Résidentiel prisé", "Gare Transilien L"], ["Centre", "Les Étangs", "Le Coteau", "Les Jardies"], [{ from: "Ville-d'Avray", to: "Orly", price: "40-55 €" }, { from: "Ville-d'Avray", to: "CDG", price: "75-95 €" }], ["chaville", "garches"], [{ text: "Ville-d'Avray est un village merveilleux mais mal desservi par les transports. TaxiNeo est devenu indispensable pour nos trajets vers les aéroports.", name: "Dominique R.", initials: "DR", role: "Résident" }, { text: "Chauffeur arrivé en 10 minutes devant les Étangs de Corot. Conduite souple, prix fixe, arrivée à Orly en avance. Parfait.", name: "Brigitte F.", initials: "BF", role: "Résident" }, { text: "Retour de CDG avec toute la famille et les valises. Le van spacieux était parfait. Le chauffeur a trouvé notre petite rue sans difficulté.", name: "Christophe M.", initials: "CM", role: "Résident" }], [{ question: "Le chauffeur connaît-il les rues de Ville-d'Avray ?", answer: "Oui, nos chauffeurs connaissent toutes les rues de Ville-d'Avray, y compris les accès depuis les Étangs de Corot et les quartiers résidentiels les plus discrets." }, { question: "Peut-on se promener aux Étangs de Corot ?", answer: "Oui, les Étangs de Corot sont un site naturel protégé accessible librement. Le sentier fait le tour des deux étangs en 30 minutes avec des vues dignes d'une toile impressionniste." }], 4, "17 min"),
  city("Montrouge", "montrouge", 48.8171, 2.3190, 50000, ["Beffroi de Montrouge", "Porte d'Orléans", "Marché Brossolette"], ["Centre", "Haut-Mesnil", "Plein Sud"], [{ from: "Montrouge", to: "Orly", price: "25-35 €" }, { from: "Montrouge", to: "CDG", price: "55-75 €" }], ["malakoff", "chatillon", "bagneux"], [{ text: "Taxi ponctuel pour mon vol de 6h du matin depuis Orly. Le chauffeur connaissait parfaitement la Porte d'Orléans, aucun détour.", name: "Sophie M.", initials: "SM", role: "Consultante, Montrouge Centre" }, { text: "Retour de CDG après un vol retardé de 2h. Le chauffeur était là, panneau à mon nom. Service impeccable malgré l'heure tardive.", name: "Philippe R.", initials: "PR", role: "Ingénieur, Haut-Mesnil" }, { text: "Je réserve chaque mois pour mes déplacements professionnels. Le Beffroi est mon point de repère pour la prise en charge. Toujours fiable.", name: "Nathalie D.", initials: "ND", role: "Galeriste, Plein Sud" }], [{ question: "Y a-t-il un supplément pour une prise en charge Porte d'Orléans ?", answer: "Non, aucun supplément. La prise en charge est au tarif fixe partout à Montrouge, y compris Porte d'Orléans et ses abords." }, { question: "Peut-on réserver pendant le Salon de Montrouge au Beffroi ?", answer: "Bien sûr. Nous assurons les transferts même pendant les événements au Beffroi. Indiquez simplement l'adresse exacte pour une prise en charge optimale." }], 7, "12 min"),

  city("Malakoff", "malakoff", 48.8191, 2.2981, 31000, ["Tour Malakoff", "Théâtre 71", "Métro 13 Malakoff-Plateau de Vanves"], ["Centre", "Plateau de Vanves", "Tour Malakoff"], [{ from: "Malakoff", to: "Orly", price: "25-35 €" }, { from: "Malakoff", to: "CDG", price: "55-75 €" }], ["montrouge", "vanves", "chatillon"], [{ text: "Après le spectacle au Théâtre 71, le taxi était là en 5 minutes. Confortable et rapide pour rentrer après la représentation.", name: "Isabelle T.", initials: "IT", role: "Abonnée Théâtre 71" }, { text: "Transfert CDG parfait à 4h30 du matin. Le chauffeur est arrivé en avance. Prix fixe respecté, pas de mauvaise surprise.", name: "Yannick B.", initials: "YB", role: "Cadre commercial, Plateau de Vanves" }, { text: "Je vis près de la résidence universitaire et j'utilise TaxiNeo pour mes voyages en famille. Van spacieux, enfants ravis.", name: "Amina K.", initials: "AK", role: "Enseignante, Centre-ville" }], [{ question: "Les taxis desservent-ils la résidence universitaire de Malakoff ?", answer: "Oui, prise en charge directement devant la résidence universitaire. Indiquez l'adresse exacte lors de la réservation." }, { question: "Le Théâtre 71 est-il un bon point de repère pour le chauffeur ?", answer: "Absolument. Le Théâtre 71 est un repère connu de tous les chauffeurs. Vous pouvez aussi indiquer la station métro 13 Malakoff-Plateau de Vanves." }], 6, "13 min"),

  city("Vanves", "vanves", 48.8205, 2.2889, 28000, ["Lycée Michelet", "Parc Frédéric Pic", "Gare Vanves-Malakoff"], ["Centre", "Lycée Michelet", "Plateau"], [{ from: "Vanves", to: "Orly", price: "30-40 €" }, { from: "Vanves", to: "CDG", price: "60-80 €" }], ["malakoff", "chatillon", "clamart"], [{ text: "Vanves est si petite que le chauffeur était chez moi en 3 minutes. Transfert Orly fluide, arrivée bien en avance pour mon vol.", name: "Laurent G.", initials: "LG", role: "Architecte, Centre" }, { text: "Prise en charge impeccable près du lycée Michelet. Le chauffeur connaissait parfaitement les petites rues de Vanves.", name: "Martine F.", initials: "MF", role: "Professeure, Lycée Michelet" }, { text: "Vol de retour de CDG avec 1h de retard. Le chauffeur a attendu sans supplément. Un vrai soulagement après un long voyage.", name: "Benoît C.", initials: "BC", role: "Consultant, Plateau" }], [{ question: "Vanves est-elle vraiment la plus petite commune du 92 ?", answer: "Oui, avec 155 hectares Vanves est la plus petite commune des Hauts-de-Seine. L'avantage : votre chauffeur arrive en quelques minutes depuis n'importe quel point." }, { question: "Peut-on être pris en charge à la gare Vanves-Malakoff ?", answer: "Oui, prise en charge devant la gare Vanves-Malakoff (Transilien N) ou partout dans la commune. Indiquez votre point de rendez-vous." }], 5, "14 min"),

  city("Châtillon", "chatillon", 48.8100, 2.2935, 37000, ["Métro 13 Châtillon-Montrouge", "Fort de Châtillon", "Coulée verte"], ["Centre", "Fort", "Coulée verte"], [{ from: "Châtillon", to: "Orly", price: "25-35 €" }, { from: "Châtillon", to: "CDG", price: "60-80 €" }], ["montrouge", "malakoff", "clamart", "bagneux"], [{ text: "Départ depuis le quartier du Fort pour Orly : 18 minutes chrono. Le chauffeur connaissait le raccourci par l'A86. Impeccable.", name: "Christophe L.", initials: "CL", role: "Ingénieur CEA, Fort" }, { text: "Service fiable pour mes trajets hebdomadaires vers CDG. La facturation pro facilite mes notes de frais.", name: "Sandrine V.", initials: "SV", role: "Directrice marketing, Centre" }, { text: "Prise en charge à la Coulée verte un dimanche matin. Chauffeur ponctuel et sympathique, prix annoncé respecté.", name: "Thomas P.", initials: "TP", role: "Photographe, Coulée verte" }], [{ question: "Le Fort de Châtillon est-il visitable ?", answer: "Le Fort de Châtillon, ancien site du CEA, est partiellement ouvert au public lors des Journées du patrimoine. Nos chauffeurs assurent la prise en charge à proximité." }, { question: "La station Châtillon-Montrouge est-elle un bon point de rendez-vous ?", answer: "Oui, c'est le terminus de la ligne 13, un repère connu de tous les chauffeurs. Vous pouvez y être pris en charge facilement." }], 7, "11 min"),

  city("Clamart", "clamart", 48.8003, 2.2646, 53000, ["Forêt de Meudon", "Hôpital Antoine-Béclère", "Tramway T6"], ["Centre", "Percy", "Jardin parisien", "Forêt"], [{ from: "Clamart", to: "Orly", price: "30-40 €" }, { from: "Clamart", to: "CDG", price: "65-85 €" }], ["chatillon", "vanves", "bagneux"], [{ text: "Habitant près de la forêt de Meudon, le taxi est ma solution pour Orly. 18 minutes, pas de stress, pas de correspondance.", name: "François H.", initials: "FH", role: "Cadre, quartier Forêt" }, { text: "Transfert depuis l'hôpital Béclère après la naissance de notre fille. Chauffeur attentionné, siège bébé disponible.", name: "Marie-Claire J.", initials: "MJ", role: "Jeune maman, Percy" }, { text: "Le T6 ne va pas à Orly. Le taxi est la seule solution directe. Rapport qualité-prix imbattable pour ce trajet.", name: "Alexandre D.", initials: "AD", role: "Enseignant-chercheur, Centre" }], [{ question: "Le taxi peut-il me prendre en charge à l'hôpital Béclère ?", answer: "Oui, prise en charge directement à la sortie de l'hôpital Antoine-Béclère (AP-HP). Indiquez la porte ou le bâtiment lors de la réservation." }, { question: "Le tramway T6 dessert-il Orly ?", answer: "Non, le T6 relie Châtillon-Montrouge à Viroflay. Il n'y a pas de liaison directe Clamart-Orly en transport en commun. Le taxi est la solution la plus rapide (18 min)." }], 8, "10 min"),

  city("Bagneux", "bagneux", 48.7971, 2.3145, 42000, ["Métro 4 prolongé (Barbara)", "Cimetière parisien de Bagneux", "ZAC Victor Hugo"], ["Centre", "Nord rénové", "Victor Hugo", "Sud"], [{ from: "Bagneux", to: "Orly", price: "25-35 €" }, { from: "Bagneux", to: "CDG", price: "60-80 €" }], ["montrouge", "chatillon", "clamart"], [{ text: "Depuis l'arrivée du métro 4 à Bagneux, la ville a changé. Mais pour Orly, rien ne vaut le taxi : 15 minutes sans correspondance.", name: "Rachid A.", initials: "RA", role: "Commerçant, Nord rénové" }, { text: "Prise en charge parfaite près de la station Barbara pour CDG. Le chauffeur a suivi mon vol retour en temps réel. Service au top.", name: "Virginie L.", initials: "VL", role: "Avocate, Victor Hugo" }, { text: "Je vis dans la ZAC Victor Hugo. TaxiNeo est devenu mon réflexe pour les aéroports. Prix fixe, pas de mauvaise surprise.", name: "Karim E.", initials: "KE", role: "Développeur, ZAC Victor Hugo" }], [{ question: "Le métro 4 prolongé dessert-il les aéroports ?", answer: "Non, le métro 4 prolongé (stations Barbara et Bagneux-Lucie Aubrac) relie Bagneux à Paris mais pas aux aéroports. Le taxi reste la liaison la plus directe vers Orly (15 min) et CDG (38 min)." }, { question: "Qui est Barbara, la station de métro ?", answer: "La station Barbara rend hommage à la chanteuse Barbara (1930-1997) qui a vécu à Bagneux. C'est un repère pratique pour la prise en charge taxi." }], 6, "12 min"),
  city("Fontenay-aux-Roses", "fontenay-aux-roses", 48.7896, 2.2915, 24000, ["CEA Paris-Saclay", "Roseraie municipale", "Gare RER B"], ["Centre", "Scarron", "Pervenches"], [{ from: "Fontenay-aux-Roses", to: "Orly", price: "20-30 €" }, { from: "Fontenay-aux-Roses", to: "CDG", price: "65-85 €" }], ["sceaux", "bagneux", "chatenay-malabry"], [{ text: "Taxi réservé à 5h du matin pour un vol à Orly. Le chauffeur était ponctuel devant la maison, trajet rapide par la D906. Impeccable.", name: "Thierry Marchand", initials: "TM", role: "Chercheur au CEA" }, { text: "Retour d'Orly à Fontenay en fin de soirée. Le chauffeur attendait aux arrivées, très aimable. Prix fixe sans surprise.", name: "Nathalie Lefèvre", initials: "NL", role: "Habitante du quartier Scarron" }, { text: "Service fiable pour mes déplacements professionnels fréquents vers CDG. Réservation simple, chauffeurs ponctuels, tarif fixe.", name: "Éric Dumont", initials: "ED", role: "Ingénieur nucléaire" }], [{ question: "La Roseraie de Fontenay-aux-Roses est-elle ouverte au public ?", answer: "Oui, la Roseraie municipale est gratuite et ouverte d'avril à octobre. Plus de 3 000 rosiers de 300 variétés." }, { question: "Le CEA emploie combien de personnes à Fontenay ?", answer: "Le site historique du CEA Paris-Saclay à Fontenay-aux-Roses emploie environ 5 000 chercheurs et ingénieurs." }], 5, "15 min"),

  city("Sceaux", "sceaux", 48.7766, 2.2935, 20000, ["Parc de Sceaux", "Lycée Lakanal", "Gare RER B", "Hanami cerisiers", "Marché historique"], ["Centre", "Blagis", "Robinson"], [{ from: "Sceaux", to: "Orly", price: "20-28 €" }, { from: "Sceaux", to: "CDG", price: "70-90 €" }], ["bourg-la-reine", "antony", "chatenay-malabry", "fontenay-aux-roses"], [{ text: "Transfert vers Orly avec deux grosses valises. Le chauffeur a tout chargé sans supplément. 15 min chrono, parfait.", name: "Catherine Girard", initials: "CG", role: "Habitante du centre de Sceaux" }, { text: "Nous utilisons TaxiNeo pour chaque départ en vacances depuis Sceaux. Le van est parfait pour notre famille de 5.", name: "François Moreau", initials: "FM", role: "Père de famille, quartier des Blagis" }, { text: "Après le Hanami dans le Parc de Sceaux, taxi rapide vers CDG pour un vol de nuit. Service impeccable même le dimanche.", name: "Yuki Tanaka", initials: "YT", role: "Touriste japonaise" }], [{ question: "Quand a lieu le Hanami au Parc de Sceaux ?", answer: "Le Hanami (floraison des cerisiers japonais) a lieu début avril. Des dizaines de milliers de visiteurs pique-niquent sous les cerisiers en fleurs." }, { question: "Le Lycée Lakanal est-il un lycée public ?", answer: "Oui, le Lycée Lakanal (fondé en 1885) est un établissement public réputé pour ses classes préparatoires aux grandes écoles." }], 5, "14 min"),

  city("Bourg-la-Reine", "bourg-la-reine", 48.7800, 2.3160, 22000, ["Gare RER B (nœud)", "Maison André Derain", "Marché de Bourg-la-Reine", "Proximité Parc de Sceaux"], ["Centre", "Bas de Bourg-la-Reine", "Fontenay"], [{ from: "Bourg-la-Reine", to: "Orly", price: "18-28 €" }, { from: "Bourg-la-Reine", to: "CDG", price: "65-90 €" }], ["sceaux", "bagneux", "antony", "fontenay-aux-roses"], [{ text: "Bourg-la-Reine est très bien situé pour Orly. 14 minutes en taxi, c'est imbattable. Tarif fixe et chauffeur ponctuel.", name: "Philippe Renault", initials: "PR", role: "Cadre, quartier Centre" }, { text: "J'habite près de la gare RER mais pour CDG avec des valises, le taxi est bien mieux. Confortable et direct.", name: "Isabelle Martin", initials: "IM", role: "Voyageuse fréquente" }, { text: "Retour tardif de CDG un dimanche soir. Le chauffeur suivait mon vol et attendait aux arrivées. Très rassurant.", name: "Marc Dubois", initials: "MD", role: "Consultant international" }], [{ question: "Qui était André Derain ?", answer: "André Derain (1880-1954) fut l'un des fondateurs du fauvisme. Il vécut à Bourg-la-Reine de 1935 à sa mort. Sa maison-atelier est un lieu de mémoire." }, { question: "Pourquoi la gare de Bourg-la-Reine est-elle importante ?", answer: "C'est un nœud ferroviaire du RER B où la ligne se dédouble vers Robinson et Saint-Rémy-lès-Chevreuse." }], 6, "12 min"),

  city("Le Plessis-Robinson", "le-plessis-robinson", 48.7813, 2.2615, 29000, ["Cité-jardin Art Déco", "Étang Colbert", "Forêt de Verrières", "Cœur de Ville"], ["Cité-jardin", "Cœur de Ville", "Joliot-Curie"], [{ from: "Le Plessis-Robinson", to: "Orly", price: "22-32 €" }, { from: "Le Plessis-Robinson", to: "CDG", price: "65-85 €" }], ["sceaux", "chatenay-malabry", "clamart", "fontenay-aux-roses"], [{ text: "Taxi depuis la Cité-jardin vers Orly. Le chauffeur connaissait parfaitement les petites rues du quartier. Excellent service.", name: "Dominique Petit", initials: "DP", role: "Résident de la Cité-jardin" }, { text: "Pas de RER au Plessis, donc le taxi est indispensable pour l'aéroport. TaxiNeo est toujours fiable et ponctuel.", name: "Sandrine Leroy", initials: "SL", role: "Habitante du Cœur de Ville" }, { text: "Van réservé pour 5 personnes + bagages vers CDG. Tout le monde à l'aise, prix fixe, chauffeur sympathique.", name: "Jean-Pierre Boucher", initials: "JPB", role: "Chef de famille" }], [{ question: "Qu'est-ce que la Cité-jardin du Plessis-Robinson ?", answer: "Ensemble de logements sociaux Art Déco construit entre 1924 et 1939, classé monument historique. Rues aux noms de fleurs, jardins partagés, façades ornementales." }, { question: "Peut-on se promener autour de l'Étang Colbert ?", answer: "Oui, l'Étang Colbert est bordé de sentiers de promenade ouverts à tous. Cadre bucolique au cœur de la ville." }], 4, "16 min"),

  city("Châtenay-Malabry", "chatenay-malabry", 48.7651, 2.2669, 34000, ["Maison de Chateaubriand", "Arboretum de la Vallée-aux-Loups", "Coulée verte", "Ancien campus École Centrale"], ["Vallée-aux-Loups", "Butte Rouge", "Centre"], [{ from: "Châtenay-Malabry", to: "Orly", price: "22-30 €" }, { from: "Châtenay-Malabry", to: "CDG", price: "68-90 €" }], ["le-plessis-robinson", "sceaux", "antony", "bourg-la-reine"], [{ text: "Taxi pris devant la Maison de Chateaubriand après une visite. Direction Orly en 15 min. Service parfait.", name: "Claire Beaumont", initials: "CB", role: "Touriste littéraire" }, { text: "Nous habitons quartier Butte Rouge. Le taxi nous prend à la porte et nous emmène à CDG sans stress. Indispensable.", name: "Rachid Benmoussa", initials: "RB", role: "Résident Butte Rouge" }, { text: "L'Arboretum est magnifique et le taxi TaxiNeo est le complément idéal pour rejoindre l'aéroport après une balade.", name: "Monique Vasseur", initials: "MV", role: "Botaniste amateur" }], [{ question: "Peut-on visiter la Maison de Chateaubriand ?", answer: "Oui, la Maison de Chateaubriand est ouverte toute l'année. 7 € plein tarif, gratuit le 1er dimanche du mois. Expositions littéraires régulières." }, { question: "L'Arboretum de la Vallée-aux-Loups est-il gratuit ?", answer: "Oui, l'Arboretum est gratuit et ouvert toute l'année. Plus de 500 espèces d'arbres sur 12,7 hectares." }], 7, "13 min"),
];

// ─── Per-city unique content overrides ──────────────────────

const cityContent: Record<string, { introFr: string; introEn: string; descriptionFr: string; descriptionEn: string; metaDescriptionFr: string; metaDescriptionEn: string; heroSubtitleFr: string; heroSubtitleEn: string; whyUsFr: { title: string; desc: string }[]; whyUsEn: { title: string; desc: string }[] }> = {
  paris: {
    introFr: "Paris, capitale mondiale du tourisme et centre économique majeur, génère des millions de déplacements quotidiens entre ses 20 arrondissements, ses 6 grandes gares (Gare du Nord, Gare de Lyon, Montparnasse, Saint-Lazare, Gare de l'Est, Austerlitz) et ses 2 aéroports internationaux. TaxiNeo vous connecte avec les meilleurs taxis parisiens pour tous vos trajets : transferts aéroport CDG et Orly au forfait réglementé, courses vers La Défense, navettes médicales ou sorties nocturnes.",
    introEn: "Paris, the world tourism capital and major economic hub, generates millions of daily trips between its 20 arrondissements, 6 major stations (Gare du Nord, Gare de Lyon, Montparnasse, Saint-Lazare, Gare de l'Est, Austerlitz) and 2 international airports. TaxiNeo connects you with the best Parisian taxis for all your journeys: regulated flat-rate CDG and Orly airport transfers, rides to La Défense, medical shuttles or late-night outings.",
    descriptionFr: "Avec TaxiNeo à Paris, profitez de l'accès exclusif aux couloirs de bus qui permet à nos chauffeurs de traverser la capitale bien plus rapidement qu'un VTC classique. Forfaits aéroport réglementés (56 € rive droite vers CDG, 36 € vers Orly), paiement par carte garanti, et chauffeurs qui connaissent chaque raccourci parisien. Réservez en 30 secondes et recevez une estimation de prix avant de confirmer.",
    descriptionEn: "With TaxiNeo in Paris, enjoy exclusive bus lane access that lets our drivers cross the capital much faster than a standard rideshare. Regulated airport flat rates (€56 right bank to CDG, €36 to Orly), guaranteed card payment, and drivers who know every Parisian shortcut. Book in 30 seconds and get a price estimate before confirming.",
    metaDescriptionFr: "Taxi à Paris : forfait aéroport CDG dès 56 €, Orly dès 36 €. Réservation en ligne 24h/24, accès voies de bus, 20 000 chauffeurs agréés. Réservez maintenant.",
    metaDescriptionEn: "Taxi in Paris: flat-rate to CDG airport from €56, Orly from €36. Book online 24/7 with bus lane access and 20,000 licensed drivers. Reserve on TaxiNeo.",
    heroSubtitleFr: "Capitale mondiale du tourisme, Paris compte 6 grandes gares et 2 aéroports internationaux. Réservez un taxi parisien en 30 secondes : forfait aéroport réglementé, accès exclusif aux couloirs de bus et chauffeurs connaissant chaque raccourci de la ville.",
    heroSubtitleEn: "The world's tourism capital, Paris has 6 major train stations and 2 international airports. Book a Parisian taxi in 30 seconds: regulated airport flat rate, exclusive bus lane access and drivers who know every shortcut in the city.",
    whyUsFr: [
      { title: "Accès couloirs de bus parisiens", desc: "Nos taxis empruntent les 60 km de voies réservées sur les grands axes (Rivoli, Champs-Élysées, boulevards des Maréchaux) pour traverser Paris 30 % plus vite qu'un VTC classique." },
      { title: "Experts des 20 arrondissements", desc: "Chauffeurs formés à la géographie parisienne : raccourcis Montmartre–Bastille, accès Pitié-Salpêtrière par le quai, itinéraires alternatifs pendant les manifestations et événements." },
      { title: "Forfait aéroport réglementé CDG/Orly", desc: "Tarif fixe 56 € rive droite ou 65 € rive gauche vers CDG, 36 € ou 45 € vers Orly. Prix garanti par arrêté préfectoral, sans surcharge ni tarification dynamique." },
    ],
    whyUsEn: [
      { title: "Paris bus lane access", desc: "Our taxis use 60 km of reserved lanes on major roads (Rivoli, Champs-Élysées, boulevards des Maréchaux) to cross Paris 30% faster than a standard rideshare." },
      { title: "20-arrondissement experts", desc: "Drivers trained in Parisian geography: Montmartre–Bastille shortcuts, Pitié-Salpêtrière access via the quay, alternative routes during demonstrations and events." },
      { title: "Regulated CDG/Orly flat rate", desc: "Fixed fare €56 right bank or €65 left bank to CDG, €36 or €45 to Orly. Price guaranteed by prefectural order, no surge pricing." },
    ],
  },
  marseille: {
    introFr: "Deuxième ville de France, Marseille est un carrefour méditerranéen dynamique entre le Vieux-Port, le quartier d'affaires Euroméditerranée, l'aéroport Marseille-Provence et la gare Saint-Charles. TaxiNeo vous met en relation avec des chauffeurs marseillais expérimentés pour vos transferts aéroport, vos déplacements vers les Calanques, le Stade Vélodrome ou les hôpitaux de la Timone et Nord.",
    introEn: "France's second largest city, Marseille is a dynamic Mediterranean crossroads between the Vieux-Port, the Euroméditerranée business district, Marseille-Provence Airport and Gare Saint-Charles. TaxiNeo connects you with experienced Marseille drivers for airport transfers, trips to the Calanques, the Stade Vélodrome or the Timone and Nord hospitals.",
    descriptionFr: "Nos chauffeurs à Marseille connaissent parfaitement la topographie unique de la ville, ses quartiers vallonnés et les itinéraires les plus efficaces pour éviter les embouteillages sur l'autoroute du Littoral et la Corniche. Tarifs réglementés, forfait aéroport Provence compétitif et service disponible jusque dans les quartiers Nord et les calanques les plus reculées.",
    descriptionEn: "Our drivers in Marseille perfectly know the city's unique topography, its hilly neighbourhoods and the most efficient routes to avoid traffic on the Autoroute du Littoral and the Corniche. Regulated fares, competitive Provence airport flat rate and service available all the way to the northern districts and the most remote calanques.",
    metaDescriptionFr: "Taxi à Marseille : transfert aéroport Provence, Vieux-Port, Calanques. Tarifs réglementés, chauffeurs experts du réseau local. Réservation TaxiNeo 7j/7.",
    metaDescriptionEn: "Taxi in Marseille: Provence airport transfers, Vieux-Port rides, Calanques trips. Regulated fares, expert local drivers. Book instantly on TaxiNeo 24/7.",
    heroSubtitleFr: "Deuxième ville de France et carrefour méditerranéen, Marseille relie le Vieux-Port à l'aéroport Provence et à la gare Saint-Charles. Nos chauffeurs maîtrisent la topographie vallonnée de la cité phocéenne pour des transferts rapides vers les Calanques, le Stade Vélodrome et Euroméditerranée.",
    heroSubtitleEn: "France's second city and Mediterranean crossroads, Marseille connects the Vieux-Port to Provence Airport and Gare Saint-Charles. Our drivers master the hilly terrain of the Phocaean city for swift transfers to the Calanques, Stade Vélodrome and Euroméditerranée.",
    whyUsFr: [
      { title: "Navette aéroport Marignane express", desc: "Transfert aéroport Marseille-Provence via l'autoroute A7 en 25 minutes depuis le Vieux-Port. Forfait compétitif garanti, prise en charge directe au terminal et suivi des vols en temps réel." },
      { title: "Maîtrise du relief marseillais", desc: "Nos chauffeurs connaissent la topographie vallonnée de Marseille : raccourcis entre la Joliette et la Corniche Kennedy, accès rapides à la Timone et itinéraires hors embouteillages du Littoral." },
      { title: "Desserte Calanques et îles du Frioul", desc: "Transport vers les départs de randonnée des Calanques (Luminy, Sormiou) et vers l'embarcadère du Vieux-Port pour le Frioul. Chauffeurs disponibles au retour sans réservation supplémentaire." },
    ],
    whyUsEn: [
      { title: "Express Marignane airport shuttle", desc: "Marseille-Provence Airport transfer via the A7 motorway in 25 minutes from the Vieux-Port. Guaranteed competitive flat rate, direct terminal pickup and real-time flight tracking." },
      { title: "Mastery of Marseille's terrain", desc: "Our drivers know Marseille's hilly topography: shortcuts between La Joliette and Corniche Kennedy, fast access to La Timone and routes avoiding Littoral traffic jams." },
      { title: "Calanques & Frioul islands service", desc: "Transport to Calanques hiking trailheads (Luminy, Sormiou) and to the Vieux-Port pier for the Frioul Islands. Drivers available for return trips without extra booking." },
    ],
  },
  lyon: {
    introFr: "Troisième ville de France et capitale de la gastronomie, Lyon est un pôle économique majeur articulé autour du quartier d'affaires de la Part-Dieu, du quartier Confluence, et de l'aéroport Lyon-Saint Exupéry. TaxiNeo dessert l'ensemble de la métropole lyonnaise : transferts vers Saint-Exupéry, navettes Part-Dieu – Perrache, courses vers Eurexpo ou les Hôpitaux Est.",
    introEn: "France's third largest city and gastronomy capital, Lyon is a major economic hub centred around the Part-Dieu business district, the Confluence quarter, and Lyon-Saint Exupéry Airport. TaxiNeo serves the entire Lyon metropolitan area: Saint-Exupéry transfers, Part-Dieu – Perrache shuttles, rides to Eurexpo or the Eastern Hospitals.",
    descriptionFr: "À Lyon, nos chauffeurs partenaires empruntent les voies de bus sur les grands axes (cours Gambetta, rue de la République) pour vous faire gagner un temps précieux. Que ce soit pendant la Fête des Lumières, les salons professionnels à Eurexpo ou pour rejoindre le campus LyonTech, TaxiNeo garantit un service fiable avec prix fixe annoncé avant réservation.",
    descriptionEn: "In Lyon, our partner drivers use bus lanes on major roads (Cours Gambetta, Rue de la République) to save you valuable time. Whether during the Festival of Lights, trade shows at Eurexpo or getting to the LyonTech campus, TaxiNeo guarantees reliable service with a fixed price quoted before booking.",
    metaDescriptionFr: "Taxi à Lyon : transfert aéroport Saint-Exupéry, gare Part-Dieu, Eurexpo. Prix fixe garanti avant réservation, voies de bus, chauffeurs. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Lyon: Saint-Exupéry airport transfers, Part-Dieu station, Eurexpo. Fixed price before booking, bus lane access, local drivers. Book on TaxiNeo 24/7.",
    heroSubtitleFr: "Capitale de la gastronomie et troisième métropole française, Lyon est articulée autour de la Part-Dieu et de l'aéroport Saint-Exupéry. Profitez de chauffeurs empruntant les voies de bus pour un gain de temps précieux lors de vos trajets professionnels ou pendant la Fête des Lumières.",
    heroSubtitleEn: "Gastronomy capital and France's third-largest metropolis, Lyon revolves around Part-Dieu and Saint-Exupéry Airport. Enjoy drivers using bus lanes for precious time savings on business trips or during the Festival of Lights.",
    whyUsFr: [
      { title: "Voies de bus Presqu'île et Part-Dieu", desc: "Nos taxis empruntent les couloirs réservés du cours Gambetta, de la rue de la République et du boulevard Vivier-Merle pour gagner 20 minutes sur les trajets Part-Dieu – Bellecour aux heures de pointe." },
      { title: "Spécialistes Rhône-Alpes et Beaujolais", desc: "Chauffeurs connaissant les itinéraires bis entre Vieux-Lyon et Confluence, les accès rapides aux Hôpitaux Est via le périphérique Laurent-Bonnevay et les routes du vignoble beaujolais." },
      { title: "Forfait Saint-Exupéry garanti", desc: "Transfert aéroport Lyon-Saint Exupéry en 30 minutes depuis la Part-Dieu via l'A43. Tarif fixe réglementé, prise en charge au terminal et suivi des retards de vol inclus." },
    ],
    whyUsEn: [
      { title: "Presqu'île & Part-Dieu bus lanes", desc: "Our taxis use reserved lanes on Cours Gambetta, Rue de la République and Boulevard Vivier-Merle to save 20 minutes on Part-Dieu – Bellecour trips during rush hour." },
      { title: "Rhône-Alpes & Beaujolais specialists", desc: "Drivers who know back routes between Vieux-Lyon and Confluence, fast access to the Eastern Hospitals via the Laurent-Bonnevay ring road, and Beaujolais vineyard routes." },
      { title: "Guaranteed Saint-Exupéry flat rate", desc: "Lyon-Saint Exupéry Airport transfer in 30 minutes from Part-Dieu via the A43. Regulated fixed fare, terminal pickup and flight delay tracking included." },
    ],
  },
  toulouse: {
    introFr: "Toulouse, capitale européenne de l'aéronautique avec Airbus et le CNES, est une métropole en pleine croissance desservie par l'aéroport Toulouse-Blagnac et la gare Matabiau. TaxiNeo couvre l'ensemble de l'agglomération toulousaine : transferts aéroport, navettes vers le centre de congrès, déplacements vers les sites industriels d'Airbus à Blagnac et Colomiers, ou courses vers le Capitole.",
    introEn: "Toulouse, the European aerospace capital home to Airbus and CNES, is a fast-growing metropolis served by Toulouse-Blagnac Airport and Gare Matabiau. TaxiNeo covers the entire Toulouse area: airport transfers, congress centre shuttles, rides to Airbus industrial sites in Blagnac and Colomiers, or trips to the Capitole.",
    descriptionFr: "La ville rose bénéficie d'un réseau de taxis TaxiNeo couvrant tous les quartiers, de Saint-Cyprien au Mirail en passant par les Carmes et Compans-Caffarelli. Nos chauffeurs maîtrisent les périphériques et connaissent les alternatives quand le métro ne suffit pas. Prix fixe garanti même les soirs de match au Stadium.",
    descriptionEn: "The Pink City benefits from a TaxiNeo taxi network covering all districts, from Saint-Cyprien to Mirail via Les Carmes and Compans-Caffarelli. Our drivers master the ring roads and know alternatives when the metro isn't enough. Fixed price guaranteed even on match nights at the Stadium.",
    metaDescriptionFr: "Taxi à Toulouse : transfert aéroport Blagnac, Capitole, sites Airbus. Forfait garanti, chauffeurs disponibles jour et nuit. Réservez sur TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Toulouse: Blagnac airport transfer, Capitole, Airbus sites. Guaranteed flat rate, drivers available around the clock. Book your ride on TaxiNeo.",
    heroSubtitleFr: "Capitale européenne de l'aéronautique, Toulouse dessert Airbus, le Capitole et l'aéroport Blagnac. Réservez un taxi toulousain à prix fixe garanti pour vos déplacements professionnels, vos transferts gare Matabiau ou vos soirées de match au Stadium.",
    heroSubtitleEn: "Europe's aerospace capital, Toulouse serves Airbus, the Capitole and Blagnac Airport. Book a Toulouse taxi at a guaranteed fixed price for business trips, Gare Matabiau transfers or match nights at the Stadium.",
    whyUsFr: [
      { title: "Liaison directe Blagnac–Matabiau", desc: "Transfert aéroport Toulouse-Blagnac vers la gare Matabiau en 20 minutes via la rocade Arc-en-Ciel, sans détour par le centre-ville. Forfait fixe garanti, prise en charge au terminal." },
      { title: "Experts quartiers Airbus et CNES", desc: "Chauffeurs maîtrisant les accès aux sites industriels de Blagnac, Colomiers et le Spatial à Toulouse : badges de sécurité, points de dépose et créneaux d'équipe connus." },
      { title: "Service renforcé soirs de match", desc: "Disponibilité garantie les soirs de match au Stadium de Toulouse (33 000 places). Itinéraires d'évacuation via les allées Jules-Guesde et le pont Saint-Michel pour éviter la foule." },
    ],
    whyUsEn: [
      { title: "Direct Blagnac–Matabiau link", desc: "Toulouse-Blagnac Airport to Gare Matabiau transfer in 20 minutes via the Arc-en-Ciel ring road, bypassing the city centre. Guaranteed fixed fare, terminal pickup." },
      { title: "Airbus & CNES district experts", desc: "Drivers who know access points to Blagnac and Colomiers industrial sites and the Toulouse Space Centre: security badge zones, drop-off points and shift schedules." },
      { title: "Match-night enhanced service", desc: "Guaranteed availability on match nights at the Stadium de Toulouse (33,000 seats). Exit routes via Allées Jules-Guesde and Pont Saint-Michel to avoid crowds." },
    ],
  },
  nice: {
    introFr: "Nice, joyau de la Côte d'Azur et cinquième ville de France, accueille chaque année des millions de touristes et de voyageurs d'affaires via l'aéroport Nice Côte d'Azur, le troisième de France. TaxiNeo propose des taxis professionnels pour vos transferts aéroport, vos déplacements vers Monaco, Cannes ou Antibes, et vos courses le long de la Promenade des Anglais.",
    introEn: "Nice, jewel of the French Riviera and France's fifth largest city, welcomes millions of tourists and business travellers each year through Nice Côte d'Azur Airport, the third busiest in France. TaxiNeo offers professional taxis for airport transfers, trips to Monaco, Cannes or Antibes, and rides along the Promenade des Anglais.",
    descriptionFr: "Sur la Côte d'Azur, les prix de taxi sont réglementés et bien plus avantageux que les VTC, surtout en haute saison estivale quand la tarification dynamique explose. Nos chauffeurs niçois connaissent chaque raccourci entre l'aéroport, le Vieux Nice, le port et les collines de Cimiez. Service renforcé pendant le Carnaval, le Festival de Jazz et le Grand Prix de Monaco.",
    descriptionEn: "On the French Riviera, taxi fares are regulated and much more competitive than rideshare services, especially in peak summer season when surge pricing soars. Our Nice drivers know every shortcut between the airport, Old Nice, the port and the Cimiez hills. Enhanced service during Carnival, the Jazz Festival and the Monaco Grand Prix.",
    metaDescriptionFr: "Taxi à Nice : transfert aéroport Côte d'Azur, Promenade des Anglais, Monaco, Cannes. Tarifs réglementés sans majoration estivale. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Nice: Côte d'Azur airport transfer to Monaco, Cannes and Promenade. Regulated fares with no summer surcharge. Book online 24/7 on TaxiNeo today.",
    heroSubtitleFr: "Joyau de la Côte d'Azur et 3e aéroport de France, Nice accueille des millions de visiteurs chaque année. Profitez de tarifs taxi réglementés sans majoration dynamique estivale pour vos transferts aéroport, vos courses vers Monaco ou vos soirées sur la Promenade des Anglais.",
    heroSubtitleEn: "Jewel of the French Riviera and France's 3rd busiest airport, Nice welcomes millions of visitors yearly. Enjoy regulated taxi fares with no summer surge pricing for airport transfers, trips to Monaco or evenings on the Promenade des Anglais.",
    whyUsFr: [
      { title: "Transfert aéroport Côte d'Azur optimisé", desc: "Aéroport Nice Côte d'Azur à 7 km du centre-ville : nos chauffeurs empruntent la Promenade des Anglais ou la voie Mathis pour rejoindre le terminal en 15 minutes, même en haute saison." },
      { title: "Connaissance Cimiez–Vieux Nice–Port", desc: "Chauffeurs maîtrisant les pentes de Cimiez, les ruelles piétonnes du Vieux-Nice et les accès du port Lympia. Itinéraires alternatifs lors du Carnaval ou du Festival de Jazz." },
      { title: "Navettes Monaco et Cannes à tarif fixe", desc: "Nice – Monaco en 30 minutes via la Basse Corniche, Nice – Cannes en 35 minutes par l'A8. Tarifs réglementés sans majoration saisonnière ni tarification dynamique estivale." },
    ],
    whyUsEn: [
      { title: "Optimised Côte d'Azur airport transfer", desc: "Nice Côte d'Azur Airport just 7 km from the city centre: our drivers use the Promenade des Anglais or Voie Mathis to reach the terminal in 15 minutes, even in peak season." },
      { title: "Cimiez–Old Nice–Port expertise", desc: "Drivers who master the Cimiez slopes, pedestrianised Old Nice lanes and Lympia port access points. Alternative routes during Carnival or the Jazz Festival." },
      { title: "Monaco & Cannes fixed-rate shuttles", desc: "Nice – Monaco in 30 minutes via the Basse Corniche, Nice – Cannes in 35 minutes on the A8. Regulated fares with no seasonal surcharge or summer surge pricing." },
    ],
  },
  nantes: {
    introFr: "Nantes, métropole de l'Ouest et sixième ville de France, rayonne autour de sa gare TGV (à 2h15 de Paris), de l'aéroport Nantes-Atlantique et du quartier d'affaires Euronantes. TaxiNeo dessert toute l'agglomération nantaise : transferts aéroport, courses vers le CHU, le campus universitaire, le Zénith ou le parc des expositions de la Beaujoire.",
    introEn: "Nantes, western France's metropolis and sixth largest city, revolves around its TGV station (2h15 from Paris), Nantes-Atlantique Airport and the Euronantes business district. TaxiNeo serves the entire Nantes area: airport transfers, rides to the university hospital, campus, Zénith arena or the Beaujoire exhibition centre.",
    descriptionFr: "Capitale verte de l'Europe, Nantes est une ville à taille humaine où nos chauffeurs circulent efficacement grâce aux voies réservées le long du tramway. TaxiNeo couvre aussi bien l'île de Nantes que les communes limitrophes (Rezé, Saint-Herblain, Orvault). Forfait aéroport Atlantique compétitif et service garanti même pendant le festival Voyage à Nantes.",
    descriptionEn: "Europe's green capital, Nantes is a human-scale city where our drivers navigate efficiently using reserved lanes along the tramway. TaxiNeo covers both the Île de Nantes and surrounding communes (Rezé, Saint-Herblain, Orvault). Competitive Atlantique airport flat rate and guaranteed service even during the Voyage à Nantes festival.",
    metaDescriptionFr: "Taxi à Nantes : transfert aéroport Atlantique, gare TGV, quartier Euronantes. Forfait compétitif, voies réservées tramway. Réservez sur TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Nantes: Atlantique airport transfer, TGV station, Euronantes district. Competitive flat rate, reserved tramway lanes. Book now on TaxiNeo 24/7.",
    heroSubtitleFr: "Métropole de l'Ouest à 2h15 de Paris en TGV, Nantes rayonne entre l'aéroport Atlantique, Euronantes et l'île de Nantes. Nos chauffeurs circulent via les voies réservées du tramway pour des trajets rapides vers le CHU, le Zénith ou la Beaujoire.",
    heroSubtitleEn: "Western France's metropolis, 2h15 from Paris by TGV, Nantes revolves around Atlantique Airport, Euronantes and the Île de Nantes. Our drivers use tramway reserved lanes for fast rides to the university hospital, Zénith arena or Beaujoire.",
    whyUsFr: [
      { title: "Voies réservées tramway nantais", desc: "Nos taxis circulent sur les voies parallèles au tramway le long du cours des 50-Otages et du boulevard de Stalingrad pour rejoindre Commerce, Gare Sud ou l'Île de Nantes en un temps record." },
      { title: "Experts île de Nantes–Rezé–Orvault", desc: "Chauffeurs connaissant l'agglomération nantaise : accès rapide au CHU Hôtel-Dieu, au quartier Euronantes, aux Machines de l'Île et aux communes de Rezé et Saint-Herblain." },
      { title: "Forfait aéroport Atlantique compétitif", desc: "Transfert aéroport Nantes-Atlantique en 20 minutes depuis le centre via le périphérique sud. Tarif fixe préfectoral, suivi des vols et prise en charge au terminal garantie." },
    ],
    whyUsEn: [
      { title: "Nantes tramway reserved lanes", desc: "Our taxis use lanes parallel to the tramway along Cours des 50-Otages and Boulevard de Stalingrad to reach Commerce, Gare Sud or the Île de Nantes in record time." },
      { title: "Île de Nantes–Rezé–Orvault experts", desc: "Drivers who know the Nantes area: fast access to Hôtel-Dieu University Hospital, the Euronantes district, Les Machines de l'Île and the communes of Rezé and Saint-Herblain." },
      { title: "Competitive Atlantique airport flat rate", desc: "Nantes-Atlantique Airport transfer in 20 minutes from the centre via the southern ring road. Fixed prefectural fare, flight tracking and guaranteed terminal pickup." },
    ],
  },
  montpellier: {
    introFr: "Montpellier, ville universitaire et technologique du sud de la France, connaît une croissance démographique parmi les plus fortes d'Europe. Desservie par l'aéroport Montpellier-Méditerranée et la gare Saint-Roch, TaxiNeo assure vos transferts aéroport, vos courses vers les hôpitaux (Lapeyronie, Arnaud de Villeneuve), le quartier Antigone ou le Parc des Expositions.",
    introEn: "Montpellier, a university and tech city in southern France, has one of Europe's fastest-growing populations. Served by Montpellier-Méditerranée Airport and Gare Saint-Roch, TaxiNeo handles your airport transfers, rides to hospitals (Lapeyronie, Arnaud de Villeneuve), the Antigone district or the Exhibition Centre.",
    descriptionFr: "Avec un réseau de tramway étendu mais des zones mal couvertes en périphérie, le taxi reste indispensable à Montpellier. Nos chauffeurs connaissent les raccourcis entre l'Écusson, la Mosson et les plages de Palavas. Tarifs préfectoraux sans surprise et service renforcé pendant le festival de Radio France et les rentrées universitaires.",
    descriptionEn: "With an extensive tramway network but underserved peripheral areas, taxis remain essential in Montpellier. Our drivers know the shortcuts between L'Écusson, La Mosson and the Palavas beaches. Regulated fares with no surprises and enhanced service during the Radio France festival and university terms.",
    metaDescriptionFr: "Taxi à Montpellier : aéroport Méditerranée, centre Écusson, plages de Palavas. Tarifs préfectoraux, chauffeurs disponibles 7j/7. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Montpellier: Méditerranée airport, Écusson district, Palavas beaches. Prefectural regulated fares, drivers available 7 days a week. Book on TaxiNeo.",
    heroSubtitleFr: "Ville universitaire en plein essor au bord de la Méditerranée, Montpellier relie l'aéroport Méditerranée, la gare Saint-Roch et les plages de Palavas. Le taxi reste indispensable pour les quartiers périphériques mal desservis. Tarifs préfectoraux garantis sans surprise.",
    heroSubtitleEn: "A booming university city on the Mediterranean, Montpellier connects Méditerranée Airport, Gare Saint-Roch and the Palavas beaches. Taxis remain essential for underserved suburban areas. Guaranteed prefectural fares with no surprises.",
    whyUsFr: [
      { title: "Raccourcis Écusson–Mosson–Palavas", desc: "Nos chauffeurs empruntent les itinéraires bis entre l'Écusson médiéval, le quartier Antigone et les plages de Palavas-les-Flots (12 km) en évitant la congestion de la route de la Mer." },
      { title: "Couverture campus et hôpitaux", desc: "Service dédié aux CHU Lapeyronie et Arnaud de Villeneuve, à la faculté de médecine et au campus Richter. Prise en charge aux urgences avec temps d'attente minimal." },
      { title: "Transfert aéroport Méditerranée rapide", desc: "Aéroport Montpellier-Méditerranée à 8 km du centre via la D66. Transfert en 15 minutes à tarif préfectoral fixe, suivi des retards de vol et accueil au terminal." },
    ],
    whyUsEn: [
      { title: "Écusson–Mosson–Palavas shortcuts", desc: "Our drivers use back routes between the medieval Écusson, the Antigone quarter and the Palavas-les-Flots beaches (12 km), avoiding congestion on the Route de la Mer." },
      { title: "Campus & hospital coverage", desc: "Dedicated service to Lapeyronie and Arnaud de Villeneuve university hospitals, the medical school and the Richter campus. Emergency department pickups with minimal wait time." },
      { title: "Fast Méditerranée airport transfer", desc: "Montpellier-Méditerranée Airport 8 km from the centre via the D66. Transfer in 15 minutes at a fixed prefectural rate, flight delay tracking and terminal meet-and-greet." },
    ],
  },
  strasbourg: {
    introFr: "Strasbourg, capitale européenne et siège du Parlement européen, est un carrefour international à la frontière franco-allemande. Desservie par l'aéroport de Strasbourg-Entzheim, la gare TGV et la gare routière internationale, TaxiNeo propose des taxis pour vos déplacements vers les institutions européennes, l'hôpital universitaire, le quartier d'affaires Wacken et la Petite France.",
    introEn: "Strasbourg, European capital and seat of the European Parliament, is an international crossroads on the Franco-German border. Served by Strasbourg-Entzheim Airport, the TGV station and the international coach terminal, TaxiNeo offers taxis for trips to European institutions, the university hospital, the Wacken business district and Petite France.",
    descriptionFr: "Ville transfrontalière, Strasbourg voit transiter quotidiennement des milliers de navetteurs vers Kehl et le Bade-Wurtemberg. Nos chauffeurs assurent aussi les transferts vers l'aéroport de Baden-Baden et la gare de Kehl. Service multilingue (français, allemand, anglais) et couverture de toute l'Eurométropole, y compris Schiltigheim, Illkirch et Lingolsheim.",
    descriptionEn: "A cross-border city, Strasbourg sees thousands of daily commuters heading to Kehl and Baden-Württemberg. Our drivers also handle transfers to Baden-Baden Airport and Kehl station. Multilingual service (French, German, English) and coverage across the entire Eurometropolis, including Schiltigheim, Illkirch and Lingolsheim.",
    metaDescriptionFr: "Taxi à Strasbourg : aéroport Entzheim, Parlement européen, quartier Petite France. Service trilingue FR/DE/EN, tarifs réglementés. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Strasbourg: Entzheim airport, European Parliament, Petite France quarter. Trilingual FR/DE/EN service, regulated fares. Book online on TaxiNeo.",
    heroSubtitleFr: "Capitale européenne à la frontière franco-allemande, Strasbourg accueille le Parlement européen et des milliers de navetteurs transfrontaliers. Nos chauffeurs trilingues assurent vos transferts vers Entzheim, Kehl ou Baden-Baden avec des tarifs réglementés sur toute l'Eurométropole.",
    heroSubtitleEn: "European capital on the Franco-German border, Strasbourg hosts the European Parliament and thousands of cross-border commuters. Our trilingual drivers handle transfers to Entzheim, Kehl or Baden-Baden at regulated fares across the entire Eurometropolis.",
    whyUsFr: [
      { title: "Service trilingue FR/DE/EN", desc: "Chauffeurs parlant français, allemand et anglais pour accueillir les eurodéputés, diplomates et navetteurs transfrontaliers. Communication fluide avec les visiteurs du Parlement européen et du Conseil de l'Europe." },
      { title: "Experts Grande Île et Neustadt", desc: "Nos chauffeurs maîtrisent les ruelles de la Grande Île UNESCO, les accès à la Petite France et les avenues de la Neustadt. Raccourcis par les quais de l'Ill et la route du Rhin." },
      { title: "Navettes Entzheim et Kehl garanties", desc: "Transfert aéroport Strasbourg-Entzheim en 15 minutes via l'A35, navette gare de Kehl en 20 minutes via le pont de l'Europe. Tarifs réglementés sur tout le territoire de l'Eurométropole." },
    ],
    whyUsEn: [
      { title: "Trilingual FR/DE/EN service", desc: "Drivers speaking French, German and English to welcome MEPs, diplomats and cross-border commuters. Seamless communication with European Parliament and Council of Europe visitors." },
      { title: "Grande Île & Neustadt experts", desc: "Our drivers master the lanes of the UNESCO Grande Île, Petite France access points and Neustadt avenues. Shortcuts via the Ill River quays and the Rhine road." },
      { title: "Guaranteed Entzheim & Kehl shuttles", desc: "Strasbourg-Entzheim Airport transfer in 15 minutes via the A35, Kehl station shuttle in 20 minutes via the Pont de l'Europe. Regulated fares across the entire Eurometropolis." },
    ],
  },
  bordeaux: {
    introFr: "Bordeaux, capitale mondiale du vin et métropole en pleine transformation, est désormais à 2h04 de Paris en TGV grâce à la LGV Sud Europe Atlantique. TaxiNeo dessert la gare Saint-Jean, l'aéroport Bordeaux-Mérignac, le quartier d'affaires Euratlantique, le CHU Pellegrin, les Bassins à Flot et toute la rive droite de la Garonne.",
    introEn: "Bordeaux, world wine capital and fast-transforming metropolis, is now just 2h04 from Paris by TGV thanks to the LGV Sud Europe Atlantique. TaxiNeo serves Gare Saint-Jean, Bordeaux-Mérignac Airport, the Euratlantique business district, CHU Pellegrin, Bassins à Flot and the entire right bank of the Garonne.",
    descriptionFr: "Bordeaux a connu un boom touristique depuis l'arrivée de la LGV, et nos chauffeurs sont parfaitement rodés aux transferts gare Saint-Jean – aéroport Mérignac. Couverture complète de la métropole (Pessac, Mérignac, Talence, Bègles) avec tarifs réglementés. Service renforcé pendant la Fête du Vin, Vinexpo et les matchs au Matmut Atlantique.",
    descriptionEn: "Bordeaux has seen a tourism boom since the LGV high-speed line arrived, and our drivers are perfectly experienced with Gare Saint-Jean – Mérignac Airport transfers. Full metropolitan coverage (Pessac, Mérignac, Talence, Bègles) with regulated fares. Enhanced service during the Wine Festival, Vinexpo and matches at Matmut Atlantique.",
    metaDescriptionFr: "Taxi à Bordeaux : gare Saint-Jean, aéroport Mérignac, quartier Euratlantique. Seulement 2h04 de Paris en TGV. Tarifs réglementés. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Bordeaux: Gare Saint-Jean, Mérignac airport, Euratlantique district. Only 2h04 from Paris by TGV. Regulated fares. Book your ride on TaxiNeo 24/7.",
    heroSubtitleFr: "Capitale mondiale du vin à 2h04 de Paris en LGV, Bordeaux dessert la gare Saint-Jean, l'aéroport Mérignac et le quartier Euratlantique. Nos chauffeurs couvrent toute la métropole bordelaise à tarif réglementé, y compris les soirs de match au Matmut Atlantique.",
    heroSubtitleEn: "World wine capital just 2h04 from Paris via the LGV, Bordeaux serves Gare Saint-Jean, Mérignac Airport and the Euratlantique district. Our drivers cover the entire Bordeaux metropolitan area at regulated fares, including match nights at Matmut Atlantique.",
    whyUsFr: [
      { title: "Liaison gare Saint-Jean–Mérignac", desc: "Transfert gare Saint-Jean vers l'aéroport Bordeaux-Mérignac en 25 minutes via la rocade ouest (A630). Forfait garanti, prise en charge devant le parvis et suivi des correspondances TGV." },
      { title: "Circuits vignobles Saint-Émilion", desc: "Mise à disposition pour les routes des vins : Saint-Émilion (35 km), Médoc, Pessac-Léognan. Chauffeurs connaissant les domaines et les horaires de visite pour optimiser votre journée." },
      { title: "Couverture métropole rive droite", desc: "Service étendu à toute la métropole bordelaise : Pessac, Talence, Bègles et la rive droite (Cenon, Lormont). Tarifs réglementés identiques sur les deux rives de la Garonne." },
    ],
    whyUsEn: [
      { title: "Saint-Jean–Mérignac station link", desc: "Gare Saint-Jean to Bordeaux-Mérignac Airport transfer in 25 minutes via the western ring road (A630). Guaranteed flat rate, forecourt pickup and TGV connection tracking." },
      { title: "Saint-Émilion vineyard circuits", desc: "Hourly hire for wine routes: Saint-Émilion (35 km), Médoc, Pessac-Léognan. Drivers who know the estates and visiting hours to optimise your day." },
      { title: "Full metropolitan right-bank coverage", desc: "Service across the entire Bordeaux metropolis: Pessac, Talence, Bègles and the right bank (Cenon, Lormont). Identical regulated fares on both sides of the Garonne." },
    ],
  },
  lille: {
    introFr: "Lille, métropole du nord de la France et carrefour européen, est connectée à Paris (1h TGV), Londres (1h20 Eurostar) et Bruxelles (35 min). TaxiNeo couvre les gares Lille-Flandres et Lille-Europe, l'aéroport de Lesquin, le quartier d'affaires Euralille, le CHR de Lille, le Grand Palais et le stade Pierre-Mauroy.",
    introEn: "Lille, northern France's metropolis and European crossroads, is connected to Paris (1h TGV), London (1h20 Eurostar) and Brussels (35 min). TaxiNeo covers Lille-Flandres and Lille-Europe stations, Lesquin Airport, the Euralille business district, Lille Regional Hospital, the Grand Palais and Pierre-Mauroy Stadium.",
    descriptionFr: "Avec deux gares majeures (Flandres et Europe) et un trafic Eurostar/Thalys important, Lille nécessite des taxis disponibles à toute heure. Nos chauffeurs lillois connaissent le Vieux-Lille, Wazemmes et toute la MEL (Roubaix, Tourcoing, Villeneuve-d'Ascq). Prix fixe garanti même pendant la Braderie de Lille, le plus grand marché aux puces d'Europe.",
    descriptionEn: "With two major stations (Flandres and Europe) and heavy Eurostar/Thalys traffic, Lille requires taxis available around the clock. Our Lille drivers know the Vieux-Lille, Wazemmes and the entire MEL area (Roubaix, Tourcoing, Villeneuve-d'Ascq). Fixed price guaranteed even during the Braderie de Lille, Europe's largest flea market.",
    metaDescriptionFr: "Taxi à Lille : gares Flandres et Europe, Eurostar, aéroport Lesquin. Forfait garanti 24h/24, même pendant la Braderie. Réservez maintenant sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Lille: Flandres and Europe stations, Eurostar terminal, Lesquin airport. Guaranteed flat rate 24/7, even during the Braderie. Book on TaxiNeo.",
    heroSubtitleFr: "Carrefour européen connecté à Paris, Londres et Bruxelles, Lille relie les gares Flandres et Europe à l'aéroport de Lesquin et au quartier Euralille. Prix fixe garanti à toute heure, même lors de la célèbre Braderie de Lille, plus grand marché aux puces d'Europe.",
    heroSubtitleEn: "European crossroads connected to Paris, London and Brussels, Lille links Flandres and Europe stations to Lesquin Airport and the Euralille district. Fixed price guaranteed at all hours, even during the famous Braderie de Lille, Europe's largest flea market.",
    whyUsFr: [
      { title: "Hub Eurostar–Thalys–TGV couvert", desc: "Prise en charge directe à Lille-Europe (Eurostar, Thalys) et Lille-Flandres (TGV Nord). Nos chauffeurs synchronisent les arrivées Londres et Bruxelles pour un transfert immédiat vers Euralille ou le Vieux-Lille." },
      { title: "Experts Vieux-Lille et Wazemmes", desc: "Chauffeurs connaissant les rues pavées du Vieux-Lille, le marché de Wazemmes et les accès au CHR via le boulevard de la Liberté. Couverture Roubaix, Tourcoing et Villeneuve-d'Ascq." },
      { title: "Tarif Braderie garanti sans hausse", desc: "Pendant la Braderie de Lille (2 millions de visiteurs, premier week-end de septembre), nos tarifs restent réglementés alors que les VTC multiplient les prix par 3 à 5." },
    ],
    whyUsEn: [
      { title: "Eurostar–Thalys–TGV hub covered", desc: "Direct pickup at Lille-Europe (Eurostar, Thalys) and Lille-Flandres (TGV Nord). Our drivers sync with London and Brussels arrivals for an immediate transfer to Euralille or Vieux-Lille." },
      { title: "Vieux-Lille & Wazemmes experts", desc: "Drivers who know the cobbled streets of Vieux-Lille, the Wazemmes market and hospital access via Boulevard de la Liberté. Coverage to Roubaix, Tourcoing and Villeneuve-d'Ascq." },
      { title: "Guaranteed Braderie fare, no surge", desc: "During the Braderie de Lille (2 million visitors, first weekend of September), our fares stay regulated while rideshare services multiply prices by 3 to 5." },
    ],
  },
  rennes: {
    introFr: "Rennes, capitale de la Bretagne et ville numérique en plein essor, est à 1h25 de Paris en TGV. TaxiNeo dessert la gare TGV, l'aéroport Rennes-Saint-Jacques, le technopole Atalante, le campus universitaire de Villejean, le CHU Pontchaillou et le centre de congrès Le Couvent des Jacobins.",
    introEn: "Rennes, Brittany's capital and booming digital city, is 1h25 from Paris by TGV. TaxiNeo serves the TGV station, Rennes-Saint-Jacques Airport, the Atalante technology park, the Villejean university campus, CHU Pontchaillou and Le Couvent des Jacobins convention centre.",
    descriptionFr: "Pôle d'innovation et d'enseignement supérieur (université Rennes 1, Rennes 2, grandes écoles), Rennes attire étudiants et entrepreneurs. Nos chauffeurs assurent les navettes entre la gare, le technopole et l'aéroport toute l'année. Service renforcé pendant les Trans Musicales et le festival Yaouank.",
    descriptionEn: "An innovation and higher education hub (University Rennes 1, Rennes 2, grandes écoles), Rennes attracts students and entrepreneurs. Our drivers provide shuttles between the station, technology park and airport year-round. Enhanced service during the Trans Musicales and Yaouank festivals.",
    metaDescriptionFr: "Taxi à Rennes : gare TGV, aéroport Saint-Jacques, technopole Atalante. À seulement 1h25 de Paris en TGV. Navettes campus et CHU. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Rennes: TGV station, Saint-Jacques airport, Atalante tech park. Only 1h25 from Paris by TGV. Campus and hospital shuttles. Book now on TaxiNeo.",
    heroSubtitleFr: "Capitale bretonne et pôle numérique à 1h25 de Paris en TGV, Rennes dessert le technopole Atalante, l'aéroport Saint-Jacques et le campus de Villejean. Nos chauffeurs assurent navettes campus, transferts CHU Pontchaillou et service renforcé pendant les Trans Musicales.",
    heroSubtitleEn: "Brittany's capital and digital hub just 1h25 from Paris by TGV, Rennes serves the Atalante tech park, Saint-Jacques Airport and the Villejean campus. Our drivers provide campus shuttles, CHU Pontchaillou transfers and enhanced service during the Trans Musicales.",
    whyUsFr: [
      { title: "Navette gare TGV–Saint-Jacques", desc: "Transfert gare de Rennes vers l'aéroport Saint-Jacques en 15 minutes via la route de Lorient. Forfait fixe, synchronisation avec les horaires de vol et prise en charge au terminal." },
      { title: "Couverture Villejean et Atalante", desc: "Service dédié au campus de Villejean (médecine, droit), au technopôle Atalante et au CHU Pontchaillou. Nos chauffeurs connaissent les accès rapides par la rocade nord." },
      { title: "Service Trans Musicales et Yaouank", desc: "Disponibilité renforcée pendant les Trans Musicales (décembre) et le festival Yaouank. Itinéraires de sortie du Parc Expo et du Liberté pour éviter la congestion post-concert." },
    ],
    whyUsEn: [
      { title: "TGV station–Saint-Jacques shuttle", desc: "Rennes station to Saint-Jacques Airport transfer in 15 minutes via the Route de Lorient. Fixed fare, flight schedule synchronisation and terminal pickup." },
      { title: "Villejean & Atalante coverage", desc: "Dedicated service to the Villejean campus (medicine, law), the Atalante tech park and CHU Pontchaillou. Our drivers know fast access via the northern ring road." },
      { title: "Trans Musicales & Yaouank service", desc: "Enhanced availability during the Trans Musicales (December) and Yaouank festival. Exit routes from the Parc Expo and Le Liberté to avoid post-concert congestion." },
    ],
  },
  reims: {
    introFr: "Reims, capitale du champagne et ville d'art et d'histoire, accueille chaque année des millions de visiteurs dans ses caves prestigieuses et sa cathédrale gothique. Desservie par la gare TGV Champagne-Ardenne (45 min de Paris) et la gare centre, TaxiNeo assure vos transferts vers les maisons de champagne, le Parc des Expositions et le CHU Reims.",
    introEn: "Reims, champagne capital and city of art and history, welcomes millions of visitors yearly to its prestigious cellars and Gothic cathedral. Served by Champagne-Ardenne TGV station (45 min from Paris) and the city centre station, TaxiNeo handles transfers to champagne houses, the Exhibition Centre and Reims University Hospital.",
    descriptionFr: "La gare TGV Champagne-Ardenne est excentrée (à Bezannes) et le taxi est le moyen le plus simple de rejoindre le centre ou les caves de champagne. Nos chauffeurs rémois connaissent toutes les maisons (Veuve Clicquot, Taittinger, Pommery) et les circuits œnotouristiques. Forfait gare TGV – centre-ville compétitif.",
    descriptionEn: "Champagne-Ardenne TGV station is outside the city (in Bezannes) and a taxi is the simplest way to reach the centre or champagne cellars. Our Reims drivers know every house (Veuve Clicquot, Taittinger, Pommery) and wine tourism routes. Competitive TGV station – city centre flat rate.",
    metaDescriptionFr: "Taxi à Reims : gare TGV Bezannes, cathédrale gothique, caves de champagne. Forfait gare–centre compétitif. Seulement 45 min de Paris. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Reims: Bezannes TGV station, Gothic cathedral, champagne cellars. Competitive station-to-centre flat rate. 45 min from Paris. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale du champagne à 45 minutes de Paris en TGV, Reims attire des millions de visiteurs chaque année. Forfait compétitif gare TGV Bezannes – centre-ville, transferts vers les caves Veuve Clicquot, Taittinger et Pommery, et circuits oenotouristiques avec chauffeur dédié.",
    heroSubtitleEn: "Champagne capital just 45 minutes from Paris by TGV, Reims draws millions of visitors annually. Competitive Bezannes TGV station – city centre flat rate, transfers to Veuve Clicquot, Taittinger and Pommery cellars, and wine tourism tours with a dedicated driver.",
    whyUsFr: [
      { title: "Forfait gare Bezannes–centre-ville", desc: "La gare TGV Champagne-Ardenne est à 5 km du centre de Reims : nos taxis assurent le transfert en 10 minutes via la D951 à tarif forfaitaire compétitif, sans surprise au compteur." },
      { title: "Circuits caves de champagne", desc: "Mise à disposition pour les visites des grandes maisons : Veuve Clicquot, Taittinger, Pommery, Ruinart. Chauffeurs connaissant les accès aux caves souterraines et les horaires de dégustation." },
      { title: "Accueil cathédrale et sacre des rois", desc: "Transport depuis la gare ou les hôtels vers la cathédrale Notre-Dame, le palais du Tau et la basilique Saint-Remi. Chauffeurs formés à l'histoire de la ville du sacre des rois de France." },
    ],
    whyUsEn: [
      { title: "Bezannes station–centre flat rate", desc: "Champagne-Ardenne TGV station is 5 km from central Reims: our taxis make the transfer in 10 minutes via the D951 at a competitive flat fare, no meter surprises." },
      { title: "Champagne cellar circuits", desc: "Hourly hire for visits to the great houses: Veuve Clicquot, Taittinger, Pommery, Ruinart. Drivers who know underground cellar access points and tasting schedules." },
      { title: "Cathedral & royal history welcome", desc: "Transport from the station or hotels to Notre-Dame Cathedral, the Palais du Tau and Saint-Remi Basilica. Drivers knowledgeable about the city where French kings were crowned." },
    ],
  },
  "saint-etienne": {
    introFr: "Saint-Étienne, ville du design classée UNESCO et berceau industriel de la Loire, se réinvente autour de la Cité du Design, du Zénith et du quartier créatif Manufacture-Plaine-Achille. TaxiNeo dessert la gare de Châteaucreux (TGV vers Paris), le CHU de Saint-Étienne, le stade Geoffroy-Guichard et toute l'agglomération stéphanoise.",
    introEn: "Saint-Étienne, UNESCO City of Design and the Loire's industrial heartland, is reinventing itself around the Cité du Design, the Zénith and the Manufacture-Plaine-Achille creative quarter. TaxiNeo serves Châteaucreux station (TGV to Paris), Saint-Étienne University Hospital, Geoffroy-Guichard Stadium and the entire metropolitan area.",
    descriptionFr: "Située à 50 km de Lyon, Saint-Étienne est reliée à la métropole lyonnaise par l'A47. Nos chauffeurs assurent les navettes Saint-Étienne – aéroport Lyon-Saint Exupéry et les transferts vers les stations de ski du Pilat. Service renforcé les soirs de match de l'ASSE au chaudron Geoffroy-Guichard.",
    descriptionEn: "Located 50 km from Lyon, Saint-Étienne is connected to the Lyon metropolis via the A47. Our drivers provide Saint-Étienne – Lyon-Saint Exupéry Airport shuttles and transfers to Pilat ski resorts. Enhanced service on ASSE match evenings at Geoffroy-Guichard.",
    metaDescriptionFr: "Taxi à Saint-Étienne : gare Châteaucreux, navette aéroport de Lyon, stade Geoffroy-Guichard. Ville UNESCO du Design. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Saint-Étienne: Châteaucreux station, Lyon airport shuttle, Geoffroy-Guichard stadium. UNESCO City of Design. Regulated fares. Book on TaxiNeo.",
    heroSubtitleFr: "Ville UNESCO du Design à 50 km de Lyon, Saint-Étienne articule la gare Châteaucreux, la Cité du Design et le stade Geoffroy-Guichard. Nos chauffeurs assurent navettes vers l'aéroport Lyon-Saint Exupéry et transferts montagne vers les stations du Pilat.",
    heroSubtitleEn: "UNESCO City of Design just 50 km from Lyon, Saint-Étienne connects Châteaucreux station, the Cité du Design and Geoffroy-Guichard Stadium. Our drivers provide Lyon-Saint Exupéry Airport shuttles and mountain transfers to Pilat resorts.",
    whyUsFr: [
      { title: "Navette Saint-Exupéry via l'A47", desc: "Transfert vers l'aéroport Lyon-Saint Exupéry en 50 minutes par l'A47 puis l'A43. Tarif forfaitaire garanti, prise en charge au terminal et suivi des retards de vol en temps réel." },
      { title: "Spécialistes quartiers stéphanois", desc: "Chauffeurs connaissant la topographie vallonnée de Saint-Étienne : montées de Bellevue et Terrenoire, accès CHU via le cours Fauriel et itinéraires bis pendant les matchs de l'ASSE." },
      { title: "Transferts ski Pilat et Crêt de l'Œillon", desc: "En hiver, navettes vers les pistes du massif du Pilat (Crêt de l'Œillon, Col de la République) avec véhicules équipés pneus neige. Départ centre-ville, retour garanti en fin de journée." },
    ],
    whyUsEn: [
      { title: "Saint-Exupéry shuttle via the A47", desc: "Transfer to Lyon-Saint Exupéry Airport in 50 minutes via the A47 then A43. Guaranteed flat fare, terminal pickup and real-time flight delay tracking." },
      { title: "Stéphanois district specialists", desc: "Drivers who know Saint-Étienne's hilly topography: Bellevue and Terrenoire climbs, hospital access via Cours Fauriel and alternative routes during ASSE matches." },
      { title: "Pilat & Crêt de l'Œillon ski transfers", desc: "In winter, shuttles to the Pilat massif slopes (Crêt de l'Œillon, Col de la République) with snow-tyre-equipped vehicles. City-centre departure, guaranteed end-of-day return." },
    ],
  },
  "le-havre": {
    introFr: "Le Havre, plus grand port de France sur la Manche et ville reconstruite par Auguste Perret (classée UNESCO), est la porte d'entrée maritime de la Normandie. TaxiNeo dessert le terminal croisières, la gare SNCF, le port ferry vers l'Angleterre, la plage du Havre, le quartier Saint-François et la zone industrielle portuaire.",
    introEn: "Le Havre, France's largest Channel port and Auguste Perret's reconstructed city (UNESCO-listed), is Normandy's maritime gateway. TaxiNeo serves the cruise terminal, the SNCF station, the England ferry port, Le Havre beach, the Saint-François quarter and the port industrial zone.",
    descriptionFr: "Port d'escale majeur pour les croisières transatlantiques et transmanche, Le Havre génère un fort besoin de transferts vers la gare, Étretat et Honfleur. Nos chauffeurs connaissent les horaires des ferries et des paquebots pour assurer des prises en charge ponctuelles. Tarifs réglementés pour tous les trajets portuaires.",
    descriptionEn: "A major cruise and cross-Channel port of call, Le Havre generates strong demand for transfers to the station, Étretat and Honfleur. Our drivers know ferry and cruise ship schedules for punctual pickups. Regulated fares for all port journeys.",
    metaDescriptionFr: "Taxi au Havre : terminal croisières, ferry pour l'Angleterre, falaises d'Étretat, Honfleur. Plus grand port de la Manche. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Le Havre: cruise terminal, England ferry, Étretat cliffs, Honfleur. Largest port on the English Channel. Regulated fares. Book now on TaxiNeo.",
    heroSubtitleFr: "Plus grand port français sur la Manche et ville UNESCO d'Auguste Perret, Le Havre accueille paquebots et ferries transmanche. Nos chauffeurs synchronisent les prises en charge sur les horaires des ferries pour des transferts ponctuels vers Étretat, Honfleur et la gare SNCF.",
    heroSubtitleEn: "France's largest Channel port and Auguste Perret's UNESCO city, Le Havre welcomes cruise liners and cross-Channel ferries. Our drivers synchronise pickups with ferry schedules for punctual transfers to Étretat, Honfleur and the SNCF station.",
    whyUsFr: [
      { title: "Synchronisation ferries et paquebots", desc: "Nos chauffeurs connaissent les horaires des ferries transmanche et des paquebots de croisière. Prise en charge calée sur l'accostage au quai Roger-Meunier pour un transfert immédiat sans attente." },
      { title: "Excursions Étretat et Honfleur", desc: "Le Havre – Étretat (30 km) en 35 minutes par la D940, Le Havre – Honfleur (25 km) en 30 minutes via le pont de Normandie. Circuits falaises et côte fleurie avec chauffeur dédié." },
      { title: "Experts ville Perret et port industriel", desc: "Chauffeurs maîtrisant l'architecture en damier de Perret, les accès au terminal croisières, à la plage et à la zone industrialo-portuaire. Service adapté aux dockers et employés portuaires." },
    ],
    whyUsEn: [
      { title: "Ferry & cruise ship synchronisation", desc: "Our drivers know cross-Channel ferry and cruise ship schedules. Pickups timed to docking at the Roger-Meunier quay for an immediate transfer with no waiting." },
      { title: "Étretat & Honfleur excursions", desc: "Le Havre – Étretat (30 km) in 35 minutes via the D940, Le Havre – Honfleur (25 km) in 30 minutes via the Pont de Normandie. Cliff and Côte Fleurie tours with a dedicated driver." },
      { title: "Perret city & port district experts", desc: "Drivers who master Perret's grid-pattern architecture, cruise terminal access, the beach and the industrial port zone. Service tailored to dockworkers and port employees." },
    ],
  },
  toulon: {
    introFr: "Toulon, premier port militaire français et porte d'entrée vers les îles d'Hyères, est une ville méditerranéenne dynamique entre mer et montagne. TaxiNeo assure vos transferts vers l'aéroport de Toulon-Hyères, la gare SNCF, l'Arsenal, le port de commerce et les embarcadères vers Porquerolles et Port-Cros.",
    introEn: "Toulon, France's main naval port and gateway to the Hyères Islands, is a dynamic Mediterranean city between sea and mountains. TaxiNeo handles transfers to Toulon-Hyères Airport, the SNCF station, the Arsenal, the commercial port and the jetties to Porquerolles and Port-Cros.",
    descriptionFr: "Nos chauffeurs toulonnais assurent les navettes vers l'embarcadère de La Tour Fondue (Porquerolles) et les plages du Mourillon. Service renforcé en été pour les transferts aéroport et les liaisons gare – port. La topographie vallonnée de Toulon rend le taxi indispensable pour se déplacer confortablement entre le port et le Mont Faron.",
    descriptionEn: "Our Toulon drivers provide shuttles to La Tour Fondue pier (Porquerolles) and Mourillon beaches. Enhanced summer service for airport transfers and station – port connections. Toulon's hilly terrain makes taxis essential for comfortable travel between the port and Mont Faron.",
    metaDescriptionFr: "Taxi à Toulon : aéroport Hyères, Arsenal, îles de Porquerolles et Port-Cros. 1er port militaire de France. Service estival renforcé. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Toulon: Hyères airport, Arsenal naval base, Porquerolles and Port-Cros islands. France's top naval port. Enhanced summer service. Book on TaxiNeo.",
    heroSubtitleFr: "Premier port militaire français et porte vers les îles d'Hyères, Toulon relie l'aéroport Toulon-Hyères aux embarcadères de Porquerolles et Port-Cros. La topographie vallonnée entre le port et le Mont Faron rend le taxi indispensable pour vos déplacements confortables.",
    heroSubtitleEn: "France's main naval port and gateway to the Hyères Islands, Toulon connects Toulon-Hyères Airport to the Porquerolles and Port-Cros piers. The hilly terrain between the port and Mont Faron makes taxis essential for comfortable travel.",
    whyUsFr: [
      { title: "Navette Tour Fondue–Porquerolles", desc: "Transport vers l'embarcadère de La Tour Fondue (Giens) en 30 minutes depuis le centre de Toulon via la D559. Synchronisation avec les bateaux vers Porquerolles, retour garanti au retour du ferry." },
      { title: "Maîtrise relief port–Mont Faron", desc: "Chauffeurs connaissant les routes escarpées entre le port militaire et le sommet du Mont Faron (542 m). Accès rapide au Mourillon, à la Seyne-sur-Mer et à l'Arsenal sans détour." },
      { title: "Transfert aéroport Hyères estival", desc: "Aéroport Toulon-Hyères à 20 km du centre : transfert en 25 minutes via l'A57. Service renforcé en haute saison estivale avec tarif réglementé, sans surcharge vacances." },
    ],
    whyUsEn: [
      { title: "Tour Fondue–Porquerolles shuttle", desc: "Transport to La Tour Fondue pier (Giens) in 30 minutes from Toulon centre via the D559. Synchronised with Porquerolles boats, guaranteed return pickup when the ferry docks." },
      { title: "Port–Mont Faron terrain mastery", desc: "Drivers who know the steep roads between the naval port and the Mont Faron summit (542 m). Fast access to Le Mourillon, La Seyne-sur-Mer and the Arsenal without detours." },
      { title: "Summer Hyères airport transfer", desc: "Toulon-Hyères Airport 20 km from the centre: transfer in 25 minutes via the A57. Enhanced peak summer service at regulated fares, no holiday surcharge." },
    ],
  },
  grenoble: {
    introFr: "Grenoble, capitale des Alpes françaises et pôle scientifique majeur (CNRS, CEA, ESRF), est nichée au cœur des montagnes entre Vercors, Chartreuse et Belledonne. TaxiNeo dessert la gare de Grenoble, l'aéroport Grenoble-Isère, le campus universitaire, le CHU Grenoble Alpes et les stations de ski environnantes.",
    introEn: "Grenoble, capital of the French Alps and major scientific hub (CNRS, CEA, ESRF), is nestled in the heart of the mountains between Vercors, Chartreuse and Belledonne. TaxiNeo serves Grenoble station, Grenoble-Isère Airport, the university campus, Grenoble Alpes University Hospital and surrounding ski resorts.",
    descriptionFr: "En hiver, nos chauffeurs assurent les transferts vers les stations de l'Alpe d'Huez, les Deux Alpes et Chamrousse. En été, déplacements vers les parcs naturels du Vercors et de la Chartreuse. Les chauffeurs grenoblois sont équipés de pneus neige et chaînes pour une sécurité maximale toute l'année. Forfait aéroport Isère disponible.",
    descriptionEn: "In winter, our drivers handle transfers to Alpe d'Huez, Les Deux Alpes and Chamrousse resorts. In summer, rides to the Vercors and Chartreuse natural parks. Grenoble drivers are equipped with snow tyres and chains for maximum safety year-round. Isère airport flat rate available.",
    metaDescriptionFr: "Taxi à Grenoble : aéroport Isère, Alpe d'Huez, les Deux Alpes, CHU alpin. Véhicules équipés neige tout l'hiver. Forfait aéroport garanti. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Grenoble: Isère airport, Alpe d'Huez, Les Deux Alpes, university hospital. Snow-equipped vehicles in winter. Airport flat rate. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale des Alpes françaises et pôle scientifique majeur, Grenoble est nichée entre Vercors, Chartreuse et Belledonne. Véhicules équipés pneus neige et chaînes pour des transferts sécurisés vers l'Alpe d'Huez, les Deux Alpes et Chamrousse. Forfait aéroport Isère garanti.",
    heroSubtitleEn: "Capital of the French Alps and major scientific hub, Grenoble is nestled between Vercors, Chartreuse and Belledonne. Vehicles equipped with snow tyres and chains for safe transfers to Alpe d'Huez, Les Deux Alpes and Chamrousse. Guaranteed Isère airport flat rate.",
    whyUsFr: [
      { title: "Transferts stations Oisans et Belledonne", desc: "Navettes vers l'Alpe d'Huez (63 km, 1h), les Deux Alpes et Chamrousse avec véhicules 4x4 équipés pneus neige et chaînes. Départ gare de Grenoble ou aéroport Isère, forfait montagne garanti." },
      { title: "Experts campus CEA–ESRF–CNRS", desc: "Chauffeurs connaissant le polygone scientifique, le campus GIANT et les accès au synchrotron ESRF via la presqu'île. Navettes quotidiennes pour les chercheurs entre la gare et Minatec." },
      { title: "Forfait aéroport Grenoble-Isère", desc: "Aéroport Grenoble-Isère à 40 km du centre via l'A48 : transfert en 35 minutes à tarif fixe. Chauffeurs équipés pour les arrivées de vols charter ski en hiver." },
    ],
    whyUsEn: [
      { title: "Oisans & Belledonne resort transfers", desc: "Shuttles to Alpe d'Huez (63 km, 1h), Les Deux Alpes and Chamrousse with 4x4 vehicles equipped with snow tyres and chains. Departure from Grenoble station or Isère Airport, guaranteed mountain flat rate." },
      { title: "CEA–ESRF–CNRS campus experts", desc: "Drivers who know the scientific polygon, GIANT campus and ESRF synchrotron access via the peninsula. Daily shuttles for researchers between the station and Minatec." },
      { title: "Grenoble-Isère airport flat rate", desc: "Grenoble-Isère Airport 40 km from the centre via the A48: transfer in 35 minutes at a fixed fare. Drivers equipped for winter ski charter flight arrivals." },
    ],
  },
  dijon: {
    introFr: "Dijon, capitale de la Bourgogne et ville gastronomique inscrite au patrimoine UNESCO, est un carrefour ferroviaire entre Paris (1h40 TGV), Lyon et Strasbourg. TaxiNeo dessert la gare Dijon-Ville, le CHU Dijon Bourgogne, le campus universitaire, la Cité de la Gastronomie et les domaines viticoles de la Côte de Nuits.",
    introEn: "Dijon, Burgundy's capital and UNESCO-listed gastronomic city, is a railway junction between Paris (1h40 TGV), Lyon and Strasbourg. TaxiNeo serves Gare Dijon-Ville, Dijon Burgundy University Hospital, the university campus, the Cité de la Gastronomie and the Côte de Nuits wine estates.",
    descriptionFr: "Nos chauffeurs dijonnais connaissent la Route des Grands Crus et peuvent organiser vos transferts vers les domaines viticoles de Gevrey-Chambertin, Vougeot et Nuits-Saint-Georges. Service idéal pour les dégustations sans se soucier de la conduite. Couverture de toute la métropole dijonnaise avec tarifs réglementés.",
    descriptionEn: "Our Dijon drivers know the Route des Grands Crus and can arrange transfers to the wine estates of Gevrey-Chambertin, Vougeot and Nuits-Saint-Georges. Ideal service for tastings without worrying about driving. Coverage of the entire Dijon metropolitan area with regulated fares.",
    metaDescriptionFr: "Taxi à Dijon : gare TGV, Cité de la Gastronomie, Route des Grands Crus de Bourgogne. Capitale UNESCO de la Bourgogne. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Dijon: TGV station, Cité de la Gastronomie, famous Route des Grands Crus in Burgundy. UNESCO wine capital. Regulated fares. Book now on TaxiNeo.",
    heroSubtitleFr: "Capitale de la Bourgogne inscrite au patrimoine UNESCO, Dijon est un carrefour ferroviaire à 1h40 de Paris. Transferts gare TGV, excursions Route des Grands Crus vers Gevrey-Chambertin et Nuits-Saint-Georges, et service dédié aux dégustations viticoles sans souci de conduite.",
    heroSubtitleEn: "Burgundy's UNESCO-listed capital, Dijon is a railway junction 1h40 from Paris. TGV station transfers, Route des Grands Crus excursions to Gevrey-Chambertin and Nuits-Saint-Georges, and dedicated service for wine tastings without the worry of driving.",
    whyUsFr: [
      { title: "Circuits Route des Grands Crus", desc: "Mise à disposition pour la Route des Grands Crus de Bourgogne : Gevrey-Chambertin (12 km), Vougeot, Nuits-Saint-Georges. Chauffeurs connaissant les domaines et les horaires de dégustation." },
      { title: "Experts centre historique UNESCO", desc: "Nos chauffeurs naviguent dans les rues piétonnes du centre dijonnais : accès au palais des Ducs, à la Cité de la Gastronomie et au marché couvert via les contre-allées du boulevard de la Trémouille." },
      { title: "Carrefour ferroviaire TGV–TER", desc: "Gare Dijon-Ville desservie par le TGV (1h40 Paris), le TER vers Beaune (20 min) et les lignes Strasbourg–Lyon. Correspondances assurées par nos chauffeurs entre les quais et votre destination finale." },
    ],
    whyUsEn: [
      { title: "Route des Grands Crus circuits", desc: "Hourly hire for the Route des Grands Crus de Bourgogne: Gevrey-Chambertin (12 km), Vougeot, Nuits-Saint-Georges. Drivers who know the estates and tasting schedules." },
      { title: "UNESCO historic centre experts", desc: "Our drivers navigate Dijon's pedestrianised centre: access to the Ducal Palace, the Cité de la Gastronomie and the covered market via the side streets of Boulevard de la Trémouille." },
      { title: "TGV–TER railway junction", desc: "Gare Dijon-Ville served by TGV (1h40 Paris), TER to Beaune (20 min) and the Strasbourg–Lyon lines. Our drivers ensure seamless connections from the platform to your final destination." },
    ],
  },
  angers: {
    introFr: "Angers, cœur du Val de Loire et première ville verte de France, combine patrimoine historique (château médiéval, tenture de l'Apocalypse) et innovation (quartier numérique Angers French Tech). TaxiNeo dessert la gare Saint-Laud (TGV vers Paris en 1h30), le CHU d'Angers, le Parc des Expositions et l'aéroport Angers-Loire.",
    introEn: "Angers, heart of the Loire Valley and France's greenest city, combines historic heritage (medieval castle, Apocalypse Tapestry) and innovation (Angers French Tech digital quarter). TaxiNeo serves Gare Saint-Laud (TGV to Paris in 1h30), Angers University Hospital, the Exhibition Centre and Angers-Loire Airport.",
    descriptionFr: "Angers bénéficie d'un cadre de vie exceptionnel avec ses parcs, ses bords de Maine et sa douceur angevine. Nos chauffeurs assurent les liaisons gare – centre, les transferts vers Saumur et les châteaux de la Loire, ainsi que le service pour les événements au Parc Expo et au Centre de Congrès.",
    descriptionEn: "Angers enjoys an exceptional quality of life with its parks, Maine riverbanks and gentle Angevin climate. Our drivers provide station – centre connections, transfers to Saumur and the Loire castles, and event service at the Exhibition Centre and Convention Centre.",
    metaDescriptionFr: "Taxi à Angers : gare Saint-Laud, aéroport Loire, CHU, châteaux de la Loire. Seulement 1h30 de Paris en TGV. Réservation en ligne instantanée sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Angers: Gare Saint-Laud, Loire airport, university hospital, Loire Valley châteaux. 1h30 from Paris by TGV. Instant online booking on TaxiNeo.",
    heroSubtitleFr: "Cœur du Val de Loire et première ville verte de France, Angers relie la gare Saint-Laud à l'aéroport Loire en 1h30 de Paris. Nos chauffeurs assurent transferts vers Saumur, les châteaux de la Loire et le CHU, avec une douceur angevine qui se retrouve dans l'accueil personnalisé.",
    heroSubtitleEn: "Heart of the Loire Valley and France's greenest city, Angers connects Gare Saint-Laud to Loire Airport, 1h30 from Paris. Our drivers handle transfers to Saumur, the Loire châteaux and the university hospital, with personalised service matching Angers' gentle lifestyle.",
    whyUsFr: [
      { title: "Liaison gare Saint-Laud–aéroport Loire", desc: "Transfert gare Saint-Laud vers l'aéroport Angers-Loire en 20 minutes via la N23. Forfait fixe préfectoral, synchronisation avec les horaires de vol et accueil personnalisé au terminal." },
      { title: "Excursions châteaux et Saumur", desc: "Mise à disposition pour les châteaux de la Loire : Saumur (50 km), Brissac, Serrant. Nos chauffeurs connaissent les accès par les bords de Maine et de Loire pour des trajets panoramiques." },
      { title: "Desserte CHU et campus angevins", desc: "Service dédié au CHU d'Angers et aux campus universitaires de Belle-Beille et Saint-Serge. Prise en charge rapide aux urgences et navettes inter-sites hospitaliers." },
    ],
    whyUsEn: [
      { title: "Saint-Laud–Loire airport link", desc: "Gare Saint-Laud to Angers-Loire Airport transfer in 20 minutes via the N23. Fixed prefectural fare, flight schedule synchronisation and personalised terminal welcome." },
      { title: "Château & Saumur excursions", desc: "Hourly hire for Loire châteaux: Saumur (50 km), Brissac, Serrant. Our drivers know the Maine and Loire riverside routes for scenic journeys." },
      { title: "Hospital & Angers campus service", desc: "Dedicated service to Angers University Hospital and the Belle-Beille and Saint-Serge campuses. Fast emergency department pickups and inter-site hospital shuttles." },
    ],
  },
  nimes: {
    introFr: "Nîmes, cité romaine aux monuments exceptionnels (Arènes, Maison Carrée, Pont du Gard), est une ville touristique majeure du sud de la France. TaxiNeo dessert la gare Nîmes-Centre, la gare TGV Nîmes-Pont du Gard, l'aéroport Nîmes-Garons, les Arènes et les sites touristiques de la région.",
    introEn: "Nîmes, a Roman city with exceptional monuments (Arena, Maison Carrée, Pont du Gard), is a major tourist destination in southern France. TaxiNeo serves Nîmes-Centre station, Nîmes-Pont du Gard TGV station, Nîmes-Garons Airport, the Arena and the region's tourist sites.",
    descriptionFr: "La gare TGV Nîmes-Pont du Gard est excentrée et le taxi est indispensable pour rejoindre le centre-ville ou les sites romains. Nos chauffeurs nîmois assurent aussi les transferts vers le Pont du Gard, Uzès et les Cévennes. Service renforcé pendant les Férias et les spectacles aux Arènes.",
    descriptionEn: "Nîmes-Pont du Gard TGV station is outside the city and a taxi is essential to reach the centre or Roman sites. Our Nîmes drivers also handle transfers to the Pont du Gard, Uzès and the Cévennes. Enhanced service during the Férias and Arena events.",
    metaDescriptionFr: "Taxi à Nîmes : gare TGV Pont du Gard, les Arènes, Maison Carrée. Transferts vers le Pont du Gard et les Cévennes. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Nîmes: Pont du Gard TGV station, famous Roman Arena, Maison Carrée temple. Pont du Gard and Cévennes transfers. Regulated fares. Book on TaxiNeo.",
    heroSubtitleFr: "Cité romaine aux monuments exceptionnels, Nîmes relie la gare TGV excentrée du Pont du Gard aux Arènes et à la Maison Carrée. Indispensable pour rejoindre le centre-ville, nos chauffeurs assurent aussi les excursions vers le Pont du Gard, Uzès et les Cévennes.",
    heroSubtitleEn: "Roman city with exceptional monuments, Nîmes connects the outlying Pont du Gard TGV station to the Arena and Maison Carrée. Essential for reaching the city centre, our drivers also handle excursions to the Pont du Gard, Uzès and the Cévennes.",
    whyUsFr: [
      { title: "Forfait gare TGV Pont du Gard–centre", desc: "La gare TGV Nîmes-Pont du Gard est à 12 km du centre : nos taxis assurent le transfert en 15 minutes via la N106 à tarif forfaitaire fixe, sans détour ni supplément." },
      { title: "Excursions Pont du Gard et Uzès", desc: "Nîmes – Pont du Gard (25 km) en 25 minutes, Nîmes – Uzès (30 km) en 30 minutes par la D979. Circuits patrimoine romain avec mise à disposition et retour garanti." },
      { title: "Service renforcé Férias et Arènes", desc: "Pendant les Férias de Nîmes (Pentecôte et septembre) et les spectacles aux Arènes, nos chauffeurs connaissent les itinéraires d'évacuation par le boulevard des Arènes et la route d'Avignon." },
    ],
    whyUsEn: [
      { title: "Pont du Gard TGV–centre flat rate", desc: "Nîmes-Pont du Gard TGV station is 12 km from the centre: our taxis make the transfer in 15 minutes via the N106 at a fixed flat fare, no detour or supplement." },
      { title: "Pont du Gard & Uzès excursions", desc: "Nîmes – Pont du Gard (25 km) in 25 minutes, Nîmes – Uzès (30 km) in 30 minutes via the D979. Roman heritage circuits with hourly hire and guaranteed return." },
      { title: "Férias & Arena enhanced service", desc: "During the Nîmes Férias (Pentecost and September) and Arena shows, our drivers know exit routes via Boulevard des Arènes and the Avignon road." },
    ],
  },
  villeurbanne: {
    introFr: "Villeurbanne, commune la plus peuplée de la métropole lyonnaise après Lyon, abrite le campus de La Doua (INSA, université Claude Bernard Lyon 1), le Théâtre National Populaire et le quartier Gratte-Ciel. TaxiNeo assure vos déplacements dans toute l'agglomération : navettes campus, transferts vers la Part-Dieu et Saint-Exupéry.",
    introEn: "Villeurbanne, the Lyon metropolitan area's most populous commune after Lyon, is home to La Doua campus (INSA, Claude Bernard University Lyon 1), the Théâtre National Populaire and the Gratte-Ciel quarter. TaxiNeo handles trips across the area: campus shuttles, transfers to Part-Dieu and Saint-Exupéry.",
    descriptionFr: "Intégrée à la métropole lyonnaise, Villeurbanne bénéficie du même réseau de chauffeurs TaxiNeo que Lyon. Nos taxis assurent les liaisons campus – gare Part-Dieu – aéroport Saint-Exupéry avec des tarifs réglementés identiques. Idéal pour les étudiants internationaux et les chercheurs du campus scientifique.",
    descriptionEn: "Integrated into the Lyon metropolitan area, Villeurbanne benefits from the same TaxiNeo driver network as Lyon. Our taxis provide campus – Part-Dieu station – Saint-Exupéry airport connections at identical regulated rates. Ideal for international students and researchers at the science campus.",
    metaDescriptionFr: "Taxi à Villeurbanne : campus La Doua, centre Part-Dieu, aéroport Saint-Exupéry. Même réseau que Lyon, tarifs réglementés. Réservation instantanée TaxiNeo.",
    metaDescriptionEn: "Taxi in Villeurbanne: La Doua campus, Part-Dieu centre, Saint-Exupéry airport. Same taxi network as Lyon, regulated fares. Book now instantly on TaxiNeo.",
    heroSubtitleFr: "Commune la plus peuplée de la métropole lyonnaise après Lyon, Villeurbanne abrite le campus scientifique La Doua et le TNP. Bénéficiez du même réseau de chauffeurs TaxiNeo que Lyon pour vos navettes campus, transferts Part-Dieu et liaison Saint-Exupéry à tarifs réglementés identiques.",
    heroSubtitleEn: "The Lyon metropolitan area's most populous commune after Lyon, Villeurbanne is home to La Doua science campus and the TNP. Benefit from the same TaxiNeo driver network as Lyon for campus shuttles, Part-Dieu transfers and Saint-Exupéry connections at identical regulated rates.",
    whyUsFr: [
      { title: "Navettes campus La Doua–Part-Dieu", desc: "Transfert campus La Doua (INSA, Lyon 1) vers la gare Part-Dieu en 12 minutes via le cours Émile-Zola. Tarif identique au réseau lyonnais, sans supplément inter-communes." },
      { title: "Même réseau que Lyon métropole", desc: "Villeurbanne bénéficie du même réseau de 1 200 chauffeurs TaxiNeo que Lyon. Couverture Gratte-Ciel, Charpennes et Tonkin aux tarifs réglementés de la métropole lyonnaise." },
      { title: "Liaison directe Saint-Exupéry", desc: "Villeurbanne – aéroport Lyon-Saint Exupéry en 35 minutes par le boulevard Laurent-Bonnevay puis l'A43. Forfait aéroport identique à Lyon, prise en charge devant votre domicile." },
    ],
    whyUsEn: [
      { title: "La Doua–Part-Dieu campus shuttles", desc: "La Doua campus (INSA, Lyon 1) to Part-Dieu station transfer in 12 minutes via Cours Émile-Zola. Same rate as the Lyon network, no inter-commune supplement." },
      { title: "Same network as Lyon metropolis", desc: "Villeurbanne benefits from the same network of 1,200 TaxiNeo drivers as Lyon. Gratte-Ciel, Charpennes and Tonkin coverage at regulated Lyon metropolitan rates." },
      { title: "Direct Saint-Exupéry connection", desc: "Villeurbanne – Lyon-Saint Exupéry Airport in 35 minutes via Boulevard Laurent-Bonnevay then the A43. Airport flat rate identical to Lyon, home pickup included." },
    ],
  },
  "clermont-ferrand": {
    introFr: "Clermont-Ferrand, capitale de l'Auvergne et berceau de Michelin, est une ville universitaire dynamique au pied de la Chaîne des Puys (patrimoine UNESCO). TaxiNeo dessert l'aéroport Clermont-Ferrand Auvergne, la gare SNCF, le CHU Gabriel Montpied, le campus universitaire des Cézeaux et le Zénith d'Auvergne.",
    introEn: "Clermont-Ferrand, Auvergne's capital and Michelin's birthplace, is a dynamic university city at the foot of the Chaîne des Puys (UNESCO World Heritage). TaxiNeo serves Clermont-Ferrand Auvergne Airport, the SNCF station, Gabriel Montpied University Hospital, the Cézeaux university campus and the Zénith d'Auvergne.",
    descriptionFr: "La topographie volcanique de Clermont rend certains quartiers difficiles d'accès en transport en commun. Nos chauffeurs connaissent chaque rue du plateau central et assurent les transferts vers la station thermale de Royat, Vulcania et le sommet du Puy de Dôme. Tarifs réglementés toute l'année.",
    descriptionEn: "Clermont's volcanic topography makes some districts hard to reach by public transport. Our drivers know every street of the central plateau and handle transfers to the Royat spa, Vulcania and the Puy de Dôme summit. Regulated fares year-round.",
    metaDescriptionFr: "Taxi à Clermont-Ferrand : aéroport Auvergne, Vulcania, Puy de Dôme. Berceau de Michelin au cœur des volcans. Tarifs réglementés. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Clermont-Ferrand: Auvergne airport, Vulcania park, Puy de Dôme summit. Michelin's birthplace amid volcanoes. Regulated fares. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale de l'Auvergne au pied de la Chaîne des Puys UNESCO, Clermont-Ferrand dessert l'aéroport Auvergne, le CHU Montpied et Vulcania. La topographie volcanique rend le taxi indispensable pour les quartiers en hauteur et les transferts vers la station de Royat et le sommet du Puy de Dôme.",
    heroSubtitleEn: "Auvergne's capital at the foot of the UNESCO Chaîne des Puys, Clermont-Ferrand serves Auvergne Airport, Montpied University Hospital and Vulcania. The volcanic terrain makes taxis essential for hilltop districts and transfers to the Royat spa and the Puy de Dôme summit.",
    whyUsFr: [
      { title: "Maîtrise du plateau volcanique", desc: "La topographie volcanique de Clermont rend certains quartiers pentus (Montferrand, Champratel) difficiles d'accès. Nos chauffeurs connaissent chaque rue du plateau central et les raccourcis par la place de Jaude." },
      { title: "Excursions Puy de Dôme et Vulcania", desc: "Transferts vers le sommet du Puy de Dôme (15 km), Vulcania (20 km) et la station thermale de Royat (5 km). Mise à disposition pour la journée avec retour garanti depuis le Panoramique des Dômes." },
      { title: "Forfait aéroport Auvergne direct", desc: "Aéroport Clermont-Ferrand Auvergne à 7 km du centre via l'A71 : transfert en 12 minutes à tarif fixe réglementé. Suivi des vols et prise en charge au terminal sans supplément." },
    ],
    whyUsEn: [
      { title: "Volcanic plateau mastery", desc: "Clermont's volcanic topography makes some steep districts (Montferrand, Champratel) hard to reach. Our drivers know every street of the central plateau and shortcuts via Place de Jaude." },
      { title: "Puy de Dôme & Vulcania excursions", desc: "Transfers to the Puy de Dôme summit (15 km), Vulcania (20 km) and the Royat spa (5 km). Full-day hire with guaranteed return from the Panoramique des Dômes." },
      { title: "Direct Auvergne airport flat rate", desc: "Clermont-Ferrand Auvergne Airport 7 km from the centre via the A71: transfer in 12 minutes at a regulated fixed fare. Flight tracking and terminal pickup at no extra charge." },
    ],
  },
  "aix-en-provence": {
    introFr: "Aix-en-Provence, ville d'art et d'eau thermale, est un pôle culturel et universitaire majeur de la Provence. Située à 25 km de Marseille, elle est desservie par la gare TGV d'Aix et bénéficie de la proximité de l'aéroport Marseille-Provence. TaxiNeo assure vos transferts aéroport, vos courses vers le cours Mirabeau, le Festival d'Aix et le Camp des Milles.",
    introEn: "Aix-en-Provence, city of art and thermal springs, is a major cultural and university hub in Provence. Located 25 km from Marseille, it is served by Aix TGV station and benefits from nearby Marseille-Provence Airport. TaxiNeo handles airport transfers, rides to Cours Mirabeau, the Aix Festival and Camp des Milles.",
    descriptionFr: "La gare TGV d'Aix est excentrée (à l'Arbois) et le taxi est le moyen le plus pratique de rejoindre le centre historique. Nos chauffeurs assurent aussi la liaison Aix – aéroport Marseille-Provence à tarif compétitif. Service renforcé pendant le Festival International d'Art Lyrique en juillet.",
    descriptionEn: "Aix TGV station is located outside the city (at L'Arbois) and a taxi is the most convenient way to reach the historic centre. Our drivers also provide Aix – Marseille-Provence Airport connections at competitive rates. Enhanced service during the International Opera Festival in July.",
    metaDescriptionFr: "Taxi à Aix-en-Provence : gare TGV Arbois, aéroport Marseille-Provence, cours Mirabeau. Festival d'Aix chaque été en juillet. Réservez votre course TaxiNeo.",
    metaDescriptionEn: "Taxi in Aix-en-Provence: Arbois TGV station, Marseille-Provence airport, Cours Mirabeau. Famous Aix Festival every July. Book your ride now on TaxiNeo.",
    heroSubtitleFr: "Ville d'art provençale à 25 km de Marseille, Aix-en-Provence relie la gare TGV excentrée de l'Arbois à l'aéroport Marseille-Provence et au cours Mirabeau. Navette aéroport compétitive et service renforcé pendant le Festival International d'Art Lyrique chaque juillet.",
    heroSubtitleEn: "Provençal art city 25 km from Marseille, Aix-en-Provence connects the outlying Arbois TGV station to Marseille-Provence Airport and Cours Mirabeau. Competitive airport shuttle and enhanced service during the International Opera Festival every July.",
    whyUsFr: [
      { title: "Forfait gare TGV Arbois–centre", desc: "La gare TGV d'Aix est excentrée (plateau de l'Arbois, 15 km du cours Mirabeau). Nos taxis assurent le transfert en 20 minutes via la D9 à tarif forfaitaire fixe, sans surprise." },
      { title: "Navette aéroport Marseille-Provence", desc: "Aix-en-Provence – aéroport Marseille-Provence en 25 minutes via l'A51. Tarif compétitif garanti, prise en charge au terminal et synchronisation avec les vols." },
      { title: "Service Festival d'Art Lyrique", desc: "En juillet, service renforcé pour le Festival International d'Art Lyrique. Chauffeurs connaissant les accès au Théâtre de l'Archevêché, au Grand Théâtre de Provence et aux parkings du centre." },
    ],
    whyUsEn: [
      { title: "Arbois TGV station–centre flat rate", desc: "Aix TGV station is outside the city (Arbois plateau, 15 km from Cours Mirabeau). Our taxis make the transfer in 20 minutes via the D9 at a fixed flat fare, no surprises." },
      { title: "Marseille-Provence airport shuttle", desc: "Aix-en-Provence – Marseille-Provence Airport in 25 minutes via the A51. Guaranteed competitive fare, terminal pickup and flight synchronisation." },
      { title: "Opera Festival service", desc: "In July, enhanced service for the International Opera Festival. Drivers who know access to the Théâtre de l'Archevêché, the Grand Théâtre de Provence and city-centre car parks." },
    ],
  },
  "le-mans": {
    introFr: "Le Mans, mondialement connue pour ses 24 Heures et sa vieille ville médiévale (cité Plantagenêt), est un carrefour ferroviaire stratégique à 54 minutes de Paris en TGV. TaxiNeo dessert la gare du Mans, le circuit des 24 Heures, le Centre des Congrès, le CH du Mans et l'aéroport Le Mans-Arnage.",
    introEn: "Le Mans, world-famous for its 24 Hours race and medieval old town (Plantagenêt city), is a strategic railway junction 54 minutes from Paris by TGV. TaxiNeo serves Le Mans station, the 24 Hours circuit, the Convention Centre, Le Mans Hospital and Le Mans-Arnage Airport.",
    descriptionFr: "Pendant les 24 Heures du Mans et le Grand Prix moto, nos chauffeurs assurent les navettes entre la gare, les hôtels et le circuit. Service disponible 24h/24 même pendant les courses de nuit. Couverture de toute l'agglomération mancelle avec tarifs préfectoraux garantis.",
    descriptionEn: "During the 24 Hours of Le Mans and the MotoGP, our drivers provide shuttles between the station, hotels and the circuit. Service available 24/7 even during night racing. Coverage of the entire Le Mans area with guaranteed regulated fares.",
    metaDescriptionFr: "Taxi au Mans : gare TGV, circuit des 24 Heures, cité Plantagenêt. Seulement 54 min de Paris. Navettes circuit jour et nuit. Réservez sur TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Le Mans: TGV station, famous 24 Hours circuit, Plantagenêt old city. Only 54 min from Paris by TGV. Circuit shuttles day and night. Book TaxiNeo.",
    heroSubtitleFr: "Mondialement célèbre pour ses 24 Heures, Le Mans est un carrefour ferroviaire à 54 minutes de Paris en TGV. Navettes gare – circuit – hôtels disponibles 24h/24, y compris pendant les courses nocturnes, avec tarifs préfectoraux garantis sur toute l'agglomération mancelle.",
    heroSubtitleEn: "World-famous for its 24 Hours race, Le Mans is a railway junction 54 minutes from Paris by TGV. Station – circuit – hotel shuttles available 24/7, including during night racing, with guaranteed regulated fares across the entire Le Mans area.",
    whyUsFr: [
      { title: "Navettes 24 Heures jour et nuit", desc: "Pendant les 24 Heures du Mans, nos chauffeurs assurent les navettes gare – circuit – hôtels 24h/24, y compris à 3h du matin. Itinéraires d'accès au circuit par la D139 et la route de Tours." },
      { title: "Experts cité Plantagenêt", desc: "Chauffeurs connaissant les ruelles médiévales de la cité Plantagenêt, les accès au Centre des Congrès et les raccourcis entre la gare et le vieux Mans via la place de la République." },
      { title: "Transfert gare TGV–Arnage rapide", desc: "Gare du Mans – aérodrome Le Mans-Arnage en 15 minutes via l'avenue Bollée. Forfait gare–circuit des 24 Heures à tarif fixe, réservation possible 30 jours à l'avance." },
    ],
    whyUsEn: [
      { title: "24 Hours shuttles day & night", desc: "During the 24 Hours of Le Mans, our drivers provide station – circuit – hotel shuttles around the clock, even at 3 AM. Circuit access routes via the D139 and the Route de Tours." },
      { title: "Cité Plantagenêt experts", desc: "Drivers who know the medieval lanes of the Cité Plantagenêt, Convention Centre access and shortcuts between the station and old Le Mans via Place de la République." },
      { title: "Fast TGV station–Arnage transfer", desc: "Le Mans station – Le Mans-Arnage aerodrome in 15 minutes via Avenue Bollée. Fixed-fare station – 24 Hours circuit package, bookable up to 30 days in advance." },
    ],
  },
  brest: {
    introFr: "Brest, ville portuaire à la pointe de la Bretagne, est un pôle maritime et scientifique majeur (Ifremer, pôle mer Bretagne Atlantique). TaxiNeo dessert l'aéroport Brest Bretagne, la gare SNCF, le port militaire, le technopôle Brest-Iroise, le CHU de la Cavale Blanche et le château de Brest.",
    introEn: "Brest, a port city at the tip of Brittany, is a major maritime and scientific hub (Ifremer, Pôle Mer Bretagne Atlantique). TaxiNeo serves Brest Bretagne Airport, the SNCF station, the naval port, Brest-Iroise technology park, La Cavale Blanche University Hospital and Brest Castle.",
    descriptionFr: "Au bout de la Bretagne, Brest est éloignée des grandes lignes TGV et l'aéroport est essentiel pour les liaisons nationales. Nos chauffeurs assurent les transferts aéroport – centre-ville et les navettes vers Océanopolis, la rade de Brest et la presqu'île de Crozon. Service garanti même par grand vent !",
    descriptionEn: "At the tip of Brittany, Brest is far from TGV high-speed lines and the airport is essential for domestic connections. Our drivers handle airport – city centre transfers and shuttles to Océanopolis, the Brest harbour and the Crozon peninsula. Service guaranteed even in strong winds!",
    metaDescriptionFr: "Taxi à Brest : aéroport Bretagne, port militaire, parc Océanopolis, presqu'île de Crozon. À la pointe de la Bretagne. Réservation sur TaxiNeo 7j/7 24h/24.",
    metaDescriptionEn: "Taxi in Brest: Bretagne airport, naval port, Océanopolis aquarium, Crozon peninsula. At the very tip of Brittany. Book your ride on TaxiNeo 7 days a week.",
    heroSubtitleFr: "Ville portuaire à la pointe de la Bretagne, Brest est un pôle maritime et scientifique majeur. L'aéroport Bretagne est essentiel pour les liaisons nationales. Nos chauffeurs assurent transferts aéroport, navettes vers Océanopolis et la rade, et excursions presqu'île de Crozon par tous les temps.",
    heroSubtitleEn: "Port city at the tip of Brittany, Brest is a major maritime and scientific hub. Bretagne Airport is essential for domestic connections. Our drivers handle airport transfers, shuttles to Océanopolis and the harbour, and Crozon peninsula excursions in all weather.",
    whyUsFr: [
      { title: "Transfert aéroport Bretagne garanti", desc: "Aéroport Brest Bretagne à 10 km du centre via la RN265 : transfert en 15 minutes à tarif fixe. Essentiel à Brest, éloignée des lignes TGV, l'aéroport est le lien vital vers Paris et Lyon." },
      { title: "Excursions Crozon et pointe du Raz", desc: "Brest – presqu'île de Crozon (60 km) en 1h via la D791, Brest – pointe du Raz (70 km) en 1h10. Circuits côtiers avec chauffeur dédié, par tous les temps bretons." },
      { title: "Desserte rade et base navale", desc: "Nos chauffeurs maîtrisent les accès à la rade de Brest, au port militaire et au technopôle Brest-Iroise. Service adapté aux horaires de quart des marins et du personnel Ifremer." },
    ],
    whyUsEn: [
      { title: "Guaranteed Bretagne airport transfer", desc: "Brest Bretagne Airport 10 km from the centre via the RN265: transfer in 15 minutes at a fixed fare. Essential in Brest, far from TGV lines, the airport is the vital link to Paris and Lyon." },
      { title: "Crozon & Pointe du Raz excursions", desc: "Brest – Crozon peninsula (60 km) in 1h via the D791, Brest – Pointe du Raz (70 km) in 1h10. Coastal tours with a dedicated driver, in all Breton weather." },
      { title: "Harbour & naval base service", desc: "Our drivers master access to the Brest harbour, the naval port and the Brest-Iroise tech park. Service adapted to navy watch schedules and Ifremer staff hours." },
    ],
  },
  tours: {
    introFr: "Tours, jardin de la France au cœur du Val de Loire (patrimoine UNESCO), est le point de départ idéal pour visiter les châteaux de Chenonceau, Amboise, Chambord et Villandry. TaxiNeo dessert la gare Tours-Centre, la gare TGV Saint-Pierre-des-Corps, le CHU Trousseau et l'aéroport Tours Val de Loire.",
    introEn: "Tours, the Garden of France in the heart of the Loire Valley (UNESCO World Heritage), is the ideal starting point for visiting the châteaux of Chenonceau, Amboise, Chambord and Villandry. TaxiNeo serves Tours-Centre station, Saint-Pierre-des-Corps TGV station, Trousseau University Hospital and Tours Val de Loire Airport.",
    descriptionFr: "La gare TGV de Saint-Pierre-des-Corps est à 3 km du centre de Tours et le taxi est le moyen le plus rapide de rejoindre la ville. Nos chauffeurs proposent aussi des circuits châteaux de la Loire avec mise à disposition à la journée. Tarifs réglementés et estimation avant réservation.",
    descriptionEn: "Saint-Pierre-des-Corps TGV station is 3 km from Tours city centre and a taxi is the fastest way into town. Our drivers also offer Loire Valley château tours with full-day hire. Regulated fares and estimates before booking.",
    metaDescriptionFr: "Taxi à Tours : gare TGV Saint-Pierre-des-Corps, châteaux Chenonceau, Chambord, Amboise. Circuits châteaux de la Loire. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Tours: Saint-Pierre-des-Corps TGV station, Chenonceau, Chambord and Amboise châteaux. Loire Valley château tours. Regulated fares. Book TaxiNeo.",
    heroSubtitleFr: "Jardin de la France au cœur du Val de Loire UNESCO, Tours est le point de départ vers Chenonceau, Amboise et Chambord. La gare TGV de Saint-Pierre-des-Corps est à 3 km du centre : le taxi est le moyen le plus rapide. Circuits châteaux avec mise à disposition à la journée.",
    heroSubtitleEn: "Garden of France in the heart of the UNESCO Loire Valley, Tours is the starting point for Chenonceau, Amboise and Chambord. Saint-Pierre-des-Corps TGV station is 3 km from the centre: a taxi is the fastest way in. Château tours available with full-day hire.",
    whyUsFr: [
      { title: "Forfait gare Saint-Pierre–centre", desc: "La gare TGV de Saint-Pierre-des-Corps est à 3 km du centre de Tours : nos taxis assurent la liaison en 8 minutes via le pont de fil à tarif forfaitaire fixe, sans détour." },
      { title: "Circuits châteaux de la Loire", desc: "Mise à disposition pour Chenonceau (35 km), Amboise (25 km), Chambord (85 km) et Villandry (15 km). Chauffeurs experts des routes de campagne tourangelle et des horaires d'ouverture." },
      { title: "Desserte CHU Trousseau et campus", desc: "Service dédié au CHU Trousseau (Chambray-lès-Tours), au campus universitaire des Tanneurs et à la gare centre. Transferts inter-sites médicaux rapides via le périphérique sud." },
    ],
    whyUsEn: [
      { title: "Saint-Pierre station–centre flat rate", desc: "Saint-Pierre-des-Corps TGV station is 3 km from Tours centre: our taxis make the connection in 8 minutes via the Pont de Fil at a fixed flat fare, no detour." },
      { title: "Loire château circuits", desc: "Hourly hire for Chenonceau (35 km), Amboise (25 km), Chambord (85 km) and Villandry (15 km). Drivers expert in Touraine country roads and opening hours." },
      { title: "Trousseau hospital & campus service", desc: "Dedicated service to Trousseau University Hospital (Chambray-lès-Tours), the Tanneurs campus and the city-centre station. Fast inter-site medical transfers via the southern ring road." },
    ],
  },
  amiens: {
    introFr: "Amiens, capitale de la Picardie et ville de Jules Verne, possède la plus grande cathédrale gothique de France (patrimoine UNESCO). Desservie par la gare d'Amiens (1h10 de Paris), TaxiNeo assure vos transferts vers le CHU d'Amiens, le Zénith, le quartier Saint-Leu, l'université de Picardie et le parc zoologique.",
    introEn: "Amiens, Picardy's capital and Jules Verne's city, boasts France's largest Gothic cathedral (UNESCO World Heritage). Served by Amiens station (1h10 from Paris), TaxiNeo handles transfers to Amiens University Hospital, the Zénith, the Saint-Leu quarter, the University of Picardy and the zoo.",
    descriptionFr: "Amiens est une ville compacte mais ses quartiers périphériques et la zone industrielle nord sont mal desservis par les transports en commun. Nos chauffeurs amiénois assurent les navettes gare – hôpital – université et les transferts vers la baie de Somme, un des plus beaux sites naturels de France.",
    descriptionEn: "Amiens is a compact city but its outer districts and northern industrial zone are poorly served by public transport. Our Amiens drivers provide station – hospital – university shuttles and transfers to the Somme Bay, one of France's most beautiful natural sites.",
    metaDescriptionFr: "Taxi à Amiens : gare SNCF, cathédrale classée UNESCO, excursions baie de Somme. Seulement 1h10 de Paris. Navettes CHU et université. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Amiens: SNCF station, UNESCO-listed cathedral, Somme Bay excursions. Just 1h10 from Paris by train. Hospital and university shuttles. Book TaxiNeo.",
    heroSubtitleFr: "Capitale picarde à 1h10 de Paris, Amiens abrite la plus grande cathédrale gothique de France. Nos chauffeurs assurent navettes gare – CHU – université et transferts vers la baie de Somme, l'un des plus beaux sites naturels de France. Service idéal pour les quartiers périphériques mal desservis.",
    heroSubtitleEn: "Picardy's capital 1h10 from Paris, Amiens boasts France's largest Gothic cathedral. Our drivers provide station – hospital – university shuttles and transfers to the Somme Bay, one of France's most beautiful natural sites. Ideal service for poorly served outer districts.",
    whyUsFr: [
      { title: "Navette gare–CHU–université rapide", desc: "Transfert gare d'Amiens vers le CHU Sud (8 km) en 15 minutes via la rocade Est, ou vers le campus de l'université de Picardie (3 km) en 8 minutes par le boulevard de Beauvillé." },
      { title: "Excursions baie de Somme", desc: "Amiens – baie de Somme (50 km) en 45 minutes via l'A16. Circuits nature : Saint-Valéry-sur-Somme, Le Crotoy, parc du Marquenterre. Chauffeur dédié avec retour garanti." },
      { title: "Desserte quartiers nord et zone industrielle", desc: "Les quartiers nord et la zone industrielle d'Amiens sont mal couverts par le réseau Ametis. Nos chauffeurs assurent un service fiable vers Longueau et Rivery, à tarifs réglementés." },
    ],
    whyUsEn: [
      { title: "Fast station–hospital–campus shuttle", desc: "Amiens station to CHU Sud (8 km) in 15 minutes via the eastern ring road, or to the University of Picardy campus (3 km) in 8 minutes via Boulevard de Beauvillé." },
      { title: "Somme Bay excursions", desc: "Amiens – Somme Bay (50 km) in 45 minutes via the A16. Nature circuits: Saint-Valéry-sur-Somme, Le Crotoy, Marquenterre park. Dedicated driver with guaranteed return." },
      { title: "Northern districts & industrial zone", desc: "Amiens' northern districts and industrial zone are poorly covered by the Ametis network. Our drivers provide reliable service to Longueau and Rivery at regulated fares." },
    ],
  },
  limoges: {
    introFr: "Limoges, capitale de la porcelaine et des arts du feu, est le cœur économique de la Haute-Vienne. Desservie par l'aéroport Limoges-Bellegarde et la gare de Limoges-Bénédictins (une des plus belles de France), TaxiNeo assure vos déplacements vers le CHU Dupuytren, l'université et le centre-ville historique.",
    introEn: "Limoges, capital of porcelain and fire arts, is the economic heart of Haute-Vienne. Served by Limoges-Bellegarde Airport and Gare de Limoges-Bénédictins (one of France's most beautiful stations), TaxiNeo handles rides to Dupuytren University Hospital, the university and the historic city centre.",
    descriptionFr: "La gare des Bénédictins est un joyau architectural mais sa situation excentrée rend le taxi pratique pour rejoindre le centre. L'aéroport Bellegarde dessert des lignes low-cost vers le Royaume-Uni et nos chauffeurs sont présents à chaque arrivée. Couverture de toute l'agglomération limougeaude.",
    descriptionEn: "Bénédictins station is an architectural gem but its location makes a taxi convenient for reaching the centre. Bellegarde Airport serves low-cost routes to the UK and our drivers are present at every arrival. Coverage of the entire Limoges metropolitan area.",
    metaDescriptionFr: "Taxi à Limoges : gare des Bénédictins, aéroport Bellegarde, CHU Dupuytren. Capitale de la porcelaine française. Tarifs réglementés. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Limoges: Bénédictins station, Bellegarde airport, Dupuytren hospital. Capital of fine French porcelain. Regulated fares. Book online on TaxiNeo.",
    heroSubtitleFr: "Capitale de la porcelaine et des arts du feu, Limoges est desservie par la gare des Bénédictins, l'une des plus belles de France, et l'aéroport Bellegarde avec ses lignes low-cost vers le Royaume-Uni. Chauffeurs présents à chaque arrivée, couverture de toute l'agglomération limougeaude.",
    heroSubtitleEn: "Capital of porcelain and fire arts, Limoges is served by Bénédictins station, one of France's most beautiful, and Bellegarde Airport with low-cost UK routes. Drivers present at every arrival, covering the entire Limoges metropolitan area.",
    whyUsFr: [
      { title: "Accueil gare des Bénédictins", desc: "La gare Limoges-Bénédictins est un joyau Art Déco mais excentrée du centre. Nos chauffeurs vous attendent sur le parvis pour un transfert en 5 minutes vers la place de la République et le centre historique." },
      { title: "Navette aéroport Bellegarde", desc: "Aéroport Limoges-Bellegarde à 8 km du centre via la D979 : transfert en 12 minutes. Chauffeurs présents à l'arrivée de chaque vol, y compris les low-cost vers Londres, Bristol et Manchester." },
      { title: "Couverture Haute-Vienne complète", desc: "Service étendu à toute l'agglomération limougeaude : Panazol, Couzeix, Isle et la zone industrielle nord. Tarifs réglementés identiques en ville et en périphérie." },
    ],
    whyUsEn: [
      { title: "Bénédictins station welcome", desc: "Limoges-Bénédictins station is an Art Deco gem but located away from the centre. Our drivers wait at the forecourt for a 5-minute transfer to Place de la République and the historic centre." },
      { title: "Bellegarde airport shuttle", desc: "Limoges-Bellegarde Airport 8 km from the centre via the D979: transfer in 12 minutes. Drivers present at every flight arrival, including low-cost routes to London, Bristol and Manchester." },
      { title: "Full Haute-Vienne coverage", desc: "Service across the entire Limoges area: Panazol, Couzeix, Isle and the northern industrial zone. Identical regulated fares in the city and suburbs." },
    ],
  },
  annecy: {
    introFr: "Annecy, la Venise des Alpes, enchante par son lac cristallin, sa vieille ville médiévale et ses montagnes environnantes. Station touristique internationale été comme hiver, Annecy est desservie par la gare SNCF et bénéficie de la proximité de l'aéroport de Genève (40 min). TaxiNeo assure transferts aéroport, courses lacustres et navettes vers les stations de ski.",
    introEn: "Annecy, the Venice of the Alps, enchants with its crystal-clear lake, medieval old town and surrounding mountains. An international tourist resort in summer and winter, Annecy is served by the SNCF station and benefits from nearby Geneva Airport (40 min). TaxiNeo handles airport transfers, lakeside rides and ski resort shuttles.",
    descriptionFr: "Nos chauffeurs annéciens assurent les transferts vers l'aéroport de Genève-Cointrin, les stations de ski de la Clusaz, le Grand-Bornand et Megève, ainsi que les déplacements autour du lac. Véhicules équipés pneus neige en hiver. Service renforcé pendant le Festival du Film d'Animation et la Fête du Lac.",
    descriptionEn: "Our Annecy drivers handle transfers to Geneva-Cointrin Airport, ski resorts at La Clusaz, Le Grand-Bornand and Megève, and lakeside trips. Vehicles equipped with snow tyres in winter. Enhanced service during the Animation Film Festival and the Fête du Lac.",
    metaDescriptionFr: "Taxi à Annecy : aéroport de Genève, stations La Clusaz et Megève, lac d'Annecy. Venise des Alpes. Véhicules équipés neige. Réservez votre transfert TaxiNeo.",
    metaDescriptionEn: "Taxi in Annecy: Geneva airport, La Clusaz, Megève ski resorts, Lake Annecy. Venice of the Alps. Snow-equipped vehicles. Book your transfer on TaxiNeo.",
    heroSubtitleFr: "Venise des Alpes au lac cristallin, Annecy bénéficie de la proximité de l'aéroport de Genève à 40 minutes. Nos chauffeurs équipés pneus neige assurent transferts aéroport, navettes stations de ski La Clusaz et Megève, et courses lacustres toute l'année.",
    heroSubtitleEn: "Venice of the Alps with its crystal-clear lake, Annecy benefits from nearby Geneva Airport just 40 minutes away. Our snow-tyre-equipped drivers handle airport transfers, ski resort shuttles to La Clusaz and Megève, and lakeside rides year-round.",
    whyUsFr: [
      { title: "Transfert aéroport Genève–Annecy", desc: "Annecy – aéroport de Genève-Cointrin en 40 minutes via l'A41. Forfait transfrontalier garanti, chauffeurs habitués aux formalités douanières et au trafic de l'autoroute blanche." },
      { title: "Navettes ski La Clusaz et Megève", desc: "Transferts vers La Clusaz (32 km, 40 min), Le Grand-Bornand et Megève (70 km, 1h) avec 4x4 équipés pneus neige. Départ lac d'Annecy ou gare SNCF, retour garanti en fin de journée." },
      { title: "Circuits lac et vieille ville", desc: "Tour du lac d'Annecy (40 km) avec arrêts à Talloires, Menthon-Saint-Bernard et le col de la Forclaz. Chauffeurs connaissant les points de vue et les restaurants au bord de l'eau." },
    ],
    whyUsEn: [
      { title: "Geneva Airport–Annecy transfer", desc: "Annecy – Geneva-Cointrin Airport in 40 minutes via the A41. Guaranteed cross-border flat rate, drivers experienced with customs formalities and Autoroute Blanche traffic." },
      { title: "La Clusaz & Megève ski shuttles", desc: "Transfers to La Clusaz (32 km, 40 min), Le Grand-Bornand and Megève (70 km, 1h) with 4x4 snow-tyre-equipped vehicles. Lake Annecy or SNCF station departure, guaranteed end-of-day return." },
      { title: "Lake & old town circuits", desc: "Lake Annecy loop (40 km) with stops at Talloires, Menthon-Saint-Bernard and Col de la Forclaz. Drivers who know the viewpoints and lakeside restaurants." },
    ],
  },
  perpignan: {
    introFr: "Perpignan, capitale du Roussillon aux portes de l'Espagne, est une ville méditerranéenne ensoleillée entre mer et montagne. Desservie par la gare TGV (à 5h de Paris, 1h20 de Barcelone) et l'aéroport Perpignan-Rivesaltes, TaxiNeo vous transporte vers les plages de Canet, Collioure, le Canigou et la frontière espagnole.",
    introEn: "Perpignan, capital of Roussillon at Spain's doorstep, is a sunny Mediterranean city between sea and mountains. Served by the TGV station (5h from Paris, 1h20 from Barcelona) and Perpignan-Rivesaltes Airport, TaxiNeo takes you to Canet beaches, Collioure, Mount Canigou and the Spanish border.",
    descriptionFr: "Ville frontalière, Perpignan est le point de passage entre la France et la Catalogne espagnole. Nos chauffeurs assurent les transferts vers Le Perthus, la Côte Vermeille (Collioure, Banyuls) et les stations thermales des Pyrénées-Orientales. Tarifs réglementés et service bilingue français-catalan.",
    descriptionEn: "A border city, Perpignan is the crossing point between France and Spanish Catalonia. Our drivers handle transfers to Le Perthus, the Côte Vermeille (Collioure, Banyuls) and Pyrénées-Orientales spa resorts. Regulated fares and French-Catalan bilingual service.",
    metaDescriptionFr: "Taxi à Perpignan : gare TGV, aéroport Rivesaltes, Collioure, frontière espagnole. Capitale catalane du Roussillon. Service bilingue FR/ES. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Perpignan: TGV station, Rivesaltes airport, Collioure, Spanish border. Catalan capital of Roussillon. Bilingual FR/ES service. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale du Roussillon aux portes de l'Espagne, Perpignan relie la gare TGV et l'aéroport Rivesaltes aux plages de Canet, Collioure et la frontière catalane. Service bilingue français-catalan et transferts vers Le Perthus, la Côte Vermeille et les stations thermales pyrénéennes.",
    heroSubtitleEn: "Capital of Roussillon at Spain's doorstep, Perpignan connects the TGV station and Rivesaltes Airport to Canet beaches, Collioure and the Catalan border. French-Catalan bilingual service and transfers to Le Perthus, the Côte Vermeille and Pyrenean spa resorts.",
    whyUsFr: [
      { title: "Navettes frontière catalane", desc: "Perpignan – Le Perthus (30 km) en 25 minutes via l'A9, Perpignan – Figueras (60 km) en 45 minutes. Service bilingue français-catalan pour les transferts transfrontaliers vers l'Espagne." },
      { title: "Côte Vermeille et plages de Canet", desc: "Transferts vers Collioure (27 km, 25 min), Banyuls-sur-Mer (37 km, 35 min) et les plages de Canet-en-Roussillon (12 km, 15 min). Chauffeurs connaissant la D914 côtière." },
      { title: "Forfait aéroport Rivesaltes", desc: "Aéroport Perpignan-Rivesaltes à 5 km du centre : transfert en 10 minutes à tarif fixe. Prise en charge à l'arrivée des vols saisonniers et des lignes Ryanair vers le Royaume-Uni." },
    ],
    whyUsEn: [
      { title: "Catalan border shuttles", desc: "Perpignan – Le Perthus (30 km) in 25 minutes via the A9, Perpignan – Figueras (60 km) in 45 minutes. French-Catalan bilingual service for cross-border transfers to Spain." },
      { title: "Côte Vermeille & Canet beaches", desc: "Transfers to Collioure (27 km, 25 min), Banyuls-sur-Mer (37 km, 35 min) and Canet-en-Roussillon beaches (12 km, 15 min). Drivers who know the coastal D914." },
      { title: "Rivesaltes airport flat rate", desc: "Perpignan-Rivesaltes Airport 5 km from the centre: transfer in 10 minutes at a fixed fare. Pickup on arrival of seasonal flights and Ryanair UK routes." },
    ],
  },
  besancon: {
    introFr: "Besançon, capitale de l'horlogerie française et ville fortifiée par Vauban (patrimoine UNESCO), est nichée dans une boucle du Doubs. TaxiNeo dessert la gare Besançon Viotte, la gare TGV Franche-Comté, le CHU Jean Minjoz, la Citadelle et le campus universitaire de la Bouloie.",
    introEn: "Besançon, capital of French watchmaking and Vauban-fortified city (UNESCO World Heritage), is nestled in a loop of the Doubs river. TaxiNeo serves Besançon Viotte station, Franche-Comté TGV station, Jean Minjoz University Hospital, the Citadel and the Bouloie university campus.",
    descriptionFr: "La gare TGV Franche-Comté est excentrée (à Auxon-Dessus) et le taxi est le moyen le plus pratique de rejoindre le centre. Nos chauffeurs assurent aussi les transferts vers les stations de Métabief, les salines d'Arc-et-Senans et la Citadelle Vauban. Couverture complète du Grand Besançon.",
    descriptionEn: "Franche-Comté TGV station is outside the city (at Auxon-Dessus) and a taxi is the most convenient way to reach the centre. Our drivers also handle transfers to Métabief resorts, Arc-et-Senans saltworks and the Vauban Citadel. Full coverage of Greater Besançon.",
    metaDescriptionFr: "Taxi à Besançon : gare TGV Franche-Comté, Citadelle Vauban classée UNESCO, station de Métabief. Capitale de l'horlogerie. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Besançon: Franche-Comté TGV station, Vauban Citadel (UNESCO), Métabief ski resort. Watchmaking capital of France. Regulated fares. Book TaxiNeo.",
    heroSubtitleFr: "Capitale de l'horlogerie française et ville fortifiée par Vauban, Besançon est nichée dans une boucle du Doubs. La gare TGV Franche-Comté est excentrée : le taxi est le moyen le plus pratique de rejoindre le centre, la Citadelle ou les pistes de Métabief.",
    heroSubtitleEn: "Capital of French watchmaking and Vauban-fortified city, Besançon is nestled in a loop of the Doubs. Franche-Comté TGV station is outside the city: a taxi is the most convenient way to reach the centre, the Citadel or the Métabief slopes.",
    whyUsFr: [
      { title: "Forfait gare TGV Auxon–centre", desc: "La gare TGV Besançon Franche-Comté est à Auxon-Dessus (12 km du centre). Nos taxis assurent le transfert en 15 minutes via la N57 à tarif forfaitaire fixe, sans détour." },
      { title: "Navettes Citadelle Vauban et campus", desc: "Transport vers la Citadelle Vauban (UNESCO) perchée à 100 m de hauteur, le campus de la Bouloie et le CHU Jean Minjoz. Chauffeurs maîtrisant les rues pentues de la boucle du Doubs." },
      { title: "Transferts ski Métabief et Jura", desc: "Besançon – Métabief (75 km) en 1h via la D67, navettes vers les stations jurassiennes avec véhicules équipés neige. Service idéal pour les week-ends ski depuis la gare TGV." },
    ],
    whyUsEn: [
      { title: "Auxon TGV station–centre flat rate", desc: "Besançon Franche-Comté TGV station is in Auxon-Dessus (12 km from the centre). Our taxis make the transfer in 15 minutes via the N57 at a fixed flat fare, no detour." },
      { title: "Citadel & campus shuttles", desc: "Transport to the Vauban Citadel (UNESCO) perched 100 m high, the Bouloie campus and Jean Minjoz University Hospital. Drivers who master the steep streets of the Doubs loop." },
      { title: "Métabief & Jura ski transfers", desc: "Besançon – Métabief (75 km) in 1h via the D67, shuttles to Jura resorts with snow-equipped vehicles. Ideal for ski weekends from the TGV station." },
    ],
  },
  metz: {
    introFr: "Metz, ville d'art et d'histoire au confluent de la Moselle et de la Seille, rayonne avec son Centre Pompidou-Metz et sa cathédrale aux vitraux exceptionnels. Desservie par la gare TGV (1h24 de Paris), TaxiNeo assure vos transferts vers le CHR Metz-Thionville, le technopôle et l'aéroport Metz-Nancy-Lorraine.",
    introEn: "Metz, city of art and history at the confluence of the Moselle and Seille, shines with its Centre Pompidou-Metz and cathedral with exceptional stained glass. Served by the TGV station (1h24 from Paris), TaxiNeo handles transfers to Metz-Thionville Regional Hospital, the technology park and Metz-Nancy-Lorraine Airport.",
    descriptionFr: "Située à un carrefour franco-luxembourgeois, Metz voit transiter des milliers de travailleurs frontaliers chaque jour. Nos chauffeurs assurent les transferts vers le Luxembourg, l'aéroport Metz-Nancy-Lorraine et les zones d'activités de Technopôle. Service fiable les jours de match au stade Saint-Symphorien.",
    descriptionEn: "Located at a Franco-Luxembourgish crossroads, Metz sees thousands of cross-border workers commuting daily. Our drivers handle transfers to Luxembourg, Metz-Nancy-Lorraine Airport and Technopôle business parks. Reliable service on match days at Saint-Symphorien Stadium.",
    metaDescriptionFr: "Taxi à Metz : gare TGV, Centre Pompidou-Metz, aéroport Lorraine, navettes vers Luxembourg. Carrefour franco-luxembourgeois. Réservation en ligne TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Metz: TGV station, Centre Pompidou-Metz, Lorraine airport, Luxembourg shuttles. Franco-Luxembourgish crossroads. Book online now on TaxiNeo 24/7.",
    heroSubtitleFr: "Ville d'art au confluent de la Moselle et de la Seille, Metz rayonne avec le Centre Pompidou-Metz et sa cathédrale aux vitraux exceptionnels. Carrefour franco-luxembourgeois, nos chauffeurs assurent transferts vers le Luxembourg, l'aéroport Lorraine et le Technopôle.",
    heroSubtitleEn: "Art city at the confluence of the Moselle and Seille, Metz shines with Centre Pompidou-Metz and its cathedral's exceptional stained glass. A Franco-Luxembourgish crossroads, our drivers handle transfers to Luxembourg, Lorraine Airport and the Technopôle.",
    whyUsFr: [
      { title: "Navettes Luxembourg quotidiennes", desc: "Metz – Luxembourg-Ville en 50 minutes via l'A31. Service adapté aux travailleurs frontaliers avec prise en charge tôt le matin et retour en soirée. Forfait transfrontalier garanti." },
      { title: "Experts Pompidou-Metz et cathédrale", desc: "Nos chauffeurs connaissent les accès au Centre Pompidou-Metz (quartier de l'Amphithéâtre), à la cathédrale Saint-Étienne et les ruelles de l'île du Petit-Saulcy et du quartier impérial." },
      { title: "Forfait aéroport Lorraine partagé", desc: "Aéroport Metz-Nancy-Lorraine à 20 km de Metz via l'A4 : transfert en 20 minutes. Forfait réglementé fixe, suivi des vols et chauffeurs présents à chaque arrivée." },
    ],
    whyUsEn: [
      { title: "Daily Luxembourg shuttles", desc: "Metz – Luxembourg City in 50 minutes via the A31. Service tailored to cross-border workers with early-morning pickup and evening return. Guaranteed cross-border flat rate." },
      { title: "Pompidou-Metz & cathedral experts", desc: "Our drivers know access to Centre Pompidou-Metz (Amphithéâtre district), Saint-Étienne Cathedral and the lanes of Île du Petit-Saulcy and the Imperial Quarter." },
      { title: "Shared Lorraine airport flat rate", desc: "Metz-Nancy-Lorraine Airport 20 km from Metz via the A4: transfer in 20 minutes. Regulated fixed fare, flight tracking and drivers present at every arrival." },
    ],
  },
  orleans: {
    introFr: "Orléans, cité johannique au cœur du Val de Loire, est une ville dynamique à 1h10 de Paris. Desservie par la gare d'Orléans et la gare des Aubrais-Orléans (TGV), TaxiNeo assure vos transferts vers le CHR d'Orléans, le campus universitaire, la cathédrale et les châteaux de la Loire voisins.",
    introEn: "Orléans, Joan of Arc's city in the heart of the Loire Valley, is a dynamic city 1h10 from Paris. Served by Orléans station and Aubrais-Orléans station (TGV), TaxiNeo handles transfers to Orléans Regional Hospital, the university campus, the cathedral and nearby Loire châteaux.",
    descriptionFr: "La gare des Aubrais est excentrée par rapport au centre d'Orléans et le taxi est le lien le plus direct. Nos chauffeurs orléanais proposent aussi des excursions vers Chambord, Cheverny et Beaugency. Service renforcé pendant les Fêtes de Jeanne d'Arc en mai.",
    descriptionEn: "Les Aubrais station is outside central Orléans and a taxi is the most direct link. Our Orléans drivers also offer excursions to Chambord, Cheverny and Beaugency. Enhanced service during the Joan of Arc Festival in May.",
    metaDescriptionFr: "Taxi à Orléans : gare des Aubrais, cathédrale Sainte-Croix, châteaux Chambord et Cheverny. Cité johannique, 1h10 de Paris. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Orléans: Les Aubrais station, Sainte-Croix cathedral, Chambord, Cheverny châteaux. Joan of Arc's city, 1h10 from Paris. Regulated fares. Book TaxiNeo.",
    heroSubtitleFr: "Cité johannique au cœur du Val de Loire à 1h10 de Paris, Orléans relie la gare excentrée des Aubrais au centre historique et aux châteaux voisins. Excursions Chambord, Cheverny et Beaugency avec chauffeur dédié. Service renforcé pendant les Fêtes de Jeanne d'Arc en mai.",
    heroSubtitleEn: "Joan of Arc's city in the heart of the Loire Valley, 1h10 from Paris, Orléans connects the outlying Les Aubrais station to the historic centre and nearby châteaux. Chambord, Cheverny and Beaugency excursions with a dedicated driver. Enhanced service during the Joan of Arc Festival in May.",
    whyUsFr: [
      { title: "Forfait gare Aubrais–centre-ville", desc: "La gare des Aubrais-Orléans est à 4 km du centre : nos taxis assurent le transfert en 10 minutes via l'avenue de Paris à tarif forfaitaire fixe, synchronisé avec les arrivées TGV." },
      { title: "Excursions Chambord et Beaugency", desc: "Orléans – Chambord (55 km) en 45 minutes via la D951, Orléans – Beaugency (28 km) en 25 minutes. Circuits châteaux de la Loire avec mise à disposition et retour garanti." },
      { title: "Service Fêtes de Jeanne d'Arc", desc: "Chaque mai, disponibilité renforcée pendant les Fêtes johanniques. Nos chauffeurs connaissent les rues fermées autour de la cathédrale et les itinéraires de contournement par les quais de Loire." },
    ],
    whyUsEn: [
      { title: "Aubrais station–centre flat rate", desc: "Les Aubrais-Orléans station is 4 km from the centre: our taxis make the transfer in 10 minutes via Avenue de Paris at a fixed flat fare, synchronised with TGV arrivals." },
      { title: "Chambord & Beaugency excursions", desc: "Orléans – Chambord (55 km) in 45 minutes via the D951, Orléans – Beaugency (28 km) in 25 minutes. Loire château circuits with hourly hire and guaranteed return." },
      { title: "Joan of Arc Festival service", desc: "Every May, enhanced availability during the Joan of Arc celebrations. Our drivers know the closed streets around the cathedral and bypass routes along the Loire quays." },
    ],
  },
  rouen: {
    introFr: "Rouen, capitale de la Normandie et ville aux cent clochers, est un trésor d'architecture médiévale le long de la Seine. Desservie par la gare Rouen-Rive-Droite (1h15 de Paris), TaxiNeo assure vos transferts vers le CHU Charles Nicolle, le quartier d'affaires Saint-Sever, le port maritime et le Panorama XXL.",
    introEn: "Rouen, Normandy's capital and city of a hundred spires, is a treasure of medieval architecture along the Seine. Served by Rouen-Rive-Droite station (1h15 from Paris), TaxiNeo handles transfers to Charles Nicolle University Hospital, the Saint-Sever business district, the maritime port and the Panorama XXL.",
    descriptionFr: "Rouen est une ville aux ruelles médiévales étroites où le taxi est souvent le moyen le plus pratique de se déplacer. Nos chauffeurs assurent aussi les liaisons vers l'aéroport Paris-CDG (2h) et les plages normandes. Service renforcé pendant l'Armada de Rouen, grand rassemblement de voiliers.",
    descriptionEn: "Rouen is a city of narrow medieval streets where taxis are often the most practical way to get around. Our drivers also provide connections to Paris-CDG Airport (2h) and the Normandy beaches. Enhanced service during the Armada de Rouen, a major tall ships gathering.",
    metaDescriptionFr: "Taxi à Rouen : gare Rive-Droite, port maritime, plages normandes à proximité. Capitale historique de la Normandie, 1h15 de Paris. Réservation TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Rouen: Rive-Droite station, maritime port, nearby Normandy beaches. Historic capital of Normandy, just 1h15 from Paris. Book online on TaxiNeo.",
    heroSubtitleFr: "Capitale de la Normandie et ville aux cent clochers, Rouen enchante par ses ruelles médiévales le long de la Seine. Le taxi est le moyen le plus pratique de circuler dans le vieux centre. Liaisons Paris-CDG en 2h, excursions plages normandes et service renforcé pendant l'Armada.",
    heroSubtitleEn: "Normandy's capital and city of a hundred spires, Rouen enchants with its medieval lanes along the Seine. Taxis are the most practical way to navigate the old centre. Paris-CDG connections in 2h, Normandy beach excursions and enhanced service during the Armada.",
    whyUsFr: [
      { title: "Navigation ruelles médiévales", desc: "Les ruelles étroites du vieux Rouen (quartier Saint-Maclou, rue du Gros-Horloge) sont difficilement accessibles en VTC. Nos chauffeurs connaissent chaque passage et chaque sens unique du centre historique." },
      { title: "Liaison Paris-CDG en 2 heures", desc: "Rouen – aéroport Paris-CDG en 2h via l'A13 puis l'A1. Forfait fixe garanti pour vos transferts aéroport, avec prise en charge à domicile et suivi des retards de vol." },
      { title: "Excursions côte normande et Armada", desc: "Transferts vers Dieppe (60 km, 50 min), les plages de Deauville (100 km, 1h15) et Giverny (65 km, 50 min). Service renforcé lors de l'Armada de Rouen, rassemblement de voiliers sur les quais de Seine." },
    ],
    whyUsEn: [
      { title: "Medieval lane navigation", desc: "Rouen's narrow old-town lanes (Saint-Maclou quarter, Rue du Gros-Horloge) are hard for rideshare drivers to access. Our drivers know every passage and one-way street in the historic centre." },
      { title: "Paris-CDG link in 2 hours", desc: "Rouen – Paris-CDG Airport in 2h via the A13 then A1. Guaranteed fixed fare for airport transfers, with home pickup and flight delay tracking." },
      { title: "Normandy coast & Armada excursions", desc: "Transfers to Dieppe (60 km, 50 min), Deauville beaches (100 km, 1h15) and Giverny (65 km, 50 min). Enhanced service during the Armada de Rouen tall ships gathering on the Seine quays." },
    ],
  },
  mulhouse: {
    introFr: "Mulhouse, capitale européenne des musées techniques (Cité de l'Automobile, Cité du Train), est une ville industrielle dynamique au cœur du triangle Bâle-Fribourg-Strasbourg. TaxiNeo dessert la gare de Mulhouse, l'aéroport international EuroAirport Bâle-Mulhouse, le campus universitaire et les musées.",
    introEn: "Mulhouse, European capital of technical museums (Cité de l'Automobile, Cité du Train), is a dynamic industrial city at the heart of the Basel-Freiburg-Strasbourg triangle. TaxiNeo serves Mulhouse station, EuroAirport Basel-Mulhouse international airport, the university campus and the museums.",
    descriptionFr: "L'EuroAirport Bâle-Mulhouse est un aéroport trinational unique en Europe, et nos chauffeurs maîtrisent les accès côté français, suisse et allemand. Navettes disponibles vers Bâle, Fribourg-en-Brisgau et Colmar. Service multilingue et tarifs réglementés pour tous les transferts.",
    descriptionEn: "EuroAirport Basel-Mulhouse is a unique trinational airport in Europe, and our drivers master the French, Swiss and German access points. Shuttles available to Basel, Freiburg and Colmar. Multilingual service and regulated fares for all transfers.",
    metaDescriptionFr: "Taxi à Mulhouse : EuroAirport Bâle-Mulhouse, Cité de l'Automobile, Cité du Train. Au cœur du triangle trinational. Service multilingue. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Mulhouse: EuroAirport Basel-Mulhouse, Cité de l'Automobile, Cité du Train. Heart of the trinational triangle. Multilingual service. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale européenne des musées techniques au cœur du triangle Bâle-Fribourg-Strasbourg, Mulhouse dessert l'EuroAirport trinational unique en Europe. Nos chauffeurs maîtrisent les accès français, suisse et allemand avec un service multilingue et des navettes vers Bâle, Fribourg et Colmar.",
    heroSubtitleEn: "European capital of technical museums at the heart of the Basel-Freiburg-Strasbourg triangle, Mulhouse serves Europe's unique trinational EuroAirport. Our drivers master French, Swiss and German access points with multilingual service and shuttles to Basel, Freiburg and Colmar.",
    whyUsFr: [
      { title: "Maîtrise EuroAirport trinational", desc: "L'EuroAirport Bâle-Mulhouse est un aéroport unique avec des sorties côté France, Suisse et Allemagne. Nos chauffeurs connaissent les trois accès et les formalités douanières associées." },
      { title: "Navettes Bâle et Fribourg-en-Brisgau", desc: "Mulhouse – Bâle (35 km) en 30 minutes via l'A35, Mulhouse – Fribourg-en-Brisgau (60 km) en 50 minutes. Service multilingue FR/DE/EN et tarifs transfrontaliers garantis." },
      { title: "Circuits musées et patrimoine industriel", desc: "Transferts vers la Cité de l'Automobile (collection Schlumpf), la Cité du Train et le musée EDF Electropolis. Chauffeurs connaissant les parkings et les accès handicapés de chaque site." },
    ],
    whyUsEn: [
      { title: "Trinational EuroAirport mastery", desc: "EuroAirport Basel-Mulhouse is a unique airport with French, Swiss and German exits. Our drivers know all three access points and associated customs formalities." },
      { title: "Basel & Freiburg shuttles", desc: "Mulhouse – Basel (35 km) in 30 minutes via the A35, Mulhouse – Freiburg im Breisgau (60 km) in 50 minutes. Multilingual FR/DE/EN service and guaranteed cross-border fares." },
      { title: "Museum & industrial heritage circuits", desc: "Transfers to the Cité de l'Automobile (Schlumpf collection), the Cité du Train and the EDF Electropolis museum. Drivers who know the parking and accessibility access of each site." },
    ],
  },
  caen: {
    introFr: "Caen, cité de Guillaume le Conquérant et mémorial du Débarquement, est la capitale de la Normandie occidentale. Desservie par la gare SNCF (2h de Paris), l'aéroport Caen-Carpiquet et le port ferry d'Ouistreham, TaxiNeo assure vos transferts vers le CHU, le Mémorial, les plages du Débarquement et le campus universitaire.",
    introEn: "Caen, William the Conqueror's city and D-Day memorial site, is the capital of western Normandy. Served by the SNCF station (2h from Paris), Caen-Carpiquet Airport and the Ouistreham ferry port, TaxiNeo handles transfers to the university hospital, the Memorial, the D-Day beaches and the university campus.",
    descriptionFr: "Le port ferry d'Ouistreham relie Caen à Portsmouth (Angleterre) et génère un flux important de voyageurs. Nos chauffeurs assurent les transferts port – centre-ville – gare et les excursions vers les plages du Débarquement (Omaha, Juno, Sword). Service en anglais disponible pour les visiteurs britanniques.",
    descriptionEn: "Ouistreham ferry port connects Caen to Portsmouth (England) and generates significant passenger traffic. Our drivers handle port – city centre – station transfers and excursions to the D-Day beaches (Omaha, Juno, Sword). English-speaking service available for British visitors.",
    metaDescriptionFr: "Taxi à Caen : gare SNCF, ferry de Ouistreham, Mémorial de Caen, plages du Débarquement. Capitale de la Normandie. Service en anglais. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Caen: SNCF station, Ouistreham ferry port, Caen Memorial, D-Day landing beaches. Normandy's capital city. English-speaking service. Book TaxiNeo.",
    heroSubtitleFr: "Cité de Guillaume le Conquérant et mémorial du Débarquement, Caen relie le port ferry d'Ouistreham à la gare SNCF et au Mémorial. Excursions plages du Débarquement (Omaha, Juno, Sword) et transferts port – centre avec service en anglais pour les visiteurs britanniques.",
    heroSubtitleEn: "William the Conqueror's city and D-Day memorial, Caen connects the Ouistreham ferry port to the SNCF station and the Memorial. D-Day beach excursions (Omaha, Juno, Sword) and port – centre transfers with English-speaking service for British visitors.",
    whyUsFr: [
      { title: "Transferts ferry Ouistreham–centre", desc: "Port ferry d'Ouistreham – centre de Caen en 20 minutes via le canal et la D515. Prise en charge synchronisée avec les arrivées des ferries Brittany Ferries depuis Portsmouth." },
      { title: "Circuits plages du Débarquement", desc: "Excursions vers Omaha Beach (40 km, 40 min), Juno Beach (20 km, 20 min) et Sword Beach (15 km, 15 min). Chauffeurs bilingues FR/EN connaissant les sites mémoriels et cimetières militaires." },
      { title: "Accueil Mémorial et château", desc: "Transport direct vers le Mémorial de Caen (4 km du centre) et le château de Guillaume le Conquérant. Service en anglais pour les visiteurs britanniques débarquant du ferry." },
    ],
    whyUsEn: [
      { title: "Ouistreham ferry–centre transfers", desc: "Ouistreham ferry port – Caen centre in 20 minutes via the canal and D515. Pickup synchronised with Brittany Ferries arrivals from Portsmouth." },
      { title: "D-Day beach circuits", desc: "Excursions to Omaha Beach (40 km, 40 min), Juno Beach (20 km, 20 min) and Sword Beach (15 km, 15 min). Bilingual FR/EN drivers who know the memorial sites and military cemeteries." },
      { title: "Memorial & castle welcome", desc: "Direct transport to the Caen Memorial (4 km from the centre) and William the Conqueror's castle. English-speaking service for British visitors arriving by ferry." },
    ],
  },
  nancy: {
    introFr: "Nancy, joyau de l'Art Nouveau et ville universitaire de renom, est célèbre pour sa Place Stanislas (patrimoine UNESCO). Desservie par la gare TGV (1h30 de Paris), TaxiNeo assure vos transferts vers le CHU de Nancy, le campus ARTEM, le technopôle de Brabois et l'aéroport Metz-Nancy-Lorraine.",
    introEn: "Nancy, Art Nouveau gem and renowned university city, is famous for its Place Stanislas (UNESCO World Heritage). Served by the TGV station (1h30 from Paris), TaxiNeo handles transfers to Nancy University Hospital, the ARTEM campus, the Brabois technology park and Metz-Nancy-Lorraine Airport.",
    descriptionFr: "Nancy est une ville élégante avec un patrimoine architectural exceptionnel. Nos chauffeurs connaissent chaque ruelle de la Vieille Ville et du quartier Art Nouveau. L'aéroport Metz-Nancy est partagé entre les deux villes et nos chauffeurs assurent la navette à tarif compétitif. Couverture de tout le Grand Nancy.",
    descriptionEn: "Nancy is an elegant city with exceptional architectural heritage. Our drivers know every lane of the Old Town and the Art Nouveau quarter. Metz-Nancy Airport is shared between both cities and our drivers provide competitive shuttle service. Coverage of the entire Greater Nancy area.",
    metaDescriptionFr: "Taxi à Nancy : gare TGV, Place Stanislas classée UNESCO, campus ARTEM, aéroport Lorraine. Joyau Art Nouveau, 1h30 de Paris en TGV. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Nancy: TGV station, UNESCO-listed Place Stanislas, ARTEM campus, Lorraine airport. Art Nouveau gem, only 1h30 from Paris. Book now on TaxiNeo.",
    heroSubtitleFr: "Joyau de l'Art Nouveau célèbre pour sa Place Stanislas UNESCO, Nancy est une ville universitaire élégante à 1h30 de Paris en TGV. Nos chauffeurs connaissent chaque ruelle de la Vieille Ville et assurent la navette vers l'aéroport Metz-Nancy-Lorraine à tarif compétitif.",
    heroSubtitleEn: "Art Nouveau gem famous for its UNESCO Place Stanislas, Nancy is an elegant university city 1h30 from Paris by TGV. Our drivers know every lane of the Old Town and provide competitive shuttle service to Metz-Nancy-Lorraine Airport.",
    whyUsFr: [
      { title: "Experts Vieille Ville Art Nouveau", desc: "Nos chauffeurs naviguent dans les ruelles de la Vieille Ville, le quartier Art Nouveau (rue Félix-Faure, villa Majorelle) et les accès à la place Stanislas UNESCO sans perdre une minute." },
      { title: "Navette aéroport Metz-Nancy-Lorraine", desc: "Aéroport Metz-Nancy-Lorraine à 35 km de Nancy via l'A31 : transfert en 30 minutes. Forfait réglementé partagé avec Metz, suivi des vols et prise en charge au terminal." },
      { title: "Desserte campus ARTEM et Brabois", desc: "Service dédié au campus ARTEM (École des Mines, ICN, ENSAD), au technopôle de Brabois et au CHU de Nancy. Navettes inter-campus rapides via la rue de Laxou et le boulevard de l'Europe." },
    ],
    whyUsEn: [
      { title: "Old Town & Art Nouveau experts", desc: "Our drivers navigate the Old Town lanes, the Art Nouveau quarter (Rue Félix-Faure, Villa Majorelle) and UNESCO Place Stanislas access points without wasting a minute." },
      { title: "Metz-Nancy-Lorraine airport shuttle", desc: "Metz-Nancy-Lorraine Airport 35 km from Nancy via the A31: transfer in 30 minutes. Regulated fare shared with Metz, flight tracking and terminal pickup." },
      { title: "ARTEM campus & Brabois service", desc: "Dedicated service to the ARTEM campus (École des Mines, ICN, ENSAD), the Brabois tech park and Nancy University Hospital. Fast inter-campus shuttles via Rue de Laxou and Boulevard de l'Europe." },
    ],
  },
  argenteuil: {
    introFr: "Argenteuil, plus grande ville du Val-d'Oise et troisième commune d'Île-de-France, est une porte d'entrée vers Paris située à seulement 15 minutes de la Gare Saint-Lazare. TaxiNeo dessert les gares d'Argenteuil, le centre commercial Côté Seine, l'hôpital Victor Dupouy et les quartiers résidentiels des bords de Seine.",
    introEn: "Argenteuil, Val-d'Oise's largest city and Île-de-France's third most populous commune, is a gateway to Paris just 15 minutes from Gare Saint-Lazare. TaxiNeo serves Argenteuil stations, the Côté Seine shopping centre, Victor Dupouy Hospital and the residential neighbourhoods along the Seine.",
    descriptionFr: "En pleine transformation urbaine, Argenteuil bénéficie d'un accès direct vers La Défense et les aéroports parisiens. Nos chauffeurs assurent les transferts Argenteuil – CDG et Argenteuil – Orly aux tarifs franciliens réglementés. Service idéal pour les déplacements domicile – gare aux heures de pointe.",
    descriptionEn: "Undergoing major urban transformation, Argenteuil has direct access to La Défense and Parisian airports. Our drivers provide Argenteuil – CDG and Argenteuil – Orly transfers at regulated Île-de-France rates. Ideal service for home – station commutes during rush hour.",
    metaDescriptionFr: "Taxi à Argenteuil : gare SNCF, La Défense, aéroports CDG et Orly. 3e commune d'Île-de-France, 15 min de Saint-Lazare. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Argenteuil: SNCF station, La Défense, CDG and Orly airports. 3rd largest Île-de-France city, 15 min from Saint-Lazare. Regulated fares. Book TaxiNeo.",
    heroSubtitleFr: "Troisième commune d'Île-de-France à 15 minutes de Saint-Lazare, Argenteuil offre un accès direct vers La Défense et les aéroports parisiens. Transferts CDG et Orly aux tarifs franciliens réglementés, idéal pour les trajets domicile – gare aux heures de pointe.",
    heroSubtitleEn: "Île-de-France's third largest commune, 15 minutes from Saint-Lazare, Argenteuil offers direct access to La Défense and Parisian airports. CDG and Orly transfers at regulated Île-de-France rates, ideal for rush-hour home – station commutes.",
    whyUsFr: [
      { title: "Accès direct La Défense en 15 min", desc: "Argenteuil – La Défense en 15 minutes via le pont de Bezons et la D992. Nos chauffeurs connaissent les créneaux horaires de fluidité sur le boulevard du Général-de-Gaulle." },
      { title: "Transferts CDG et Orly franciliens", desc: "Argenteuil – CDG en 35 minutes via l'A15 puis l'A1, Argenteuil – Orly en 45 minutes via l'A86. Tarifs franciliens réglementés par arrêté préfectoral, sans majoration." },
      { title: "Navette gare aux heures de pointe", desc: "Prise en charge à domicile vers les gares d'Argenteuil (Transilien J et L) en 5 à 10 minutes. Service idéal pour les pendulaires vers Saint-Lazare quand le bus est saturé." },
    ],
    whyUsEn: [
      { title: "Direct La Défense access in 15 min", desc: "Argenteuil – La Défense in 15 minutes via the Pont de Bezons and D992. Our drivers know the best time slots for traffic flow on Boulevard du Général-de-Gaulle." },
      { title: "CDG & Orly Île-de-France transfers", desc: "Argenteuil – CDG in 35 minutes via the A15 then A1, Argenteuil – Orly in 45 minutes via the A86. Île-de-France regulated fares set by prefectural order, no surcharge." },
      { title: "Rush-hour station shuttle", desc: "Home pickup to Argenteuil stations (Transilien J and L) in 5 to 10 minutes. Ideal for Saint-Lazare commuters when the bus is overcrowded." },
    ],
  },
  avignon: {
    introFr: "Avignon, cité des Papes et capitale mondiale du théâtre en juillet, est une ville touristique majeure de Provence. Desservie par la gare TGV d'Avignon (2h40 de Paris) et la gare centre, TaxiNeo assure vos transferts vers le Palais des Papes, le Pont d'Avignon, le Festival d'Avignon et les villages du Luberon.",
    introEn: "Avignon, City of the Popes and world theatre capital in July, is a major tourist city in Provence. Served by Avignon TGV station (2h40 from Paris) and the city centre station, TaxiNeo handles transfers to the Palais des Papes, the Pont d'Avignon, the Avignon Festival and Luberon villages.",
    descriptionFr: "La gare TGV d'Avignon est excentrée (à Courtine) et le taxi est indispensable pour rejoindre les remparts. Pendant le Festival d'Avignon en juillet, nos chauffeurs connaissent tous les théâtres et assurent un service renforcé jour et nuit. Excursions vers le Pont du Gard, les Baux-de-Provence et le Luberon disponibles.",
    descriptionEn: "Avignon TGV station is outside the city (at Courtine) and a taxi is essential to reach the ramparts. During the Avignon Festival in July, our drivers know every theatre and provide enhanced day and night service. Excursions to the Pont du Gard, Les Baux-de-Provence and the Luberon available.",
    metaDescriptionFr: "Taxi à Avignon : gare TGV Courtine, Palais des Papes, célèbre Festival d'Avignon, excursions Luberon. Cité des Papes. Service 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Avignon: Courtine TGV station, Palais des Papes, famous Avignon Festival, Luberon trips. City of the Popes. 24/7 service. Book now on TaxiNeo.",
    heroSubtitleFr: "Cité des Papes et capitale mondiale du théâtre en juillet, Avignon relie la gare TGV excentrée de Courtine au Palais des Papes et aux remparts. Service renforcé jour et nuit pendant le Festival. Excursions Pont du Gard, Baux-de-Provence et villages du Luberon disponibles.",
    heroSubtitleEn: "City of the Popes and world theatre capital in July, Avignon connects the outlying Courtine TGV station to the Palais des Papes and ramparts. Enhanced day and night service during the Festival. Pont du Gard, Baux-de-Provence and Luberon village excursions available.",
    whyUsFr: [
      { title: "Forfait gare TGV Courtine–remparts", desc: "La gare TGV d'Avignon est à Courtine (5 km des remparts). Nos taxis assurent le transfert en 10 minutes via la rocade Charles-de-Gaulle à tarif forfaitaire fixe, sans surprise." },
      { title: "Excursions Luberon et Pont du Gard", desc: "Avignon – Pont du Gard (25 km) en 25 minutes, Avignon – Gordes (40 km) en 40 minutes, Avignon – Les Baux-de-Provence (30 km) en 30 minutes. Circuits Provence avec chauffeur dédié." },
      { title: "Service Festival d'Avignon non-stop", desc: "Pendant le Festival d'Avignon (juillet), service renforcé jour et nuit. Chauffeurs connaissant les 40 salles du In et les centaines de théâtres du Off dans les ruelles intra-muros." },
    ],
    whyUsEn: [
      { title: "Courtine TGV–ramparts flat rate", desc: "Avignon TGV station is at Courtine (5 km from the ramparts). Our taxis make the transfer in 10 minutes via the Charles-de-Gaulle ring road at a fixed flat fare, no surprises." },
      { title: "Luberon & Pont du Gard excursions", desc: "Avignon – Pont du Gard (25 km) in 25 minutes, Avignon – Gordes (40 km) in 40 minutes, Avignon – Les Baux-de-Provence (30 km) in 30 minutes. Provence circuits with a dedicated driver." },
      { title: "Non-stop Avignon Festival service", desc: "During the Avignon Festival (July), enhanced day and night service. Drivers who know the 40 In venues and hundreds of Off theatres in the intra-muros lanes." },
    ],
  },
  poitiers: {
    introFr: "Poitiers, ville d'art et d'histoire aux portes du Futuroscope, est un important centre universitaire du centre-ouest de la France. Desservie par la gare TGV (1h40 de Paris), TaxiNeo assure vos transferts vers le Futuroscope, le CHU de Poitiers, le campus universitaire et l'aéroport Poitiers-Biard.",
    introEn: "Poitiers, city of art and history at the gateway to Futuroscope, is a major university centre in central-western France. Served by the TGV station (1h40 from Paris), TaxiNeo handles transfers to Futuroscope, Poitiers University Hospital, the university campus and Poitiers-Biard Airport.",
    descriptionFr: "Le Futuroscope attire 2 millions de visiteurs par an et le taxi est le moyen le plus simple de s'y rendre depuis la gare ou l'aéroport. Nos chauffeurs poitevins assurent aussi les liaisons vers la Vallée des Singes et le Marais Poitevin. Tarifs réglementés et service adapté aux familles.",
    descriptionEn: "Futuroscope attracts 2 million visitors annually and a taxi is the simplest way to get there from the station or airport. Our Poitiers drivers also provide connections to the Vallée des Singes and Marais Poitevin. Regulated fares and family-friendly service.",
    metaDescriptionFr: "Taxi à Poitiers : gare TGV, parc du Futuroscope, CHU, Marais Poitevin. Plus de 2 millions de visiteurs par an au Futuroscope. Tarifs réglementés. TaxiNeo.",
    metaDescriptionEn: "Taxi in Poitiers: TGV station, Futuroscope theme park, university hospital, Marais Poitevin. 2M visitors/year at Futuroscope. Regulated fares. Book TaxiNeo.",
    heroSubtitleFr: "Ville d'art aux portes du Futuroscope qui attire 2 millions de visiteurs par an, Poitiers est un centre universitaire à 1h40 de Paris en TGV. Le taxi est le moyen le plus simple de rejoindre le parc depuis la gare. Service adapté aux familles et tarifs réglementés.",
    heroSubtitleEn: "Art city at the gateway to Futuroscope, which attracts 2 million visitors annually, Poitiers is a university centre 1h40 from Paris by TGV. A taxi is the simplest way to reach the park from the station. Family-friendly service and regulated fares.",
    whyUsFr: [
      { title: "Navette gare–Futuroscope directe", desc: "Gare de Poitiers – Futuroscope (12 km) en 15 minutes via la N10. Service adapté aux familles avec sièges enfants disponibles. Forfait aller-retour réservable pour la journée." },
      { title: "Excursions Marais Poitevin", desc: "Poitiers – Marais Poitevin (Coulon, 50 km) en 40 minutes via la D611. Transfert vers les embarcadères de barques plates avec chauffeur dédié et retour garanti en fin d'après-midi." },
      { title: "Desserte campus et CHU complets", desc: "Service dédié au campus universitaire (30 000 étudiants), au CHU de Poitiers (La Milétrie) et à l'aéroport Poitiers-Biard (3 km du centre). Navettes inter-sites rapides." },
    ],
    whyUsEn: [
      { title: "Direct station–Futuroscope shuttle", desc: "Poitiers station – Futuroscope (12 km) in 15 minutes via the N10. Family-friendly service with child seats available. Round-trip day package bookable in advance." },
      { title: "Marais Poitevin excursions", desc: "Poitiers – Marais Poitevin (Coulon, 50 km) in 40 minutes via the D611. Transfer to flat-bottomed boat piers with a dedicated driver and guaranteed late-afternoon return." },
      { title: "Full campus & hospital service", desc: "Dedicated service to the university campus (30,000 students), Poitiers University Hospital (La Milétrie) and Poitiers-Biard Airport (3 km from the centre). Fast inter-site shuttles." },
    ],
  },
  dunkerque: {
    introFr: "Dunkerque, troisième port de France sur la mer du Nord, est une ville portuaire et industrielle à la frontière belge. TaxiNeo dessert la gare SNCF, le port ferry vers Douvres, la plage de Malo-les-Bains, le musée portuaire et les zones industrielles du Grand Port Maritime.",
    introEn: "Dunkirk, France's third largest North Sea port, is an industrial port city on the Belgian border. TaxiNeo serves the SNCF station, the Dover ferry port, Malo-les-Bains beach, the port museum and the Grand Port Maritime industrial zones.",
    descriptionFr: "Le port ferry de Dunkerque relie la France à Douvres (Angleterre) et génère un flux constant de voyageurs. Nos chauffeurs assurent les transferts port – gare – centre-ville et les navettes vers la frontière belge. Service renforcé pendant le célèbre Carnaval de Dunkerque.",
    descriptionEn: "Dunkirk ferry port connects France to Dover (England) and generates constant passenger traffic. Our drivers handle port – station – city centre transfers and shuttles to the Belgian border. Enhanced service during the famous Dunkirk Carnival.",
    metaDescriptionFr: "Taxi à Dunkerque : port ferry vers Douvres, plage Malo-les-Bains, frontière belge. 3e port de France. Service bilingue FR/EN. Réservation immédiate TaxiNeo.",
    metaDescriptionEn: "Taxi in Dunkirk: Dover ferry port, Malo-les-Bains beach, Belgian border. France's 3rd largest seaport. Bilingual FR/EN service. Book instantly on TaxiNeo.",
    heroSubtitleFr: "Troisième port de France sur la mer du Nord, Dunkerque relie la France à Douvres via les ferries transmanche. Nos chauffeurs assurent transferts port – gare – centre-ville, navettes vers la frontière belge et service renforcé pendant le célèbre Carnaval de Dunkerque.",
    heroSubtitleEn: "France's third largest North Sea port, Dunkirk connects France to Dover via cross-Channel ferries. Our drivers handle port – station – city centre transfers, shuttles to the Belgian border and enhanced service during the famous Dunkirk Carnival.",
    whyUsFr: [
      { title: "Transferts ferry Douvres synchronisés", desc: "Port ferry de Dunkerque – gare SNCF en 10 minutes, port – centre-ville en 8 minutes via le boulevard de l'Égalité. Prise en charge calée sur les débarquements des ferries DFDS vers Douvres." },
      { title: "Navettes frontière belge", desc: "Dunkerque – Furnes (20 km) en 20 minutes, Dunkerque – La Panne (25 km) en 25 minutes via l'A16. Service bilingue français-anglais pour les touristes britanniques en transit." },
      { title: "Service Carnaval de Dunkerque", desc: "Pendant le Carnaval (février-mars), nos chauffeurs connaissent les rues fermées du Vieux-Dunkerque et les itinéraires d'évacuation via la rue Clemenceau et le port Est." },
    ],
    whyUsEn: [
      { title: "Synchronised Dover ferry transfers", desc: "Dunkirk ferry port – SNCF station in 10 minutes, port – city centre in 8 minutes via Boulevard de l'Égalité. Pickups timed to DFDS ferry disembarkations from Dover." },
      { title: "Belgian border shuttles", desc: "Dunkirk – Veurne (20 km) in 20 minutes, Dunkirk – De Panne (25 km) in 25 minutes via the A16. French-English bilingual service for British tourists in transit." },
      { title: "Dunkirk Carnival service", desc: "During Carnival (February-March), our drivers know the closed streets of old Dunkirk and exit routes via Rue Clemenceau and the East Port." },
    ],
  },
  versailles: {
    introFr: "Versailles, ville du château le plus visité au monde, accueille chaque année 15 millions de visiteurs dans son domaine royal. Desservie par les gares Versailles-Chantiers et Versailles-Rive-Gauche, TaxiNeo assure vos transferts vers le Château de Versailles, le Trianon, le centre de congrès et les quartiers résidentiels.",
    introEn: "Versailles, home to the world's most visited palace, welcomes 15 million visitors yearly to its royal estate. Served by Versailles-Chantiers and Versailles-Rive-Gauche stations, TaxiNeo handles transfers to the Palace of Versailles, the Trianon, the convention centre and residential areas.",
    descriptionFr: "Située à 20 km de Paris, Versailles est facilement accessible mais les transports en commun sont souvent saturés par les touristes. Nos chauffeurs proposent des forfaits Paris – Versailles à tarif réglementé et assurent les retours depuis le château. Service idéal pour les visiteurs qui veulent éviter le RER bondé.",
    descriptionEn: "Located 20 km from Paris, Versailles is easily accessible but public transport is often overwhelmed by tourists. Our drivers offer regulated Paris – Versailles flat rates and handle returns from the palace. Ideal service for visitors wanting to avoid the crowded RER.",
    metaDescriptionFr: "Taxi à Versailles : Château, jardins du Trianon, gares Chantiers et Rive-Gauche. Plus de 15 millions de visiteurs par an. Forfait Paris–Versailles. TaxiNeo.",
    metaDescriptionEn: "Taxi in Versailles: Palace, Trianon gardens, Chantiers and Rive-Gauche stations. Over 15 million visitors per year. Paris–Versailles flat rate. Book TaxiNeo.",
    heroSubtitleFr: "Ville du château le plus visité au monde avec 15 millions de visiteurs par an, Versailles relie les gares Chantiers et Rive-Gauche au domaine royal. Forfait Paris – Versailles à tarif réglementé, idéal pour éviter le RER bondé par les touristes.",
    heroSubtitleEn: "Home to the world's most visited palace with 15 million visitors yearly, Versailles connects Chantiers and Rive-Gauche stations to the royal estate. Regulated Paris – Versailles flat rate, ideal for avoiding the tourist-packed RER.",
    whyUsFr: [
      { title: "Forfait Paris–Versailles réglementé", desc: "Transfert Paris – Versailles (20 km) à tarif fixe réglementé par arrêté préfectoral. Alternative confortable au RER C bondé, avec prise en charge à domicile ou à votre hôtel parisien." },
      { title: "Accès château et Trianon optimisés", desc: "Nos chauffeurs connaissent les dépose-minute du château (grille d'honneur, grille de la Reine) et les accès directs au Grand Trianon et au Petit Trianon via l'avenue de Trianon." },
      { title: "Navette gares Chantiers et Rive-Gauche", desc: "Prise en charge aux gares Versailles-Chantiers (Transilien N, TER) et Versailles-Rive-Gauche (RER C) pour un transfert en 5 minutes vers le château ou les quartiers résidentiels." },
    ],
    whyUsEn: [
      { title: "Regulated Paris–Versailles flat rate", desc: "Paris – Versailles transfer (20 km) at a fixed fare regulated by prefectural order. Comfortable alternative to the crowded RER C, with home or Paris hotel pickup." },
      { title: "Optimised palace & Trianon access", desc: "Our drivers know the palace drop-off points (Grille d'Honneur, Grille de la Reine) and direct access to the Grand Trianon and Petit Trianon via Avenue de Trianon." },
      { title: "Chantiers & Rive-Gauche station shuttle", desc: "Pickup at Versailles-Chantiers (Transilien N, TER) and Versailles-Rive-Gauche (RER C) stations for a 5-minute transfer to the palace or residential areas." },
    ],
  },
  pau: {
    introFr: "Pau, ville royale au pied des Pyrénées avec sa vue légendaire sur la chaîne montagneuse, est la capitale du Béarn. Desservie par l'aéroport Pau-Pyrénées et la gare SNCF, TaxiNeo assure vos transferts vers les stations de ski pyrénéennes, le Boulevard des Pyrénées, le circuit automobile et le centre hospitalier.",
    introEn: "Pau, royal city at the foot of the Pyrenees with its legendary mountain views, is the capital of Béarn. Served by Pau-Pyrénées Airport and the SNCF station, TaxiNeo handles transfers to Pyrenean ski resorts, the Boulevard des Pyrénées, the racing circuit and the hospital.",
    descriptionFr: "Porte d'entrée des Pyrénées, Pau est le point de départ vers les stations de Gourette, La Pierre Saint-Martin et les thermes de Bétharram. Nos chauffeurs connaissent les routes de montagne et sont équipés en hiver. Service renforcé pendant le Grand Prix de Pau automobile.",
    descriptionEn: "Gateway to the Pyrenees, Pau is the starting point for Gourette and La Pierre Saint-Martin resorts and Bétharram spa. Our drivers know the mountain roads and are winter-equipped. Enhanced service during the Pau Grand Prix motor race.",
    metaDescriptionFr: "Taxi à Pau : aéroport Pyrénées, station de Gourette, Boulevard des Pyrénées, circuit automobile. Capitale du Béarn. Véhicules montagne. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Pau: Pyrénées airport, Gourette ski resort, Boulevard des Pyrénées, racing circuit. Capital of Béarn. Mountain-ready vehicles. Book on TaxiNeo.",
    heroSubtitleFr: "Ville royale au pied des Pyrénées avec sa vue légendaire sur la chaîne montagneuse, Pau est la porte d'entrée vers Gourette et La Pierre Saint-Martin. Chauffeurs équipés pour les routes de montagne en hiver et service renforcé lors du Grand Prix automobile de Pau.",
    heroSubtitleEn: "Royal city at the foot of the Pyrenees with its legendary mountain views, Pau is the gateway to Gourette and La Pierre Saint-Martin. Drivers equipped for mountain roads in winter and enhanced service during the Pau Grand Prix motor race.",
    whyUsFr: [
      { title: "Transferts stations Pyrénées équipés", desc: "Navettes vers Gourette (50 km, 50 min) et La Pierre Saint-Martin (80 km, 1h15) avec véhicules équipés pneus neige et chaînes. Départ gare de Pau ou aéroport Pau-Pyrénées." },
      { title: "Experts Boulevard des Pyrénées", desc: "Nos chauffeurs connaissent le boulevard des Pyrénées (vue légendaire sur la chaîne), les accès au château d'Henri IV et les parkings du centre piétonnier. Itinéraires optimisés les jours de marché." },
      { title: "Service Grand Prix automobile", desc: "Pendant le Grand Prix de Pau (circuit urbain de 2,7 km), nos chauffeurs connaissent les rues fermées et les itinéraires alternatifs via le boulevard Tourasse et la place de Verdun." },
    ],
    whyUsEn: [
      { title: "Equipped Pyrenees resort transfers", desc: "Shuttles to Gourette (50 km, 50 min) and La Pierre Saint-Martin (80 km, 1h15) with snow-tyre and chain-equipped vehicles. Departure from Pau station or Pau-Pyrénées Airport." },
      { title: "Boulevard des Pyrénées experts", desc: "Our drivers know the Boulevard des Pyrénées (legendary mountain views), access to Henri IV's castle and the pedestrian centre car parks. Optimised routes on market days." },
      { title: "Grand Prix motor race service", desc: "During the Pau Grand Prix (2.7 km urban circuit), our drivers know the closed streets and alternative routes via Boulevard Tourasse and Place de Verdun." },
    ],
  },
  "la-rochelle": {
    introFr: "La Rochelle, perle de l'Atlantique et ville portuaire historique, est une destination touristique prisée entre ses tours médiévales, le Vieux-Port et l'île de Ré. TaxiNeo dessert la gare SNCF, l'aéroport La Rochelle-Île de Ré, le port des Minimes, l'Aquarium et le pont vers l'île de Ré.",
    introEn: "La Rochelle, pearl of the Atlantic and historic port city, is a popular tourist destination between its medieval towers, the Vieux-Port and the Île de Ré. TaxiNeo serves the SNCF station, La Rochelle-Île de Ré Airport, the Minimes harbour, the Aquarium and the bridge to Île de Ré.",
    descriptionFr: "En été, La Rochelle et l'île de Ré connaissent un afflux touristique massif qui sature les transports. Nos chauffeurs assurent les transferts vers l'île de Ré via le pont, les navettes gare – Vieux-Port et les liaisons aéroport. Service renforcé pendant les Francofolies et le Grand Pavois.",
    descriptionEn: "In summer, La Rochelle and Île de Ré experience massive tourist influx that overwhelms transport. Our drivers handle Île de Ré transfers via the bridge, station – Vieux-Port shuttles and airport connections. Enhanced service during the Francofolies and Grand Pavois.",
    metaDescriptionFr: "Taxi à La Rochelle : gare SNCF, aéroport, pont de l'île de Ré, Vieux-Port historique. Perle de l'Atlantique. Service estival renforcé. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in La Rochelle: SNCF station, airport, Île de Ré bridge, historic Vieux-Port. Pearl of the Atlantic. Enhanced summer service. Book online on TaxiNeo.",
    heroSubtitleFr: "Perle de l'Atlantique entre tours médiévales et île de Ré, La Rochelle connaît un afflux touristique massif en été. Nos chauffeurs assurent transferts via le pont vers l'île de Ré, navettes gare – Vieux-Port et service renforcé pendant les Francofolies et le Grand Pavois.",
    heroSubtitleEn: "Pearl of the Atlantic between medieval towers and the Île de Ré, La Rochelle sees massive summer tourist influx. Our drivers handle Île de Ré bridge transfers, station – Vieux-Port shuttles and enhanced service during the Francofolies and Grand Pavois.",
    whyUsFr: [
      { title: "Transfert île de Ré via le pont", desc: "La Rochelle – île de Ré (pont de 3 km + 15 km vers Saint-Martin-de-Ré) en 30 minutes. Nos chauffeurs connaissent les créneaux de passage pour éviter les bouchons estivaux sur le pont." },
      { title: "Navette gare–Vieux-Port–Minimes", desc: "Gare de La Rochelle – Vieux-Port en 5 minutes, Vieux-Port – port des Minimes en 10 minutes via le boulevard Joffre. Transferts entre les tours médiévales et l'Aquarium rapides et directs." },
      { title: "Service Francofolies et Grand Pavois", desc: "Pendant les Francofolies (juillet) et le Grand Pavois (septembre), nos chauffeurs assurent un service renforcé avec des itinéraires évitant les zones piétonnes du Vieux-Port." },
    ],
    whyUsEn: [
      { title: "Île de Ré bridge transfer", desc: "La Rochelle – Île de Ré (3 km bridge + 15 km to Saint-Martin-de-Ré) in 30 minutes. Our drivers know the best time slots to avoid summer traffic jams on the bridge." },
      { title: "Station–Vieux-Port–Minimes shuttle", desc: "La Rochelle station – Vieux-Port in 5 minutes, Vieux-Port – Minimes harbour in 10 minutes via Boulevard Joffre. Fast direct transfers between the medieval towers and the Aquarium." },
      { title: "Francofolies & Grand Pavois service", desc: "During the Francofolies (July) and Grand Pavois (September), our drivers provide enhanced service with routes avoiding the Vieux-Port pedestrian zones." },
    ],
  },
  calais: {
    introFr: "Calais, porte d'entrée du continent européen et première ville portuaire voyageurs de France, relie la France à l'Angleterre via le tunnel sous la Manche et les ferries transmanche. TaxiNeo dessert la gare Calais-Fréthun (Eurostar), le terminal ferry, le centre-ville et la Cité de la Dentelle.",
    introEn: "Calais, gateway to continental Europe and France's busiest passenger port, connects France to England via the Channel Tunnel and cross-Channel ferries. TaxiNeo serves Calais-Fréthun station (Eurostar), the ferry terminal, the city centre and the Cité de la Dentelle.",
    descriptionFr: "Avec le tunnel sous la Manche et les ferries, Calais accueille des millions de voyageurs britanniques chaque année. Nos chauffeurs assurent les transferts terminal ferry – gare Fréthun – centre-ville et les navettes vers les plages de la Côte d'Opale. Service bilingue français-anglais garanti.",
    descriptionEn: "With the Channel Tunnel and ferries, Calais welcomes millions of British travellers yearly. Our drivers handle ferry terminal – Fréthun station – city centre transfers and shuttles to the Opal Coast beaches. French-English bilingual service guaranteed.",
    metaDescriptionFr: "Taxi à Calais : gare Eurostar Fréthun, terminal ferry transmanche, tunnel sous la Manche, Côte d'Opale. Porte de l'Europe. Service bilingue. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Calais: Eurostar at Fréthun, ferry terminal, Channel Tunnel access, Opal Coast. Gateway to Europe. Bilingual FR/EN service. Book now on TaxiNeo.",
    heroSubtitleFr: "Porte d'entrée du continent européen, Calais relie le terminal ferry transmanche, la gare Eurostar de Fréthun et le tunnel sous la Manche. Des millions de voyageurs britanniques chaque année. Service bilingue français-anglais garanti et navettes vers les plages de la Côte d'Opale.",
    heroSubtitleEn: "Gateway to continental Europe, Calais connects the cross-Channel ferry terminal, the Fréthun Eurostar station and the Channel Tunnel. Millions of British travellers every year. Guaranteed French-English bilingual service and shuttles to the Opal Coast beaches.",
    whyUsFr: [
      { title: "Transferts Eurostar Fréthun–centre", desc: "Gare Calais-Fréthun (Eurostar) – centre-ville en 10 minutes via la D243. Prise en charge synchronisée avec les arrivées Eurostar depuis Londres St Pancras en 1h." },
      { title: "Navettes ferry–tunnel bilingues", desc: "Terminal ferry – gare Fréthun en 15 minutes, terminal Eurotunnel – centre en 12 minutes. Service bilingue français-anglais garanti pour les millions de voyageurs britanniques annuels." },
      { title: "Excursions Côte d'Opale", desc: "Calais – Cap Blanc-Nez (10 km) en 12 minutes, Calais – Wissant (15 km) en 18 minutes, Calais – Boulogne-sur-Mer (35 km) en 30 minutes. Circuits côtiers avec chauffeur dédié." },
    ],
    whyUsEn: [
      { title: "Eurostar Fréthun–centre transfers", desc: "Calais-Fréthun station (Eurostar) – city centre in 10 minutes via the D243. Pickup synchronised with Eurostar arrivals from London St Pancras in 1h." },
      { title: "Bilingual ferry–tunnel shuttles", desc: "Ferry terminal – Fréthun station in 15 minutes, Eurotunnel terminal – centre in 12 minutes. Guaranteed French-English bilingual service for millions of annual British travellers." },
      { title: "Opal Coast excursions", desc: "Calais – Cap Blanc-Nez (10 km) in 12 minutes, Calais – Wissant (15 km) in 18 minutes, Calais – Boulogne-sur-Mer (35 km) in 30 minutes. Coastal tours with a dedicated driver." },
    ],
  },
  cannes: {
    introFr: "Cannes, ville du festival international du cinéma et station balnéaire de la Côte d'Azur, accueille des millions de visiteurs pour ses événements (Festival du Film, MIPIM, MIPCOM, Lions). TaxiNeo dessert l'aéroport Nice Côte d'Azur, la gare de Cannes, le Palais des Festivals, la Croisette et les îles de Lérins.",
    introEn: "Cannes, home to the international film festival and a French Riviera resort, welcomes millions of visitors for its events (Film Festival, MIPIM, MIPCOM, Lions). TaxiNeo serves Nice Côte d'Azur Airport, Cannes station, the Palais des Festivals, the Croisette and the Lérins Islands.",
    descriptionFr: "Pendant les grands événements cannois, la demande de transport explose et les VTC pratiquent des tarifs exorbitants. Les taxis TaxiNeo maintiennent leurs tarifs réglementés quelle que soit la période. Nos chauffeurs assurent les navettes aéroport Nice – Cannes et connaissent tous les hôtels de la Croisette.",
    descriptionEn: "During major Cannes events, transport demand soars and rideshare services charge exorbitant rates. TaxiNeo taxis maintain regulated fares regardless of the period. Our drivers provide Nice Airport – Cannes shuttles and know every Croisette hotel.",
    metaDescriptionFr: "Taxi à Cannes : aéroport de Nice, Palais des Festivals, boulevard de la Croisette, îles de Lérins. Tarifs réglementés même en Festival. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Cannes: Nice airport transfer, Palais des Festivals, Croisette boulevard, Lérins Islands. Regulated fares even during the Festival. Book on TaxiNeo.",
    heroSubtitleFr: "Ville du Festival International du Film et station balnéaire de la Côte d'Azur, Cannes accueille MIPIM, MIPCOM et les Lions. Tarifs taxi réglementés maintenus même pendant les grands événements, quand les VTC pratiquent des prix exorbitants. Navettes aéroport Nice – Cannes avec accueil personnalisé.",
    heroSubtitleEn: "Home to the International Film Festival and a French Riviera resort, Cannes hosts MIPIM, MIPCOM and the Lions. Regulated taxi fares maintained even during major events, when rideshare services charge exorbitant prices. Nice Airport – Cannes shuttles with personalised welcome.",
    whyUsFr: [
      { title: "Tarifs Festival sans majoration", desc: "Pendant le Festival de Cannes, MIPIM et MIPCOM, nos tarifs restent réglementés alors que les VTC multiplient leurs prix par 4 à 8. Tarif identique toute l'année, garanti par la préfecture." },
      { title: "Navette aéroport Nice–Cannes", desc: "Nice Côte d'Azur – Cannes en 30 minutes via l'A8 (sortie Mougins). Forfait fixe garanti, prise en charge au terminal et dépôt devant votre hôtel de la Croisette ou du Suquet." },
      { title: "Experts Croisette et Palais des Festivals", desc: "Nos chauffeurs connaissent chaque hôtel de la Croisette (Carlton, Martinez, Majestic), les accès au Palais des Festivals et les itinéraires vers les îles de Lérins via le quai Laubeuf." },
    ],
    whyUsEn: [
      { title: "Festival fares with no surcharge", desc: "During the Cannes Film Festival, MIPIM and MIPCOM, our fares stay regulated while rideshare services multiply prices by 4 to 8. Identical year-round rate, guaranteed by the prefecture." },
      { title: "Nice Airport–Cannes shuttle", desc: "Nice Côte d'Azur – Cannes in 30 minutes via the A8 (Mougins exit). Guaranteed fixed fare, terminal pickup and drop-off at your Croisette or Suquet hotel." },
      { title: "Croisette & Palais des Festivals experts", desc: "Our drivers know every Croisette hotel (Carlton, Martinez, Majestic), Palais des Festivals access points and routes to the Lérins Islands via Quai Laubeuf." },
    ],
  },
  antibes: {
    introFr: "Antibes et son quartier Juan-les-Pins forment une station balnéaire emblématique de la Côte d'Azur, entre Nice et Cannes. TaxiNeo dessert l'aéroport Nice Côte d'Azur, la gare d'Antibes, le Fort Carré, Marineland, le cap d'Antibes et le port Vauban, plus grand port de plaisance d'Europe.",
    introEn: "Antibes and its Juan-les-Pins quarter form an iconic French Riviera resort between Nice and Cannes. TaxiNeo serves Nice Côte d'Azur Airport, Antibes station, Fort Carré, Marineland, Cap d'Antibes and Port Vauban, Europe's largest marina.",
    descriptionFr: "Entre Nice et Cannes, Antibes est idéalement située mais souffre d'embouteillages estivaux importants. Nos chauffeurs connaissent les alternatives à la bord de mer et les raccourcis locaux. Transferts aéroport Nice – Antibes à tarif réglementé, même en pleine saison. Service renforcé pendant Jazz à Juan.",
    descriptionEn: "Between Nice and Cannes, Antibes is ideally located but suffers from heavy summer traffic. Our drivers know the alternatives to the seafront and local shortcuts. Regulated Nice Airport – Antibes transfers, even in peak season. Enhanced service during Jazz à Juan.",
    metaDescriptionFr: "Taxi à Antibes : aéroport Nice, marina Port Vauban, Cap d'Antibes, Juan-les-Pins. Plus grand port de plaisance d'Europe. Tarifs réglementés. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Antibes: Nice airport, Port Vauban marina, Cap d'Antibes, Juan-les-Pins. Europe's largest pleasure port. Regulated fares. Book now on TaxiNeo.",
    heroSubtitleFr: "Station balnéaire emblématique entre Nice et Cannes, Antibes abrite le Port Vauban, plus grand port de plaisance d'Europe. Transferts aéroport Nice à tarif réglementé même en pleine saison estivale, raccourcis locaux pour éviter les embouteillages et service renforcé pendant Jazz à Juan.",
    heroSubtitleEn: "Iconic resort between Nice and Cannes, Antibes is home to Port Vauban, Europe's largest marina. Regulated Nice Airport transfers even in peak summer season, local shortcuts to avoid traffic jams and enhanced service during Jazz à Juan.",
    whyUsFr: [
      { title: "Raccourcis locaux anti-bouchons", desc: "En été, le bord de mer entre Nice et Cannes est saturé. Nos chauffeurs empruntent les itinéraires intérieurs par Biot et Sophia Antipolis pour rejoindre Antibes 20 minutes plus vite." },
      { title: "Transfert aéroport Nice réglementé", desc: "Nice Côte d'Azur – Antibes en 20 minutes via l'A8. Tarif réglementé garanti même en juillet-août, quand les VTC pratiquent une tarification dynamique pouvant tripler le prix." },
      { title: "Service Jazz à Juan et Port Vauban", desc: "Pendant Jazz à Juan (juillet), service renforcé avec accès direct à la pinède Gould et au Port Vauban (1 642 anneaux). Chauffeurs connaissant les sens uniques du vieil Antibes." },
    ],
    whyUsEn: [
      { title: "Local traffic-beating shortcuts", desc: "In summer, the coastal road between Nice and Cannes is gridlocked. Our drivers take inland routes via Biot and Sophia Antipolis to reach Antibes 20 minutes faster." },
      { title: "Regulated Nice airport transfer", desc: "Nice Côte d'Azur – Antibes in 20 minutes via the A8. Regulated fare guaranteed even in July-August, when rideshare surge pricing can triple the price." },
      { title: "Jazz à Juan & Port Vauban service", desc: "During Jazz à Juan (July), enhanced service with direct access to Pinède Gould and Port Vauban (1,642 berths). Drivers who know the one-way streets of old Antibes." },
    ],
  },
  colmar: {
    introFr: "Colmar, joyau de l'Alsace et ville du vin, enchante avec sa Petite Venise, ses maisons à colombages et ses caves viticoles. TaxiNeo dessert la gare de Colmar, l'aéroport EuroAirport Bâle-Mulhouse, la Route des Vins d'Alsace, le musée Unterlinden et les marchés de Noël.",
    introEn: "Colmar, jewel of Alsace and wine city, enchants with its Petite Venise, half-timbered houses and wine cellars. TaxiNeo serves Colmar station, EuroAirport Basel-Mulhouse, the Alsace Wine Route, the Unterlinden Museum and the Christmas markets.",
    descriptionFr: "Capitale de la Route des Vins d'Alsace, Colmar est le point de départ idéal pour les dégustations dans les villages viticoles (Riquewihr, Ribeauvillé, Eguisheim). Nos chauffeurs proposent des circuits vignobles avec mise à disposition. Service renforcé pendant les marchés de Noël, parmi les plus beaux d'Europe.",
    descriptionEn: "Capital of the Alsace Wine Route, Colmar is the ideal starting point for tastings in wine villages (Riquewihr, Ribeauvillé, Eguisheim). Our drivers offer vineyard tours with hourly hire. Enhanced service during the Christmas markets, among the finest in Europe.",
    metaDescriptionFr: "Taxi à Colmar : gare SNCF, EuroAirport Bâle-Mulhouse, Route des Vins d'Alsace, marchés de Noël. Petite Venise alsacienne. Circuits vignobles. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Colmar: SNCF station, EuroAirport Basel-Mulhouse, Alsace Wine Route, Christmas markets. Alsatian Petite Venise. Vineyard tours. Book on TaxiNeo.",
    heroSubtitleFr: "Joyau alsacien avec sa Petite Venise et ses maisons à colombages, Colmar est la capitale de la Route des Vins d'Alsace. Circuits vignobles avec mise à disposition vers Riquewihr, Ribeauvillé et Eguisheim. Service renforcé pendant les marchés de Noël, parmi les plus beaux d'Europe.",
    heroSubtitleEn: "Alsatian jewel with its Petite Venise and half-timbered houses, Colmar is the capital of the Alsace Wine Route. Vineyard tours with hourly hire to Riquewihr, Ribeauvillé and Eguisheim. Enhanced service during the Christmas markets, among the finest in Europe.",
    whyUsFr: [
      { title: "Circuits Route des Vins d'Alsace", desc: "Mise à disposition pour Riquewihr (13 km), Ribeauvillé (16 km) et Eguisheim (7 km). Chauffeurs connaissant les caves ouvertes, les horaires de dégustation et les parkings des villages viticoles." },
      { title: "Navette EuroAirport Bâle-Mulhouse", desc: "Colmar – EuroAirport (65 km) en 45 minutes via l'A35. Forfait réglementé garanti, suivi des vols et prise en charge au terminal. Alternative idéale au bus navette bondé." },
      { title: "Service marchés de Noël renforcé", desc: "Pendant les marchés de Noël (novembre-décembre), nos chauffeurs connaissent les rues fermées de la Petite Venise et les itinéraires alternatifs par le quai de la Poissonnerie et la rue des Tanneurs." },
    ],
    whyUsEn: [
      { title: "Alsace Wine Route circuits", desc: "Hourly hire for Riquewihr (13 km), Ribeauvillé (16 km) and Eguisheim (7 km). Drivers who know the open cellars, tasting schedules and wine village car parks." },
      { title: "EuroAirport Basel-Mulhouse shuttle", desc: "Colmar – EuroAirport (65 km) in 45 minutes via the A35. Guaranteed regulated fare, flight tracking and terminal pickup. Ideal alternative to the crowded shuttle bus." },
      { title: "Enhanced Christmas market service", desc: "During the Christmas markets (November-December), our drivers know the closed streets of Petite Venise and alternative routes via Quai de la Poissonnerie and Rue des Tanneurs." },
    ],
  },
  bayonne: {
    introFr: "Bayonne, capitale du Pays Basque français et ville du chocolat, est une cité historique au confluent de la Nive et de l'Adour. TaxiNeo dessert la gare de Bayonne (TGV vers Paris), l'aéroport Biarritz-Pays Basque, le centre historique, les Arènes et les plages de la côte basque.",
    introEn: "Bayonne, capital of the French Basque Country and city of chocolate, is a historic city at the confluence of the Nive and Adour rivers. TaxiNeo serves Bayonne station (TGV to Paris), Biarritz-Pays Basque Airport, the historic centre, the Arenas and the Basque coast beaches.",
    descriptionFr: "Porte d'entrée du Pays Basque, Bayonne est le point de départ vers Biarritz, Saint-Jean-de-Luz et la frontière espagnole (Hendaye, Irun). Nos chauffeurs basques connaissent chaque village de la côte et de l'intérieur. Service renforcé pendant les Fêtes de Bayonne, plus grande fête populaire de France.",
    descriptionEn: "Gateway to the Basque Country, Bayonne is the starting point to Biarritz, Saint-Jean-de-Luz and the Spanish border (Hendaye, Irun). Our Basque drivers know every coastal and inland village. Enhanced service during the Fêtes de Bayonne, France's largest popular festival.",
    metaDescriptionFr: "Taxi à Bayonne : gare TGV, aéroport de Biarritz, navettes vers Biarritz et Saint-Jean-de-Luz, frontière espagnole. Capitale basque. Réservation TaxiNeo 7j/7.",
    metaDescriptionEn: "Taxi in Bayonne: TGV station, Biarritz airport, shuttles to Biarritz and Saint-Jean-de-Luz, Spanish border. Basque capital. Book on TaxiNeo 7 days a week.",
    heroSubtitleFr: "Capitale du Pays Basque français au confluent de la Nive et de l'Adour, Bayonne est le point de départ vers Biarritz, Saint-Jean-de-Luz et la frontière espagnole. Chauffeurs basques connaissant chaque village côtier et service renforcé pendant les Fêtes de Bayonne.",
    heroSubtitleEn: "Capital of the French Basque Country at the confluence of the Nive and Adour, Bayonne is the starting point to Biarritz, Saint-Jean-de-Luz and the Spanish border. Basque drivers who know every coastal village and enhanced service during the Fêtes de Bayonne.",
    whyUsFr: [
      { title: "Navettes Biarritz et côte basque", desc: "Bayonne – Biarritz (8 km) en 12 minutes, Bayonne – Saint-Jean-de-Luz (25 km) en 25 minutes via l'A63. Chauffeurs basques connaissant chaque plage et crique de la côte." },
      { title: "Transferts frontière espagnole", desc: "Bayonne – Hendaye/Irun (35 km) en 30 minutes via l'A63. Service bilingue français-espagnol pour les navetteurs transfrontaliers et les touristes en route vers San Sebastián." },
      { title: "Service Fêtes de Bayonne garanti", desc: "Pendant les Fêtes de Bayonne (fin juillet, 1 million de visiteurs), nos chauffeurs assurent un service non-stop. Itinéraires d'évacuation par les Allées Marines et le pont Saint-Esprit." },
    ],
    whyUsEn: [
      { title: "Biarritz & Basque coast shuttles", desc: "Bayonne – Biarritz (8 km) in 12 minutes, Bayonne – Saint-Jean-de-Luz (25 km) in 25 minutes via the A63. Basque drivers who know every beach and cove along the coast." },
      { title: "Spanish border transfers", desc: "Bayonne – Hendaye/Irun (35 km) in 30 minutes via the A63. French-Spanish bilingual service for cross-border commuters and tourists heading to San Sebastián." },
      { title: "Guaranteed Fêtes de Bayonne service", desc: "During the Fêtes de Bayonne (late July, 1 million visitors), our drivers provide non-stop service. Exit routes via Allées Marines and Pont Saint-Esprit." },
    ],
  },
  chambery: {
    introFr: "Chambéry, ancienne capitale des ducs de Savoie et porte des Alpes, est un carrefour entre la France, l'Italie et la Suisse. Desservie par la gare TGV et l'aéroport Chambéry-Savoie, TaxiNeo assure vos transferts vers les stations de ski (Courchevel, Méribel, Val Thorens), le lac du Bourget et la Chartreuse.",
    introEn: "Chambéry, former capital of the Dukes of Savoy and gateway to the Alps, is a crossroads between France, Italy and Switzerland. Served by the TGV station and Chambéry-Savoie Airport, TaxiNeo handles transfers to ski resorts (Courchevel, Méribel, Val Thorens), Lac du Bourget and the Chartreuse.",
    descriptionFr: "Plaque tournante du ski alpin, Chambéry est le passage obligé vers les Trois Vallées, le plus grand domaine skiable du monde. Nos chauffeurs sont équipés 4x4 et pneus neige pour les transferts en montagne. Forfaits aéroport – station disponibles. Service renforcé pendant la saison hivernale.",
    descriptionEn: "Hub for alpine skiing, Chambéry is the gateway to the Three Valleys, the world's largest ski area. Our drivers are equipped with 4x4 vehicles and snow tyres for mountain transfers. Airport – resort packages available. Enhanced service during the winter season.",
    metaDescriptionFr: "Taxi à Chambéry : aéroport Savoie, navettes Courchevel, Méribel, Val Thorens, lac du Bourget. Porte des Alpes. 4x4 équipés neige. Réservez sur TaxiNeo 24h/24.",
    metaDescriptionEn: "Taxi in Chambéry: Savoie airport, Courchevel, Méribel, Val Thorens transfers, Lac du Bourget. Gateway to the Alps. Snow-equipped 4x4s. Book on TaxiNeo.",
    heroSubtitleFr: "Ancienne capitale des ducs de Savoie et porte des Alpes, Chambéry est la plaque tournante vers les Trois Vallées, plus grand domaine skiable du monde. Chauffeurs équipés 4x4 et pneus neige pour vos transferts Courchevel, Méribel et Val Thorens. Forfaits aéroport – station disponibles.",
    heroSubtitleEn: "Former capital of the Dukes of Savoy and gateway to the Alps, Chambéry is the hub for the Three Valleys, the world's largest ski area. Drivers equipped with 4x4s and snow tyres for transfers to Courchevel, Méribel and Val Thorens. Airport – resort packages available.",
    whyUsFr: [
      { title: "Transferts Trois Vallées en 4x4", desc: "Chambéry – Courchevel (100 km) en 1h30, Chambéry – Méribel (90 km) en 1h20, Chambéry – Val Thorens (110 km) en 1h40. Véhicules 4x4 avec pneus neige et chaînes obligatoires." },
      { title: "Forfait aéroport Savoie–station", desc: "Aéroport Chambéry-Savoie à 8 km du centre : transfert en 12 minutes. Forfaits aéroport – station de ski combinés avec tarif dégressif pour les groupes et familles." },
      { title: "Experts lac du Bourget et Chartreuse", desc: "En été, circuits lac du Bourget (10 km, 15 min), abbaye de Hautecombe et massif de la Chartreuse. Chauffeurs savoyards connaissant les routes de montagne et les points de vue panoramiques." },
    ],
    whyUsEn: [
      { title: "Three Valleys transfers in 4x4", desc: "Chambéry – Courchevel (100 km) in 1h30, Chambéry – Méribel (90 km) in 1h20, Chambéry – Val Thorens (110 km) in 1h40. 4x4 vehicles with mandatory snow tyres and chains." },
      { title: "Savoie airport–resort package", desc: "Chambéry-Savoie Airport 8 km from the centre: transfer in 12 minutes. Combined airport – ski resort packages with discounted rates for groups and families." },
      { title: "Lac du Bourget & Chartreuse experts", desc: "In summer, circuits to Lac du Bourget (10 km, 15 min), Hautecombe Abbey and the Chartreuse massif. Savoyard drivers who know the mountain roads and panoramic viewpoints." },
    ],
  },
  valence: {
    introFr: "Valence, porte du Midi de la France et carrefour entre la vallée du Rhône et les Alpes, est desservie par la gare TGV Valence (à mi-chemin entre Paris et Marseille) et la gare Valence-Ville. TaxiNeo assure vos transferts gare TGV – centre-ville, vos courses vers le CH de Valence, et vos déplacements dans toute la Drôme.",
    introEn: "Valence, gateway to southern France and crossroads between the Rhône Valley and the Alps, is served by Valence TGV station (halfway between Paris and Marseille) and Valence-Ville station. TaxiNeo handles TGV station – city centre transfers, rides to Valence Hospital, and trips throughout the Drôme.",
    descriptionFr: "La gare TGV de Valence est excentrée et le taxi est le moyen le plus direct de rejoindre le centre historique ou les communes voisines (Bourg-lès-Valence, Portes-lès-Valence). Nos chauffeurs connaissent la route de la Drôme provençale et assurent les transferts vers Montélimar, Crest et le Vercors.",
    descriptionEn: "Valence TGV station is outside the city and a taxi is the most direct way to reach the historic centre or neighbouring communes (Bourg-lès-Valence, Portes-lès-Valence). Our drivers know the Drôme Provençale route and handle transfers to Montélimar, Crest and the Vercors.",
    metaDescriptionFr: "Taxi à Valence : gare TGV Rhône-Alpes Sud, Montélimar, Vercors, Drôme provençale. Mi-chemin Paris–Marseille. Transfert gare–centre dès 20 €. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Valence: TGV Rhône-Alpes Sud station, Montélimar, Vercors, Drôme Provençale. Halfway Paris–Marseille. Station–centre from €20. Book on TaxiNeo.",
    heroSubtitleFr: "Porte du Midi à mi-chemin entre Paris et Marseille, Valence relie la gare TGV excentrée au centre historique et à la Drôme provençale. Transfert gare – centre en 15 minutes dès 20 €, navettes Montélimar et Crest, et excursions vers le Vercors avec chauffeurs locaux.",
    heroSubtitleEn: "Gateway to the South, halfway between Paris and Marseille, Valence connects the outlying TGV station to the historic centre and the Drôme Provençale. Station – centre transfer in 15 minutes from €20, Montélimar and Crest shuttles, and Vercors excursions with local drivers.",
    whyUsFr: [
      { title: "Forfait gare TGV–centre dès 20 €", desc: "La gare TGV de Valence est à 10 km du centre historique : transfert en 15 minutes via la D532A à tarif forfaitaire dès 20 €. Sans détour, synchronisé avec les arrivées TGV Paris–Marseille." },
      { title: "Navettes Montélimar et Crest", desc: "Valence – Montélimar (50 km) en 40 minutes via l'A7, Valence – Crest (30 km) en 30 minutes par la D111. Transferts vers la Drôme provençale avec chauffeurs connaissant les routes de campagne." },
      { title: "Excursions Vercors et Drôme provençale", desc: "Circuits vers le Vercors (Col de Rousset, 60 km, 1h) et la Drôme lavande (Grignan, 70 km). Nos chauffeurs drômois connaissent les cols et les points de vue panoramiques sur la vallée du Rhône." },
    ],
    whyUsEn: [
      { title: "TGV station–centre from €20", desc: "Valence TGV station is 10 km from the historic centre: transfer in 15 minutes via the D532A at a flat fare from €20. No detour, synchronised with Paris–Marseille TGV arrivals." },
      { title: "Montélimar & Crest shuttles", desc: "Valence – Montélimar (50 km) in 40 minutes via the A7, Valence – Crest (30 km) in 30 minutes via the D111. Drôme Provençale transfers with drivers who know the country roads." },
      { title: "Vercors & Drôme Provençale excursions", desc: "Circuits to the Vercors (Col de Rousset, 60 km, 1h) and the Drôme lavender fields (Grignan, 70 km). Drômois drivers who know the passes and Rhône Valley panoramic viewpoints." },
    ],
  },
  fontainebleau: {
    introFr: "Fontainebleau, sous-préfecture de Seine-et-Marne, est mondialement connue pour son château inscrit au patrimoine mondial de l'UNESCO depuis 1981. Résidence des souverains français pendant huit siècles, de Louis VII à Napoléon III, le château est le seul palais royal et impérial habité continuellement pendant sept siècles. François Ier y fit venir des artistes italiens qui créèrent l'école de Fontainebleau, mouvement majeur de la Renaissance française. Napoléon Ier y fit ses adieux à la Garde impériale dans la célèbre cour des Adieux le 20 avril 1814. La forêt domaniale de 25 000 hectares est un haut lieu mondial de l'escalade de bloc (Cuvier, Apremont, Bas-Cuvier) et attire des millions de visiteurs annuels. L'INSEAD, prestigieuse école de commerce internationale, génère un flux constant de cadres internationaux. La gare Fontainebleau-Avon (Transilien R) relie Paris Gare de Lyon en 40-50 minutes. Position stratégique au sud de l'Île-de-France, entre Paris et la Bourgogne.",
    introEn: "Fontainebleau, a sub-prefecture of Seine-et-Marne, is world-famous for its palace listed as a UNESCO World Heritage Site since 1981. Home to French sovereigns for eight centuries, from Louis VII to Napoleon III, it is the only royal and imperial palace continuously inhabited for seven centuries. Francis I brought Italian artists who created the School of Fontainebleau, a major Renaissance movement. Napoleon made his famous farewell to the Imperial Guard in the Farewell Courtyard on 20 April 1814. The 25,000-hectare national forest is a world-class bouldering destination (Cuvier, Apremont, Bas-Cuvier), attracting millions of visitors annually. INSEAD, one of the world's top business schools, brings a constant flow of international executives. Fontainebleau-Avon station (Transilien R) connects to Paris Gare de Lyon in 40-50 minutes. Strategically located in southern Île-de-France, between Paris and Burgundy.",
    descriptionFr: "Fontainebleau et son agglomération (Avon, Samois-sur-Seine, Thomery, Vulaines, Bourron-Marlotte, Moret-sur-Loing) génèrent des besoins de transport variés : touristes visitant le château (1,5 million de visiteurs par an), cadres INSEAD anglophones nécessitant des transferts aéroports fréquents, résidents pour leurs courses quotidiennes et rendez-vous médicaux à Melun, cavaliers du Grand Parquet (pôle hippique national), et grimpeurs internationaux venus pour les blocs de grès de la forêt. Avon, commune jumelle partageant la gare Fontainebleau-Avon, forme avec Fontainebleau une agglomération de 37 000 habitants. TaxiNeo couvre l'ensemble de cette zone avec des chauffeurs locaux connaissant parfaitement les routes forestières, les accès au château et les raccourcis vers les autoroutes A6 et Francilienne.",
    descriptionEn: "Fontainebleau and its greater area (Avon, Samois-sur-Seine, Thomery, Vulaines, Bourron-Marlotte, Moret-sur-Loing) generate diverse transport needs: tourists visiting the palace (1.5 million visitors per year), English-speaking INSEAD executives requiring frequent airport transfers, residents for daily errands and medical appointments in Melun, riders at the Grand Parquet (national equestrian centre), and international climbers drawn to the forest's sandstone boulders. Avon, the twin town sharing Fontainebleau-Avon station, forms an urban area of 37,000 with Fontainebleau. TaxiNeo covers this entire zone with local drivers who know the forest roads, palace access points, and shortcuts to the A6 motorway and Francilienne ring road.",
    metaDescriptionFr: "Réservez votre taxi à Fontainebleau. Château UNESCO, forêt, INSEAD. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs locaux 24h/24.",
    metaDescriptionEn: "Book your taxi in Fontainebleau. UNESCO palace, forest, INSEAD. Fixed-price transfers to Paris, Orly, CDG. Local drivers 24/7.",
    heroSubtitleFr: "Château UNESCO, forêt domaniale, INSEAD — vos chauffeurs locaux à prix fixe, 24h/24.",
    heroSubtitleEn: "UNESCO World Heritage palace, national forest, INSEAD — your local drivers at fixed prices, 24/7.",
    whyUsFr: [
      { title: "Chauffeurs locaux", desc: "Connaissance parfaite de la forêt, du château, des raccourcis D606/N7/A6. Nos chauffeurs bellifontains vous emmènent par les itinéraires les plus rapides." },
      { title: "Transferts aéroport 24h/24", desc: "Orly en 45 min, CDG en 1h15. Départs pour vols matinaux dès 4h, suivi des vols en temps réel. Tarif fixe garanti, péages inclus." },
      { title: "Service international", desc: "Chauffeurs anglophones pour les cadres INSEAD et les touristes du monde entier. Communication fluide en anglais, aide aux bagages." },
      { title: "Prix fixe garanti", desc: "Pas de compteur, pas de surprise. Tarif annoncé à la réservation, péages inclus. Devis immédiat en ligne." },
    ],
    whyUsEn: [
      { title: "Local drivers", desc: "Perfect knowledge of the forest, palace, and D606/N7/A6 shortcuts. Our Fontainebleau drivers take you via the fastest routes." },
      { title: "Airport transfers 24/7", desc: "Orly in 45 min, CDG in 1h15. Early morning departures from 4am, real-time flight tracking. Fixed fare guaranteed, tolls included." },
      { title: "International service", desc: "English-speaking drivers for INSEAD executives and tourists from around the world. Fluent English communication, luggage assistance." },
      { title: "Guaranteed fixed price", desc: "No meter, no surprises. Fare confirmed at booking, tolls included. Instant online quote." },
    ],
  },
  avon: {
    introFr: "Avon, commune jumelle de Fontainebleau en Seine-et-Marne, forme avec elle une agglomération de 37 000 habitants au cœur de la forêt domaniale. C'est à Avon que se situe la gare Fontainebleau-Avon (Transilien R), principale porte d'entrée ferroviaire de la zone, à 40-50 minutes de Paris Gare de Lyon. La ville s'étend de la lisière de la forêt domaniale de Fontainebleau — 25 000 hectares classés, haut lieu mondial de l'escalade de bloc — jusqu'aux rives du Loing. Cadre résidentiel prisé des familles et des cadres de l'INSEAD voisin, Avon accueille aussi le carmel historique où fut cachée la philosophe Édith Stein pendant la Seconde Guerre mondiale. Le marché d'Avon (mercredi et samedi matin, place de la Mairie) est l'un des plus animés du sud de la Seine-et-Marne. TaxiNeo connecte les résidents d'Avon avec des chauffeurs locaux pour les transferts vers Paris, Orly et CDG.",
    introEn: "Avon, Fontainebleau's twin town in Seine-et-Marne, forms a 37,000-resident urban area at the heart of the national forest. Fontainebleau-Avon station (Transilien R), the main rail gateway to the area, is located in Avon — 40-50 minutes from Paris Gare de Lyon. The town extends from the edge of the 25,000-hectare Fontainebleau national forest — a world-class bouldering destination — to the banks of the Loing river. A popular residential setting for families and INSEAD executives, Avon also houses the historic Carmel where philosopher Edith Stein was hidden during World War II. Avon's market (Wednesday and Saturday mornings) is one of the liveliest in southern Seine-et-Marne. TaxiNeo connects Avon residents with local drivers for transfers to Paris, Orly and CDG.",
    descriptionFr: "Avec TaxiNeo à Avon, profitez de chauffeurs locaux connaissant parfaitement la gare Fontainebleau-Avon, les accès forestiers et les raccourcis vers l'A6. Idéal pour les transferts aéroport (Orly en 45 min, CDG en 75 min), les retours tardifs après le dernier Transilien ou les déplacements professionnels vers Paris. Service 24h/24, tarif fixe garanti, prise en charge à domicile dans tous les quartiers d'Avon.",
    descriptionEn: "With TaxiNeo in Avon, enjoy local drivers who know Fontainebleau-Avon station, forest access points and shortcuts to the A6 perfectly. Ideal for airport transfers (Orly in 45 min, CDG in 75 min), late returns after the last Transilien or business trips to Paris. 24/7 service, guaranteed fixed fare, home pickup in all Avon neighbourhoods.",
    metaDescriptionFr: "Taxi à Avon (77) : gare Fontainebleau-Avon, transferts Paris, Orly, CDG. Tarif fixe, chauffeurs locaux 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Avon (77): Fontainebleau-Avon station, transfers to Paris, Orly, CDG. Fixed fare, local drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Commune jumelle de Fontainebleau, Avon abrite la gare Fontainebleau-Avon et la lisière de la forêt domaniale. Transferts Paris, Orly et CDG à prix fixe avec chauffeurs locaux disponibles 24h/24.",
    heroSubtitleEn: "Fontainebleau's twin town, Avon is home to Fontainebleau-Avon station and the edge of the national forest. Fixed-price transfers to Paris, Orly and CDG with local drivers available 24/7.",
    whyUsFr: [
      { title: "Gare Fontainebleau-Avon", desc: "Prise en charge et dépose à la sortie de la gare. Suivi des horaires Transilien R. Idéal après le dernier train (22h30)." },
      { title: "Transferts aéroport directs", desc: "Orly en 45 min (70-90 €), CDG en 75 min (120-150 €). Départ dès 4h du matin, suivi de vol en temps réel." },
      { title: "Connaissance locale parfaite", desc: "Nos chauffeurs connaissent Avon par cœur : quartiers résidentiels, accès forêt, raccourcis N7/A6." },
    ],
    whyUsEn: [
      { title: "Fontainebleau-Avon station", desc: "Pickup and drop-off at the station exit. Transilien R schedule tracking. Ideal after the last train (10:30pm)." },
      { title: "Direct airport transfers", desc: "Orly in 45 min (€70-90), CDG in 75 min (€120-150). Departures from 4am, real-time flight tracking." },
      { title: "Perfect local knowledge", desc: "Our drivers know Avon inside out: residential areas, forest access, N7/A6 shortcuts." },
    ],
  },
  "moret-sur-loing": {
    introFr: "Moret-sur-Loing est l'une des plus belles cités médiévales d'Île-de-France, célèbre pour ses remparts du XIIe siècle, son donjon, ses portes fortifiées (Samois, Bourgogne) et son pont sur le Loing immortalisé par le peintre impressionniste Alfred Sisley, qui y vécut de 1889 à sa mort en 1899. La commune, fusionnée avec Orvanne et Écuelles en 2016, conserve un charme exceptionnel avec ses maisons à colombages, ses ruelles pavées et la confluence du Loing avec la Seine. Le sucre d'orge de Moret, spécialité bénédictine datant de 1638, est la plus ancienne confiserie de France encore fabriquée. Point de départ pour la randonnée le long du canal du Loing et du GR13, Moret attire touristes, artistes et amoureux du patrimoine. TaxiNeo assure les transferts vers Paris, Orly et CDG depuis le cœur médiéval.",
    introEn: "Moret-sur-Loing is one of the most beautiful medieval towns in Île-de-France, famous for its 12th-century ramparts, keep, fortified gates (Samois, Bourgogne) and the bridge over the Loing immortalised by Impressionist painter Alfred Sisley, who lived here from 1889 until his death in 1899. The town retains exceptional charm with half-timbered houses, cobbled lanes and the confluence of the Loing and Seine. The sucre d'orge de Moret, a Benedictine sweet dating from 1638, is the oldest confection still made in France. A starting point for hikes along the Loing canal and GR13, Moret attracts tourists, artists and heritage lovers. TaxiNeo handles transfers to Paris, Orly and CDG from the medieval heart.",
    descriptionFr: "Nos chauffeurs connaissent parfaitement les accès au centre médiéval de Moret malgré ses rues étroites et pavées. Transferts fiables vers Paris (60 min), Orly (50 min) et CDG (80 min) à tarif fixe. Service complémentaire au Transilien depuis la gare de Moret-Veneux-les-Sablons, dont la fréquence est limitée (8-10 trains/jour). Disponibles 24h/24 pour les résidents, touristes et visiteurs du patrimoine.",
    descriptionEn: "Our drivers know the access points to Moret's medieval centre perfectly despite its narrow, cobbled streets. Reliable transfers to Paris (60 min), Orly (50 min) and CDG (80 min) at fixed fares. Complementary service to the Transilien from Moret-Veneux-les-Sablons station, which has limited frequency (8-10 trains/day). Available 24/7 for residents, tourists and heritage visitors.",
    metaDescriptionFr: "Taxi à Moret-sur-Loing : cité médiévale, Sisley, confluence Loing. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs locaux 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Moret-sur-Loing: medieval town, Sisley, Loing confluence. Fixed-price transfers to Paris, Orly, CDG. Local drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité médiévale chère à Sisley, Moret-sur-Loing enchante par ses remparts, son pont et la confluence du Loing. Transferts Paris, Orly et CDG à prix fixe depuis le centre historique.",
    heroSubtitleEn: "Medieval town dear to Sisley, Moret-sur-Loing charms with its ramparts, bridge and Loing confluence. Fixed-price transfers to Paris, Orly and CDG from the historic centre.",
    whyUsFr: [
      { title: "Accès centre médiéval", desc: "Nos chauffeurs connaissent les points d'accès au cœur historique malgré les rues étroites et pavées. Prise en charge porte de Samois, porte de Bourgogne ou place de l'église." },
      { title: "Complément au Transilien", desc: "La gare Moret-Veneux-les-Sablons (8-10 trains/jour) a une fréquence limitée. Le taxi prend le relais en soirée, le week-end et pour les trajets aéroport." },
      { title: "Patrimoine et nature", desc: "Transferts vers les départs de randonnée (canal du Loing, GR13), le musée du Sucre d'Orge et les sites Sisley. Retour flexible après visite." },
    ],
    whyUsEn: [
      { title: "Medieval centre access", desc: "Our drivers know access points to the historic heart despite narrow cobbled streets. Pickup at Porte de Samois, Porte de Bourgogne or the church square." },
      { title: "Transilien complement", desc: "Moret-Veneux-les-Sablons station (8-10 trains/day) has limited frequency. Taxi takes over evenings, weekends and for airport transfers." },
      { title: "Heritage & nature", desc: "Transfers to hiking trailheads (Loing canal, GR13), Sucre d'Orge Museum and Sisley sites. Flexible return after visits." },
    ],
  },
  barbizon: {
    introFr: "Barbizon est le berceau de la peinture de plein air en France. Dans les années 1830-1870, des artistes comme Jean-François Millet, Théodore Rousseau, Camille Corot et Daubigny s'y installèrent pour peindre la forêt de Fontainebleau sur le motif, fondant l'école de Barbizon qui préfigura l'Impressionnisme. L'auberge Ganne, aujourd'hui musée départemental, conserve les peintures murales réalisées par les artistes en guise de paiement. La Grande Rue aligne galeries d'art, ateliers de peintres et hôtels de charme. Village de 1 500 habitants en lisière de la forêt de Fontainebleau, Barbizon reste un haut lieu artistique international attirant collectionneurs, historiens d'art et amoureux de la nature. Sans gare ferroviaire, le taxi est le moyen de transport privilégié pour rejoindre Paris et les aéroports.",
    introEn: "Barbizon is the birthplace of plein air painting in France. In the 1830s-1870s, artists including Jean-François Millet, Théodore Rousseau, Camille Corot and Daubigny settled here to paint Fontainebleau forest en plein air, founding the Barbizon School that prefigured Impressionism. The Auberge Ganne, now a departmental museum, preserves murals painted by the artists as payment. The Grande Rue is lined with art galleries, painters' studios and boutique hotels. A village of 1,500 on the edge of Fontainebleau forest, Barbizon remains an international artistic hub attracting collectors, art historians and nature lovers. With no train station, the taxi is the preferred transport to reach Paris and the airports.",
    descriptionFr: "Barbizon ne dispose d'aucune gare et n'est desservi que par de rares bus locaux vers Melun. TaxiNeo est le lien direct entre le village des peintres et le reste de l'Île-de-France : Paris en 50 min, Orly en 40 min, CDG en 70 min. Prise en charge devant votre galerie, hôtel ou résidence dans la Grande Rue. Véhicules spacieux pouvant accommoder des emballages d'œuvres d'art pour les collectionneurs.",
    descriptionEn: "Barbizon has no train station and is served only by infrequent local buses to Melun. TaxiNeo is the direct link between the painters' village and the rest of Île-de-France: Paris in 50 min, Orly in 40 min, CDG in 70 min. Pickup at your gallery, hotel or residence on the Grande Rue. Spacious vehicles that can accommodate artwork packaging for collectors.",
    metaDescriptionFr: "Taxi à Barbizon : village des peintres, Millet, Rousseau, galeries. Transferts Paris, Orly, CDG à prix fixe. Seul transport direct. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Barbizon: painters' village, Millet, Rousseau, galleries. Fixed-price transfers to Paris, Orly, CDG. Only direct transport. Book on TaxiNeo.",
    heroSubtitleFr: "Village des peintres en lisière de la forêt de Fontainebleau, Barbizon est le berceau de l'école de Barbizon. Sans gare, le taxi est votre lien direct vers Paris, Orly et CDG à prix fixe.",
    heroSubtitleEn: "Painters' village on the edge of Fontainebleau forest, Barbizon is the birthplace of the Barbizon School. With no station, the taxi is your direct link to Paris, Orly and CDG at fixed prices.",
    whyUsFr: [
      { title: "Seul transport direct", desc: "Pas de gare à Barbizon, bus rares vers Melun. Le taxi est le seul moyen confortable et rapide de rejoindre Paris (50 min) et les aéroports." },
      { title: "Service collectionneurs et galeristes", desc: "Véhicules spacieux pour le transport d'œuvres d'art emballées. Prise en charge devant votre galerie ou hôtel dans la Grande Rue." },
      { title: "Accès forêt et sites peintres", desc: "Transferts vers les sentiers forestiers (chaos du Médusant, mare aux Fées), le musée des Peintres et les ateliers Rousseau/Millet." },
    ],
    whyUsEn: [
      { title: "Only direct transport", desc: "No station in Barbizon, rare buses to Melun. Taxi is the only comfortable, fast way to reach Paris (50 min) and the airports." },
      { title: "Collector & gallery service", desc: "Spacious vehicles for packaged artwork transport. Pickup at your gallery or hotel on the Grande Rue." },
      { title: "Forest & painter sites access", desc: "Transfers to forest trails (Médusant rocks, Mare aux Fées), Painters' Museum and Rousseau/Millet studios." },
    ],
  },
  "montereau-fault-yonne": {
    introFr: "Montereau-Fault-Yonne se situe au confluent spectaculaire de la Seine et de l'Yonne, position stratégique qui en fit un lieu d'événements historiques majeurs. Le duc de Bourgogne Jean sans Peur y fut assassiné en 1419, déclenchant l'alliance anglo-bourguignonne de la guerre de Cent Ans. Napoléon y remporta sa dernière victoire sur le sol français le 18 février 1814. Aujourd'hui, Montereau est un pôle économique de 20 000 habitants du sud Seine-et-Marne : zone industrielle (Schneider Electric, logistique), port fluvial sur la Seine, position au carrefour de l'A5 et de la D606. La ville connaît un important renouveau urbain. TaxiNeo dessert l'ensemble de l'agglomération monterelaise avec des transferts vers Paris, Orly et CDG.",
    introEn: "Montereau-Fault-Yonne sits at the spectacular confluence of the Seine and Yonne rivers, a strategic position that made it the site of major historical events. The Duke of Burgundy was assassinated here in 1419, triggering the Anglo-Burgundian alliance in the Hundred Years' War. Napoleon won his last victory on French soil here on 18 February 1814. Today, Montereau is a 20,000-resident economic hub in southern Seine-et-Marne: industrial zone (Schneider Electric, logistics), Seine river port, and position at the A5/D606 crossroads. The town is undergoing significant urban renewal. TaxiNeo serves the entire Montereau area with transfers to Paris, Orly and CDG.",
    descriptionFr: "Nos chauffeurs couvrent toute l'agglomération de Montereau : centre-ville, Surville, zone industrielle, port fluvial et quartier de la gare. Transferts fiables vers Paris (70 min), Orly (55 min) et CDG (85 min) à tarif fixe. Complément au Transilien R dont la fréquence depuis Montereau est limitée (6-8 trains directs/jour). Service renforcé pour les déplacements professionnels depuis la zone économique.",
    descriptionEn: "Our drivers cover the entire Montereau area: town centre, Surville, industrial zone, river port and station quarter. Reliable transfers to Paris (70 min), Orly (55 min) and CDG (85 min) at fixed fares. Complement to Transilien R, which has limited frequency from Montereau (6-8 direct trains/day). Enhanced service for business trips from the economic zone.",
    metaDescriptionFr: "Taxi à Montereau-Fault-Yonne : confluence Seine/Yonne, zone industrielle. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Montereau-Fault-Yonne: Seine/Yonne confluence, industrial zone. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Au confluent de la Seine et de l'Yonne, Montereau est un pôle économique de 20 000 habitants. Transferts Paris, Orly et CDG à prix fixe depuis le centre-ville et la zone industrielle.",
    heroSubtitleEn: "At the confluence of the Seine and Yonne, Montereau is a 20,000-resident economic hub. Fixed-price transfers to Paris, Orly and CDG from the town centre and industrial zone.",
    whyUsFr: [
      { title: "Couverture zone industrielle", desc: "Prise en charge dans toute la zone économique : Schneider Electric, centres logistiques, port fluvial. Chauffeurs connaissant les accès sites." },
      { title: "Complément Transilien fiable", desc: "La gare de Montereau (6-8 trains directs/jour) a une fréquence limitée. Taxi disponible 24h/24, soirs, week-ends et jours fériés." },
      { title: "Transferts aéroport compétitifs", desc: "Orly en 55 min (85-110 €), CDG en 85 min (135-170 €). À 2-3 passagers, plus avantageux que train + RER." },
    ],
    whyUsEn: [
      { title: "Industrial zone coverage", desc: "Pickup anywhere in the economic zone: Schneider Electric, logistics centres, river port. Drivers who know site access points." },
      { title: "Reliable Transilien complement", desc: "Montereau station (6-8 direct trains/day) has limited frequency. Taxi available 24/7, evenings, weekends and holidays." },
      { title: "Competitive airport transfers", desc: "Orly in 55 min (€85-110), CDG in 85 min (€135-170). For 2-3 passengers, better value than train + RER." },
    ],
  },
  chelles: {
    introFr: "Chelles, avec ses 55 000 habitants, est la commune la plus peuplée de Seine-et-Marne et un carrefour majeur du nord-est francilien. Desservie par la gare de Chelles-Gournay sur le RER E (ligne Eole) et le Transilien P, elle est connectée à Paris-Est en seulement 15 minutes, ce qui en fait une destination résidentielle très prisée des actifs travaillant dans la capitale. La ville s'étend des bords de Marne — où subsistent les guinguettes qui firent la renommée de la vallée au XIXe siècle — jusqu'au vaste parc du Souvenir et à la zone commerciale Chelles 2, l'un des pôles commerciaux de référence du secteur avec ses enseignes Decathlon, Leroy Merlin et Carrefour. Le centre aquatique Aqua Marne attire les familles de toute l'agglomération. Chelles connaît un marché immobilier dynamique porté par les pavillons des quartiers Aulnoy et Bois de Chelles, ainsi que par les programmes neufs à proximité de la gare. TaxiNeo connecte les Chellois avec des chauffeurs locaux pour tous leurs déplacements : transferts vers CDG (35-45 €, 25 min), navettes vers Paris et courses vers les centres hospitaliers de Montfermeil et Lagny.",
    introEn: "Chelles, with its 55,000 residents, is the most populous town in Seine-et-Marne and a major crossroads in the northeastern Île-de-France region. Served by Chelles-Gournay station on the RER E (Eole line) and Transilien P, it connects to Paris-Est in just 15 minutes, making it a highly sought-after residential area for professionals working in the capital. The town stretches from the banks of the Marne — where the guinguettes (riverside dance halls) that made the valley famous in the 19th century still stand — to the vast Parc du Souvenir and the Chelles 2 retail park, a key commercial hub with stores like Decathlon, Leroy Merlin and Carrefour. The Aqua Marne aquatic centre draws families from across the area. Chelles enjoys a dynamic property market driven by the detached houses of Aulnoy and Bois de Chelles neighbourhoods, as well as new developments near the station. TaxiNeo connects Chelles residents with local drivers for all their travel needs: transfers to CDG (€35-45, 25 min), shuttles to Paris and rides to the Montfermeil and Lagny hospital centres.",
    descriptionFr: "Avec TaxiNeo à Chelles, profitez de chauffeurs connaissant parfaitement les accès à la gare de Chelles-Gournay, les itinéraires rapides vers l'A104 (Francilienne) et l'A4, ainsi que les raccourcis par Gournay-sur-Marne et Noisy-le-Grand. Le RER E, bien que rapide vers Paris, s'arrête en soirée et ne dessert ni Orly ni CDG directement. Le taxi devient alors indispensable pour les vols matinaux ou les retours tardifs. Service 24h/24, tarif fixe garanti annoncé avant réservation, prise en charge à domicile dans tous les quartiers de Chelles : centre-ville, Aulnoy, Bois de Chelles, Trou de Chelles et zone commerciale Chelles 2.",
    descriptionEn: "With TaxiNeo in Chelles, enjoy drivers who know Chelles-Gournay station access points perfectly, fast routes to the A104 (Francilienne) and A4, as well as shortcuts via Gournay-sur-Marne and Noisy-le-Grand. The RER E, while fast to Paris, stops running in the evening and doesn't serve Orly or CDG directly. The taxi then becomes essential for early flights or late returns. 24/7 service, guaranteed fixed fare quoted before booking, home pickup in all Chelles neighbourhoods: town centre, Aulnoy, Bois de Chelles, Trou de Chelles and Chelles 2 retail park.",
    metaDescriptionFr: "Taxi Chelles : gare RER E Chelles-Gournay, zone Chelles 2, bords de Marne. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Chelles: RER E Chelles-Gournay, Chelles 2 retail park, Marne riverbanks. Fixed-price Paris, Orly, CDG transfers. 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Plus grande ville de Seine-et-Marne, Chelles est reliée à Paris-Est en 15 min par le RER E. Réservez un taxi chellois à prix fixe pour vos transferts aéroport, vos courses vers la zone Chelles 2 ou vos retours tardifs après le dernier train.",
    heroSubtitleEn: "The largest town in Seine-et-Marne, Chelles connects to Paris-Est in 15 min via the RER E. Book a Chelles taxi at a fixed price for airport transfers, rides to the Chelles 2 retail zone or late returns after the last train.",
    whyUsFr: [
      { title: "Gare Chelles-Gournay – relais RER E", desc: "Prise en charge à la sortie de la gare RER E / Transilien P. Idéal après le dernier train (23h30) ou pour les trajets non desservis : CDG en 25 min (35-45 €), Orly en 40 min (55-75 €). Suivi horaires en temps réel." },
      { title: "Experts bords de Marne et A104", desc: "Nos chauffeurs connaissent chaque accès : raccourci par Gournay-sur-Marne vers l'A4, entrée rapide A104 nord vers CDG, itinéraire bis par Montfermeil en cas de bouchon sur la Francilienne." },
      { title: "Desserte zone commerciale Chelles 2", desc: "Transport aller-retour vers Chelles 2 (Decathlon, Leroy Merlin, Carrefour), le centre aquatique Aqua Marne et les centres médicaux. Tarif fixe garanti pour les courses locales." }
    ],
    whyUsEn: [
      { title: "Chelles-Gournay station – RER E relay", desc: "Pickup at RER E / Transilien P station exit. Ideal after the last train (11:30pm) or for destinations not served by rail: CDG in 25 min (€35-45), Orly in 40 min (€55-75). Real-time schedule tracking." },
      { title: "Marne riverbank & A104 experts", desc: "Our drivers know every access point: Gournay-sur-Marne shortcut to the A4, fast A104 north entry to CDG, alternative route via Montfermeil when the Francilienne is congested." },
      { title: "Chelles 2 retail zone service", desc: "Round-trip transport to Chelles 2 (Decathlon, Leroy Merlin, Carrefour), Aqua Marne aquatic centre and medical facilities. Guaranteed fixed fare for local rides." }
    ]
  },
  villeparisis: {
    introFr: "Villeparisis, commune de 27 000 habitants au nord de la Seine-et-Marne, occupe une position géographique stratégique entre Paris et l'aéroport Roissy-Charles de Gaulle, distant de seulement 15 kilomètres. Traversée par le canal de l'Ourcq — voie d'eau historique creusée sous Napoléon Ier pour alimenter Paris en eau potable — la ville offre un cadre de vie semi-urbain apprécié des familles. Le parc Ladoucette, poumon vert de 15 hectares en bord de canal, accueille promeneurs et joggers toute l'année. La gare de Villeparisis – Mitry-le-Neuf sur le RER B dessert CDG directement, mais avec des temps de trajet souvent longs et des correspondances peu pratiques aux heures creuses. La zone industrielle de Villeparisis et le secteur logistique environnant (Compans, Mitry) emploient des milliers de salariés aux horaires décalés. TaxiNeo est la solution fiable pour les transferts CDG (20-30 €, 15 min), les navettes vers Paris-Nord et les courses professionnelles vers les plateformes logistiques.",
    introEn: "Villeparisis, a town of 27,000 residents in northern Seine-et-Marne, holds a strategic position between Paris and Roissy-Charles de Gaulle Airport, just 15 kilometres away. Crossed by the Canal de l'Ourcq — a historic waterway dug under Napoleon I to supply Paris with drinking water — the town offers a semi-urban setting popular with families. Parc Ladoucette, a 15-hectare green space along the canal, welcomes walkers and joggers year-round. Villeparisis – Mitry-le-Neuf station on the RER B serves CDG directly, but with often long journey times and inconvenient connections during off-peak hours. The Villeparisis industrial zone and surrounding logistics sector (Compans, Mitry) employ thousands of shift workers. TaxiNeo is the reliable solution for CDG transfers (€20-30, 15 min), shuttles to Paris-Nord and business rides to logistics platforms.",
    descriptionFr: "Avec TaxiNeo à Villeparisis, profitez de chauffeurs spécialisés dans les transferts express vers CDG via la D212 et la Francilienne (A104). À seulement 15 km de l'aéroport, Villeparisis est l'une des communes les mieux placées pour des transferts rapides et économiques. Nos chauffeurs desservent également les zones logistiques de Compans et Mitry-Compans (Amazon, DHL, plateforme de fret), la gare RER B Villeparisis – Mitry-le-Neuf et le parc Ladoucette. Tarif fixe garanti, service 24h/24 y compris les prises en charge à 4h du matin pour les vols internationaux.",
    descriptionEn: "With TaxiNeo in Villeparisis, enjoy drivers specialising in express CDG transfers via the D212 and Francilienne (A104). Just 15 km from the airport, Villeparisis is one of the best-positioned towns for fast, affordable transfers. Our drivers also serve the Compans and Mitry-Compans logistics zones (Amazon, DHL, freight platform), Villeparisis – Mitry-le-Neuf RER B station and Parc Ladoucette. Guaranteed fixed fare, 24/7 service including 4am pickups for international flights.",
    metaDescriptionFr: "Taxi Villeparisis : CDG à 15 km, canal de l'Ourcq, parc Ladoucette. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Villeparisis: CDG just 15 km away, Canal de l'Ourcq, Parc Ladoucette. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "À seulement 15 km de Roissy-CDG, Villeparisis bénéficie du RER B et du canal de l'Ourcq. Réservez un taxi à prix fixe pour vos transferts aéroport express, vos navettes vers Paris ou vos déplacements vers les zones logistiques de Compans et Mitry.",
    heroSubtitleEn: "Just 15 km from Roissy-CDG, Villeparisis benefits from the RER B and the Canal de l'Ourcq. Book a fixed-price taxi for express airport transfers, Paris shuttles or rides to the Compans and Mitry logistics zones.",
    whyUsFr: [
      { title: "Transfert CDG express 15 min", desc: "Villeparisis – CDG en 15 minutes via D212 et A104. Tarif fixe 20-30 €, imbattable par rapport au RER B (45 min avec correspondance). Prise en charge terminal, suivi des vols." },
      { title: "Desserte zones logistiques", desc: "Chauffeurs connaissant les accès aux plateformes Amazon Compans, DHL Mitry, et l'ensemble du secteur fret. Horaires décalés couverts : prise en charge dès 3h du matin." },
      { title: "Canal de l'Ourcq et parc Ladoucette", desc: "Transport vers les promenades du canal, le parc Ladoucette et les communes voisines Claye-Souilly et Mitry-Mory. Tarif fixe pour courses locales." }
    ],
    whyUsEn: [
      { title: "Express CDG transfer in 15 min", desc: "Villeparisis to CDG in 15 minutes via D212 and A104. Fixed fare €20-30, unbeatable compared to the RER B (45 min with connection). Terminal pickup, flight tracking." },
      { title: "Logistics zone service", desc: "Drivers who know access points to Amazon Compans, DHL Mitry and the entire freight sector. Shift hours covered: pickups from 3am." },
      { title: "Canal de l'Ourcq & Parc Ladoucette", desc: "Transport to canal walks, Parc Ladoucette and neighbouring towns Claye-Souilly and Mitry-Mory. Fixed fare for local rides." }
    ]
  },
  "mitry-mory": {
    introFr: "Mitry-Mory, commune de 20 000 habitants au nord-est de la Seine-et-Marne, est l'une des localités les plus proches de l'aéroport Roissy-Charles de Gaulle, situé à seulement 8 kilomètres. Cette proximité exceptionnelle en fait un lieu de résidence privilégié pour les personnels navigants, les employés d'Aéroports de Paris et les professionnels de la logistique aérienne. La gare de Mitry-Claye, terminus du RER B, offre une liaison directe vers Paris et CDG, mais les fréquences en soirée et le week-end restent limitées. La commune est structurée autour de deux noyaux villageois historiques — Mitry et Mory — séparés par de vastes zones agricoles qui confèrent au territoire un caractère semi-rural unique aux portes de l'aéroport. La zone logistique Compans-Mitry, l'une des plus importantes d'Île-de-France, concentre des entrepôts Amazon, Geodis et Chronopost. TaxiNeo assure des transferts CDG en 10-15 minutes pour 15-25 €, un tarif et un temps imbattables.",
    introEn: "Mitry-Mory, a town of 20,000 in northeastern Seine-et-Marne, is one of the closest communities to Roissy-Charles de Gaulle Airport, just 8 kilometres away. This exceptional proximity makes it a preferred residence for cabin crew, Aéroports de Paris employees and air logistics professionals. Mitry-Claye station, the RER B terminus, provides direct service to Paris and CDG, but evening and weekend frequencies remain limited. The town is built around two historic village centres — Mitry and Mory — separated by vast farmland that gives the area a uniquely semi-rural character at the airport's doorstep. The Compans-Mitry logistics zone, one of the largest in Île-de-France, hosts Amazon, Geodis and Chronopost warehouses. TaxiNeo provides CDG transfers in 10-15 minutes for €15-25, an unbeatable time and fare.",
    descriptionFr: "Nos chauffeurs à Mitry-Mory maîtrisent les accès directs à CDG par la D212 et la N2, évitant la Francilienne souvent congestionnée. Ils connaissent les entrées des terminaux 1, 2 et 3, les parkings personnel ADP et les accès aux zones de fret. Service renforcé pour les horaires décalés des personnels aéroportuaires : prises en charge dès 3h du matin, retours après les vols de nuit. TaxiNeo dessert également la gare RER B Mitry-Claye, les zones agricoles nord et les communes voisines de Compans et Villeparisis. Tarif fixe garanti, pas de compteur ni de surprises.",
    descriptionEn: "Our drivers in Mitry-Mory master direct CDG access via the D212 and N2, avoiding the often-congested Francilienne. They know Terminal 1, 2 and 3 entrances, ADP staff car parks and freight zone access points. Enhanced service for airport workers' shift hours: pickups from 3am, returns after night flights. TaxiNeo also serves Mitry-Claye RER B station, the northern farmland areas and neighbouring towns Compans and Villeparisis. Guaranteed fixed fare, no meter and no surprises.",
    metaDescriptionFr: "Taxi Mitry-Mory : CDG à 8 km, gare RER B Mitry-Claye, zone logistique Compans. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Mitry-Mory: CDG 8 km away, RER B Mitry-Claye, Compans logistics zone. Fixed-price Paris, Orly, CDG transfers. 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "À 8 km de Roissy-CDG, Mitry-Mory est le point de départ idéal pour des transferts aéroport express. Nos chauffeurs desservent la gare RER B Mitry-Claye, la zone logistique Compans et l'ensemble de la commune à prix fixe, 24h/24.",
    heroSubtitleEn: "Just 8 km from Roissy-CDG, Mitry-Mory is the ideal starting point for express airport transfers. Our drivers serve Mitry-Claye RER B station, the Compans logistics zone and the entire town at fixed prices, 24/7.",
    whyUsFr: [
      { title: "CDG en 10 minutes, 15-25 €", desc: "Mitry-Mory est à 8 km de CDG : transfert en 10-15 min via D212 ou N2. Tarif fixe imbattable, prise en charge au terminal, suivi des vols. Plus rapide et moins cher que le RER B (20 min + marche)." },
      { title: "Service personnels aéroportuaires", desc: "Prises en charge dès 3h pour les équipages et salariés ADP. Connaissance des accès staff, parkings P0/PEX et zones de fret Compans. Horaires décalés 7j/7." },
      { title: "Desserte Mitry-Claye et communes nord", desc: "Transport depuis la gare RER B terminus Mitry-Claye, les quartiers résidentiels de Mory et les exploitations agricoles du nord. Courses locales et transferts longue distance." }
    ],
    whyUsEn: [
      { title: "CDG in 10 minutes, €15-25", desc: "Mitry-Mory is 8 km from CDG: transfer in 10-15 min via D212 or N2. Unbeatable fixed fare, terminal pickup, flight tracking. Faster and cheaper than the RER B (20 min + walk)." },
      { title: "Airport staff service", desc: "Pickups from 3am for crew and ADP employees. Knowledge of staff access points, P0/PEX car parks and Compans freight zones. Shift hours 7 days a week." },
      { title: "Mitry-Claye & northern towns service", desc: "Transport from Mitry-Claye RER B terminus station, Mory residential areas and northern farmland. Local rides and long-distance transfers." }
    ]
  },
  "claye-souilly": {
    introFr: "Claye-Souilly, commune résidentielle de 12 000 habitants au cœur de la Seine-et-Marne nord, est un carrefour naturel entre l'agglomération parisienne, l'aéroport Roissy-CDG et la ville de Meaux. La commune est surtout connue pour le centre commercial Bay 1 (ex-Bay 2), l'un des plus grands pôles commerciaux du nord 77 avec plus de 100 enseignes, un hypermarché Auchan et un cinéma multiplexe. Le canal de l'Ourcq traverse le territoire communal, offrant un cadre bucolique ponctué de promenades cyclables et de pêcheurs. Le pont médiéval de Souilly, vestige du XIIe siècle, rappelle l'importance historique de ce passage sur la route de Meaux. Claye-Souilly ne dispose pas de gare ferroviaire directe — la gare la plus proche est Villeparisis – Mitry-le-Neuf sur le RER B — ce qui rend le taxi indispensable pour les déplacements quotidiens. TaxiNeo couvre l'ensemble de la commune avec des transferts CDG (30-40 €), des navettes vers Paris et des courses vers Bay 1 et Meaux.",
    introEn: "Claye-Souilly, a residential town of 12,000 in the heart of northern Seine-et-Marne, sits at a natural crossroads between greater Paris, Roissy-CDG Airport and the city of Meaux. The town is best known for the Bay 1 shopping centre (formerly Bay 2), one of the largest retail hubs in northern Seine-et-Marne with over 100 stores, an Auchan hypermarket and a multiplex cinema. The Canal de l'Ourcq runs through the town, providing a bucolic setting dotted with cycling paths and fishermen. The medieval Souilly bridge, a 12th-century remnant, recalls the historic importance of this crossing on the road to Meaux. Claye-Souilly has no direct railway station — the nearest is Villeparisis – Mitry-le-Neuf on the RER B — making taxis essential for daily travel. TaxiNeo covers the entire town with CDG transfers (€30-40), Paris shuttles and rides to Bay 1 and Meaux.",
    descriptionFr: "Sans gare ferroviaire, Claye-Souilly dépend des bus (ligne 23, 27) et du taxi pour ses liaisons vers Paris et les aéroports. TaxiNeo comble cette lacune avec des chauffeurs connaissant la RN3 (axe Paris-Meaux), l'accès A104 vers CDG et les routes départementales vers Villeparisis et Mitry-Mory. Prise en charge à domicile dans tous les quartiers : Claye, Souilly, Le Pin, zone commerciale Bay 1. Tarif fixe garanti pour les transferts aéroport et les courses vers Meaux (15 min, 20-30 €). Service disponible 24h/24, indispensable dans une commune sans desserte ferroviaire directe.",
    descriptionEn: "With no railway station, Claye-Souilly relies on buses (lines 23, 27) and taxis for connections to Paris and the airports. TaxiNeo fills this gap with drivers who know the RN3 (Paris-Meaux road), A104 access to CDG and departmental roads to Villeparisis and Mitry-Mory. Home pickup in all neighbourhoods: Claye, Souilly, Le Pin, Bay 1 shopping area. Guaranteed fixed fare for airport transfers and rides to Meaux (15 min, €20-30). Service available 24/7, essential in a town without direct rail service.",
    metaDescriptionFr: "Taxi Claye-Souilly : centre commercial Bay 1, canal de l'Ourcq, pont médiéval. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Claye-Souilly: Bay 1 shopping centre, Canal de l'Ourcq, medieval bridge. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Au carrefour entre CDG, Paris et Meaux, Claye-Souilly est desservie par le centre commercial Bay 1 et le canal de l'Ourcq. Sans gare ferroviaire, le taxi est votre lien direct vers les aéroports et la capitale à prix fixe.",
    heroSubtitleEn: "At the crossroads between CDG, Paris and Meaux, Claye-Souilly is home to Bay 1 shopping centre and the Canal de l'Ourcq. With no railway station, the taxi is your direct link to the airports and the capital at fixed prices.",
    whyUsFr: [
      { title: "Indispensable sans gare", desc: "Claye-Souilly n'a pas de gare SNCF. Le taxi est le moyen le plus rapide et confortable pour rejoindre Paris (45 min, 60-80 €), CDG (20 min, 30-40 €) ou Meaux (15 min, 20-30 €)." },
      { title: "Navette centre commercial Bay 1", desc: "Transport aller-retour vers Bay 1 (100+ enseignes, Auchan, cinéma). Idéal pour les courses volumineuses, les personnes à mobilité réduite ou les sorties cinéma en soirée." },
      { title: "Experts canal de l'Ourcq et RN3", desc: "Nos chauffeurs empruntent la RN3 ou les départementales selon le trafic. Connaissance des raccourcis vers Villeparisis (gare RER B), Mitry-Mory et les plateformes logistiques." }
    ],
    whyUsEn: [
      { title: "Essential without a station", desc: "Claye-Souilly has no SNCF station. Taxi is the fastest and most comfortable way to reach Paris (45 min, €60-80), CDG (20 min, €30-40) or Meaux (15 min, €20-30)." },
      { title: "Bay 1 shopping centre shuttle", desc: "Round-trip transport to Bay 1 (100+ stores, Auchan, cinema). Ideal for bulky shopping, reduced mobility or evening cinema outings." },
      { title: "Canal de l'Ourcq & RN3 experts", desc: "Our drivers use the RN3 or departmental roads depending on traffic. Knowledge of shortcuts to Villeparisis (RER B station), Mitry-Mory and logistics platforms." }
    ]
  },
  "champs-sur-marne": {
    introFr: "Champs-sur-Marne, commune de 26 000 habitants au cœur de Marne-la-Vallée, réunit patrimoine historique et innovation scientifique. Le château de Champs-sur-Marne, joyau de l'architecture classique du XVIIIe siècle géré par le Centre des Monuments Nationaux, fut la résidence de la marquise de Pompadour et accueillit de nombreux chefs d'État étrangers. À l'opposé du spectre temporel, la Cité Descartes constitue le plus grand pôle d'enseignement supérieur et de recherche de l'est parisien : Université Gustave Eiffel, École des Ponts ParisTech, ESIEE Paris, laboratoires du CSTB et de l'IFSTTAR y rassemblent plus de 15 000 étudiants et chercheurs. La gare RER A Noisy-Champs, partagée avec Noisy-le-Grand, relie Paris en 20 minutes et constitue un nœud de transport majeur. La future ligne 15 du Grand Paris Express y ajoutera un second axe structurant. TaxiNeo dessert les chercheurs, étudiants et visiteurs du château avec des transferts aéroport et des navettes campus.",
    introEn: "Champs-sur-Marne, a town of 26,000 at the heart of Marne-la-Vallée, combines historic heritage with scientific innovation. The Château de Champs-sur-Marne, an 18th-century gem managed by the Centre des Monuments Nationaux, was the residence of Madame de Pompadour and hosted numerous foreign heads of state. At the opposite end of the timeline, Cité Descartes forms the largest higher education and research hub in eastern Paris: Université Gustave Eiffel, École des Ponts ParisTech, ESIEE Paris, CSTB and IFSTTAR laboratories gather over 15,000 students and researchers. The RER A Noisy-Champs station, shared with Noisy-le-Grand, connects to Paris in 20 minutes and is a major transport node. The future Grand Paris Express Line 15 will add a second structural axis. TaxiNeo serves researchers, students and château visitors with airport transfers and campus shuttles.",
    descriptionFr: "La Cité Descartes génère un flux quotidien important d'étudiants, chercheurs et visiteurs professionnels qui nécessitent des transferts vers les gares parisiennes et les aéroports. TaxiNeo à Champs-sur-Marne propose des courses campus-aéroport (CDG en 35 min, 40-55 €), des navettes vers Paris-Gare de Lyon et des transferts depuis la gare RER A Noisy-Champs. Nos chauffeurs connaissent les accès aux bâtiments universitaires, les parkings du château et les raccourcis par le boulevard du Ru de Nesles vers l'A4. Service adapté aux conférences et événements scientifiques à la Cité Descartes.",
    descriptionEn: "Cité Descartes generates a significant daily flow of students, researchers and professional visitors requiring transfers to Paris stations and airports. TaxiNeo in Champs-sur-Marne offers campus-to-airport rides (CDG in 35 min, €40-55), shuttles to Paris-Gare de Lyon and transfers from RER A Noisy-Champs station. Our drivers know university building access points, château parking areas and shortcuts via Boulevard du Ru de Nesles to the A4. Service adapted to conferences and scientific events at Cité Descartes.",
    metaDescriptionFr: "Taxi Champs-sur-Marne : château XVIIIe, Cité Descartes, gare RER A Noisy-Champs. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Champs-sur-Marne: château, Cité Descartes, RER A Noisy-Champs. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Entre le château classique et la Cité Descartes, Champs-sur-Marne mêle patrimoine et innovation. Réservez un taxi à prix fixe depuis la gare RER A Noisy-Champs pour vos transferts aéroport, navettes campus ou visites du château.",
    heroSubtitleEn: "Between the classical château and Cité Descartes, Champs-sur-Marne blends heritage with innovation. Book a fixed-price taxi from RER A Noisy-Champs station for airport transfers, campus shuttles or château visits.",
    whyUsFr: [
      { title: "Navettes Cité Descartes", desc: "Transport direct vers l'Université Gustave Eiffel, l'École des Ponts, l'ESIEE et les labos CSTB/IFSTTAR. Prise en charge à l'entrée de chaque bâtiment. Service renforcé pendant les colloques." },
      { title: "Transferts gare Noisy-Champs", desc: "Prise en charge à la sortie du RER A Noisy-Champs. Idéal pour les correspondances vers CDG (35 min, 40-55 €) ou Orly (40 min, 50-70 €). Suivi temps réel des horaires RER." },
      { title: "Visites château de Champs", desc: "Transfert depuis Paris ou les gares vers le château de Champs-sur-Marne (CMN). Dépose à l'entrée du domaine, attente possible pour le retour. Groupes jusqu'à 7 passagers." }
    ],
    whyUsEn: [
      { title: "Cité Descartes shuttles", desc: "Direct transport to Université Gustave Eiffel, École des Ponts, ESIEE and CSTB/IFSTTAR labs. Pickup at each building entrance. Enhanced service during conferences." },
      { title: "Noisy-Champs station transfers", desc: "Pickup at RER A Noisy-Champs exit. Ideal for connections to CDG (35 min, €40-55) or Orly (40 min, €50-70). Real-time RER schedule tracking." },
      { title: "Château de Champs visits", desc: "Transfer from Paris or stations to Château de Champs-sur-Marne (CMN). Drop-off at the estate entrance, optional waiting for return. Groups up to 7 passengers." }
    ]
  },
  torcy: {
    introFr: "Torcy, commune de 23 000 habitants en plein cœur de Marne-la-Vallée, est un pôle de vie majeur de l'est parisien grâce à sa gare RER A, son centre commercial Bay 2 (l'un des plus grands d'Île-de-France avec 200 enseignes) et la base de loisirs de Vaires-Torcy, site olympique 2024 pour l'aviron et le canoë-kayak. Stratégiquement située sur l'axe RER A entre Paris (25 min) et Disneyland Paris (15 min en voiture), Torcy attire aussi bien les familles résidentes que les touristes en transit. Les quartiers des Coteaux et de l'Arche Guédon offrent un habitat diversifié, tandis que les bords de Marne et le lac de Torcy constituent des espaces naturels prisés. Le parc de Rentilly, avec son château recouvert de miroirs (œuvre de Xavier Veilhan), est un lieu culturel original. TaxiNeo dessert l'ensemble de Torcy avec des transferts vers CDG (45-60 €), Orly et Disneyland à prix fixe garanti.",
    introEn: "Torcy, a town of 23,000 at the heart of Marne-la-Vallée, is a major hub in eastern Paris thanks to its RER A station, Bay 2 shopping centre (one of the largest in Île-de-France with 200 stores) and the Vaires-Torcy leisure base, the 2024 Olympic venue for rowing and canoeing. Strategically located on the RER A line between Paris (25 min) and Disneyland Paris (15 min by car), Torcy attracts both local families and tourists in transit. The Coteaux and Arche Guédon neighbourhoods offer diverse housing, while the Marne riverbanks and Torcy lake provide valued natural spaces. Parc de Rentilly, with its mirror-clad château (by Xavier Veilhan), is a unique cultural venue. TaxiNeo serves all of Torcy with transfers to CDG (€45-60), Orly and Disneyland at guaranteed fixed prices.",
    descriptionFr: "TaxiNeo à Torcy est le complément idéal du RER A pour les trajets que le train ne couvre pas : transferts aéroport CDG et Orly, navettes vers Disneyland Paris (Val d'Europe, parcs, hôtels Disney), courses vers la base olympique de Vaires-Torcy et retours tardifs après la fermeture du RER. Nos chauffeurs connaissent les accès au centre commercial Bay 2 par le boulevard de Beaubourg, les raccourcis vers l'A4 et la Francilienne, et les dépose-minutes des hôtels Disney. Service 24h/24 avec tarif fixe, idéal pour les familles en séjour touristique ou les résidents en déplacement professionnel.",
    descriptionEn: "TaxiNeo in Torcy is the ideal complement to the RER A for journeys the train doesn't cover: CDG and Orly airport transfers, Disneyland Paris shuttles (Val d'Europe, parks, Disney hotels), rides to the Vaires-Torcy Olympic base and late returns after the RER closes. Our drivers know Bay 2 shopping centre access via Boulevard de Beaubourg, shortcuts to the A4 and Francilienne, and Disney hotel drop-off points. 24/7 service with fixed fares, ideal for families on holiday or residents on business trips.",
    metaDescriptionFr: "Taxi Torcy : base olympique Vaires-Torcy, Bay 2, gare RER A, Disneyland 15 min. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Torcy: Vaires-Torcy Olympic base, Bay 2, RER A station, Disneyland 15 min. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Au cœur de Marne-la-Vallée, Torcy offre le RER A, le centre commercial Bay 2 et la base olympique de Vaires-Torcy. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes Disneyland ou retours tardifs après le dernier train.",
    heroSubtitleEn: "At the heart of Marne-la-Vallée, Torcy offers the RER A, Bay 2 shopping centre and the Vaires-Torcy Olympic base. Book a fixed-price taxi for airport transfers, Disneyland shuttles or late returns after the last train.",
    whyUsFr: [
      { title: "Navette Disneyland 15 min", desc: "Torcy – Disneyland Paris en 15 minutes par l'A4. Transfert hôtels Disney, Val d'Europe et parcs. Sièges enfants disponibles, tarif fixe garanti, retour flexible après le feu d'artifice." },
      { title: "Base olympique Vaires-Torcy", desc: "Transport vers le stade nautique olympique 2024 (aviron, canoë-kayak) et la base de loisirs. Prise en charge à l'entrée du site, idéal pour les compétitions et événements sportifs." },
      { title: "Relais RER A et Bay 2", desc: "Prise en charge gare RER A de Torcy. Navette centre commercial Bay 2 (200 enseignes). Courses locales vers les Coteaux, l'Arche Guédon et le parc de Rentilly." }
    ],
    whyUsEn: [
      { title: "Disneyland shuttle in 15 min", desc: "Torcy to Disneyland Paris in 15 minutes via the A4. Disney hotel transfers, Val d'Europe and parks. Child seats available, guaranteed fixed fare, flexible return after the fireworks." },
      { title: "Vaires-Torcy Olympic base", desc: "Transport to the 2024 Olympic water sports venue (rowing, canoeing) and leisure base. Pickup at the site entrance, ideal for competitions and sporting events." },
      { title: "RER A relay & Bay 2", desc: "Pickup at Torcy RER A station. Bay 2 shopping centre shuttle (200 stores). Local rides to Les Coteaux, l'Arche Guédon and Parc de Rentilly." }
    ]
  },
  noisiel: {
    introFr: "Noisiel, commune de 16 000 habitants au bord de la Marne, est un joyau méconnu du patrimoine industriel français. L'ancienne chocolaterie Menier, fondée en 1825, constitue un ensemble architectural exceptionnel classé monument historique : la Halle Eiffel (structure métallique signée Jules Saulnier, précurseur de l'architecture moderne), le moulin sur la Marne, la cathédrale du chocolat et la cité ouvrière modèle. Ce site remarquable abrite aujourd'hui le siège de Nestlé France, qui emploie plusieurs centaines de salariés. La Ferme du Buisson, scène nationale installée dans les anciennes écuries Menier, propose théâtre, cinéma d'art et essai, expositions et concerts. La gare RER A de Noisiel relie Paris en 25 minutes. La cité-jardin de Noisiel, l'une des premières de France construite par la famille Menier pour ses ouvriers, est un modèle d'urbanisme social du XIXe siècle. TaxiNeo connecte les Noisiéliens avec des chauffeurs locaux pour les transferts aéroport et les navettes professionnelles vers le siège Nestlé.",
    introEn: "Noisiel, a town of 16,000 on the banks of the Marne, is a hidden gem of French industrial heritage. The former Menier chocolate factory, founded in 1825, forms an exceptional architectural ensemble classified as a historic monument: the Eiffel Hall (metal structure by Jules Saulnier, a forerunner of modern architecture), the mill on the Marne, the chocolate cathedral and the model workers' housing estate. This remarkable site now houses Nestlé France's headquarters, employing several hundred people. La Ferme du Buisson, a national theatre venue in the former Menier stables, offers theatre, art-house cinema, exhibitions and concerts. The RER A Noisiel station connects to Paris in 25 minutes. Noisiel's garden city, one of the first in France built by the Menier family for its workers, is a model of 19th-century social urban planning. TaxiNeo connects Noisiel residents with local drivers for airport transfers and business shuttles to the Nestlé headquarters.",
    descriptionFr: "À Noisiel, nos chauffeurs desservent aussi bien le siège Nestlé France (ancienne chocolaterie Menier) que la Ferme du Buisson et les quartiers résidentiels du Luzard. Transferts aéroport fiables : CDG en 40 min (45-60 €), Orly en 35 min (55-75 €). Le RER A assure la liaison vers Paris mais ne dessert pas les aéroports directement. Le taxi prend le relais pour les vols matinaux, les retours tardifs et les événements à la Ferme du Buisson. Tarif fixe garanti, prise en charge à domicile ou au siège Nestlé.",
    descriptionEn: "In Noisiel, our drivers serve both Nestlé France headquarters (former Menier factory) and La Ferme du Buisson, as well as the Luzard residential neighbourhoods. Reliable airport transfers: CDG in 40 min (€45-60), Orly in 35 min (€55-75). The RER A connects to Paris but doesn't serve airports directly. Taxi takes over for early flights, late returns and events at La Ferme du Buisson. Guaranteed fixed fare, home pickup or Nestlé headquarters collection.",
    metaDescriptionFr: "Taxi Noisiel : chocolaterie Menier, siège Nestlé, Ferme du Buisson, gare RER A. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Noisiel: Menier chocolate factory, Nestlé HQ, Ferme du Buisson, RER A station. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité du patrimoine industriel Menier et siège de Nestlé France, Noisiel allie histoire et activité économique. Réservez un taxi à prix fixe depuis la gare RER A pour vos transferts aéroport, navettes Nestlé ou soirées à la Ferme du Buisson.",
    heroSubtitleEn: "Home to the Menier industrial heritage and Nestlé France headquarters, Noisiel blends history with economic activity. Book a fixed-price taxi from the RER A station for airport transfers, Nestlé shuttles or evenings at La Ferme du Buisson.",
    whyUsFr: [
      { title: "Navettes siège Nestlé France", desc: "Transport direct vers le siège Nestlé (ancienne chocolaterie Menier). Prise en charge à l'entrée du site, connaissance des accès sécurisés et des parkings visiteurs. Idéal pour les rendez-vous professionnels." },
      { title: "Ferme du Buisson et culture", desc: "Transfert vers la scène nationale Ferme du Buisson (théâtre, ciné, expos). Retour flexible après les spectacles en soirée, quand le RER A est moins fréquent." },
      { title: "Patrimoine Menier et bords de Marne", desc: "Nos chauffeurs connaissent la cité-jardin, les bords de Marne et les accès au patrimoine Menier. Circuits patrimoine industriel sur demande, groupes jusqu'à 7 personnes." }
    ],
    whyUsEn: [
      { title: "Nestlé France HQ shuttles", desc: "Direct transport to Nestlé headquarters (former Menier factory). Pickup at the site entrance, knowledge of secure access points and visitor parking. Ideal for business meetings." },
      { title: "Ferme du Buisson & culture", desc: "Transfer to La Ferme du Buisson national venue (theatre, cinema, exhibitions). Flexible return after evening shows, when the RER A runs less frequently." },
      { title: "Menier heritage & Marne riverbanks", desc: "Our drivers know the garden city, Marne riverbanks and Menier heritage access points. Industrial heritage tours on request, groups up to 7." }
    ]
  },
  lognes: {
    introFr: "Lognes, commune de 15 000 habitants au cœur de Marne-la-Vallée, est un hub tertiaire et résidentiel de l'est parisien. Développée dans les années 1970-1980 dans le cadre de la ville nouvelle, elle concentre d'importantes zones d'activités — notamment le parc d'activités de Lognes et la ZAC du Mandinet — qui accueillent des centaines d'entreprises du secteur tertiaire, de l'informatique et de la logistique. Le quartier du Mandinet, avec ses immeubles modernes, ses commerces de proximité et ses espaces verts, forme un ensemble résidentiel cohérent. La gare RER A de Lognes relie Paris en 25 minutes et constitue le point d'entrée principal de la commune. Le golf de Torcy-Lognes, parcours 9 trous en bordure de la base de loisirs, attire les amateurs du secteur. Proche de Noisiel et Torcy, Lognes bénéficie de l'offre culturelle et commerciale de Marne-la-Vallée tout en conservant un cadre résidentiel aéré. TaxiNeo assure les transferts aéroport et les navettes professionnelles depuis les zones d'activités.",
    introEn: "Lognes, a town of 15,000 at the heart of Marne-la-Vallée, is a business and residential hub in eastern Paris. Developed in the 1970s-1980s as part of the new town programme, it hosts major business parks — notably the Lognes business park and ZAC du Mandinet — home to hundreds of companies in the service, IT and logistics sectors. The Mandinet quarter, with its modern buildings, local shops and green spaces, forms a coherent residential community. The RER A Lognes station connects to Paris in 25 minutes and is the town's main gateway. The Torcy-Lognes golf course, a 9-hole layout by the leisure base, attracts local enthusiasts. Close to Noisiel and Torcy, Lognes benefits from Marne-la-Vallée's cultural and commercial offerings while maintaining an airy residential setting. TaxiNeo handles airport transfers and business shuttles from the business parks.",
    descriptionFr: "Lognes génère un flux quotidien de professionnels et de résidents nécessitant des transferts vers Paris, les gares et les aéroports. TaxiNeo propose des courses depuis les zones d'activités vers CDG (45-65 €, 40 min), Orly (55-70 €, 35 min) et Paris-Gare de Lyon (50-65 €, 30 min). Nos chauffeurs connaissent les accès au Mandinet, au parc d'activités et au golf de Torcy-Lognes. Service adapté aux horaires de bureau et aux déplacements professionnels : prise en charge au pied de l'entreprise, facturation société possible. Tarif fixe garanti 24h/24.",
    descriptionEn: "Lognes generates a daily flow of professionals and residents requiring transfers to Paris, stations and airports. TaxiNeo offers rides from the business parks to CDG (€45-65, 40 min), Orly (€55-70, 35 min) and Paris-Gare de Lyon (€50-65, 30 min). Our drivers know Mandinet access points, the business park and Torcy-Lognes golf course. Service adapted to office hours and business travel: pickup at your company entrance, corporate billing available. Guaranteed fixed fare 24/7.",
    metaDescriptionFr: "Taxi Lognes : zone d'activités, gare RER A, Mandinet, golf Torcy-Lognes. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Lognes: business parks, RER A station, Mandinet, Torcy-Lognes golf. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Hub tertiaire de Marne-la-Vallée, Lognes offre le RER A, d'importantes zones d'activités et le quartier résidentiel du Mandinet. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes professionnelles ou courses vers le golf de Torcy-Lognes.",
    heroSubtitleEn: "Marne-la-Vallée's business hub, Lognes offers the RER A, major business parks and the Mandinet residential quarter. Book a fixed-price taxi for airport transfers, business shuttles or rides to Torcy-Lognes golf course.",
    whyUsFr: [
      { title: "Navettes zones d'activités", desc: "Prise en charge directe dans le parc d'activités de Lognes et la ZAC du Mandinet. Transferts vers les gares parisiennes et les aéroports. Facturation entreprise et notes de frais possibles." },
      { title: "Gare RER A de Lognes", desc: "Prise en charge et dépose à la sortie de la gare RER A. Complément idéal après le dernier train (0h30) ou pour les destinations non desservies : CDG en 40 min, Orly en 35 min." },
      { title: "Golf et loisirs Marne-la-Vallée", desc: "Transport vers le golf de Torcy-Lognes (9 trous), la base de loisirs de Vaires-Torcy et les communes voisines Noisiel, Torcy et Champs-sur-Marne. Tarif fixe pour courses locales." }
    ],
    whyUsEn: [
      { title: "Business park shuttles", desc: "Direct pickup from Lognes business park and ZAC du Mandinet. Transfers to Paris stations and airports. Corporate billing and expense receipts available." },
      { title: "Lognes RER A station", desc: "Pickup and drop-off at the RER A station exit. Ideal complement after the last train (12:30am) or for destinations not served by rail: CDG in 40 min, Orly in 35 min." },
      { title: "Golf & Marne-la-Vallée leisure", desc: "Transport to Torcy-Lognes golf course (9 holes), Vaires-Torcy leisure base and neighbouring towns Noisiel, Torcy and Champs-sur-Marne. Fixed fare for local rides." }
    ]
  },
  "bussy-saint-georges": {
    introFr: "Bussy-Saint-Georges est l'une des villes nouvelles les plus remarquables de Marne-la-Vallée, passée de quelques centaines d'habitants dans les années 1980 à plus de 30 000 aujourd'hui. Sa particularité unique en France : l'Esplanade des Religions, qui rassemble 14 lieux de culte de confessions différentes (mosquée, pagode lao, temple hindou, synagogue, églises chaldéenne et arménienne, etc.), symbole d'un vivre-ensemble cosmopolite exceptionnel. Desservie par la gare RER A de Bussy-Saint-Georges, la ville est à 35 minutes de Châtelet-Les Halles et à 10 minutes en voiture du centre commercial Val d'Europe et des parcs Disneyland. Le golf international de Bussy, parcours 18 trous dans un cadre boisé remarquable, attire joueurs franciliens et visiteurs internationaux. Les zones d'activités SycoMore et Le Closeau accueillent de nombreuses entreprises, générant un flux quotidien de déplacements professionnels. TaxiNeo connecte les Buxangeorgiens avec des chauffeurs locaux pour tous leurs trajets : transferts aéroport CDG et Orly, navettes Val d'Europe, courses vers Paris et déplacements professionnels.",
    introEn: "Bussy-Saint-Georges is one of the most remarkable new towns in Marne-la-Vallée, growing from a few hundred residents in the 1980s to over 30,000 today. Its unique feature in France is the Esplanade des Religions, which brings together 14 places of worship from different faiths (mosque, Lao pagoda, Hindu temple, synagogue, Chaldean and Armenian churches, among others), a symbol of exceptional cosmopolitan coexistence. Served by Bussy-Saint-Georges RER A station, the town is 35 minutes from Châtelet-Les Halles and a 10-minute drive from the Val d'Europe shopping centre and Disneyland parks. The Bussy international golf course, an 18-hole layout in a beautiful wooded setting, draws players from across Île-de-France and international visitors. The SycoMore and Le Closeau business parks host numerous companies, generating daily professional commuting needs. TaxiNeo connects Bussy residents with local drivers for all journeys: CDG and Orly airport transfers, Val d'Europe shuttles, Paris rides and business trips.",
    descriptionFr: "Avec TaxiNeo à Bussy-Saint-Georges, profitez de chauffeurs connaissant parfaitement les accès aux zones d'activités SycoMore et Le Closeau, les raccourcis vers le RER A et les itinéraires rapides vers l'A4 et la Francilienne. Transferts aéroport CDG en 40 minutes (50-70 €), Orly en 50 minutes (65-85 €), et navettes Val d'Europe/Disneyland en 10 minutes. Service 24h/24, tarif fixe garanti, idéal pour les familles nombreuses de cette ville jeune en pleine croissance démographique. Complément fiable au RER A, dont les retards sont fréquents en heures de pointe.",
    descriptionEn: "With TaxiNeo in Bussy-Saint-Georges, enjoy drivers who know the SycoMore and Le Closeau business park access points, shortcuts to the RER A station and fast routes to the A4 motorway and Francilienne ring road. CDG airport transfers in 40 minutes (€50-70), Orly in 50 minutes (€65-85), and Val d'Europe/Disneyland shuttles in 10 minutes. 24/7 service, guaranteed fixed fare, ideal for the young families in this fast-growing town. A reliable complement to the RER A, which suffers frequent peak-hour delays.",
    metaDescriptionFr: "Taxi Bussy-Saint-Georges : Esplanade des Religions, golf, Val d'Europe. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Bussy-Saint-Georges: Esplanade des Religions, golf, Val d'Europe. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville nouvelle cosmopolite de 30 000 habitants au cœur de Marne-la-Vallée, Bussy-Saint-Georges est desservie par le RER A et se trouve à 10 minutes du Val d'Europe. Réservez un taxi à prix fixe pour vos transferts aéroport, vos navettes Disneyland ou vos déplacements professionnels vers les zones SycoMore et Le Closeau.",
    heroSubtitleEn: "A cosmopolitan new town of 30,000 residents in the heart of Marne-la-Vallée, Bussy-Saint-Georges is served by the RER A and sits 10 minutes from Val d'Europe. Book a fixed-price taxi for airport transfers, Disneyland shuttles or business trips to the SycoMore and Le Closeau business parks.",
    whyUsFr: [
      { title: "Navette Val d'Europe et Disneyland", desc: "Bussy – Val d'Europe en 10 minutes, Bussy – Disneyland en 12 minutes via le boulevard circulaire. Idéal pour les familles, retour tardif après les spectacles nocturnes. Tarif fixe dès 15 €." },
      { title: "Complément RER A fiable", desc: "Le RER A depuis Bussy est souvent saturé et en retard aux heures de pointe. Nos taxis prennent le relais 24h/24 : Paris-Châtelet en 35 min via l'A4, CDG en 40 min via la Francilienne." },
      { title: "Couverture zones d'activités", desc: "Prise en charge dans les zones SycoMore, Le Closeau et le centre-ville. Chauffeurs connaissant les accès entreprises, les parkings visiteurs et les points de dépose rapides." }
    ],
    whyUsEn: [
      { title: "Val d'Europe & Disneyland shuttle", desc: "Bussy – Val d'Europe in 10 minutes, Bussy – Disneyland in 12 minutes via the circular boulevard. Ideal for families, late returns after evening shows. Fixed fare from €15." },
      { title: "Reliable RER A complement", desc: "The RER A from Bussy is often packed and delayed during rush hour. Our taxis take over 24/7: Paris-Châtelet in 35 min via the A4, CDG in 40 min via the Francilienne." },
      { title: "Business park coverage", desc: "Pickup in the SycoMore, Le Closeau business parks and town centre. Drivers who know company access points, visitor parking and quick drop-off spots." }
    ],
  },
  "lagny-sur-marne": {
    introFr: "Lagny-sur-Marne est une cité au riche passé médiéval, ancienne ville de foire rivale de Provins au Moyen Âge, nichée dans un méandre de la Marne à l'est de Paris. Son abbatiale Notre-Dame-des-Ardents, fondée au VIIe siècle, est l'un des plus anciens édifices religieux de Seine-et-Marne. Le marché couvert du centre-ville, animé les mercredis et samedis, perpétue une tradition commerciale millénaire. La gare SNCF de Lagny-Thorigny, sur la ligne Transilien P (Paris-Est – Meaux), assure la liaison avec Paris en 25-30 minutes. Lagny se situe à seulement 10 minutes en voiture de Disneyland Paris et du centre commercial Val d'Europe, ce qui en fait une ville résidentielle prisée des familles. Les bords de Marne offrent des promenades pittoresques entre guinguettes et écluses. Avec 22 000 habitants, Lagny conserve une atmosphère de petite ville tout en bénéficiant de la dynamique de Marne-la-Vallée. TaxiNeo assure vos transferts aéroport, navettes Disneyland et courses quotidiennes depuis le centre historique.",
    introEn: "Lagny-sur-Marne is a town with a rich medieval past, a former fair town that rivalled Provins in the Middle Ages, nestled in a bend of the Marne east of Paris. Its Abbey Church of Notre-Dame-des-Ardents, founded in the 7th century, is one of the oldest religious buildings in Seine-et-Marne. The covered market in the town centre, lively on Wednesdays and Saturdays, carries on a thousand-year commercial tradition. Lagny-Thorigny SNCF station, on the Transilien P line (Paris-Est – Meaux), connects to Paris in 25-30 minutes. Lagny is just a 10-minute drive from Disneyland Paris and Val d'Europe shopping centre, making it a popular residential town for families. The Marne riverbanks offer picturesque walks between riverside cafes and locks. With 22,000 residents, Lagny retains a small-town atmosphere while benefiting from the Marne-la-Vallée dynamic. TaxiNeo handles airport transfers, Disneyland shuttles and daily rides from the historic centre.",
    descriptionFr: "Avec TaxiNeo à Lagny-sur-Marne, profitez de chauffeurs connaissant les ruelles du centre historique, les accès aux bords de Marne et les itinéraires rapides vers l'A4 et la N34. Transferts CDG en 35 minutes (45-60 €) via la Francilienne, Orly en 50 minutes (70-95 €) et Paris Gare de l'Est en 30 minutes. Navette Disneyland en 10 minutes (15-20 €) pour les visiteurs et employés du parc. Complément idéal au Transilien P, notamment le soir et le week-end quand la fréquence diminue.",
    descriptionEn: "With TaxiNeo in Lagny-sur-Marne, enjoy drivers who know the historic centre's lanes, Marne riverbank access points and fast routes to the A4 and N34. CDG transfers in 35 minutes (€45-60) via the Francilienne, Orly in 50 minutes (€70-95) and Paris Gare de l'Est in 30 minutes. Disneyland shuttle in 10 minutes (€15-20) for park visitors and employees. An ideal complement to Transilien P, especially in the evening and at weekends when frequency drops.",
    metaDescriptionFr: "Taxi Lagny-sur-Marne : abbatiale médiévale, bords de Marne, Disneyland 10 min. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Lagny-sur-Marne: medieval abbey, Marne banks, Disneyland 10 min. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité médiévale de 22 000 habitants en bord de Marne, Lagny est à 10 minutes de Disneyland et reliée à Paris-Est par le Transilien P. Réservez un taxi à prix fixe pour vos transferts aéroport CDG et Orly, vos navettes vers Val d'Europe ou vos déplacements quotidiens.",
    heroSubtitleEn: "A medieval town of 22,000 on the Marne, Lagny is 10 minutes from Disneyland and connected to Paris-Est by Transilien P. Book a fixed-price taxi for CDG and Orly airport transfers, Val d'Europe shuttles or daily rides.",
    whyUsFr: [
      { title: "Navette Disneyland en 10 min", desc: "Lagny – Disneyland Paris en 10 minutes via la D934. Prise en charge dès 6h pour les employés du parc, retour tardif après les spectacles nocturnes. Forfait dès 15 €." },
      { title: "Experts centre historique", desc: "Nos chauffeurs connaissent les sens uniques et les zones piétonnes du centre médiéval de Lagny. Prise en charge devant l'abbatiale, le marché couvert ou votre restaurant en bord de Marne." },
      { title: "Transferts CDG rapides via Francilienne", desc: "CDG en 35 min (45-60 €) via la N104 sans passer par Paris. Alternative directe au Transilien P + RER B, plus rapide et plus confortable à 2 passagers ou plus." }
    ],
    whyUsEn: [
      { title: "Disneyland shuttle in 10 min", desc: "Lagny – Disneyland Paris in 10 minutes via the D934. Pickup from 6am for park employees, late return after evening shows. Flat rate from €15." },
      { title: "Historic centre experts", desc: "Our drivers know the one-way streets and pedestrian zones in Lagny's medieval centre. Pickup in front of the abbey, covered market or your riverside restaurant." },
      { title: "Fast CDG transfers via Francilienne", desc: "CDG in 35 min (€45-60) via the N104 without going through Paris. A direct alternative to Transilien P + RER B, faster and more comfortable for 2+ passengers." }
    ],
  },
  "pontault-combault": {
    introFr: "Pontault-Combault est la plus grande ville du secteur sud de Marne-la-Vallée avec 38 000 habitants, un vaste ensemble résidentiel pavillonnaire prisé des familles franciliennes. Particularité majeure : la commune ne dispose d'aucune gare ferroviaire, ce qui rend le taxi indispensable pour les déplacements vers Paris et les aéroports. Située au carrefour stratégique entre la Francilienne (N104) et la RN4, Pontault-Combault bénéficie d'une position centrale entre Créteil au nord-ouest et Roissy-CDG au nord-est. Le parc du Cosson, poumon vert de 15 hectares, et le parc de la Mairie offrent des espaces de détente appréciés. La zone commerciale Actipôle et les commerces du centre-ville assurent une vie économique dynamique. Les résidents travaillent majoritairement à Paris, La Défense, Créteil ou dans les zones d'activités de Marne-la-Vallée. TaxiNeo est le lien direct et fiable entre Pontault-Combault et le reste de l'Île-de-France, disponible 24h/24.",
    introEn: "Pontault-Combault is the largest town in the southern Marne-la-Vallée area with 38,000 residents, a vast residential suburb popular with families across Île-de-France. A major distinction: the town has no railway station, making taxis essential for travel to Paris and the airports. Strategically located at the crossroads of the Francilienne (N104) and the RN4, Pontault-Combault sits centrally between Créteil to the northwest and Roissy-CDG to the northeast. The 15-hectare Parc du Cosson and the Parc de la Mairie provide welcome green spaces. The Actipôle commercial zone and town centre shops ensure a vibrant local economy. Most residents commute to Paris, La Défense, Créteil or the Marne-la-Vallée business parks. TaxiNeo is the direct, reliable link between Pontault-Combault and the rest of Île-de-France, available 24/7.",
    descriptionFr: "Sans gare ferroviaire, Pontault-Combault dépend des bus et du réseau routier. TaxiNeo est l'alternative la plus directe : Paris en 30 minutes via la N4 et l'A4, Créteil en 20 minutes, CDG en 40 minutes (60-85 €), Orly en 30 minutes (45-60 €). Nos chauffeurs connaissent les raccourcis par les routes départementales pour éviter les embouteillages de la Francilienne aux heures de pointe. Service renforcé tôt le matin pour les vols depuis CDG et Orly, retour tardif garanti pour les actifs parisiens. Tarif fixe sans surprise, réservation en ligne en 30 secondes.",
    descriptionEn: "With no railway station, Pontault-Combault depends on buses and the road network. TaxiNeo is the most direct alternative: Paris in 30 minutes via the N4 and A4, Créteil in 20 minutes, CDG in 40 minutes (€60-85), Orly in 30 minutes (€45-60). Our drivers know the departmental road shortcuts to avoid Francilienne rush-hour traffic jams. Enhanced early morning service for CDG and Orly flights, guaranteed late returns for Paris commuters. Fixed fare with no surprises, online booking in 30 seconds.",
    metaDescriptionFr: "Taxi Pontault-Combault : ville sans gare, Actipôle, parc du Cosson. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Pontault-Combault: town with no station, Actipôle, Parc du Cosson. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Plus grande ville du sud de Marne-la-Vallée avec 38 000 habitants et aucune gare, Pontault-Combault est au carrefour de la Francilienne et de la RN4. Le taxi est votre transport le plus direct vers Paris, Orly et CDG à prix fixe garanti, 24h/24.",
    heroSubtitleEn: "The largest town in southern Marne-la-Vallée with 38,000 residents and no railway station, Pontault-Combault sits at the crossroads of the Francilienne and the RN4. A taxi is your most direct transport to Paris, Orly and CDG at a guaranteed fixed price, 24/7.",
    whyUsFr: [
      { title: "Indispensable sans gare", desc: "Pontault-Combault n'a aucune gare SNCF. Le taxi est le moyen le plus direct pour rejoindre Paris (30 min), Créteil (20 min) et les aéroports. Plus rapide et plus confortable que les correspondances bus." },
      { title: "Carrefour Francilienne/RN4", desc: "Position stratégique à l'intersection de la N104 et de la RN4 : CDG en 40 min (60-85 €), Orly en 30 min (45-60 €). Nos chauffeurs connaissent les itinéraires alternatifs en cas de bouchon." },
      { title: "Service résidentiel pavillonnaire", desc: "Prise en charge à domicile dans tous les quartiers : Pontault, Combault, Actipôle, parc du Cosson. Véhicules familiaux disponibles pour les trajets avec enfants et bagages." }
    ],
    whyUsEn: [
      { title: "Essential without a station", desc: "Pontault-Combault has no SNCF station. A taxi is the most direct way to reach Paris (30 min), Créteil (20 min) and the airports. Faster and more comfortable than bus connections." },
      { title: "Francilienne/RN4 crossroads", desc: "Strategic position at the N104/RN4 intersection: CDG in 40 min (€60-85), Orly in 30 min (€45-60). Our drivers know alternative routes when traffic builds up." },
      { title: "Residential suburb service", desc: "Home pickup in all neighbourhoods: Pontault, Combault, Actipôle, Parc du Cosson. Family vehicles available for trips with children and luggage." }
    ],
  },
  "roissy-en-brie": {
    introFr: "Roissy-en-Brie est une commune résidentielle de 24 000 habitants en Seine-et-Marne, à ne surtout pas confondre avec Roissy-en-France où se trouve l'aéroport CDG (Val-d'Oise, 95). Cette confusion fréquente est bien connue des chauffeurs locaux et des GPS, qui peuvent diriger les voyageurs à 40 km de leur vraie destination. Desservie par la gare RER E (Roissy-en-Brie, branche Tournan), la ville offre un accès direct à Paris Gare de l'Est en 30 minutes. Entourée par la forêt d'Armainvilliers au sud, Roissy-en-Brie est un havre de verdure avec le parc Decesari et ses sentiers boisés. La ZAC de Nanteuil accueille commerces et services. Ville résidentielle calme et familiale, Roissy-en-Brie séduit les actifs travaillant à Paris, Créteil et Marne-la-Vallée. TaxiNeo assure vos transferts aéroport vers le vrai Roissy-CDG comme vers Orly, ainsi que vos courses quotidiennes.",
    introEn: "Roissy-en-Brie is a residential town of 24,000 in Seine-et-Marne, not to be confused with Roissy-en-France where CDG airport is located (Val-d'Oise, 95). This frequent mix-up is well known to local drivers and GPS systems, which can direct travellers 40 km from their true destination. Served by Roissy-en-Brie RER E station (Tournan branch), the town offers direct access to Paris Gare de l'Est in 30 minutes. Surrounded by the Armainvilliers forest to the south, Roissy-en-Brie is a green haven with Parc Decesari and its woodland trails. The ZAC de Nanteuil houses shops and services. A quiet, family-friendly residential town, Roissy-en-Brie appeals to workers commuting to Paris, Créteil and Marne-la-Vallée. TaxiNeo handles your airport transfers to the real Roissy-CDG as well as Orly, plus daily rides.",
    descriptionFr: "Nos chauffeurs à Roissy-en-Brie connaissent la différence entre Roissy-en-Brie (77) et Roissy-CDG (95) et vous amèneront au bon aéroport sans erreur. CDG en 45 minutes (60-80 €) via la Francilienne, Orly en 35 minutes (50-70 €) via l'A4 et l'A86. Complément fiable au RER E dont les perturbations sont fréquentes sur la branche Tournan. Prise en charge dans tous les quartiers : Centre, Pontillault, ZAC Nanteuil et lisière de la forêt d'Armainvilliers. Tarif fixe garanti, réservation en 30 secondes.",
    descriptionEn: "Our drivers in Roissy-en-Brie know the difference between Roissy-en-Brie (77) and Roissy-CDG (95) and will take you to the right airport every time. CDG in 45 minutes (€60-80) via the Francilienne, Orly in 35 minutes (€50-70) via the A4 and A86. A reliable complement to the RER E, which frequently suffers disruptions on the Tournan branch. Pickup in all neighbourhoods: Centre, Pontillault, ZAC Nanteuil and the edge of the Armainvilliers forest. Guaranteed fixed fare, booking in 30 seconds.",
    metaDescriptionFr: "Taxi Roissy-en-Brie : gare RER E, forêt d'Armainvilliers, parc Decesari. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Roissy-en-Brie: RER E station, Armainvilliers forest, Parc Decesari. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Commune résidentielle de 24 000 habitants desservie par le RER E, Roissy-en-Brie (77) est entourée par la forêt d'Armainvilliers. Attention : à ne pas confondre avec Roissy-CDG ! Transferts aéroport, navettes Paris et courses quotidiennes à prix fixe garanti.",
    heroSubtitleEn: "A residential town of 24,000 served by the RER E, Roissy-en-Brie (77) is surrounded by the Armainvilliers forest. Not to be confused with Roissy-CDG! Airport transfers, Paris shuttles and daily rides at a guaranteed fixed price.",
    whyUsFr: [
      { title: "Le bon Roissy, garanti", desc: "Roissy-en-Brie (77) ≠ Roissy-CDG (95). Nos chauffeurs locaux connaissent la différence et vous emmènent au bon aéroport. CDG en 45 min (60-80 €), Orly en 35 min (50-70 €)." },
      { title: "Complément RER E Tournan", desc: "La branche Tournan du RER E subit des perturbations régulières. Nos taxis prennent le relais 24h/24, soirs et week-ends, pour rejoindre Paris-Est en 30 min via l'A4." },
      { title: "Cadre forestier préservé", desc: "Prise en charge en lisière de forêt d'Armainvilliers, parc Decesari et quartier Pontillault. Idéal pour les randonneurs et les résidents de ce cadre verdoyant." }
    ],
    whyUsEn: [
      { title: "The right Roissy, guaranteed", desc: "Roissy-en-Brie (77) ≠ Roissy-CDG (95). Our local drivers know the difference and take you to the correct airport. CDG in 45 min (€60-80), Orly in 35 min (€50-70)." },
      { title: "RER E Tournan complement", desc: "The Tournan branch of the RER E suffers regular disruptions. Our taxis take over 24/7, evenings and weekends, to reach Paris-Est in 30 min via the A4." },
      { title: "Preserved forest setting", desc: "Pickup on the edge of Armainvilliers forest, Parc Decesari and Pontillault neighbourhood. Ideal for hikers and residents of this green setting." }
    ],
  },
  "ozoir-la-ferriere": {
    introFr: "Ozoir-la-Ferrière est une ville verte et résidentielle de 20 000 habitants au sud-est de Marne-la-Vallée, bordée par la forêt d'Armainvilliers et la forêt de la Grange. Le golf d'Ozoir, parcours technique 18 trous en sous-bois, est l'un des plus réputés de l'est francilien et attire golfeurs confirmés et débutants tout au long de l'année. Le château du Piple, élégante demeure du XIXe siècle aujourd'hui reconvertie en espace événementiel, accueille mariages, séminaires et réceptions. Desservie par la gare SNCF d'Ozoir-la-Ferrière sur la ligne Transilien P (Paris-Est – Coulommiers), la ville offre un accès direct à Paris en 35 minutes. Le toponyme \"la Ferrière\" rappelle l'activité sidérurgique médiévale qui exploitait le minerai de fer de la forêt. Ozoir séduit les familles recherchant le calme de la campagne avec la proximité de Paris et de Marne-la-Vallée. TaxiNeo dessert l'ensemble de la commune pour vos transferts aéroport, vos courses vers Paris et vos déplacements vers le golf ou le château.",
    introEn: "Ozoir-la-Ferrière is a green, residential town of 20,000 in southeastern Marne-la-Vallée, bordered by the Armainvilliers and La Grange forests. The Ozoir golf course, a technical 18-hole woodland layout, is one of the most renowned in eastern Île-de-France, attracting players year-round. The Château du Piple, an elegant 19th-century manor now converted into an events venue, hosts weddings, seminars and receptions. Served by Ozoir-la-Ferrière station on Transilien P (Paris-Est – Coulommiers), the town offers direct access to Paris in 35 minutes. The name \"la Ferrière\" recalls medieval ironworking that exploited the forest's iron ore. Ozoir appeals to families seeking countryside peace with proximity to Paris and Marne-la-Vallée. TaxiNeo serves the entire town for airport transfers, Paris rides and trips to the golf course or château.",
    descriptionFr: "Nos chauffeurs à Ozoir-la-Ferrière maîtrisent les accès forestiers, les routes départementales et les raccourcis vers la Francilienne (N104) et l'A4. Transferts CDG en 50 minutes (65-90 €) via la N104, Orly en 35 minutes (50-70 €) via Pontault-Combault et l'A86, Paris Gare de l'Est en 35 minutes. Service golf inclus : prise en charge et retour au club-house d'Ozoir. Navettes château du Piple pour les invités de mariages et séminaires. Complément au Transilien P, dont les derniers trains partent tôt le soir.",
    descriptionEn: "Our drivers in Ozoir-la-Ferrière know the forest access roads, departmental routes and shortcuts to the Francilienne (N104) and A4. CDG transfers in 50 minutes (€65-90) via the N104, Orly in 35 minutes (€50-70) via Pontault-Combault and the A86, Paris Gare de l'Est in 35 minutes. Golf service included: pickup and return at the Ozoir clubhouse. Château du Piple shuttles for wedding and seminar guests. A complement to Transilien P, whose last trains depart early in the evening.",
    metaDescriptionFr: "Taxi Ozoir-la-Ferrière : golf, château du Piple, forêt d'Armainvilliers. Transferts Paris, Orly, CDG à prix fixe. 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Ozoir-la-Ferrière: Ozoir golf course, Château du Piple, Armainvilliers forest. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville verte de 20 000 habitants entre forêts d'Armainvilliers et de la Grange, Ozoir-la-Ferrière abrite un golf réputé et le château du Piple. Transferts aéroport CDG et Orly à prix fixe, navettes golf et événementiel, 24h/24.",
    heroSubtitleEn: "A green town of 20,000 between the Armainvilliers and La Grange forests, Ozoir-la-Ferrière is home to a renowned golf course and the Château du Piple. Fixed-price CDG and Orly airport transfers, golf and event shuttles, 24/7.",
    whyUsFr: [
      { title: "Service golf d'Ozoir", desc: "Prise en charge et dépose au club-house du golf d'Ozoir, l'un des plus techniques de l'est parisien. Transfert golfeurs depuis la gare ou l'aéroport avec espace pour sacs de golf." },
      { title: "Navettes château du Piple", desc: "Transport d'invités pour mariages et séminaires au château du Piple. Service aller-retour, groupes jusqu'à 7 personnes en monospace. Coordination avec les organisateurs d'événements." },
      { title: "Complément Transilien P", desc: "Le dernier Transilien P vers Paris part tôt en soirée. Nos taxis assurent le relais nocturne et les transferts aéroport : CDG en 50 min (65-90 €), Orly en 35 min (50-70 €)." }
    ],
    whyUsEn: [
      { title: "Ozoir golf service", desc: "Pickup and drop-off at the Ozoir golf clubhouse, one of the most technical courses in eastern Paris. Golfer transfers from the station or airport with space for golf bags." },
      { title: "Château du Piple shuttles", desc: "Guest transport for weddings and seminars at Château du Piple. Return service, groups up to 7 in a minivan. Coordination with event organisers." },
      { title: "Transilien P complement", desc: "The last Transilien P to Paris departs early in the evening. Our taxis provide night cover and airport transfers: CDG in 50 min (€65-90), Orly in 35 min (€50-70)." }
    ],
  },
  "vaires-sur-marne": {
    introFr: "Vaires-sur-Marne est une commune de 14 000 habitants devenue mondialement connue grâce au stade nautique olympique de Vaires-sur-Marne/Torcy, qui a accueilli les épreuves d'aviron, de canoë-kayak et de sprint en eaux vives lors des Jeux Olympiques de Paris 2024. Ce complexe sportif de 65 hectares, comprenant un bassin d'eaux calmes de 2 200 mètres et un stade d'eaux vives, est devenu un pôle d'entraînement permanent et un site événementiel majeur d'Île-de-France. La ville s'étend le long des bords de Marne, entre guinguettes traditionnelles et sentiers de promenade ombragés. Desservie par deux gares — Vaires-Torcy (RER E) et Vaires-sur-Marne (Transilien P) — la commune bénéficie d'une excellente connexion ferroviaire vers Paris. Le canal de Chelles longe la commune au nord. L'héritage olympique 2024 attire désormais sportifs, clubs et spectateurs tout au long de l'année. TaxiNeo dessert les événements sportifs, les bords de Marne et assure les transferts aéroport depuis cette commune dynamique.",
    introEn: "Vaires-sur-Marne is a town of 14,000 that gained worldwide recognition through the Vaires-sur-Marne/Torcy Olympic water sports stadium, which hosted rowing, canoe, kayak and white-water sprint events during the Paris 2024 Olympic Games. This 65-hectare sports complex, featuring a 2,200-metre flatwater basin and a white-water stadium, has become a permanent training hub and major events venue in Île-de-France. The town stretches along the Marne riverbanks, between traditional riverside cafes and shaded walking paths. Served by two stations — Vaires-Torcy (RER E) and Vaires-sur-Marne (Transilien P) — the town enjoys excellent rail connections to Paris. The Canal de Chelles runs along the northern edge. The 2024 Olympic legacy now attracts athletes, clubs and spectators year-round. TaxiNeo serves sporting events, the Marne riverbanks and provides airport transfers from this dynamic town.",
    descriptionFr: "Avec TaxiNeo à Vaires-sur-Marne, profitez de chauffeurs connaissant les accès au stade nautique olympique (entrées athlètes, spectateurs, parking VIP), les bords de Marne et les deux gares de la commune. Transferts CDG en 35 minutes (40-55 €), Orly en 45 minutes (60-80 €), Paris en 30 minutes. Service renforcé lors des compétitions nautiques (championnats de France, internationaux d'aviron) et des événements au stade olympique. Navettes inter-gares Vaires-Torcy ↔ Vaires-sur-Marne pour les voyageurs en correspondance.",
    descriptionEn: "With TaxiNeo in Vaires-sur-Marne, enjoy drivers who know the Olympic water sports stadium access points (athlete entrances, spectator areas, VIP parking), the Marne riverbanks and both town stations. CDG transfers in 35 minutes (€40-55), Orly in 45 minutes (€60-80), Paris in 30 minutes. Enhanced service during water sports competitions (French championships, international rowing) and Olympic stadium events. Inter-station shuttles between Vaires-Torcy and Vaires-sur-Marne for connecting travellers.",
    metaDescriptionFr: "Taxi Vaires-sur-Marne : stade olympique nautique 2024, bords de Marne, RER E. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Vaires-sur-Marne: 2024 Olympic water sports stadium, Marne banks, RER E. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville olympique de 14 000 habitants en bord de Marne, Vaires a accueilli l'aviron et le canoë-kayak des JO Paris 2024. Deux gares (RER E et Transilien P) et transferts aéroport CDG/Orly à prix fixe garanti 24h/24.",
    heroSubtitleEn: "An Olympic town of 14,000 on the Marne, Vaires hosted rowing and canoeing at the Paris 2024 Games. Two stations (RER E and Transilien P) and fixed-price CDG/Orly airport transfers guaranteed 24/7.",
    whyUsFr: [
      { title: "Accès stade olympique nautique", desc: "Nos chauffeurs connaissent les accès au complexe olympique de 65 hectares : entrées athlètes, spectateurs, parking VIP. Service événementiel renforcé lors des compétitions nationales et internationales." },
      { title: "Double desserte ferroviaire", desc: "Vaires-Torcy (RER E) et Vaires-sur-Marne (Transilien P) offrent deux options. Nos taxis assurent les navettes inter-gares et le relais quand le RER E est perturbé." },
      { title: "Bords de Marne et guinguettes", desc: "Prise en charge le long des bords de Marne, des guinguettes et du canal de Chelles. Retour tardif garanti après les soirées d'été en bord de rivière." }
    ],
    whyUsEn: [
      { title: "Olympic water stadium access", desc: "Our drivers know the access points to the 65-hectare Olympic complex: athlete entrances, spectator areas, VIP parking. Enhanced event service during national and international competitions." },
      { title: "Dual rail service", desc: "Vaires-Torcy (RER E) and Vaires-sur-Marne (Transilien P) offer two options. Our taxis provide inter-station shuttles and cover when the RER E is disrupted." },
      { title: "Marne riverbanks & guinguettes", desc: "Pickup along the Marne banks, riverside cafes and Canal de Chelles. Guaranteed late returns after summer evenings by the river." }
    ],
  },
  "dammarie-les-lys": {
    introFr: "Dammarie-les-Lys est une cité de caractère de 23 000 habitants jouxtant Melun au sud, à la lisière nord de la forêt de Fontainebleau. Son patrimoine remarquable inclut l'abbaye royale du Lys, fondée par Blanche de Castille en 1244, joyau de l'architecture cistercienne dont les vestiges sont classés monument historique. Le centre commercial La Mare au Diable, du nom du roman de George Sand, est le principal pôle commercial du sud-melunais. Le parc de la Varenne, vaste espace vert le long de la Seine, offre promenades, pêche et détente aux familles. Les quartiers de La Plaine du Lys et des Mézereaux mêlent habitat collectif et pavillonnaire. Les résidents travaillent majoritairement à Melun (préfecture à 2 km), au centre hospitalier de Melun, ou dans les zones d'activités du sud Seine-et-Marne. TaxiNeo assure les transferts vers Paris, Orly et CDG, ainsi que les navettes vers la gare de Melun, principal nœud ferroviaire de la zone.",
    introEn: "Dammarie-les-Lys is a character-rich town of 23,000 adjoining Melun to the south, on the northern edge of Fontainebleau forest. Its remarkable heritage includes the Royal Abbey of the Lys, founded by Blanche of Castile in 1244, a jewel of Cistercian architecture with listed historic remains. The La Mare au Diable shopping centre, named after the George Sand novel, is the main commercial hub of the southern Melun area. The Parc de la Varenne, a large green space along the Seine, offers walks, fishing and relaxation for families. The Plaine du Lys and Mézereaux neighbourhoods mix apartment blocks and detached houses. Most residents work in Melun (prefecture, 2 km away), at Melun hospital, or in southern Seine-et-Marne business zones. TaxiNeo handles transfers to Paris, Orly and CDG, as well as shuttles to Melun station, the area's main rail hub.",
    descriptionFr: "Avec TaxiNeo à Dammarie-les-Lys, profitez de chauffeurs connaissant les liaisons rapides vers la gare de Melun (5 min), les accès à la forêt de Fontainebleau et les itinéraires vers l'A5 et la Francilienne. Transferts Orly en 40 minutes (70-95 €) via l'A6/Francilienne, CDG en 70 minutes (120-165 €), Paris en 50 minutes. Navette gare de Melun pour les correspondances Transilien R vers Paris Gare de Lyon. Service renforcé pour le centre hospitalier de Melun et les zones d'activités. Prise en charge à domicile dans tous les quartiers.",
    descriptionEn: "With TaxiNeo in Dammarie-les-Lys, enjoy drivers who know the fast connections to Melun station (5 min), Fontainebleau forest access points and routes to the A5 and Francilienne. Orly transfers in 40 minutes (€70-95) via the A6/Francilienne, CDG in 70 minutes (€120-165), Paris in 50 minutes. Melun station shuttle for Transilien R connections to Paris Gare de Lyon. Enhanced service for Melun hospital and business zones. Home pickup in all neighbourhoods.",
    metaDescriptionFr: "Taxi Dammarie-les-Lys : abbaye du Lys, La Mare au Diable, Fontainebleau. Transferts Paris, Orly, CDG à prix fixe. 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Dammarie-les-Lys: Abbey of the Lys, La Mare au Diable, Fontainebleau forest. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité de 23 000 habitants jouxtant Melun, Dammarie-les-Lys abrite l'abbaye royale du Lys et le centre commercial La Mare au Diable en lisière de la forêt de Fontainebleau. Transferts Paris, Orly et CDG à prix fixe, navettes gare de Melun, 24h/24.",
    heroSubtitleEn: "A town of 23,000 adjoining Melun, Dammarie-les-Lys is home to the Royal Abbey of the Lys and the La Mare au Diable shopping centre on the edge of Fontainebleau forest. Fixed-price transfers to Paris, Orly and CDG, Melun station shuttles, 24/7.",
    whyUsFr: [
      { title: "Navette gare de Melun", desc: "Dammarie – gare de Melun en 5 minutes. Correspondance Transilien R vers Paris Gare de Lyon (25 min) et RER D. Synchronisation horaires garantie, suivi des retards en temps réel." },
      { title: "Porte nord forêt de Fontainebleau", desc: "Accès direct aux sentiers forestiers depuis Dammarie : route Ronde, Bois-le-Roi, Barbizon. Transport randonneurs et grimpeurs vers les sites de bloc avec espace pour le matériel." },
      { title: "Transferts Orly compétitifs", desc: "Orly en 40 min (70-95 €) via la Francilienne et l'A6. Plus rapide et avantageux que Melun + RER D + Orlyval à 2 passagers. CDG en 70 min (120-165 €)." }
    ],
    whyUsEn: [
      { title: "Melun station shuttle", desc: "Dammarie – Melun station in 5 minutes. Connection to Transilien R to Paris Gare de Lyon (25 min) and RER D. Guaranteed schedule coordination, real-time delay tracking." },
      { title: "Northern Fontainebleau forest gate", desc: "Direct access to forest trails from Dammarie: Route Ronde, Bois-le-Roi, Barbizon. Hiker and climber transport to bouldering sites with space for gear." },
      { title: "Competitive Orly transfers", desc: "Orly in 40 min (€70-95) via the Francilienne and A6. Faster and better value than Melun + RER D + Orlyval for 2 passengers. CDG in 70 min (€120-165)." }
    ],
  },
  "le-mee-sur-seine": {
    introFr: "Le Mée-sur-Seine est une commune résidentielle de 21 000 habitants en bord de Seine, jouxtant Melun à l'ouest. Ville calme et verdoyante, elle bénéficie de la base de loisirs Seine-École, l'un des rares sites de baignade en eau libre d'Île-de-France, ouverte en été avec plage de sable, voile et activités nautiques. La forêt de Bréviande, en lisière sud, offre sentiers de randonnée et pistes cyclables appréciés des familles. Les quartiers de la Croix-Saint-Jacques et des Courtillières mêlent pavillons et petits collectifs dans un cadre arboré. À seulement 2 km de la gare de Melun, Le Mée est idéalement positionné pour rejoindre Paris via le Transilien R (Paris Gare de Lyon en 25 minutes). Les résidents travaillent principalement à Melun (préfecture, centre hospitalier, tribunal), dans les zones d'activités du Carré Sénart ou à Paris. TaxiNeo est le complément naturel au Transilien pour les transferts aéroport, les courses nocturnes et les déplacements vers les communes voisines.",
    introEn: "Le Mée-sur-Seine is a residential town of 21,000 on the banks of the Seine, adjoining Melun to the west. A quiet, green town, it benefits from the Seine-École leisure base, one of the rare open-water swimming sites in Île-de-France, open in summer with a sandy beach, sailing and water activities. The Bréviande forest on the southern edge offers hiking trails and cycle paths popular with families. The Croix-Saint-Jacques and Courtillières neighbourhoods mix detached houses and low-rise apartments in a tree-lined setting. Just 2 km from Melun station, Le Mée is ideally positioned to reach Paris via Transilien R (Paris Gare de Lyon in 25 minutes). Residents mainly work in Melun (prefecture, hospital, courthouse), in the Carré Sénart business zones or in Paris. TaxiNeo is the natural complement to the Transilien for airport transfers, late-night rides and trips to neighbouring towns.",
    descriptionFr: "Nos chauffeurs au Mée-sur-Seine assurent la navette vers la gare de Melun en 5 minutes, couvrent tous les quartiers résidentiels et connaissent les accès à la base de loisirs Seine-École et à la forêt de Bréviande. Transferts Orly en 40 minutes (65-90 €) via la Francilienne, CDG en 70 minutes (120-160 €), Paris Gare de Lyon en 45 minutes par la route. Prise en charge à domicile dans les quartiers Croix-Saint-Jacques, Courtillières et centre-ville. Véhicules familiaux pour les sorties baignade à la base de loisirs l'été. Service nocturne fiable quand le dernier Transilien est passé.",
    descriptionEn: "Our drivers in Le Mée-sur-Seine provide the Melun station shuttle in 5 minutes, cover all residential neighbourhoods and know the access points to the Seine-École leisure base and Bréviande forest. Orly transfers in 40 minutes (€65-90) via the Francilienne, CDG in 70 minutes (€120-160), Paris Gare de Lyon in 45 minutes by road. Home pickup in Croix-Saint-Jacques, Courtillières and town centre. Family vehicles for summer swimming trips to the leisure base. Reliable night service when the last Transilien has departed.",
    metaDescriptionFr: "Taxi Le Mée-sur-Seine : base de loisirs Seine-École, gare de Melun à 2 km. Transferts Paris, Orly, CDG à prix fixe. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Le Mée-sur-Seine: Seine-École leisure base, Seine banks, Melun station 2 km. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Commune résidentielle de 21 000 habitants en bord de Seine, Le Mée est à 2 km de la gare de Melun et abrite la base de loisirs Seine-École. Transferts Paris, Orly et CDG à prix fixe, navettes gare de Melun, 24h/24.",
    heroSubtitleEn: "A residential town of 21,000 on the Seine, Le Mée is 2 km from Melun station and home to the Seine-École leisure base. Fixed-price transfers to Paris, Orly and CDG, Melun station shuttles, 24/7.",
    whyUsFr: [
      { title: "Navette gare de Melun 5 min", desc: "Le Mée – gare de Melun en 5 minutes. Correspondance Transilien R vers Paris Gare de Lyon et RER D. Service dès 4h30 pour les premiers trains et après le dernier train de nuit." },
      { title: "Base de loisirs Seine-École", desc: "Transport vers la base de loisirs (baignade, voile, plage) en été. Véhicules familiaux avec espace pour parasols et matériel nautique. Retour flexible en fin de journée." },
      { title: "Transferts aéroport depuis Melun-sud", desc: "Orly en 40 min (65-90 €), CDG en 70 min (120-160 €). Plus direct et confortable que gare de Melun + Transilien + RER + Orlyval/Roissybus. Avantageux dès 2 passagers." }
    ],
    whyUsEn: [
      { title: "Melun station shuttle 5 min", desc: "Le Mée – Melun station in 5 minutes. Connection to Transilien R to Paris Gare de Lyon and RER D. Service from 4:30am for the first trains and after the last night train." },
      { title: "Seine-École leisure base", desc: "Transport to the leisure base (swimming, sailing, beach) in summer. Family vehicles with space for parasols and water sports gear. Flexible return at end of day." },
      { title: "Airport transfers from south Melun", desc: "Orly in 40 min (€65-90), CDG in 70 min (€120-160). More direct and comfortable than Melun station + Transilien + RER + Orlyval/Roissybus. Better value from 2 passengers." }
    ],
  },
  "combs-la-ville": {
    introFr: "Combs-la-Ville, commune de 22 000 habitants au cœur de l'agglomération de Melun-Sénart, incarne le dynamisme résidentiel du sud-est francilien. Desservie par la gare RER D de Combs-la-Ville – Quincy, la ville offre un accès direct à Paris Gare de Lyon en 35 minutes, ce qui en fait un point de chute privilégié pour les actifs travaillant dans la capitale ou à La Défense. La zone d'activités Parisud, l'une des plus importantes du secteur avec plus de 400 entreprises implantées (logistique, services, industrie légère), génère un trafic professionnel quotidien considérable. La forêt de Sénart, poumon vert de 3 000 hectares en lisière de la commune, attire promeneurs, cyclistes et cavaliers le week-end. Quincy-sous-Sénart, commune voisine, partage la gare RER et forme un bassin de vie cohérent. TaxiNeo connecte les habitants de Combs-la-Ville à l'ensemble du réseau francilien : transferts aéroport Orly et CDG, navettes gare RER D, déplacements vers Melun, Évry et le centre commercial Carré Sénart.",
    introEn: "Combs-la-Ville, a town of 22,000 residents at the heart of the Melun-Sénart conurbation, embodies the residential dynamism of south-east Île-de-France. Served by the Combs-la-Ville – Quincy RER D station, the town offers direct access to Paris Gare de Lyon in 35 minutes, making it a prime location for professionals working in the capital or at La Défense. The Parisud business park, one of the largest in the area with over 400 companies (logistics, services, light industry), generates considerable daily business traffic. The Sénart forest, a 3,000-hectare green lung on the edge of town, draws walkers, cyclists and horse riders at weekends. Neighbouring Quincy-sous-Sénart shares the RER station, forming a cohesive living area. TaxiNeo connects Combs-la-Ville residents to the entire Île-de-France network: Orly and CDG airport transfers, RER D station shuttles, and trips to Melun, Évry and the Carré Sénart shopping centre.",
    descriptionFr: "Avec TaxiNeo à Combs-la-Ville, profitez de chauffeurs connaissant parfaitement les accès à la gare RER D, la zone Parisud et les liaisons vers la Francilienne (N104). Le RER D, souvent saturé aux heures de pointe et sujet à des perturbations fréquentes, rend le taxi indispensable pour les trajets professionnels urgents et les transferts aéroport. Orly est accessible en 30 minutes via la D306 et la Francilienne, CDG en 50 minutes via l'A4. Tarif fixe garanti à la réservation, prise en charge à domicile dans tous les quartiers de Combs-la-Ville et Quincy-sous-Sénart. Service renforcé le matin pour les départs de vols matinaux et en soirée après le dernier RER.",
    descriptionEn: "With TaxiNeo in Combs-la-Ville, enjoy drivers who know the RER D station access, the Parisud business park and connections to the Francilienne (N104) perfectly. The RER D, often overcrowded at peak times and subject to frequent disruptions, makes taxis essential for urgent business trips and airport transfers. Orly is reachable in 30 minutes via the D306 and Francilienne, CDG in 50 minutes via the A4. Fixed fare guaranteed at booking, home pickup across all neighbourhoods of Combs-la-Ville and Quincy-sous-Sénart. Enhanced service in the morning for early flights and in the evening after the last RER.",
    metaDescriptionFr: "Taxi Combs-la-Ville : gare RER D, zone Parisud, forêt de Sénart. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Combs-la-Ville: RER D station, Parisud business park, Sénart forest. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Au cœur de Melun-Sénart avec sa gare RER D et la zone d'activités Parisud, Combs-la-Ville est une ville résidentielle en plein essor. Réservez un taxi à prix fixe pour vos transferts aéroport, vos navettes gare ou vos déplacements vers Melun et le Carré Sénart.",
    heroSubtitleEn: "At the heart of Melun-Sénart with its RER D station and the Parisud business park, Combs-la-Ville is a booming residential town. Book a fixed-price taxi for airport transfers, station shuttles or trips to Melun and Carré Sénart.",
    whyUsFr: [
      { title: "Alternative fiable au RER D", desc: "Le RER D est régulièrement perturbé aux heures de pointe. Nos taxis prennent le relais pour vos trajets urgents vers Paris Gare de Lyon (35 min), Melun ou Évry. Disponibles dès 4h pour les premiers vols." },
      { title: "Transferts aéroport Orly et CDG", desc: "Orly en 30 min via la Francilienne (40-50 €), CDG en 50 min via l'A4 (85-115 €). Tarif fixe garanti, péages inclus, suivi des vols en temps réel. Plus avantageux que train + RER à 2 passagers." },
      { title: "Desserte Parisud et Carré Sénart", desc: "Prise en charge dans toute la zone d'activités Parisud (400+ entreprises) et navettes vers le centre commercial Carré Sénart. Chauffeurs connaissant chaque accès et raccourci local." }
    ],
    whyUsEn: [
      { title: "Reliable RER D alternative", desc: "The RER D is regularly disrupted at peak hours. Our taxis step in for urgent trips to Paris Gare de Lyon (35 min), Melun or Évry. Available from 4am for early flights." },
      { title: "Orly & CDG airport transfers", desc: "Orly in 30 min via the Francilienne (€40-50), CDG in 50 min via the A4 (€85-115). Fixed fare guaranteed, tolls included, real-time flight tracking. Better value than train + RER for 2 passengers." },
      { title: "Parisud & Carré Sénart service", desc: "Pickup anywhere in the Parisud business park (400+ companies) and shuttles to the Carré Sénart shopping centre. Drivers who know every access point and local shortcut." }
    ],
  },
  "savigny-le-temple": {
    introFr: "Savigny-le-Temple, ville de 30 000 habitants au cœur de la ville nouvelle de Sénart, est l'une des communes les plus dynamiques du sud Seine-et-Marne. Née du programme d'urbanisation des années 1970-1980, Savigny a su se réinventer avec un tissu résidentiel moderne, un parc urbain de 40 hectares offrant un cadre de vie verdoyant, et un complexe sportif parmi les plus complets du département. La proximité immédiate du centre commercial Carré Sénart — plus grand centre commercial à ciel ouvert d'Île-de-France avec 180 boutiques — en fait un pôle d'attractivité majeur. Desservie par les gares RER D de Savigny-le-Temple – Nandy et Cesson, la ville est connectée à Paris Gare de Lyon en 40 minutes. La population, jeune et familiale, génère des besoins de transport variés : navettes scolaires, déplacements professionnels vers Paris et Melun, transferts aéroport pour les vacances. TaxiNeo répond à tous ces besoins avec des chauffeurs locaux disponibles jour et nuit.",
    introEn: "Savigny-le-Temple, a town of 30,000 at the heart of the Sénart new town, is one of the most dynamic municipalities in southern Seine-et-Marne. Born from the 1970s-1980s urbanisation programme, Savigny has reinvented itself with modern residential areas, a 40-hectare urban park offering a green living environment, and one of the department's most comprehensive sports complexes. The immediate proximity of Carré Sénart — Île-de-France's largest open-air shopping centre with 180 stores — makes it a major attraction hub. Served by the Savigny-le-Temple – Nandy and Cesson RER D stations, the town is connected to Paris Gare de Lyon in 40 minutes. The young, family-oriented population generates varied transport needs: school runs, business commutes to Paris and Melun, and holiday airport transfers. TaxiNeo meets all these needs with local drivers available day and night.",
    descriptionFr: "À Savigny-le-Temple, TaxiNeo propose des chauffeurs connaissant parfaitement le réseau local : accès aux deux gares RER D (Savigny – Nandy et Cesson), liaisons vers le Carré Sénart, la zone d'activités de Sénart et les axes autoroutiers (Francilienne N104, A5a). Le RER D vers Paris étant souvent irrégulier, le taxi constitue une alternative fiable pour les rendez-vous professionnels et les transferts aéroport. Orly est à 25 minutes, CDG à 50 minutes. Tarifs fixes garantis, service 24h/24, prise en charge dans tous les quartiers de Savigny et communes voisines de Nandy et Cesson.",
    descriptionEn: "In Savigny-le-Temple, TaxiNeo offers drivers who know the local network perfectly: access to both RER D stations (Savigny – Nandy and Cesson), connections to Carré Sénart, the Sénart business zone and motorway links (Francilienne N104, A5a). With the RER D to Paris often unreliable, taxis are a dependable alternative for business appointments and airport transfers. Orly is 25 minutes away, CDG 50 minutes. Fixed fares guaranteed, 24/7 service, pickup in all Savigny neighbourhoods and neighbouring Nandy and Cesson.",
    metaDescriptionFr: "Taxi Savigny-le-Temple : gares RER D, Carré Sénart, parc urbain. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Savigny-le-Temple: RER D stations, Carré Sénart, urban park. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville dynamique de 30 000 habitants au cœur de Sénart, Savigny-le-Temple profite de deux gares RER D et de la proximité du Carré Sénart. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes gare ou courses vers Melun et Paris.",
    heroSubtitleEn: "A dynamic town of 30,000 at the heart of Sénart, Savigny-le-Temple benefits from two RER D stations and proximity to Carré Sénart. Book a fixed-price taxi for airport transfers, station shuttles or rides to Melun and Paris.",
    whyUsFr: [
      { title: "Deux gares RER D couvertes", desc: "Prise en charge aux gares Savigny-le-Temple – Nandy et Cesson. Suivi des horaires Transilien, disponibilité après le dernier train (23h). Navette domicile–gare en 5-10 minutes." },
      { title: "Transferts aéroport express", desc: "Orly en 25 min via la Francilienne (45-65 €), CDG en 50 min via l'A4 (95-125 €). Départs dès 4h du matin, tarif fixe garanti incluant péages et suivi de vol." },
      { title: "Navettes Carré Sénart et zone d'activités", desc: "Transport vers le Carré Sénart (180 boutiques), les enseignes de la zone commerciale et les entreprises du parc d'activités de Sénart. Retour flexible après shopping ou réunion." }
    ],
    whyUsEn: [
      { title: "Two RER D stations covered", desc: "Pickup at Savigny-le-Temple – Nandy and Cesson stations. Transilien schedule tracking, availability after the last train (11pm). Home-to-station shuttle in 5-10 minutes." },
      { title: "Express airport transfers", desc: "Orly in 25 min via the Francilienne (€45-65), CDG in 50 min via the A4 (€95-125). Departures from 4am, fixed fare guaranteed including tolls and flight tracking." },
      { title: "Carré Sénart & business park shuttles", desc: "Transport to Carré Sénart (180 stores), retail park outlets and Sénart business park companies. Flexible return after shopping or meetings." }
    ],
  },
  "brie-comte-robert": {
    introFr: "Brie-Comte-Robert, cité historique de 18 000 habitants en Seine-et-Marne, tire son nom des comtes de Brie qui y édifièrent un imposant château fort au XIIe siècle, dont les vestiges remarquablement conservés (tours, douves, courtines) constituent aujourd'hui un site archéologique majeur d'Île-de-France. La ville, située au carrefour stratégique de l'autoroute A5 et de la Francilienne (N104), occupe une position centrale entre Melun (20 km), Créteil (15 km) et l'aéroport d'Orly (20 km). La roseraie de Brie-Comte-Robert, jardin remarquable abritant plus de 500 variétés de roses, attire les amateurs d'horticulture de toute la région. Le marché du dimanche matin, l'un des plus réputés du sud francilien, anime la place du château. Ville résidentielle prisée des familles travaillant à Paris, Créteil ou Évry, Brie-Comte-Robert souffre de l'absence de gare ferroviaire, ce qui rend le taxi indispensable pour rejoindre les gares RER les plus proches (Boissy-Saint-Léger, Combs-la-Ville) et les aéroports.",
    introEn: "Brie-Comte-Robert, a historic town of 18,000 in Seine-et-Marne, takes its name from the Counts of Brie who built an imposing 12th-century castle here, whose remarkably preserved remains (towers, moats, curtain walls) now form a major archaeological site in Île-de-France. Strategically located at the junction of the A5 motorway and the Francilienne (N104), the town sits centrally between Melun (20 km), Créteil (15 km) and Orly Airport (20 km). The Brie-Comte-Robert rose garden, home to over 500 rose varieties, draws horticulture enthusiasts from across the region. The renowned Sunday morning market enlivens the castle square. A popular residential town for families working in Paris, Créteil or Évry, Brie-Comte-Robert has no railway station, making taxis essential to reach the nearest RER stations (Boissy-Saint-Léger, Combs-la-Ville) and airports.",
    descriptionFr: "Sans desserte ferroviaire directe, Brie-Comte-Robert dépend du réseau routier et des bus pour ses connexions. TaxiNeo comble cette lacune avec des chauffeurs experts des accès A5 et Francilienne. Transferts rapides vers Orly (20 min, 40-55 €), CDG (45 min, 90-115 €) et Paris (35 min via l'A5). Navettes vers les gares RER de Boissy-Saint-Léger (RER A, 10 min) et Combs-la-Ville (RER D, 12 min). Service idéal pour les familles, les résidents et les visiteurs du château médiéval et de la roseraie.",
    descriptionEn: "With no direct rail service, Brie-Comte-Robert relies on roads and buses for connections. TaxiNeo fills this gap with drivers expert in A5 and Francilienne access. Fast transfers to Orly (20 min, €40-55), CDG (45 min, €90-115) and Paris (35 min via the A5). Shuttles to Boissy-Saint-Léger RER A (10 min) and Combs-la-Ville RER D (12 min) stations. Ideal service for families, residents and visitors to the medieval castle and rose garden.",
    metaDescriptionFr: "Taxi Brie-Comte-Robert : château médiéval, roseraie, A5/Francilienne. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Brie-Comte-Robert: medieval castle, rose garden, A5/Francilienne. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité historique entre Melun et Créteil, Brie-Comte-Robert allie patrimoine médiéval et position stratégique sur l'A5 et la Francilienne. Sans gare, le taxi est votre lien direct vers Paris, Orly et CDG à prix fixe garanti.",
    heroSubtitleEn: "A historic town between Melun and Créteil, Brie-Comte-Robert combines medieval heritage with a strategic position on the A5 and Francilienne. With no station, the taxi is your direct link to Paris, Orly and CDG at a guaranteed fixed price.",
    whyUsFr: [
      { title: "Seul transport direct sans gare", desc: "Brie-Comte-Robert n'a pas de gare ferroviaire. Le taxi est le moyen le plus rapide pour rejoindre Boissy-Saint-Léger (RER A, 10 min), Combs-la-Ville (RER D, 12 min) ou directement Paris." },
      { title: "Orly en 20 minutes", desc: "L'aéroport d'Orly est à seulement 20 km via la Francilienne. Transfert en 20 min (40-55 €), tarif fixe garanti. CDG en 45 min (90-115 €). Idéal pour les familles avec bagages." },
      { title: "Carrefour A5/Francilienne", desc: "Position privilégiée au croisement de l'A5 (Paris–Troyes) et de la N104. Nos chauffeurs maîtrisent tous les échangeurs pour des trajets rapides vers Melun, Créteil et Évry." }
    ],
    whyUsEn: [
      { title: "Only direct transport, no station", desc: "Brie-Comte-Robert has no railway station. Taxi is the fastest way to reach Boissy-Saint-Léger (RER A, 10 min), Combs-la-Ville (RER D, 12 min) or Paris directly." },
      { title: "Orly in 20 minutes", desc: "Orly Airport is just 20 km via the Francilienne. Transfer in 20 min (€40-55), fixed fare guaranteed. CDG in 45 min (€90-115). Ideal for families with luggage." },
      { title: "A5/Francilienne junction", desc: "Prime position at the junction of the A5 (Paris–Troyes) and the N104. Our drivers master every interchange for fast trips to Melun, Créteil and Évry." }
    ],
  },
  "coulommiers": {
    introFr: "Coulommiers, charmante sous-préfecture de 15 000 habitants dans l'est de la Seine-et-Marne, est la capitale historique du célèbre fromage Brie de Coulommiers, dont la tradition fromagère remonte au Moyen Âge. La ville séduit par son patrimoine remarquable : le parc des Capucins, vaste jardin à l'anglaise bordant le Grand Morin, la commanderie des Templiers (XIIe siècle) témoignant de la présence de l'ordre dans la Brie champenoise, et le marché couvert du XIXe siècle qui s'anime chaque dimanche avec les producteurs locaux. Située à 55 km à l'est de Paris, Coulommiers est desservie par le Transilien P (gare de l'Est) en environ 1h10, mais la fréquence limitée des trains rend le taxi particulièrement utile pour les déplacements vers Paris, les aéroports et les villes voisines de Meaux et La Ferté-sous-Jouarre. Coulommiers est aussi un pôle d'emploi local avec sa zone d'activités, le centre hospitalier et les entreprises agroalimentaires liées à la filière fromagère.",
    introEn: "Coulommiers, a charming sub-prefecture of 15,000 in eastern Seine-et-Marne, is the historic capital of the famous Brie de Coulommiers cheese, whose cheesemaking tradition dates back to the Middle Ages. The town captivates with its remarkable heritage: the Parc des Capucins, a vast English-style garden along the Grand Morin river, the 12th-century Templar Commandery attesting to the order's presence in the Brie champenoise, and the 19th-century covered market that comes alive every Sunday with local producers. Located 55 km east of Paris, Coulommiers is served by Transilien P (Gare de l'Est) in about 1h10, but limited train frequency makes taxis particularly useful for trips to Paris, airports and neighbouring towns of Meaux and La Ferté-sous-Jouarre. Coulommiers is also a local employment hub with its business park, hospital centre and agri-food companies linked to the cheese industry.",
    descriptionFr: "Le réseau de transport en commun depuis Coulommiers est limité : le Transilien P offre 10-12 trains par jour vers Paris Gare de l'Est, et les bus départementaux sont peu fréquents. TaxiNeo comble ce manque avec des chauffeurs locaux assurant les transferts vers Paris (55 min via la N34/A4), Orly (50 min, 120-160 €), CDG (55 min via l'A4, 100-135 €) et Disneyland Paris (30 min). Service adapté aux besoins de la population rurale : courses médicales vers le centre hospitalier, navettes gare Transilien, déplacements vers Meaux et La Ferté-sous-Jouarre pour les marchés et rendez-vous administratifs.",
    descriptionEn: "Public transport from Coulommiers is limited: Transilien P offers 10-12 daily trains to Paris Gare de l'Est, and departmental buses are infrequent. TaxiNeo fills this gap with local drivers handling transfers to Paris (55 min via the N34/A4), Orly (50 min, €120-160), CDG (55 min via the A4, €100-135) and Disneyland Paris (30 min). Service adapted to rural population needs: medical trips to the hospital, Transilien station shuttles, and rides to Meaux and La Ferté-sous-Jouarre for markets and administrative appointments.",
    metaDescriptionFr: "Taxi Coulommiers : Brie de Coulommiers, Templiers, parc des Capucins. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Coulommiers: Brie cheese capital, Templar Commandery, Parc des Capucins. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Capitale du Brie de Coulommiers au cœur de la Seine-et-Marne, Coulommiers allie patrimoine templier, gastronomie et cadre de vie champêtre. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes gare Transilien P ou courses vers Meaux et Paris.",
    heroSubtitleEn: "Capital of Brie de Coulommiers cheese in the heart of Seine-et-Marne, Coulommiers blends Templar heritage, gastronomy and a rural lifestyle. Book a fixed-price taxi for airport transfers, Transilien P station shuttles or rides to Meaux and Paris.",
    whyUsFr: [
      { title: "Complément au Transilien P", desc: "La gare de Coulommiers (10-12 trains/jour) a une fréquence limitée, surtout le week-end. Le taxi prend le relais pour les premiers et derniers trains, les dimanches et les transferts aéroport directs." },
      { title: "Navette Disneyland Paris en 30 min", desc: "Marne-la-Vallée/Chessy est à seulement 30 min via la D934 et l'A4. Idéal pour les familles, les employés du parc et les touristes hébergés dans la campagne briarde." },
      { title: "Transferts aéroport depuis la Brie", desc: "Orly en 50 min (120-160 €), CDG en 55 min (100-135 €). Plus rapide et plus confortable que le Transilien + RER, surtout avec bagages. Tarif fixe garanti, péages inclus." }
    ],
    whyUsEn: [
      { title: "Transilien P complement", desc: "Coulommiers station (10-12 trains/day) has limited frequency, especially on weekends. Taxi takes over for first and last trains, Sundays and direct airport transfers." },
      { title: "Disneyland Paris shuttle in 30 min", desc: "Marne-la-Vallée/Chessy is just 30 min via the D934 and A4. Ideal for families, park employees and tourists staying in the Brie countryside." },
      { title: "Airport transfers from the Brie", desc: "Orly in 50 min (€120-160), CDG in 55 min (€100-135). Faster and more comfortable than Transilien + RER, especially with luggage. Fixed fare guaranteed, tolls included." }
    ],
  },
  "provins": {
    introFr: "Provins, cité médiévale inscrite au patrimoine mondial de l'UNESCO depuis 2001, est l'un des joyaux historiques de l'Île-de-France. Ancienne capitale des puissants comtes de Champagne, la ville haute conserve un ensemble fortifié exceptionnel : la tour César (donjon du XIIe siècle offrant un panorama sur la Brie), les remparts de 5 km, les souterrains médiévaux et la grange aux dîmes. Chaque été, les spectacles de la Foire du Moyen Âge (chevaliers, rapaces, troubadours) attirent plus de 200 000 visiteurs. La roseraie de Provins, héritière de la tradition des roses de Damas ramenées des Croisades par Thibaud IV, produit toujours la fameuse confiture de pétales de rose. Située à 80 km à l'est de Paris, Provins est desservie par le Transilien P (Paris Gare de l'Est en 1h20-1h30), mais l'éloignement et la fréquence ferroviaire limitée rendent le taxi indispensable pour les touristes, les résidents et les professionnels de cette ville de 13 000 habitants.",
    introEn: "Provins, a medieval city listed as a UNESCO World Heritage Site since 2001, is one of Île-de-France's greatest historical treasures. Former capital of the powerful Counts of Champagne, the upper town preserves an exceptional fortified ensemble: the Tour César (a 12th-century keep offering panoramic views over the Brie), 5 km of ramparts, medieval underground passages and the tithe barn. Each summer, the Medieval Fair shows (knights, birds of prey, troubadours) draw over 200,000 visitors. The Provins rose garden, heir to the tradition of Damask roses brought back from the Crusades by Thibaud IV, still produces the famous rose petal jam. Located 80 km east of Paris, Provins is served by Transilien P (Paris Gare de l'Est in 1h20-1h30), but the distance and limited rail frequency make taxis essential for tourists, residents and professionals in this town of 13,000.",
    descriptionFr: "À 80 km de Paris, Provins est la ville la plus éloignée de la capitale à disposer d'une desserte Transilien directe, mais avec seulement 8-10 trains par jour et un trajet de 1h20-1h30, le taxi reste le moyen le plus fiable pour les transferts aéroport et les déplacements urgents. TaxiNeo propose des transferts vers CDG (55 min via l'A4, 165-220 €), Orly (70 min, 155-210 €) et Paris (80 min). Service renforcé pendant la saison touristique (avril-octobre), les spectacles médiévaux et le marché de Noël. Nos chauffeurs connaissent les accès à la ville haute fortifiée, souvent fermée à la circulation, et les parkings relais.",
    descriptionEn: "At 80 km from Paris, Provins is the most distant town from the capital with a direct Transilien service, but with only 8-10 trains per day and a 1h20-1h30 journey, taxis remain the most reliable option for airport transfers and urgent trips. TaxiNeo offers transfers to CDG (55 min via the A4, €165-220), Orly (70 min, €155-210) and Paris (80 min). Enhanced service during tourist season (April-October), medieval shows and the Christmas market. Our drivers know the access points to the fortified upper town, often closed to traffic, and the park-and-ride facilities.",
    metaDescriptionFr: "Taxi Provins : cité UNESCO, tour César, remparts, foire du Moyen Âge. Transferts Paris, Orly, CDG à prix fixe. 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Provins: UNESCO medieval city, Tour César, ramparts, Medieval Fair. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Cité médiévale classée UNESCO à 80 km de Paris, Provins enchante avec sa tour César, ses remparts et sa foire du Moyen Âge. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes gare Transilien P ou circuits patrimoniaux.",
    heroSubtitleEn: "A UNESCO-listed medieval city 80 km from Paris, Provins enchants with its Tour César, ramparts and Medieval Fair. Book a fixed-price taxi for airport transfers, Transilien P station shuttles or heritage tours.",
    whyUsFr: [
      { title: "Experts de la cité fortifiée", desc: "Nos chauffeurs connaissent les accès à la ville haute (souvent fermée à la circulation), les parkings relais et les dépose-minutes près de la tour César et de la porte Saint-Jean. Indispensable pour les touristes." },
      { title: "Transferts aéroport longue distance", desc: "CDG en 55 min via l'A4 (165-220 €), Orly en 70 min (155-210 €). À 2-3 passagers, nettement plus avantageux que le Transilien + RER (2h30 de trajet avec correspondances)." },
      { title: "Service renforcé saison médiévale", desc: "Disponibilité garantie pendant la Foire du Moyen Âge (200 000 visiteurs/été), le marché de Noël et les week-ends patrimoine. Circuits touristiques à la demande vers la roseraie et les souterrains." }
    ],
    whyUsEn: [
      { title: "Fortified city experts", desc: "Our drivers know the upper town access points (often closed to traffic), park-and-ride facilities and drop-off zones near the Tour César and Porte Saint-Jean. Essential for tourists." },
      { title: "Long-distance airport transfers", desc: "CDG in 55 min via the A4 (€165-220), Orly in 70 min (€155-210). For 2-3 passengers, significantly better value than Transilien + RER (2h30 journey with connections)." },
      { title: "Enhanced medieval season service", desc: "Guaranteed availability during the Medieval Fair (200,000 visitors/summer), Christmas market and heritage weekends. On-demand tourist circuits to the rose garden and underground passages." }
    ],
  },
  "nemours": {
    introFr: "Nemours, ville de 13 500 habitants dans le sud de la Seine-et-Marne, est la porte méridionale du département, aux confins du Gâtinais et de la forêt de Fontainebleau. Son château médiéval du XIIe siècle, l'un des mieux conservés d'Île-de-France, abrite un musée retraçant l'histoire de la région depuis l'Antiquité. Le musée départemental de Préhistoire d'Île-de-France, installé dans un bâtiment moderniste de Roland Simounet en lisière de forêt, présente des collections uniques couvrant 500 000 ans d'occupation humaine. Les rochers gréseux de Bourron-Marlotte et de la forêt de Fontainebleau sud attirent les grimpeurs du monde entier. Nemours est desservie par la gare Transilien R (Paris Gare de Lyon en 1h-1h15) et se situe à la jonction de l'A6 et de la D607, position stratégique entre Paris (75 km) et Montargis (35 km). Le centre hospitalier de Nemours dessert un large bassin de population rurale. TaxiNeo assure les transferts depuis cette porte sud du 77 vers Paris, Orly, CDG et Fontainebleau.",
    introEn: "Nemours, a town of 13,500 in southern Seine-et-Marne, is the department's southern gateway, on the edge of the Gâtinais and the Fontainebleau forest. Its 12th-century castle, one of the best preserved in Île-de-France, houses a museum tracing the region's history from antiquity. The Île-de-France Prehistory Museum, set in a modernist Roland Simounet building on the forest edge, holds unique collections spanning 500,000 years of human habitation. The sandstone rocks of Bourron-Marlotte and southern Fontainebleau forest draw climbers from around the world. Nemours is served by Transilien R (Paris Gare de Lyon in 1h-1h15) and sits at the A6/D607 junction, strategically positioned between Paris (75 km) and Montargis (35 km). Nemours hospital serves a large rural catchment area. TaxiNeo handles transfers from this southern gateway of the 77 to Paris, Orly, CDG and Fontainebleau.",
    descriptionFr: "Située à 75 km de Paris, Nemours est l'une des communes les plus au sud de l'Île-de-France. Le Transilien R assure la liaison vers Paris Gare de Lyon en 1h-1h15 avec 8-10 trains par jour, mais les horaires sont peu adaptés aux déplacements professionnels matinaux et aux retours tardifs. TaxiNeo propose des transferts aéroport depuis Nemours : Orly en 50 min (125-170 €), CDG en 75 min (180-245 €). Navettes vers Fontainebleau (20 min), Melun (30 min) et le centre hospitalier. Nos chauffeurs connaissent les accès A6 (sortie Nemours) et les routes forestières vers Bourron-Marlotte et les sites d'escalade.",
    descriptionEn: "Located 75 km from Paris, Nemours is one of the southernmost communes in Île-de-France. Transilien R connects to Paris Gare de Lyon in 1h-1h15 with 8-10 daily trains, but schedules are poorly suited to early business commutes and late returns. TaxiNeo offers airport transfers from Nemours: Orly in 50 min (€125-170), CDG in 75 min (€180-245). Shuttles to Fontainebleau (20 min), Melun (30 min) and the hospital. Our drivers know the A6 access (Nemours exit) and forest roads to Bourron-Marlotte and climbing sites.",
    metaDescriptionFr: "Taxi Nemours : château-musée, musée de Préhistoire, rochers de Bourron, forêt de Fontainebleau. Transferts Paris, Orly, CDG à prix fixe. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Nemours: castle museum, Prehistory Museum, Bourron rocks, Fontainebleau forest. Fixed-price transfers to Paris, Orly, CDG. Book on TaxiNeo.",
    heroSubtitleFr: "Porte sud de la Seine-et-Marne entre château médiéval, musée de Préhistoire et rochers d'escalade de Bourron-Marlotte. Réservez un taxi à prix fixe pour vos transferts aéroport, navettes gare Transilien R ou courses vers Fontainebleau et Paris.",
    heroSubtitleEn: "Southern gateway of Seine-et-Marne between a medieval castle, Prehistory Museum and Bourron-Marlotte climbing rocks. Book a fixed-price taxi for airport transfers, Transilien R station shuttles or rides to Fontainebleau and Paris.",
    whyUsFr: [
      { title: "Porte sud du 77 vers Paris", desc: "Nemours est la dernière grande ville francilienne au sud avant le Loiret. Nos chauffeurs empruntent l'A6 (sortie Nemours) pour rejoindre Paris en 55 min, Fontainebleau en 20 min et Melun en 30 min." },
      { title: "Transferts aéroport fiables", desc: "Orly en 50 min (125-170 €), CDG en 75 min (180-245 €). Bien plus rapide que le Transilien + RER (2h+ avec correspondances). Tarif fixe garanti, péages A6 inclus, suivi de vol." },
      { title: "Accès sites naturels et culturels", desc: "Transport vers les rochers d'escalade de Bourron-Marlotte, le musée de Préhistoire, le château-musée et les sentiers forestiers. Prise en charge flexible au retour de randonnée ou visite." }
    ],
    whyUsEn: [
      { title: "Southern 77 gateway to Paris", desc: "Nemours is the last major Île-de-France town before the Loiret. Our drivers take the A6 (Nemours exit) to reach Paris in 55 min, Fontainebleau in 20 min and Melun in 30 min." },
      { title: "Reliable airport transfers", desc: "Orly in 50 min (€125-170), CDG in 75 min (€180-245). Much faster than Transilien + RER (2h+ with connections). Fixed fare guaranteed, A6 tolls included, flight tracking." },
      { title: "Natural & cultural site access", desc: "Transport to Bourron-Marlotte climbing rocks, Prehistory Museum, castle museum and forest trails. Flexible pickup after hiking or visits." }
    ],
  },
  "nanterre": {
    introFr: "Nanterre, préfecture des Hauts-de-Seine avec 98 000 habitants, est une métropole dans la métropole, conjuguant le quartier d'affaires de La Défense (partagé avec Puteaux et Courbevoie), l'université Paris-Nanterre (35 000 étudiants) et un tissu résidentiel en pleine transformation. La Défense, premier quartier d'affaires européen, concentre 180 000 salariés quotidiens dans ses tours emblématiques (Total, Engie, EDF, Société Générale). Le parc André Malraux, poumon vert de 25 hectares, offre un contraste saisissant avec les tours de verre voisines. Nanterre bénéficie d'une desserte exceptionnelle : RER A (La Défense – Grande Arche, Nanterre-Préfecture, Nanterre-Université), Transilien L, tramway T2 et bientôt le Grand Paris Express (ligne 15). Malgré cette offre, les heures de pointe saturent le RER A et les cadres de La Défense ont besoin de taxis pour leurs transferts aéroport CDG et Orly, leurs déplacements clients et leurs retours tardifs après les dîners d'affaires.",
    introEn: "Nanterre, the prefecture of Hauts-de-Seine with 98,000 residents, is a metropolis within the metropolis, combining the La Défense business district (shared with Puteaux and Courbevoie), Paris-Nanterre University (35,000 students) and a rapidly transforming residential fabric. La Défense, Europe's largest business district, hosts 180,000 daily workers in its iconic towers (Total, Engie, EDF, Société Générale). The 25-hectare Parc André Malraux offers a striking contrast to the neighbouring glass towers. Nanterre benefits from exceptional transport links: RER A (La Défense – Grande Arche, Nanterre-Préfecture, Nanterre-Université), Transilien L, T2 tramway and soon the Grand Paris Express (line 15). Despite this, peak hours saturate the RER A and La Défense executives need taxis for CDG and Orly airport transfers, client visits and late returns after business dinners.",
    descriptionFr: "À Nanterre, TaxiNeo est le partenaire privilégié des entreprises de La Défense et des résidents pour tous les déplacements que le transport en commun ne couvre pas efficacement. Transferts aéroport CDG en 35-45 min via l'A86/A1 (forfait réglementé 56-65 €), Orly en 30 min via l'A86/A6 (forfait 36-45 €). Service campus Paris-Nanterre pour les étudiants et professeurs en déplacement. Nos chauffeurs maîtrisent la circulation dense de La Défense, connaissent les accès souterrains aux tours et les itinéraires alternatifs par les quais de Seine pour éviter le boulevard circulaire saturé.",
    descriptionEn: "In Nanterre, TaxiNeo is the preferred partner of La Défense businesses and residents for all trips that public transport doesn't cover efficiently. CDG airport transfers in 35-45 min via the A86/A1 (regulated flat rate €56-65), Orly in 30 min via the A86/A6 (flat rate €36-45). Paris-Nanterre campus service for travelling students and professors. Our drivers master La Défense's dense traffic, know the underground tower access points and alternative routes along the Seine quays to avoid the saturated circular boulevard.",
    metaDescriptionFr: "Taxi Nanterre : La Défense, université Paris-Nanterre, parc André Malraux. Forfait aéroport CDG/Orly réglementé. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Nanterre: La Défense, Paris-Nanterre University, Parc André Malraux. Regulated CDG/Orly airport flat rate. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Préfecture du 92 au pied de La Défense, Nanterre réunit le premier quartier d'affaires d'Europe et l'université Paris-Nanterre. Profitez de forfaits aéroport réglementés et de chauffeurs experts de la circulation de La Défense, disponibles 24h/24.",
    heroSubtitleEn: "Prefecture of the 92 at the foot of La Défense, Nanterre brings together Europe's largest business district and Paris-Nanterre University. Enjoy regulated airport flat rates and drivers expert in La Défense traffic, available 24/7.",
    whyUsFr: [
      { title: "Experts La Défense et accès tours", desc: "Nos chauffeurs connaissent les accès souterrains des tours Total, Engie, SocGen et EDF, les points de dépose du parvis et les raccourcis par les quais de Seine pour éviter le boulevard circulaire aux heures de pointe." },
      { title: "Forfait aéroport réglementé", desc: "CDG en 35-45 min : forfait réglementé 56-65 € selon rive. Orly en 30 min : 36-45 €. Prix garanti par arrêté préfectoral, sans tarification dynamique ni surcharge heures de pointe." },
      { title: "Service université et campus", desc: "Navettes Paris-Nanterre Université (35 000 étudiants), prise en charge devant le bâtiment administratif ou la bibliothèque. Transferts gare de Nanterre-Préfecture et Nanterre-Ville." }
    ],
    whyUsEn: [
      { title: "La Défense & tower access experts", desc: "Our drivers know the underground access to Total, Engie, SocGen and EDF towers, esplanade drop-off points and Seine quay shortcuts to bypass the circular boulevard at rush hour." },
      { title: "Regulated airport flat rate", desc: "CDG in 35-45 min: regulated flat rate €56-65 depending on bank. Orly in 30 min: €36-45. Price guaranteed by prefectural order, no surge pricing or peak-hour surcharge." },
      { title: "University & campus service", desc: "Paris-Nanterre University shuttles (35,000 students), pickup at the admin building or library. Transfers to Nanterre-Préfecture and Nanterre-Ville stations." }
    ],
  },
  "courbevoie": {
    introFr: "Courbevoie, ville de 84 000 habitants dans les Hauts-de-Seine, est indissociable du quartier d'affaires de La Défense dont elle abrite une part majeure, notamment les sièges sociaux de Total (tour Coupole), Engie (tour T1) et la Société Générale (tours Granite et Chassagne). Chaque jour, plus de 100 000 salariés transitent par Courbevoie pour rejoindre les tours du quartier d'affaires. Au-delà de La Défense, Courbevoie conserve un cadre de vie résidentiel prisé autour du parc de Bécon (7 hectares), de Charras et du quartier historique du Faubourg de l'Arche. La ville est desservie par le pont de Neuilly (RER A), la gare SNCF de Courbevoie (Transilien L) et le tramway T2 reliant La Défense au pont de Bezons. TaxiNeo est le partenaire transport des entreprises internationales de La Défense et des résidents de Courbevoie pour les transferts aéroport CDG et Orly, les déplacements inter-sites et les retours tardifs.",
    introEn: "Courbevoie, a city of 84,000 in Hauts-de-Seine, is inseparable from the La Défense business district, hosting a major portion including the headquarters of Total (Tour Coupole), Engie (Tour T1) and Société Générale (Tours Granite and Chassagne). Over 100,000 employees pass through Courbevoie daily to reach the business district towers. Beyond La Défense, Courbevoie maintains a prized residential setting around the 7-hectare Parc de Bécon, Charras and the historic Faubourg de l'Arche quarter. The city is served by the Pont de Neuilly (RER A), Courbevoie SNCF station (Transilien L) and the T2 tramway linking La Défense to Pont de Bezons. TaxiNeo is the transport partner for La Défense's international companies and Courbevoie residents for CDG and Orly airport transfers, inter-site trips and late returns.",
    descriptionFr: "Courbevoie concentre les sièges de multinationales dont les cadres internationaux nécessitent des transferts aéroport fréquents et ponctuels. TaxiNeo assure des navettes CDG (35 min, forfait réglementé 56-65 €) et Orly (25-35 min, 36-45 €) depuis les pieds des tours. Nos chauffeurs connaissent les parkings souterrains, les voies d'accès au boulevard circulaire et les itinéraires alternatifs par Puteaux et les quais de Seine. Service entreprise avec facturation mensuelle, accueil en salle d'arrivée aéroport et suivi de vol en temps réel. Le soir, desserte garantie des restaurants d'affaires du quartier Charras et du Faubourg de l'Arche.",
    descriptionEn: "Courbevoie hosts multinational headquarters whose international executives require frequent, punctual airport transfers. TaxiNeo runs CDG shuttles (35 min, regulated flat rate €56-65) and Orly (25-35 min, €36-45) from the tower lobbies. Our drivers know the underground car parks, circular boulevard access roads and alternative routes via Puteaux and the Seine quays. Corporate service with monthly billing, airport arrivals hall meet-and-greet and real-time flight tracking. In the evening, guaranteed coverage of business restaurants in the Charras quarter and Faubourg de l'Arche.",
    metaDescriptionFr: "Taxi Courbevoie : La Défense, tours Total, Engie, SocGen, parc de Bécon. Forfait aéroport CDG/Orly réglementé. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Courbevoie: La Défense, Total, Engie, SocGen towers, Parc de Bécon. Regulated CDG/Orly airport flat rate. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Au cœur de La Défense avec les sièges de Total, Engie et Société Générale, Courbevoie accueille 100 000 salariés chaque jour. Profitez de forfaits aéroport réglementés CDG/Orly et de chauffeurs experts du quartier d'affaires, disponibles 24h/24.",
    heroSubtitleEn: "At the heart of La Défense with Total, Engie and Société Générale headquarters, Courbevoie welcomes 100,000 workers daily. Enjoy regulated CDG/Orly airport flat rates and business district expert drivers, available 24/7.",
    whyUsFr: [
      { title: "Accès direct pieds des tours", desc: "Prise en charge aux lobbies des tours Coupole (Total), T1 (Engie), Granite (SocGen) et Défense Plaza. Connaissance des parkings souterrains et des voies d'accès réservées du boulevard circulaire." },
      { title: "Forfaits aéroport réglementés", desc: "CDG en 35 min : 56-65 € selon rive (forfait préfectoral). Orly en 25-35 min : 36-45 €. Prix garanti sans tarification dynamique. Accueil en salle d'arrivée sur demande." },
      { title: "Service entreprise et facturation", desc: "Compte entreprise avec facturation mensuelle, notes de frais automatiques et réservation par assistant. Idéal pour les multinationales de La Défense gérant des dizaines de transferts par semaine." }
    ],
    whyUsEn: [
      { title: "Direct tower lobby pickup", desc: "Pickup at Tour Coupole (Total), T1 (Engie), Granite (SocGen) and Défense Plaza lobbies. Knowledge of underground parking and circular boulevard reserved access roads." },
      { title: "Regulated airport flat rates", desc: "CDG in 35 min: €56-65 depending on bank (prefectural flat rate). Orly in 25-35 min: €36-45. Guaranteed price with no surge pricing. Arrivals hall meet-and-greet on request." },
      { title: "Corporate service & billing", desc: "Corporate accounts with monthly billing, automatic expense receipts and assistant booking. Ideal for La Défense multinationals managing dozens of transfers per week." }
    ],
  },
  "levallois-perret": {
    introFr: "Levallois-Perret, commune de 66 000 habitants nichée dans une boucle de la Seine au nord-ouest de Paris, détient le titre de ville la plus densément peuplée d'Europe (27 000 hab/km²). Cette densité exceptionnelle s'explique par sa situation géographique privilégiée aux portes de Paris, entre le 17e arrondissement et Neuilly-sur-Seine, ainsi que par un dynamisme économique remarquable. L'hôtel de ville Art déco, classé monument historique, symbolise l'identité architecturale de la commune. Levallois accueille les sièges français d'Amazon, Alstom et de nombreuses entreprises du numérique et de la communication, faisant de la ville un pôle tertiaire de premier plan. La station de métro Louise Michel (ligne 3) et la proximité du périphérique (porte de Champerret, porte d'Asnières) assurent une connectivité forte avec Paris intra-muros. TaxiNeo dessert les entreprises et résidents de Levallois pour les transferts aéroport, les déplacements professionnels inter-sites et les courses quotidiennes.",
    introEn: "Levallois-Perret, a commune of 66,000 nestled in a bend of the Seine north-west of Paris, holds the title of Europe's most densely populated city (27,000 inhabitants/km²). This exceptional density stems from its prime location on Paris's doorstep, between the 17th arrondissement and Neuilly-sur-Seine, and remarkable economic dynamism. The Art Deco town hall, a listed historic monument, symbolises the commune's architectural identity. Levallois hosts the French headquarters of Amazon, Alstom and numerous digital and communications companies, making it a leading business hub. The Louise Michel metro station (line 3) and proximity to the Périphérique (Porte de Champerret, Porte d'Asnières) ensure strong connectivity with central Paris. TaxiNeo serves Levallois businesses and residents for airport transfers, inter-site business trips and daily rides.",
    descriptionFr: "Malgré sa densité record, Levallois-Perret ne dispose que d'une seule station de métro (Louise Michel, ligne 3), ce qui rend le taxi indispensable pour de nombreux déplacements. TaxiNeo propose des transferts aéroport rapides depuis Levallois : CDG en 30-40 min via le périphérique et l'A1 (forfait 56-65 €), Orly en 30 min via le périphérique sud (36-45 €). Service dédié aux sièges d'entreprises (Amazon, Alstom) avec prise en charge à l'accueil. Nos chauffeurs connaissent les sens uniques, les zones 30 et les raccourcis par les quais de Clichy et le pont de Levallois pour optimiser chaque trajet dans cette ville ultra-dense.",
    descriptionEn: "Despite its record density, Levallois-Perret has only one metro station (Louise Michel, line 3), making taxis essential for many trips. TaxiNeo offers fast airport transfers from Levallois: CDG in 30-40 min via the Périphérique and A1 (flat rate €56-65), Orly in 30 min via the southern Périphérique (€36-45). Dedicated service for corporate headquarters (Amazon, Alstom) with lobby pickup. Our drivers know the one-way streets, 30 km/h zones and shortcuts via the Clichy quays and Pont de Levallois to optimise every trip in this ultra-dense city.",
    metaDescriptionFr: "Taxi Levallois-Perret : siège Amazon, Alstom, hôtel de ville Art déco, métro ligne 3. Forfait aéroport CDG/Orly réglementé. Chauffeurs 24h/24. Réservez TaxiNeo.",
    metaDescriptionEn: "Taxi in Levallois-Perret: Amazon HQ, Alstom, Art Deco town hall, metro line 3. Regulated CDG/Orly airport flat rate. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville la plus dense d'Europe aux portes de Paris, Levallois-Perret concentre les sièges d'Amazon et Alstom ainsi qu'un tissu entrepreneurial unique. Profitez de forfaits aéroport réglementés et de chauffeurs experts des rues de Levallois, disponibles 24h/24.",
    heroSubtitleEn: "Europe's most densely populated city on Paris's doorstep, Levallois-Perret hosts Amazon and Alstom headquarters and a unique business fabric. Enjoy regulated airport flat rates and drivers expert in Levallois streets, available 24/7.",
    whyUsFr: [
      { title: "Navigation experte ville ultra-dense", desc: "Levallois est un labyrinthe de sens uniques et de zones 30. Nos chauffeurs maîtrisent chaque raccourci : quais de Clichy, pont de Levallois, accès périphérique par la porte de Champerret ou la porte d'Asnières." },
      { title: "Forfait aéroport réglementé", desc: "CDG en 30-40 min : forfait 56-65 € selon rive. Orly en 30 min : 36-45 €. Tarif préfectoral garanti, pas de majoration dynamique. Prise en charge à domicile ou au bureau." },
      { title: "Service entreprises Levallois", desc: "Prise en charge aux sièges d'Amazon (boulevard Malesherbes), Alstom et des agences de communication de la rue Anatole France. Facturation entreprise disponible, réservation par assistant." }
    ],
    whyUsEn: [
      { title: "Expert ultra-dense city navigation", desc: "Levallois is a maze of one-way streets and 30 km/h zones. Our drivers master every shortcut: Clichy quays, Pont de Levallois, Périphérique access via Porte de Champerret or Porte d'Asnières." },
      { title: "Regulated airport flat rate", desc: "CDG in 30-40 min: flat rate €56-65 depending on bank. Orly in 30 min: €36-45. Prefectural rate guaranteed, no surge pricing. Home or office pickup." },
      { title: "Levallois corporate service", desc: "Pickup at Amazon (Boulevard Malesherbes), Alstom and Rue Anatole France communication agency headquarters. Corporate billing available, assistant booking." }
    ],
  },
  "neuilly-sur-seine": {
    introFr: "Neuilly-sur-Seine, ville la plus aisée d'Île-de-France avec ses 62 000 habitants, est le prolongement naturel de Paris par l'avenue Charles-de-Gaulle, axe prestigieux qui continue les Champs-Élysées jusqu'au pont de Neuilly. Bordée par le bois de Boulogne à l'est et la Seine au sud, cette commune des Hauts-de-Seine accueille l'Hôpital américain de Paris, référence médicale internationale, ainsi que l'île de la Jatte, immortalisée par les peintres impressionnistes. TaxiNeo dessert l'ensemble de Neuilly : transferts depuis le métro ligne 1 (Pont de Neuilly, Les Sablons, Porte Maillot), navettes vers les cliniques privées de la rue de Longchamp, courses vers La Défense toute proche, et déplacements vers les aéroports CDG et Orly au forfait réglementé. Nos chauffeurs connaissent les subtilités de la circulation neuilléenne, notamment les sens uniques du quartier Bagatelle et les accès rapides au périphérique par la porte Maillot. Que vous soyez résident, patient de l'Hôpital américain ou professionnel en déplacement vers La Défense, TaxiNeo garantit un service premium adapté aux exigences de Neuilly-sur-Seine.",
    introEn: "Neuilly-sur-Seine, the wealthiest city in the Île-de-France region with 62,000 residents, is the natural extension of Paris via Avenue Charles-de-Gaulle, the prestigious thoroughfare that continues the Champs-Élysées all the way to Pont de Neuilly. Bordered by the Bois de Boulogne to the east and the Seine to the south, this Hauts-de-Seine commune is home to the American Hospital of Paris, an internationally renowned medical centre, and the Île de la Jatte, immortalised by Impressionist painters. TaxiNeo serves all of Neuilly: transfers from Metro Line 1 stations (Pont de Neuilly, Les Sablons, Porte Maillot), shuttles to private clinics on Rue de Longchamp, rides to nearby La Défense, and fixed-rate airport transfers to CDG and Orly. Our drivers know the intricacies of Neuilly traffic, including one-way streets in the Bagatelle quarter and fast access to the ring road via Porte Maillot. Whether you are a resident, a patient at the American Hospital, or a professional heading to La Défense, TaxiNeo guarantees premium service tailored to Neuilly-sur-Seine's standards.",
    descriptionFr: "Avec TaxiNeo à Neuilly-sur-Seine, bénéficiez d'un service de taxi haut de gamme adapté à cette ville d'exception. Nos chauffeurs empruntent l'avenue Charles-de-Gaulle et les accès directs au périphérique par la porte Maillot pour rejoindre Paris intra-muros en quelques minutes. Forfait CDG à 56 € depuis Neuilly (rive droite), forfait Orly à 45 €. Véhicules premium disponibles sur demande pour les transferts depuis l'Hôpital américain, les ambassades du quartier ou les sièges sociaux du boulevard d'Inkermann. Réservation en 30 secondes, estimation de prix avant confirmation.",
    descriptionEn: "With TaxiNeo in Neuilly-sur-Seine, enjoy a premium taxi service tailored to this exceptional city. Our drivers use Avenue Charles-de-Gaulle and direct ring road access via Porte Maillot to reach central Paris in minutes. CDG flat rate from Neuilly at €56 (right bank), Orly flat rate at €45. Premium vehicles available on request for transfers from the American Hospital, neighbourhood embassies, or corporate headquarters on Boulevard d'Inkermann. Book in 30 seconds with a price estimate before confirmation.",
    metaDescriptionFr: "Taxi Neuilly-sur-Seine : Hôpital américain, île de la Jatte, La Défense. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Neuilly-sur-Seine: American Hospital, Île de la Jatte, La Défense. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Prolongement des Champs-Élysées et porte d'entrée de La Défense, Neuilly-sur-Seine accueille l'Hôpital américain et l'île de la Jatte. Réservez un taxi premium en 30 secondes pour vos transferts aéroport au forfait réglementé, vos rendez-vous médicaux ou vos déplacements professionnels vers le quartier d'affaires.",
    heroSubtitleEn: "Extension of the Champs-Élysées and gateway to La Défense, Neuilly-sur-Seine is home to the American Hospital and Île de la Jatte. Book a premium taxi in 30 seconds for regulated flat-rate airport transfers, medical appointments, or business trips to the business district.",
    whyUsFr: [
      { title: "Accès direct La Défense en 5 min", desc: "Neuilly jouxte le premier quartier d'affaires européen. Nos chauffeurs empruntent le pont de Neuilly et le boulevard circulaire pour déposer les professionnels au pied des tours de La Défense en 5 minutes, sans passer par le RER A souvent saturé aux heures de pointe." },
      { title: "Navette Hôpital américain 24h/24", desc: "Prise en charge et retour depuis l'Hôpital américain de Paris (63 boulevard Victor-Hugo) à toute heure. Nos chauffeurs connaissent les accès ambulance, le parking visiteurs et les horaires de sortie des patients pour un service ponctuel et attentionné." },
      { title: "Forfait aéroport depuis Neuilly", desc: "Neuilly-sur-Seine bénéficie du forfait rive droite vers CDG (56 €) et du tarif réglementé vers Orly (45 €). Départ porte Maillot via le périphérique puis A1 ou A6 : nos chauffeurs optimisent le trajet selon le trafic en temps réel." }
    ],
    whyUsEn: [
      { title: "Direct La Défense access in 5 min", desc: "Neuilly sits right next to Europe's largest business district. Our drivers cross Pont de Neuilly and use the circular boulevard to drop professionals at the foot of La Défense towers in 5 minutes, bypassing the often overcrowded RER A during rush hour." },
      { title: "American Hospital shuttle 24/7", desc: "Pickup and return from the American Hospital of Paris (63 Boulevard Victor-Hugo) at any hour. Our drivers know the ambulance access points, visitor parking, and patient discharge schedules for punctual, attentive service." },
      { title: "Airport flat rate from Neuilly", desc: "Neuilly-sur-Seine benefits from the right-bank flat rate to CDG (€56) and the regulated fare to Orly (€45). Departure via Porte Maillot onto the ring road then A1 or A6: our drivers optimise the route based on real-time traffic." }
    ],
  },
  "colombes": {
    introFr: "Colombes, avec ses 86 000 habitants, est l'une des villes les plus peuplées des Hauts-de-Seine et un territoire en pleine mutation. Célèbre pour son stade Yves-du-Manoir, site historique des Jeux Olympiques de 1924 et rénové pour accueillir les épreuves de hockey sur gazon des JO 2024, Colombes conjugue héritage sportif et renouveau urbain. La ville est desservie par les gares Transilien des lignes J et L (Colombes, Le Stade, La Garenne-Colombes) qui relient la gare Saint-Lazare en 15 minutes. TaxiNeo couvre l'ensemble de la commune : transferts gare, courses vers le centre commercial Les 4 Temps à La Défense, navettes vers les aéroports CDG et Orly, et déplacements dans les quartiers des Grèves, du Petit-Colombes et de l'Europe. Nos chauffeurs connaissent la coulée verte de Colombes, les accès rapides à l'A86 et les itinéraires alternatifs pour éviter les bouchons du pont de Bezons aux heures de pointe.",
    introEn: "Colombes, with its 86,000 residents, is one of the most populous cities in Hauts-de-Seine and a territory undergoing major transformation. Famous for its Stade Yves-du-Manoir, the historic venue of the 1924 Olympic Games renovated to host field hockey events for the 2024 Olympics, Colombes combines sporting heritage with urban renewal. The city is served by Transilien stations on Lines J and L (Colombes, Le Stade, La Garenne-Colombes) connecting to Gare Saint-Lazare in 15 minutes. TaxiNeo covers the entire commune: station transfers, rides to Les 4 Temps shopping centre at La Défense, airport shuttles to CDG and Orly, and travel through the Grèves, Petit-Colombes, and Europe neighbourhoods. Our drivers know the Colombes green corridor, fast access to the A86, and alternative routes to avoid Pont de Bezons traffic jams during rush hour.",
    descriptionFr: "Avec TaxiNeo à Colombes, profitez de chauffeurs qui maîtrisent parfaitement cette ville étendue entre la Seine et la gare Saint-Lazare. Liaison rapide Colombes-gare vers La Défense en 10 minutes via le boulevard Charles-de-Gaulle, transfert CDG en 40 minutes par l'A86 puis l'A1. Tarifs réglementés, pas de majoration dynamique même les soirs d'événements au stade Yves-du-Manoir. Service disponible depuis tous les quartiers, y compris les zones moins bien desservies par le Transilien comme le quartier des Grèves ou le Petit-Colombes.",
    descriptionEn: "With TaxiNeo in Colombes, enjoy drivers who perfectly master this sprawling city between the Seine and Gare Saint-Lazare. Fast Colombes station to La Défense link in 10 minutes via Boulevard Charles-de-Gaulle, CDG transfer in 40 minutes via A86 then A1. Regulated fares, no surge pricing even on event nights at Stade Yves-du-Manoir. Service available from all neighbourhoods, including areas less well served by Transilien like the Grèves quarter or Petit-Colombes.",
    metaDescriptionFr: "Taxi Colombes : stade Yves-du-Manoir, gare Transilien, La Défense. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Colombes: Yves-du-Manoir stadium, Transilien station, La Défense. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville olympique historique et carrefour des Hauts-de-Seine Nord, Colombes relie la gare Saint-Lazare en 15 minutes par le Transilien. Réservez un taxi à prix fixe pour vos transferts aéroport, vos déplacements vers La Défense ou vos soirées au stade Yves-du-Manoir rénové.",
    heroSubtitleEn: "Historic Olympic city and northern Hauts-de-Seine crossroads, Colombes connects to Gare Saint-Lazare in 15 minutes by Transilien. Book a fixed-price taxi for airport transfers, trips to La Défense, or evenings at the renovated Stade Yves-du-Manoir.",
    whyUsFr: [
      { title: "Navette stade Yves-du-Manoir", desc: "Prise en charge et retour garantis les soirs de compétition au stade olympique rénové (15 000 places). Nos chauffeurs connaissent les accès rue du Colonel-Gruyer et les itinéraires de dégagement vers l'A86 pour éviter l'affluence de sortie." },
      { title: "Liaison Colombes–La Défense express", desc: "Nos taxis relient Colombes au quartier d'affaires de La Défense en 10 minutes via le boulevard Charles-de-Gaulle et le pont de Neuilly. Idéal pour les professionnels dont la gare Transilien ne dessert pas directement La Défense." },
      { title: "Desserte complète des quartiers", desc: "Colombes s'étend sur 7,8 km² avec des quartiers mal desservis par les transports. Nos chauffeurs couvrent les Grèves, le Petit-Colombes, l'Europe et le centre-ville, avec des temps de prise en charge de 8 minutes en moyenne." }
    ],
    whyUsEn: [
      { title: "Yves-du-Manoir stadium shuttle", desc: "Guaranteed pickup and return on competition nights at the renovated Olympic stadium (15,000 seats). Our drivers know the Colonel-Gruyer street access and exit routes to the A86 to avoid post-event crowds." },
      { title: "Express Colombes to La Défense", desc: "Our taxis connect Colombes to the La Défense business district in 10 minutes via Boulevard Charles-de-Gaulle and Pont de Neuilly. Ideal for professionals whose Transilien station does not directly serve La Défense." },
      { title: "Full neighbourhood coverage", desc: "Colombes spans 7.8 km² with neighbourhoods poorly served by public transport. Our drivers cover Les Grèves, Petit-Colombes, Europe, and the town centre, with average pickup times of 8 minutes." }
    ],
  },
  "rueil-malmaison": {
    introFr: "Rueil-Malmaison, commune résidentielle de 80 000 habitants au cœur des Hauts-de-Seine, est indissociable du château de Malmaison, demeure de Joséphine de Beauharnais et Napoléon Bonaparte, et de sa forêt domaniale de 160 hectares. La ville s'est réinventée avec le quartier d'affaires Rueil-sur-Seine, où siègent de nombreuses entreprises du CAC 40 comme Schneider Electric et VINCI. Desservie par le RER A (gare Rueil-Malmaison) et proche de l'hippodrome de Saint-Cloud, Rueil est un point stratégique entre Paris et l'ouest parisien. TaxiNeo propose des transferts depuis la gare RER vers les bureaux de Rueil-sur-Seine, des navettes vers les aéroports CDG et Orly, des courses vers le château de Malmaison pour les visiteurs, et des déplacements en soirée depuis les restaurants du bord de Seine. Nos chauffeurs maîtrisent les accès à l'A86, la N13 et la D913 pour optimiser chaque trajet selon le trafic en temps réel.",
    introEn: "Rueil-Malmaison, a residential commune of 80,000 inhabitants in the heart of Hauts-de-Seine, is inseparable from the Château de Malmaison, home of Joséphine de Beauharnais and Napoléon Bonaparte, and its 160-hectare national forest. The city has reinvented itself with the Rueil-sur-Seine business district, headquarters to numerous CAC 40 companies like Schneider Electric and VINCI. Served by RER A (Rueil-Malmaison station) and close to the Saint-Cloud racecourse, Rueil is a strategic point between Paris and the western suburbs. TaxiNeo offers transfers from the RER station to Rueil-sur-Seine offices, airport shuttles to CDG and Orly, rides to Château de Malmaison for visitors, and evening trips from riverside restaurants along the Seine. Our drivers master access to the A86, N13, and D913 to optimise every journey based on real-time traffic.",
    descriptionFr: "Avec TaxiNeo à Rueil-Malmaison, profitez de chauffeurs qui connaissent cette ville à double visage : quartier d'affaires moderne de Rueil-sur-Seine d'un côté, patrimoine impérial du château de Malmaison et forêt domaniale de l'autre. Transfert RER A Rueil vers La Défense en 8 minutes de taxi via le pont de Chatou, forfait CDG à 65 € via l'A86/A1. Disponibilité renforcée les jours de courses à l'hippodrome de Saint-Cloud et les week-ends de forte affluence au château.",
    descriptionEn: "With TaxiNeo in Rueil-Malmaison, enjoy drivers who know this dual-character city: the modern Rueil-sur-Seine business district on one side, the imperial heritage of Château de Malmaison and national forest on the other. RER A Rueil to La Défense transfer in 8 minutes by taxi via Pont de Chatou, CDG flat rate at €65 via A86/A1. Enhanced availability on race days at Saint-Cloud racecourse and busy weekends at the château.",
    metaDescriptionFr: "Taxi Rueil-Malmaison : château de Malmaison, Rueil-sur-Seine, RER A. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Rueil-Malmaison: Château de Malmaison, Rueil-sur-Seine, RER A. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Entre le château de Malmaison, le quartier d'affaires Rueil-sur-Seine et la forêt domaniale, Rueil-Malmaison est un joyau des Hauts-de-Seine. Réservez un taxi à prix fixe pour vos transferts RER A, vos déplacements professionnels vers La Défense ou vos visites du patrimoine napoléonien.",
    heroSubtitleEn: "Between Château de Malmaison, the Rueil-sur-Seine business district, and the national forest, Rueil-Malmaison is a jewel of Hauts-de-Seine. Book a fixed-price taxi for RER A transfers, business trips to La Défense, or visits to the Napoleonic heritage.",
    whyUsFr: [
      { title: "Liaison Rueil-sur-Seine express", desc: "Nos taxis desservent le quartier d'affaires de Rueil-sur-Seine où siègent Schneider Electric, VINCI et AstraZeneca. Prise en charge à la gare RER A et dépôt au pied des immeubles de bureaux en 5 minutes par la rue des Martinets." },
      { title: "Navette château de Malmaison", desc: "Transport des visiteurs depuis la gare RER ou les hôtels environnants vers le château de Malmaison et ses jardins. Nos chauffeurs proposent des attentes pour les visites de 1h30 à 2h avec retour garanti." },
      { title: "Accès A86 et N13 optimisés", desc: "Rueil est au carrefour de l'A86 et de la N13 : nos chauffeurs choisissent le meilleur itinéraire vers CDG (45 min, ~65 €), Orly (35 min, ~50 €) ou Versailles (20 min) selon les conditions de circulation en temps réel." }
    ],
    whyUsEn: [
      { title: "Express Rueil-sur-Seine service", desc: "Our taxis serve the Rueil-sur-Seine business district, home to Schneider Electric, VINCI, and AstraZeneca. Pickup at the RER A station and drop-off at office buildings in 5 minutes via Rue des Martinets." },
      { title: "Château de Malmaison shuttle", desc: "Transport for visitors from the RER station or nearby hotels to Château de Malmaison and its gardens. Our drivers offer waiting service for 1.5 to 2-hour visits with guaranteed return." },
      { title: "Optimised A86 and N13 access", desc: "Rueil sits at the crossroads of the A86 and N13: our drivers choose the best route to CDG (45 min, ~€65), Orly (35 min, ~€50), or Versailles (20 min) based on real-time traffic conditions." }
    ],
  },
  "asnieres-sur-seine": {
    introFr: "Asnières-sur-Seine, 87 000 habitants, est une ville des Hauts-de-Seine en pleine transformation urbaine qui allie patrimoine artistique et dynamisme contemporain. Le pont d'Asnières, immortalisé par Claude Monet et Vincent Van Gogh, et le cimetière des chiens, premier cimetière animalier au monde fondé en 1899, sont les emblèmes de cette commune bordée par la Seine. Desservie par la gare SNCF d'Asnières (lignes Transilien J et L, 10 minutes de Saint-Lazare), la ville accueille de grands projets immobiliers le long des quais et dans le quartier des Courtilles. TaxiNeo assure les transferts gare, les courses vers Gennevilliers et le port autonome, les navettes vers les aéroports CDG et Orly, et les déplacements quotidiens vers Paris et La Défense. Nos chauffeurs connaissent les particularités de la circulation asniéroise, les traversées de Seine par le pont de Clichy et le pont d'Asnières, et les accès rapides à l'A86 et au périphérique nord.",
    introEn: "Asnières-sur-Seine, with 87,000 inhabitants, is a Hauts-de-Seine city undergoing major urban transformation that blends artistic heritage with contemporary dynamism. The Pont d'Asnières, immortalised by Claude Monet and Vincent Van Gogh, and the Cimetière des Chiens, the world's first pet cemetery founded in 1899, are the emblems of this Seine-bordered commune. Served by Asnières SNCF station (Transilien Lines J and L, 10 minutes from Saint-Lazare), the city hosts major real estate developments along the quays and in the Courtilles quarter. TaxiNeo provides station transfers, rides to Gennevilliers and the autonomous port, airport shuttles to CDG and Orly, and daily commutes to Paris and La Défense. Our drivers know the particularities of Asnières traffic, Seine crossings via Pont de Clichy and Pont d'Asnières, and fast access to the A86 and northern ring road.",
    descriptionFr: "Avec TaxiNeo à Asnières-sur-Seine, profitez d'un service de taxi qui s'adapte au renouveau de cette ville en mutation. Transfert gare d'Asnières vers La Défense en 12 minutes via le pont de Clichy, vers Paris-centre en 15 minutes par le périphérique nord. Forfait CDG environ 60 € via l'A86/A1, Orly environ 50 €. Nos chauffeurs desservent les nouveaux quartiers des bords de Seine, les Courtilles (terminus métro 13) et le secteur des Grésillons avec des prises en charge rapides même en heure de pointe.",
    descriptionEn: "With TaxiNeo in Asnières-sur-Seine, enjoy a taxi service that adapts to this city's urban renewal. Asnières station to La Défense transfer in 12 minutes via Pont de Clichy, to central Paris in 15 minutes via the northern ring road. CDG flat rate approximately €60 via A86/A1, Orly approximately €50. Our drivers serve the new Seine waterfront developments, Les Courtilles (Metro 13 terminus), and the Grésillons area with fast pickups even during rush hour.",
    metaDescriptionFr: "Taxi Asnières-sur-Seine : pont d'Asnières, cimetière des chiens, Seine. Transferts Paris, Orly, CDG à prix fixe. 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Asnières-sur-Seine: Pont d'Asnières, Cimetière des Chiens, Seine banks. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville d'art et d'histoire en pleine métamorphose urbaine, Asnières-sur-Seine est à 10 minutes de Saint-Lazare par le Transilien. Réservez un taxi à prix fixe pour vos transferts aéroport, vos déplacements vers La Défense ou Paris-centre, et profitez de chauffeurs qui connaissent chaque pont et chaque quai de la commune.",
    heroSubtitleEn: "A city of art and history undergoing urban metamorphosis, Asnières-sur-Seine is 10 minutes from Saint-Lazare by Transilien. Book a fixed-price taxi for airport transfers, trips to La Défense or central Paris, with drivers who know every bridge and quay in the commune.",
    whyUsFr: [
      { title: "Gare d'Asnières à 10 min de Paris", desc: "La gare d'Asnières (Transilien J/L) est à seulement 10 minutes de Saint-Lazare. Nos taxis assurent la correspondance parfaite : prise en charge à la sortie de gare et dépôt dans tous les quartiers d'Asnières, y compris les bords de Seine et les Courtilles." },
      { title: "Expertise des traversées de Seine", desc: "Asnières possède deux ponts stratégiques. Nos chauffeurs choisissent entre le pont d'Asnières (vers Courbevoie/La Défense) et le pont de Clichy (vers Levallois/Paris 17e) selon le trafic pour optimiser chaque course." },
      { title: "Desserte zone portuaire et logistique", desc: "Accès rapide au port autonome de Gennevilliers et à la zone industrielle des Grésillons. Nos chauffeurs transportent les professionnels en horaires décalés (équipes de nuit, départs à 4h) avec ponctualité garantie." }
    ],
    whyUsEn: [
      { title: "Asnières station 10 min from Paris", desc: "Asnières station (Transilien J/L) is just 10 minutes from Saint-Lazare. Our taxis provide the perfect connection: pickup at the station exit and drop-off in all Asnières neighbourhoods, including the Seine waterfront and Les Courtilles." },
      { title: "Seine crossing expertise", desc: "Asnières has two strategic bridges. Our drivers choose between Pont d'Asnières (towards Courbevoie/La Défense) and Pont de Clichy (towards Levallois/Paris 17th) based on traffic to optimise every ride." },
      { title: "Port and logistics zone service", desc: "Quick access to the Gennevilliers autonomous port and Grésillons industrial zone. Our drivers transport professionals on shift schedules (night shifts, 4am departures) with guaranteed punctuality." }
    ],
  },
  "boulogne-billancourt": {
    introFr: "Boulogne-Billancourt, 121 000 habitants, est la plus grande ville d'Île-de-France hors Paris et un pôle économique, culturel et médiatique majeur des Hauts-de-Seine. Berceau historique de Renault et des studios de cinéma (Billancourt, où furent tournés des chefs-d'œuvre du cinéma français), la ville a su se réinventer autour de l'île Seguin et de La Seine Musicale, salle de concert iconique inaugurée en 2017. Le musée départemental Albert-Kahn et ses jardins japonais, le quartier du Pont de Sèvres où siège TF1, et la proximité immédiate de la porte de Saint-Cloud font de Boulogne-Billancourt une destination incontournable. Desservie par les métros lignes 9 et 10 ainsi que le tramway T2, la ville est néanmoins vaste et ses quartiers les plus éloignés (île Seguin, Pont de Sèvres) nécessitent souvent un taxi. TaxiNeo assure tous vos déplacements : transferts aéroport CDG et Orly, courses vers Paris intra-muros par la porte de Saint-Cloud, navettes vers La Défense, et retours de soirée depuis La Seine Musicale.",
    introEn: "Boulogne-Billancourt, with 121,000 inhabitants, is the largest city in Île-de-France outside Paris and a major economic, cultural, and media hub in Hauts-de-Seine. The historic birthplace of Renault and the Billancourt film studios, where masterpieces of French cinema were shot, the city has reinvented itself around Île Seguin and La Seine Musicale, the iconic concert hall opened in 2017. The Albert-Kahn departmental museum with its Japanese gardens, the Pont de Sèvres quarter housing TF1 headquarters, and immediate proximity to Porte de Saint-Cloud make Boulogne-Billancourt an essential destination. Served by Metro Lines 9 and 10 and Tramway T2, the city is nonetheless vast, and its more remote quarters (Île Seguin, Pont de Sèvres) often require a taxi. TaxiNeo handles all your journeys: CDG and Orly airport transfers, rides to central Paris via Porte de Saint-Cloud, La Défense shuttles, and late-night returns from La Seine Musicale.",
    descriptionFr: "Avec TaxiNeo à Boulogne-Billancourt, profitez de chauffeurs experts de la plus grande ville de banlieue parisienne. Accès Paris rive droite en 10 minutes par la porte de Saint-Cloud, La Défense en 15 minutes par le pont de Sèvres et la N118. Forfait CDG à 56 € (rive droite), Orly à 36 € (rive gauche via le périphérique sud). Service renforcé les soirs de concert à La Seine Musicale et les dimanches d'exposition au musée Albert-Kahn. Prise en charge garantie dans tous les quartiers : Prince-Marmottan, Silly-Gallieni, Pont de Sèvres.",
    descriptionEn: "With TaxiNeo in Boulogne-Billancourt, enjoy drivers who are experts of Paris's largest suburban city. Access to Paris right bank in 10 minutes via Porte de Saint-Cloud, La Défense in 15 minutes via Pont de Sèvres and N118. CDG flat rate at €56 (right bank), Orly at €36 (left bank via southern ring road). Enhanced service on concert nights at La Seine Musicale and exhibition Sundays at the Albert-Kahn museum. Guaranteed pickup in all neighbourhoods: Prince-Marmottan, Silly-Gallieni, Pont de Sèvres.",
    metaDescriptionFr: "Taxi Boulogne-Billancourt : Seine Musicale, musée Albert-Kahn, île Seguin. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Boulogne-Billancourt: Seine Musicale, Albert-Kahn Museum, Île Seguin. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Plus grande ville d'Île-de-France hors Paris, Boulogne-Billancourt vibre entre La Seine Musicale, le musée Albert-Kahn et le quartier TF1. Réservez un taxi à prix fixe pour vos transferts aéroport, vos sorties culturelles sur l'île Seguin ou vos déplacements professionnels vers La Défense et Paris.",
    heroSubtitleEn: "The largest city in Île-de-France outside Paris, Boulogne-Billancourt buzzes between La Seine Musicale, the Albert-Kahn Museum, and the TF1 quarter. Book a fixed-price taxi for airport transfers, cultural outings on Île Seguin, or business trips to La Défense and Paris.",
    whyUsFr: [
      { title: "Retour concert Seine Musicale garanti", desc: "La Seine Musicale sur l'île Seguin accueille 6 000 spectateurs et l'accès en transport en commun est limité en soirée. Nos taxis assurent le retour post-concert avec prise en charge sur le parvis et itinéraires fluides via le pont de Sèvres ou le quai Georges-Gorse." },
      { title: "Porte de Saint-Cloud en 5 minutes", desc: "Boulogne-Billancourt jouxte la porte de Saint-Cloud, accès direct au périphérique parisien. Nos chauffeurs rallient Paris 16e, le Trocadéro ou la gare Montparnasse en un temps record grâce à leur connaissance des contre-allées et des horaires de flux." },
      { title: "Forfait aéroport compétitif", desc: "Depuis Boulogne-Billancourt, bénéficiez du forfait réglementé vers CDG (56 € rive droite, 65 € rive gauche) et Orly (36 € ou 45 €). Départ par le périphérique sud ou la N118 selon la destination, avec suivi de vol en temps réel." }
    ],
    whyUsEn: [
      { title: "Guaranteed Seine Musicale return", desc: "La Seine Musicale on Île Seguin hosts 6,000 spectators, and public transport access is limited in the evening. Our taxis ensure post-concert returns with pickup on the esplanade and smooth routes via Pont de Sèvres or Quai Georges-Gorse." },
      { title: "Porte de Saint-Cloud in 5 minutes", desc: "Boulogne-Billancourt borders Porte de Saint-Cloud, providing direct access to the Paris ring road. Our drivers reach Paris 16th, the Trocadéro, or Gare Montparnasse in record time thanks to their knowledge of service roads and traffic flow schedules." },
      { title: "Competitive airport flat rate", desc: "From Boulogne-Billancourt, benefit from the regulated flat rate to CDG (€56 right bank, €65 left bank) and Orly (€36 or €45). Departure via the southern ring road or N118 depending on destination, with real-time flight tracking." }
    ],
  },
  "issy-les-moulineaux": {
    introFr: "Issy-les-Moulineaux, 70 000 habitants, est devenue en deux décennies le pôle numérique et médiatique des Hauts-de-Seine. La ville accueille les sièges de Microsoft France, Canal+, Coca-Cola France et de nombreuses startups dans le quartier du Val de Seine. Le fort d'Issy, vestige militaire reconverti en espace culturel, l'héliport de Paris (le seul de la capitale), et le parc de l'île Saint-Germain avec sa Tour aux Figures de Jean Dubuffet offrent un cadre de vie unique. Desservie par le métro ligne 12 (Mairie d'Issy), le tramway T2 et le RER C, Issy reste néanmoins une ville où le taxi est indispensable pour les déplacements inter-entreprises et les transferts aéroport. TaxiNeo assure les liaisons depuis le quartier du Val de Seine vers La Défense, les transferts CDG et Orly via le périphérique, les navettes vers l'héliport de Paris et les courses vers le centre de Paris par le pont du Garigliano ou la porte de Versailles.",
    introEn: "Issy-les-Moulineaux, with 70,000 residents, has become over the past two decades the digital and media hub of Hauts-de-Seine. The city hosts the headquarters of Microsoft France, Canal+, Coca-Cola France, and numerous startups in the Val de Seine district. Fort d'Issy, a military remnant converted into a cultural space, the Paris Heliport (the only one in the capital), and the Île Saint-Germain park with its Tour aux Figures by Jean Dubuffet offer a unique living environment. Served by Metro Line 12 (Mairie d'Issy), Tramway T2, and RER C, Issy remains a city where taxis are essential for inter-company travel and airport transfers. TaxiNeo provides connections from the Val de Seine quarter to La Défense, CDG and Orly transfers via the ring road, Paris Heliport shuttles, and rides to central Paris via Pont du Garigliano or Porte de Versailles.",
    descriptionFr: "Avec TaxiNeo à Issy-les-Moulineaux, bénéficiez de taxis adaptés aux besoins du pôle numérique isséen. Transfert Val de Seine vers La Défense en 15 minutes par la N118, vers la gare Montparnasse en 12 minutes par le boulevard des Frères-Voisin. Forfait CDG environ 65 €, Orly environ 35 € via le périphérique sud. Service premium disponible pour les transferts héliport de Paris. Nos chauffeurs maîtrisent les accès aux sièges sociaux de Microsoft, Canal+ et Orange et les parkings visiteurs de chaque campus.",
    descriptionEn: "With TaxiNeo in Issy-les-Moulineaux, benefit from taxis adapted to the needs of the Issy digital hub. Val de Seine to La Défense transfer in 15 minutes via N118, to Gare Montparnasse in 12 minutes via Boulevard des Frères-Voisin. CDG flat rate approximately €65, Orly approximately €35 via the southern ring road. Premium service available for Paris Heliport transfers. Our drivers master access to Microsoft, Canal+, and Orange headquarters and visitor parking at each campus.",
    metaDescriptionFr: "Taxi Issy-les-Moulineaux : Microsoft France, Canal+, héliport de Paris. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Issy-les-Moulineaux: Microsoft France, Canal+, Paris Heliport. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Pôle numérique et médiatique des Hauts-de-Seine, Issy-les-Moulineaux accueille Microsoft France, Canal+ et l'héliport de Paris. Réservez un taxi à prix fixe pour vos transferts aéroport, vos déplacements entre campus d'entreprises ou vos courses vers la porte de Versailles et Paris.",
    heroSubtitleEn: "The digital and media hub of Hauts-de-Seine, Issy-les-Moulineaux hosts Microsoft France, Canal+, and the Paris Heliport. Book a fixed-price taxi for airport transfers, inter-campus business travel, or rides to Porte de Versailles and Paris.",
    whyUsFr: [
      { title: "Navettes inter-entreprises Val de Seine", desc: "Nos taxis assurent les liaisons entre les campus de Microsoft (39 quai du Président-Roosevelt), Canal+ (1 place du Spectacle) et les bureaux d'Orange et Coca-Cola. Prise en charge à l'accueil, trajet optimisé entre sites en 5 à 10 minutes." },
      { title: "Transfert héliport de Paris", desc: "L'héliport de Paris, unique en Île-de-France, est situé à Issy. Nos chauffeurs assurent la correspondance taxi-hélicoptère avec ponctualité absolue : prise en charge du passager et de ses bagages au pied de l'hélistation, 4 boulevard du Général-Martial-Valin." },
      { title: "Proximité Orly et Porte de Versailles", desc: "Issy est à 20 minutes d'Orly par le périphérique sud (forfait ~35 €) et à 5 minutes de la Porte de Versailles et du parc des expositions. Idéal pour les professionnels des salons Porte de Versailles logeant à Issy." }
    ],
    whyUsEn: [
      { title: "Val de Seine inter-campus shuttles", desc: "Our taxis connect the campuses of Microsoft (39 Quai du Président-Roosevelt), Canal+ (1 Place du Spectacle), and Orange and Coca-Cola offices. Pickup at reception, optimised inter-site journey in 5 to 10 minutes." },
      { title: "Paris Heliport transfer", desc: "The Paris Heliport, unique in Île-de-France, is located in Issy. Our drivers ensure taxi-helicopter connections with absolute punctuality: passenger and luggage pickup at the helistation, 4 Boulevard du Général-Martial-Valin." },
      { title: "Close to Orly and Porte de Versailles", desc: "Issy is 20 minutes from Orly via the southern ring road (flat rate ~€35) and 5 minutes from Porte de Versailles exhibition centre. Ideal for trade show professionals staying in Issy." }
    ],
  },
  "meudon": {
    introFr: "Meudon, 46 000 habitants, est une ville verte et scientifique des Hauts-de-Seine qui s'étend depuis les bords de Seine jusqu'aux hauteurs boisées de la forêt de Meudon. L'Observatoire de Paris-Meudon, installé dans les anciens bâtiments du château de Meudon, est l'un des plus grands centres de recherche astronomique d'Europe. La terrasse de Meudon offre un panorama exceptionnel sur Paris et la vallée de la Seine, tandis que le musée d'art et d'histoire abrite des œuvres de Rodin qui vécut et travailla dans la Villa des Brillants. Desservie par le RER C (Meudon-Val-Fleury) et le Transilien N (gare de Meudon), la ville présente un relief vallonné qui complique l'accès en transports en commun depuis certains quartiers. TaxiNeo couvre l'ensemble de Meudon : transferts gare, navettes vers les centres de recherche de l'ONERA et du CNRS, courses vers les aéroports CDG et Orly, et déplacements vers Vélizy-Villacoublay, Clamart ou le centre de Paris.",
    introEn: "Meudon, with 46,000 inhabitants, is a green and scientific city in Hauts-de-Seine that stretches from the banks of the Seine to the wooded heights of the Meudon forest. The Paris-Meudon Observatory, housed in the former buildings of the Château de Meudon, is one of the largest astronomical research centres in Europe. The Meudon Terrace offers an exceptional panorama over Paris and the Seine valley, while the art and history museum holds works by Rodin, who lived and worked in the Villa des Brillants. Served by RER C (Meudon-Val-Fleury) and Transilien N (Meudon station), the city's hilly terrain complicates public transport access from certain neighbourhoods. TaxiNeo covers all of Meudon: station transfers, shuttles to ONERA and CNRS research centres, CDG and Orly airport rides, and trips to Vélizy-Villacoublay, Clamart, or central Paris.",
    descriptionFr: "Avec TaxiNeo à Meudon, profitez de chauffeurs qui maîtrisent le relief vallonné de cette ville entre Seine et forêt. Transfert gare Meudon-Val-Fleury vers Paris-Montparnasse en 15 minutes par la N118, vers Orly en 20 minutes via le périphérique sud (forfait ~38 €). Le terrain pentu de Meudon rend le taxi indispensable pour les quartiers hauts (Bellevue, Observatoire) mal desservis par le bus. Service adapté aux chercheurs de l'ONERA et du CNRS avec prises en charge tôt le matin.",
    descriptionEn: "With TaxiNeo in Meudon, enjoy drivers who master the hilly terrain of this city between the Seine and the forest. Meudon-Val-Fleury station to Paris-Montparnasse transfer in 15 minutes via N118, to Orly in 20 minutes via the southern ring road (flat rate ~€38). Meudon's steep terrain makes taxis essential for upper neighbourhoods (Bellevue, Observatory) poorly served by bus. Service adapted to ONERA and CNRS researchers with early morning pickups.",
    metaDescriptionFr: "Taxi Meudon : Observatoire de Paris, terrasse panoramique, forêt de Meudon. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Meudon: Paris Observatory, panoramic terrace, Meudon forest. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Ville scientifique et verte entre l'Observatoire de Paris, la terrasse panoramique et la forêt de Meudon, cette commune des Hauts-de-Seine mérite un taxi qui connaît son relief. Réservez à prix fixe pour vos transferts gare RER C, vos déplacements vers les centres de recherche ou vos courses vers Orly et CDG.",
    heroSubtitleEn: "A green, scientific city between the Paris Observatory, panoramic terrace, and Meudon forest, this Hauts-de-Seine commune deserves a taxi that knows its terrain. Book at a fixed price for RER C station transfers, research centre trips, or rides to Orly and CDG.",
    whyUsFr: [
      { title: "Relief vallonné, chauffeurs experts", desc: "Meudon s'étend de 30 m (bords de Seine) à 180 m d'altitude (forêt). Nos chauffeurs connaissent les rues pentues de Bellevue, les accès à l'Observatoire par la route des Gardes et les raccourcis pour éviter la côte de Meudon aux heures de pointe." },
      { title: "Navettes ONERA et centres de recherche", desc: "Le site ONERA de Meudon et les laboratoires du CNRS emploient des centaines de chercheurs. Nos taxis assurent les transferts gare-laboratoire dès le matin (prise en charge à 6h) et les retours tardifs après les colloques et séminaires." },
      { title: "Proximité Orly et Vélizy", desc: "Meudon est à 20 minutes d'Orly (forfait ~38 €) et à 10 minutes du centre commercial Vélizy 2 et de la base aérienne. Accès direct par la N118 et la D53, itinéraire optimisé par nos chauffeurs selon le trafic." }
    ],
    whyUsEn: [
      { title: "Hilly terrain, expert drivers", desc: "Meudon stretches from 30 m (Seine banks) to 180 m altitude (forest). Our drivers know the steep streets of Bellevue, Observatory access via Route des Gardes, and shortcuts to avoid the Meudon hill during rush hour." },
      { title: "ONERA and research centre shuttles", desc: "The ONERA Meudon site and CNRS laboratories employ hundreds of researchers. Our taxis provide station-to-lab transfers from early morning (6am pickup) and late returns after conferences and seminars." },
      { title: "Close to Orly and Vélizy", desc: "Meudon is 20 minutes from Orly (flat rate ~€38) and 10 minutes from Vélizy 2 shopping centre and the air base. Direct access via N118 and D53, route optimised by our drivers based on traffic." }
    ],
  },
  "antony": {
    introFr: "Antony, 63 000 habitants, est la porte sud des Hauts-de-Seine et un carrefour de transports stratégique grâce à sa gare RER B et à la connexion Orlyval vers l'aéroport d'Orly. Située à proximité immédiate du parc de Sceaux, chef-d'œuvre paysager d'André Le Nôtre classé monument historique, Antony combine qualité de vie et accessibilité. La ville possède un marché couvert réputé, un tissu de commerces dynamique et une vie culturelle active autour du théâtre Firmin-Gémier et de la maison des arts. TaxiNeo dessert l'ensemble d'Antony et de ses quartiers : La Croix de Berny, Parc de Sceaux, Fontaine-Michalon, et assure les transferts vers Orly via l'Orlyval ou la route directe (15 minutes), vers Paris par le RER B ou le périphérique sud, ainsi que vers les zones d'activité de Fresnes, Wissous et Massy. Nos chauffeurs connaissent les itinéraires locaux, les horaires de marché et les événements du parc de Sceaux qui impactent la circulation.",
    introEn: "Antony, with 63,000 inhabitants, is the southern gateway of Hauts-de-Seine and a strategic transport crossroads thanks to its RER B station and Orlyval connection to Orly Airport. Located right next to the Parc de Sceaux, a landscaping masterpiece by André Le Nôtre classified as a historic monument, Antony combines quality of life with accessibility. The city boasts a renowned covered market, a dynamic retail fabric, and an active cultural life centred on the Théâtre Firmin-Gémier and the Maison des Arts. TaxiNeo serves all of Antony and its neighbourhoods: La Croix de Berny, Parc de Sceaux, Fontaine-Michalon, and provides transfers to Orly via Orlyval or the direct road (15 minutes), to Paris via RER B or the southern ring road, and to the business zones of Fresnes, Wissous, and Massy. Our drivers know local routes, market schedules, and Parc de Sceaux events that affect traffic.",
    descriptionFr: "Avec TaxiNeo à Antony, profitez d'un accès privilégié à Orly, l'aéroport le plus proche des Hauts-de-Seine sud. Transfert Antony–Orly en 15 minutes par la D920 (forfait ~25 €), bien plus rapide et confortable que la correspondance RER B + Orlyval. Transfert vers CDG en 50 minutes via l'A86 et l'A1 (~65 €). Nos chauffeurs desservent aussi le parc de Sceaux pour les promenades dominicales et les cerisiers en fleurs au printemps, ainsi que le marché couvert d'Antony les mardis, vendredis et dimanches.",
    descriptionEn: "With TaxiNeo in Antony, enjoy privileged access to Orly, the closest airport to southern Hauts-de-Seine. Antony to Orly transfer in 15 minutes via D920 (flat rate ~€25), much faster and more comfortable than the RER B + Orlyval connection. CDG transfer in 50 minutes via A86 and A1 (~€65). Our drivers also serve the Parc de Sceaux for Sunday strolls and cherry blossom season in spring, as well as the Antony covered market on Tuesdays, Fridays, and Sundays.",
    metaDescriptionFr: "Taxi Antony : parc de Sceaux, RER B, connexion Orlyval–Orly. Transferts Paris, Orly, CDG à prix fixe. Chauffeurs 24h/24. Réservez sur TaxiNeo.",
    metaDescriptionEn: "Taxi in Antony: Parc de Sceaux, RER B, Orlyval–Orly connection. Fixed-price transfers to Paris, Orly, CDG. Drivers 24/7. Book on TaxiNeo.",
    heroSubtitleFr: "Porte sud des Hauts-de-Seine et connexion directe Orly par l'Orlyval, Antony est aussi l'écrin du magnifique parc de Sceaux. Réservez un taxi à prix fixe pour vos transferts aéroport en 15 minutes, vos déplacements vers Paris par le RER B ou vos sorties au parc de Sceaux.",
    heroSubtitleEn: "Southern gateway of Hauts-de-Seine with direct Orly access via Orlyval, Antony is also home to the magnificent Parc de Sceaux. Book a fixed-price taxi for airport transfers in 15 minutes, trips to Paris via RER B, or outings to the Parc de Sceaux.",
    whyUsFr: [
      { title: "Transfert Orly express en 15 min", desc: "Antony est la ville la mieux placée pour rejoindre Orly. Nos taxis empruntent la D920 puis l'accès direct au terminal pour un transfert en 15 minutes et environ 25 €. Plus rapide, plus confortable et moins cher que le combo RER B + Orlyval (12,10 € mais 35 min avec correspondance)." },
      { title: "Parc de Sceaux et événements", desc: "Le parc de Sceaux (181 hectares, jardins Le Nôtre) accueille des milliers de visiteurs le week-end, notamment pendant le hanami des cerisiers en avril. Nos chauffeurs connaissent les accès par la Croix de Berny et les parkings de délestage pour éviter les embouteillages." },
      { title: "Hub RER B sud Hauts-de-Seine", desc: "La gare RER B d'Antony est un point de correspondance majeur. Nos taxis assurent la connexion vers Fresnes, Wissous, le plateau de Saclay et Massy-Palaiseau pour les professionnels et étudiants du pôle scientifique Paris-Saclay." }
    ],
    whyUsEn: [
      { title: "Express Orly transfer in 15 min", desc: "Antony is the best-located city to reach Orly. Our taxis take the D920 then direct terminal access for a 15-minute transfer at around €25. Faster, more comfortable, and cheaper than the RER B + Orlyval combo (€12.10 but 35 min with connection)." },
      { title: "Parc de Sceaux and events", desc: "The Parc de Sceaux (181 hectares, Le Nôtre gardens) attracts thousands of visitors on weekends, especially during the cherry blossom hanami in April. Our drivers know the Croix de Berny access points and overflow parking to avoid traffic jams." },
      { title: "Southern Hauts-de-Seine RER B hub", desc: "Antony RER B station is a major connection point. Our taxis provide links to Fresnes, Wissous, the Saclay plateau, and Massy-Palaiseau for professionals and students of the Paris-Saclay scientific hub." }
    ],
  },
  "clichy": {
    introFr: "Clichy-la-Garenne, commune de 63 000 habitants aux portes de Paris, est un carrefour économique et médical majeur du nord des Hauts-de-Seine. L'hôpital Beaujon (AP-HP), centre de référence national en hépatologie et chirurgie digestive, attire chaque jour des centaines de patients et praticiens de toute la France. Le siège historique de L'Oréal, premier groupe mondial de cosmétiques fondé en 1909, emploie des milliers de collaborateurs internationaux et ancre la ville dans le paysage économique mondial. Les berges de Seine, réaménagées ces dernières années, offrent un cadre de promenade agréable tandis que le Pavillon Vendôme, élégante demeure du XVIIe siècle classée monument historique, témoigne du riche passé aristocratique de Clichy. Desservie par le métro 13 (Mairie de Clichy, Porte de Clichy) et le RER C, la ville est bien connectée à Paris mais mal reliée aux aéroports en transport en commun. TaxiNeo propose des transferts aéroport directs depuis Clichy : 30 min vers Orly (45-60 €), 35 min vers CDG (50-65 €), avec prise en charge à domicile, à l'hôpital Beaujon ou devant les bureaux de L'Oréal, 24h/24.",
    introEn: "Clichy-la-Garenne, a town of 63,000 residents at the gates of Paris, is a major economic and medical crossroads in northern Hauts-de-Seine. Beaujon Hospital (AP-HP), a national reference centre for hepatology and digestive surgery, attracts hundreds of patients and practitioners daily from across France. L'Oréal's historic headquarters — the world's leading cosmetics group, founded in 1909 — employs thousands of international staff and anchors the town in the global business landscape. The Seine riverbanks, redesigned in recent years, offer pleasant walking while the Pavillon Vendôme, an elegant 17th-century listed mansion, testifies to Clichy's aristocratic past. Served by metro line 13 (Mairie de Clichy, Porte de Clichy) and RER C, the town connects well to Paris but poorly to airports by public transport. TaxiNeo offers direct airport transfers from Clichy: 30 min to Orly (€45-60), 35 min to CDG (€50-65), with home pick-up, Beaujon Hospital or L'Oréal offices, 24/7.",
    descriptionFr: "Avec TaxiNeo à Clichy, profitez de transferts aéroport à prix fixe sans surprise. Orly dès 45 € en 30 minutes, CDG dès 50 € en 35 minutes. Nos chauffeurs professionnels connaissent Clichy par cœur — de l'hôpital Beaujon aux berges de Seine — et vous garantissent ponctualité, confort et un tarif garanti. Service 24h/24, bagages inclus, suivi de vol en temps réel pour les retours.",
    descriptionEn: "With TaxiNeo in Clichy, enjoy fixed-price airport transfers with no surprises. Orly from €45 in 30 minutes, CDG from €50 in 35 minutes. Our professional drivers know Clichy inside out — from Beaujon Hospital to the Seine banks — guaranteeing punctuality, comfort and a guaranteed fare. 24/7 service, luggage included, real-time flight tracking for returns.",
    metaDescriptionFr: "Taxi à Clichy : transferts Orly dès 45 €, CDG dès 50 €. Beaujon, L'Oréal, Métro 13. Prix fixe 24h/24. Réservez en ligne.",
    metaDescriptionEn: "Taxi in Clichy: Orly from €45, CDG from €50. Beaujon Hospital, L'Oréal, Metro 13. Fixed price 24/7. Book online.",
    heroSubtitleFr: "Clichy-la-Garenne, ville de l'hôpital Beaujon et du siège historique de L'Oréal. Réservez votre taxi en quelques clics pour un transfert aéroport fiable et ponctuel.",
    heroSubtitleEn: "Clichy-la-Garenne, home to Beaujon Hospital and L'Oréal's historic headquarters. Book your taxi in a few clicks for a reliable, punctual airport transfer.",
    whyUsFr: [
      { title: "Transferts Beaujon & L'Oréal", desc: "Prise en charge directe devant l'hôpital Beaujon ou les bureaux L'Oréal. Idéal pour patients, visiteurs et professionnels. Orly en 30 min (45-60 €)." },
      { title: "Prix fixe garanti", desc: "Tarif annoncé à la réservation, sans compteur ni surprise. Péages inclus. CDG dès 50 €, Orly dès 45 €. Van 7 places disponible." },
      { title: "Service 24h/24 Métro 13", desc: "Quand le métro 13 ne suffit plus — vols tôt le matin, retours de nuit — votre taxi est là. Réservez en ligne, chauffeur en 15 min." },
    ],
    whyUsEn: [
      { title: "Beaujon & L'Oréal Transfers", desc: "Direct pick-up at Beaujon Hospital or L'Oréal offices. Ideal for patients, visitors and professionals. Orly in 30 min (€45-60)." },
      { title: "Guaranteed Fixed Price", desc: "Fare confirmed at booking, no meter or surprises. Tolls included. CDG from €50, Orly from €45. 7-seat van available." },
      { title: "24/7 Metro 13 Complement", desc: "When metro 13 isn't enough — early flights, late returns — your taxi is there. Book online, driver in 15 min." },
    ],
  },
  "gennevilliers": {
    introFr: "Gennevilliers, ville de 48 000 habitants au nord des Hauts-de-Seine, est dominée par son port fluvial, premier port d'Île-de-France et deuxième de France. S'étendant sur 400 hectares le long de la Seine, le port de Gennevilliers accueille plus de 3 000 entreprises et génère un trafic de 20 millions de tonnes par an, faisant de cette commune un nœud logistique majeur de la région parisienne. Au-delà du port, Gennevilliers se distingue par son Théâtre, Centre Dramatique National réputé pour sa programmation avant-gardiste qui attire les amateurs de théâtre contemporain de toute l'Île-de-France. Le tramway T1 traverse la ville et la connecte à Asnières et Saint-Denis. Malgré cette desserte, les transferts aéroport restent complexes en transport en commun. TaxiNeo propose des transferts directs : Orly en 35 min (55-70 €) et CDG en seulement 30 min (45-60 €) grâce à la proximité de l'A86. Prise en charge dans la zone portuaire, en centre-ville ou dans les quartiers résidentiels.",
    introEn: "Gennevilliers, a town of 48,000 in northern Hauts-de-Seine, is dominated by its river port — Île-de-France's largest and France's second. Spanning 400 hectares along the Seine, the Port of Gennevilliers hosts over 3,000 businesses and handles 20 million tonnes annually, making this town a major logistics hub for the Paris region. Beyond the port, Gennevilliers stands out for its Theatre, a National Drama Centre renowned for avant-garde programming attracting contemporary theatre lovers from across Île-de-France. The T1 tramway crosses the town, connecting it to Asnières and Saint-Denis. Despite this service, airport transfers remain complex by public transport. TaxiNeo offers direct transfers: Orly in 35 min (€55-70) and CDG in just 30 min (€45-60) thanks to A86 proximity. Pick-up in the port zone, town centre or residential areas.",
    descriptionFr: "Avec TaxiNeo à Gennevilliers, bénéficiez de transferts aéroport rapides à prix fixe. CDG en seulement 30 min dès 45 €, Orly en 35 min dès 55 €. Nos chauffeurs connaissent la zone portuaire, le centre-ville et tous les quartiers. Service 24h/24, bagages inclus, prise en charge précise dans la zone industrielle.",
    descriptionEn: "With TaxiNeo in Gennevilliers, enjoy fast fixed-price airport transfers. CDG in just 30 min from €45, Orly in 35 min from €55. Our drivers know the port zone, town centre and all neighbourhoods. 24/7 service, luggage included, precise pick-up in the industrial zone.",
    metaDescriptionFr: "Taxi à Gennevilliers : CDG dès 45 €, Orly dès 55 €. Port fluvial, Théâtre CDN, T1. Prix fixe 24h/24. Réservez en ligne.",
    metaDescriptionEn: "Taxi in Gennevilliers: CDG from €45, Orly from €55. River port, CDN Theatre, T1 tram. Fixed price 24/7. Book online.",
    heroSubtitleFr: "Gennevilliers, ville du premier port fluvial d'Île-de-France et du Théâtre CDN. Réservez votre taxi pour un transfert aéroport rapide et direct.",
    heroSubtitleEn: "Gennevilliers, home to Île-de-France's largest river port and the CDN Theatre. Book your taxi for a fast, direct airport transfer.",
    whyUsFr: [
      { title: "Prise en charge zone portuaire", desc: "Nos chauffeurs connaissent le port de Gennevilliers par cœur. Précisez votre quai ou entreprise pour une prise en charge au plus près." },
      { title: "CDG en 30 minutes", desc: "Grâce à la position nord de Gennevilliers et l'accès direct à l'A86, CDG est à seulement 30 min. Tarif fixe dès 45 €." },
      { title: "Service jour et nuit", desc: "Zone portuaire active 24h/24, vols tôt le matin, retours tardifs : votre taxi est disponible en permanence. Réservation en ligne simple." },
    ],
    whyUsEn: [
      { title: "Port Zone Pick-up", desc: "Our drivers know the Port of Gennevilliers inside out. Specify your dock or company for closest pick-up." },
      { title: "CDG in 30 Minutes", desc: "Thanks to Gennevilliers' northern position and direct A86 access, CDG is just 30 min away. Fixed fare from €45." },
      { title: "Day and Night Service", desc: "24/7 port zone activity, early flights, late returns: your taxi is always available. Simple online booking." },
    ],
  },
  "villeneuve-la-garenne": {
    introFr: "Villeneuve-la-Garenne, commune de 25 000 habitants nichée dans une boucle de la Seine au nord des Hauts-de-Seine, allie la tranquillité d'une ville à taille humaine avec la proximité des grandes infrastructures franciliennes. Le centre commercial Qwartz, ouvert en 2014 sur les bords de Seine avec 165 boutiques et un cinéma multiplexe, a dynamisé le commerce local et attire une clientèle de tout le nord-92. Les bords de Seine offrent des promenades verdoyantes et accueillent des événements nautiques. La ville partage l'île de la Jatte, ce paysage impressionniste célèbre, avec Neuilly et Levallois. Le tramway T1 dessert la ville et la relie au réseau métropolitain. Villeneuve-la-Garenne est l'une des communes des Hauts-de-Seine les plus proches de CDG (22 km), un avantage majeur pour les voyageurs. TaxiNeo assure des transferts directs : CDG en 25 min (40-55 €), Orly en 35 min (55-75 €). Service porte-à-porte depuis Qwartz, les bords de Seine ou tout quartier résidentiel.",
    introEn: "Villeneuve-la-Garenne, a 25,000-resident town nestled in a bend of the Seine in northern Hauts-de-Seine, combines the tranquillity of a human-scale town with proximity to major Île-de-France infrastructure. The Qwartz shopping centre, opened in 2014 on the Seine banks with 165 shops and a multiplex cinema, has energised local commerce and draws customers from across northern 92. The Seine banks offer green walks and host nautical events. The town shares the Île de la Jatte, that famous Impressionist landscape, with Neuilly and Levallois. The T1 tramway serves the town and connects it to the metropolitan network. Villeneuve-la-Garenne is one of Hauts-de-Seine's closest towns to CDG (22 km), a major advantage for travellers. TaxiNeo provides direct transfers: CDG in 25 min (€40-55), Orly in 35 min (€55-75). Door-to-door service from Qwartz, Seine banks or any residential area.",
    descriptionFr: "Avec TaxiNeo à Villeneuve-la-Garenne, profitez de la proximité avec CDG : seulement 25 min et dès 40 €. Orly en 35 min dès 55 €. Prix fixe garanti, péages inclus, bagages inclus. Nos chauffeurs vous prennent en charge devant Qwartz, sur les bords de Seine ou à votre domicile.",
    descriptionEn: "With TaxiNeo in Villeneuve-la-Garenne, take advantage of CDG proximity: just 25 min from €40. Orly in 35 min from €55. Guaranteed fixed price, tolls included, luggage included. Our drivers pick you up at Qwartz, the Seine banks or your home.",
    metaDescriptionFr: "Taxi Villeneuve-la-Garenne : CDG dès 40 €, Orly dès 55 €. Qwartz, bords de Seine, T1. Prix fixe 24h/24. Réservez.",
    metaDescriptionEn: "Taxi Villeneuve-la-Garenne: CDG from €40, Orly from €55. Qwartz mall, Seine banks, T1. Fixed price 24/7. Book now.",
    heroSubtitleFr: "Villeneuve-la-Garenne, ville des bords de Seine et du centre Qwartz. L'une des communes les plus proches de CDG dans le 92. Taxi direct vers les aéroports.",
    heroSubtitleEn: "Villeneuve-la-Garenne, town of Seine banks and Qwartz centre. One of the closest 92 towns to CDG. Direct taxi to airports.",
    whyUsFr: [
      { title: "CDG en 25 minutes", desc: "Villeneuve-la-Garenne est l'une des communes les plus proches de CDG dans le 92. Taxi direct dès 40 €, péages inclus." },
      { title: "Prise en charge Qwartz & Seine", desc: "Devant le centre commercial Qwartz, sur les bords de Seine ou à votre domicile. Prise en charge précise à votre convenance." },
      { title: "Prix fixe sans surprise", desc: "CDG dès 40 €, Orly dès 55 €. Tarif annoncé à la réservation, bagages et péages inclus. Van 7 places disponible." },
    ],
    whyUsEn: [
      { title: "CDG in 25 Minutes", desc: "Villeneuve-la-Garenne is one of the closest 92 towns to CDG. Direct taxi from €40, tolls included." },
      { title: "Qwartz & Seine Pick-up", desc: "At Qwartz shopping centre, Seine banks or your home. Precise pick-up at your convenience." },
      { title: "Fixed Price, No Surprises", desc: "CDG from €40, Orly from €55. Fare confirmed at booking, luggage and tolls included. 7-seat van available." },
    ],
  },
  "puteaux": {
    introFr: "Puteaux, commune de 45 000 habitants, est le berceau historique du quartier d'affaires de La Défense, premier centre d'affaires européen dont elle accueille la majeure partie. La Grande Arche (110 m), le CNIT (1958, premier bâtiment de La Défense) et les tours emblématiques comme la tour Total Energies et la tour First (231 m, la plus haute de France) dominent le paysage. Mais Puteaux est bien plus que La Défense : le Vieux Puteaux, autour de la rue de la République, conserve un charme de village avec ses commerces de proximité et ses restaurants. L'île de Puteaux, accessible par une passerelle, est un havre de verdure sur la Seine. Avec 180 000 salariés transitant quotidiennement par La Défense, les transferts aéroport sont un besoin permanent. TaxiNeo dessert Puteaux et La Défense 24h/24 : Orly en 25 min (50-65 €), CDG en 35 min (60-80 €). Prise en charge au pied de votre tour, dans le Vieux Puteaux ou sur l'île.",
    introEn: "Puteaux, a town of 45,000 residents, is the historic cradle of the La Défense business district — Europe's premier business centre — hosting its largest section. The Grande Arche (110 m), the CNIT (1958, La Défense's first building) and iconic towers like Tour Total Energies and Tour First (231 m, France's tallest) dominate the skyline. But Puteaux is much more than La Défense: the Vieux Puteaux, around rue de la République, retains village charm with local shops and restaurants. The Île de Puteaux, accessible by footbridge, is a green haven on the Seine. With 180,000 employees passing through La Défense daily, airport transfers are a permanent need. TaxiNeo serves Puteaux and La Défense 24/7: Orly in 25 min (€50-65), CDG in 35 min (€60-80). Pick-up at your tower base, in Vieux Puteaux or on the island.",
    descriptionFr: "Avec TaxiNeo à Puteaux, profitez de transferts aéroport adaptés aux professionnels de La Défense. Orly en 25 min dès 50 €, CDG en 35 min dès 60 €. Prise en charge au pied de votre tour, facturation professionnelle pour notes de frais, service 24h/24. Compte entreprise disponible.",
    descriptionEn: "With TaxiNeo in Puteaux, enjoy airport transfers tailored to La Défense professionals. Orly in 25 min from €50, CDG in 35 min from €60. Pick-up at your tower base, professional invoicing for expenses, 24/7 service. Corporate accounts available.",
    metaDescriptionFr: "Taxi Puteaux & La Défense : Orly dès 50 €, CDG dès 60 €. Grande Arche, CNIT, tours. Prix fixe 24h/24. Réservez.",
    metaDescriptionEn: "Taxi Puteaux & La Défense: Orly from €50, CDG from €60. Grande Arche, CNIT, towers. Fixed price 24/7. Book now.",
    heroSubtitleFr: "Puteaux, cœur de La Défense et village historique en bord de Seine. Transferts aéroport rapides pour professionnels et résidents, au prix fixe 24h/24.",
    heroSubtitleEn: "Puteaux, heart of La Défense and historic village on the Seine. Fast airport transfers for professionals and residents, fixed price 24/7.",
    whyUsFr: [
      { title: "Au pied de votre tour", desc: "Prise en charge devant la Grande Arche, le CNIT, la tour Total ou toute autre adresse de La Défense. Le chauffeur vous attend." },
      { title: "Facturation entreprise", desc: "Facture professionnelle après chaque course. Compte entreprise avec facturation mensuelle pour les voyageurs réguliers de La Défense." },
      { title: "Orly en 25 min, CDG en 35 min", desc: "Transferts directs par A86. Orly dès 50 €, CDG dès 60 €. Van 7 places pour les équipes ou familles." },
    ],
    whyUsEn: [
      { title: "At Your Tower Base", desc: "Pick-up at the Grande Arche, CNIT, Tour Total or any La Défense address. Driver waiting for you." },
      { title: "Corporate Billing", desc: "Professional invoice after each trip. Corporate account with monthly billing for regular La Défense travellers." },
      { title: "Orly 25 min, CDG 35 min", desc: "Direct A86 transfers. Orly from €50, CDG from €60. 7-seat van for teams or families." },
    ],
  },
  "la-garenne-colombes": {
    introFr: "La Garenne-Colombes, surnommée « la Garenne » par ses 29 000 habitants, est un bijou résidentiel niché entre Courbevoie, Colombes et Nanterre, aux portes de La Défense. Cette « ville dans la ville » se distingue par son atmosphère villageoise remarquable : rues pavées du centre, marché animé (mercredi et samedi), commerces de bouche et restaurants de quartier créent un cadre de vie convivial unique dans la métropole parisienne. La gare Transilien J/L relie Paris-Saint-Lazare en 12 minutes, faisant de La Garenne un lieu de résidence privilégié des cadres de La Défense et des arrondissements parisiens. Les prix immobiliers restent plus accessibles qu'à Neuilly ou Levallois, attirant familles et jeunes actifs. TaxiNeo assure les transferts aéroport depuis La Garenne : Orly en 30 min (50-65 €), CDG en 35 min (50-70 €). Prise en charge à domicile, à la gare ou dans n'importe quel quartier de cette commune à taille humaine.",
    introEn: "La Garenne-Colombes, nicknamed 'la Garenne' by its 29,000 residents, is a residential gem nestled between Courbevoie, Colombes and Nanterre, at the gates of La Défense. This 'village within a city' stands out for its remarkable village atmosphere: cobbled centre streets, lively market (Wednesday and Saturday), local food shops and neighbourhood restaurants create a uniquely convivial setting in the Paris metropolis. The Transilien J/L station connects to Paris-Saint-Lazare in 12 minutes, making La Garenne a prime residence for La Défense executives and Parisian arrondissement workers. Property prices remain more accessible than Neuilly or Levallois, attracting families and young professionals. TaxiNeo provides airport transfers from La Garenne: Orly in 30 min (€50-65), CDG in 35 min (€50-70). Home pick-up, station pick-up or any neighbourhood in this human-scale town.",
    descriptionFr: "Avec TaxiNeo à La Garenne-Colombes, profitez de transferts aéroport porte-à-porte depuis votre village dans la ville. Orly en 30 min dès 50 €, CDG en 35 min dès 50 €. Nos chauffeurs connaissent chaque rue de La Garenne et vous prennent en charge à domicile, 24h/24.",
    descriptionEn: "With TaxiNeo in La Garenne-Colombes, enjoy door-to-door airport transfers from your village in the city. Orly in 30 min from €50, CDG in 35 min from €50. Our drivers know every La Garenne street and pick you up at home, 24/7.",
    metaDescriptionFr: "Taxi La Garenne-Colombes : Orly dès 50 €, CDG dès 50 €. Village prisé, La Défense. Prix fixe 24h/24. Réservez.",
    metaDescriptionEn: "Taxi La Garenne-Colombes: Orly from €50, CDG from €50. Sought-after village, La Défense. Fixed price 24/7. Book now.",
    heroSubtitleFr: "La Garenne-Colombes, village résidentiel prisé aux portes de La Défense. Transferts aéroport fiables et ponctuels, à prix fixe 24h/24.",
    heroSubtitleEn: "La Garenne-Colombes, sought-after residential village at La Défense's doorstep. Reliable, punctual airport transfers, fixed price 24/7.",
    whyUsFr: [
      { title: "Village & aéroport en 30 min", desc: "De votre rue pavée garennoise à Orly en 30 min (50-65 €) ou CDG en 35 min (50-70 €). Le charme du village, la rapidité du taxi." },
      { title: "La Défense à 10 min", desc: "Vous travaillez à La Défense ? Le taxi vous prend en charge au bureau ou chez vous à La Garenne. Même tarif fixe." },
      { title: "Familles bienvenues", desc: "Van 7 places pour les familles avec enfants et bagages. Sièges bébé sur demande. Réservation en ligne en 2 minutes." },
    ],
    whyUsEn: [
      { title: "Village to Airport in 30 min", desc: "From your cobbled La Garenne street to Orly in 30 min (€50-65) or CDG in 35 min (€50-70). Village charm, taxi speed." },
      { title: "La Défense 10 min Away", desc: "Working at La Défense? Taxi picks you up at office or home in La Garenne. Same fixed fare." },
      { title: "Families Welcome", desc: "7-seat van for families with children and luggage. Baby seats on request. Online booking in 2 minutes." },
    ],
  },
  "suresnes": {
    introFr: "Suresnes, commune de 49 000 habitants perchée sur les coteaux surplombant la Seine, possède un patrimoine exceptionnel et une identité forte. Le Mont-Valérien (162 m), point culminant de l'agglomération parisienne, abrite le Mémorial de la France combattante, haut lieu de la mémoire nationale où furent fusillés plus de 1 000 résistants pendant l'Occupation. Suresnes est aussi la seule commune d'Île-de-France à posséder un vignoble municipal en activité, le clos du Pas Saint-Maurice, dont la Fête des Vendanges (octobre) attire des milliers de visiteurs. Le Musée d'Histoire urbaine retrace l'évolution de la ville, notamment la remarquable cité-jardins des années 1920 conçue par Henri Sellier. Le cimetière américain de Suresnes honore les soldats américains des deux guerres mondiales. Le tramway T2 longe la Seine et relie La Défense au pont de Sèvres. TaxiNeo dessert Suresnes 24h/24 : Orly en 25 min (45-60 €), CDG en 40 min (60-80 €). Prise en charge même dans les ruelles étroites du Mont-Valérien.",
    introEn: "Suresnes, a town of 49,000 perched on hillsides overlooking the Seine, boasts exceptional heritage and a strong identity. Mont-Valérien (162 m), the Paris metropolitan area's highest point, houses the Fighting France Memorial, a key national remembrance site where over 1,000 resistance fighters were executed during the Occupation. Suresnes is also the only Île-de-France town with an active municipal vineyard — the Clos du Pas Saint-Maurice — whose Grape Harvest Festival (October) draws thousands of visitors. The Urban History Museum traces the town's evolution, notably the remarkable 1920s garden city designed by Henri Sellier. The Suresnes American Cemetery honours American soldiers from both World Wars. The T2 tramway runs along the Seine, connecting La Défense to Pont de Sèvres. TaxiNeo serves Suresnes 24/7: Orly in 25 min (€45-60), CDG in 40 min (€60-80). Pick-up even in Mont-Valérien's narrow lanes.",
    descriptionFr: "Avec TaxiNeo à Suresnes, profitez de transferts aéroport depuis les hauteurs du Mont-Valérien ou le centre-ville. Orly en 25 min dès 45 €, CDG en 40 min dès 60 €. Nos chauffeurs connaissent toutes les rues de Suresnes, même les plus étroites. Service 24h/24, prix fixe, bagages inclus.",
    descriptionEn: "With TaxiNeo in Suresnes, enjoy airport transfers from Mont-Valérien heights or the town centre. Orly in 25 min from €45, CDG in 40 min from €60. Our drivers know every Suresnes street, even the narrowest. 24/7 service, fixed price, luggage included.",
    metaDescriptionFr: "Taxi Suresnes : Orly dès 45 €, CDG dès 60 €. Mont-Valérien, vignoble, T2. Prix fixe 24h/24. Réservez en ligne.",
    metaDescriptionEn: "Taxi Suresnes: Orly from €45, CDG from €60. Mont-Valérien, vineyard, T2 tram. Fixed price 24/7. Book online.",
    heroSubtitleFr: "Suresnes, ville du Mont-Valérien, du vignoble et de la cité-jardins. Transferts aéroport directs depuis les coteaux jusqu'à Orly ou CDG, au prix fixe.",
    heroSubtitleEn: "Suresnes, town of Mont-Valérien, the vineyard and the garden city. Direct airport transfers from the hillsides to Orly or CDG, at fixed price.",
    whyUsFr: [
      { title: "Mont-Valérien & coteaux", desc: "Nos chauffeurs montent jusqu'aux hauteurs du Mont-Valérien, même dans les ruelles étroites. Prise en charge à votre porte, partout à Suresnes." },
      { title: "Orly en 25 minutes", desc: "Via l'A13 et l'A6, Orly est à seulement 25 min. Tarif fixe dès 45 €. Idéal pour les vols domestiques et européens." },
      { title: "Patrimoine & voyage", desc: "Visitez le vignoble ou le Mont-Valérien avant votre vol. CDG en 40 min dès 60 €. Van disponible pour familles et groupes." },
    ],
    whyUsEn: [
      { title: "Mont-Valérien & Hillsides", desc: "Our drivers reach Mont-Valérien heights, even narrow lanes. Door pick-up everywhere in Suresnes." },
      { title: "Orly in 25 Minutes", desc: "Via A13 and A6, Orly is just 25 min away. Fixed fare from €45. Ideal for domestic and European flights." },
      { title: "Heritage & Travel", desc: "Visit the vineyard or Mont-Valérien before your flight. CDG in 40 min from €60. Van available for families and groups." },
    ],
  },
  "saint-cloud": {
    introFr: "Saint-Cloud est une ville résidentielle d'exception nichée sur les coteaux dominant la Seine, à l'ouest immédiat de Paris. Célèbre dans le monde entier pour son Domaine national de 460 hectares dessiné par André Le Nôtre, la commune offre un cadre de vie alliant prestige historique et douceur de vivre. La Grande Cascade, chef-d'œuvre hydraulique de 1665, et les perspectives spectaculaires sur Paris depuis les terrasses du parc font de Saint-Cloud l'un des joyaux verts de l'Île-de-France. L'Hippodrome, temple du galop plat depuis 1901, accueille le Grand Prix de Saint-Cloud, événement majeur du calendrier hippique français. Le Musée des Avelines retrace l'histoire fascinante du château impérial disparu lors de la guerre de 1870. Desservi par le tramway T2 et le Transilien L, Saint-Cloud reste une commune où le taxi est indispensable pour les transferts aéroport, les déplacements professionnels vers La Défense et les sorties en soirée. TaxiNeo met à votre disposition des chauffeurs professionnels connaissant parfaitement chaque quartier — de Montretout au Val d'Or en passant par le centre historique.",
    introEn: "Saint-Cloud is an exceptional residential town perched on the hillsides overlooking the Seine, directly west of Paris. World-renowned for its 460-hectare Domaine National designed by André Le Nôtre, the commune offers a living environment combining historic prestige with gentle charm. The Grande Cascade, a 1665 hydraulic masterpiece, and the spectacular views of Paris from the park terraces make Saint-Cloud one of Île-de-France's green jewels. The Racecourse, home to flat racing since 1901, hosts the Grand Prix de Saint-Cloud, a major event in the French horse racing calendar. The Musée des Avelines chronicles the fascinating history of the imperial château destroyed during the Franco-Prussian War of 1870. Served by the T2 tramway and Transilien L, Saint-Cloud remains a commune where taxis are essential for airport transfers, professional trips to La Défense and evening outings. TaxiNeo provides professional drivers who know every neighbourhood — from Montretout to Val d'Or and the historic centre.",
    descriptionFr: "Avec TaxiNeo à Saint-Cloud, profitez de tarifs fixes pour vos transferts vers Orly (40-55 €, 25 min) et CDG (70-90 €, 40 min). Nos chauffeurs connaissent parfaitement le Domaine national, l'Hippodrome, le quartier Montretout et le Val d'Or. Service disponible 24h/24 et 7j/7, y compris pour les courses hippiques, les promenades au parc et les départs matinaux vers les aéroports. Véhicule berline ou van 7 places, bagages inclus, prise en charge devant votre porte.",
    descriptionEn: "With TaxiNeo in Saint-Cloud, enjoy fixed fares for your transfers to Orly (€40-55, 25 min) and CDG (€70-90, 40 min). Our drivers know the National Park, Racecourse, Montretout and Val d'Or neighbourhoods inside out. Service available 24/7, including for race meetings, park visits and early morning airport departures. Sedan or 7-seat van, luggage included, door-to-door pickup.",
    metaDescriptionFr: "Taxi à Saint-Cloud : Orly dès 40 €, CDG dès 70 €. Parc Le Nôtre, Hippodrome. Prix fixe, chauffeurs 24h/24.",
    metaDescriptionEn: "Taxi in Saint-Cloud: Orly from €40, CDG from €70. Le Nôtre Park, Racecourse. Fixed fares, drivers 24/7.",
    heroSubtitleFr: "Réservez votre taxi à Saint-Cloud, ville du Domaine national et de l'Hippodrome. Transferts Orly et CDG à prix fixe, 24h/24.",
    heroSubtitleEn: "Book your taxi in Saint-Cloud, home of the National Park and Racecourse. Orly and CDG transfers at fixed prices, 24/7.",
    whyUsFr: [{ title: "Domaine national accessible", desc: "Prise en charge à toutes les entrées du parc de 460 hectares, Hippodrome inclus." }, { title: "Transferts aéroport rapides", desc: "Orly en 25 min (40-55 €), CDG en 40 min (70-90 €). N118 et A86 à proximité immédiate." }, { title: "Service 24h/24 discret", desc: "Chauffeurs professionnels connaissant Montretout, Val d'Or et chaque recoin de Saint-Cloud." }],
    whyUsEn: [{ title: "National Park access", desc: "Pickup at all entrances of the 460-hectare park, Racecourse included." }, { title: "Fast airport transfers", desc: "Orly in 25 min (€40-55), CDG in 40 min (€70-90). N118 and A86 nearby." }, { title: "Discreet 24/7 service", desc: "Professional drivers who know Montretout, Val d'Or and every corner of Saint-Cloud." }],
  },

  "garches": {
    introFr: "Garches est une commune résidentielle de 18 000 habitants perchée sur les coteaux de la Seine, entre Saint-Cloud et Rueil-Malmaison. La ville est surtout connue pour abriter l'hôpital Raymond-Poincaré, établissement de l'AP-HP spécialisé dans la rééducation et le handicap, centre de référence national qui accueille des patients de toute la France. Le Pavillon de la Lanterne, résidence officielle du Premier ministre, témoigne du prestige de la commune. Garches borde la forêt domaniale de la Malmaison, prolongement du domaine cher à Joséphine de Beauharnais, offrant 200 hectares de chênes et de hêtres propices aux promenades. Ses rues calmes bordées de pavillons et de propriétés arborées séduisent les familles et les professionnels de santé. TaxiNeo dessert tous les quartiers de Garches — Centre, Buzenval, Les Colonnes, Procession — avec des chauffeurs habitués aux spécificités de la commune, notamment les accès à l'hôpital Poincaré. Que vous partiez en voyage, accompagniez un patient ou regagniez votre domicile, nos taxis sont disponibles 24h/24.",
    introEn: "Garches is a residential commune of 18,000 inhabitants perched on the Seine hillsides, between Saint-Cloud and Rueil-Malmaison. The town is best known for the Raymond-Poincaré Hospital, an AP-HP facility specialising in rehabilitation and disability, a national reference centre welcoming patients from across France. The Pavillon de la Lanterne, the Prime Minister's official residence, attests to the commune's prestige. Garches borders the 200-hectare Forêt de la Malmaison, an extension of the estate beloved by Joséphine de Beauharnais, offering oak and beech woodland ideal for walks. Its quiet streets lined with houses and tree-shaded properties attract families and healthcare professionals. TaxiNeo serves all Garches neighbourhoods — Centre, Buzenval, Les Colonnes, Procession — with drivers familiar with the commune's specifics, including Poincaré Hospital access. Whether travelling, accompanying a patient or heading home, our taxis are available 24/7.",
    descriptionFr: "Avec TaxiNeo à Garches, bénéficiez de tarifs fixes vers Orly (45-60 €, 25 min) et CDG (75-95 €, 45 min). Nos chauffeurs assurent la prise en charge à l'hôpital Raymond-Poincaré, au Pavillon de la Lanterne et dans tous les quartiers résidentiels. Service adapté aux accompagnants de patients, aux voyageurs d'affaires et aux familles. Van 7 places disponible, bagages inclus, 24h/24 et 7j/7.",
    descriptionEn: "With TaxiNeo in Garches, enjoy fixed fares to Orly (€45-60, 25 min) and CDG (€75-95, 45 min). Our drivers serve Poincaré Hospital, the Lanterne Pavilion and all residential areas. Service adapted for patient companions, business travellers and families. 7-seat van available, luggage included, 24/7.",
    metaDescriptionFr: "Taxi à Garches : Orly dès 45 €, CDG dès 75 €. Hôpital Poincaré, Lanterne. Prix fixe 24h/24, van disponible.",
    metaDescriptionEn: "Taxi in Garches: Orly from €45, CDG from €75. Poincaré Hospital, Lanterne. Fixed price 24/7, van available.",
    heroSubtitleFr: "Réservez votre taxi à Garches, commune de l'hôpital Poincaré et du Pavillon de la Lanterne. Orly et CDG à prix fixe.",
    heroSubtitleEn: "Book your taxi in Garches, home of Poincaré Hospital and the Lanterne Pavilion. Orly and CDG at fixed prices.",
    whyUsFr: [{ title: "Accès hôpital Poincaré", desc: "Prise en charge à l'entrée de l'hôpital. Chauffeurs habitués aux patients et accompagnants." }, { title: "Forêt et résidentiel", desc: "Desserte de tous les quartiers, du centre aux abords de la forêt de la Malmaison." }, { title: "Transferts aéroport fiables", desc: "Orly en 25 min (45-60 €), CDG en 45 min (75-95 €). Ponctualité garantie." }],
    whyUsEn: [{ title: "Poincaré Hospital access", desc: "Pickup at the hospital entrance. Drivers accustomed to patients and companions." }, { title: "Forest & residential", desc: "Service to all neighbourhoods, from the centre to the Malmaison Forest area." }, { title: "Reliable airport transfers", desc: "Orly in 25 min (€45-60), CDG in 45 min (€75-95). Punctuality guaranteed." }],
  },

  "chaville": {
    introFr: "Chaville est une commune de 20 000 habitants lovée entre deux des plus belles forêts d'Île-de-France : la forêt de Fausses-Reposes (600 hectares) et la forêt domaniale de Meudon. Cette position unique fait de Chaville l'un des poumons verts des Hauts-de-Seine. L'Étang d'Ursine, miroir d'eau caché sous la canopée de chênes centenaires, est un trésor naturel accessible à pied depuis le centre-ville. La commune est desservie par deux gares du Transilien — Chaville-Vélizy (ligne N) et Chaville Rive Droite (ligne L) — reliant Paris en 20 minutes. Mais pour les transferts aéroport, le taxi reste indispensable. Chaville bénéficie d'un accès particulièrement direct à la N118, qui traverse les forêts environnantes avant de rejoindre l'A6 vers Orly ou l'A86 vers CDG. TaxiNeo dessert tous les quartiers de Chaville, du centre aux secteurs forestiers, avec des chauffeurs qui connaissent chaque ruelle de cette ville verte et paisible.",
    introEn: "Chaville is a commune of 20,000 inhabitants nestled between two of Île-de-France's finest forests: the Forêt de Fausses-Reposes (600 hectares) and the Forêt de Meudon. This unique position makes Chaville one of the green lungs of the Hauts-de-Seine department. The Étang d'Ursine, a hidden pond beneath a centuries-old oak canopy, is a natural treasure accessible on foot from the town centre. The commune has two Transilien stations — Chaville-Vélizy (line N) and Chaville Rive Droite (line L) — connecting to Paris in 20 minutes. But for airport transfers, taxis remain essential. Chaville benefits from particularly direct access to the N118, which cuts through the surrounding forests before joining the A6 to Orly or the A86 to CDG. TaxiNeo serves all Chaville neighbourhoods, from the centre to forest areas, with drivers who know every lane of this green and peaceful town.",
    descriptionFr: "Avec TaxiNeo à Chaville, profitez de tarifs fixes vers Orly (35-50 €, 20 min) et CDG (70-95 €, 45 min). Accès direct à la N118 à travers les forêts. Nos chauffeurs desservent le centre, les deux gares, l'Étang d'Ursine et tous les quartiers forestiers. Service 24h/24, berline ou van 7 places, bagages inclus. Le trajet le plus court et le plus agréable vers Orly depuis l'ouest parisien.",
    descriptionEn: "With TaxiNeo in Chaville, enjoy fixed fares to Orly (€35-50, 20 min) and CDG (€70-95, 45 min). Direct N118 access through the forests. Our drivers serve the centre, both stations, Ursine Pond and all forest neighbourhoods. 24/7 service, sedan or 7-seat van, luggage included. The shortest and most pleasant route to Orly from western Paris.",
    metaDescriptionFr: "Taxi à Chaville : Orly dès 35 €, CDG dès 70 €. Forêts, Étang d'Ursine. Prix fixe, N118 directe, 24h/24.",
    metaDescriptionEn: "Taxi in Chaville: Orly from €35, CDG from €70. Forests, Ursine Pond. Fixed price, direct N118, 24/7.",
    heroSubtitleFr: "Réservez votre taxi à Chaville, entre la forêt de Fausses-Reposes et la forêt de Meudon. Orly et CDG à prix fixe.",
    heroSubtitleEn: "Book your taxi in Chaville, between Fausses-Reposes and Meudon forests. Orly and CDG at fixed prices.",
    whyUsFr: [{ title: "Accès N118 immédiat", desc: "En 5 min sur la voie rapide. Orly en 20 min, l'un des trajets les plus courts de l'ouest parisien." }, { title: "Cadre forestier unique", desc: "Prise en charge dans tous les quartiers, du centre aux abords de l'Étang d'Ursine." }, { title: "Deux gares, un taxi", desc: "Desserte de Chaville-Vélizy et Chaville Rive Droite. Complémentaire au Transilien pour les aéroports." }],
    whyUsEn: [{ title: "Immediate N118 access", desc: "On the expressway in 5 min. Orly in 20 min, one of the shortest trips from western Paris." }, { title: "Unique forest setting", desc: "Pickup in all areas, from the centre to the Ursine Pond surroundings." }, { title: "Two stations, one taxi", desc: "Serving Chaville-Vélizy and Chaville Rive Droite. Complementing Transilien for airports." }],
  },

  "sevres": {
    introFr: "Sèvres, 24 000 habitants au bord de la Seine, est une ville dont le nom résonne dans le monde entier grâce à sa célèbre Manufacture nationale de porcelaine, fondée en 1740 et toujours en activité. Les artisans de Sèvres perpétuent un savoir-faire unique : chaque pièce nécessite en moyenne 60 opérations manuelles. Le bleu de Sèvres, teinte iconique du XVIIIe siècle, est reconnu mondialement. Le Musée national de Céramique conserve 50 000 pièces allant de l'Antiquité à la création contemporaine. Le pont de Sèvres, terminus du métro 9, est un carrefour névralgique de l'ouest parisien desservi aussi par le tramway T2. L'Île Seguin, partagée avec Boulogne-Billancourt, accueille la Seine Musicale, salle de concert emblématique conçue par Shigeru Ban. TaxiNeo dessert tous les quartiers de Sèvres — Centre, Brancas, Croix-Bosset, Brimborion — avec des chauffeurs capables de prendre en charge devant la Manufacture, au pont de Sèvres ou sur le parvis de la Seine Musicale.",
    introEn: "Sèvres, with 24,000 inhabitants on the banks of the Seine, is a town whose name resonates worldwide thanks to its famous National Porcelain Manufacture, founded in 1740 and still active today. Sèvres artisans perpetuate a unique craft: each piece requires an average of 60 manual operations. Bleu de Sèvres, the iconic 18th-century shade, is recognised globally. The Musée national de Céramique holds 50,000 pieces from antiquity to contemporary creation. The Pont de Sèvres, metro 9 terminus, is a key junction in western Paris also served by the T2 tramway. Île Seguin, shared with Boulogne-Billancourt, hosts the Seine Musicale, Shigeru Ban's iconic concert hall. TaxiNeo serves all Sèvres neighbourhoods — Centre, Brancas, Croix-Bosset, Brimborion — with drivers able to pick up at the Manufacture, Pont de Sèvres or the Seine Musicale forecourt.",
    descriptionFr: "Avec TaxiNeo à Sèvres, profitez de tarifs fixes vers Orly (35-50 €, 20 min) et CDG (70-90 €, 40 min). Prise en charge à la Manufacture de porcelaine, au pont de Sèvres et à la Seine Musicale. Accès direct N118 depuis le pont de Sèvres. Service 24h/24, berline ou van 7 places. Transport d'objets fragiles (porcelaine, œuvres d'art) sur demande.",
    descriptionEn: "With TaxiNeo in Sèvres, enjoy fixed fares to Orly (€35-50, 20 min) and CDG (€70-90, 40 min). Pickup at the Porcelain Manufacture, Pont de Sèvres and Seine Musicale. Direct N118 access from Pont de Sèvres. 24/7 service, sedan or 7-seat van. Fragile item transport (porcelain, art) on request.",
    metaDescriptionFr: "Taxi à Sèvres : Orly dès 35 €, CDG dès 70 €. Manufacture, Seine Musicale. Prix fixe 24h/24, objets fragiles.",
    metaDescriptionEn: "Taxi in Sèvres: Orly from €35, CDG from €70. Manufacture, Seine Musicale. Fixed price 24/7, fragile items.",
    heroSubtitleFr: "Réservez votre taxi à Sèvres, cité de la porcelaine et de la Seine Musicale. Transferts Orly et CDG à prix fixe.",
    heroSubtitleEn: "Book your taxi in Sèvres, city of porcelain and the Seine Musicale. Orly and CDG transfers at fixed prices.",
    whyUsFr: [{ title: "Cité de la porcelaine", desc: "Prise en charge à la Manufacture, au Musée de la Céramique et sur l'Île Seguin." }, { title: "Pont de Sèvres stratégique", desc: "Accès direct N118 vers Orly en 20 min. Métro 9 et tramway T2 à proximité." }, { title: "Transport soigné", desc: "Objets fragiles (porcelaine, œuvres d'art) transportés avec couvertures de protection sur demande." }],
    whyUsEn: [{ title: "Porcelain city", desc: "Pickup at the Manufacture, Ceramics Museum and Île Seguin." }, { title: "Strategic Pont de Sèvres", desc: "Direct N118 access to Orly in 20 min. Metro 9 and T2 tramway nearby." }, { title: "Careful transport", desc: "Fragile items (porcelain, art) transported with protective blankets on request." }],
  },

  "ville-d-avray": {
    introFr: "Ville-d'Avray est un bijou résidentiel de 11 000 habitants qui incarne le charme discret de l'ouest parisien. Rendue célèbre par le peintre Jean-Baptiste Camille Corot, qui y vécut et y peignit certaines de ses plus belles toiles au XIXe siècle, la commune a conservé un caractère bucolique rare en Île-de-France. Les Étangs de Corot, classés site naturel protégé, sont deux plans d'eau entourés de saules et de chênes qui inspirèrent le maître de l'école de Barbizon — ses tableaux sont aujourd'hui au Louvre et au musée d'Orsay. La forêt de Fausses-Reposes enveloppe une grande partie de la commune, offrant un cadre de vie exceptionnel. Les rues sinueuses bordées de propriétés arborées, les villas d'artistes et le silence des sous-bois contrastent avec la proximité de Paris. La gare de Sèvres-Ville-d'Avray (Transilien L) relie la commune à Saint-Lazare en 20 minutes, mais le taxi est indispensable pour les aéroports. TaxiNeo dessert chaque recoin de Ville-d'Avray avec des chauffeurs qui connaissent les moindres chemins de cette commune confidentielle.",
    introEn: "Ville-d'Avray is a residential gem of 11,000 inhabitants that embodies the discreet charm of western Paris. Made famous by painter Jean-Baptiste Camille Corot, who lived here and painted some of his finest canvases in the 19th century, the commune has preserved a bucolic character rare in Île-de-France. The Étangs de Corot, classified as a protected natural site, are two ponds surrounded by willows and oaks that inspired the master of the Barbizon school — his paintings now hang in the Louvre and the Musée d'Orsay. The Forêt de Fausses-Reposes envelops much of the commune, offering an exceptional living environment. Winding streets lined with tree-shaded properties, artists' villas and the silence of the undergrowth contrast with the proximity of Paris. The Sèvres-Ville-d'Avray station (Transilien L) connects to Saint-Lazare in 20 minutes, but taxis are essential for airports. TaxiNeo serves every corner of Ville-d'Avray with drivers who know every path in this exclusive commune.",
    descriptionFr: "Avec TaxiNeo à Ville-d'Avray, profitez de tarifs fixes vers Orly (40-55 €, 22 min) et CDG (75-95 €, 45 min). Nos chauffeurs connaissent toutes les rues de cette commune confidentielle, des Étangs de Corot aux quartiers résidentiels les plus discrets. Service 24h/24, berline ou van 7 places avec sièges enfants disponibles. L'absence de congestion locale garantit un départ rapide vers la N118.",
    descriptionEn: "With TaxiNeo in Ville-d'Avray, enjoy fixed fares to Orly (€40-55, 22 min) and CDG (€75-95, 45 min). Our drivers know every street in this exclusive commune, from the Étangs de Corot to the most secluded residential areas. 24/7 service, sedan or 7-seat van with child seats available. Zero local congestion ensures a quick start towards the N118.",
    metaDescriptionFr: "Taxi à Ville-d'Avray : Orly dès 40 €, CDG dès 75 €. Étangs de Corot, forêt. Prix fixe, van familial, 24h/24.",
    metaDescriptionEn: "Taxi in Ville-d'Avray: Orly from €40, CDG from €75. Corot's Ponds, forest. Fixed price, family van, 24/7.",
    heroSubtitleFr: "Réservez votre taxi à Ville-d'Avray, village de Corot aux portes de Paris. Transferts Orly et CDG à prix fixe.",
    heroSubtitleEn: "Book your taxi in Ville-d'Avray, Corot's village on the doorstep of Paris. Orly and CDG transfers at fixed prices.",
    whyUsFr: [{ title: "Village de Corot", desc: "Prise en charge aux Étangs de Corot, à la Villa Thiébaut-Sisson et dans tous les quartiers." }, { title: "Zéro congestion locale", desc: "Pas d'embouteillage à Ville-d'Avray : sur la N118 en 5 min pour un trajet rapide vers Orly." }, { title: "Familles bienvenues", desc: "Van 7 places avec sièges enfants disponibles. Idéal pour les départs en vacances depuis Orly ou CDG." }],
    whyUsEn: [{ title: "Corot's village", desc: "Pickup at the Étangs de Corot, Villa Thiébaut-Sisson and all neighbourhoods." }, { title: "Zero local congestion", desc: "No traffic in Ville-d'Avray: on the N118 in 5 min for a fast trip to Orly." }, { title: "Families welcome", desc: "7-seat van with child seats available. Ideal for holiday departures from Orly or CDG." }],
  },
    "montrouge": {
    introFr: "Montrouge, commune de 50 000 habitants aux portes sud de Paris, se distingue par son identité culturelle forte et son atmosphère villageoise unique en proche banlieue. Immédiatement au-delà de la Porte d'Orléans, la ville est dominée par le Beffroi de Montrouge, ancien hôtel de ville transformé en centre d'art qui accueille chaque printemps le Salon de Montrouge, tremplin de l'art contemporain émergent depuis 1955. Avec une superficie de seulement 1,55 km², Montrouge est l'une des communes les plus densément peuplées de France, témoignant de son attractivité résidentielle. Le métro 4, prolongé jusqu'à Mairie de Montrouge en 2013, a renforcé la connexion avec le coeur de Paris. Le marché Brossolette (mercredi, vendredi, dimanche) est un rendez-vous incontournable pour les produits frais. Le quartier Haut-Mesnil, avec ses pavillons et ses résidences, séduit les familles, tandis que le secteur Plein Sud attire les jeunes actifs. TaxiNeo met à votre disposition des chauffeurs professionnels connaissant chaque recoin de Montrouge pour vos transferts aéroport et vos courses en ville.",
    introEn: "Montrouge, a commune of 50,000 residents at Paris's southern gates, stands out for its strong cultural identity and unique village atmosphere in the near suburbs. Just beyond Porte d'Orleans, the town is dominated by the Beffroi de Montrouge, a former town hall turned art centre hosting the prestigious Salon de Montrouge contemporary art showcase every spring since 1955. Covering just 1.55 km², Montrouge is one of France's most densely populated communes, reflecting its residential appeal. Metro line 4, extended to Mairie de Montrouge in 2013, strengthened the connection to central Paris. The Brossolette market (Wednesday, Friday, Sunday) is an unmissable destination for fresh produce. The Haut-Mesnil quarter with its houses and residences attracts families, while Plein Sud draws young professionals. TaxiNeo provides professional drivers who know every corner of Montrouge for your airport transfers and city rides.",
    descriptionFr: "Avec TaxiNeo à Montrouge, profitez d'un service de taxi professionnel au tarif fixe. Transfert Orly dès 25 € (18 min), CDG dès 55 € (35 min). Nos chauffeurs partenaires connaissent parfaitement la Porte d'Orléans, le Beffroi et chaque quartier de Montrouge. Prise en charge à votre porte, bagages inclus, disponible 24h/24 et 7j/7.",
    descriptionEn: "With TaxiNeo in Montrouge, enjoy professional taxi service at fixed fares. Orly transfer from €25 (18 min), CDG from €55 (35 min). Our partner drivers know Porte d'Orleans, the Beffroi and every Montrouge neighbourhood perfectly. Door-to-door pickup, luggage included, available 24/7.",
    metaDescriptionFr: "Taxi à Montrouge : transfert Orly dès 25 €, CDG dès 55 €. Chauffeurs pros, tarif fixe, 24h/24. Réservez en ligne.",
    metaDescriptionEn: "Taxi in Montrouge: Orly transfer from €25, CDG from €55. Pro drivers, fixed fares, 24/7. Book online.",
    heroSubtitleFr: "Réservez un taxi professionnel à Montrouge. Transferts aéroport au tarif fixe, prise en charge au Beffroi, Porte d'Orléans ou partout en ville.",
    heroSubtitleEn: "Book a professional taxi in Montrouge. Fixed-fare airport transfers, pickup at the Beffroi, Porte d'Orleans or anywhere in town.",
    whyUsFr: [
      { title: "Proximité Porte d'Orléans", desc: "Accès ultra-rapide au Périphérique pour des transferts aéroport express." },
      { title: "Connaissance locale", desc: "Nos chauffeurs connaissent chaque rue de Montrouge, du Beffroi au quartier Plein Sud." },
      { title: "Tarif fixe garanti", desc: "Prix annoncé à la réservation, sans compteur ni surprise. Orly dès 25 €." }
    ],
    whyUsEn: [
      { title: "Porte d'Orleans proximity", desc: "Ultra-fast Peripherique access for express airport transfers." },
      { title: "Local knowledge", desc: "Our drivers know every Montrouge street, from the Beffroi to Plein Sud quarter." },
      { title: "Guaranteed fixed fare", desc: "Price confirmed at booking, no meter, no surprises. Orly from €25." }
    ],
  },

    "malakoff": {
    introFr: "Malakoff, 31 000 habitants, est une commune des Hauts-de-Seine qui allie vie culturelle intense et cadre résidentiel agréable. Nommée d'après la tour érigée en référence à la bataille de Malakoff en Crimée (1855), la ville est surtout connue pour le Théâtre 71, scène nationale depuis 1971, qui programme chaque saison une quarantaine de spectacles de théâtre contemporain, danse et cirque. Le métro 13 (station Malakoff-Plateau de Vanves) relie la commune au centre de Paris en 20 minutes. Le tissu associatif malakoffiot est l'un des plus denses du département avec plus de 200 associations actives. Le marché du samedi matin, place du 11-Novembre, est un rendez-vous convivial apprécié des habitants. La résidence universitaire accueille des étudiants de toute l'Île-de-France. TaxiNeo vous propose des chauffeurs professionnels à Malakoff pour vos transferts aéroport (Orly dès 25 €, CDG dès 55 €) et vos courses en ville, avec un service disponible 24h/24.",
    introEn: "Malakoff, population 31,000, is a Hauts-de-Seine commune combining vibrant cultural life with a pleasant residential setting. Named after the tower erected in reference to the Battle of Malakoff in Crimea (1855), the town is best known for Theatre 71, a national stage since 1971, programming around forty contemporary theatre, dance and circus shows each season. Metro 13 (Malakoff-Plateau de Vanves station) connects the town to central Paris in 20 minutes. Malakoff's associative network is one of the densest in the department with over 200 active organisations. The Saturday morning market at Place du 11-Novembre is a convivial meeting point. The student residence welcomes students from across Ile-de-France. TaxiNeo offers professional drivers in Malakoff for airport transfers (Orly from €25, CDG from €55) and city rides, available 24/7.",
    descriptionFr: "Avec TaxiNeo à Malakoff, bénéficiez d'un taxi professionnel au tarif fixe. Transfert Orly dès 25 € (20 min), CDG dès 55 € (35 min). Prise en charge au Théâtre 71, Plateau de Vanves ou partout en ville. Bagages inclus, service 24h/24, réservation en ligne instantanée.",
    descriptionEn: "With TaxiNeo in Malakoff, enjoy professional taxi service at fixed fares. Orly transfer from €25 (20 min), CDG from €55 (35 min). Pickup at Theatre 71, Plateau de Vanves or anywhere in town. Luggage included, 24/7 service, instant online booking.",
    metaDescriptionFr: "Taxi à Malakoff : transfert Orly dès 25 €, CDG dès 55 €. Théâtre 71, métro 13. Tarif fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Malakoff: Orly transfer from €25, CDG from €55. Theatre 71, metro 13. Fixed fares, 24/7.",
    heroSubtitleFr: "Réservez un taxi professionnel à Malakoff. Transferts aéroport au tarif fixe, prise en charge au Théâtre 71 ou Plateau de Vanves.",
    heroSubtitleEn: "Book a professional taxi in Malakoff. Fixed-fare airport transfers, pickup at Theatre 71 or Plateau de Vanves.",
    whyUsFr: [
      { title: "Proximité métro 13", desc: "Accès rapide au Périphérique depuis Malakoff-Plateau de Vanves pour des transferts fluides." },
      { title: "Service culturel", desc: "Prise en charge après les spectacles du Théâtre 71, sans attente." },
      { title: "Tarif transparent", desc: "Prix fixe garanti sans compteur. Orly dès 25 €, CDG dès 55 €." }
    ],
    whyUsEn: [
      { title: "Metro 13 proximity", desc: "Quick Peripherique access from Malakoff-Plateau de Vanves for smooth transfers." },
      { title: "Cultural service", desc: "Pickup after Theatre 71 shows, no waiting." },
      { title: "Transparent pricing", desc: "Guaranteed fixed fare, no meter. Orly from €25, CDG from €55." }
    ],
  },

    "vanves": {
    introFr: "Vanves, plus petite commune des Hauts-de-Seine avec ses 155 hectares et 28 000 habitants, est un bijou résidentiel aux portes de Paris. La ville est dominée par le lycée Michelet, ancien domaine royal classé monument historique dont le parc de 6 hectares est un véritable poumon vert. Fondé en 1798 dans les bâtiments d'un château construit pour Louvois, ministre de Louis XIV, ce lycée prestigieux ouvre ses jardins à la française lors des Journées du patrimoine. Le parc Frédéric Pic offre une aire de jeux et un kiosque à musique dans une ambiance bucolique. La gare Vanves-Malakoff (Transilien N) relie Montparnasse en 8 minutes, et le métro 13 est à proximité. Le marché dominical anime le centre-ville chaque semaine. Malgré sa petite taille, Vanves affiche un dynamisme commercial remarquable avec ses rues piétonnes. TaxiNeo met à votre disposition des chauffeurs qui arrivent en quelques minutes depuis n'importe quel point de cette commune compacte.",
    introEn: "Vanves, the smallest commune in Hauts-de-Seine at just 155 hectares with 28,000 residents, is a residential gem at Paris's doorstep. The town is dominated by Lycee Michelet, a former royal estate classified as a historic monument whose 6-hectare park serves as a green lung. Founded in 1798 in buildings constructed for Louvois, Louis XIV's Minister of War, this prestigious school opens its French gardens during Heritage Days. Parc Frederic Pic offers a playground and bandstand in a bucolic setting. The Vanves-Malakoff station (Transilien N) reaches Montparnasse in 8 minutes, and metro 13 is nearby. A Sunday market enlivens the centre each week. Despite its compact size, Vanves boasts remarkable commercial dynamism with its pedestrian streets. TaxiNeo provides drivers who arrive within minutes from any point in this small commune.",
    descriptionFr: "Avec TaxiNeo à Vanves, profitez d'un taxi au tarif fixe dans la plus petite commune du 92. Transfert Orly dès 30 € (20 min), CDG dès 60 € (35 min). Prise en charge au lycée Michelet, gare Vanves-Malakoff ou n'importe où. Service 24h/24.",
    descriptionEn: "With TaxiNeo in Vanves, enjoy fixed-fare taxi service in the smallest commune of 92. Orly transfer from €30 (20 min), CDG from €60 (35 min). Pickup at Lycee Michelet, Vanves-Malakoff station or anywhere. 24/7 service.",
    metaDescriptionFr: "Taxi à Vanves : transfert Orly dès 30 €, CDG dès 60 €. Lycée Michelet, gare Vanves-Malakoff. Tarif fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Vanves: Orly transfer from €30, CDG from €60. Lycee Michelet, Vanves-Malakoff. Fixed fares, 24/7.",
    heroSubtitleFr: "Réservez un taxi professionnel à Vanves. Plus petite commune du 92, plus rapide service : transferts aéroport au tarif fixe.",
    heroSubtitleEn: "Book a professional taxi in Vanves. Smallest town in 92, fastest service: fixed-fare airport transfers.",
    whyUsFr: [
      { title: "Commune ultra-compacte", desc: "155 hectares : votre chauffeur est chez vous en quelques minutes, où que vous habitiez." },
      { title: "Patrimoine historique", desc: "Prise en charge au pied du lycée Michelet, monument historique, ou au parc Frédéric Pic." },
      { title: "Tarif fixe sans péage", desc: "Orly dès 30 €, CDG dès 60 €. Aucun péage vers Orly. Prix garanti." }
    ],
    whyUsEn: [
      { title: "Ultra-compact commune", desc: "155 hectares: your driver reaches you within minutes, wherever you live." },
      { title: "Historic heritage", desc: "Pickup at the foot of Lycee Michelet (historic monument) or Parc Frederic Pic." },
      { title: "Fixed fare, no tolls", desc: "Orly from €30, CDG from €60. No Orly tolls. Guaranteed price." }
    ],
  },

    "chatillon": {
    introFr: "Châtillon, 37 000 habitants, est une commune au coeur des Hauts-de-Seine qui mêle héritage scientifique et vie urbaine moderne. La ville abrite le terminus sud de la ligne 13 du métro (station Châtillon-Montrouge), l'un des hubs de transport majeurs du sud du département. Le Fort de Châtillon, construit entre 1874 et 1880, est un site historique exceptionnel : c'est ici que le Commissariat à l'énergie atomique (CEA) a installé ses premiers laboratoires en 1946 sous Frédéric Joliot-Curie pour mener les premières expériences nucléaires françaises. La Coulée verte, ancienne voie ferrée reconvertie en promenade paysagère, traverse la ville du nord au sud et offre un parcours piéton et cyclable apprécié. Le centre commercial de Châtillon et les commerces de l'avenue de Paris complètent l'offre urbaine. TaxiNeo propose des chauffeurs professionnels familiers de chaque quartier de Châtillon pour vos transferts aéroport et courses en ville.",
    introEn: "Chatillon, population 37,000, is a commune in the heart of Hauts-de-Seine blending scientific heritage with modern urban life. The town hosts the southern terminus of metro line 13 (Chatillon-Montrouge station), one of the major transport hubs in the department's south. The Fort de Chatillon, built between 1874 and 1880, is an exceptional historical site: in 1946, the Atomic Energy Commission (CEA) established its first laboratories here under Frederic Joliot-Curie for France's earliest nuclear experiments. The Coulee Verte, a former railway converted into a landscaped promenade, crosses the town north to south with walking and cycling paths. The shopping centre and Avenue de Paris shops complete the urban offer. TaxiNeo offers professional drivers familiar with every Chatillon neighbourhood for airport transfers and city rides.",
    descriptionFr: "Avec TaxiNeo à Châtillon, bénéficiez d'un taxi au tarif fixe. Transfert Orly dès 25 € (18 min via A86), CDG dès 60 € (40 min). Prise en charge au métro 13 Châtillon-Montrouge, au Fort ou à la Coulée verte. Service 24h/24, bagages inclus.",
    descriptionEn: "With TaxiNeo in Chatillon, enjoy fixed-fare taxi service. Orly transfer from €25 (18 min via A86), CDG from €60 (40 min). Pickup at metro 13 Chatillon-Montrouge, the Fort or Coulee Verte. 24/7 service, luggage included.",
    metaDescriptionFr: "Taxi à Châtillon : transfert Orly dès 25 €, CDG dès 60 €. Métro 13, Fort historique. Tarif fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Chatillon: Orly transfer from €25, CDG from €60. Metro 13, historic Fort. Fixed fares, 24/7.",
    heroSubtitleFr: "Réservez un taxi professionnel à Châtillon. Terminus métro 13, accès A86 rapide. Transferts aéroport au tarif fixe.",
    heroSubtitleEn: "Book a professional taxi in Chatillon. Metro 13 terminus, fast A86 access. Fixed-fare airport transfers.",
    whyUsFr: [
      { title: "Terminus métro 13", desc: "Point de repère connu de tous les chauffeurs. Prise en charge rapide et fiable." },
      { title: "Accès A86 direct", desc: "Connexion rapide à l'A86 pour des transferts Orly (18 min) et CDG (40 min)." },
      { title: "Héritage scientifique", desc: "Du Fort historique du CEA aux quartiers modernes, nos chauffeurs connaissent toute la ville." }
    ],
    whyUsEn: [
      { title: "Metro 13 terminus", desc: "Landmark known to all drivers. Fast and reliable pickup." },
      { title: "Direct A86 access", desc: "Quick A86 connection for Orly transfers (18 min) and CDG (40 min)." },
      { title: "Scientific heritage", desc: "From the historic CEA Fort to modern quarters, our drivers know the whole town." }
    ],
  },

    "clamart": {
    introFr: "Clamart, 53 000 habitants, est l'une des communes les plus vertes des Hauts-de-Seine, adossée à la vaste forêt domaniale de Meudon (1 100 hectares). Cette proximité avec la nature confère à la ville un cadre de vie exceptionnel, prisé des familles et des cadres souhaitant allier verdure et accessibilité urbaine. L'hôpital Antoine-Béclère (AP-HP), maternité de référence, est mondialement célèbre comme le berceau de la fécondation in vitro en France : c'est ici que le professeur Frydman a réalisé la première FIV française en 1982, donnant naissance à Amandine. Le tramway T6, inauguré en 2014, relie Clamart à Châtillon-Montrouge et Viroflay. Le quartier Percy abrite l'hôpital militaire Percy, référence nationale en traitement des brûlures. Le Jardin parisien de la Vallée, en contrebas du centre, offre un espace paysager remarquable. TaxiNeo met à votre disposition des chauffeurs experts pour vos transferts aéroport depuis Clamart : Orly en 18 min, CDG en 40 min.",
    introEn: "Clamart, population 53,000, is one of the greenest communes in Hauts-de-Seine, backed by the vast Meudon State Forest (1,100 hectares). This proximity to nature gives the town an exceptional living environment, prized by families and professionals seeking greenery with urban accessibility. Antoine-Beclere Hospital (AP-HP), a reference maternity unit, is world-famous as the birthplace of IVF in France: Professor Frydman performed France's first IVF here in 1982, resulting in baby Amandine. Tramway T6, inaugurated in 2014, connects Clamart to Chatillon-Montrouge and Viroflay. The Percy quarter houses the Percy Military Hospital, a national reference for burn treatment. The Jardin parisien de la Vallee below the centre provides a remarkable landscaped space. TaxiNeo offers expert drivers for airport transfers from Clamart: Orly in 18 min, CDG in 40 min.",
    descriptionFr: "Avec TaxiNeo à Clamart, profitez d'un taxi professionnel au tarif fixe. Transfert Orly dès 30 € (18 min via A86), CDG dès 65 € (40 min). Prise en charge à l'hôpital Béclère, quartier Percy, forêt de Meudon ou centre-ville. 24h/24.",
    descriptionEn: "With TaxiNeo in Clamart, enjoy professional fixed-fare taxi service. Orly transfer from €30 (18 min via A86), CDG from €65 (40 min). Pickup at Beclere Hospital, Percy quarter, Meudon forest or city centre. 24/7.",
    metaDescriptionFr: "Taxi à Clamart : transfert Orly dès 30 €, CDG dès 65 €. Forêt de Meudon, hôpital Béclère. Tarif fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Clamart: Orly transfer from €30, CDG from €65. Meudon forest, Beclere hospital. Fixed fares, 24/7.",
    heroSubtitleFr: "Réservez un taxi professionnel à Clamart. Aux portes de la forêt de Meudon, transferts aéroport au tarif fixe.",
    heroSubtitleEn: "Book a professional taxi in Clamart. At the gates of Meudon Forest, fixed-fare airport transfers.",
    whyUsFr: [
      { title: "Cadre nature unique", desc: "Aux portes de la forêt de Meudon (1 100 ha). Prise en charge dans tous les quartiers verdoyants." },
      { title: "Service hospitalier", desc: "Transferts depuis l'hôpital Béclère (AP-HP) et l'hôpital Percy. Disponible 24h/24." },
      { title: "Connexion T6", desc: "Le tramway T6 ne va pas à Orly : le taxi est la liaison directe la plus rapide (18 min)." }
    ],
    whyUsEn: [
      { title: "Unique natural setting", desc: "At the gates of Meudon Forest (1,100 ha). Pickup in all green neighbourhoods." },
      { title: "Hospital service", desc: "Transfers from Beclere Hospital (AP-HP) and Percy Hospital. Available 24/7." },
      { title: "T6 connection", desc: "T6 tram does not reach Orly: taxi is the fastest direct link (18 min)." }
    ],
  },

    "bagneux": {
    introFr: "Bagneux, 42 000 habitants, vit une transformation urbaine majeure depuis le prolongement de la ligne 4 du métro en 2024. Les deux nouvelles stations — Barbara (hommage à la chanteuse qui vécut à Bagneux) et Bagneux-Lucie Aubrac (hommage à la résistante) — ont placé la commune au coeur du réseau de transport parisien. La ZAC Victor Hugo, vaste projet de rénovation au nord de la ville, transforme l'ancien quartier d'habitat social en un éco-quartier mixte avec logements neufs, bureaux, commerces et espaces verts. Le grand cimetière parisien de Bagneux, 60 hectares, est le deuxième plus vaste de la région parisienne : y reposent notamment Louis Aragon et Elsa Triolet. Le quartier nord rénové illustre le renouveau de Bagneux, qui attire de plus en plus de jeunes familles et de primo-accédants grâce à des prix immobiliers encore accessibles et la nouvelle desserte métro. TaxiNeo accompagne cette dynamique avec des chauffeurs professionnels pour vos transferts aéroport : Orly en 15 min (dès 25 €), CDG en 38 min (dès 60 €).",
    introEn: "Bagneux, population 42,000, is undergoing a major urban transformation since the 2024 extension of metro line 4. Two new stations — Barbara (honouring the singer who lived in Bagneux) and Bagneux-Lucie Aubrac (honouring the Resistance heroine) — have placed the commune at the heart of the Parisian transport network. The ZAC Victor Hugo, a vast renewal project in the north, is transforming a former social housing area into a mixed eco-district with new homes, offices, shops and green spaces. The Grand Cimetiere Parisien de Bagneux, spanning 60 hectares, is the second largest in the Paris region, housing notable figures including Louis Aragon and Elsa Triolet. The renovated north quarter illustrates Bagneux's renewal, attracting young families and first-time buyers with still-affordable property prices and the new metro. TaxiNeo supports this momentum with professional drivers for airport transfers: Orly in 15 min (from €25), CDG in 38 min (from €60).",
    descriptionFr: "Avec TaxiNeo à Bagneux, profitez d'un taxi au tarif fixe. Transfert Orly dès 25 € (15 min via A6), CDG dès 60 € (38 min). Prise en charge aux stations Barbara, Lucie Aubrac, ZAC Victor Hugo ou partout en ville. 24h/24.",
    descriptionEn: "With TaxiNeo in Bagneux, enjoy fixed-fare taxi service. Orly transfer from €25 (15 min via A6), CDG from €60 (38 min). Pickup at Barbara station, Lucie Aubrac, ZAC Victor Hugo or anywhere in town. 24/7.",
    metaDescriptionFr: "Taxi à Bagneux : transfert Orly dès 25 €, CDG dès 60 €. Métro 4 prolongé, ZAC Victor Hugo. Tarif fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Bagneux: Orly transfer from €25, CDG from €60. Metro 4 extended, ZAC Victor Hugo. Fixed fares, 24/7.",
    heroSubtitleFr: "Réservez un taxi professionnel à Bagneux. Métro 4 prolongé, mais le taxi reste le plus rapide vers les aéroports.",
    heroSubtitleEn: "Book a professional taxi in Bagneux. Metro 4 extended, but taxi remains fastest to the airports.",
    whyUsFr: [
      { title: "Métro 4 prolongé", desc: "Bagneux est désormais connectée à Paris, mais pas aux aéroports. Le taxi comble ce manque." },
      { title: "Ville en renouveau", desc: "ZAC Victor Hugo, quartier nord rénové : nos chauffeurs connaissent le nouveau Bagneux." },
      { title: "Orly en 15 min", desc: "L'un des transferts Orly les plus courts du 92. Tarif fixe dès 25 €, sans péage." }
    ],
    whyUsEn: [
      { title: "Metro 4 extended", desc: "Bagneux now connects to Paris, but not airports. Taxi fills this gap." },
      { title: "Renewing town", desc: "ZAC Victor Hugo, renovated north quarter: our drivers know the new Bagneux." },
      { title: "Orly in 15 min", desc: "One of the shortest Orly transfers in 92. Fixed fare from €25, no tolls." }
    ],
  },
  "fontenay-aux-roses": {
    introFr: "Fontenay-aux-Roses, charmante commune de 24 000 habitants nichée dans le sud des Hauts-de-Seine, tire son nom des cultures de roses qui firent sa renommée dès le XVIIe siècle. La Roseraie municipale, avec ses 3 000 rosiers de 300 variétés, perpétue cette tradition horticole unique en Île-de-France, offrant aux promeneurs un spectacle enchanteur d'avril à octobre dans le parc du Panorama. Fontenay-aux-Roses est également un haut lieu de la recherche scientifique française grâce au site historique du CEA Paris-Saclay, fondé en 1946 par le prix Nobel Frédéric Joliot-Curie. Ce centre, qui emploie près de 5 000 chercheurs et ingénieurs, a joué un rôle fondateur dans le développement de l'énergie nucléaire civile française. La gare RER B relie Fontenay au cœur de Paris en 25 minutes, faisant de cette ville pavillonnaire un lieu de résidence prisé des familles et des scientifiques. Le quartier de Scarron, avec ses maisons à jardin et ses rues calmes, incarne le charme résidentiel de cette commune où il fait bon vivre. TaxiNeo propose des transferts depuis Fontenay-aux-Roses vers les aéroports d'Orly (dès 20 €, 15 min) et de CDG (dès 65 €, 40 min), avec prise en charge à domicile 24h/24.",
    introEn: "Fontenay-aux-Roses, a charming commune of 24,000 inhabitants nestled in the southern Hauts-de-Seine, owes its name to the rose cultivation that made it famous since the 17th century. The Municipal Rose Garden (Roseraie), with 3,000 rose bushes of 300 varieties, perpetuates this unique horticultural tradition in the Paris region, offering visitors an enchanting display from April to October in the Panorama park. Fontenay-aux-Roses is also a major centre for French scientific research, home to the historic CEA Paris-Saclay site founded in 1946 by Nobel laureate Frédéric Joliot-Curie. This facility, employing some 5,000 researchers and engineers, played a founding role in developing France's civilian nuclear energy programme. The RER B station connects Fontenay to central Paris in 25 minutes, making this suburban town a sought-after residence for families and scientists alike. The Scarron district, with its houses and quiet streets, embodies the residential charm of this commune. TaxiNeo offers transfers from Fontenay-aux-Roses to Orly (from €20, 15 min) and CDG (from €65, 40 min), with 24/7 door-to-door pickup.",
    descriptionFr: "Avec TaxiNeo à Fontenay-aux-Roses, bénéficiez de transferts aéroport au tarif fixe. Orly à partir de 20 €, CDG à partir de 65 €. Nos chauffeurs professionnels connaissent parfaitement Fontenay — du quartier du CEA Paris-Saclay à Scarron en passant par la Roseraie. Prise en charge à votre porte, dépose au terminal, bagages inclus. Le RER B + Orlyval prend 35-40 min avec correspondance ; notre taxi vous y emmène en 15 min. Service disponible 24h/24, 7j/7, y compris les jours fériés et pour les vols matinaux.",
    descriptionEn: "With TaxiNeo in Fontenay-aux-Roses, enjoy fixed-fare airport transfers. Orly from €20, CDG from €65. Our professional drivers know Fontenay inside out — from the CEA Paris-Saclay campus to Scarron and the Rose Garden. Door-to-door pickup, terminal drop-off, luggage included. RER B + Orlyval takes 35-40 min with a change; our taxi gets you there in 15 min. Available 24/7 including holidays and early morning flights.",
    metaDescriptionFr: "Taxi à Fontenay-aux-Roses : Orly dès 20 €, CDG dès 65 €. CEA, Roseraie, RER B. Prix fixe, 24h/24. Réservez en ligne.",
    metaDescriptionEn: "Taxi in Fontenay-aux-Roses: Orly from €20, CDG from €65. CEA, Rose Garden, RER B. Fixed price, 24/7. Book online.",
    heroSubtitleFr: "Transferts aéroport et courses en ville depuis Fontenay-aux-Roses. CEA Paris-Saclay, Roseraie, RER B. Tarifs fixes, chauffeurs professionnels, disponible 24h/24.",
    heroSubtitleEn: "Airport transfers and city rides from Fontenay-aux-Roses. CEA Paris-Saclay, Rose Garden, RER B. Fixed fares, professional drivers, available 24/7.",
    whyUsFr: [{ title: "Prise en charge au CEA", desc: "Nos chauffeurs récupèrent les chercheurs et ingénieurs directement à l'entrée du CEA Paris-Saclay, site historique de Fontenay-aux-Roses." }, { title: "15 min vers Orly", desc: "Fontenay est à seulement 12 km d'Orly. Trajet direct via D906/A6, sans péage, dès 20 €." }, { title: "Service 24h/24 pour vols matinaux", desc: "Les chercheurs du CEA voyagent souvent tôt. Taxi disponible dès 4h du matin, réservation la veille." }],
    whyUsEn: [{ title: "Pick-up at CEA", desc: "Our drivers collect researchers and engineers directly at the CEA Paris-Saclay entrance in Fontenay-aux-Roses." }, { title: "15 min to Orly", desc: "Fontenay is just 12 km from Orly. Direct route via D906/A6, no tolls, from €20." }, { title: "24/7 service for early flights", desc: "CEA researchers often travel early. Taxi available from 4am, book the night before." }],
  },

  "sceaux": {
    introFr: "Sceaux, ville d'art et d'histoire de 20 000 habitants, est mondialement connue pour son parc exceptionnel de 181 hectares, chef-d'œuvre paysager d'André Le Nôtre créé au XVIIe siècle pour le ministre Colbert. Ce domaine classé monument historique abrite un château reconstruit au XIXe siècle hébergeant le Musée de l'Île-de-France, l'Orangerie baroque et le Pavillon de l'Aurore orné de peintures de Charles Le Brun. Chaque printemps, début avril, les cerisiers japonais du parc offrent un spectacle féerique lors du Hanami, attirant des dizaines de milliers de visiteurs qui pique-niquent sous les nuages de fleurs roses et blanches — un événement devenu incontournable en Île-de-France, le plus grand rassemblement de Hanami en Europe. Le Lycée Lakanal, fondé en 1885, est l'une des institutions de classes préparatoires les plus prestigieuses de France, ayant formé de nombreux normaliens et polytechniciens. Le marché historique de Sceaux, tenu depuis le XIXe siècle, rassemble producteurs locaux et artisans chaque mercredi et samedi matin. La gare RER B relie Sceaux au centre de Paris en 20 minutes. TaxiNeo assure des transferts depuis Sceaux vers Orly (dès 20 €, 15 min) et CDG (dès 70 €, 40 min), avec un service 24h/24.",
    introEn: "Sceaux, a town of art and history with 20,000 inhabitants, is world-renowned for its exceptional 181-hectare park, a landscape masterpiece by André Le Nôtre created in the 17th century for minister Colbert. This classified estate features a 19th-century rebuilt château housing the Musée de l'Île-de-France, a baroque Orangerie, and the Pavilion of Dawn with Charles Le Brun paintings. Each April, the park's Japanese cherry trees create a magical spectacle during the Hanami, drawing tens of thousands of visitors who picnic under clouds of pink and white blossoms — Europe's largest Hanami gathering and an unmissable Île-de-France event. Lycée Lakanal (founded 1885) is one of France's most prestigious preparatory schools. The historic Sceaux market has gathered local producers every Wednesday and Saturday since the 19th century. The RER B connects to central Paris in 20 minutes. TaxiNeo provides transfers from Sceaux to Orly (from €20, 15 min) and CDG (from €70, 40 min), 24/7 service.",
    descriptionFr: "Avec TaxiNeo à Sceaux, profitez de transferts aéroport au tarif fixe. Orly à partir de 20 €, CDG à partir de 70 €. Nos chauffeurs connaissent chaque recoin de Sceaux — du centre-ville au quartier des Blagis, des abords du Parc aux environs du Lycée Lakanal. Prise en charge à votre porte, dépose au terminal, bagages inclus. En avril pendant le Hanami, nous adaptons nos itinéraires pour éviter l'affluence autour du Parc. Service disponible 24h/24, van 7 places sur demande.",
    descriptionEn: "With TaxiNeo in Sceaux, enjoy fixed-fare airport transfers. Orly from €20, CDG from €70. Our drivers know every corner of Sceaux — from the town centre to Les Blagis, from the park surroundings to the Lycée Lakanal area. Door-to-door pickup, terminal drop-off, luggage included. During April's Hanami, we adapt routes to avoid park crowds. Available 24/7, 7-seat van on request.",
    metaDescriptionFr: "Taxi à Sceaux : Orly dès 20 €, CDG dès 70 €. Parc de Sceaux, Hanami, Lycée Lakanal. Prix fixe, 24h/24. Réservez.",
    metaDescriptionEn: "Taxi in Sceaux: Orly from €20, CDG from €70. Parc de Sceaux, Hanami, Lycée Lakanal. Fixed price, 24/7. Book online.",
    heroSubtitleFr: "Transferts aéroport et courses en ville depuis Sceaux. Parc de Sceaux Le Nôtre, Hanami, Lycée Lakanal. Tarifs fixes, chauffeurs professionnels, 24h/24.",
    heroSubtitleEn: "Airport transfers and city rides from Sceaux. Parc de Sceaux Le Nôtre, Hanami, Lycée Lakanal. Fixed fares, professional drivers, 24/7.",
    whyUsFr: [{ title: "Experts du Parc de Sceaux", desc: "Nos chauffeurs connaissent les accès au Parc, les zones de dépose et les itinéraires alternatifs pendant le Hanami en avril." }, { title: "Le Nôtre à 15 min d'Orly", desc: "Sceaux est à 12 km d'Orly. Trajet direct via D920/A6, sans péage, dès 20 €." }, { title: "Familles et étudiants", desc: "Van 7 places pour les familles. Tarifs accessibles pour les étudiants de Lakanal en départ de vacances." }],
    whyUsEn: [{ title: "Parc de Sceaux experts", desc: "Our drivers know park access points, drop-off zones and alternative routes during April Hanami." }, { title: "Le Nôtre, 15 min from Orly", desc: "Sceaux is 12 km from Orly. Direct route via D920/A6, no tolls, from €20." }, { title: "Families and students", desc: "7-seat van for families. Affordable fares for Lakanal students heading on holiday." }],
  },

  "bourg-la-reine": {
    introFr: "Bourg-la-Reine, commune de 22 000 habitants au cœur du sud des Hauts-de-Seine, occupe une position stratégique dans le réseau de transport francilien grâce à sa gare RER B, nœud ferroviaire majeur où la ligne se divise en deux branches — vers Robinson et vers Saint-Rémy-lès-Chevreuse. Cette centralité historique fait de Bourg-la-Reine un point de passage quotidien pour des dizaines de milliers de voyageurs. La ville porte l'empreinte d'André Derain (1880-1954), l'un des cofondateurs du mouvement fauviste, qui bouleversa l'histoire de l'art au début du XXe siècle en libérant la couleur de sa fonction descriptive. Derain vécut à Bourg-la-Reine de 1935 à sa mort, y créant certaines de ses œuvres les plus remarquables dans son atelier de la rue du Docteur-Léray. La commune borde le Parc de Sceaux au sud-ouest, offrant aux résidents un accès direct aux 181 hectares de jardins Le Nôtre. Le marché de Bourg-la-Reine (mercredi et samedi matin) est réputé pour la qualité de ses producteurs locaux. TaxiNeo assure des transferts depuis Bourg-la-Reine vers Orly (dès 18 €, 14 min) et CDG (dès 65 €, 38 min), le tout au tarif fixe.",
    introEn: "Bourg-la-Reine, a commune of 22,000 inhabitants at the heart of the southern Hauts-de-Seine, holds a strategic position in the Paris transport network thanks to its RER B station, a major railway junction where the line splits into two branches — towards Robinson and Saint-Rémy-lès-Chevreuse. This historic centrality makes Bourg-la-Reine a daily transit point for tens of thousands of commuters. The town bears the mark of André Derain (1880-1954), co-founder of the Fauvist movement, who revolutionised early 20th-century art by freeing colour from its descriptive function. Derain lived in Bourg-la-Reine from 1935 until his death, creating some of his most remarkable works in his studio on rue du Docteur-Léray. The commune borders the Parc de Sceaux, giving residents direct access to 181 hectares of Le Nôtre gardens. The Bourg-la-Reine market (Wednesday and Saturday mornings) is known for its quality local producers. TaxiNeo provides transfers from Bourg-la-Reine to Orly (from €18, 14 min) and CDG (from €65, 38 min), all at fixed fares.",
    descriptionFr: "Avec TaxiNeo à Bourg-la-Reine, profitez de transferts aéroport parmi les plus courts et les plus abordables des Hauts-de-Seine. Orly à partir de 18 €, CDG à partir de 65 €. Grâce à la position centrale de Bourg-la-Reine, le trajet vers Orly ne prend que 14 minutes. Nos chauffeurs connaissent les raccourcis locaux et évitent la D920 quand elle est encombrée. Prise en charge à votre porte — gare RER, centre-ville ou côté Parc de Sceaux. Bagages inclus, service 24h/24.",
    descriptionEn: "With TaxiNeo in Bourg-la-Reine, enjoy some of the shortest and most affordable airport transfers in Hauts-de-Seine. Orly from €18, CDG from €65. Thanks to Bourg-la-Reine's central position, the Orly trip takes just 14 minutes. Our drivers know local shortcuts and avoid the D920 when congested. Door-to-door pickup — RER station, town centre or Parc de Sceaux side. Luggage included, 24/7 service.",
    metaDescriptionFr: "Taxi à Bourg-la-Reine : Orly dès 18 €, CDG dès 65 €. Nœud RER B, André Derain, Parc de Sceaux. Prix fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Bourg-la-Reine: Orly from €18, CDG from €65. RER B hub, André Derain, Parc de Sceaux. Fixed price, 24/7.",
    heroSubtitleFr: "Transferts aéroport et courses en ville depuis Bourg-la-Reine. Nœud RER B, André Derain, Parc de Sceaux. Tarifs fixes, 24h/24.",
    heroSubtitleEn: "Airport transfers and city rides from Bourg-la-Reine. RER B hub, André Derain, Parc de Sceaux. Fixed fares, 24/7.",
    whyUsFr: [{ title: "14 min vers Orly, dès 18 €", desc: "Bourg-la-Reine est à seulement 11 km d'Orly. L'un des transferts aéroport les plus courts et abordables des Hauts-de-Seine." }, { title: "Nœud RER B", desc: "Prise en charge rapide grâce à la position centrale de la ville. Chauffeur en moins de 10 min." }, { title: "Proximité Parc de Sceaux", desc: "Les résidents côté Parc bénéficient d'un accès encore plus rapide à la D920 vers Orly." }],
    whyUsEn: [{ title: "14 min to Orly, from €18", desc: "Bourg-la-Reine is just 11 km from Orly. One of the shortest and most affordable airport transfers in Hauts-de-Seine." }, { title: "RER B hub", desc: "Quick pick-up thanks to the town's central position. Driver within 10 min." }, { title: "Near Parc de Sceaux", desc: "Residents on the park side enjoy even faster D920 access to Orly." }],
  },

  "le-plessis-robinson": {
    introFr: "Le Plessis-Robinson, commune de 29 000 habitants dans le sud des Hauts-de-Seine, possède une identité architecturale unique en Île-de-France. La Cité-jardin, construite entre 1924 et 1939, est un ensemble remarquable de logements sociaux de style Art Déco inscrit à l'inventaire des monuments historiques. Ses rues portant des noms de fleurs — rue des Bleuets, rue des Glycines, rue des Pâquerettes —, ses jardins partagés, ses façades ornées de briques polychromes et de bas-reliefs constituent un témoignage exceptionnel de l'urbanisme utopique de l'entre-deux-guerres français. Plus récemment, la ville s'est dotée du quartier du Cœur de Ville, reconstruction contemporaine dans un style néo-haussmannien qui a remporté le Grand Prix national de l'urbanisme. L'Étang Colbert, miroir d'eau paisible bordé de saules et de promenades, offre un cadre bucolique au centre de la commune. La forêt domaniale de Verrières, 135 hectares de chênes et de châtaigniers, s'étend au sud. Le restaurant Le Plessis, guinguette reconstituée sur les bords de l'Étang, propose une cuisine traditionnelle dans un cadre champêtre. TaxiNeo dessert Le Plessis-Robinson vers Orly (dès 22 €, 15 min) et CDG (dès 65 €, 42 min).",
    introEn: "Le Plessis-Robinson, a commune of 29,000 inhabitants in the southern Hauts-de-Seine, boasts a truly unique architectural identity in the Paris region. The Cité-jardin (Garden City), built between 1924 and 1939, is a remarkable Art Deco social housing ensemble listed as a historic monument. Its streets named after flowers — rue des Bleuets (Cornflowers), rue des Glycines (Wisteria), rue des Pâquerettes (Daisies) —, shared gardens, and facades adorned with polychrome bricks and bas-reliefs offer an exceptional testimony to French interwar utopian urbanism. More recently, the Cœur de Ville district, a contemporary reconstruction in neo-Haussmann style, won the Grand Prix national for urbanism. The Étang Colbert, a peaceful pond bordered by willows and walking paths, provides a bucolic setting in the town centre. The 135-hectare Verrières state forest of oaks and chestnuts extends to the south. TaxiNeo serves Le Plessis-Robinson to Orly (from €22, 15 min) and CDG (from €65, 42 min).",
    descriptionFr: "Avec TaxiNeo au Plessis-Robinson, profitez de transferts aéroport au tarif fixe depuis la Cité-jardin Art Déco, le Cœur de Ville ou les bords de l'Étang Colbert. Orly à partir de 22 €, CDG à partir de 65 €. Le Plessis-Robinson n'ayant pas de gare RER directe, le taxi est le mode de transport le plus adapté pour rejoindre les aéroports. Nos chauffeurs connaissent les rues fleuries de la Cité-jardin et vous conduisent à Orly en 15 min. Service 24h/24, van disponible.",
    descriptionEn: "With TaxiNeo in Le Plessis-Robinson, enjoy fixed-fare airport transfers from the Art Deco Garden City, Cœur de Ville or the Étang Colbert shores. Orly from €22, CDG from €65. With no direct RER station, the taxi is the most suitable transport for reaching airports. Our drivers know the flower-named streets of the Garden City and get you to Orly in 15 min. 24/7 service, van available.",
    metaDescriptionFr: "Taxi au Plessis-Robinson : Orly dès 22 €, CDG dès 65 €. Cité-jardin Art Déco, Étang Colbert. Prix fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Le Plessis-Robinson: Orly from €22, CDG from €65. Art Deco Garden City, Étang Colbert. Fixed price, 24/7.",
    heroSubtitleFr: "Transferts aéroport et courses en ville depuis Le Plessis-Robinson. Cité-jardin Art Déco, Étang Colbert, forêt de Verrières. Tarifs fixes, 24h/24.",
    heroSubtitleEn: "Airport transfers and city rides from Le Plessis-Robinson. Art Deco Garden City, Étang Colbert, Verrières forest. Fixed fares, 24/7.",
    whyUsFr: [{ title: "Pas de RER ? Pas de souci", desc: "Le Plessis-Robinson n'a pas de gare RER directe. Le taxi est la solution naturelle pour vos transferts aéroport." }, { title: "Connaissance de la Cité-jardin", desc: "Nos chauffeurs naviguent sans hésiter dans les rues fleuries de la Cité-jardin et le nouveau Cœur de Ville." }, { title: "Forêt de Verrières, Étang Colbert", desc: "Prise en charge dans tous les quartiers, y compris les secteurs résidentiels proches de la forêt et de l'étang." }],
    whyUsEn: [{ title: "No RER? No problem", desc: "Le Plessis-Robinson has no direct RER station. Taxi is the natural solution for your airport transfers." }, { title: "Garden City expertise", desc: "Our drivers navigate the flower-named streets of the Garden City and new Cœur de Ville with ease." }, { title: "Verrières forest, Étang Colbert", desc: "Pick-up from all districts, including residential areas near the forest and pond." }],
  },

  "chatenay-malabry": {
    introFr: "Châtenay-Malabry, commune de 34 000 habitants dans le sud des Hauts-de-Seine, est un lieu d'exception où patrimoine littéraire et richesse botanique se conjuguent harmonieusement. La Maison de Chateaubriand, nichée dans le domaine de la Vallée-aux-Loups, fut la résidence de l'écrivain François-René de Chateaubriand de 1807 à 1818. C'est ici, dans ce refuge romantique entouré d'un parc de 14 hectares qu'il planta lui-même d'essences rares rapportées de ses voyages, qu'il rédigea une partie des Mémoires d'outre-tombe, chef-d'œuvre fondateur du romantisme français. La demeure, classée monument historique, accueille des expositions littéraires toute l'année. L'Arboretum de la Vallée-aux-Loups, joyau botanique adjacent, rassemble plus de 500 espèces d'arbres et d'arbustes sur 12,7 hectares — l'une des plus riches collections dendrologiques d'Europe, avec des spécimens centenaires de séquoias géants, de cèdres du Liban et de ginkgos biloba. La commune a abrité le campus de l'École Centrale Paris jusqu'en 2017, avant son déménagement vers le plateau de Saclay. La Coulée verte, promenade paysagère de 4 kilomètres, traverse Châtenay du nord au sud. TaxiNeo assure des transferts vers Orly (dès 22 €, 15 min) et CDG (dès 68 €, 42 min).",
    introEn: "Châtenay-Malabry, a commune of 34,000 inhabitants in the southern Hauts-de-Seine, is an exceptional place where literary heritage and botanical richness harmoniously intertwine. The Maison de Chateaubriand, nestled in the Vallée-aux-Loups estate, was the residence of writer François-René de Chateaubriand from 1807 to 1818. It was here, in this romantic refuge surrounded by a 14-hectare park he planted himself with rare species from his travels, that he wrote part of Mémoires d'outre-tombe, the founding masterpiece of French Romanticism. The classified historic house hosts literary exhibitions year-round. The adjacent Arboretum de la Vallée-aux-Loups, a botanical jewel, gathers over 500 tree and shrub species across 12.7 hectares — one of Europe's richest dendrological collections, featuring century-old giant sequoias, Lebanese cedars and ginkgo bilobas. The commune hosted the École Centrale Paris campus until 2017. The 4 km Coulée verte greenway crosses Châtenay from north to south. TaxiNeo provides transfers to Orly (from €22, 15 min) and CDG (from €68, 42 min).",
    descriptionFr: "Avec TaxiNeo à Châtenay-Malabry, profitez de transferts aéroport au tarif fixe depuis la Vallée-aux-Loups, la Butte Rouge ou le centre-ville. Orly à partir de 22 €, CDG à partir de 68 €. Châtenay n'ayant pas de gare RER directe, le taxi est le mode de transport privilégié pour l'aéroport. Nos chauffeurs vous prennent en charge devant la Maison de Chateaubriand, à la sortie de l'Arboretum ou dans votre quartier. 15 min vers Orly, 42 min vers CDG. Service 24h/24.",
    descriptionEn: "With TaxiNeo in Châtenay-Malabry, enjoy fixed-fare airport transfers from Vallée-aux-Loups, Butte Rouge or town centre. Orly from €22, CDG from €68. With no direct RER station, taxi is the preferred transport to airports. Our drivers pick you up at the Maison de Chateaubriand, at the Arboretum exit or in your neighbourhood. 15 min to Orly, 42 min to CDG. 24/7 service.",
    metaDescriptionFr: "Taxi à Châtenay-Malabry : Orly dès 22 €, CDG dès 68 €. Chateaubriand, Arboretum, Coulée verte. Prix fixe, 24h/24.",
    metaDescriptionEn: "Taxi in Châtenay-Malabry: Orly from €22, CDG from €68. Chateaubriand, Arboretum, Coulée verte. Fixed price, 24/7.",
    heroSubtitleFr: "Transferts aéroport et courses en ville depuis Châtenay-Malabry. Maison de Chateaubriand, Arboretum, Vallée-aux-Loups. Tarifs fixes, 24h/24.",
    heroSubtitleEn: "Airport transfers and city rides from Châtenay-Malabry. Maison de Chateaubriand, Arboretum, Vallée-aux-Loups. Fixed fares, 24/7.",
    whyUsFr: [{ title: "Patrimoine Chateaubriand", desc: "Prise en charge à la Maison de Chateaubriand ou à la sortie de l'Arboretum. Nos chauffeurs connaissent le domaine de la Vallée-aux-Loups." }, { title: "Arboretum : 500 espèces", desc: "L'Arboretum est gratuit et ouvert toute l'année. Idéal avant ou après un vol — le taxi vous y emmène ou vous ramène." }, { title: "Ancien campus Centrale", desc: "Les résidents du quartier Butte Rouge (ancien campus) bénéficient d'un accès rapide à la D986 vers les aéroports." }],
    whyUsEn: [{ title: "Chateaubriand heritage", desc: "Pick-up at the Maison de Chateaubriand or Arboretum exit. Our drivers know the Vallée-aux-Loups estate." }, { title: "Arboretum: 500 species", desc: "The Arboretum is free and open year-round. Perfect before or after a flight — taxi takes you there or brings you back." }, { title: "Former Centrale campus", desc: "Butte Rouge district residents (former campus) enjoy quick D986 access to airports." }],
  },
};

// Apply per-city unique content
for (const c of cities) {
  const content = cityContent[c.slug];
  if (content) {
    c.i18n.fr.intro = content.introFr;
    c.i18n.fr.description = content.descriptionFr;
    c.i18n.fr.metaDescription = content.metaDescriptionFr;
    c.i18n.fr.heroSubtitle = content.heroSubtitleFr;
    c.i18n.fr.whyUs = content.whyUsFr;
    c.i18n.en.intro = content.introEn;
    c.i18n.en.description = content.descriptionEn;
    c.i18n.en.metaDescription = content.metaDescriptionEn;
    c.i18n.en.heroSubtitle = content.heroSubtitleEn;
    c.i18n.en.whyUs = content.whyUsEn;
  }
}

// Fontainebleau: custom metaTitle & heroTitle
const fblCity = cities.find((c) => c.slug === "fontainebleau");
if (fblCity) {
  fblCity.i18n.fr.metaTitle = "Taxi Fontainebleau | Château, Forêt, INSEAD | Prix fixe 24h/24 | TaxiNeo";
  fblCity.i18n.fr.heroTitle = "Taxi à Fontainebleau";
  fblCity.i18n.en.metaTitle = "Taxi Fontainebleau | Palace, Forest, INSEAD | Fixed Price 24/7 | TaxiNeo";
  fblCity.i18n.en.heroTitle = "Taxi in Fontainebleau";
}

// Avon: custom metaTitle & heroTitle
const avonCity = cities.find((c) => c.slug === "avon");
if (avonCity) {
  avonCity.i18n.fr.metaTitle = "Taxi Avon | Gare Fontainebleau-Avon, Forêt | Prix fixe 24h/24 | TaxiNeo";
  avonCity.i18n.fr.heroTitle = "Taxi à Avon";
  avonCity.i18n.en.metaTitle = "Taxi Avon | Fontainebleau-Avon Station, Forest | Fixed Price 24/7 | TaxiNeo";
  avonCity.i18n.en.heroTitle = "Taxi in Avon";
}

// Moret-sur-Loing: custom metaTitle & heroTitle
const moretCity = cities.find((c) => c.slug === "moret-sur-loing");
if (moretCity) {
  moretCity.i18n.fr.metaTitle = "Taxi Moret-sur-Loing | Cité médiévale, Sisley | Prix fixe | TaxiNeo";
  moretCity.i18n.fr.heroTitle = "Taxi à Moret-sur-Loing";
  moretCity.i18n.en.metaTitle = "Taxi Moret-sur-Loing | Medieval Town, Sisley | Fixed Price | TaxiNeo";
  moretCity.i18n.en.heroTitle = "Taxi in Moret-sur-Loing";
}

// Barbizon: custom metaTitle & heroTitle
const barbizonCity = cities.find((c) => c.slug === "barbizon");
if (barbizonCity) {
  barbizonCity.i18n.fr.metaTitle = "Taxi Barbizon | Village des Peintres, Forêt | Prix fixe | TaxiNeo";
  barbizonCity.i18n.fr.heroTitle = "Taxi à Barbizon";
  barbizonCity.i18n.en.metaTitle = "Taxi Barbizon | Painters' Village, Forest | Fixed Price | TaxiNeo";
  barbizonCity.i18n.en.heroTitle = "Taxi in Barbizon";
}

// Montereau-Fault-Yonne: custom metaTitle & heroTitle
const montereauCity = cities.find((c) => c.slug === "montereau-fault-yonne");
if (montereauCity) {
  montereauCity.i18n.fr.metaTitle = "Taxi Montereau-Fault-Yonne | Confluence, Industrie | Prix fixe | TaxiNeo";
  montereauCity.i18n.fr.heroTitle = "Taxi à Montereau-Fault-Yonne";
  montereauCity.i18n.en.metaTitle = "Taxi Montereau-Fault-Yonne | Confluence, Industry | Fixed Price | TaxiNeo";
  montereauCity.i18n.en.heroTitle = "Taxi in Montereau-Fault-Yonne";
}

// Chelles: custom metaTitle & heroTitle
const chellesCity = cities.find((c) => c.slug === "chelles");
if (chellesCity) {
  chellesCity.i18n.fr.metaTitle = "Taxi Chelles | RER E, Zone Chelles 2, Bords de Marne | Prix fixe 24h/24 | TaxiNeo";
  chellesCity.i18n.fr.heroTitle = "Taxi à Chelles";
  chellesCity.i18n.en.metaTitle = "Taxi Chelles | RER E, Chelles 2 Retail Park, Marne River | Fixed Price 24/7 | TaxiNeo";
  chellesCity.i18n.en.heroTitle = "Taxi in Chelles";
}

// Villeparisis: custom metaTitle & heroTitle
const villeparisisCity = cities.find((c) => c.slug === "villeparisis");
if (villeparisisCity) {
  villeparisisCity.i18n.fr.metaTitle = "Taxi Villeparisis | CDG 15 km, Canal de l'Ourcq, RER B | Prix fixe 24h/24 | TaxiNeo";
  villeparisisCity.i18n.fr.heroTitle = "Taxi à Villeparisis";
  villeparisisCity.i18n.en.metaTitle = "Taxi Villeparisis | CDG 15 km, Canal de l'Ourcq, RER B | Fixed Price 24/7 | TaxiNeo";
  villeparisisCity.i18n.en.heroTitle = "Taxi in Villeparisis";
}

// Mitry-Mory: custom metaTitle & heroTitle
const mitryMoryCity = cities.find((c) => c.slug === "mitry-mory");
if (mitryMoryCity) {
  mitryMoryCity.i18n.fr.metaTitle = "Taxi Mitry-Mory | CDG 8 km, RER B Terminus, Zone Logistique | Prix fixe 24h/24 | TaxiNeo";
  mitryMoryCity.i18n.fr.heroTitle = "Taxi à Mitry-Mory";
  mitryMoryCity.i18n.en.metaTitle = "Taxi Mitry-Mory | CDG 8 km, RER B Terminus, Logistics Zone | Fixed Price 24/7 | TaxiNeo";
  mitryMoryCity.i18n.en.heroTitle = "Taxi in Mitry-Mory";
}

// Claye-Souilly: custom metaTitle & heroTitle
const clayeSouillyCity = cities.find((c) => c.slug === "claye-souilly");
if (clayeSouillyCity) {
  clayeSouillyCity.i18n.fr.metaTitle = "Taxi Claye-Souilly | Bay 1, Canal de l'Ourcq, Pont Médiéval | Prix fixe 24h/24 | TaxiNeo";
  clayeSouillyCity.i18n.fr.heroTitle = "Taxi à Claye-Souilly";
  clayeSouillyCity.i18n.en.metaTitle = "Taxi Claye-Souilly | Bay 1, Canal de l'Ourcq, Medieval Bridge | Fixed Price 24/7 | TaxiNeo";
  clayeSouillyCity.i18n.en.heroTitle = "Taxi in Claye-Souilly";
}

// Champs-sur-Marne: custom metaTitle & heroTitle
const champsSurMarneCity = cities.find((c) => c.slug === "champs-sur-marne");
if (champsSurMarneCity) {
  champsSurMarneCity.i18n.fr.metaTitle = "Taxi Champs-sur-Marne | Château XVIIIe, Cité Descartes, RER A | Prix fixe 24h/24 | TaxiNeo";
  champsSurMarneCity.i18n.fr.heroTitle = "Taxi à Champs-sur-Marne";
  champsSurMarneCity.i18n.en.metaTitle = "Taxi Champs-sur-Marne | 18th-Century Château, Cité Descartes, RER A | Fixed Price 24/7 | TaxiNeo";
  champsSurMarneCity.i18n.en.heroTitle = "Taxi in Champs-sur-Marne";
}

// Torcy: custom metaTitle & heroTitle
const torcyCity = cities.find((c) => c.slug === "torcy");
if (torcyCity) {
  torcyCity.i18n.fr.metaTitle = "Taxi Torcy | Base Olympique, Bay 2, Disneyland 15 min | Prix fixe 24h/24 | TaxiNeo";
  torcyCity.i18n.fr.heroTitle = "Taxi à Torcy";
  torcyCity.i18n.en.metaTitle = "Taxi Torcy | Olympic Base, Bay 2, Disneyland 15 min | Fixed Price 24/7 | TaxiNeo";
  torcyCity.i18n.en.heroTitle = "Taxi in Torcy";
}

// Noisiel: custom metaTitle & heroTitle
const noisielCity = cities.find((c) => c.slug === "noisiel");
if (noisielCity) {
  noisielCity.i18n.fr.metaTitle = "Taxi Noisiel | Chocolaterie Menier, Nestlé, Ferme du Buisson | Prix fixe 24h/24 | TaxiNeo";
  noisielCity.i18n.fr.heroTitle = "Taxi à Noisiel";
  noisielCity.i18n.en.metaTitle = "Taxi Noisiel | Menier Chocolate Factory, Nestlé, Ferme du Buisson | Fixed Price 24/7 | TaxiNeo";
  noisielCity.i18n.en.heroTitle = "Taxi in Noisiel";
}

// Lognes: custom metaTitle & heroTitle
const lognesCity = cities.find((c) => c.slug === "lognes");
if (lognesCity) {
  lognesCity.i18n.fr.metaTitle = "Taxi Lognes | Zone d'Activités, RER A, Golf Torcy-Lognes | Prix fixe 24h/24 | TaxiNeo";
  lognesCity.i18n.fr.heroTitle = "Taxi à Lognes";
  lognesCity.i18n.en.metaTitle = "Taxi Lognes | Business Parks, RER A, Torcy-Lognes Golf | Fixed Price 24/7 | TaxiNeo";
  lognesCity.i18n.en.heroTitle = "Taxi in Lognes";
}
// Bussy-Saint-Georges: custom metaTitle & heroTitle
const bussySaintGeorges = cities.find((c) => c.slug === "bussy-saint-georges");
if (bussySaintGeorges) {
  bussySaintGeorges.i18n.fr.metaTitle = "Taxi Bussy-Saint-Georges | Esplanade des Religions, Golf, Val d'Europe | Prix fixe 24h/24 | TaxiNeo";
  bussySaintGeorges.i18n.fr.heroTitle = "Taxi à Bussy-Saint-Georges";
  bussySaintGeorges.i18n.en.metaTitle = "Taxi Bussy-Saint-Georges | Esplanade des Religions, Golf, Val d'Europe | Fixed Price 24/7 | TaxiNeo";
  bussySaintGeorges.i18n.en.heroTitle = "Taxi in Bussy-Saint-Georges";
}

// Lagny-sur-Marne: custom metaTitle & heroTitle
const lagnySurMarne = cities.find((c) => c.slug === "lagny-sur-marne");
if (lagnySurMarne) {
  lagnySurMarne.i18n.fr.metaTitle = "Taxi Lagny-sur-Marne | Cité médiévale, Abbatiale, Disneyland 10 min | Prix fixe 24h/24 | TaxiNeo";
  lagnySurMarne.i18n.fr.heroTitle = "Taxi à Lagny-sur-Marne";
  lagnySurMarne.i18n.en.metaTitle = "Taxi Lagny-sur-Marne | Medieval Town, Abbey, Disneyland 10 min | Fixed Price 24/7 | TaxiNeo";
  lagnySurMarne.i18n.en.heroTitle = "Taxi in Lagny-sur-Marne";
}

// Pontault-Combault: custom metaTitle & heroTitle
const pontaultCombault = cities.find((c) => c.slug === "pontault-combault");
if (pontaultCombault) {
  pontaultCombault.i18n.fr.metaTitle = "Taxi Pontault-Combault | Ville sans gare, Actipôle, Francilienne | Prix fixe 24h/24 | TaxiNeo";
  pontaultCombault.i18n.fr.heroTitle = "Taxi à Pontault-Combault";
  pontaultCombault.i18n.en.metaTitle = "Taxi Pontault-Combault | No Station, Actipôle, Francilienne | Fixed Price 24/7 | TaxiNeo";
  pontaultCombault.i18n.en.heroTitle = "Taxi in Pontault-Combault";
}

// Roissy-en-Brie: custom metaTitle & heroTitle
const roissyEnBrie = cities.find((c) => c.slug === "roissy-en-brie");
if (roissyEnBrie) {
  roissyEnBrie.i18n.fr.metaTitle = "Taxi Roissy-en-Brie | RER E, Forêt d'Armainvilliers, ≠ CDG | Prix fixe 24h/24 | TaxiNeo";
  roissyEnBrie.i18n.fr.heroTitle = "Taxi à Roissy-en-Brie";
  roissyEnBrie.i18n.en.metaTitle = "Taxi Roissy-en-Brie | RER E, Armainvilliers Forest, ≠ CDG | Fixed Price 24/7 | TaxiNeo";
  roissyEnBrie.i18n.en.heroTitle = "Taxi in Roissy-en-Brie";
}

// Ozoir-la-Ferrière: custom metaTitle & heroTitle
const ozoirLaFerriere = cities.find((c) => c.slug === "ozoir-la-ferriere");
if (ozoirLaFerriere) {
  ozoirLaFerriere.i18n.fr.metaTitle = "Taxi Ozoir-la-Ferrière | Golf, Château du Piple, Forêt | Prix fixe 24h/24 | TaxiNeo";
  ozoirLaFerriere.i18n.fr.heroTitle = "Taxi à Ozoir-la-Ferrière";
  ozoirLaFerriere.i18n.en.metaTitle = "Taxi Ozoir-la-Ferrière | Golf Course, Château du Piple, Forest | Fixed Price 24/7 | TaxiNeo";
  ozoirLaFerriere.i18n.en.heroTitle = "Taxi in Ozoir-la-Ferrière";
}

// Vaires-sur-Marne: custom metaTitle & heroTitle
const vairesSurMarne = cities.find((c) => c.slug === "vaires-sur-marne");
if (vairesSurMarne) {
  vairesSurMarne.i18n.fr.metaTitle = "Taxi Vaires-sur-Marne | Stade olympique 2024, Bords de Marne | Prix fixe 24h/24 | TaxiNeo";
  vairesSurMarne.i18n.fr.heroTitle = "Taxi à Vaires-sur-Marne";
  vairesSurMarne.i18n.en.metaTitle = "Taxi Vaires-sur-Marne | 2024 Olympic Stadium, Marne Banks | Fixed Price 24/7 | TaxiNeo";
  vairesSurMarne.i18n.en.heroTitle = "Taxi in Vaires-sur-Marne";
}

// Dammarie-les-Lys: custom metaTitle & heroTitle
const dammarieLesLys = cities.find((c) => c.slug === "dammarie-les-lys");
if (dammarieLesLys) {
  dammarieLesLys.i18n.fr.metaTitle = "Taxi Dammarie-les-Lys | Abbaye du Lys, Forêt de Fontainebleau | Prix fixe 24h/24 | TaxiNeo";
  dammarieLesLys.i18n.fr.heroTitle = "Taxi à Dammarie-les-Lys";
  dammarieLesLys.i18n.en.metaTitle = "Taxi Dammarie-les-Lys | Abbey of the Lys, Fontainebleau Forest | Fixed Price 24/7 | TaxiNeo";
  dammarieLesLys.i18n.en.heroTitle = "Taxi in Dammarie-les-Lys";
}

// Le Mée-sur-Seine: custom metaTitle & heroTitle
const leMeeSurSeine = cities.find((c) => c.slug === "le-mee-sur-seine");
if (leMeeSurSeine) {
  leMeeSurSeine.i18n.fr.metaTitle = "Taxi Le Mée-sur-Seine | Base de loisirs, Bord de Seine, Melun 2 km | Prix fixe 24h/24 | TaxiNeo";
  leMeeSurSeine.i18n.fr.heroTitle = "Taxi au Mée-sur-Seine";
  leMeeSurSeine.i18n.en.metaTitle = "Taxi Le Mée-sur-Seine | Leisure Base, Seine Banks, Melun 2 km | Fixed Price 24/7 | TaxiNeo";
  leMeeSurSeine.i18n.en.heroTitle = "Taxi in Le Mée-sur-Seine";
}
// Combs-la-Ville: custom metaTitle & heroTitle
const combsCity = cities.find((c) => c.slug === "combs-la-ville");
if (combsCity) {
  combsCity.i18n.fr.metaTitle = "Taxi Combs-la-Ville | Gare RER D, Parisud, Sénart | Prix fixe 24h/24 | TaxiNeo";
  combsCity.i18n.fr.heroTitle = "Taxi à Combs-la-Ville";
  combsCity.i18n.en.metaTitle = "Taxi Combs-la-Ville | RER D Station, Parisud, Sénart | Fixed Price 24/7 | TaxiNeo";
  combsCity.i18n.en.heroTitle = "Taxi in Combs-la-Ville";
}

// Savigny-le-Temple: custom metaTitle & heroTitle
const savignyCity = cities.find((c) => c.slug === "savigny-le-temple");
if (savignyCity) {
  savignyCity.i18n.fr.metaTitle = "Taxi Savigny-le-Temple | Carré Sénart, RER D, Ville Nouvelle | Prix fixe 24h/24 | TaxiNeo";
  savignyCity.i18n.fr.heroTitle = "Taxi à Savigny-le-Temple";
  savignyCity.i18n.en.metaTitle = "Taxi Savigny-le-Temple | Carré Sénart, RER D, New Town | Fixed Price 24/7 | TaxiNeo";
  savignyCity.i18n.en.heroTitle = "Taxi in Savigny-le-Temple";
}

// Brie-Comte-Robert: custom metaTitle & heroTitle
const brieCity = cities.find((c) => c.slug === "brie-comte-robert");
if (brieCity) {
  brieCity.i18n.fr.metaTitle = "Taxi Brie-Comte-Robert | Château médiéval, Roseraie, A5 | Prix fixe 24h/24 | TaxiNeo";
  brieCity.i18n.fr.heroTitle = "Taxi à Brie-Comte-Robert";
  brieCity.i18n.en.metaTitle = "Taxi Brie-Comte-Robert | Medieval Castle, Rose Garden, A5 | Fixed Price 24/7 | TaxiNeo";
  brieCity.i18n.en.heroTitle = "Taxi in Brie-Comte-Robert";
}

// Coulommiers: custom metaTitle & heroTitle
const coulommiersCity = cities.find((c) => c.slug === "coulommiers");
if (coulommiersCity) {
  coulommiersCity.i18n.fr.metaTitle = "Taxi Coulommiers | Brie AOC, Templiers, Parc des Capucins | Prix fixe 24h/24 | TaxiNeo";
  coulommiersCity.i18n.fr.heroTitle = "Taxi à Coulommiers";
  coulommiersCity.i18n.en.metaTitle = "Taxi Coulommiers | Brie Cheese, Templars, Parc des Capucins | Fixed Price 24/7 | TaxiNeo";
  coulommiersCity.i18n.en.heroTitle = "Taxi in Coulommiers";
}

// Provins: custom metaTitle & heroTitle
const provinsCity = cities.find((c) => c.slug === "provins");
if (provinsCity) {
  provinsCity.i18n.fr.metaTitle = "Taxi Provins | Cité UNESCO, Tour César, Foire Médiévale | Prix fixe 24h/24 | TaxiNeo";
  provinsCity.i18n.fr.heroTitle = "Taxi à Provins";
  provinsCity.i18n.en.metaTitle = "Taxi Provins | UNESCO City, Tour César, Medieval Fair | Fixed Price 24/7 | TaxiNeo";
  provinsCity.i18n.en.heroTitle = "Taxi in Provins";
}

// Nemours: custom metaTitle & heroTitle
const nemoursCity = cities.find((c) => c.slug === "nemours");
if (nemoursCity) {
  nemoursCity.i18n.fr.metaTitle = "Taxi Nemours | Château-Musée, Préhistoire, Rochers de Bourron | Prix fixe 24h/24 | TaxiNeo";
  nemoursCity.i18n.fr.heroTitle = "Taxi à Nemours";
  nemoursCity.i18n.en.metaTitle = "Taxi Nemours | Castle Museum, Prehistory, Bourron Rocks | Fixed Price 24/7 | TaxiNeo";
  nemoursCity.i18n.en.heroTitle = "Taxi in Nemours";
}

// Nanterre: custom metaTitle & heroTitle
const nanterreCity = cities.find((c) => c.slug === "nanterre");
if (nanterreCity) {
  nanterreCity.i18n.fr.metaTitle = "Taxi Nanterre | La Défense, Université Paris-Nanterre, Préfecture 92 | Prix fixe 24h/24 | TaxiNeo";
  nanterreCity.i18n.fr.heroTitle = "Taxi à Nanterre";
  nanterreCity.i18n.en.metaTitle = "Taxi Nanterre | La Défense, Paris-Nanterre University, Prefecture 92 | Fixed Price 24/7 | TaxiNeo";
  nanterreCity.i18n.en.heroTitle = "Taxi in Nanterre";
}

// Courbevoie: custom metaTitle & heroTitle
const courbevoieCity = cities.find((c) => c.slug === "courbevoie");
if (courbevoieCity) {
  courbevoieCity.i18n.fr.metaTitle = "Taxi Courbevoie | La Défense, Total, Engie, SocGen | Prix fixe 24h/24 | TaxiNeo";
  courbevoieCity.i18n.fr.heroTitle = "Taxi à Courbevoie";
  courbevoieCity.i18n.en.metaTitle = "Taxi Courbevoie | La Défense, Total, Engie, SocGen | Fixed Price 24/7 | TaxiNeo";
  courbevoieCity.i18n.en.heroTitle = "Taxi in Courbevoie";
}

// Levallois-Perret: custom metaTitle & heroTitle
const levalloisCity = cities.find((c) => c.slug === "levallois-perret");
if (levalloisCity) {
  levalloisCity.i18n.fr.metaTitle = "Taxi Levallois-Perret | Amazon, Alstom, Art Déco | Prix fixe 24h/24 | TaxiNeo";
  levalloisCity.i18n.fr.heroTitle = "Taxi à Levallois-Perret";
  levalloisCity.i18n.en.metaTitle = "Taxi Levallois-Perret | Amazon, Alstom, Art Deco | Fixed Price 24/7 | TaxiNeo";
  levalloisCity.i18n.en.heroTitle = "Taxi in Levallois-Perret";
}
// Neuilly-sur-Seine: custom metaTitle & heroTitle
const neuillyCity = cities.find((c) => c.slug === "neuilly-sur-seine");
if (neuillyCity) {
  neuillyCity.i18n.fr.metaTitle = "Taxi Neuilly-sur-Seine | Hôpital américain, Île de la Jatte | Prix fixe 24h/24 | TaxiNeo";
  neuillyCity.i18n.fr.heroTitle = "Taxi à Neuilly-sur-Seine";
  neuillyCity.i18n.en.metaTitle = "Taxi Neuilly-sur-Seine | American Hospital, Île de la Jatte | Fixed Price 24/7 | TaxiNeo";
  neuillyCity.i18n.en.heroTitle = "Taxi in Neuilly-sur-Seine";
}

// Colombes: custom metaTitle & heroTitle
const colombesCity = cities.find((c) => c.slug === "colombes");
if (colombesCity) {
  colombesCity.i18n.fr.metaTitle = "Taxi Colombes | Stade Yves-du-Manoir, Transilien J/L | Prix fixe 24h/24 | TaxiNeo";
  colombesCity.i18n.fr.heroTitle = "Taxi à Colombes";
  colombesCity.i18n.en.metaTitle = "Taxi Colombes | Yves-du-Manoir Stadium, Transilien J/L | Fixed Price 24/7 | TaxiNeo";
  colombesCity.i18n.en.heroTitle = "Taxi in Colombes";
}

// Rueil-Malmaison: custom metaTitle & heroTitle
const rueillCity = cities.find((c) => c.slug === "rueil-malmaison");
if (rueillCity) {
  rueillCity.i18n.fr.metaTitle = "Taxi Rueil-Malmaison | Château de Malmaison, RER A, Rueil-sur-Seine | Prix fixe 24h/24 | TaxiNeo";
  rueillCity.i18n.fr.heroTitle = "Taxi à Rueil-Malmaison";
  rueillCity.i18n.en.metaTitle = "Taxi Rueil-Malmaison | Château de Malmaison, RER A, Business District | Fixed Price 24/7 | TaxiNeo";
  rueillCity.i18n.en.heroTitle = "Taxi in Rueil-Malmaison";
}

// Asnières-sur-Seine: custom metaTitle & heroTitle
const asnieresCity = cities.find((c) => c.slug === "asnieres-sur-seine");
if (asnieresCity) {
  asnieresCity.i18n.fr.metaTitle = "Taxi Asnières-sur-Seine | Pont d'Asnières, Cimetière des Chiens | Prix fixe 24h/24 | TaxiNeo";
  asnieresCity.i18n.fr.heroTitle = "Taxi à Asnières-sur-Seine";
  asnieresCity.i18n.en.metaTitle = "Taxi Asnières-sur-Seine | Pont d'Asnières, Cimetière des Chiens | Fixed Price 24/7 | TaxiNeo";
  asnieresCity.i18n.en.heroTitle = "Taxi in Asnières-sur-Seine";
}

// Boulogne-Billancourt: custom metaTitle & heroTitle
const boulogneCity = cities.find((c) => c.slug === "boulogne-billancourt");
if (boulogneCity) {
  boulogneCity.i18n.fr.metaTitle = "Taxi Boulogne-Billancourt | Seine Musicale, Île Seguin, Musée Albert-Kahn | Prix fixe 24h/24 | TaxiNeo";
  boulogneCity.i18n.fr.heroTitle = "Taxi à Boulogne-Billancourt";
  boulogneCity.i18n.en.metaTitle = "Taxi Boulogne-Billancourt | Seine Musicale, Île Seguin, Albert-Kahn Museum | Fixed Price 24/7 | TaxiNeo";
  boulogneCity.i18n.en.heroTitle = "Taxi in Boulogne-Billancourt";
}

// Issy-les-Moulineaux: custom metaTitle & heroTitle
const issyCity = cities.find((c) => c.slug === "issy-les-moulineaux");
if (issyCity) {
  issyCity.i18n.fr.metaTitle = "Taxi Issy-les-Moulineaux | Microsoft France, Canal+, Héliport | Prix fixe 24h/24 | TaxiNeo";
  issyCity.i18n.fr.heroTitle = "Taxi à Issy-les-Moulineaux";
  issyCity.i18n.en.metaTitle = "Taxi Issy-les-Moulineaux | Microsoft France, Canal+, Heliport | Fixed Price 24/7 | TaxiNeo";
  issyCity.i18n.en.heroTitle = "Taxi in Issy-les-Moulineaux";
}

// Meudon: custom metaTitle & heroTitle
const meudonCity = cities.find((c) => c.slug === "meudon");
if (meudonCity) {
  meudonCity.i18n.fr.metaTitle = "Taxi Meudon | Observatoire de Paris, Forêt, Terrasse panoramique | Prix fixe 24h/24 | TaxiNeo";
  meudonCity.i18n.fr.heroTitle = "Taxi à Meudon";
  meudonCity.i18n.en.metaTitle = "Taxi Meudon | Paris Observatory, Forest, Panoramic Terrace | Fixed Price 24/7 | TaxiNeo";
  meudonCity.i18n.en.heroTitle = "Taxi in Meudon";
}

// Antony: custom metaTitle & heroTitle
const antonyCity = cities.find((c) => c.slug === "antony");
if (antonyCity) {
  antonyCity.i18n.fr.metaTitle = "Taxi Antony | Parc de Sceaux, RER B, Connexion Orlyval | Prix fixe 24h/24 | TaxiNeo";
  antonyCity.i18n.fr.heroTitle = "Taxi à Antony";
  antonyCity.i18n.en.metaTitle = "Taxi Antony | Parc de Sceaux, RER B, Orlyval Connection | Fixed Price 24/7 | TaxiNeo";
  antonyCity.i18n.en.heroTitle = "Taxi in Antony";
}


// === OVERRIDES ===
const clichyCity = cities.find((c) => c.slug === "clichy");
if (clichyCity) {
  clichyCity.i18n.fr.metaTitle = "Taxi Clichy | Beaujon, L'Oréal, Métro 13 | Prix fixe 24h/24 | TaxiNeo";
  clichyCity.i18n.fr.heroTitle = "Taxi à Clichy";
  clichyCity.i18n.en.metaTitle = "Taxi Clichy | Beaujon, L'Oréal, Metro 13 | Fixed Price 24/7 | TaxiNeo";
  clichyCity.i18n.en.heroTitle = "Taxi in Clichy";
}
const gennevilliersCity = cities.find((c) => c.slug === "gennevilliers");
if (gennevilliersCity) {
  gennevilliersCity.i18n.fr.metaTitle = "Taxi Gennevilliers | Port fluvial, Théâtre CDN, T1 | Prix fixe 24h/24 | TaxiNeo";
  gennevilliersCity.i18n.fr.heroTitle = "Taxi à Gennevilliers";
  gennevilliersCity.i18n.en.metaTitle = "Taxi Gennevilliers | River Port, CDN Theatre, T1 | Fixed Price 24/7 | TaxiNeo";
  gennevilliersCity.i18n.en.heroTitle = "Taxi in Gennevilliers";
}
const villeneuveCity = cities.find((c) => c.slug === "villeneuve-la-garenne");
if (villeneuveCity) {
  villeneuveCity.i18n.fr.metaTitle = "Taxi Villeneuve-la-Garenne | Qwartz, Seine, T1 | Prix fixe 24h/24 | TaxiNeo";
  villeneuveCity.i18n.fr.heroTitle = "Taxi à Villeneuve-la-Garenne";
  villeneuveCity.i18n.en.metaTitle = "Taxi Villeneuve-la-Garenne | Qwartz, Seine, T1 | Fixed Price 24/7 | TaxiNeo";
  villeneuveCity.i18n.en.heroTitle = "Taxi in Villeneuve-la-Garenne";
}
const puteauxCity = cities.find((c) => c.slug === "puteaux");
if (puteauxCity) {
  puteauxCity.i18n.fr.metaTitle = "Taxi Puteaux | La Défense, Grande Arche, CNIT | Prix fixe 24h/24 | TaxiNeo";
  puteauxCity.i18n.fr.heroTitle = "Taxi à Puteaux";
  puteauxCity.i18n.en.metaTitle = "Taxi Puteaux | La Défense, Grande Arche, CNIT | Fixed Price 24/7 | TaxiNeo";
  puteauxCity.i18n.en.heroTitle = "Taxi in Puteaux";
}
const laGarenneCity = cities.find((c) => c.slug === "la-garenne-colombes");
if (laGarenneCity) {
  laGarenneCity.i18n.fr.metaTitle = "Taxi La Garenne-Colombes | Village, Transilien J/L, La Défense | Prix fixe | TaxiNeo";
  laGarenneCity.i18n.fr.heroTitle = "Taxi à La Garenne-Colombes";
  laGarenneCity.i18n.en.metaTitle = "Taxi La Garenne-Colombes | Village, Transilien J/L, La Défense | Fixed Price | TaxiNeo";
  laGarenneCity.i18n.en.heroTitle = "Taxi in La Garenne-Colombes";
}
const suresnesCity = cities.find((c) => c.slug === "suresnes");
if (suresnesCity) {
  suresnesCity.i18n.fr.metaTitle = "Taxi Suresnes | Mont-Valérien, Vignoble, T2 | Prix fixe 24h/24 | TaxiNeo";
  suresnesCity.i18n.fr.heroTitle = "Taxi à Suresnes";
  suresnesCity.i18n.en.metaTitle = "Taxi Suresnes | Mont-Valérien, Vineyard, T2 | Fixed Price 24/7 | TaxiNeo";
  suresnesCity.i18n.en.heroTitle = "Taxi in Suresnes";
}
const saintCloudCity = cities.find((c) => c.slug === "saint-cloud");
if (saintCloudCity) {
  saintCloudCity.i18n.fr.metaTitle = "Taxi Saint-Cloud | Parc National, Hippodrome | Prix fixe 24h/24 | TaxiNeo";
  saintCloudCity.i18n.fr.heroTitle = "Taxi à Saint-Cloud";
  saintCloudCity.i18n.en.metaTitle = "Taxi Saint-Cloud | National Park, Racecourse | Fixed Price 24/7 | TaxiNeo";
  saintCloudCity.i18n.en.heroTitle = "Taxi in Saint-Cloud";
}

const garchesCity = cities.find((c) => c.slug === "garches");
if (garchesCity) {
  garchesCity.i18n.fr.metaTitle = "Taxi Garches | Hôpital Poincaré, Lanterne | Prix fixe 24h/24 | TaxiNeo";
  garchesCity.i18n.fr.heroTitle = "Taxi à Garches";
  garchesCity.i18n.en.metaTitle = "Taxi Garches | Poincaré Hospital, Lanterne | Fixed Price 24/7 | TaxiNeo";
  garchesCity.i18n.en.heroTitle = "Taxi in Garches";
}

const chavilleCity = cities.find((c) => c.slug === "chaville");
if (chavilleCity) {
  chavilleCity.i18n.fr.metaTitle = "Taxi Chaville | Forêts, Étang d'Ursine | Prix fixe 24h/24 | TaxiNeo";
  chavilleCity.i18n.fr.heroTitle = "Taxi à Chaville";
  chavilleCity.i18n.en.metaTitle = "Taxi Chaville | Forests, Ursine Pond | Fixed Price 24/7 | TaxiNeo";
  chavilleCity.i18n.en.heroTitle = "Taxi in Chaville";
}

const sevresCity = cities.find((c) => c.slug === "sevres");
if (sevresCity) {
  sevresCity.i18n.fr.metaTitle = "Taxi Sèvres | Manufacture Porcelaine, Seine Musicale | Prix fixe 24h/24 | TaxiNeo";
  sevresCity.i18n.fr.heroTitle = "Taxi à Sèvres";
  sevresCity.i18n.en.metaTitle = "Taxi Sèvres | Porcelain Manufacture, Seine Musicale | Fixed Price 24/7 | TaxiNeo";
  sevresCity.i18n.en.heroTitle = "Taxi in Sèvres";
}

const villeDAvrayCity = cities.find((c) => c.slug === "ville-d-avray");
if (villeDAvrayCity) {
  villeDAvrayCity.i18n.fr.metaTitle = "Taxi Ville-d'Avray | Étangs de Corot, Forêt | Prix fixe 24h/24 | TaxiNeo";
  villeDAvrayCity.i18n.fr.heroTitle = "Taxi à Ville-d'Avray";
  villeDAvrayCity.i18n.en.metaTitle = "Taxi Ville-d'Avray | Corot's Ponds, Forest | Fixed Price 24/7 | TaxiNeo";
  villeDAvrayCity.i18n.en.heroTitle = "Taxi in Ville-d'Avray";
}
const montrougeCity = cities.find((c) => c.slug === "montrouge");
if (montrougeCity) {
  montrougeCity.i18n.fr.metaTitle = "Taxi Montrouge | Beffroi, Porte d'Orléans | Prix fixe 24h/24 | TaxiNeo";
  montrougeCity.i18n.fr.heroTitle = "Taxi à Montrouge";
  montrougeCity.i18n.en.metaTitle = "Taxi Montrouge | Beffroi, Porte d'Orleans | Fixed Price 24/7 | TaxiNeo";
  montrougeCity.i18n.en.heroTitle = "Taxi in Montrouge";
}
const malakoffCity = cities.find((c) => c.slug === "malakoff");
if (malakoffCity) {
  malakoffCity.i18n.fr.metaTitle = "Taxi Malakoff | Théâtre 71, Métro 13 | Prix fixe 24h/24 | TaxiNeo";
  malakoffCity.i18n.fr.heroTitle = "Taxi à Malakoff";
  malakoffCity.i18n.en.metaTitle = "Taxi Malakoff | Theatre 71, Metro 13 | Fixed Price 24/7 | TaxiNeo";
  malakoffCity.i18n.en.heroTitle = "Taxi in Malakoff";
}
const vanvesCity = cities.find((c) => c.slug === "vanves");
if (vanvesCity) {
  vanvesCity.i18n.fr.metaTitle = "Taxi Vanves | Lycée Michelet, Parc Pic | Prix fixe 24h/24 | TaxiNeo";
  vanvesCity.i18n.fr.heroTitle = "Taxi à Vanves";
  vanvesCity.i18n.en.metaTitle = "Taxi Vanves | Lycee Michelet, Parc Pic | Fixed Price 24/7 | TaxiNeo";
  vanvesCity.i18n.en.heroTitle = "Taxi in Vanves";
}
const chatillonCity = cities.find((c) => c.slug === "chatillon");
if (chatillonCity) {
  chatillonCity.i18n.fr.metaTitle = "Taxi Châtillon | Métro 13, Fort CEA | Prix fixe 24h/24 | TaxiNeo";
  chatillonCity.i18n.fr.heroTitle = "Taxi à Châtillon";
  chatillonCity.i18n.en.metaTitle = "Taxi Chatillon | Metro 13, Fort CEA | Fixed Price 24/7 | TaxiNeo";
  chatillonCity.i18n.en.heroTitle = "Taxi in Châtillon";
}
const clamartCity2 = cities.find((c) => c.slug === "clamart");
if (clamartCity2) {
  clamartCity2.i18n.fr.metaTitle = "Taxi Clamart | Forêt de Meudon, Hôpital Béclère | Prix fixe 24h/24 | TaxiNeo";
  clamartCity2.i18n.fr.heroTitle = "Taxi à Clamart";
  clamartCity2.i18n.en.metaTitle = "Taxi Clamart | Meudon Forest, Beclere Hospital | Fixed Price 24/7 | TaxiNeo";
  clamartCity2.i18n.en.heroTitle = "Taxi in Clamart";
}
const bagneuxCity = cities.find((c) => c.slug === "bagneux");
if (bagneuxCity) {
  bagneuxCity.i18n.fr.metaTitle = "Taxi Bagneux | Métro 4, ZAC Victor Hugo | Prix fixe 24h/24 | TaxiNeo";
  bagneuxCity.i18n.fr.heroTitle = "Taxi à Bagneux";
  bagneuxCity.i18n.en.metaTitle = "Taxi Bagneux | Metro 4, ZAC Victor Hugo | Fixed Price 24/7 | TaxiNeo";
  bagneuxCity.i18n.en.heroTitle = "Taxi in Bagneux";
}
const fontenayCity = cities.find((c) => c.slug === "fontenay-aux-roses");
if (fontenayCity) {
  fontenayCity.i18n.fr.metaTitle = "Taxi Fontenay-aux-Roses | CEA, Roseraie, RER B | Prix fixe 24h/24 | TaxiNeo";
  fontenayCity.i18n.fr.heroTitle = "Taxi à Fontenay-aux-Roses";
  fontenayCity.i18n.en.metaTitle = "Taxi Fontenay-aux-Roses | CEA, Rose Garden, RER B | Fixed Price 24/7 | TaxiNeo";
  fontenayCity.i18n.en.heroTitle = "Taxi in Fontenay-aux-Roses";
}

const sceauxCity = cities.find((c) => c.slug === "sceaux");
if (sceauxCity) {
  sceauxCity.i18n.fr.metaTitle = "Taxi Sceaux | Parc de Sceaux, Hanami, Lycée Lakanal | Prix fixe 24h/24 | TaxiNeo";
  sceauxCity.i18n.fr.heroTitle = "Taxi à Sceaux";
  sceauxCity.i18n.en.metaTitle = "Taxi Sceaux | Parc de Sceaux, Hanami, Lycée Lakanal | Fixed Price 24/7 | TaxiNeo";
  sceauxCity.i18n.en.heroTitle = "Taxi in Sceaux";
}

const bourgLaReineCity = cities.find((c) => c.slug === "bourg-la-reine");
if (bourgLaReineCity) {
  bourgLaReineCity.i18n.fr.metaTitle = "Taxi Bourg-la-Reine | Nœud RER B, André Derain | Prix fixe 24h/24 | TaxiNeo";
  bourgLaReineCity.i18n.fr.heroTitle = "Taxi à Bourg-la-Reine";
  bourgLaReineCity.i18n.en.metaTitle = "Taxi Bourg-la-Reine | RER B Hub, André Derain | Fixed Price 24/7 | TaxiNeo";
  bourgLaReineCity.i18n.en.heroTitle = "Taxi in Bourg-la-Reine";
}

const lePlessisCity = cities.find((c) => c.slug === "le-plessis-robinson");
if (lePlessisCity) {
  lePlessisCity.i18n.fr.metaTitle = "Taxi Le Plessis-Robinson | Cité-jardin Art Déco, Étang Colbert | Prix fixe 24h/24 | TaxiNeo";
  lePlessisCity.i18n.fr.heroTitle = "Taxi au Plessis-Robinson";
  lePlessisCity.i18n.en.metaTitle = "Taxi Le Plessis-Robinson | Art Deco Garden City, Étang Colbert | Fixed Price 24/7 | TaxiNeo";
  lePlessisCity.i18n.en.heroTitle = "Taxi in Le Plessis-Robinson";
}

const chatenayCity = cities.find((c) => c.slug === "chatenay-malabry");
if (chatenayCity) {
  chatenayCity.i18n.fr.metaTitle = "Taxi Châtenay-Malabry | Chateaubriand, Arboretum, Vallée-aux-Loups | Prix fixe 24h/24 | TaxiNeo";
  chatenayCity.i18n.fr.heroTitle = "Taxi à Châtenay-Malabry";
  chatenayCity.i18n.en.metaTitle = "Taxi Châtenay-Malabry | Chateaubriand, Arboretum, Vallée-aux-Loups | Fixed Price 24/7 | TaxiNeo";
  chatenayCity.i18n.en.heroTitle = "Taxi in Châtenay-Malabry";
}

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

export function findCityByName(name: string): City | undefined {
  const n = name.toLowerCase().trim();
  return cities.find(
    (c) => c.name.toLowerCase() === n || c.slug === n
  );
}

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
    icon: "solar:health-linear",
    title: "Transport médical",
    description: "Transport adapté vers les hôpitaux et cliniques, avec prise en charge attentionnée.",
  },
];
