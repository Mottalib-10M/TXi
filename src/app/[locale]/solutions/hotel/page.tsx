import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SolutionPage } from "@/components/solutions/SolutionPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionHotel" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://www.taxineo.fr/${locale}/solutions/hotel`,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/solutions/hotel`,
      languages: {
        fr: "https://www.taxineo.fr/fr/solutions/hotel",
        en: "https://www.taxineo.fr/en/solutions/hotel",
      },
    },
  };
}

const advantageIcons = [
  "solar:bell-linear",
  "solar:card-2-linear",
  "solar:clock-circle-linear",
  "solar:star-linear",
  "solar:wallet-linear",
  "solar:shield-check-linear",
];

export default function SolutionHotelPage() {
  return (
    <SolutionPage
      namespace="solutionHotel"
      signupType="hotel"
      icon="mdi:hotel"
      advantageIcons={advantageIcons}
      slug="hotel"
    />
  );
}
