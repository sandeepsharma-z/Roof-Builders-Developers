"use client";

import Image from "next/image";
import { useState } from "react";
import { BadgeCheck, BriefcaseBusiness, Building2, FileText, LockKeyhole, Mail, MapPin, Phone, User, Users } from "lucide-react";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "./partner.module.css";

function Arrow(){return <span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"/></svg></span>}

export default function BecomePartnerPage(){
  const [photoName,setPhotoName]=useState("");
  const [photoError,setPhotoError]=useState("");
  const [rmName,setRmName]=useState("");
  const rmCodes:Record<string,string>={
    "abhilasha negi":"714",
    "satya narayan":"714",
    "prashant sharma":"715",
  };
  const rmCode=rmCodes[rmName.trim().replace(/\s+/g," ").toLowerCase()]??"";
  return <main className={`${styles.page} ${styles.partnerPage}`}>
    <SiteHeader active="Become a Partner"/>
    <section className={styles.hero}><Image src="/become-partner-hero-v2.png" alt="ROOF channel partners reviewing a plotted development" fill priority sizes="100vw"/><div className={styles.heroShade}/><div className={styles.heroContent}><p>Channel Partner Network</p><h1>Build Opportunities.<br/><em>Grow with ROOF.</em></h1><span>Join a partnership built on clear communication, quality projects and long-term value.</span></div></section>
    <section className={styles.registration} id="registration">
      <div className={styles.intro}><p>Join Our Partner Network</p><h2>Interested in growing with us?</h2><span>Complete the form below to become a Roof channel partner. Our team will review your details and get in touch with you.</span></div>
      <form className={styles.form} onSubmit={(event)=>event.preventDefault()}>
        <div className={styles.grid}>
          <label><span>Channel Partner Name <b>*</b></span><div className={styles.control}><User/><input name="partnerName" placeholder="Enter your full name" autoComplete="name" required/></div></label>
          <label><span>Phone Number <b>*</b></span><div className={styles.control}><Phone/><input name="phone" type="tel" placeholder="+91 88888 88888" autoComplete="tel" required/></div></label>
          <label><span>Email Address <b>*</b></span><div className={styles.control}><Mail/><input name="email" type="email" placeholder="example@email.com" autoComplete="email" required/></div></label>
          <label><span>Company Name <b>*</b></span><div className={styles.control}><Building2/><input name="company" placeholder="Company name or individual" autoComplete="organization" required/></div></label>
          <label><span>Company Director Name <b>*</b></span><div className={styles.control}><User/><input name="director" placeholder="Enter director name" required/></div></label>
          <label><span>GSTIN No.</span><div className={styles.control}><FileText/><input name="gstin" placeholder="Enter GSTIN number" maxLength={15}/></div></label>
          <label><span>RERA No.</span><div className={styles.control}><BadgeCheck/><input name="rera" placeholder="Enter RERA number"/></div></label>
          <label><span>Team Size</span><div className={styles.control}><Users/><input name="teamSize" type="number" min={1} placeholder="Number of team members"/></div></label>
          <label><span>Experience in Real Estate</span><div className={styles.control}><BriefcaseBusiness/><input name="experience" type="number" min={0} max={80} placeholder="Total experience in years"/></div></label>
          <label><span>Office Address <b>*</b></span><div className={styles.control}><MapPin/><input name="address" placeholder="Enter your office address" autoComplete="street-address" required/></div></label>
          <label className={`${styles.wide} ${styles.upload}`}><span>Channel Partner Photo <b>*</b></span><div><input name="photo" type="file" accept="image/png,image/jpeg,image/webp" required onChange={(event)=>{const file=event.target.files?.[0];if(file&&file.size>5*1024*1024){event.target.value="";setPhotoName("");setPhotoError("Photo must be smaller than 5 MB.");return}setPhotoName(file?.name??"");setPhotoError("")}}/><i aria-hidden="true">＋</i><p><strong>{photoName||"Upload your photo"}</strong><small>JPG, PNG or WEBP · Max 5 MB</small></p><em>Browse File</em></div>{photoError&&<small className={styles.fieldError}>{photoError}</small>}</label>
          <label><span>Your RM Name <b>*</b></span><div className={styles.control}><User/><input name="rmName" placeholder="Enter RM name" list="assigned-rm-names" value={rmName} onChange={(event)=>setRmName(event.target.value)} required/></div><datalist id="assigned-rm-names"><option value="Abhilasha Negi"/><option value="Satya Narayan"/><option value="Prashant Sharma"/></datalist></label>
          {rmCode&&<label><span>Your RM Code</span><div className={styles.control}><FileText/><input name="rnaCode" value={`RM–${rmCode}`} readOnly aria-readonly="true"/></div></label>}
        </div>
        <label className={styles.consent}><input type="checkbox" name="consent" required/><i aria-hidden="true">✓</i><span>I confirm that the information provided above is accurate.</span></label>
        <footer><p><LockKeyhole/> Your information is private and secure.</p><button className="goldButton" type="submit"><span>Submit Registration</span><Arrow/></button></footer>
      </form>
    </section>
    <SiteFooter/>
  </main>
}
