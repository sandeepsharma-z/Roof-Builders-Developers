"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageEnhancements from "./PageEnhancements";
import styles from "./plots/plots.module.css";

export type ArchiveProperty = { name:string; location:string; area:string; price:string; priceLakh:number; image:string; href:string; tag:string };
type ArchiveProps = { eyebrow:string; title:string; scriptTitle:string; heroCopy:string; heroImage:string; sectionEyebrow:string; sectionTitle:string; sectionScript:string; sectionCopy:string; resultLabel:string; ctaEyebrow?:string; ctaTitle?:string; ctaScript?:string; ctaCopy?:string; properties:ArchiveProperty[]; inventoryFilters?:boolean };

function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>}
function PinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>}
function BuildingIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="9" width="16" height="12" rx="1"/><path d="M8 21V5l4-2 4 2v16M8 9h8M12 3v6M8 13h2m4 0h2M8 17h2m4 0h2"/></svg>}
function StatusIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>}

export default function PropertyArchive(props:ArchiveProps){
  const [search,setSearch]=useState("");
  const [location,setLocation]=useState("All Locations");
  const [budget,setBudget]=useState("Any Budget");
  const [project,setProject]=useState("All Projects");
  const [status,setStatus]=useState("All Status");
  const [sort,setSort]=useState("Featured");
  const locations=useMemo(()=>[...new Set(props.properties.map((property)=>property.location))],[props.properties]);
  const results=useMemo(()=>{
    const limits:Record<string,[number,number]>={"Under ₹50 Lakh":[0,50],"₹50–75 Lakh":[50,75],"₹75 Lakh–1 Cr":[75,100],"Above ₹1 Cr":[100,Infinity]};
    let next=props.properties.filter((property)=>{const query=search.trim().toLowerCase();const range=limits[budget];const propertyStatus=property.tag.includes("Ongoing")?"Ongoing":property.tag.includes("Upcoming")?"Upcoming":"";return(!query||`${property.name} ${property.location} ${property.area}`.toLowerCase().includes(query))&&(project==="All Projects"||property.name===project)&&(location==="All Locations"||property.location===location)&&(status==="All Status"||propertyStatus===status)&&(!range||(property.priceLakh>=range[0]&&property.priceLakh<=range[1]))});
    if(sort==="Price: Low to High")next=[...next].sort((a,b)=>a.priceLakh-b.priceLakh);
    if(sort==="Price: High to Low")next=[...next].sort((a,b)=>b.priceLakh-a.priceLakh);
    return next;
  },[props.properties,search,project,location,status,budget,sort]);
  const reset=()=>{setSearch("");setProject("All Projects");setLocation("All Locations");setStatus("All Status");setBudget("Any Budget");setSort("Featured")};
  const chooseProject=(value:string)=>{setProject(value);if(value==="All Projects"){setLocation("All Locations");setStatus("All Status");return}const match=props.properties.find((property)=>property.name===value);if(match){setLocation(match.location);setStatus(match.tag.includes("Ongoing")?"Ongoing":"Upcoming")}};
  const chooseLocation=(value:string)=>{setLocation(value);if(value==="All Locations"){setProject("All Projects");return}const matches=props.properties.filter((property)=>property.location===value);setProject(matches.length===1?matches[0].name:"All Projects");if(matches.length===1)setStatus(matches[0].tag.includes("Ongoing")?"Ongoing":"Upcoming")};
  const chooseStatus=(value:string)=>{setStatus(value);if(value==="All Status"){setProject("All Projects");setLocation("All Locations");return}const matches=props.properties.filter((property)=>property.tag.includes(value));if(matches.length===1){setProject(matches[0].name);setLocation(matches[0].location)}else{setProject("All Projects");setLocation("All Locations")}};

  return <main className={`${styles.page} ${props.inventoryFilters ? styles.propertiesPage : ""} propertyArchiveMotion`}>
    <SiteHeader active="Properties"/>
    <section className={styles.hero}>
      <Image src={props.heroImage} alt="" fill priority sizes="100vw"/><div className={styles.heroShade}/><div className={styles.heroLines} aria-hidden="true"/>
      <div className={styles.heroContent}><p>{props.eyebrow}</p><h1>{props.title}<br/><em>{props.scriptTitle}</em></h1><div className={styles.heroFoot}><span>Curated by ROOF</span><p>{props.heroCopy}</p></div></div>
      <a className={styles.scrollCue} href="#explore"><span>↓</span> Explore Properties</a>
    </section>
    <section className={styles.discovery} id="explore">
      <div className={styles.intro}><div><p className={styles.eyebrow}>{props.sectionEyebrow}</p><h2>{props.sectionTitle}<br/><em>{props.sectionScript}</em></h2></div><p>{props.sectionCopy}</p></div>
      <div className={`${styles.filters} ${props.inventoryFilters?styles.inventoryFilters:""}`}>
        {props.inventoryFilters&&<><label><i className="filterIcon"><BuildingIcon/></i><div><span className={styles.inventoryLabel}>Select a Project</span><select value={project} onChange={(event)=>chooseProject(event.target.value)}><option>All Projects</option>{props.properties.map((property)=><option key={property.name}>{property.name}</option>)}</select></div></label><label><i className="filterIcon"><PinIcon/></i><div><span className={styles.inventoryLabel}>Location</span><select value={location} onChange={(event)=>chooseLocation(event.target.value)}><option>All Locations</option>{locations.map((item)=><option key={item}>{item}</option>)}</select></div></label><label><i className="filterIcon"><StatusIcon/></i><div><span className={styles.inventoryLabel}>Status</span><select value={status} onChange={(event)=>chooseStatus(event.target.value)}><option>All Status</option><option>Ongoing</option><option>Upcoming</option></select></div></label><button className={`searchButton ${styles.inventorySearchButton}`} type="button" onClick={()=>document.getElementById("archive-results")?.scrollIntoView({behavior:"smooth",block:"start"})}><SearchIcon/> Search Properties</button></>}
        <label className={styles.search}><span>Search a project</span><div><SearchIcon/><input value={search} onChange={(event)=>setSearch(event.target.value)} placeholder="Project, sector or city"/></div></label>
        <label><span>Location</span><select value={location} onChange={(event)=>setLocation(event.target.value)}><option>All Locations</option>{locations.map((item)=><option key={item}>{item}</option>)}</select></label>
        <label><span>Budget</span><select value={budget} onChange={(event)=>setBudget(event.target.value)}><option>Any Budget</option><option>Under ₹50 Lakh</option><option>₹50–75 Lakh</option><option>₹75 Lakh–1 Cr</option><option>Above ₹1 Cr</option></select></label>
        <button type="button" onClick={reset}>Reset filters <span>↺</span></button>
      </div>
      <div className={styles.resultBar} id="archive-results"><p><strong>{String(results.length).padStart(2,"0")}</strong> {props.resultLabel}</p><label>Sort by <select value={sort} onChange={(event)=>setSort(event.target.value)}><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></label></div>
      {results.length?<div className={styles.grid}>{results.map((property)=><article className={styles.card} key={`${property.name}-${property.area}`}><a className={styles.cardImage} href={property.href} target={property.href.startsWith("/")?undefined:"_blank"} rel={property.href.startsWith("/")?undefined:"noreferrer"}><Image src={property.image} alt={property.name} fill sizes="(max-width:700px) 92vw,(max-width:1100px) 45vw,30vw"/><span>{property.tag}</span></a><div className={styles.cardBody}><p><PinIcon/> {property.area}, {property.location}</p><h3>{property.name}</h3><div className={styles.cardFoot}><div><small>Starting from</small><strong>{property.price}</strong></div><a href={property.href} target={property.href.startsWith("/")?undefined:"_blank"} rel={property.href.startsWith("/")?undefined:"noreferrer"} aria-label={`View ${property.name}`}>↗</a></div></div></article>)}</div>:<div className={styles.empty}><span>00</span><h3>No matching properties found.</h3><p>Try a different location, budget or project name.</p><button type="button" onClick={reset}>Clear all filters</button></div>}
    </section>
    {props.ctaEyebrow&&props.ctaTitle&&props.ctaScript&&props.ctaCopy&&<section className={styles.advisory}><div><p className={styles.eyebrow}>{props.ctaEyebrow}</p><h2>{props.ctaTitle}<br/><em>{props.ctaScript}</em></h2></div><div><p>{props.ctaCopy}</p><Link className={`goldButton ${styles.advisoryButton}`} href="/#contact"><span>Speak with ROOF</span><span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"/></svg></span></Link></div></section>}
    <SiteFooter/><PageEnhancements scope=".propertyArchiveMotion" variant="editorial"/>
  </main>
}
