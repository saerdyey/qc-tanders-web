import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { JsonLd, rideJsonLd } from "@/lib/jsonld";
import { formatRideDate, formatRideLocation, formatRideTime, getRide, rides } from "@/lib/rides";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

const shortDate = new Intl.DateTimeFormat("en-PH", {
  month: "short",
  year: "numeric",
  timeZone: "Asia/Manila",
});

// Pre-render every ride page as static HTML at build time.
export function generateStaticParams() {
  return rides.map((ride) => ({ slug: ride.slug }));
}

export async function generateMetadata({ params }: PageProps<"/rides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const ride = getRide(slug);
  if (!ride) return {};
  const path = `/rides/${ride.slug}`;
  return pageMetadata({
    title: `${ride.title}, ${shortDate.format(new Date(ride.start))}`,
    description: ride.summary,
    path,
    type: "article",
    image: `${path}/opengraph-image`,
  });
}

export default async function RidePage({ params }: PageProps<"/rides/[slug]">) {
  const { slug } = await params;
  const ride = getRide(slug);
  if (!ride) notFound();

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Rides", path: "/rides" },
          { name: ride.title, path: `/rides/${ride.slug}` },
        ]}
        eyebrow={<time dateTime={ride.start}>{formatRideDate(ride)}</time>}
        title={ride.title}
        lead={ride.summary}
      />

      <section className="section">
        <div className="container detail-grid">
          <article className="prose">
            <h2>{ride.kind === "Tambike" ? "About tambike" : "About this event"}</h2>
            {ride.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {ride.kind !== "Tambike" && (
              <>
                <h2>What to bring</h2>
                <ul className="checklist">
                  <li>Certified helmet, riding jacket, gloves and boots</li>
                  <li>Valid driver&apos;s license, OR/CR and a full tank at call time</li>
                  <li>Basic tool kit, tire repair kit and rain gear</li>
                  {ride.tags.includes("Camping") && <li>Your camping gear and overnight essentials</li>}
                </ul>
              </>
            )}
          </article>

          <aside className="fact-panel" aria-label="Ride details">
            <dl>
              <dt>Date</dt>
              <dd>{formatRideDate(ride)}</dd>
              <dt>Time</dt>
              <dd>{formatRideTime(ride)}</dd>
              <dt>Where</dt>
              <dd>{formatRideLocation(ride)}</dd>
              {ride.host && (
                <>
                  <dt>Hosted by</dt>
                  <dd>{ride.host}</dd>
                </>
              )}
              <dt>Who</dt>
              <dd>{ride.who}</dd>
            </dl>
            <a className="btn" href={site.messenger} target="_blank" rel="noopener">
              Ask on Messenger
            </a>
            <p className="muted" style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
              First time? Read <Link href="/join">how hang-arounds work</Link>.
            </p>
          </aside>
        </div>
      </section>

      <JsonLd data={rideJsonLd(ride)} />
    </>
  );
}
