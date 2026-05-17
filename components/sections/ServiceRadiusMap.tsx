"use client";

import { useEffect, useRef } from "react";

const TAHA_LOCATION = {
  lat: 51.08483471857186,
  lng: -114.0519420932541,
  address: "515a 36 Ave NE, Calgary, AB T2E 6S3",
};

const SERVICE_RADIUS_KM = 50;

export function ServiceRadiusMap() {
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
        zoom: 10,
        center: TAHA_LOCATION,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [
          {
            featureType: "all",
            stylers: [{ saturation: -0.2 }],
          },
        ],
      });

      // Draw service radius circle
      new window.google.maps.Circle({
        map: map.current,
        center: TAHA_LOCATION,
        radius: SERVICE_RADIUS_KM * 1000, // Convert km to meters
        fillColor: "#16A34A",
        fillOpacity: 0.15,
        strokeColor: "#16A34A",
        strokeOpacity: 0.8,
        strokeWeight: 2,
      });

      // Add center marker
      new window.google.maps.Marker({
        map: map.current,
        position: TAHA_LOCATION,
        title: "Taha Landscaping - Service Center",
      });
    };

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full rounded-lg" />;
}
