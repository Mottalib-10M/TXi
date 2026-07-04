import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import slugify from "slugify";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { sendEmail, buildVerificationEmail } from "@/lib/email";
import { applyStrictRateLimit } from "@/lib/rate-limit";
import { verifyTurnstileToken } from "@/lib/turnstile";

const driverSchema = z.object({
  profileType: z.literal("driver"),
  firstName: z.string().min(2, "Minimum 2 caractères"),
  companyName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro invalide"),
  password: z.string().min(8, "Minimum 8 caractères"),
  cityAddress: z.string().optional(),
  cityLat: z.number().optional(),
  cityLng: z.number().optional(),
  vehicleBrand: z.string().optional(),
  vehicleModel: z.string().optional(),
  vehiclePlate: z.string().optional(),
  vehiclePhotoBase64: z.string().optional(),
});

const orgSchema = z.object({
  profileType: z.enum(["hotel", "hospital", "enterprise"]),
  name: z.string().min(2, "Minimum 2 caractères"),
  contactName: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro invalide"),
  address: z.string().optional(),
  password: z.string().min(8, "Minimum 8 caractères"),
});

const particulierSchema = z.object({
  profileType: z.literal("particulier"),
  name: z.string().min(2, "Minimum 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro invalide"),
  password: z.string().min(8, "Minimum 8 caractères"),
});

const registerSchema = z.discriminatedUnion("profileType", [driverSchema, orgSchema, particulierSchema]);

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

async function isEmailTaken(email: string): Promise<boolean> {
  const [driver, org] = await Promise.all([
    prisma.driver.findUnique({ where: { email } }),
    prisma.organization.findUnique({ where: { email } }),
  ]);
  return !!(driver || org);
}

async function sendVerificationEmail(email: string, name: string, locale: "fr" | "en" = "fr") {
  try {
    const token = crypto.randomUUID();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    await prisma.emailVerificationToken.create({
      data: { token, email, expiresAt },
    });

    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const verifyUrl = `${baseUrl}/api/auth/verify-email?token=${token}&locale=${locale}`;
    const { subject, html } = buildVerificationEmail(name, verifyUrl, locale);
    await sendEmail({ to: email, subject, html });
  } catch (error) {
    console.error("Failed to send verification email:", error);
  }
}

export async function POST(request: Request) {
  try {
    const rateLimited = await applyStrictRateLimit();
    if (rateLimited) return rateLimited;

    const body = await request.json();

    // Honeypot — bots fill hidden fields
    if (body._hp) {
      return NextResponse.json({ success: true }); // silent success
    }

    // Turnstile CAPTCHA
    if (!(await verifyTurnstileToken(body.turnstileToken))) {
      return NextResponse.json({ error: "Vérification anti-bot échouée" }, { status: 403 });
    }

    const data = registerSchema.parse(body);
    const locale: "fr" | "en" = body.locale === "en" ? "en" : "fr";

    // Check email uniqueness across both tables
    if (await isEmailTaken(data.email)) {
      const msg = locale === "en"
        ? "An account already exists with this email"
        : "Un compte existe déjà avec cet email";
      return NextResponse.json({ error: msg }, { status: 409 });
    }

    const passwordHash = await hash(data.password, 12);

    if (data.profileType === "driver") {
      const slug = await generateUniqueSlug(data.firstName, data.companyName);

      // Handle vehicle photo if provided
      let photoUrl: string | undefined;
      if (data.vehiclePhotoBase64) {
        const validPrefixes = ["data:image/jpeg;base64,", "data:image/png;base64,", "data:image/webp;base64,"];
        if (!validPrefixes.some((p) => data.vehiclePhotoBase64!.startsWith(p))) {
          return NextResponse.json({ error: "Format de photo invalide" }, { status: 400 });
        }
        // Limit base64 size (~5MB image = ~6.7MB base64)
        if (data.vehiclePhotoBase64.length > 7 * 1024 * 1024) {
          return NextResponse.json({ error: "Photo trop volumineuse" }, { status: 400 });
        }
        photoUrl = data.vehiclePhotoBase64;
      }

      // Build vehicles JSON with photo if provided
      const vehicle = {
        brand: data.vehicleBrand || "",
        model: data.vehicleModel || "",
        plate: data.vehiclePlate || "",
        capacity: 4,
        features: [],
        photos: photoUrl ? [photoUrl] : [],
      };

      const driver = await prisma.driver.create({
        data: {
          firstName: data.firstName,
          lastName: "",
          companyName: data.companyName,
          email: data.email,
          phone: data.phone,
          passwordHash,
          slug,
          zoneLat: data.cityLat,
          zoneLng: data.cityLng,
          zoneAddress: data.cityAddress || undefined,
          zoneRadius: 50,
          vehicleBrand: data.vehicleBrand || undefined,
          vehicleModel: data.vehicleModel || undefined,
          vehiclePlate: data.vehiclePlate || undefined,
          photoUrl,
          vehicles: JSON.parse(JSON.stringify([vehicle])),
        },
      });

      await sendVerificationEmail(data.email, data.firstName, locale);

      return NextResponse.json(
        { message: "OK", slug: driver.slug },
        { status: 201 }
      );
    }

    // Particulier registration (individual using Organization table with type INDIVIDUAL)
    if (data.profileType === "particulier") {
      const org = await prisma.organization.create({
        data: {
          name: data.name,
          contactName: data.name,
          email: data.email,
          phone: data.phone,
          passwordHash,
          type: "INDIVIDUAL",
        },
      });

      // Attach existing bookings made with this email (direct bookings without org)
      await prisma.booking.updateMany({
        where: {
          clientEmail: data.email,
          organizationId: null,
        },
        data: {
          organizationId: org.id,
        },
      });

      await sendVerificationEmail(data.email, data.name, locale);

      return NextResponse.json(
        { message: "OK", profileType: data.profileType },
        { status: 201 }
      );
    }

    // Organization registration
    const orgTypeMap = {
      hotel: "HOTEL",
      hospital: "HOSPITAL",
      enterprise: "ENTERPRISE",
    } as const;

    await prisma.organization.create({
      data: {
        name: data.name,
        contactName: data.contactName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        passwordHash,
        type: orgTypeMap[data.profileType],
      },
    });

    await sendVerificationEmail(data.email, data.contactName, locale);

    return NextResponse.json(
      { message: "OK", profileType: data.profileType },
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
      { error: "Server error" },
      { status: 500 }
    );
  }
}
