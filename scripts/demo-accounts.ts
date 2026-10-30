// Comptes de démonstration pour la vérification des stores (Apple, Google) :
// un chauffeur à Paris et un hôtel, avec quelques courses entre eux. Adresses de
// DEMO_EMAILS : ces comptes ne reçoivent ni vraie course ni e-mail (src/lib/demo.ts).
// Relancer remet les courses de démo à zéro.
//
//   DATABASE_URL=... DEMO_PASSWORD=... npx tsx scripts/demo-accounts.ts

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const DRIVER_EMAIL = "taxi@taxineo.fr";
const ORG_EMAIL = "hotel@taxineo.fr";

const password = process.env.DEMO_PASSWORD;
if (!password || password.length < 8) throw new Error("DEMO_PASSWORD manquant (8 caractères minimum)");

const prisma = new PrismaClient({ adapter: new PrismaPg(new Pool({ connectionString: process.env.DATABASE_URL })) });

const day = (offset: number, hour: number) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  d.setHours(hour, 0, 0, 0);
  return d;
};

// Ce qui se voit dans l'app (captures App Store, vidéo) : des noms réalistes, sans « démo ».
// Le téléphone est dans la plage réservée à la fiction (01 99 00 xx xx).
const DRIVER_SHOWN = {
  lastName: "Arverne",
  companyName: "Taxi Paris",
  bio: "Chauffeur de taxi à Paris depuis 12 ans. Aéroports, gares et longues distances, prix annoncé avant le départ.",
  phone: "01 99 00 41 41",
  vehiclePlate: "GA-418-PZ",
};
const ORG_SHOWN = { name: "Hôtel Opéra", contactName: "Claire Martin" };

async function main() {
  const passwordHash = await hash(password!, 12);

  const driver = await prisma.driver.upsert({
    where: { email: DRIVER_EMAIL },
    update: { passwordHash, isActive: true, emailVerified: true, isVerified: true, ...DRIVER_SHOWN },
    create: {
      email: DRIVER_EMAIL,
      passwordHash,
      firstName: "Julien",
      slug: "julien-demo-taxineo",
      ...DRIVER_SHOWN,
      vehicleBrand: "Toyota",
      vehicleModel: "Corolla Hybride",
      vehicleColor: "Noir",
      vehicleCapacity: 4,
      zoneLat: 48.8566,
      zoneLng: 2.3522,
      zoneRadius: 30,
      zoneAddress: "Paris",
      emailVerified: true,
      isVerified: true,
    },
  });

  const org = await prisma.organization.upsert({
    where: { email: ORG_EMAIL },
    update: { passwordHash, emailVerified: true, ...ORG_SHOWN },
    create: {
      email: ORG_EMAIL,
      passwordHash,
      ...ORG_SHOWN,
      type: "HOTEL",
      address: "10 rue Auber, 75009 Paris",
      emailVerified: true,
    },
  });

  await prisma.booking.deleteMany({ where: { OR: [{ driverId: driver.id }, { organizationId: org.id }] } });

  const opera = { departureName: "Hôtel Opéra, 10 rue Auber, Paris", departureLat: 48.8718, departureLng: 2.3299 };
  const rides = [
    { ref: "TN-7K2P41", status: "PENDING", date: day(1, 9), arrivalName: "Aéroport Paris-Charles de Gaulle (CDG)", arrivalLat: 49.0097, arrivalLng: 2.5479, km: 32, price: 56, client: "M. Martin" },
    { ref: "TN-7K2Q86", status: "ACCEPTED", date: day(2, 14), arrivalName: "Gare de Lyon, Paris", arrivalLat: 48.8443, arrivalLng: 2.3744, km: 5, price: 18, client: "Mme Bernard" },
    { ref: "TN-7J9X12", status: "COMPLETED", date: day(-2, 7), arrivalName: "Aéroport Paris-Orly (ORY)", arrivalLat: 48.7262, arrivalLng: 2.3652, km: 19, price: 44, client: "M. Petit" },
    { ref: "TN-7J4M58", status: "COMPLETED", date: day(-5, 18), arrivalName: "Tour Eiffel, Paris", arrivalLat: 48.8584, arrivalLng: 2.2945, km: 4, price: 16, client: "Mme Durand" },
  ] as const;

  for (const r of rides) {
    await prisma.booking.create({
      data: {
        reference: r.ref,
        clientName: r.client,
        clientEmail: ORG_EMAIL,
        ...opera,
        arrivalName: r.arrivalName,
        arrivalLat: r.arrivalLat,
        arrivalLng: r.arrivalLng,
        requestedDate: r.date,
        passengerCount: 1,
        estimatedDistance: r.km,
        estimatedPrice: r.price,
        lockedPrice: r.price,
        status: r.status,
        source: "ORGANIZATION",
        driverId: driver.id,
        organizationId: org.id,
        beneficiaryName: r.client,
      },
    });
  }

  console.log(`Chauffeur : ${DRIVER_EMAIL}\nOrganisation : ${ORG_EMAIL}\n${rides.length} courses de démo`);
}

main().finally(() => prisma.$disconnect());
