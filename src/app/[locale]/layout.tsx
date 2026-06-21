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
          jobTitle: locale === "en" ? "Urban Mobility and Transportation Expert" : "Expert en mobilité urbaine et transport",
          description: locale === "en"
            ? "Urban mobility and transportation solutions expert, MBA INSEAD graduate. Passionate about innovation in taxi services and passenger transport."
            : "Expert en mobilité urbaine et solutions de transport, diplômé MBA de l'INSEAD. Passionné par l'innovation dans le secteur du taxi et du transport de personnes.",
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
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","CLARITY_PROJECT_ID");
            clarity("set","language","${locale}");
            clarity("set","page_path",window.location.pathname);
          `}
        </Script>
      </head>
      <body
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
            <ImpersonationBanner />
            <div id="main-content" />
            {children}
            <Toaster position="top-right" richColors />
            <SpeedInsights />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
