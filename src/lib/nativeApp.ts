// L'app iPhone et Android (Capacitor, dossiers ios/ et android/) affiche le
// site dans une vue web et ajoute « TaxineoApp/<version> » à son agent : le
// serveur sait ainsi qu'il répond à l'app (accueil propre à l'app). Côté
// navigateur, <html data-app> coupe la mesure d'audience et le pied de page.

export const APP_AGENT = "TaxineoApp";

export function isAppAgent(userAgent: string | null | undefined): boolean {
  return Boolean(userAgent && userAgent.includes(APP_AGENT));
}

/** Script de <head> : marque <html data-app> dès le premier rendu dans l'app (window.Capacitor est injecté avant la page). */
export const APP_SCRIPT = `(function(){try{var c=window.Capacitor;if(c&&c.isNativePlatform&&c.isNativePlatform()){document.documentElement.setAttribute("data-app",c.getPlatform())}}catch(e){}})();`;
