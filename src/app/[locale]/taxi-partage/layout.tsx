import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { canonicalUrl, alternateUrls } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sharedRides" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical: canonicalUrl(locale, "/taxi-partage"),
      languages: alternateUrls("/taxi-partage"),
    },
  };
}

export default function SharedTaxiLayout({ children }: Props) {
  return children;
}
