import type { Metadata } from "next";
import Image from "next/image";
import { JoinBand } from "@/components/JoinBand";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
import { photos } from "@/lib/images";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "The Club: Story, Code & Officers",
  description: `The story, code and officers of ${site.name}, a classic motorcycle riding club and brotherhood founded in Tandang Sora, Quezon City in ${site.foundingYear}.`,
  path: "/about",
});

const values = [
  { title: "Brotherhood", body: "Members show up for each other: breakdowns, birthdays, hospital visits and moving days." },
  { title: "Respect the road", body: "We follow traffic laws, keep exhausts legal and treat every town like we want to be welcomed back." },
  { title: "Keep them running", body: "We share tools, parts and know-how so every bike in the pack makes it to the next ride." },
  { title: "Give back", body: "Our charity runs support children, schools and communities across Rizal and Metro Manila." },
];

const officers = [
  { role: "President", name: "Yorms" },
  { role: "Vice President", name: "Andres" },
  { role: "Road Captain", name: "Black" },
  { role: "Sergeant at Arms", name: "Andres" },
  { role: "Secretary", name: "El" },
  { role: "Treasurer", name: "Iya" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "The Club", path: "/about" }]}
        eyebrow={`Est. ${site.foundingYear}`}
        title="The Club"
        lead="A Quezon City riding club built on leather, loyalty and late-night miles."
        photo={photos.members.src}
      />

      <section className="section">
        <div className="container two-col">
          <div className="prose">
            <h2>Our story</h2>
            <p>
              In {site.foundingYear}, a handful of riders started meeting after dark in Tandang Sora,
              Quezon City. No sponsors, no clubhouse, just bikes, coffee and roads that empty out
              after midnight.
            </p>
            <p>
              The name &ldquo;Tanders&rdquo; carries two meanings. First and foremost, it comes from
              home: the club was founded in Tandang Sora, and the name carries it wherever we ride.
              It is also Filipino slang for the old-timers, and we ride old-school: classic bikes,
              open-face helmets, black leather. The name stuck, the crew grew, and the skull patch
              was born.
            </p>
            <p>
              Today every member wears the vest with their road name stitched on the front. It is a
              reminder that the club comes first, and that you never ride alone.
            </p>
          </div>
          <figure className="photo-frame">
            <Image
              src={photos.nightStreet.src}
              alt={photos.nightStreet.alt}
              placeholder="blur"
              sizes="(min-width: 900px) 50vw, 100vw"
            />
            <figcaption>Midnight run · Quezon City</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-light">
        <div className="container two-col">
          <div>
            <p className="tape">The patch</p>
            <h2>Skull, chain, bolt and bridge</h2>
            <p>
              The skull in the open-face helmet is the rider who keeps going. The chain is the
              brotherhood that holds us together. The bolt is the road, and the energy we bring to
              it. Behind the skull stands the Tandang Sora flyover, the bridge over the place where
              the club was born. The patch is worn only by patched members.
            </p>
            <div className="card-grid" style={{ marginTop: "2rem" }}>
              {values.map((v) => (
                <div className="card" key={v.title}>
                  <h3>{v.title}</h3>
                  <p className="muted">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
          <Logo size={520} className="about-logo" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="tape">Officers</p>
          <h2>Who runs the pack</h2>
          <div className="officers">
            {officers.map(({ role, name }) => (
              <div className="officer" key={role}>
                <p className="tape tape-small">{role}</p>
                <p className="officer-name">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinBand />
    </>
  );
}
