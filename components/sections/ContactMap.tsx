"use client";

export function ContactMap() {
  return (
    <div className="w-full h-full bg-brand-surface flex items-center justify-center">
      <div className="text-center">
        <p className="text-brand-text font-sans text-lg font-semibold">Taha Landscaping</p>
        <p className="text-brand-muted font-sans text-base mt-2">515a 36 Ave NE</p>
        <p className="text-brand-muted font-sans text-base">Calgary, AB T2E 6S3</p>
        <a
          href="https://www.google.com/maps/search/515a+36+Ave+NE+Calgary+AB+T2E+6S3"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-brand-green hover:text-brand-green/80 font-sans text-sm underline"
        >
          View on Google Maps →
        </a>
      </div>
    </div>
  );
}
