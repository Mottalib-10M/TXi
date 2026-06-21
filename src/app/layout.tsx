import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxineo.fr"),
  title: "TaxiNeo — Taxi prix fixe 24h/24 | Chauffeurs agréés | France",
  description:
    "Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises.",
  authors: [{ name: "Mottalib Radif", url: "https://www.taxineo.fr" }],
  creator: "Mottalib Radif",
  publisher: "TaxiNeo",
  openGraph: {
    title: "TaxiNeo — Taxi prix fixe 24h/24 | Chauffeurs agréés | France",
    description:
      "Réservez un taxi agréé en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes françaises.",
    url: "https://www.taxineo.fr",
    siteName: "TaxiNeo",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://www.taxineo.fr/opengraph-image",
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
    images: ["https://www.taxineo.fr/opengraph-image"],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "msvalidate.01": "BING_VERIFY_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
