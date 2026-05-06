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

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  metadata: unknown;
  createdAt: string;
}

type FilterCategory = "all" | "bookings" | "escalations" | "contact" | "shared";

const FILTER_TYPES: Record<FilterCategory, NotificationType[] | null> = {
  all: null,
  bookings: [
    "BOOKING_CREATED",
    "BOOKING_ACCEPTED",
    "BOOKING_REJECTED",
    "BOOKING_COMPLETED",
    "BOOKING_CANCELLED",
    "ORG_BOOKING_CREATED",
  ],
  escalations: ["ESCALATION_PHASE1", "ESCALATION_PHASE2"],
  contact: ["CONTACT_REQUEST", "CONTACT_FORM"],
  shared: [
    "SHARED_ROUTE_CREATED",
    "SHARED_ROUTE_PROPOSED",
    "SHARED_ROUTE_JOINED",
    "SHARED_ROUTE_DRIVER_ACCEPTED",
  ],
};

const TYPE_CONFIG: Record<NotificationType, { icon: string; color: string }> = {
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

export function AdminNotificationsFeed({
  initialItems,
}: {
  initialItems: Notification[];
}) {
  const t = useTranslations("admin");
  const [items, setItems] = useState<Notification[]>(initialItems);
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [nextCursor, setNextCursor] = useState<string | null>(
    initialItems.length >= 50 ? initialItems[initialItems.length - 1]?.id ?? null : null
  );
  const [loading, setLoading] = useState(false);

  const filteredItems =
    filter === "all"
      ? items
      : items.filter((n) => FILTER_TYPES[filter]?.includes(n.type));

  const loadMore = useCallback(async () => {
    if (!nextCursor || loading) return;
    setLoading(true);
    try {
      const typeParam = filter !== "all" ? `&type=${FILTER_TYPES[filter]![0]}` : "";
      const res = await fetch(`/api/admin/notifications?cursor=${nextCursor}&limit=50${typeParam}`);
      const data = await res.json();
      setItems((prev) => [...prev, ...data.items]);
      setNextCursor(data.nextCursor);
    } catch (err) {
      console.error("Failed to load more notifications:", err);
    } finally {
      setLoading(false);
    }
  }, [nextCursor, loading, filter]);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: t("filterAllNotifications") },
    { key: "bookings", label: t("filterBookingsNotifications") },
    { key: "escalations", label: t("filterEscalationsNotifications") },
    { key: "contact", label: t("filterContactNotifications") },
    { key: "shared", label: t("filterSharedNotifications") },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t("notificationsTitle")}
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          {t("notificationsSubtitle")}
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
          <Icon icon="solar:bell-off-linear" className="text-4xl mx-auto mb-3" />
          <p>{t("noNotifications")}</p>
        </div>
      ) : (
        <div className="space-y-1">
          {filteredItems.map((n) => {
            const config = TYPE_CONFIG[n.type];
            return (
              <div
                key={n.id}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
              >
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${config.color}`}
                >
                  <Icon icon={config.icon} className="text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="text-sm font-medium text-neutral-900 truncate">
                      {n.title}
                    </p>
                    <span className="text-xs text-neutral-400 flex-shrink-0">
                      {relativeTime(n.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-500 mt-0.5">{n.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Load more */}
      {nextCursor && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="px-4 py-2 text-sm bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? t("loading") : t("loadMoreNotifications")}
          </button>
        </div>
      )}
    </div>
  );
}
