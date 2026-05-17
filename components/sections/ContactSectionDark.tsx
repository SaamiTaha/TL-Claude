import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "./ContactForm";

interface ContactSectionDarkProps {
  flush?: boolean;
}

export function ContactSectionDark({ flush }: ContactSectionDarkProps) {
  return (
    <section className={`bg-brand-dark ${flush ? "" : "rounded-t-3xl"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-widest text-[13px] text-brand-terracotta font-sans">
            Start Your Project
          </p>
          <h2 className="headline-mixed text-5xl md:text-6xl text-white mt-4">
            Start Your Calgary Landscaping <em>Project</em>
          </h2>
          <p className="text-white/60 font-sans text-base mt-5">
            Calgary&apos;s short landscaping season fills up fast. Secure your spot by requesting a consultation today.
          </p>
        </div>

        {/* Two-column: Contact info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Left: Contact details */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <Link
                href="tel:4038606470"
                className="flex items-center gap-4 bg-white/5 rounded-md px-6 py-5 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-brand-terracotta" />
                </div>
                <div>
                  <p className="text-white/40 font-sans text-xs uppercase tracking-wider">Call us</p>
                  <p className="text-white font-sans text-lg group-hover:text-brand-terracotta transition-colors">403-860-6470</p>
                </div>
              </Link>
              <Link
                href="mailto:tahalandscaping@hotmail.com"
                className="flex items-center gap-4 bg-white/5 rounded-md px-6 py-5 border border-white/10 hover:border-white/20 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-brand-terracotta" />
                </div>
                <div>
                  <p className="text-white/40 font-sans text-xs uppercase tracking-wider">Email us</p>
                  <p className="text-white font-sans text-lg group-hover:text-brand-terracotta transition-colors">tahalandscaping@hotmail.com</p>
                </div>
              </Link>
              <div className="flex items-center gap-4 bg-white/5 rounded-md px-6 py-5 border border-white/10">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-brand-terracotta" />
                </div>
                <div>
                  <p className="text-white/40 font-sans text-xs uppercase tracking-wider">Location</p>
                  <p className="text-white font-sans text-lg">Calgary, Alberta</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 rounded-md px-6 py-5 border border-white/10">
                <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-brand-terracotta" />
                </div>
                <div>
                  <p className="text-white/40 font-sans text-xs uppercase tracking-wider">Hours</p>
                  <p className="text-white font-sans text-lg">Mon–Sat, 7:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Single form */}
          <div>
            <ContactForm variant="dark" />
          </div>
        </div>

        {/* Google Maps embed — replace src with Maps Embed API URL using your API key */}
        {/* Example: https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Taha+Landscaping,Calgary,AB */}
        <div className="mt-16 rounded-xl overflow-hidden border border-white/10 aspect-[21/9]">
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-brand-terracotta mx-auto" />
              <p className="text-white/40 font-sans text-sm mt-3">Google Maps Embed</p>
              <p className="text-white/25 font-sans text-xs mt-1">Add NEXT_PUBLIC_GOOGLE_MAPS_KEY to .env</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer lives inside the dark section */}
      <Footer />
    </section>
  );
}
