import type { AirportFAQ, AirportTestimonial } from "./airports";

/** Versions anglaises des champs propres à chaque aéroport, saisis en français dans airports.ts. */
export const airportsEn: Record<string, {
  extraFaq: AirportFAQ[];
  testimonials: AirportTestimonial[];
  practicalInfo: string[];
  distanceFromCity: string;
  /** Noms anglais, même ordre que destinations. */
  destinations: string[];
  annualPassengers: string;
}> = {
  "paris-charles-de-gaulle": {
    extraFaq: [
      { question: "What is the taxi flat fare between Paris and CDG?", answer: "The regulated flat fare is €56 to the Right Bank and €65 to the Left Bank of Paris. This price is fixed, with no luggage surcharge and no variation by time of day." },
      { question: "Where do I meet my driver at CDG?", answer: "Your driver waits for you in the arrivals area, after customs and baggage reclaim. They hold a sign with your name. The exact details of the meeting point are sent by text message." },
    ],
    testimonials: [
      { text: "My flight was 2 hours late and the driver was still there, smiling. Name board, help with the luggage, spotless vehicle. The best CDG transfer I have ever had.", name: "Sophie L.", initials: "SL", role: "Frequent traveller" },
      { text: "Terminal 2E at 5am, the driver was on time at the meeting point. Quick ride to the 8th arrondissement. The flat fare was honoured.", name: "Marc D.", initials: "MD", role: "Businessman" },
      { text: "Family of 5 with lots of luggage. The driver had the perfect people carrier and dropped us at the hotel in 40 minutes.", name: "Emma R.", initials: "ER", role: "British tourist" },
    ],
    practicalInfo: [
      "Regulated flat fare: Right Bank / Left Bank",
      "Free waiting for up to 45 min if your flight is delayed",
      "Meeting point in the arrivals area with a name board",
      "Child seats available on request",
      "On-board Wi-Fi and USB chargers",
      "Payment by card or app",
    ],
    distanceFromCity: "25 km from central Paris",
    destinations: [
      "Central Paris (Right Bank)",
      "Central Paris (Left Bank)",
      "La Défense",
      "Disneyland Paris",
      "Gare du Nord",
      "Orly Airport",
    ],
    annualPassengers: "67 million",
  },
  "paris-orly": {
    extraFaq: [
      { question: "What is the taxi flat fare between Paris and Orly?", answer: "The regulated flat fare is €36 to the Left Bank and €45 to the Right Bank. Guaranteed fixed price." },
      { question: "Orly 1, 2, 3 or 4: which one?", answer: "Check your terminal on your plane ticket. The driver drops you off or picks you up directly at the right terminal." },
    ],
    testimonials: [
      { text: "Back from holiday at Orly 3, taxi booked the day before. The driver was there right on time, smooth ride to the 15th.", name: "Karim B.", initials: "KB", role: "Parisian" },
      { text: "Perfect Orly to Versailles transfer for my seminar. Fixed price quoted upfront, no nasty surprises.", name: "Claire M.", initials: "CM", role: "Executive, Versailles" },
      { text: "I use TaxiNeo for every flight from Orly. Always reliable, even at 4am.", name: "Farid A.", initials: "FA", role: "Entrepreneur" },
    ],
    practicalInfo: [
      "Regulated flat fare: Left Bank / Right Bank",
      "Closer to Paris than CDG (14 km)",
      "Free waiting if your flight is delayed",
      "Drop-off at the exact terminal",
      "Saloon cars and people carriers",
    ],
    distanceFromCity: "14 km from central Paris",
    destinations: [
      "Central Paris (Left Bank)",
      "Central Paris (Right Bank)",
      "La Défense",
      "Versailles",
      "Gare de Lyon",
    ],
    annualPassengers: "33 million",
  },
  "nice-cote-d-azur": {
    extraFaq: [
      { question: "How much is a taxi from Nice Airport to Monaco?", answer: "The taxi flat fare from Nice Côte d'Azur to Monaco is around €90. The journey takes 30-40 minutes depending on traffic." },
      { question: "Can I book a night-time taxi at Nice Airport?", answer: "Yes, our drivers are available 24/7, including for flights arriving late in the evening or early in the morning." },
    ],
    testimonials: [
      { text: "Landed at Nice T2, the driver was waiting for me with a name board. Off to Monaco in 30 minutes, premium vehicle.", name: "Roberto F.", initials: "RF", role: "Businessman, Monaco" },
      { text: "Airport to Cannes transfer for the Festival. On time despite the traffic on the Croisette.", name: "Charlotte V.", initials: "CV", role: "Journalist" },
      { text: "Perfect welcome for our family of 4. The driver knows the Côte d'Azur inside out.", name: "Diana K.", initials: "DK", role: "Tourist" },
    ],
    practicalInfo: [
      "France's second-largest airport outside Paris",
      "Ideally located 7 km from the centre",
      "Transfers across the whole Côte d'Azur",
      "Saloon cars, people carriers and premium vehicles",
    ],
    distanceFromCity: "7 km from central Nice",
    destinations: [
      "Central Nice",
      "Cannes",
      "Monaco",
      "Antibes",
      "Saint-Tropez",
    ],
    annualPassengers: "14 million",
  },
  "lyon-saint-exupery": {
    extraFaq: [
      { question: "How much is a taxi from central Lyon to Saint Exupéry?", answer: "The taxi flat fare from central Lyon to Saint Exupéry Airport is €65–70 depending on your starting point. Guaranteed fixed price." },
      { question: "Is the Rhônexpress better value?", answer: "The Rhônexpress costs €16.90 per person. From 2 passengers, a TaxiNeo taxi becomes cheaper, with the added benefit of door-to-door service and help with your luggage." },
    ],
    testimonials: [
      { text: "Perfect transfer to Part-Dieu. The driver was tracking my flight and sent me a text when I landed.", name: "Thomas R.", initials: "TR", role: "Consultant, Lyon" },
      { text: "Saint-Ex to Grenoble in winter for the ski resorts. Professional driver, well-equipped vehicle.", name: "Antoine G.", initials: "AG", role: "Skier" },
      { text: "5am departure for a business flight. Impeccable punctuality.", name: "Nathalie G.", initials: "NG", role: "Sales director" },
    ],
    practicalInfo: [
      "TGV station built into the airport",
      "Free waiting in case of delay",
      "Transfers to the ski resorts in winter",
      "Vehicles fitted with snow tyres in season",
    ],
    distanceFromCity: "25 km from central Lyon",
    destinations: [
      "Lyon Part-Dieu",
      "Lyon Perrache",
      "Lyon Confluence",
      "Grenoble",
      "Annecy",
    ],
    annualPassengers: "12 million",
  },
  "marseille-provence": {
    extraFaq: [
      { question: "How much is a taxi from Marseille-Provence to Aix?", answer: "The taxi flat fare from Provence Airport to Aix-en-Provence is around €45. The journey takes 20-30 minutes." },
    ],
    testimonials: [
      { text: "Late arrival at 11pm, the driver was there. Flawless ride to the Vieux-Port. Thank you TaxiNeo.", name: "Karim B.", initials: "KB", role: "Marseille local" },
      { text: "Quick and pleasant airport transfer to Aix-en-Provence. The driver even recommended a restaurant.", name: "Véronique M.", initials: "VM", role: "Tourist" },
      { text: "Professional service for our sales team: 3 coordinated vehicles for the same flight. Perfect.", name: "Pascal D.", initials: "PD", role: "Sales director" },
    ],
    practicalInfo: [
      "Serving Marseille, Aix-en-Provence and the whole of Provence",
      "Clear meeting point in the arrivals area",
      "Transfers to the Calanques and the Côte Bleue",
    ],
    distanceFromCity: "27 km from central Marseille",
    destinations: [
      "Marseille Vieux-Port",
      "Aix-en-Provence",
      "Cassis",
      "Toulon",
      "Avignon",
    ],
    annualPassengers: "10 million",
  },
  "toulouse-blagnac": {
    extraFaq: [
      { question: "Is Toulouse airport far from the centre?", answer: "No, Blagnac is only 8 km from the centre. A taxi takes 15-25 minutes depending on traffic." },
    ],
    testimonials: [
      { text: "Blagnac to Capitole transfer in 18 minutes. The driver dropped me right outside my hotel. Unbeatable price.", name: "Laurent F.", initials: "LF", role: "Engineer, Airbus" },
      { text: "My flight landed an hour late, the driver had tracked it and was there when I came out. Excellent.", name: "Isabelle C.", initials: "IC", role: "Sales representative" },
      { text: "Taxi for the whole family to Albi. Comfortable, and the driver played tour guide as a bonus.", name: "André M.", initials: "AM", role: "Tourist" },
    ],
    practicalInfo: [
      "Very close to the city centre (8 km)",
      "Also serving Airbus and the aerospace industry",
      "Transfers to Cathar country and the Gers",
    ],
    distanceFromCity: "8 km from central Toulouse",
    destinations: [
      "Central Toulouse (Capitole)",
      "Airbus Blagnac",
      "Cité de l'Espace",
      "Carcassonne",
      "Albi",
    ],
    annualPassengers: "10 million",
  },
  "bordeaux-merignac": {
    extraFaq: [
      { question: "Can I take a taxi to the vineyards from the airport?", answer: "Yes, our drivers offer direct transfers to Saint-Émilion, the Médoc, Pomerol and all the Bordeaux appellations." },
    ],
    testimonials: [
      { text: "Landed at Terminal A, taxi booked to Saint-Émilion. The driver even knew which vineyards to visit.", name: "Jean-Luc P.", initials: "JLP", role: "Oenologist" },
      { text: "Early start, taxi outside my door on time at 5am. Dropped at the billi terminal with no stress.", name: "Alexis D.", initials: "AD", role: "Student, Bordeaux" },
      { text: "Transfer to Arcachon with a lunch stop in Gujan. Tailor-made service.", name: "Monique V.", initials: "MV", role: "Retiree" },
    ],
    practicalInfo: [
      "billi terminal dedicated to low-cost airlines",
      "Transfers to the Bordeaux vineyards",
      "Arcachon Bay 45 min away",
    ],
    distanceFromCity: "12 km from central Bordeaux",
    destinations: [
      "Central Bordeaux (Saint-Jean)",
      "Bordeaux Lac / Parc des Expos",
      "Saint-Émilion",
      "Arcachon",
      "Médoc (Pauillac)",
    ],
    annualPassengers: "7.7 million",
  },
  "nantes-atlantique": {
    extraFaq: [
      { question: "Is Nantes airport going to move?", answer: "The Notre-Dame-des-Landes project was abandoned. Nantes-Atlantique Airport stays where it is, with modernisation works under way." },
    ],
    testimonials: [
      { text: "Quick transfer to the centre. Very friendly driver and a clean vehicle.", name: "Yann B.", initials: "YB", role: "Entrepreneur, Nantes" },
      { text: "Straight to La Baule from the airport, a perfect start to the holidays.", name: "Marine K.", initials: "MK", role: "Holidaymaker" },
      { text: "I use it regularly for business trips. Never disappointed.", name: "François H.", initials: "FH", role: "Lawyer" },
    ],
    practicalInfo: [
      "Single terminal, easy to find your way",
      "Close to the city centre (10 km)",
      "Transfers to the Atlantic coast",
    ],
    distanceFromCity: "10 km from central Nantes",
    destinations: [
      "Central Nantes",
      "Île de Nantes",
      "La Baule",
      "Saint-Nazaire",
      "Pornic",
    ],
    annualPassengers: "7.2 million",
  },
  "paris-beauvais": {
    extraFaq: [
      { question: "Why take a taxi rather than the shuttle to Beauvais?", answer: "A taxi is door-to-door (no stop at Porte Maillot). From 2-3 passengers, it is often cheaper than the shuttles. Above all, it is available even for late flights." },
      { question: "Is Beauvais really in Paris?", answer: "Beauvais-Tillé Airport is 85 km from central Paris (1h15-1h45 by taxi). It is mainly used by low-cost airlines." },
    ],
    testimonials: [
      { text: "Ryanair flight landed at 11.30pm, no buses. The TaxiNeo taxi saved the day. Efficient driver.", name: "Pierre V.", initials: "PV", role: "Traveller" },
      { text: "With 4 passengers the taxi works out cheaper than 4 shuttle tickets. And it is door-to-door.", name: "Julie D.", initials: "JD", role: "Student" },
      { text: "Booked for a 6am flight. The driver picked me up in Paris at 3am. Professional.", name: "Damien C.", initials: "DC", role: "Sales representative" },
    ],
    practicalInfo: [
      "Budget alternative to CDG and Orly",
      "Specialises in low-cost airlines (Ryanair, Wizz Air)",
      "Taxi shuttle ideal from 2 passengers",
      "Available even for very late flights",
    ],
    distanceFromCity: "85 km from central Paris",
    destinations: [
      "Central Paris",
      "Gare du Nord",
      "La Défense",
      "Central Beauvais",
      "Amiens",
    ],
    annualPassengers: "4 million",
  },
  "bale-mulhouse": {
    extraFaq: [
      { question: "French side or Swiss side?", answer: "The airport has two exits: the French side and the Swiss side. Specify your exit side when booking. Our drivers serve both." },
    ],
    testimonials: [
      { text: "A tri-national airport, and the driver knew exactly which side (French). Perfect transfer to Colmar.", name: "Ingrid S.", initials: "IS", role: "Traveller" },
      { text: "Ride to Basel in 15 minutes. Much cheaper than a Swiss taxi!", name: "Klaus M.", initials: "KM", role: "Cross-border commuter" },
      { text: "Reliable service for my business trips between Mulhouse and the airport.", name: "Albert W.", initials: "AW", role: "Executive, Mulhouse" },
    ],
    practicalInfo: [
      "Tri-national airport (France, Switzerland, Germany)",
      "Exits on the French side and the Swiss side",
      "Transfers to Alsace, Switzerland and Germany",
    ],
    distanceFromCity: "25 km from Mulhouse, 8 km from Basel",
    destinations: [
      "Central Mulhouse",
      "Central Basel",
      "Colmar",
      "Strasbourg",
      "Freiburg (Germany)",
    ],
    annualPassengers: "9 million",
  },
  "lille-lesquin": {
    extraFaq: [
      { question: "Is Lille-Lesquin far from the centre?", answer: "No, the airport is only 10 km from central Lille. A taxi takes 15-20 minutes." },
    ],
    testimonials: [
      { text: "Quick and inexpensive transfer from the airport to Lille Flandres station. Perfect for connecting with the Eurostar.", name: "Philippe B.", initials: "PB", role: "Businessman" },
      { text: "Reliable Lesquin taxi even for my 6am flight. The driver was at my door at 4.30am.", name: "Valérie T.", initials: "VT", role: "Executive, Lille" },
      { text: "Back from holiday, the taxi was waiting for us. We were home in 15 minutes.", name: "Damien C.", initials: "DC", role: "Lille local" },
    ],
    practicalInfo: [
      "Very close to the city centre",
      "Transfers to Euralille and the TGV stations",
      "Also serves Lens, Arras and the Mining Basin",
    ],
    distanceFromCity: "10 km from central Lille",
    destinations: [
      "Central Lille (Flandres)",
      "Euralille",
      "Villeneuve-d'Ascq",
      "Lens",
      "Arras",
    ],
    annualPassengers: "2.2 million",
  },
  "strasbourg-entzheim": {
    extraFaq: [
      { question: "Is there a train to the centre from Entzheim?", answer: "Yes, but a TaxiNeo taxi is faster (15 min vs 25 min) and drops you right at your destination. Ideal with luggage." },
    ],
    testimonials: [
      { text: "Flawless transfer to the European Parliament. Discreet and professional driver.", name: "Hans M.", initials: "HM", role: "EU official" },
      { text: "Late arrival, taxi booked via the app, punctual driver. Perfect.", name: "Catherine W.", initials: "CW", role: "Traveller" },
      { text: "Off to Colmar for the Christmas market. The driver knew the best route.", name: "René K.", initials: "RK", role: "Tourist" },
    ],
    practicalInfo: [
      "Close to the centre and the European Parliament",
      "Transfers to Alsace and Germany",
      "Ideal for the Christmas markets",
    ],
    distanceFromCity: "12 km from central Strasbourg",
    destinations: [
      "Central Strasbourg",
      "European Parliament",
      "Colmar",
      "Offenburg (Germany)",
    ],
    annualPassengers: "1.3 million",
  },
  "montpellier-mediterranee": {
    extraFaq: [
      { question: "Is the airport far from the beach?", answer: "No, Palavas-les-Flots is 15-20 minutes from the airport by taxi (€30)." },
    ],
    testimonials: [
      { text: "Quick transfer to the Place de la Comédie. Great value for money.", name: "Emma T.", initials: "ET", role: "Student" },
      { text: "Off to Palavas for the weekend. The driver dropped us practically on the sand.", name: "Michel R.", initials: "MR", role: "Tourist" },
      { text: "Reliable service for my trips between the airport and Antigone.", name: "Sandrine L.", initials: "SL", role: "Consultant" },
    ],
    practicalInfo: [
      "Very close to the centre (8 km)",
      "Quick access to the Mediterranean beaches",
      "Transfers to Sète and the Thau Lagoon",
    ],
    distanceFromCity: "8 km from central Montpellier",
    destinations: [
      "Central Montpellier (Comédie)",
      "Palavas-les-Flots",
      "Sète",
      "Nîmes",
    ],
    annualPassengers: "2 million",
  },
  "ajaccio-napoleon-bonaparte": {
    extraFaq: [
      { question: "Do I need to book ahead in summer?", answer: "Strongly recommended. In July and August, demand is very high. Book at least 48 hours in advance." },
    ],
    testimonials: [
      { text: "A warm welcome at the airport. The driver gave us lots of tips for discovering Corsica.", name: "Mathilde F.", initials: "MF", role: "Holidaymaker" },
      { text: "Quick and pleasant transfer to Porticcio. Magnificent views along the way.", name: "Roland P.", initials: "RP", role: "Tourist" },
      { text: "Perfect service in high season. Booking ahead is essential in summer.", name: "Corinne J.", initials: "CJ", role: "Regular visitor to Corsica" },
    ],
    practicalInfo: [
      "Main airport of Corse-du-Sud",
      "Transfers to Corsican beaches and villages",
      "Advance booking recommended in summer",
    ],
    distanceFromCity: "7 km from central Ajaccio",
    destinations: [
      "Central Ajaccio",
      "Porticcio",
      "Propriano",
      "Porto",
    ],
    annualPassengers: "1.7 million",
  },
  "bastia-poretta": {
    extraFaq: [
      { question: "Can I get to Calvi from Bastia by taxi?", answer: "Yes, allow €130 and 1h30-2h on the road. The journey is magnificent via the Col de Teghime or along the coast." },
    ],
    testimonials: [
      { text: "Transfer to Bastia's Vieux-Port. Very friendly driver who told us about the island.", name: "Pierre-Jean L.", initials: "PJL", role: "Tourist" },
      { text: "Off to Saint-Florent for the holidays. A magnificent journey.", name: "Hélène S.", initials: "HS", role: "Holidaymaker" },
      { text: "Reliable service even in the middle of August. Well done.", name: "Simon L.", initials: "SiL", role: "Corsican returning home" },
    ],
    practicalInfo: [
      "Serves Haute-Corse",
      "Transfers to Cap Corse and the Balagne",
      "Available in high season",
    ],
    distanceFromCity: "20 km from central Bastia",
    destinations: [
      "Central Bastia",
      "Saint-Florent",
      "Calvi",
      "Corte",
    ],
    annualPassengers: "1.3 million",
  },
  "brest-bretagne": {
    extraFaq: [
      { question: "Can I take a taxi from Brest to Roscoff for the ferry?", answer: "Yes, we provide transfers to the port of Roscoff (€65, 40-50 min). Book in advance." },
    ],
    testimonials: [
      { text: "Quick transfer from the airport to the centre. The driver gave us tips for visiting Brest.", name: "Yves G.", initials: "YG", role: "Tourist" },
      { text: "Off to Roscoff for the ferry. Punctual and reliable.", name: "Nolwenn R.", initials: "NR", role: "Traveller" },
      { text: "Professional service for my trips to the naval base.", name: "Jean-Pierre M.", initials: "JPM", role: "Serviceman" },
    ],
    practicalInfo: [
      "Gateway to western Brittany",
      "Transfers to Roscoff (ferries to Ireland/England)",
      "Serves Finistère and the Pays d'Iroise",
    ],
    distanceFromCity: "10 km from central Brest",
    destinations: [
      "Central Brest",
      "Océanopolis",
      "Quimper",
      "Roscoff (ferry)",
    ],
    annualPassengers: "1.1 million",
  },
  "biarritz-pays-basque": {
    extraFaq: [
      { question: "Can I go to Spain from Biarritz by taxi?", answer: "Yes, our drivers provide transfers to San Sebastián (€85, 40-50 min) and other towns in the Spanish Basque Country." },
    ],
    testimonials: [
      { text: "3 minutes from the airport to my hotel on the Grande Plage. Incredible.", name: "Mikel E.", initials: "ME", role: "Surfer" },
      { text: "Quick and pleasant transfer to Saint-Jean-de-Luz. Long live the Basque Country!", name: "Hélène S.", initials: "HS", role: "Tourist" },
      { text: "Off to San Sebastián for the weekend. Crossing the border was no problem.", name: "Pierre-Jean L.", initials: "PJL", role: "Foodie" },
    ],
    practicalInfo: [
      "One of the closest airports to a city centre in France",
      "Transfers to the French and Spanish Basque Country",
      "Quick access to the beaches of the Basque coast",
    ],
    distanceFromCity: "3 km from central Biarritz",
    destinations: [
      "Central Biarritz",
      "Bayonne",
      "Saint-Jean-de-Luz",
      "San Sebastián (Spain)",
      "Pau",
    ],
    annualPassengers: "1.2 million",
  },
  "toulon-hyeres": {
    extraFaq: [
      { question: "Can I take a taxi to the Îles d'Or?", answer: "The taxi drops you at the Tour Fondue boarding port for Porquerolles, or at the port of Hyères for Port-Cros and Le Levant." },
    ],
    testimonials: [
      { text: "Transfer to the port of Toulon for the Corsica ferry. Punctual and efficient.", name: "Jean-Marc D.", initials: "JMD", role: "Traveller" },
      { text: "Off to Saint-Tropez from Hyères. The drive along the coast is magnificent.", name: "Léa M.", initials: "LM", role: "Holidaymaker" },
      { text: "Reliable service to reach the island of Porquerolles via the shuttle boat.", name: "Fabien S.", initials: "FS", role: "Tourist" },
    ],
    practicalInfo: [
      "Gateway to the Var and the Côte d'Azur",
      "Transfers to Saint-Tropez and the Îles d'Or",
      "Access to the port of Toulon (Corsica ferries)",
    ],
    distanceFromCity: "22 km from central Toulon",
    destinations: [
      "Central Toulon",
      "Central Hyères",
      "Saint-Tropez",
      "Bandol",
    ],
    annualPassengers: "700,000",
  },
  "rennes-bretagne": {
    extraFaq: [
      { question: "Does Rennes airport serve Saint-Malo?", answer: "Yes, a TaxiNeo taxi takes you from the airport to Saint-Malo in 50 min to 1 hour for around €85." },
    ],
    testimonials: [
      { text: "Quick transfer to the station for my TGV. Perfect timing.", name: "Olivier G.", initials: "OG", role: "Traveller" },
      { text: "Straight to Saint-Malo from the airport. Flawless service.", name: "Anne-Marie F.", initials: "AMF", role: "Tourist" },
      { text: "Reliable taxi in Rennes. I use it for all my flights.", name: "Julien N.", initials: "JN", role: "Developer, Rennes" },
    ],
    practicalInfo: [
      "Close to the city centre (7 km)",
      "Easy connection with the TGV station",
      "Transfers to Saint-Malo and the Brittany coast",
    ],
    distanceFromCity: "7 km from central Rennes",
    destinations: [
      "Central Rennes",
      "Rennes station",
      "Saint-Malo",
      "Dinard",
    ],
    annualPassengers: "800,000",
  },
  "clermont-ferrand-auvergne": {
    extraFaq: [
      { question: "Is the airport well served by taxis?", answer: "Yes, TaxiNeo covers Clermont-Ferrand airport with drivers available for every flight, even early in the morning." },
    ],
    testimonials: [
      { text: "A small airport, but a top-notch taxi service. I was in the city centre in 12 minutes.", name: "Xavier B.", initials: "XB", role: "Executive, Clermont" },
      { text: "Off to Vulcania with the family. The driver told us the story of the volcanoes.", name: "Didier C.", initials: "DC", role: "Dad on holiday" },
      { text: "Reliable service for my weekly flight to Paris.", name: "Hélène A.", initials: "HA", role: "Consultant" },
    ],
    practicalInfo: [
      "Close to the centre (7 km)",
      "Gateway to the Auvergne",
      "Transfers to Vulcania and the volcanoes",
    ],
    distanceFromCity: "7 km from central Clermont-Ferrand",
    destinations: [
      "Central Clermont (Jaude)",
      "Clermont station",
      "Vulcania",
      "Vichy",
    ],
    annualPassengers: "400,000",
  },
  "pau-pyrenees": {
    extraFaq: [
      { question: "Can I get to Lourdes from Pau airport?", answer: "Yes, the journey from Pau Airport to Lourdes takes around 35-45 minutes for €55. It is very popular with pilgrims." },
    ],
    testimonials: [
      { text: "Airport to Pau transfer in 12 min. Magnificent view of the Pyrenees.", name: "Jean-Claude B.", initials: "JCB", role: "Béarn local" },
      { text: "Off to Lourdes for the pilgrimage. Attentive and punctual driver.", name: "Simone D.", initials: "SD", role: "Pilgrim" },
      { text: "Transfer to Gourette in winter. Vehicle suited to the mountains.", name: "Alexandra M.", initials: "AM", role: "Skier" },
    ],
    practicalInfo: [
      "Panoramic view of the Pyrenees",
      "Transfers to Lourdes and the ski resorts",
      "Gateway to the Béarn",
    ],
    distanceFromCity: "10 km from central Pau",
    destinations: [
      "Central Pau",
      "Lourdes",
      "Oloron-Sainte-Marie",
      "Ski resorts (Gourette)",
    ],
    annualPassengers: "600,000",
  },
  "perpignan-rivesaltes": {
    extraFaq: [
      { question: "Is the airport close to the beaches?", answer: "Yes, Canet-en-Roussillon is 12-18 minutes away (€22) and Saint-Cyprien 15-20 minutes." },
    ],
    testimonials: [
      { text: "A small airport, but a TaxiNeo taxi is always available. Off to Collioure.", name: "Carmen S.", initials: "CS", role: "Tourist" },
      { text: "Transfer to Canet for the holidays. Quick and convenient.", name: "Luis P.", initials: "LP", role: "Holidaymaker" },
      { text: "Ryanair flight from London, taxi waiting at the exit. Perfect.", name: "Peter H.", initials: "PH", role: "British tourist" },
    ],
    practicalInfo: [
      "Gateway to Roussillon and Northern Catalonia",
      "Transfers to the beaches and the mountains",
      "Close to the Spanish border",
    ],
    distanceFromCity: "7 km from central Perpignan",
    destinations: [
      "Central Perpignan",
      "Collioure",
      "Canet-en-Roussillon",
      "Font-Romeu",
    ],
    annualPassengers: "500,000",
  },
  "la-rochelle-ile-de-re": {
    extraFaq: [
      { question: "Can I get to the Île de Ré from the airport?", answer: "Yes, the journey from the airport to the Île de Ré (via the bridge) takes 25-35 minutes for around €35." },
    ],
    testimonials: [
      { text: "The airport is tiny but the TaxiNeo taxi was there. Off to the Île de Ré!", name: "Mathilde F.", initials: "MF", role: "Holidaymaker" },
      { text: "Transfer to the Vieux Port in 8 minutes. Perfect for weekends.", name: "Roland P.", initials: "RP", role: "Tourist" },
      { text: "Reliable service for our easyJet flights from London.", name: "Andrew B.", initials: "AB", role: "British visitor" },
    ],
    practicalInfo: [
      "One of the closest airports to a city centre",
      "Transfers to the Île de Ré and the Charente coast",
      "Very popular with British tourists",
    ],
    distanceFromCity: "4 km from central La Rochelle",
    destinations: [
      "Central La Rochelle",
      "Île de Ré",
      "Rochefort",
      "Royan",
    ],
    annualPassengers: "300,000",
  },
  "figari-sud-corse": {
    extraFaq: [
      { question: "How far in advance should I book?", answer: "In summer (June to September), book at least 72 hours in advance. Figari airport is very busy in season." },
    ],
    testimonials: [
      { text: "Magnificent airport to Bonifacio transfer. Our Corsican driver was a real guide.", name: "Mathilde F.", initials: "MF", role: "Tourist" },
      { text: "Palombaggia in 30 minutes. The holiday starts in the taxi.", name: "Roland P.", initials: "RP", role: "Holidaymaker" },
      { text: "Flawless service in the middle of August. Booking ahead is essential.", name: "Corinne J.", initials: "CJ", role: "Regular visitor" },
    ],
    practicalInfo: [
      "Gateway to southern Corsica",
      "Transfers to Porto-Vecchio, Bonifacio and the beaches",
      "Early booking recommended in summer",
    ],
    distanceFromCity: "25 km from Porto-Vecchio",
    destinations: [
      "Porto-Vecchio",
      "Bonifacio",
      "Propriano",
      "Sainte-Lucie de Porto-Vecchio",
    ],
    annualPassengers: "700,000",
  },
  "calvi-sainte-catherine": {
    extraFaq: [
      { question: "Is the airport far from the beach?", answer: "No, Calvi is 10-15 minutes away. The finest beaches in the Balagne can be reached in 20-30 minutes by taxi." },
    ],
    testimonials: [
      { text: "Arrived in Calvi in the sunshine, taxi straight to our seafront hotel.", name: "Éric L.", initials: "EL", role: "Tourist" },
      { text: "Quick and pleasant transfer to L'Île-Rousse along the coast.", name: "Isabelle K.", initials: "IK", role: "Holidaymaker" },
      { text: "A small airport but a perfect taxi service. Book ahead.", name: "Roger B.", initials: "RB", role: "Regular visitor to the Balagne" },
    ],
    practicalInfo: [
      "In the heart of the Balagne",
      "Transfers to the beaches of Calvi and L'Île-Rousse",
      "In high demand in summer",
    ],
    distanceFromCity: "7 km from central Calvi",
    destinations: [
      "Central Calvi",
      "L'Île-Rousse",
      "Porto",
    ],
    annualPassengers: "350,000",
  },
  "limoges-bellegarde": {
    extraFaq: [
      { question: "Does Limoges-Bellegarde serve many destinations?", answer: "The airport mainly offers flights to London and a few seasonal destinations. Our taxis handle every transfer." },
    ],
    testimonials: [
      { text: "Ryanair flight from London, perfect taxi to the centre. Fast and inexpensive.", name: "Daniel F.", initials: "DF", role: "Traveller" },
      { text: "Transfer to the Gare des Bénédictins for my TGV. Impeccable timing.", name: "Pauline G.", initials: "PG", role: "Student" },
      { text: "Reliable service for my business trips.", name: "Odette V.", initials: "OV", role: "Executive, Limoges" },
    ],
    practicalInfo: [
      "Popular for Ryanair flights to the UK",
      "Close to the city centre",
      "Transfers to the Limousin and the Périgord",
    ],
    distanceFromCity: "10 km from central Limoges",
    destinations: [
      "Central Limoges",
      "Gare des Bénédictins",
      "Oradour-sur-Glane",
    ],
    annualPassengers: "300,000",
  },
  "caen-carpiquet": {
    extraFaq: [
      { question: "Can I visit the D-Day beaches by taxi?", answer: "Yes, our drivers offer transfers and chauffeur hire to visit Omaha Beach, Utah Beach, Arromanches and the American Cemetery." },
    ],
    testimonials: [
      { text: "Transfer to the D-Day beaches. A moving experience, and a respectful driver.", name: "Andrew B.", initials: "AB", role: "American tourist" },
      { text: "Off to Ouistreham for the ferry. Punctual and convenient.", name: "Gilles F.", initials: "GF", role: "Traveller" },
      { text: "Reliable taxi for my flight to Lyon. I was at the airport in 10 minutes.", name: "Jacqueline P.", initials: "JP", role: "Caen resident" },
    ],
    practicalInfo: [
      "Gateway to Normandy",
      "Transfers to the D-Day beaches",
      "Connection with the Ouistreham ferry",
    ],
    distanceFromCity: "7 km from central Caen",
    destinations: [
      "Central Caen",
      "Ouistreham (ferry)",
      "D-Day Beaches",
      "Bayeux",
    ],
    annualPassengers: "200,000",
  },
  "tours-val-de-loire": {
    extraFaq: [
      { question: "Can I visit the Loire châteaux by taxi?", answer: "Yes, our drivers offer transfers to Chambord, Chenonceau, Amboise, Azay-le-Rideau and all the Loire châteaux." },
    ],
    testimonials: [
      { text: "Ryanair flight from Porto, taxi straight to Amboise. The châteaux tour begins.", name: "Florence D.", initials: "FD", role: "Tourist" },
      { text: "Flawless transfer to Tours city centre. The driver was passionate about the region.", name: "Richard S.", initials: "RS", role: "Visitor" },
      { text: "Perfect service to reach the Saint-Pierre-des-Corps TGV station.", name: "Maurice L.", initials: "ML", role: "Traveller" },
    ],
    practicalInfo: [
      "Gateway to the Loire Valley châteaux",
      "Transfers to Amboise, Chenonceau, Chambord",
      "Ideal for international tourists",
    ],
    distanceFromCity: "8 km from central Tours",
    destinations: [
      "Central Tours",
      "Amboise",
      "Chenonceau",
      "Chambord",
    ],
    annualPassengers: "200,000",
  },
  "grenoble-isere": {
    extraFaq: [
      { question: "Is the airport far from Grenoble?", answer: "Yes, the airport is located in Saint-Étienne-de-Saint-Geoirs, 40 km from Grenoble (35-45 min by taxi). It is mainly used in winter." },
      { question: "Are the taxis equipped for mountain roads?", answer: "Yes, during the winter season our vehicles are fitted with snow tyres and/or chains. The driver handles the road conditions." },
    ],
    testimonials: [
      { text: "Direct transfer from the airport to Alpe d'Huez. The driver was used to mountain driving.", name: "Lucie B.", initials: "LB", role: "Skier" },
      { text: "Winter charter flight, taxi fitted with snow tyres. Perfect for hitting the slopes.", name: "Antoine G.", initials: "AG", role: "British tourist" },
      { text: "Heading to Grenoble for a conference. The driver knew the best route.", name: "Rémi T.", initials: "RT", role: "Engineer" },
    ],
    practicalInfo: [
      "Specialised in winter ski transfers",
      "Vehicles equipped for mountain roads",
      "Transfers to all the Isère ski resorts",
    ],
    distanceFromCity: "40 km from central Grenoble",
    destinations: [
      "Central Grenoble",
      "Alpe d'Huez",
      "Les Deux Alpes",
      "Chamrousse",
    ],
    annualPassengers: "400,000",
  },
  "tarbes-lourdes-pyrenees": {
    extraFaq: [
      { question: "Does the airport mainly serve Lourdes?", answer: "Yes, the airport is very popular with pilgrims to Lourdes and with skiers in winter. Our taxis provide both types of transfer." },
    ],
    testimonials: [
      { text: "Airport to Lourdes Sanctuary transfer, perfect for our pilgrimage.", name: "Simone D.", initials: "SD", role: "Pilgrim" },
      { text: "Off to Cauterets for skiing. A careful driver on the mountain roads.", name: "Frédérique B.", initials: "FB", role: "Skier" },
      { text: "Ryanair flight from Dublin, taxi straight away. Great service.", name: "Patrick O.", initials: "PO", role: "Irish pilgrim" },
    ],
    practicalInfo: [
      "Main airport for Lourdes pilgrimages",
      "Transfers to the Pyrenean ski resorts",
      "Very popular with international groups",
    ],
    distanceFromCity: "10 km from Lourdes, 12 km from Tarbes",
    destinations: [
      "Central Lourdes",
      "Central Tarbes",
      "Cauterets",
      "Gavarnie",
    ],
    annualPassengers: "400,000",
  },
  "bergerac-dordogne-perigord": {
    extraFaq: [
      { question: "Is Bergerac a good gateway to the Périgord?", answer: "Yes, it is the ideal airport for discovering the Périgord Noir (Sarlat, Lascaux), the Bergerac vineyards and the Dordogne valley." },
    ],
    testimonials: [
      { text: "Heading to Sarlat for a week in the Périgord. The driver recommended some restaurants to us.", name: "Andrew B.", initials: "AB", role: "British tourist" },
      { text: "Ultra-fast transfer to Bergerac town centre. 5 minutes flat.", name: "Claire M.", initials: "CM", role: "Second-home owner" },
      { text: "Perfect service for our group of 6. Two coordinated taxis.", name: "Peter H.", initials: "PH", role: "Tourist" },
    ],
    practicalInfo: [
      "Gateway to the Périgord and the Dordogne",
      "Very popular with British tourists",
      "Transfers to Sarlat and Lascaux",
    ],
    distanceFromCity: "3 km from central Bergerac",
    destinations: [
      "Central Bergerac",
      "Sarlat",
      "Périgueux",
      "Lascaux",
    ],
    annualPassengers: "280,000",
  },
  "carcassonne-salvaza": {
    extraFaq: [
      { question: "Is the airport far from the Medieval City?", answer: "No, only 3 km! By taxi, you reach the Cité in 5-10 minutes for €12." },
    ],
    testimonials: [
      { text: "Ryanair flight from London, taxi straight to the Medieval City. Magical.", name: "Emily W.", initials: "EW", role: "Tourist" },
      { text: "3 minutes from the airport and we were there. The shortest taxi ride of my life.", name: "Peter H.", initials: "PH", role: "British visitor" },
      { text: "Transfer to Narbonne to visit the Corbières. Perfect.", name: "Diana K.", initials: "DK", role: "Wine tourist" },
    ],
    practicalInfo: [
      "Very close to the Medieval City (3 km)",
      "Gateway to Cathar Country",
      "Transfers to the Canal du Midi and the Corbières",
    ],
    distanceFromCity: "3 km from central Carcassonne",
    destinations: [
      "Carcassonne Medieval City",
      "Narbonne",
      "Toulouse",
      "Canal du Midi",
    ],
    annualPassengers: "400,000",
  },
  "dinard-bretagne": {
    extraFaq: [
      { question: "Can I get to Saint-Malo from Dinard?", answer: "Yes, Saint-Malo is only 12-18 minutes away by taxi (€20). Faster than the bus or the passenger boat." },
    ],
    testimonials: [
      { text: "Flight from London, taxi straight to Saint-Malo. Brittany in just a few minutes.", name: "Andrew B.", initials: "AB", role: "British visitor" },
      { text: "Quick transfer to Dinard. The driver recommended the best restaurants.", name: "Emily W.", initials: "EW", role: "Tourist" },
      { text: "Flawless service to reach Dinan and its medieval lanes.", name: "Nolwenn R.", initials: "NR", role: "Breton local" },
    ],
    practicalInfo: [
      "Direct access to Saint-Malo and the Emerald Coast",
      "Very popular with British tourists",
      "Alternative to Rennes for northern Brittany",
    ],
    distanceFromCity: "5 km from central Dinard",
    destinations: [
      "Central Dinard",
      "Saint-Malo",
      "Dinan",
      "Rennes",
    ],
    annualPassengers: "150,000",
  },
  "poitiers-biard": {
    extraFaq: [
      { question: "Is the airport close to Futuroscope?", answer: "Yes, Futuroscope is 12-18 minutes from the airport (€22 by taxi)." },
    ],
    testimonials: [
      { text: "Quick transfer to Futuroscope. We were there in 12 minutes.", name: "Aurélien B.", initials: "AB", role: "Dad on a family day out" },
      { text: "Reliable service for my business flights.", name: "Karine D.", initials: "KD", role: "Executive" },
      { text: "Taxi to Poitiers city centre in under 10 minutes. Convenient.", name: "Régine S.", initials: "RS", role: "Poitiers resident" },
    ],
    practicalInfo: [
      "Quick access to Futuroscope",
      "Very close to the city centre",
      "Ideal for business travellers",
    ],
    distanceFromCity: "4 km from central Poitiers",
    destinations: [
      "Central Poitiers",
      "Futuroscope",
      "Châtellerault",
    ],
    annualPassengers: "100,000",
  },
  "rodez-aveyron": {
    extraFaq: [
      { question: "Can I visit the Millau Viaduct from the airport?", answer: "Yes, the viaduct is about 50 min to 1 hour from the airport (€75). Our drivers know the best viewpoints." },
    ],
    testimonials: [
      { text: "Off to the Millau Viaduct. The driver stopped for photos. Stunning.", name: "Patrick O.", initials: "PO", role: "Tourist" },
      { text: "Transfer to Conques for the Way of St James. Thank you TaxiNeo.", name: "Simone D.", initials: "SD", role: "Pilgrim" },
      { text: "Quick service to Rodez town centre and the Musée Soulages.", name: "Frédéric W.", initials: "FW", role: "Art lover" },
    ],
    practicalInfo: [
      "Gateway to the Aveyron",
      "Transfers to Conques and the Millau Viaduct",
      "Musée Soulages in Rodez",
    ],
    distanceFromCity: "10 km from central Rodez",
    destinations: [
      "Central Rodez",
      "Conques",
      "Millau (viaduct)",
    ],
    annualPassengers: "180,000",
  },
  "metz-nancy-lorraine": {
    extraFaq: [
      { question: "Is the airport between Metz and Nancy?", answer: "Yes, the airport is located halfway between them, near the Lorraine TGV station. Ideal for serving both cities." },
    ],
    testimonials: [
      { text: "Transfer to Place Stanislas in Nancy. The driver was very pleasant.", name: "Sébastien L.", initials: "SL", role: "Tourist" },
      { text: "Heading to Metz for the Centre Pompidou. Comfortable journey.", name: "Frédéric W.", initials: "FW", role: "Art lover" },
      { text: "Airport to Lorraine TGV station connection in 5 minutes. Perfect.", name: "Marie B.", initials: "MB", role: "Cross-border commuter" },
    ],
    practicalInfo: [
      "Serves Metz and Nancy equally",
      "Lorraine TGV station next to the airport",
      "Transfers to Luxembourg",
    ],
    distanceFromCity: "35 km from Metz, 40 km from Nancy",
    destinations: [
      "Central Metz",
      "Central Nancy",
      "Gare Lorraine TGV",
      "Luxembourg",
    ],
    annualPassengers: "300,000",
  },
  "chambery-savoie-mont-blanc": {
    extraFaq: [
      { question: "Is the airport suitable for skiers?", answer: "Yes, it is the go-to airport for the 3 Vallées (Courchevel, Méribel, Val Thorens). Our taxis are equipped for mountain roads in winter." },
    ],
    testimonials: [
      { text: "Charter flight, then straight to Courchevel. Taxi with snow tyres, perfect.", name: "Frédérique B.", initials: "FB", role: "Skier" },
      { text: "Comfortable transfer to Méribel. The driver handles mountain roads like a pro.", name: "Andrew B.", initials: "AB", role: "British skier" },
      { text: "Reliable service to reach the 3 Vallées from Chambéry.", name: "Stéphane A.", initials: "SA", role: "Ski instructor" },
    ],
    practicalInfo: [
      "Go-to airport for the 3 Vallées",
      "Vehicles equipped for mountain roads in winter",
      "Door-to-slope ski transfers",
    ],
    distanceFromCity: "10 km from central Chambéry",
    destinations: [
      "Central Chambéry",
      "Courchevel",
      "Méribel",
      "Val Thorens",
      "Aix-les-Bains",
    ],
    annualPassengers: "250,000",
  },
  "annecy-haute-savoie": {
    extraFaq: [
      { question: "Is it better to fly into Annecy or Geneva?", answer: "If there is a direct flight to Annecy, it is quicker. Otherwise, Geneva offers more flights and is only 45-55 min away by taxi." },
    ],
    testimonials: [
      { text: "Transfer to the lakeside. In 10 minutes, our feet were in the water.", name: "Éric L.", initials: "EL", role: "Tourist" },
      { text: "Off to La Clusaz for a ski holiday. Perfect service.", name: "Isabelle K.", initials: "IK", role: "Skier" },
      { text: "A small airport, but a TaxiNeo taxi is always available.", name: "Roger B.", initials: "RB", role: "Annecy resident" },
    ],
    practicalInfo: [
      "On the shores of Lake Annecy",
      "Alternative to Geneva for Haute-Savoie",
      "Transfers to the Aravis ski resorts",
    ],
    distanceFromCity: "5 km from central Annecy",
    destinations: [
      "Central Annecy",
      "Lake Annecy (Talloires)",
      "La Clusaz",
      "Geneva Airport",
    ],
    annualPassengers: "100,000",
  },
  "lorient-bretagne-sud": {
    extraFaq: [
      { question: "Is the airport near Carnac?", answer: "Carnac is 25-35 minutes away by taxi (€40). Quiberon and the boat to Belle-Île are 40-50 minutes away." },
    ],
    testimonials: [
      { text: "Transfer to Quiberon for the Belle-Île boat. Perfect.", name: "Yves G.", initials: "YG", role: "Breton local" },
      { text: "Off to Carnac for the megaliths. A knowledgeable driver.", name: "Nolwenn R.", initials: "NR", role: "Tourist" },
      { text: "Reliable service for the Festival Interceltique.", name: "Jean-Pierre M.", initials: "JPM", role: "Festival-goer" },
    ],
    practicalInfo: [
      "Serves the Morbihan and South Brittany",
      "Transfers to Quiberon and Belle-Île",
      "Popular during the Festival Interceltique",
    ],
    distanceFromCity: "8 km from central Lorient",
    destinations: [
      "Central Lorient",
      "Quiberon",
      "Carnac",
      "Vannes",
    ],
    annualPassengers: "150,000",
  },
  "avignon-provence": {
    extraFaq: [
      { question: "Is Avignon Airport open all year round?", answer: "The airport's traffic is mainly seasonal. Our taxis provide transfers all year round, including to the TGV station." },
    ],
    testimonials: [
      { text: "Off to the Luberon from the airport. The driver knew the most beautiful villages.", name: "Diana K.", initials: "DK", role: "Tourist" },
      { text: "Quick transfer to the Palais des Papes for the Festival.", name: "Laure P.", initials: "LP", role: "Festival-goer" },
      { text: "Perfect service to get to the TGV station and catch my train.", name: "Henri M.", initials: "HM", role: "Traveller" },
    ],
    practicalInfo: [
      "In the heart of Provence",
      "Transfers to the Luberon and Provençal villages",
      "Connection with Avignon TGV station",
    ],
    distanceFromCity: "8 km from central Avignon",
    destinations: [
      "Central Avignon (Palais des Papes)",
      "Avignon TGV station",
      "Luberon (Gordes)",
      "Orange",
    ],
    annualPassengers: "80,000",
  },
  "nimes-garons": {
    extraFaq: [
      { question: "Can I visit the Pont du Gard by taxi?", answer: "Yes, the Pont du Gard is 25-30 minutes from the airport (€35). Ideal for a day trip." },
    ],
    testimonials: [
      { text: "Ryanair flight, taxi to the Nîmes Arena. A driver who knows his Roman history.", name: "Pascal D.", initials: "PD", role: "History enthusiast" },
      { text: "Transfer to the Pont du Gard. A wonderful excursion.", name: "Agnès S.", initials: "AS", role: "Tourist" },
      { text: "Heading to the Camargue. The driver gave us the best recommendations.", name: "Mireille V.", initials: "MV", role: "Holidaymaker" },
    ],
    practicalInfo: [
      "Gateway to the Camargue and Roman heritage",
      "Transfers to the Pont du Gard and Uzès",
      "Access to the Nîmes festivities (feria)",
    ],
    distanceFromCity: "12 km from central Nîmes",
    destinations: [
      "Central Nîmes (Arena)",
      "Pont du Gard",
      "Uzès",
      "Camargue (Saintes-Maries)",
    ],
    annualPassengers: "200,000",
  },
  "deauville-normandie": {
    extraFaq: [
      { question: "Is Deauville far from Honfleur?", answer: "Honfleur is 18-25 minutes by taxi from the airport (€30). One of the most beautiful harbours in Normandy." },
    ],
    testimonials: [
      { text: "Off to the Deauville boardwalk. A fast and elegant taxi.", name: "Charlotte V.", initials: "CV", role: "Parisian" },
      { text: "Transfer to Honfleur for the weekend. Perfect service.", name: "Roberto F.", initials: "RF", role: "Tourist" },
      { text: "Taxi for the American Film Festival. Flawless.", name: "Léa M.", initials: "LM", role: "Journalist" },
    ],
    practicalInfo: [
      "Gateway to Normandy's Côte Fleurie",
      "Transfers to Deauville, Honfleur and Cabourg",
      "Popular for events (Festival, horse racing)",
    ],
    distanceFromCity: "8 km from central Deauville",
    destinations: [
      "Central Deauville",
      "Trouville",
      "Honfleur",
      "Cabourg",
    ],
    annualPassengers: "100,000",
  },
  "dole-jura": {
    extraFaq: [
      { question: "Does Dole-Jura serve Besançon and Dijon?", answer: "Yes, the airport is halfway between Besançon (35-45 min) and Dijon (40-50 min). Ideal for both cities." },
    ],
    testimonials: [
      { text: "An alternative to Geneva for the Jura. Fast, inexpensive taxi.", name: "Klaus M.", initials: "KM", role: "Hiker" },
      { text: "Heading to Besançon through the Jura countryside. A pleasant journey.", name: "Hervé M.", initials: "HM", role: "Traveller" },
      { text: "Ryanair flight, taxi straight away. Flawless service.", name: "Peter H.", initials: "PH", role: "Tourist" },
    ],
    practicalInfo: [
      "Between Besançon and Dijon",
      "Gateway to the Jura and Burgundy",
      "Budget alternative to the major airports",
    ],
    distanceFromCity: "5 km from central Dole",
    destinations: [
      "Central Dole",
      "Besançon",
      "Dijon",
      "Arc-et-Senans",
    ],
    annualPassengers: "200,000",
  },
  "angouleme-cognac": {
    extraFaq: [
      { question: "Can I visit the Cognac houses by taxi?", answer: "Yes, Cognac is 25-30 minutes from the airport (€35). Our drivers also offer chauffeur hire to visit several houses." },
    ],
    testimonials: [
      { text: "Off to the Cognac houses from the airport. The driver is a true connoisseur.", name: "Andrew B.", initials: "AB", role: "Cognac lover" },
      { text: "Quick transfer to the Angoulême comics festival.", name: "Emily W.", initials: "EW", role: "Comics fan" },
      { text: "Perfect service for our stay in the Charente.", name: "Claire M.", initials: "CM", role: "Tourist" },
    ],
    practicalInfo: [
      "Gateway to Cognac country",
      "Transfers to the Cognac and Jarnac distilleries",
      "Popular during the comics festival",
    ],
    distanceFromCity: "10 km from central Angoulême",
    destinations: [
      "Central Angoulême",
      "Cognac",
      "Jarnac",
    ],
    annualPassengers: "50,000",
  },
  "agen-la-garenne": {
    extraFaq: [
      { question: "Is Agen Airport open all year round?", answer: "Yes, with scheduled flights to Paris-CDG. Our taxis provide transfers for all flights." },
    ],
    testimonials: [
      { text: "Ultra-fast transfer to Agen town centre. 6 minutes.", name: "Pascal D.", initials: "PD", role: "Agen resident" },
      { text: "Reliable service for my business flights to Paris.", name: "Karine D.", initials: "KD", role: "Executive" },
      { text: "Taxi to Moissac to visit the cloister. Recommended.", name: "Richard S.", initials: "RS", role: "Tourist" },
    ],
    practicalInfo: [
      "Very close to the town centre",
      "Scheduled Paris-Agen flights",
      "Transfers across the Lot-et-Garonne",
    ],
    distanceFromCity: "4 km from central Agen",
    destinations: [
      "Central Agen",
      "Moissac",
      "Villeneuve-sur-Lot",
    ],
    annualPassengers: "50,000",
  },
  "lannion-cote-de-granit-rose": {
    extraFaq: [
      { question: "Is the Pink Granite Coast far from the airport?", answer: "No, Perros-Guirec and the Pink Granite Coast are 15-25 minutes away by taxi. One of the most beautiful coastlines in France." },
    ],
    testimonials: [
      { text: "Off to the Pink Granite Coast. Incredible scenery from the taxi window.", name: "Yves G.", initials: "YG", role: "Tourist" },
      { text: "Quick transfer to Perros-Guirec. The driver knows every road.", name: "Nolwenn R.", initials: "NR", role: "Breton local" },
      { text: "Perfect service to reach the Lannion research centre.", name: "Jean-Pierre M.", initials: "JPM", role: "Engineer" },
    ],
    practicalInfo: [
      "Direct access to the Pink Granite Coast",
      "Serves the Lannion technology hub",
      "Small airport, personalised service",
    ],
    distanceFromCity: "5 km from central Lannion",
    destinations: [
      "Central Lannion",
      "Perros-Guirec",
      "Trégastel",
      "Ploumanac'h",
    ],
    annualPassengers: "80,000",
  },
  "quimper-cornouaille": {
    extraFaq: [
      { question: "Does Quimper Airport serve Concarneau?", answer: "Yes, Concarneau is 20-25 minutes away (€30). Pont-Aven, the painters' town, is 18-25 minutes away." },
    ],
    testimonials: [
      { text: "Transfer to Bénodet for the holidays. The driver was Brittany through and through.", name: "Jean-Pierre M.", initials: "JPM", role: "Holidaymaker" },
      { text: "Off to Concarneau and its walled town. Flawless service.", name: "Nolwenn R.", initials: "NR", role: "Tourist" },
      { text: "Reliable taxi for the Festival de Cornouaille.", name: "Yves G.", initials: "YG", role: "Festival-goer" },
    ],
    practicalInfo: [
      "Gateway to Breton Cornouaille",
      "Transfers to the seaside resorts of South Finistère",
      "Festival de Cornouaille",
    ],
    distanceFromCity: "7 km from central Quimper",
    destinations: [
      "Central Quimper",
      "Bénodet",
      "Concarneau",
      "Pont-Aven",
    ],
    annualPassengers: "100,000",
  },
  "castres-mazamet": {
    extraFaq: [
      { question: "Does Castres Airport serve Albi?", answer: "Yes, Albi is 40-50 minutes away (€55). A good alternative to Toulouse for the Tarn." },
    ],
    testimonials: [
      { text: "Quick flight to Paris, taxi to Castres town centre in 10 minutes.", name: "Pascal D.", initials: "PD", role: "Executive, Castres" },
      { text: "Transfer to Albi and the Toulouse-Lautrec Museum. Recommended.", name: "Sandrine L.", initials: "SL", role: "Tourist" },
      { text: "Reliable service for my business trips.", name: "Michel R.", initials: "MR", role: "Industrialist" },
    ],
    practicalInfo: [
      "Serves the Castres area and the Tarn",
      "Alternative to Toulouse for the southern Tarn",
      "Transfers to Albi and the Montagne Noire",
    ],
    distanceFromCity: "8 km from central Castres",
    destinations: [
      "Central Castres",
      "Mazamet",
      "Albi",
      "Toulouse",
    ],
    annualPassengers: "50,000",
  },
  "aurillac-tronquieres": {
    extraFaq: [
      { question: "Is Aurillac Airport close to the town centre?", answer: "Yes, only 3 km. By taxi, you reach the town centre in 5-8 minutes for €12." },
    ],
    testimonials: [
      { text: "Direct flight from Paris, taxi straight to the town centre. Ideal.", name: "Didier C.", initials: "DC", role: "Cantal resident" },
      { text: "Off to Salers for the holidays. Magnificent scenery.", name: "Hélène A.", initials: "HA", role: "Tourist" },
      { text: "Reliable service for my business trips.", name: "Xavier B.", initials: "XB", role: "Executive" },
    ],
    practicalInfo: [
      "Very close to the town centre (3 km)",
      "Gateway to the Cantal and the Auvergne volcanoes",
      "Direct Paris-Aurillac flights",
    ],
    distanceFromCity: "3 km from central Aurillac",
    destinations: [
      "Central Aurillac",
      "Salers",
      "Le Lioran",
    ],
    annualPassengers: "50,000",
  },
  "le-puy-loudes": {
    extraFaq: [
      { question: "Does the airport serve Way of St James pilgrims?", answer: "Yes, many pilgrims arrive by plane and take a taxi to Le Puy Cathedral, the starting point of the Via Podiensis (GR65)." },
    ],
    testimonials: [
      { text: "Flight from Paris to start the Way of St James. Taxi straight to Le Puy.", name: "Simone D.", initials: "SD", role: "Pilgrim" },
      { text: "Quick transfer to the old town. Friendly driver.", name: "Patrick O.", initials: "PO", role: "Tourist" },
      { text: "Convenient service to get to the Haute-Loire.", name: "Frédéric W.", initials: "FW", role: "Traveller" },
    ],
    practicalInfo: [
      "Starting point of the Way of St James",
      "Serves the Haute-Loire and the Velay",
      "Direct Paris to Le Puy flights",
    ],
    distanceFromCity: "10 km from central Le Puy",
    destinations: [
      "Central Le Puy-en-Velay",
      "Le Puy Cathedral",
      "Way of St James GR65 start",
    ],
    annualPassengers: "30,000",
  },
  "vichy-charmeil": {
    extraFaq: [
      { question: "Does Vichy-Charmeil airfield have scheduled flights?", answer: "Vichy-Charmeil mainly handles general aviation, private flights and charters. For scheduled flights, Clermont-Ferrand Auvergne Airport is 55 km away. Our drivers can arrange a direct transfer to Clermont-Ferrand via the A719 motorway in about 40 minutes if you have a connection to catch." },
      { question: "How do I get to the Vichy spas from the airfield?", answer: "Your driver takes you directly from Charmeil airfield to the Vichy spa district in 12 minutes via the D6. The Thermes des Dômes, the Centre Callou and the Célestins can all be reached in under 15 minutes. The flat fare includes waiting time at the airfield and handling of your luggage." },
      { question: "Can I book a taxi for an event at the Palais des Congrès in Vichy?", answer: "Absolutely. The Palais des Congrès in Vichy hosts many conferences, trade fairs and cultural events throughout the year. Our drivers provide transfers from Charmeil airfield in 10 minutes. You can also book a return trip with the driver waiting on site for short events." },
      { question: "Which heritage sites can I visit in Vichy by taxi?", answer: "Vichy is full of Napoleon III heritage: the imperial chalets, the Art Nouveau opera house, the Parc des Sources, the covered market and the Église Saint-Blaise. Our local drivers know the town perfectly and can drop you in front of each site. A heritage tour by taxi with chauffeur hire is also available on request." },
      { question: "What is the taxi fare from Vichy-Charmeil to Clermont-Ferrand?", answer: "The transfer from Vichy-Charmeil to Clermont-Ferrand centre costs around €70 as a flat fare. The route uses the A719 motorway and takes 40 to 50 minutes depending on traffic. This fare is guaranteed with no extras, whatever the traffic jams or possible detours. Ideal for catching a connecting flight in Clermont." },
      { question: "Is the taxi service available for private flights arriving early in the morning?", answer: "Yes, our service runs 24/7. For private flights landing before 6am or after 10pm, simply book in advance and give the estimated landing time. The driver follows your progress and adjusts their arrival at the airfield. No night surcharge applies to our airfield flat fares." },
    ],
    testimonials: [
      { text: "A small airfield but a punctual taxi. At the spa in 12 minutes.", name: "Maurice P.", initials: "MP", role: "Spa guest" },
      { text: "Convenient service to reach Vichy after a private flight.", name: "Laurent K.", initials: "LK", role: "Businessman" },
      { text: "Quick transfer to the spa district. Pleasant local driver.", name: "Denise V.", initials: "DV", role: "Tourist" },
    ],
    practicalInfo: [
      "Close to the Vichy spa district (8 km)",
      "Quick access to the Thermes des Dômes in 12 min via the D6",
      "Gateway to the UNESCO-listed spa town",
      "Transfer to Clermont-Ferrand in 40 min via the A719",
      "24/7 service suited to private and charter flights",
      "Luggage handling and personalised welcome at the terminal",
    ],
    distanceFromCity: "8 km from central Vichy",
    destinations: [
      "Central Vichy (Les Thermes)",
      "Vichy station",
      "Central Clermont-Ferrand",
    ],
    annualPassengers: "10,000",
  },
  "montlucon-gueret": {
    extraFaq: [
      { question: "Does Montluçon-Guéret airfield have commercial flights?", answer: "Montluçon-Guéret mainly handles general aviation, private flights and an active flying club. For scheduled flights, Clermont-Ferrand Auvergne Airport is about 100 km away. Our drivers can arrange a direct transfer to Clermont via the A71 in about an hour for your connections." },
      { question: "How do I get to Montluçon's medieval centre from the airfield?", answer: "Your driver takes you directly from Domérat airfield to Montluçon's medieval quarter in 10 minutes via the D916. The Château des Ducs de Bourbon, the old town and the historic lanes are right there. The flat fare includes waiting time at the airfield and help with luggage." },
      { question: "Can I book a taxi to visit the MuPop in Montluçon?", answer: "Of course. The MuPop (Musée des Musiques Populaires), housed in two mansions in the medieval quarter, is one of the most original museums in France. Our drivers drop you right at the entrance in 10 minutes from the airfield. You can also book a return trip with the driver waiting on site to make the most of your visit." },
      { question: "Which tourist sites can I reach by taxi from Montluçon-Guéret?", answer: "From the airfield, our drivers take you to the Château des Ducs de Bourbon, the Canal de Berry and its restored locks, the Jardins Wilson, the upper medieval town and the Saint-Pierre quarter. For nature lovers, the Forêt de Tronçais, the largest oak forest in Europe, is about 40 minutes away." },
      { question: "What is the taxi fare from Montluçon-Guéret to Clermont-Ferrand?", answer: "The transfer from Montluçon-Guéret to Clermont-Ferrand centre costs around €90 as a flat fare. The route uses the A71 motorway and takes 1h to 1h15 depending on traffic conditions. This price is guaranteed with no extras. Ideal for reaching Clermont-Ferrand Auvergne Airport for a scheduled flight or a domestic connection." },
      { question: "Does the taxi service operate at weekends and on public holidays?", answer: "Yes, our drivers are available 7 days a week, including weekends and public holidays. For private flights arriving outside business hours, simply book in advance and give the estimated landing time. No surcharge applies on Sundays and public holidays to our airfield flat fares to Montluçon centre." },
    ],
    testimonials: [
      { text: "Useful service to reach Montluçon town centre from the airfield.", name: "René B.", initials: "RB", role: "Traveller" },
      { text: "Punctual taxi for a private flight. Very professional.", name: "Éric G.", initials: "EG", role: "Business owner" },
      { text: "Quick, hassle-free transfer. The driver knows the region well.", name: "Claudine M.", initials: "ClM", role: "Tourist" },
    ],
    practicalInfo: [
      "Close to Montluçon town centre (5 km)",
      "Direct access to the Bourbonnais and the Creuse via the D916",
      "Gateway to the western Massif Central",
      "Transfer to Clermont-Ferrand in 1h via the A71",
      "Service available 7 days a week for private flights and business aviation",
      "Luggage handling and welcome at the terminal exit",
    ],
    distanceFromCity: "5 km from central Montluçon",
    destinations: [
      "Central Montluçon",
      "Montluçon station",
      "Central Clermont-Ferrand",
    ],
    annualPassengers: "5,000",
  },
};
