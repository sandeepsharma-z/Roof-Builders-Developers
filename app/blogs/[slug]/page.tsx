import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../SiteFooter";
import SiteHeader from "../../SiteHeader";
import { blogPosts, getBlogPost } from "../blog-data";
import styles from "../blogs.module.css";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: `${post.title} | ROOF Journal`, description: post.excerpt };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return <main className={`${styles.page} blogArticleMotion`}>
    <SiteHeader active="Blogs" />

    <section className={styles.articleHero}>
      <Image src={post.image} alt={post.title} fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.articleHeroContent}>
        <p className={styles.eyebrow}>ROOF Journal</p>
        <h1>{post.title}</h1>
        <div className={styles.articleMeta}><span>{post.tag}</span><span>{post.read}</span></div>
      </div>
    </section>

    <article className={styles.article}>
      <p className={styles.articleLead}>{post.intro}</p>
      {post.sections.map((section) => <section className={styles.articleSection} key={section.heading}>
        <h2>{section.heading}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
      </section>)}
      <aside className={styles.articleNote}>This article provides general information only. Project details, regulations and individual requirements can vary; review the relevant documents and seek qualified advice where appropriate.</aside>
      <Link className={styles.articleBack} href="/blogs">← Back to the ROOF Journal</Link>
    </article>

    <SiteFooter />
  </main>;
}
