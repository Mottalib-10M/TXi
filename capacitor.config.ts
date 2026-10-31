// L'app Taxineo (App Store et Google Play) : une coque native qui affiche le
// site en ligne, avec l'agent « TaxineoApp » pour que le serveur la reconnaisse
// (src/lib/nativeApp.ts). Les écrans viennent donc toujours de la dernière
// version déployée sur Vercel, sans nouvelle soumission aux stores. Hors
// connexion, la page mobile/www/offline.html s'affiche.
// Construire : npm run app:sync ; la compilation se fait sur GitHub Actions (.github/workflows/app.yml).

import { existsSync } from "node:fs";
import type { CapacitorConfig } from "@capacitor/cli";

// Android : les notifications ne marchent qu'avec le projet Firebase
// (android/app/google-services.json) ; sans lui, l'inscription planterait
// l'app. L'agent « Push/1 » dit au site qu'il peut les demander (NativeBridge).
const androidPush = existsSync("android/app/google-services.json");

const url = process.env.CAP_SERVER_URL || "https://www.taxineo.fr";

const config: CapacitorConfig = {
  appId: "com.taxineo.app",
  appName: "Taxineo",
  webDir: "mobile/www",
  appendUserAgent: "TaxineoApp/1",
  backgroundColor: "#ffffff",
  server: {
    url,
    cleartext: url.startsWith("http://"),
    errorPath: "offline.html",
    allowNavigation: ["taxineo.fr", "www.taxineo.fr"],
  },
  ios: {
    contentInset: "never",
    scheme: "Taxineo",
    preferredContentMode: "mobile",
  },
  android: {
    allowMixedContent: false,
    appendUserAgent: androidPush ? "TaxineoApp/1 Push/1" : "TaxineoApp/1",
  },
  plugins: {
    SplashScreen: {
      // Le site masque l'écran de démarrage dès qu'il est prêt (NativeBridge) ;
      // au pire, il se masque seul au bout de 5 secondes.
      launchAutoHide: true,
      launchShowDuration: 5000,
      backgroundColor: "#0a0a0a",
      showSpinner: false,
      androidScaleType: "CENTER_INSIDE",
    },
    SystemBars: {
      insetsHandling: "css",
      initialViewportFitValueHint: "cover",
      style: "LIGHT",
    },
    Keyboard: {
      resizeOnFullScreen: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
