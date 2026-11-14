"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function SocialIcon({ type }: { type: "linkedin" | "whatsapp" | "instagram" }) {
  if (type === "linkedin") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM9 8.8V19h3.2v-5.1c0-1.3.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8v5H19v-5.6c0-2.8-.6-4.9-3.8-4.9-1.5 0-2.6.8-3.1 1.6V8.8H9Z" /></svg>;
  if (type === "whatsapp") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.92L2.05 22l5.2-1.52A9.9 9.9 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.9.92-3-.2-.31a8.08 8.08 0 1 1 6.79 3.72Zm4.44-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.36-1.69c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>;
}

export default function GlobalFloatingTools() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <>
    <aside className="floatingSocialRail" aria-label="Connect with ROOF">
      <span className="floatingSocialLabel">Connect</span><span className="floatingSocialLine" aria-hidden="true" />
      <a href="https://www.linkedin.com/company/roof-builders-and-developers/" aria-label="ROOF on LinkedIn" title="LinkedIn" target="_blank" rel="noreferrer"><SocialIcon type="linkedin" /></a>
      <a href="https://wa.me/919876543210" aria-label="Chat with ROOF on WhatsApp" title="WhatsApp" target="_blank" rel="noreferrer"><SocialIcon type="whatsapp" /></a>
      <a href="https://www.instagram.com/roofbuildersanddevelopers/" aria-label="ROOF on Instagram" title="Instagram" target="_blank" rel="noreferrer"><SocialIcon type="instagram" /></a>
    </aside>
    <Link className="floatingEnquireButton" href="/contact#enquiry-form"><span>Enquire Now</span><i aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></i></Link>
    <a className="floatingCallButton" href="tel:+919876543210" aria-label="Call ROOF Builders and Developers" title="Call us">
      <span className="floatingCallPulse" aria-hidden="true" />
      <span className="floatingCallIcon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 3.5 9 3l2 5-2.3 1.5a14 14 0 0 0 5.8 5.8L16 13l5 2-.5 3.5c-.2 1.4-1.4 2.5-2.9 2.5C9.5 21 3 14.5 3 6.4c0-1.5 1.1-2.7 2.5-2.9Z" /></svg></span>
      <span className="floatingCallText">Call</span>
    </a>
    <button className={`scrollTopButton ${showTop ? "visible" : ""}`} type="button" aria-label="Scroll to top" title="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 14 6-6 6 6" /></svg><span>Top</span>
    </button>
    <nav className="mobileContactBar" aria-label="Quick contact">
      <a href="tel:+919876543210"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.5 3.5 9 3l2 5-2.3 1.5a14 14 0 0 0 5.8 5.8L16 13l5 2-.5 3.5c-.2 1.4-1.4 2.5-2.9 2.5C9.5 21 3 14.5 3 6.4c0-1.5 1.1-2.7 2.5-2.9Z" /></svg><span>Call</span></a>
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"><SocialIcon type="whatsapp" /><span>WhatsApp</span></a>
      <Link href="/contact#enquiry-form"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v11H9l-5 3v-14Z" /></svg><span>Enquire</span></Link>
    </nav>
  </>;
}
