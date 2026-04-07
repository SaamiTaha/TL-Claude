import Image from "next/image";
import Link from "next/link";

interface ServiceGalleryFullProps {
  images: string[];
}

export function ServiceGalleryFull({ images }: ServiceGalleryFullProps) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={`[PLACEHOLDER] Gallery image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/gallery"
          className="text-brand-terracotta text-sm font-sans hover:underline"
        >
          View Our Full Portfolio →
        </Link>
      </div>
    </div>
  );
}
