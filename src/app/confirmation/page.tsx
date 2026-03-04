import { Suspense } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Navbar } from "@/components/layout/Navbar";

async function ConfirmationContent({ reference }: { reference: string }) {
  const booking = reference
    ? await prisma.booking.findUnique({
        where: { reference },
        include: { driver: true },
      })
    : null;

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon icon="solar:check-circle-bold" className="text-green-600 text-3xl" />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        Réservation confirmée !
      </h1>
      <p className="text-neutral-500 font-light mb-8">
        Votre demande a bien été enregistrée. Vous recevrez un email de confirmation.
      </p>

      {booking && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-left mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
              En attente de confirmation
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              #{booking.reference}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Icon icon="solar:record-circle-linear" className="text-neutral-400 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">Départ</p>
                <p className="text-sm font-medium">{booking.departureName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="solar:stop-linear" className="text-neutral-900 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">Arrivée</p>
                <p className="text-sm font-medium">{booking.arrivalName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="solar:calendar-linear" className="text-neutral-400 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">Date</p>
                <p className="text-sm font-medium">
                  {format(booking.requestedDate, "dd MMMM yyyy à HH:mm", {
                    locale: fr,
                  })}
                </p>
              </div>
            </div>

            {booking.driver && (
              <div className="flex items-start gap-3">
                <Icon icon="solar:user-linear" className="text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-400">Chauffeur</p>
                  <p className="text-sm font-medium">
                    {booking.driver.firstName} {booking.driver.lastName}
                  </p>
                </div>
              </div>
            )}

            {booking.estimatedPrice && (
              <div className="flex items-start gap-3">
                <Icon icon="solar:tag-price-linear" className="text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-400">Prix estimé</p>
                  <p className="text-sm font-semibold">
                    {booking.estimatedPrice.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
      >
        <Icon icon="solar:arrow-left-linear" />
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

export default function ConfirmationPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar minimal />
      <div className="pt-32 pb-20 px-6">
        <Suspense
          fallback={
            <div className="text-center">
              <p className="text-neutral-500">Chargement...</p>
            </div>
          }
        >
          <ConfirmationContent reference={searchParams.ref || ""} />
        </Suspense>
      </div>
    </div>
  );
}
