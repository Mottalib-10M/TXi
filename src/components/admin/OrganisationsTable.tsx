"use client";

import { useState, useMemo } from "react";
import { useRouter } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { enUS, fr } from "date-fns/locale";
import { useLocale, useTranslations } from "next-intl";

interface Organisation {
  id: string;
  name: string;
  type: string;
  contactName: string;
  email: string;
  phone: string;
  cagnotteBalance: number;
  bookingsCount: number;
  createdAt: string;
}

export function OrganisationsTable({ organisations }: { organisations: Organisation[] }) {
  const t = useTranslations("admin");
  const locale = useLocale();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [impersonating, setImpersonating] = useState<string | null>(null);

  const typeConfig: Record<string, { label: string; color: string }> = {
    HOTEL: { label: t("typeHotel"), color: "bg-blue-50 text-blue-700" },
    HOSPITAL: { label: t("typeHospital"), color: "bg-red-50 text-red-700" },
    ENTERPRISE: { label: t("typeEnterprise"), color: "bg-neutral-900 text-white" },
    INDIVIDUAL: { label: t("typeIndividual"), color: "bg-neutral-100 text-neutral-600" },
  };

  const typeFilters: { key: string | null; label: string }[] = [
    { key: null, label: t("filterAll") },
    { key: "INDIVIDUAL", label: t("filterIndividuals") },
    { key: "HOTEL", label: t("filterHotels") },
    { key: "HOSPITAL", label: t("filterHospitals") },
    { key: "ENTERPRISE", label: t("filterEnterprises") },
  ];

  const filtered = useMemo(() => {
    return organisations.filter((o) => {
      if (selectedType && o.type !== selectedType) return false;
      const q = search.toLowerCase();
      return (
        o.name.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q) ||
        o.contactName.toLowerCase().includes(q)
      );
    });
  }, [organisations, search, selectedType]);

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const o of organisations) {
      counts[o.type] = (counts[o.type] || 0) + 1;
    }
    return counts;
  }, [organisations]);

  async function impersonate(orgId: string) {
    setImpersonating(orgId);
    try {
      const res = await fetch("/api/admin/impersonate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId: orgId }),
      });
      if (res.ok) {
        router.push("/org");
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setImpersonating(null);
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
          placeholder={t("searchOrgs")}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-400 transition-colors"
        />
      </div>

      {/* Type filter pills */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {typeFilters.map((filter) => {
          const count = filter.key === null
            ? organisations.length
            : typeCounts[filter.key] || 0;
          return (
            <button
              key={filter.label}
              onClick={() => setSelectedType(selectedType === filter.key ? null : filter.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                selectedType === filter.key
                  ? "bg-neutral-900 text-white"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
              }`}
            >
              {filter.label}
              <span className="ml-1.5 opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:buildings-2-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">{t("noOrgsFound")}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((org) => (
            <div
              key={org.id}
              className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm font-semibold">{org.name}</p>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    typeConfig[org.type]?.color || "bg-neutral-100 text-neutral-600"
                  }`}
                >
                  {typeConfig[org.type]?.label || org.type}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500 mb-2">
                <span className="flex items-center gap-1">
                  <Icon icon="solar:user-linear" className="text-neutral-400" />
                  {org.contactName}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="solar:letter-linear" className="text-neutral-400" />
                  {org.email}
                </span>
                {org.phone && (
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:phone-linear" className="text-neutral-400" />
                    {org.phone}
                  </span>
                )}
              </div>

              {/* Stats + Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-neutral-100">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:wallet-money-linear" />
                    {t("wallet", { amount: org.cagnotteBalance.toFixed(2) })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:calendar-linear" />
                    {t("ridesCount", { count: org.bookingsCount })}
                  </span>
                  <span>
                    {t("registeredOnFem", { date: format(new Date(org.createdAt), "dd MMM yyyy", { locale: locale === "en" ? enUS : fr }) })}
                  </span>
                </div>
                <button
                  onClick={() => impersonate(org.id)}
                  disabled={impersonating === org.id}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors flex items-center gap-1 disabled:opacity-50"
                >
                  <Icon icon="solar:login-3-linear" />
                  {impersonating === org.id ? "..." : t("loginAs")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
