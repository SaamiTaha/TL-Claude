"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { MegaMenu } from "./MegaMenu";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-bold tracking-tight text-brand-text text-xl">TAHA</span>
          <span className="font-light tracking-widest text-brand-text text-xl">LANDSCAPING</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.hasMega && setMegaOpen(true)}
              onMouseLeave={() => link.hasMega && setMegaOpen(false)}
            >
              <Link
                href={link.href}
                className="uppercase tracking-widest text-[13px] font-sans text-brand-text hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
              {link.hasMega && megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <MegaMenu onClose={() => setMegaOpen(false)} />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <Link
            href="tel:4038606470"
            className="flex items-center gap-2 text-brand-text text-sm hover:text-brand-green transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">403-860-6470</span>
          </Link>
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-brand-green text-white rounded-md px-6 py-3 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-brand-text"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-brand-bg z-40 flex flex-col items-center justify-center gap-8">
          <Link
            href="tel:4038606470"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 text-brand-text text-lg font-sans"
          >
            <Phone className="h-5 w-5" />
            403-860-6470
          </Link>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="uppercase tracking-widest text-base font-sans text-brand-text hover:text-brand-green transition-colors"
              style={{ animationDelay: `${i * 75}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="bg-brand-green text-white rounded-md px-8 py-3.5 text-sm uppercase tracking-wider font-sans mt-4"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
