import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Project Gallery | Taha Landscaping Calgary",
  description:
    "Browse our portfolio of completed landscaping projects across Calgary. Patios, fences, garden beds, grading, and full yard transformations.",
};

const FILTER_TABS = [
  { value: "all", label: "All Projects", category: "all" },
  { value: "lawn", label: "Lawn Services", category: "calgary-lawn-services" },
  { value: "softscaping", label: "Softscaping", category: "softscaping-garden-design" },
  { value: "hardscaping", label: "Hardscaping", category: "hardscaping-outdoor-living" },
  { value: "grading", label: "Grading & Drainage", category: "grading-drainage-irrigation" },
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
            <h1 className="headline-mixed text-6xl md:text-7xl lg:text-8xl text-brand-text mt-4">
              Crafted <em>Results</em>
            </h1>
            <p className="text-brand-muted font-sans text-lg mt-6">
              Real projects completed across Calgary neighbourhoods. From full yard transformations to detailed garden work, see the quality we deliver on every job.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
          <Tabs defaultValue="all">
            {/* Mobile: 3+2 grid, both rows full width */}
            <div className="sm:hidden flex justify-center mb-10">
              <TabsList className="bg-brand-surface border border-brand-border rounded-md overflow-hidden gap-0 p-0 h-auto grid grid-cols-6">
                {FILTER_TABS.map((tab, i) => {
                  const span = i < 3 ? "col-span-2" : "col-span-3";
                  const dividers = [
                    i < 3 ? "border-b border-brand-border" : "",
                    i === 1 || i === 2 || i === 4 ? "border-l border-brand-border" : "",
                  ].join(" ");
                  return (
                    <TabsTrigger key={tab.value} value={tab.value} className={`text-[12px] uppercase tracking-wider font-sans min-h-[44px] rounded-none ${span} ${dividers}`}>
                      {tab.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
            {/* Desktop: single row with dividers */}
            <div className="hidden sm:flex justify-center mb-10">
              <TabsList className="bg-brand-surface border border-brand-border gap-0 p-0">
                {FILTER_TABS.map((tab, i) => {
                  const corners = i === 0 ? "rounded-l-md" : i === FILTER_TABS.length - 1 ? "rounded-r-md" : "";
                  return (
                    <TabsTrigger key={tab.value} value={tab.value} className={`text-[13px] uppercase tracking-wider font-sans rounded-none px-4 ${i > 0 ? "border-l border-brand-border" : ""} ${corners}`}>
                      {tab.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>
            {FILTER_TABS.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <GalleryGrid category={tab.category} />
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <FullYardCTA variant="full" />
      </main>
      <ContactSectionDark flush />
    </>
  );
}
