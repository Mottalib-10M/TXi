import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { auth } from "@/lib/auth";
import { BookingForm } from "@/components/booking/BookingForm";

// L'accueil de l'app iPhone et Android (le site y redirige l'app, voir
// middleware.ts) : réserver un taxi d'abord, puis ses réservations et l'accès
// à l'espace chauffeur ou organisation. Jamais indexé.

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AppHome() {
  const t = await getTranslations("appHome");
  const session = await auth();
  const role = session?.user?.role;
  const space = role === "organization" ? "/org" : role === "driver" ? "/dashboard" : null;
  return (
    <main className="app-home min-h-screen bg-neutral-50 px-5 pb-10">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <div className="flex items-center justify-between pt-5">
          <span className="text-2xl font-semibold tracking-tight">Taxineo</span>
          {space ? (
            <Link href={space} className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium text-white">
              {t("mySpace")}
            </Link>
          ) : null}
        </div>
        <div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight">{t("title")}</h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">{t("subtitle")}</p>
        </div>
        <section className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <BookingForm />
        </section>
        <nav className="flex flex-col gap-3" aria-label={t("menu")}>
          <Link href="/mes-reservations" className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
              <Icon icon="solar:calendar-linear" className="text-xl text-amber-600" />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">{t("bookings")}</span>
              <span className="block text-xs text-neutral-500">{t("bookingsDesc")}</span>
            </span>
            <Icon icon="solar:alt-arrow-right-linear" className="text-neutral-400" />
          </Link>
          {space ? null : (
            <Link href="/connexion" className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-100">
                <Icon icon="solar:steering-wheel-linear" className="text-xl text-neutral-800" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold">{t("pro")}</span>
                <span className="block text-xs text-neutral-500">{t("proDesc")}</span>
              </span>
              <Icon icon="solar:alt-arrow-right-linear" className="text-neutral-400" />
            </Link>
          )}
          {space ? null : (
            <Link href="/devenir-chauffeur" className="text-center text-sm font-medium text-neutral-600 underline underline-offset-4">
              {t("becomeDriver")}
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
