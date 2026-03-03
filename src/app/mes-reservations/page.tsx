import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function MesReservations() {
  const session = await auth();

  if (session?.user) {
    if (session.user.role === "organization") {
      redirect("/org/courses");
    }
    if (session.user.role === "driver") {
      redirect("/dashboard/reservations");
    }
  }

  // Not logged in: show login/register options
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-neutral-200 p-8 text-center">
        <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold mb-2">Mes réservations</h1>
        <p className="text-sm text-neutral-500 mb-6">
          Connectez-vous pour accéder à vos réservations de courses.
        </p>

        <div className="space-y-3">
          <Link
            href="/connexion"
            className="block w-full bg-neutral-950 text-white rounded-xl py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            Se connecter
          </Link>
          <Link
            href="/inscription?type=particulier"
            className="block w-full bg-white text-neutral-900 border border-neutral-200 rounded-xl py-3 text-sm font-medium hover:bg-neutral-50 transition-colors"
          >
            Créer un compte
          </Link>
        </div>

        <p className="text-xs text-neutral-400 mt-4">
          En créant un compte, vos courses précédentes seront automatiquement rattachées.
        </p>
      </div>
    </div>
  );
}
