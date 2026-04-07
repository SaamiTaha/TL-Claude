import Link from "next/link";
import { Leaf, Flower2, Hammer, Droplets } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/service-data";
import type { LucideIcon } from "lucide-react";
import type { CategoryItem } from "@/lib/service-data";

const CATEGORY_ICONS: LucideIcon[] = [Flower2, Hammer, Droplets, Leaf];

const CATEGORY_INTROS: Record<string, { heading: string; intro: string }> = {
  "softscaping-garden-design": {
    heading: "Softscaping & Garden Design in Calgary",
    intro:
      "Thoughtful softscaping transforms a Calgary yard into a living work of art. We design and install custom garden beds, curate plant and shrub selections suited to Calgary\u2019s growing zone, and maintain hedges with precision trimming. From sod installation and artificial turf to seasonal colour rotations and mature tree installations, our horticultural expertise ensures year-round beauty for your property.",
  },
  "hardscaping-outdoor-living": {
    heading: "Hardscaping & Outdoor Living in Calgary",
    intro:
      "Elevate your outdoor living space with expertly crafted hardscaping. Our Calgary hardscaping services include natural stone patios, paver walkways, retaining walls, custom decks, pergolas, outdoor kitchens, and fire pit installations. Every structure is engineered for Calgary\u2019s freeze-thaw cycles and built with premium materials that stand the test of time.",
  },
  "grading-drainage-irrigation": {
    heading: "Grading, Drainage & Irrigation in Calgary",
    intro:
      "Proper grading and drainage protect your Calgary property from water damage and foundation issues. We provide professional lot grading, French drain installation, downspout management, and surface water solutions. Our irrigation division installs and services sprinkler systems, repairs existing setups, and upgrades controllers to smart technology for efficient watering across Calgary\u2019s dry summers.",
  },
  "calgary-lawn-services": {
    heading: "Calgary Lawn Services",
    intro:
      "A healthy, vibrant lawn is the foundation of every great Calgary landscape. Our professional lawn care programs are designed specifically for Calgary\u2019s climate, covering spring aeration and overseeding, weekly maintenance, fertilization, and fall cleanups. Whether you need a complete lawn restoration or ongoing seasonal care, our crews deliver consistent, manicured results across Calgary properties.",
  },
};

export function ServiceCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Our Services
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          Professional Landscaping <em>Services</em> in Calgary
        </h2>
      </div>

      <div className="space-y-20">
        {CATEGORIES.map((category: CategoryItem, i: number) => {
          const Icon = CATEGORY_ICONS[i];
          const content = CATEGORY_INTROS[category.slug];

          return (
            <div key={category.slug} id={category.slug}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-md bg-brand-surface flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-brand-terracotta" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-brand-text">
                    {content?.heading ?? category.name}
                  </h3>
                </div>
              </div>

              <p className="text-brand-muted font-sans text-base leading-relaxed max-w-3xl mb-8">
                {content?.intro ?? category.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between bg-brand-surface rounded-md px-5 py-4 border border-brand-border hover:border-brand-green transition-colors"
                  >
                    <span className="font-sans text-[15px] text-brand-text group-hover:text-brand-green transition-colors">
                      {service.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-muted group-hover:text-brand-green transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
