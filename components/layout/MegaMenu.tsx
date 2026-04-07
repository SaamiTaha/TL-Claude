"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { CATEGORIES, FEATURED_SERVICE } from "@/lib/service-data";

interface MegaMenuProps {
  onClose: () => void;
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div
      className="bg-brand-surface shadow-xl rounded-b-2xl p-10 w-[920px]"
      onMouseLeave={onClose}
    >
      {/* Featured item */}
      <Link
        href={FEATURED_SERVICE.href}
        onClick={onClose}
        className="flex items-start gap-4 pb-6 mb-6 border-b border-brand-border border-l-4 border-l-brand-terracotta pl-5"
      >
        <Star className="h-5 w-5 text-brand-terracotta fill-brand-terracotta flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-sans font-semibold text-brand-text text-[15px]">
            {FEATURED_SERVICE.name}
          </span>
          <p className="text-brand-muted text-[13px] mt-1">{FEATURED_SERVICE.description}</p>
        </div>
      </Link>

      {/* Category columns */}
      <div className="grid grid-cols-4 gap-8">
        {CATEGORIES.map((category) => (
          <div key={category.slug}>
            <Link
              href={`/services${category.anchor}`}
              onClick={onClose}
              className="font-sans font-semibold text-brand-text text-[13px] uppercase tracking-widest hover:text-brand-green transition-colors"
            >
              {category.name}
            </Link>
            <ul className="mt-3 space-y-2.5">
              {category.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="text-brand-muted text-[14px] hover:text-brand-text transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
