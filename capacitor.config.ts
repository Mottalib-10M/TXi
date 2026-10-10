// L'app Taxineo (App Store et Google Play) : une coque native qui affiche le
// site en ligne, avec l'agent « TaxineoApp » pour que le serveur la reconnaisse
// (src/lib/nativeApp.ts). Les écrans viennent donc toujours de la dernière
// version déployée sur Vercel, sans nouvelle soumission aux stores. Hors
// connexion, la page mobile/www/offline.html s'affiche.
// Construire : npm run app:sync ; la compilation se fait sur GitHub Actions (.github/workflows/app.yml).

import type { CapacitorConfig } from "@capacitor/cli";

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
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      launchShowDuration: 3000,
      backgroundColor: "#ffffff",
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
