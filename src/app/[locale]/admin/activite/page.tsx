import { prisma } from "@/lib/prisma";
import { AdminActivityFeed, type ActivityEvent } from "@/components/admin/AdminActivityFeed";

export const dynamic = "force-dynamic";

const ORG_TYPE_LABELS: Record<string, string> = {
  HOTEL: "Hôtel",
  HOSPITAL: "Hôpital",
  ENTERPRISE: "Entreprise",
  INDIVIDUAL: "Particulier",
};

function extractCity(address: string | null | undefined): string | null {
  if (!address) return null;
  // zoneAddress is typically "City, France" or "City" or "12 rue X, 75001 Paris"
  // Take the last meaningful segment
  const parts = address.split(",").map((s) => s.trim());
  if (parts.length >= 2) {
    // Remove country if last part
    const last = parts[parts.length - 1];
    if (/france/i.test(last)) return parts[parts.length - 2] || null;
    return last;
  }
  return parts[0] || null;
}

export default async function AdminActivityPage() {
  // 1. Fetch latest admin notifications (all events)
  const notifications = await prisma.adminNotification.findMany({
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  // 2. Fetch recent driver logins & registrations
  const recentDrivers = await prisma.driver.findMany({
    where: { lastLoginAt: { not: null } },
    orderBy: { lastLoginAt: "desc" },
    take: 20,
    select: {
      id: true, firstName: true, lastName: true,
      lastLoginAt: true, createdAt: true,
      zoneAddress: true,
    },
  });

  const newDrivers = await prisma.driver.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true, firstName: true, lastName: true,
      createdAt: true, zoneAddress: true,
    },
  });

  // 3. Fetch recent org logins & registrations
  const recentOrgs = await prisma.organization.findMany({
    where: { lastLoginAt: { not: null } },
    orderBy: { lastLoginAt: "desc" },
    take: 20,
    select: {
      id: true, name: true, type: true,
      lastLoginAt: true, createdAt: true,
      address: true,
    },
  });

  const newOrgs = await prisma.organization.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
    select: {
      id: true, name: true, type: true,
      createdAt: true, address: true,
    },
  });

  // Lookup maps for enriching notification events
  // Build driver map (id -> info) for driverId references in notifications
  const allDriverIds = new Set<string>();
  const allOrgIds = new Set<string>();
  for (const n of notifications) {
    const meta = n.metadata as Record<string, unknown> | null;
    if (meta?.driverId && typeof meta.driverId === "string") allDriverIds.add(meta.driverId);
    if (meta?.organizationId && typeof meta.organizationId === "string") allOrgIds.add(meta.organizationId);
  }

  const driverMap = new Map<string, { firstName: string; lastName: string; zoneAddress: string | null }>();
  if (allDriverIds.size > 0) {
    const drivers = await prisma.driver.findMany({
      where: { id: { in: Array.from(allDriverIds) } },
      select: { id: true, firstName: true, lastName: true, zoneAddress: true },
    });
    for (const d of drivers) driverMap.set(d.id, d);
  }

  const orgMap = new Map<string, { name: string; type: string; address: string | null }>();
  if (allOrgIds.size > 0) {
    const orgs = await prisma.organization.findMany({
      where: { id: { in: Array.from(allOrgIds) } },
      select: { id: true, name: true, type: true, address: true },
    });
    for (const o of orgs) orgMap.set(o.id, o);
  }

  // Build unified timeline
  const events: ActivityEvent[] = [];

  // Admin notifications — enrich with badge/city when possible
  for (const n of notifications) {
    const meta = n.metadata as Record<string, unknown> | null;
    let badge: string | undefined;
    let city: string | undefined;

    // Booking events from driver
    if (meta?.driverId && typeof meta.driverId === "string") {
      const driver = driverMap.get(meta.driverId);
      if (driver) {
        badge = "Chauffeur";
        city = extractCity(driver.zoneAddress) || undefined;
      }
    }
    // Org booking
    if (meta?.organizationId && typeof meta.organizationId === "string") {
      const org = orgMap.get(meta.organizationId);
      if (org) {
        badge = ORG_TYPE_LABELS[org.type] || "Organisation";
        city = extractCity(org.address) || undefined;
      }
    }

    // Extract departure city from body for booking/contact events (format: "Name — Departure → Arrival")
    if (!city && n.body.includes("→")) {
      const match = n.body.match(/—\s*(.+?)\s*→/);
      if (match) city = match[1].trim();
    }

    // Contact form — city from metadata
    if (!city && n.type === "CONTACT_FORM" && meta?.city && typeof meta.city === "string") {
      city = meta.city;
    }

    // Badge for client-initiated bookings (no driver/org reference)
    if (!badge && (n.type === "BOOKING_CREATED" || n.type === "BOOKING_CANCELLED")) {
      badge = "Client";
    }
    if (!badge && n.type === "ORG_BOOKING_CREATED") {
      badge = "Organisation";
    }
    if (!badge && (n.type === "CONTACT_REQUEST" || n.type === "CONTACT_FORM")) {
      badge = "Client";
    }
    if (!badge && (n.type === "ESCALATION_PHASE1" || n.type === "ESCALATION_PHASE2")) {
      badge = "Escalade";
    }
    if (!badge && n.type.startsWith("SHARED_ROUTE")) {
      badge = "Partage";
    }
    if (!badge && (n.type === "BOOKING_ACCEPTED" || n.type === "BOOKING_REJECTED" || n.type === "BOOKING_COMPLETED")) {
      badge = "Chauffeur";
    }

    events.push({
      id: `notif-${n.id}`,
      eventType: n.type,
      title: n.title,
      body: n.body,
      createdAt: n.createdAt.toISOString(),
      badge,
      city,
    });
  }

  // Driver logins
  for (const d of recentDrivers) {
    if (d.lastLoginAt) {
      events.push({
        id: `dlogin-${d.id}`,
        eventType: "DRIVER_LOGIN",
        title: `${d.firstName} ${d.lastName}`,
        body: "Connexion chauffeur",
        createdAt: d.lastLoginAt.toISOString(),
        badge: "Chauffeur",
        city: extractCity(d.zoneAddress) || undefined,
      });
    }
  }

  // Org logins
  for (const o of recentOrgs) {
    if (o.lastLoginAt) {
      const label = ORG_TYPE_LABELS[o.type] || "Organisation";
      events.push({
        id: `ologin-${o.id}`,
        eventType: "ORG_LOGIN",
        title: o.name,
        body: `Connexion ${label.toLowerCase()}`,
        createdAt: o.lastLoginAt.toISOString(),
        badge: label,
        city: extractCity(o.address) || undefined,
      });
    }
  }

  // Driver registrations
  for (const d of newDrivers) {
    events.push({
      id: `dreg-${d.id}`,
      eventType: "DRIVER_REGISTERED",
      title: `${d.firstName} ${d.lastName}`,
      body: "Nouveau chauffeur inscrit",
      createdAt: d.createdAt.toISOString(),
      badge: "Chauffeur",
      city: extractCity(d.zoneAddress) || undefined,
    });
  }

  // Org registrations
  for (const o of newOrgs) {
    const label = ORG_TYPE_LABELS[o.type] || "Organisation";
    const feminineTypes = ["Organisation", "Entreprise"];
    const article = feminineTypes.includes(label) ? "Nouvelle" : "Nouveau";
    const suffix = feminineTypes.includes(label) ? "inscrite" : "inscrit";
    events.push({
      id: `oreg-${o.id}`,
      eventType: "ORG_REGISTERED",
      title: o.name,
      body: `${article} ${label.toLowerCase()} ${suffix}`,
      createdAt: o.createdAt.toISOString(),
      badge: label,
      city: extractCity(o.address) || undefined,
    });
  }

  // Sort by date desc
  events.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  const hasMore = notifications.length >= 50;

  return <AdminActivityFeed initialItems={events} hasMore={hasMore} />;
}
