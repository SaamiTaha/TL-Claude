"use client";

const TAHA_LOCATION = "515a 36 Ave NE, Calgary, AB T2E 6S3";

export function ContactMap() {
  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(TAHA_LOCATION)}&key=AIzaSyBu-916DdpKAjTmJKoperisIFVgEKLonvM`}
      title="Taha Landscaping Location"
    />
  );
}
