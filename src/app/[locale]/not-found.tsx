import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  const popularLinks = [
    { href: "/", label: t("linkHome") },
    { href: "/villes", label: t("linkVilles") },
    { href: "/aeroports", label: t("linkAeroports") },
    { href: "/gares", label: t("linkGares") },
    { href: "/tarifs", label: t("linkTarifs") },
    { href: "/guides", label: t("linkGuides") },
    { href: "/blog", label: t("linkBlog") },
    { href: "/contact", label: t("linkContact") },
  ];

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <p className="text-7xl font-bold text-neutral-200 mb-4">404</p>
          <h1 className="text-xl font-semibold tracking-tight mb-2">
            {t("title")}
          </h1>
          <p className="text-sm text-neutral-500 font-light mb-8">
            {t("description")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
          >
            <Icon icon="solar:arrow-left-linear" />
            {t("backToHome")}
          </Link>

          <div className="mt-12 pt-8 border-t border-neutral-100">
            <h2 className="text-sm font-medium mb-4">{t("popularPages")}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as never}
                  className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors px-3 py-1.5 rounded-lg border border-neutral-100 hover:border-neutral-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-neutral-400 font-light">
            {t("reportIssue")}{" "}
            <a
              href="mailto:contact@taxineo.fr"
              className="underline hover:text-neutral-600 transition-colors"
            >
              contact@taxineo.fr
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
