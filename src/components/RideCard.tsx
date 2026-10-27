import Link from "next/link";
import { formatRideDate, formatRideLocation, formatRideTime, type Ride } from "@/lib/rides";

export function RideCard({ ride }: { ride: Ride }) {
  return (
    <article className="ride-card">
      <p className="ride-date">
        <time dateTime={ride.start}>{formatRideDate(ride)}</time>
        <span> · {ride.kind}</span>
      </p>
      <h3>
        <Link href={`/rides/${ride.slug}`}>{ride.title}</Link>
      </h3>
      <p>{ride.summary}</p>
      <dl className="ride-facts">
        <div>
          <dt>Time</dt>
          <dd>{formatRideTime(ride)}</dd>
        </div>
        <div>
          <dt>Where</dt>
          <dd>{formatRideLocation(ride)}</dd>
        </div>
        <div>
          <dt>Who</dt>
          <dd>{ride.who}</dd>
        </div>
      </dl>
      <ul className="tags" aria-label="Tags">
        {ride.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
