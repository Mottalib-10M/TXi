import { prisma } from "@/lib/prisma";
import { OrganisationsTable } from "@/components/admin/OrganisationsTable";
import { getTranslations } from "next-intl/server";

export default async function AdminOrganisationsPage() {
  const t = await getTranslations("admin");

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

  const serialized = organizations.map((o: typeof organizations[number]) => ({
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
        <h1 className="text-2xl font-semibold tracking-tight">{t("orgsTitle")}</h1>
        <p className="text-sm text-neutral-500 font-light mt-1">
          {t("orgsCount", { count: organizations.length })}
        </p>
      </div>
      <OrganisationsTable organisations={serialized} />
    </div>
  );
}
