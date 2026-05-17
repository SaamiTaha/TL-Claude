import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SuburbCard } from "@/components/sections/SuburbCard";
import { ALL_SERVICES } from "@/lib/service-data";

const ALL_SUBURBS = [
  "Aspen Woods", "Bridgeland", "Cranston", "Dalhousie", "Elbow Park",
  "Fairview", "Garrison Woods", "Hillhurst", "Inglewood", "Kensington",
  "Lake Bonavista", "Mount Royal", "Panorama Hills", "Ramsay", "Signal Hill",
  "Tuscany", "University District", "Varsity", "West Springs", "Woodbine",
].map((name) => ({ name, slug: name.toLowerCase().replace(/\s+/g, "-") }));

interface SuburbPageProps {
  params: Promise<{ suburb: string }>;
}

function toTitle(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  return ALL_SUBURBS.map((s) => ({ suburb: s.slug }));
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const { suburb } = await params;
  const name = toTitle(suburb);
  return {
    title: `Landscaping in ${name} | Taha Landscaping Calgary`,
    description: `Professional landscaping services in ${name}, Calgary. Patios, fences, grading, garden design, and full yard transformations. Licensed and insured with 23+ years of experience.`,
  };
}

export default async function SuburbPage({ params }: SuburbPageProps) {
  const { suburb } = await params;
  const suburbName = toTitle(suburb);

  // Pick 4 neighbouring suburbs (excluding current)
  const currentIndex = ALL_SUBURBS.findIndex((s) => s.slug === suburb);
  const neighbours = ALL_SUBURBS.filter((s) => s.slug !== suburb)
    .slice(
      Math.max(0, currentIndex - 2),
      Math.max(0, currentIndex - 2) + 4
    )
    .slice(0, 4);
  // Fallback if at edges
  const finalNeighbours = neighbours.length >= 4
    ? neighbours
    : ALL_SUBURBS.filter((s) => s.slug !== suburb).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb + Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <nav className="flex gap-2 text-sm text-brand-muted font-sans mb-6 justify-center">
            <Link href="/" className="hover:text-brand-text">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-brand-text">Service Areas</Link>
            <span>/</span>
            <span className="text-brand-text">{suburbName}</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              {suburbName}
            </p>
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              Landscaping in <em>{suburbName}</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              Professional landscaping services for {suburbName} homeowners and
              properties. From full yard transformations to targeted projects, our
              licensed team delivers results built for Calgary conditions.
            </p>
          </div>
        </section>

        {/* Google Maps Embed */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="aspect-[16/9] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-brand-border">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40000!2d-114.07!3d51.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(suburbName + ", Calgary, AB")}!5e0!3m2!1sen!2sca`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Taha Landscaping serving ${suburbName}, Calgary`}
              suppressHydrationWarning
            />
          </div>
        </section>

        {/* About this area */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-brand-muted font-sans text-base leading-relaxed max-w-3xl mx-auto text-center">
            Taha Landscaping has been working in {suburbName} and surrounding
            Calgary neighbourhoods for over 23 years. We understand the local soil
            conditions, drainage patterns, and municipal requirements that affect
            outdoor projects in this area. Whether you need a new patio, fence,
            garden bed, or a complete yard overhaul, we handle everything in-house
            from design to build.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Available Services
            </p>
            <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
              Our Services in <em>{suburbName}</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
            {ALL_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <FullYardCTA variant="compact" />

        {/* Nearby Areas */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Nearby Areas
            </p>
            <h2 className="headline-mixed text-4xl text-brand-text mt-4">
              We Also <em>Serve</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {finalNeighbours.map((s) => (
              <SuburbCard key={s.slug} name={s.name} slug={s.slug} />
            ))}
          </div>
        </section>

      </main>
      <ContactSectionDark />
    </>
  );
}
