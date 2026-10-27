import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo size={120} />
          <p className="footer-tagline">
            {site.tagline}. Est. {site.foundingYear}. No one rides alone.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-heading">Explore</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-heading">Find us</h2>
          <address>
            {site.address.addressLocality}, {site.address.addressRegion}
            <br />
            <a href={site.messenger} target="_blank" rel="noopener">
              Message us on Messenger
            </a>
          </address>
        </div>
        <div>
          <h2 className="footer-heading">Follow</h2>
          <ul>
            <li>
              <a href={site.social.facebook} rel="me noopener" target="_blank">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          © {site.copyrightYear} {site.legalName}. Ride free. Ride safe. Ride together.
        </p>
      </div>
    </footer>
  );
}
