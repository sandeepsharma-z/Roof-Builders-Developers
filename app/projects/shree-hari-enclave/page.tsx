"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Baby, BadgeCheck, CalendarDays, Cctv, Droplets, Eye, Fence, FilePenLine, FileText, FolderOpen, Lightbulb, Map, ReceiptText, Route, ShieldCheck, Trees, UsersRound, Waves, Zap } from "lucide-react";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import PageEnhancements from "../../PageEnhancements";
import styles from "../south-city-greens/project.module.css";

const root="/projects/shree-hari-enclave";
const amenities=["Street Lights","Parks & Green Area","Electricity","Gated Community","Children Play Area","CCTV Surveillance","24×7 Security","Water Supply","Wide Roads","Sewerage System"];
const amenityIcons=[Lightbulb,Trees,Zap,Fence,Baby,Cctv,ShieldCheck,Droplets,Route,Waves];
const gallery=[
  ["Grand Entrance",`${root}/banner-image-1.png`],["Haridwar Riverside",`${root}/banner-image-2.png`],["Landscaped Park",`${root}/banner-image-3.png`],["Planned Boulevard",`${root}/about-us.jpeg`],
  ["Community View 01",`${root}/gallery-1.jpeg`],["Community View 02",`${root}/gallery-2.jpeg`],["Community View 03",`${root}/gallery-3.jpeg`],["Community View 04",`${root}/gallery-4.jpeg`],
  ...Array.from({length:8},(_,i)=>[`Project Update ${String(i+1).padStart(2,"0")}`,`${root}/project-construction-${i+1}.png`]),
];
const connectivity=[["Patanjali","5 min"],["Crystal World","5 min"],["Haridwar Railway Station","10 min"],["Haridwar Bus Stand","10 min"],["Har Ki Pauri","15 min"],["Mansa Devi Temple","15 min"],["Chandi Devi Temple","15 min"],["Rajaji National Park","15 min"],["Jolly Grant Airport","30 min"],["Dehradun","40 min"]];
const projectDocuments=[
  {name:"Project Brochure",href:"/brochures/shree-hari-enclave-brochure.pdf",Icon:FileText},
  {name:"Project RERA",href:`${root}/project-certificate.pdf`,Icon:BadgeCheck},
  {name:"Payment Plan",href:`${root}/payment-plan.jpg`,Icon:ReceiptText},
  {name:"Project Site Plan",href:`${root}/site-layout-plan.png`,Icon:Map},
];
const haridwarReasons=[
  ["Spiritual & Cultural Significance","One of the seven holiest cities in India, with global pilgrimage tourism and year-round visitors."],
  ["Rapid Infrastructure Development","AIIMS Rishikesh, Ring Roads, Smart City Mission, and major national highway upgrades underway."],
  ["High Investment Potential","Property values appreciating steadily with growing demand from NRIs and domestic investors."],
  ["Growing Real Estate Hub","Emerging as one of Uttarakhand's fastest-growing cities with planned industrial and IT zones."],
  ["Clean & Green Environment","Foothills of the Himalayas, Ganges riverfront, and pollution-free air make it ideal for living."],
];
const applicationSchedule=[
  {label:"Project Start Date",date:"25 August 2026",Icon:CalendarDays},
  {label:"Last Date of Application",date:"06 September 2026",Icon:FilePenLine},
  {label:"Allotment Date",date:"08 September 2026",Icon:BadgeCheck},
];

function Arrow(){return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"/></svg></span>}
function AmenityIcon({index}:{index:number}){const Icon=amenityIcons[index];return <Icon aria-hidden="true"/>}

export default function ShreeHariEnclavePage(){
  const [lightbox,setLightbox]=useState<number|null>(null);
  const [documentPreview,setDocumentPreview]=useState<[string,string]|null>(null);
  const [previewZoom,setPreviewZoom]=useState(1);
  const [previewPan,setPreviewPan]=useState({x:0,y:0});
  const [isDragging,setIsDragging]=useState(false);
  const dragStart=useRef({x:0,y:0,panX:0,panY:0});
  useEffect(()=>{if(lightbox===null&&documentPreview===null)return;const close=(event:KeyboardEvent)=>{if(event.key==="Escape")closePreview();if(lightbox!==null&&event.key==="ArrowRight")changeGalleryImage((lightbox+1)%gallery.length);if(lightbox!==null&&event.key==="ArrowLeft")changeGalleryImage((lightbox-1+gallery.length)%gallery.length)};document.body.style.overflow="hidden";window.addEventListener("keydown",close);return()=>{document.body.style.overflow="";window.removeEventListener("keydown",close)}},[lightbox,documentPreview]);
  const resetPreviewTransform=()=>{setPreviewZoom(1);setPreviewPan({x:0,y:0});setIsDragging(false)};
  const closePreview=()=>{setLightbox(null);setDocumentPreview(null);resetPreviewTransform()};
  const changeGalleryImage=(next:number)=>{setLightbox(next);resetPreviewTransform()};
  const zoomPreview=(event:React.WheelEvent<HTMLDivElement>)=>{event.preventDefault();setPreviewZoom(current=>{const next=Math.min(4,Math.max(1,current+(event.deltaY<0?.2:-.2)));if(next===1)setPreviewPan({x:0,y:0});return next})};
  const startPan=(event:React.PointerEvent<HTMLImageElement>)=>{if(previewZoom===1)return;event.currentTarget.setPointerCapture(event.pointerId);dragStart.current={x:event.clientX,y:event.clientY,panX:previewPan.x,panY:previewPan.y};setIsDragging(true)};
  const movePan=(event:React.PointerEvent<HTMLImageElement>)=>{if(isDragging)setPreviewPan({x:dragStart.current.panX+event.clientX-dragStart.current.x,y:dragStart.current.panY+event.clientY-dragStart.current.y})};
  const stopPan=(event:React.PointerEvent<HTMLImageElement>)=>{if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);setIsDragging(false)};
  const submitEnquiry=(event:React.FormEvent<HTMLFormElement>)=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=["Shree Hari Enclave Enquiry",`Name: ${data.get("name")}`,`Phone: ${data.get("phone")}`,`Email: ${data.get("email")||"Not provided"}`,`Message: ${data.get("message")||"Please share project details."}`].join("\n");window.open(`https://wa.me/917290081081?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")};

  return <main className={`${styles.page} ${styles.haridwarPage} projectDetailMotion`}>
    <SiteHeader active="Properties"/>
    <section className={styles.hero} id="top"><Image src={`${root}/banner-image-1.png`} alt="Shree Hari Enclave entrance on NH-334, Haridwar" fill priority sizes="100vw"/><div className={styles.heroShade}/><div className={styles.heroGrid}/><div className={styles.heroContent}><p>NH-334 · Bahadrabad Bypass · Haridwar</p><h1>Shree Hari<br/><em>Enclave.</em></h1><span>Premium freehold residential plots in the heart of Haridwar</span><div className={styles.heroActions}><a className="goldButton" href="#enquire"><span>Enquire Now</span><Arrow/></a><a className={styles.outline} href="/brochures/shree-hari-enclave-brochure.pdf" download>Download Brochure <span>↗</span></a></div></div><div className={styles.heroStamp}><span>UK RERA Registered</span><strong>UKREP10240000582</strong></div></section>

    <nav className={styles.projectNav}><a href="#overview">Overview</a><a href="#documents">Documents</a><a href="#amenities">Amenities</a><a href="#layout">Layout</a><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#why-haridwar">Why Haridwar</a><a href="#enquire">Contact</a></nav>

    <section className={styles.overview} id="overview"><div className={styles.overviewStory}><div className={styles.sectionIntro}><p>Project Overview</p><h2>Own Land in the<br/><em>Heart of Haridwar.</em></h2></div><div className={styles.overviewCopy}><p className={styles.lead}>A freehold plotted community designed around comfort, connectivity and the tranquillity of nature.</p><p>Shree Hari Enclave is positioned directly on the Delhi–Haridwar National Highway 334 at Bahadrabad Bypass, offering two and three-side-open plots within a secure gated setting.</p><p>Landscaped parks, 30 and 40-foot internal roads, continuous utilities and proximity to Haridwar&apos;s spiritual, leisure and everyday destinations create a considered address for a home, holiday retreat or long-term holding.</p></div><a className="goldButton" href="/brochures/shree-hari-enclave-brochure.pdf" download><span>Download Project Brochure</span><Arrow/></a><div className={styles.overviewFacts}><div><strong>1100–1900</strong><span>Sq. Ft. Plot Sizes</span></div><div><strong>2 &amp; 3</strong><span>Side-Open Plots</span></div><div><strong>30–40</strong><span>Ft. Internal Roads</span></div></div></div><div className={styles.overviewVisual}><Image src={`${root}/about-us.jpeg`} alt="Artistic impression of Shree Hari Enclave boulevard" fill sizes="(max-width:900px) 92vw,50vw"/><span>Artistic Impression · Shree Hari Enclave</span></div></section>

    <section className={styles.trustStrip} aria-label="Project credentials"><article><span>Project</span><strong>Shree Hari Enclave</strong></article><article><span>Bank Loan</span><strong>SBI · HDFC · Canara</strong></article><article><span>RERA Validity</span><strong>15 Oct 2024–7 Mar 2029</strong></article><article><span>UK RERA</span><strong>UKREP10240000582</strong></article></section>

    <section className={styles.haridwarSchedule} aria-labelledby="schedule-title">
      <div className={styles.scheduleHead}><p>Important Announcements</p><h2 id="schedule-title">Application <em>Schedule</em></h2><span className={styles.scheduleStatus}>Reference schedule concluded</span></div>
      <div className={styles.scheduleGrid}>{applicationSchedule.map(({label,date,Icon},index)=><article key={label}><span className={styles.scheduleNumber}>{String(index+1).padStart(2,"0")}</span><span className={styles.scheduleIcon}><Icon aria-hidden="true"/></span><small>{label}</small><i aria-hidden="true"/><strong>{date}</strong><span className={styles.scheduleLandscape} aria-hidden="true"/></article>)}</div>
      <div className={styles.scheduleNotes}><p><span><UsersRound aria-hidden="true"/></span>33% plots are reserved for government employees and women applicants.</p><p><span><FileText aria-hidden="true"/></span>Registration amount is refundable for unsuccessful applicants.</p></div>
    </section>

    <section className={styles.documents} id="documents">
      <div className={styles.documentsIntro}><p><FolderOpen aria-hidden="true"/> Project Documents</p><h2>Bank Loan<br/><em>Available.</em></h2><span>This project is approved by leading banks. Home loan facility available at attractive interest rates.</span><div className={styles.documentHighlights}><span>Clear Title &amp; Legal Compliance</span><span>Developed by Reputed Developer</span><span>Secure &amp; Gated Community</span><span>Wide Paved Roads &amp; Drainage</span><span>24/7 Water &amp; Electricity</span></div><div className={styles.documentBanks}><strong>SBI</strong><strong>HDFC Bank</strong><strong>Canara Bank</strong></div></div>
      <div className={styles.documentList}>{projectDocuments.map(({name,href,Icon})=><a href={href} target="_blank" rel="noreferrer" key={name}><span className={styles.documentIcon}><Icon aria-hidden="true"/></span><span className={styles.documentCopy}><strong>{name}</strong><small>View document</small></span><span className={styles.documentDownload}><Eye aria-hidden="true"/></span></a>)}</div>
    </section>

    <section className={styles.amenities} id="amenities"><div className={styles.sectionIntro}><p>Everyday Essentials</p><h2>Designed Around<br/><em>the Way You Live.</em></h2></div><p className={styles.sectionCopy}>Infrastructure and community features planned for secure, convenient and comfortable everyday living.</p><div className={styles.amenityGrid}>{amenities.map((amenity,index)=><article key={amenity}><span>{String(index+1).padStart(2,"0")}</span><AmenityIcon index={index}/><h3>{amenity}</h3></article>)}</div></section>

    <section className={styles.haridwarLayout} id="layout"><div className={styles.haridwarLayoutIntro}><div className={styles.sectionIntro}><p>Project Layout</p><h2>Planned with<br/><em>Clarity.</em></h2></div><div className={styles.haridwarLayoutCopy}><p>Explore the complete project site plan and review the internal road network, plotted blocks and open areas.</p><p>The layout brings together two and three-side-open residential plots, wide paved roads, green pockets and direct access towards National Highway 334.</p></div><div className={styles.haridwarLayoutFacts}><div><strong>30–40 Ft.</strong><span>Internal Roads</span></div><div><strong>2 &amp; 3 Side</strong><span>Open Plots</span></div><div><strong>NH-334</strong><span>Highway Access</span></div></div><button type="button" onClick={()=>setDocumentPreview([`${root}/site-layout-plan.png`,"Shree Hari Enclave Project Site Plan"])}>View Full Layout <span>↗</span></button></div><button type="button" className={styles.haridwarLayoutVisual} onClick={()=>setDocumentPreview([`${root}/site-layout-plan.png`,"Shree Hari Enclave Project Site Plan"])}><Image src={`${root}/site-layout-plan.png`} alt="Shree Hari Enclave project site plan" fill sizes="(max-width:900px) 100vw,50vw"/><span>Click to view full layout</span></button></section>

    <section className={styles.gallerySection} id="gallery"><div className={styles.galleryHead}><div className={styles.sectionIntro}><p>Explore the Project</p><h2>A Place Taking<br/><em>Shape in Haridwar.</em></h2></div><div><p>Explore project renders, community views and current on-site development updates.</p><small>Images and renderings are artistic impressions for representational purposes where applicable.</small></div></div><div className={styles.gallery}>{gallery.map(([name,src],index)=><button type="button" onClick={()=>setLightbox(index)} key={name}><img src={src} alt={name}/><span>{name}</span></button>)}</div></section>

    <section className={styles.location} id="location"><div className={styles.locationIntro}><div className={styles.sectionIntro}><p>Location &amp; Connectivity</p><h2>Haridwar Close.<br/><em>Everything Connected.</em></h2></div><p>Directly on NH-334 at Bahadrabad Bypass, with convenient access to Haridwar&apos;s transport, spiritual and leisure landmarks.</p><div className={styles.mapFrame}><iframe title="Shree Hari Enclave Haridwar map" src="https://www.google.com/maps?q=Bahadrabad%20Bypass%20Haridwar%20Uttarakhand&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></div><div className={styles.locationList}>{connectivity.map(([title,time],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{time}</p></div></article>)}</div></section>

    <section className={styles.whyHaridwar} id="why-haridwar"><div className={styles.whyHaridwarHead}><p>Why Choose Haridwar?</p><h2>A City of Faith.<br/><em>A Future of Growth.</em></h2><span>Haridwar combines spiritual significance, improving infrastructure and a naturally green setting with long-term real estate potential.</span></div><div className={styles.whyHaridwarGrid}>{haridwarReasons.map(([title,copy],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className={styles.enquire} id="enquire"><div><p>Contact Us</p><h2>Enquire About<br/><em>Shree Hari Enclave.</em></h2><span>Share your details and our team will help you understand current availability, the layout, payment plan and next steps.</span><div className={styles.projectContact}><a href="tel:+917290081081"><small>Call Us</small><strong>+91 72900 81081</strong></a><a href="mailto:support@haridwarplotsyojna.org"><small>Email Us</small><strong>support@haridwarplotsyojna.org</strong></a><p>Delhi–Haridwar National Highway 334, Bahadrabad Bypass, Haridwar 247667, Uttarakhand</p></div></div><form onSubmit={submitEnquiry}><label>Full Name<input name="name" type="text" placeholder="Your name" required/></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required/></label><label>Email<input name="email" type="email" placeholder="your@email.com"/></label><label className={styles.full}>Message<textarea name="message" placeholder="Tell us what you would like to know" rows={3}/></label><button className="goldButton" type="submit"><span>Send on WhatsApp</span><Arrow/></button><div className={`${styles.full} ${styles.legalLinks}`}><a href="https://haridwarplotsyojna.org/terms-conditions.php" target="_blank" rel="noreferrer">Terms &amp; Conditions</a><a href="https://haridwarplotsyojna.org/privacy-policy.php" target="_blank" rel="noreferrer">Privacy Policy</a><a href="https://haridwarplotsyojna.org/refund-cancellation.php" target="_blank" rel="noreferrer">Refund &amp; Cancellation</a></div></form></section>

    {(lightbox!==null||documentPreview!==null)&&<div className={styles.lightbox} role="dialog" aria-modal="true" onWheel={zoomPreview} onMouseDown={event=>{if(event.target===event.currentTarget)closePreview()}}><button className={styles.lightboxClose} type="button" onClick={closePreview} aria-label="Close">×</button><div className={styles.zoomLevel}>{Math.round(previewZoom*100)}% · {previewZoom>1?"Drag to move":"Scroll to zoom"}</div>{lightbox!==null&&<button className={styles.lightboxPrev} type="button" onClick={()=>changeGalleryImage((lightbox-1+gallery.length)%gallery.length)} aria-label="Previous image">‹</button>}<img className={`${previewZoom>1?styles.pannable:""} ${isDragging?styles.dragging:""}`} src={lightbox!==null?gallery[lightbox][1]:documentPreview![0]} alt={lightbox!==null?gallery[lightbox][0]:documentPreview![1]} style={{transform:`translate3d(${previewPan.x}px,${previewPan.y}px,0) scale(${previewZoom})`}} onPointerDown={startPan} onPointerMove={movePan} onPointerUp={stopPan} onPointerCancel={stopPan} draggable={false}/>{lightbox!==null&&<button className={styles.lightboxNext} type="button" onClick={()=>changeGalleryImage((lightbox+1)%gallery.length)} aria-label="Next image">›</button>}<span>{lightbox!==null?gallery[lightbox][0]:documentPreview![1]}</span></div>}
    <SiteFooter/><PageEnhancements scope=".projectDetailMotion" variant="editorial"/>
  </main>
}
