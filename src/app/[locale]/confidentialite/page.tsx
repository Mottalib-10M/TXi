import type { Metadata } from "next";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LigneMaj } from "@/components/shared/LigneMaj";

interface Props {
  params: Promise<{ locale: string }>;
}

const MAJ = "2026-09-24";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "TaxiNeo privacy policy: what we do with your data here"
      : "Politique de confidentialité de TaxiNeo : vos données";
  const description =
    locale === "en"
      ? "What personal data TaxiNeo collects when you book a taxi, for what purposes, how long it is kept, who receives it and how to exercise your rights in full."
      : "Quelles données personnelles TaxiNeo collecte lors d'une réservation, pour quelles finalités, combien de temps elles sont conservées et vos droits RGPD.";
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
            "Le site TaxiNeo est édité par Radif Partners, qui détermine les finalités et les moyens des traitements décrits sur cette page. Toute question relative à vos données peut être adressée à contact@taxineo.fr.",
          ],
        },
        {
          titre: "2. Données collectées et finalités",
          corps: [
            "Réservation : nom, numéro de téléphone, adresse de départ et de destination, date et heure de la course. Ces données sont nécessaires à l'exécution du contrat de transport et sont transmises au chauffeur retenu pour la course.",
            "Compte utilisateur : adresse e-mail et mot de passe chiffré, afin de vous permettre de retrouver l'historique de vos réservations.",
            "Contact : les informations que vous saisissez dans le formulaire de contact, utilisées uniquement pour vous répondre.",
            "Mesure d'audience : pages consultées et données techniques agrégées, afin de comprendre quelles pages du site sont utiles et de les améliorer.",
          ],
        },
        {
          titre: "3. Bases légales",
          corps: [
            "L'exécution du contrat fonde le traitement des données de réservation. L'intérêt légitime de l'éditeur fonde la mesure d'audience et la prévention des abus. Votre consentement fonde, le cas échéant, l'envoi d'informations commerciales, que vous pouvez retirer à tout moment.",
          ],
        },
        {
          titre: "4. Durées de conservation",
          corps: [
            "Les données de réservation sont conservées trois ans après la dernière course, délai correspondant à la prescription commerciale usuelle. Les données de compte sont conservées tant que le compte existe, puis supprimées dans les trente jours suivant sa fermeture. Les messages de contact sont conservés un an.",
          ],
        },
        {
          titre: "5. Destinataires",
          corps: [
            "Les données ne sont ni vendues ni louées. Elles sont transmises au seul chauffeur chargé de la course, ainsi qu'aux prestataires techniques strictement nécessaires au fonctionnement du service (hébergement, envoi d'e-mails transactionnels, mesure d'audience), qui agissent sur instruction de l'éditeur.",
          ],
        },
        {
          titre: "6. Vos droits",
          corps: [
            "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité sur vos données. Ces droits s'exercent par courriel à contact@taxineo.fr, avec une réponse sous un mois. Si la réponse ne vous satisfait pas, vous pouvez saisir la CNIL, autorité française de contrôle, sur www.cnil.fr.",
          ],
        },
        {
          titre: "7. Cookies",
          corps: [
            "Le site dépose les cookies techniques nécessaires à la session et au maintien de la connexion, qui ne requièrent pas de consentement. Les cookies de mesure d'audience sont configurés de manière à ne pas permettre le suivi d'une personne d'un site à l'autre. Vous pouvez à tout moment supprimer les cookies depuis les réglages de votre navigateur.",
          ],
        },
      ]
    : [
        {
          titre: "1. Data controller",
          corps: [
            "TaxiNeo is published by Radif Partners, which determines the purposes and means of the processing described on this page. Any question about your data can be sent to contact@taxineo.fr.",
          ],
        },
        {
          titre: "2. Data collected and purposes",
          corps: [
            "Booking: name, phone number, pick-up and drop-off address, date and time of the ride. This data is required to perform the transport contract and is passed to the driver assigned to the ride.",
            "User account: email address and hashed password, so that you can find your booking history again.",
            "Contact: the information you type into the contact form, used only to answer you.",
            "Audience measurement: pages viewed and aggregated technical data, so we can understand which pages are useful and improve them.",
          ],
        },
        {
          titre: "3. Legal bases",
          corps: [
            "Performance of the contract is the basis for processing booking data. The publisher's legitimate interest is the basis for audience measurement and abuse prevention. Your consent is the basis for any commercial information, and can be withdrawn at any time.",
          ],
        },
        {
          titre: "4. Retention periods",
          corps: [
            "Booking data is kept for three years after the last ride, matching the usual commercial limitation period. Account data is kept while the account exists, then deleted within thirty days of its closure. Contact messages are kept for one year.",
          ],
        },
        {
          titre: "5. Recipients",
          corps: [
            "Data is neither sold nor rented. It is passed only to the driver handling the ride, and to the technical providers strictly required to run the service (hosting, transactional email, audience measurement), which act on the publisher's instructions.",
          ],
        },
        {
          titre: "6. Your rights",
          corps: [
            "You have the right to access, rectify, erase, restrict, object to and port your data. These rights are exercised by email at contact@taxineo.fr, with an answer within one month. If the answer does not satisfy you, you may refer the matter to the CNIL, the French supervisory authority, at www.cnil.fr.",
          ],
        },
        {
          titre: "7. Cookies",
          corps: [
            "The site sets the technical cookies required for the session and to keep you signed in, which need no consent. Audience measurement cookies are configured so that they cannot track a person from one site to another. You can delete cookies at any time from your browser settings.",
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
