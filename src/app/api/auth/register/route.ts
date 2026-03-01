import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import slugify from "slugify";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const registerSchema = z.object({
  firstName: z.string().min(2, "Minimum 2 caractères"),
  lastName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro invalide"),
  password: z.string().min(6, "Minimum 6 caractères"),
});

async function generateUniqueSlug(firstName: string, lastName: string) {
  const base = slugify(`${firstName}-${lastName}`, { lower: true, strict: true });
  let slug = base;
  let counter = 0;

  while (await prisma.driver.findUnique({ where: { slug } })) {
    counter++;
    slug = `${base}-${counter}`;
  }

  return slug;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = registerSchema.parse(body);

    const existing = await prisma.driver.findUnique({
      where: { email: data.email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Un compte existe déjà avec cet email" },
        { status: 409 }
      );
    }

    const passwordHash = await hash(data.password, 12);
    const slug = await generateUniqueSlug(data.firstName, data.lastName);

    const driver = await prisma.driver.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        passwordHash,
        slug,
      },
    });

    return NextResponse.json(
      { message: "Compte créé avec succès", slug: driver.slug },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      );
    }
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
