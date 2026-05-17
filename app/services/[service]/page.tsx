import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ServiceGallery } from "@/components/sections/ServiceGallery";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Testimonials } from "@/components/sections/Testimonials";
import { Shield, Clock, Zap, ChevronDown } from "lucide-react";
import { ALL_SERVICES, CATEGORIES } from "@/lib/service-data";
import { getServiceContent } from "@/lib/service-content";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const svc = ALL_SERVICES.find((s) => s.slug === service);
  const content = getServiceContent(service);

  if (content) {
    return { title: content.metaTitle, description: content.metaDescription };
  }

  return {
    title: `${svc?.name ?? service} Calgary | Taha Landscaping`,
    description: `Professional ${svc?.name ?? service} services in Calgary, Alberta. Licensed, insured, 23+ years experience.`,
  };
}

const WHY_ICONS = [Shield, Clock, Zap];

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  const svc = ALL_SERVICES.find((s) => s.slug === service);
  const serviceName = svc?.name ?? "Service";
  const categoryName = svc?.category ?? "Category";
  const categorySlug = svc?.categorySlug ?? "";
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);
  const content = getServiceContent(service);

  const related = cat?.services.filter((s) => s.slug !== service).slice(0, 4) ?? [];

  const features = content?.features ?? Array.from({ length: 6 }).map((_, i) => ({
    title: `Feature ${i + 1}`,
    description: "Details coming soon.",
  }));

  const whyCards = content?.whyChooseCards ?? [
    { title: "Licensed & Insured", description: "Full liability coverage and WCB compliance on every project." },
    { title: "23+ Years Experience", description: "Over two decades of landscaping expertise across Calgary." },
    { title: "Same-Day Response", description: "Request a quote and hear back from us the same day." },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* ── Breadcrumb + Hero ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <nav className="flex flex-wrap gap-2 text-sm text-brand-muted font-sans mb-4 justify-center">
            <Link href="/" className="hover:text-brand-text">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-brand-text">Services</Link>
            <span>/</span>
            <Link href={`/services#${categorySlug}`} className="hover:text-brand-text">{categoryName}</Link>
            <span>/</span>
            <span className="text-brand-text">{serviceName}</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              {categoryName}
            </p>
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              {serviceName.split(" ").slice(0, -1).join(" ")}{" "}
              <em>{serviceName.split(" ").slice(-1)[0]}</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              {content?.heroIntro ??
                `Professional ${serviceName.toLowerCase()} services in Calgary, Alberta. Licensed, insured, and backed by over 23 years of experience.`}
            </p>
          </div>
        </section>

        {/* ── What's Included ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              What&apos;s Included
            </p>
            <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
              {content
                ? <>{content.whatIncludedHeading} <em>{content.whatIncludedSubheading}</em></>
                : <>Service <em>Details</em></>}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-brand-surface rounded-xl p-7 border border-brand-border hover:border-brand-green/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-[11px] font-sans font-semibold tracking-widest text-brand-terracotta uppercase leading-none pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-text text-base leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-brand-muted text-[15px] font-sans mt-2 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <ServiceGallery categorySlug={categorySlug || "full-yard-landscaping"} />
        </section>

        {/* ── Why Choose Us ── */}
        <section className="bg-brand-surface border-y border-brand-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                Why Choose Us
              </p>
              <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
                {content
                  ? <>The {content.whyChooseHeading} <em>Difference</em></>
                  : <>The Taha <em>Difference</em></>}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
              {whyCards.map((card, i) => {
                const Icon = WHY_ICONS[i % WHY_ICONS.length];
                return (
                  <div key={card.title} className="bg-brand-bg rounded-xl p-8 border border-brand-border text-center">
                    <div className="w-14 h-14 rounded-md bg-brand-green/10 flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-brand-green" />
                    </div>
                    <h3 className="font-sans font-semibold text-lg text-brand-text mt-5">{card.title}</h3>
                    <p className="text-brand-muted text-[15px] font-sans mt-3 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <Testimonials />

        {/* ── FAQ ── */}
        {content?.faqs && content.faqs.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center max-w-2xl mx-auto">
              <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                Common Questions
              </p>
              <h2 className="headline-mixed text-4xl md:text-5xl text-brand-text mt-4">
                Frequently Asked <em>Questions</em>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto mt-14 divide-y divide-brand-border">
              {content.faqs.map((faq, i) => (
                <details key={i} className="group py-6">
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
        )}

        {/* ── Full Yard CTA ── */}
        <FullYardCTA variant="compact" />

        {/* ── Related Services ── */}
        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
                Related Services
              </p>
              <h2 className="headline-mixed text-4xl text-brand-text mt-4">
                Explore <em>More</em>
              </h2>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide justify-center flex-wrap sm:flex-nowrap">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex-shrink-0 w-[calc(50%-12px)] sm:w-[220px] group"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="https://placehold.co/400x300/EDE8DF/A09080"
                      alt={`${s.name} in Calgary`}
                      fill
                      sizes="(max-width: 640px) 50vw, 220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-sans font-medium text-brand-text text-[15px] mt-3 text-center">{s.name}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <ContactSectionDark />
    </>
  );
}
