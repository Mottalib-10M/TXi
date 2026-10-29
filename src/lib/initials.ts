// Initiales affichées dans les pastilles de compte (« Karim Benali » → « KB »).
export function initials(name: string) {
  return name
    .split(" ")
    .filter((n) => /^[a-zA-ZÀ-ÿ]/.test(n))
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
