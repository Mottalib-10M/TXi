import type { Metadata } from "next";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LigneMaj } from "@/components/shared/LigneMaj";

interface Props {
  params: Promise<{ locale: string }>;
}

const CODE = `<iframe
  src="https://www.taxineo.fr/embed/tarif-taxi"
  title="Bareme des tarifs taxi"
  width="100%" height="420" loading="lazy"
  style="border:1px solid #e5e5e5;border-radius:12px"></iframe>`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Taxi fare widget to embed on your site"
      : "Widget tarifs taxi à intégrer sur votre site";
  const description =
    locale === "en"
      ? "Embed the taxi fare scale on your own website with one line of HTML: the four rate bands explained, kept up to date with the official orders, free of charge."
      : "Intégrez le barème des tarifs taxi sur votre site avec une ligne de HTML : les quatre tarifs expliqués, mis à jour avec les arrêtés officiels, gratuitement.";
  return {
    title: ajusterTitre(title, [locale === "en" ? "— TaxiNeo, fixed-price taxis" : "— TaxiNeo, taxis à prix fixe"]),
    description: ajusterDescription(description, [locale === "en" ? "Fixed price confirmed before booking, luggage included, 24/7." : "Prix fixe confirmé avant la réservation, bagages compris, 24h/24."]),
    openGraph: { title: ajusterTitre(title, [locale === "en" ? "— TaxiNeo, fixed-price taxis" : "— TaxiNeo, taxis à prix fixe"]), description: ajusterDescription(description, [locale === "en" ? "Fixed price confirmed before booking, luggage included, 24/7." : "Prix fixe confirmé avant la réservation, bagages compris, 24h/24."]) },
    alternates: {
      canonical: canonicalUrl(locale, "/widget"),
      languages: alternateUrls("/widget"),
    },
  };
}

export default async function WidgetPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale !== "en";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            {isFr ? "Widget tarifs taxi" : "Taxi fare widget"}
          </h1>
          <LigneMaj />
          <p className="text-sm text-neutral-600 font-light leading-relaxed mb-8 max-w-2xl">
            {isFr
              ? "Ce widget affiche les quatre tarifs réglementés du compteur — A, B, C et D — et dit dans quel cas chacun s'applique. Il est destiné aux sites d'hôtels, d'offices de tourisme, de cliniques ou d'entreprises qui renseignent leurs visiteurs sur le coût d'une course sans vouloir entretenir eux-mêmes une page de tarifs. Son contenu suit les arrêtés préfectoraux : quand le barème change, le bloc change chez vous sans intervention de votre part. L'intégration se fait avec une ligne de HTML, sans script à charger, sans cookie déposé chez vos visiteurs et sans inscription. L'usage est libre et gratuit, la seule contrepartie étant le lien vers TaxiNeo qui figure sous le tableau."
              : "This widget shows the four regulated meter rates — A, B, C and D — and says when each applies. It is meant for hotel, tourist office, clinic or company websites that want to tell visitors what a ride costs without maintaining a fare page themselves. Its content follows the prefectoral orders: when the scale changes, the block changes on your site with nothing for you to do. Embedding takes one line of HTML, with no script to load, no cookie set on your visitors and no sign-up. Use is free, the only condition being the link to TaxiNeo shown under the table."}
          </p>

          <h2 className="text-xl font-semibold mb-3">
            {isFr ? "Code à copier" : "Code to copy"}
          </h2>
          <pre className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 text-xs overflow-x-auto mb-8">
            <code>{CODE}</code>
          </pre>

          <h2 className="text-xl font-semibold mb-3">{isFr ? "Aperçu" : "Preview"}</h2>
          <iframe
            src="/embed/tarif-taxi"
            title={isFr ? "Barème des tarifs taxi" : "Taxi fare scale"}
            width="100%"
            height={420}
            loading="lazy"
            className="border border-neutral-200 rounded-xl"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
