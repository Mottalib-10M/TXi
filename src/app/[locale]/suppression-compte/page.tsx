import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";

// Supprimer son compte Taxineo : la page web que Google Play exige (lien de la
// fiche), avec les étapes dans l'app et la demande par e-mail sans l'app.

export const metadata: Metadata = { robots: { index: false, follow: true } };

export default async function AccountDeletionPage() {
  const t = await getTranslations("accountDeletion");
  const steps = (key: "passenger" | "driver") => (
    <section className="space-y-2">
      <h2 className="font-semibold">{t(`${key}.title`)}</h2>
      <p className="text-sm text-neutral-700 leading-relaxed">{t(`${key}.steps`)}</p>
    </section>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar minimal />
      <div className="max-w-xl mx-auto px-4 pt-24 pb-16">
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
            <p className="text-sm text-neutral-700 leading-relaxed">{t("intro")}</p>
          </div>
          {steps("passenger")}
          {steps("driver")}
          <section className="space-y-2">
            <h2 className="font-semibold">{t("email.title")}</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {t.rich("email.text", { mail: (chunks) => <a href="mailto:contact@taxineo.fr" className="underline">{chunks}</a> })}
            </p>
          </section>
          <section className="space-y-2">
            <h2 className="font-semibold">{t("data.title")}</h2>
            <p className="text-sm text-neutral-700 leading-relaxed">{t("data.text")}</p>
          </section>
          <p className="text-sm">
            <Link href="/confidentialite" className="underline">{t("privacy")}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
