"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Link from "next/link";

interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  slug: string;
  vehicle: string | null;
  zone: string | null;
  isActive: boolean;
  isVerified: boolean;
  emailVerified: boolean;
  createdAt: string;
}

function extractCity(zone: string | null): string {
  if (!zone) return "Non renseignée";
  // "Nice - Côte d'Azur" → "Nice", "Paris 9e" → "Paris 9e", "Clermont-Ferrand, France" → "Clermont-Ferrand"
  return zone.split(/\s*[-,]\s*/)[0].trim() || "Non renseignée";
}

export function DriversTable({ drivers }: { drivers: Driver[] }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [updating, setUpdating] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [impersonating, setImpersonating] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return drivers.filter((d) => {
      const q = search.toLowerCase();
      return (
        d.firstName.toLowerCase().includes(q) ||
        d.lastName.toLowerCase().includes(q) ||
        d.email.toLowerCase().includes(q) ||
        (d.zone?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [drivers, search]);

  // Group by city
  const grouped = useMemo(() => {
    const map = new Map<string, Driver[]>();
    for (const d of filtered) {
      const city = extractCity(d.zone);
      if (!map.has(city)) map.set(city, []);
      map.get(city)!.push(d);
    }
    // Sort: cities with most drivers first, "Non renseignée" always last
    return Array.from(map.entries()).sort(([a, driversA], [b, driversB]) => {
      if (a === "Non renseignée") return 1;
      if (b === "Non renseignée") return -1;
      return driversB.length - driversA.length;
    });
  }, [filtered]);

  const cities = useMemo(() => grouped.map(([city]) => city), [grouped]);

  const displayedGroups = selectedCity
    ? grouped.filter(([city]) => city === selectedCity)
    : grouped;

  async function impersonate(driverId: string) {
    setImpersonating(driverId);
    try {
      const res = await fetch("/api/admin/impersonate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      if (res.ok) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setImpersonating(null);
    }
  }

  async function toggleField(driverId: string, field: "isActive" | "isVerified", value: boolean) {
    setUpdating(driverId);
    try {
      await fetch(`/api/admin/drivers/${driverId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setUpdating(null);
    }
  }

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Icon icon="solar:magnifer-linear" className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher par nom, email ou ville..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      {/* City filter pills */}
      {cities.length > 1 && (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCity(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              selectedCity === null
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            Toutes les villes
            <span className="ml-1.5 opacity-60">({filtered.length})</span>
          </button>
          {cities.map((city) => {
            const count = grouped.find(([c]) => c === city)?.[1].length || 0;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCity === city
                    ? "bg-neutral-900 text-white"
                    : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
                }`}
              >
                <Icon icon="solar:map-point-linear" className="text-sm" />
                {city}
                <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:user-cross-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">Aucun chauffeur trouvé</p>
        </div>
      ) : (
        <div className="space-y-8">
          {displayedGroups.map(([city, cityDrivers]) => (
            <div key={city}>
              {/* City header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-4 py-2">
                  <Icon
                    icon={city === "Non renseignée" ? "solar:map-point-wave-linear" : "solar:map-point-bold"}
                    className={city === "Non renseignée" ? "text-neutral-400" : "text-blue-500"}
                  />
                  <span className="text-sm font-semibold">{city}</span>
                  <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                    {cityDrivers.length}
                  </span>
                </div>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              {/* Drivers in this city */}
              <div className="space-y-3">
                {cityDrivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5"
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600 shrink-0">
                        {driver.firstName[0]}{driver.lastName[0]}
                      </div>
                      <p className="text-sm font-semibold">
                        {driver.firstName} {driver.lastName}
                      </p>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          driver.isActive
                            ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                            : "bg-neutral-100 text-neutral-500 ring-1 ring-neutral-200"
                        }`}
                      >
                        {driver.isActive ? "Actif" : "Inactif"}
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                          driver.emailVerified
                            ? "bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                            : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                        }`}
                      >
                        {driver.emailVerified ? "Email vérifié" : "Non vérifié"}
                      </span>
                      {driver.isVerified && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-violet-50 text-violet-700 ring-1 ring-violet-200">
                          Vérifié
                        </span>
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Icon icon="solar:letter-linear" className="text-neutral-400" />
                        {driver.email}
                      </span>
                      {driver.phone && (
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:phone-linear" className="text-neutral-400" />
                          {driver.phone}
                        </span>
                      )}
                      {driver.vehicle && (
                        <span className="flex items-center gap-1">
                          <Icon icon="mdi:car-outline" className="text-neutral-400" />
                          {driver.vehicle}
                        </span>
                      )}
                      {driver.zone && (
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:map-point-linear" className="text-neutral-400" />
                          {driver.zone}
                        </span>
                      )}
                      <span className="text-neutral-400">
                        Inscrit le {format(new Date(driver.createdAt), "dd MMM yyyy", { locale: fr })}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100">
                      <button
                        onClick={() => toggleField(driver.id, "isActive", !driver.isActive)}
                        disabled={updating === driver.id}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 ${
                          driver.isActive
                            ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            : "bg-green-50 text-green-700 hover:bg-green-100"
                        }`}
                      >
                        {driver.isActive ? "Désactiver" : "Activer"}
                      </button>
                      <button
                        onClick={() => toggleField(driver.id, "isVerified", !driver.isVerified)}
                        disabled={updating === driver.id}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50 ${
                          driver.isVerified
                            ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            : "bg-violet-50 text-violet-700 hover:bg-violet-100"
                        }`}
                      >
                        {driver.isVerified ? "Retirer vérification" : "Vérifier"}
                      </button>
                      <Link
                        href={`/taxi/${driver.slug}`}
                        target="_blank"
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1"
                      >
                        <Icon icon="solar:eye-linear" />
                        Page publique
                      </Link>
                      <button
                        onClick={() => impersonate(driver.id)}
                        disabled={impersonating === driver.id}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors flex items-center gap-1 disabled:opacity-50"
                      >
                        <Icon icon="solar:login-3-linear" />
                        {impersonating === driver.id ? "..." : "Se connecter en tant que"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
