"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Baby, Cctv, Droplets, Fence, Lightbulb, Route, ShieldCheck, Trees, Waves, Zap } from "lucide-react";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import PageEnhancements from "../../PageEnhancements";
import styles from "./project.module.css";

const amenities=["Street Lights","Parks & Green Area","Electricity","Gated Community","Children Play Area","CCTV Surveillance","24×7 Security","Water Supply","Wide Roads","Sewerage System"];
const gallery=[
  ["Grand Entrance","/project-gallery/south-entrance.webp"],
  ["Landscaped Community","/projects/south-city-greens/hero-township.jpg"],
  ["Green Residential Enclave","/projects/south-city-greens/community-aerial.jpg"],
  ["Jogging Track","/project-gallery/south-jogging.webp"],
  ["Children Play Area","/project-gallery/south-play.webp"],
  ["Sports Area","/project-gallery/south-sports.webp"],
];
const connectivity=[
  ["Jhajjar Railway Station","2 km"],
  ["Bus Stand, Jhajjar","3 km"],
  ["Reliance MET City","17 km"],
  ["Bahadurgarh","25 km"],
  ["AIIMS Jhajjar","30 km"],
  ["Gurugram","37 km"],
  ["Delhi (Dwarka)","45 km"],
  ["IGI Airport, Delhi","49 km"],
];

function Arrow(){return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"/></svg></span>}
const amenityIcons=[Lightbulb,Trees,Zap,Fence,Baby,Cctv,ShieldCheck,Droplets,Route,Waves];
function AmenityIcon({index}:{index:number}){const Icon=amenityIcons[index];return <Icon aria-hidden="true"/>}

export default function SouthCityGreensPage(){
  const [lightbox,setLightbox]=useState<number|null>(null);
  const [documentPreview,setDocumentPreview]=useState<[string,string]|null>(null);
  const [previewZoom,setPreviewZoom]=useState(1);
  const [previewPan,setPreviewPan]=useState({x:0,y:0});
  const [isDragging,setIsDragging]=useState(false);
  const dragStart=useRef({x:0,y:0,panX:0,panY:0});
  useEffect(()=>{if(lightbox===null&&documentPreview===null)return;const close=(event:KeyboardEvent)=>{if(event.key==="Escape"){setLightbox(null);setDocumentPreview(null)}if(lightbox!==null&&event.key==="ArrowRight")setLightbox((lightbox+1)%gallery.length);if(lightbox!==null&&event.key==="ArrowLeft")setLightbox((lightbox-1+gallery.length)%gallery.length)};document.body.style.overflow="hidden";window.addEventListener("keydown",close);return()=>{document.body.style.overflow="";window.removeEventListener("keydown",close)}},[lightbox,documentPreview]);
  const submitEnquiry=(event:React.FormEvent<HTMLFormElement>)=>{event.preventDefault();const data=new FormData(event.currentTarget);const message=["South City Greens Enquiry",`Name: ${data.get("name")}`,`Phone: ${data.get("phone")}`,`Email: ${data.get("email")||"Not provided"}`,`Message: ${data.get("message")||"Please share project details."}`].join("\n");window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`,"_blank","noopener,noreferrer")};
  const resetPreviewTransform=()=>{setPreviewZoom(1);setPreviewPan({x:0,y:0});setIsDragging(false)};
  const closePreview=()=>{setLightbox(null);setDocumentPreview(null);resetPreviewTransform()};
  const changeGalleryImage=(next:number)=>{setLightbox(next);resetPreviewTransform()};
  const zoomPreview=(event:React.WheelEvent<HTMLDivElement>)=>{event.preventDefault();setPreviewZoom((current)=>{const next=Math.min(4,Math.max(1,current+(event.deltaY<0?.2:-.2)));if(next===1)setPreviewPan({x:0,y:0});return next})};
  const startPan=(event:React.PointerEvent<HTMLImageElement>)=>{if(previewZoom===1)return;event.currentTarget.setPointerCapture(event.pointerId);dragStart.current={x:event.clientX,y:event.clientY,panX:previewPan.x,panY:previewPan.y};setIsDragging(true)};
  const movePan=(event:React.PointerEvent<HTMLImageElement>)=>{if(!isDragging)return;setPreviewPan({x:dragStart.current.panX+event.clientX-dragStart.current.x,y:dragStart.current.panY+event.clientY-dragStart.current.y})};
  const stopPan=(event:React.PointerEvent<HTMLImageElement>)=>{if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);setIsDragging(false)};
  return <main className={`${styles.page} projectDetailMotion`}>
    <SiteHeader active="Properties"/>
    <section className={styles.hero} id="top">
      <Image src="/roof-assets-infra-featured-properties/south-city-greens-sector-36-jhajjar/featured.webp" alt="South City Greens Sector 36, Jhajjar" fill priority sizes="100vw"/><div className={styles.heroShade}/><div className={styles.heroGrid}/>
      <div className={styles.heroContent}><p>Sector 36 · Jhajjar, Haryana</p><h1>South City<br/><em>Greens.</em></h1><span>Premium residential plotted township by Cellular Realty</span><div className={styles.heroActions}><a className="goldButton" href="#enquire"><span>Enquire Now</span><Arrow/></a><a className={styles.outline} href="/brochures/south-city-greens-brochure.pdf" download>Download Brochure <span>↗</span></a></div></div>
      <div className={styles.heroStamp}><span>RERA Registered</span><strong>HRERA-PKL-JJR-949-2026</strong></div>
    </section>

    <nav className={styles.projectNav}><a href="#overview">Overview</a><a href="#amenities">Amenities</a><a href="#floor-plans">Layout</a><a href="#gallery">Gallery</a><a href="#master-plan">Master Plan</a><a href="#location">Location</a><a href="#enquire">Enquire</a></nav>

    <section className={styles.overview} id="overview"><div className={styles.overviewStory}><div className={styles.sectionIntro}><p>Project Overview</p><h2>Your Legacy<br/><em>Begins Here.</em></h2></div><div className={styles.overviewCopy}><p className={styles.lead}>Twenty acres of open space, engineered infrastructure and plotted living shaped for the long run.</p><p>Developed by Cellular Realty under the Deen Dayal Jan Awas Yojana, South City Greens offers 380 residential plots in a secure, thoughtfully planned community.</p><p>Wide internal roads, landscaped green pockets, daily conveniences and community spaces come together at a well-connected Sector 36 address on the 75-metre Jhajjar Ring Road.</p></div><a className="goldButton" href="/brochures/south-city-greens-brochure.pdf" download><span>Download Project Brochure</span><Arrow/></a><div className={styles.overviewFacts}><div><strong>20</strong><span>Acres</span></div><div><strong>380</strong><span>Exclusive Plots</span></div><div><strong>90–180</strong><span>Sq. Yd. Plot Sizes</span></div></div></div><div className={styles.overviewVisual}><Image src="/projects/south-city-greens/hero-township.jpg" alt="Artistic impression of the South City Greens plotted community" fill sizes="(max-width:900px) 92vw,50vw"/><span>Artistic Impression · South City Greens</span></div></section>

    <section className={styles.trustStrip} aria-label="Project credentials"><article><span>Developer</span><strong>Cellular Realty</strong></article><article><span>Scheme</span><strong>DDJAY</strong></article><article><span>DTCP Licence</span><strong>No. 84 of 2026</strong></article><article><span>RERA Registration</span><strong>HRERA-PKL-JJR-949-2026</strong></article></section>

    <section className={styles.amenities} id="amenities"><div className={styles.sectionIntro}><p>Everyday Essentials</p><h2>Designed Around<br/><em>the Way You Live.</em></h2></div><p className={styles.sectionCopy}>Features considered to make everyday living as effortless, secure and comfortable as possible.</p><div className={styles.amenityGrid}>{amenities.map((amenity,index)=><article key={amenity}><span>{String(index+1).padStart(2,"0")}</span><AmenityIcon index={index}/><h3>{amenity}</h3></article>)}</div></section>

    <section className={styles.plans} id="floor-plans"><button type="button" className={styles.planVisual} onClick={()=>setDocumentPreview(["/project-gallery/south-layout.png","South City Greens Project Layout"])} aria-label="Open project layout fullscreen"><Image src="/project-gallery/south-layout.png" alt="South City Greens project layout" fill sizes="(max-width:850px) 92vw,55vw"/><span className={styles.zoomHint}>View Fullscreen</span></button><div className={styles.planContent}><div className={styles.sectionIntro}><p>Project Layout</p><h2>Planned for<br/><em>Connected Living.</em></h2></div><p>A considered township layout brings together residential plots, green spaces, internal circulation and neighbourhood conveniences.</p><div className={styles.specs}><div><span>Property Type</span><strong>Residential Plots</strong></div><div><span>Location</span><strong>Sector 36, Jhajjar</strong></div><div><span>Community</span><strong>Secure Gated Township</strong></div><div><span>RERA No.</span><strong>HRERA-PKL-JJR-949-2026</strong></div></div><a className="goldButton" href="#enquire"><span>Request Detailed Plan</span><Arrow/></a></div></section>

    <section className={styles.gallerySection} id="gallery"><div className={styles.galleryHead}><div className={styles.sectionIntro}><p>Explore the Township</p><h2>Land with a Vision.<br/><em>Places with Potential.</em></h2></div><div><p>Discover the entrance, landscape and recreation spaces that shape South City Greens.</p><small>Images and renderings are artistic impressions for representational purposes.</small></div></div><div className={styles.gallery}>{gallery.map(([name,src],index)=><button type="button" onClick={()=>setLightbox(index)} key={name}><img src={src} alt={name}/><span>{name}</span></button>)}</div></section>

    <section className={styles.masterPlan} id="master-plan"><div className={styles.masterPlanHeading}><p>Jhajjar Master Plan</p><h2>Positioned at the<br/><em>Edge of Tomorrow.</em></h2></div><button type="button" className={styles.masterPlanVisual} onClick={()=>setDocumentPreview(["/project-gallery/south-jhajjar-master-plan.webp","Jhajjar Master Plan · Sector 36"])} aria-label="Open Jhajjar master plan fullscreen"><Image src="/project-gallery/south-jhajjar-master-plan.webp" alt="Jhajjar master plan highlighting Sector 36 and surrounding connectivity" fill sizes="100vw"/><span>Jhajjar Master Plan · Sector 36</span><i className={styles.zoomHint}>View Fullscreen</i></button></section>

    <section className={styles.location} id="location"><div className={styles.locationIntro}><div className={styles.sectionIntro}><p>Location &amp; Connectivity</p><h2>Well Connected.<br/><em>Clearly Positioned.</em></h2></div><p>Sector 36, Jhajjar—connected to the 75-metre Jhajjar Ring Road with convenient access to social infrastructure and a fast-evolving residential corridor.</p><div className={styles.mapFrame}><iframe title="South City Greens Sector 36 Jhajjar map" src="https://www.google.com/maps?q=South%20City%20Greens%20Sector%2036%20Jhajjar&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></div><div className={styles.locationList}>{connectivity.map(([title,places],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><h3>{title}</h3><p>{places}</p></div></article>)}</div></section>

    <section className={styles.enquire} id="enquire"><div><p>Private Consultation</p><h2>Enquire About<br/><em>South City Greens.</em></h2><span>Share your details and our team will help you understand current availability, the master plan and next steps.</span></div><form onSubmit={submitEnquiry}><label>Full Name<input name="name" type="text" placeholder="Your name" required/></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required/></label><label>Email<input name="email" type="email" placeholder="your@email.com"/></label><label className={styles.full}>Message<textarea name="message" placeholder="Tell us what you would like to know" rows={3}/></label><button className="goldButton" type="submit"><span>Send on WhatsApp</span><Arrow/></button></form></section>

    {(lightbox!==null||documentPreview!==null)&&<div className={styles.lightbox} role="dialog" aria-modal="true" onWheel={zoomPreview} onMouseDown={(event)=>{if(event.target===event.currentTarget)closePreview()}}><button className={styles.lightboxClose} type="button" onClick={closePreview} aria-label="Close">×</button><div className={styles.zoomLevel}>{Math.round(previewZoom*100)}% · {previewZoom>1?"Drag to move":"Scroll to zoom"}</div>{lightbox!==null&&<button className={styles.lightboxPrev} type="button" onClick={()=>changeGalleryImage((lightbox-1+gallery.length)%gallery.length)} aria-label="Previous image">‹</button>}<img className={`${previewZoom>1?styles.pannable:""} ${isDragging?styles.dragging:""}`} src={lightbox!==null?gallery[lightbox][1]:documentPreview![0]} alt={lightbox!==null?gallery[lightbox][0]:documentPreview![1]} style={{transform:`translate3d(${previewPan.x}px,${previewPan.y}px,0) scale(${previewZoom})`}} onPointerDown={startPan} onPointerMove={movePan} onPointerUp={stopPan} onPointerCancel={stopPan} draggable={false}/>{lightbox!==null&&<button className={styles.lightboxNext} type="button" onClick={()=>changeGalleryImage((lightbox+1)%gallery.length)} aria-label="Next image">›</button>}<span>{lightbox!==null?gallery[lightbox][0]:documentPreview![1]}</span></div>}
    <SiteFooter/><PageEnhancements scope=".projectDetailMotion" variant="editorial"/>
  </main>
}
