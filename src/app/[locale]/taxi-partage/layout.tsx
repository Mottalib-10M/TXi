import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

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
    },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/taxi-partage`,
      languages: {
        fr: "https://www.taxineo.fr/fr/taxi-partage",
        en: "https://www.taxineo.fr/en/taxi-partage",
      },
    },
  };
}

export default function SharedTaxiLayout({ children }: Props) {
  return children;
}
