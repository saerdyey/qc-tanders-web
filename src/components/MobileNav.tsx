"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {/* Links stay in the HTML when closed so crawlers still see them. */}
      <ul id="mobile-menu" className="mobile-menu" hidden={!open}>
        {nav.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
