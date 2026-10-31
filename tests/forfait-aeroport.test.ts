/**
 * Forfaits taxis parisiens Paris ↔ CDG / Orly (src/lib/forfait-aeroport.ts).
 * Source des montants : arrêté du 24 décembre 2025 (JORFTEXT000053228231), annexe A « Forfaits parisiens »,
 * et service-public.gouv.fr, actualité A15396 du 16/01/2026 (lue le 31/10/2026) :
 * CDG – rive droite 56 €, CDG – rive gauche 65 €, Orly – rive droite 45 €, Orly – rive gauche 36 € ;
 * suppléments taxis parisiens : réservation immédiate 4 €, à l'avance 7 €.
 * Lancer : npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { aeroportProche, riveDepuisCodeInsee, forfaitParisAeroport } from "../src/lib/forfait-aeroport";

const CDG = { lat: 49.0097, lng: 2.5479 };
const ORLY = { lat: 48.7262, lng: 2.3652 };
const GARE_DE_LYON = { lat: 48.8443, lng: 2.3734, citycode: "75112" }; // Paris 12e, rive droite
const MONTPARNASSE = { lat: 48.8412, lng: 2.3209, citycode: "75115" }; // Paris 15e, rive gauche
const NOW = new Date("2026-10-28T20:00:00Z");

test("aéroports reconnus (aérogares CDG 2E et Orly 4), Paris non", () => {
  assert.equal(aeroportProche(49.004, 2.571), "CDG");
  assert.equal(aeroportProche(48.7233, 2.359), "ORY");
  assert.equal(aeroportProche(GARE_DE_LYON.lat, GARE_DE_LYON.lng), null);
});

test("rive depuis le code INSEE de l'arrondissement", () => {
  assert.equal(riveDepuisCodeInsee("75112"), "droite");
  assert.equal(riveDepuisCodeInsee("75104"), "droite");
  for (const c of ["75105", "75106", "75107", "75113", "75114", "75115"]) assert.equal(riveDepuisCodeInsee(c), "gauche");
  assert.equal(riveDepuisCodeInsee("75056"), null);
  assert.equal(riveDepuisCodeInsee("92012"), null);
  assert.equal(riveDepuisCodeInsee(null), null);
});

test("cas de l'audit : Gare de Lyon → CDG, maintenant = 56 € + 4 € (et non 71,38 €)", () => {
  const f = forfaitParisAeroport({ depart: GARE_DE_LYON, arrivee: CDG, prisEnCharge: NOW, maintenant: NOW });
  assert.deepEqual(f, { aeroport: "CDG", rive: "droite", forfait: 56, supplement: 4, reservation: "immediate", total: 60 });
});

test("rive gauche → CDG réservé la veille = 65 € + 7 €", () => {
  const f = forfaitParisAeroport({ depart: MONTPARNASSE, arrivee: CDG, prisEnCharge: new Date("2026-10-29T06:00:00Z"), maintenant: NOW });
  assert.equal(f?.forfait, 65);
  assert.equal(f?.supplement, 7);
  assert.equal(f?.total, 72);
});

test("Orly → Paris, dans les deux sens : 45 € rive droite, 36 € rive gauche", () => {
  assert.equal(forfaitParisAeroport({ depart: ORLY, arrivee: GARE_DE_LYON, prisEnCharge: NOW, maintenant: NOW })?.forfait, 45);
  assert.equal(forfaitParisAeroport({ depart: ORLY, arrivee: MONTPARNASSE, prisEnCharge: NOW, maintenant: NOW })?.forfait, 36);
});

test("pas de forfait hors Paris, entre deux aéroports ou dans Paris", () => {
  const laDefense = { lat: 48.8919, lng: 2.2378, citycode: "92062" };
  assert.equal(forfaitParisAeroport({ depart: laDefense, arrivee: CDG, prisEnCharge: NOW, maintenant: NOW }), null);
  assert.equal(forfaitParisAeroport({ depart: ORLY, arrivee: CDG, prisEnCharge: NOW, maintenant: NOW }), null);
  assert.equal(forfaitParisAeroport({ depart: GARE_DE_LYON, arrivee: MONTPARNASSE, prisEnCharge: NOW, maintenant: NOW }), null);
});
