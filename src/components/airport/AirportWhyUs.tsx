import { Icon } from "@iconify/react";

export function AirportWhyUs({ airportName }: { airportName: string }) {
  const advantages = [
    {
      icon: "solar:eye-scan-linear",
      title: "Suivi de vol en temps réel",
      desc: `Votre chauffeur suit votre vol en temps réel. Si votre avion a du retard à ${airportName}, il adapte son heure d'arrivée. Attente gratuite jusqu'à 45 minutes.`,
    },
    {
      icon: "solar:tag-price-linear",
      title: "Tarifs forfaitaires garantis",
      desc: `Le prix est fixé à la réservation et ne change jamais. Pas de compteur, pas de surprise liée aux embouteillages. Forfaits clairs depuis ${airportName}.`,
    },
    {
      icon: "solar:user-id-linear",
      title: "Accueil personnalisé",
      desc: `Votre chauffeur vous attend en zone d'arrivée à ${airportName} avec une pancarte à votre nom et vous aide avec vos bagages. Service premium.`,
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            Nos avantages
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Pourquoi choisir TaxiNoir pour {airportName}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`bg-white border border-neutral-200 rounded-2xl p-6 card-hover fade-up fade-up-delay-${i + 1}`}
            >
              <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-xl flex items-center justify-center mb-5">
                <Icon icon={adv.icon} className="text-neutral-900 text-2xl" />
              </div>
              <h3 className="text-lg font-medium tracking-tight mb-2">{adv.title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
