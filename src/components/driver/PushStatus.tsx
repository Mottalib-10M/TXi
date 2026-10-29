"use client";

// État des notifications sur cet appareil, sous l'interrupteur « Sur le téléphone » :
// dans l'app, autorisées ou bloquées dans les réglages du téléphone ; sur le site,
// il faut l'app pour les recevoir. L'autorisation elle-même est demandée par
// NativeBridge à l'ouverture de l'espace chauffeur.

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

type CapWindow = Window & { Capacitor?: { isNativePlatform?: () => boolean } };
type State = "web" | "on" | "blocked" | "unknown";

export function PushStatus() {
  const t = useTranslations("profileForm");
  const [state, setState] = useState<State>("unknown");

  useEffect(() => {
    if (!(window as CapWindow).Capacitor?.isNativePlatform?.()) {
      setState("web");
      return;
    }
    import("@capacitor/push-notifications")
      .then(({ PushNotifications }) => PushNotifications.checkPermissions())
      .then((s) => setState(s.receive === "granted" ? "on" : s.receive === "denied" ? "blocked" : "unknown"))
      .catch(() => setState("unknown"));
  }, []);

  if (state === "unknown") return null;
  const look = {
    on: { icon: "solar:check-circle-linear", className: "text-green-700", text: t("pushOn") },
    blocked: { icon: "solar:danger-triangle-linear", className: "text-amber-700", text: t("pushBlocked") },
    web: { icon: "solar:smartphone-linear", className: "text-neutral-500", text: t("pushWebOnly") },
  }[state];
  return (
    <p className={`flex items-start gap-1.5 text-xs mt-1.5 ${look.className}`}>
      <Icon icon={look.icon} className="text-sm shrink-0 mt-px" />
      {look.text}
    </p>
  );
}
