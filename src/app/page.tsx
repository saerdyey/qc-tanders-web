import Image from "next/image";
import Link from "next/link";
import { JoinBand } from "@/components/JoinBand";
import { MerchCard } from "@/components/MerchCard";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RideCard } from "@/components/RideCard";
import { photos } from "@/lib/images";
import { getMerch } from "@/lib/merch";
import { rides } from "@/lib/rides";
import { site } from "@/lib/site";

const mottos = ["Ride free", "Respect the road", "Colors are earned", "No one rides alone", "Loyalty above all"];

const code = [
  { title: "Brotherhood first", body: "We look out for each other on and off the road. A brother down is everyone's business." },
  { title: "Respect the road", body: "Legal pipes, legal plates, clean riding. We want every town to welcome us back." },
  { title: "Earn your colors", body: "The vest is not for sale. You earn it with time, miles and loyalty to the club." },
  { title: "Leave no one behind", body: "Road captain up front, sweeper at the back. We arrive together or not at all." },
];

export default async function Home() {
  const merch = await getMerch();
  return (
    <>
      <section className="hero">
        <Image
          src={photos.backPatch.src}
          alt={photos.backPatch.alt}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="hero-photo"
        />
        <div className="container hero-content">
          <p className="tape">Quezon City · Est. {site.foundingYear}</p>
          <h1>Brotherhood of the Open Road</h1>
          <p className="lead">
            {site.name} is a classic motorcycle riding club in Quezon City. Leather, chrome and
            midnight runs, with brothers who ride for each other and never leave one behind.
          </p>
          <div className="btn-row">
            <Link href="/rides" className="btn">
              Ride calendar
            </Link>
            <Link href="/join" className="btn btn-ghost">
              Prospect with us
            </Link>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...mottos, ...mottos].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container two-col">
          <figure className="photo-frame">
            <Image
              src={photos.members.src}
              alt={photos.members.alt}
              placeholder="blur"
              sizes="(min-width: 900px) 50vw, 100vw"
            />
            <figcaption>The club · Quezon City</figcaption>
          </figure>
          <div>
            <p className="tape">Who we are</p>
            <h2>Black leather. Name tapes. Family.</h2>
            <p>
              QC Tanders started in Tandang Sora, Quezon City in {site.foundingYear} with a few
              riders, a few old bikes and a habit of riding through the city long after midnight. The rides got longer, the
              crew got bigger, and the vests came next.
            </p>
            <p>
              Today we are a tight brotherhood of riders on classics, cruisers and builds of every
              kind. Every member has a road name, every member has earned their colors, and every
              ride ends with the whole crew around the same table.
            </p>
            <Link href="/about" className="text-link">
              Read the club story →
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="tape">The code</p>
              <h2>What we live by</h2>
            </div>
            <p className="muted">
              We dress the part and ride the part, but we ride clean. These are the rules every
              member swears to.
            </p>
          </div>
          <ol className="code-list">
            {code.map((rule, i) => (
              <li key={rule.title}>
                <span className="code-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{rule.title}</h3>
                <p className="muted">{rule.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="tape">Next up</p>
              <h2>Rides &amp; events</h2>
            </div>
            <Link href="/rides" className="text-link">
              Full calendar →
            </Link>
          </div>
          <div className="ride-list">
            {rides.slice(0, 3).map((ride) => (
              <RideCard key={ride.slug} ride={ride} />
            ))}
          </div>
        </div>
      </section>

      <PhotoGallery />

      {merch.length > 0 && (
        <section className="section section-light">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="tape">Support gear</p>
                <h2>Club merch</h2>
              </div>
              <p className="muted">
                Wear the skull, back the club. Every purchase funds our charity rides. The vest stays
                earned, not sold.
              </p>
            </div>
            <div className="merch-grid">
              {merch.slice(0, 3).map((item) => (
                <MerchCard key={item.slug} item={item} compact />
              ))}
            </div>
            <div className="btn-row">
              <Link href="/merch" className="btn">
                Shop all merch
              </Link>
            </div>
          </div>
        </section>
      )}

      <JoinBand />
    </>
  );
}
