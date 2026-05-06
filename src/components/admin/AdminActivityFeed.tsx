"use client";

import { useState, useCallback } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

type NotificationType =
  | "BOOKING_CREATED"
  | "BOOKING_ACCEPTED"
  | "BOOKING_REJECTED"
  | "BOOKING_COMPLETED"
  | "BOOKING_CANCELLED"
  | "ORG_BOOKING_CREATED"
  | "ESCALATION_PHASE1"
  | "ESCALATION_PHASE2"
  | "CONTACT_REQUEST"
  | "CONTACT_FORM"
  | "SHARED_ROUTE_CREATED"
  | "SHARED_ROUTE_PROPOSED"
  | "SHARED_ROUTE_JOINED"
  | "SHARED_ROUTE_DRIVER_ACCEPTED";

type ActivityEventType = NotificationType | "DRIVER_LOGIN" | "ORG_LOGIN" | "DRIVER_REGISTERED" | "ORG_REGISTERED";

export interface ActivityEvent {
  id: string;
  eventType: ActivityEventType;
  title: string;
  body: string;
  createdAt: string;
  badge?: string;
  city?: string;
}

type FilterCategory = "all" | "bookings" | "logins" | "registrations" | "contact" | "escalations" | "shared";

const FILTER_TYPES: Record<FilterCategory, ActivityEventType[] | null> = {
  all: null,
  bookings: [
    "BOOKING_CREATED",
    "BOOKING_ACCEPTED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_CANCELLED",
    "ORG_BOOKING_CREATED",
  ],
  logins: ["DRIVER_LOGIN", "ORG_LOGIN"],
  registrations: ["DRIVER_REGISTERED", "ORG_REGISTERED"],
  escalations: ["ESCALATION_PHASE1", "ESCALATION_PHASE2"],
  contact: ["CONTACT_REQUEST", "CONTACT_FORM"],
  shared: [
    "SHARED_ROUTE_CREATED",
    "SHARED_ROUTE_PROPOSED",
    "SHARED_ROUTE_JOINED",
    "SHARED_ROUTE_DRIVER_ACCEPTED",
  ],
};

const TYPE_CONFIG: Record<ActivityEventType, { icon: string; color: string }> = {
  BOOKING_CREATED: { icon: "solar:add-circle-linear", color: "text-blue-600 bg-blue-50" },
  BOOKING_ACCEPTED: { icon: "solar:check-circle-linear", color: "text-green-600 bg-green-50" },
  BOOKING_REJECTED: { icon: "solar:close-circle-linear", color: "text-red-600 bg-red-50" },
  BOOKING_COMPLETED: { icon: "solar:verified-check-linear", color: "text-emerald-600 bg-emerald-50" },
  BOOKING_CANCELLED: { icon: "solar:forbidden-circle-linear", color: "text-orange-600 bg-orange-50" },
  ORG_BOOKING_CREATED: { icon: "solar:buildings-2-linear", color: "text-indigo-600 bg-indigo-50" },
  ESCALATION_PHASE1: { icon: "solar:alarm-linear", color: "text-amber-600 bg-amber-50" },
  ESCALATION_PHASE2: { icon: "solar:danger-triangle-linear", color: "text-red-600 bg-red-50" },
  CONTACT_REQUEST: { icon: "solar:letter-linear", color: "text-purple-600 bg-purple-50" },
  CONTACT_FORM: { icon: "solar:chat-round-line-linear", color: "text-violet-600 bg-violet-50" },
  SHARED_ROUTE_CREATED: { icon: "solar:route-linear", color: "text-cyan-600 bg-cyan-50" },
  SHARED_ROUTE_PROPOSED: { icon: "solar:hand-stars-linear", color: "text-teal-600 bg-teal-50" },
  SHARED_ROUTE_JOINED: { icon: "solar:users-group-two-rounded-linear", color: "text-sky-600 bg-sky-50" },
  SHARED_ROUTE_DRIVER_ACCEPTED: { icon: "solar:steering-wheel-linear", color: "text-green-600 bg-green-50" },
  DRIVER_LOGIN: { icon: "solar:user-hands-linear", color: "text-blue-500 bg-blue-50/50" },
  ORG_LOGIN: { icon: "solar:buildings-2-linear", color: "text-violet-500 bg-violet-50/50" },
  DRIVER_REGISTERED: { icon: "solar:user-plus-linear", color: "text-green-500 bg-green-50/50" },
  ORG_REGISTERED: { icon: "solar:buildings-2-bold", color: "text-violet-500 bg-violet-50/50" },
};

const BADGE_STYLES: Record<string, string> = {
  Chauffeur: "bg-blue-100 text-blue-700",
  Client: "bg-neutral-100 text-neutral-600",
  "Hôtel": "bg-amber-100 text-amber-700",
  "Hôpital": "bg-rose-100 text-rose-700",
  Entreprise: "bg-indigo-100 text-indigo-700",
  Particulier: "bg-neutral-100 text-neutral-600",
  Organisation: "bg-violet-100 text-violet-700",
  Escalade: "bg-red-100 text-red-700",
  Partage: "bg-cyan-100 text-cyan-700",
};

function relativeTime(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffSec = Math.floor((now - then) / 1000);

  if (diffSec < 60) return "< 1 min";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} min`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h`;
  if (diffSec < 604800) return `${Math.floor(diffSec / 86400)}j`;
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

export function AdminActivityFeed({
  initialItems,
  hasMore: initialHasMore,
}: {
  initialItems: ActivityEvent[];
  hasMore: boolean;
}) {
  const t = useTranslations("admin");
  const [items, setItems] = useState<ActivityEvent[]>(initialItems);
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [nextCursor, setNextCursor] = useState<string | null>(
    initialHasMore ? initialItems.filter((e) => !["DRIVER_LOGIN", "ORG_LOGIN", "DRIVER_REGISTERED", "ORG_REGISTERED"].includes(e.eventType)).at(-1)?.id ?? null : null
  );
  const [loading, setLoading] = useState(false);

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((e) => FILTER_TYPES[filter]?.includes(e.eventType));

  const loadMore = useCallback(async () => {
    if (!nextCursor || loading) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/notifications?cursor=${nextCursor}&limit=50`);
      const data = await res.json();
      const newItems: ActivityEvent[] = data.items.map((n: { id: string; type: NotificationType; title: string; body: string; createdAt: string }) => ({
        id: n.id,
        eventType: n.type,
        title: n.title,
        body: n.body,
        createdAt: typeof n.createdAt === "string" ? n.createdAt : new Date(n.createdAt).toISOString(),
      }));
      setItems((prev) => [...prev, ...newItems]);
      setNextCursor(data.nextCursor);
    } catch (err) {
      console.error("Failed to load more activity:", err);
    } finally {
      setLoading(false);
    }
  }, [nextCursor, loading]);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t("filterAllActivity") },
    { key: "bookings", label: t("filterBookingsActivity") },
    { key: "logins", label: t("filterLoginsActivity") },
    { key: "registrations", label: t("filterRegistrationsActivity") },
    { key: "contact", label: t("filterContactActivity") },
    { key: "escalations", label: t("filterEscalationsActivity") },
    { key: "shared", label: t("filterSharedActivity") },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t("activityTitle")}
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          {t("activitySubtitle")}
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
              filter === f.key
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-neutral-400">
          <Icon icon="solar:history-linear" className="text-4xl mx-auto mb-3" />
          <p>{t("noActivityFeed")}</p>
        </div>
      ) : (
        <div className="space-y-1">
          {filteredItems.map((e) => {
            const config = TYPE_CONFIG[e.eventType];
            return (
              <div
                key={e.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${config.color}`}
                >
                  <Icon icon={config.icon} className="text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <p className="text-sm font-medium text-neutral-900 truncate">
                        {e.title}
                      </p>
                      {e.badge && (
                        <span className={`flex-shrink-0 px-1.5 py-0.5 text-[11px] font-medium rounded ${BADGE_STYLES[e.badge] || "bg-neutral-100 text-neutral-600"}`}>
                          {e.badge}
                        </span>
                      )}
                      {e.city && (
                        <span className="flex-shrink-0 text-[11px] text-neutral-400 flex items-center gap-0.5">
                          <Icon icon="solar:map-point-linear" className="text-xs" />
                          {e.city}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-neutral-400 flex-shrink-0">
                      {relativeTime(e.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-0.5">{e.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Load more */}
      {nextCursor && filter === "all" && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? t("loading") : t("loadMoreActivity")}
          </button>
        </div>
      )}
    </div>
  );
}
