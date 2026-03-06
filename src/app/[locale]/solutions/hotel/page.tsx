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
    />
  );
}
