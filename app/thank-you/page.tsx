import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — Taha Landscaping Calgary",
  description: "Thank you for your inquiry. We will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-4">
      <CheckCircle2 className="h-20 w-20 text-brand-green" />
      <h1 className="font-display text-5xl md:text-6xl text-brand-text mt-8 text-center">
        Thank You
      </h1>
      <p className="text-brand-muted font-sans text-lg mt-5 text-center max-w-md">
        We got your request. Expect a call back from our team the same day.
      </p>

      {/* GA4 + PostHog conversion tracking fires here */}

      <div className="flex gap-4 mt-10">
        <Link
          href="/"
          className="border border-brand-border text-brand-text rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-surface transition-colors"
        >
          Return Home
        </Link>
        <Link
          href="/gallery"
          className="bg-brand-green text-white rounded-md px-7 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
        >
          View Our Work
        </Link>
      </div>
    </div>
  );
}
