"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "../inner-pages.module.css";

function Arrow() {
  return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span>;
}

function PropertySelect() {
  const options = ["Plots", "Residential", "Commercial", "Site Visit"];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return <div className={styles.customSelect} ref={root}>
    <input type="hidden" name="interest" value={value} />
    <button type="button" className={open ? styles.customSelectOpen : ""} aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}><span className={value ? "" : styles.customSelectPlaceholder}>{value || "Select property type"}</span><i aria-hidden="true" /></button>
    {open && <div className={styles.customSelectMenu} role="listbox">{options.map((option) => <button type="button" role="option" aria-selected={value === option} className={value === option ? styles.customSelectActive : ""} onClick={() => { setValue(option); setOpen(false); }} key={option}><span>{option}</span>{value === option && <i aria-hidden="true">✓</i>}</button>)}</div>}
  </div>;
}

export default function ContactPage() {
  return <main className={`${styles.page} ${styles.contactPage}`}>
    <SiteHeader active="Contact" />
    <section className={styles.hero}>
      <Image src="/contact-hero-generated-v3.png" alt="Premium residential development illuminated at dusk" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroContent}><p className={styles.eyebrow}>Start a Conversation</p><h1>Let&apos;s Discuss<br /><em>Your Next Address.</em></h1><p className={styles.heroCopy}>Connect with our team for current project information, availability and a coordinated site visit.</p></div>
    </section>

    <section className={styles.contactSection}>
      <div className={styles.contactIntro}>
        <p className={styles.eyebrow}>Contact ROOF</p><h2>Clear Answers.<em>Personal Guidance.</em></h2>
        <p>Tell us which development or property category you are exploring. Our team will help with verified project details and the next practical step.</p>
        <div className={styles.contactDetails}>
          <article><span>Corporate Office</span><p>Unit No. 401, 4th Floor, Welldone Techpark,<br />Sector 48, Sohna Road, Gurgaon – 122001,<br />Haryana, India</p></article>
          <article><span>Call Us</span><a href="tel:+919876543210">+91 98765 43210</a></article>
          <article><span>Email</span><a href="mailto:info@roofbuildersanddevelopers.com">info@roofbuildersanddevelopers.com</a></article>
        </div>
      </div>

      <form className={styles.contactForm} id="enquiry-form" onSubmit={(event) => event.preventDefault()}>
        <p>Project Enquiry</p>
        <h3>How Can We Help?</h3>
        <div className={styles.formGrid}>
          <label><span>Your Name</span><input type="text" name="name" placeholder="Enter your name" required /></label>
          <label><span>Phone Number</span><input type="tel" name="phone" placeholder="Enter phone number" required /></label>
          <label><span>Email Address</span><input type="email" name="email" placeholder="Enter your email" /></label>
          <label><span>Interested In</span><PropertySelect /></label>
          <label className={styles.full}><span>Your Message</span><textarea name="message" placeholder="Tell us about your requirement" /></label>
        </div>
        <button className={`goldButton ${styles.formButton}`} type="submit"><span>Request a Call Back</span><Arrow /></button>
      </form>
    </section>

    <section className={styles.mapSection} aria-label="ROOF corporate office location"><iframe title="ROOF Builders and Developers corporate office map" src="https://www.google.com/maps?q=28.418668,77.038073&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></section>
    <SiteFooter />
  </main>;
}
