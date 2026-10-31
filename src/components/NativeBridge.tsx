"use client";

// Le pont avec l'app iPhone et Android (Capacitor). Sur le site, il ne fait
// rien et ne charge rien : les modules natifs ne sont importés que si la page
// tourne dans l'app (window.Capacitor, injecté par la coque avant la page).
// Dans l'app, il :
// - cache l'écran de démarrage une fois la page affichée, puis l'écran de
//   chargement animé (AppSplash) ;
// - branche la feuille de partage native sous navigator.share (image comprise),
//   et sous les liens « Enregistrer l'image » (le téléchargement n'existe pas
//   dans une vue web) ;
// - fait vibrer légèrement les onglets, les choix et les envois ;
// - gère le bouton retour d'Android (ferme la fenêtre ouverte, sinon page
//   précédente, sinon quitte l'app) ;
// - ouvre dans l'app les liens universels (espace chauffeur, parrainage, réservations) ;
// - inscrit le téléphone aux notifications (lib/push.ts) : l'autorisation est
//   demandée dans l'espace chauffeur ou organisation, ou au client juste après
//   sa réservation (page de confirmation, qui relie la course au téléphone).

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type CapWindow = Window & { Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string } };

const SITE_HOSTS = ["taxineo.fr", "www.taxineo.fr"];

// Android : seulement si l'app a été compilée avec le projet Firebase (android/app/google-services.json),
// sans lequel l'inscription planterait ; l'agent le dit par « Push/1 » (capacitor.config.ts).
const androidPush = () => /\bPush\/1\b/.test(navigator.userAgent);
const DEVICE_KEY = "txi-device";

type Push = typeof import("@capacitor/push-notifications").PushNotifications;
// Le module Capacitor est un Proxy qui répond à tout, même à « then » : renvoyé tel quel par une
// fonction async, il serait pris pour une promesse jamais tenue. On le range donc dans un objet.
let pushSetup: Promise<{ push: Push } | null> | null = null;
let pendingRef = "";

/** Écouteurs posés une seule fois : jeton reçu → serveur ; notification touchée → sa page. */
function setupPush(platform: string): Promise<{ push: Push } | null> {
  if (pushSetup) return pushSetup;
  pushSetup = (async () => {
    if (platform !== "ios" && !(platform === "android" && androidPush())) return null;
    const { PushNotifications } = await import("@capacitor/push-notifications");
    // Android : le canal des notifications (son et bandeau), celui que désigne le manifeste.
    if (platform === "android") {
      const en = document.documentElement.lang === "en";
      await PushNotifications.createChannel({ id: "default", name: en ? "Rides and bookings" : "Courses et réservations", importance: 4, visibility: 1 }).catch(() => undefined);
    }
    await PushNotifications.addListener("registration", ({ value }) => {
      const bookingRef = pendingRef;
      pendingRef = "";
      void fetch("/api/push/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: value, platform, locale: document.documentElement.lang === "en" ? "en" : "fr", bookingRef }),
      })
        .then((r) => r.json())
        .then((d: { id?: string }) => {
          try {
            if (d.id) localStorage.setItem(DEVICE_KEY, d.id);
          } catch {
            // stockage indisponible : les prochaines réservations ne seront pas suivies
          }
        })
        .catch(() => undefined);
    });
    await PushNotifications.addListener("pushNotificationActionPerformed", ({ notification }) => {
      const path = (notification.data as { path?: unknown } | undefined)?.path;
      if (typeof path === "string" && path.startsWith("/")) location.href = path;
    });
    return { push: PushNotifications };
  })().catch(() => null);
  return pushSetup;
}

function toBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

export function NativeBridge() {
  const pathname = usePathname();

  // Notifications, à chaque page : on demande l'autorisation là où elle a un sens,
  // et on réinscrit le jeton (il suit ainsi la connexion et la déconnexion).
  useEffect(() => {
    const cap = (window as CapWindow).Capacitor;
    if (!cap?.isNativePlatform?.()) return;
    void (async () => {
      const setup = await setupPush(cap.getPlatform?.() ?? "");
      if (!setup) return;
      const { push } = setup;
      const path = pathname.replace(/^\/en(?=\/|$)/, "");
      const confirmation = path.startsWith("/confirmation");
      const asks = confirmation || /^\/(dashboard|org)(\/|$)/.test(path);
      let status = await push.checkPermissions();
      if (asks && (status.receive === "prompt" || status.receive === "prompt-with-rationale")) status = await push.requestPermissions();
      if (status.receive !== "granted") return;
      if (confirmation) pendingRef = new URLSearchParams(location.search).get("ref") ?? "";
      await push.register();
    })().catch(() => undefined);
  }, [pathname]);

  useEffect(() => {
    const cap = (window as CapWindow).Capacitor;
    if (!cap?.isNativePlatform?.()) return;
    document.documentElement.setAttribute("data-app", cap.getPlatform?.() ?? "native");
    // Pas de zoom automatique sur les champs de saisie : l'app reste à l'échelle.
    const viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (viewport && !viewport.content.includes("maximum-scale")) viewport.content += ", maximum-scale=1, user-scalable=no";
    const cleanups: (() => void)[] = [];
    let alive = true;

    void (async () => {
      const [{ SplashScreen }, { Share }, { Filesystem, Directory }, { Haptics, ImpactStyle, NotificationType }, { App }] = await Promise.all([
        import("@capacitor/splash-screen"),
        import("@capacitor/share"),
        import("@capacitor/filesystem"),
        import("@capacitor/haptics"),
        import("@capacitor/app"),
      ]);
      if (!alive) return;
      void SplashScreen.hide({ fadeOutDuration: 200 });
      // L'écran de chargement animé (AppSplash) reste au moins 1,4 s pour que l'animation se voie.
      window.setTimeout(() => document.documentElement.classList.add("app-ready"), Math.max(0, 1400 - performance.now()));

      // Partage natif : les fichiers passent par le cache de l'app.
      const shareFiles = async (data: ShareData) => {
        const files: string[] = [];
        for (const file of data.files ?? []) {
          const written = await Filesystem.writeFile({ path: `share-${Date.now()}-${file.name}`, data: await toBase64(file), directory: Directory.Cache });
          files.push(written.uri);
        }
        await Share.share({ title: data.title, text: data.text, url: data.url, files: files.length ? files : undefined });
      };
      Object.defineProperty(navigator, "share", { configurable: true, value: shareFiles });
      Object.defineProperty(navigator, "canShare", { configurable: true, value: () => true });

      // Réservation faite depuis l'app : le téléphone inscrit aux notifications suit la course.
      const nativeFetch = window.fetch;
      window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
        const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
        let device: string | null = null;
        try {
          device = localStorage.getItem(DEVICE_KEY);
        } catch {
          device = null;
        }
        if (device && init?.method === "POST" && /^(https:\/\/www\.taxineo\.fr)?\/api\/bookings\/?$/.test(url)) {
          const headers = new Headers(init.headers);
          headers.set("x-txi-device", device);
          return nativeFetch(input, { ...init, headers });
        }
        return nativeFetch(input, init);
      };
      cleanups.push(() => (window.fetch = nativeFetch));

      // Clics : enregistrer une image (partage), vibrations légères.
      const onClick = (e: MouseEvent) => {
        const target = e.target as Element | null;
        const download = target?.closest("a[download]") as HTMLAnchorElement | null;
        if (download) {
          e.preventDefault();
          const name = download.getAttribute("download") || "taxineo.png";
          void fetch(download.href)
            .then((r) => r.blob())
            .then((blob) => shareFiles({ files: [new File([blob], name, { type: blob.type })] }))
            .catch(() => undefined);
          return;
        }
        if (target?.closest("header a, nav a, [aria-pressed], [role=tab], input[type=checkbox], input[type=radio], summary")) void Haptics.impact({ style: ImpactStyle.Light });
      };
      const onSubmit = () => void Haptics.impact({ style: ImpactStyle.Medium });
      document.addEventListener("click", onClick, true);
      document.addEventListener("submit", onSubmit, true);
      cleanups.push(() => {
        document.removeEventListener("click", onClick, true);
        document.removeEventListener("submit", onSubmit, true);
      });
      // Séance enregistrée, envoyée, réservation faite : une petite vibration de réussite.
      if (/[?&](confirmed|booked|saved|success)=/.test(location.search) || location.pathname.includes("/confirmation")) void Haptics.notification({ type: NotificationType.Success });

      // Clavier ouvert : la barre d'onglets se cache au lieu de remonter avec lui.
      // La classe ne doit jamais rester collée (sinon le menu du bas disparaît
      // partout) : elle part aussi dès qu'aucun champ n'a plus le focus, à
      // chaque changement de page et au retour par glissement.
      const { Keyboard } = await import("@capacitor/keyboard");
      if (!alive) return;
      const root = document.documentElement;
      const typing = () => Boolean((document.activeElement as Element | null)?.matches("input:not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=range]), textarea, select, [contenteditable=true]"));
      const kbOff = () => root.classList.remove("kb-open");
      const kbShow = await Keyboard.addListener("keyboardWillShow", () => {
        if (typing()) root.classList.add("kb-open");
      });
      const kbHide = await Keyboard.addListener("keyboardWillHide", kbOff);
      const kbGone = await Keyboard.addListener("keyboardDidHide", kbOff);
      const onFocusOut = () => window.setTimeout(() => !typing() && kbOff(), 120);
      document.addEventListener("focusout", onFocusOut);
      window.addEventListener("popstate", kbOff);
      window.addEventListener("pageshow", kbOff);
      const kbWatch = window.setInterval(() => {
        if (root.classList.contains("kb-open") && !typing()) kbOff();
      }, 1500);
      cleanups.push(
        () => void kbShow.remove(),
        () => void kbHide.remove(),
        () => void kbGone.remove(),
        () => document.removeEventListener("focusout", onFocusOut),
        () => window.removeEventListener("popstate", kbOff),
        () => window.removeEventListener("pageshow", kbOff),
        () => window.clearInterval(kbWatch),
        kbOff,
      );

      // Android : retour.
      const back = await App.addListener("backButton", ({ canGoBack }) => {
        if (document.documentElement.classList.contains("sheet-open")) {
          window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
          return;
        }
        if (canGoBack) history.back();
        else void App.exitApp();
      });
      // Liens universels : https://www.taxineo.fr/... ouvert depuis l'appareil photo, un message, un e-mail.
      const open = await App.addListener("appUrlOpen", ({ url }) => {
        try {
          const u = new URL(url);
          if (SITE_HOSTS.includes(u.hostname)) location.href = `${u.pathname}${u.search}${u.hash}`;
        } catch {
          // adresse illisible : on reste où l'on est
        }
      });
      cleanups.push(() => void back.remove(), () => void open.remove());
    })();

    return () => {
      alive = false;
      cleanups.forEach((fn) => fn());
    };
  }, []);
  return null;
}
