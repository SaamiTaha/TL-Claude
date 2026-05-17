import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";

export const metadata: Metadata = {
  title: "Contact Us — Calgary Landscaping",
  description: "Get in touch for a free landscaping quote in Calgary. Same-day response on all inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main />
      <ContactSectionDark />
    </>
  );
}
