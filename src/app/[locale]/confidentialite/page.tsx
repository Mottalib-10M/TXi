import type { Metadata } from "next";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { dateLisible } from "@/lib/page-date";

interface Props {
  params: Promise<{ locale: string }>;
}

const MAJ = "2026-10-17";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "TaxiNeo privacy policy: Google Analytics, bookings, your rights"
      : "Confidentialité TaxiNeo : mesure d'audience, réservations, droits";
  const description =
    locale === "en"
      ? "TaxiNeo counts visits with Google Analytics (two cookies, 13 months at most, no advertising). What a booking or an account requires, how long it is kept and your rights."
      : "TaxiNeo mesure son audience avec Google Analytics (deux cookies, 13 mois au plus, sans publicité). Ce que demande une réservation, sa durée de conservation, vos droits.";
  return {
    title: title,
    description: description,
    openGraph: { title: title, description: description },
    alternates: {
      canonical: canonicalUrl(locale, "/confidentialite"),
      languages: alternateUrls("/confidentialite"),
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const dateMaj = dateLisible(MAJ, locale);

  const sections: { titre: string; corps: string[] }[] = isFr
    ? [
        {
          titre: "1. Responsable du traitement",
          corps: [
            "TaxiNeo est édité par Radif Partners, qui décide de l'usage des données décrites ici. Pour toute question : contact@taxineo.fr.",
          ],
        },
        {
          titre: "2. Consulter le site : mesure d'audience avec Google Analytics",
          corps: [
            "Chercher un trajet, comparer les tarifs réglementés d'un taxi, lire un guide sur une gare ou un aéroport : tant que vous ne réservez pas et ne créez pas de compte, l'éditeur n'enregistre aucune donnée personnelle vous concernant. Les estimations de prix sont calculées à la volée et ne sont pas gardées.",
            "Le site utilise Google Analytics 4 pour compter ses visites et savoir quelles pages servent : pages vues, page de provenance, durée de la visite, type d'appareil et de navigateur, pays et ville approximatifs. Google Analytics dépose pour cela deux cookies sur votre terminal : _ga, qui distingue les visiteurs par un identifiant aléatoire, et _ga_2Z22GS67QY, qui garde l'état de la visite. Leur durée de vie est réglée à 13 mois au plus (390 jours) et n'est pas prolongée à chaque visite ; Google prévoit 2 ans par défaut. Google Analytics reste coupé dans l'app iPhone et Android.",
            "L'adresse IP est anonymisée : Google Analytics 4 ne l'enregistre ni ne la conserve, il s'en sert seulement au moment de la collecte pour déduire un pays et une ville approximatifs. L'adresse de page transmise est privée de ses paramètres, et ni les adresses de course, ni les noms, ni les numéros saisis ne sont envoyés à Google. Le site n'affiche pas de publicité : le stockage publicitaire, les données publicitaires, la personnalisation des annonces et les signaux Google sont désactivés.",
            "Fournisseur : Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande, sous-traitant au sens de l'article 28 du RGPD. Finalité : mesure d'audience. Base légale : intérêt légitime de l'éditeur (article 6-1 f du RGPD). Conservation chez Google : 14 mois pour les données liées aux visites et aux identifiants, puis suppression ; seuls restent des totaux anonymes. Les données peuvent être transférées à Google LLC, aux États-Unis, dans le cadre du EU–U.S. Data Privacy Framework et des clauses contractuelles types de la Commission européenne.",
            "Pour vous y opposer : bloquez ou supprimez les cookies dans les réglages de votre navigateur, ou installez le module de désactivation de Google Analytics (https://tools.google.com/dlpage/gaoptout). Le site fonctionne alors de la même façon. Il n'y a ni cookie publicitaire, ni cookie de réseau social.",
          ],
        },
        {
          titre: "3. Mesure anonyme de la stabilité (Microsoft Clarity sans cookie)",
          corps: [
            "Pour repérer une page qui plante, un formulaire de réservation qui se bloque ou un bouton qui ne répond pas, le site utilise Microsoft Clarity dans son mode sans cookie : ni _clck, ni _clsk, ni MUID, ni CLID. Clarity ne reçoit que des signaux techniques anonymes : erreurs, temps de chargement, clics sans effet, défilement, type d'appareil. Chaque page vue porte un identifiant à usage unique, de sorte que deux visites ne sont jamais reliées. Le texte des pages et tout ce que vous tapez (adresses, nom, téléphone) sont masqués par le code du site avant l'envoi.",
            "Responsable du service : Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irlande. Finalité : stabilité et rapidité du site. Base légale : intérêt légitime (article 6-1 f du RGPD). Conservation : 30 jours pour les enregistrements, 13 mois au plus pour les statistiques agrégées. Pour vous y opposer : bloquez le domaine clarity.ms dans votre navigateur ou écrivez à contact@taxineo.fr ; le site fonctionne de la même façon.",
          ],
        },
        {
          titre: "4. Quand vous réservez, écrivez ou créez un compte",
          corps: [
            "Réservation : nom, téléphone, adresses de départ et d'arrivée, date et heure de la course. Ces données servent à exécuter la course et sont transmises au seul chauffeur retenu.",
            "Compte (chauffeur, organisation ou client) : adresse e-mail et mot de passe chiffré. Une fois connecté, un cookie de session strictement nécessaire maintient la connexion ; il disparaît à la déconnexion et n'existe pas pour les simples visiteurs.",
            "Dans les espaces chauffeur et organisation (site et app), une mesure d'usage sans cookie (PostHog, serveurs dans l'Union européenne) compte les écrans ouverts et les actions faites (course acceptée ou refusée, alerte Radar reçue, réservation créée) pour améliorer ces espaces. Le compte n'y est connu que par son identifiant interne, jamais par son nom, son e-mail ou son téléphone ; le texte des pages et tout ce qui est tapé (noms, adresses et numéros des clients) sont masqués avant l'envoi. Rien n'est conservé sur votre appareil et le réglage « Ne pas me suivre » du navigateur est respecté. Fournisseur : PostHog Inc., hébergement à Francfort. Finalité : améliorer le service. Base légale : intérêt légitime (article 6-1 f du RGPD). Conservation : 12 mois au plus. Pour vous y opposer : écrivez à contact@taxineo.fr.",
            "Formulaires de contact et de devis : les informations saisies servent uniquement à vous répondre. Un contrôle anti-robot Cloudflare Turnstile protège ces formulaires.",
          ],
        },
        {
          titre: "5. Bases légales et durées",
          corps: [
            "Exécution du contrat pour les réservations et les comptes ; intérêt légitime pour la mesure d'audience, la mesure de stabilité et la prévention des abus. Les données de réservation sont conservées trois ans après la dernière course (prescription commerciale usuelle), celles d'un compte jusqu'à trente jours après sa fermeture, les messages de contact un an.",
          ],
        },
        {
          titre: "6. Destinataires",
          corps: [
            "Les données ne sont ni vendues ni louées. Elles vont au chauffeur chargé de la course et aux prestataires strictement nécessaires : hébergement (Vercel Inc.), base de données (Supabase, serveurs en Irlande), saisie des adresses et itinéraires (Google Maps), notifications de l'app iPhone (Apple), envoi des e-mails de confirmation (Resend), protection anti-robot (Cloudflare), mesure d'audience (Google Ireland Limited pour Google Analytics) mesure de stabilité sans cookie (Microsoft Clarity) et mesure d'usage des espaces connectés (PostHog, dans l'Union européenne). Un signalement envoyé à notre équipe (lien « Signaler » d'un chauffeur) est conservé avec son motif, son message et, si vous la donnez, votre adresse e-mail, le temps de le traiter. Certains traitent des données aux États-Unis, sous le EU–U.S. Data Privacy Framework et les clauses contractuelles types de la Commission européenne.",
          ],
        },
        {
          titre: "7. Vos droits",
          corps: [
            "Accès, rectification, effacement, limitation, opposition et portabilité : écrivez à contact@taxineo.fr, réponse sous un mois. Pour la mesure d'audience, le module de désactivation de Google Analytics décrit plus haut suffit. En cas de désaccord, vous pouvez saisir la CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (www.cnil.fr).",
          ],
        },
      ]
    : [
        {
          titre: "1. Data controller",
          corps: [
            "TaxiNeo is published by Radif Partners, which decides how the data described here is used. Questions: contact@taxineo.fr.",
          ],
        },
        {
          titre: "2. Browsing the site: audience measurement with Google Analytics",
          corps: [
            "Looking up a route, checking regulated taxi fares or reading a guide to a station or airport: as long as you do not book or open an account, the publisher records no personal data about you. Fare estimates are computed on the fly and not kept.",
            "The site uses Google Analytics 4 to count visits and see which pages are useful: pages viewed, referring page, visit length, device and browser type, approximate country and city. To do so Google Analytics sets two cookies on your device: _ga, which tells visitors apart with a random identifier, and _ga_2Z22GS67QY, which keeps the state of the visit. Their lifetime is set to 13 months at most (390 days) and is not extended on each visit; Google's default is 2 years. Google Analytics stays off in the iPhone and Android app.",
            "The IP address is anonymised: Google Analytics 4 neither logs nor stores it, and only uses it at collection time to derive an approximate country and city. The page address sent is stripped of its parameters, and ride addresses, names and phone numbers you type are never sent to Google. The site shows no advertising: ad storage, ad user data, ad personalisation and Google signals are switched off.",
            "Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, acting as a processor under Article 28 GDPR. Purpose: audience measurement. Legal basis: the publisher's legitimate interests (GDPR Art. 6(1)(f)). Retention at Google: 14 months for visit-level and identifier-level data, then deletion; only anonymous totals remain. Data may be transferred to Google LLC in the United States under the EU–U.S. Data Privacy Framework and the European Commission's standard contractual clauses.",
            "To object: block or delete cookies in your browser settings, or install the Google Analytics opt-out browser add-on (https://tools.google.com/dlpage/gaoptout). The site works the same way. There is no advertising cookie and no social media cookie.",
          ],
        },
        {
          titre: "3. Anonymous stability check (cookie-free Microsoft Clarity)",
          corps: [
            "To catch a page that crashes, a booking form that stalls or a button that does nothing, the site uses Microsoft Clarity in its cookie-free mode, in which Clarity sets no _clck, _clsk, MUID or CLID cookie. Clarity only receives anonymous technical signals: errors, load times, dead clicks, scrolling and device type. Each page view carries a single-use identifier, so two visits are never linked. Page text and anything you type (addresses, name, phone number) are masked by the site's code before sending.",
            "Service provider: Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland. Purpose: site stability and speed. Legal basis: legitimate interest (GDPR Art. 6(1)(f)). Retention: 30 days for recordings, at most 13 months for aggregate statistics. To opt out, block the clarity.ms domain in your browser or write to contact@taxineo.fr; the site works just the same.",
          ],
        },
        {
          titre: "4. When you book, write to us or open an account",
          corps: [
            "Booking: name, phone number, pick-up and drop-off addresses, date and time of the ride. This data is used to carry out the ride and is passed only to the driver assigned to it.",
            "Account (driver, organisation or customer): email address and hashed password. Once you sign in, a strictly necessary session cookie keeps you logged in; it goes away when you sign out and is never set for ordinary visitors.",
            "In the driver and organisation spaces (site and app), cookie-free usage measurement (PostHog, servers in the European Union) counts the screens opened and the actions taken (ride accepted or declined, Radar alert received, booking created) to improve these spaces. The account is known there only by its internal identifier, never by its name, email or phone number; page text and anything typed (customer names, addresses and numbers) are masked before sending. Nothing is stored on your device and the browser's Do Not Track setting is respected. Provider: PostHog Inc., hosted in Frankfurt. Purpose: improving the service. Legal basis: legitimate interest (GDPR Art. 6(1)(f)). Retention: 12 months at most. To object, write to contact@taxineo.fr.",
            "Contact and quote forms: what you type is used only to answer you. A Cloudflare Turnstile anti-bot check protects these forms.",
          ],
        },
        {
          titre: "5. Legal bases and retention",
          corps: [
            "Performance of the contract for bookings and accounts; legitimate interest for audience measurement, the stability check and abuse prevention. Booking data is kept for three years after the last ride (usual commercial limitation period), account data until thirty days after the account is closed, contact messages for one year.",
          ],
        },
        {
          titre: "6. Recipients",
          corps: [
            "Data is neither sold nor rented. It goes to the driver handling the ride and to the providers strictly needed to run the service: hosting (Vercel Inc.), database (Supabase, servers in Ireland), address suggestions and routes (Google Maps), iPhone app notifications (Apple), confirmation emails (Resend), anti-bot protection (Cloudflare), audience measurement (Google Ireland Limited for Google Analytics), the cookie-free stability check (Microsoft Clarity) and usage measurement of the signed-in spaces (PostHog, in the European Union). A report sent to our team (a driver's \"Report\" link) is kept with its reason, its message and, if you give it, your e-mail address, for as long as it takes to handle it. Some process data in the United States, under the EU–U.S. Data Privacy Framework and the European Commission's standard contractual clauses.",
          ],
        },
        {
          titre: "7. Your rights",
          corps: [
            "Access, rectification, erasure, restriction, objection and portability: write to contact@taxineo.fr and you will get an answer within one month. For audience measurement, the Google Analytics opt-out add-on described above is enough. If you disagree with the answer, you can complain to the CNIL, the French data protection authority, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (www.cnil.fr).",
          ],
        },
      ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">
            {isFr ? "Politique de confidentialité" : "Privacy Policy"}
          </h1>

          {sections.map((s) => (
            <section key={s.titre} className="mb-10">
              <h2 className="text-xl font-semibold mb-3">{s.titre}</h2>
              <div className="text-sm text-neutral-600 font-light leading-relaxed space-y-3">
                {s.corps.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <p className="text-sm text-neutral-600 font-light leading-relaxed">
            {isFr
              ? "Cette page complète les mentions légales, qui identifient l'éditeur et l'hébergeur du site."
              : "This page complements the legal notice, which identifies the site's publisher and host."}
          </p>
          <p className="text-xs text-neutral-500 font-light mt-8">
            {isFr ? "Dernière mise à jour : " : "Last updated: "}
            <time dateTime={MAJ}>{dateMaj}</time>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
