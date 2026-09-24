/**
 * Deuxième et troisième questions de FAQ de chaque article (RECETTE §7).
 *
 * Une page secondaire doit porter au moins trois questions : une seule ne
 * couvre pas le sujet de l'article et ne donne à Google aucun choix de
 * réponse. Elles complètent `blog-faq.ts`, qui porte la première.
 */
import type { BlogFaq } from "./blog-faq";

export const blogFaqSuite: Record<string, BlogFaq[]> = {
  "tarifs-taxi-france-bareme": [
    {
      question: { fr: "Le barème est-il le même dans toute la France ?", en: "Is the fare scale the same across France?" },
      answer: {
        fr: "Non. L'arrêté national fixe des plafonds, mais c'est l'arrêté préfectoral de chaque département qui arrête les montants réellement applicables, dans la limite de ces plafonds. Deux communes voisines relevant de départements différents peuvent donc pratiquer une prise en charge et un prix au kilomètre distincts, sans qu'aucun des deux chauffeurs ne soit en infraction.",
        en: "No. The national order sets caps, but it is each department's prefectoral order that fixes the amounts actually applicable, within those caps. Two neighbouring towns in different departments can therefore have a different pick-up charge and price per kilometre, without either driver breaking the rules.",
      },
    },
    {
      question: { fr: "Où vérifier le tarif applicable dans ma ville ?", en: "Where can you check the fare applying in your city?" },
      answer: {
        fr: "Les montants doivent être affichés à l'intérieur du véhicule, de façon lisible depuis la place passager, et l'arrêté préfectoral correspondant est consultable sur le site de la préfecture du département. En cas de doute pendant la course, la lettre affichée par le compteur indique le tarif en cours et permet de rapprocher le prix du barème affiché.",
        en: "The amounts must be displayed inside the vehicle, legible from the passenger seat, and the corresponding prefectoral order can be consulted on the department prefecture's website. If in doubt during the ride, the letter shown by the meter indicates the current rate and lets you match the price to the displayed scale.",
      },
    },
  ],
  "taxi-paris-orly-tarifs": [
    {
      question: { fr: "Le forfait couvre-t-il les bagages et les péages ?", en: "Does the flat rate cover luggage and tolls?" },
      answer: {
        fr: "Oui, le forfait aéroport est un prix tout compris : il couvre les bagages, l'accès à la zone de dépose et les éventuels péages du trajet. Aucun supplément ne peut y être ajouté, y compris la nuit ou le dimanche. C'est ce qui le distingue d'une course au compteur, où certains suppléments restent facturables selon l'arrêté départemental.",
        en: "Yes, the airport flat rate is an all-inclusive price: it covers luggage, access to the drop-off area and any tolls on the route. No supplement can be added to it, including at night or on Sundays. That is what sets it apart from a metered ride, where some supplements remain chargeable under the departmental order.",
      },
    },
    {
      question: { fr: "Que faire si le chauffeur refuse d'appliquer le forfait ?", en: "What if the driver refuses to apply the flat rate?" },
      answer: {
        fr: "Le forfait est obligatoire sur le parcours qu'il couvre : le chauffeur ne peut pas lui préférer le compteur. Demandez la note en fin de course, qui porte la date, les horaires, la distance et son identification, puis signalez le refus à la direction départementale de la protection des populations. Sans note, la réclamation est beaucoup plus difficile à instruire.",
        en: "The flat rate is compulsory on the route it covers: the driver cannot prefer the meter. Ask for the receipt at the end, which carries the date, the times, the distance and their identification, then report the refusal to the departmental directorate for the protection of populations. Without a receipt, a complaint is much harder to pursue.",
      },
    },
  ],
  "devenir-chauffeur-taxi-france": [
    {
      question: { fr: "En quoi consiste l'examen du certificat de capacité professionnelle ?", en: "What does the professional competence exam involve?" },
      answer: {
        fr: "Il comporte une partie nationale, commune à tous les candidats, et une partie départementale portant sur la connaissance du territoire et de la réglementation locale. La partie nationale couvre la sécurité routière, la gestion d'entreprise, le français et l'anglais, ainsi que la réglementation du transport de personnes. L'admission ouvre droit à la carte professionnelle délivrée par la préfecture.",
        en: "It has a national part, common to all candidates, and a departmental part covering knowledge of the area and of local regulations. The national part covers road safety, business management, French and English, and passenger transport regulations. Passing it gives access to the professional card issued by the prefecture.",
      },
    },
    {
      question: { fr: "Peut-on exercer comme taxi dans un autre département que celui de sa licence ?", en: "Can you work as a taxi outside the department of your licence?" },
      answer: {
        fr: "La prise en charge doit se faire dans la commune de rattachement indiquée sur l'autorisation de stationnement, ou dans une commune de la même zone lorsque l'arrêté le prévoit. Rien n'interdit en revanche de déposer un client à l'autre bout du pays : c'est le lieu de la prise en charge, et non la destination, qui est encadré.",
        en: "Pick-up must take place in the home municipality named on the parking authorisation, or in a municipality of the same zone where the order allows it. Nothing prevents dropping a passenger at the other end of the country, however: it is the place of pick-up, not the destination, that is regulated.",
      },
    },
  ],
  "taxi-longue-distance-intercite": [
    {
      question: { fr: "Faut-il réserver longtemps à l'avance pour un long trajet ?", en: "Do you need to book long in advance for a long ride?" },
      answer: {
        fr: "Oui, plusieurs jours dans l'idéal : un trajet de plusieurs heures immobilise un chauffeur sur une journée, et les disponibilités se remplissent vite, surtout en période de vacances. La réservation à l'avance permet en outre d'obtenir un prix fixe couvrant le retour du chauffeur, ce qu'une prise en charge improvisée au compteur ne garantit jamais.",
        en: "Yes, ideally several days: a ride of several hours ties up a driver for a day, and availability fills quickly, especially during holiday periods. Booking ahead also secures a fixed price covering the driver's return, which an improvised metered ride never guarantees.",
      },
    },
    {
      question: { fr: "Les péages et le carburant sont-ils facturés en plus ?", en: "Are tolls and fuel charged on top?" },
      answer: {
        fr: "Sur une réservation à prix fixe, non : le montant annoncé les comprend, ce qui permet de comparer utilement avec le train ou la location. Sur une course au compteur, les péages peuvent en revanche être ajoutés s'ils ont été réellement engagés, et doivent alors figurer sur la note remise à la fin du trajet.",
        en: "On a fixed-price booking, no: the amount quoted includes them, which makes a comparison with rail or car hire meaningful. On a metered ride, tolls can be added if they were actually incurred, and must then appear on the receipt issued at the end.",
      },
    },
  ],
  "taxi-vs-vtc-differences": [
    {
      question: { fr: "Les deux métiers ont-ils la même formation obligatoire ?", en: "Do the two trades require the same training?" },
      answer: {
        fr: "Non. Le taxi passe un certificat de capacité professionnelle comportant une épreuve départementale sur la connaissance du territoire, puis obtient une carte professionnelle délivrée par la préfecture. Le chauffeur de voiture de transport avec chauffeur suit un examen distinct, sans volet départemental, et relève d'un registre national. Les deux cartes sont contrôlables et doivent être affichées dans le véhicule.",
        en: "No. A taxi driver takes a professional competence certificate including a departmental test on local knowledge, then receives a professional card issued by the prefecture. A private-hire driver sits a separate exam, with no departmental part, and is entered in a national register. Both cards can be checked and must be displayed in the vehicle.",
      },
    },
    {
      question: { fr: "Lequel des deux est remboursé par l'Assurance maladie ?", en: "Which of the two is reimbursed by health insurance?" },
      answer: {
        fr: "Seul le taxi conventionné, c'est-à-dire ayant signé une convention avec la caisse primaire d'assurance maladie du département. Le transport doit en outre avoir été prescrit par un médecin avant la course. Une voiture de transport avec chauffeur n'entre dans aucun de ces dispositifs : le trajet reste alors à la charge du patient, quel que soit son motif médical.",
        en: "Only the approved taxi, that is one that has signed an agreement with the department's health insurance fund. The transport must also have been prescribed by a doctor before the ride. A private-hire car falls under none of these schemes: the journey then remains at the patient's expense, whatever its medical purpose.",
      },
    },
  ],
  "prix-taxi-paris-cdg": [
    {
      question: { fr: "Le forfait CDG s'applique-t-il depuis la banlieue ?", en: "Does the CDG flat rate apply from the suburbs?" },
      answer: {
        fr: "Non, il ne vaut qu'entre l'aéroport et Paris intra-muros. Une prise en charge à Saint-Denis, à Aubervilliers ou au Bourget sort du périmètre : la course repasse alors au compteur, avec la prise en charge, le prix au kilomètre du tarif applicable et l'éventuel retour à vide du chauffeur.",
        en: "No, it applies only between the airport and Paris proper. A pick-up in Saint-Denis, Aubervilliers or Le Bourget falls outside the perimeter: the ride goes back on the meter, with the pick-up charge, the per-kilometre price of the applicable rate and any empty return leg.",
      },
    },
    {
      question: { fr: "Combien de temps faut-il prévoir entre Paris et CDG ?", en: "How long should you allow between Paris and CDG?" },
      answer: {
        fr: "Comptez quarante-cinq minutes en circulation fluide, et jusqu'à une heure trente aux heures de pointe ou les veilles de départs en vacances. Pour un vol long-courrier, une prise en charge trois heures avant le décollage laisse une marge suffisante, deux heures suffisant pour un vol intérieur sans bagage en soute.",
        en: "Allow forty-five minutes in light traffic, and up to an hour and a half at peak times or on the eve of holiday departures. For a long-haul flight, a pick-up three hours before take-off leaves enough margin, two hours being enough for a domestic flight with no hold luggage.",
      },
    },
  ],
  "taxi-aeroport-conseils": [
    {
      question: { fr: "Où retrouver son chauffeur dans un grand aéroport ?", en: "Where do you meet your driver at a large airport?" },
      answer: {
        fr: "Au point de prise en charge officiel indiqué par SMS, et non dans le hall d'arrivée lorsque l'accès y est réglementé. Le message précise le nom du chauffeur, la plaque et la couleur du véhicule. Un rabatteur qui aborde les voyageurs à l'intérieur du terminal n'exerce jamais légalement.",
        en: "At the official pick-up point given by SMS, not in the arrivals hall where access is regulated. The message gives the driver's name, the plate and the colour of the vehicle. A tout approaching travellers inside the terminal is never operating legally.",
      },
    },
    {
      question: { fr: "Faut-il prévoir un véhicule plus grand avec plusieurs valises ?", en: "Do you need a bigger vehicle with several suitcases?" },
      answer: {
        fr: "Au-delà de trois valises de taille standard, ou avec un équipement volumineux comme une poussette et un siège auto, un van évite la mauvaise surprise d'un coffre trop petit à l'arrivée. Le besoin se précise à la réservation : sans cette mention, le chauffeur peut refuser un bagage qui n'entre pas.",
        en: "Beyond three standard suitcases, or with bulky equipment such as a pushchair and a car seat, a van avoids the unpleasant surprise of a boot that is too small. State the need when booking: without it, the driver may refuse an item that does not fit.",
      },
    },
  ],
  "taxi-entreprise-b2b": [
    {
      question: { fr: "Un collaborateur peut-il commander une course pour un client ?", en: "Can an employee book a ride for a client?" },
      answer: {
        fr: "Oui, le compte professionnel permet de réserver pour un tiers en indiquant son nom et son numéro : le passager reçoit alors par SMS le nom du chauffeur et la plaque du véhicule, sans avoir de compte lui-même. La course est facturée à l'entreprise et rattachée au collaborateur qui l'a commandée.",
        en: "Yes, a corporate account lets you book for someone else by giving their name and number: the passenger then receives the driver's name and the vehicle plate by SMS, without having an account themselves. The ride is invoiced to the company and linked to the employee who booked it.",
      },
    },
    {
      question: { fr: "Comment suivre les dépenses de transport par service ?", en: "How do you track transport spending by department?" },
      answer: {
        fr: "Chaque ligne de la facture mensuelle porte la date, le trajet, le montant et le nom du collaborateur, ce qui permet de rattacher la dépense à un centre de coûts sans ressaisie. Des plafonds par collaborateur peuvent être fixés en amont, ce qui évite les contrôles a posteriori sur les notes de frais.",
        en: "Each line of the monthly invoice carries the date, the route, the amount and the employee's name, so the expense can be assigned to a cost centre without re-entry. Limits per employee can be set in advance, which avoids after-the-fact checks on expense claims.",
      },
    },
  ],
  "taxi-nuit-paris": [
    {
      question: { fr: "Trouve-t-on facilement un taxi en maraude après minuit ?", en: "Is it easy to find a cruising taxi after midnight?" },
      answer: {
        fr: "De moins en moins au fil de la nuit : après une heure du matin, la maraude se raréfie fortement et l'essentiel de l'offre se concentre aux stations, devant les gares, les hôpitaux et les grands carrefours. La réservation, même quinze minutes à l'avance, reste le moyen le plus sûr d'avoir un véhicule.",
        en: "Less and less as the night goes on: after one in the morning cruising taxis become scarce and most of the supply concentrates at ranks, outside stations, hospitals and major junctions. Booking, even fifteen minutes ahead, remains the surest way to get a vehicle.",
      },
    },
    {
      question: { fr: "Le tarif de nuit s'applique-t-il aussi le dimanche ?", en: "Does the night rate also apply on Sundays?" },
      answer: {
        fr: "Oui, le dimanche et les jours fériés relèvent du tarif majoré sur toute la journée, en plus de la plage de dix-neuf heures à dix heures les autres jours. Le compteur affiche la lettre en cours, ce qui permet de vérifier que le tarif appliqué correspond bien au jour et à l'heure.",
        en: "Yes, Sundays and public holidays fall under the higher rate all day, in addition to the seven in the evening to ten in the morning band on other days. The meter shows the current letter, which lets you check that the rate applied matches the day and time.",
      },
    },
  ],
  "taxi-hopital-medical": [
    {
      question: { fr: "Le transport partagé est-il imposé par l'Assurance maladie ?", en: "Is shared transport imposed by health insurance?" },
      answer: {
        fr: "Le transport partagé est encouragé et peut être proposé lorsque plusieurs patients se rendent au même établissement à des horaires proches. Il n'est pas imposé lorsque l'état de santé du patient s'y oppose, ce que la prescription médicale peut mentionner. Le refus du partage sans motif peut en revanche réduire la prise en charge.",
        en: "Shared transport is encouraged and may be offered when several patients travel to the same facility at similar times. It is not imposed where the patient's condition rules it out, which the medical prescription can state. Refusing to share without a reason may, however, reduce the level of cover.",
      },
    },
    {
      question: { fr: "Qui choisit entre taxi conventionné, VSL et ambulance ?", en: "Who chooses between approved taxi, VSL and ambulance?" },
      answer: {
        fr: "Le médecin prescripteur, qui coche le mode de transport sur la prescription en fonction de l'état du patient : position assise autonome pour le taxi, surveillance légère pour le véhicule sanitaire léger, transport allongé ou médicalisé pour l'ambulance. Le patient ne peut pas changer de mode sans une nouvelle prescription.",
        en: "The prescribing doctor, who ticks the mode of transport on the prescription according to the patient's condition: independent seated travel for a taxi, light monitoring for a light medical vehicle, lying or medicalised transport for an ambulance. The patient cannot change mode without a new prescription.",
      },
    },
  ],
  "prix-fixe-vs-compteur-taxi": [
    {
      question: { fr: "Le compteur peut-il dépasser le prix fixe annoncé ?", en: "Can the meter exceed the fixed price quoted?" },
      answer: {
        fr: "Sur une course réservée à prix fixe, non : le montant convenu fait foi, quel que soit l'affichage du compteur à l'arrivée. Le compteur reste allumé parce que la réglementation l'impose, mais il ne sert alors qu'à constater la course. Seul un changement d'adresse demandé en route entraîne un nouveau calcul.",
        en: "On a ride booked at a fixed price, no: the agreed amount is what counts, whatever the meter shows on arrival. The meter stays on because regulations require it, but it then only records the ride. Only a change of address requested en route triggers a new calculation.",
      },
    },
    {
      question: { fr: "Sur quel type de trajet le compteur est-il plus avantageux ?", en: "On what kind of ride is the meter better value?" },
      answer: {
        fr: "Sur un trajet court, en heures creuses et sans risque d'embouteillage : le compteur s'arrête alors souvent en dessous du prix fixe, qui intègre une marge pour l'incertitude. Dès que le trajet s'allonge, passe par un axe saturé ou vise un aéroport, le rapport s'inverse nettement au profit du prix fixe.",
        en: "On a short ride, off-peak and with no risk of congestion: the meter then often stops below the fixed price, which builds in a margin for uncertainty. As soon as the ride gets longer, uses a congested road or heads for an airport, the balance clearly reverses.",
      },
    },
  ],
  "taxi-pmr-transport-adapte": [
    {
      question: { fr: "Combien de temps à l'avance réserver un véhicule aménagé ?", en: "How far ahead should you book an adapted vehicle?" },
      answer: {
        fr: "Au moins vingt-quatre heures, car les véhicules dotés d'une rampe et d'un système d'arrimage sont peu nombreux dans chaque ville. Pour un rendez-vous médical récurrent, une réservation groupée sur plusieurs semaines garantit la disponibilité et évite de refaire la démarche à chaque séance.",
        en: "At least twenty-four hours, because vehicles fitted with a ramp and a securing system are few in each city. For a recurring medical appointment, booking several weeks at once guarantees availability and avoids repeating the process before every session.",
      },
    },
    {
      question: { fr: "L'aide à la montée et à la descente est-elle facturée ?", en: "Is help boarding and alighting charged for?" },
      answer: {
        fr: "Non, l'assistance du chauffeur pour l'embarquement, l'arrimage du fauteuil et la descente est comprise dans le prix de la course. Seul un supplément prévu par l'arrêté préfectoral, et affiché dans le véhicule, peut s'ajouter, par exemple pour un bagage au-delà du premier placé en soute.",
        en: "No, the driver's help with boarding, securing the chair and alighting is included in the fare. Only a supplement provided for by the prefectoral order, and displayed in the vehicle, can be added, for example for luggage beyond the first item placed in the boot.",
      },
    },
  ],
  "taxi-evenement-mariage-seminaire": [
    {
      question: { fr: "Peut-on réserver plusieurs véhicules pour un même horaire ?", en: "Can you book several vehicles for the same time?" },
      answer: {
        fr: "Oui, et c'est la solution habituelle au-delà de sept passagers : plusieurs véhicules sont affectés au même point de rendez-vous et à la même heure. Les coordonnées de chaque chauffeur vous sont communiquées la veille, ce qui permet d'organiser la répartition des invités sans appel de dernière minute.",
        en: "Yes, and that is the usual answer beyond seven passengers: several vehicles are assigned to the same meeting point at the same time. Each driver's details are given to you the day before, which lets you organise how guests are split without a last-minute call.",
      },
    },
    {
      question: { fr: "Que se passe-t-il si la soirée se prolonge ?", en: "What happens if the evening runs late?" },
      answer: {
        fr: "Sur une mise à disposition, la prolongation se facture à l'heure entamée et se demande directement au chauffeur resté sur place. Sur des courses réservées à l'unité, mieux vaut prévoir un horaire de retour large : trouver un véhicule à deux heures du matin, hors réservation, devient difficile dans la plupart des villes.",
        en: "On an hourly hire, the extension is billed by the hour started and requested directly from the driver who stayed on site. On individually booked rides, it is better to allow a generous return time: finding a vehicle at two in the morning, without a booking, becomes difficult in most cities.",
      },
    },
  ],
  "droits-passagers-taxi-france": [
    {
      question: { fr: "Le passager peut-il choisir son itinéraire ?", en: "Can the passenger choose the route?" },
      answer: {
        fr: "Oui, le passager peut indiquer l'itinéraire qu'il souhaite, et le chauffeur doit le suivre s'il est praticable. À défaut d'indication, le chauffeur est tenu d'emprunter le trajet le plus direct ou le plus économique en temps. Un détour injustifié figurant sur la note constitue un motif de réclamation recevable.",
        en: "Yes, the passenger may state the route they want, and the driver must follow it if it is practicable. Failing any instruction, the driver must take the most direct route, or the quickest one. An unjustified detour appearing on the receipt is valid grounds for a complaint.",
      },
    },
    {
      question: { fr: "À qui signaler un litige avec un chauffeur ?", en: "Who do you report a dispute with a driver to?" },
      answer: {
        fr: "À la préfecture qui a délivré l'autorisation de stationnement, dont le numéro figure sur la plaque fixée à l'avant du véhicule, et à la direction départementale de la protection des populations pour tout ce qui touche au prix. Joignez la note de la course : sans elle, le dossier est difficile à instruire.",
        en: "To the prefecture that issued the parking authorisation, whose number is on the plate fixed to the front of the vehicle, and to the departmental directorate for the protection of populations for anything about price. Attach the receipt: without it, the case is hard to pursue.",
      },
    },
  ],
  "taxi-ou-transport-en-commun": [
    {
      question: { fr: "Le taxi est-il plus rapide que le métro aux heures de pointe ?", en: "Is a taxi faster than the metro at peak times?" },
      answer: {
        fr: "Rarement sur un axe desservi en direct par le métro, souvent dès qu'une ou deux correspondances s'ajoutent. L'accès des taxis aux voies réservées aux bus change cependant le calcul sur les axes saturés, et le porte-à-porte supprime les temps de marche, qui pèsent lourd avec des bagages ou une mobilité réduite.",
        en: "Rarely on a route served directly by the metro, often as soon as one or two interchanges are added. Taxi access to bus lanes does change the calculation on congested roads, and door-to-door travel removes walking time, which weighs heavily with luggage or reduced mobility.",
      },
    },
    {
      question: { fr: "Quel mode choisir pour un vol tôt le matin ?", en: "Which mode should you choose for an early flight?" },
      answer: {
        fr: "Le taxi, dans la plupart des cas : les premiers trains et les premières navettes partent rarement avant cinq heures, ce qui ne laisse aucune marge pour un vol à sept heures. Une réservation la veille sécurise l'horaire, le suivi du vol permettant en outre d'ajuster la prise en charge en cas de changement.",
        en: "A taxi, in most cases: the first trains and shuttles rarely leave before five, which leaves no margin for a seven o'clock flight. Booking the day before secures the time, and flight tracking also allows the pick-up to be adjusted if anything changes.",
      },
    },
  ],
  "reserver-taxi-avance-pourquoi-comment": [
    {
      question: { fr: "Que se passe-t-il si aucun chauffeur n'est disponible ?", en: "What happens if no driver is available?" },
      answer: {
        fr: "La réservation n'est pas facturée et un autre créneau vous est proposé : vous n'avancez jamais de somme pour une course non confirmée. C'est aussi pourquoi une réservation faite plusieurs jours à l'avance vaut mieux qu'une demande de dernière minute sur les créneaux les plus tendus, tôt le matin notamment.",
        en: "The booking is not charged and another slot is offered: you never pay upfront for a ride that has not been confirmed. That is also why a booking made several days ahead beats a last-minute request on the tightest slots, early in the morning in particular.",
      },
    },
    {
      question: { fr: "Peut-on modifier l'adresse après avoir réservé ?", en: "Can you change the address after booking?" },
      answer: {
        fr: "Oui, jusqu'à une heure avant le départ, et sans frais. Si le nouveau trajet est plus long ou plus court, le prix est recalculé et le nouveau montant vous est annoncé avant que vous ne validiez. Au-delà de ce délai, la modification passe par le chauffeur et dépend de sa disponibilité.",
        en: "Yes, up to an hour before departure, at no cost. If the new route is longer or shorter, the price is recalculated and the new amount is quoted before you confirm. Beyond that window, the change goes through the driver and depends on their availability.",
      },
    },
  ],
  "taxi-ecologique-transition-verte": [
    {
      question: { fr: "Peut-on demander un véhicule électrique à la réservation ?", en: "Can you request an electric vehicle when booking?" },
      answer: {
        fr: "La demande est possible mais la disponibilité varie fortement d'une ville à l'autre, en fonction du parc des chauffeurs partenaires et du maillage des bornes de recharge. Sur un trajet longue distance, une motorisation thermique ou hybride reste souvent la seule option compatible avec un aller-retour sans arrêt de recharge.",
        en: "The request is possible but availability varies widely from city to city, depending on partner drivers' fleets and the charging network. On a long-distance ride, a combustion or hybrid engine often remains the only option compatible with a return trip without a charging stop.",
      },
    },
    {
      question: { fr: "Les zones à faibles émissions concernent-elles les taxis ?", en: "Do low-emission zones apply to taxis?" },
      answer: {
        fr: "Oui, les taxis y sont soumis comme les autres véhicules et doivent porter la vignette correspondant à leur motorisation. Certaines collectivités prévoient toutefois des dérogations ou des délais d'adaptation pour les professionnels, ce qui explique que les règles diffèrent d'une agglomération à l'autre.",
        en: "Yes, taxis are subject to them like other vehicles and must display the sticker matching their engine. Some local authorities do provide exemptions or transition periods for professionals, which is why the rules differ from one urban area to another.",
      },
    },
  ],
  "comment-choisir-son-taxi": [
    {
      question: { fr: "Faut-il préférer une station ou une réservation ?", en: "Is a rank or a booking preferable?" },
      answer: {
        fr: "La station convient quand on est déjà sur place et que la file est courte : la prise en charge est immédiate et la course se fait au compteur. La réservation s'impose dès qu'un horaire compte, la nuit, ou quand il faut un véhicule particulier, car elle garantit à la fois le véhicule et le prix.",
        en: "A rank works when you are already there and the queue is short: pick-up is immediate and the ride is metered. Booking is needed as soon as timing matters, at night, or when a particular vehicle is required, because it guarantees both the vehicle and the price.",
      },
    },
    {
      question: { fr: "Que vérifier sur la note à la fin de la course ?", en: "What should you check on the receipt at the end?" },
      answer: {
        fr: "Que la date, les heures de début et de fin, la distance et le montant correspondent bien à la course, et que le chauffeur y est identifié. Ces mentions sont celles qui permettent d'instruire une réclamation : sans note, un litige sur le prix ou sur l'itinéraire est très difficile à faire valoir.",
        en: "That the date, the start and end times, the distance and the amount match the ride, and that the driver is identified. Those details are what allow a complaint to be pursued: without a receipt, a dispute about price or route is very hard to argue.",
      },
    },
  ],
  "10-erreurs-vtc": [
    {
      question: { fr: "Faut-il monter dans un véhicule dont la plaque ne correspond pas ?", en: "Should you get into a car whose plate does not match?" },
      answer: {
        fr: "Non, jamais. La plaque, la couleur et le modèle annoncés par la confirmation doivent correspondre au véhicule qui se présente. En cas d'écart, appelez le chauffeur depuis la réservation plutôt que de monter : c'est la vérification la plus simple et la plus efficace contre les transports illégaux.",
        en: "No, never. The plate, colour and model given in the confirmation must match the car that turns up. If they differ, call the driver from the booking rather than getting in: it is the simplest and most effective check against illegal transport.",
      },
    },
    {
      question: { fr: "Peut-on réclamer une facture après une course en VTC ?", en: "Can you ask for an invoice after a private-hire ride?" },
      answer: {
        fr: "Oui, la remise d'un justificatif est obligatoire et la plateforme doit le mettre à disposition après la course. Vérifiez qu'il porte la date, le trajet, le montant et l'identification du transporteur : ce sont les mentions exigées pour une note de frais comme pour une réclamation.",
        en: "Yes, issuing a record is compulsory and the platform must make it available after the ride. Check that it carries the date, the route, the amount and the carrier's identification: those are the details required both for an expense claim and for a complaint.",
      },
    },
  ],
  "taxi-vs-covoiturage": [
    {
      question: { fr: "Le covoiturage garantit-il une heure d'arrivée ?", en: "Does car-sharing guarantee an arrival time?" },
      answer: {
        fr: "Non : l'heure dépend du conducteur, des détours pour les autres passagers et du risque d'annulation, qui reste réel jusqu'au départ. Pour un vol, un train ou un rendez-vous à heure fixe, c'est le point faible du mode, là où une réservation de taxi engage un horaire et un véhicule.",
        en: "No: the time depends on the driver, on detours for other passengers and on the risk of cancellation, which remains real until departure. For a flight, a train or a fixed appointment, that is the mode's weak point, where a taxi booking commits to a time and a vehicle.",
      },
    },
    {
      question: { fr: "Le covoiturage est-il possible avec des bagages volumineux ?", en: "Is car-sharing possible with bulky luggage?" },
      answer: {
        fr: "Rarement sans accord préalable : le coffre est partagé entre plusieurs passagers et la place disponible n'est pas garantie. Un vélo, une poussette ou du matériel professionnel supposent presque toujours un véhicule dédié, réservé en précisant le volume à transporter.",
        en: "Rarely without prior agreement: the boot is shared between several passengers and the space available is not guaranteed. A bicycle, a pushchair or professional equipment almost always mean a dedicated vehicle, booked by stating the volume to be carried.",
      },
    },
  ],
  "guide-taxi-conventionne": [
    {
      question: { fr: "Que faire si le taxi n'est pas conventionné dans mon département ?", en: "What if the taxi is not approved in my department?" },
      answer: {
        fr: "La dispense d'avance de frais ne s'applique pas : vous réglez la course et demandez ensuite le remboursement à votre caisse, en joignant la prescription et la note. Le montant remboursé est alors plafonné au tarif conventionnel, ce qui peut laisser un reste à charge si le prix payé lui est supérieur.",
        en: "Direct payment does not apply: you pay for the ride and then claim reimbursement from your fund, attaching the prescription and the receipt. The amount reimbursed is capped at the agreed rate, which can leave a shortfall if the price paid was higher.",
      },
    },
    {
      question: { fr: "La prescription peut-elle être établie après le transport ?", en: "Can the prescription be issued after the transport?" },
      answer: {
        fr: "Non, sauf urgence constatée : la prescription médicale de transport doit précéder la course, faute de quoi la prise en charge est refusée. Pour une série de séances, une prescription unique peut couvrir l'ensemble des trajets prévus, ce qui évite d'y revenir avant chaque rendez-vous.",
        en: "No, apart from a recorded emergency: the medical transport prescription must precede the ride, otherwise cover is refused. For a series of sessions, a single prescription can cover all the planned journeys, which avoids dealing with it before every appointment.",
      },
    },
  ],
  "taxi-et-handicap-guide": [
    {
      question: { fr: "Tous les taxis peuvent-ils transporter un fauteuil roulant ?", en: "Can every taxi carry a wheelchair?" },
      answer: {
        fr: "Non : un fauteuil pliant entre dans le coffre d'une berline, un fauteuil électrique ou non pliant suppose un véhicule doté d'une rampe et d'un système d'arrimage. Ces véhicules sont peu nombreux, d'où l'intérêt de réserver au moins la veille en précisant le type de fauteuil.",
        en: "No: a folding chair fits in a saloon's boot, while a powered or non-folding chair needs a vehicle with a ramp and a securing system. Those vehicles are few, which is why booking at least the day before, stating the type of chair, matters.",
      },
    },
    {
      question: { fr: "L'accompagnant voyage-t-il gratuitement ?", en: "Does a companion travel free?" },
      answer: {
        fr: "Sur une course ordinaire, l'accompagnant occupe une place comme tout passager et peut donner lieu au supplément prévu par l'arrêté au-delà d'un certain nombre de personnes. Sur un transport prescrit, la présence d'un accompagnant peut être prévue par la prescription et prise en charge à ce titre.",
        en: "On an ordinary ride, a companion occupies a seat like any passenger and may trigger the supplement set by the order beyond a certain number of people. On prescribed transport, a companion's presence can be provided for by the prescription and covered on that basis.",
      },
    },
  ],
  "comment-reclamer-facture-taxi": [
    {
      question: { fr: "Que doit contenir une note de taxi ?", en: "What must a taxi receipt contain?" },
      answer: {
        fr: "La date de la course, les heures de début et de fin, la distance parcourue, le montant total et l'identification du chauffeur ou de l'entreprise. Ces mentions sont celles sur lesquelles s'appuie toute réclamation : une note incomplète affaiblit fortement un litige sur le prix ou sur l'itinéraire suivi.",
        en: "The date of the ride, the start and end times, the distance covered, the total amount and the identification of the driver or company. Those details are what any complaint rests on: an incomplete receipt seriously weakens a dispute about the price or the route taken.",
      },
    },
    {
      question: { fr: "Peut-on obtenir une note plusieurs jours après la course ?", en: "Can you get a receipt several days after the ride?" },
      answer: {
        fr: "C'est possible mais nettement plus difficile : il faut pouvoir identifier le chauffeur, ce que seul le numéro de la plaque d'autorisation permet en pratique. Le réflexe utile est donc de noter ce numéro au moment de monter, ou de réserver, la confirmation conservant l'identité du chauffeur.",
        en: "It is possible but much harder: you must be able to identify the driver, which in practice only the authorisation plate number allows. The useful habit is therefore to note that number when getting in, or to book, since the confirmation keeps the driver's identity.",
      },
    },
  ],
  "pourboire-taxi-france": [
    {
      question: { fr: "Le pourboire est-il attendu sur une course payée par carte ?", en: "Is a tip expected on a ride paid by card?" },
      answer: {
        fr: "Pas davantage que sur une course payée en espèces : le service est compris dans le prix réglementé, et le terminal n'a pas à proposer un pourboire par défaut. Vous pouvez en laisser un si vous le souhaitez, mais aucun montant n'est attendu et un refus du chauffeur ne se discute pas.",
        en: "No more than on a ride paid in cash: service is included in the regulated price, and the terminal need not offer a tip by default. You can leave one if you wish, but no amount is expected and a driver declining is never questioned.",
      },
    },
    {
      question: { fr: "Faut-il donner un pourboire pour un transport médical ?", en: "Should you tip for medical transport?" },
      answer: {
        fr: "Non, et c'est même à éviter : le transport conventionné est réglé par l'Assurance maladie selon un tarif fixé, et le patient n'a pas à compléter ce montant. Toute somme demandée en plus du reste à charge éventuel doit être signalée à la caisse primaire d'assurance maladie.",
        en: "No, and it is best avoided: approved transport is paid by health insurance at a set rate, and the patient does not have to top that amount up. Any sum requested on top of the possible co-payment should be reported to the health insurance fund.",
      },
    },
  ],
  "taxi-bagage-cabine-regles": [
    {
      question: { fr: "Combien de valises tiennent dans une berline ?", en: "How many suitcases fit in a saloon?" },
      answer: {
        fr: "Trois valises de taille standard et un bagage cabine, en pratique, pour quatre passagers. Au-delà, ou avec une poussette et un siège auto, le coffre est saturé et un van s'impose. Le besoin se précise à la réservation : le chauffeur peut refuser un bagage qui n'entre pas dans le véhicule.",
        en: "Three standard suitcases and a cabin bag, in practice, for four passengers. Beyond that, or with a pushchair and a car seat, the boot is full and a van is needed. State the requirement when booking: the driver may refuse an item that does not fit.",
      },
    },
    {
      question: { fr: "Un vélo peut-il être transporté en taxi ?", en: "Can a bicycle be carried in a taxi?" },
      answer: {
        fr: "Démonté et rangé dans une housse, il passe dans un van ; monté, il suppose un véhicule spécifiquement équipé, rare dans la plupart des villes. Dans tous les cas, l'accord se prend à la réservation : un chauffeur peut légitimement refuser un objet qu'il n'est pas en mesure de transporter.",
        en: "Dismantled and packed in a bag, it fits in a van; assembled, it needs a specifically equipped vehicle, which is rare in most cities. Either way, agreement is reached when booking: a driver may legitimately refuse an item they cannot carry.",
      },
    },
  ],
  "securite-taxi-conseils": [
    {
      question: { fr: "Faut-il monter à l'avant ou à l'arrière ?", en: "Should you sit in the front or the back?" },
      answer: {
        fr: "À l'arrière, côté trottoir, pour deux raisons : la descente se fait à l'abri de la circulation, et la place arrière droite reste la plus sûre en cas de choc. Elle permet aussi de garder ses affaires près de soi et de sortir sans passer par la chaussée.",
        en: "In the back, on the pavement side, for two reasons: you get out away from traffic, and the rear right seat remains the safest in a collision. It also lets you keep your belongings close and leave without stepping into the road.",
      },
    },
    {
      question: { fr: "Que faire si le chauffeur refuse d'allumer le compteur ?", en: "What if the driver refuses to switch on the meter?" },
      answer: {
        fr: "Ne pas engager la course : hors forfait réglementé, le compteur est obligatoire et son refus annonce presque toujours un prix négocié au-dessus du barème. Notez le numéro de la plaque d'autorisation fixée à l'avant du véhicule et signalez le fait à la direction départementale de la protection des populations.",
        en: "Do not start the ride: outside a regulated flat rate, the meter is compulsory and refusing it almost always signals a price negotiated above the scale. Note the number on the authorisation plate at the front of the vehicle and report it to the departmental directorate for the protection of populations.",
      },
    },
  ],
  "taxi-paiement-carte": [
    {
      question: { fr: "Que faire si le terminal est annoncé en panne ?", en: "What if the terminal is said to be out of order?" },
      answer: {
        fr: "La panne ne dispense pas le chauffeur de son obligation d'accepter la carte : il doit proposer une autre solution et, dans tous les cas, remettre une note. Demandez-la, notez le numéro de la plaque d'autorisation, et signalez le fait à la direction départementale de la protection des populations.",
        en: "A breakdown does not release the driver from the duty to accept cards: they must offer another solution and, in every case, issue a receipt. Ask for it, note the authorisation plate number, and report the matter to the departmental directorate for the protection of populations.",
      },
    },
    {
      question: { fr: "Le paiement sans contact est-il accepté dans les taxis ?", en: "Is contactless payment accepted in taxis?" },
      answer: {
        fr: "Dans la grande majorité des cas, oui, les terminaux installés étant les mêmes que dans le commerce. Au-delà du plafond du sans contact, le code reste demandé. Le paiement en ligne au moment de la réservation constitue une autre option, utile lorsqu'on règle une course pour quelqu'un d'autre.",
        en: "In the vast majority of cases, yes, since the terminals fitted are the same as in shops. Above the contactless limit, the PIN is still required. Paying online when booking is another option, useful when settling a ride for someone else.",
      },
    },
  ],
  "taxi-animaux-regles": [
    {
      question: { fr: "Un supplément peut-il être facturé pour un animal ?", en: "Can a supplement be charged for an animal?" },
      answer: {
        fr: "Seulement si l'arrêté préfectoral applicable le prévoit et que le montant est affiché dans le véhicule. Le chien guide et le chien d'assistance échappent en tout état de cause à tout supplément, et leur refus constitue une infraction. Dans le doute, la mention de l'animal à la réservation évite la discussion.",
        en: "Only if the applicable prefectoral order provides for it and the amount is displayed in the vehicle. Guide dogs and assistance dogs are exempt from any supplement in all cases, and refusing them is an offence. If in doubt, mentioning the animal when booking avoids the argument.",
      },
    },
    {
      question: { fr: "Un grand chien peut-il voyager en taxi ?", en: "Can a large dog travel by taxi?" },
      answer: {
        fr: "Oui, mais l'accord se prend à la réservation, car il suppose un véhicule au coffre suffisant et une protection de banquette. Sans cette mention, un chauffeur peut refuser l'animal au moment de la prise en charge, ce qui laisse le passager sans solution à l'heure prévue.",
        en: "Yes, but agreement is reached when booking, since it requires a vehicle with a large enough boot and a seat cover. Without that, a driver may refuse the animal at pick-up, leaving the passenger with no option at the planned time.",
      },
    },
  ],
  "taxi-paris-nuit-guide": [
    {
      question: { fr: "Les stations de taxis parisiennes fonctionnent-elles toute la nuit ?", en: "Do Paris taxi ranks work all night?" },
      answer: {
        fr: "Les principales, oui : devant les grandes gares, les hôpitaux et les grands carrefours, elles restent alimentées jusqu'au matin. Les stations de quartier, en revanche, se vident après une heure. En cas de doute, une réservation même tardive garantit à la fois le véhicule et le prix.",
        en: "The main ones, yes: outside the big stations, hospitals and major junctions they keep being supplied until morning. Neighbourhood ranks, by contrast, empty after one. If in doubt, even a late booking guarantees both the vehicle and the price.",
      },
    },
    {
      question: { fr: "Le prix d'un taxi de nuit est-il plafonné ?", en: "Is the price of a night taxi capped?" },
      answer: {
        fr: "Oui, comme en journée : le tarif de nuit est plus élevé mais il reste encadré par l'arrêté préfectoral, qui en fixe le plafond. Un montant supérieur à ce plafond est irrégulier, quel que soit l'argument avancé, et se signale avec la note de la course à l'appui.",
        en: "Yes, as during the day: the night rate is higher but it is still framed by the prefectoral order, which sets its cap. An amount above that cap is irregular, whatever argument is put forward, and should be reported with the ride's receipt as evidence.",
      },
    },
  ],
  "tarif-taxi-reglementation-2026": [
    {
      question: { fr: "À quelle date les nouveaux tarifs entrent-ils en vigueur ?", en: "When do the new fares come into force?" },
      answer: {
        fr: "L'arrêté national paraît en général en février et fixe la date à partir de laquelle les nouveaux plafonds s'appliquent. Les arrêtés préfectoraux suivent ensuite, à des dates qui varient d'un département à l'autre : c'est pourquoi deux villes peuvent afficher des montants différents pendant quelques semaines.",
        en: "The national order usually appears in February and sets the date from which the new caps apply. Prefectoral orders then follow, on dates that vary from one department to another: that is why two cities can show different amounts for a few weeks.",
      },
    },
    {
      question: { fr: "Que risque un chauffeur qui dépasse le tarif plafond ?", en: "What does a driver risk by exceeding the capped fare?" },
      answer: {
        fr: "Une sanction administrative de la préfecture qui a délivré son autorisation de stationnement, pouvant aller jusqu'au retrait, et une amende au titre de la réglementation des prix. Le signalement s'appuie sur la note de la course, qui identifie le chauffeur et détaille le montant réclamé.",
        en: "An administrative penalty from the prefecture that issued the parking authorisation, up to withdrawal, and a fine under price regulations. A report rests on the ride's receipt, which identifies the driver and sets out the amount charged.",
      },
    },
  ],
};
