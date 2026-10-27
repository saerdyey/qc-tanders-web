import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/images";
import { faqJsonLd, JsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Join a Motorcycle Club in Quezon City",
  description: `How to join ${site.name}: from hang-around to prospect to patched member. Requirements, the prospect period and FAQs for our Quezon City riding club.`,
  path: "/join",
});

const steps = [
  {
    title: "Hang-around",
    body: (
      <>
        Message us on <a href={site.social.facebook}>Facebook</a> and come to a tambike night from
        the <Link href="/rides">rides &amp; events</Link> page. Meet the crew, ride with the pack, no
        commitment.
      </>
    ),
  },
  {
    title: "Prospect",
    body: "Ask a patched member to sponsor you. As a prospect you ride with the club, help at events and learn how we do things.",
  },
  {
    title: "Vote",
    body: "When your sponsor says you are ready, the patched members vote. It has to be unanimous.",
  },
  {
    title: "Patched",
    body: "You receive your vest, back patch and road name in front of the club. Wear them with respect.",
  },
];

const faqs = [
  {
    q: "What kind of motorcycle do I need?",
    a: "Classics, cruisers, scramblers, café racers and classic-styled builds are all welcome. Any engine size, as long as the bike is registered and road-worthy.",
  },
  {
    q: "How long is the prospect period?",
    a: "It depends on you. Most prospects ride with the club for three to six months before a vote. What counts is showing up and showing respect.",
  },
  {
    q: "Is QC Tanders an outlaw club?",
    a: "No. We love the look and the brotherhood of classic MC culture, but we are a law-abiding riding club. We ride legal, ride clean and work with our community.",
  },
  {
    q: "Are women welcome?",
    a: "Yes. Riders and pillion riders of any gender can hang around, prospect and earn their colors.",
  },
  {
    q: "Can I buy the club vest or patch?",
    a: "No. Colors are earned, never sold. Anyone can buy and wear our support gear from the merch page.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Join", path: "/join" }]}
        eyebrow="Earn your colors"
        title="Ride with the Tanders"
        lead="There is no form to fill in and no fee to buy your way in. You join this club on the road."
        photo={photos.backPatch.src}
      />

      <section className="section">
        <div className="container two-col" style={{ alignItems: "start" }}>
          <div>
            <h2>The path</h2>
            <ol className="steps">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Requirements</h2>
            <ul className="checklist">
              <li>Valid driver&apos;s license with motorcycle restriction code</li>
              <li>Registered, road-worthy motorcycle</li>
              <li>Full riding gear: certified helmet, jacket, gloves, boots</li>
              <li>Respect for the road, the club and each other</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container prose faq">
          <h2>Frequently asked questions</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <JsonLd data={faqJsonLd(faqs)} />
    </>
  );
}
