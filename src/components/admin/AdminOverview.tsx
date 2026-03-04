"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface OverviewData {
  totalDrivers: number;
  activeDrivers: number;
  inactiveDrivers: number;
  totalOrgs: number;
  totalBookings: number;
  bookingsByStatus: Record<string, number>;
  totalRevenue: number;
  recentDrivers: { id: string; firstName: string; lastName: string; email: string; isActive: boolean; createdAt: string }[];
  recentOrgs: { id: string; name: string; email: string; type: string; createdAt: string }[];
  recentBookings: {
    id: string;
    reference: string;
    clientName: string;
    departureName: string;
    arrivalName: string;
    status: string;
    lockedPrice: number | null;
    createdAt: string;
    driverName: string | null;
    orgName: string | null;
  }[];
}

const statusConfig: Record<string, { label: string; color: string; dot: string }> = {
  PENDING: { label: "En attente", color: "bg-amber-50 text-amber-700 ring-1 ring-amber-200", dot: "bg-amber-400" },
  ACCEPTED: { label: "Acceptée", color: "bg-green-50 text-green-700 ring-1 ring-green-200", dot: "bg-green-500" },
  REJECTED: { label: "Refusée", color: "bg-red-50 text-red-700 ring-1 ring-red-200", dot: "bg-red-400" },
  CANCELLED: { label: "Annulée", color: "bg-neutral-50 text-neutral-500 ring-1 ring-neutral-200", dot: "bg-neutral-400" },
  COMPLETED: { label: "Terminée", color: "bg-blue-50 text-blue-700 ring-1 ring-blue-200", dot: "bg-blue-500" },
};

const orgTypeConfig: Record<string, { label: string; color: string }> = {
  HOTEL: { label: "Hôtel", color: "bg-blue-50 text-blue-700" },
  HOSPITAL: { label: "Hôpital", color: "bg-red-50 text-red-700" },
  ENTERPRISE: { label: "Entreprise", color: "bg-neutral-800 text-white" },
  INDIVIDUAL: { label: "Individuel", color: "bg-neutral-100 text-neutral-600" },
};

export function AdminOverview({ data }: { data: OverviewData }) {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
            <Icon icon="solar:chart-square-bold" className="text-violet-600 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Vue d&apos;ensemble</h1>
            <p className="text-sm text-neutral-500 font-light">
              Tableau de bord administrateur
            </p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link
          href="/admin/chauffeurs"
          className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Icon icon="solar:user-hands-bold" className="text-white text-xl" />
            </div>
            <Icon icon="solar:arrow-right-up-linear" className="text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <p className="text-3xl font-bold">{data.totalDrivers}</p>
          <p className="text-sm text-blue-100 mt-1">Chauffeurs</p>
          <div className="flex gap-3 mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-blue-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-300 rounded-full" />
              {data.activeDrivers} actifs
            </span>
            <span className="text-xs text-blue-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              {data.inactiveDrivers} inactifs
            </span>
          </div>
        </Link>

        <Link
          href="/admin/organisations"
          className="group bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Icon icon="solar:buildings-2-bold" className="text-white text-xl" />
            </div>
            <Icon icon="solar:arrow-right-up-linear" className="text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <p className="text-3xl font-bold">{data.totalOrgs}</p>
          <p className="text-sm text-violet-100 mt-1">Organisations</p>
        </Link>

        <Link
          href="/admin/reservations"
          className="group bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-5 text-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Icon icon="solar:calendar-bold" className="text-white text-xl" />
            </div>
            <Icon icon="solar:arrow-right-up-linear" className="text-white/50 group-hover:text-white/80 transition-colors" />
          </div>
          <p className="text-3xl font-bold">{data.totalBookings}</p>
          <p className="text-sm text-amber-100 mt-1">Réservations</p>
          <div className="flex gap-3 mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-amber-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" />
              {data.bookingsByStatus.PENDING || 0} en attente
            </span>
            <span className="text-xs text-amber-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-300 rounded-full" />
              {data.bookingsByStatus.ACCEPTED || 0} acceptées
            </span>
          </div>
        </Link>

        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-5 text-white shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Icon icon="solar:wallet-money-bold" className="text-white text-xl" />
            </div>
          </div>
          <p className="text-3xl font-bold">{data.totalRevenue.toFixed(0)}<span className="text-lg ml-1">&euro;</span></p>
          <p className="text-sm text-green-100 mt-1">Revenu total</p>
          <div className="mt-3 pt-3 border-t border-white/20">
            <span className="text-xs text-green-100">
              {data.bookingsByStatus.COMPLETED || 0} courses terminées
            </span>
          </div>
        </div>
      </div>

      {/* Status breakdown bar */}
      {data.totalBookings > 0 && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-8">
          <h3 className="text-sm font-semibold mb-3">Répartition des réservations</h3>
          <div className="flex rounded-full overflow-hidden h-3 bg-neutral-100">
            {Object.entries(statusConfig).map(([key, config]) => {
              const count = data.bookingsByStatus[key] || 0;
              const pct = (count / data.totalBookings) * 100;
              if (pct === 0) return null;
              return (
                <div
                  key={key}
                  className={`${config.dot} transition-all`}
                  style={{ width: `${pct}%` }}
                  title={`${config.label}: ${count}`}
                />
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4 mt-3">
            {Object.entries(statusConfig).map(([key, config]) => {
              const count = data.bookingsByStatus[key] || 0;
              if (count === 0) return null;
              return (
                <span key={key} className="flex items-center gap-1.5 text-xs text-neutral-500">
                  <span className={`w-2 h-2 rounded-full ${config.dot}`} />
                  {config.label} ({count})
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent activity */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Recent drivers */}
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Icon icon="solar:user-hands-linear" className="text-blue-500" />
              <h2 className="font-semibold text-sm">Derniers chauffeurs</h2>
            </div>
            <Link href="/admin/chauffeurs" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
              Tout voir
              <Icon icon="solar:arrow-right-linear" className="text-xs" />
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {data.recentDrivers.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <Icon icon="solar:user-cross-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
                <p className="text-sm text-neutral-400 font-light">Aucun chauffeur</p>
              </div>
            ) : (
              data.recentDrivers.map((driver) => (
                <div key={driver.id} className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-xs font-semibold text-blue-600 shrink-0">
                    {driver.firstName[0]}{driver.lastName[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{driver.firstName} {driver.lastName}</p>
                    <p className="text-xs text-neutral-400 truncate">{driver.email}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`w-2 h-2 rounded-full ${driver.isActive ? "bg-green-500" : "bg-neutral-300"}`} />
                    <span className="text-xs text-neutral-400 hidden sm:inline">
                      {format(new Date(driver.createdAt), "dd MMM", { locale: fr })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Recent orgs */}
        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Icon icon="solar:buildings-2-linear" className="text-violet-500" />
              <h2 className="font-semibold text-sm">Dernières organisations</h2>
            </div>
            <Link href="/admin/organisations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
              Tout voir
              <Icon icon="solar:arrow-right-linear" className="text-xs" />
            </Link>
          </div>
          <div className="divide-y divide-neutral-100">
            {data.recentOrgs.length === 0 ? (
              <div className="px-5 py-8 text-center">
                <Icon icon="solar:buildings-2-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
                <p className="text-sm text-neutral-400 font-light">Aucune organisation</p>
              </div>
            ) : (
              data.recentOrgs.map((org) => (
                <div key={org.id} className="flex items-center gap-3 px-5 py-3 hover:bg-neutral-50 transition-colors">
                  <div className="w-8 h-8 bg-violet-50 rounded-full flex items-center justify-center text-xs font-semibold text-violet-600 shrink-0">
                    {org.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate">{org.name}</p>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${orgTypeConfig[org.type]?.color || ""}`}>
                        {orgTypeConfig[org.type]?.label || org.type}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 truncate">{org.email}</p>
                  </div>
                  <span className="text-xs text-neutral-400 shrink-0 hidden sm:inline">
                    {format(new Date(org.createdAt), "dd MMM", { locale: fr })}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Recent bookings */}
      <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:calendar-linear" className="text-amber-500" />
            <h2 className="font-semibold text-sm">Dernières réservations</h2>
          </div>
          <Link href="/admin/reservations" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1">
            Tout voir
            <Icon icon="solar:arrow-right-linear" className="text-xs" />
          </Link>
        </div>
        {data.recentBookings.length === 0 ? (
          <div className="px-5 py-8 text-center">
            <Icon icon="solar:calendar-linear" className="text-3xl text-neutral-200 mx-auto mb-2" />
            <p className="text-sm text-neutral-400 font-light">Aucune réservation</p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-100">
            {data.recentBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 px-5 py-3.5 hover:bg-neutral-50 transition-colors"
              >
                {/* Status dot */}
                <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${statusConfig[booking.status]?.dot || "bg-neutral-300"}`} />

                {/* Main info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{booking.clientName}</p>
                    <span className="text-[11px] text-neutral-400 font-mono">#{booking.reference}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusConfig[booking.status]?.color || ""}`}
                    >
                      {statusConfig[booking.status]?.label || booking.status}
                    </span>
                    {booking.orgName && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 text-violet-600 ring-1 ring-violet-200">
                        {booking.orgName}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-neutral-400 font-light truncate mt-0.5">
                    <Icon icon="solar:map-point-linear" className="inline text-neutral-300 mr-1" />
                    {booking.departureName} → {booking.arrivalName}
                  </p>
                </div>

                {/* Right side */}
                <div className="text-right shrink-0 hidden sm:block">
                  {booking.driverName && (
                    <p className="text-xs text-neutral-500 flex items-center gap-1 justify-end">
                      <Icon icon="solar:user-linear" className="text-neutral-300" />
                      {booking.driverName}
                    </p>
                  )}
                  <p className="text-xs text-neutral-400">
                    {format(new Date(booking.createdAt), "dd MMM yyyy", { locale: fr })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
