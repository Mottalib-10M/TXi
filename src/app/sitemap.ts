import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";

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
    { ...localizedUrls("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { ...localizedUrls("/inscription"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/connexion"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { ...localizedUrls("/villes"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/aeroports"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/gares"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
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

  return [...staticPages, ...cityPages, ...airportPages, ...stationPages];
}
