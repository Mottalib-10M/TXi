"use client";

// Le pont avec l'app iPhone et Android (Capacitor). Sur le site, il ne fait
// rien et ne charge rien : les modules natifs ne sont importés que si la page
// tourne dans l'app (window.Capacitor, injecté par la coque avant la page).
// Dans l'app, il :
// - cache l'écran de démarrage une fois la page affichée ;
// - branche la feuille de partage native sous navigator.share (image comprise),
//   et sous les liens « Enregistrer l'image » (le téléchargement n'existe pas
//   dans une vue web) ;
// - fait vibrer légèrement les onglets, les choix et les envois ;
// - gère le bouton retour d'Android (ferme la fenêtre ouverte, sinon page
//   précédente, sinon quitte l'app) ;
// - ouvre dans l'app les liens universels (espace chauffeur, parrainage, réservations).

import { useEffect } from "react";

type CapWindow = Window & { Capacitor?: { isNativePlatform?: () => boolean; getPlatform?: () => string } };

const SITE_HOSTS = ["taxineo.fr", "www.taxineo.fr"];

function toBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

export function NativeBridge() {
  useEffect(() => {
    const cap = (window as CapWindow).Capacitor;
    if (!cap?.isNativePlatform?.()) return;
    document.documentElement.setAttribute("data-app", cap.getPlatform?.() ?? "native");
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
