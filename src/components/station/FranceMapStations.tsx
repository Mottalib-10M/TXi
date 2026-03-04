"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { stations } from "@/data/stations";

const regions = [
  { name: "Île-de-France", slugs: ["paris-gare-du-nord", "paris-gare-de-lyon", "paris-saint-lazare", "paris-montparnasse", "paris-gare-de-l-est", "paris-gare-d-austerlitz", "paris-gare-de-bercy", "marne-la-vallee-chessy", "versailles-chantiers"] },
  { name: "Hauts-de-France", slugs: ["lille-flandres", "lille-europe", "amiens"] },
  { name: "Normandie", slugs: ["rouen-rive-droite", "caen"] },
  { name: "Grand Est", slugs: ["strasbourg", "reims", "metz", "nancy", "mulhouse-ville"] },
  { name: "Bretagne", slugs: ["rennes"] },
  { name: "Pays de la Loire", slugs: ["nantes", "angers-saint-laud", "le-mans"] },
  { name: "Centre-Val de Loire", slugs: ["tours", "orleans"] },
  { name: "Bourgogne-Franche-Comté", slugs: ["dijon-ville", "besancon-viotte"] },
  { name: "Nouvelle-Aquitaine", slugs: ["bordeaux-saint-jean", "limoges-benedictins", "poitiers", "pau", "la-rochelle-ville", "bayonne"] },
  { name: "Auvergne-Rhône-Alpes", slugs: ["lyon-part-dieu", "lyon-perrache", "lyon-saint-exupery-tgv", "grenoble", "saint-etienne-chateaucreux", "clermont-ferrand", "chambery", "valence-tgv"] },
  { name: "Occitanie", slugs: ["toulouse-matabiau", "montpellier-saint-roch", "perpignan"] },
  { name: "Provence-Alpes-Côte d'Azur", slugs: ["marseille-saint-charles", "nice-ville", "toulon", "avignon-tgv", "aix-en-provence-tgv", "cannes"] },
];

function latLngToSvg(lat: number, lng: number): [number, number] {
  return [
    30 + ((lng + 5.1) / 13.3) * 440,
    30 + ((51.1 - lat) / 8.8) * 490,
  ];
}

const franceOutline =
  "277,33 251,39 233,97 202,119 145,109 136,166 50,178 60,211 106,222 119,243 124,258 161,305 164,336 159,389 146,454 140,461 176,486 222,500 268,512 300,498 321,459 377,466 395,475 422,456 447,439 448,417 422,370 427,322 402,303 425,258 448,228 457,170 462,144 430,133 409,116 357,86 329,75 300,55";

export function FranceMapStations() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const stationRegionMap = new Map<string, string>();
  regions.forEach((r) => r.slugs.forEach((s) => stationRegionMap.set(s, r.name)));

  // Gérer les gares proches (Paris, Lyon, Lille) : décaler légèrement les labels
  const stationCount = new Map<string, number>();

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

            {stations.map((st) => {
              const [cx, cy] = latLngToSvg(st.lat, st.lng);
              const region = stationRegionMap.get(st.slug);
              const isHighlighted = activeRegion === null || activeRegion === region;
              const isActiveRegion = activeRegion === region;

              // Décaler les gares qui se superposent
              const key = `${Math.round(cx)},${Math.round(cy)}`;
              const count = stationCount.get(key) || 0;
              stationCount.set(key, count + 1);
              const offsetX = count * 8;

              return (
                <g
                  key={st.slug}
                  className="cursor-pointer"
                  onClick={() => router.push(`/taxi-gare-${st.slug}`)}
                >
                  {isActiveRegion && (
                    <circle cx={cx + offsetX} cy={cy} r={14} fill="#171717" opacity={0.06} />
                  )}
                  <circle cx={cx + offsetX} cy={cy} r={12} fill="transparent" />
                  <text
                    x={cx + offsetX}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={isActiveRegion ? 14 : 11}
                    fill={isHighlighted ? "#171717" : "#d4d4d4"}
                    className="transition-all duration-300 pointer-events-none select-none"
                  >
                    🚆
                  </text>
                  {isActiveRegion && (
                    <text
                      x={cx + offsetX}
                      y={cy - 12}
                      textAnchor="middle"
                      fontSize="8"
                      fill="#404040"
                      fontWeight="500"
                      className="pointer-events-none select-none"
                    >
                      {st.name}
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
                  className={`text-sm font-medium tracking-tight flex items-center gap-2 ${
                    isActive ? "text-white" : "text-neutral-900"
                  }`}
                >
                  <Icon icon="solar:train-linear" className={`text-base ${isActive ? "text-neutral-400" : "text-neutral-400"}`} />
                  {region.name}
                </h3>
                <span
                  className={`text-xs font-light ${
                    isActive ? "text-neutral-500" : "text-neutral-400"
                  }`}
                >
                  {region.slugs.length} gare{region.slugs.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {region.slugs.map((slug) => {
                  const st = stations.find((s) => s.slug === slug);
                  if (!st) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/taxi-gare-${slug}`}
                      className={`text-xs font-light rounded-full px-3 py-1.5 transition-colors ${
                        isActive
                          ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                          : "bg-neutral-50 text-neutral-500 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-400"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Gare {st.name}
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
