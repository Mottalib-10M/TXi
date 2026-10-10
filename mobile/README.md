# App Taxineo (iPhone et Android)

Une coque native Capacitor 8 qui affiche le site en ligne (https://www.taxineo.fr).
Les écrans viennent toujours de la dernière version déployée sur Vercel : une
correction du site est aussitôt dans l'app, sans nouvelle soumission aux stores.
Il ne faut soumettre une nouvelle version que si la partie native change
(icône, modules, autorisations).

## Ce que l'app ajoute au site

- Accueil propre à l'app (`/app`, `src/app/[locale]/app/page.tsx`) : réserver un taxi,
  mes réservations, espace chauffeur ou organisation. Le site y redirige l'app (`src/middleware.ts`).
- Feuille de partage native, vibrations légères, bouton retour Android, retour par glissement sur iPhone.
- Liens universels : espace chauffeur et organisation, parrainage, réservations, connexion
  (`src/app/.well-known/*`).
- Écran hors connexion (`mobile/www/offline.html`).
- Suppression du compte chauffeur ou organisation (profil, paramètres), exigée par les deux stores.
- Pas de mesure d'audience (Clarity coupé quand `<html data-app>`), pas de pied de page de référencement.
- Adresse de départ depuis la position (autorisation de localisation demandée à l'usage).

Le pont est dans `src/components/NativeBridge.tsx`, la détection dans
`src/lib/nativeApp.ts` (agent `TaxineoApp/1`), la configuration dans `capacitor.config.ts`.

## Construire

```
npm run app:sync        # après un changement de module ou de configuration
npm run app:assets      # régénère icônes et écrans de démarrage depuis assets/
```

La compilation se fait sur GitHub Actions (`.github/workflows/app.yml`) : à chaque
changement de la partie native, et à la demande (Actions > App > Run workflow, case
« Publier ») pour l'envoi sur TestFlight.

## Secrets GitHub (compilation)

- `ASC_KEY` : contenu du fichier `.p8` de la clé d'API App Store Connect (identifiant 24HMDSU2SP, rôle Admin). Équipe Apple : DMVV2JDSY4.
- Android (plus tard) : `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, `ANDROID_KEY_PASSWORD`, `PLAY_SERVICE_ACCOUNT`.

## Identité

- Identifiant : `com.taxineo.app` (iOS et Android)
- Nom sous l'icône : Taxineo ; nom dans les stores : Taxineo – Taxi prix fixe
- iPhone uniquement (pas d'iPad), portrait ; Android 7 minimum (SDK 24), cible SDK 36
