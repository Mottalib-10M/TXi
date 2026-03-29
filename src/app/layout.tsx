import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxiNeo — Taxi prix fixe 24h/24 | Chauffeurs agréés | France",
  description:
    "Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises. Pas de mauvaise surprise.",
  openGraph: {
    title: "TaxiNeo — Taxi prix fixe 24h/24 | Chauffeurs agréés | France",
    description:
      "Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises. Pas de mauvaise surprise.",
    url: "https://taxineo.fr",
    siteName: "TaxiNeo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://taxineo.fr/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaxiNeo — Taxi prix fixe en France",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxiNeo — Taxi prix fixe 24h/24 | Chauffeurs agréés | France",
    description:
      "Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises.",
    images: ["https://taxineo.fr/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
