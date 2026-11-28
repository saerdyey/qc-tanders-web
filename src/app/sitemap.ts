import type { MetadataRoute } from "next";
import { getGalleryPhotos } from "@/lib/media";
import { getMerch } from "@/lib/merch";
import { getRideSchedule } from "@/lib/rides";
import { absoluteUrl, site } from "@/lib/site";

// Bump this when page content changes; a fixed value keeps the sitemap static.
const lastModified = "2026-11-28";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [gallery, merch, { upcoming, past }] = await Promise.all([
    getGalleryPhotos(),
    getMerch(),
    getRideSchedule(),
  ]);

  // Listing images here helps them show up in Google Images.
  const homeImages = [site.logo, ...gallery.map((photo) => photo.src)].map((src) => absoluteUrl(src));
  const merchImages = merch.map((item) => absoluteUrl(item.image.src));

  const pages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1, images: homeImages },
    { url: absoluteUrl("/rides"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/merch"), lastModified, changeFrequency: "monthly", priority: 0.7, images: merchImages },
    { url: absoluteUrl("/join"), lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];

  // Upcoming events matter most; past ones stay listed but rank lower.
  const ridePage = (priority: number) => (ride: (typeof upcoming)[number]) => ({
    url: absoluteUrl(`/rides/${ride.slug}`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority,
    images: [absoluteUrl(`/rides/${ride.slug}/opengraph-image`)],
  });

  return [...pages, ...upcoming.map(ridePage(0.8)), ...past.map(ridePage(0.3))];
}
