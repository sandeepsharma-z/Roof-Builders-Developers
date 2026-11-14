"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageEnhancements from "../PageEnhancements";
import styles from "./plots.module.css";

type Plot = {
  name: string;
  location: string;
  area: string;
  price: string;
  priceLakh: number;
  image: string;
  href: string;
  tag: string;
};

const plots: Plot[] = [
  { name: "South City Greens", location: "Jhajjar", area: "Sector 36", price: "₹51.75 Lakh*", priceLakh: 51.75, image: "/roof-assets-infra-featured-properties/south-city-greens-sector-36-jhajjar/featured.webp", href: "/projects/south-city-greens", tag: "Featured" },
  { name: "Dream Valley", location: "Jhajjar", area: "Sector 7", price: "₹62.51 Lakh*", priceLakh: 62.51, image: "/projects/dream-valley/dream-valley-banner-1.png", href: "/projects/dream-valley", tag: "Premium Plots" },
  { name: "Shree Hari Enclave", location: "Haridwar", area: "Bahadrabad Bypass", price: "₹55 Lakh*", priceLakh: 55, image: "/projects/shree-hari-enclave/banner-image-1.png", href: "/projects/shree-hari-enclave", tag: "Gated Township" },
  { name: "Saras City Phase 2", location: "Jhajjar", area: "Sector 21", price: "₹75 Lakh*", priceLakh: 75, image: "/roof-assets-infra-featured-properties/saras-city-phase-2/featured.jpg", href: "https://roofandassetsinfra.com/properties/saras-city-phase-2/", tag: "DDJAY Plots" },
  { name: "Palm Drive 2", location: "Pataudi", area: "Sector 3", price: "₹85 Lakh*", priceLakh: 85, image: "/roof-assets-infra-featured-properties/palm-drive-2-sector-3-pataudi/featured.png", href: "https://roofandassetsinfra.com/properties/palm-drive-2-sector-3-pataudi/", tag: "New Launch" },
  { name: "Elite Homes", location: "Jhajjar", area: "Sector 30", price: "₹47 Lakh*", priceLakh: 47, image: "/roof-assets-infra-featured-properties/elite-homes-sector-30-jhajjar/featured.png", href: "https://roofandassetsinfra.com/properties/elite-homes-sector-30-jhajjar/", tag: "Residential Plots" },
  { name: "Palm Drive", location: "Pataudi", area: "Sector 3", price: "₹1.08 Cr*", priceLakh: 108, image: "/roof-assets-infra-featured-properties/palm-drive-sector-3-pataudi/featured.png", href: "https://roofandassetsinfra.com/properties/palm-drive-sector-3-pataudi/", tag: "Gated Township" },
  { name: "Mayur City", location: "Jhajjar", area: "Sector 27", price: "₹62 Lakh*", priceLakh: 62, image: "/roof-assets-infra-featured-properties/mayur-city-sector-27-jhajjar/featured.webp", href: "https://roofandassetsinfra.com/properties/mayur-city-sector-27-jhajjar/", tag: "Plotted Living" },
  { name: "South City I", location: "Jhajjar", area: "Sector 36", price: "₹41 Lakh*", priceLakh: 41, image: "/roof-assets-infra-featured-properties/south-city-i-sector-36-jhajjar/featured.jpg", href: "https://roofandassetsinfra.com/properties/south-city-i-sector-36-jhajjar/", tag: "Value Pick" },
  { name: "South City II", location: "Jhajjar", area: "Sector 37", price: "₹32 Lakh*", priceLakh: 32, image: "/roof-assets-infra-featured-properties/south-city-ii-sector-37-jhajjar/featured.jpg", href: "https://roofandassetsinfra.com/properties/south-city-ii-sector-37-jhajjar/", tag: "Affordable Plots" },
  { name: "Green Valley 2", location: "Sohna", area: "Sector 6", price: "₹99 Lakh*", priceLakh: 99, image: "/roof-assets-infra-featured-properties/green-valley-2-sector-6-sohna/featured.jpg", href: "https://roofandassetsinfra.com/properties/green-valley-2-sector-6-sohna/", tag: "Premium Plots" },
  { name: "Gokulam", location: "Sohna", area: "South Gurugram", price: "₹75 Lakh*", priceLakh: 75, image: "/roof-assets-infra-featured-properties/gokulam/featured.jpg", href: "https://roofandassetsinfra.com/properties/gokulam/", tag: "Green Township" },
];

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>;
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function SearchableSelect({ value, options, onChange, ariaLabel }: { value: string; options: string[]; onChange: (value: string) => void; ariaLabel: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selectOption = (option: string) => {
    onChange(option);
    setQuery("");
    setOpen(false);
  };

  return <div className={styles.searchableSelect} ref={root}>
    <button type="button" className={open ? styles.selectOpen : ""} aria-label={ariaLabel} aria-haspopup="listbox" aria-expanded={open} onClick={() => { setOpen((current) => !current); setQuery(""); }}><span>{value}</span><i aria-hidden="true" /></button>
    {open && <div className={styles.selectMenu}>
      <div className={styles.selectSearch}><SearchIcon /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} placeholder="Type to search..." aria-label={`Search ${ariaLabel.toLowerCase()} options`} autoFocus /></div>
      <div className={styles.selectOptions} role="listbox" aria-label={ariaLabel}>
        {filteredOptions.length ? filteredOptions.map((option) => <button type="button" role="option" aria-selected={option === value} className={option === value ? styles.selectedOption : ""} onClick={() => selectOption(option)} key={option}><span>{option}</span>{option === value && <b aria-hidden="true">✓</b>}</button>) : <p>No option found</p>}
      </div>
    </div>}
  </div>;
}

export default function PlotsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [budget, setBudget] = useState("Any Budget");
  const [sort, setSort] = useState("Featured");

  const results = useMemo(() => {
    const limits: Record<string, [number, number]> = { "Under ₹50 Lakh": [0, 50], "₹50–75 Lakh": [50, 75], "₹75 Lakh–1 Cr": [75, 100], "Above ₹1 Cr": [100, Infinity] };
    let next = plots.filter((plot) => {
      const query = search.trim().toLowerCase();
      const matchesSearch = !query || `${plot.name} ${plot.location} ${plot.area} ${plot.tag} ${plot.price}`.toLowerCase().includes(query);
      const matchesLocation = location === "All Locations" || plot.location === location;
      const range = limits[budget];
      const matchesBudget = !range || (plot.priceLakh >= range[0] && plot.priceLakh <= range[1]);
      return matchesSearch && matchesLocation && matchesBudget;
    });
    if (sort === "Price: Low to High") next = [...next].sort((a, b) => a.priceLakh - b.priceLakh);
    if (sort === "Price: High to Low") next = [...next].sort((a, b) => b.priceLakh - a.priceLakh);
    return next;
  }, [search, location, budget, sort]);

  const clearFilters = () => { setSearch(""); setLocation("All Locations"); setBudget("Any Budget"); setSort("Featured"); };

  return <main className={`${styles.page} plotsMotion`}>
    <SiteHeader active="Properties" />

    <section className={styles.hero}>
      <Image src="/project-gallery/south-entrance.webp" alt="Premium plotted development entrance" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroLines} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p>Plotted Developments · Delhi NCR &amp; Beyond</p>
        <h1>Land for Today.<br /><em>Potential for Tomorrow.</em></h1>
        <div className={styles.heroFoot}><span>Curated plotted communities</span><p>Explore considered opportunities across emerging corridors, established townships and connected destinations.</p></div>
      </div>
      <a className={styles.scrollCue} href="#explore"><span>↓</span> Explore Plots</a>
    </section>

    <section className={styles.discovery} id="explore">
      <div className={styles.intro}>
        <div><p className={styles.eyebrow}>Find Your Ground</p><h2>Plots Selected with<br /><em>Perspective.</em></h2></div>
        <p>Compare plotted developments by destination and budget—then explore each opportunity in detail.</p>
      </div>

      <form className={styles.filters} role="search" onSubmit={(event) => event.preventDefault()}>
        <label className={styles.search}><span>Search a project</span><div><SearchIcon /><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setSearch(""); }} placeholder="Project, sector or city" autoComplete="off" /></div></label>
        <div className={styles.filterField}><span>Location</span><SearchableSelect ariaLabel="Filter plots by location" value={location} onChange={setLocation} options={["All Locations", "Jhajjar", "Pataudi", "Sohna", "Haridwar"]} /></div>
        <div className={styles.filterField}><span>Budget</span><SearchableSelect ariaLabel="Filter plots by budget" value={budget} onChange={setBudget} options={["Any Budget", "Under ₹50 Lakh", "₹50–75 Lakh", "₹75 Lakh–1 Cr", "Above ₹1 Cr"]} /></div>
        <button type="button" onClick={clearFilters}>Reset filters <span>↺</span></button>
      </form>

      <div className={styles.resultBar}><p aria-live="polite" aria-atomic="true"><strong>{String(results.length).padStart(2, "0")}</strong> plotted opportunities</p><div className={styles.sortField}><span>Sort by</span><SearchableSelect ariaLabel="Sort plotted opportunities" value={sort} onChange={setSort} options={["Featured", "Price: Low to High", "Price: High to Low"]} /></div></div>

      {results.length ? <div className={styles.grid}>{results.map((plot) => <article className={styles.card} key={plot.name}>
        <a className={styles.cardImage} href={plot.href} target={plot.href.startsWith("/") ? undefined : "_blank"} rel={plot.href.startsWith("/") ? undefined : "noreferrer"}><Image src={plot.image} alt={plot.name} fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 45vw, 30vw" /><span>{plot.tag}</span></a>
        <div className={styles.cardBody}><p><PinIcon /> {plot.area}, {plot.location}</p><h3>{plot.name}</h3><div className={styles.cardFoot}><div><small>Starting from</small><strong>{plot.price}</strong></div><a href={plot.href} target={plot.href.startsWith("/") ? undefined : "_blank"} rel={plot.href.startsWith("/") ? undefined : "noreferrer"} aria-label={`View ${plot.name}`}>↗</a></div></div>
      </article>)}</div> : <div className={styles.empty}><span>00</span><h3>No matching plots found.</h3><p>Try a different location, budget or project name.</p><button type="button" onClick={clearFilters}>Clear all filters</button></div>}
    </section>

    <section className={styles.advisory}>
      <div><p className={styles.eyebrow}>Need a Clearer Shortlist?</p><h2>Tell Us What You&apos;re<br /><em>Looking to Build.</em></h2></div>
      <div><p>Share your preferred destination, budget and purpose. We&apos;ll help you compare relevant plotted opportunities with better context.</p><Link className={`goldButton ${styles.advisoryButton}`} href="/#contact"><span>Speak with ROOF</span><span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span></Link></div>
    </section>

    <SiteFooter />
    <PageEnhancements scope=".plotsMotion" variant="editorial" />
  </main>;
}
