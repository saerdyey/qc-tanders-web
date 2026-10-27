import { absoluteUrl, site } from "./site";
import type { MerchItem } from "./merch";
import type { Ride } from "./rides";

type Json = Record<string, unknown>;

// Renders schema.org structured data. "<" is escaped so data can never
// close the script tag early.
export function JsonLd({ data }: { data: Json | Json[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export const organizationId = absoluteUrl("/#organization");

export function organizationJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "SportsClub",
    "@id": organizationId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl("/opengraph-image"),
    foundingDate: site.foundingYear,
    sport: "Motorcycling",
    areaServed: "Metro Manila",
    address: { "@type": "PostalAddress", ...site.address },
    sameAs: Object.values(site.social),
  };
}

export function websiteJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-PH",
    publisher: { "@id": organizationId },
  };
}

export function rideJsonLd(ride: Ride): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: ride.title,
    description: ride.summary,
    startDate: ride.start,
    ...(ride.end && { endDate: ride.end }),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    url: absoluteUrl(`/rides/${ride.slug}`),
    image: absoluteUrl(`/rides/${ride.slug}/opengraph-image`),
    location: {
      "@type": "Place",
      name: ride.venue,
      address: ride.area ?? ride.venue,
    },
    organizer: ride.host
      ? { "@type": "Organization", name: ride.host }
      : { "@id": organizationId, "@type": "Organization", name: site.name, url: site.url },
    isAccessibleForFree: true,
  };
}

export function merchJsonLd(items: MerchItem[], path: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} merch`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `${site.name} ${item.name}`,
        description: item.description,
        image: absoluteUrl(item.image.src),
        url: absoluteUrl(`${path}#${item.slug}`),
        brand: { "@type": "Brand", name: site.name },
        // Google only shows price rich results when there is a real price.
        ...(item.price !== undefined && {
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "PHP",
            availability: "https://schema.org/InStock",
            seller: { "@id": organizationId },
          },
        }),
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
