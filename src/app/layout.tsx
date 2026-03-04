import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réserver un taxi en France - Tarif fixe, chauffeur agréé",
  description:
    "Réservez un taxi en quelques secondes. Chauffeurs agréés, tarifs réglementés, voies réservées, disponible 24h/24 et 7j/7 partout en France. Prix fixe garanti.",
  openGraph: {
    title: "Réserver un taxi en France - Tarif fixe, chauffeur agréé",
    description:
      "Réservez un taxi en quelques secondes. Chauffeurs agréés, tarifs réglementés, voies réservées, disponible 24h/24 et 7j/7 partout en France. Prix fixe garanti.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
