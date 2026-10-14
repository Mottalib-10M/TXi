import { prisma } from "@/lib/prisma";
import { Link } from "@/i18n/navigation";
import { REASON_LABELS_FR, REPORT_DEADLINE_HOURS, type ReportReason } from "@/lib/moderation";
import { resolveReportAction, removeContentAction, suspendDriverAction } from "./actions";

// Onglet Signalements (règle 1.2 de l'App Store) : chaque signalement est traité
// sous REPORT_DEADLINE_HOURS ; suspendre un chauffeur coupe sa connexion, ses
// courses et son profil public ; on peut le rétablir.

export const dynamic = "force-dynamic";

const KIND: Record<string, string> = { client: "Passager", organization: "Organisation", driver: "Chauffeur" };
const fmt = (d: Date) => d.toLocaleString("fr-FR", { timeZone: "Europe/Paris", dateStyle: "short", timeStyle: "short" });

const btn = "rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors";

export default async function AdminReportsPage() {
  const driverSelect = { id: true, firstName: true, lastName: true, slug: true, photoUrl: true, bio: true, suspendedAt: true } as const;
  const [open, closed, suspended, blocks] = await Promise.all([
    prisma.driverReport.findMany({ where: { status: "OPEN" }, orderBy: { createdAt: "asc" }, include: { driver: { select: driverSelect } } }),
    prisma.driverReport.findMany({ where: { status: { not: "OPEN" } }, orderBy: { resolvedAt: "desc" }, take: 20, include: { driver: { select: driverSelect } } }),
    prisma.driver.findMany({ where: { suspendedAt: { not: null } }, orderBy: { suspendedAt: "desc" }, select: driverSelect }),
    prisma.driverBlock.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: {
        driver: { select: { firstName: true, lastName: true } },
        blockerDriver: { select: { firstName: true, lastName: true } },
        blockerOrg: { select: { name: true } },
      },
    }),
  ]);
  const now = Date.now();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Signalements</h1>
        <p className="text-sm text-neutral-500 mt-1">
          À traiter sous {REPORT_DEADLINE_HOURS} heures. Une alerte part aussi par e-mail à chaque signalement.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-neutral-700">À traiter ({open.length})</h2>
        {open.length === 0 && (
          <p className="bg-white rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-500">Aucun signalement en attente.</p>
        )}
        {open.map((r) => {
          const left = r.createdAt.getTime() + REPORT_DEADLINE_HOURS * 3600_000 - now;
          const late = left < 0;
          return (
            <article key={r.id} className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {r.driver.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={r.driver.photoUrl} alt="" className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-neutral-100" />
                  )}
                  <div>
                    <Link href={`/admin/chauffeurs/${r.driver.id}`} className="font-medium hover:underline">
                      {r.driver.firstName} {r.driver.lastName}
                    </Link>
                    <p className="text-xs text-neutral-500">
                      {REASON_LABELS_FR[r.reason as ReportReason] ?? r.reason}
                      {r.bookingRef ? ` · course ${r.bookingRef}` : ""} · {KIND[r.reporterKind] ?? r.reporterKind}
                      {r.reporterEmail ? ` (${r.reporterEmail})` : ""}
                    </p>
                  </div>
                </div>
                <span className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${late ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"}`}>
                  {late ? "En retard" : `Reste ${Math.max(1, Math.round(left / 60_000))} min`}
                </span>
              </div>
              {r.message && <p className="text-sm text-neutral-700 bg-neutral-50 rounded-lg px-3 py-2 whitespace-pre-line">{r.message}</p>}
              {r.driver.bio && <p className="text-xs text-neutral-500">Présentation publique : « {r.driver.bio} »</p>}
              <p className="text-xs text-neutral-400">Reçu le {fmt(r.createdAt)}</p>
              <div className="flex flex-wrap gap-2">
                <form action={removeContentAction}>
                  <input type="hidden" name="driverId" value={r.driver.id} />
                  <button className={`${btn} border-neutral-300 hover:bg-neutral-50`}>Retirer photo et présentation</button>
                </form>
                {!r.driver.suspendedAt && (
                  <form action={suspendDriverAction}>
                    <input type="hidden" name="driverId" value={r.driver.id} />
                    <input type="hidden" name="suspend" value="yes" />
                    <button className={`${btn} border-red-200 text-red-700 hover:bg-red-50`}>Suspendre le compte</button>
                  </form>
                )}
                <form action={resolveReportAction}>
                  <input type="hidden" name="id" value={r.id} />
                  <input type="hidden" name="status" value="ACTIONED" />
                  <button className={`${btn} border-neutral-300 hover:bg-neutral-50`}>Traité</button>
                </form>
                <form action={resolveReportAction}>
                  <input type="hidden" name="id" value={r.id} />
                  <input type="hidden" name="status" value="DISMISSED" />
                  <button className={`${btn} border-neutral-200 text-neutral-500 hover:bg-neutral-50`}>Classer sans suite</button>
                </form>
              </div>
            </article>
          );
        })}
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-neutral-700">Comptes suspendus ({suspended.length})</h2>
        <div className="bg-white rounded-2xl border border-neutral-200 divide-y divide-neutral-100">
          {suspended.length === 0 && <p className="p-5 text-sm text-neutral-500">Aucun.</p>}
          {suspended.map((d) => (
            <div key={d.id} className="p-4 px-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium">{d.firstName} {d.lastName}</p>
                <p className="text-xs text-neutral-500">Suspendu le {fmt(d.suspendedAt!)}</p>
              </div>
              <form action={suspendDriverAction}>
                <input type="hidden" name="driverId" value={d.id} />
                <input type="hidden" name="suspend" value="no" />
                <button className={`${btn} border-neutral-300 hover:bg-neutral-50`}>Rétablir le compte</button>
              </form>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-neutral-700">Blocages ({blocks.length})</h2>
        <div className="bg-white rounded-2xl border border-neutral-200 divide-y divide-neutral-100">
          {blocks.length === 0 && <p className="p-5 text-sm text-neutral-500">Aucun.</p>}
          {blocks.map((b) => (
            <p key={b.id} className="p-4 px-5 text-sm">
              {b.blockerOrg ? b.blockerOrg.name : `${b.blockerDriver?.firstName} ${b.blockerDriver?.lastName}`} a bloqué{" "}
              <span className="font-medium">{b.driver.firstName} {b.driver.lastName}</span>
              <span className="text-xs text-neutral-400"> · {fmt(b.createdAt)}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-neutral-700">Derniers signalements traités</h2>
        <div className="bg-white rounded-2xl border border-neutral-200 divide-y divide-neutral-100">
          {closed.length === 0 && <p className="p-5 text-sm text-neutral-500">Aucun.</p>}
          {closed.map((r) => (
            <p key={r.id} className="p-4 px-5 text-sm">
              {r.driver.firstName} {r.driver.lastName} · {REASON_LABELS_FR[r.reason as ReportReason] ?? r.reason}
              <span className="text-xs text-neutral-400"> · {r.status === "DISMISSED" ? "sans suite" : "traité"} le {fmt(r.resolvedAt ?? r.createdAt)}</span>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
