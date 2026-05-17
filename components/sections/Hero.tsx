import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-72px)] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <Image
        src="/hero-calgary-landscaping.webp"
        alt="Premium Calgary landscaping project by Taha Landscaping"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-brand-dark/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* SEO H1 — visually hidden, first in DOM */}
        <h1 className="sr-only">Landscaping Calgary</h1>

        {/* Eyebrow */}
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans mb-6">
          Est. 2003 · Calgary, Alberta
        </p>

        {/* Visible headline */}
        <h2 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-white text-center leading-[0.95]">
          Calgary&apos;s Leading Luxury <em>Landscaping</em>
        </h2>

        {/* Subheadline */}
        <p className="font-sans text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Expert design, construction, and craftsmanship for residential and commercial properties across Calgary. Bringing the best out of your yard for over 23 years.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
          >
            Get a Quote
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-white/20 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator — animated */}
      <div className="absolute bottom-8 left-1/2 animate-scroll-bounce h-12 w-px bg-white/30" />
    </section>
  );
}
