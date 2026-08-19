import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";
import { blogArticles } from "@/data/blog";
import { trajets } from "@/data/trajets";
import { tarifs } from "@/data/tarifs";
import { services } from "@/data/services-seo";
import { guides } from "@/data/guides";
import { taxiMedicalCities } from "@/data/taxi-medical-cities";
import { activeTrajetSlugs } from "@/data/trajet-whitelist";
import { activeCitySlugs, activeGareSlugs, activeAeroportSlugs, activeTmSlugs, activeServiceSlugs } from "@/data/page-whitelists";

/** Last significant deployment date — update when publishing major content changes */
const LAST_MODIFIED = new Date("2025-07-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taxineo.fr";

  function localizedUrls(path: string): { url: string; alternates: { languages: Record<string, string> } } {
    const frUrl = `${baseUrl}${path === "/" ? "" : path}`;
    const enUrl = `${baseUrl}/en${path === "/" ? "" : path}`;
    return {
      url: frUrl,
      alternates: {
        languages: {
          fr: frUrl,
          en: enUrl,
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
    // Directories
    { ...localizedUrls("/villes"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/aeroports"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/gares"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/blog"), lastModified: LAST_MODIFIED, changeFrequency: "weekly", priority: 0.7 },
    { ...localizedUrls("/trajets"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/tarifs"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/services"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/guides"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    // Solutions
    { ...localizedUrls("/solutions/particulier"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/taxi-medical"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.7 },
    // SEO content pages
    { ...localizedUrls("/taxi-vs-vtc"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/chauffeur-prive"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/alternative-vtc-prix-fixe"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.6 },
    // Auth pages
    { ...localizedUrls("/inscription"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.5 },
    { ...localizedUrls("/connexion"), lastModified: LAST_MODIFIED, changeFrequency: "monthly", priority: 0.4 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities
    .filter((city) => activeCitySlugs.has(city.slug))
    .map((city) => ({
      ...localizedUrls(`/taxi-${city.slug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const airportPages: MetadataRoute.Sitemap = airports
    .filter((ap) => activeAeroportSlugs.has(ap.slug))
    .map((ap) => ({
      ...localizedUrls(`/aeroport/${ap.slug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const stationPages: MetadataRoute.Sitemap = stations
    .filter((st) => activeGareSlugs.has(st.slug))
    .map((st) => ({
      ...localizedUrls(`/gare/${st.slug}`),
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

  const trajetPages: MetadataRoute.Sitemap = trajets
    .filter((trajet) => activeTrajetSlugs.has(trajet.slug))
    .map((trajet) => ({
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

  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => activeServiceSlugs.has(s.slug))
    .map((s) => ({
      ...localizedUrls(`/service/${s.slug}`),
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

  const tmPages: MetadataRoute.Sitemap = taxiMedicalCities
    .filter((tm) => activeTmSlugs.has(tm.citySlug))
    .map((tm) => ({
      ...localizedUrls(`/taxi-medical/${tm.citySlug}`),
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return [...staticPages, ...cityPages, ...airportPages, ...stationPages, ...blogPages, ...trajetPages, ...tarifPages, ...servicePages, ...guidePages, ...tmPages];
}
