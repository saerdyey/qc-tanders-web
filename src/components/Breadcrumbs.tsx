import Link from "next/link";
import { breadcrumbJsonLd, JsonLd } from "@/lib/jsonld";

type Crumb = { name: string; path: string };

// Visible breadcrumbs plus the matching BreadcrumbList structured data.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {all.map((item, i) =>
          i === all.length - 1 ? (
            <li key={item.path} aria-current="page">
              {item.name}
            </li>
          ) : (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          ),
        )}
      </ol>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </nav>
  );
}
