import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import PageEnhancements from "../PageEnhancements";
import styles from "./directors.module.css";

export const metadata: Metadata = {
  title: "Director's Desk | ROOF Builders & Developers",
  description: "A message from Mr. Lokesh Gidwani, Founder and CEO of ROOF Builders & Developers.",
};

export default function DirectorsDeskPage() {
  return <main className={`${styles.page} directorMotion`}>
    <SiteHeader active="Director's Desk" />
    <section className={styles.masthead}>
      <div className={styles.portrait}><Image src="/director-corporate-roof-portrait.png" alt="Mr. Lokesh Gidwani with the ROOF Builders and Developers identity" fill priority sizes="(max-width: 800px) 100vw, 52vw" /></div>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Director&apos;s Desk</p>
        <h1>Leadership Built on<br /><em>Trust and Clarity.</em></h1>
        <blockquote>“Real estate decisions become meaningful when expertise is matched with transparency, context and genuine attention to the client.”</blockquote>
        <div className={styles.identity}><h2>Mr. Lokesh Gidwani</h2><span>Founder &amp; CEO</span></div>
      </div>
    </section>
    <section className={styles.message}>
      <div><p className={styles.eyebrow}>A Message from the Founder</p><h2><span>Helping Every Client </span><span>Move Forward with </span><em>Confidence.</em></h2></div>
      <div className={styles.copy}>
        <p>At ROOF Builders &amp; Developers, our purpose goes beyond presenting properties. We work to understand what each client is truly looking for and bring clarity to a market filled with choices.</p>
        <p>Whether the requirement is a residential address, a commercial opportunity or a plotted investment, our responsibility is to offer relevant context, transparent guidance and dependable support through every meaningful stage.</p>
        <p>Our vision is to build lasting relationships through professionalism, informed conversations and a commitment to putting the client&apos;s interests at the centre of every decision.</p>
        <div className={styles.signature}><strong>Lokesh Gidwani</strong><span>Founder &amp; CEO · ROOF Builders &amp; Developers</span></div>
      </div>
    </section>
    <section className={styles.vision}><Image src="/roof-business-park.png" alt="Contemporary development representing the ROOF vision" fill sizes="100vw" /><div /><blockquote>“A trusted real estate relationship begins with listening—and grows through every promise kept.”</blockquote></section>
    <SiteFooter />
    <PageEnhancements scope=".directorMotion" variant="leadership" />
  </main>;
}
