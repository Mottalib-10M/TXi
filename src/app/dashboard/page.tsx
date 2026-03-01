import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    include: {
      _count: {
        select: { bookings: true },
      },
      bookings: {
        where: { status: "PENDING" },
        orderBy: { createdAt: "desc" },
        take: 5,
      },
    },
  });

  if (!driver) return null;

  const totalBookings = driver._count.bookings;
  const pendingBookings = driver.bookings.length;

  // Profile completeness (use vehicles JSON if available, else flat fields)
  const vehicles = Array.isArray(driver.vehicles) ? (driver.vehicles as Array<{ brand?: string; plate?: string }>) : [];
  const v0 = vehicles[0];

  const profileChecks = [
    {
      label: "Numéro de téléphone",
      description: "Ajoutez votre téléphone pour que les clients puissent vous contacter",
      icon: "solar:phone-linear",
      section: "personal",
      done: Boolean(driver.phone),
    },
    {
      label: "Bio / Description",
      description: "Présentez-vous en quelques lignes pour rassurer vos futurs clients",
      icon: "solar:document-text-linear",
      section: "personal",
      done: Boolean(driver.bio),
    },
    {
      label: "Marque du véhicule",
      description: "Renseignez votre véhicule pour apparaître dans les résultats de recherche",
      icon: "mdi:car-outline",
      section: "vehicle",
      done: Boolean(v0?.brand || driver.vehicleBrand),
    },
    {
      label: "Plaque d'immatriculation",
      description: "Ajoutez votre plaque pour identifier votre véhicule",
      icon: "solar:license-linear",
      section: "vehicle",
      done: Boolean(v0?.plate || driver.vehiclePlate),
    },
    {
      label: "Zone de couverture",
      description: "Définissez votre zone d'activité sur la carte pour être trouvé par les clients à proximité",
      icon: "solar:map-point-linear",
      section: "zone",
      done: Boolean(driver.zoneLat),
    },
  ];

  const completedFields = profileChecks.filter((c) => c.done).length;
  const completeness = Math.round((completedFields / profileChecks.length) * 100);
  const missingChecks = profileChecks.filter((c) => !c.done);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          Bonjour, {driver.firstName} !
        </h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          Voici un résumé de votre activité
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
              <Icon icon="solar:calendar-linear" className="text-neutral-600 text-xl" />
            </div>
            <span className="text-sm text-neutral-500 font-light">Total réservations</span>
          </div>
          <p className="text-3xl font-semibold">{totalBookings}</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
              <Icon icon="solar:clock-circle-linear" className="text-amber-600 text-xl" />
            </div>
            <span className="text-sm text-neutral-500 font-light">En attente</span>
          </div>
          <p className="text-3xl font-semibold">{pendingBookings}</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              completeness === 100 ? "bg-green-50" : "bg-blue-50"
            }`}>
              <Icon
                icon={completeness === 100 ? "solar:check-circle-bold" : "solar:user-check-linear"}
                className={`text-xl ${completeness === 100 ? "text-green-600" : "text-blue-600"}`}
              />
            </div>
            <span className="text-sm text-neutral-500 font-light">Profil complété</span>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-3xl font-semibold">{completeness}%</p>
            <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  completeness === 100 ? "bg-green-500" : completeness >= 60 ? "bg-neutral-900" : "bg-amber-500"
                }`}
                style={{ width: `${completeness}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Missing profile items */}
      {missingChecks.length > 0 && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Icon icon="solar:info-circle-linear" className="text-amber-500 text-lg" />
            <h2 className="text-sm font-semibold">
              {missingChecks.length === 1
                ? "1 information manquante"
                : `${missingChecks.length} informations manquantes`}
            </h2>
          </div>
          <div className="space-y-2">
            {missingChecks.map((check) => (
              <Link
                key={check.label}
                href={`/dashboard/profil?section=${check.section}`}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
              >
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon icon={check.icon} className="text-amber-600 text-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-900">{check.label}</p>
                  <p className="text-xs text-neutral-500 font-light truncate">{check.description}</p>
                </div>
                <Icon
                  icon="solar:arrow-right-linear"
                  className="text-neutral-300 group-hover:text-neutral-600 transition-colors shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link
          href="/dashboard/profil"
          className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-sm">Compléter votre profil</h3>
              <p className="text-xs text-neutral-500 font-light mt-1">
                Ajoutez vos informations pour apparaître dans les recherches
              </p>
            </div>
            <Icon
              icon="solar:arrow-right-linear"
              className="text-neutral-400 group-hover:text-neutral-900 transition-colors"
            />
          </div>
        </Link>

        <Link
          href="/dashboard/carte"
          className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 transition-colors group"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-sm">Générer votre carte de visite</h3>
              <p className="text-xs text-neutral-500 font-light mt-1">
                Créez un QR code pour recevoir des réservations directes
              </p>
            </div>
            <Icon
              icon="solar:arrow-right-linear"
              className="text-neutral-400 group-hover:text-neutral-900 transition-colors"
            />
          </div>
        </Link>
      </div>

      {/* Recent pending bookings */}
      {pendingBookings > 0 && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-sm">Réservations en attente</h2>
            <Link
              href="/dashboard/reservations"
              className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Tout voir
            </Link>
          </div>
          <div className="space-y-3">
            {driver.bookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between py-3 border-b border-neutral-100 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium">{booking.clientName}</p>
                  <p className="text-xs text-neutral-500 font-light">
                    {booking.departureName} → {booking.arrivalName}
                  </p>
                </div>
                <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
                  En attente
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
