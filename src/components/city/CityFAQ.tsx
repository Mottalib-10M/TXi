import { useTranslations } from "next-intl";
import type { CityFAQ as CityFAQType } from "@/data/cities";

/**
 * FAQ en <details> natifs (RECETTE-SITE.md §7).
 *
 * L'accordéon précédent ne montait que le panneau ouvert : les réponses
 * n'existaient pas dans le HTML servi, alors que le JSON-LD les déclarait
 * toutes à Google — 874 réponses promises et absentes, relevées le 2026-09-24.
 * Un <details> porte sa réponse dans la page, fonctionne sans JavaScript et
 * reste accessible au clavier ; le composant n'a plus besoin d'être client.
 */
export function CityFAQ({ cityName, faq }: { cityName: string; faq: CityFAQType[] }) {
  const t = useTranslations("city");

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            {t("faqSubtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            {t("faqTitle", { cityName })}
          </h2>
        </div>
        <div className="space-y-3 fade-up">
          {faq.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="group bg-white border border-neutral-200 rounded-xl overflow-hidden"
            >
              <summary className="w-full flex items-center justify-between p-5 text-left cursor-pointer list-none">
                <h3 className="text-sm font-medium pr-4">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="text-neutral-400 shrink-0 transition-transform duration-200 group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-5 -mt-1">
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
