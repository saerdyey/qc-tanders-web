// Central place for club details. Update these values and every page,
// the sitemap, social cards and structured data pick them up.
export const site = {
  name: "QC Tanders RC",
  legalName: "QC Tanders Riding Club",
  tagline: "Classic Motorcycle Riding Club in Quezon City",
  description:
    "QC Tanders RC is a classic motorcycle riding club and brotherhood from Tandang Sora, Quezon City, Philippines. Night rides, long-distance runs, charity rides and club support gear.",
  // Set NEXT_PUBLIC_SITE_URL in production so canonical URLs and the sitemap are correct.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.qctanders.com",
  locale: "en_PH",
  foundingYear: "2023",
  copyrightYear: "2026",
  address: {
    addressLocality: "Quezon City",
    addressRegion: "Metro Manila",
    addressCountry: "PH",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61556265848057",
  },
  // Opens a Messenger chat with the club's Facebook page.
  messenger: "https://m.me/61556265848057",
  logo: "/images/qc-tanders-rc-logo.jpg",
  keywords: [
    "motorcycle club Quezon City",
    "Tandang Sora riding club",
    "classic motorcycle club Philippines",
    "riding club Metro Manila",
    "motorcycle brotherhood Philippines",
    "MC vest club Quezon City",
    "motorcycle club merch Philippines",
    "QC Tanders",
  ],
} as const;

export const nav = [
  { href: "/rides", label: "Rides" },
  { href: "/about", label: "The Club" },
  { href: "/merch", label: "Merch" },
  { href: "/join", label: "Join" },
  { href: "/contact", label: "Contact" },
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
