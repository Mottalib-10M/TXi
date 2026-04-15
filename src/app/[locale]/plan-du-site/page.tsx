import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { getTranslations } from "next-intl/server";
import { trajets, categoryLabels } from "@/data/trajets";
import { tarifs } from "@/data/tarifs";
import { guides } from "@/data/guides";
import { departements } from "@/data/departements";
import { services as servicesSeo } from "@/data/services-seo";
import { blogArticles } from "@/data/blog";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "planDuSite" });

  const canonical = `https://www.taxineo.fr/${locale}/plan-du-site`;
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
    },
    alternates: { canonical },
  };
}

export default async function PlanDuSitePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "planDuSite" });

  const solutions = [
    { href: "/solutions/hotel", label: "Taxi pour hôtels" },
    { href: "/solutions/hopital", label: "Taxi pour hôpitaux" },
    { href: "/solutions/entreprise", label: "Taxi pour entreprises" },
    { href: "/solutions/particulier", label: "Taxi pour particuliers" },
    { href: "/solutions/mise-a-disposition", label: "Mise à disposition" },
    { href: "/solutions/assistance", label: "Assistance & Dépannage" },
  ];

  const pages = [
    { href: "/", label: "Accueil" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/contact", label: "Contact" },
    { href: "/devenir-chauffeur", label: "Devenir chauffeur" },
    { href: "/blog", label: "Blog" },
    { href: "/taxi-vs-vtc", label: "Taxi vs VTC" },
    { href: "/chauffeur-prive", label: "Chauffeur privé" },
    { href: "/alternative-vtc-prix-fixe", label: "Alternative VTC prix fixe" },
    { href: "/mise-a-disposition-chauffeur", label: "Taxi à disposition" },
  ];

  // Group trajets by category
  const trajetsByCategory = Object.entries(categoryLabels).map(([cat, labels]) => ({
    category: cat,
    label: locale === "fr" ? labels.fr : labels.en,
    items: trajets.filter((t) => t.category === cat),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 fade-up">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              {t("title")}
            </h1>
            <p className="text-neutral-500 font-light">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Pages */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">{t("sectionPages")}</h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="hover:text-neutral-900 transition-colors">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">{t("sectionSolutions")}</h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {solutions.map((sol) => (
                  <li key={sol.href}>
                    <Link href={sol.href} className="hover:text-neutral-900 transition-colors">
                      {sol.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tarifs */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/tarifs" className="hover:text-neutral-600 transition-colors">
                  {t("sectionTarifs")} ({tarifs.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {tarifs.map((tarif) => (
                  <li key={tarif.slug}>
                    <Link href={`/tarif/${tarif.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {tarif.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/guides" className="hover:text-neutral-600 transition-colors">
                  {t("sectionGuides")} ({guides.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {guides.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guide/${guide.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Départements */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/departements" className="hover:text-neutral-600 transition-colors">
                  {t("sectionDepartements")} ({departements.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {departements.map((dept) => (
                  <li key={dept.slug}>
                    <Link href={`/departement/${dept.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {dept.name} ({dept.code})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/services" className="hover:text-neutral-600 transition-colors">
                  {t("sectionServices")} ({servicesSeo.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {servicesSeo.map((svc) => (
                  <li key={svc.slug}>
                    <Link href={`/service/${svc.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Villes */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/villes" className="hover:text-neutral-600 transition-colors">
                  {t("sectionVilles")} ({cities.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light columns-2">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/taxi-${city.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aéroports */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/aeroports" className="hover:text-neutral-600 transition-colors">
                  {t("sectionAeroports")} ({airports.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {airports.map((ap) => (
                  <li key={ap.slug}>
                    <Link href={`/taxi-aeroport-${ap.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {ap.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gares */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/gares" className="hover:text-neutral-600 transition-colors">
                  {t("sectionGares")} ({stations.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {stations.map((st) => (
                  <li key={st.slug}>
                    <Link href={`/taxi-gare-${st.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {st.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div className="fade-up">
              <h2 className="text-lg font-semibold mb-4 tracking-tight">
                <Link href="/blog" className="hover:text-neutral-600 transition-colors">
                  {t("sectionBlog")} ({blogArticles.length})
                </Link>
              </h2>
              <ul className="space-y-2 text-sm text-neutral-600 font-light">
                {blogArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/blog/${article.slug}` as never} className="hover:text-neutral-900 transition-colors">
                      {article.title[locale as "fr" | "en"]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trajets - Full listing grouped by category */}
          <div className="mt-16 fade-up">
            <h2 className="text-2xl font-semibold mb-8 tracking-tight">
              <Link href="/trajets" className="hover:text-neutral-600 transition-colors">
                {t("sectionTrajets")} ({trajets.length})
              </Link>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {trajetsByCategory
                .filter((g) => g.items.length > 0)
                .map((group) => (
                  <div key={group.category}>
                    <h3 className="text-base font-medium mb-3 text-neutral-800">
                      {group.label} ({group.items.length})
                    </h3>
                    <ul className="space-y-1.5 text-sm text-neutral-600 font-light">
                      {group.items.map((trajet) => (
                        <li key={trajet.slug}>
                          <Link
                            href={`/trajet/${trajet.slug}` as never}
                            className="hover:text-neutral-900 transition-colors"
                          >
                            {trajet.from} → {trajet.to}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
