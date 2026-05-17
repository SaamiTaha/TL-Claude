import { ServiceGalleryFull } from "./ServiceGalleryFull";
import { ServiceGalleryFallback } from "./ServiceGalleryFallback";
import fs from "fs";
import path from "path";

interface ServiceGalleryProps {
  categorySlug: string;
}

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

export function ServiceGallery({ categorySlug }: ServiceGalleryProps) {
  const folderPath = path.join(process.cwd(), "public", "gallery", categorySlug);

  let images: string[] = [];
  try {
    images = fs
      .readdirSync(folderPath)
      .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/gallery/${categorySlug}/${f}`);
  } catch {
    // folder doesn't exist or is empty
  }

  if (images.length > 0) {
    return <ServiceGalleryFull images={images} />;
  }

  return <ServiceGalleryFallback />;
}
