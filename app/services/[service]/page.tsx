import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { ServiceGallery } from "@/components/sections/ServiceGallery";
import { ContactForm } from "@/components/sections/ContactForm";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Star } from "lucide-react";
import { ALL_SERVICES, CATEGORIES } from "@/lib/service-data";

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service } = await params;
  const svc = ALL_SERVICES.find((s) => s.slug === service);
  return {
    title: `[PLACEHOLDER] ${svc?.name ?? service} — Calgary Landscaping`,
    description: `[PLACEHOLDER] Professional ${svc?.name ?? service} services in Calgary, Alberta.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service } = await params;
  const svc = ALL_SERVICES.find((s) => s.slug === service);
  const serviceName = svc?.name ?? "[PLACEHOLDER] Service";
  const categoryName = svc?.category ?? "[PLACEHOLDER] Category";
  const categorySlug = svc?.categorySlug ?? "";
  const cat = CATEGORIES.find((c) => c.slug === categorySlug);

  const related = cat?.services.filter((s) => s.slug !== service).slice(0, 4) ?? [];

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb + Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <nav className="flex gap-2 text-sm text-brand-muted font-sans mb-6 justify-center">
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
            <h1 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
              {serviceName.split(" ").slice(0, -1).join(" ")}{" "}
              <em>{serviceName.split(" ").slice(-1)[0]}</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-brand-surface rounded-2xl p-10">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              What&apos;s Included
            </p>
            <h2 className="headline-mixed text-4xl text-brand-text mt-4">
              Service <em>Details</em>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-terracotta mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-sans font-medium text-brand-text text-base">[PLACEHOLDER] Feature {i + 1}</p>
                    <p className="text-brand-muted text-[15px] mt-1">
                      [PLACEHOLDER] Description of what this includes.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <ServiceGallery hasImages={false} serviceSlug={svc?.gallerySlug ?? service} />
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Why Choose Us
            </p>
            <h2 className="headline-mixed text-4xl text-brand-text mt-4">
              The [PLACEHOLDER] <em>Difference</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {["Licensed & Insured", "23+ Years Experience", "Same-Day Response"].map((item) => (
              <div key={item} className="bg-brand-surface rounded-xl p-8 text-center">
                <h3 className="font-sans font-semibold text-lg text-brand-text">{item}</h3>
                <p className="text-brand-muted text-[15px] mt-2">
                  [PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Single Testimonial */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex gap-1 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand-terracotta fill-brand-terracotta" />
              ))}
            </div>
            <p className="font-display italic text-2xl text-brand-text mt-6 leading-relaxed">
              &ldquo;[PLACEHOLDER] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
            </p>
            <p className="uppercase tracking-widest text-[13px] text-brand-muted font-sans mt-5">
              — [PLACEHOLDER CLIENT]
            </p>
          </div>
        </section>

        {/* Quote Form */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-brand-surface rounded-2xl p-10 max-w-xl mx-auto">
            <ContactForm variant="light" />
          </div>
        </section>

        <FullYardCTA variant="compact" />

        {/* Related services strip */}
        {related.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans text-center">
              Related Services
            </p>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide mt-8 justify-center">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex-shrink-0 w-[220px]"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src="https://placehold.co/400x300/EDE8DF/A09080"
                      alt={`[PLACEHOLDER] ${s.name}`}
                      fill
                      className="object-cover"
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
