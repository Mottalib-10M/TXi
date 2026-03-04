import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { ReservationsTable } from "@/components/driver/ReservationsTable";
import { QRCodeButton } from "@/components/dashboard/QRCodeButton";

export default async function ReservationsPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/connexion");

  const driver = await prisma.driver.findUnique({
    where: { id: session.user.id },
    select: { slug: true },
  });

  if (!driver) redirect("/connexion");

  const bookings = await prisma.booking.findMany({
    where: { driverId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  const serialized = bookings.map((b) => ({
    ...b,
    createdAt: b.createdAt.toISOString(),
    updatedAt: b.updatedAt.toISOString(),
    requestedDate: b.requestedDate.toISOString(),
  }));

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Réservations</h1>
          <p className="text-sm text-neutral-500 font-light mt-1">
            Gérez vos demandes de réservation
          </p>
        </div>
        <QRCodeButton slug={driver.slug} />
      </div>
      <ReservationsTable bookings={serialized} />
    </div>
  );
}
