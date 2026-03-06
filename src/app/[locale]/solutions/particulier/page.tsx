import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
    />
  );
}
