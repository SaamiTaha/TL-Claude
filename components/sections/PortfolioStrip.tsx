import Image from "next/image";
import Link from "next/link";

const GALLERY_IMAGES = [
  { src: "/gallery/full-yard-landscaping/calgary-backyard-transformation-1.jpg", alt: "Calgary full yard landscaping transformation by Taha Landscaping" },
  { src: "/gallery/patio-design-installation/calgary-natural-stone-patio.jpg", alt: "Calgary natural stone patio installation by Taha Landscaping" },
  { src: "/gallery/retaining-wall-construction/calgary-retaining-wall-project.jpg", alt: "Calgary retaining wall construction by Taha Landscaping" },
  { src: "/gallery/garden-bed-design-installation/calgary-garden-bed-design.jpg", alt: "Calgary garden bed design and planting by Taha Landscaping" },
  { src: "/gallery/deck-construction/calgary-composite-deck-build.jpg", alt: "Calgary composite deck construction by Taha Landscaping" },
  { src: "/gallery/sod-installation/calgary-sod-installation-project.jpg", alt: "Calgary sod installation by Taha Landscaping" },
  { src: "/gallery/landscape-lighting/calgary-landscape-lighting-install.jpg", alt: "Calgary landscape lighting installation by Taha Landscaping" },
  { src: "/gallery/fence-installation/calgary-cedar-fence-install.jpg", alt: "Calgary cedar fence installation by Taha Landscaping" },
];

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
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
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
