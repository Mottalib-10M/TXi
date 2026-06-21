import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Link } from "@/i18n/navigation";
import { glossaryTerms } from "@/data/glossary";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { canonicalUrl, alternateUrls } from "@/lib/seo";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";

  const title = isFr
    ? "Glossaire du taxi et transport en France"
    : "Taxi & Transport Glossary — France";
  const description = isFr
    ? "Découvrez les définitions des termes clés du taxi et du transport de personnes en France : ADS, forfait, VTC, taximètre, prise en charge et 30+ termes essentiels."
    : "Discover key taxi and passenger transport terms in France: ADS, fixed fare, VTC, taximeter, pickup fee, and 30+ essential definitions.";

  const canonical = canonicalUrl(locale, "/glossaire");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "TaxiNeo",
      type: "website",
      images: [
        {
          url: "https://www.taxineo.fr/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    alternates: {
      canonical,
      languages: alternateUrls("/glossaire"),
    },
  };
}

export default async function GlossairePage({ params }: PageProps) {
  const { locale } = await params;
  const loc = locale === "en" ? "en" : "fr";
  const t = await getTranslations({ locale, namespace: "common" });

  const isFr = loc === "fr";
  const title = isFr ? "Glossaire taxi & transport" : "Taxi & Transport Glossary";
  const subtitle = isFr
    ? "Les termes essentiels du monde du taxi et du transport de personnes en France."
    : "Essential terms from the world of taxi and passenger transport in France.";

  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term[loc].localeCompare(b.term[loc], loc)
  );

  const letters = Array.from(
    new Set(sorted.map((t) => t.term[loc][0].toUpperCase()))
  ).sort((a, b) => a.localeCompare(b, loc));

  const termsByLetter = letters.map((letter) => ({
    letter,
    terms: sorted.filter((t) => t.term[loc][0].toUpperCase() === letter),
  }));

  const definedTermSetSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: title,
    description: subtitle,
    url: `https://www.taxineo.fr/${locale}/glossaire`,
    inLanguage: loc,
    hasDefinedTerm: sorted.map((term) => ({
      "@type": "DefinedTerm",
      name: term.term[loc],
      description: term.definition[loc],
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      <main className="flex-grow pt-24 pb-16" id="main-content">
        <div className="max-w-4xl mx-auto px-6">
          <BreadcrumbJsonLd
            crumbs={[
              { name: isFr ? "Accueil" : "Home", item: "https://www.taxineo.fr" },
              { name: title },
            ]}
          />
          <nav
            className="text-sm text-neutral-500 font-light mb-6"
            aria-label={isFr ? "Fil d'Ariane" : "Breadcrumb"}
          >
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link href="/" className="hover:text-neutral-900 transition-colors">
                  {isFr ? "Accueil" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-medium">{title}</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3 fade-up">
            {title}
          </h1>
          <p className="text-base text-neutral-500 font-light mb-10 fade-up fade-up-delay-1">
            {subtitle}
          </p>

          {/* Alphabetical navigation */}
          <nav
            className="flex flex-wrap gap-1.5 mb-12 fade-up fade-up-delay-2"
            aria-label={isFr ? "Navigation alphabétique" : "Alphabetical navigation"}
          >
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center text-sm font-medium rounded-lg border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-colors"
              >
                {letter}
              </a>
            ))}
          </nav>

          {/* Terms by letter */}
          <div className="space-y-12">
            {termsByLetter.map(({ letter, terms }) => (
              <section key={letter} id={`letter-${letter}`}>
                <h2 className="text-2xl font-semibold tracking-tight mb-4 text-neutral-900">
                  {letter}
                </h2>
                <div className="space-y-4">
                  {terms.map((term) => (
                    <div
                      key={term.id}
                      className="bg-white border border-neutral-200 rounded-xl p-5"
                    >
                      <h3 className="text-base font-medium mb-1.5">
                        {term.term[loc]}
                      </h3>
                      <p className="text-sm text-neutral-600 font-light leading-relaxed">
                        {term.definition[loc]}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-neutral-200 text-center fade-up">
            <h2 className="text-xl font-semibold tracking-tight mb-3">
              {isFr
                ? "Besoin d'un taxi ? Réservez à prix fixe"
                : "Need a taxi? Book at a fixed price"}
            </h2>
            <p className="text-sm text-neutral-500 font-light mb-6">
              {isFr
                ? "Chauffeurs agréés, disponibles 24h/24 dans 50+ villes françaises."
                : "Licensed drivers, available 24/7 in 50+ French cities."}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
            >
              {isFr ? "Réserver maintenant" : "Book now"}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
