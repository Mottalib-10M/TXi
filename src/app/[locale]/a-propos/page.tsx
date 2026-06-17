import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title =
    locale === "en"
      ? "About TaxiNeo — Fixed-price taxi booking platform in France"
      : "A propos de TaxiNeo — Plateforme de reservation taxi prix fixe en France";
  const description =
    locale === "en"
      ? "TaxiNeo connects passengers with licensed taxi drivers across 50+ French cities. Fixed prices, professional drivers, 24/7 availability."
      : "TaxiNeo connecte les passagers avec des chauffeurs de taxi agrees dans plus de 50 villes francaises. Prix fixes, chauffeurs professionnels, disponible 24h/24.";
  return {
    title,
    description,
    openGraph: { title, description },
    alternates: {
      canonical: `https://www.taxineo.fr/${locale}/a-propos`,
      languages: {
        fr: "https://www.taxineo.fr/fr/a-propos",
        en: "https://www.taxineo.fr/en/a-propos",
      },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const isFr = locale === "fr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: isFr ? "A propos de TaxiNeo" : "About TaxiNeo",
    url: `https://www.taxineo.fr/${locale}/a-propos`,
    mainEntity: {
      "@type": "Organization",
      name: "TaxiNeo",
      url: "https://www.taxineo.fr",
      founder: {
        "@type": "Person",
        name: "Mottalib Radif",
        image: "https://www.taxineo.fr/team/mottalib-radif.jpg",
        jobTitle: isFr ? "Fondateur" : "Founder",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {isFr ? "Qui sommes-nous" : "Who we are"}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              {isFr ? "A propos de TaxiNeo" : "About TaxiNeo"}
            </h1>
            <p className="text-lg text-neutral-500 font-light max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? "TaxiNeo est la plateforme francaise qui simplifie la reservation de taxis agrees a prix fixe. Notre mission : rendre chaque trajet transparent, fiable et accessible."
                : "TaxiNeo is the French platform that simplifies booking licensed taxis at fixed prices. Our mission: make every ride transparent, reliable and accessible."}
            </p>
          </div>

          {/* Founder Section */}
          <section className="mb-16">
            <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0 border border-neutral-200">
                  <Image
                    src="/team/mottalib-radif.jpg"
                    alt="Mottalib Radif - Fondateur de TaxiNeo"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-1">Mottalib Radif</h2>
                  <p className="text-sm text-neutral-500 font-light mb-4">
                    {isFr ? "Fondateur de TaxiNeo" : "Founder of TaxiNeo"}
                  </p>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">
                    {isFr
                      ? "Passione par la mobilite et la technologie, j'ai cree TaxiNeo pour offrir une alternative simple et transparente aux plateformes VTC. Notre objectif est de valoriser les chauffeurs de taxi agrees tout en garantissant aux passagers un service de qualite a prix fixe."
                      : "Passionate about mobility and technology, I created TaxiNeo to offer a simple and transparent alternative to VTC platforms. Our goal is to value licensed taxi drivers while guaranteeing passengers a quality fixed-price service."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-8 text-center">
              {isFr ? "Nos valeurs" : "Our values"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "solar:shield-check-linear",
                  title: isFr ? "Transparence" : "Transparency",
                  desc: isFr
                    ? "Prix fixe annonce avant la reservation. Pas de surprise, pas de frais caches."
                    : "Fixed price announced before booking. No surprises, no hidden fees.",
                },
                {
                  icon: "solar:verified-check-linear",
                  title: isFr ? "Qualite" : "Quality",
                  desc: isFr
                    ? "Chauffeurs agrees, vehicules entretenus, service professionnel garanti."
                    : "Licensed drivers, maintained vehicles, guaranteed professional service.",
                },
                {
                  icon: "solar:users-group-rounded-linear",
                  title: isFr ? "Accessibilite" : "Accessibility",
                  desc: isFr
                    ? "Disponible 24h/24, 7j/7 dans plus de 50 villes francaises."
                    : "Available 24/7 in over 50 French cities.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-white border border-neutral-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-4">
                    <Icon icon={v.icon} className="text-neutral-900 text-xl" />
                  </div>
                  <h3 className="text-base font-medium mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How it works summary */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6 text-center">
              {isFr ? "Comment ca fonctionne" : "How it works"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: isFr ? "Reservez en ligne" : "Book online",
                  desc: isFr
                    ? "Indiquez votre depart, destination et horaire. Recevez un prix fixe instantanement."
                    : "Enter your pickup, destination and time. Get a fixed price instantly.",
                },
                {
                  step: "2",
                  title: isFr ? "Confirmez votre trajet" : "Confirm your ride",
                  desc: isFr
                    ? "Un chauffeur agree est assigne a votre course. Vous recevez ses coordonnees."
                    : "A licensed driver is assigned to your ride. You receive their contact details.",
                },
                {
                  step: "3",
                  title: isFr ? "Voyagez sereinement" : "Travel peacefully",
                  desc: isFr
                    ? "Votre chauffeur vous attend au point de rendez-vous. Payez le prix convenu."
                    : "Your driver awaits at the meeting point. Pay the agreed price.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">
                    {s.step}
                  </div>
                  <h3 className="text-base font-medium mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/#reserver"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              {isFr ? "Reserver un taxi maintenant" : "Book a taxi now"}
              <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
