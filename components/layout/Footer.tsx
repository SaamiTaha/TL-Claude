import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, FEATURED_SERVICE } from "@/lib/service-data";

const COMPANY_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div>
            <Image
              src="/images/logo-white.png"
              alt="Taha Landscaping"
              width={240}
              height={60}
              className="h-20 w-auto"
            />
            <p className="text-white/60 text-[15px] mt-4 leading-relaxed">
              Calgary&apos;s most trusted landscaping company. Premium design, expert installation, and lasting craftsmanship for over 23 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/80 text-[13px] uppercase tracking-widest font-sans font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={FEATURED_SERVICE.href} className="text-white/60 text-[15px] hover:text-white transition-colors">
                  {FEATURED_SERVICE.name}
                </Link>
              </li>
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services#${cat.slug}`} className="text-white/60 text-[15px] hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/80 text-[13px] uppercase tracking-widest font-sans font-semibold mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-[15px] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NAP */}
          <div>
            <h4 className="text-white/80 text-[13px] uppercase tracking-widest font-sans font-semibold mb-5">
              Contact
            </h4>
            <address className="not-italic text-white/60 text-[15px] space-y-2.5">
              <p>515a 36 Ave NE<br />Calgary, AB T2E 6S3</p>
              <p>
                <Link href="tel:4038606470" className="hover:text-white transition-colors">
                  403-860-6470
                </Link>
              </p>
              <p>
                <Link href="mailto:tahalandscaping@hotmail.com" className="hover:text-white transition-colors">
                  tahalandscaping@hotmail.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-[13px]">
            © {new Date().getFullYear()} Taha Landscaping. All rights reserved. Calgary, Alberta.
          </p>
        </div>
      </div>
    </footer>
  );
}
