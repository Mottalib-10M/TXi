export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidPhone(phone: string): boolean {
  if (!phone) return true; // empty = optional, validity not checked
  const digits = phone.replace(/[^\d]/g, "");
  if (phone.startsWith("+")) return digits.length >= 11;
  return digits.length === 10;
}

export function emailError(email: string): string | null {
  if (!email) return null;
  return isValidEmail(email) ? null : "Format email invalide (ex: nom@email.com)";
}

export function phoneError(phone: string): string | null {
  if (!phone) return null;
  return isValidPhone(phone) ? null : "Numéro invalide (10 chiffres ou format +33)";
}

export function formatPrice(amount: number): string {
  return amount.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";
}
