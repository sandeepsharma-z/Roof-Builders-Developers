"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["Home", "/"], ["About", "/about"], ["Properties", "/properties"],
  ["Gallery", "/gallery"], ["Blogs", "/blogs"], ["Become a Partner", "/become-a-partner"], ["Contact", "/contact"],
];

function Arrow() {
  return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span>;
}

export default function SiteHeader({ active }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<"about" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const update = () => {
      const current = window.scrollY;
      setScrolled(current > 70);
      setHidden(current > 150 && current > lastScrollY);
      lastScrollY = current;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  return (
    <header className={`header shell ${scrolled ? "scrolled" : ""} ${hidden && !menuOpen ? "hidden" : ""} ${menuOpen ? "menuOpen" : ""}`}>
      <Link className="brand" href="/" aria-label="Roof Builders & Developers home"><Image src="/roof-logo-white.png" alt="Roof Builders & Developers" width={250} height={100} priority /></Link>
      <button className={`menuButton ${menuOpen ? "open" : ""}`} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => { setMenuOpen(!menuOpen); if (menuOpen) setOpenSubmenu(null); }}><span /><span /><span /></button>
      <nav className={menuOpen ? "nav open" : "nav"}>{navItems.map(([label, href]) => {
        if (label === "About") return <div className={`navGroup ${openSubmenu === "about" ? "submenuOpen" : ""}`} key={label}><Link className={active === "About Us" || active === "Why ROOF" || active === "Director's Desk" ? "activeNav" : ""} href={href} onClick={() => { setMenuOpen(false); setOpenSubmenu(null); }}>{label}</Link><button className="navSubmenuToggle" type="button" aria-label="Toggle About menu" aria-expanded={openSubmenu === "about"} onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}><span className="navChevron"><svg viewBox="0 0 12 8" aria-hidden="true"><path d="m1 1.25 5 5 5-5" /></svg></span></button><div className="navDropdown"><Link className={active === "About Us" ? "activeSubNav" : ""} href="/about" onClick={() => { setMenuOpen(false); setOpenSubmenu(null); }}>About Us</Link><Link className={active === "Why ROOF" ? "activeSubNav" : ""} href="/why-roof" onClick={() => { setMenuOpen(false); setOpenSubmenu(null); }}>Why ROOF</Link><Link className={active === "Director's Desk" ? "activeSubNav" : ""} href="/directors-desk" onClick={() => { setMenuOpen(false); setOpenSubmenu(null); }}>Director&apos;s Desk</Link></div></div>;
        return <Link className={active === label ? "activeNav" : ""} href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</Link>;
      })}</nav>
      <div className="headerActions">
        <a className="phone" href="tel:+919876543210"><span className="roundIcon"><svg viewBox="0 0 24 24"><path d="M5.5 3.5 9 3l2 5-2.3 1.5a14 14 0 0 0 5.8 5.8L16 13l5 2-.5 3.5c-.2 1.4-1.4 2.5-2.9 2.5C9.5 21 3 14.5 3 6.4c0-1.5 1.1-2.7 2.5-2.9Z" /></svg></span>+91 98765 43210</a>
        <Link className="goldButton" href="/contact"><span>Book a Consultation</span><Arrow /></Link>
      </div>
    </header>
  );
}
