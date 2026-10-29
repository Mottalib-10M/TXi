"use client";

// Réglages du Radar dans Moi › Notifications : interrupteur général, gares de la zone
// (allumées d'office), gares ajoutées hors zone, nombre d'alertes par jour.
// Enregistré tout de suite (src/app/api/driver/radar).

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

type Settings = {
  enabled: boolean;
  maxPerDay: number;
  zone: { uic: string; name: string; distanceKm: number; on: boolean }[];
  extra: { uic: string; name: string }[];
};

function Switch({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onClick}
      className={`w-11 h-6 shrink-0 rounded-full transition-colors relative ${on ? "bg-neutral-900" : "bg-neutral-200"}`}
    >
      <span className={`w-5 h-5 bg-white rounded-full shadow absolute left-0 top-0.5 transition-transform ${on ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

export function RadarSettings() {
  const t = useTranslations("radar.prefs");
  const [s, setS] = useState<Settings | null>(null);
  const [error, setError] = useState(false);
  const [adding, setAdding] = useState(false);
  const [q, setQ] = useState("");
  const [results, setResults] = useState<{ uic: string; name: string }[]>([]);

  useEffect(() => {
    fetch("/api/driver/radar").then((r) => (r.ok ? r.json() : null)).then(setS).catch(() => undefined);
  }, []);

  useEffect(() => {
    if (q.trim().length < 2) return setResults([]);
    const id = setTimeout(() => {
      fetch(`/api/driver/radar?q=${encodeURIComponent(q)}`).then((r) => r.json()).then((d) => setResults(d.stations ?? [])).catch(() => undefined);
    }, 200);
    return () => clearTimeout(id);
  }, [q]);

  async function save(patch: Record<string, unknown>, optimistic: Settings) {
    const before = s;
    setS(optimistic);
    setError(false);
    try {
      const res = await fetch("/api/driver/radar", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch) });
      if (!res.ok) throw new Error();
      setS(await res.json());
    } catch {
      setS(before);
      setError(true);
    }
  }

  if (!s) return null;
  const off = (zone: Settings["zone"]) => zone.filter((z) => !z.on).map((z) => z.uic);

  return (
    <div className="pt-4 mt-2 border-t border-neutral-100 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium">{t("title")}</p>
          <p className="text-xs text-neutral-500 font-light">{t("desc")}</p>
        </div>
        <Switch on={s.enabled} label={t("title")} onClick={() => save({ enabled: !s.enabled }, { ...s, enabled: !s.enabled })} />
      </div>

      {s.enabled && (
        <>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{t("zone")}</p>
            <p className="text-xs text-neutral-500 mt-0.5 mb-2">{t("zoneDesc")}</p>
            {s.zone.length === 0 ? (
              <p className="text-sm text-neutral-500">{t("noZone")}</p>
            ) : (
              <ul className="rounded-xl border border-neutral-200 divide-y divide-neutral-100">
                {s.zone.map((z) => (
                  <li key={z.uic} className="flex items-center justify-between gap-3 px-3 py-2.5">
                    <span className="min-w-0">
                      <span className={`block text-sm ${z.on ? "" : "text-neutral-500"}`}>{z.name}</span>
                      <span className="block text-xs text-neutral-500">{t("km", { km: z.distanceKm.toLocaleString("fr-FR") })}</span>
                    </span>
                    <Switch
                      on={z.on}
                      label={z.name}
                      onClick={() => {
                        const zone = s.zone.map((x) => (x.uic === z.uic ? { ...x, on: !x.on } : x));
                        save({ off: off(zone) }, { ...s, zone });
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {s.extra.length > 0 && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">{t("extra")}</p>
              <ul className="rounded-xl border border-neutral-200 divide-y divide-neutral-100">
                {s.extra.map((x) => (
                  <li key={x.uic} className="flex items-center justify-between gap-3 px-3 py-2.5">
                    <span className="text-sm">{x.name}</span>
                    <button
                      type="button"
                      className="text-xs text-neutral-500 hover:text-red-600"
                      onClick={() => {
                        const extra = s.extra.filter((e) => e.uic !== x.uic);
                        save({ extra: extra.map((e) => e.uic) }, { ...s, extra });
                      }}
                    >
                      {t("remove")}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {adding ? (
            <div className="space-y-1">
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t("search")}
                aria-label={t("search")}
                className="w-full rounded-xl bg-neutral-100 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-neutral-900"
              />
              {results.length > 0 && (
                <ul className="rounded-xl border border-neutral-200 divide-y divide-neutral-100">
                  {results.map((r) => (
                    <li key={r.uic}>
                      <button
                        type="button"
                        className="w-full text-left px-3 py-2.5 text-sm hover:bg-neutral-50"
                        onClick={() => {
                          const extra = s.extra.some((e) => e.uic === r.uic) ? s.extra : [...s.extra, r];
                          setAdding(false);
                          setQ("");
                          save({ extra: extra.map((e) => e.uic) }, { ...s, extra });
                        }}
                      >
                        {r.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <button type="button" onClick={() => setAdding(true)} className="inline-flex items-center gap-1.5 text-sm font-semibold">
              <Icon icon="solar:add-circle-linear" className="text-lg" />
              {t("add")}
            </button>
          )}

          <div>
            <p className="text-sm mb-2">{t("max")}</p>
            <div role="group" aria-label={t("max")} className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-neutral-100">
              {[1, 2, 3, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  aria-pressed={s.maxPerDay === n}
                  onClick={() => save({ maxPerDay: n }, { ...s, maxPerDay: n })}
                  className={`h-9 rounded-lg text-sm ${s.maxPerDay === n ? "bg-white font-semibold shadow-sm" : "text-neutral-600"}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {error && <p className="text-xs text-red-600">{t("error")}</p>}
    </div>
  );
}
