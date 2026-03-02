"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";

const regions = [
  { name: "Hauts-de-France", slugs: ["lille", "amiens", "dunkerque", "calais"] },
  { name: "Île-de-France", slugs: ["paris", "argenteuil", "versailles"] },
  { name: "Normandie", slugs: ["le-havre", "rouen", "caen"] },
  { name: "Grand Est", slugs: ["strasbourg", "reims", "metz", "mulhouse", "nancy", "colmar"] },
  { name: "Bretagne", slugs: ["rennes", "brest"] },
  { name: "Pays de la Loire", slugs: ["nantes", "angers", "le-mans"] },
  { name: "Centre-Val de Loire", slugs: ["tours", "orleans"] },
  { name: "Bourgogne-Franche-Comté", slugs: ["dijon", "besancon"] },
  { name: "Nouvelle-Aquitaine", slugs: ["bordeaux", "limoges", "poitiers", "pau", "la-rochelle", "bayonne"] },
  { name: "Auvergne-Rhône-Alpes", slugs: ["lyon", "saint-etienne", "grenoble", "villeurbanne", "clermont-ferrand", "annecy", "chambery", "valence"] },
  { name: "Occitanie", slugs: ["toulouse", "montpellier", "nimes", "perpignan"] },
  { name: "Provence-Alpes-Côte d'Azur", slugs: ["marseille", "nice", "toulon", "aix-en-provence", "avignon", "cannes", "antibes"] },
];

function latLngToSvg(lat: number, lng: number): [number, number] {
  return [
    30 + ((lng + 5.1) / 13.3) * 440,
    30 + ((51.1 - lat) / 8.8) * 490,
  ];
}

const franceOutline =
  "277,33 251,39 233,97 202,119 145,109 136,166 50,178 60,211 106,222 119,243 124,258 161,305 164,336 159,389 146,454 140,461 176,486 222,500 268,512 300,498 321,459 377,466 395,475 422,456 447,439 448,417 422,370 427,322 402,303 425,258 448,228 457,170 462,144 430,133 409,116 357,86 329,75 300,55";

export function FranceMapSection() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const cityRegionMap = new Map<string, string>();
  regions.forEach((r) => r.slugs.forEach((s) => cityRegionMap.set(s, r.name)));

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Map */}
      <div className="lg:sticky lg:top-28">
        <div
          className="bg-neutral-50 border border-neutral-200 rounded-3xl p-6 md:p-8 relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        >
          <svg viewBox="0 0 500 550" className="w-full h-auto relative z-10">
            <polygon
              points={franceOutline}
              fill="white"
              stroke="#d4d4d4"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {cities.map((city) => {
              const [cx, cy] = latLngToSvg(city.lat, city.lng);
              const region = cityRegionMap.get(city.slug);
              const isHighlighted = activeRegion === null || activeRegion === region;
              const isActiveRegion = activeRegion === region;

              return (
                <g
                  key={city.slug}
                  className="cursor-pointer"
                  onClick={() => router.push(`/taxi-${city.slug}`)}
                >
                  {isActiveRegion && (
                    <circle cx={cx} cy={cy} r={14} fill="#171717" opacity={0.06} />
                  )}
                  {/* Zone de clic élargie invisible */}
                  <circle cx={cx} cy={cy} r={12} fill="transparent" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isActiveRegion ? 5.5 : 4}
                    fill={isHighlighted ? "#171717" : "#d4d4d4"}
                    stroke="white"
                    strokeWidth="1.5"
                    className="transition-all duration-300"
                  />
                  {isActiveRegion && (
                    <text
                      x={cx}
                      y={cy - 12}
                      textAnchor="middle"
                      fontSize="10"
                      fill="#404040"
                      fontWeight="500"
                      className="pointer-events-none select-none"
                    >
                      {city.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Regions list */}
      <div className="space-y-3">
        {regions.map((region) => {
          const isActive = activeRegion === region.name;
          const totalDrivers = region.slugs.reduce((sum, slug) => {
            const city = cities.find((c) => c.slug === slug);
            return sum + (city?.driverCount || 0);
          }, 0);

          return (
            <div
              key={region.name}
              className={`border rounded-2xl p-5 transition-all duration-200 ${
                isActive
                  ? "bg-neutral-950 border-neutral-950 shadow-xl shadow-neutral-950/10"
                  : "bg-white border-neutral-200 hover:border-neutral-300"
              }`}
              onMouseEnter={() => setActiveRegion(region.name)}
              onMouseLeave={() => setActiveRegion(null)}
              onClick={() => setActiveRegion(isActive ? null : region.name)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3
                  className={`text-sm font-medium tracking-tight ${
                    isActive ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {region.name}
                </h3>
                <span
                  className={`text-xs font-light ${
                    isActive ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {region.slugs.length} ville{region.slugs.length > 1 ? "s" : ""} · {totalDrivers.toLocaleString("fr-FR")}+ chauffeurs
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.slugs.map((slug) => {
                  const city = cities.find((c) => c.slug === slug);
                  if (!city) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/taxi-${slug}`}
                      className={`text-xs font-light rounded-full px-3 py-1.5 transition-colors ${
                        isActive
                          ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                          : "bg-neutral-50 text-neutral-500 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-400"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {city.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
