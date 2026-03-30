import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export async function CityBreadcrumb({ cityName }: { cityName: string }) {
  const t = await getTranslations("city");

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
          { name: t("breadcrumbCities"), item: "https://www.taxineo.fr/villes" },
          { name: t("breadcrumbTaxi", { cityName }) },
        ]}
      />
      <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/villes" className="hover:text-neutral-900 transition-colors">{t("breadcrumbCities")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-900 font-medium">{t("breadcrumbTaxi", { cityName })}</li>
        </ol>
      </nav>
    </>
  );
}
