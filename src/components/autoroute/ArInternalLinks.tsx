import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import type { AutorouteData } from "@/data/autoroutes";
import { autoroutes } from "@/data/autoroutes";
import { getTranslations } from "next-intl/server";

export async function ArInternalLinks({ autoroute }: { autoroute: AutorouteData }) {
  const t = await getTranslations("ar");

  const otherAutoroutes = autoroutes
    .filter((a) => a.slug !== autoroute.slug)
    .slice(0, 6);

  return (
    <section className="border-t border-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Other autoroutes */}
        {otherAutoroutes.length > 0 && (
          <div>
            <div className="text-center mb-10 fade-up">
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("nearbyAutoroutes")}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-up">
              {otherAutoroutes.map((a) => (
                <Link
                  key={a.slug}
                  href={`/autoroute/${a.slug}`}
                  className="flex items-center justify-center gap-2 bg-white border border-neutral-200 rounded-xl p-4 hover:border-neutral-400 transition-colors card-hover"
                >
                  <Icon icon="solar:road-linear" className="text-neutral-400" />
                  <span className="text-sm font-medium">{a.name}</span>
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
