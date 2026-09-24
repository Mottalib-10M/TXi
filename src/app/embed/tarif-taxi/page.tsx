import type { Metadata } from "next";

/**
 * Page destinée à être insérée en iframe sur un site tiers (RECETTE §13).
 *
 * Elle ne porte ni en-tête ni pied : un bloc inséré chez quelqu'un d'autre doit
 * tenir dans quelques centaines de pixels. Elle est en noindex, puisque son
 * contenu existe déjà sur les pages du site, et elle renvoie vers taxineo.fr
 * pour la réservation : c'est le lien qui fait l'intérêt du dispositif.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Barème des tarifs taxi — TaxiNeo",
};

const LIGNES = [
  { lettre: "A", quand: "Jour, retour en charge possible", detail: "Course de jour en semaine, le chauffeur peut recharger sur place." },
  { lettre: "B", quand: "Nuit, dimanche et jours fériés", detail: "De 19 h à 10 h, ainsi que le dimanche et les jours fériés." },
  { lettre: "C", quand: "Jour, retour à vide", detail: "Le chauffeur rentre sans passager : le prix au kilomètre double." },
  { lettre: "D", quand: "Nuit, retour à vide", detail: "Cumul du tarif de nuit et du retour à vide." },
];

export default function EmbedTarifTaxi() {
  return (
    <main className="bg-white text-neutral-900 p-4 font-sans">
      <h1 className="text-base font-semibold tracking-tight mb-1">
        Tarifs taxi : à quoi correspondent les lettres du compteur
      </h1>
      <p className="text-xs text-neutral-500 font-light mb-4">
        Les montants sont plafonnés par arrêté préfectoral, département par département.
      </p>
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="text-left border-b border-neutral-200">
            <th className="py-2 pr-3 font-medium">Tarif</th>
            <th className="py-2 pr-3 font-medium">Quand il s&apos;applique</th>
          </tr>
        </thead>
        <tbody>
          {LIGNES.map((l) => (
            <tr key={l.lettre} className="border-b border-neutral-100 align-top">
              <td className="py-2 pr-3 font-medium">{l.lettre}</td>
              <td className="py-2 pr-3 text-neutral-600 font-light">
                {l.quand}
                <span className="block text-neutral-500">{l.detail}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-xs text-neutral-500 font-light">
        Estimation seulement : le montant réel dépend de l&apos;itinéraire et du trafic.{" "}
        <a
          className="underline"
          href="https://www.taxineo.fr/tarifs"
          target="_blank"
          rel="noopener"
        >
          Voir les tarifs détaillés sur TaxiNeo
        </a>
      </p>
    </main>
  );
}
