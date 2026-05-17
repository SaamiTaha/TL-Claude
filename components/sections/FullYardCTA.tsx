import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface FullYardCTAProps {
  variant: "full" | "compact";
}

export function FullYardCTA({ variant }: FullYardCTAProps) {
  if (variant === "compact") {
    return (
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
            Our Signature Service
          </p>
          <h3 className="headline-mixed text-4xl md:text-5xl text-white mt-4">
            Ready to Transform Your Entire <em>Property?</em>
          </h3>
          <p className="text-white/60 font-sans text-base mt-5 leading-relaxed max-w-xl mx-auto">
            Our full yard service covers every phase of the project. Grading, hardscaping, softscaping, irrigation, and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/services/full-yard-landscaping-calgary"
              className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:4038606470"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-width background image */}
      <Image
        src="/gallery/full-yard-landscaping/calgary-full-yard-transformation.jpg"
        alt="Complete yard transformation in Calgary by Taha Landscaping"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-dark/70" />

      {/* Frosted content card */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 p-10 md:p-14 text-center">
          <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
            Our Signature Service
          </p>
          <h2 className="headline-mixed text-5xl lg:text-6xl text-white mt-4 leading-tight">
            Complete Yard <em>Transformations</em>
          </h2>
          <p className="text-white/70 font-sans text-base mt-6 leading-relaxed">
            When Calgary homeowners want a property that commands attention, they choose Taha Landscaping. We handle every phase: site grading, drainage engineering, hardscape installation, softscape design, and irrigation systems. One team, one vision, one exceptional result.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/services/full-yard-landscaping-calgary"
              className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
            >
              Explore Full Yard Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="tel:4038606470"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" /> Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
