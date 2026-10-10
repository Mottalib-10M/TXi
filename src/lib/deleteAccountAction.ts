"use server";

// « Supprimer mon compte » (espace chauffeur ou organisation) : la case de
// confirmation doit être cochée ; le compte est effacé (lib/accountDeletion.ts),
// la session fermée, puis retour à l'accueil.

import { auth, signOut } from "@/lib/auth";
import { deleteDriverAccount, deleteOrganizationAccount } from "@/lib/accountDeletion";

export async function deleteMyAccountAction(form: FormData) {
  const session = await auth();
  const user = session?.user;
  if (!user?.id || user.impersonatingFrom) return;
  if (form.get("confirm") !== "yes") return;
  if (user.role === "organization") await deleteOrganizationAccount(user.id);
  else await deleteDriverAccount(user.id);
  await signOut({ redirectTo: "/?compte=supprime" });
}
