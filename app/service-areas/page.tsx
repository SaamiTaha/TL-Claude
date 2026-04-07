import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { SuburbCard } from "@/components/sections/SuburbCard";

export const metadata: Metadata = {
  title: "[PLACEHOLDER] Service Areas — Calgary Landscaping",
  description: "[PLACEHOLDER] We serve Calgary and surrounding communities.",
};

const SUBURBS = [
  "Aspen Woods", "Bridgeland", "Cranston", "Dalhousie", "Elbow Park",
  "Fairview", "Garrison Woods", "Hillhurst", "Inglewood", "Kensington",
  "Lake Bonavista", "Mount Royal", "Panorama Hills", "Ramsay", "Signal Hill",
  "Tuscany", "University District", "Varsity", "West Springs", "Woodbine",
].map((name) => ({ name, slug: name.toLowerCase().replace(/\s+/g, "-") }));

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">Service Areas</p>
            <h1 className="headline-mixed text-5xl md:text-6xl lg:text-7xl text-brand-text mt-4">
              Proudly Serving <em>Calgary</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              [PLACEHOLDER] We provide premium landscaping services across Calgary and surrounding communities.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="aspect-[16/6] bg-brand-surface rounded-2xl flex items-center justify-center">
            <p className="text-brand-muted font-sans text-lg">[PLACEHOLDER] Map</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-wrap gap-3 justify-center">
            {SUBURBS.map((suburb) => (
              <SuburbCard key={suburb.slug} name={suburb.name} slug={suburb.slug} />
            ))}
          </div>
        </section>

        <FullYardCTA variant="compact" />
      </main>
      <ContactSectionDark />
    </>
  );
}
