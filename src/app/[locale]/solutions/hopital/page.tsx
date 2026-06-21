import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SolutionPage } from "@/components/solutions/SolutionPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionHospital" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://www.taxineo.fr/${locale}/solutions/hopital`,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/solutions/hopital`,
      languages: {
        fr: "https://www.taxineo.fr/fr/solutions/hopital",
        en: "https://www.taxineo.fr/en/solutions/hopital",
      },
    },
  };
}

const advantageIcons = [
  "solar:health-linear",
  "solar:clock-circle-linear",
  "solar:accessibility-linear",
  "solar:card-2-linear",
  "solar:calendar-linear",
  "solar:shield-check-linear",
];

export default function SolutionHospitalPage() {
  return (
    <SolutionPage
      namespace="solutionHospital"
      signupType="hospital"
      icon="solar:health-linear"
      advantageIcons={advantageIcons}
      slug="hopital"
    />
  );
}
