import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_STRIP_IMAGES } from "@/lib/image-references";

export function PortfolioStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Our Portfolio
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          Calgary Landscaping <em>Portfolio</em>
        </h2>
        <p className="text-brand-muted font-sans text-base mt-4 max-w-2xl mx-auto">
          Browse recent projects completed across Calgary, from complete property transformations to targeted hardscaping and softscaping upgrades.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
        {PORTFOLIO_STRIP_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
        >
          View Full Portfolio →
        </Link>
      </div>
    </section>
  );
}
