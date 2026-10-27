import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/images";

export function JoinBand() {
  return (
    <section className="cta-band">
      <Image src={photos.hangout.src} alt="" fill sizes="100vw" className="cta-band-photo" />
      <div className="container">
        <p className="tape">Hang-around · Prospect · Patched</p>
        <h2>Colors are earned</h2>
        <p>
          Ride with us as a guest, prove your loyalty on the road, and earn the right to wear the
          vest. No shortcuts.
        </p>
        <div className="btn-row">
          <Link href="/join" className="btn">
            How to join
          </Link>
          <Link href="/merch" className="btn btn-ghost">
            Support the club
          </Link>
        </div>
      </div>
    </section>
  );
}
