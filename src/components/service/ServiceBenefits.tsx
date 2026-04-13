import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import type { ServiceSeo } from "@/data/services-seo";

export async function ServiceBenefits({ service }: { service: ServiceSeo }) {
  const t = await getTranslations("service");
  const locale = await getLocale();
  const loc = locale === "en" ? "en" : "fr";

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            TaxiNeo
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("benefitsTitle")}
          </h2>
        </div>

        <div className="fade-up mb-12">
          <p className="text-base text-neutral-600 font-light leading-relaxed">
            {service.i18n[loc].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {service.i18n[loc].benefits.map((benefit, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
            >
              <Icon icon="solar:check-circle-linear" className="text-green-500 text-xl shrink-0 mt-0.5" />
              <p className="text-sm font-medium">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
