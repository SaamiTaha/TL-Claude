import Image from "next/image";
import Link from "next/link";

interface ServiceGalleryFullProps {
  images: string[];
}

export function ServiceGalleryFull({ images }: ServiceGalleryFullProps) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={`Project photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
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
