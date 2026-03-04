export function isAdminEmail(email: string): boolean {
  const adminEmails = (process.env.ADMIN_EMAILS || "amradif@gmail.com")
    .split(",")
    .map((e) => e.trim());
  return adminEmails.includes(email);
}
