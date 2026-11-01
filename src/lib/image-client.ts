// Images préparées dans le navigateur avant l'envoi (profil, véhicule, carte professionnelle).

/**
 * Convert HEIC/HEIF to JPEG using heic2any (lazy-loaded).
 * Returns the original file if not HEIC or if conversion fails.
 */
async function convertHeicIfNeeded(file: File): Promise<File> {
  const heicTypes = ["image/heic", "image/heif"];
  const isHeic = heicTypes.includes(file.type) ||
    /\.(heic|heif)$/i.test(file.name);

  if (!isHeic) return file;

  try {
    const heic2any = (await import("heic2any")).default;
    const blob = await heic2any({ blob: file, toType: "image/jpeg", quality: 0.9 });
    const result = Array.isArray(blob) ? blob[0] : blob;
    return new File([result], file.name.replace(/\.(heic|heif)$/i, ".jpg"), { type: "image/jpeg" });
  } catch (err) {
    console.error("HEIC conversion failed:", err);
    return file;
  }
}

/**
 * Client-side image compression using Canvas API.
 * Handles HEIC/HEIF conversion, EXIF rotation, resizes large images,
 * and compresses to JPEG to reduce upload size on mobile.
 */
export async function compressImageClient(
  file: File,
  maxWidth = 1200,
  maxHeight = 800,
  quality = 0.8
): Promise<File> {
  // Convert HEIC/HEIF to JPEG first
  const converted = await convertHeicIfNeeded(file);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;

      // Only resize if larger than max dimensions
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(converted); // Fallback
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(new File([blob], "photo.jpg", { type: "image/jpeg" }));
          } else {
            resolve(converted); // Fallback
          }
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(converted);
  });
}
