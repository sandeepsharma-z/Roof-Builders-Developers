import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageEnhancements from "../PageEnhancements";
import styles from "./why-roof.module.css";

export const metadata: Metadata = {
  title: "Why ROOF | Builders & Developers",
  description: "Discover the clarity, access and dependable guidance that make ROOF a considered real estate partner.",
};

const reasons = [
  { number: "01", title: "Clarity Before Commitment", copy: "We explain the opportunity, its context and the important details in straightforward language so every decision begins with understanding." },
  { number: "02", title: "Relevant, Curated Choice", image: "/why-roof-architectural-bg.png", copy: "Instead of adding more noise, we focus on properties aligned with your location, purpose, budget and long-term priorities." },
  { number: "03", title: "Grounded Market Context", image: "/why-roof-architectural-bg.png", copy: "Location, connectivity, development potential and practical suitability are considered together—not as isolated selling points." },
  { number: "04", title: "Support Beyond Discovery", copy: "From shortlisting and site visits to documentation conversations, our team remains accessible through every meaningful next step." },
];

const journey = [
  { title: "Understand", copy: "Your goals, preferred locations and investment horizon come first.", image: "/signature-living-room.png" },
  { title: "Shortlist", copy: "We curate relevant opportunities and remove unnecessary complexity.", image: "/category-plot.webp" },
  { title: "Evaluate", copy: "Each option is discussed through practical facts, fit and future relevance.", image: "/roof-floor-plan.png" },
  { title: "Move Forward", copy: "We coordinate visits and support the path towards a confident decision.", image: "/south-city-greens.webp" },
];

function ReasonIcon({ index }: { index: number }) {
  const icons = [
    <><rect x="6" y="3" width="12" height="18" rx="1" /><path d="M9 7h6M9 11h6M9 15h4" /></>,
    <><path d="m3 11 9-8 9 8" /><path d="M5.5 9.5V21h13V9.5M9.5 21v-7h5v7" /></>,
    <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 21v-2c0-3 2.2-5 6-5s6 2 6 5v2M15 14c3.3-.5 6 1.4 6 4.5V21" /></>,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[index]}</svg>;
}

export default function WhyRoofPage() {
  return (
    <main className={`${styles.page} whyRoofMotion`}>
      <SiteHeader active="Why ROOF" />

      <section className={styles.hero}>
        <Image src="/signature-courtyard.png" alt="Considered contemporary living by ROOF" fill priority sizes="100vw" />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Why ROOF</p>
          <h1>A Better Property Decision Begins with <em>Better Guidance.</em></h1>
          <div className={styles.heroFoot}>
            <span>Soch · Niyat · Bharosa</span>
            <p>We bring clarity, relevant access and dependable support to a decision that deserves more than a list of options.</p>
          </div>
        </div>
        <a className={styles.scrollCue} href="#why-choose-roof"><span>↓</span> Discover Why</a>
      </section>

      <section className={styles.intro} id="why-choose-roof">
        <div>
          <p className={styles.eyebrow}>The ROOF Difference</p>
          <h2>Less Noise.<br /><em>More Perspective.</em></h2>
        </div>
        <div className={styles.introCopy}>
          <p>Property decisions can feel crowded with choices, claims and information. ROOF creates a clearer way through.</p>
          <p>We listen before we recommend, bring relevant opportunities into focus and help every client understand not only what a property offers, but why it may be right for them.</p>
        </div>
      </section>

      <section className={styles.reasons}>
        <Image className={styles.reasonBackdrop} src="/why-roof-architectural-bg.png" alt="Luxury architectural setting representing the ROOF approach" fill sizes="100vw" />
        <div className={styles.reasonLeft}>
          <Image src="/roof-logo-white.png" alt="Roof Builders & Developers" width={210} height={85} />
          <span className={styles.reasonLine} />
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>Why Clients Choose Us</p>
            <h2><span>Considered at Every Step.</span><em>Committed at Every Stage.</em></h2>
          </div>
        </div>
        <div className={styles.reasonCards}>
          {reasons.map((reason, index) => <article className={reason.image ? `${styles.reasonCardWithImage} ${index === 1 ? styles.imageCurveTop : styles.imageCurveBottom}` : undefined} key={reason.number}>
            {reason.image && <div className={styles.reasonCardImage}><Image src={reason.image} alt="" fill sizes="(max-width: 580px) 30vw, 14vw" /></div>}
            <div className={styles.reasonCardTop}><span>{reason.number}</span><i><ReasonIcon index={index} /></i></div>
            <h3>{reason.title}</h3><p>{reason.copy}</p><b />
          </article>)}
        </div>
      </section>

      <section className={styles.guidance}>
        <div className={styles.guidanceImage}><Image src="/signature-living-room.png" alt="Refined residential space representing the ROOF experience" fill sizes="(max-width: 850px) 100vw, 50vw" /></div>
        <div className={styles.guidanceContent}>
          <p className={styles.eyebrow}>Guidance with Intent</p>
          <h2>Property Is Personal.<br /><em>Our Approach Is Too.</em></h2>
          <p>No two requirements are identical. We shape the conversation around what matters to you—whether that is a home, a plotted opportunity, a commercial address or a long-term investment.</p>
          <blockquote>“The right opportunity becomes clearer when someone takes the time to understand the reason behind your search.”</blockquote>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processIntro}>
          <p className={styles.eyebrow}>Our Process</p>
          <h2>A Clearer Journey,<br /><em>From First Conversation.</em></h2>
          <p>Our process keeps attention on the decisions that matter, with context and support carried through every stage.</p>
        </div>
        <div className={styles.journeyFlow}>
          <svg className={styles.journeyPath} viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true"><path d="M-20 150 C108 105 192 105 285 150 S490 195 600 150 S798 105 900 150 S1092 195 1220 150" /><circle cx="286" cy="150" r="6" /><circle cx="600" cy="150" r="6" /><circle cx="900" cy="150" r="6" /></svg>
          {journey.map((step, index) => <article className={styles[`journeyStep${index + 1}`]} key={step.title}>
            <span className={styles.journeyNumber}>0{index + 1}</span>
            <div className={styles.journeyImage}><Image src={step.image} alt={`${step.title} stage of the ROOF property journey`} fill sizes="(max-width: 700px) 150px, 13vw" /></div>
            <div className={styles.journeyCopy}><h3>{step.title}</h3><b /><p>{step.copy}</p></div>
          </article>)}
        </div>
      </section>

      <SiteFooter />
      <PageEnhancements scope=".whyRoofMotion" variant="editorial" />
    </main>
  );
}
