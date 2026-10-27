# QC Tanders RC website

Marketing site for QC Tanders RC, a classic motorcycle riding club in Quezon City. Built with Next.js 16 (App Router) and React 19. Every page is pre-rendered to static HTML at build time.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Editing content

| What | Where |
| --- | --- |
| Club name, contact details, address, social links, SEO keywords | `src/lib/site.ts` |
| Ride calendar (each ride gets its own page, share image and Event schema) | `src/lib/rides.ts` |
| Merch names, descriptions and prices | `src/lib/merch.ts` |
| Photo descriptions (alt text) | `src/lib/captions.ts` |
| Home page sections | `src/app/page.tsx` |
| About, officers, values | `src/app/about/page.tsx` |
| Membership steps, requirements, FAQ | `src/app/join/page.tsx` |
| Black-and-white theme, film grain, name-tape labels | `src/app/globals.css` (tokens at the top) |

The sample content (officer road names, phone number, domain) is placeholder text. Replace it before launch.

## Adding photos and merch

Drop images (`.jpg`, `.png`, `.webp`) into `public/images/`, then rebuild or redeploy. The site sorts them by filename:

- **`merch_1.jpg`, `merch_2.jpg`, …** appear on the Merch page and the home page merch section, in number order. Add each one's name, description and price to `merchInfo` in `src/lib/merch.ts`; without an entry it shows as "Club Merch #N" with "Message for price".
- **Every other photo** (except the logo) appears in the home page gallery. The gallery shows them in black and white (color on hover), features one at random, and reshuffles the order and sizes on every page load.
- Add a one-line description of each new photo to `src/lib/captions.ts`. Search engines read it, and it is what screen readers announce. Without one, the photo gets a generic description from the date in its filename.

The original photos are never changed; the black-and-white look is applied by the browser.

## SEO features

- **Static HTML for every page**, so crawlers see full content without running JavaScript.
- **Per-page metadata** (`title`, `description`, canonical URL, Open Graph, Twitter cards) through the Next.js Metadata API. The shared helper is in `src/lib/metadata.ts`.
- **Generated share images** for Facebook, Messenger, Viber and X: `src/app/opengraph-image.tsx` for the site and one per ride in `src/app/rides/[slug]/opengraph-image.tsx`.
- **Structured data (JSON-LD)** in `src/lib/jsonld.tsx`: `SportsClub` + `WebSite` on every page, `Event` on each ride, `FAQPage` on Join, `Product` listings with prices on Merch, and `BreadcrumbList` on inner pages. This makes rides eligible for Google's event listings.
- **`/sitemap.xml`, `/robots.txt` and `/manifest.webmanifest`**, generated from `src/app/sitemap.ts`, `robots.ts` and `manifest.ts`.
- **Self-hosted fonts** via `next/font` (no layout shift, no third-party requests), semantic HTML, a skip link, and real 404 status codes for unknown URLs.

## Before going live

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain (e.g. `https://www.qctanders.com`). Canonical URLs, the sitemap and structured data all use it.
2. Replace placeholder content: contact details and the Messenger link in `src/lib/site.ts`, and merch prices in `src/lib/merch.ts`.
3. Deploy (Vercel is the simplest option for Next.js; any Node host works).
4. Add the site to [Google Search Console](https://search.google.com/search-console), submit `/sitemap.xml`, and create a **Google Business Profile** for the club. For "motorcycle club Quezon City" searches, the Business Profile matters as much as the website.
5. Validate structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
6. Bump `lastModified` in `src/app/sitemap.ts` when content changes.
