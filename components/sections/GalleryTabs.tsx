"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import posthog from "posthog-js";
import { useSearchParams } from "next/navigation";

const FILTER_TABS = [
  { value: "all", label: "All Projects", category: "all" },
  { value: "lawn", label: "Lawn Services", category: "calgary-lawn-services" },
  { value: "softscaping", label: "Softscaping", category: "softscaping-garden-design" },
  { value: "hardscaping", label: "Hardscaping", category: "hardscaping-outdoor-living" },
  { value: "grading", label: "Grading & Drainage", category: "grading-drainage-irrigation" },
];

export function GalleryTabs() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const defaultTab = category
    ? FILTER_TABS.find((t) => t.category === category)?.value || "all"
    : "all";

  return (
    <Tabs
      defaultValue={defaultTab}
      onValueChange={(value) => {
        const tab = FILTER_TABS.find((t) => t.value === value);
        if (tab) {
          posthog.capture("gallery_category_selected", { category: tab.category, label: tab.label });
        }
      }}
    >
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
  );
}
