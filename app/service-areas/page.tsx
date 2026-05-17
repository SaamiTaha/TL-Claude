import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { SuburbCard } from "@/components/sections/SuburbCard";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";

export const metadata: Metadata = {
  title: "Service Areas | Taha Landscaping Calgary",
  description:
    "Taha Landscaping serves Calgary and surrounding communities. Find your neighbourhood and explore our full range of landscaping services.",
};

const SUBURBS = [
  // Calgary Neighbourhoods
  "Aspen Woods", "Bridgeland", "Cranston", "Dalhousie", "Elbow Park",
  "Fairview", "Garrison Woods", "Hillhurst", "Inglewood", "Kensington",
  "Lake Bonavista", "Mount Royal", "Panorama Hills", "Ramsay", "Signal Hill",
  "Tuscany", "University District", "Varsity", "West Springs", "Woodbine",
  // Surrounding Communities
  "Airdrie", "Okotoks", "Cochrane", "Chestermere",
].map((name) => ({ name, slug: name.toLowerCase().replace(/\s+/g, "-") }));

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Service Areas
            </p>
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              Proudly Serving <em>Calgary</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              We provide landscaping services across Calgary and surrounding
              communities. From the inner city to the newest developments, our
              team knows the soil, bylaws, and conditions in your neighbourhood.
            </p>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="aspect-[16/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-brand-border">
            <ServiceAreaMap />
          </div>
          <p className="text-center text-brand-muted font-sans text-sm mt-4">
            We service all areas within 50 km of Calgary
          </p>
        </section>

        {/* Suburb Links */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center mb-10">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Neighbourhoods We Serve
            </p>
            <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
              Find Your <em>Area</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {SUBURBS.map((suburb) => (
              <SuburbCard key={suburb.slug} name={suburb.name} slug={suburb.slug} />
            ))}
          </div>
        </section>

        <FullYardCTA variant="full" />
      </main>
      <ContactSectionDark flush />
    </>
  );
}
