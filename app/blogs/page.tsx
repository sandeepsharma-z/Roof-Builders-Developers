import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageEnhancements from "../PageEnhancements";
import SiteFooter from "../SiteFooter";
import SiteHeader from "../SiteHeader";
import { blogPosts } from "./blog-data";
import styles from "./blogs.module.css";

export const metadata: Metadata = {
  title: "Property Guides & Insights | ROOF Builders & Developers",
  description: "Clear, practical property guides for buyers exploring locations, property formats and project site visits.",
};

export default function BlogsPage() {
  return <main className={`${styles.page} ${styles.blogsPage} blogsMotion`}>
    <SiteHeader active="Blogs" />

    <section className={styles.hero}>
      <Image src="/roof-sky-heights.png" alt="Contemporary residential development at dusk" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>The ROOF Journal</p>
        <h1>Property, Explained.<br /><em>Decisions, Made Clearer.</em></h1>
        <p className={styles.heroCopy}>Practical starting points for buyers exploring property formats, locations and the questions worth asking before the next step.</p>
      </div>
    </section>

    <section className={styles.journal}>
      <div className={styles.intro}>
        <div><p className={styles.eyebrow}>Start with Clarity</p><h2>Useful Guidance.<br /><em>No Unnecessary Noise.</em></h2></div>
        <p>ROOF is beginning its journal with three essentials: how to build a meaningful shortlist, how property formats differ and how to use a site visit well.</p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => <article className={styles.card} key={post.slug}>
          <Link className={styles.cardImage} href={`/blogs/${post.slug}`} aria-label={`Read ${post.title}`}>
            <Image src={post.image} alt={post.title} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" />
          </Link>
          <div className={styles.cardBody}>
            <div className={styles.meta}><span>{post.tag}</span><time>{post.read}</time></div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <Link className={styles.readLink} href={`/blogs/${post.slug}`}><span>Read article</span><span aria-hidden="true">↗</span></Link>
          </div>
        </article>)}
      </div>
    </section>

    <SiteFooter />
    <PageEnhancements scope=".blogsMotion" />
  </main>;
}
