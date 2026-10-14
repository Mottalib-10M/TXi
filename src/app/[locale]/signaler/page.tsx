import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { REPORT_REASONS } from "@/lib/moderation";
import { reportDriverAction, blockDriverAction, unblockDriverAction } from "@/lib/reportActions";

// Signaler un chauffeur (lien « Signaler » du profil public, des courses de
// l'organisation et des courses transmises), et le bloquer quand on est connecté.

export const dynamic = "force-dynamic";
export const metadata: Metadata = { robots: { index: false, follow: false } };

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ chauffeur?: string; course?: string; fait?: string }>;
}

export default async function ReportDriverPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { chauffeur = "", course = "", fait = "" } = await searchParams;
  const t = await getTranslations("report");
  const driver = chauffeur
    ? await prisma.driver.findUnique({ where: { slug: chauffeur }, select: { id: true, slug: true, firstName: true, lastName: true, photoUrl: true } })
    : null;
  if (!driver) notFound();

  const session = await auth();
  const user = session?.user && !session.user.impersonatingFrom ? session.user : null;
  const canBlock = Boolean(user && user.id !== driver.id);
  const blocked = canBlock
    ? (await prisma.driverBlock.count({
        where: user!.role === "organization"
          ? { driverId: driver.id, blockerOrgId: user!.id }
          : { driverId: driver.id, blockerDriverId: user!.id },
      })) > 0
    : false;

  const hidden = (
    <>
      <input type="hidden" name="slug" value={driver.slug} />
      <input type="hidden" name="course" value={course} />
      <input type="hidden" name="locale" value={locale} />
    </>
  );
  const notice =
    fait === "signale" ? t("doneReport") :
    fait === "bloque" ? t(user?.role === "organization" ? "doneBlockOrg" : "doneBlockDriver") :
    fait === "debloque" ? t("doneUnblock") :
    fait === "motif" ? t("needReason") :
    fait === "erreur" ? t("error") : "";

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar minimal />
      <div className="max-w-md mx-auto space-y-4 px-4 pt-24 pb-16">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            {driver.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={driver.photoUrl} alt="" className="w-12 h-12 rounded-full object-cover" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-semibold text-neutral-500">
                {driver.firstName.charAt(0)}{driver.lastName.charAt(0)}
              </div>
            )}
            <div>
              <h1 className="text-lg font-semibold">{t("title")}</h1>
              <p className="text-sm text-neutral-500">
                {driver.firstName} {driver.lastName.charAt(0)}.{course ? ` · ${t("ride", { ref: course })}` : ""}
              </p>
            </div>
          </div>

          {notice && (
            <p role="status" className={`mb-4 rounded-xl px-4 py-3 text-sm ${fait === "erreur" || fait === "motif" ? "bg-red-50 text-red-700" : "bg-green-50 text-green-800"}`}>
              {notice}
            </p>
          )}

          {fait !== "signale" && (
            <form action={reportDriverAction} className="space-y-4">
              {hidden}
              <fieldset>
                <legend className="text-sm font-medium text-neutral-800 mb-2">{t("reasonLabel")}</legend>
                <div className="flex flex-wrap gap-2">
                  {REPORT_REASONS.map((r) => (
                    <label key={r} className="cursor-pointer">
                      <input type="radio" name="reason" value={r} required className="peer sr-only" />
                      <span className="inline-block rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 peer-checked:border-neutral-950 peer-checked:bg-neutral-950 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-neutral-400">
                        {t(`reasons.${r}`)}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="block">
                <span className="text-sm font-medium text-neutral-800">{t("messageLabel")}</span>
                <textarea name="message" rows={4} maxLength={2000} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 text-base sm:text-sm" placeholder={t("messagePlaceholder")} />
              </label>
              {!user && (
                <label className="block">
                  <span className="text-sm font-medium text-neutral-800">{t("emailLabel")}</span>
                  <input type="email" name="email" maxLength={200} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2 text-base sm:text-sm" placeholder="vous@exemple.fr" />
                </label>
              )}
              <button type="submit" className="w-full bg-neutral-950 text-white rounded-xl py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                {t("submit")}
              </button>
              <p className="text-xs text-neutral-500 leading-relaxed">{t("deadline")}</p>
            </form>
          )}
        </div>

        {canBlock && (
          <div className="bg-white rounded-2xl border border-neutral-200 p-5">
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              {blocked ? t("blockedInfo") : t(user!.role === "organization" ? "blockOrgInfo" : "blockDriverInfo")}
            </p>
            <form action={blocked ? unblockDriverAction : blockDriverAction}>
              {hidden}
              <button type="submit" className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50">
                {blocked ? t("unblock") : t("block")}
              </button>
            </form>
          </div>
        )}

        <p className="text-xs text-neutral-500 text-center">{t("emergency")}</p>
        <p className="text-center">
          <Link href={`/taxi/${driver.slug}`} className="text-sm text-neutral-600 underline">{t("back")}</Link>
        </p>
      </div>
    </div>
  );
}
