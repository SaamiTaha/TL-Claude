import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SuburbCard } from "@/components/sections/SuburbCard";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { ALL_SERVICES } from "@/lib/service-data";

interface SuburbPageProps {
  params: Promise<{ suburb: string }>;
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const { suburb } = await params;
  const name = suburb.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `[PLACEHOLDER] Landscaping in ${name} — Calgary`,
    description: `[PLACEHOLDER] Premium landscaping services in ${name}, Calgary.`,
  };
}

const NEIGHBOURING = [
  { name: "[PLACEHOLDER] Neighbour 1", slug: "neighbour-1" },
  { name: "[PLACEHOLDER] Neighbour 2", slug: "neighbour-2" },
  { name: "[PLACEHOLDER] Neighbour 3", slug: "neighbour-3" },
  { name: "[PLACEHOLDER] Neighbour 4", slug: "neighbour-4" },
];

export default async function SuburbPage({ params }: SuburbPageProps) {
  const { suburb } = await params;
  const suburbName = suburb.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <nav className="flex gap-2 text-sm text-brand-muted font-sans mb-6 justify-center">
            <Link href="/" className="hover:text-brand-text">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-brand-text">Service Areas</Link>
            <span>/</span>
            <span className="text-brand-text">{suburbName}</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">{suburbName}</p>
            <h1 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
              Landscaping in <em>{suburbName}</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium landscaping services tailored for {suburbName} properties.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-brand-muted font-sans text-base leading-relaxed max-w-3xl mx-auto text-center">
            [PLACEHOLDER] Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">Available Services</p>
            <h2 className="headline-mixed text-4xl text-brand-text mt-4">Our Services in <em>{suburbName}</em></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
            {ALL_SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>

        <FullYardCTA variant="compact" />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">Nearby Areas</p>
            <h2 className="headline-mixed text-4xl text-brand-text mt-4">We Also Serve</h2>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {NEIGHBOURING.map((s) => (
              <SuburbCard key={s.slug} name={s.name} slug={s.slug} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="aspect-[16/6] bg-brand-surface rounded-2xl flex items-center justify-center">
            <p className="text-brand-muted font-sans text-lg">[PLACEHOLDER] Map — {suburbName}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-brand-surface rounded-2xl p-10 max-w-xl mx-auto">
            <ContactForm variant="light" />
          </div>
        </section>
      </main>
      <ContactSectionDark />
    </>
  );
}
