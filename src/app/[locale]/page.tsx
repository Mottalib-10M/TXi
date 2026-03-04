import type { Metadata } from "next";
import { Icon } from "@iconify/react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { AddToFavoritesPopup } from "@/components/ui/AddToFavoritesPopup";
import { popularCities, cities } from "@/data/cities";
import { popularAirports, airports } from "@/data/airports";
import { popularStations, stations } from "@/data/stations";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

export default async function HomePage() {
  const t = await getTranslations("home");
  const tc = await getTranslations("common");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <ScrollAnimation />

      {/* Main Hero Section */}
      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24" id="reserver">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Booking Form */}
            <div className="md:max-w-xl fade-up">
              <div className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-medium text-neutral-600">
                  {t("badge")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-4">
                {t("heroTitle1")}
                <br />
                <span className="gradient-text">{t("heroTitle2")}</span>
              </h1>
              <p className="text-base md:text-lg text-neutral-500 mb-8 max-w-md font-light leading-relaxed">
                {t("heroSubtitle")}
              </p>

              <BookingForm />
            </div>

            {/* Right: Visual/Map Representation */}
            <div
              className="hidden md:flex h-full min-h-[520px] rounded-3xl bg-neutral-50 border border-neutral-100 relative overflow-hidden items-center justify-center"
              style={{
                backgroundImage: "radial-gradient(#e5e5e5 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            >
              <div className="absolute w-80 h-80 bg-white/60 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 500 500">
                <path
                  d="M160 170 Q 250 220 300 300 Q 340 360 350 380"
                  stroke="#d4d4d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Driver card */}
              <div className="relative bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl shadow-black/5 w-64 animate-float z-10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden">
                    <Icon icon="solar:user-linear" className="text-neutral-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t("driverName")}</p>
                    <div className="flex items-center text-xs text-neutral-500 gap-1 font-light">
                      <Icon icon="solar:star-bold" className="text-amber-500" /> {t("driverRating")}{" "}
                      <span className="text-neutral-300">|</span> {t("driverSubtitle")}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500 font-light">{t("estimatedArrival")}</span>
                  <span className="font-semibold text-neutral-900">{t("arrivalTime")}</span>
                </div>
                <div className="w-full bg-neutral-100 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-neutral-900 h-full w-2/3 rounded-full transition-all duration-1000" />
                </div>
              </div>

              {/* Price badge */}
              <div className="absolute bottom-24 right-12 bg-white border border-neutral-200 rounded-xl p-3 shadow-lg shadow-black/5 animate-float-delayed z-10">
                <div className="flex items-center gap-2">
                  <Icon icon="solar:tag-price-linear" className="text-neutral-600" />
                  <div>
                    <p className="text-xs text-neutral-500 font-light">{t("estimate")}</p>
                    <p className="text-sm font-semibold">18,50 €</p>
                  </div>
                </div>
              </div>

              {/* Location Pins */}
              <div className="absolute top-[33%] left-[30%] z-10">
                <div className="w-4 h-4 bg-neutral-900 rounded-full border-4 border-white shadow-md relative">
                  <div className="absolute inset-0 bg-neutral-900 rounded-full animate-ping-slow" />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 whitespace-nowrap bg-white/80 px-1.5 py-0.5 rounded">
                  {t("departure")}
                </span>
              </div>

              <div className="absolute bottom-[22%] right-[28%] z-10">
                <div className="w-4 h-4 bg-neutral-900 rounded-sm border-4 border-white shadow-md" />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 whitespace-nowrap bg-white/80 px-1.5 py-0.5 rounded">
                  {t("arrival")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-t border-neutral-100 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center fade-up">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight counter">
                {t("statsCities")}
              </p>
              <p className="text-sm text-neutral-500 font-light mt-1">{t("statsCitiesLabel")}</p>
            </div>
            <div className="text-center fade-up fade-up-delay-1">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight counter">{t("stats247")}</p>
              <p className="text-sm text-neutral-500 font-light mt-1">{t("stats247Label")}</p>
            </div>
            <div className="text-center fade-up fade-up-delay-2">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight counter">{t("statsFixedPrice")}</p>
              <p className="text-sm text-neutral-500 font-light mt-1">{t("statsFixedPriceLabel")}</p>
            </div>
            <div className="text-center fade-up fade-up-delay-3">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight counter">{t("stats100")}</p>
              <p className="text-sm text-neutral-500 font-light mt-1">
                {t("stats100Label")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section
        className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28"
        id="comment-ca-marche"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("howItWorksSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("howItWorksTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "1",
                title: t("step1Title"),
                desc: t("step1Desc"),
              },
              {
                step: "2",
                title: t("step2Title"),
                desc: t("step2Desc"),
              },
              {
                step: "3",
                title: t("step3Title"),
                desc: t("step3Desc"),
              },
            ].map((item, i) => (
              <div key={item.step} className={`relative fade-up fade-up-delay-${i + 1}`}>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-neutral-900 text-white rounded-2xl flex items-center justify-center shrink-0 text-lg font-semibold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28" id="chauffeurs">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("advantagesSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("advantagesTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "solar:shield-check-linear",
                title: t("feature1Title"),
                desc: t("feature1Desc"),
              },
              {
                icon: "solar:tag-price-linear",
                title: t("feature2Title"),
                desc: t("feature2Desc"),
              },
              {
                icon: "solar:routing-linear",
                title: t("feature3Title"),
                desc: t("feature3Desc"),
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className={`card-hover bg-white border border-neutral-200 rounded-2xl p-6 fade-up fade-up-delay-${i + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon icon={feature.icon} className="text-neutral-900 text-2xl" />
                </div>
                <h3 className="text-lg font-medium tracking-tight mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("testimonialsSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("testimonialsTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: t("testimonial1"),
                name: t("testimonial1Name"),
                location: t("testimonial1Location"),
                initials: "SL",
              },
              {
                text: t("testimonial2"),
                name: t("testimonial2Name"),
                location: t("testimonial2Location"),
                initials: "TM",
              },
              {
                text: t("testimonial3"),
                name: t("testimonial3Name"),
                location: t("testimonial3Location"),
                initials: "AB",
              },
            ].map((testimonial, i) => (
              <div
                key={testimonial.name}
                className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${i + 1}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Icon key={j} icon="solar:star-bold" className="text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-semibold text-neutral-600">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500 font-light">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 md:py-28" id="business">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                {t("businessSubtitle")}
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                {t("businessTitle")}
              </h2>
              <p className="text-neutral-500 font-light leading-relaxed mb-8">
                {t("businessDesc")}
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  t("businessFeature1"),
                  t("businessFeature2"),
                  t("businessFeature3"),
                  t("businessFeature4"),
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-neutral-900 rounded-full flex items-center justify-center shrink-0">
                      <Icon icon="solar:check-read-linear" className="text-white text-xs" />
                    </div>
                    <span className="text-sm font-light text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?sujet=demo"
                className="inline-flex items-center gap-2 bg-neutral-950 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors btn-lift"
              >
                {t("requestDemo")}
                <Icon icon="solar:arrow-right-linear" />
              </Link>
            </div>

            {/* Business visual */}
            <div className="hidden md:block fade-up fade-up-delay-2">
              <div className="bg-neutral-950 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800 rounded-full blur-3xl opacity-50" />
                <div className="relative space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-white text-sm font-medium">{t("dashboardTitle")}</p>
                    <span className="text-xs text-neutral-500 font-light">{t("dashboardMonth")}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("rides")}</p>
                      <p className="text-xl font-semibold text-white mt-1">342</p>
                      <p className="text-xs text-green-400 mt-1">+12%</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("budget")}</p>
                      <p className="text-xl font-semibold text-white mt-1">8 420 €</p>
                      <p className="text-xs text-green-400 mt-1">-5%</p>
                    </div>
                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                      <p className="text-xs text-neutral-500 font-light">{t("employees")}</p>
                      <p className="text-xl font-semibold text-white mt-1">47</p>
                      <p className="text-xs text-neutral-500 mt-1">{t("active")}</p>
                    </div>
                  </div>
                  <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                    <p className="text-xs text-neutral-500 font-light mb-3">
                      {t("ridesPerWeek")}
                    </p>
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 45, 80, 100, 55, 70].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 ${i === 4 ? "bg-white" : "bg-neutral-700"} rounded-t-sm`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-neutral-600">
                      {[t("mon"), t("tue"), t("wed"), t("thu"), t("fri"), t("sat"), t("sun")].map((d) => (
                        <span key={d}>{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 md:py-28" id="villes">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("citiesSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("citiesTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {popularCities.map((city, i) => (
              <Link
                key={city.slug}
                href={`/taxi-${city.slug}` as never}
                className={`group bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                    <Icon icon="solar:map-point-linear" className="text-neutral-600 text-lg group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-medium tracking-tight">Taxi {city.name}</h3>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-light">
                  <span>{city.driverCount}+ {tc("drivers")}</span>
                  <span>{city.avgWaitTime} {tc("wait")}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center fade-up">
            <Link
              href="/villes"
              className="text-sm font-medium text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
            >
              {t("seeAllCities", { count: cities.length })} <Icon icon="solar:arrow-right-linear" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* Airports Section */}
      <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28" id="aeroports">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("airportsSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("airportsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {popularAirports.map((ap, i) => (
              <Link
                key={ap.slug}
                href={`/taxi-aeroport-${ap.slug}` as never}
                className={`group bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 group-hover:text-white transition-colors"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">{ap.iata}</h3>
                    <p className="text-xs text-neutral-500 font-light">{ap.city}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-light">
                  <span>{tc("from")} {ap.transferPrice}</span>
                  <span>{ap.transferTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center fade-up">
            <Link
              href="/aeroports"
              className="text-sm font-medium text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
            >
              {t("seeAllAirports", { count: airports.length })} <Icon icon="solar:arrow-right-linear" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stations Section */}
      <section className="py-20 md:py-28" id="gares">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
              {t("stationsSubtitle")}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {t("stationsTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {popularStations.map((st, i) => (
              <Link
                key={st.slug}
                href={`/taxi-gare-${st.slug}` as never}
                className={`group bg-white border border-neutral-200 rounded-2xl p-5 card-hover fade-up fade-up-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-600 group-hover:text-white transition-colors"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-tight">{st.name}</h3>
                    <p className="text-xs text-neutral-500 font-light">{st.city}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-light">
                  <span>{tc("from")} {st.transferPrice}</span>
                  <span>{st.transferTime}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center fade-up">
            <Link
              href="/gares"
              className="text-sm font-medium text-neutral-900 bg-neutral-100 border border-neutral-300 rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors inline-flex items-center gap-1.5"
            >
              {t("seeAllStations", { count: stations.length })} <Icon icon="solar:arrow-right-linear" className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <AddToFavoritesPopup />

      <Footer />
    </div>
  );
}
