import type { Metadata } from "next";
import { MerchCard } from "@/components/MerchCard";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/images";
import { JsonLd, merchJsonLd } from "@/lib/jsonld";
import { getMerch } from "@/lib/merch";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Club Merch & Support Gear",
  description: `Official ${site.name} support gear: club tees and more, featuring the skull, chain and bolt. Order on Messenger; ships nationwide from Quezon City.`,
  path: "/merch",
});

export default async function MerchPage() {
  const merch = await getMerch();
  return (
    <>
      <PageHero
        crumbs={[{ name: "Merch", path: "/merch" }]}
        eyebrow="Support gear"
        title="Club Merch"
        lead="Wear the skull, back the club. Every piece funds our charity rides and club runs. Order through Messenger; we ship nationwide or you can pick up at the next ride."
        photo={photos.blackHelmet.src}
      />

      <section className="section section-light">
        <div className="container merch-grid">
          {merch.map((item) => (
            <MerchCard key={item.slug} item={item} />
          ))}
          {merch.length === 0 && <p>New drops coming soon. Follow us on Facebook for updates.</p>}
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="tape">Know the difference</p>
            <h2>Support gear is not colors</h2>
            <p>
              Anyone can wear our support gear. The club&apos;s colors, the full back patch on a
              leather vest with a member&apos;s name tape, are never sold. They are handed to
              members who have earned them.
            </p>
          </div>
          <ul className="checklist">
            <li>Order by sending the item name and size on Messenger</li>
            <li>Pay via GCash, Maya or bank transfer</li>
            <li>Nationwide shipping, or free pickup at any club ride</li>
            <li>Bulk orders for chapters and friendly clubs welcome</li>
          </ul>
        </div>
      </section>

      <JsonLd data={merchJsonLd(merch, "/merch")} />
    </>
  );
}
