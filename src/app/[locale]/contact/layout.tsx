import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://www.taxineo.fr/${locale}/contact`,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/contact`,
      languages: {
        fr: "https://www.taxineo.fr/fr/contact",
        en: "https://www.taxineo.fr/en/contact",
      },
    },
  };
}

export default function ContactLayout({ children }: Props) {
  return children;
}
