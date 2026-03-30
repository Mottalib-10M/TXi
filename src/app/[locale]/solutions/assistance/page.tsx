import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SolutionPage } from "@/components/solutions/SolutionPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionAssistance" });

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
  "solar:clock-circle-linear",
  "solar:tag-price-linear",
  "solar:map-linear",
  "solar:monitor-linear",
  "solar:bill-list-linear",
  "solar:code-square-linear",
];

export default function SolutionAssistancePage() {
  return (
    <SolutionPage
      namespace="solutionAssistance"
      signupType="assistance"
      icon="solar:shield-check-linear"
      advantageIcons={advantageIcons}
    />
  );
}
