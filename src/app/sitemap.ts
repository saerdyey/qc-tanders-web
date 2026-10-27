import type { MetadataRoute } from "next";
import { rides } from "@/lib/rides";
import { absoluteUrl } from "@/lib/site";

// Bump this when page content changes; a fixed value keeps the sitemap static.
const lastModified = "2026-10-24";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/rides"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/merch"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/join"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  const ridePages: MetadataRoute.Sitemap = rides.map((ride) => ({
    url: absoluteUrl(`/rides/${ride.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...ridePages];
}
