import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Shield, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Taha Landscaping | 23+ Years in Calgary",
  description:
    "Licensed, insured Calgary landscapers with over 23 years of experience. Learn why Calgary homeowners trust Taha Landscaping for their outdoor projects.",
};

const STATS = [
  { value: "23+", label: "Years in Calgary" },
  { value: "5.0", label: "Google Rating" },
  { value: "1,500+", label: "Projects Completed" },
];

const CREDENTIALS = [
  { icon: Shield, label: "Licensed & Fully Insured" },
  { icon: Star, label: "5-Star Google Reviews" },
  { icon: Clock, label: "Same-Day Quote Response" },
];

const VALUES = [
  {
    title: "Craftsmanship",
    description:
      "Every detail matters. From the grade of a patio base to the alignment of a fence post, we build to a standard that holds up through Calgary winters and looks right for years.",
  },
  {
    title: "Transparency",
    description:
      "No surprises on the invoice. We walk you through the scope, timeline, and cost before any work begins. If something changes on site, you hear about it first.",
  },
  {
    title: "Accountability",
    description:
      "We show up when we say we will, and we stay until the job is done right. If something needs attention after the fact, we want to hear about it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              About Us
            </p>
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              Calgary&apos;s Most <em>Trusted</em> Landscapers
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                Our Story
              </p>
              <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
                Building Outdoor <em>Legacy</em>
              </h2>
              <p className="text-brand-muted font-sans text-base mt-6 leading-relaxed">
                Taha Landscaping has been serving Calgary homeowners and commercial
                properties for over 23 years. What started as a small operation has
                grown into one of the city&apos;s most trusted landscaping companies,
                built on referrals, repeat clients, and work that speaks for itself.
              </p>
              <p className="text-brand-muted font-sans text-base mt-4 leading-relaxed">
                We handle everything from full yard transformations to targeted
                projects like patios, fences, grading, and garden installations. Every
                job is managed directly by our team, not subcontracted out. That means
                consistent quality, clear communication, and accountability from start
                to finish.
              </p>
              <p className="text-brand-muted font-sans text-base mt-4 leading-relaxed">
                We know Calgary. We understand the soil, the drainage challenges, the
                freeze-thaw cycles, and the bylaws. That local knowledge is built into
                every recommendation we make and every project we deliver.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-surface">
              {/* Drop your team/about photo into /public/images/about/team.jpg */}
              <Image
                src="/images/about/team.jpg"
                alt="Taha Landscaping team on a Calgary project site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 justify-center items-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl md:text-6xl font-display text-brand-text">
                  {stat.value}
                </p>
                <p className="text-[13px] uppercase tracking-widest text-brand-muted font-sans mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-3 bg-brand-surface border border-brand-border rounded-xl px-7 py-5"
              >
                <cred.icon className="h-6 w-6 text-brand-terracotta flex-shrink-0" />
                <span className="font-sans text-[15px] text-brand-text">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              How We Work
            </p>
            <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
              What Sets Us <em>Apart</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-brand-surface border border-brand-border rounded-xl p-10 text-center"
              >
                <h3 className="font-sans font-semibold text-xl text-brand-text">
                  {v.title}
                </h3>
                <p className="text-brand-muted text-[15px] mt-3 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <FullYardCTA variant="full" />
      </main>
      <ContactSectionDark flush />
    </>
  );
}
