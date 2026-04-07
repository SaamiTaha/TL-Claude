import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { CATEGORIES } from "@/lib/service-data";
import { Scissors, Sprout, Layers, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Landscaping Services Calgary | Taha Landscaping",
  description:
    "Browse our full range of landscaping services in Calgary. Lawn care, softscaping, hardscaping, grading, drainage, and irrigation from Calgary's landscape construction experts.",
};

const CATEGORY_ICONS = {
  "softscaping-garden-design": Sprout,
  "hardscaping-outdoor-living": Layers,
  "grading-drainage-irrigation": Droplets,
  "calgary-lawn-services": Scissors,
} as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Our Services
            </p>
            <h1 className="headline-mixed text-5xl md:text-6xl lg:text-7xl text-brand-text mt-4">
              Expert Landscaping <em>Services</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              Over 23 years of landscape construction in Calgary. From weekly lawn maintenance to
              complete property builds, every project is managed directly by our owner and built to
              last through Calgary&#39;s toughest seasons.
            </p>
          </div>
        </section>

        {/* Jump links */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.slug}
                href={cat.anchor}
                className="border border-brand-border text-brand-text rounded-full px-5 py-2 text-[13px] uppercase tracking-wider font-sans hover:bg-brand-surface transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </section>

        <FullYardCTA variant="full" />

        {/* Category sections */}
        {CATEGORIES.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.slug as keyof typeof CATEGORY_ICONS];
          return (
            <section
              key={cat.slug}
              id={cat.slug}
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-3">
                {Icon && <Icon className="h-7 w-7 text-brand-terracotta flex-shrink-0" />}
                <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                  {cat.name}
                </p>
              </div>
              <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mb-3">
                {cat.name.split(" ")[0]} <em>{cat.name.split(" ").slice(1).join(" ")}</em>
              </h2>
              <p className="text-brand-muted font-sans text-base max-w-2xl mb-10">
                {cat.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {cat.services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <ContactSectionDark />
    </>
  );
}
