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

const TEST_DOMAIN = "@test.fontainebleau.com";
const TEST_PASSWORD = "Test1234!";

const drivers = [
  {
    firstName: "Lucas",
    lastName: "Moreau",
    email: "lucas.moreau@test.fontainebleau.com",
    phone: "06 10 00 01 01",
    bio: "Chauffeur de taxi à Fontainebleau depuis 10 ans. Spécialiste des transferts gare et INSEAD.",
    vehicleBrand: "Peugeot",
    vehicleModel: "508",
    vehicleYear: 2023,
    vehicleColor: "Noir",
    vehiclePlate: "FT-101-AB",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Carte bancaire"],
    vehicles: [
      {
        brand: "Peugeot",
        model: "508",
        year: 2023,
        color: "Noir",
        plate: "FT-101-AB",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Carte bancaire"],
      },
    ],
    zoneLat: 48.4049,
    zoneLng: 2.6986,
    zoneRadius: 15,
    zoneAddress: "Fontainebleau, Seine-et-Marne",
    availability: [
      { day: 1, startTime: "06:00", endTime: "20:00" },
      { day: 2, startTime: "06:00", endTime: "20:00" },
      { day: 3, startTime: "06:00", endTime: "20:00" },
      { day: 4, startTime: "06:00", endTime: "20:00" },
      { day: 5, startTime: "06:00", endTime: "22:00" },
      { day: 6, startTime: "08:00", endTime: "18:00" },
    ],
  },
  {
    firstName: "Emma",
    lastName: "Bernard",
    email: "emma.bernard@test.fontainebleau.com",
    phone: "06 10 00 02 02",
    bio: "Conductrice de taxi depuis 5 ans. Service premium et ponctualité garantie.",
    vehicleBrand: "Mercedes",
    vehicleModel: "Classe E",
    vehicleYear: 2024,
    vehicleColor: "Gris Argent",
    vehiclePlate: "FT-202-CD",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Siège bébé"],
    vehicles: [
      {
        brand: "Mercedes",
        model: "Classe E",
        year: 2024,
        color: "Gris Argent",
        plate: "FT-202-CD",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Siège bébé"],
      },
    ],
    zoneLat: 48.41,
    zoneLng: 2.702,
    zoneRadius: 15,
    zoneAddress: "Fontainebleau, Seine-et-Marne",
    availability: [
      { day: 0, startTime: "08:00", endTime: "16:00" },
      { day: 1, startTime: "07:00", endTime: "19:00" },
      { day: 2, startTime: "07:00", endTime: "19:00" },
      { day: 3, startTime: "07:00", endTime: "19:00" },
      { day: 4, startTime: "07:00", endTime: "19:00" },
      { day: 5, startTime: "07:00", endTime: "21:00" },
    ],
  },
  {
    firstName: "Hugo",
    lastName: "Lefevre",
    email: "hugo.lefevre@test.fontainebleau.com",
    phone: "06 10 00 03 03",
    bio: "Taxi familial avec véhicule spacieux. Idéal pour les groupes et les familles.",
    vehicleBrand: "Renault",
    vehicleModel: "Espace",
    vehicleYear: 2023,
    vehicleColor: "Blanc",
    vehiclePlate: "FT-303-EF",
    vehicleCapacity: 6,
    vehicleFeatures: ["Climatisation", "WiFi", "Coffre XL", "Carte bancaire"],
    vehicles: [
      {
        brand: "Renault",
        model: "Espace",
        year: 2023,
        color: "Blanc",
        plate: "FT-303-EF",
        capacity: 6,
        features: ["Climatisation", "WiFi", "Coffre XL", "Carte bancaire"],
      },
    ],
    zoneLat: 48.42,
    zoneLng: 2.695,
    zoneRadius: 20,
    zoneAddress: "Fontainebleau, Seine-et-Marne",
    availability: [
      { day: 1, startTime: "05:00", endTime: "22:00" },
      { day: 2, startTime: "05:00", endTime: "22:00" },
      { day: 3, startTime: "05:00", endTime: "22:00" },
      { day: 4, startTime: "05:00", endTime: "22:00" },
      { day: 5, startTime: "05:00", endTime: "23:00" },
      { day: 6, startTime: "06:00", endTime: "20:00" },
      { day: 0, startTime: "06:00", endTime: "20:00" },
    ],
  },
  {
    firstName: "Léa",
    lastName: "Rousseau",
    email: "lea.rousseau@test.fontainebleau.com",
    phone: "06 10 00 04 04",
    bio: "Taxi électrique, éco-responsable. Conduite souple et agréable.",
    vehicleBrand: "Tesla",
    vehicleModel: "Model 3",
    vehicleYear: 2024,
    vehicleColor: "Blanc",
    vehiclePlate: "FT-404-GH",
    vehicleCapacity: 4,
    vehicleFeatures: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Électrique"],
    vehicles: [
      {
        brand: "Tesla",
        model: "Model 3",
        year: 2024,
        color: "Blanc",
        plate: "FT-404-GH",
        capacity: 4,
        features: ["Climatisation", "WiFi", "Prise USB", "Carte bancaire", "Électrique"],
      },
    ],
    zoneLat: 48.4314,
    zoneLng: 2.6977,
    zoneRadius: 15,
    zoneAddress: "Fontainebleau, Seine-et-Marne",
    availability: [
      { day: 1, startTime: "08:00", endTime: "18:00" },
      { day: 2, startTime: "08:00", endTime: "18:00" },
      { day: 3, startTime: "08:00", endTime: "18:00" },
      { day: 4, startTime: "08:00", endTime: "18:00" },
      { day: 5, startTime: "08:00", endTime: "20:00" },
    ],
  },
];

const hotel = {
  name: "Hôtel & Spa du Château",
  email: "hotel@test.fontainebleau.com",
  type: "HOTEL" as const,
  contactName: "Marie Fontaine",
  phone: "01 64 22 33 44",
  address: "12 Rue de France, 77300 Fontainebleau",
};

async function main() {
  console.log("🧹 Cleaning up test data (@test.fontainebleau.com)...");

  // Find all test drivers and org
  const testDrivers = await prisma.driver.findMany({
    where: { email: { endsWith: TEST_DOMAIN } },
    select: { id: true },
  });
  const testOrgs = await prisma.organization.findMany({
    where: { email: { endsWith: TEST_DOMAIN } },
    select: { id: true },
  });

  const driverIds = testDrivers.map((d) => d.id);
  const orgIds = testOrgs.map((o) => o.id);

  // Delete bookings linked to test drivers or orgs
  if (driverIds.length > 0 || orgIds.length > 0) {
    // Delete cagnotte transactions first
    await prisma.cagnotteTransaction.deleteMany({
      where: { organizationId: { in: orgIds } },
    });
    await prisma.booking.deleteMany({
      where: {
        OR: [
          { driverId: { in: driverIds } },
          { organizationId: { in: orgIds } },
        ],
      },
    });
  }

  // Delete favorite drivers
  if (driverIds.length > 0 || orgIds.length > 0) {
    await prisma.favoriteDriver.deleteMany({
      where: {
        OR: [
          { driverId: { in: driverIds } },
          { organizationId: { in: orgIds } },
        ],
      },
    });
  }

  // Delete test drivers and orgs
  await prisma.driver.deleteMany({
    where: { email: { endsWith: TEST_DOMAIN } },
  });
  await prisma.organization.deleteMany({
    where: { email: { endsWith: TEST_DOMAIN } },
  });

  console.log("✅ Cleanup done.");

  // Hash the test password
  const passwordHash = await hash(TEST_PASSWORD, 12);

  // Create drivers
  console.log("🚕 Creating 4 test drivers in Fontainebleau...");
  const createdDrivers: { id: string; email: string; slug: string }[] = [];

  for (const d of drivers) {
    const slug =
      d.firstName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") +
      "-" +
      d.lastName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const driver = await prisma.driver.upsert({
      where: { email: d.email },
      update: {
        ...d,
        slug,
        passwordHash,
        isActive: true,
        isVerified: true,
        emailVerified: true,
        vehicles: d.vehicles as unknown as undefined,
        availability: d.availability as unknown as undefined,
      },
      create: {
        ...d,
        slug,
        passwordHash,
        isActive: true,
        isVerified: true,
        emailVerified: true,
        vehicles: d.vehicles as unknown as undefined,
        availability: d.availability as unknown as undefined,
      },
    });

    createdDrivers.push({ id: driver.id, email: driver.email, slug: driver.slug });
    console.log(`  ✅ ${d.firstName} ${d.lastName} (${d.email}) — slug: ${slug}`);
  }

  // Create hotel organization
  console.log("🏨 Creating test hotel...");
  const org = await prisma.organization.upsert({
    where: { email: hotel.email },
    update: {
      ...hotel,
      passwordHash,
      emailVerified: true,
    },
    create: {
      ...hotel,
      passwordHash,
      emailVerified: true,
    },
  });
  console.log(`  ✅ ${hotel.name} (${hotel.email})`);

  // Add 2 drivers as favorites for the hotel (Lucas + Emma)
  console.log("⭐ Adding favorite drivers for hotel...");
  for (const driverData of createdDrivers.slice(0, 2)) {
    await prisma.favoriteDriver.upsert({
      where: {
        organizationId_driverId: {
          organizationId: org.id,
          driverId: driverData.id,
        },
      },
      update: {},
      create: {
        organizationId: org.id,
        driverId: driverData.id,
      },
    });
    console.log(`  ⭐ ${driverData.email} added as favorite`);
  }

  console.log("\n🎉 Seed complete! Test accounts:");
  console.log("   Password for all: Test1234!");
  console.log("   Drivers:");
  for (const d of createdDrivers) {
    console.log(`     - ${d.email} (profile: /taxi/${d.slug})`);
  }
  console.log(`   Hotel: ${hotel.email}`);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
