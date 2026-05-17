import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { City } from "@/data/cities";
import { getCityBySlug } from "@/data/cities";
import { getAdCitySlugs } from "@/data/assistance-cities";
import { getTranslations } from "next-intl/server";

export async function AdInternalLinks({ city, nearbyAdCities, nearestAutoroutes }: { city: City; nearbyAdCities: string[]; nearestAutoroutes: string[] }) {
  const t = await getTranslations("ad");
  const adSlugs = new Set(getAdCitySlugs());

  const nearbyWithAd = nearbyAdCities
    .filter((slug) => adSlugs.has(slug))
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean)
    .slice(0, 5);

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Link to regular taxi page for this city */}
        <div className="fade-up">
          <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
            {t("internalTaxiCity")}
          </h3>
          <div className="flex justify-center">
            <Link
              href={`/taxi-${city.slug}`}
              className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:car-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">{t("taxiPrefix")}{city.name}</span>
            </Link>
          </div>
        </div>

        {/* Nearby autoroutes */}
        {nearestAutoroutes.length > 0 && (
          <div>
            <div className="text-center mb-6 fade-up">
              <h3 className="text-lg font-semibold tracking-tight">
                {t("nearbyAutoroutes")}
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3 fade-up">
              {nearestAutoroutes.map((slug) => (
                <Link
                  key={slug}
                  href={`/autoroute/${slug}`}
                  className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:road-linear" className="text-neutral-400" />
                  <span className="text-sm font-medium">{slug.toUpperCase()}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Nearby AD cities */}
        {nearbyWithAd.length > 0 && (
          <div>
            <div className="text-center mb-10 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("nearbyAdCities")}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 fade-up">
              {nearbyWithAd.map((c) => (
                <Link
                  key={c!.slug}
                  href={`/assistance/${c!.slug}`}
                  className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:danger-triangle-linear" className="text-neutral-400" />
                  <span className="text-sm font-medium">{c!.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Link to hub page */}
        <div className="fade-up">
          <h3 className="text-lg font-semibold tracking-tight text-center mb-6">
            {t("internalHubGeneral")}
          </h3>
          <div className="flex justify-center">
            <Link
              href="/solutions/assistance-depannage"
              className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:danger-triangle-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">{t("internalHubLabel")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
