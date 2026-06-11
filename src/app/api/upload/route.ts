import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import sharp from "sharp";

/** Validate file magic bytes to ensure it's a real image */
function isValidImageMagicBytes(buffer: Buffer): boolean {
  if (buffer.length < 12) return false;

  // JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) return true;

  // PNG: 89 50 4E 47 0D 0A 1A 0A
  if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return true;

  // WebP: RIFF....WEBP
  if (buffer[0] === 0x52 && buffer[1] === 0x49 && buffer[2] === 0x46 && buffer[3] === 0x46 &&
      buffer[8] === 0x57 && buffer[9] === 0x45 && buffer[10] === 0x42 && buffer[11] === 0x50) return true;

  // HEIF/HEIC: ....ftyp (at offset 4)
  if (buffer.length >= 12 && buffer[4] === 0x66 && buffer[5] === 0x74 && buffer[6] === 0x79 && buffer[7] === 0x70) return true;

  return false;
}

async function compressImage(
  buffer: Buffer,
  type: "profile" | "vehicle"
): Promise<Buffer> {
  const maxWidth = type === "profile" ? 400 : 1200;
  const maxHeight = type === "profile" ? 400 : 800;

  return sharp(buffer)
    .resize(maxWidth, maxHeight, {
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: 80 })
    .toBuffer();
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const uploadType = (formData.get("type") as string) || "profile";

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier" }, { status: 400 });
    }

    // Validate file size (5 MB max)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Fichier trop volumineux (5 Mo max)" }, { status: 400 });
    }

    // Validate MIME type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Format non supporté (JPG, PNG, WebP uniquement)" }, { status: 400 });
    }

    // Validate actual file content (magic bytes)
    const bytes = await file.arrayBuffer();
    const rawBuffer = Buffer.from(bytes);

    if (!isValidImageMagicBytes(rawBuffer)) {
      return NextResponse.json({ error: "Fichier invalide — format image non reconnu" }, { status: 400 });
    }

    // Compress/resize the image
    const compressedBuffer = await compressImage(
      rawBuffer,
      uploadType === "vehicle" ? "vehicle" : "profile"
    );

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      // Fallback: save as data URL for development
      const base64 = compressedBuffer.toString("base64");
      const dataUrl = `data:image/jpeg;base64,${base64}`;

      // For vehicle photos, just return the URL without saving to DB
      if (uploadType === "vehicle") {
        return NextResponse.json({ url: dataUrl });
      }

      await prisma.driver.update({
        where: { id: session.user.id },
        data: { photoUrl: dataUrl },
      });

      return NextResponse.json({ url: dataUrl });
    }

    // Upload compressed image to Cloudinary
    const uint8 = new Uint8Array(compressedBuffer);
    const compressedFile = new File([uint8], "photo.jpg", { type: "image/jpeg" });

    const uploadFormData = new FormData();
    uploadFormData.append("file", compressedFile);
    uploadFormData.append("upload_preset", "txi_photos");

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: uploadFormData }
    );

    const data = await res.json();

    if (data.secure_url) {
      // For vehicle photos, just return the URL without saving to DB
      if (uploadType === "vehicle") {
        return NextResponse.json({ url: data.secure_url });
      }

      await prisma.driver.update({
        where: { id: session.user.id },
        data: { photoUrl: data.secure_url },
      });

      return NextResponse.json({ url: data.secure_url });
    }

    return NextResponse.json({ error: "Erreur upload" }, { status: 500 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'upload" },
      { status: 500 }
    );
  }
}
