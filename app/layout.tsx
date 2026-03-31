import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "[PLACEHOLDER] — Calgary Landscaping",
  description: "[PLACEHOLDER] Premium landscaping services in Calgary, Alberta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(cormorantGaramond.variable, dmSans.variable, "font-sans", geist.variable)}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
