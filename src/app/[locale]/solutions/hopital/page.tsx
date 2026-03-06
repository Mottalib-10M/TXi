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
    />
  );
}
