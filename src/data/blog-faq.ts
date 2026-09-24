/**
 * Une question de FAQ par article de blog (RECETTE §7).
 *
 * Chaque article doit répondre à une question que le lecteur se pose vraiment,
 * en quarante à quatre-vingt-dix mots, et cette réponse doit être propre à
 * l'article : une question recyclée d'un article à l'autre n'apporte rien au
 * lecteur et n'est pas retenue par Google. Les montants cités viennent des
 * textes réglementaires en vigueur, cf. /methodologie.
 */

export interface BlogFaq {
  question: { fr: string; en: string };
  answer: { fr: string; en: string };
}

export const blogFaq: Record<string, BlogFaq> = {
  "tarifs-taxi-france-bareme": {
    question: {
      fr: "Pourquoi le prix au kilomètre change-t-il pendant une même course ?",
      en: "Why does the price per kilometre change during a single ride?",
    },
    answer: {
      fr: "Parce que le compteur ne suit pas un tarif unique mais quatre : A, B, C et D. La lettre dépend de l'heure, du jour et du fait que le chauffeur rentre à vide ou non. Une course commencée à dix-neuf heures peut donc basculer en tarif de nuit en cours de route, et le prix au kilomètre augmente sans que le chauffeur intervienne. Le compteur affiche la lettre en cours, ce qui permet de vérifier.",
      en: "Because the meter does not follow a single rate but four: A, B, C and D. The letter depends on the hour, the day and on whether the driver returns empty. A ride started at seven in the evening can therefore switch to the night rate along the way, and the price per kilometre rises without the driver doing anything. The meter shows the current letter, which lets you check it.",
    },
  },
  "taxi-paris-orly-tarifs": {
    question: {
      fr: "Le forfait Paris — Orly s'applique-t-il si je pars de la banlieue ?",
      en: "Does the Paris — Orly flat rate apply if I leave from the suburbs?",
    },
    answer: {
      fr: "Non. Le forfait ne vaut qu'entre Orly et Paris intra-muros, rive droite ou rive gauche selon le montant. Une prise en charge à Ivry, à Vitry ou à Antony sort du périmètre : la course repasse alors au compteur, avec la prise en charge, le prix au kilomètre du tarif applicable et l'éventuel retour à vide. Le prix peut être inférieur au forfait sur une courte distance, et supérieur aux heures de pointe.",
      en: "No. The flat rate applies only between Orly and Paris proper, right bank or left bank depending on the amount. A pick-up in Ivry, Vitry or Antony falls outside that perimeter: the ride then goes back on the meter, with the pick-up charge, the per-kilometre price of the applicable rate and any empty return. The price can be lower than the flat rate over a short distance, and higher at peak hours.",
    },
  },
  "devenir-chauffeur-taxi-france": {
    question: {
      fr: "Faut-il acheter une licence pour devenir chauffeur de taxi ?",
      en: "Do you have to buy a licence to become a taxi driver?",
    },
    answer: {
      fr: "Pas nécessairement. L'autorisation de stationnement, appelée licence, peut s'obtenir gratuitement en s'inscrivant sur la liste d'attente de la commune, mais le délai se compte souvent en années. L'achat auprès d'un titulaire permet d'exercer plus vite, à un prix qui varie fortement selon la ville. Une troisième voie consiste à être salarié ou locataire-gérant d'une entreprise déjà titulaire, ce qui évite l'investissement initial.",
      en: "Not necessarily. The parking authorisation, known as the licence, can be obtained free of charge by joining the municipality's waiting list, but the wait is often counted in years. Buying one from a holder allows you to start sooner, at a price that varies widely by city. A third route is to be an employee or lease-manager of a company that already holds one, which avoids the upfront investment.",
    },
  },
  "taxi-longue-distance-intercite": {
    question: {
      fr: "Paie-t-on le retour à vide sur un trajet longue distance ?",
      en: "Do you pay for the empty return leg on a long-distance ride?",
    },
    answer: {
      fr: "En principe oui, lorsque le chauffeur n'a aucune chance de charger un client au point d'arrivée. C'est le sens des tarifs C et D, qui doublent le prix au kilomètre pour couvrir le trajet de retour. En réservant à l'avance avec un prix fixe, ce retour est intégré au montant annoncé, et vous savez donc avant de monter ce que la course coûtera, quelle que soit la distance.",
      en: "In principle yes, when the driver has no chance of picking up a passenger at the destination. That is the point of rates C and D, which double the per-kilometre price to cover the return leg. By booking in advance at a fixed price, that return is built into the amount quoted, so you know before getting in what the ride will cost, whatever the distance.",
    },
  },
  "taxi-vs-vtc-differences": {
    question: {
      fr: "Un VTC peut-il me prendre en charge si je le hèle dans la rue ?",
      en: "Can a private-hire car pick me up if I hail it in the street?",
    },
    answer: {
      fr: "Non, et c'est la différence la plus concrète entre les deux métiers. Seul le taxi dispose du droit de maraude : il peut être hélé sur la voie publique et stationner aux emplacements réservés. Un VTC doit avoir été réservé au préalable, même de quelques minutes, et ne peut pas attendre le client sur la chaussée. Cette règle explique la présence des stations de taxis devant les gares et les aéroports.",
      en: "No, and that is the most concrete difference between the two trades. Only the taxi has the right to ply for hire: it can be hailed on the public road and park in reserved spaces. A private-hire car must have been booked beforehand, even minutes in advance, and cannot wait for a customer on the roadway. This rule explains the taxi ranks outside stations and airports.",
    },
  },
  "prix-taxi-paris-cdg": {
    question: {
      fr: "Le forfait Paris — CDG change-t-il la nuit ou le dimanche ?",
      en: "Does the Paris — CDG flat rate change at night or on Sundays?",
    },
    answer: {
      fr: "Non, et c'est tout l'intérêt du forfait : le montant est le même à trois heures du matin qu'à midi un mardi. Seule la rive change le prix, la rive droite étant moins chère que la rive gauche. C'est précisément la différence avec une course au compteur, où le tarif de nuit et celui du dimanche font grimper le prix au kilomètre. Les bagages sont inclus dans le forfait.",
      en: "No, and that is the whole point of the flat rate: the amount is the same at three in the morning as at noon on a Tuesday. Only the bank of the Seine changes the price, the right bank being cheaper than the left. That is exactly the difference with a metered ride, where the night and Sunday rates push up the price per kilometre. Luggage is included in the flat rate.",
    },
  },
  "taxi-aeroport-conseils": {
    question: {
      fr: "Que se passe-t-il si mon vol atterrit avec deux heures de retard ?",
      en: "What happens if my flight lands two hours late?",
    },
    answer: {
      fr: "Sur une réservation faite avec un numéro de vol, le chauffeur suit l'horaire réel d'atterrissage et décale la prise en charge sans surcoût. C'est la raison pour laquelle il faut toujours renseigner ce numéro plutôt que l'heure prévue. Sans lui, le chauffeur se présente à l'heure demandée, attend le temps prévu au contrat, puis peut repartir : la course est alors due et doit être réservée à nouveau.",
      en: "On a booking made with a flight number, the driver follows the actual landing time and shifts the pick-up at no extra cost. That is why you should always give that number rather than the scheduled time. Without it, the driver arrives at the requested time, waits for the period set in the contract, then may leave: the ride is then payable and must be booked again.",
    },
  },
  "taxi-entreprise-b2b": {
    question: {
      fr: "Comment récupérer la TVA sur les courses de taxi des salariés ?",
      en: "How do you reclaim VAT on employees' taxi rides?",
    },
    answer: {
      fr: "Le transport de personnes n'ouvre pas droit à déduction de la TVA pour l'entreprise, sauf cas particuliers comme le transport du personnel sur le lieu de travail lorsqu'il est imposé par la sécurité. La dépense reste en revanche déductible du résultat imposable si elle est engagée dans l'intérêt de l'entreprise et justifiée par une facture nominative. Une facturation mensuelle centralisée simplifie nettement ce suivi.",
      en: "Passenger transport does not give the company a right to deduct VAT, apart from specific cases such as transporting staff to the workplace when safety requires it. The expense does, however, remain deductible from taxable profit if it is incurred in the company's interest and evidenced by a named invoice. Centralised monthly billing makes that tracking much simpler.",
    },
  },
  "taxi-nuit-paris": {
    question: {
      fr: "À partir de quelle heure le tarif de nuit s'applique-t-il à Paris ?",
      en: "From what time does the night rate apply in Paris?",
    },
    answer: {
      fr: "Le tarif de nuit commence à dix-neuf heures et court jusqu'à dix heures le lendemain, auxquels s'ajoutent le dimanche et les jours fériés. Le passage se fait automatiquement pendant la course : une course commencée à dix-huit heures cinquante bascule en tarif de nuit dix minutes plus tard. Le compteur indique la lettre en cours, ce qui permet de vérifier que le tarif appliqué est bien celui de l'heure.",
      en: "The night rate starts at seven in the evening and runs until ten the next morning, with Sundays and public holidays added. The switch happens automatically during the ride: a ride started at ten to seven moves to the night rate ten minutes later. The meter shows the current letter, which lets you check that the rate applied matches the time.",
    },
  },
  "taxi-hopital-medical": {
    question: {
      fr: "Qui paie la course quand le transport est prescrit par un médecin ?",
      en: "Who pays for the ride when the transport is prescribed by a doctor?",
    },
    answer: {
      fr: "L'Assurance maladie règle directement le taxi conventionné, à condition que la prescription médicale de transport ait été établie avant la course et que le chauffeur soit conventionné avec la CPAM. Le patient n'avance donc rien, hors participation forfaitaire et éventuel ticket modérateur selon sa situation. Sans prescription préalable, la course est une course ordinaire, payée par le patient et non remboursée.",
      en: "Health insurance pays the approved taxi directly, provided the medical transport prescription was issued before the ride and the driver is approved by the CPAM. The patient therefore pays nothing upfront, apart from the flat contribution and any co-payment depending on their situation. Without a prior prescription, the ride is an ordinary one, paid by the patient and not reimbursed.",
    },
  },
  "prix-fixe-vs-compteur-taxi": {
    question: {
      fr: "Le prix fixe est-il toujours plus avantageux que le compteur ?",
      en: "Is a fixed price always better value than the meter?",
    },
    answer: {
      fr: "Non : il est plus prévisible, ce qui n'est pas la même chose. Sur un trajet fluide et court, le compteur s'arrête souvent en dessous du prix fixe, puisque celui-ci intègre une marge pour le risque d'embouteillage. Aux heures de pointe, sur un trajet long ou vers un aéroport, le rapport s'inverse nettement. Le prix fixe achète surtout la certitude du montant avant de monter.",
      en: "No: it is more predictable, which is not the same thing. On a short, free-flowing ride the meter often stops below the fixed price, since that price builds in a margin for the risk of congestion. At peak hours, on a long ride or towards an airport, the balance clearly reverses. A fixed price mainly buys certainty about the amount before you get in.",
    },
  },
  "taxi-pmr-transport-adapte": {
    question: {
      fr: "Un taxi peut-il refuser un fauteuil roulant qui ne se plie pas ?",
      en: "Can a taxi refuse a wheelchair that does not fold?",
    },
    answer: {
      fr: "Un taxi ordinaire peut refuser une course qu'il n'est matériellement pas en mesure d'assurer, et un fauteuil non pliant n'entre pas dans un coffre de berline. En revanche, le refus fondé sur le handicap lui-même est une discrimination sanctionnée par la loi. La solution est de réserver un véhicule aménagé, doté d'une rampe et d'un système d'arrimage, en le précisant au moment de la réservation.",
      en: "An ordinary taxi may refuse a ride it is physically unable to carry out, and a non-folding chair does not fit in a saloon car's boot. Refusal based on the disability itself, however, is discrimination punishable by law. The answer is to book an adapted vehicle, fitted with a ramp and a securing system, stating this when making the booking.",
    },
  },
  "taxi-evenement-mariage-seminaire": {
    question: {
      fr: "Vaut-il mieux réserver à la course ou mettre un taxi à disposition ?",
      en: "Is it better to book per ride or to hire a taxi by the hour?",
    },
    answer: {
      fr: "Tout dépend du nombre d'allers-retours. En dessous de deux trajets, la réservation à la course reste moins chère. Au-delà, ou lorsque les horaires sont incertains comme à la fin d'une soirée, la mise à disposition facturée à l'heure évite les temps d'attente non prévus et garantit qu'un véhicule reste sur place. Elle se réserve à l'avance en indiquant l'amplitude horaire souhaitée.",
      en: "It depends on the number of return trips. Below two journeys, booking per ride remains cheaper. Beyond that, or when timings are uncertain as at the end of an evening, hiring by the hour avoids unplanned waiting and guarantees a vehicle stays on site. It is booked in advance by stating the time window required.",
    },
  },
  "droits-passagers-taxi-france": {
    question: {
      fr: "Un chauffeur de taxi peut-il refuser une course trop courte ?",
      en: "Can a taxi driver refuse a ride that is too short?",
    },
    answer: {
      fr: "Non, lorsqu'il est en station et libre, le chauffeur ne peut pas refuser une course au motif qu'elle rapporte peu ou que la destination ne l'arrange pas. Le refus n'est légitime que pour un motif objectif : véhicule complet, fin de service déclarée, animal ou bagage qu'il ne peut pas transporter, ou comportement dangereux. Un refus injustifié se signale à la préfecture avec le numéro du véhicule.",
      en: "No: when at a rank and available, a driver cannot refuse a ride on the grounds that it pays little or that the destination is inconvenient. Refusal is legitimate only for an objective reason: full vehicle, declared end of shift, an animal or luggage that cannot be carried, or dangerous behaviour. An unjustified refusal is reported to the prefecture with the vehicle number.",
    },
  },
  "taxi-ou-transport-en-commun": {
    question: {
      fr: "À partir de combien de passagers le taxi devient-il compétitif ?",
      en: "From how many passengers does a taxi become competitive?",
    },
    answer: {
      fr: "En général à partir de trois personnes sur un trajet urbain, puisque le prix de la course se partage alors que chaque titre de transport se paie individuellement. Avec des bagages, la bascule se fait souvent dès deux passagers, car le métro impose des correspondances et des escaliers. Le calcul change la nuit, quand la fréquence des transports chute et que le temps de trajet double.",
      en: "Generally from three people on an urban journey, since the fare is shared while each transit ticket is paid individually. With luggage, the tipping point often comes at two passengers, because the metro means interchanges and stairs. The calculation changes at night, when transit frequency drops and journey times double.",
    },
  },
  "reserver-taxi-avance-pourquoi-comment": {
    question: {
      fr: "Combien de temps à l'avance faut-il réserver pour un vol tôt le matin ?",
      en: "How far in advance should you book for an early morning flight?",
    },
    answer: {
      fr: "La veille au plus tard, et idéalement plusieurs jours avant, car la demande se concentre entre quatre et six heures du matin et le nombre de chauffeurs en service y est au plus bas. Prévoyez une prise en charge trois heures avant un vol long-courrier et deux heures avant un vol intérieur, en ajoutant le temps de trajet estimé aux heures creuses, plus court qu'en journée.",
      en: "The day before at the latest, and ideally several days ahead, because demand is concentrated between four and six in the morning and the number of drivers on duty is at its lowest. Allow a pick-up three hours before a long-haul flight and two hours before a domestic one, adding the off-peak travel time, which is shorter than during the day.",
    },
  },
  "taxi-ecologique-transition-verte": {
    question: {
      fr: "Un taxi électrique coûte-t-il plus cher au passager ?",
      en: "Does an electric taxi cost the passenger more?",
    },
    answer: {
      fr: "Non, le prix payé par le passager ne dépend pas de la motorisation : il suit le même barème réglementé que n'importe quel taxi de la commune. La différence se joue du côté du chauffeur, dont le coût au kilomètre baisse à l'usage mais dont l'investissement initial est plus élevé. Certaines villes réservent en revanche des emplacements ou des accès aux véhicules à faibles émissions.",
      en: "No: the price paid by the passenger does not depend on the engine, it follows the same regulated scale as any taxi in the municipality. The difference lies on the driver's side, whose cost per kilometre falls with use but whose upfront investment is higher. Some cities do, however, reserve spaces or access for low-emission vehicles.",
    },
  },
  "comment-choisir-son-taxi": {
    question: {
      fr: "À quoi reconnaît-on un taxi autorisé plutôt qu'un véhicule illégal ?",
      en: "How do you recognise an authorised taxi rather than an illegal car?",
    },
    answer: {
      fr: "À trois signes visibles de l'extérieur : le lumineux « TAXI » sur le toit, le compteur horokilométrique installé dans l'habitacle, et la plaque d'autorisation de stationnement fixée sur l'aile avant, avec son numéro et sa commune de rattachement. La carte professionnelle du chauffeur doit en outre être apposée dans le véhicule. Un rabatteur qui aborde les voyageurs dans un hall d'aéroport n'exerce jamais légalement.",
      en: "By three signs visible from outside: the illuminated \"TAXI\" sign on the roof, the time-and-distance meter fitted in the cabin, and the parking authorisation plate on the front wing, with its number and home municipality. The driver's professional card must also be displayed inside. A tout approaching travellers in an airport hall is never operating legally.",
    },
  },
  "10-erreurs-vtc": {
    question: {
      fr: "Pourquoi le prix annoncé par une application peut-il doubler en une minute ?",
      en: "Why can the price shown by an app double within a minute?",
    },
    answer: {
      fr: "Parce que la tarification dynamique des plateformes de VTC s'ajuste en continu au rapport entre les demandes en cours et les véhicules disponibles dans la zone. Une pluie soudaine, la fin d'un concert ou une grève suffisent à faire monter le coefficient. Le taxi échappe à ce mécanisme : son prix suit un barème réglementé qui ne varie ni avec la météo ni avec l'affluence.",
      en: "Because private-hire platforms' dynamic pricing adjusts continuously to the ratio between current requests and available cars in the area. Sudden rain, the end of a concert or a strike is enough to push the multiplier up. Taxis escape that mechanism: their price follows a regulated scale that varies neither with the weather nor with demand.",
    },
  },
  "taxi-vs-covoiturage": {
    question: {
      fr: "Le covoiturage est-il vraiment moins cher une fois les détours comptés ?",
      en: "Is car-sharing really cheaper once the detours are counted?",
    },
    answer: {
      fr: "Sur une longue distance annoncée à l'avance, oui, presque toujours. Sur un trajet urbain, l'écart se réduit dès qu'on ajoute le temps de marche jusqu'au point de rendez-vous, les détours pour les autres passagers et le risque d'annulation de dernière minute. Pour un rendez-vous à heure fixe ou un vol à prendre, le taxi reste le seul mode qui garantit une porte-à-porte sans arrêt intermédiaire.",
      en: "Over a long distance announced in advance, yes, almost always. On an urban trip the gap narrows as soon as you add the walk to the meeting point, the detours for other passengers and the risk of a last-minute cancellation. For a fixed appointment or a flight to catch, the taxi remains the only mode guaranteeing door-to-door travel with no intermediate stops.",
    },
  },
  "guide-taxi-conventionne": {
    question: {
      fr: "Peut-on choisir librement son taxi conventionné ?",
      en: "Can you freely choose your approved taxi?",
    },
    answer: {
      fr: "Oui, le patient choisit le transporteur qu'il souhaite parmi ceux ayant signé la convention avec l'Assurance maladie ; aucun établissement ne peut lui en imposer un. Il faut en revanche vérifier que le chauffeur est bien conventionné dans le département où le transport commence, faute de quoi la prise en charge directe ne s'applique pas et la course devra être avancée puis réclamée.",
      en: "Yes: the patient chooses whichever carrier they wish among those that have signed the agreement with the health insurance fund, and no hospital can impose one. You must, however, check that the driver is approved in the department where the transport starts, otherwise direct payment does not apply and the ride must be paid upfront and then claimed.",
    },
  },
  "taxi-et-handicap-guide": {
    question: {
      fr: "Le chien guide d'une personne aveugle peut-il être refusé ?",
      en: "Can a blind person's guide dog be refused?",
    },
    answer: {
      fr: "Non. Le refus d'un chien guide ou d'un chien d'assistance est interdit par la loi et constitue une infraction, y compris lorsque le chauffeur invoque une allergie ou la propreté du véhicule. L'animal voyage gratuitement et n'ouvre droit à aucun supplément. Le signalement se fait auprès de la préfecture délivrant l'autorisation de stationnement, en notant le numéro de la plaque.",
      en: "No. Refusing a guide dog or an assistance dog is prohibited by law and is an offence, including when the driver cites an allergy or the cleanliness of the car. The animal travels free and gives rise to no supplement. A report is made to the prefecture that issues the parking authorisation, noting the plate number.",
    },
  },
  "comment-reclamer-facture-taxi": {
    question: {
      fr: "La facture est-elle obligatoire pour une course de dix euros ?",
      en: "Is an invoice compulsory for a ten-euro ride?",
    },
    answer: {
      fr: "Une note est obligatoire dès que la course atteint vingt-cinq euros, et elle doit être remise sans que le client ait à la demander. En dessous de ce montant, elle reste de droit si le client la réclame, et le chauffeur ne peut pas la refuser. La note mentionne la date, les heures de début et de fin, la distance, le montant et l'identification du chauffeur.",
      en: "A receipt is compulsory as soon as the ride reaches twenty-five euros, and it must be handed over without the customer having to ask. Below that amount it remains a right if the customer asks for it, and the driver cannot refuse. The receipt states the date, start and end times, the distance, the amount and the driver's identification.",
    },
  },
  "pourboire-taxi-france": {
    question: {
      fr: "Le pourboire est-il attendu en France comme aux États-Unis ?",
      en: "Is a tip expected in France as it is in the United States?",
    },
    answer: {
      fr: "Non. Le service est compris dans le prix réglementé et le pourboire reste strictement facultatif, ce qui distingue la France des pays où la rémunération du chauffeur en dépend. L'usage courant consiste à arrondir à l'euro supérieur, ou à laisser un ou deux euros lorsque le chauffeur a porté des bagages lourds ou attendu au-delà du temps prévu. Un refus ne se discute pas.",
      en: "No. Service is included in the regulated price and tipping remains strictly optional, which sets France apart from countries where the driver's pay depends on it. Common practice is to round up to the next euro, or to leave one or two euros when the driver has carried heavy luggage or waited beyond the agreed time. Declining is never questioned.",
    },
  },
  "taxi-bagage-cabine-regles": {
    question: {
      fr: "Les bagages sont-ils facturés en supplément dans un taxi ?",
      en: "Is luggage charged as an extra in a taxi?",
    },
    answer: {
      fr: "Le premier bagage placé en soute est gratuit partout ; au-delà, l'arrêté préfectoral peut prévoir un supplément par bagage, dont le montant doit être affiché dans le véhicule. Les forfaits aéroport, eux, incluent les bagages sans supplément. Un objet volumineux comme un vélo ou une planche de surf relève d'un accord préalable, car il suppose un véhicule adapté.",
      en: "The first item of luggage placed in the boot is free everywhere; beyond that, the prefectoral order may provide for a supplement per item, whose amount must be displayed in the vehicle. Airport flat rates, by contrast, include luggage at no extra cost. A bulky item such as a bicycle or a surfboard requires prior agreement, since it means an adapted vehicle.",
    },
  },
  "securite-taxi-conseils": {
    question: {
      fr: "Que vérifier avant de monter dans un taxi la nuit ?",
      en: "What should you check before getting into a taxi at night?",
    },
    answer: {
      fr: "Trois choses, dans l'ordre : que le numéro de plaque corresponde à celui annoncé par la réservation, que le lumineux et le compteur soient bien présents, et que la carte professionnelle du chauffeur soit affichée. Montez toujours côté trottoir, gardez votre téléphone chargé et partagez le trajet avec un proche depuis l'application. Un véhicule sans plaque d'autorisation visible ne doit pas être emprunté.",
      en: "Three things, in order: that the plate number matches the one given by the booking, that the roof sign and meter are present, and that the driver's professional card is displayed. Always get in from the pavement side, keep your phone charged and share the ride with someone from the app. A vehicle with no visible authorisation plate should not be used.",
    },
  },
  "taxi-paiement-carte": {
    question: {
      fr: "Un taxi peut-il refuser le paiement par carte bancaire ?",
      en: "Can a taxi refuse payment by bank card?",
    },
    answer: {
      fr: "Non. Tout taxi doit être équipé d'un terminal de paiement électronique en état de marche et accepter la carte, quel que soit le montant de la course. Un terminal déclaré en panne ne dispense pas le chauffeur de son obligation : il doit alors proposer une autre solution et remettre une note. Le refus se signale à la direction départementale de la protection des populations.",
      en: "No. Every taxi must be fitted with a working electronic payment terminal and accept cards, whatever the fare. A terminal declared out of order does not release the driver from that obligation: they must then offer another solution and issue a receipt. Refusal is reported to the departmental directorate for the protection of populations.",
    },
  },
  "taxi-animaux-regles": {
    question: {
      fr: "Faut-il une caisse de transport pour voyager avec un chat en taxi ?",
      en: "Do you need a carrier to travel with a cat in a taxi?",
    },
    answer: {
      fr: "Elle n'est pas imposée par la réglementation, mais dans les faits elle conditionne souvent l'acceptation : un chauffeur peut refuser un animal non tenu, et la caisse lève l'objection. Le chien guide et le chien d'assistance échappent à cette règle, puisqu'ils ne peuvent jamais être refusés. Signalez l'animal au moment de la réservation : le chauffeur prévoit alors une protection de banquette.",
      en: "It is not required by the regulations, but in practice it often decides whether the animal is accepted: a driver may refuse an animal that is not restrained, and a carrier removes the objection. Guide dogs and assistance dogs are exempt from this, since they can never be refused. Mention the animal when booking: the driver then brings a seat cover.",
    },
  },
  "taxi-paris-nuit-guide": {
    question: {
      fr: "Où trouver un taxi à Paris après la fermeture du métro ?",
      en: "Where can you find a taxi in Paris after the metro closes?",
    },
    answer: {
      fr: "Aux stations de taxis, qui restent actives toute la nuit devant les grandes gares, les hôpitaux et les principaux carrefours ; la maraude, elle, se raréfie fortement après une heure du matin. Le plus sûr reste la réservation, faite même quinze minutes à l'avance, car elle garantit un véhicule et un prix. Le tarif appliqué est celui de nuit, plus élevé qu'en journée.",
      en: "At taxi ranks, which stay active all night outside the main stations, hospitals and major junctions; cruising taxis, on the other hand, become scarce after one in the morning. The safest option is still to book, even fifteen minutes ahead, because that guarantees a vehicle and a price. The rate applied is the night one, higher than during the day.",
    },
  },
  "tarif-taxi-reglementation-2026": {
    question: {
      fr: "Qui fixe le prix maximum d'une course de taxi ?",
      en: "Who sets the maximum price of a taxi ride?",
    },
    answer: {
      fr: "L'État fixe chaque année, par arrêté publié au Journal officiel, les plafonds nationaux de la prise en charge, du prix au kilomètre et de l'heure d'attente. Le préfet décline ensuite ces plafonds département par département, en tenant compte des conditions locales. Un chauffeur ne peut donc pas pratiquer un prix supérieur à celui de l'arrêté préfectoral applicable au lieu de la prise en charge.",
      en: "The State sets, each year by order published in the Journal officiel, the national caps on the pick-up charge, the price per kilometre and the waiting hour. The prefect then applies those caps department by department, taking local conditions into account. A driver therefore cannot charge more than the prefectoral order applicable where the passenger is picked up.",
    },
  },
};
