import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
};

// Next merges metadata shallowly: a page that sets `openGraph` replaces the
// layout's whole object. Building the full objects here keeps every page complete.
// Explicit images win over a route's opengraph-image file, so routes with their
// own generated card pass its path as `image`.
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  image = "/opengraph-image",
}: PageMeta): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const images = [{ url: image, width: 1200, height: 630, alt: title }];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images,
    },
  };
}
