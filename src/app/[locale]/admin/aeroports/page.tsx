import { prisma } from "@/lib/prisma";
import { AdminAirports } from "@/components/admin/AdminAirports";

export const dynamic = "force-dynamic";

const AIRPORT_REGEX = /a[ée]roport|airport/i;

function extractAirportName(address: string): string {
  const frMatch = address.match(/[Aa][ée]roport\s+(?:de\s+|d'|du\s+)?([^,]+)/);
  if (frMatch) return frMatch[1].trim();
  const enMatch = address.match(/([^,]+?)\s+[Aa]irport/);
  if (enMatch) return enMatch[1].trim();
  return address.split(",")[0].trim();
}

export default async function AdminAeroportsPage() {
  try {
    const keywords = ["aéroport", "aeroport", "airport"];

    const bookings = await prisma.booking.findMany({
      where: {
        OR: keywords.flatMap((kw) => [
          { departureName: { contains: kw, mode: "insensitive" } },
          { arrivalName: { contains: kw, mode: "insensitive" } },
        ]),
      },
      orderBy: { createdAt: "desc" },
      include: {
        driver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            slug: true,
            phone: true,
          },
        },
        organization: { select: { name: true } },
      },
    });

    const serialized = bookings.map((b) => {
      const depMatch = AIRPORT_REGEX.test(b.departureName);
      const arrMatch = AIRPORT_REGEX.test(b.arrivalName);
      const direction: "departure" | "arrival" | "both" = depMatch && arrMatch
        ? "both"
        : depMatch
          ? "departure"
          : "arrival";

      const airportAddress = depMatch ? b.departureName : b.arrivalName;
      const detectedAirport = extractAirportName(airportAddress);

      const price = b.lockedPrice ?? b.estimatedPrice ?? 0;

      return {
        id: b.id,
        reference: b.reference,
        clientName: b.clientName,
        clientPhone: b.clientPhone,
        departureName: b.departureName,
        arrivalName: b.arrivalName,
        requestedDate: b.requestedDate.toISOString(),
        estimatedPrice: b.estimatedPrice,
        lockedPrice: b.lockedPrice,
        estimatedDistance: b.estimatedDistance,
        status: b.status,
        createdAt: b.createdAt.toISOString(),
        driverName: b.driver
          ? `${b.driver.firstName} ${b.driver.lastName}`
          : null,
        driverId: b.driver?.id ?? null,
        driverPhone: b.driver?.phone ?? null,
        driverSlug: b.driver?.slug ?? null,
        orgName: b.organization?.name ?? null,
        direction,
        detectedAirport,
        price,
        hasDriver: !!b.driver,
      };
    });

    return <AdminAirports bookings={serialized} />;
  } catch (error) {
    console.error("[ADMIN AEROPORTS ERROR]", error);
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 max-w-xl">
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Erreur Admin
          </h2>
          <p className="text-sm text-red-600">
            {error instanceof Error ? error.message : "Erreur inconnue"}
          </p>
        </div>
      </div>
    );
  }
}
