export type RideKind = "Tambike" | "Club ride" | "Guest event";

export type Ride = {
  slug: string;
  title: string;
  kind: RideKind;
  summary: string;
  description: string[];
  // ISO 8601. Use a full date-time with the Manila offset when the time is set
  // ("2026-10-30T21:00:00+08:00"), or just the date when it isn't yet ("2026-11-06").
  start: string;
  end?: string;
  // Shown after the time, e.g. "onwards".
  timeNote?: string;
  venue: string;
  area?: string;
  // Set when another club hosts the event.
  host?: string;
  who: string;
  tags: string[];
};

// Keep these in date order. Remove events once they have passed.
export const rides: Ride[] = [
  {
    slug: "tambike-tasha-cafe-2026-10-30",
    title: "Tambike @ Tasha Cafe",
    kind: "Tambike",
    summary: "Bike night at Tasha Cafe. Park up, grab a drink and talk bikes with the club from 9 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-10-30T21:00:00+08:00",
    timeNote: "onwards",
    venue: "Tasha Cafe",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-cafe-pedrista-2026-11-06",
    title: "Tambike @ Cafe Pedrista",
    kind: "Tambike",
    summary: "Bike night at Cafe Pedrista. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-11-06T20:00:00+08:00",
    timeNote: "onwards",
    venue: "Cafe Pedrista",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-sip-and-sit-2026-11-13",
    title: "Tambike @ Sip & Sit",
    kind: "Tambike",
    summary: "Bike night at Sip & Sit. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-11-13T20:00:00+08:00",
    timeNote: "onwards",
    venue: "Sip & Sit",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "brmc-san-mateo-anniversary-2026",
    title: "BRMC San Mateo Anniversary",
    kind: "Guest event",
    summary: "QC Tanders rides out to celebrate the anniversary of our friends at BRMC San Mateo.",
    description: [
      "Brotherhood goes beyond our own patch. We are riding out to San Mateo to celebrate BRMC San Mateo's anniversary with them.",
      "Call time and convoy meetup point to follow. Message us if you want to ride out with the club.",
    ],
    start: "2026-11-14",
    venue: "BRMC San Mateo",
    area: "San Mateo, Rizal",
    host: "BRMC San Mateo",
    who: "Riding out with the club",
    tags: ["Brother club", "Convoy"],
  },
  {
    slug: "qc-tanders-anniversary-ride-camping-2026",
    title: "QC Tanders Anniversary Ride & Camping",
    kind: "Club ride",
    summary:
      "Two days, one night: the club's anniversary ride out of the city and a night of camping with the whole family.",
    description: [
      "Once a year the whole club rolls out together to celebrate another year of the brotherhood. We ride out on Saturday, make camp, and spend the night around the fire.",
      "This one is for the family: members, prospects and hang-arounds only. Route, call time and campsite details will be shared with the club.",
    ],
    start: "2026-11-21",
    end: "2026-11-22",
    venue: "Location TBA",
    who: "Members, prospects and hang-arounds",
    tags: ["Overnight", "Camping", "Club only"],
  },
];

export function getRide(slug: string) {
  return rides.find((ride) => ride.slug === slug);
}

export const hasTime = (ride: Ride) => ride.start.includes("T");

const dateFormat = new Intl.DateTimeFormat("en-PH", {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Manila",
});

const timeFormat = new Intl.DateTimeFormat("en-PH", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: "Asia/Manila",
});

// Date-only strings parse as UTC midnight, which is still the same day in Manila.
export function formatRideDate(ride: Ride) {
  const startDay = dateFormat.format(new Date(ride.start));
  const endDay = ride.end ? dateFormat.format(new Date(ride.end)) : startDay;
  return startDay === endDay ? startDay : `${startDay} – ${endDay}`;
}

export function formatRideTime(ride: Ride) {
  if (!hasTime(ride)) return "Time TBA";
  const time = timeFormat.format(new Date(ride.start));
  return ride.timeNote ? `${time} ${ride.timeNote}` : time;
}

export function formatRideLocation(ride: Ride) {
  return ride.area ? `${ride.venue}, ${ride.area}` : ride.venue;
}
