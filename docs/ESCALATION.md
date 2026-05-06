# Processus d'Escalation - TaxiNeo

## Vue d'ensemble

Quand un client crée une réservation, le chauffeur assigné a **15 minutes** pour répondre. S'il ne répond pas ou refuse, le système escalade automatiquement vers d'autres chauffeurs, puis vers l'admin.

```
RESERVATION CREEE
       |
       v
[Chauffeur assigné - 15 min pour répondre]
       |
       |--- Accepte --> FIN (course confirmée)
       |--- Refuse  --> Escalade immédiate Phase 1
       |--- Silence --> Phase 1 après 15 min
       |
       v
PHASE 1 : CHAUFFEURS A PROXIMITE
       |
       | - Trouve max 3 chauffeurs dans le rayon
       | - Email timeout au chauffeur original
       | - Email + SMS aux chauffeurs invités
       | - Notification admin ESCALATION_PHASE1
       |
       | [Si aucun chauffeur à proximité --> Phase 2 immédiatement]
       |
       |--- Un chauffeur accepte --> FIN
       |    (email "course prise" aux autres)
       |--- Tous refusent ou silence 15 min
       |
       v
PHASE 2 : ALERTE ADMIN
       |
       | - Email détaillé à l'admin (amradif@gmail.com)
       |   avec infos client + liste chauffeurs contactés
       | - Notification admin ESCALATION_PHASE2
       |
       v
[BOOKING RESTE EN PENDING - intervention manuelle admin]
```

---

## Timing

| Etape | Délai | Depuis |
|-------|-------|--------|
| Phase 1 | 15 minutes | Création de la réservation |
| Phase 2 | 15 minutes | Déclenchement Phase 1 (= 30 min après création) |

Constante : `ESCALATION_DELAY_MS = 15 * 60 * 1000`

---

## Comment les chauffeurs à proximité sont trouvés

1. Récupère tous les chauffeurs `isActive = true` avec `zoneLat`/`zoneLng` renseignés
2. Exclut le chauffeur original
3. Calcule la distance (formule Haversine) entre le lieu de départ et le centre de zone du chauffeur
4. Garde ceux où `distance <= zoneRadius` (défaut 15 km)
5. Trie par distance croissante
6. Prend les **3 premiers**

---

## Quand l'escalation est déclenchée

L'escalation n'est PAS un cron classique. Elle est déclenchée "fire-and-forget" depuis plusieurs endpoints :

| Endpoint | Quand |
|----------|-------|
| `POST /api/bookings` | Après création d'une réservation client |
| `POST /api/org/bookings` | Après création d'une réservation org |
| `GET /api/org/bookings` | Quand l'org consulte ses réservations |
| `GET /api/admin/bookings` | Quand l'admin consulte les réservations |
| `PATCH /api/driver/bookings/[id]` | Quand un chauffeur refuse (escalade immédiate) |
| `GET /api/cron/escalate-bookings` | Endpoint cron optionnel (Bearer token requis) |

La fonction `runEscalation()` est **idempotente** : elle vérifie `escalationPhase` + timestamps avant d'agir, donc l'appeler plusieurs fois ne fait rien de plus.

---

## Champs Prisma utilisés (modèle Booking)

| Champ | Type | Rôle |
|-------|------|------|
| `escalationPhase` | Int | 0 = initial, 1 = chauffeurs invités, 2 = admin notifié |
| `escalatedAt` | DateTime? | Horodatage du passage en Phase 1 |
| `invitedDriverIds` | String[] | IDs des chauffeurs invités en Phase 1 |
| `driverId` | String? | Chauffeur actuellement assigné |
| `status` | BookingStatus | PENDING, ACCEPTED, REJECTED, CANCELLED, COMPLETED |

---

## Emails envoyés

### Phase 1

| Destinataire | Email | Contenu |
|---|---|---|
| Chauffeur original | `buildEscalationTimeoutEmail` | "Votre fenêtre de 15 min a expiré, d'autres chauffeurs ont été invités" |
| Chauffeurs invités (x3 max) | `buildDriverNotificationEmail` | "Nouvelle course disponible #REF" |
| Chauffeurs invités | SMS | "TaxiNeo - Course disponible #REF. DEPART -> ARRIVEE" |

### Phase 2

| Destinataire | Email | Contenu |
|---|---|---|
| Admin (amradif@gmail.com) | Email HTML détaillé | Alerte avec infos client, téléphone, email, trajet, prix, liste des chauffeurs contactés |

### Quand un chauffeur accepte

| Destinataire | Email | Contenu |
|---|---|---|
| Client | Confirmation de réservation | Détails chauffeur + trajet |
| Chauffeur acceptant | Confirmation | Détails client + trajet |
| Autres chauffeurs invités | `buildEscalationResolvedEmail` | "La course a été acceptée par un autre chauffeur" |

---

## Cas de refus

| Situation | Comportement |
|---|---|
| Chauffeur original refuse (Phase 0) | Escalade immédiate vers Phase 1, cherche 3 chauffeurs proches |
| Chauffeur invité refuse (Phase 1) | Retiré de `invitedDriverIds`, rien d'autre |
| Chauffeur original refuse (Phase 1+) | Booking passe en REJECTED, email de refus au client |

---

## Protection contre les acceptations simultanées

Quand un chauffeur accepte, le code utilise `updateMany` avec condition `status: PENDING`. Si deux chauffeurs acceptent en même temps, le premier réussit (count=1), le second reçoit une erreur 409 (count=0, "déjà acceptée").

---

## Points d'attention / Problèmes potentiels

### 1. Pas de notification client après Phase 2
Après que l'admin est notifié, le client ne reçoit aucun email lui disant que personne n'a accepté. La réservation reste en PENDING indéfiniment.

**Suggestion** : Envoyer un email au client après Phase 2 : "Nous cherchons activement un chauffeur, un conseiller vous recontactera."

### 2. Dépendance au trafic pour le déclenchement
L'escalation est déclenchée par les appels API (fire-and-forget). Si personne ne visite le site pendant 30 min, une réservation peut rester bloquée en Phase 0 au-delà du délai.

**Suggestion** : Configurer un Vercel Cron qui appelle `GET /api/cron/escalate-bookings` toutes les 5 minutes.

### 3. Email admin en dur
L'adresse `amradif@gmail.com` est codée en dur dans 3 fichiers différents.

**Suggestion** : Utiliser une variable d'environnement `ADMIN_EMAIL`.

### 4. Pas de Phase 3 / annulation automatique
Après Phase 2, rien ne se passe. Si l'admin ne réagit pas, le booking reste en PENDING pour toujours.

**Suggestion** : Ajouter une Phase 3 (ex: après 2h) qui annule automatiquement et notifie le client avec des alternatives (autre plateforme, numéro de téléphone).

### 5. Limite de 3 chauffeurs invités
Si les 3 refusent ou ne répondent pas, le système ne cherche pas d'autres chauffeurs. Il passe directement en Phase 2.

**Suggestion** : Permettre une 2e vague d'invitations si les 3 premiers refusent (élargir le rayon ou inviter les suivants).

### 6. Chauffeur invité peut compléter une course
Un chauffeur invité qui n'a pas accepté la course pourrait théoriquement la marquer comme COMPLETED (bug de contrôle d'accès).

**Fix** : Vérifier que seul le `driverId` actuel (celui qui a accepté) peut marquer COMPLETED.

---

## Fichiers source

| Fichier | Rôle |
|---------|------|
| `src/lib/escalation.ts` | Logique principale (runEscalation, findNearbyDrivers, notifyAdmin) |
| `src/lib/email.ts` | Templates email (timeout, resolved, notification) |
| `src/app/api/bookings/route.ts` | Déclencheur après création booking |
| `src/app/api/driver/bookings/[id]/route.ts` | Acceptation/refus + escalade immédiate |
| `src/app/api/cron/escalate-bookings/route.ts` | Endpoint cron optionnel |
| `prisma/schema.prisma` | Champs escalation sur Booking |
