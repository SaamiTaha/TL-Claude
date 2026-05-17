"use client";

import { useEffect, useRef } from "react";

const CALGARY_CENTER = {
  lat: 51.0447,
  lng: -114.0719,
};

const SERVICE_RADIUS_KM = 50;

export function ServiceAreaMap() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Dynamically import Leaflet
    Promise.all([
      import("leaflet"),
      import("leaflet/dist/leaflet.css"),
    ]).then(([L]) => {
      if (!mapContainer.current) return;

      // Clear previous map if it exists
      mapContainer.current.innerHTML = "";

      const map = L.map(mapContainer.current).setView(
        [CALGARY_CENTER.lat, CALGARY_CENTER.lng],
        9
      );

      // Add OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Draw 50km radius circle
      L.circle([CALGARY_CENTER.lat, CALGARY_CENTER.lng], {
        radius: SERVICE_RADIUS_KM * 1000, // Convert km to meters
        color: "#16A34A",
        fillColor: "#16A34A",
        fillOpacity: 0.15,
        weight: 2,
      }).addTo(map);

      // Add center marker
      L.marker([CALGARY_CENTER.lat, CALGARY_CENTER.lng])
        .bindPopup("<b>Service Center</b><br>Calgary, Alberta")
        .addTo(map);
    });
  }, []);

  return <div ref={mapContainer} className="w-full h-full" />;
}
