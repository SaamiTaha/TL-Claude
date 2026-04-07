export interface ServiceItem {
  name: string;
  slug: string;         // includes -calgary suffix e.g. "lawn-mowing-maintenance-calgary"
  gallerySlug: string;  // without -calgary, matches gallery folder name
  category: string;
  categorySlug: string;
}

export interface CategoryItem {
  name: string;
  slug: string;
  anchor: string;       // e.g. "#lawn-services"
  description: string;
  services: ServiceItem[];
}

function svc(
  name: string,
  base: string,
  category: string,
  categorySlug: string
): ServiceItem {
  return { name, slug: `${base}-calgary`, gallerySlug: base, category, categorySlug };
}

export const CATEGORIES: CategoryItem[] = [
  {
    name: "Softscaping & Garden Design",
    slug: "softscaping-garden-design",
    anchor: "#softscaping-garden-design",
    description: "Custom garden beds, sod and turf installation, mature tree and shrub planting, hedge trimming, and seasonal colour designed for Calgary's growing zone.",
    services: [
      svc("Sod Installation", "sod-installation", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Artificial Turf Installation", "artificial-turf-installation", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Garden Bed Design & Installation", "garden-bed-design-installation", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Plant, Shrub & Tree Installation", "plant-shrub-tree-installation", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Hedge & Shrub Trimming", "hedge-shrub-trimming", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Mulching & Decorative Rock", "mulching-decorative-rock", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Seasonal & Annual Planting", "seasonal-annual-planting", "Softscaping & Garden Design", "softscaping-garden-design"),
      svc("Tree Trimming & Removal", "tree-trimming-removal", "Softscaping & Garden Design", "softscaping-garden-design"),
    ],
  },
  {
    name: "Hardscaping & Outdoor Living",
    slug: "hardscaping-outdoor-living",
    anchor: "#hardscaping-outdoor-living",
    description: "Natural stone patios, paver walkways, retaining walls, fences, decks, pergolas, outdoor kitchens, and fire pits engineered for Calgary's freeze-thaw cycles.",
    services: [
      svc("Patio Design & Installation", "patio-design-installation", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Walkway & Pathway Installation", "walkway-pathway-installation", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Retaining Wall Construction", "retaining-wall-construction", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Fence Installation", "fence-installation", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Deck Construction", "deck-construction", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Outdoor Steps & Staircase Construction", "outdoor-steps-staircase", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Outdoor Kitchen & Fire Pit Installation", "outdoor-kitchen-fire-pit", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Pergola & Shade Structure Installation", "pergola-shade-structures", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Landscape Lighting Installation", "landscape-lighting", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
      svc("Stamped & Decorative Concrete", "stamped-decorative-concrete", "Hardscaping & Outdoor Living", "hardscaping-outdoor-living"),
    ],
  },
  {
    name: "Grading, Drainage & Irrigation",
    slug: "grading-drainage-irrigation",
    anchor: "#grading-drainage-irrigation",
    description: "Professional lot grading, French drains, downspout management, sprinkler system installation, and smart irrigation upgrades to protect your Calgary property.",
    services: [
      svc("Lot & Yard Grading", "lot-yard-grading", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("Bobcat & Skid Steer Services", "bobcat-skid-steer-services", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("French Drain & Drainage Solutions", "french-drain-drainage", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("Downspout & Surface Water Management", "downspout-surface-water", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("Sprinkler System Installation", "sprinkler-system-installation", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("Irrigation Repair & Winterization", "irrigation-repair-winterization", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
      svc("Smart Irrigation Controller Upgrades", "smart-irrigation-controllers", "Grading, Drainage & Irrigation", "grading-drainage-irrigation"),
    ],
  },
  {
    name: "Calgary Lawn Services",
    slug: "calgary-lawn-services",
    anchor: "#calgary-lawn-services",
    description: "Weekly mowing, fertilization programs, aeration, overseeding, dethatching, and seasonal cleanups tailored to Calgary's climate and soil conditions.",
    services: [
      svc("Lawn Mowing & Maintenance", "lawn-mowing-maintenance", "Calgary Lawn Services", "calgary-lawn-services"),
      svc("Lawn Fertilization & Weed Control", "lawn-fertilization-weed-control", "Calgary Lawn Services", "calgary-lawn-services"),
      svc("Lawn Aeration & Overseeding", "lawn-aeration-overseeding", "Calgary Lawn Services", "calgary-lawn-services"),
      svc("Lawn Dethatching", "lawn-dethatching", "Calgary Lawn Services", "calgary-lawn-services"),
      svc("Seasonal Lawn Cleanups", "seasonal-lawn-cleanups", "Calgary Lawn Services", "calgary-lawn-services"),
    ],
  },
];

export const ALL_SERVICES: ServiceItem[] = CATEGORIES.flatMap((c) => c.services);

export const FEATURED_SERVICE = {
  name: "Full Yard Landscaping & Design",
  slug: "full-yard-landscaping-calgary",
  description: "Complete property transformations from design to build",
  href: "/services/full-yard-landscaping-calgary",
};
