import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "@/components/Providers";
import { ImpersonationBanner } from "@/components/ui/ImpersonationBanner";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

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

  return (
    <html lang={locale}>
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
