import { cacheLife } from "next/cache";

export type RideKind = "Tambike" | "Club ride" | "Club event" | "Guest event";

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
  // Google Maps link for the venue.
  mapUrl?: string;
  // Set when another club hosts the event.
  host?: string;
  who: string;
  tags: string[];
};

// Keep these in date order. Past events move to the "Past rides" list on their own.
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
  {
    slug: "tambike-tinta-at-kape-2026-11-27",
    title: "Tambike @ Tinta At Kape",
    kind: "Tambike",
    summary: "Bike night at Tinta At Kape. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-11-27T20:00:00+08:00",
    timeNote: "onwards",
    venue: "Tinta At Kape",
    mapUrl: "https://maps.app.goo.gl/eUjekZTthSQ3zuV77",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-mood-cafe-2026-12-04",
    title: "Tambike @ Mood Cafe",
    kind: "Tambike",
    summary: "Bike night at Mood Cafe. Bring your bike, meet the crew and hang out from 8 to 11 PM.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-12-04T20:00:00+08:00",
    end: "2026-12-04T23:00:00+08:00",
    venue: "Mood Cafe",
    mapUrl: "https://share.google/pletAM4gHrz9sH01w",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-cafe-pedrista-2026-12-11",
    title: "Tambike @ Cafe Pedrista",
    kind: "Tambike",
    summary: "Bike night at Cafe Pedrista. Bring your bike, meet the crew and hang out from 8 to 11 PM.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2026-12-11T20:00:00+08:00",
    end: "2026-12-11T23:00:00+08:00",
    venue: "Cafe Pedrista",
    mapUrl: "https://maps.app.goo.gl/dpuywHnjNzcsRZ2W7",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "year-end-barbeque-gathering-2026",
    title: "Year-End Barbeque Gathering",
    kind: "Club event",
    summary: "The club's year-end get-together: food on the grill, the whole crew and a toast to the year on the road.",
    description: [
      "We close out the riding year together with a barbeque. Good food, good company and the whole family in one place.",
      "Venue and time to be announced. Follow us on Facebook or message us for updates.",
    ],
    start: "2026-12-20",
    venue: "Location TBA",
    who: "To be announced",
    tags: ["Year-end", "Barbeque"],
  },
  {
    slug: "tambike-the-hungry-bowl-and-cafe-2027-01-08",
    title: "Tambike @ The Hungry Bowl and Cafe",
    kind: "Tambike",
    summary: "Bike night at The Hungry Bowl and Cafe. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2027-01-08T20:00:00+08:00",
    timeNote: "onwards",
    venue: "The Hungry Bowl and Cafe",
    mapUrl: "https://maps.app.goo.gl/QRZNgki7Q6YSbF787",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-sip-and-sit-2027-01-15",
    title: "Tambike @ Sip & Sit",
    kind: "Tambike",
    summary: "Bike night at Sip & Sit. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2027-01-15T20:00:00+08:00",
    timeNote: "onwards",
    venue: "Sip & Sit",
    mapUrl: "https://maps.app.goo.gl/kuMbGb4cTcmrj8eB8",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-pinstripes-cycles-coffee-shack-2027-01-22",
    title: "Tambike @ Pinstripes Cycles & Coffee Shack",
    kind: "Tambike",
    summary: "Bike night at Pinstripes Cycles & Coffee Shack. Bring your bike, meet the crew and hang out from 8 to 11 PM.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2027-01-22T20:00:00+08:00",
    end: "2027-01-22T23:00:00+08:00",
    venue: "Pinstripes Cycles & Coffee Shack – Dark Horse Manila",
    mapUrl: "https://maps.app.goo.gl/8fp2uxJaDf4F4dAE8",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
  {
    slug: "tambike-tasha-cafe-2027-01-29",
    title: "Tambike @ Tasha Café",
    kind: "Tambike",
    summary: "Bike night at Tasha Café. Bring your bike, meet the crew and hang out from 8 PM onwards.",
    description: [
      "Tambike is our bike night: tambay plus bikes. No route and no agenda, just the crew, the bikes lined up out front and good conversation until late.",
      "Riders and friends are welcome. If you are thinking about hanging around with the club, this is the easiest way to meet everyone.",
    ],
    start: "2027-01-29T20:00:00+08:00",
    timeNote: "onwards",
    venue: "Tasha Café",
    mapUrl: "https://maps.app.goo.gl/CZhVAV946XidsPABA",
    who: "Open to all riders and friends",
    tags: ["Bike night", "Open to all"],
  },
];

export function getRide(slug: string) {
  return rides.find((ride) => ride.slug === slug);
}

// The current time, refreshed hourly, so pages stay pre-built but re-sort as events pass.
async function currentTime() {
  "use cache";
  cacheLife("hours");
  return Date.now();
}

// An event counts as past once its last day is over in Manila.
function isPast(ride: Ride, now: number) {
  const lastDay = (ride.end ?? ride.start).slice(0, 10);
  return now > new Date(`${lastDay}T23:59:59+08:00`).getTime();
}

export async function getRideSchedule() {
  const now = await currentTime();
  return {
    upcoming: rides.filter((ride) => !isPast(ride, now)),
    // Most recent first.
    past: rides.filter((ride) => isPast(ride, now)).reverse(),
  };
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
  // Same-day end time, e.g. "8:00 PM – 11:00 PM".
  if (ride.end?.includes("T") && ride.end.slice(0, 10) === ride.start.slice(0, 10)) {
    return `${time} – ${timeFormat.format(new Date(ride.end))}`;
  }
  return ride.timeNote ? `${time} ${ride.timeNote}` : time;
}

export function formatRideLocation(ride: Ride) {
  return ride.area ? `${ride.venue}, ${ride.area}` : ride.venue;
}
