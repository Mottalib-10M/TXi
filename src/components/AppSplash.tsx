// Écran de chargement de l'app (iPhone et Android), affiché par-dessus la page
// au premier lancement : fond noir, logo au T, « TaxiNeo » et une barre ambre
// qui file comme un feu de taxi. Il prend le relais de l'écran de démarrage
// natif (même composition, assets/splash.png) puis s'efface quand la page est
// prête (NativeBridge). Sur le site, et au-delà du premier affichage de la
// séance, il reste masqué (globals.css, APP_SCRIPT).

export function AppSplash() {
  return (
    <div id="app-splash" aria-hidden>
      <div className="as-mark">
        <svg viewBox="0 0 48 48" width="56" height="56" fill="none">
          <line className="as-bar" x1="12" y1="16" x2="36" y2="16" stroke="white" strokeWidth="4" strokeLinecap="round" />
          <line className="as-stem" x1="24" y1="19" x2="24" y2="36" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="as-word">
        <span>Taxi</span>
        <b>Neo</b>
      </div>
      <div className="as-track">
        <i />
      </div>
    </div>
  );
}
