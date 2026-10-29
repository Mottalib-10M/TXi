// Liste des gares SNCF du Radar (src/data/sncf-stations.json), tirée des horaires
// ouverts de la SNCF (transport.data.gouv.fr, jeu « horaires-sncf »). Seules les
// gares françaises desservies par un train sont gardées, pas les arrêts de car.
// À relancer de temps en temps : node scripts/radar-stations.mjs

import { writeFileSync } from "node:fs";
import { unzipSync, strFromU8 } from "fflate";

const GTFS_URL = "https://eu.ftp.opendatasoft.com/sncf/plandata/Export_OpenData_SNCF_GTFS_NewTripId.zip";

const zip = new Uint8Array(await (await fetch(GTFS_URL)).arrayBuffer());
const files = unzipSync(zip, { filter: (f) => f.name === "stops.txt" });
const lines = strFromU8(files["stops.txt"]).split(/\r?\n/).slice(1).filter(Boolean);

const areas = new Map();
const byTrain = new Set();
for (const line of lines) {
  const [id, name, , lat, lon, , , type, parent] = line.split(",");
  if (type === "1") {
    const uic = id.replace("StopArea:OCE", "");
    if (uic.startsWith("87")) areas.set(id, [uic, name, Number(Number(lat).toFixed(5)), Number(Number(lon).toFixed(5))]);
  } else if (!/^StopPoint:OCE(Car|Navette)/.test(id)) {
    byTrain.add(parent);
  }
}
const stations = [...areas.entries()].filter(([id]) => byTrain.has(id)).map(([, s]) => s).sort((a, b) => a[1].localeCompare(b[1], "fr"));
writeFileSync(new URL("../src/data/sncf-stations.json", import.meta.url), JSON.stringify(stations) + "\n");
console.log(`${stations.length} gares`);
