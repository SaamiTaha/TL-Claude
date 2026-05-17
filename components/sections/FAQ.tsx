"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import posthog from "posthog-js";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How much does landscaping cost in Calgary?",
    answer:
      "Landscaping costs in Calgary vary significantly depending on the scope of work. A basic lawn and garden refresh may start around $3,000–$5,000, while comprehensive full yard landscaping projects that include grading, hardscaping, irrigation, and softscaping typically range from $15,000 to $100,000 or more. Taha Landscaping provides detailed, transparent proposals so you know exactly what to expect before work begins.",
  },
  {
    question: "What is the best time to start a landscaping project in Calgary?",
    answer:
      "The ideal landscaping season in Calgary runs from late April through October. Spring is excellent for grading, drainage, and hardscaping work, while late spring and early summer are optimal for sod installation and planting. That said, planning and design can happen year-round. Many Calgary homeowners book consultations in winter to secure spring start dates and avoid scheduling delays.",
  },
  {
    question: "How long does a full yard landscaping project take in Calgary?",
    answer:
      "Timeline depends on project complexity. A focused hardscaping or softscaping project may take 1–2 weeks. A full yard transformation that includes demolition, grading, drainage, hardscape construction, irrigation installation, and planting typically requires 3–6 weeks. Taha Landscaping provides a detailed schedule in every proposal so you can plan accordingly.",
  },
  {
    question: "Do I need a permit for landscaping work in Calgary?",
    answer:
      "Most standard landscaping work in Calgary (gardens, patios, sod, and irrigation) does not require a permit. However, retaining walls over a certain height, structures near property lines, fences, and significant grading changes may require City of Calgary permits. Taha Landscaping handles all permitting requirements on your behalf as part of our project management process.",
  },
  {
    question: "What materials do you use for Calgary landscaping projects?",
    answer:
      "We exclusively source premium materials suited for Calgary's climate and freeze-thaw cycles. This includes locally quarried natural stone, high-quality concrete pavers, pressure-treated and composite lumber, commercial-grade irrigation components, and nursery-grown trees and shrubs from Alberta-based growers. We never substitute materials without client approval.",
  },
  {
    question: "Do you offer warranties on your landscaping work?",
    answer:
      "Yes. Every Taha Landscaping project comes with a written workmanship warranty. Hardscaping installations, drainage systems, and structural work are covered under our warranty program. Plant material warranties vary by species and are outlined in your project agreement. We stand behind our work and address warranty items promptly.",
  },
  {
    question: "What areas in Calgary do you serve?",
    answer:
      "Taha Landscaping serves all of Calgary and surrounding communities including Airdrie, Okotoks, Cochrane, Chestermere, Strathmore, and Priddis. We work extensively in Calgary's premium neighborhoods including Aspen Woods, Upper Mount Royal, Elbow Park, Springbank Hill, Pump Hill, and many more. Visit our Service Areas page for a complete list.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Common Questions
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          Frequently Asked Questions About <em>Calgary Landscaping</em>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto mt-14 divide-y divide-brand-border">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <button
              type="button"
              onClick={() => {
                const isOpening = openIndex !== i;
                setOpenIndex(isOpening ? i : null);
                if (isOpening) {
                  posthog.capture("faq_question_expanded", { question: item.question, question_index: i });
                }
              }}
              className="flex items-center justify-between w-full py-6 text-left group"
            >
              <span className="font-sans font-medium text-brand-text text-[17px] pr-8 group-hover:text-brand-green transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-brand-muted flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="pb-6">
                <p className="text-brand-muted font-sans text-[15px] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/** FAQ JSON-LD schema for rich snippets */
export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
