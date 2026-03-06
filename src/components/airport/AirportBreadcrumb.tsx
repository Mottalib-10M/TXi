import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function AirportBreadcrumb({ airportName }: { airportName: string }) {
  const t = await getTranslations("airport");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
      { "@type": "ListItem", position: 2, name: t("breadcrumbAirports"), item: "https://www.taxineo.fr/aeroports" },
      { "@type": "ListItem", position: 3, name: t("breadcrumbTaxi", { airportName }) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
