'use client';

import Link from 'next/link';
import posthog from 'posthog-js';

export function CallCTABanner() {
  return (
    <div className="sticky top-0 z-50 bg-brand-green h-10 flex items-center justify-center">
      <Link
        href="tel:4038606470"
        onClick={() => posthog.capture('cta_banner_call_clicked')}
        className="text-white text-xl font-sans font-medium tracking-widest uppercase hover:opacity-90 transition-opacity"
      >
        Call Now For A Quote 403-860-6470
      </Link>
    </div>
  );
}
