import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import {
  Compass,
  Ruler,
  Hammer,
  Leaf,
  Droplets,
  Sparkles,
  Phone,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Landscape Design Calgary | Full Yard Landscaping — Taha Landscaping",
  description:
    "Calgary's trusted landscape designer for 23 years. Complete yard transformations from design through construction. Licensed, insured, same-day response.",
};

const INCLUSIONS = [
  {
    icon: Compass,
    number: "01",
    title: "Design & Planning",
    description:
      "We walk your property, listen to your goals, and develop a construction-ready landscape plan with material selections, plant palettes, and a clear scope before anything gets built.",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Site Assessment & Grading",
    description:
      "Drainage, slope, and soil conditions are evaluated and the site is graded properly. This is the foundation that protects everything installed above it.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Hardscape Construction",
    description:
      "Patios, retaining walls, walkways, steps, and fences built with the right materials and engineered base prep for Calgary's freeze-thaw cycle.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "Softscape & Planting",
    description:
      "Trees, shrubs, perennials, and garden beds selected for Calgary's climate zone. Every plant is placed with mature spacing, sun exposure, and soil drainage in mind.",
  },
  {
    icon: Droplets,
    number: "05",
    title: "Irrigation & Drainage",
    description:
      "Underground sprinkler systems zoned for efficiency, French drains where needed, and downspout routing that keeps water moving away from your foundation.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Custom Features",
    description:
      "Fire pits, outdoor kitchens, pergolas, lighting, water features. Whatever rounds out your vision gets built into the plan from the start, not bolted on after.",
  },
];

const FAQS = [
  {
    question: "How much does landscape design in Calgary cost?",
    answer:
      "Full yard projects in Calgary typically range from $30,000 to $150,000+ depending on lot size, materials, and scope. We provide detailed, line-item quotes after the initial site visit so there are no surprises. Every project is different, and we price based on what yours actually requires.",
  },
  {
    question: "Do I need a landscape architect or landscape designer in Calgary?",
    answer:
      "For most residential projects, a landscape designer with construction experience is the right fit. Landscape architects are typically required for large commercial or municipal work. Our design team creates detailed, construction-ready plans backed by 23 years of building in Calgary soil and weather conditions.",
  },
  {
    question: "How long does a full yard landscaping project take?",
    answer:
      "Most complete yard transformations take 2 to 6 weeks of active construction depending on complexity. Design and planning add 1 to 3 weeks upfront. We provide a project timeline during the proposal stage and keep you updated throughout.",
  },
  {
    question: "What happens if Calgary weather delays my project?",
    answer:
      "Weather delays are a reality of building outdoors in Calgary. We build buffer into every schedule and communicate proactively when conditions shift. Rain, early snow, or extreme heat may push timelines, but they never compromise build quality.",
  },
  {
    question: "Do you handle permits for Calgary landscaping projects?",
    answer:
      "Yes. Projects that require city permits for retaining walls, decks, fences, or grade changes are handled by our team. We know what triggers a permit in Calgary and take care of the paperwork so you don't have to.",
  },
  {
    question: "Can I phase my backyard design over multiple seasons?",
    answer:
      "Absolutely. We design the full vision upfront, then build in phases that match your budget and priorities. This way every phase connects properly and the end result looks intentional, not pieced together.",
  },
];

export default function FullYardLandscapingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative h-[calc(100vh-72px)] overflow-hidden flex items-center justify-center">
          <Image
            src="/gallery/full-yard-landscaping/calgary-full-yard-transformation.jpg"
            alt="Complete landscape design and construction project in Calgary by Taha Landscaping"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/70" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <h1 className="sr-only">Landscape Design Calgary</h1>

            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans mb-6">
              Full Yard Landscaping & Design
            </p>

            <h2 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95]">
              Complete Landscape <em>Design & Construction</em>
            </h2>

            <p className="font-sans text-white/80 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              One team handles every phase of your property. Grading, hardscaping, softscaping, irrigation, and everything in between. Bringing the best out of your yard for over 23 years.
            </p>

            <div className="flex items-center justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="tel:4038743690"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" /> Call Now
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 animate-scroll-bounce h-12 w-px bg-white/30" />
        </section>

        {/* ── What's Included ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              What&apos;s Included
            </p>
            <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
              Every Phase of Your <em>Yard, Covered</em>
            </h2>
            <p className="text-brand-muted font-sans text-base mt-5 leading-relaxed max-w-xl mx-auto">
              A full yard project is more than a list of services. It is a coordinated build where every element is planned together and installed in the right sequence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {INCLUSIONS.map((item) => (
              <div
                key={item.title}
                className="bg-brand-surface rounded-xl p-8 border border-brand-border hover:border-brand-green/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <div>
                    <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-terracotta uppercase">
                      Phase {item.number}
                    </span>
                    <h3 className="font-sans font-semibold text-lg text-brand-text">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-brand-muted text-[15px] font-sans mt-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Owner Involvement ── */}
        <section className="bg-brand-surface border-y border-brand-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                  Direct Owner Involvement
                </p>
                <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4 leading-tight">
                  Your Project Has Our <em>Full Attention</em>
                </h2>
                <div className="space-y-5 mt-8">
                  <p className="text-brand-text font-sans text-base leading-relaxed">
                    At Taha Landscaping, the owner is on your project. Not managing it from a desk, not checking in once a week. On site, making decisions, solving problems in real time, and making sure the work meets the standard we have spent 23 years building.
                  </p>
                  <p className="text-brand-muted font-sans text-base leading-relaxed">
                    That is the difference between a company that builds landscapes and a company that protects its reputation on every single one. When the person who owns the business is standing in your yard, accountability is not a policy. It is the default.
                  </p>
                  <p className="text-brand-muted font-sans text-base leading-relaxed">
                    We are not interested in volume. We take on the number of projects we can deliver properly, and every client gets the same level of care and communication from the first phone call to the final walkthrough.
                  </p>
                </div>
                <div className="flex gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
                  >
                    Request a Consultation
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/gallery/full-yard-landscaping/calgary-landscape-designer-on-site.jpg"
                  alt="Taha Landscaping owner on site during a Calgary landscape design project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Portfolio Masonry ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Our Portfolio
            </p>
            <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
              Recent <em>Transformations</em>
            </h2>
          </div>
          <div className="columns-2 md:columns-3 gap-4 space-y-4 mt-14">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`https://placehold.co/800x600/EDE8DF/A09080?text=Project+${i + 1}`}
                    alt={`Full yard landscape design project ${i + 1} in Calgary by Taha Landscaping`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
            >
              View Full Gallery
            </Link>
          </div>
        </section>

        <ProcessSteps />
        <Testimonials />

        {/* ── FAQs ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Common Questions
            </p>
            <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
              Landscape Design <em>FAQs</em>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mt-14 divide-y divide-brand-border">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-sans font-semibold text-brand-text text-base pr-8">
                    {faq.question}
                  </h3>
                  <ChevronDown className="h-5 w-5 text-brand-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-brand-muted font-sans text-[15px] leading-relaxed mt-4 pr-12">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <ContactSectionDark />
    </>
  );
}
