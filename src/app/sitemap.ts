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
import { dateDePage } from "@/lib/page-date";
import { activeCitySlugs, activeGareSlugs, activeAeroportSlugs, activeTmSlugs, activeServiceSlugs } from "@/data/page-whitelists";

/** Date de repli, si l'historique ne date pas une route. */
const LAST_MODIFIED = new Date("2025-07-28");

/**
 * §8.4 (2026-10-15) : la date du plan du site est celle que la page affiche
 * en pied et dans `dateModified` (page-dates.json, tirée de l'historique git).
 */
function majDe(path: string): Date {
  const iso = dateDePage(path);
  return iso ? new Date(`${iso}T00:00:00Z`) : LAST_MODIFIED;
}

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
    { ...localizedUrls("/"), lastModified: majDe("/"), changeFrequency: "weekly", priority: 1 },
    { ...localizedUrls("/comment-ca-marche"), lastModified: majDe("/comment-ca-marche"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/contact"), lastModified: majDe("/contact"), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/devenir-chauffeur"), lastModified: majDe("/devenir-chauffeur"), changeFrequency: "monthly", priority: 0.7 },
    // Directories
    { ...localizedUrls("/villes"), lastModified: majDe("/villes"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/aeroports"), lastModified: majDe("/aeroports"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/gares"), lastModified: majDe("/gares"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/blog"), lastModified: majDe("/blog"), changeFrequency: "weekly", priority: 0.7 },
    { ...localizedUrls("/trajets"), lastModified: majDe("/trajets"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/tarifs"), lastModified: majDe("/tarifs"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/services"), lastModified: majDe("/services"), changeFrequency: "monthly", priority: 0.7 },
    { ...localizedUrls("/guides"), lastModified: majDe("/guides"), changeFrequency: "monthly", priority: 0.7 },
    // Solutions
    { ...localizedUrls("/solutions/particulier"), lastModified: majDe("/solutions/particulier"), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/solutions/taxi-medical"), lastModified: majDe("/solutions/taxi-medical"), changeFrequency: "monthly", priority: 0.7 },
    // SEO content pages
    { ...localizedUrls("/taxi-vs-vtc"), lastModified: majDe("/taxi-vs-vtc"), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/chauffeur-prive"), lastModified: majDe("/chauffeur-prive"), changeFrequency: "monthly", priority: 0.6 },
    { ...localizedUrls("/alternative-vtc-prix-fixe"), lastModified: majDe("/alternative-vtc-prix-fixe"), changeFrequency: "monthly", priority: 0.6 },
    // Pages de confiance
    { ...localizedUrls("/a-propos"), lastModified: majDe("/a-propos"), changeFrequency: "monthly", priority: 0.5 },
    { ...localizedUrls("/mentions-legales"), lastModified: majDe("/mentions-legales"), changeFrequency: "yearly", priority: 0.3 },
    { ...localizedUrls("/confidentialite"), lastModified: majDe("/confidentialite"), changeFrequency: "yearly", priority: 0.3 },
    { ...localizedUrls("/widget"), lastModified: majDe("/widget"), changeFrequency: "monthly", priority: 0.4 },
    { ...localizedUrls("/methodologie"), lastModified: majDe("/methodologie"), changeFrequency: "monthly", priority: 0.5 },
    // Les pages de connexion et d'inscription sont en noindex (§11) :
    // elles n'ont pas à figurer dans le plan du site.
  ];

  const cityPages: MetadataRoute.Sitemap = cities
    .filter((city) => activeCitySlugs.has(city.slug))
    .map((city) => ({
      ...localizedUrls(`/taxi-${city.slug}`),
      lastModified: majDe(`/taxi-${city.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const airportPages: MetadataRoute.Sitemap = airports
    .filter((ap) => activeAeroportSlugs.has(ap.slug))
    .map((ap) => ({
      ...localizedUrls(`/aeroport/${ap.slug}`),
      lastModified: majDe(`/aeroport/${ap.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const stationPages: MetadataRoute.Sitemap = stations
    .filter((st) => activeGareSlugs.has(st.slug))
    .map((st) => ({
      ...localizedUrls(`/gare/${st.slug}`),
      lastModified: majDe(`/gare/${st.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map((article) => ({
    ...localizedUrls(`/blog/${article.slug}`),
    lastModified: majDe(`/blog/${article.slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const trajetPages: MetadataRoute.Sitemap = trajets
    .filter((trajet) => activeTrajetSlugs.has(trajet.slug))
    .map((trajet) => ({
      ...localizedUrls(`/trajet/${trajet.slug}`),
      lastModified: majDe(`/trajet/${trajet.slug}`),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const tarifPages: MetadataRoute.Sitemap = tarifs.map((tarif) => ({
    ...localizedUrls(`/tarif/${tarif.slug}`),
    lastModified: majDe(`/tarif/${tarif.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services
    .filter((s) => activeServiceSlugs.has(s.slug))
    .map((s) => ({
      ...localizedUrls(`/service/${s.slug}`),
      lastModified: majDe(`/service/${s.slug}`),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    ...localizedUrls(`/guide/${g.slug}`),
    lastModified: majDe(`/guide/${g.slug}`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const tmPages: MetadataRoute.Sitemap = taxiMedicalCities
    .filter((tm) => activeTmSlugs.has(tm.citySlug))
    .map((tm) => ({
      ...localizedUrls(`/taxi-medical/${tm.citySlug}`),
      lastModified: majDe(`/taxi-medical/${tm.citySlug}`),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  // Une entree par langue : les pages anglaises sont indexables, elles doivent
  // figurer en <loc> et pas seulement en variante. Doublons retires (certains
  // trajets sont listes deux fois dans les donnees).
  const vues = new Set<string>();
  return [...staticPages, ...cityPages, ...airportPages, ...stationPages, ...blogPages, ...trajetPages, ...tarifPages, ...servicePages, ...guidePages, ...tmPages]
    .flatMap((entry) => {
      const en = entry.alternates?.languages?.en;
      return en ? [entry, { ...entry, url: en }] : [entry];
    })
    .filter((entry) => (vues.has(entry.url) ? false : (vues.add(entry.url), true)));
}
