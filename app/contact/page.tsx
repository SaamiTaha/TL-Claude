import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSectionDark } from "@/components/sections/ContactSectionDark";

export const metadata: Metadata = {
  title: "[PLACEHOLDER] Contact Us — Calgary Landscaping",
  description: "[PLACEHOLDER] Get in touch for a free landscaping quote in Calgary.",
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
