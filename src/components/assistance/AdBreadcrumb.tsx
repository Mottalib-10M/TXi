import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export async function AdBreadcrumb({ cityName }: { cityName: string }) {
  const t = await getTranslations("ad");

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
          { name: t("breadcrumbAssistance"), item: "https://www.taxineo.fr/solutions/assistance-depannage" },
          { name: t("breadcrumbCity", { cityName }) },
        ]}
      />
      <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/solutions/assistance-depannage" className="hover:text-neutral-900 transition-colors">{t("breadcrumbAssistance")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-900 font-medium">{t("breadcrumbCity", { cityName })}</li>
        </ol>
      </nav>
    </>
  );
}
