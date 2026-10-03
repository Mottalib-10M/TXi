import type { CityFAQ, CityTestimonial } from "./cities";

/** Versions anglaises de la FAQ propre à chaque ville et des témoignages (saisis en français dans cities.ts). */
export const cityFaqEn: Record<string, CityFAQ[]> = {
  "angers": [
    { question: "Is there an airport in Angers?", answer: "Angers-Loire Airport is 20 minutes from the city centre. TaxiNeo handles transfers for around €25–35." },
    { question: "How long does a taxi take from Angers to Saumur?", answer: "The Angers to Saumur journey takes about 45 minutes by taxi. Allow €55–70 for a direct transfer." },
    { question: "Are taxis available at weekends in Angers?", answer: "Yes, our drivers in Angers are available 7 days a week, including weekends and public holidays." },
  ],
  "aubervilliers": [
    { question: "Campus Condorcet?", answer: "A new humanities and social sciences campus (Paris 1, EHESS, EPHE...) opened in 2019, served by metro line 12." },
    { question: "Fort d'Aubervilliers?", answer: "A former military fort being converted into a 7-hectare urban park, alongside the future Grand Paris Express station." },
  ],
  "avignon": [
    { question: "Is Avignon TGV station far from the centre?", answer: "The TGV station is 5 km from the historic centre. A TaxiNeo taxi gets you there in 10 minutes for around €15–20." },
    { question: "Are taxis available during the Avignon Festival?", answer: "Yes, we put plenty of drivers on the road during the Festival. Book ahead in July." },
    { question: "How much is a taxi from Avignon to the Pont du Gard?", answer: "The Avignon to Pont du Gard journey takes about 25 minutes. Allow €35–45." },
  ],
  "avon": [
    { question: "What's the difference between a taxi in Avon and one in Fontainebleau?", answer: "Same area, same fare. Avon and Fontainebleau are twin towns that share the railway station." },
    { question: "Transfers from Fontainebleau-Avon station?", answer: "The station is in Avon. Pick-up at the exit, with Transilien R timetables tracked." },
  ],
  "bayonne": [
    { question: "How much is a taxi from Bayonne to Biarritz Airport?", answer: "The Bayonne to Biarritz Airport journey costs around €20–30. Service available 24/7." },
    { question: "Can I take a taxi from Bayonne to San Sebastián?", answer: "Yes, our drivers provide transfers to San Sebastián in Spain (about 55 km). Allow €70–90." },
    { question: "Are taxis available during the Fêtes de Bayonne?", answer: "Yes, our drivers are out in force during the Fêtes. Book ahead, as demand is very high at the end of July." },
  ],
  "besancon": [
    { question: "Is Besançon TGV station far from the centre?", answer: "Besançon Franche-Comté TGV station is 10 km from the centre. A TaxiNeo taxi gets you there in 15 minutes for around €20–30." },
    { question: "How much is a taxi between Besançon's two stations?", answer: "The journey from Franche-Comté TGV station to Viotte station costs around €15–20. Our drivers cover the link for every connection." },
    { question: "Are taxis available to visit the Citadel?", answer: "Yes, our drivers take you to the Citadelle Vauban and can wait to bring you back." },
  ],
  "bobigny": [
    { question: "The Seine-Saint-Denis (93) prefecture?", answer: "Bobigny is the administrative capital of Seine-Saint-Denis. The prefecture and the judicial court are based here." },
    { question: "MC93?", answer: "MC93 is a leading national theatre for contemporary work, with a 900-seat auditorium." },
  ],
  "bordeaux": [
    { question: "How much is a taxi from Bordeaux to Mérignac?", answer: "The taxi fare from central Bordeaux to Mérignac Airport is around €30–45, depending on the time of day." },
    { question: "Can I take a taxi from Bordeaux to Arcachon?", answer: "Yes, the Bordeaux to Arcachon journey takes about 50 minutes. Allow €65–85 for a comfortable transfer to the Bassin." },
    { question: "How much is a taxi to Saint-Émilion?", answer: "The Bordeaux to Saint-Émilion journey costs between €55 and €70. Ideal for visiting the vineyards without any hassle." },
  ],
  "brest": [
    { question: "How much is a taxi from Brest to the airport?", answer: "The journey from central Brest to Guipavas Airport costs around €15–25. Get an estimate before booking on TaxiNeo." },
    { question: "Can I take a taxi from Brest to Roscoff for the ferry?", answer: "Yes, our drivers provide transfers to the port of Roscoff for ferries to Ireland and England." },
    { question: "Are taxis available during the Brest maritime festivals?", answer: "Yes, we put plenty of drivers on the road during the big maritime festivals. Book ahead." },
  ],
  "bussy-saint-georges": [
    { question: "Golf?", answer: "Golf international de Bussy: 18 holes in a wooded setting." },
  ],
  "caen": [
    { question: "Can I take a taxi to the D-Day beaches?", answer: "Yes, our drivers offer transfers and chauffeur hire to visit the D-Day beaches from Caen." },
    { question: "How much is a taxi from Caen to the Ouistreham ferry?", answer: "The journey from Caen to Ouistreham port costs around €20–30. Our drivers are available even very early in the morning." },
    { question: "Can I visit the D-Day beaches by taxi?", answer: "Yes, our drivers offer tours of the D-Day beaches (Omaha, Utah, Juno). Chauffeur hire by the day." },
  ],
  "calais": [
    { question: "Can I take a taxi at the Eurotunnel terminal?", answer: "Yes, our drivers are available at the Eurotunnel terminal in Coquelles and at the Calais ferry port." },
    { question: "How much is a taxi from Calais to Cité Europe in Coquelles?", answer: "The journey from central Calais to Cité Europe costs around €12–18. Ideal for a day's shopping." },
    { question: "Are taxis available for night-time ferry arrivals?", answer: "Yes, our drivers are available 24/7 at the port of Calais, even for night-time arrivals." },
  ],
  "cergy": [
    { question: "Port Cergy?", answer: "A marina on the Oise with restaurants and walks, 5 minutes from the centre." },
    { question: "Axe Majeur?", answer: "A monumental work by Dani Karavan, 3 km long, and the emblem of the new town." },
    { question: "RER A access?", answer: "Two RER A stations (Préfecture and Le Haut) get you to Paris in 35–40 min." },
  ],
  "chatillon": [
    { question: "Can you visit the Fort de Châtillon?", answer: "The Fort de Châtillon, a former CEA site, is partly open to the public during the European Heritage Days. Our drivers can pick you up nearby." },
    { question: "Is Châtillon-Montrouge station a good meeting point?", answer: "Yes, it's the terminus of line 13 and a landmark every driver knows. You can be picked up there easily." },
  ],
  "colmar": [
    { question: "Can I tour the Alsace Wine Route by taxi?", answer: "Yes, our drivers offer chauffeur hire for the Alsace Wine Route. Ideal for wine tasting with complete peace of mind." },
    { question: "Are taxis available during the Christmas Market?", answer: "Yes, our drivers are out in force during Colmar's famous Christmas Market. Book ahead in December." },
    { question: "How much is a taxi to visit Eguisheim?", answer: "The Colmar to Eguisheim journey takes about 10 minutes. Allow €12–18 to reach this charming Alsatian village." },
  ],
  "coulommiers": [
    { question: "The cheese?", answer: "Coulommiers is a soft cheese, a cousin of Brie, made locally since the Middle Ages." },
    { question: "The Templars?", answer: "A Knights Templar commandery from the 12th–13th centuries, one of the few Templar sites in the Île-de-France region." },
  ],
  "dijon": [
    { question: "Can I visit the vineyards by taxi from Dijon?", answer: "Yes, our drivers offer chauffeur hire along the Route des Grands Crus. Contact us for a quote." },
    { question: "How much is a taxi from Dijon to Beaune?", answer: "The Dijon to Beaune journey takes about 35 minutes. Allow €45–60 to reach the wine capital of Burgundy." },
    { question: "Are taxis available early in the morning at Dijon station?", answer: "Yes, our drivers are available 24/7 at Dijon-Ville station for every TGV, even the first trains of the day." },
  ],
  "dunkerque": [
    { question: "Can I take a taxi at the Dunkerque ferry port?", answer: "Yes, our drivers are available at the ferry terminal for arrivals from and departures to England." },
    { question: "Are taxis available during the Carnival?", answer: "Yes, our drivers are out in force during the Dunkerque Carnival. Book ahead, as demand is high." },
    { question: "How much is a taxi from Dunkerque to Calais?", answer: "The Dunkerque to Calais journey takes about 30 minutes. Allow €35–45." },
  ],
  "grenoble": [
    { question: "Can I take a taxi from Grenoble to the ski resorts?", answer: "Yes, our drivers provide transfers to the resorts (Chamrousse, Les 2 Alpes, Alpe d'Huez). Book ahead during the season." },
    { question: "How much is a taxi from Grenoble to Chamrousse?", answer: "The Grenoble to Chamrousse journey takes about 45 minutes. Allow €45–60 to reach the resort." },
    { question: "Are taxis available at night in Grenoble?", answer: "Yes, our drivers in Grenoble are available 24/7. Book online or call, even in the middle of the night." },
  ],
  "hyeres": [
    { question: "How much is a taxi from Hyères to Toulon-Hyères Airport?", answer: "The airport is just 5 minutes from the centre of Hyères. Allow €10–15 for the journey." },
    { question: "Can I take a taxi to Porquerolles?", answer: "Our taxis take you to the Tour Fondue harbour in Giens (where boats leave for Porquerolles) for €18–25 from the centre of Hyères." },
    { question: "Are taxis available at Toulon-Hyères Airport?", answer: "Yes, our drivers are available at the airport 24/7. Book ahead to be sure of a taxi when you land." },
  ],
  "le-havre": [
    { question: "Can I take a taxi from the port of Le Havre?", answer: "Yes, our drivers are available at the port for ferry and cruise passengers. Book ahead to be sure." },
    { question: "Can I take a taxi from Le Havre to Étretat?", answer: "Yes, the Le Havre to Étretat journey takes about 30 minutes. Allow €35–45 to discover the famous cliffs." },
    { question: "Are taxis available at the Le Havre ferry terminal?", answer: "Yes, our drivers meet passengers off ferries from England, even very early in the morning." },
  ],
  "le-mans": [
    { question: "Can I take a taxi during the 24 Hours of Le Mans?", answer: "Yes, we put plenty of drivers on the road during the 24 Hours of Le Mans. Book ahead for peace of mind." },
    { question: "How much is a taxi to the Circuit des 24 Heures?", answer: "The journey from central Le Mans to the Circuit des 24 Heures costs around €12–18. Book ahead during the event." },
    { question: "Are there taxis at Le Mans TGV station in the evening?", answer: "Yes, our drivers are available at Le Mans station for every TGV, including the last trains." },
  ],
  "le-mont-dore": [
    { question: "Does the taxi go up the Puy de Sancy?", answer: "The taxi drops you at the foot of the Sancy cable car, at the intermediate station. From there, the summit (1,886 m) is a 4-minute cable car ride followed by a 20-minute walk. Our drivers wait for you in the car park during your ascent and pick you up at the agreed time for the return journey." },
    { question: "Are there taxis in winter in Le Mont-Dore?", answer: "Yes, our drivers operate all year round in Le Mont-Dore, including in snow. Every vehicle is fitted with approved winter tyres and carries chains, which are essential on the D996 and the roads to the slopes. We keep a constant eye on the Sancy weather forecasts to adapt our routes and keep you safe." },
    { question: "Can you visit Le Mont-Dore's historic thermal baths?", answer: "The Mont-Dore thermal baths are a neo-Byzantine building dating from 1891, decorated with frescoes, mosaics and marble columns. Guided tours run in summer outside treatment hours. Our drivers know the opening times and drop you right in front of the monumental entrance. An architectural masterpiece not to be missed." },
    { question: "Does the Capucin funicular run all year?", answer: "The Capucin funicular, built in 1898, runs mainly in summer and during the school holidays. It carries visitors 500 metres up to the Salon du Capucin, an outstanding panoramic viewpoint. Our taxis drop you at the lower station and can pick you up at the top or the bottom, as you prefer." },
    { question: "Which waterfalls can you visit by taxi from Le Mont-Dore?", answer: "Le Mont-Dore has several remarkable waterfalls: the Grande Cascade (32 m high), the Cascade de la Dore and the Cascade du Queureuilh. Our drivers offer a half-day waterfall tour, with drop-off at each access trail. The Grande Cascade is the most spectacular, especially in spring when the snow melts." },
    { question: "How much is a taxi from Le Mont-Dore to Super Besse?", answer: "The Le Mont-Dore to Super Besse journey costs between €20 and €30 for about 20 km via the D36. The road offers superb views over the Sancy massif. In winter, this route lets you combine the two ski areas. Our drivers, equipped for the mountains, run this route daily, even in snow." },
  ],
  "lille": [
    { question: "How much is a taxi from Lille to Lesquin?", answer: "The journey from central Lille to Lesquin Airport costs around €20–30, depending on the time of day." },
    { question: "Can I take a taxi from Lille to Brussels?", answer: "Yes, our drivers provide Lille to Brussels transfers (about 110 km). Allow €120–150 for a journey of around 1 hour 15 minutes." },
    { question: "Are taxis available outside the Stade Pierre-Mauroy?", answer: "Yes, our drivers are out in force for events at the stadium. Book your return journey ahead to avoid waiting." },
  ],
  "lyon": [
    { question: "How much is a taxi from Lyon to Saint Exupéry?", answer: "The taxi fare from central Lyon to Saint Exupéry Airport is around €60–70. The exact price is estimated before you book on TaxiNeo." },
    { question: "How long does a taxi take from Lyon Part-Dieu to Saint Exupéry?", answer: "The journey from Part-Dieu to Saint Exupéry Airport takes about 30–40 minutes. The fare is around €60–75, depending on the time of day." },
    { question: "Are taxis available during the Fête des Lumières?", answer: "Yes, we put plenty of drivers on the road during the Fête des Lumières in Lyon. Book ahead to guarantee your ride." },
  ],
  "marseille": [
    { question: "How much is a taxi from Marseille to Provence Airport?", answer: "The journey between central Marseille and Provence Airport costs around €50–60, depending on traffic. An estimate is available before you book." },
    { question: "Can I take a taxi to visit the Calanques?", answer: "Yes, our drivers drop you at the main access points to the Calanques (Sormiou, Morgiou, Sugiton). Chauffeur hire for the day is also available." },
    { question: "Which taxi from the Vieux-Port to the Stade Vélodrome?", answer: "The Vieux-Port to Stade Vélodrome journey takes about 15 minutes by taxi. Allow €12–18, depending on traffic." },
  ],
  "montpellier": [
    { question: "How much is a taxi in Montpellier?", answer: "Rides within Montpellier cost €10–20 on average. The journey to the airport costs around €25–35." },
    { question: "Can I take a taxi from Montpellier to La Grande-Motte?", answer: "Yes, the Montpellier to La Grande-Motte journey takes about 25 minutes by taxi. Allow €30–40 for a direct transfer." },
    { question: "Are taxis available during the Festival de Radio France?", answer: "Yes, our drivers are out in force during Montpellier's major events. Book ahead for peace of mind." },
  ],
  "nancy": [
    { question: "Can I take a taxi from Nancy to Metz?", answer: "Yes, our drivers provide Nancy to Metz transfers (about 55 km). Allow €70–85 for the journey." },
    { question: "Are taxis available at night in Nancy?", answer: "Yes, our drivers in Nancy are available 24/7, including for nights out in the Vieux Nancy." },
    { question: "How much is a taxi from Nancy to Strasbourg?", answer: "The Nancy to Strasbourg journey takes about 1 hour 30 minutes. Allow €120–150 for a direct transfer." },
  ],
  "nantes": [
    { question: "How much is a taxi from Nantes to the airport?", answer: "The journey from central Nantes to Atlantique Airport costs around €30–40. A precise estimate is available before you book." },
    { question: "How long does a taxi take from Nantes to La Baule?", answer: "The Nantes to La Baule journey takes about 1 hour by taxi. Allow €75–95 for a direct, comfortable transfer." },
    { question: "Are taxis available at Nantes station in the evening?", answer: "Yes, our drivers are available 24/7 at Nantes station, including for the last TGVs." },
  ],
  "nice": [
    { question: "How much is a taxi from Nice to the airport?", answer: "The taxi fare from central Nice to Côte d'Azur Airport is around €25–35. An estimate is available on TaxiNeo before you book." },
    { question: "How much is a taxi from Nice to Monaco?", answer: "The journey from central Nice to Monaco takes about 25–30 minutes and costs between €40 and €55, depending on traffic on the Basse Corniche." },
    { question: "Are taxis available late at night in Nice?", answer: "Yes, our drivers in Nice are available 24/7, including for nights out in Vieux-Nice and around the port." },
  ],
  "orleans": [
    { question: "How long does a taxi take from Orléans to Paris?", answer: "The Orléans to Paris journey by taxi takes about 1 hour 30 minutes. Allow €150–180. Ideal if you have a lot of luggage." },
    { question: "How much is a taxi from Orléans to Blois?", answer: "The Orléans to Blois journey takes about 50 minutes. Allow €55–70 for a direct transfer." },
    { question: "Are taxis available at Orléans station?", answer: "Yes, our drivers are available 24/7 at Orléans station for every train." },
  ],
  "paris": [
    { question: "How much is a taxi from Paris to CDG?", answer: "The Paris to CDG journey has a regulated flat fare: €56 from the Right Bank, €65 from the Left Bank. No surprises with TaxiNeo." },
    { question: "Do TaxiNeo taxis use the bus lanes in Paris?", answer: "Yes, as official taxis, our drivers can use the Paris bus lanes, which cuts journey times considerably." },
    { question: "How long does a taxi take from Montmartre to Orly Airport?", answer: "Allow about 45–60 minutes, depending on traffic. The flat fare from the Right Bank is €45. Our drivers know the best routes." },
    { question: "Can I pay for a taxi by card in Paris?", answer: "Yes, all our taxis in Paris accept card payments at no extra charge. You can also pay through the TaxiNeo app." },
  ],
  "pau": [
    { question: "Can I take a taxi from Pau to the ski resorts?", answer: "Yes, our drivers provide transfers to the Pyrenean resorts (Gourette, La Pierre Saint-Martin). Book ahead." },
    { question: "How much is a taxi from Pau to Lourdes?", answer: "The Pau to Lourdes journey takes about 35 minutes. Allow €45–60 for a direct transfer." },
    { question: "Do taxis serve the Béarn spa towns?", answer: "Yes, our drivers provide transfers to the spa towns of Salies-de-Béarn, Eaux-Bonnes and Eaux-Chaudes." },
  ],
  "perpignan": [
    { question: "Can I take a taxi from Perpignan to the beaches?", answer: "Yes, our drivers provide transfers to Canet-en-Roussillon, Saint-Cyprien and the nearby beaches (€10–20)." },
    { question: "How much is a taxi from Perpignan to Collioure?", answer: "The Perpignan to Collioure journey takes about 25 minutes. Allow €30–40 to reach this picturesque village." },
    { question: "Do taxis cross the Spanish border?", answer: "Yes, our drivers provide transfers to Spain (Figueres, Girona, Barcelona). Contact us for a quote." },
  ],
  "poitiers": [
    { question: "How much is a taxi from Poitiers to Futuroscope?", answer: "The journey from central Poitiers to Futuroscope costs around €20–30. Our drivers know the site well." },
    { question: "Are taxis available at Futuroscope in the evening?", answer: "Yes, our drivers wait for you at the Futuroscope exit, including after the night-time shows." },
    { question: "How long does a taxi take from Poitiers to La Rochelle?", answer: "The journey takes about 1 hour 30 minutes. Allow €100–130 for a direct transfer." },
  ],
  "reims": [
    { question: "Can I visit the Champagne cellars by taxi?", answer: "Yes, our drivers offer chauffeur hire to visit the Champagne houses. Contact us for a tailored quote." },
    { question: "How much is a taxi from Reims to Épernay?", answer: "The Reims to Épernay journey takes about 30 minutes. Allow €40–55 to visit the capital of Champagne." },
    { question: "Can I take a taxi from Reims to CDG Airport?", answer: "Yes, our drivers provide Reims to CDG transfers (about 130 km). Allow €150–180 and a journey of about 1 hour 30 minutes." },
  ],
  "rennes": [
    { question: "Is there an airport in Rennes?", answer: "Yes, Rennes-Bretagne Airport is 15 minutes from the city centre. TaxiNeo handles transfers for around €20–30." },
    { question: "How much is a taxi from Rennes to Saint-Malo?", answer: "The Rennes to Saint-Malo journey takes about 1 hour. Allow €75–95 for a direct transfer." },
    { question: "Are there taxis at Rennes-Bretagne Airport?", answer: "Yes, our drivers provide transfers from Rennes-Bretagne Airport to the city centre and across the whole Rennes metropolitan area." },
  ],
  "rouen": [
    { question: "Can I take a taxi from Rouen to Paris?", answer: "Yes, our drivers provide Rouen to Paris transfers (about 130 km). Allow €170–200 for the journey." },
    { question: "Can I take a taxi from Rouen to Giverny?", answer: "Yes, the Rouen to Giverny journey takes about 50 minutes. Allow €55–70 to visit Monet's gardens." },
    { question: "Do taxis serve the Mont-Saint-Aignan campus?", answer: "Yes, our drivers know the university campus and all its entrances inside out." },
  ],
  "saint-cloud": [
    { question: "Can the taxi pick me up at the Domaine national de Saint-Cloud?", answer: "Yes, pick-up is possible at every entrance to the Domaine national, including the Grille d'Honneur and the Grille Verte gate." },
    { question: "Are taxis available on race evenings at the Hippodrome?", answer: "Yes, our drivers are available on horse-racing evenings. Book ahead to guarantee your vehicle when you leave." },
  ],
  "strasbourg": [
    { question: "How much is a taxi from Strasbourg to Entzheim?", answer: "The journey from central Strasbourg to Entzheim Airport costs around €25–35, depending on the time of day and traffic." },
    { question: "Can I take a taxi from Strasbourg to Europa-Park?", answer: "Yes, our drivers provide the Strasbourg to Europa-Park transfer in Germany (about 50 km). Allow €55–70 and a 40-minute journey." },
    { question: "Are taxis available during the Strasbourg Christmas Market?", answer: "Yes, we put plenty of drivers on the road during the famous Christmas Market. Book ahead at busy times." },
  ],
  "toulon": [
    { question: "Can I take a taxi to the port of Toulon?", answer: "Yes, our drivers provide transfers to the port for ferries to Corsica and the Îles d'Hyères." },
    { question: "Can I take a taxi to the Îles d'Hyères?", answer: "Our drivers take you to the departure port for the shuttle boats to Porquerolles, Port-Cros and Le Levant." },
    { question: "Do taxis serve the Toulon naval base?", answer: "Yes, our drivers know the access points to the Toulon naval base and arsenal well." },
  ],
  "toulouse": [
    { question: "How much is a taxi from Toulouse to Blagnac?", answer: "The journey from central Toulouse to Blagnac Airport costs around €25–35, depending on the time of day. Price estimated before booking." },
    { question: "How much is a taxi to the Cité de l'Espace?", answer: "The journey from central Toulouse to the Cité de l'Espace costs around €15–22. Ideal for a family day out without the parking hassle." },
    { question: "Are taxis available outside Airbus in Blagnac?", answer: "Yes, our drivers are used to the shift hours at the Airbus site. Book ahead to be picked up when you come out." },
  ],
  "tours": [
    { question: "Can I visit the Loire châteaux by taxi?", answer: "Yes, our drivers offer chauffeur hire to visit Chambord, Chenonceau, Amboise and other châteaux. Ask for a quote." },
    { question: "How much is a taxi from Tours to Amboise?", answer: "The Tours to Amboise journey takes about 25 minutes. Allow €35–45 for a direct transfer to the château." },
    { question: "Can I visit several Loire châteaux by taxi?", answer: "Yes, our drivers offer chauffeur hire by the day to visit Chambord, Chenonceau, Azay-le-Rideau and others." },
  ],
  "valence": [
    { question: "Is Valence TGV station far from the centre?", answer: "Valence TGV station is 10 km from the centre. A TaxiNeo taxi gets you there in 15 minutes for around €20–25." },
    { question: "Is the TGV station well served by taxis?", answer: "Yes, our drivers are available at Valence TGV station for every connection, 7 days a week." },
    { question: "How much is a taxi from Valence to Montélimar?", answer: "The Valence to Montélimar journey takes about 40 minutes. Allow €45–60 for a direct transfer." },
  ],
  "versailles": [
    { question: "How much is a taxi from Paris to Versailles?", answer: "The journey from central Paris to Versailles costs around €40–55, depending on traffic and your starting point." },
    { question: "How much is a taxi from Versailles to CDG Airport?", answer: "The Versailles to CDG journey takes about 50 minutes. Allow €65–85, depending on traffic." },
    { question: "Do taxis wait outside the Château?", answer: "Yes, our drivers wait for you outside the Château de Versailles. Book ahead for a return journey with no waiting." },
  ],
  "villejuif": [
    { question: "Gustave-Roussy?", answer: "The leading cancer centre in Europe, with 3,200 professionals. Our taxis carry patients and their families every day." },
    { question: "Grand Paris Express?", answer: "The future Villejuif - Institut Gustave-Roussy station (lines 14 and 15) will be a major transport hub for the south of Paris." },
    { question: "Taxi from Villejuif to Orly?", answer: "Orly is 10–15 min away via the N7 or the A6. Allow €15–25 by taxi." },
  ],
  "villeneuve-la-garenne": [
    { question: "Is Villeneuve-la-Garenne close to CDG?", answer: "Yes, it's one of the closest towns to CDG in the 92. Just 22 km and 25 minutes by taxi via the A86 and the A1." },
    { question: "Can I be picked up at the Qwartz centre?", answer: "Yes, our drivers wait for you outside the main entrance of the Qwartz shopping centre or at any other address in town." },
  ],
};

export const cityTestimonialsEn: Record<string, CityTestimonial[]> = {
  "angers": [
    { text: "Taxi from Saint-Laud station always available and quick.", name: "Guillaume R.", initials: "GR", role: "Traveller, Angers" },
    { text: "Perfect service for my trips to the university hospital. Thank you, TaxiNeo.", name: "Françoise M.", initials: "FM", role: "Patient, Angers" },
    { text: "Punctual driver for my appointments at the Parc des Expositions.", name: "Benoît L.", initials: "BL", role: "Sales representative, Angers" },
  ],
  "aubervilliers": [
    { text: "From Campus Condorcet, a taxi to CDG in 25 min. Very handy!", name: "Sophie T.", initials: "ST", role: "Academic" },
    { text: "Quick pick-up at Quatre-Chemins, courteous driver.", name: "Ibrahim K.", initials: "IK", role: "Resident" },
    { text: "Reliable service, I recommend it for airport runs.", name: "Marie-Claire D.", initials: "MD", role: "Resident" },
  ],
  "avignon": [
    { text: "Taxi from the TGV station to the centre, perfect during the Festival.", name: "Laure P.", initials: "LaP", role: "Festival-goer" },
    { text: "Reliable service for my trips to the Duffaut hospital.", name: "Henri M.", initials: "HeM", role: "Patient, Avignon" },
    { text: "Chauffeur hire to visit the Lubéron vineyards. A superb experience.", name: "Diana K.", initials: "DK", role: "Tourist" },
  ],
  "avon": [
    { text: "Quick pick-up outside Fontainebleau-Avon station, punctual and courteous driver.", name: "L. R.", initials: "LR", role: "Resident, Avon" },
    { text: "Orly transfer at 5am, flawless. The driver knows the area perfectly.", name: "P. M.", initials: "PM", role: "Frequent traveller" },
    { text: "Reliable service for my INSEAD trips. English-speaking drivers, clean vehicles.", name: "A. S.", initials: "AS", role: "INSEAD executive" },
  ],
  "bayonne": [
    { text: "Taxi to Biarritz Airport always reliable. Top service.", name: "Mikel E.", initials: "ME", role: "Bayonne local" },
    { text: "Perfect chauffeur hire for the Fêtes de Bayonne.", name: "Hélène S.", initials: "HeS", role: "Festival-goer" },
    { text: "Comfortable transfer from Bayonne to Saint-Jean-de-Luz.", name: "Pierre-Jean L.", initials: "PJL", role: "Tourist" },
  ],
  "besancon": [
    { text: "Quick, comfortable transfer from the TGV station to the centre. Perfect.", name: "Hervé M.", initials: "HeM", role: "Executive, Besançon" },
    { text: "Reliable service for my trips to the Jean Minjoz University Hospital.", name: "Annick L.", initials: "AnL", role: "Patient, Besançon" },
    { text: "Punctual driver for visiting the Citadel. Very professional.", name: "Fabrice R.", initials: "FaR", role: "Tourist" },
  ],
  "bobigny": [
    { text: "Taxi to the Bobigny courthouse, punctual and professional.", name: "Maître Dupont A.", initials: "DA", role: "Lawyer" },
    { text: "CDG transfer from the prefecture, quick via the A3.", name: "Stéphanie R.", initials: "SR", role: "Resident" },
    { text: "Reliable service for my journeys from Avicenne.", name: "Dr. Martin L.", initials: "ML", role: "Doctor" },
  ],
  "bordeaux": [
    { text: "Flawless transfer to Mérignac Airport. The driver was there 10 minutes early.", name: "Jean-Luc P.", initials: "JLP", role: "Winegrower, Bordeaux" },
    { text: "Taxi available quickly on a match night at the Matmut Atlantique. Very handy.", name: "Alexis D.", initials: "AD", role: "Student, Bordeaux" },
    { text: "Regular service for my trips to Pellegrin. Attentive drivers.", name: "Monique V.", initials: "MV", role: "Patient, Bordeaux" },
  ],
  "brest": [
    { text: "Reliable taxi from Guipavas Airport. Quick and punctual service.", name: "Yves G.", initials: "YG", role: "Sailor, Brest" },
    { text: "Port to station transfer without a hitch. Accommodating driver.", name: "Nolwenn R.", initials: "NR", role: "Traveller, Brest" },
    { text: "Quality service for my trips to the Brest university hospital.", name: "Jean-Pierre M.", initials: "JPM", role: "Patient, Brest" },
  ],
  "bussy-saint-georges": [
    { text: "Golf course → CDG, flawless.", name: "Olivier T.", initials: "OT", role: "Resident" },
    { text: "Punctual service.", name: "Marie J.", initials: "MJ", role: "Resident" },
    { text: "Reliable.", name: "Sébastien L.", initials: "SL", role: "Resident" },
  ],
  "caen": [
    { text: "Reliable taxi for the Ouistreham ferry. The driver was there at 4am.", name: "Gilles F.", initials: "GiF", role: "Traveller" },
    { text: "Quality service for my trips to the university hospital.", name: "Jacqueline P.", initials: "JaP", role: "Patient, Caen" },
    { text: "Station to Mémorial transfer, perfect for visitors.", name: "Andrew B.", initials: "AnB", role: "British tourist" },
  ],
  "calais": [
    { text: "Taxi at the Eurotunnel terminal always available. Perfect service.", name: "Peter H.", initials: "PH", role: "British traveller" },
    { text: "Quick, reliable transfer from the ferry port to Fréthun station.", name: "Martine B.", initials: "MaB2", role: "Calais local" },
    { text: "Quality service for my cross-border journeys.", name: "Simon L.", initials: "SiL", role: "Cross-border commuter" },
  ],
  "cergy": [
    { text: "Very handy for getting to the RER station in the morning.", name: "Olivier C.", initials: "OC", role: "CY student" },
    { text: "Punctual driver for my meetings at La Défense.", name: "Isabelle M.", initials: "IM", role: "Executive" },
    { text: "Perfect service for getting to CDG early in the morning.", name: "Rachid A.", initials: "RA", role: "Resident" },
  ],
  "chatillon": [
    { text: "From the Fort area to Orly: 18 minutes flat. The driver knew the shortcut via the A86. Flawless.", name: "Christophe L.", initials: "CL", role: "CEA engineer, Fort" },
    { text: "Reliable service for my weekly trips to CDG. Business invoicing makes my expense claims easy.", name: "Sandrine V.", initials: "SV", role: "Marketing director, Centre" },
    { text: "Picked up at the Coulée verte on a Sunday morning. Punctual, friendly driver, and the quoted price was honoured.", name: "Thomas P.", initials: "TP", role: "Photographer, Coulée verte" },
  ],
  "colmar": [
    { text: "Taxi to tour the Alsace Wine Route. Wonderful driver.", name: "Marie-France H.", initials: "MFH", role: "Tourist" },
    { text: "Quick service from the station to the Petite Venise.", name: "Claude W.", initials: "ClW", role: "Colmar local" },
    { text: "Reliable transfer to Strasbourg or Basel-Mulhouse.", name: "Ingrid S.", initials: "InS", role: "Traveller" },
  ],
  "coulommiers": [
    { text: "The sub-prefecture is well served by TaxiNeo.", name: "André M.", initials: "AM", role: "Resident" },
    { text: "Templars and cheese, quick taxi.", name: "Christine B.", initials: "CB", role: "Resident" },
    { text: "Good CDG transfer.", name: "Romain F.", initials: "RF", role: "Resident" },
  ],
  "dijon": [
    { text: "Quick taxi from the TGV station. Perfect for my business trips.", name: "Christian P.", initials: "CP", role: "Executive, Dijon" },
    { text: "Reliable service for visiting the Burgundy vineyards.", name: "Marie-Claire D.", initials: "MCD", role: "Tourist" },
    { text: "Regular transfers to the university hospital. Drivers always friendly.", name: "Bernard G.", initials: "BG", role: "Patient, Dijon" },
  ],
  "dunkerque": [
    { text: "Taxi available at the ferry terminal even at 11pm. Perfect.", name: "Michel V.", initials: "MiV2", role: "Traveller" },
    { text: "Reliable service during the Dunkerque Carnival. Hats off!", name: "Élodie C.", initials: "ElC", role: "Dunkerque local" },
    { text: "Quick, comfortable transfer to Lille.", name: "Bruno T.", initials: "BrT", role: "Executive, Dunkerque" },
  ],
  "grenoble": [
    { text: "Reliable taxi for my trips to the university campus. Always punctual.", name: "Lucie B.", initials: "LB", role: "Researcher, Grenoble" },
    { text: "Comfortable, on-time transfer from Grenoble to Lyon Saint Exupéry.", name: "Antoine G.", initials: "AG", role: "Executive, Grenoble" },
    { text: "Perfect service for getting to the Presqu'île scientifique.", name: "Rémi T.", initials: "RT", role: "Engineer, Grenoble" },
  ],
  "hyeres": [
    { text: "Perfect taxi to reach the Tour Fondue harbour and catch the boat to Porquerolles.", name: "Isabelle V.", initials: "IV", role: "Tourist, Hyères" },
    { text: "Quick, reliable airport service. Ideal for my business trips.", name: "Laurent M.", initials: "LM", role: "Sales representative, Hyères" },
    { text: "Very friendly driver for discovering Giens and the Salins. A lovely outing.", name: "Françoise R.", initials: "FR", role: "Holidaymaker, Hyères" },
  ],
  "le-havre": [
    { text: "Taxi available even when the ferries come back in. Handy, reliable service.", name: "Patrick L.", initials: "PL", role: "Traveller, Le Havre" },
    { text: "Quick port to station run to catch my train to Paris.", name: "Élise B.", initials: "EB", role: "Executive, Le Havre" },
    { text: "Pleasant driver for my trips around the Perret district.", name: "Gérard F.", initials: "GF", role: "Retiree, Le Havre" },
  ],
  "le-mans": [
    { text: "Taxi available even during the 24 Hours. Impressive.", name: "Vincent L.", initials: "VL", role: "Motorsport fan" },
    { text: "Quick, reliable ride from the TGV station to home. My go-to taxi.", name: "Colette B.", initials: "CoB", role: "Executive, Le Mans" },
    { text: "Regular service to the Centre Hospitalier. Friendly drivers.", name: "Jacques D.", initials: "JaD", role: "Patient, Le Mans" },
  ],
  "le-mont-dore": [
    { text: "Perfect transfer for our spa cure in Le Mont-Dore. The driver knows the mountain roads.", name: "Bernard G.", initials: "BG", role: "Spa-cure guest" },
    { text: "Ideal taxi for going up the Sancy. No need to worry about black ice.", name: "Stéphanie V.", initials: "SV", role: "Hiker" },
    { text: "Reliable service even in the depths of winter to get to the ski resort.", name: "Nicolas T.", initials: "NT", role: "Skier" },
  ],
  "lille": [
    { text: "Reliable taxi from Lille-Europe after every Eurostar. Quick, efficient service.", name: "Philippe B.", initials: "PB", role: "Businessman, Lille" },
    { text: "Perfect for my trips to Euralille. Professional drivers.", name: "Valérie T.", initials: "VT", role: "Executive, Lille" },
    { text: "Transfer to Lesquin always flawless, even early in the morning.", name: "Damien C.", initials: "DC", role: "Sales representative, Lille" },
  ],
  "lyon": [
    { text: "Part-Dieu to Saint Exupéry in 30 minutes, with a professional driver who knows Lyon inside out.", name: "Thomas R.", initials: "TR", role: "Consultant, Lyon 3rd" },
    { text: "Perfect Business service for our company in Confluence. Simplified invoicing.", name: "Nathalie G.", initials: "NG", role: "Administrative director" },
    { text: "Easy booking, punctual driver, comfortable vehicle. I recommend it to everyone in Lyon.", name: "Pierre V.", initials: "PV", role: "Architect, Lyon 6th" },
  ],
  "marseille": [
    { text: "Taxi always available, even outside the Vélodrome on a match night. Top service!", name: "Karim B.", initials: "KB", role: "Resident, 13th arrondissement" },
    { text: "Reliable transfer to Provence Airport. The driver helped me with my luggage without hesitation.", name: "Claire M.", initials: "CM", role: "Entrepreneur" },
    { text: "I use TaxiNeo for my journeys between La Timone and home. Quick and punctual.", name: "Dr. Farid A.", initials: "FA", role: "Hospital doctor" },
  ],
  "montpellier": [
    { text: "Responsive taxi even during festival season. The driver knows Montpellier like the back of his hand.", name: "Emma T.", initials: "ET", role: "Student, Montpellier" },
    { text: "Quick, comfortable transfer from Saint-Roch station to Lapeyronie.", name: "Michel R.", initials: "MR", role: "Regular patient" },
    { text: "Professional service for my business trips to Antigone. I recommend it.", name: "Sandrine L.", initials: "SaL", role: "Consultant" },
  ],
  "nancy": [
    { text: "Quick taxi from the station to Place Stanislas. Great driver.", name: "Sébastien L.", initials: "SeL", role: "Tourist" },
    { text: "Reliable service for my daily Nancy to Metz journeys.", name: "Éliane M.", initials: "ElM", role: "Cross-border commuter" },
    { text: "Punctual driver for the university hospital. Thank you, TaxiNeo.", name: "Marcel R.", initials: "MaR", role: "Patient, Nancy" },
  ],
  "nantes": [
    { text: "Excellent service for my trips to Atlantique Airport. Never late.", name: "Yann B.", initials: "YB", role: "Entrepreneur, Nantes" },
    { text: "Friendly, efficient driver for getting around the Île de Nantes.", name: "Marine K.", initials: "MK", role: "Designer, Nantes" },
    { text: "TaxiNeo has become essential for my business meetings at Euronantes.", name: "François H.", initials: "FH", role: "Lawyer, Nantes" },
  ],
  "nice": [
    { text: "Taxi available even in the middle of the Jazz Festival. Outstanding service on the Côte d'Azur.", name: "Brigitte S.", initials: "BS", role: "Hotelier, Nice" },
    { text: "Nice airport to Monaco transfer with complete peace of mind. Professional, discreet driver.", name: "Maxime L.", initials: "ML", role: "Businessman" },
    { text: "I use it regularly for my trips to Sophia Antipolis. Reliable and punctual.", name: "Julie D.", initials: "JD", role: "Developer, Nice" },
  ],
  "orleans": [
    { text: "Quick taxi from the station to the centre. Knowledgeable driver.", name: "Nathalie S.", initials: "NaS", role: "Orléans local" },
    { text: "Reliable service for my Paris to Orléans round trips.", name: "Christophe V.", initials: "ChV", role: "Executive" },
    { text: "Punctual transfer to the regional hospital and a friendly driver.", name: "Josette P.", initials: "JoP", role: "Patient, Orléans" },
  ],
  "paris": [
    { text: "Impeccable service for my daily trips to La Défense. The driver knows every shortcut.", name: "Sophie L.", initials: "SL", role: "Executive, Paris 16th" },
    { text: "Perfect Orly transfer at 5am. Punctual, clean vehicle, and the quoted fixed price was honoured.", name: "Marc D.", initials: "MD", role: "Frequent traveller" },
    { text: "I book every week for my medical appointments. The drivers are always patient and helpful.", name: "Jeanne P.", initials: "JP", role: "Retiree, Paris 5th" },
  ],
  "pau": [
    { text: "A taxi with a view of the Pyrenees! Top airport transfer.", name: "Jean-Claude B.", initials: "JCB", role: "Béarn local" },
    { text: "Reliable service for my trips to the Pau hospital.", name: "Simone D.", initials: "SiD", role: "Patient, Pau" },
    { text: "Perfect chauffeur hire for a weekend in the Béarn.", name: "Alexandra M.", initials: "AlM", role: "Tourist, Pau" },
  ],
  "perpignan": [
    { text: "Reliable taxi for my trips from the station to Canet beach. Friendly driver.", name: "Carmen S.", initials: "CS", role: "Perpignan local" },
    { text: "Quick, punctual transfer to Rivesaltes Airport.", name: "Luis P.", initials: "LP", role: "Traveller" },
    { text: "Quality service for my medical appointments. Thank you, TaxiNeo.", name: "Marie-Thérèse D.", initials: "MTD", role: "Patient, Perpignan" },
  ],
  "poitiers": [
    { text: "Taxi to Futuroscope, perfect for a family day out.", name: "Aurélien B.", initials: "AuB", role: "Dad, Poitiers" },
    { text: "Station to university hospital transfer, always reliable. Thank you.", name: "Régine S.", initials: "ReS", role: "Patient, Poitiers" },
    { text: "Professional service for my trips to the Technopôle.", name: "Karine D.", initials: "KD", role: "Engineer" },
  ],
  "reims": [
    { text: "Station to home transfer always quick. Ideal after a TGV from Paris.", name: "Stéphane M.", initials: "SM", role: "Executive, Reims" },
    { text: "Reliable service for Champagne cellar visits with clients.", name: "Dominique L.", initials: "DL", role: "Wine merchant" },
    { text: "Punctual taxi for my appointments at the Centre des Congrès.", name: "Céline R.", initials: "CR", role: "Event organiser" },
  ],
  "rennes": [
    { text: "Quick taxi from the TGV station. I was at my hotel in 10 minutes.", name: "Olivier G.", initials: "OG", role: "Traveller, Rennes" },
    { text: "Perfect service for my trips to the Pontchaillou University Hospital. Thank you, TaxiNeo!", name: "Anne-Marie F.", initials: "AMF", role: "Nurse, Rennes" },
    { text: "Pleasant driver and clean vehicle for all my journeys around Rennes.", name: "Julien N.", initials: "JN", role: "Developer, Rennes" },
  ],
  "rouen": [
    { text: "Reliable taxi between the station and the university hospital. Quality service.", name: "Laurent G.", initials: "LaG", role: "Doctor, Rouen" },
    { text: "Punctual driver for my trips around the historic centre.", name: "Brigitte L.", initials: "BrL", role: "Rouen local" },
    { text: "Comfortable transfer from Rouen to Le Havre. I recommend it.", name: "Arnaud D.", initials: "ArD", role: "Sales representative" },
  ],
  "saint-cloud": [
    { text: "Flawless transfer to Orly at 5am. The driver knew the little streets of Montretout perfectly and avoided the congested Pont de Saint-Cloud.", name: "Isabelle R.", initials: "IR", role: "Resident" },
    { text: "I regularly take a taxi to CDG. Punctual service, clean vehicle, and the quoted fixed price is always honoured. Recommended.", name: "Philippe D.", initials: "PD", role: "Resident" },
    { text: "After an evening at the Hippodrome, a quick and comfortable ride home. The driver was courteous and the vehicle very well kept.", name: "Catherine M.", initials: "CM", role: "Resident" },
  ],
  "strasbourg": [
    { text: "Perfect for my trips to the European Parliament. Punctual, professional service.", name: "Hans M.", initials: "HM", role: "EU civil servant" },
    { text: "Quick transfer from the station to Entzheim Airport. Very pleasant driver.", name: "Catherine W.", initials: "CW", role: "Traveller, Strasbourg" },
    { text: "Reliable service for my medical appointments at the University Hospitals.", name: "René K.", initials: "RK", role: "Retiree, Strasbourg" },
  ],
  "toulon": [
    { text: "Reliable taxi from the station to the port. Ideal before boarding for Corsica.", name: "Jean-Marc D.", initials: "JMD", role: "Traveller, Toulon" },
    { text: "Quick service for my trips to the Sainte-Musse hospital.", name: "Martine C.", initials: "MC", role: "Patient, Toulon" },
    { text: "Punctual driver and clean vehicle. I recommend TaxiNeo in Toulon.", name: "Fabien S.", initials: "FS", role: "Service member, Toulon" },
  ],
  "toulouse": [
    { text: "Reliable taxi for my daily trips to Airbus in Blagnac. Always on time.", name: "Laurent F.", initials: "LF", role: "Aerospace engineer" },
    { text: "Quick, pleasant transfer to Blagnac Airport. The driver knows every shortcut.", name: "Isabelle C.", initials: "IC", role: "Sales representative" },
    { text: "Great service for my medical trips to Purpan. Very attentive drivers.", name: "André M.", initials: "AM", role: "Retiree, Toulouse" },
  ],
  "tours": [
    { text: "Flawless transfer from Saint-Pierre-des-Corps station to central Tours.", name: "Florence D.", initials: "FD", role: "Traveller, Tours" },
    { text: "Taxi to visit the Loire châteaux. A wonderful driver-guide.", name: "Richard S.", initials: "RS", role: "Tourist" },
    { text: "Regular service to the Trousseau University Hospital. Always satisfied.", name: "Maurice L.", initials: "MaL", role: "Patient, Tours" },
  ],
  "valence": [
    { text: "Quick transfer from the TGV station to the town centre. The driver was very friendly.", name: "Pascale D.", initials: "PaD2", role: "Traveller" },
    { text: "Reliable service for my trips to the Valence hospital.", name: "Robert N.", initials: "RoN", role: "Patient, Valence" },
    { text: "Punctual taxi for my business appointments.", name: "Chantal M.", initials: "ChM2", role: "Executive, Valence" },
  ],
  "versailles": [
    { text: "Taxi from Paris to the Château with no stress. A driver passionate about history.", name: "Emily W.", initials: "EW", role: "American tourist" },
    { text: "Reliable service for my daily trips between the station and home.", name: "Geneviève L.", initials: "GeL", role: "Versailles local" },
    { text: "Comfortable transfer to CDG. Reasonable price.", name: "Youssef A.", initials: "YA", role: "Traveller, Versailles" },
  ],
  "villejuif": [
    { text: "Regular taxi to Gustave-Roussy, drivers always respectful and punctual.", name: "Marie-France D.", initials: "MD", role: "Patient" },
    { text: "Villejuif → Orly in 15 min, ideal before a flight.", name: "Sébastien P.", initials: "SP", role: "Resident" },
    { text: "The Parc des Hautes-Bruyères is superb, and the taxi is a reliable way to get there.", name: "Amina R.", initials: "AR", role: "Resident" },
  ],
  "villeneuve-la-garenne": [
    { text: "From Villeneuve, CDG is only 25 minutes by taxi. Much easier than public transport with my suitcases.", name: "Rachid K.", initials: "RK", role: "Villeneuve-la-Garenne resident" },
    { text: "Picked up outside Qwartz for a flight from Orly. Friendly driver, clean car, fixed price honoured.", name: "Sandrine V.", initials: "SV", role: "Shopkeeper" },
    { text: "We live on the banks of the Seine in Villeneuve. TaxiNeo has become our go-to for airport runs.", name: "Jean-Pierre et Marie F.", initials: "JF", role: "Retired couple" },
  ],
};
