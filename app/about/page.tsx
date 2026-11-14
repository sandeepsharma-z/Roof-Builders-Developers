import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageEnhancements from "../PageEnhancements";

export const metadata: Metadata = {
  title: "About ROOF | Builders & Developers",
  description: "Discover ROOF's considered approach to property discovery, developer access and informed real estate decisions.",
};

const principles = [
  ["01", "Clarity First", "Straightforward conversations, relevant information and a process that keeps every decision understandable."],
  ["02", "Considered Choice", "Opportunities are viewed through location, lifestyle, suitability and long-term relevance—not noise."],
  ["03", "People at the Centre", "Every search begins with how someone wants to live, work or invest, then builds outward from there."],
];

const journey = [
  ["Listen", "We begin with your priorities, preferred locations and the outcome you want from the property."],
  ["Curate", "We narrow the market into a focused selection that is easier to compare and understand."],
  ["Evaluate", "Projects are discussed through practical details, context and fit—not just surface-level appeal."],
  ["Support", "From visits to the next conversation, our role is to keep the journey clear and considered."],
];

export default function AboutPage() {
  return (
    <main className={`${styles.page} aboutMotion`}>
      <SiteHeader active="About Us" />

      <section className={styles.hero}>
        <Image src="/luxury-villa-hero-2.png" alt="Contemporary residence surrounded by landscape" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroContent}>
          <p>About ROOF</p>
          <h1>Property, Seen<br />with <em>Perspective.</em></h1>
          <div className={styles.heroFoot}>
            <span>Gurugram · Haryana · India</span>
            <p>We help people move through property decisions with greater clarity, better context and a more considered point of view.</p>
          </div>
        </div>
        <a className={styles.scrollCue} href="#story" aria-label="Discover our story"><span>↓</span> Our Story</a>
      </section>

      <section className={styles.story} id="story">
        <div className={styles.storyIntro}>
          <p className={styles.eyebrow}>A Considered Point of View</p>
          <h2>Beyond Listings.<br /><em>Closer to What Matters.</em></h2>
        </div>
        <div className={styles.storyCopy}>
          <p className={styles.lead}>ROOF is built around a simple belief: finding property should feel informed, personal and clear.</p>
          <p>We bring together relevant opportunities, established developer access and grounded guidance so buyers and investors can look beyond crowded choices and focus on what genuinely fits.</p>
          <Link href="/#projects">Explore Properties <span>→</span></Link>
        </div>
        <div className={styles.storyGallery}>
          <div className={styles.storyMain}><Image src="/signature-living-room.png" alt="Refined contemporary living space" fill sizes="(max-width: 850px) 92vw, 58vw" /><span className={styles.storyWordOnImage} aria-hidden="true">ROOF</span></div>
          <div className={styles.storySmall}><Image src="/signature-courtyard.png" alt="Quiet landscaped courtyard" fill sizes="(max-width: 850px) 45vw, 25vw" /></div>
          <span className={styles.storyWord}>ROOF</span>
        </div>
      </section>

      <section className={styles.purpose}>
        <div className={styles.purposeIntro}><p className={styles.eyebrow}>Our Purpose</p><h2>What We Stand For.<br /><em>Where We Are Going.</em></h2></div>
        <div className={styles.purposeCards}>
          <article><span>01 / Mission</span><h3>Make Property Decisions Feel Clearer.</h3><p>Our mission is to connect people with relevant real estate opportunities through focused discovery, transparent conversations and dependable support at every meaningful step.</p></article>
          <article><span>02 / Vision</span><h3>Become a Trusted Point of View in Real Estate.</h3><p>Our vision is a property journey where buyers and investors can move forward with greater context, confidence and access to addresses that genuinely fit their ambitions.</p></article>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={styles.manifestoImage}><Image src="/roof-business-park.png" alt="Contemporary commercial architecture" fill sizes="50vw" /></div>
        <div className={styles.manifestoContent}>
          <p className={styles.eyebrow}>Our Role</p>
          <h2>We Don&apos;t Add More Choice.<br /><em>We Add Meaning to It.</em></h2>
          <p>Real estate is full of options. Our value is in helping make sense of them—connecting requirements with relevant locations, property types and developer offerings.</p>
          <blockquote>“A remarkable address begins with a well-considered decision.”</blockquote>
        </div>
      </section>

      <section className={styles.principles} id="why-roof">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>What Guides Us</p><h2>Principles That Shape<br /><em>Every Conversation.</em></h2></div>
        <div className={styles.principleGrid}>
          {principles.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i /></article>)}
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processVisual}>
          <Image src="/rooftop-terrace.png" alt="Landscaped rooftop terrace" fill sizes="(max-width: 850px) 100vw, 46vw" />
          <div><span>ROOF</span><p>Thoughtful at<br />every step.</p></div>
        </div>
        <div className={styles.processContent}>
          <p className={styles.eyebrow}>Your Journey With ROOF</p>
          <h2>From Land to Landmark.<br /><em>A Clearer Journey.</em></h2>
          <div className={styles.steps}>{journey.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      <SiteFooter />
      <PageEnhancements scope=".aboutMotion" variant="editorial" />
    </main>
  );
}
