// Descriptions (alt text) for photos in public/images, keyed by filename.
// Search engines read these, so describe what is in the picture.
// Photos without an entry get a generic description based on the date in the filename.
export const captions: Record<string, string> = {
  "qc-tanders-back-patch-rider.jpg":
    "QC Tanders RC member wearing the club back patch while a rider waits on a classic motorcycle at night",
  "qc-tanders-members-leather-vests.jpg": "QC Tanders RC members in black leather vests with club name tapes",
  "qc-tanders-rider-night-street.jpg":
    "QC Tanders rider in a checkered face mask on an ape-hanger classic motorcycle on a Quezon City street at night",
  "qc-tanders-club-night-hangout.jpg": "QC Tanders RC members hanging out after a night ride in Quezon City",
  "qc-tanders-rider-black-helmet.jpg": "QC Tanders rider in a black helmet on a blacked-out cruiser at a gas station",
  "qc-tanders-rc-logo.jpg": "QC Tanders RC logo: skull in an open-face helmet in front of the Tandang Sora flyover, with chain and lightning bolt, est. 2023",
  "photo_2026-06-27_00-59-41.jpg":
    "QC Tanders rider in a checkered face mask and half helmet on a classic motorcycle at night",
  "photo_2026-07-14_00-34-34.jpg": "QC Tanders rider in a full-face helmet on a custom black cruiser in a parking garage",
  "photo_2026-07-14_00-50-08.jpg": "QC Tanders member in sunglasses seated on a blacked-out scrambler in a parking garage",
  "photo_2026-08-28_20-46-12.jpg":
    "QC Tanders members at a night meetup, one wearing the club back patch on a leather jacket",
  "photo_2026-09-01_05-14-02.jpg": "Custom café racer with a red Kawasaki tank parked outside a Quezon City café at night",
  "photo_2026-09-06_16-37-27.jpg": "QC Tanders rider in a leather vest on a black bobber with a red flame tank",
  "photo_2026-09-06_16-44-18.jpg":
    "QC Tanders rider wearing the club back patch on a leather vest in night traffic in Manila",
  "photo_2026-10-03_15-53-15.jpg":
    "Row of QC Tanders members' classic motorcycles and cruisers parked at a night ride meetup",
  "merch_1.jpg": "QC Tanders RC Solid Brotherhood black tee, front chest logo and full back print",
};

const monthYear = new Intl.DateTimeFormat("en-PH", { month: "long", year: "numeric", timeZone: "UTC" });

export function captionFor(file: string) {
  if (captions[file]) return captions[file];
  const date = file.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (date) {
    const d = new Date(Date.UTC(Number(date[1]), Number(date[2]) - 1, Number(date[3])));
    return `QC Tanders RC ride photo, ${monthYear.format(d)}`;
  }
  return "QC Tanders RC riding club photo";
}
