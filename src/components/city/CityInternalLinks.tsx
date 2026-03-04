import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { City } from "@/data/cities";
import { getNearbyCities } from "@/data/cities";
import { getTranslations } from "next-intl/server";

export async function CityInternalLinks({ city }: { city: City }) {
  const t = await getTranslations("city");
  const nearby = getNearbyCities(city);
  if (nearby.length === 0) return null;

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 fade-up">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("nearbyCities")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 fade-up">
          {nearby.map((c) => (
            <Link
              key={c.slug}
              href={`/taxi-${c.slug}`}
              className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
            >
              <Icon icon="solar:map-point-linear" className="text-neutral-400" />
              <span className="text-sm font-medium">{t("taxiPrefix")}{c.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
