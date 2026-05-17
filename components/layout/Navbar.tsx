"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MotionProvider, m, AnimatePresence, motionFeatures } from "@/lib/motion";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <MotionProvider features={motionFeatures}>
      <header className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Taha Landscaping"
              width={240}
              height={60}
              style={{ height: 72, width: "auto" }}
              priority
            />
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
              className="lg:hidden text-brand-text relative z-50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-brand-bg"
          >
            {/* Spacer for the navbar height */}
            <div className="h-20" />

            <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)] gap-7 px-6">
              {NAV_LINKS.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="uppercase tracking-widest text-lg font-sans text-brand-text hover:text-brand-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}

              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.05 + NAV_LINKS.length * 0.05 }}
                className="h-px w-16 bg-brand-border mt-2"
              />

              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.1 + NAV_LINKS.length * 0.05 }}
              >
                <Link
                  href="tel:4038606470"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-brand-text text-lg font-sans"
                >
                  <Phone className="h-5 w-5" />
                  403-860-6470
                </Link>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.15 + NAV_LINKS.length * 0.05 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-brand-green text-white rounded-md px-8 py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors"
                >
                  Get a Quote
                </Link>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </MotionProvider>
  );
}
