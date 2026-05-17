import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/service-data";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src="https://placehold.co/400x300/EDE8DF/A09080"
          alt={`${service.name} in Calgary`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-brand-text/0 group-hover:bg-brand-text/10 transition-colors flex items-center justify-center">
          <ArrowRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <p className="font-sans font-medium text-brand-text text-[15px] mt-3 text-center">{service.name}</p>
    </Link>
  );
}
