import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { getTranslations } from "next-intl/server";

export default async function TaxiNotFound() {
  const t = await getTranslations("notFound");
  return (
    <div className="min-h-screen bg-white">
      <Navbar minimal />
      <div className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon icon="solar:user-cross-linear" className="text-neutral-400 text-2xl" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight mb-2">
            {t("driverNotFound")}
          </h1>
          <p className="text-sm text-neutral-500 font-light mb-8">
            {t("driverNotFoundDesc")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
          >
            <Icon icon="solar:arrow-left-linear" />
            {t("backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
