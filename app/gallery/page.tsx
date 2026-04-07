import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "[PLACEHOLDER] Gallery — Calgary Landscaping Portfolio",
  description: "[PLACEHOLDER] Browse our portfolio of Calgary landscaping projects.",
};

const FILTER_TABS = [
  { value: "all", label: "All Projects" },
  { value: "lawn", label: "Lawn Services" },
  { value: "softscaping", label: "Softscaping" },
  { value: "hardscaping", label: "Hardscaping" },
  { value: "grading", label: "Grading & Drainage" },
];

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
            <h1 className="headline-mixed text-5xl md:text-6xl lg:text-7xl text-brand-text mt-4">
              Crafted <em>Results</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              [PLACEHOLDER] Browse our portfolio of completed landscaping projects across Calgary.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Tabs defaultValue="all">
            <div className="flex justify-center">
              <TabsList className="bg-brand-surface border border-brand-border mb-10">
                {FILTER_TABS.map((tab) => (
                  <TabsTrigger key={tab.value} value={tab.value} className="text-[13px] uppercase tracking-wider font-sans">
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {FILTER_TABS.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <GalleryGrid />
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <FullYardCTA variant="compact" />
      </main>
      <ContactSectionDark />
    </>
  );
}
