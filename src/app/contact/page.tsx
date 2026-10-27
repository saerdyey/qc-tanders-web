import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    `Get in touch with ${site.name} for membership, ride invitations, sponsorships and collaborations. Based in Quezon City, Metro Manila.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Reach the club"
        title="Contact"
        lead="Questions about joining, an invitation to your event, a merch order or a sponsorship idea? Hit us up."
        photo={photos.hangout.src}
      />

      <section className="section">
        <div className="container two-col">
          <ul className="contact-list">
            <li>
              <strong>Facebook</strong>
              <a href={site.social.facebook} target="_blank" rel="noopener">
                QC Tanders RC on Facebook
              </a>
            </li>
            <li>
              <strong>Messenger</strong>
              <a href={site.messenger} target="_blank" rel="noopener">
                Message the club
              </a>
            </li>
          </ul>
          <div>
            <h2>Where to find us</h2>
            <p>
              Come say hi at a tambike night. Look for the row of black bikes and black vests.
            </p>
            <p>
              <Link className="btn" href="/rides">
                See rides &amp; events
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
