import type { Metadata } from "next";
import { JoinBand } from "@/components/JoinBand";
import { PageHero } from "@/components/PageHero";
import { RideCard } from "@/components/RideCard";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { getRideSchedule } from "@/lib/rides";

export const metadata: Metadata = pageMetadata({
  title: "Upcoming Rides, Bike Nights & Events",
  description:
    "QC Tanders RC calendar: weekly tambike bike nights, brother club anniversaries, and our club anniversary ride and camping.",
  path: "/rides",
});

export default async function RidesPage() {
  const { upcoming, past } = await getRideSchedule();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Rides", path: "/rides" }]}
        eyebrow="Kickstands up"
        title="Rides & Events"
        lead="Tambike bike nights, brother club events and club rides. Tambike nights are open to every rider: the easiest way to meet the crew."
        photo={photos.nightStreet.src}
      />
      <section className="section">
        <div className="container">
          <h2>Upcoming</h2>
          {upcoming.length > 0 ? (
            <div className="ride-list">
              {upcoming.map((ride) => (
                <RideCard key={ride.slug} ride={ride} />
              ))}
            </div>
          ) : (
            <p className="muted">New rides coming soon. Follow us on Facebook for the next one.</p>
          )}
          {/* Past rides stay in the HTML for search engines, folded away until asked for. */}
          {past.length > 0 && (
            <details className="past-rides">
              <summary className="btn btn-ghost">
                <span className="when-closed">Show past rides ({past.length})</span>
                <span className="when-open">Hide past rides</span>
              </summary>
              <h2>Past rides</h2>
              <div className="ride-list">
                {past.map((ride) => (
                  <RideCard key={ride.slug} ride={ride} past />
                ))}
              </div>
            </details>
          )}
        </div>
      </section>
      <JoinBand />
    </>
  );
}
