import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";
import { blogArticles } from "@/data/blog";
import { trajets } from "@/data/trajets";
import { tarifs } from "@/data/tarifs";
import { services } from "@/data/services-seo";
import { departements } from "@/data/departements";
import { guides } from "@/data/guides";
import { madCities } from "@/data/mad-cities";
import { taxiMedicalCities } from "@/data/taxi-medical-cities";
import { assistanceCities } from "@/data/assistance-cities";
import { autoroutes } from "@/data/autoroutes";

/** Last significant deployment date — update when publishing major content changes */
const LAST_MODIFIED = new Date("2025-06-01");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taxineo.fr";

  function localizedUrls(path: string): { url: string; alternates: { languages: Record<string, string> } } {
    const frPath = path === "/" ? "/fr" : `/fr${path}`;
    const enPath = path === "/" ? "/en" : `/en${path}`;
    return {
      url: `${baseUrl}${frPath}`,
      alternates: {
        languages: {
          fr: `${baseUrl}${frPath}`,
          en: `${baseUrl}${enPath}`,
        },
      },
    };
  }

  const staticPages: MetadataRoute.Sitemap = [
    // Core pages
    { ...localizedUrls("/"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 1 },
    { ...localizedUrls("/comment-ca-marche"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/contact"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/devenir-chauffeur"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/taxi-partage"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    // Directories
    { ...localizedUrls("/villes"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/aeroports"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/gares"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/blog"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { ...localizedUrls("/trajets"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/tarifs"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/services"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/departements"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/guides"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    // Solutions
    { ...localizedUrls("/solutions/hotel"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/hopital"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/entreprise"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/particulier"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/mise-a-disposition"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/assistance"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/taxi-medical"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/solutions/assistance-depannage"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    // SEO content pages
    { ...localizedUrls("/taxi-vs-vtc"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/chauffeur-prive"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/alternative-vtc-prix-fixe"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    // Auth pages
    { ...localizedUrls("/inscription"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { ...localizedUrls("/connexion"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    ...localizedUrls(`/taxi-${city.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const airportPages: MetadataRoute.Sitemap = airports.map((ap) => ({
    ...localizedUrls(`/taxi-aeroport-${ap.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const stationPages: MetadataRoute.Sitemap = stations.map((st) => ({
    ...localizedUrls(`/taxi-gare-${st.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    ...localizedUrls(`/blog/${article.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const trajetPages: MetadataRoute.Sitemap = trajets.map((trajet) => ({
    ...localizedUrls(`/trajet/${trajet.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const tarifPages: MetadataRoute.Sitemap = tarifs.map((tarif) => ({
    ...localizedUrls(`/tarif/${tarif.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    ...localizedUrls(`/service/${s.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const departementPages: MetadataRoute.Sitemap = departements.map((d) => ({
    ...localizedUrls(`/departement/${d.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    ...localizedUrls(`/guide/${g.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const madPages: MetadataRoute.Sitemap = madCities.map((m) => ({
    ...localizedUrls(`/mise-a-disposition/${m.citySlug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const tmPages: MetadataRoute.Sitemap = taxiMedicalCities.map((tm) => ({
    ...localizedUrls(`/taxi-medical/${tm.citySlug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const assistancePages: MetadataRoute.Sitemap = assistanceCities.map((ad) => ({
    ...localizedUrls(`/assistance/${ad.citySlug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const autoroutePages: MetadataRoute.Sitemap = autoroutes.map((ar) => ({
    ...localizedUrls(`/autoroute/${ar.slug}`),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...cityPages, ...airportPages, ...stationPages, ...blogPages, ...trajetPages, ...tarifPages, ...servicePages, ...departementPages, ...guidePages, ...madPages, ...tmPages, ...assistancePages, ...autoroutePages];
}
