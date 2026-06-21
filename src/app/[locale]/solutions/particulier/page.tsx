import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { canonicalUrl, alternateUrls } from "@/lib/seo";
import { SolutionPage } from "@/components/solutions/SolutionPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionParticulier" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: `https://www.taxineo.fr/${locale}/solutions/particulier`,
      siteName: "TaxiNeo",
      type: "website",
      images: [{ url: "https://www.taxineo.fr/opengraph-image", width: 1200, height: 630, alt: t("metaTitle") }],
    },
    alternates: {
      canonical: canonicalUrl(locale, "/solutions/particulier"),
      languages: alternateUrls("/solutions/particulier"),
    },
  };
}

const advantageIcons = [
  "solar:smartphone-linear",
  "solar:tag-price-linear",
  "solar:star-linear",
  "solar:wallet-linear",
  "solar:calendar-linear",
  "solar:shield-check-linear",
];

export default function SolutionParticulierPage() {
  return (
    <SolutionPage
      namespace="solutionParticulier"
      signupType="particulier"
      icon="solar:user-linear"
      advantageIcons={advantageIcons}
      slug="particulier"
    />
  );
}
