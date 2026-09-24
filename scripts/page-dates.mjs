/**
 * page-dates.mjs — date réelle de dernière modification de chaque route (RECETTE §8.4).
 *
 * Lancé avant `next build`. Les pages de TaxiNeo sont engendrées à partir des
 * fichiers de `src/data` : une page de trajet change quand son fichier de
 * données change, pas quand le gabarit change. La date retenue est donc la plus
 * récente entre celle du `page.tsx` de la route et celle des données qui
 * l'alimentent.
 *
 * La date n'est jamais inventée : sans historique git (clone superficiel), on
 * n'écrit rien plutôt que d'afficher une date fausse. Le déploiement doit donc
 * cloner tout l'historique (`fetch-depth: 0`).
 *
 * Écrit `src/lib/page-dates.json` : { "/prefixe/": "AAAA-MM-JJ" }.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();

const dernier = new Map();
try {
  const journal = execFileSync("git", ["log", "--format=@%cs", "--name-only"], {
    cwd: root, encoding: "utf8", maxBuffer: 1 << 28,
  });
  let courante = "";
  for (const ligne of journal.split("\n")) {
    if (ligne.startsWith("@")) courante = ligne.slice(1);
    else if (ligne && !dernier.has(ligne)) dernier.set(ligne, courante);
  }
} catch {
  // Sans historique git — construction depuis une archive, clone superficiel,
  // envoi par le CLI qui n'inclut pas `.git` — on GARDE le fichier déjà
  // commité. L'écraser avec {} effacerait toutes les dates du site alors
  // qu'elles sont justes : une construction dégradée ne doit pas défaire le
  // travail d'une construction complète.
  const cible = join(root, "src", "lib", "page-dates.json");
  if (existsSync(cible)) {
    const n = Object.keys(JSON.parse(readFileSync(cible, "utf8"))).length;
    console.log(`page-dates : pas d'historique git, on garde les ${n} date(s) commitée(s)`);
  } else {
    writeFileSync(cible, "{}\n");
    console.log("page-dates : pas d'historique git et aucun fichier commité, aucune date");
  }
  process.exit(0);
}

// Un fichier modifié mais pas encore commité prend la date du jour : c'est la
// vérité pour une construction locale.
const aujourdhui = new Date().toISOString().slice(0, 10);
const modifies = new Set(
  execFileSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" })
    .split("\n").filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, "")),
);

const dateDe = (...fichiers) => {
  let max = "";
  for (const f of fichiers) {
    const d = modifies.has(f) ? aujourdhui : dernier.get(f);
    if (d && d > max) max = d;
  }
  return max;
};

// Les données qui alimentent chaque famille de routes.
const fichiersData = readdirSync(join(root, "src", "data"))
  .filter((f) => f.endsWith(".ts"))
  .map((f) => `src/data/${f}`);
const dataQui = (motif) => fichiersData.filter((f) => motif.test(f));

const DONNEES = {
  "/trajet/": dataQui(/trajets/),
  "/trajets/": dataQui(/trajets/),
  "/taxi/": dataQui(/cities|departements/),
  "/villes/": dataQui(/cities|departements/),
  "/aeroport/": dataQui(/airports|aeroport/),
  "/aeroports/": dataQui(/airports|aeroport/),
  "/gare/": dataQui(/stations|gare/),
  "/gares/": dataQui(/stations|gare/),
  "/tarif/": dataQui(/tarif|cities/),
  "/tarifs/": dataQui(/tarif|cities/),
  "/service/": dataQui(/services/),
  "/services/": dataQui(/services/),
  "/guide/": dataQui(/guides?/),
  "/guides/": dataQui(/guides?/),
  "/blog/": dataQui(/blog/),
  "/taxi-medical/": dataQui(/medical|tm-/),
};

const routes = {};
const parcourir = (dir) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) { parcourir(p); continue; }
    if (e !== "page.tsx") continue;
    const rel = relative(root, p).split(sep).join("/");
    const brut = "/" + relative(join(root, "src", "app", "[locale]"), dir).split(sep).join("/");
    // On retire les groupes de routes et les segments dynamiques : la date vaut
    // pour toute la famille, puisqu'elle vient du même fichier de données.
    const propre = (brut === "/" ? "/" : brut.replace(/\/?$/, "/"))
      .replace(/\/\(.*?\)\//g, "/")
      .replace(/\[[^\]]*\]\//g, "");
    const sources = [rel];
    for (const [prefixe, fichiers] of Object.entries(DONNEES)) {
      if (propre.startsWith(prefixe)) sources.push(...fichiers);
    }
    const d = dateDe(...sources);
    if (d && (!routes[propre] || d > routes[propre])) routes[propre] = d;
  }
};
parcourir(join(root, "src", "app", "[locale]"));

writeFileSync(join(root, "src", "lib", "page-dates.json"), JSON.stringify(routes, null, 2) + "\n");
console.log(`page-dates : ${Object.keys(routes).length} route(s) datée(s)`);
