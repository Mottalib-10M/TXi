"use client";

import { Icon } from "@iconify/react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface Props {
  slug: string;
  hasCartePro: boolean;
}

export function PendingValidationBanner({ slug, hasCartePro }: Props) {
  const t = useTranslations("dashboard");

  const steps = [
    {
      label: t("stepAccountCreated"),
      done: true,
    },
    {
      label: hasCartePro ? t("stepCarteProDone") : t("stepCarteProPending"),
      done: hasCartePro,
    },
    {
      label: t("stepTeamValidation"),
      done: false,
    },
  ];

  const freeServices = [
    {
      label: t("freeServiceCard"),
      href: "/dashboard/carte" as const,
      icon: "solar:card-2-bold",
      bg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: t("freeServiceProfile"),
      href: "/dashboard/profil-public" as const,
      icon: "solar:eye-bold",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: t("freeServiceQR"),
      href: `/taxi/${slug}` as "/dashboard",
      icon: "solar:qr-code-bold",
      bg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
  ];

  return (
    <div className="space-y-4 mb-6">
      {/* Main validation card */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
            <Icon icon="solar:shield-check-bold" className="text-amber-600 text-xl" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-neutral-900">
              {t("pendingValidationTitle")}
            </h2>
            <p className="text-xs text-neutral-500 font-light">
              {t("pendingValidationDesc")}
            </p>
          </div>
        </div>

        {/* Progress steps */}
        <div className="space-y-2 mb-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                  step.done
                    ? "bg-green-500 text-white"
                    : "bg-neutral-200 text-neutral-400"
                }`}
              >
                {step.done ? (
                  <Icon icon="solar:check-read-linear" className="text-sm" />
                ) : (
                  <Icon icon="solar:hourglass-linear" className="text-sm" />
                )}
              </div>
              <span
                className={`text-sm ${
                  step.done
                    ? "text-neutral-700 font-medium"
                    : "text-neutral-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xs text-neutral-500 font-light">
          {t("pendingValidationNote")}
        </p>
      </div>

      {/* Free services card */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5">
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-neutral-900">
            {t("freeServicesTitle")}
          </h3>
          <p className="text-xs text-neutral-500 font-light">
            {t("freeServicesDesc")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {freeServices.map((service) => (
            <Link
              key={service.label}
              href={service.href}
              className={`${service.bg} rounded-xl p-3 text-center hover:opacity-80 transition-opacity`}
            >
              <Icon
                icon={service.icon}
                className={`${service.iconColor} text-xl mx-auto mb-1`}
              />
              <span className="text-xs font-medium text-neutral-700 leading-tight block">
                {service.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
