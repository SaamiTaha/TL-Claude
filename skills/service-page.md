# Service Page Skill — Content Generation Guide

## Page Structure (section order is non-negotiable)

1. **Breadcrumb + Hero** — category eyebrow, H1 is the service name followed by "Calgary" with italic last word, intro paragraph with primary keyword. Minimize whitespace above/below the breadcrumb so content sits high on the page.
2. **What's Included** — 6 features in a 3-column grid (title + description), service-specific
3. **Gallery** — ServiceGallery component (falls back to gallery preview if no images). Gallery content must be centered.
4. **Why Choose Us** — 3 trust signal cards (Licensed & Insured, 23+ Years, Same-Day Quotes)
5. **Testimonials** — use all 3 real testimonials via the shared `<Testimonials />` component. Do NOT fabricate. Do NOT pick just one.
6. **FAQ** — 5-6 questions using native `<details>` accordion
7. **FullYardCTA** — `variant="compact"` — ALWAYS placed here, non-negotiable
8. **Related Services** — 4 services from the same category
9. **ContactSectionDark** — dark footer contact section with form

## File Structure

Content is split by category for clean auditing:
- `lib/content/hardscaping.ts` — Hardscaping & Outdoor Living (10 services)
- `lib/content/softscaping.ts` — Softscaping & Garden Design (8 services)
- `lib/content/grading.ts` — Grading, Drainage & Irrigation (7 services)
- `lib/content/lawn.ts` — Calgary Lawn Services (5 services)

All are imported and merged in `lib/service-content.ts`. The dynamic route at `app/services/[service]/page.tsx` reads from `getServiceContent(slug)`.

## Content Data Structure

Each service entry has:
- `slug` — matches the URL slug (e.g. "fence-installation-calgary")
- `primaryKeyword` — from `docs/keyword-map.md`, used in metaTitle, heroIntro, at least one FAQ
- `supportingKeywords` — from `docs/keyword-map.md`, used in features, FAQs, metaDescription
- `metaTitle` — format: "Primary Keyword | Taha Landscaping"
- `metaDescription` — under 160 chars, includes primary keyword, ends with CTA
- `heroIntro` — 1-2 sentences, primary keyword in first sentence, describes what we do
- `whatIncludedHeading` / `whatIncludedSubheading` — split for italic styling
- `features` (6) — specific, practical items about what the service includes
- `whyChooseHeading` — typically "Taha Landscaping"
- `whyChooseCards` (3) — Licensed & Insured, 23+ Years, Same-Day Quotes (customize descriptions per service)
- `faqs` (5-6) — common questions, keyword-rich questions, practical answers

## SEO Rules

- Pull primary + supporting keywords from `docs/keyword-map.md` and embed them in the `primaryKeyword` and `supportingKeywords` fields
- Primary keyword in: metaTitle, metaDescription, heroIntro (first sentence), at least one FAQ question
- Supporting keywords in: feature titles, FAQ questions/answers, metaDescription
- One primary keyword per page, zero cannibalization
- FAQ questions should be written intuitively as real search queries and farm all relevant primary + supporting keywords

## Content Rules

- **No prices** — never quote specific dollar amounts. Say "varies depending on..." and direct to a free quote
- **No warranty commitments** — warranty is case-by-case. Never promise specific coverage periods. Normal wear, weathering, and deterioration are not covered. Keep language general
- **No overpromising** — do not claim specific materials, techniques, or specifications unless they are standard and common practice. When in doubt, be broad and vague. Use words like "typically", "depending on conditions", "we assess on site". Never commit to specific construction methods (e.g. don't say "steel-reinforced posts" if that's not always the case). Suggest estimates rather than stating facts that could be binding.
- **Timelines** — keep vague. "Depends on scope and conditions, we provide a timeline in your quote"
- **No services we don't offer** — do not mention vinyl fencing or other services not listed in service-data.ts
- Tone: confident, authoritative, craft-focused. Never salesy
- NEVER use: "family business", "passion for landscaping", "we treat your yard like our own"
- No em-dashes in copy

## Quality Checklist (run after every batch)

Before presenting content for review, verify EVERY entry against this list:

- [ ] `primaryKeyword` appears in metaTitle, metaDescription, heroIntro first sentence, and at least one FAQ question
- [ ] `supportingKeywords` are used naturally across features and FAQ answers
- [ ] No specific dollar amounts or price ranges anywhere
- [ ] No warranty promises (no durations, no "guaranteed", no specific coverage)
- [ ] No overpromising on materials or techniques (no "steel-reinforced", no "lifetime", no specs we can't guarantee)
- [ ] No services mentioned that aren't in service-data.ts
- [ ] No "family business", "passion for landscaping", "we treat your yard like our own"
- [ ] No em-dashes
- [ ] No fabricated testimonials (Testimonials component handles this automatically)
- [ ] FAQ answers are broad/vague when discussing cost, timeline, or warranty
- [ ] metaDescription is under 160 characters
- [ ] All 6 features are distinct and service-specific (not generic filler)
- [ ] whyChooseCards descriptions are customized for the specific service

## Approved Reference Example

This is the approved fence installation entry. Match this tone, level of detail, and approach for all other services:

```typescript
{
  slug: "fence-installation-calgary",
  primaryKeyword: "fence installation calgary",
  supportingKeywords: [
    "fence builders calgary",
    "fence contractors calgary",
    "fencing companies calgary",
    "fence company calgary",
    "best fence builders calgary",
    "fencing contractors calgary",
    "chain link fence installation calgary",
    "fence post installation calgary",
    "fence quote calgary",
    "best fence builders in calgary",
    "fence contractors in calgary",
    "fence and landscaping calgary",
  ],
  metaTitle: "Fence Installation Calgary | Taha Landscaping",
  metaDescription:
    "Professional fence installation in Calgary. Wood, chain link, and composite fencing from licensed fence builders with 23+ years of experience. Get a free quote.",
  heroIntro:
    "Professionally installed fencing that adds privacy, security, and curb appeal to your Calgary property. We build wood, chain link, and composite fences engineered for Calgary's harsh winters and chinook winds.",
  whatIncludedHeading: "Complete Fence",
  whatIncludedSubheading: "Installation",
  features: [
    {
      title: "On-Site Consultation & Layout",
      description:
        "We survey your property lines, identify underground utilities, and plan the optimal fence layout before any posts go in the ground.",
    },
    {
      title: "Post Setting & Foundation",
      description:
        "Posts set in concrete footings at proper depth to help prevent heaving and leaning through Calgary's freeze-thaw cycles.",
    },
    {
      title: "Custom Material Selection",
      description:
        "Choose from pressure-treated wood, cedar, composite, chain link, or ornamental iron. We source commercial-grade materials built for Alberta's climate.",
    },
    {
      title: "Gate Construction & Hardware",
      description:
        "Single and double gates built with heavy-duty hinges, self-closing mechanisms, and lockable latches. Driveway gates available in swing or sliding configurations.",
    },
    {
      title: "Permit Handling",
      description:
        "We manage City of Calgary permit applications and ensure your fence meets all municipal setback and height requirements.",
    },
    {
      title: "Site Cleanup & Final Walkthrough",
      description:
        "Every install ends with full debris removal and a walkthrough to confirm the finished product meets your expectations.",
    },
  ],
  whyChooseHeading: "Taha Landscaping",
  whyChooseCards: [
    {
      title: "Licensed & Insured",
      description:
        "Full liability coverage and WCB compliance on every project. Your property is protected from the first post to the last board.",
    },
    {
      title: "23+ Years in Calgary",
      description:
        "Over two decades building fences across Calgary neighbourhoods. We know the soil conditions, bylaws, and weather patterns that affect every install.",
    },
    {
      title: "Same-Day Quotes",
      description:
        "Request a quote in the morning and have a detailed estimate by end of day. No drawn-out sales process, no pressure.",
    },
  ],
  faqs: [
    {
      question: "How much does fence installation cost in Calgary?",
      answer:
        "Fence installation costs vary depending on material, height, terrain, and total linear footage. Every property is different, so we provide a detailed quote after an on-site assessment. Contact us for a free estimate.",
    },
    {
      question: "Do I need a permit to build a fence in Calgary?",
      answer:
        "Fences under 2 metres (6.5 feet) in your backyard typically do not require a permit in Calgary. Front yard fences and anything over 2 metres do require a development permit. We handle all permit applications as part of our service.",
    },
    {
      question: "What is the best fence material for Calgary weather?",
      answer:
        "Pressure-treated wood is the most common choice in Calgary. It handles moisture and temperature swings well when properly sealed. Composite and chain link are also strong options depending on your needs. We help you choose the right material based on your property, budget, and priorities.",
    },
    {
      question: "How long does a fence installation take?",
      answer:
        "Timelines depend on the scope of the project, materials, and site conditions. We provide an estimated schedule as part of your quote so you know what to expect before work begins.",
    },
    {
      question: "Can you remove my old fence before installing the new one?",
      answer:
        "Yes. We handle full tear-down and disposal of existing fences. Old materials are sorted for recycling where possible. Removal is quoted separately based on the length and condition of the existing fence.",
    },
    {
      question: "Do you stand behind your fence installations?",
      answer:
        "We take pride in the quality of our work. If something isn't right with the installation itself, we want to know about it. Warranty coverage is assessed on a case-by-case basis. Normal wear, weathering, and natural deterioration are not covered.",
    },
  ],
}
```

## Testimonials

Use the shared `<Testimonials />` component on every service page. It renders all 3 real reviews. Do NOT fabricate testimonials. Do NOT use a single testimonial.

```typescript
const TESTIMONIALS = [
  {
    quote: "Taha Landscaping was recommended to us by a neighbour, and we're glad to have used Taha. Kal (owner) was quick in responding and always made himself available to discuss our landscaping. The work he did was extremely high quality, quick and priced fairly. We'll be using Taha again next summer as we add more features to our yard.",
    name: "Zach Newman",
  },
  {
    quote: "Khal and Sammy were absolutely terrific. From design to implementation, they were punctual, accommodating, helpful and talented. We have two beautiful gardens to show for their efforts. They literally left no stones unturned. Thank you Khal and Sammy.",
    name: "Patricia Gottlieb",
  },
  {
    quote: "We have had a fence built and it was perfect, on time and great value! And we have had a 750 square foot stone patio that has increased our outdoor living space and we love it! Looks lovely, sloped and drains and we were advised on design and product choice! We love it!",
    name: "Melissa Hartwell",
  },
];
```
