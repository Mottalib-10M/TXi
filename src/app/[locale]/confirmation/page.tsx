import { Suspense } from "react";
import { Icon } from "@iconify/react";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { fr, enUS } from "date-fns/locale";
import { Navbar } from "@/components/layout/Navbar";
import { CreateAccountPrompt } from "@/components/booking/CreateAccountPrompt";

async function ConfirmationContent({ reference }: { reference: string }) {
  const t = await getTranslations("confirmation");
  const tc = await getTranslations("common");
  const locale = await getLocale();

  const booking = reference
    ? await prisma.booking.findUnique({
        where: { reference },
        include: { driver: true },
      })
    : null;

  // Check if client already has an account
  let showCreateAccount = false;
  if (booking?.clientEmail) {
    const [existingDriver, existingOrg] = await Promise.all([
      prisma.driver.findUnique({ where: { email: booking.clientEmail }, select: { id: true } }),
      prisma.organization.findUnique({ where: { email: booking.clientEmail }, select: { id: true } }),
    ]);
    showCreateAccount = !existingDriver && !existingOrg;
  }

  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon icon="solar:check-circle-bold" className="text-green-600 text-3xl" />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight mb-2">
        {t("title")}
      </h1>
      <p className="text-neutral-500 font-light mb-8">
        {t("subtitle")}
      </p>

      {booking && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-left mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full font-medium">
              {t("pending")}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              #{booking.reference}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Icon icon="solar:record-circle-linear" className="text-neutral-400 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">{t("departureLabel")}</p>
                <p className="text-sm font-medium">{booking.departureName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="solar:stop-linear" className="text-neutral-900 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">{t("arrivalLabel")}</p>
                <p className="text-sm font-medium">{booking.arrivalName}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon icon="solar:calendar-linear" className="text-neutral-400 mt-0.5" />
              <div>
                <p className="text-xs text-neutral-400">{t("dateLabel")}</p>
                <p className="text-sm font-medium">
                  {format(booking.requestedDate, locale === "en" ? "dd MMMM yyyy 'at' HH:mm" : "dd MMMM yyyy 'à' HH:mm", {
                    locale: locale === "en" ? enUS : fr,
                  })}
                </p>
              </div>
            </div>

            {booking.driver && (
              <div className="flex items-start gap-3">
                <Icon icon="solar:user-linear" className="text-neutral-400 mt-0.5" />
                <div>
                  <p className="text-xs text-neutral-400">{t("driverLabel")}</p>
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
                  <p className="text-xs text-neutral-400">{t("estimatedPrice")}</p>
                  <p className="text-sm font-semibold">
                    {booking.estimatedPrice.toFixed(2).replace(".", ",")} €
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showCreateAccount && booking && (
        <CreateAccountPrompt
          clientName={booking.clientName}
          clientEmail={booking.clientEmail}
          clientPhone={booking.clientPhone || ""}
          locale={locale}
        />
      )}

      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
      >
        <Icon icon="solar:arrow-left-linear" />
        {tc("backToHome")}
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
              <p className="text-neutral-500">{/* Loading */}</p>
            </div>
          }
        >
          <ConfirmationContent reference={searchParams.ref || ""} />
        </Suspense>
      </div>
    </div>
  );
}
