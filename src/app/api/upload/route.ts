import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      // Fallback: save as data URL for development
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = buffer.toString("base64");
      const dataUrl = `data:${file.type};base64,${base64}`;

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

    // Upload to Cloudinary
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);
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
