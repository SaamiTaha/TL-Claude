import Image from "next/image";
import Link from "next/link";
import blobManifest from "@/public/blob-uploads.json";

interface ServicePortfolioStripProps {
  categorySlug: string;
  categoryName: string;
}

export function ServicePortfolioStrip({ categorySlug, categoryName }: ServicePortfolioStripProps) {
  const manifest = blobManifest as Array<{
    filename: string;
    url: string;
    category: string;
  }>;

  const images = manifest
    .filter((img) => img.category === "gallery" && img.filename.includes(categorySlug))
    .slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Portfolio
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          {categoryName} <em>Gallery</em>
        </h2>
        <p className="text-brand-muted font-sans text-base mt-4 max-w-2xl mx-auto">
          Browse our recent {categoryName.toLowerCase()} projects completed across Calgary.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
        {images.length > 0 ? (
          images.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <Image
                src={img.url}
                alt={`${categoryName} project in Calgary by Taha Landscaping`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))
        ) : (
          <>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden bg-brand-surface" />
            ))}
          </>
        )}
      </div>

      <div className="text-center mt-10">
        <Link
          href={`/gallery?category=${categorySlug}`}
          className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
        >
          View Full Portfolio →
        </Link>
      </div>
    </section>
  );
}
