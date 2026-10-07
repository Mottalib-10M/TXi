import type { Metadata } from "next";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LigneMaj } from "@/components/shared/LigneMaj";

interface Props {
  params: Promise<{ locale: string }>;
}

const MAJ = "2026-10-07";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "TaxiNeo privacy policy: no cookies while you browse"
      : "Confidentialité TaxiNeo : aucun cookie à la visite";
  const description =
    locale === "en"
      ? "TaxiNeo sets no cookies while you browse; only a cookie-free stability check runs. What a booking or an account requires, how long it is kept and your rights."
      : "TaxiNeo ne dépose aucun cookie à la visite et ne mesure que la stabilité, sans cookie. Ce que demande une réservation, sa durée de conservation, vos droits.";
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
  const dateLisible = new Intl.DateTimeFormat(isFr ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(MAJ));

  const sections: { titre: string; corps: string[] }[] = isFr
    ? [
        {
          titre: "1. Responsable du traitement",
          corps: [
            "TaxiNeo est édité par Radif Partners, qui décide de l'usage des données décrites ici. Pour toute question : contact@taxineo.fr.",
          ],
        },
        {
          titre: "2. Consulter le site : aucun cookie, rien d'enregistré",
          corps: [
            "Chercher un trajet, comparer les tarifs réglementés d'un taxi, lire un guide sur une gare ou un aéroport : tant que vous ne réservez pas et ne créez pas de compte, le site ne dépose aucun cookie et l'éditeur n'enregistre aucune donnée personnelle vous concernant. Les estimations de prix sont calculées à la volée et ne sont pas gardées.",
            "Il n'y a donc pas de bandeau cookies : rien à accepter. Aucun outil publicitaire, aucun Google Analytics, aucun autre traceur.",
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
            "Formulaires de contact et de devis : les informations saisies servent uniquement à vous répondre. Un contrôle anti-robot Cloudflare Turnstile protège ces formulaires.",
          ],
        },
        {
          titre: "5. Bases légales et durées",
          corps: [
            "Exécution du contrat pour les réservations et les comptes ; intérêt légitime pour la mesure de stabilité et la prévention des abus. Les données de réservation sont conservées trois ans après la dernière course (prescription commerciale usuelle), celles d'un compte jusqu'à trente jours après sa fermeture, les messages de contact un an.",
          ],
        },
        {
          titre: "6. Destinataires",
          corps: [
            "Les données ne sont ni vendues ni louées. Elles vont au chauffeur chargé de la course et aux prestataires strictement nécessaires : hébergement (Vercel Inc.), envoi des e-mails de confirmation (Resend), protection anti-robot (Cloudflare) et mesure de stabilité sans cookie (Microsoft Clarity). Certains traitent des données aux États-Unis, sous clauses contractuelles types de la Commission européenne.",
          ],
        },
        {
          titre: "7. Vos droits",
          corps: [
            "Accès, rectification, effacement, limitation, opposition et portabilité : écrivez à contact@taxineo.fr, réponse sous un mois. En cas de désaccord, vous pouvez saisir la CNIL, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (www.cnil.fr).",
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
          titre: "2. Browsing the site: no cookies, nothing recorded",
          corps: [
            "Looking up a route, checking regulated taxi fares or reading a guide to a station or airport: as long as you do not book or open an account, the site sets no cookies and the publisher records no personal data about you. Fare estimates are computed on the fly and not kept.",
            "That is why there is no cookie banner: there is nothing to accept. No advertising tools, no Google Analytics, no other tracker.",
          ],
        },
        {
          titre: "3. Anonymous stability check (cookie-free Microsoft Clarity)",
          corps: [
            "To catch a page that crashes, a booking form that stalls or a button that does nothing, the site uses Microsoft Clarity in its cookie-free mode: no _clck, _clsk, MUID or CLID cookie. Clarity only receives anonymous technical signals: errors, load times, dead clicks, scrolling and device type. Each page view carries a single-use identifier, so two visits are never linked. Page text and anything you type (addresses, name, phone number) are masked by the site's code before sending.",
            "Service provider: Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland. Purpose: site stability and speed. Legal basis: legitimate interest (GDPR Art. 6(1)(f)). Retention: 30 days for recordings, at most 13 months for aggregate statistics. To opt out, block the clarity.ms domain in your browser or write to contact@taxineo.fr; the site works just the same.",
          ],
        },
        {
          titre: "4. When you book, write to us or open an account",
          corps: [
            "Booking: name, phone number, pick-up and drop-off addresses, date and time of the ride. This data is used to carry out the ride and is passed only to the driver assigned to it.",
            "Account (driver, organisation or customer): email address and hashed password. Once you sign in, a strictly necessary session cookie keeps you logged in; it goes away when you sign out and is never set for ordinary visitors.",
            "Contact and quote forms: what you type is used only to answer you. A Cloudflare Turnstile anti-bot check protects these forms.",
          ],
        },
        {
          titre: "5. Legal bases and retention",
          corps: [
            "Performance of the contract for bookings and accounts; legitimate interest for the stability check and abuse prevention. Booking data is kept for three years after the last ride (usual commercial limitation period), account data until thirty days after the account is closed, contact messages for one year.",
          ],
        },
        {
          titre: "6. Recipients",
          corps: [
            "Data is neither sold nor rented. It goes to the driver handling the ride and to the providers strictly needed to run the service: hosting (Vercel Inc.), confirmation emails (Resend), anti-bot protection (Cloudflare) and the cookie-free stability check (Microsoft Clarity). Some process data in the United States, under the European Commission's standard contractual clauses.",
          ],
        },
        {
          titre: "7. Your rights",
          corps: [
            "Access, rectification, erasure, restriction, objection and portability: write to contact@taxineo.fr and you will get an answer within one month. If you disagree with the answer, you can complain to the CNIL, the French data protection authority, 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 (www.cnil.fr).",
          ],
        },
      ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            {isFr ? "Politique de confidentialité" : "Privacy Policy"}
          </h1>
          {/* §8.4 : la date de mise à jour se lit juste sous le titre. */}
          <LigneMaj />

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
            <time dateTime={MAJ}>{dateLisible}</time>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
