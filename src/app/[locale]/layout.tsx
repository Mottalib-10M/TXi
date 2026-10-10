import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";
import { Providers } from "@/components/Providers";
import { ImpersonationBanner } from "@/components/ui/ImpersonationBanner";
import { routing } from "@/i18n/routing";
import { NativeBridge } from "@/components/NativeBridge";
import { APP_SCRIPT } from "@/lib/nativeApp";

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
        // §8 : l'Organization éditrice doit porter sa date de création, ses
        // principes éditoriaux et ses domaines de compétence. Sans eux, Google
        // n'a aucun élément pour rattacher le site à un éditeur identifiable.
        foundingDate: "2025-01-01",
        publishingPrinciples: "https://www.taxineo.fr/a-propos",
        knowsAbout: locale === "en"
          ? ["taxi fares in France", "urban mobility", "medical transport", "airport transfers"]
          : ["tarifs des taxis en France", "mobilité urbaine", "transport médical", "transferts aéroport"],
        logo: {
          "@type": "ImageObject",
          url: "https://www.taxineo.fr/apple-icon",
          width: 180,
          height: 180,
        },
        // L'éditeur est la société, pas une personne physique (décision du
        // 2026-09-20). `founder` attend une Person : on déclare donc la société
        // comme éditrice via `publisher`, pas comme fondatrice d'elle-même.
        publisher: {
          "@type": "Organization",
          name: "Radif Partners",
          description: locale === "en"
            ? "Radif Partners publishes TaxiNeo, a booking service for licensed taxis. The company specialises in urban mobility and passenger transport."
            : "Radif Partners édite TaxiNeo, service de réservation de taxis agréés. La société est spécialisée dans la mobilité urbaine et le transport de personnes.",
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
            item: `https://www.taxineo.fr${locale === "fr" ? "" : `/${locale}`}`,
          },
        ],
      },
    ],
  };

  return (
    <html lang={locale}>
      <head>
        {/* Dans l'app : <html data-app> posé avant l'affichage (styles propres à l'app). */}
        <script dangerouslySetInnerHTML={{ __html: APP_SCRIPT }} />
        {/* Microsoft Clarity sans cookie : consentement refusé (consentv2) mis en file avant le script (RECETTE §15.6). Jamais dans l'app. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if(!document.documentElement.hasAttribute("data-app"))(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","xm1mwyb2kd");`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body
        data-clarity-mask="true"
        className={`${inter.className} bg-white text-neutral-900 antialiased selection:bg-neutral-200 selection:text-black overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] focus:rounded-lg focus:bg-neutral-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          {locale === "en" ? "Skip to content" : "Aller au contenu"}
        </a>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <NativeBridge />
            <ImpersonationBanner />
            <div id="main-content" />
            {children}
            <Toaster position="top-right" richColors />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
