import Image from "next/image";
import Link from "next/link";

export function ServiceGalleryFallback() {
  return (
    <section className="py-10 sm:py-16 text-center">
      <p className="uppercase tracking-widest text-xs text-brand-terracotta font-sans">
        Explore Our Work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={`https://placehold.co/400x300/EDE8DF/A09080?text=Gallery+${i + 1}`}
              alt={`Calgary landscaping project ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <p className="text-brand-muted font-sans text-sm mt-6">
        Browse our complete portfolio of Calgary landscaping projects.
      </p>
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-5 py-2.5 text-xs uppercase tracking-wider font-sans mt-4 hover:bg-brand-green/90 transition-colors"
      >
        View Full Gallery
      </Link>
    </section>
  );
}
