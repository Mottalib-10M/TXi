import type { Metadata } from "next";
import { canonicalUrl, alternateUrls, ajusterTitre, ajusterDescription } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LigneMaj } from "@/components/shared/LigneMaj";

interface Props {
  params: Promise<{ locale: string }>;
}

const MAJ = "2026-09-24";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "Methodology: how TaxiNeo calculates its fare estimates"
      : "Méthodologie : comment TaxiNeo calcule ses estimations";
  const description =
    locale === "en"
      ? "Where our fares come from, how an estimate is calculated, what it does not guarantee, how often it is updated and how to report a mistake to us today."
      : "D'où viennent nos tarifs, comment une estimation est calculée, ce qu'elle ne garantit pas, à quelle fréquence elle est revue et comment signaler une erreur.";
  return {
    title: title,
    description: description,
    openGraph: { title: title, description: description },
    alternates: {
      canonical: canonicalUrl(locale, "/methodologie"),
      languages: alternateUrls("/methodologie"),
    },
  };
}

export default async function MethodologyPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";
  const dateLisible = new Intl.DateTimeFormat(isFr ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(MAJ));

  const sections: { titre: string; corps: string[] }[] = isFr
    ? [
        {
          titre: "1. D'où viennent les tarifs",
          corps: [
            "Les tarifs de taxi en France ne sont pas libres : ils sont plafonnés chaque année par un arrêté publié au Journal officiel, puis déclinés département par département par un arrêté préfectoral. Les montants utilisés par TaxiNeo proviennent de ces deux textes, complétés par les grilles forfaitaires publiées par les aéroports et les gares qui en pratiquent.",
            "Aucun tarif n'est inventé ni extrapolé d'une ville à l'autre : une ville pour laquelle nous n'avons pas de texte applicable affiche une fourchette explicitement présentée comme indicative.",
          ],
        },
        {
          titre: "2. Comment une estimation est calculée",
          corps: [
            "Une estimation additionne la prise en charge, le prix au kilomètre applicable à la course et, le cas échéant, les suppléments prévus par l'arrêté (bagages, passager supplémentaire, réservation). Le prix au kilomètre dépend du tarif horaire et du sens de la course : un retour à vide se facture au tarif dit « retour », plus élevé.",
            "La distance et la durée proviennent du calcul d'itinéraire routier entre les deux adresses saisies, à l'heure demandée. Le trafic réel du jour n'est pas modélisé.",
          ],
        },
        {
          titre: "3. Ce qu'une estimation ne garantit pas",
          corps: [
            "Une estimation n'est pas un devis. Le prix réellement porté au compteur dépend de l'itinéraire suivi, des conditions de circulation, des temps d'attente et du tarif horaire au moment de la course. Les écarts sont normalement de l'ordre de quelques euros, et peuvent être plus élevés aux heures de forte circulation.",
            "Lorsqu'une course est réservée à prix fixe via TaxiNeo, c'est ce prix fixe qui fait foi, et non l'estimation affichée sur les pages du site.",
          ],
        },
        {
          titre: "4. Fréquence de mise à jour",
          corps: [
            "Les tarifs nationaux sont révisés chaque année, en général en février. Nous reprenons l'arrêté dans le mois qui suit sa publication, et les arrêtés préfectoraux au fil de leur parution. Chaque page porte la date de sa dernière mise à jour, qui correspond à la dernière modification réelle de son contenu ou de ses données, jamais à la date du jour.",
          ],
        },
        {
          titre: "5. Correction des erreurs",
          corps: [
            "Si un tarif affiché vous paraît faux, écrivez à contact@taxineo.fr en indiquant la ville et la page concernée. Nous vérifions contre le texte applicable et corrigeons, ou expliquons l'écart. La correction est appliquée à toutes les pages qui reprennent la même donnée.",
          ],
        },
      ]
    : [
        {
          titre: "1. Where the fares come from",
          corps: [
            "Taxi fares in France are not set freely: they are capped each year by an order published in the Journal officiel, then set out department by department by a prefectoral order. The amounts TaxiNeo uses come from these two texts, completed by the flat-rate grids published by the airports and stations that operate them.",
            "No fare is invented or extrapolated from one city to another: a city for which we have no applicable text shows a range explicitly presented as indicative.",
          ],
        },
        {
          titre: "2. How an estimate is calculated",
          corps: [
            "An estimate adds the pick-up charge, the per-kilometre price applicable to the ride and, where relevant, the supplements set by the order (luggage, extra passenger, booking). The per-kilometre price depends on the time-of-day band and on the direction of the ride: an empty return leg is billed at the higher so-called return rate.",
            "Distance and duration come from road routing between the two addresses entered, at the requested time. Actual traffic on the day is not modelled.",
          ],
        },
        {
          titre: "3. What an estimate does not guarantee",
          corps: [
            "An estimate is not a quote. The price actually shown on the meter depends on the route taken, traffic conditions, waiting time and the rate band at the time of the ride. Differences are normally a few euros, and can be larger at peak hours.",
            "When a ride is booked at a fixed price through TaxiNeo, that fixed price is what counts, not the estimate shown on the site's pages.",
          ],
        },
        {
          titre: "4. Update frequency",
          corps: [
            "National fares are revised every year, usually in February. We take the order into account within the month following its publication, and prefectoral orders as they appear. Each page carries the date of its last update, which matches the last real change to its content or data, never today's date.",
          ],
        },
        {
          titre: "5. Correcting mistakes",
          corps: [
            "If a fare shown looks wrong to you, write to contact@taxineo.fr naming the city and the page. We check it against the applicable text and correct it, or explain the difference. The correction is applied to every page using the same data.",
          ],
        },
      ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
            {isFr ? "Méthodologie" : "Methodology"}
          </h1>
          {/* §8.4 : la date de mise à jour se lit juste sous le titre. */}
          <LigneMaj />

          {sections.map((s) => (
            <section key={s.titre} className="mb-10">
              <h2 className="text-xl font-semibold mb-3">{s.titre}</h2>
              <div className="text-sm text-neutral-600 font-light leading-relaxed space-y-3">
                {s.corps.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">
              {isFr ? "Sources officielles" : "Official sources"}
            </h2>
            <ul className="text-sm text-neutral-600 font-light leading-relaxed space-y-2 list-disc pl-5">
              <li>
                <a className="underline" href="https://www.legifrance.gouv.fr/" rel="noopener">
                  Légifrance
                </a>{" "}
                — {isFr ? "arrêtés annuels relatifs aux tarifs des courses de taxi" : "annual orders on taxi fares"}
              </li>
              <li>
                <a className="underline" href="https://www.economie.gouv.fr/dgccrf" rel="noopener">
                  DGCCRF
                </a>{" "}
                — {isFr ? "réglementation des prix et information du consommateur" : "price regulation and consumer information"}
              </li>
              <li>
                <a className="underline" href="https://www.service-public.fr/particuliers/vosdroits/F2287" rel="noopener">
                  Service-Public.fr
                </a>{" "}
                — {isFr ? "droits du passager et règles de facturation" : "passenger rights and billing rules"}
              </li>
            </ul>
          </section>

          <p className="text-xs text-neutral-500 font-light mt-8">
            {isFr ? "Dernière mise à jour : " : "Last updated: "}
            <time dateTime={MAJ}>{dateLisible}</time>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
