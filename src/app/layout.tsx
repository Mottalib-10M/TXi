import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaxiNoir - La nouvelle référence Taxi",
  description:
    "TaxiNoir - Réservez un taxi professionnel en quelques secondes. Chauffeurs agréés, tarifs réglementés, voies réservées.",
  openGraph: {
    title: "TaxiNoir - La nouvelle référence Taxi",
    description:
      "Réservez un taxi professionnel en quelques secondes. Chauffeurs agréés, tarifs réglementés.",
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
