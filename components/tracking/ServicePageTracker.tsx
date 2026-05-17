"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

interface ServicePageTrackerProps {
  service: string;
  category: string;
}

export function ServicePageTracker({ service, category }: ServicePageTrackerProps) {
  useEffect(() => {
    posthog.capture("service_page_viewed", { service, category });
  }, [service, category]);

  return null;
}
