import { Star, Shield, BadgeCheck, Hammer } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  label: string;
}

const TRUST_ITEMS: TrustItem[] = [
  { icon: Star, label: "5-Star Rated in Calgary" },
  { icon: Shield, label: "Fully Licensed & Insured" },
  { icon: BadgeCheck, label: "Warranty-Backed Work" },
  { icon: Hammer, label: "500+ Projects Completed" },
];

export function TrustBar() {
  return (
    <section className="bg-brand-surface border-y border-brand-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 px-4 py-2">
              <item.icon className="h-5 w-5 text-brand-terracotta flex-shrink-0" />
              <p className="text-[13px] uppercase tracking-widest text-brand-text font-sans font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
