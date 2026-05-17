import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { SuburbCard } from "@/components/sections/SuburbCard";

export const metadata: Metadata = {
  title: "Service Areas | Taha Landscaping Calgary",
  description:
    "Taha Landscaping serves Calgary and surrounding communities. Find your neighbourhood and explore our full range of landscaping services.",
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

        {/* Google Maps Embed */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
          <div className="aspect-[16/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-brand-border">
            {/* Replace the placeholder below with your Google Maps embed iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160841.72661089944!2d-114.2361484!3d51.0276832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Taha Landscaping service area in Calgary"
              suppressHydrationWarning
            />
          </div>
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
