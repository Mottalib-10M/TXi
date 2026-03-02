import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { airports } from "@/data/airports";
import { stations } from "@/data/stations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.taxinoir.fr";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/inscription`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/connexion`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/villes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/aeroports`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/gares`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/taxi-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const airportPages: MetadataRoute.Sitemap = airports.map((ap) => ({
    url: `${baseUrl}/taxi-aeroport-${ap.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const stationPages: MetadataRoute.Sitemap = stations.map((st) => ({
    url: `${baseUrl}/taxi-gare-${st.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...airportPages, ...stationPages];
}
