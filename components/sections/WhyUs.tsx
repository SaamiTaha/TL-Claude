import { Clock, Award, ClipboardList, ShieldCheck, BadgeCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface WhyUsPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const POINTS: WhyUsPoint[] = [
  {
    icon: Clock,
    title: "23+ Years of Experience",
    description:
      "Over two decades serving Calgary homeowners. We understand the local climate, soil, and building codes better than anyone.",
  },
  {
    icon: Award,
    title: "Premium Materials & Craftsmanship",
    description:
      "We source the highest-grade natural stone, pavers, lumber, and plant stock. No shortcuts, no substitutions.",
  },
  {
    icon: ClipboardList,
    title: "Transparent Process",
    description:
      "Detailed proposals, clear timelines, and consistent communication from your first consultation to final walkthrough.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty-Backed Work",
    description:
      "Every project comes with our written workmanship warranty. We stand behind the quality of our installations.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed & Insured",
    description:
      "Full liability coverage and WCB compliance on every Calgary job site. Your property is always protected.",
  },
  {
    icon: Zap,
    title: "Same-Day Response",
    description:
      "Submit a quote request and hear back the same business day. We respect your time as much as your property.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Why Choose Us
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4 leading-tight">
          Why Calgary Homeowners Choose <em>Taha Landscaping</em>
        </h2>
        <p className="text-brand-muted font-sans text-base mt-6 leading-relaxed">
          Choosing a landscaping company in Calgary is a significant investment. Here&apos;s what sets Taha Landscaping apart from every other contractor in the city.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {POINTS.map((point) => (
          <div key={point.title} className="bg-brand-surface rounded-xl p-8 border border-brand-border">
            <point.icon className="h-8 w-8 text-brand-terracotta" />
            <h3 className="font-sans font-semibold text-lg text-brand-text mt-5">
              {point.title}
            </h3>
            <p className="text-brand-muted text-[15px] font-sans mt-3 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
