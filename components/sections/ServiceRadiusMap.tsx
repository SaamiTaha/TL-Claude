"use client";

export function ServiceRadiusMap() {
  return (
    <div className="w-full h-full bg-brand-surface flex items-center justify-center">
      <div className="text-center">
        <p className="text-brand-text font-sans text-lg font-semibold">50 km Service Radius</p>
        <p className="text-brand-muted font-sans text-base mt-4 max-w-sm">
          We service all areas within 50 kilometres of our location in NE Calgary, including Calgary proper and surrounding communities like Airdrie, Okotoks, Cochrane, and Chestermere.
        </p>
        <a
          href="https://www.google.com/maps/search/515a+36+Ave+NE+Calgary+AB+T2E+6S3"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-brand-green hover:text-brand-green/80 font-sans text-sm underline"
        >
          View Service Area →
        </a>
      </div>
    </div>
  );
}
