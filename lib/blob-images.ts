import blobManifest from "@/public/blob-uploads.json";

interface BlobImage {
  filename: string;
  url: string;
  size: number;
  category: "hero" | "cta" | "gallery";
}

const manifest: BlobImage[] = blobManifest;

export function getBlobUrl(filename: string): string | null {
  const image = manifest.find((img) => img.filename === filename);
  return image?.url || null;
}

export function getGalleryImages(categorySlug: string): BlobImage[] {
  return manifest.filter(
    (img) => img.category === "gallery" && img.filename.includes(categorySlug)
  );
}

export function getHeroImage(): BlobImage | null {
  return manifest.find((img) => img.category === "hero") || null;
}

export function getCTAImage(): BlobImage | null {
  return manifest.find((img) => img.category === "cta") || null;
}
