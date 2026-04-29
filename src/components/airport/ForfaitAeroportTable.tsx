import { getTranslations } from "next-intl/server";
import { getParisAirportFares } from "@/data/departmental-tariffs";

export async function ForfaitAeroportTable() {
  const t = await getTranslations("airport.forfaitTable");
  const { fares, supplements } = getParisAirportFares();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t("title"),
    itemListElement: fares.map((fare, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "PriceSpecification",
        name: fare.route,
        price: fare.price,
        priceCurrency: "EUR",
        validFrom: supplements.validFrom,
        validThrough: supplements.validThrough,
      },
    })),
  };

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="text-center mb-10 fade-up">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {t("title")}
          </h3>
          <p className="text-sm text-neutral-500 font-light mt-2">
            {t("subtitle")}
          </p>
        </div>

        {/* Fare table */}
        <div className="overflow-x-auto fade-up">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-600">
                  {t("route")}
                </th>
                <th className="text-right py-3 px-4 font-medium text-neutral-600">
                  {t("price")}
                </th>
              </tr>
            </thead>
            <tbody>
              {fares.map((fare) => (
                <tr key={fare.route} className="border-b border-neutral-100">
                  <td className="py-3 px-4">{fare.route}</td>
                  <td className="py-3 px-4 text-right font-semibold">
                    {fare.price}&nbsp;€
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Supplements */}
        <div className="mt-8 fade-up">
          <h4 className="text-sm font-semibold text-neutral-700 mb-3">
            {t("supplementsTitle")}
          </h4>
          <ul className="space-y-1.5 text-sm text-neutral-600">
            <li className="flex justify-between">
              <span>{t("reservationImmediate")}</span>
              <span className="font-medium">+{supplements.reservationImmediate}&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>{t("reservationAvance")}</span>
              <span className="font-medium">+{supplements.reservationAvance}&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>{t("minimumPerception")}</span>
              <span className="font-medium">{supplements.minimumPerception}&nbsp;€</span>
            </li>
            <li className="flex justify-between">
              <span>{t("priseEnCharge")}</span>
              <span className="font-medium">{supplements.priseEnChargeMax}&nbsp;€</span>
            </li>
          </ul>
        </div>

        {/* Legal mention */}
        <p className="text-xs text-neutral-400 font-light mt-6 text-center">
          {t("legalMention")}
        </p>
      </div>
    </section>
  );
}
