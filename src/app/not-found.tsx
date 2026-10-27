import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "60vh" }}>
      <div className="container">
        <p className="tape">404</p>
        <h1>Wrong Turn</h1>
        <p className="lead">This road leads nowhere. Turn around and find the pack.</p>
        <div className="btn-row">
          <Link href="/" className="btn">
            Back to home
          </Link>
          <Link href="/rides" className="btn btn-ghost">
            See rides
          </Link>
        </div>
      </div>
    </section>
  );
}
