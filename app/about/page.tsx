import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Shield, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "[PLACEHOLDER] About Us — Calgary Landscaping",
  description: "[PLACEHOLDER] Learn about Calgary's most trusted landscaping company.",
};

const STATS = [
  { value: "23+", label: "Years of Experience" },
  { value: "5.0", label: "Google Rating" },
  { value: "[X]+", label: "Projects Completed" },
];

const CREDENTIALS = [
  { icon: Shield, label: "[PLACEHOLDER] Licensed & Insured" },
  { icon: Award, label: "[PLACEHOLDER] Industry Certified" },
  { icon: Clock, label: "[PLACEHOLDER] Same-Day Response" },
];

const TEAM_MEMBERS = [
  { name: "[PLACEHOLDER] Team Member 1", role: "[PLACEHOLDER] Role" },
  { name: "[PLACEHOLDER] Team Member 2", role: "[PLACEHOLDER] Role" },
  { name: "[PLACEHOLDER] Team Member 3", role: "[PLACEHOLDER] Role" },
];

const VALUES = [
  { title: "Craftsmanship", desc: "[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { title: "Integrity", desc: "[PLACEHOLDER] Ut enim ad minim veniam, quis nostrud exercitation." },
  { title: "Excellence", desc: "[PLACEHOLDER] Duis aute irure dolor in reprehenderit in voluptate." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">About Us</p>
            <h1 className="headline-mixed text-5xl md:text-6xl lg:text-7xl text-brand-text mt-4">
              Calgary&apos;s Most <em>Trusted</em> Landscapers
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text">Building Outdoor <em>Legacy</em></h2>
              <p className="text-brand-muted font-sans text-base mt-6 leading-relaxed">
                [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-brand-muted font-sans text-base mt-4 leading-relaxed">
                [PLACEHOLDER] Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image src="https://placehold.co/600x800/EDE8DF/A09080" alt="[PLACEHOLDER]" fill className="object-cover" />
              <div className="absolute bottom-8 right-8 left-8 bg-white/20 backdrop-blur-md rounded-xl p-6">
                <p className="font-display italic text-brand-text text-xl leading-relaxed">
                  &ldquo;[PLACEHOLDER] Our commitment to craftsmanship is evident in every project.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex gap-16 justify-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-display text-brand-text">{stat.value}</p>
                <p className="text-[13px] uppercase tracking-widest text-brand-muted font-sans mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-wrap gap-6 justify-center">
            {CREDENTIALS.map((cred) => (
              <div key={cred.label} className="flex items-center gap-3 bg-brand-surface rounded-xl px-7 py-5">
                <cred.icon className="h-6 w-6 text-brand-terracotta" />
                <span className="font-sans text-[15px] text-brand-text">{cred.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">Our Team</p>
            <h2 className="headline-mixed text-5xl text-brand-text mt-4">Meet the <em>Experts</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image src="https://placehold.co/400x533/EDE8DF/A09080" alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-sans font-semibold text-lg text-brand-text mt-4">{member.name}</h3>
                <p className="text-brand-muted text-[15px]">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">Our Values</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-brand-surface rounded-xl p-10 text-center">
                <h3 className="font-sans font-semibold text-xl text-brand-text">{v.title}</h3>
                <p className="text-brand-muted text-[15px] mt-3">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FullYardCTA variant="compact" />
      </main>
      <ContactSectionDark />
    </>
  );
}
