import { defaultOg, ogSize, renderOgImage } from "@/lib/og";
import { formatRideDate, formatRideLocation, formatRideTime, getRide, rides } from "@/lib/rides";

export const alt = "QC Tanders RC ride";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return rides.map((ride) => ({ slug: ride.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ride = getRide(slug);
  if (!ride) return renderOgImage(defaultOg);
  return renderOgImage({
    eyebrow: formatRideDate(ride),
    title: ride.title,
    footer: `${formatRideLocation(ride)} · ${formatRideTime(ride)}`,
  });
}
