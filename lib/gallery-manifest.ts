import galleryManifestData from "@/public/gallery/gallery-manifest.json";

export const galleryManifest = galleryManifestData as {
  categories: Record<string, { hasImages: boolean; images: string[]; count: number }>;
  allImages: Array<{ src: string; category: string }>;
};

export default galleryManifest;
