"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/machines", label: "Machines" },
  { href: "/micro-markets", label: "Micro Markets" },
  { href: "/about", label: "About" },
];

const mobileOnlyLinks = [
  { href: "/healthy-vending", label: "Healthy Vending" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  // close the mobile menu whenever the route changes
  useEffect(() => { setOpen(false); }, [path]);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="EmJ Vending home">
          <Image className="brand-mark" src="/emj-mark.png" alt="EmJ" width={662} height={408} priority />
          <span className="brand-text">
            <span className="brand-word">VENDING</span>
            <span className="brand-tagline">Snacks. Drinks. Satisfaction.</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={path === l.href ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <a href="tel:+19138509092" className="nav-phone">Call or text (913) 850-9092</a>
          <Link href="/contact" className="btn btn-orange" style={{ padding: "10px 20px", fontSize: 15 }}>
            Request a Machine
          </Link>
        </nav>

        {/* mobile hamburger */}
        <button
          className={`burger${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* mobile drawer */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={path === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {mobileOnlyLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={path === l.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:+19138509092" className="mobile-phone">Call or text (913) 850-9092</a>
          <Link href="/contact" className="btn btn-orange" onClick={() => setOpen(false)}>
            Request a Free Machine
          </Link>
        </nav>
      </div>
    </header>
  );
}
