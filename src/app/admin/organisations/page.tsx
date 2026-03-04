import { prisma } from "@/lib/prisma";
import { OrganisationsTable } from "@/components/admin/OrganisationsTable";

export default async function AdminOrganisationsPage() {
  const organizations = await prisma.organization.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      type: true,
      contactName: true,
      email: true,
      phone: true,
      cagnotteBalance: true,
      createdAt: true,
      _count: { select: { bookings: true } },
    },
  });

  const serialized = organizations.map((o) => ({
    id: o.id,
    name: o.name,
    type: o.type,
    contactName: o.contactName,
    email: o.email,
    phone: o.phone,
    cagnotteBalance: o.cagnotteBalance,
    bookingsCount: o._count.bookings,
    createdAt: o.createdAt.toISOString(),
  }));

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Organisations</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {organizations.length} organisation{organizations.length > 1 ? "s" : ""} inscrite{organizations.length > 1 ? "s" : ""}
        </p>
      </div>
      <OrganisationsTable organisations={serialized} />
    </div>
  );
}
