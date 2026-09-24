/**
 * Sources officielles de la page (RECETTE §7, E-E-A-T).
 *
 * Une page pilier qui avance des montants réglementés doit dire d'où ils
 * viennent : sans lien vers le texte applicable, le lecteur ne peut pas
 * vérifier, et Google n'a aucun élément pour juger de la fiabilité de la page.
 * Trois sources primaires au minimum.
 */
export function SourcesOfficielles({ locale }: { locale: string }) {
  const fr = locale !== "en";
  const sources = [
    {
      url: "https://www.legifrance.gouv.fr/",
      nom: "Légifrance",
      quoi: fr
        ? "arrêtés annuels relatifs aux tarifs des courses de taxi"
        : "annual orders on taxi fares",
    },
    {
      url: "https://www.economie.gouv.fr/dgccrf",
      nom: "DGCCRF",
      quoi: fr
        ? "réglementation des prix et contrôle de l'affichage"
        : "price regulation and display checks",
    },
    {
      url: "https://www.service-public.fr/particuliers/vosdroits/F2287",
      nom: "Service-Public.fr",
      quoi: fr
        ? "droits du passager, note obligatoire et règles de facturation"
        : "passenger rights, compulsory receipt and billing rules",
    },
  ];
  return (
    <section className="py-12 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-lg font-semibold tracking-tight mb-4">
          {fr ? "Sources officielles" : "Official sources"}
        </h2>
        <ul className="text-sm text-neutral-600 font-light leading-relaxed space-y-2 list-disc pl-5">
          {sources.map((s) => (
            <li key={s.url}>
              <a className="underline" href={s.url} rel="noopener">
                {s.nom}
              </a>{" "}
              — {s.quoi}
            </li>
          ))}
        </ul>
        <p className="text-xs text-neutral-500 font-light mt-4">
          {fr
            ? "Le détail du calcul et la fréquence des mises à jour sont exposés sur notre page méthodologie."
            : "How the calculation works and how often it is updated are set out on our methodology page."}
        </p>
      </div>
    </section>
  );
}
