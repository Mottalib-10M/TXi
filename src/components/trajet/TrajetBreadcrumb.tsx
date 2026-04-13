import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import type { Trajet } from "@/data/trajets";

export async function TrajetBreadcrumb({ trajet }: { trajet: Trajet }) {
  const t = await getTranslations("trajet");

  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: t("breadcrumbHome"), item: "https://www.taxineo.fr" },
          { name: t("breadcrumbTrajets"), item: "https://www.taxineo.fr/trajets" },
          { name: `${trajet.from} → ${trajet.to}` },
        ]}
      />
      <nav className="text-sm text-neutral-500 font-light mb-6" aria-label={t("breadcrumbLabel")}>
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">{t("breadcrumbHome")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/trajets" className="hover:text-neutral-900 transition-colors">{t("breadcrumbTrajets")}</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-900 font-medium">{trajet.from} → {trajet.to}</li>
        </ol>
      </nav>
    </>
  );
}
