import Link from "next/link";

export function CityBreadcrumb({ cityName }: { cityName: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.taxinoir.fr" },
      { "@type": "ListItem", position: 2, name: "Taxi en France", item: "https://www.taxinoir.fr/villes" },
      { "@type": "ListItem", position: 3, name: `Taxi ${cityName}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-neutral-500 font-light mb-6" aria-label="Fil d'ariane">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-neutral-900 transition-colors">Accueil</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/villes" className="hover:text-neutral-900 transition-colors">Taxi en France</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-neutral-900 font-medium">Taxi {cityName}</li>
        </ol>
      </nav>
    </>
  );
}
