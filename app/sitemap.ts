import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { ALL_SERVICES, FEATURED_SERVICE } from "@/lib/service-data";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { CALGARY_NEIGHBORHOODS, SURROUNDING_AREAS } from "@/components/sections/ServiceAreaTeaser";

const STATIC_PATHS = ["", "/about", "/contact", "/gallery", "/services", "/service-areas"];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePaths = [FEATURED_SERVICE.slug, ...ALL_SERVICES.map((s) => s.slug)].map(
    (slug) => `/services/${slug}`
  );

  // Area pages are linked from both the hub and the homepage teaser
  const areaSlugs = new Set(
    [...SERVICE_AREAS, ...CALGARY_NEIGHBORHOODS, ...SURROUNDING_AREAS].map((a) => a.slug)
  );
  const areaPaths = [...areaSlugs].map((slug) => `/service-areas/${slug}`);

  const lastModified = new Date();

  return [...STATIC_PATHS, ...new Set(servicePaths), ...areaPaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
