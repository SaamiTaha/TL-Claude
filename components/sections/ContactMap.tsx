"use client";

import { useEffect, useRef } from "react";

const TAHA_LOCATION = {
  lat: 51.08483471857186,
  lng: -114.0519420932541,
  address: "515a 36 Ave NE, Calgary, AB T2E 6S3",
};

export function ContactMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&libraries=marker`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!mapContainer.current) return;

      map.current = new window.google.maps.Map(mapContainer.current, {
        zoom: 14,
        center: TAHA_LOCATION,
        mapTypeControl: false,
        streetViewControl: false,
      });

      new window.google.maps.Marker({
        map: map.current,
        position: TAHA_LOCATION,
        title: "Taha Landscaping",
      });
    };

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
}
