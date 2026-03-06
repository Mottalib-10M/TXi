import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SolutionPage } from "@/components/solutions/SolutionPage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "solutionEnterprise" });

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
  "solar:graph-up-linear",
  "solar:card-2-linear",
  "solar:users-group-two-rounded-linear",
  "solar:clipboard-list-linear",
  "solar:wallet-linear",
  "solar:shield-check-linear",
];

export default function SolutionEnterprisePage() {
  return (
    <SolutionPage
      namespace="solutionEnterprise"
      signupType="enterprise"
      icon="solar:buildings-2-linear"
      advantageIcons={advantageIcons}
    />
  );
}
