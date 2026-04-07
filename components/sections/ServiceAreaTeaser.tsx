import Link from "next/link";
import { SuburbCard } from "./SuburbCard";

const CALGARY_NEIGHBORHOODS = [
  { name: "Aspen Woods", slug: "aspen-woods" },
  { name: "Elbow Park", slug: "elbow-park" },
  { name: "Upper Mount Royal", slug: "upper-mount-royal" },
  { name: "Britannia", slug: "britannia" },
  { name: "Pump Hill", slug: "pump-hill" },
  { name: "Bel-Aire", slug: "bel-aire" },
  { name: "Eagle Ridge", slug: "eagle-ridge" },
  { name: "Springbank Hill", slug: "springbank-hill" },
  { name: "Discovery Ridge", slug: "discovery-ridge" },
  { name: "Signal Hill", slug: "signal-hill" },
  { name: "West Springs", slug: "west-springs" },
  { name: "Mahogany", slug: "mahogany" },
  { name: "Lake Bonavista", slug: "lake-bonavista" },
  { name: "Crescent Heights", slug: "crescent-heights" },
  { name: "Altadore", slug: "altadore" },
];

const SURROUNDING_AREAS = [
  { name: "Airdrie", slug: "airdrie" },
  { name: "Okotoks", slug: "okotoks" },
  { name: "Cochrane", slug: "cochrane" },
  { name: "Chestermere", slug: "chestermere" },
  { name: "Strathmore", slug: "strathmore" },
  { name: "Priddis", slug: "priddis" },
];

export function ServiceAreaTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Where We Work
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          Serving <em>Calgary</em> &amp; Surrounding Areas
        </h2>
        <p className="text-brand-muted font-sans text-base mt-4 max-w-2xl mx-auto">
          Taha Landscaping delivers premium landscaping services across Calgary&apos;s most distinguished neighborhoods and surrounding communities.
        </p>
      </div>

      {/* Calgary Neighborhoods */}
      <div className="mt-12">
        <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-brand-text text-center mb-5">
          Calgary Neighborhoods
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {CALGARY_NEIGHBORHOODS.map((suburb) => (
            <SuburbCard key={suburb.slug} name={suburb.name} slug={suburb.slug} />
          ))}
        </div>
      </div>

      {/* Surrounding Communities */}
      <div className="mt-10">
        <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-brand-text text-center mb-5">
          Surrounding Communities
        </h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {SURROUNDING_AREAS.map((area) => (
            <SuburbCard key={area.slug} name={area.name} slug={area.slug} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 text-brand-green text-sm font-sans font-medium hover:underline"
        >
          View All Service Areas →
        </Link>
      </div>
    </section>
  );
}
