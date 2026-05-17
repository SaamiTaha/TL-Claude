export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  primaryKeyword: string;
  supportingKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  whatIncludedHeading: string;
  whatIncludedSubheading: string;
  features: ServiceFeature[];
  whyChooseHeading: string;
  whyChooseCards: { title: string; description: string }[];
  faqs: ServiceFAQ[];
}

// Category content files
import { HARDSCAPING_CONTENT } from "./content/hardscaping";
import { SOFTSCAPING_CONTENT } from "./content/softscaping";
import { GRADING_CONTENT } from "./content/grading";
import { LAWN_CONTENT } from "./content/lawn";

const CONTENT: Record<string, ServiceContent> = {
  ...HARDSCAPING_CONTENT,
  ...SOFTSCAPING_CONTENT,
  ...GRADING_CONTENT,
  ...LAWN_CONTENT,
};

export function getServiceContent(slug: string): ServiceContent | null {
  return CONTENT[slug] ?? null;
}
