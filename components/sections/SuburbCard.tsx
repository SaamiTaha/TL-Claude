import Link from "next/link";

interface SuburbCardProps {
  name: string;
  slug: string;
}

export function SuburbCard({ name, slug }: SuburbCardProps) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className="inline-block border border-brand-border rounded-md px-5 py-2 text-sm font-sans text-brand-text hover:bg-brand-surface hover:border-brand-green transition-colors"
    >
      {name}
    </Link>
  );
}
