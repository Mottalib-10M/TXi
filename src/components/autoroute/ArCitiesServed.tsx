import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { AutorouteData } from "@/data/autoroutes";
import { getCityBySlug } from "@/data/cities";
import { getTranslations } from "next-intl/server";

export async function ArCitiesServed({ autoroute }: { autoroute: AutorouteData }) {
  const t = await getTranslations("ar");
  const cities = autoroute.citiesServed
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("citiesSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("citiesTitle", { autorouteName: autoroute.name })}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 fade-up">
          {cities.map((city) => (
            <Link
              key={city!.slug}
              href={`/assistance/${city!.slug}`}
              className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:map-point-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">{city!.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
