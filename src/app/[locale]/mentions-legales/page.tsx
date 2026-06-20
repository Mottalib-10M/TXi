import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Legal Notice, Terms of Use and Privacy | TaxiNeo"
      : "Mentions legales, CGU et politique de confidentialite | TaxiNeo";
  const description =
    locale === "en"
      ? "Read TaxiNeo's legal notice, terms of use, privacy policy and GDPR commitments. Find our publisher details, hosting info and data protection measures."
      : "Consultez les mentions legales, conditions d'utilisation, politique de confidentialite et engagements RGPD de TaxiNeo. Editeur, hebergement et protection des donnees.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.taxineo.fr/${locale}/mentions-legales`,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/mentions-legales`,
      languages: {
        fr: "https://www.taxineo.fr/fr/mentions-legales",
        en: "https://www.taxineo.fr/en/mentions-legales",
      },
    },
  };
}

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 prose prose-neutral prose-sm">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            {isFr ? "Mentions legales" : "Legal Notice"}
          </h1>

          {/* Editeur */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "1. Editeur du site" : "1. Site Publisher"}
            </h2>
            <div className="text-sm text-neutral-600 font-light leading-relaxed space-y-1">
              <p>
                <strong>{isFr ? "Raison sociale" : "Company name"} :</strong>{" "}
                TaxiNeo
              </p>
              <p>
                <strong>{isFr ? "Responsable de publication" : "Publication manager"} :</strong>{" "}
                Mottalib Radif
              </p>
              <p>
                <strong>{isFr ? "Contact" : "Contact"} :</strong>{" "}
                <a href="mailto:contact@taxineo.fr" className="underline">
                  contact@taxineo.fr
                </a>
              </p>
              <p>
                <strong>{isFr ? "Telephone" : "Phone"} :</strong>{" "}
                <a href="tel:+33759592934" className="underline">
                  07 59 59 29 34
                </a>
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a href="https://www.taxineo.fr" className="underline">
                  www.taxineo.fr
                </a>
              </p>
            </div>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mt-3">
              {isFr
                ? "L'editeur assume la responsabilite editoriale de l'ensemble des contenus publies sur le site, a l'exception des resultats de calcul de prix qui dependent des donnees saisies par l'utilisateur et des parametres tarifaires en vigueur a la date de la consultation."
                : "The publisher assumes editorial responsibility for all content published on the website, with the exception of price calculation results which depend on data entered by the user and tariff parameters in effect at the date of consultation."}
            </p>
          </section>

          {/* Hebergement */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "2. Hebergement" : "2. Hosting"}
            </h2>
            <div className="text-sm text-neutral-600 font-light leading-relaxed space-y-1">
              <p>
                <strong>{isFr ? "Hebergeur" : "Host"} :</strong> Vercel Inc.
              </p>
              <p>
                <strong>{isFr ? "Adresse" : "Address"} :</strong> 440 N Barranca
                Ave #4133, Covina, CA 91723, USA
              </p>
              <p>
                <strong>Site web :</strong>{" "}
                <a
                  href="https://vercel.com"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  vercel.com
                </a>
              </p>
            </div>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mt-3">
              {isFr
                ? "Vercel est une plateforme cloud de deploiement statique et serverless. L'infrastructure repose sur un reseau edge mondial qui sert les pages depuis le serveur le plus proche de chaque visiteur. Le protocole HTTPS est utilise pour chiffrer toutes les donnees en transit. En tant qu'hebergeur technique, Vercel n'exerce aucun controle editorial sur le contenu du site."
                : "Vercel is a cloud platform for static and serverless deployment. The infrastructure relies on a global edge network that serves pages from the server closest to each visitor. HTTPS is used to encrypt all data in transit. As a technical hosting provider, Vercel does not exercise editorial control over the website's content."}
            </p>
          </section>

          {/* Propriete intellectuelle */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr
                ? "3. Propriete intellectuelle"
                : "3. Intellectual Property"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "L'ensemble du contenu de ce site (textes, images, logos, elements graphiques, logiciels, algorithmes de calcul) est protege par le droit d'auteur et le droit de la propriete intellectuelle, conformement aux articles L.111-1 et suivants du Code de la Propriete Intellectuelle. Toute reproduction, representation, modification ou adaptation, totale ou partielle, est interdite sans autorisation prealable ecrite de TaxiNeo."
                : "All content on this site (texts, images, logos, graphics, software, calculation algorithms) is protected by copyright and intellectual property law under Articles L.111-1 et seq. of the French Intellectual Property Code. Any reproduction, representation, modification or adaptation, in whole or in part, is prohibited without prior written authorization from TaxiNeo."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Les utilisateurs sont autorises a consulter le site pour un usage personnel et non commercial. Les citations breves a des fins informatives sont autorisees sous reserve de mention de la source."
                : "Users are authorized to browse the website for personal, non-commercial use. Brief quotations for informational purposes are permitted provided the source is credited."}
            </p>
          </section>

          {/* Donnees personnelles */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr
                ? "4. Protection des donnees personnelles"
                : "4. Personal Data Protection"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes du 6 janvier 1978 modifiee, vous disposez d'un droit d'acces, de rectification, de suppression, de limitation du traitement, de portabilite et d'opposition concernant vos donnees personnelles."
                : "In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act of January 6, 1978, you have the right to access, rectify, delete, restrict processing, data portability, and object to processing of your personal data."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les donnees collectees sur ce site (nom, email, telephone, adresses de depart et d'arrivee) sont utilisees exclusivement pour le traitement de vos reservations de taxi et la gestion de votre compte. Ces donnees ne sont jamais vendues, echangees ou transferees a des tiers a des fins commerciales."
                : "Data collected on this site (name, email, phone, pickup and drop-off addresses) is used exclusively for processing your taxi bookings and managing your account. This data is never sold, traded, or transferred to third parties for commercial purposes."}
            </p>

            <h3 className="text-base font-semibold mb-2 mt-4">
              {isFr ? "4.1 Responsable du traitement" : "4.1 Data Controller"}
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Le responsable du traitement des donnees est Mottalib Radif, joignable a l'adresse contact@taxineo.fr. Compte tenu de la nature du site et de l'absence de traitement a grande echelle de donnees sensibles, la designation d'un Delegue a la Protection des Donnees (DPO) n'est pas legalement requise au titre de l'article 37 du RGPD."
                : "The data controller is Mottalib Radif, reachable at contact@taxineo.fr. Given the nature of the website and the absence of large-scale processing of sensitive data, the appointment of a Data Protection Officer (DPO) is not legally required under Article 37 of the GDPR."}
            </p>

            <h3 className="text-base font-semibold mb-2 mt-4">
              {isFr ? "4.2 Base legale du traitement" : "4.2 Legal Basis"}
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Le traitement des donnees repose sur les bases legales suivantes au titre de l'article 6 du RGPD : la necessite contractuelle (Art. 6(1)(b)) pour le traitement des reservations, le consentement (Art. 6(1)(a)) pour les cookies d'analyse, et l'interet legitime (Art. 6(1)(f)) pour la securite du site et les fichiers journaux."
                : "Data processing is based on the following legal bases under Article 6 of the GDPR: contractual necessity (Art. 6(1)(b)) for processing bookings, consent (Art. 6(1)(a)) for analytics cookies, and legitimate interest (Art. 6(1)(f)) for site security and server log files."}
            </p>

            <h3 className="text-base font-semibold mb-2 mt-4">
              {isFr ? "4.3 Duree de conservation" : "4.3 Data Retention"}
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les donnees de reservation sont conservees pendant la duree necessaire a l'execution du service, puis archivees conformement aux obligations legales. Les donnees de contact sont conservees pendant 3 ans a compter du dernier contact. Les fichiers journaux sont automatiquement supprimes apres 30 jours."
                : "Booking data is retained for the duration necessary to perform the service, then archived in accordance with legal obligations. Contact data is retained for 3 years from last contact. Server log files are automatically deleted after 30 days."}
            </p>

            <h3 className="text-base font-semibold mb-2 mt-4">
              {isFr ? "4.4 Vos droits RGPD" : "4.4 Your GDPR Rights"}
            </h3>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Conformement au RGPD, vous disposez des droits suivants : droit d'acces (Art. 15), droit de rectification (Art. 16), droit a l'effacement (Art. 17), droit a la limitation du traitement (Art. 18), droit a la portabilite (Art. 20), droit d'opposition (Art. 21), droit de retirer votre consentement (Art. 7), et droit d'introduire une reclamation aupres d'une autorite de controle (Art. 77)."
                : "Under the GDPR, you have the following rights: right of access (Art. 15), right to rectification (Art. 16), right to erasure (Art. 17), right to restriction of processing (Art. 18), right to data portability (Art. 20), right to object (Art. 21), right to withdraw consent (Art. 7), and right to lodge a complaint with a supervisory authority (Art. 77)."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Pour exercer vos droits, contactez-nous a : contact@taxineo.fr. Nous nous engageons a repondre dans un delai de 30 jours. Vous disposez egalement du droit de deposer une reclamation aupres de la CNIL (Commission Nationale de l'Informatique et des Libertes) : www.cnil.fr"
                : "To exercise your rights, contact us at: contact@taxineo.fr. We undertake to respond within 30 days. You also have the right to lodge a complaint with the CNIL (French data protection authority): www.cnil.fr"}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "5. Cookies et stockage local" : "5. Cookies and Local Storage"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Ce site utilise des cookies essentiels necessaires au bon fonctionnement de la plateforme (authentification, session). Ces cookies ne collectent aucune donnee personnelle a des fins de profilage."
                : "This site uses essential cookies necessary for the proper functioning of the platform (authentication, session). These cookies do not collect personal data for profiling purposes."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Des cookies d'analyse (Google Analytics) peuvent etre utilises pour mesurer le trafic et ameliorer votre experience utilisateur. Ces cookies ne sont charges qu'apres votre consentement explicite via la banniere de cookies. Les adresses IP sont anonymisees."
                : "Analytics cookies (Google Analytics) may be used to measure traffic and improve your user experience. These cookies are only loaded after your explicit consent via the cookie banner. IP addresses are anonymized."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les preferences utilisateur (theme clair/sombre, choix de consentement) sont stockees dans le localStorage du navigateur, qui n'est pas un cookie et n'est jamais transmis a nos serveurs. Vous pouvez effacer les donnees localStorage a tout moment via les parametres de votre navigateur."
                : "User preferences (light/dark theme, consent choices) are stored in the browser's localStorage, which is not a cookie and is never transmitted to our servers. You can clear localStorage data at any time through your browser settings."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Vous pouvez configurer votre navigateur pour refuser les cookies ou etre averti lorsqu'un cookie est envoye. Le refus des cookies essentiels peut affecter le fonctionnement du site."
                : "You can configure your browser to refuse cookies or be notified when a cookie is sent. Refusing essential cookies may affect site functionality."}
            </p>
          </section>

          {/* Sous-traitants */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "6. Sous-traitants" : "6. Data Processors"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les sous-traitants suivants peuvent traiter des donnees pour notre compte :"
                : "The following processors may handle data on our behalf:"}
            </p>
            <ul className="text-sm text-neutral-600 font-light leading-relaxed list-disc pl-6 space-y-1">
              <li>
                <strong>Vercel Inc.</strong> &mdash; {isFr ? "Hebergement du site (Etats-Unis, clauses contractuelles types UE)" : "Website hosting (United States, EU standard contractual clauses)"}
              </li>
              <li>
                <strong>Google LLC</strong> &mdash; {isFr ? "Analytics (Etats-Unis, clauses contractuelles types UE)" : "Analytics (United States, EU standard contractual clauses)"}
              </li>
            </ul>
          </section>

          {/* Conditions d'utilisation */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr
                ? "7. Conditions d'utilisation"
                : "7. Terms of Use"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "TaxiNeo est une plateforme de mise en relation entre passagers et chauffeurs de taxi agrees. Les chauffeurs exercent en tant que professionnels independants titulaires d'une licence de taxi."
                : "TaxiNeo is a platform connecting passengers with licensed taxi drivers. Drivers operate as independent professionals holding a taxi license."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les prix affiches sont des prix fixes, convenus avant la reservation. Ils incluent la prise en charge, le trajet et les peages eventuels sauf indication contraire."
                : "Displayed prices are fixed prices, agreed upon before booking. They include pickup, the journey and any tolls unless otherwise stated."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "L'utilisation du site implique l'acceptation pleine et entiere des presentes conditions. L'utilisateur s'engage a utiliser le site conformement a sa destination et aux reglementations en vigueur."
                : "Use of the site implies full acceptance of these terms. Users agree to use the site in accordance with its intended purpose and applicable regulations."}
            </p>
          </section>

          {/* Responsabilite */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "8. Limitation de responsabilite" : "8. Limitation of Liability"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "TaxiNeo s'efforce de fournir des informations exactes et a jour. Toutefois, nous ne pouvons garantir l'exactitude ou l'exhaustivite des informations publiees sur le site. Les estimations de prix sont fournies a titre indicatif et peuvent varier en fonction des conditions de circulation, des deviations et des evenements imprevus."
                : "TaxiNeo strives to provide accurate and up-to-date information. However, we cannot guarantee the accuracy or completeness of information published on the site. Price estimates are provided for guidance and may vary depending on traffic conditions, detours, and unforeseen events."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "TaxiNeo ne saurait etre tenu responsable des dommages directs ou indirects resultant de l'utilisation du site, y compris la perte de donnees, les interruptions de service ou les dommages aux equipements des utilisateurs. Le site est fourni \"en l'etat\" sans garantie d'aucune sorte."
                : "TaxiNeo shall not be held liable for any direct or indirect damages resulting from the use of the site, including data loss, service interruptions, or damages to user equipment. The site is provided \"as is\" without warranties of any kind."}
            </p>
          </section>

          {/* Liens externes */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "9. Liens externes" : "9. External Links"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Le site peut contenir des liens vers des sites externes. L'editeur n'exerce aucun controle sur le contenu de ces sites tiers et decline toute responsabilite quant a leur contenu, leurs pratiques de confidentialite ou leur disponibilite."
                : "The site may contain links to external websites. The publisher has no control over the content of these third-party sites and disclaims all responsibility for their content, privacy practices, or availability."}
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "10. Droit applicable" : "10. Applicable Law"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Les presentes mentions legales sont soumises au droit francais. En cas de litige, une solution amiable sera recherchee prealablement a toute action judiciaire. A defaut, les tribunaux francais seront seuls competents. La nullite eventuelle d'une clause n'affectera pas les dispositions restantes."
                : "These legal notices are subject to French law. In the event of a dispute, an amicable resolution will be sought before any legal action. Failing that, the French courts shall have sole jurisdiction. The potential invalidity of any clause shall not affect the remaining provisions."}
            </p>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "11. Contact" : "11. Contact"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Pour toute question relative aux presentes mentions legales, contactez-nous a :"
                : "For any questions regarding these legal notices, contact us at:"}
              <br />
              <a href="mailto:contact@taxineo.fr" className="underline">
                contact@taxineo.fr
              </a>
              <br />
              <a href="tel:+33759592934" className="underline">
                07 59 59 29 34
              </a>
            </p>
          </section>

          <p className="text-xs text-neutral-400 font-light mt-12">
            {isFr
              ? "Derniere mise a jour : juin 2026"
              : "Last updated: June 2026"}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
