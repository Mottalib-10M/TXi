"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface Booking {
  id: string;
  reference: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientComments: string | null;
  departureName: string;
  arrivalName: string;
  requestedDate: string;
  passengerCount: number;
  estimatedPrice: number | null;
  status: string;
  source: string;
  createdAt: string;
}

const statusConfig: Record<string, { label: string; color: string }> = {
  PENDING: { label: "En attente", color: "bg-amber-50 text-amber-700" },
  ACCEPTED: { label: "Acceptée", color: "bg-green-50 text-green-700" },
  REJECTED: { label: "Refusée", color: "bg-red-50 text-red-700" },
  CANCELLED: { label: "Annulée", color: "bg-neutral-100 text-neutral-500" },
  COMPLETED: { label: "Terminée", color: "bg-blue-50 text-blue-700" },
};

export function ReservationsTable({ bookings }: { bookings: Booking[] }) {
  const router = useRouter();
  const [filter, setFilter] = useState<string>("ALL");
  const [updating, setUpdating] = useState<string | null>(null);

  const filtered = filter === "ALL" ? bookings : bookings.filter((b) => b.status === filter);

  async function updateStatus(bookingId: string, status: "ACCEPTED" | "REJECTED" | "COMPLETED") {
    setUpdating(bookingId);
    try {
      await fetch(`/api/driver/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
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
      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { key: "ALL", label: "Toutes" },
          { key: "PENDING", label: "En attente" },
          { key: "ACCEPTED", label: "Acceptées" },
          { key: "COMPLETED", label: "Terminées" },
          { key: "REJECTED", label: "Refusées" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              filter === f.key
                ? "bg-neutral-900 text-white"
                : "bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {f.label}
            {f.key === "ALL" && (
              <span className="ml-1.5 text-neutral-400">({bookings.length})</span>
            )}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white border border-neutral-200 rounded-2xl p-12 text-center">
          <Icon icon="solar:calendar-linear" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 font-light">Aucune réservation</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((booking) => (
            <div
              key={booking.id}
              className="bg-white border border-neutral-200 rounded-2xl p-4 sm:p-5"
            >
              {/* Header: name + status + ref */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-sm font-semibold">{booking.clientName}</p>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    statusConfig[booking.status]?.color || ""
                  }`}
                >
                  {statusConfig[booking.status]?.label || booking.status}
                </span>
                <span className="text-xs text-neutral-400">
                  #{booking.reference}
                </span>
              </div>

              {/* Route */}
              <div className="flex items-start gap-2 text-xs text-neutral-500 mb-1.5">
                <Icon icon="solar:map-point-linear" className="text-neutral-400 shrink-0 mt-0.5" />
                <span className="break-words min-w-0">
                  {booking.departureName} → {booking.arrivalName}
                </span>
              </div>

              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                <span className="flex items-center gap-1">
                  <Icon icon="solar:calendar-linear" />
                  {format(new Date(booking.requestedDate), "dd MMM yyyy à HH:mm", {
                    locale: fr,
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon="solar:users-group-rounded-linear" />
                  {booking.passengerCount} passager{booking.passengerCount > 1 ? "s" : ""}
                </span>
                {booking.estimatedPrice && (
                  <span className="flex items-center gap-1">
                    <Icon icon="solar:tag-price-linear" />
                    {booking.estimatedPrice.toFixed(2)} EUR
                  </span>
                )}
                <span className="text-neutral-300">
                  via {booking.source === "PROFILE" ? "Profil" : "Landing"}
                </span>
              </div>

              {booking.clientComments && (
                <p className="text-xs text-neutral-500 mt-2 bg-neutral-50 rounded-lg px-3 py-2">
                  {booking.clientComments}
                </p>
              )}

              {/* Actions */}
              {booking.status === "PENDING" && (
                <div className="flex gap-2 mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "ACCEPTED")}
                    disabled={updating === booking.id}
                    className="flex-1 sm:flex-none bg-green-50 text-green-700 hover:bg-green-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={() => updateStatus(booking.id, "REJECTED")}
                    disabled={updating === booking.id}
                    className="flex-1 sm:flex-none bg-red-50 text-red-700 hover:bg-red-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    Refuser
                  </button>
                </div>
              )}

              {booking.status === "ACCEPTED" && (
                <div className="mt-3 pt-3 border-t border-neutral-100">
                  <button
                    onClick={() => updateStatus(booking.id, "COMPLETED")}
                    disabled={updating === booking.id}
                    className="w-full sm:w-auto bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
                  >
                    Terminer
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
