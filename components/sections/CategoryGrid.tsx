import { Leaf, Flower2, Hammer, Droplets } from "lucide-react";
import { CategoryCard } from "./CategoryCard";
import { CATEGORIES } from "@/lib/service-data";

const CATEGORY_ICONS = [Flower2, Hammer, Droplets, Leaf];

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          What We Do
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          Bespoke Outdoor <em>Solutions</em>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {CATEGORIES.map((category, i) => (
          <CategoryCard
            key={category.slug}
            name={category.name}
            slug={category.slug}
            description={category.description}
            icon={CATEGORY_ICONS[i]}
          />
        ))}
      </div>
    </section>
  );
}
