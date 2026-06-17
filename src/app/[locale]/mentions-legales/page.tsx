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
      ? "Legal Notice — TaxiNeo"
      : "Mentions legales — TaxiNeo";
  const description =
    locale === "en"
      ? "Legal information, terms of use, and privacy policy for TaxiNeo fixed-price taxi booking platform."
      : "Informations legales, conditions d'utilisation et politique de confidentialite de la plateforme TaxiNeo.";
  return {
    title,
    description,
    openGraph: { title, description },
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
          </section>

          {/* Propriete intellectuelle */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr
                ? "3. Propriete intellectuelle"
                : "3. Intellectual Property"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "L'ensemble du contenu de ce site (textes, images, logos, elements graphiques, logiciels) est protege par le droit d'auteur et le droit de la propriete intellectuelle. Toute reproduction, representation, modification ou adaptation, totale ou partielle, est interdite sans autorisation prealable ecrite de TaxiNeo."
                : "All content on this site (texts, images, logos, graphics, software) is protected by copyright and intellectual property law. Any reproduction, representation, modification or adaptation, in whole or in part, is prohibited without prior written authorization from TaxiNeo."}
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
                ? "Conformement au Reglement General sur la Protection des Donnees (RGPD) et a la loi Informatique et Libertes, vous disposez d'un droit d'acces, de rectification, de suppression et de portabilite de vos donnees personnelles."
                : "In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the right to access, rectify, delete and port your personal data."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Les donnees collectees sur ce site (nom, email, telephone, adresses de depart et d'arrivee) sont utilisees exclusivement pour le traitement de vos reservations de taxi et la gestion de votre compte."
                : "Data collected on this site (name, email, phone, pickup and drop-off addresses) is used exclusively for processing your taxi bookings and managing your account."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Pour exercer vos droits, contactez-nous a : contact@taxineo.fr"
                : "To exercise your rights, contact us at: contact@taxineo.fr"}
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "5. Cookies" : "5. Cookies"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {isFr
                ? "Ce site utilise des cookies pour assurer son bon fonctionnement, analyser le trafic (Google Analytics) et ameliorer votre experience utilisateur."
                : "This site uses cookies to ensure proper functionality, analyze traffic (Google Analytics) and improve your user experience."}
            </p>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Vous pouvez configurer votre navigateur pour refuser les cookies ou etre averti lorsqu'un cookie est envoye."
                : "You can configure your browser to refuse cookies or be notified when a cookie is sent."}
            </p>
          </section>

          {/* Conditions d'utilisation */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr
                ? "6. Conditions d'utilisation"
                : "6. Terms of Use"}
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
                ? "L'utilisation du site implique l'acceptation pleine et entiere des presentes conditions."
                : "Use of the site implies full acceptance of these terms."}
            </p>
          </section>

          {/* Responsabilite */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "7. Limitation de responsabilite" : "7. Limitation of Liability"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "TaxiNeo s'efforce de fournir des informations exactes et a jour. Toutefois, nous ne pouvons garantir l'exactitude ou l'exhaustivite des informations publiees sur le site. TaxiNeo ne saurait etre tenu responsable des dommages directs ou indirects resultant de l'utilisation du site."
                : "TaxiNeo strives to provide accurate and up-to-date information. However, we cannot guarantee the accuracy or completeness of information published on the site. TaxiNeo shall not be held liable for any direct or indirect damages resulting from the use of the site."}
            </p>
          </section>

          {/* Droit applicable */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "8. Droit applicable" : "8. Applicable Law"}
            </h2>
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {isFr
                ? "Les presentes mentions legales sont soumises au droit francais. En cas de litige, les tribunaux francais seront seuls competents."
                : "These legal notices are subject to French law. In the event of a dispute, the French courts shall have sole jurisdiction."}
            </p>
          </section>

          <p className="text-xs text-neutral-400 font-light mt-12">
            {isFr
              ? "Derniere mise a jour : juin 2025"
              : "Last updated: June 2025"}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
