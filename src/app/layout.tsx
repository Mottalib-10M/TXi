import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  return (
    <html lang="fr">
      <body
        className={`${inter.className} bg-white text-neutral-900 antialiased selection:bg-neutral-200 selection:text-black overflow-x-hidden`}
      >
        <Providers>
          {children}
          <Toaster position="top-right" richColors />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
