import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export async function AirportBreadcrumb({ airportName }: { airportName: string }) {
  const t = await getTranslations("airport");

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
          { name: t("breadcrumbAirports"), item: "https://www.taxineo.fr/aeroports" },
          { name: t("breadcrumbTaxi", { airportName }) },
        ]}
      />
      <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/aeroports" className="hover:text-neutral-900 transition-colors">{t("breadcrumbAirports")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-900 font-medium">{t("breadcrumbTaxi", { airportName })}</li>
        </ol>
      </nav>
    </>
  );
}
