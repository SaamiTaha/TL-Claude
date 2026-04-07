const STEPS = [
  { number: "01", title: "Consultation", description: "We visit your Calgary property to assess the site, discuss your vision, understand your goals, and align on budget. Every project starts with a conversation." },
  { number: "02", title: "Design", description: "Our design team creates a detailed landscape plan with material selections, plant palettes suited to Calgary\u2019s climate, and a clear scope of work." },
  { number: "03", title: "Build", description: "Expert crews execute the approved design using premium materials, proper drainage engineering, and craftsmanship refined over 23 years in Calgary." },
  { number: "04", title: "Completion", description: "We walk you through the finished project, provide care instructions, and deliver your written warranty documentation. Your outdoor space is ready to enjoy." },
];

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Our Process
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          How Calgary&apos;s Best Landscaping <em>Gets Done</em>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-14">
        {STEPS.map((step) => (
          <div key={step.number} className="text-center">
            <p className="text-7xl font-display text-brand-terracotta">{step.number}</p>
            <p className="font-sans font-semibold text-lg text-brand-text mt-4">{step.title}</p>
            <p className="text-brand-muted text-[15px] font-sans mt-2 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
