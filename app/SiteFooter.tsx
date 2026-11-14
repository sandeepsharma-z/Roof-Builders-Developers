import Image from "next/image";
import Link from "next/link";

function SocialIcon({ type }: { type: "facebook" | "instagram" | "linkedin" | "youtube" | "mail" }) {
  const icons = {
    facebook: <path d="M13.5 22v-8h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.7-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.3 1.6-4.3 4.4v2.1H7.3V14h2.8v8h3.4Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
    linkedin: <path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM9 8.8V19h3.2v-5.1c0-1.3.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8v5H19v-5.6c0-2.8-.6-4.9-3.8-4.9-1.5 0-2.6.8-3.1 1.6V8.8H9Z" />,
    youtube: <path fillRule="evenodd" clipRule="evenodd" d="M21 8.2c-.2-1.3-1-2.2-2.3-2.4-1.9-.3-4.2-.4-6.7-.4s-4.8.1-6.7.4C4 6 3.2 6.9 3 8.2a21 21 0 0 0 0 7.6c.2 1.3 1 2.2 2.3 2.4 1.9.3 4.2.4 6.7.4s4.8-.1 6.7-.4c1.3-.2 2.1-1.1 2.3-2.4a21 21 0 0 0 0-7.6ZM10 9v6l5-3-5-3Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  };
  return <svg className={`footerSvg footerSvg--${type}`} viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function ContactIcon({ pin = false }: { pin?: boolean }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{pin ? <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></> : <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />}</svg>;
}

export default function SiteFooter() {
  return <footer className="footer">
    <div className="footerPrelude shell"><p><span>Explore ROOF</span>Residential, commercial and plotted opportunities for living, working and investing.</p><Link className="goldButton" href="/#projects"><span>View Featured Properties</span><span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span></Link></div>
    <div className="footerGrid shell">
      <div className="footerBrand"><Image src="/roof-logo-white.png" alt="Roof Builders & Developers" width={210} height={85} /><p>Connecting people with considered residential, commercial and plotted real estate opportunities.</p><div className="socialLinks"><a href="https://www.facebook.com/roofbuildersanddevelopers/" target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon type="facebook" /></a><a href="https://www.instagram.com/roofbuildersanddevelopers/" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon type="instagram" /></a><a href="https://www.linkedin.com/company/roof-builders-and-developers/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a><a href="https://www.youtube.com/@roofbuildersanddevelopersindia" target="_blank" rel="noreferrer" aria-label="YouTube"><SocialIcon type="youtube" /></a></div></div>
      <div><h3>Company</h3><Link href="/about">About Us</Link><Link href="/why-roof">Why ROOF</Link><Link href="/directors-desk">Director&apos;s Desk</Link><Link href="/gallery">Gallery</Link><Link href="/become-a-partner">Become a Partner</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Properties</h3><Link href="/properties">All Properties</Link><Link href="/projects/dream-valley">Dream Valley</Link><Link href="/coming-soon/sector-27">Sector 27, Jhajjar</Link><Link href="/coming-soon/sector-1">Sector 1, Pataudi</Link><Link href="/coming-soon/sector-4">Sector 4, Pataudi</Link></div>
      <div><h3>Resources</h3><Link href="/blogs">Blogs</Link><Link href="/faq">FAQs</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><Link href="/refund-cancellation-policy">Refund &amp; Cancellation</Link></div>
      <div className="footerContact"><h3>Contact Us</h3><p><span className="footerContactIcon"><ContactIcon pin /></span><span>Unit No. 401, 4th Floor,<br />Welldone Techpark, Sector 48,<br />Sohna Road, Gurgaon – 122001,<br />Haryana, India</span></p><a href="tel:+919876543210"><span className="footerContactIcon"><ContactIcon /></span><span>+91 98765 43210</span></a><a href="mailto:info@roofbuildersanddevelopers.com"><span className="footerContactIcon"><SocialIcon type="mail" /></span><span>info@roofbuildersanddevelopers.com</span></a></div>
    </div>
    <div className="footerBottom shell"><span>© 2026 Roof Builders &amp; Developers. All rights reserved.</span><div><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms &amp; Conditions</Link><Link href="/refund-cancellation-policy">Refund Policy</Link></div></div>
  </footer>;
}
