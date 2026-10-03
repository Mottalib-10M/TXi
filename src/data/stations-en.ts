import type { StationFAQ, StationTestimonial } from "./stations";

/** Versions anglaises des champs propres à chaque gare, saisis en français dans stations.ts. */
export const stationsEn: Record<string, {
  extraFaq: StationFAQ[];
  testimonials: StationTestimonial[];
  practicalInfo: string[];
  distanceFromCity: string;
  /** Noms anglais, même ordre que destinations. */
  destinations: string[];
  annualPassengers: string;
}> = {
  "paris-gare-du-nord": {
    extraFaq: [
      { question: "Where do I meet my driver at Gare du Nord?", answer: "Your driver waits for you at the station's main exit, on the rue de Dunkerque side. The exact meeting point details are sent by text message." },
      { question: "How much is a taxi from Gare du Nord to CDG?", answer: "The taxi flat fare from Gare du Nord to CDG Airport is around €56. The journey takes 30-50 minutes depending on traffic." },
    ],
    testimonials: [
      { text: "Eurostar arrival at 10pm, the driver was right there at the exit. Quick transfer to the 16th. Perfect.", name: "James T.", initials: "JT", role: "Eurostar traveller" },
      { text: "I take the Thalys every week. TaxiNeo picks me up flawlessly every time. Professional service.", name: "Pierre V.", initials: "PV", role: "Consultant, Brussels" },
      { text: "Family with 3 suitcases, the driver helped us and dropped us at the hotel in 12 minutes.", name: "Anna K.", initials: "AK", role: "German tourist" },
    ],
    practicalInfo: [
      "Busiest station in Europe",
      "Eurostar to London (2h15)",
      "Thalys to Brussels (1h22)",
      "Free waiting time if your train is delayed",
      "Payment by card or app",
    ],
    distanceFromCity: "Central Paris (10th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "La Défense",
      "Disneyland Paris",
      "Paris Gare de Lyon",
    ],
    annualPassengers: "292 million",
  },
  "paris-gare-de-lyon": {
    extraFaq: [
      { question: "What is the taxi flat fare from Gare de Lyon to Orly?", answer: "The taxi flat fare from Gare de Lyon to Orly Airport is around €36. The journey takes 20-35 minutes." },
    ],
    testimonials: [
      { text: "TGV 40 minutes late, the driver had tracked it and was waiting calmly for me. Impeccable service.", name: "Nathalie F.", initials: "NF", role: "Lawyer, Lyon" },
      { text: "Transfer from Gare de Lyon to Orly for a flight. Perfectly on time despite the traffic.", name: "Romain P.", initials: "RP", role: "Sales manager" },
      { text: "As a regular on the Lyon-Paris TGV, TaxiNeo is my go-to on arrival. Always there.", name: "Laurent B.", initials: "LB", role: "Entrepreneur" },
    ],
    practicalInfo: [
      "TGV to Lyon (2h), Marseille (3h15), Nice (5h30)",
      "Le Train Bleu restaurant inside the station",
      "Free waiting time if your train is delayed",
      "Child seats available on request",
      "On-board Wi-Fi and USB chargers",
    ],
    distanceFromCity: "Central Paris (12th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "La Défense",
      "Paris Gare du Nord",
      "Disneyland Paris",
    ],
    annualPassengers: "148 million",
  },
  "paris-saint-lazare": {
    extraFaq: [
      { question: "Is Saint-Lazare well served by taxis?", answer: "Yes, our drivers pick you up right at the station exit. Book in advance for guaranteed service." },
    ],
    testimonials: [
      { text: "Gare Saint-Lazare at the height of rush hour, the driver picked me up stress-free on the Cour de Rome side.", name: "Sandrine M.", initials: "SM", role: "Manager, Rouen" },
      { text: "Train from Le Havre, taxi booked in advance. Perfect for getting to my hotel in the Marais.", name: "Oliver W.", initials: "OW", role: "British tourist" },
      { text: "Quick, comfortable transfer to La Défense. The driver knew the best route.", name: "David L.", initials: "DL", role: "Consultant" },
    ],
    practicalInfo: [
      "Second busiest station in Paris",
      "Trains to Normandy (Rouen, Le Havre, Caen)",
      "Close to the department store district",
      "Free waiting time in case of delay",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Paris (8th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "La Défense",
      "Versailles",
      "Paris Gare du Nord",
    ],
    annualPassengers: "100 million",
  },
  "paris-montparnasse": {
    extraFaq: [
      { question: "How do I get to Orly from Montparnasse?", answer: "The taxi flat fare from Montparnasse to Orly is around €36, for a 20-30 minute journey. Faster and more comfortable than the bus." },
    ],
    testimonials: [
      { text: "Back from Bordeaux by TGV, the taxi was waiting right on time. Dropped at home in the 7th in 8 minutes.", name: "François D.", initials: "FD", role: "Adopted Bordeaux local" },
      { text: "Montparnasse to Orly transfer with lots of luggage. The driver handled everything, spacious vehicle.", name: "Marie-Claire G.", initials: "MCG", role: "Traveller" },
      { text: "TGV from Rennes, impeccable taxi on arrival. I recommend it to every Breton heading up to Paris!", name: "Yann L.", initials: "YL", role: "Rennes local" },
    ],
    practicalInfo: [
      "TGV to Bordeaux (2h04), Rennes (1h27), Nantes (2h15)",
      "Renovated station with halls 1, 2 and 3",
      "Free waiting time in case of delay",
      "Payment by card or app",
      "Transfers to Orly in 20 min",
    ],
    distanceFromCity: "Central Paris (15th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "La Défense",
      "Paris Gare du Nord",
      "Versailles",
    ],
    annualPassengers: "90 million",
  },
  "paris-gare-de-l-est": {
    extraFaq: [
      { question: "Is Gare de l'Est close to Gare du Nord?", answer: "Yes, the two stations are 300 metres apart. A taxi transfer takes 3-5 minutes." },
    ],
    testimonials: [
      { text: "ICE from Frankfurt, arriving at 9pm. The driver spoke German, which made life much easier.", name: "Klaus M.", initials: "KM", role: "Businessman, Munich" },
      { text: "TGV Est to Strasbourg every week. TaxiNeo drops me at the station stress-free.", name: "Céline R.", initials: "CR", role: "Consultant" },
      { text: "Quick transfer to the Marais after a night train. Perfect service even at 6am.", name: "Hugo B.", initials: "HB", role: "Student" },
    ],
    practicalInfo: [
      "TGV Est to Strasbourg (1h46), Reims (45 min)",
      "ICE to Frankfurt and Stuttgart",
      "300 m from Gare du Nord",
      "Free waiting time in case of delay",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Paris (10th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "La Défense",
      "Paris Gare du Nord",
      "Disneyland Paris",
    ],
    annualPassengers: "50 million",
  },
  "paris-gare-d-austerlitz": {
    extraFaq: [
      { question: "Which trains leave from Gare d'Austerlitz?", answer: "Gare d'Austerlitz serves central and south-west France (Limoges, Toulouse, Cahors) as well as night trains." },
    ],
    testimonials: [
      { text: "Night train from Toulouse, arriving at 7am. The driver was there, coffee in hand. What service!", name: "Philippe T.", initials: "PT", role: "Toulouse local" },
      { text: "Very fast transfer to Orly from Austerlitz. Unbeatable price.", name: "Fatima Z.", initials: "FZ", role: "Student" },
      { text: "A lesser-known station but very well served by TaxiNeo. Punctual, friendly driver.", name: "Bernard C.", initials: "BC", role: "Retiree" },
    ],
    practicalInfo: [
      "Trains to central and south-west France",
      "Intercités night trains to the south of France",
      "Close to the Jardin des Plantes",
      "Free waiting time in case of delay",
      "Quick transfer to Orly (20 min)",
    ],
    distanceFromCity: "Central Paris (13th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "Paris Gare de Lyon",
      "La Défense",
      "Latin Quarter",
    ],
    annualPassengers: "30 million",
  },
  "paris-gare-de-bercy": {
    extraFaq: [
      { question: "Is Bercy station far from Gare de Lyon?", answer: "No, the two stations are 500 metres apart, around 3-5 minutes by taxi." },
    ],
    testimonials: [
      { text: "Car/night train from Italy, arriving early in the morning. Punctual taxi despite the hour.", name: "Marco R.", initials: "MR", role: "Italian traveller" },
      { text: "Small station, but the driver knew exactly where to find me. Express transfer to the 5th.", name: "Juliette H.", initials: "JH", role: "Student" },
      { text: "Leaving on a night train, the taxi dropped me right outside. Simple and efficient.", name: "Pascal N.", initials: "PN", role: "Traveller" },
    ],
    practicalInfo: [
      "Station dedicated to night trains",
      "Close to Bercy Village and the AccorHotels Arena",
      "500 m from Gare de Lyon",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Paris (12th)",
    destinations: [
      "CDG Airport",
      "Orly Airport",
      "Paris Gare de Lyon",
      "Bercy Village",
      "Central Paris (Châtelet)",
    ],
    annualPassengers: "2 million",
  },
  "lyon-part-dieu": {
    extraFaq: [
      { question: "How much is a taxi from Part-Dieu to Saint-Exupéry Airport?", answer: "The taxi flat fare from Lyon Part-Dieu to Saint-Exupéry Airport is around €65. The journey takes 25-35 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi straight away at Part-Dieu. Dropped at Bellecour in 10 minutes. Perfect.", name: "Sophie M.", initials: "SM", role: "Parisian" },
      { text: "Transfer from Part-Dieu to Saint-Exupéry Airport, punctual driver, fixed price honoured.", name: "Alexandre D.", initials: "AD", role: "Businessman" },
      { text: "Very busy station, but the driver knew exactly where to meet me. Top service.", name: "Émilie P.", initials: "EP", role: "Lyon local" },
    ],
    practicalInfo: [
      "Largest TGV interchange station in France",
      "TGV to Paris (2h), Marseille (1h40), Montpellier (1h45)",
      "Adjoining Part-Dieu shopping centre",
      "Free waiting time in case of delay",
      "Transfers to ski resorts in winter",
    ],
    distanceFromCity: "Central Lyon",
    destinations: [
      "Lyon Saint-Exupéry Airport",
      "Lyon Presqu'île (Bellecour)",
      "Lyon Vieux-Lyon",
      "Villeurbanne",
      "Grenoble",
    ],
    annualPassengers: "34 million",
  },
  "lyon-perrache": {
    extraFaq: [
      { question: "Perrache or Part-Dieu: which station should I choose?", answer: "Part-Dieu is the main station for TGV trains. Perrache is more central and quieter, served by some TGV and TER trains." },
    ],
    testimonials: [
      { text: "Perrache station is quieter than Part-Dieu, the taxi was easy to find. Perfect transfer to Confluence.", name: "Christophe R.", initials: "CR", role: "Lyon local" },
      { text: "TER from Saint-Étienne, quick taxi to my hotel in Vieux-Lyon. Impeccable service.", name: "Aurélie V.", initials: "AV", role: "Saint-Étienne local" },
      { text: "Early morning Perrache to airport transfer. The driver was on time at 5am.", name: "Michel D.", initials: "MD", role: "Frequent traveller" },
    ],
    practicalInfo: [
      "Lyon's historic city-centre station",
      "Close to the Confluence district",
      "TGV and TER to Saint-Étienne, Grenoble",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Lyon (2nd)",
    destinations: [
      "Lyon Saint-Exupéry Airport",
      "Lyon Part-Dieu",
      "Lyon Confluence",
      "Vieux-Lyon",
      "Annecy",
    ],
    annualPassengers: "10 million",
  },
  "marseille-saint-charles": {
    extraFaq: [
      { question: "How much is a taxi from Gare Saint-Charles to the airport?", answer: "The taxi flat fare from Marseille Saint-Charles to Provence Airport is around €55. The journey takes 25-40 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi straight to the Vieux-Port. I was at my hotel in 8 minutes. Brilliant.", name: "Jérôme L.", initials: "JL", role: "Tourist from Paris" },
      { text: "Station to airport transfer for a flight. The driver knew the fastest route.", name: "Samira B.", initials: "SB", role: "Marseille local" },
      { text: "Arriving at night after an Intercités train. The taxi was there, professional and reassuring.", name: "Catherine P.", initials: "CP", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (3h15), Lyon (1h40), Nice (2h30)",
      "Monumental staircase with views over the city",
      "Free waiting time in case of delay",
      "Transfers to the Calanques and the Côte Bleue",
      "Payment by card or app",
    ],
    distanceFromCity: "Central Marseille",
    destinations: [
      "Marseille-Provence Airport",
      "Vieux-Port",
      "Calanques (Cassis)",
      "Aix-en-Provence",
      "Toulon",
    ],
    annualPassengers: "14 million",
  },
  "lille-flandres": {
    extraFaq: [
      { question: "How do I get from Lille Flandres to Lille Europe?", answer: "The two stations are 300 metres apart. A taxi takes 3-5 minutes, handy if you have luggage." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to my hotel near the Grand Place in 3 minutes. Unbeatable.", name: "Patrick H.", initials: "PH", role: "Businessman" },
      { text: "Flandres to Europe connection for the Eurostar. The taxi did the trip in 4 minutes.", name: "Sarah J.", initials: "SJ", role: "London-Lille traveller" },
      { text: "Reliable service even during the Braderie de Lille. The driver knew the detours.", name: "Nicolas F.", initials: "NF", role: "Lille local" },
    ],
    practicalInfo: [
      "Lille's main station for TGV and TER trains",
      "300 m from Lille Europe",
      "TGV to Paris (1h)",
      "Right in Lille city centre",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Lille",
    destinations: [
      "Lille Europe",
      "Lille-Lesquin Airport",
      "Grand Place",
      "Roubaix",
      "Villeneuve-d'Ascq",
    ],
    annualPassengers: "22 million",
  },
  "lille-europe": {
    extraFaq: [
      { question: "Does the Eurostar arrive at Lille Europe?", answer: "Yes, Lille Europe is the station for the Eurostar (London) and the Thalys (Brussels, Amsterdam). The London-Lille journey takes 1h20." },
    ],
    testimonials: [
      { text: "Eurostar from London, taxi straight to my hotel. The driver spoke English. Perfect.", name: "Richard B.", initials: "RB", role: "British traveller" },
      { text: "Thalys from Brussels, impeccable transfer to Vieux-Lille.", name: "Élodie C.", initials: "EC", role: "French-Belgian" },
      { text: "Late Eurostar arrival, the taxi waited for me despite the train delay.", name: "Helen S.", initials: "HS", role: "English tourist" },
    ],
    practicalInfo: [
      "Eurostar and Thalys station",
      "London in 1h20, Brussels in 35 min",
      "Modern station in the Euralille district",
      "Free waiting time in case of delay",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Lille",
    destinations: [
      "Lille Flandres",
      "Lille-Lesquin Airport",
      "Grand Place",
      "Euralille (shopping centre)",
      "Kortrijk (Belgium)",
    ],
    annualPassengers: "7 million",
  },
  "bordeaux-saint-jean": {
    extraFaq: [
      { question: "How long is the TGV from Paris to Bordeaux?", answer: "The Paris-Bordeaux TGV takes 2h04 thanks to the LGV SEA high-speed line. Saint-Jean station is right in the centre of Bordeaux." },
    ],
    testimonials: [
      { text: "TGV from Paris in 2h04, taxi straight to the Place des Quinconces. Bordeaux in the blink of an eye.", name: "Antoine G.", initials: "AG", role: "Parisian" },
      { text: "Impeccable station to airport transfer. Flat fare honoured, professional driver.", name: "Valérie M.", initials: "VM", role: "Manager, Bordeaux" },
      { text: "Wine-tasting weekend, the taxi dropped us straight at Saint-Émilion.", name: "Jean-Pierre D.", initials: "JPD", role: "Amateur oenologist" },
    ],
    practicalInfo: [
      "TGV to Paris (2h04), Toulouse (2h), Marseille (4h20)",
      "Renovated and extended station (2018)",
      "Close to the Garonne quays",
      "Free waiting time in case of delay",
      "Transfers to the Bordeaux vineyards",
    ],
    distanceFromCity: "Central Bordeaux",
    destinations: [
      "Bordeaux-Mérignac Airport",
      "City centre (Place de la Bourse)",
      "Saint-Émilion",
      "Arcachon",
      "Cité du Vin",
    ],
    annualPassengers: "15 million",
  },
  "toulouse-matabiau": {
    extraFaq: [
      { question: "Is Matabiau station far from the centre?", answer: "No, Matabiau station is 1 km from the Place du Capitole, around 5-8 minutes by taxi." },
    ],
    testimonials: [
      { text: "TGV from Paris, quick taxi to the Capitole. The driver recommended a good restaurant.", name: "Lucie R.", initials: "LR", role: "Tourist" },
      { text: "Station to airport transfer for a flight. Punctual driver and a quick journey.", name: "Thierry N.", initials: "TN", role: "Airbus engineer" },
      { text: "TGV to TER connection, the taxi saved me 30 min compared with the bus.", name: "Isabelle F.", initials: "IF", role: "Sales representative" },
    ],
    practicalInfo: [
      "TGV to Paris (4h20), Bordeaux (2h)",
      "TER to Carcassonne, Montpellier, Perpignan",
      "Right in Toulouse city centre",
      "Free waiting time in case of delay",
      "Transfers to Airbus and the Cité de l'Espace",
    ],
    distanceFromCity: "Central Toulouse",
    destinations: [
      "Toulouse-Blagnac Airport",
      "Capitole",
      "Cité de l'Espace",
      "Airbus Blagnac",
      "Carcassonne",
    ],
    annualPassengers: "12 million",
  },
  "nice-ville": {
    extraFaq: [
      { question: "How much is a taxi from Nice station to the airport?", answer: "The taxi flat fare from Nice Ville to Nice Côte d'Azur Airport is around €25. The journey takes 10-20 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to the Promenade des Anglais. On holiday within 10 minutes.", name: "Julie M.", initials: "JM", role: "Parisian" },
      { text: "Quick, comfortable station to Monaco transfer. The driver knows the Côte d'Azur inside out.", name: "Roberto F.", initials: "RF", role: "Businessman, Monaco" },
      { text: "TER from Cannes, taxi to my hotel in Vieux-Nice. Simple and efficient.", name: "Diana K.", initials: "DK", role: "Tourist" },
    ],
    practicalInfo: [
      "TGV to Paris (5h30), Marseille (2h30)",
      "TER along the Côte d'Azur",
      "Right in the centre of Nice",
      "Transfers to Monaco and Cannes",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Nice",
    destinations: [
      "Nice Côte d'Azur Airport",
      "Promenade des Anglais",
      "Monaco",
      "Cannes",
      "Antibes",
    ],
    annualPassengers: "8 million",
  },
  "nantes": {
    extraFaq: [
      { question: "How do I get to La Baule from Nantes station?", answer: "The taxi flat fare from Nantes to La Baule is around €80, for a 45-55 minute journey. A direct alternative to the TER." },
    ],
    testimonials: [
      { text: "TGV from Paris in 2h15, taxi to my hotel near the château. Fast and efficient.", name: "Mathieu L.", initials: "ML", role: "Tourist" },
      { text: "Impeccable station to airport transfer for an early morning flight.", name: "Charlotte D.", initials: "CD", role: "Nantes local" },
      { text: "Weekend in La Baule, the taxi took us from the station straight to the hotel.", name: "Dominique B.", initials: "DB", role: "Family" },
    ],
    practicalInfo: [
      "TGV to Paris (2h15), Rennes (1h20)",
      "Station right in the city centre",
      "Transfers to La Baule and the coast",
      "Free waiting time in case of delay",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Nantes",
    destinations: [
      "Nantes Atlantique Airport",
      "Château des Ducs",
      "Machines de l'Île",
      "La Baule",
      "Saint-Nazaire",
    ],
    annualPassengers: "12 million",
  },
  "strasbourg": {
    extraFaq: [
      { question: "How long does the TGV from Paris to Strasbourg take?", answer: "The Paris-Strasbourg TGV takes 1h46 via the LGV Est high-speed line. The station is right in the centre of Strasbourg." },
    ],
    testimonials: [
      { text: "TGV from Paris in 1h46, taxi to Petite France. A magnificent arrival in Strasbourg.", name: "Caroline T.", initials: "CT", role: "Tourist" },
      { text: "ICE from Frankfurt, transfer to the European Parliament. Professional, punctual driver.", name: "Martin S.", initials: "MS", role: "EU civil servant" },
      { text: "Quick station to airport transfer, the driver knew the shortcuts.", name: "Frédéric W.", initials: "FW", role: "Strasbourg local" },
    ],
    practicalInfo: [
      "TGV to Paris (1h46), ICE to Frankfurt",
      "Station with a modern glass canopy",
      "Right in the historic centre",
      "Transfers to Colmar and the Alsace Wine Route",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Strasbourg",
    destinations: [
      "Strasbourg-Entzheim Airport",
      "Cathedral / Petite France",
      "European Parliament",
      "Colmar",
      "Europa-Park (Germany)",
    ],
    annualPassengers: "15 million",
  },
  "montpellier-saint-roch": {
    extraFaq: [
      { question: "Is Saint-Roch station in the city centre?", answer: "Yes, Montpellier Saint-Roch station is right in the centre, 300 m from the Place de la Comédie." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to the Place de la Comédie in 4 minutes. Great.", name: "Stéphane R.", initials: "SR", role: "Parisian" },
      { text: "Quick, pleasant transfer to the beaches at Palavas.", name: "Marina V.", initials: "MV", role: "Tourist" },
      { text: "Punctual driver on every business trip. Quality service.", name: "Olivier B.", initials: "OB", role: "Sales representative" },
    ],
    practicalInfo: [
      "TGV to Paris (3h20), Lyon (1h45)",
      "Right in the centre of Montpellier",
      "Transfers to the Mediterranean beaches",
      "Free waiting time in case of delay",
      "Future Montpellier Sud de France TGV station",
    ],
    distanceFromCity: "Central Montpellier",
    destinations: [
      "Montpellier Méditerranée Airport",
      "Place de la Comédie",
      "Beaches (Palavas)",
      "Nîmes",
      "Sète",
    ],
    annualPassengers: "9 million",
  },
  "rennes": {
    extraFaq: [
      { question: "How long does the TGV from Paris to Rennes take?", answer: "The Paris-Rennes TGV takes 1h27 via the LGV Bretagne high-speed line. The station is right in the centre of Rennes." },
    ],
    testimonials: [
      { text: "TGV from Paris in 1h27, taxi to my hotel in the centre. Brittany within easy reach.", name: "Yannick B.", initials: "YB", role: "Parisian" },
      { text: "Quick station to airport transfer. The driver was very friendly.", name: "Gwenaëlle L.", initials: "GL", role: "Rennes local" },
      { text: "Trip to Mont-Saint-Michel from the station, the taxi did the return journey.", name: "François P.", initials: "FP", role: "Tourist" },
    ],
    practicalInfo: [
      "TGV to Paris (1h27), Nantes (1h20)",
      "Station right in the city centre",
      "Transfers to Saint-Malo and Mont-Saint-Michel",
      "Free waiting time in case of delay",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Rennes",
    destinations: [
      "Rennes Bretagne Airport",
      "Historic centre",
      "Saint-Malo",
      "Mont-Saint-Michel",
      "Vitré",
    ],
    annualPassengers: "10 million",
  },
  "marne-la-vallee-chessy": {
    extraFaq: [
      { question: "How do I get to Disneyland from the station?", answer: "Marne-la-Vallée Chessy TGV station is directly connected to Disneyland Paris. The taxi drops you outside your Disney hotel in 2-3 minutes." },
    ],
    testimonials: [
      { text: "TGV from Lyon, taxi straight to Disneyland. The children were delighted!", name: "Stéphanie C.", initials: "SC", role: "Mum from Lyon" },
      { text: "Transfer to CDG after a Disney stay. The driver had child seats.", name: "Thomas B.", initials: "TB", role: "Dad" },
      { text: "TGV arrival from the regions, taxi to our Disney hotel. Simple and quick.", name: "Carole M.", initials: "CM", role: "Tourist" },
    ],
    practicalInfo: [
      "TGV station directly connected to Disneyland Paris",
      "Direct TGV from Lyon, Marseille, Lille, Bordeaux",
      "Child seats available on request",
      "Transfers to the Disney hotels and Val d'Europe",
    ],
    distanceFromCity: "10 km from Paris (77)",
    destinations: [
      "Disneyland Paris",
      "Central Paris (Châtelet)",
      "CDG Airport",
      "Orly Airport",
      "Val d'Europe",
    ],
    annualPassengers: "15 million",
  },
  "lyon-saint-exupery-tgv": {
    extraFaq: [
      { question: "Why get off at Lyon Saint-Exupéry TGV?", answer: "This station is convenient for TGV connections without going through central Lyon, or for heading straight to Grenoble, Chambéry or the ski resorts." },
    ],
    testimonials: [
      { text: "Direct TGV from Montpellier, then a taxi to central Lyon. Faster than changing at Part-Dieu.", name: "Vincent A.", initials: "VA", role: "Sales representative" },
      { text: "TGV station and airport in the same place. The taxi picked me up at the TGV exit.", name: "Delphine G.", initials: "DG", role: "Traveller" },
      { text: "Transfer to Grenoble for winter sports. Driver equipped with snow tyres.", name: "Paul E.", initials: "PE", role: "Skier" },
    ],
    practicalInfo: [
      "TGV station built into the airport",
      "Direct TGV from Marseille, Montpellier, Rennes",
      "Transfers to the ski resorts",
      "Vehicles fitted with snow tyres in season",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "25 km from Lyon",
    destinations: [
      "Lyon Part-Dieu",
      "Lyon Perrache",
      "Grenoble",
      "Annecy",
      "Chambéry",
    ],
    annualPassengers: "4 million",
  },
  "avignon-tgv": {
    extraFaq: [
      { question: "Is the TGV station in the city centre?", answer: "No, Avignon TGV station is 5 km south of the centre. A taxi takes 10-15 minutes to reach the Palais des Papes." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi straight to the Palais des Papes. Within 12 minutes I was steeped in history.", name: "Claire L.", initials: "CL", role: "Tourist" },
      { text: "Avignon Festival, the taxi dropped me in the city centre despite the closed streets.", name: "Jean T.", initials: "JT", role: "Festival-goer" },
      { text: "Magnificent transfer to the Luberon. The driver knew the hilltop villages.", name: "Margaret H.", initials: "MH", role: "English tourist" },
    ],
    practicalInfo: [
      "TGV to Paris (2h40), Lyon (1h)",
      "Out-of-town station (5 km from the centre)",
      "Transfers to the Luberon and the Alpilles",
      "Avignon Festival in July",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "5 km from central Avignon",
    destinations: [
      "Central Avignon (Palais des Papes)",
      "Avignon Centre (station)",
      "Aix-en-Provence",
      "Nîmes",
      "Luberon (Gordes)",
    ],
    annualPassengers: "4 million",
  },
  "aix-en-provence-tgv": {
    extraFaq: [
      { question: "Is the TGV station far from central Aix?", answer: "Yes, Aix-en-Provence TGV station is 15 km from the centre. A taxi takes 15-25 minutes and costs around €30." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to the Cours Mirabeau. Aix is magnificent, and so is the drive.", name: "Virginie D.", initials: "VD", role: "Tourist" },
      { text: "Quick transfer to Marseille-Provence Airport. Convenient and economical.", name: "Yves M.", initials: "YM", role: "Businessman" },
      { text: "The driver took the scenic route on the transfer to the Calanques.", name: "Sonia R.", initials: "SR", role: "Hiker" },
    ],
    practicalInfo: [
      "TGV to Paris (3h), Lyon (1h25)",
      "Out-of-town station (15 km from the centre)",
      "Close to Marseille-Provence Airport",
      "Transfers to the Luberon and the Calanques",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "15 km from central Aix",
    destinations: [
      "Central Aix-en-Provence",
      "Central Marseille",
      "Marseille-Provence Airport",
      "Calanques (Cassis)",
      "Luberon",
    ],
    annualPassengers: "4 million",
  },
  "valence-tgv": {
    extraFaq: [
      { question: "Why is the TGV station far from the centre?", answer: "Valence TGV station is on the LGV Méditerranée high-speed line, 10 km from the centre. A taxi is the fastest way to reach Valence." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to central Valence. Handy since the TGV station is out of town.", name: "Bruno P.", initials: "BP", role: "Valence local" },
      { text: "Transfer to the Vercors for a hiking weekend. Friendly, punctual driver.", name: "Amélie J.", initials: "AJ", role: "Hiker" },
      { text: "Perfect TGV connection with a taxi to Montélimar. Reliable service.", name: "René C.", initials: "RC", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (2h15), Lyon (40 min)",
      "Out-of-town station (10 km from the centre)",
      "Gateway to the Vercors and the Drôme",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "10 km from central Valence",
    destinations: [
      "Central Valence",
      "Valence Ville (central station)",
      "Montélimar",
      "Die (Vercors)",
      "Romans-sur-Isère",
    ],
    annualPassengers: "2 million",
  },
  "metz": {
    extraFaq: [
      { question: "Can I take a taxi from Metz to Luxembourg?", answer: "Yes, the taxi flat fare from Metz to Luxembourg is around €65, for a 40-50 minute journey." },
    ],
    testimonials: [
      { text: "TGV from Paris, taxi to the Centre Pompidou. Metz is a magnificent city.", name: "Stéphane G.", initials: "SG", role: "Tourist" },
      { text: "Transfer to Luxembourg for work. Competent cross-border driver.", name: "Alain H.", initials: "AH", role: "Cross-border commuter" },
      { text: "Stunning Metz station, taxi straight to my hotel. Perfect service.", name: "Cécile W.", initials: "CW", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (1h24)",
      "Neo-Romanesque station listed as a historic monument",
      "Centre Pompidou-Metz 5 min away",
      "Transfers to Luxembourg",
      "Free waiting time in case of delay",
    ],
    distanceFromCity: "Central Metz",
    destinations: [
      "Centre Pompidou-Metz",
      "Metz-Nancy-Lorraine Airport",
      "Nancy",
      "Luxembourg",
      "Thionville",
    ],
    annualPassengers: "7 million",
  },
  "nancy": {
    extraFaq: [
      { question: "How long does the Paris-Nancy TGV take?", answer: "The Paris-Nancy TGV takes about 1h30. The station is right in the centre of Nancy, 5 minutes from Place Stanislas." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to Place Stanislas. A wonderful arrival.", name: "Hélène R.", initials: "HR", role: "Tourist" },
      { text: "Station to Lorraine airport transfer. The driver knew the route well.", name: "Franck B.", initials: "FB", role: "Nancy local" },
      { text: "Back from a weekend in Vittel, punctual taxi at Nancy station.", name: "Mireille T.", initials: "MT", role: "Spa guest" },
    ],
    practicalInfo: [
      "TGV to Paris (1h30)",
      "Station 5 min from Place Stanislas",
      "Transfers to the Vosges and spa towns",
      "Free waiting time if your train is delayed",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "Central Nancy",
    destinations: [
      "Place Stanislas",
      "Metz-Nancy-Lorraine Airport",
      "Metz",
      "Épinal",
      "Vittel / Contrexéville",
    ],
    annualPassengers: "7 million",
  },
  "reims": {
    extraFaq: [
      { question: "How long does the Paris-Reims TGV take?", answer: "The Paris-Reims TGV takes just 45 minutes. The station is right in the centre of Reims." },
    ],
    testimonials: [
      { text: "TGV from Paris in 45 min, then a taxi to the Pommery cellars. A perfect Champagne weekend.", name: "Ingrid V.", initials: "IV", role: "Tourist" },
      { text: "Transfer to Épernay for a cellar tour. The driver acted as our guide.", name: "Benjamin R.", initials: "BR", role: "Amateur wine lover" },
      { text: "Business meeting in Reims, punctual taxi at the station. TGV back in the evening.", name: "Muriel K.", initials: "MK", role: "Executive" },
    ],
    practicalInfo: [
      "TGV to Paris (45 min)",
      "Capital of Champagne",
      "Transfers to Épernay and the cellars",
      "UNESCO-listed cathedral 5 min away",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Reims",
    destinations: [
      "Reims Cathedral",
      "Champagne cellars (Pommery)",
      "CDG Airport",
      "Épernay",
      "Châlons-en-Champagne",
    ],
    annualPassengers: "5 million",
  },
  "dijon-ville": {
    extraFaq: [
      { question: "Can you visit the Burgundy vineyards by taxi?", answer: "Yes, our drivers offer transfers to Beaune, Nuits-Saint-Georges and the whole Côte de Beaune/Nuits. Tailored flat fare." },
    ],
    testimonials: [
      { text: "TGV from Paris in 1h40, then a taxi to the historic centre. Dijon is beautiful.", name: "Sylvie M.", initials: "SM", role: "Tourist" },
      { text: "Transfer to Beaune for the wine route. A knowledgeable driver.", name: "Pierre-Antoine L.", initials: "PAL", role: "Oenologist" },
      { text: "Business trip, a reliable and punctual taxi every time I come through.", name: "Gaëlle N.", initials: "GN", role: "Sales representative" },
    ],
    practicalInfo: [
      "TGV to Paris (1h40), Lyon (1h40)",
      "Capital of Burgundy",
      "Transfers along the Route des Grands Crus",
      "Free waiting time if your train is delayed",
      "Dijon gastronomy",
    ],
    distanceFromCity: "Central Dijon",
    destinations: [
      "Palace of the Dukes",
      "Beaune",
      "Dijon-Bourgogne Airport",
      "Auxerre",
      "Dole",
    ],
    annualPassengers: "7 million",
  },
  "grenoble": {
    extraFaq: [
      { question: "Can you get to the ski resorts by taxi?", answer: "Yes, our drivers offer transfers to all the resorts (Alpe d'Huez, Chamrousse, Les 2 Alpes, etc.) in winter-equipped vehicles." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to my hotel in the city centre. Stunning mountain views.", name: "Arnaud S.", initials: "AS", role: "Parisian" },
      { text: "Transfer to Alpe d'Huez for skiing. The driver had snow chains and winter tyres.", name: "Sophie D.", initials: "SD", role: "Skier" },
      { text: "Grenoble station to Lyon airport. The journey was well handled despite the snow.", name: "Jean-Marc B.", initials: "JMB", role: "Businessman" },
    ],
    practicalInfo: [
      "TGV to Paris (3h)",
      "Capital of the Alps",
      "Transfers to the ski resorts",
      "Vehicles fitted with winter tyres in winter",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Grenoble",
    destinations: [
      "Bastille (cable car)",
      "Lyon Saint-Exupéry Airport",
      "Alpe d'Huez",
      "Chamrousse",
      "Voiron",
    ],
    annualPassengers: "5 million",
  },
  "tours": {
    extraFaq: [
      { question: "How can you visit the Loire châteaux by taxi?", answer: "Our drivers offer tailored tours: Villandry, Chenonceau, Amboise, Chambord. A full-day flat fare is available." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Loire châteaux. A magical day.", name: "Béatrice F.", initials: "BF", role: "Tourist" },
      { text: "Quick transfer to Chenonceau. The driver told us the history of the château.", name: "William S.", initials: "WS", role: "American tourist" },
      { text: "I take the Paris-Tours TGV regularly, and the taxi is always spotless.", name: "Christophe V.", initials: "CV", role: "Executive" },
    ],
    practicalInfo: [
      "TGV to Paris (1h15)",
      "Gateway to the Loire Valley châteaux",
      "Transfers to Chenonceau, Amboise, Villandry",
      "Free waiting time if your train is delayed",
      "Wine tours in Touraine",
    ],
    distanceFromCity: "Central Tours",
    destinations: [
      "Château de Villandry",
      "Château de Chenonceau",
      "Amboise",
      "Tours Val de Loire Airport",
      "Chinon",
    ],
    annualPassengers: "7 million",
  },
  "le-mans": {
    extraFaq: [
      { question: "How long does the Paris-Le Mans TGV take?", answer: "The Paris-Le Mans TGV takes about 55 minutes. It is a rail hub for Brittany and the Pays de la Loire." },
    ],
    testimonials: [
      { text: "TGV from Paris for the 24 Hours of Le Mans. Taxi straight to the circuit. Great atmosphere.", name: "Julien P.", initials: "JP", role: "Motor racing fan" },
      { text: "Transfer to the Cité Plantagenêt, the driver knew the history of the town.", name: "Linda A.", initials: "LA", role: "Tourist" },
      { text: "Fast TGV from Paris, punctual taxi. Le Mans is an underrated destination.", name: "Nicolas M.", initials: "NM", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (55 min), Rennes (1h10)",
      "24 Hours circuit nearby",
      "Medieval Cité Plantagenêt",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Le Mans",
    destinations: [
      "24 Hours of Le Mans circuit",
      "Cité Plantagenêt",
      "Le Mans-Arnage Airport",
      "Laval",
      "Alençon",
    ],
    annualPassengers: "5 million",
  },
  "rouen-rive-droite": {
    extraFaq: [
      { question: "How do you get from Rouen to Honfleur?", answer: "The Rouen-Honfleur taxi flat fare is about €90, for a journey of 55 min to 1h10. There is no direct train." },
    ],
    testimonials: [
      { text: "Train from Paris Saint-Lazare, then a taxi to the historic centre. Rouen is superb.", name: "Pascale L.", initials: "PL", role: "Tourist" },
      { text: "Transfer to Honfleur for the weekend. A beautiful drive and a friendly driver.", name: "Franck D.", initials: "FD", role: "Parisian" },
      { text: "Day trip to Giverny, the taxi did the return journey. Monet is well worth the detour.", name: "Emily B.", initials: "EB", role: "American tourist" },
    ],
    practicalInfo: [
      "Direct trains to Paris Saint-Lazare (1h20)",
      "Capital of Normandy",
      "Transfers to Honfleur, Giverny, Étretat",
      "Free waiting time if your train is delayed",
      "Cathedral painted by Monet",
    ],
    distanceFromCity: "Central Rouen",
    destinations: [
      "Rouen Cathedral",
      "Le Havre",
      "Honfleur",
      "Giverny (Monet)",
      "Dieppe",
    ],
    annualPassengers: "8 million",
  },
  "toulon": {
    extraFaq: [
      { question: "How do you get to Corsica from Toulon?", answer: "The port of Toulon is 5-8 min from the station by taxi. Ferries to Bastia, Ajaccio, Porto-Vecchio." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the port for the ferry to Corsica. A perfect connection.", name: "Alain M.", initials: "AM", role: "Traveller" },
      { text: "Transfer for Porquerolles (boarding at Hyères). The driver knew the boat timetable.", name: "Isabelle N.", initials: "IN", role: "Tourist" },
      { text: "Weekend in Bandol, a quick and pleasant taxi ride from the station.", name: "René L.", initials: "RL", role: "Provence local" },
    ],
    practicalInfo: [
      "TGV to Paris (4h), Marseille (1h)",
      "Corsica ferry port 5 min away",
      "Transfers to the Golden Isles (Porquerolles)",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Toulon",
    destinations: [
      "Port of Toulon (Corsica ferries)",
      "Hyères / Porquerolles",
      "Bandol",
      "Toulon-Hyères Airport",
      "Saint-Tropez",
    ],
    annualPassengers: "3 million",
  },
  "clermont-ferrand": {
    extraFaq: [
      { question: "Is there a Paris-Clermont TGV?", answer: "There is no high-speed line yet, but the POCL project is under study. The journey currently takes 3h30 by Intercités." },
    ],
    testimonials: [
      { text: "Intercités from Paris, then a taxi to Place de Jaude. Clermont is a lovely surprise.", name: "Pauline C.", initials: "PC", role: "Tourist" },
      { text: "Transfer to Vulcania with the children. The driver took great care of us.", name: "Éric G.", initials: "EG", role: "Dad" },
      { text: "Business trip, reliable taxi. Can't wait for the TGV to Clermont!", name: "Anne-Sophie D.", initials: "ASD", role: "Michelin executive" },
    ],
    practicalInfo: [
      "Intercités to Paris (3h30)",
      "Capital of Auvergne",
      "Transfers to the volcanoes and Vulcania",
      "Free waiting time if your train is delayed",
      "Michelin headquarters",
    ],
    distanceFromCity: "Central Clermont-Ferrand",
    destinations: [
      "Place de Jaude",
      "Vulcania",
      "Puy de Dôme",
      "Vichy",
      "Clermont-Ferrand Auvergne Airport",
    ],
    annualPassengers: "4 million",
  },
  "saint-etienne-chateaucreux": {
    extraFaq: [
      { question: "How do you get from Saint-Étienne to Lyon?", answer: "The Saint-Étienne to Lyon TER takes about 50 minutes. By taxi, allow €55 and 35-45 minutes." },
    ],
    testimonials: [
      { text: "TER from Lyon, then a taxi to the Geoffroy-Guichard stadium for a match. Allez les Verts!", name: "Maxime V.", initials: "MV", role: "ASSE supporter" },
      { text: "Transfer to Lyon airport for a flight. The journey was well handled.", name: "Christine F.", initials: "CF", role: "Saint-Étienne local" },
      { text: "Visit to the Le Corbusier site in Firminy. The taxi made getting there easy.", name: "Jacques P.", initials: "JP", role: "Architect" },
    ],
    practicalInfo: [
      "TER to Lyon (50 min)",
      "Capital of design (Cité du Design)",
      "Geoffroy-Guichard Stadium nearby",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Saint-Étienne",
    destinations: [
      "City centre (Place Jean Jaurès)",
      "Lyon Part-Dieu",
      "Lyon Saint-Exupéry Airport",
      "Geoffroy-Guichard Stadium",
      "Firminy (Le Corbusier)",
    ],
    annualPassengers: "4 million",
  },
  "angers-saint-laud": {
    extraFaq: [
      { question: "How long does the Paris-Angers TGV take?", answer: "The Paris-Angers TGV takes about 1h30. Saint-Laud station is right in the centre of Angers." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the château in 4 minutes. Angers is a gem.", name: "Diane L.", initials: "DL", role: "Tourist" },
      { text: "Transfer to Saumur and its cellars. A punctual and friendly driver.", name: "Hervé G.", initials: "HG", role: "Oenologist" },
      { text: "I take the TGV regularly, and a TaxiNeo taxi is my go-to when I arrive in Angers.", name: "Florence B.", initials: "FB", role: "Executive" },
    ],
    practicalInfo: [
      "TGV to Paris (1h30)",
      "Renovated station in the city centre",
      "Transfers to the Loire Valley châteaux",
      "Anjou vineyards nearby",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Angers",
    destinations: [
      "Château d'Angers",
      "Angers-Marcé Airport",
      "Saumur",
      "Nantes",
      "Le Mans",
    ],
    annualPassengers: "5 million",
  },
  "poitiers": {
    extraFaq: [
      { question: "How do you get to Futuroscope from the station?", answer: "Futuroscope is 12 km from Poitiers station, which is 10-15 minutes by taxi for about €18." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi straight to Futuroscope with the children. Magical.", name: "Céline T.", initials: "CT", role: "Mum" },
      { text: "Business trip, quick taxi to the centre. Flawless service.", name: "Michel R.", initials: "MR", role: "Sales representative" },
      { text: "Station to Futuroscope transfer in 12 minutes. Ideal with children.", name: "Sandrine P.", initials: "SP", role: "Family" },
    ],
    practicalInfo: [
      "TGV to Paris (1h20), Bordeaux (1h40)",
      "Futuroscope 12 km away",
      "Medieval city centre",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Poitiers",
    destinations: [
      "City centre (Notre-Dame-la-Grande)",
      "Futuroscope",
      "Poitiers-Biard Airport",
      "Châtellerault",
      "Niort",
    ],
    annualPassengers: "4 million",
  },
  "perpignan": {
    extraFaq: [
      { question: "Is Perpignan the last station before Spain?", answer: "Yes, Perpignan is the last major French station before Barcelona. Salvador Dalí considered it the centre of the world." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to Collioure. Dalí was right, it is the centre of the world.", name: "Pascal M.", initials: "PM", role: "Tourist" },
      { text: "Quick transfer to the Canet beaches. The holiday has begun!", name: "Marion K.", initials: "MK", role: "Holidaymaker" },
      { text: "Beautiful station, taxi straight away. Perpignan is an underrated city.", name: "Éric B.", initials: "EB", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (5h), Barcelona (1h30)",
      "Station declared 'centre of the world' by Dalí",
      "Transfers to Collioure and the Côte Vermeille",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Perpignan",
    destinations: [
      "City centre (Castillet)",
      "Perpignan-Rivesaltes Airport",
      "Collioure",
      "Canet-en-Roussillon (beach)",
      "Barcelona (Spain)",
    ],
    annualPassengers: "2 million",
  },
  "caen": {
    extraFaq: [
      { question: "How can you visit the D-Day Landing Beaches?", answer: "Our drivers offer transfers and tours to Omaha Beach, Utah Beach, Arromanches. Full-day flat fares are available." },
    ],
    testimonials: [
      { text: "Train from Paris, then a taxi to the D-Day beaches. Moving and convenient.", name: "Robert J.", initials: "RJ", role: "Amateur historian" },
      { text: "Station to Ouistreham ferry transfer for England. Perfect timing.", name: "Trevor H.", initials: "TH", role: "British traveller" },
      { text: "Weekend in Deauville, the taxi picked us up right at the station.", name: "Christine A.", initials: "CA", role: "Parisian" },
    ],
    practicalInfo: [
      "Direct train to Paris Saint-Lazare (2h)",
      "Caen Memorial 10 min away",
      "D-Day Landing Beaches 35 min away",
      "Ouistreham-Portsmouth ferry",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Caen",
    destinations: [
      "Caen Memorial",
      "D-Day Landing Beaches",
      "Ouistreham (ferry)",
      "Deauville / Trouville",
      "Bayeux",
    ],
    annualPassengers: "4 million",
  },
  "limoges-benedictins": {
    extraFaq: [
      { question: "Why is Limoges station famous?", answer: "Limoges-Bénédictins station is considered one of the most beautiful in France, with its Art Deco dome and bell tower." },
    ],
    testimonials: [
      { text: "The most beautiful station in France! The taxi was waiting for me outside this Art Deco gem.", name: "Catherine B.", initials: "CB", role: "Tourist" },
      { text: "Transfer to Oradour-sur-Glane, a moving visit. A respectful driver.", name: "Didier S.", initials: "DS", role: "Historian" },
      { text: "Business trip to Limoges, punctual and professional taxi.", name: "Karine L.", initials: "KL", role: "Sales representative" },
    ],
    practicalInfo: [
      "Voted the most beautiful station in France",
      "Intercités to Paris (3h)",
      "Capital of porcelain",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Limoges",
    destinations: [
      "City centre",
      "Limoges-Bellegarde Airport",
      "Oradour-sur-Glane",
      "Porcelain Museum",
      "Brive-la-Gaillarde",
    ],
    annualPassengers: "3 million",
  },
  "orleans": {
    extraFaq: [
      { question: "How do you get to Chambord from Orléans?", answer: "The Orléans-Chambord taxi flat fare is about €55, for a journey of 30-40 minutes." },
    ],
    testimonials: [
      { text: "Train from Paris, then a taxi to the centre. Orléans is a lovely stop on the way to the châteaux.", name: "Valérie H.", initials: "VH", role: "Tourist" },
      { text: "Transfer to Chambord, the driver acted as a volunteer guide!", name: "Gérard N.", initials: "GN", role: "Parisian" },
      { text: "The city of Joan of Arc, quick taxi from the station. Very good.", name: "Morgane D.", initials: "MD", role: "Student" },
    ],
    practicalInfo: [
      "Train to Paris (1h10)",
      "Transfers to Chambord and the châteaux",
      "City of Joan of Arc",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Orléans",
    destinations: [
      "Sainte-Croix Cathedral",
      "Château de Chambord",
      "Blois",
      "Paris (Austerlitz)",
      "CDG Airport",
    ],
    annualPassengers: "5 million",
  },
  "mulhouse-ville": {
    extraFaq: [
      { question: "Can you take a taxi to Switzerland?", answer: "Yes, our drivers offer transfers to Basel (20-25 min, ~€35) and EuroAirport (20-25 min, ~€30)." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Cité de l'Automobile. An incredible collection!", name: "Bruno F.", initials: "BF", role: "Car enthusiast" },
      { text: "Quick and professional transfer to EuroAirport.", name: "Isabelle K.", initials: "IK", role: "Mulhouse local" },
      { text: "Taxi to Basel for a conference. A flawless cross-border transfer.", name: "Markus S.", initials: "MS", role: "Doctor, Basel" },
    ],
    practicalInfo: [
      "TGV to Paris (2h50)",
      "Where France, Switzerland and Germany meet",
      "Cité de l'Automobile and Cité du Train",
      "Cross-border transfers",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Mulhouse",
    destinations: [
      "Cité de l'Automobile",
      "EuroAirport Basel-Mulhouse",
      "Colmar",
      "Basel (Switzerland)",
      "Freiburg (Germany)",
    ],
    annualPassengers: "4 million",
  },
  "amiens": {
    extraFaq: [
      { question: "How can you visit the Baie de Somme?", answer: "The Amiens to Baie de Somme taxi flat fare is about €60, for a journey of 40-50 minutes. Ideal for seeing the seals." },
    ],
    testimonials: [
      { text: "Train from Paris, then a taxi to the cathedral. Amiens is a beautiful city.", name: "Thierry L.", initials: "TL", role: "Tourist" },
      { text: "Transfer to the Baie de Somme, the driver knew all the best spots.", name: "Brigitte M.", initials: "BM", role: "Nature lover" },
      { text: "Business trip, punctual taxi. Good TaxiNeo coverage in the Somme.", name: "Vincent C.", initials: "VC", role: "Sales representative" },
    ],
    practicalInfo: [
      "Direct train to Paris Nord (1h10)",
      "Largest Gothic cathedral in France",
      "Hortillonnages (floating gardens)",
      "Transfers to the Baie de Somme",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Amiens",
    destinations: [
      "Amiens Cathedral",
      "Hortillonnages",
      "Beauvais-Tillé Airport",
      "Baie de Somme",
      "Albert (1914-18 memorial)",
    ],
    annualPassengers: "4 million",
  },
  "besancon-viotte": {
    extraFaq: [
      { question: "Are there two stations in Besançon?", answer: "Yes, Viotte station is in the city centre and Besançon Franche-Comté TGV station is 10 km away. A taxi links the two in 10-15 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Citadel. Besançon is an underrated city.", name: "Marion T.", initials: "MT", role: "Tourist" },
      { text: "Transfer to Pontarlier for cross-country skiing. A punctual driver.", name: "Éric V.", initials: "EV", role: "Sports enthusiast" },
      { text: "Connection with the TGV at Franche-Comté station. Quick taxi.", name: "Nadia B.", initials: "NB", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (2h)",
      "Vauban Citadel (UNESCO)",
      "Capital of watchmaking",
      "Transfers to the Jura and Switzerland",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Besançon",
    destinations: [
      "Vauban Citadel",
      "Besançon Franche-Comté TGV",
      "Pontarlier (Swiss border)",
      "Belfort",
      "Dole",
    ],
    annualPassengers: "3 million",
  },
  "la-rochelle-ville": {
    extraFaq: [
      { question: "How do you get to the Île de Ré?", answer: "The La Rochelle to Île de Ré taxi flat fare is about €30 (plus the bridge toll). Journey of 20-25 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Vieux-Port. Sea air in 3 hours, magical.", name: "Sophie T.", initials: "ST", role: "Parisian" },
      { text: "Quick transfer to the Île de Ré. The holiday started right at the station.", name: "Antoine R.", initials: "AR", role: "Holidaymaker" },
      { text: "The taxi dropped me right outside the Aquarium. Handy with the children.", name: "Nathalie J.", initials: "NJ", role: "Mum" },
    ],
    practicalInfo: [
      "TGV to Paris (3h)",
      "Station 5 min from the Vieux-Port",
      "Transfers to the Île de Ré",
      "Aquarium nearby",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central La Rochelle",
    destinations: [
      "Vieux-Port",
      "La Rochelle Aquarium",
      "Île de Ré (bridge)",
      "La Rochelle-Laleu Airport",
      "Royan",
    ],
    annualPassengers: "2 million",
  },
  "bayonne": {
    extraFaq: [
      { question: "Can you take a taxi to Spain?", answer: "Yes, the Bayonne to San Sebastián taxi flat fare is about €80, for a journey of 45-55 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi straight to Biarritz. The waves were waiting for me.", name: "Julien S.", initials: "JS", role: "Surfer" },
      { text: "Transfer to Saint-Jean-de-Luz for a wedding. Flawless service.", name: "Marie L.", initials: "ML", role: "Wedding guest" },
      { text: "Taxi to San Sebastián for a foodie weekend. A perfect cross-border transfer.", name: "Carlos G.", initials: "CG", role: "Gourmet" },
    ],
    practicalInfo: [
      "TGV to Paris (4h)",
      "Gateway to the Basque Country",
      "Transfers to Biarritz and Saint-Jean-de-Luz",
      "Cross-border taxi to Spain",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Bayonne",
    destinations: [
      "City centre (Cathedral)",
      "Biarritz",
      "Biarritz-Pays Basque Airport",
      "Saint-Jean-de-Luz",
      "San Sebastián (Spain)",
    ],
    annualPassengers: "2 million",
  },
  "chambery": {
    extraFaq: [
      { question: "How do you get to the ski resorts from Chambéry?", answer: "Our drivers offer transfers to Courchevel (~€120, 1h), Val Thorens (~€140, 1h15), Méribel and the 3 Vallées. Winter-equipped vehicles." },
    ],
    testimonials: [
      { text: "Direct TGV from Paris, then a taxi to Courchevel. The start of our ski holiday.", name: "Christine D.", initials: "CD", role: "Skier" },
      { text: "Transfer to the Lac du Bourget. Magnificent scenery and a local driver.", name: "Philippe M.", initials: "PM", role: "Tourist" },
      { text: "Perfect TGV connection, taxi straight to my hotel. Chambéry is charming.", name: "Léa V.", initials: "LV", role: "Traveller" },
    ],
    practicalInfo: [
      "TGV to Paris (3h)",
      "Gateway to the Savoie ski resorts",
      "Courchevel, Méribel, Val Thorens within reach",
      "Vehicles fitted with winter tyres",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Chambéry",
    destinations: [
      "City centre (Château)",
      "Chambéry-Savoie Airport",
      "Courchevel",
      "Val Thorens",
      "Lac du Bourget (Aix-les-Bains)",
    ],
    annualPassengers: "3 million",
  },
  "cannes": {
    extraFaq: [
      { question: "How do you get around during the Cannes Film Festival?", answer: "Book your taxi in advance during the Festival. Our drivers know the alternative routes to avoid road closures." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Croisette. Cannes shines even outside the Festival.", name: "Isabelle P.", initials: "IP", role: "Tourist" },
      { text: "During the Cannes Film Festival, the taxi handled the road closures like a pro.", name: "Jean-Claude M.", initials: "JCM", role: "Film industry professional" },
      { text: "Station to Nice airport transfer, perfect for my flight.", name: "Angela T.", initials: "AT", role: "Cannes local" },
    ],
    practicalInfo: [
      "TGV to Paris (5h)",
      "Cannes Film Festival in May",
      "La Croisette 3 min away",
      "Transfers to Nice, Monaco, Grasse",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Cannes",
    destinations: [
      "La Croisette / Palais des Festivals",
      "Nice Côte d'Azur Airport",
      "Central Nice",
      "Monaco",
      "Grasse (perfumeries)",
    ],
    annualPassengers: "3 million",
  },
  "versailles-chantiers": {
    extraFaq: [
      { question: "How do you get to the Palace from the station?", answer: "Versailles Chantiers station is a 10-minute walk from the Palace. By taxi it takes 3-5 minutes and the driver drops you at the gates." },
    ],
    testimonials: [
      { text: "Train from Paris, then a taxi straight to the Palace. No queuing for transport.", name: "Keiko Y.", initials: "KY", role: "Japanese tourist" },
      { text: "Quick Versailles-Orly transfer for my flight. Convenient from Versailles.", name: "Laurent F.", initials: "LF", role: "Versailles local" },
      { text: "Large family, the people carrier dropped us outside the Palace. The children were delighted.", name: "Camille S.", initials: "CS", role: "Mum" },
    ],
    practicalInfo: [
      "Main station in Versailles",
      "Palace of Versailles 3 min away",
      "RER C, Transilien N and U",
      "Transfers to Paris and the airports",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Versailles",
    destinations: [
      "Palace of Versailles",
      "Central Paris (Châtelet)",
      "CDG Airport",
      "Orly Airport",
      "La Défense",
    ],
    annualPassengers: "15 million",
  },
  "pau": {
    extraFaq: [
      { question: "How do you get to Lourdes from Pau?", answer: "The Pau to Lourdes taxi flat fare is about €45, for a journey of 30-35 minutes." },
    ],
    testimonials: [
      { text: "TGV from Paris, then a taxi to the Boulevard des Pyrénées. Incredible mountain views.", name: "Jacques R.", initials: "JR", role: "Tourist" },
      { text: "Transfer to Lourdes for the pilgrimage. A thoughtful driver.", name: "Maria C.", initials: "MC", role: "Pilgrim" },
      { text: "Taxi to the airport, perfect for my flight to London.", name: "Pierre G.", initials: "PG", role: "Pau local" },
    ],
    practicalInfo: [
      "TGV to Paris (4h30)",
      "Panoramic views of the Pyrenees",
      "Transfers to Lourdes",
      "Gateway to the Pyrenees",
      "Free waiting time if your train is delayed",
    ],
    distanceFromCity: "Central Pau",
    destinations: [
      "Boulevard des Pyrénées",
      "Pau-Pyrénées Airport",
      "Lourdes",
      "Biarritz",
      "Gave de Pau (rafting)",
    ],
    annualPassengers: "1.5 million",
  },
};
