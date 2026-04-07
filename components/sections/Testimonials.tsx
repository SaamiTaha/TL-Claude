import { Star } from "lucide-react";

interface TestimonialsProps {
  count?: number;
}

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

export function Testimonials({ count = 3 }: TestimonialsProps) {
  const items = TESTIMONIALS.slice(0, count);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
          Client Reviews
        </p>
        <h2 className="headline-mixed text-5xl md:text-6xl text-brand-text mt-4">
          What Calgary Homeowners <em>Say</em>
        </h2>
      </div>

      {/* Google Reviews widget placeholder — replace with Elfsight or GBP embed */}

      <div className={`grid grid-cols-1 ${count >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-8 mt-14`}>
        {items.map((testimonial) => (
          <div key={testimonial.name} className="bg-brand-surface rounded-xl p-8 border border-brand-border">
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-brand-terracotta fill-brand-terracotta"
                />
              ))}
            </div>
            {/* Quote */}
            <p className="font-sans text-brand-text text-[15px] mt-5 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            {/* Name */}
            <p className="uppercase tracking-widest text-[13px] text-brand-muted font-sans mt-5">
              — {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
