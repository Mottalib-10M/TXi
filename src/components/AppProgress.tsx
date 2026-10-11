"use client";

// Dans l'app seulement : une fine barre animée sous l'heure et la batterie dès
// qu'un appui lance quelque chose (changement de page, envoi d'un formulaire,
// bouton qui interroge le serveur), pour qu'on voie tout de suite que l'appui
// est pris en compte. Elle se termine à l'arrivée de la page ou de la réponse.
// Les requêtes de fond (préchargement, rafraîchissements) ne la déclenchent
// pas : seules comptent celles parties moins d'une seconde après un appui.

import { useEffect, useRef, useState } from "react";

type CapWindow = Window & { Capacitor?: { isNativePlatform?: () => boolean } };

export function AppProgress() {
  const [state, setState] = useState<"idle" | "run" | "done">("idle");
  const ref = useRef({ pending: 0, href: "", watch: 0, safety: 0, finish: 0 });

  useEffect(() => {
    if (!(window as CapWindow).Capacitor?.isNativePlatform?.()) return;
    const s = ref.current;
    let lastTap = 0;

    const done = () => {
      window.clearInterval(s.watch);
      window.clearTimeout(s.safety);
      s.href = "";
      setState((cur) => (cur === "run" ? "done" : cur));
      window.clearTimeout(s.finish);
      s.finish = window.setTimeout(() => setState("idle"), 450);
    };
    const start = (navigating: boolean) => {
      window.clearTimeout(s.finish);
      setState("run");
      window.clearTimeout(s.safety);
      s.safety = window.setTimeout(done, 12000);
      // Un envoi qui n'interroge pas le serveur ne laisse pas la barre tourner.
      if (!navigating) window.setTimeout(() => s.pending <= 0 && !s.href && done(), 700);
      if (navigating) {
        s.href = location.href;
        window.clearInterval(s.watch);
        s.watch = window.setInterval(() => {
          if (location.href !== s.href) done();
        }, 80);
      }
    };

    const onTap = () => (lastTap = Date.now());
    const onClick = (e: MouseEvent) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = (e.target as Element | null)?.closest("a[href]") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return;
      start(true);
    };
    const onSubmit = () => start(false);

    const nativeFetch = window.fetch;
    window.fetch = (...args: Parameters<typeof fetch>) => {
      if (Date.now() - lastTap > 1000) return nativeFetch(...args);
      s.pending += 1;
      start(false);
      return nativeFetch(...args).finally(() => {
        s.pending -= 1;
        if (s.pending <= 0 && !s.href) done();
      });
    };

    document.addEventListener("pointerdown", onTap, true);
    // Phase de capture : le lien de Next.js annule le clic avant qu'il remonte au document.
    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);
    return () => {
      window.fetch = nativeFetch;
      document.removeEventListener("pointerdown", onTap, true);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
      window.clearInterval(s.watch);
      window.clearTimeout(s.safety);
      window.clearTimeout(s.finish);
    };
  }, []);

  return <div className={`app-progress${state === "idle" ? "" : ` is-${state}`}`} aria-hidden />;
}
