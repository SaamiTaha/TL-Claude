import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { FullYardCTA } from "@/components/sections/FullYardCTA";
import { ServiceCategories } from "@/components/sections/ServiceCategories";
import { WhyUs } from "@/components/sections/WhyUs";
import { PortfolioStrip } from "@/components/sections/PortfolioStrip";
import { Testimonials } from "@/components/sections/Testimonials";
import { ServiceAreaTeaser } from "@/components/sections/ServiceAreaTeaser";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ, FAQSchema } from "@/components/sections/FAQ";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Landscaping Calgary | Taha Landscaping",
  description:
    "Taha Landscaping is Calgary\u2019s premier landscaping company. 23+ years delivering luxury landscape design, hardscaping, softscaping, and full yard transformations. Licensed, insured, warranty-backed. Get a free quote today.",
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tahalandscaping.ca/#business",
    name: "Taha Landscaping",
    description:
      "Premium landscaping company in Calgary, Alberta. Full yard landscaping, hardscaping, softscaping, grading, drainage, and irrigation services for residential and commercial properties.",
    url: "https://tahalandscaping.ca",
    telephone: "+1-403-860-6470",
    email: "tahalandscaping@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Calgary",
      addressRegion: "AB",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.0447,
      longitude: -114.0719,
    },
    areaServed: [
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Airdrie" },
      { "@type": "City", name: "Okotoks" },
      { "@type": "City", name: "Cochrane" },
      { "@type": "City", name: "Chestermere" },
    ],
    priceRange: "$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "87",
      bestRating: "5",
    },
    image: "https://tahalandscaping.ca/hero-calgary-landscaping.jpg",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServiceCategories />
        <FullYardCTA variant="full" />
        <WhyUs />
        <PortfolioStrip />
        <Testimonials />
        <ServiceAreaTeaser />
        <ProcessSteps />
        <FAQ />
      </main>
      <ContactSectionDark />
    </>
  );
}
