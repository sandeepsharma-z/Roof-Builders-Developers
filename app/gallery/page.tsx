import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "../inner-pages.module.css";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = { title: "Gallery | ROOF Builders & Developers", description: "Explore project views and development highlights by ROOF Builders & Developers." };

const images = [
  ["/project-gallery/south-entrance.webp", "South City Greens", "Planned Entrance"], ["/project-gallery/south-jogging.webp", "South City Greens", "Jogging Track"],
  ["/project-gallery/south-play.webp", "South City Greens", "Children's Play Area"], ["/project-gallery/south-sports.webp", "South City Greens", "Sports Court"],
  ["/projects/south-city-greens/community-aerial.jpg", "South City Greens", "Community Aerial"], ["/projects/south-city-greens/hero-township.jpg", "South City Greens", "Township View"],
  ["/project-gallery/dream-hero.png", "Dream Valley", "Project Entrance"], ["/project-gallery/dream-view-1.png", "Dream Valley", "Community Living"],
  ["/project-gallery/dream-view-2.png", "Dream Valley", "Landscaped Avenue"], ["/project-gallery/dream-view-3.png", "Dream Valley", "Open Green Space"],
  ["/project-gallery/dream-view-4.png", "Dream Valley", "Planned Streetscape"], ["/project-gallery/dream-view-5.png", "Dream Valley", "Plotted Development"],
  ["/project-gallery/dream-view-6.png", "Dream Valley", "Open Environment"], ["/projects/dream-valley/banner-jhajjar-1.png", "Dream Valley", "Jhajjar Development"],
  ["/projects/dream-valley/dream-valley-banner-1.png", "Dream Valley", "Project Perspective"], ["/projects/dream-valley/dream-valley-banner-2.png", "Dream Valley", "Community Perspective"],
  ["/projects/dream-valley/sector-gallery-1.png", "Dream Valley", "Development View 01"], ["/projects/dream-valley/sector-gallery-2.png", "Dream Valley", "Development View 02"],
  ["/projects/dream-valley/sector-gallery-3.png", "Dream Valley", "Development View 03"], ["/projects/dream-valley/sector-gallery-4.png", "Dream Valley", "Development View 04"],
  ["/projects/dream-valley/sector-gallery-5.png", "Dream Valley", "Development View 05"], ["/projects/dream-valley/sector-gallery-6.png", "Dream Valley", "Development View 06"],
  ["/project-gallery/hari-view-1.jpeg", "Shree Hari Enclave", "Project View 01"], ["/project-gallery/hari-view-2.jpeg", "Shree Hari Enclave", "Project View 02"],
  ["/project-gallery/hari-view-3.jpeg", "Shree Hari Enclave", "Project View 03"], ["/project-gallery/hari-view-4.jpeg", "Shree Hari Enclave", "Project View 04"],
  ["/projects/shree-hari-enclave/about-us.jpeg", "Shree Hari Enclave", "Project Landscape"], ["/projects/shree-hari-enclave/banner-image-1.png", "Shree Hari Enclave", "Township Perspective 01"],
  ["/projects/shree-hari-enclave/banner-image-2.png", "Shree Hari Enclave", "Township Perspective 02"], ["/projects/shree-hari-enclave/banner-image-3.png", "Shree Hari Enclave", "Township Perspective 03"],
  ["/projects/shree-hari-enclave/gallery-1.jpeg", "Shree Hari Enclave", "On-Ground View 01"], ["/projects/shree-hari-enclave/gallery-2.jpeg", "Shree Hari Enclave", "On-Ground View 02"],
  ["/projects/shree-hari-enclave/gallery-3.jpeg", "Shree Hari Enclave", "On-Ground View 03"], ["/projects/shree-hari-enclave/gallery-4.jpeg", "Shree Hari Enclave", "On-Ground View 04"],
  ["/projects/shree-hari-enclave/project-construction-1.png", "Shree Hari Enclave", "Construction Progress 01"], ["/projects/shree-hari-enclave/project-construction-2.png", "Shree Hari Enclave", "Construction Progress 02"],
  ["/projects/shree-hari-enclave/project-construction-3.png", "Shree Hari Enclave", "Construction Progress 03"], ["/projects/shree-hari-enclave/project-construction-4.png", "Shree Hari Enclave", "Construction Progress 04"],
  ["/projects/shree-hari-enclave/project-construction-5.png", "Shree Hari Enclave", "Construction Progress 05"], ["/projects/shree-hari-enclave/project-construction-6.png", "Shree Hari Enclave", "Construction Progress 06"],
  ["/projects/shree-hari-enclave/project-construction-7.png", "Shree Hari Enclave", "Construction Progress 07"], ["/projects/shree-hari-enclave/project-construction-8.png", "Shree Hari Enclave", "Construction Progress 08"],
  ["/projects/c5/overview.jpg", "Residential Development", "Project Overview"],
];

export default function GalleryPage() {
  return <main className={`${styles.page} ${styles.galleryPage}`}><SiteHeader active="Gallery" />
    <section className={styles.hero}><Image src="/gallery-hero-generated-v2.png" alt="Premium residential community and landscaped courtyard at dusk" fill priority sizes="100vw" /><div className={styles.heroShade} /><div className={styles.heroContent}><p className={styles.eyebrow}>Projects in Perspective</p><h1>Spaces Taking Shape.<br /><em>Stories Coming Alive.</em></h1><p className={styles.heroCopy}>Explore the planning, landscape and evolving character of our residential and plotted developments.</p></div></section>
    <section className={`${styles.section} ${styles.galleryArchive}`}>
      <GalleryGrid images={images} />
    </section><SiteFooter /></main>;
}
