import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";
import { blogArticles } from "@/data/blog";

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
    { ...localizedUrls("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { ...localizedUrls("/comment-ca-marche"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/contact"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/devenir-chauffeur"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/taxi-partage"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // Directories
    { ...localizedUrls("/villes"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/aeroports"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/gares"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/blog"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    // Solutions
    { ...localizedUrls("/solutions/hotel"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/hopital"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/entreprise"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/particulier"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/mise-a-disposition"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/assistance"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // SEO content pages
    { ...localizedUrls("/taxi-vs-vtc"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/chauffeur-prive"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/alternative-vtc-prix-fixe"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/mise-a-disposition-chauffeur"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    // Auth pages
    { ...localizedUrls("/inscription"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { ...localizedUrls("/connexion"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    ...localizedUrls(`/taxi-${city.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const airportPages: MetadataRoute.Sitemap = airports.map((ap) => ({
    ...localizedUrls(`/taxi-aeroport-${ap.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const stationPages: MetadataRoute.Sitemap = stations.map((st) => ({
    ...localizedUrls(`/taxi-gare-${st.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    ...localizedUrls(`/blog/${article.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...airportPages, ...stationPages, ...blogPages];
}
