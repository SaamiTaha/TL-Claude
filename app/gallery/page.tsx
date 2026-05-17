import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { GalleryTabs } from "@/components/sections/GalleryTabs";

export const metadata: Metadata = {
  title: "Project Gallery | Taha Landscaping Calgary",
  description:
    "Browse our portfolio of completed landscaping projects across Calgary. Patios, fences, garden beds, grading, and full yard transformations.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
              Our Portfolio
            </p>
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              Crafted <em>Results</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              Real projects completed across Calgary neighbourhoods. From full yard transformations to detailed garden work, see the quality we deliver on every job.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Suspense fallback={<div className="h-96 bg-brand-surface rounded-lg animate-pulse" />}>
            <GalleryTabs />
          </Suspense>
        </section>

        <FullYardCTA variant="full" />
      </main>
      <ContactSectionDark flush />
    </>
  );
}
