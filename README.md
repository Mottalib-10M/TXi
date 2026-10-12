# Taxineo

## Courses transmises (P2P) : ouverture aux chauffeurs proches après 30 minutes

Un chauffeur transmet une course à un collègue depuis « Transmettre une course »
(`/dashboard/p2p`, `src/app/api/driver/p2p`) : il fixe le prix et sa commission
(5 à 20 %), puis envoie le lien d'acceptation (Partager, WhatsApp, Copier le lien).
Chaque course de la liste « Courses transmises » s'ouvre (détail, contact du client,
itinéraire) et se repartage tant qu'elle attend ; une course passée ou annulée se
repropose (« Reproposer ce trajet » préremplit le formulaire).

Règle des 30 minutes (`src/lib/escalation.ts`, `src/lib/p2p.ts`) :

- Une course transmise encore en attente (`PENDING`, personne n'a accepté le lien)
  30 minutes après sa création, et dont la date n'est pas passée, est ouverte aux
  chauffeurs de la plateforme : les 3 plus proches du départ dont la zone couvre le
  départ (même sélection que les réservations sans réponse), hors chauffeur qui l'a
  transmise. `escalationPhase` passe à 1, `invitedDriverIds` reçoit ces chauffeurs,
  `p2pOpenedAt` note l'heure d'ouverture.
- Ils sont prévenus comme pour une réservation : notification de l'app (`newRide`),
  e-mail et SMS selon leurs réglages. Le chauffeur qui l'a transmise reçoit la
  notification `p2pOpened`.
- Contact : pour ces chauffeurs (tableau de bord, réservations, e-mails, agenda,
  lien d'acceptation après l'ouverture), le contact est le chauffeur qui a transmis
  la course, jamais le client final : il garde la main.
- Commission : elle reste au chauffeur qui a transmis (`p2pCommissionAmount`,
  `referrerDriverId`), quel que soit le chauffeur qui fait la course ; elle est
  rappelée au chauffeur qui l'accepte. Le premier à accepter l'emporte ; le
  chauffeur qui a transmis est prévenu (`p2pAccepted`).
- Sans chauffeur proche, ou sans réponse 15 minutes après l'ouverture : alerte e-mail
  à l'administration, comme pour les réservations.
- Comptes de démonstration (`src/lib/demo.ts`) : une course transmise par un chauffeur
  de démo n'est jamais ouverte ; un chauffeur de démo n'est jamais invité.

Déclenchement (le cron de Vercel ne passe qu'une fois par jour, à 8 h) :

1. À la lecture : `escalateIfDue()` est appelé par l'espace chauffeur (mise en page,
   tableau de bord, réservations, courses transmises), l'espace organisation,
   l'administration, l'accueil de l'app et le lien d'une course transmise, au plus
   une fois par minute ; la création d'une réservation le lance aussi.
2. Passage planifié GitHub toutes les 10 minutes (`.github/workflows/escalade.yml`),
   qui appelle `/api/cron/escalate-bookings` ; il faut le secret GitHub `CRON_SECRET`
   (même valeur que dans Vercel), sans quoi il ne fait rien.
3. Le cron quotidien de `vercel.json` reste en filet de sécurité.

Une course est donc ouverte entre 30 et environ 40 minutes après sa création. Tous
les passages sont sans double envoi (la course est réservée en base avant d'avertir).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
