import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { prisma } from "@/lib/prisma";
import { bookingCookieName, bookingLinkExpired, clientBookingToken, sameToken } from "@/lib/booking-link";

export const metadata: Metadata = { robots: { index: false, follow: false } };

const STATUS_STYLES: Record<string, string> = {
  PENDING: "bg-amber-50 text-amber-700",
  ACCEPTED: "bg-emerald-50 text-emerald-700",
  COMPLETED: "bg-neutral-100 text-neutral-700",
  REJECTED: "bg-red-50 text-red-700",
  CANCELLED: "bg-red-50 text-red-700",
};

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ReservationPage({ params }: Props) {
  const { locale, id } = await params;
  const fallback = `/${locale}/mes-reservations`;

  const cookieStore = await cookies();
  if (!sameToken(cookieStore.get(bookingCookieName(id))?.value, clientBookingToken(id))) redirect(fallback);

  const booking = await prisma.booking.findUnique({
    where: { id },
    select: {
      reference: true,
      status: true,
      departureName: true,
      arrivalName: true,
      requestedDate: true,
      lockedPrice: true,
      estimatedPrice: true,
      driver: { select: { firstName: true, lastName: true, phone: true } },
    },
  });
  if (!booking || bookingLinkExpired(booking.requestedDate)) redirect(fallback);

  const t = await getTranslations("bookingLink");
  const date = new Intl.DateTimeFormat(locale, { dateStyle: "full", timeStyle: "short", timeZone: "Europe/Paris" }).format(booking.requestedDate);
  const price = booking.lockedPrice ?? booking.estimatedPrice;
  const driver = booking.status === "ACCEPTED" ? booking.driver : null;
  const closed = booking.status === "REJECTED" || booking.status === "CANCELLED";

  const rows: [string, string][] = [
    [t("departure"), booking.departureName],
    [t("arrival"), booking.arrivalName],
    [t("date"), date],
    [t("reference"), `#${booking.reference}`],
  ];
  if (price) {
    rows.splice(3, 0, [t("price"), new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(price)]);
  }

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-10">
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
        <h1 className="text-xl font-semibold">{t("title")}</h1>
        <span className={`inline-block mt-3 px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[booking.status]}`}>
          {t(`status.${booking.status}`)}
        </span>
        <p className="text-sm text-neutral-500 mt-3">{t(`statusText.${booking.status}`)}</p>

        <dl className="mt-6 divide-y divide-neutral-100 text-sm">
          {rows.map(([label, value]) => (
            <div key={label} className="py-3">
              <dt className="text-neutral-500">{label}</dt>
              <dd className="font-medium mt-0.5 break-words">{value}</dd>
            </div>
          ))}
        </dl>

        {driver && (
          <div className="mt-4 rounded-xl bg-neutral-50 border border-neutral-200 p-4 text-sm">
            <p className="text-neutral-500">{t("yourDriver")}</p>
            <p className="font-medium mt-0.5">{`${driver.firstName} ${driver.lastName}`.trim()}</p>
            {driver.phone && (
              <a href={`tel:${driver.phone}`} className="block w-full mt-3 bg-neutral-950 text-white rounded-xl py-3 text-center font-medium">
                {t("callDriver", { phone: driver.phone })}
              </a>
            )}
          </div>
        )}

        {closed && (
          <Link href="/" className="block w-full mt-6 bg-neutral-950 text-white rounded-xl py-3 text-center text-sm font-medium">
            {t("bookAgain")}
          </Link>
        )}

        <p className="text-xs text-neutral-400 mt-6 text-center">
          <Link href="/inscription?type=particulier" className="underline">{t("createAccount")}</Link>
        </p>
      </div>
    </div>
  );
}
