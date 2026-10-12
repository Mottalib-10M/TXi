"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

/**
 * Paragraphe long replié sur 3 lignes (règle « texte replié », RECETTE §5).
 *
 * Un seul <p>, avec le texte entier dans le HTML : Google et les lecteurs
 * d'écran le lisent en entier. Le bouton « Lire la suite » n'existe que côté
 * client, et seulement si le texte dépasse vraiment 3 lignes.
 */
export function TexteReplie({ texte, className = "" }: { texte: string; className?: string }) {
  const locale = useLocale();
  const ref = useRef<HTMLParagraphElement>(null);
  const [ouvert, setOuvert] = useState(false);
  const [deborde, setDeborde] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mesure = () => setDeborde(el.scrollHeight > el.clientHeight + 1);
    mesure();
    window.addEventListener("resize", mesure);
    return () => window.removeEventListener("resize", mesure);
  }, []);

  return (
    <div className={className}>
      <p ref={ref} className={`text-sm text-neutral-600 font-light leading-relaxed max-w-2xl ${ouvert ? "" : "line-clamp-3"}`}>
        {texte}
      </p>
      {(deborde || ouvert) && (
        <button
          type="button"
          onClick={() => setOuvert(!ouvert)}
          aria-expanded={ouvert}
          className="mt-1 text-sm font-medium text-neutral-900 underline underline-offset-2 hover:text-neutral-600"
        >
          {ouvert
            ? locale === "en" ? "Show less" : "Réduire"
            : locale === "en" ? "Read more" : "Lire la suite"}
        </button>
      )}
    </div>
  );
}
