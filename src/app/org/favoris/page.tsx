"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface FavoriteDriver {
  id: string;
  driver: {
    id: string;
    firstName: string;
    lastName: string;
    slug: string;
    vehicleBrand?: string | null;
    vehicleModel?: string | null;
    zoneAddress?: string | null;
    phone: string;
  };
}

interface SearchResult {
  id: string;
  firstName: string;
  lastName: string;
  slug: string;
  vehicleBrand?: string | null;
  vehicleModel?: string | null;
  zoneAddress?: string | null;
}

export default function FavorisPage() {
  const [favorites, setFavorites] = useState<FavoriteDriver[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  async function loadFavorites() {
    try {
      const res = await fetch("/api/org/favorites");
      const data = await res.json();
      setFavorites(data.favorites || []);
    } catch {
      // Silently fail
    } finally {
      setLoading(false);
    }
  }

  async function searchDrivers() {
    if (!searchQuery.trim()) return;
    setSearching(true);
    try {
      const res = await fetch(`/api/taxis?q=${encodeURIComponent(searchQuery)}`);
      const data = await res.json();
      // Filter out already-favorited drivers
      const favIds = new Set(favorites.map((f) => f.driver.id));
      setSearchResults((data.drivers || []).filter((d: SearchResult) => !favIds.has(d.id)));
    } catch {
      // Silently fail
    } finally {
      setSearching(false);
    }
  }

  async function addFavorite(driverId: string) {
    try {
      const res = await fetch("/api/org/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverId }),
      });
      if (res.ok) {
        setSearchResults((prev) => prev.filter((d) => d.id !== driverId));
        loadFavorites();
      }
    } catch {
      // Silently fail
    }
  }

  async function removeFavorite(favoriteId: string) {
    try {
      const res = await fetch(`/api/org/favorites?id=${favoriteId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setFavorites((prev) => prev.filter((f) => f.id !== favoriteId));
      }
    } catch {
      // Silently fail
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Icon icon="solar:refresh-linear" className="text-2xl animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Chauffeurs favoris</h1>
        <p className="text-sm text-neutral-500 mt-1">Gérez vos chauffeurs préférés pour les réservations rapides</p>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-5 mb-6">
        <h2 className="font-medium mb-3">Ajouter un chauffeur</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searchDrivers()}
            placeholder="Rechercher par nom ou zone..."
            className="flex-1 bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
          <button
            onClick={searchDrivers}
            disabled={searching}
            className="bg-neutral-900 text-white px-5 py-3 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {searching ? "..." : "Rechercher"}
          </button>
        </div>

        {searchResults.length > 0 && (
          <div className="mt-4 space-y-2">
            {searchResults.map((d) => (
              <div
                key={d.id}
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 hover:bg-neutral-50"
              >
                <div>
                  <p className="text-sm font-medium">{d.firstName} {d.lastName}</p>
                  <p className="text-xs text-neutral-500">
                    {d.vehicleBrand} {d.vehicleModel}
                    {d.zoneAddress && ` · ${d.zoneAddress}`}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/taxi/${d.slug}`}
                    target="_blank"
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                    title="Voir le profil"
                  >
                    <Icon icon="solar:eye-linear" className="text-lg" />
                  </Link>
                  <button
                    onClick={() => addFavorite(d.id)}
                    className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Favorites list */}
      <div className="bg-white rounded-2xl border border-neutral-200">
        <div className="p-5 border-b border-neutral-100">
          <h2 className="font-medium">Vos favoris ({favorites.length})</h2>
        </div>
        {favorites.length === 0 ? (
          <div className="p-8 text-center text-sm text-neutral-500">
            Aucun chauffeur favori pour le moment
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {favorites.map((fav) => (
              <div key={fav.id} className="flex items-center justify-between p-4 px-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                    <Icon icon="solar:user-linear" className="text-neutral-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {fav.driver.firstName} {fav.driver.lastName}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {fav.driver.vehicleBrand} {fav.driver.vehicleModel}
                      {fav.driver.zoneAddress && ` · ${fav.driver.zoneAddress}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/taxi/${fav.driver.slug}`}
                    target="_blank"
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
                    title="Voir le profil"
                  >
                    <Icon icon="solar:eye-linear" className="text-lg" />
                  </Link>
                  <button
                    onClick={() => removeFavorite(fav.id)}
                    className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer des favoris"
                  >
                    <Icon icon="solar:trash-bin-minimalistic-linear" className="text-lg" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
