import type { Metadata } from "next";
import { JoinBand } from "@/components/JoinBand";
import { PageHero } from "@/components/PageHero";
import { RideCard } from "@/components/RideCard";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { rides } from "@/lib/rides";

export const metadata: Metadata = pageMetadata({
  title: "Upcoming Rides, Bike Nights & Events",
  description:
    "QC Tanders RC calendar: weekly tambike bike nights, brother club anniversaries, and our club anniversary ride and camping.",
  path: "/rides",
});

export default function RidesPage() {
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
        <div className="container ride-list">
          {rides.map((ride) => (
            <RideCard key={ride.slug} ride={ride} />
          ))}
        </div>
      </section>
      <JoinBand />
    </>
  );
}
