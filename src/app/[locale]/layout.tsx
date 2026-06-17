import Script from "next/script";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";
import { ImpersonationBanner } from "@/components/ui/ImpersonationBanner";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "fr" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "TaxiNeo",
        url: "https://www.taxineo.fr",
        inLanguage: locale === "en" ? "en-FR" : "fr-FR",
        publisher: { "@id": "https://www.taxineo.fr/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.taxineo.fr/villes?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.taxineo.fr/#organization",
        name: "TaxiNeo",
        url: "https://www.taxineo.fr",
        logo: {
          "@type": "ImageObject",
          url: "https://www.taxineo.fr/logo.svg",
          width: 180,
          height: 40,
        },
        founder: {
          "@type": "Person",
          name: "Mottalib Radif",
          image: "https://www.taxineo.fr/team/mottalib-radif.jpg",
          jobTitle: "Fondateur",
          url: "https://www.taxineo.fr/a-propos",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+33759592934",
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: ["French", "English"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "FR",
        },
        sameAs: [],
      },
      {
        "@type": "TaxiService",
        name: "TaxiNeo",
        url: "https://www.taxineo.fr",
        provider: { "@id": "https://www.taxineo.fr/#organization" },
        areaServed: { "@type": "Country", name: "France" },
        serviceType: "Taxi",
        description:
          locale === "en"
            ? "Book a licensed taxi in seconds. Fixed price guaranteed, professional drivers, available 24/7 in 50+ French cities."
            : "Reservez un taxi agree en quelques secondes. Prix fixe garanti, chauffeurs professionnels, disponible 24h/24 dans 50+ villes francaises.",
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: `https://www.taxineo.fr/${locale}`,
          },
        ],
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2Z22GS67QY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2Z22GS67QY');
          `}
        </Script>
        <Script
          src="https://t.contentsquare.net/uxa/57182d25bfaa1.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.className} bg-white text-neutral-900 antialiased selection:bg-neutral-200 selection:text-black overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ImpersonationBanner />
            {children}
            <Toaster position="top-right" richColors />
            <SpeedInsights />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
