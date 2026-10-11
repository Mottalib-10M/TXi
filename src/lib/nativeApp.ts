// L'app iPhone et Android (Capacitor, dossiers ios/ et android/) affiche le
// site dans une vue web et ajoute « TaxineoApp/<version> » à son agent : le
// serveur sait ainsi qu'il répond à l'app (accueil propre à l'app). Côté
// navigateur, <html data-app> coupe la mesure d'audience et le pied de page.

export const APP_AGENT = "TaxineoApp";

export function isAppAgent(userAgent: string | null | undefined): boolean {
  return Boolean(userAgent && userAgent.includes(APP_AGENT));
}

/**
 * Script de <head> : marque <html data-app> dès le premier rendu dans l'app (window.Capacitor est
 * injecté avant la page), bloque le zoom automatique sur les champs de saisie (maximum-scale=1)
 * et ne montre l'écran de chargement (AppSplash) qu'au premier affichage de la séance.
 */
export const APP_SCRIPT = `(function(){try{var c=window.Capacitor;if(c&&c.isNativePlatform&&c.isNativePlatform()){var h=document.documentElement;h.setAttribute("data-app",c.getPlatform());try{if(sessionStorage.getItem("txi-splash"))h.setAttribute("data-app-seen","");sessionStorage.setItem("txi-splash","1")}catch(e){}var z=function(){var m=document.querySelector('meta[name="viewport"]');if(m&&m.content.indexOf("maximum-scale")<0)m.content+=", maximum-scale=1, user-scalable=no"};z();document.addEventListener("DOMContentLoaded",z)}}catch(e){}})();`;
