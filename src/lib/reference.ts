import { prisma } from "@/lib/prisma";

function generate(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "TN-";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function generateUniqueReference(): Promise<string> {
  for (let i = 0; i < 5; i++) {
    const reference = generate();
    const existing = await prisma.booking.findUnique({ where: { reference } });
    if (!existing) return reference;
  }
  // Fallback: use 8 characters for more entropy
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "TN-";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
