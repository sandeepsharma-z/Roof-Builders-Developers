import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import styles from "./coming-soon.module.css";

const upcomingProjects = {
  "sector-27": { name: "Sector 27", location: "Sector 27, Jhajjar", image: "/vedmaan-projects/sector-27.webp" },
  "sector-1": { name: "Sector 1", location: "Sector 1, Pataudi", image: "/vedmaan-projects/sector-1.webp" },
  "sector-4": { name: "Sector 4", location: "Sector 4, Pataudi", image: "/vedmaan-projects/sector-4.webp" },
} as const;

type ProjectKey = keyof typeof upcomingProjects;

export function generateStaticParams() {
  return Object.keys(upcomingProjects).map((project) => ({ project }));
}

export async function generateMetadata({ params }: { params: Promise<{ project: string }> }): Promise<Metadata> {
  const { project } = await params;
  const item = upcomingProjects[project as ProjectKey];
  return item ? { title: `${item.name} Coming Soon | ROOF Builders & Developers`, description: `${item.location} upcoming plotted development.` } : {};
}

export default async function ComingSoonPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const item = upcomingProjects[project as ProjectKey];
  if (!item) notFound();

  return <main className={styles.page}>
    <SiteHeader active="Properties" />
    <section className={styles.hero}>
      <Image src={item.image} alt={`${item.name} upcoming plotted development`} fill priority sizes="100vw" />
      <div className={styles.shade} />
      <div className={styles.content}>
        <p>Upcoming Plotted Development · {item.location}</p>
        <span className={styles.status}>Coming Soon</span>
        <h1>{item.name}<br /><em>Launching Soon.</em></h1>
        <p className={styles.copy}>Project details, pricing and availability will be announced soon. Register your interest to receive verified launch updates.</p>
        <div className={styles.actions}><Link className="goldButton" href="/contact#enquiry-form"><span>Notify Me at Launch</span><span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg></span></Link><Link href="/properties">View Available Properties</Link></div>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
