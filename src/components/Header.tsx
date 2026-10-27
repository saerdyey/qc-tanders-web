import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Logo size={48} priority className="brand-logo" />
          <span className="brand-text">QC Tanders</span>
        </Link>
        <nav aria-label="Main" className="main-nav">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/join" className="btn btn-small">
            Ride with us
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
