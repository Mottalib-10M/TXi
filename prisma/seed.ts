import "dotenv/config";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local", override: true });

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const testDrivers = [
  {
    firstName: "Marc",
    lastName: "Laurent",
    email: "marc.laurent@test.com",
    phone: "06 12 34 56 78",
    bio: "Chauffeur de taxi parisien depuis 15 ans. Spécialiste des transferts aéroport et des courses longue distance. Je connais Paris comme ma poche !",
    vehicleBrand: "Mercedes",
    vehicleModel: "Classe E",
    vehicleYear: 2023,
    vehicleColor: "Noir",
    vehiclePlate: "AB-123-CD",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire"],
    vehicles: [
      {
        brand: "Mercedes",
        model: "Classe E",
        year: 2023,
        color: "Noir",
        plate: "AB-123-CD",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire"],
      },
      {
        brand: "Mercedes",
        model: "Classe V",
        year: 2024,
        color: "Noir",
        plate: "XY-789-ZZ",
        capacity: 7,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Coffre XL", "PMR"],
      },
    ],
    zoneLat: 48.8566,
    zoneLng: 2.3522,
    zoneRadius: 25,
    zoneAddress: "Paris",
    baseFare: 2.6,
    pricePerKm: 1.12,
    pricePerMinute: 0.38,
    minimumFare: 7.3,
    airportSupplement: 4.0,
    nightSupplement: 1.0,
    availability: [
      { day: 0, startTime: "06:00", endTime: "22:00" },
      { day: 1, startTime: "06:00", endTime: "22:00" },
      { day: 2, startTime: "06:00", endTime: "22:00" },
      { day: 3, startTime: "06:00", endTime: "22:00" },
      { day: 4, startTime: "06:00", endTime: "23:00" },
      { day: 5, startTime: "08:00", endTime: "20:00" },
    ],
  },
  {
    firstName: "Sophie",
    lastName: "Dubois",
    email: "sophie.dubois@test.com",
    phone: "06 98 76 54 32",
    bio: "Chauffeure taxi à Lyon. Service premium avec véhicule haut de gamme. Disponible pour tous vos déplacements professionnels et privés.",
    vehicleBrand: "BMW",
    vehicleModel: "Série 5",
    vehicleYear: 2024,
    vehicleColor: "Gris",
    vehiclePlate: "EF-456-GH",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Siège bébé"],
    vehicles: [
      {
        brand: "BMW",
        model: "Série 5",
        year: 2024,
        color: "Gris",
        plate: "EF-456-GH",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Siège bébé"],
      },
      {
        brand: "BMW",
        model: "X5",
        year: 2023,
        color: "Blanc",
        plate: "LM-321-NP",
        capacity: 5,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Coffre XL"],
      },
    ],
    zoneLat: 45.7640,
    zoneLng: 4.8357,
    zoneRadius: 20,
    zoneAddress: "Lyon",
    baseFare: 2.4,
    pricePerKm: 1.08,
    pricePerMinute: 0.35,
    minimumFare: 7.0,
    airportSupplement: 3.5,
    nightSupplement: 0.5,
    availability: [
      { day: 0, startTime: "07:00", endTime: "20:00" },
      { day: 1, startTime: "07:00", endTime: "20:00" },
      { day: 2, startTime: "07:00", endTime: "20:00" },
      { day: 3, startTime: "07:00", endTime: "20:00" },
      { day: 4, startTime: "07:00", endTime: "21:00" },
    ],
  },
  {
    firstName: "Ahmed",
    lastName: "Benzema",
    email: "ahmed.benzema@test.com",
    phone: "06 11 22 33 44",
    bio: "Taxi marseillais, 10 ans d'expérience. Transferts aéroport Marignane, gare Saint-Charles et tout le réseau métropolitain.",
    vehicleBrand: "Peugeot",
    vehicleModel: "508",
    vehicleYear: 2023,
    vehicleColor: "Blanc",
    vehiclePlate: "IJ-789-KL",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "Prise USB", "Carte bancaire", "Animaux acceptés"],
    vehicles: [
      {
        brand: "Peugeot",
        model: "508",
        year: 2023,
        color: "Blanc",
        plate: "IJ-789-KL",
        capacity: 4,
        features: ["Climatisation", "Prise USB", "Carte bancaire", "Animaux acceptés"],
      },
    ],
    zoneLat: 43.2965,
    zoneLng: 5.3698,
    zoneRadius: 30,
    zoneAddress: "Marseille",
    baseFare: 2.2,
    pricePerKm: 1.05,
    pricePerMinute: 0.32,
    minimumFare: 6.5,
    airportSupplement: 3.0,
    nightSupplement: 0.0,
    availability: [
      { day: 0, startTime: "05:00", endTime: "23:00" },
      { day: 1, startTime: "05:00", endTime: "23:00" },
      { day: 2, startTime: "05:00", endTime: "23:00" },
      { day: 3, startTime: "05:00", endTime: "23:00" },
      { day: 4, startTime: "05:00", endTime: "00:00" },
      { day: 5, startTime: "06:00", endTime: "22:00" },
      { day: 6, startTime: "06:00", endTime: "22:00" },
    ],
  },
  {
    firstName: "Pierre",
    lastName: "Martin",
    email: "pierre.martin@test.com",
    phone: "06 55 66 77 88",
    bio: "Chauffeur de taxi toulousain depuis 8 ans. Véhicule spacieux, idéal pour les familles et les groupes.",
    vehicleBrand: "Volkswagen",
    vehicleModel: "Multivan",
    vehicleYear: 2022,
    vehicleColor: "Bleu",
    vehiclePlate: "MN-012-OP",
    vehicleCapacity: 7,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Coffre XL", "PMR"],
    vehicles: [
      {
        brand: "Volkswagen",
        model: "Multivan",
        year: 2022,
        color: "Bleu",
        plate: "MN-012-OP",
        capacity: 7,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Coffre XL", "PMR"],
      },
    ],
    zoneLat: 43.6047,
    zoneLng: 1.4442,
    zoneRadius: 20,
    zoneAddress: "Toulouse",
    baseFare: 2.0,
    pricePerKm: 1.0,
    pricePerMinute: 0.30,
    minimumFare: 6.0,
    airportSupplement: 3.5,
    nightSupplement: 0.0,
    availability: [
      { day: 0, startTime: "06:00", endTime: "21:00" },
      { day: 1, startTime: "06:00", endTime: "21:00" },
      { day: 2, startTime: "06:00", endTime: "21:00" },
      { day: 3, startTime: "06:00", endTime: "21:00" },
      { day: 4, startTime: "06:00", endTime: "22:00" },
    ],
  },
  {
    firstName: "Claire",
    lastName: "Petit",
    email: "claire.petit@test.com",
    phone: "06 99 88 77 66",
    bio: "Taxi à Bordeaux, service VIP disponible. Spécialisée dans les transferts œnotourisme et déplacements d'affaires.",
    vehicleBrand: "Tesla",
    vehicleModel: "Model S",
    vehicleYear: 2024,
    vehicleColor: "Noir",
    vehiclePlate: "QR-345-ST",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire"],
    vehicles: [
      {
        brand: "Tesla",
        model: "Model S",
        year: 2024,
        color: "Noir",
        plate: "QR-345-ST",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire"],
      },
    ],
    zoneLat: 44.8378,
    zoneLng: -0.5792,
    zoneRadius: 25,
    zoneAddress: "Bordeaux",
    baseFare: 2.5,
    pricePerKm: 1.15,
    pricePerMinute: 0.36,
    minimumFare: 7.0,
    airportSupplement: 4.0,
    nightSupplement: 0.5,
    availability: [
      { day: 0, startTime: "07:00", endTime: "20:00" },
      { day: 1, startTime: "07:00", endTime: "20:00" },
      { day: 2, startTime: "07:00", endTime: "20:00" },
      { day: 3, startTime: "07:00", endTime: "20:00" },
      { day: 4, startTime: "07:00", endTime: "22:00" },
      { day: 5, startTime: "09:00", endTime: "18:00" },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@test.com",
    phone: "06 44 55 66 77",
    bio: "Chauffeur taxi à Nice et sur la Côte d'Azur. Transferts aéroport Nice, Monaco, Cannes. Anglais et italien parlés.",
    vehicleBrand: "Audi",
    vehicleModel: "A6",
    vehicleYear: 2023,
    vehicleColor: "Noir",
    vehiclePlate: "UV-678-WX",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Animaux acceptés"],
    vehicles: [
      {
        brand: "Audi",
        model: "A6",
        year: 2023,
        color: "Noir",
        plate: "UV-678-WX",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Animaux acceptés"],
      },
    ],
    zoneLat: 43.7102,
    zoneLng: 7.2620,
    zoneRadius: 35,
    zoneAddress: "Nice - Côte d'Azur",
    baseFare: 2.8,
    pricePerKm: 1.20,
    pricePerMinute: 0.40,
    minimumFare: 8.0,
    airportSupplement: 5.0,
    nightSupplement: 1.5,
    availability: [
      { day: 0, startTime: "06:00", endTime: "22:00" },
      { day: 1, startTime: "06:00", endTime: "22:00" },
      { day: 2, startTime: "06:00", endTime: "22:00" },
      { day: 3, startTime: "06:00", endTime: "22:00" },
      { day: 4, startTime: "06:00", endTime: "23:00" },
      { day: 5, startTime: "07:00", endTime: "23:00" },
      { day: 6, startTime: "08:00", endTime: "20:00" },
    ],
  },
];

async function main() {
  console.log("Seeding database...");

  const passwordHash = await hash("password123", 12);

  for (const driver of testDrivers) {
    const slug = `${driver.firstName}-${driver.lastName}`.toLowerCase().replace(/[^a-z0-9-]/g, "-");

    await prisma.driver.upsert({
      where: { email: driver.email },
      update: {},
      create: {
        ...driver,
        slug,
        passwordHash,
        isActive: true,
        isVerified: true,
      },
    });

    console.log(`  Created driver: ${driver.firstName} ${driver.lastName} (/taxi/${slug})`);
  }

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
