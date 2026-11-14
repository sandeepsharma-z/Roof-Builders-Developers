"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Activity, Baby, Coins, Droplets, Dumbbell, Fence, FileText, Footprints, Ruler, Settings, ShieldCheck, Tag, Trees, Trophy, UserCog, UsersRound, Waves } from "lucide-react";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import PageEnhancements from "../../PageEnhancements";
import styles from "../south-city-greens/project.module.css";
import dreamStyles from "./dream-valley.module.css";

const root = "/projects/dream-valley";
const amenities = ["24/7 Security", "Kids Play Area", "Open Gym", "Park, Yoga & Meditation Garden", "Common Facility Area", "Sports Court", "Lush Green Parks", "Badminton Court", "Fresh Water Supply", "Jogging Track", "Gated Complex", "Storm Water & Sewage System"];
const amenityIcons = [ShieldCheck, Baby, Dumbbell, Trees, UsersRound, Trophy, Trees, Activity, Droplets, Footprints, Fence, Waves];
const gallery = [
  ["Grand Entrance", `${root}/dream-valley-banner-1.png`], ["Premium Plotted Community", `${root}/dream-valley-banner-2.png`], ["Landscaped Greens", `${root}/banner-jhajjar-1.png`],
  ...Array.from({ length: 6 }, (_, index) => [`Dream Valley View ${String(index + 1).padStart(2, "0")}`, `${root}/sector-gallery-${index + 1}.png`]),
];
const connectivity = [["Civil Hospital, Jhajjar", "8–10 min"], ["AIIMS-II, Badsa", "20–25 min"], ["World College of Medical Sciences", "20 min"], ["Pt. Neki Ram Sharma Govt. College", "10–12 min"], ["Sehwag International School", "10 min"], ["Ch. Ranbir Singh State Institute", "20 min"], ["Ganga Institute of Technology", "20 min"], ["XLRI Delhi-NCR", "12 min"], ["Reliance MET City", "10 min"], ["IMT Manesar", "50 min"], ["Bahadurgarh Industrial Area", "45 min"], ["Jhajjar Railway Station", "12–15 min"], ["KMP Expressway Entry", "20 min"], ["Gurugram Cyber City", "1 hr 15 min"], ["IGI Airport Terminal 3", "1 hr 10 min"], ["Sultanpur Bird Sanctuary", "30 min"], ["Dwarka Expressway", "45 min"]];
const documents = [
  ["Scheme Brochure", "/brochures/dream-valley-brochure.pdf"],
  ["Scheme RERA", `${root}/dream-valley-RERA.pdf`],
  ["Scheme Licence", `${root}/dream-valley-liscense.pdf`],
  ["Payment Plan", `${root}/dream-valley-payment-plan.pdf`],
  ["Approved Site Plan", `${root}/dream-valley-site-layout.pdf`],
];
const paymentSchedule = [
  ["10%", "Booking (less ₹3 lakh EOI)"], ["10%", "On execution of BBA"], ["10%", "Sewerage & earth filling"],
  ["15%", "Internal road work"], ["10%", "Water-supply lines"], ["10%", "Electrification work"],
  ["10%", "Landscape development"], ["10%", "External services connection"], ["10%", "Storm-water lines"],
  ["5%", "Completion & possession offer"],
];
const ddjayBenefits = [
  ["Secure Investment", "A government-policy plotted development with statutory approvals and a registered RERA project."],
  ["Independent Living", "Own a residential plot and plan a home around your family's present and future needs."],
  ["Planned Infrastructure", "Internal roads, water, sewerage, storm-water lines, electrification and landscaped areas."],
  ["Growth Corridor", "Sector 7, Jhajjar connects with MET City, KMP Expressway and the wider Delhi-NCR region."],
];

function Arrow() { return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span>; }

export default function DreamValleyPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [documentPreview, setDocumentPreview] = useState<[string, string] | null>(null);
  const [previewZoom, setPreviewZoom] = useState(1);
  const [previewPan, setPreviewPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const resetPreview = () => { setPreviewZoom(1); setPreviewPan({ x: 0, y: 0 }); setIsDragging(false); };
  const closePreview = () => { setLightbox(null); setDocumentPreview(null); resetPreview(); };
  const changeGalleryImage = (next: number) => { setLightbox(next); resetPreview(); };
  useEffect(() => {
    if (lightbox === null && documentPreview === null) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") closePreview(); if (lightbox !== null && event.key === "ArrowRight") changeGalleryImage((lightbox + 1) % gallery.length); if (lightbox !== null && event.key === "ArrowLeft") changeGalleryImage((lightbox - 1 + gallery.length) % gallery.length); };
    document.body.style.overflow = "hidden"; window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [lightbox, documentPreview]);
  const zoomPreview = (event: React.WheelEvent<HTMLDivElement>) => { event.preventDefault(); setPreviewZoom(current => { const next = Math.min(4, Math.max(1, current + (event.deltaY < 0 ? .2 : -.2))); if (next === 1) setPreviewPan({ x: 0, y: 0 }); return next; }); };
  const startPan = (event: React.PointerEvent<HTMLImageElement>) => { if (previewZoom === 1) return; event.currentTarget.setPointerCapture(event.pointerId); dragStart.current = { x: event.clientX, y: event.clientY, panX: previewPan.x, panY: previewPan.y }; setIsDragging(true); };
  const movePan = (event: React.PointerEvent<HTMLImageElement>) => { if (isDragging) setPreviewPan({ x: dragStart.current.panX + event.clientX - dragStart.current.x, y: dragStart.current.panY + event.clientY - dragStart.current.y }); };
  const stopPan = (event: React.PointerEvent<HTMLImageElement>) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); setIsDragging(false); };
  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); const message = ["Dream Valley Enquiry", `Name: ${data.get("name")}`, `Phone: ${data.get("phone")}`, `Email: ${data.get("email") || "Not provided"}`, `Message: ${data.get("message") || "Please share project details."}`].join("\n"); window.open(`https://wa.me/917290083083?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer"); };

  return <main className={`${styles.page} ${dreamStyles.dreamPage} projectDetailMotion`}>
    <SiteHeader active="Properties" />
    <section className={`${styles.hero} ${dreamStyles.mobileHero}`} id="top"><Image src={`${root}/dream-valley-banner-1.png`} alt="Dream Valley gated plotted community in Sector 7, Jhajjar" fill priority sizes="100vw" /><div className={styles.heroShade} /><div className={styles.heroGrid} /><div className={styles.heroContent}><p>Sector 7 · Jhajjar · Haryana</p><h1>Dream<br /><em>Valley.</em></h1><span>RERA-approved residential plots on NH-352</span><div className={styles.heroActions}><a className="goldButton" href="#enquire"><span>Enquire Now</span><Arrow /></a><a className={styles.outline} href="/brochures/dream-valley-brochure.pdf" download>Download Brochure <span>↗</span></a></div></div><div className={styles.heroStamp}><span>HRERA Registered</span><strong>HRERA-PKL-JJR-940-2026</strong></div></section>
    <nav className={styles.projectNav}><a href="#overview">Overview</a><a href="#amenities">Amenities</a><a href="#layout">Layout</a><a href="#gallery">Gallery</a><a href="#master-plan">Master Plan</a><a href="#location">Location</a><a href="#enquire">Enquire</a></nav>

    <section className={styles.overview} id="overview"><div className={styles.overviewStory}><div className={styles.sectionIntro}><p>Project Overview</p><h2>A Landmark Address<br /><em>for Tomorrow.</em></h2></div><div className={styles.overviewCopy}><p className={styles.lead}>A thoughtfully planned DDJAY plotted community combining open spaces, wide roads and everyday connectivity.</p><p>Dream Valley brings premium residential plots to Sector 7, Jhajjar, right on NH-352. The gated development is planned for independent homes in a calm and well-connected setting.</p><p>Landscaped parks, sports and wellness areas, reliable utilities and proximity to education, healthcare and major employment hubs create a balanced address for living and long-term investment.</p></div><a className={`goldButton ${dreamStyles.brochureButton}`} href="/brochures/dream-valley-brochure.pdf" download><span>Download Project Brochure</span><Arrow /></a><div className={styles.overviewFacts}><div><strong>100–179</strong><span>Sq. Yd. Plot Sizes</span></div><div><strong>₹60K</strong><span>Per Sq. Yd.</span></div><div><strong>NH-352</strong><span>Prime Road Location</span></div></div></div><div className={styles.overviewVisual}><Image src={`${root}/dream-valley-banner-2.png`} alt="Dream Valley residential community artistic impression" fill sizes="(max-width:900px) 92vw,50vw" /><span>Artistic Impression · Dream Valley</span></div></section>
    <section className={styles.trustStrip} aria-label="Project credentials"><article><span>Policy</span><strong>DDJAY 2016</strong></article><article><span>Location</span><strong>Sector 7, Jhajjar</strong></article><article><span>Plot Range</span><strong>100–179 Sq. Yd.</strong></article><article><span>HRERA No.</span><strong>HRERA-PKL-JJR-940-2026</strong></article></section>

    <section className={dreamStyles.documents} id="documents">
      <div className={dreamStyles.documentsIntro}><div className={styles.sectionIntro}><p>Approved Documents</p><h2>Everything You Need,<br /><em>Ready to Review.</em></h2></div><p>Review the official scheme brochure, statutory approvals, payment plan and approved site layout before making a decision.</p></div>
      <div className={dreamStyles.documentGrid}>{documents.map(([name, href], index) => <a href={href} target="_blank" rel="noreferrer" key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><small>Approved PDF</small><strong>{name}</strong></div><b aria-hidden="true">↗</b></a>)}</div>
      <div className={dreamStyles.applicationNote}><div><span>Application closes</span><strong>18 October 2026</strong></div><div><span>Allotment date</span><strong>19 October 2026</strong></div><p><strong>33% plots reserved</strong> for government employees and women applicants. Registration amount is refundable for unsuccessful applicants.</p></div>
    </section>

    <section className={styles.amenities} id="amenities"><div className={styles.sectionIntro}><p>Everyday Essentials</p><h2>Designed Around<br /><em>the Way You Live.</em></h2></div><p className={styles.sectionCopy}>Security, recreation, landscaped spaces and essential infrastructure planned for convenient everyday living.</p><div className={styles.amenityGrid}>{amenities.map((amenity, index) => { const Icon = amenityIcons[index]; return <article key={amenity}><span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><h3>{amenity}</h3></article>; })}</div></section>

    <section className={dreamStyles.planSection} id="layout"><button className={dreamStyles.planImage} type="button" onClick={() => setDocumentPreview([`${root}/dream-valley-Jhajjar-layout.png`, "Dream Valley layout plan"])} aria-label="Open Dream Valley layout plan"><img src={`${root}/dream-valley-Jhajjar-layout.png`} alt="Dream Valley Sector 7 Jhajjar layout plan" /></button><div className={dreamStyles.planContent}><div className={styles.sectionIntro}><p>Project Layout</p><h2>Planned for<br /><em>Connected Living.</em></h2></div><p>A considered plotted layout with internal roads, green belts, common facilities, commercial space and recreation areas.</p><dl><div><dt>Plot Sizes</dt><dd>100–179 Sq. Yd.</dd></div><div><dt>Approach</dt><dd>NH-352, Sector 7</dd></div><div><dt>Community</dt><dd>Secure Gated Development</dd></div><div><dt>RERA No.</dt><dd>HRERA-PKL-JJR-940-2026</dd></div></dl><div className={styles.heroActions}><a className="goldButton" href={`${root}/dream-valley-site-layout.pdf`} target="_blank" rel="noreferrer"><span>View Detailed Plan</span><Arrow /></a><a className={styles.outline} href={`${root}/dream-valley-payment-plan.pdf`} target="_blank" rel="noreferrer">Payment Plan <span>↗</span></a></div></div></section>

    <section className={dreamStyles.payment} id="payment-plan">
      <div className={dreamStyles.paymentIntro}><div className={`${styles.sectionIntro} ${dreamStyles.paymentHeading}`}><p>Construction Linked Plan</p><h2>A Clear Path<br /><em>from Booking to Possession.</em></h2></div><div className={dreamStyles.priceCard}><span>Plot Price</span><strong>₹60,000</strong><small>per sq. yd. · 100–179 sq. yd.</small><i className={dreamStyles.priceIcon} aria-hidden="true"><Tag /></i></div></div>
      <div className={dreamStyles.paymentGrid}>{paymentSchedule.map(([percentage, milestone], index) => <article key={milestone}><div><span>{String(index + 1).padStart(2, "0")}</span><strong>{percentage}</strong><p>{milestone}</p></div><i className={dreamStyles.stepImage} style={{ backgroundPosition: `${(index % 5) * 25}% ${index < 5 ? 0 : 100}%` }} aria-hidden="true" /></article>)}</div>
      <div className={dreamStyles.charges}><div><FileText aria-hidden="true" /><span>Registration</span><strong>₹31,000</strong></div><div><Coins aria-hidden="true" /><span>EOI Amount</span><strong>₹3 lakh</strong></div><div><Ruler aria-hidden="true" /><span>IFMS</span><strong>₹250 / sq. yd.</strong></div><div><Settings aria-hidden="true" /><span>Other Charges</span><strong>₹750 / sq. yd.</strong></div><div><FileText aria-hidden="true" /><span>EDC / IDC</span><strong>₹880 / sq. yd.</strong></div><div><UserCog aria-hidden="true" /><span>Administration</span><strong>₹17,700</strong></div></div>
      <p className={dreamStyles.paymentNote}>Corner and park-facing PLC applies at 5%–10%. Government cess and taxes, if applicable, are payable separately. Prices and availability remain subject to change.</p>
    </section>

    <section className={styles.gallerySection} id="gallery"><div className={styles.galleryHead}><div className={styles.sectionIntro}><p>Explore the Project</p><h2>Life Taking Shape<br /><em>at Dream Valley.</em></h2></div><div><p>Explore project renders, landscaped spaces and community views from the official project collection.</p><small>Images and renderings are for representational purposes where applicable.</small></div></div><div className={styles.gallery}>{gallery.map(([name, src], index) => <button type="button" onClick={() => setLightbox(index)} key={name}><img src={src} alt={name} /><span>{name}</span></button>)}</div></section>

    <section className={dreamStyles.masterPlan} id="master-plan"><div className={dreamStyles.masterHeading}><div className={styles.sectionIntro}><p>Jhajjar Master Plan</p><h2>Positioned at the<br /><em>Edge of Tomorrow.</em></h2></div></div><button className={dreamStyles.masterVisual} type="button" onClick={() => setDocumentPreview([`${root}/Master-Plan-Jhajjar.jpg`, "Jhajjar master plan"])} aria-label="Open Jhajjar master plan"><img src={`${root}/Master-Plan-Jhajjar.jpg`} alt="Jhajjar master plan" /></button></section>

    <section className={dreamStyles.whySection}>
      <div className={styles.sectionIntro}><p>Why Dream Valley</p><h2>Planned Under<br /><em>DDJAY 2016.</em></h2></div>
      <div className={dreamStyles.whyGrid}>{ddjayBenefits.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className={styles.location} id="location"><div className={styles.locationIntro}><div className={styles.sectionIntro}><p>Location &amp; Connectivity</p><h2>Jhajjar Close.<br /><em>NCR Connected.</em></h2></div><p>Well placed for healthcare, education, industry, rail and major expressway connections across the NCR.</p><div className={styles.mapFrame}><iframe title="Dream Valley Sector 7 Jhajjar map" src="https://www.google.com/maps?q=Sector%207%20Jhajjar%20Haryana&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div><div className={styles.locationList}>{connectivity.map(([title, time], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{time}</p></div></article>)}</div></section>

    <section className={styles.enquire} id="enquire"><div><p>Private Consultation</p><h2>Enquire About<br /><em>Dream Valley.</em></h2><span>Share your details and our team will help you understand current availability, the layout, payment plan and next steps.</span></div><form onSubmit={submitEnquiry}><label>Full Name<input name="name" type="text" placeholder="Your name" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label><label>Email<input name="email" type="email" placeholder="your@email.com" /></label><label className={styles.full}>Message<textarea name="message" placeholder="Tell us what you would like to know" rows={3} /></label><button className="goldButton" type="submit"><span>Submit Enquiry</span><Arrow /></button></form></section>

    {(lightbox !== null || documentPreview !== null) && <div className={styles.lightbox} role="dialog" aria-modal="true" onWheel={zoomPreview} onMouseDown={event => { if (event.target === event.currentTarget) closePreview(); }}><button className={styles.lightboxClose} type="button" onClick={closePreview} aria-label="Close">×</button><div className={styles.zoomLevel}>{Math.round(previewZoom * 100)}% · {previewZoom > 1 ? "Drag to move" : "Scroll to zoom"}</div>{lightbox !== null && <button className={styles.lightboxPrev} type="button" onClick={() => changeGalleryImage((lightbox - 1 + gallery.length) % gallery.length)} aria-label="Previous image">‹</button>}<img className={`${previewZoom > 1 ? styles.pannable : ""} ${isDragging ? styles.dragging : ""}`} src={lightbox !== null ? gallery[lightbox][1] : documentPreview![0]} alt={lightbox !== null ? gallery[lightbox][0] : documentPreview![1]} style={{ transform: `translate3d(${previewPan.x}px,${previewPan.y}px,0) scale(${previewZoom})` }} onPointerDown={startPan} onPointerMove={movePan} onPointerUp={stopPan} onPointerCancel={stopPan} draggable={false} />{lightbox !== null && <button className={styles.lightboxNext} type="button" onClick={() => changeGalleryImage((lightbox + 1) % gallery.length)} aria-label="Next image">›</button>}<span>{lightbox !== null ? gallery[lightbox][0] : documentPreview![1]}</span></div>}
    <SiteFooter /><PageEnhancements scope=".projectDetailMotion" variant="editorial" />
  </main>;
}
