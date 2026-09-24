import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

/**
 * Bloc de FAQ visible + FAQPage, alimentés par la même liste (RECETTE §7).
 *
 * Les panneaux sont des `<details>` natifs, et non un accordéon en JavaScript :
 * un accordéon qui démonte les panneaux fermés laisse des réponses déclarées à
 * Google mais absentes du HTML servi, ce qui est la panne la plus difficile à
 * repérer parce qu'elle ne produit aucune erreur.
 */
export function FaqSection({
  titre,
  faq,
  route,
}: {
  titre: string;
  faq: { q: string; a: string }[];
  route?: string;
}) {
  if (!faq.length) return null;
  return (
    <section className="py-16 border-t border-neutral-100">
      <FaqJsonLd faq={faq} route={route} />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{titre}</h2>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="border border-neutral-200 rounded-2xl px-5 py-4"
            >
              <summary className="cursor-pointer list-none">
                <h3 className="inline text-base font-medium">{item.q}</h3>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 font-light leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
