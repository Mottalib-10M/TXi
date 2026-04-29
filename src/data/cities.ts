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
