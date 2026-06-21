import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "About TaxiNeo — Fixed-price taxi booking platform in France"
      : "A propos de TaxiNeo — Plateforme de reservation taxi prix fixe en France";
  const description =
    locale === "en"
      ? "TaxiNeo connects passengers with licensed taxi drivers across 50+ French cities. Fixed prices, professional drivers, 24/7 availability."
      : "TaxiNeo connecte les passagers avec des chauffeurs de taxi agrees dans plus de 50 villes francaises. Prix fixes, chauffeurs professionnels, disponible 24h/24.";
  return {
    title,
    description,
    openGraph: { title, description },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/a-propos`,
      languages: {
        fr: "https://www.taxineo.fr/fr/a-propos",
        en: "https://www.taxineo.fr/en/a-propos",
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isFr ? "A propos de TaxiNeo" : "About TaxiNeo",
    url: `https://www.taxineo.fr/${locale}/a-propos`,
    mainEntity: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
      founder: {
        "@type": "Person",
        name: "Mottalib Radif",
        image: "https://www.taxineo.fr/team/mottalib-radif.jpg",
        jobTitle: isFr ? "Expert en mobilite urbaine et transport" : "Urban Mobility and Transportation Expert",
        description: isFr
          ? "Expert en mobilite urbaine et solutions de transport, diplome MBA de l'INSEAD. Passionne par l'innovation dans le secteur du taxi et du transport de personnes."
          : "Urban mobility and transportation solutions expert, MBA INSEAD graduate. Passionate about innovation in taxi services and passenger transport.",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {isFr ? "Qui sommes-nous" : "Who we are"}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {isFr ? "A propos de TaxiNeo" : "About TaxiNeo"}
            </h1>
            <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? "TaxiNeo est la plateforme francaise qui simplifie la reservation de taxis agrees a prix fixe. Notre mission : rendre chaque trajet transparent, fiable et accessible."
                : "TaxiNeo is the French platform that simplifies booking licensed taxis at fixed prices. Our mission: make every ride transparent, reliable and accessible."}
            </p>
          </div>

          {/* Founder Section */}
          <section className="mb-16">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-neutral-200">
                  <Image
                    src="/team/mottalib-radif.jpg"
                    alt="Mottalib Radif - Fondateur de TaxiNeo"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">Mottalib Radif</h2>
                  <p className="text-sm text-neutral-500 font-light mb-1">
                    {isFr ? "Expert en mobilite urbaine et transport" : "Urban Mobility and Transportation Expert"}
                  </p>
                  <p className="text-xs text-neutral-400 font-light mb-4">MBA INSEAD</p>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {isFr
                      ? "Expert en mobilite urbaine et solutions de transport, diplome MBA de l'INSEAD. Passionne par l'innovation dans le secteur du taxi et du transport de personnes, j'ai cree TaxiNeo pour offrir une alternative simple et transparente aux plateformes VTC."
                      : "Urban mobility and transportation solutions expert, MBA INSEAD graduate. Passionate about innovation in taxi services and passenger transport, I created TaxiNeo to offer a simple and transparent alternative to VTC platforms."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Urban Mobility Challenges */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Les defis de la mobilite urbaine en France" : "Urban mobility challenges in France"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Le secteur du transport de personnes en France a connu une transformation profonde au cours de la derniere decennie. L'emergence des plateformes VTC a bouleverse le marche, creant de nouvelles attentes chez les passagers en matiere de simplicite de reservation et de transparence tarifaire. Pourtant, les chauffeurs de taxi agrees — professionnels titulaires d'une licence officielle, formes et assures — restent souvent en marge de cette revolution numerique."
                : "The passenger transport sector in France has undergone a profound transformation over the past decade. The emergence of ride-hailing platforms has disrupted the market, creating new passenger expectations around booking simplicity and pricing transparency. Yet licensed taxi drivers — professionals holding official permits, trained and insured — often remain on the margins of this digital revolution."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Les passagers font face a plusieurs frustrations recurrentes : l'incertitude sur le prix final de la course (compteur au kilometre), la difficulte a trouver un taxi disponible aux heures de pointe, le manque de visibilite sur l'identite et les qualifications du chauffeur, et l'absence d'un processus de reservation simple et rapide. De leur cote, les chauffeurs de taxi peinent a rivaliser avec les plateformes VTC en termes de visibilite en ligne et de facilite de reservation."
                : "Passengers face several recurring frustrations: uncertainty about the final fare (metered pricing), difficulty finding an available taxi during peak hours, lack of visibility into driver identity and qualifications, and the absence of a simple, fast booking process. On their side, taxi drivers struggle to compete with ride-hailing platforms in terms of online visibility and booking convenience."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "TaxiNeo est ne de ce constat : il manquait une plateforme qui combine les avantages du taxi agree (professionnalisme, licence, assurance, vehicules controles) avec la simplicite d'utilisation des applications modernes. C'est exactement ce que nous proposons."
                : "TaxiNeo was born from this observation: there was a missing platform that combines the advantages of licensed taxis (professionalism, licensing, insurance, inspected vehicles) with the user-friendliness of modern apps. That is exactly what we offer."}
            </p>
          </section>

          {/* How TaxiNeo Innovates */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Comment TaxiNeo innove" : "How TaxiNeo innovates"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "TaxiNeo repense l'experience de reservation de taxi en France en s'appuyant sur trois piliers : le prix fixe, la technologie et le reseau de chauffeurs agrees."
                : "TaxiNeo rethinks the taxi booking experience in France by building on three pillars: fixed pricing, technology, and a network of licensed drivers."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Le prix fixe est au coeur de notre proposition de valeur. Contrairement au systeme traditionnel du compteur kilometrique, TaxiNeo calcule et affiche un prix ferme avant la reservation. Ce prix inclut tout : pas de supplement pour les bagages, pas de majoration surprise a l'arrivee, pas de frais caches. Le passager sait exactement combien il va payer avant de confirmer sa course. Cette transparence elimine l'anxiete liee a l'incertitude tarifaire et renforce la confiance entre le passager et le chauffeur."
                : "Fixed pricing is at the heart of our value proposition. Unlike the traditional metered system, TaxiNeo calculates and displays a firm price before booking. This price includes everything: no luggage surcharges, no surprise markups on arrival, no hidden fees. The passenger knows exactly how much they will pay before confirming their ride. This transparency eliminates fare uncertainty anxiety and strengthens trust between passenger and driver."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Notre algorithme de tarification prend en compte la distance, le temps de trajet estime (en integrant les conditions de circulation en temps reel), le type de vehicule et les eventuels peages. Le prix est calcule instantanement et garanti : meme si le trajet prend plus de temps que prevu en raison d'embouteillages, le passager paie le prix convenu."
                : "Our pricing algorithm takes into account the distance, estimated travel time (incorporating real-time traffic conditions), vehicle type, and any tolls. The price is calculated instantly and guaranteed: even if the trip takes longer than expected due to traffic, the passenger pays the agreed price."}
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
              {isFr ? "Nos valeurs" : "Our values"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "solar:shield-check-linear",
                  title: isFr ? "Transparence" : "Transparency",
                  desc: isFr
                    ? "Prix fixe annonce avant la reservation. Pas de surprise, pas de frais caches. Chaque detail du prix est affiche clairement."
                    : "Fixed price announced before booking. No surprises, no hidden fees. Every pricing detail is displayed clearly.",
                },
                {
                  icon: "solar:verified-check-linear",
                  title: isFr ? "Qualite" : "Quality",
                  desc: isFr
                    ? "Chauffeurs agrees, vehicules entretenus, service professionnel garanti. Tous nos chauffeurs sont titulaires d'une licence officielle."
                    : "Licensed drivers, maintained vehicles, guaranteed professional service. All our drivers hold an official taxi license.",
                },
                {
                  icon: "solar:users-group-rounded-linear",
                  title: isFr ? "Accessibilite" : "Accessibility",
                  desc: isFr
                    ? "Disponible 24h/24, 7j/7 dans plus de 50 villes francaises. Reservation possible a l'avance ou pour un depart immediat."
                    : "Available 24/7 in over 50 French cities. Booking available in advance or for immediate departure.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={v.icon} className="text-neutral-900 text-xl" />
                  </div>
                  <h3 className="text-base font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Booking Technology */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Technologie de reservation" : "Booking technology"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "La plateforme TaxiNeo a ete concue pour offrir une experience de reservation fluide et rapide, aussi bien sur ordinateur que sur mobile. Le processus est simple : le passager indique son point de depart, sa destination et l'horaire souhaite. En quelques secondes, TaxiNeo affiche un prix fixe et les vehicules disponibles."
                : "The TaxiNeo platform was designed to deliver a smooth and fast booking experience, on both desktop and mobile. The process is simple: the passenger enters their pickup location, destination, and preferred time. Within seconds, TaxiNeo displays a fixed price and available vehicles."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Une fois la reservation confirmee, le passager recoit les coordonnees de son chauffeur (nom, numero de telephone, type et couleur du vehicule, numero d'immatriculation). Un SMS de rappel est envoye avant le depart. Le chauffeur, de son cote, recoit toutes les informations necessaires sur la course : lieu de prise en charge, destination, coordonnees du passager."
                : "Once the booking is confirmed, the passenger receives their driver's details (name, phone number, vehicle type and color, license plate). A reminder SMS is sent before departure. The driver, in turn, receives all necessary trip information: pickup location, destination, passenger contact details."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Notre technologie integre la geolocalisation, le calcul d'itineraire en temps reel et l'estimation du temps de trajet pour fournir des prix precis et des heures d'arrivee fiables. La plateforme est optimisee pour les performances : les pages se chargent en moins de deux secondes, et la reservation complete peut etre effectuee en moins d'une minute."
                : "Our technology integrates geolocation, real-time route calculation, and travel time estimation to provide accurate prices and reliable arrival times. The platform is optimized for performance: pages load in under two seconds, and the complete booking can be done in under a minute."}
            </p>
          </section>

          {/* Coverage Areas */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Zones de couverture" : "Coverage areas"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "TaxiNeo est disponible dans plus de 50 villes et agglomerations en France. Notre reseau couvre les principales metropoles (Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg, Nice) ainsi que de nombreuses villes moyennes et zones periurbaines. Nous proposons egalement des trajets inter-villes et des transferts vers les aeroports et gares."
                : "TaxiNeo is available in over 50 cities and metropolitan areas across France. Our network covers major cities (Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille, Strasbourg, Nice) as well as numerous mid-sized cities and suburban areas. We also offer inter-city trips and transfers to airports and train stations."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Les transferts aeroport representent une part importante de notre activite. Que ce soit vers Paris-Charles de Gaulle, Paris-Orly, Lyon-Saint Exupery, Nice Cote d'Azur ou Marseille-Provence, TaxiNeo permet de reserver un taxi a l'avance a prix fixe, evitant ainsi le stress de chercher un taxi a l'arrivee ou la surprise d'un compteur qui monte dans les embouteillages."
                : "Airport transfers represent a significant part of our activity. Whether to Paris-Charles de Gaulle, Paris-Orly, Lyon-Saint Exupery, Nice Cote d'Azur, or Marseille-Provence, TaxiNeo lets you book a taxi in advance at a fixed price, avoiding the stress of finding a taxi on arrival or the surprise of a rising meter in traffic."}
            </p>
          </section>

          {/* Driver Quality and Safety */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Qualite des chauffeurs et securite" : "Driver quality and safety"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Tous les chauffeurs du reseau TaxiNeo sont des professionnels agrees, titulaires d'une licence de taxi delivree par la prefecture. Cette licence garantit que le chauffeur a passe avec succes les examens requis (connaissance de la reglementation, securite routiere, premiers secours) et que son vehicule est conforme aux normes en vigueur (controle technique a jour, assurance professionnelle, hygiene)."
                : "All drivers in the TaxiNeo network are licensed professionals holding a taxi permit issued by the prefecture. This license guarantees that the driver has passed required examinations (knowledge of regulations, road safety, first aid) and that their vehicle complies with current standards (up-to-date technical inspection, professional insurance, hygiene)."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "La securite des passagers est une priorite absolue. Les vehicules sont regulierement inspectes, les chauffeurs sont assures pour le transport de personnes, et la plateforme conserve un historique de chaque course pour assurer la tracabilite. Contrairement a certaines plateformes VTC, les chauffeurs de taxi agrees sont soumis a une reglementation stricte qui protege les passagers."
                : "Passenger safety is an absolute priority. Vehicles are regularly inspected, drivers carry professional passenger transport insurance, and the platform maintains a record of every trip for traceability. Unlike some ride-hailing platforms, licensed taxi drivers are subject to strict regulations that protect passengers."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Nous mettons egalement en place un systeme d'evaluation des chauffeurs par les passagers. Ces retours nous permettent de maintenir un niveau de qualite de service eleve et d'identifier rapidement tout probleme eventuel."
                : "We also implement a driver rating system by passengers. This feedback allows us to maintain a high level of service quality and quickly identify any potential issues."}
            </p>
          </section>

          {/* Pricing Transparency */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "Transparence des prix" : "Pricing transparency"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Le modele de prix fixe de TaxiNeo repose sur un principe simple : le passager connait le prix exact de sa course avant de reserver. Ce prix est definitif et garanti, quelles que soient les conditions de circulation. Il n'y a pas de compteur, pas de majoration dynamique (surge pricing) et pas de frais supplementaires non annonces."
                : "TaxiNeo's fixed-price model is built on a simple principle: the passenger knows the exact fare before booking. This price is final and guaranteed, regardless of traffic conditions. There is no meter, no dynamic surge pricing, and no unannounced additional fees."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Cette approche profite aussi aux chauffeurs : ils savent exactement combien ils vont percevoir pour chaque course, ce qui leur permet de mieux planifier leur activite. Le prix fixe elimine les situations conflictuelles liees au compteur et cree une relation de confiance entre le passager et le chauffeur. C'est un systeme gagnant-gagnant."
                : "This approach also benefits drivers: they know exactly how much they will earn for each trip, allowing them to better plan their activity. Fixed pricing eliminates conflict situations related to the meter and creates a trust-based relationship between passenger and driver. It is a win-win system."}
            </p>
          </section>

          {/* How it works summary */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
              {isFr ? "Comment ca fonctionne" : "How it works"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: isFr ? "Reservez en ligne" : "Book online",
                  desc: isFr
                    ? "Indiquez votre depart, destination et horaire. Recevez un prix fixe instantanement."
                    : "Enter your pickup, destination and time. Get a fixed price instantly.",
                },
                {
                  step: "2",
                  title: isFr ? "Confirmez votre trajet" : "Confirm your ride",
                  desc: isFr
                    ? "Un chauffeur agree est assigne a votre course. Vous recevez ses coordonnees."
                    : "A licensed driver is assigned to your ride. You receive their contact details.",
                },
                {
                  step: "3",
                  title: isFr ? "Voyagez sereinement" : "Travel peacefully",
                  desc: isFr
                    ? "Votre chauffeur vous attend au point de rendez-vous. Payez le prix convenu."
                    : "Your driver awaits at the meeting point. Pay the agreed price.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                    {s.step}
                  </div>
                  <h3 className="text-base font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* About Mottalib Radif */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">
              {isFr ? "A propos de Mottalib Radif, MBA INSEAD" : "About Mottalib Radif, MBA INSEAD"}
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed mb-4">
              {isFr
                ? "Mottalib Radif est expert en mobilite urbaine et solutions de transport, diplome du programme MBA de l'INSEAD, l'une des ecoles de commerce les plus prestigieuses au monde. Son expertise couvre les modeles de plateforme, la logistique du dernier kilometre et l'innovation dans le secteur du transport de personnes."
                : "Mottalib Radif is an urban mobility and transportation solutions expert, graduate of the MBA program at INSEAD, one of the world's most prestigious business schools. His expertise covers platform business models, last-mile logistics, and innovation in the passenger transport sector."}
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "L'idee de TaxiNeo est nee d'un constat simple : les chauffeurs de taxi agrees en France offrent un service de qualite superieure (formation, licence, assurance, vehicules controles), mais manquent d'outils numeriques modernes pour rivaliser avec les plateformes VTC. TaxiNeo a ete cree pour combler ce fosse, en donnant aux taxis agrees la visibilite et la facilite de reservation qu'ils meritent, tout en offrant aux passagers la transparence et la fiabilite qu'ils attendent."
                : "The idea for TaxiNeo was born from a simple observation: licensed taxi drivers in France offer superior service quality (training, licensing, insurance, inspected vehicles), but lack modern digital tools to compete with ride-hailing platforms. TaxiNeo was created to bridge this gap, giving licensed taxis the visibility and booking convenience they deserve, while offering passengers the transparency and reliability they expect."}
            </p>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              {isFr ? "Reserver un taxi maintenant" : "Book a taxi now"}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
