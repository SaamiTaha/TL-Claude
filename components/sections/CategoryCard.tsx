import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export function CategoryCard({ name, slug, description, icon: Icon }: CategoryCardProps) {
  return (
    <div className="bg-brand-surface rounded-xl p-10 hover:-translate-y-1 transition-all duration-200">
      <Icon className="h-9 w-9 text-brand-terracotta" />
      <h3 className="font-sans font-semibold text-xl text-brand-text mt-5">{name}</h3>
      <p className="text-brand-muted text-[15px] mt-2 leading-relaxed">{description}</p>
      <Link
        href={`/services#${slug}`}
        className="inline-flex items-center gap-1 text-brand-green text-sm font-medium mt-5 hover:gap-2 transition-all"
      >
        Explore <ArrowRight className="h-4 w-4" />
      </Link>
      <div className="mt-2">
        <Link
          href="/services/full-yard-landscaping-calgary"
          className="text-brand-terracotta text-[13px] hover:underline"
        >
          View Full Yard Option →
        </Link>
      </div>
    </div>
  );
}
