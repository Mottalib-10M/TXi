import { Icon } from "@iconify/react";

export function CityWhyUs({ cityName }: { cityName: string }) {
  const advantages = [
    {
      icon: "solar:shield-check-linear",
      title: "Chauffeurs professionnels",
      desc: `Tous nos chauffeurs à ${cityName} sont des professionnels agréés, formés et connaissant parfaitement leur ville. Votre sécurité est notre priorité absolue.`,
    },
    {
      icon: "solar:tag-price-linear",
      title: "Tarifs réglementés",
      desc: `Fini les prix qui explosent lors des fortes demandes. À ${cityName}, profitez de la stabilité des tarifs réglementés par la préfecture.`,
    },
    {
      icon: "solar:routing-linear",
      title: "Voies réservées",
      desc: `En tant que taxis officiels, nos véhicules à ${cityName} utilisent les couloirs de bus pour vous faire gagner un temps précieux sur chaque trajet.`,
    },
  ];

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            Nos avantages
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Pourquoi choisir TaxiNoir à {cityName}
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
