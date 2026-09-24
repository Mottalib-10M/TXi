import type { Metadata } from "next";

/**
 * Page transactionnelle : pas d'indexation (RECETTE §11).
 *
 * Un formulaire de connexion ou d'inscription n'apporte aucune réponse à une
 * recherche : Google n'a pas à l'indexer, et l'indexer diluerait le site sur
 * des pages sans contenu propre. L'intention « devenir chauffeur » est déjà
 * couverte par /devenir-chauffeur, qui est, elle, indexable.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
