import { ServiceGalleryFull } from "./ServiceGalleryFull";
import { ServiceGalleryFallback } from "./ServiceGalleryFallback";

interface ServiceGalleryProps {
  hasImages: boolean;
  serviceSlug: string;
}

export function ServiceGallery({ hasImages, serviceSlug }: ServiceGalleryProps) {
  if (hasImages) {
    // In production, images would be loaded from the gallery manifest
    const placeholderImages = Array.from({ length: 6 }).map(
      (_, i) => `https://placehold.co/400x300/EDE8DF/A09080?text=${serviceSlug}+${i + 1}`
    );
    return <ServiceGalleryFull images={placeholderImages} />;
  }

  return <ServiceGalleryFallback />;
}
