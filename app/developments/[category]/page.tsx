import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import PageEnhancements from "../../PageEnhancements";
import styles from "./development.module.css";

type DevelopmentProject = {
  name: string;
  location: string;
  image: string;
  href: string;
};

type DevelopmentCategory = {
  eyebrow: string;
  title: string;
  scriptTitle: string;
  heroCopy: string;
  heroImage: string;
  introEyebrow: string;
  introTitle: string;
  introScript: string;
  introCopy: string;
  statement: string;
  gallery: [string, string, string];
  pillars: Array<{ number: string; title: string; copy: string }>;
  process: Array<{ title: string; copy: string }>;
  projects: DevelopmentProject[];
};

const categories: Record<string, DevelopmentCategory> = {
  "plotted-communities": {
    eyebrow: "ROOF / Plotted Communities",
    title: "Land, Planned",
    scriptTitle: "for Life.",
    heroCopy: "Thoughtfully planned plotted communities shaped around access, infrastructure, open space and the freedom to build for tomorrow.",
    heroImage: "/category-plot.webp",
    introEyebrow: "A Grounded Approach",
    introTitle: "More Than a Plot.",
    introScript: "A Complete Setting.",
    introCopy: "Our approach begins beyond individual plot lines. We consider arrival, movement, landscape, essential services and the everyday experience of the neighbourhood as one connected plan.",
    statement: "Places where ownership begins with land and grows into a lasting sense of community.",
    gallery: ["/south-city-greens.webp", "/dream-valley.webp", "/shri-hari-enclave.webp"],
    pillars: [
      { number: "01", title: "Connected Masterplans", copy: "Clear road hierarchies, considered access and a layout designed to make every part of the community feel connected." },
      { number: "02", title: "Green Neighbourhoods", copy: "Landscaped areas and open spaces are woven into the plan to bring breathing room into everyday life." },
      { number: "03", title: "Essential Infrastructure", copy: "Services, drainage, utilities and secure access are considered as foundational parts of the development." },
    ],
    process: [
      { title: "Understand the Land", copy: "Study its access, context and long-term potential." },
      { title: "Shape the Plan", copy: "Organise plots, roads, greens and shared spaces as one system." },
      { title: "Build the Groundwork", copy: "Develop the infrastructure that supports daily life." },
      { title: "Grow the Community", copy: "Create a neighbourhood designed to remain relevant over time." },
    ],
    projects: [
      { name: "South City Greens", location: "Sector 36, Jhajjar", image: "/south-city-greens.webp", href: "/projects/south-city-greens" },
      { name: "Dream Valley", location: "Sector 7, Jhajjar", image: "/dream-valley.webp", href: "/projects/dream-valley" },
      { name: "Shree Hari Enclave", location: "Bahadrabad, Haridwar", image: "/shri-hari-enclave.webp", href: "/projects/shree-hari-enclave" },
    ],
  },
  commercial: {
    eyebrow: "ROOF / Commercial Developments",
    title: "Spaces Made",
    scriptTitle: "for Progress.",
    heroCopy: "Commercial environments considered around visibility, access, adaptability and the people who bring business destinations to life.",
    heroImage: "/category-commercial.webp",
    introEyebrow: "A Business-Led Perspective",
    introTitle: "Built Around Movement.",
    introScript: "Designed for Momentum.",
    introCopy: "A successful commercial address works at many levels: how people arrive, how they move, what they see and how a space can respond as businesses evolve. Our planning brings those layers together.",
    statement: "Commercial places should do more than contain business. They should help it connect, perform and grow.",
    gallery: ["/roof-business-park.png", "/category-commercial.webp", "/material-detail.png"],
    pillars: [
      { number: "01", title: "Strategic Access", copy: "Locations and arrival experiences considered around movement, convenience and everyday visibility." },
      { number: "02", title: "Flexible Environments", copy: "Spaces planned to support changing business needs, customer journeys and different ways of working." },
      { number: "03", title: "A Stronger Experience", copy: "Architecture, landscape and circulation brought together to create places people want to return to." },
    ],
    process: [
      { title: "Read the Opportunity", copy: "Understand the location, audience and commercial context." },
      { title: "Plan the Experience", copy: "Shape access, movement, frontage and spatial relationships." },
      { title: "Create Adaptability", copy: "Allow spaces to respond to different formats and future needs." },
      { title: "Support Growth", copy: "Build an environment that can remain useful and relevant." },
    ],
    projects: [],
  },
  residential: {
    eyebrow: "ROOF / Residential Developments",
    title: "Homes Shaped",
    scriptTitle: "Around Life.",
    heroCopy: "Residential neighbourhoods designed around privacy, connection, landscape and the rhythms that make everyday living feel considered.",
    heroImage: "/category-residential.webp",
    introEyebrow: "Living, Considered",
    introTitle: "Designed from the Inside.",
    introScript: "Connected Beyond It.",
    introCopy: "We look at residential development as a complete living environment—from the proportions of a home to shared spaces, landscape, access and the wider neighbourhood around it.",
    statement: "The best homes balance personal space with a neighbourhood that feels connected, useful and enduring.",
    gallery: ["/ganga-valley-floors.webp", "/signature-living-room.png", "/signature-courtyard.png"],
    pillars: [
      { number: "01", title: "Thoughtful Homes", copy: "Plans considered around natural light, privacy, usable proportions and the patterns of everyday life." },
      { number: "02", title: "Shared Landscape", copy: "Green and community spaces that support wellness, interaction and a stronger sense of place." },
      { number: "03", title: "Connected Living", copy: "A neighbourhood approach that brings homes closer to access, convenience and essential infrastructure." },
    ],
    process: [
      { title: "Start with People", copy: "Understand how residents live, gather, rest and move." },
      { title: "Plan the Home", copy: "Shape useful spaces with privacy, light and everyday comfort." },
      { title: "Connect the Neighbourhood", copy: "Bring landscape, amenities and circulation together." },
      { title: "Design for Longevity", copy: "Create places that can support life through changing needs." },
    ],
    projects: [
      { name: "Ganga Valley Floors", location: "Sector 78, Gurugram", image: "/ganga-valley-floors.webp", href: "/residential" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const item = categories[category];
  return item ? {
    title: `${item.title} ${item.scriptTitle} | ROOF Builders & Developers`,
    description: item.heroCopy,
  } : {};
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" /></svg>;
}

export default async function DevelopmentCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const item = categories[category];
  if (!item) notFound();

  return <main className={`${styles.page} developmentMotion`}>
    <SiteHeader active="Properties" />

    <section className={styles.hero}>
      <Image src={item.heroImage} alt="" fill priority sizes="100vw" />
      <div className={styles.heroShade} />
      <div className={styles.heroLines} aria-hidden="true" />
      <div className={styles.heroContent}>
        <p>{item.eyebrow}</p>
        <h1>{item.title}<br /><em>{item.scriptTitle}</em></h1>
        <div className={styles.heroFoot}>
          <span>Development, considered.</span>
          <p>{item.heroCopy}</p>
        </div>
      </div>
      <a className={styles.scrollCue} href="#perspective"><span>↓</span> Discover</a>
    </section>

    <section className={styles.perspective} id="perspective">
      <div className={styles.perspectiveHead}>
        <div><p className={styles.eyebrow}>{item.introEyebrow}</p><h2>{item.introTitle}<br /><em>{item.introScript}</em></h2></div>
        <div className={styles.perspectiveCopy}><span>01 / Perspective</span><p>{item.introCopy}</p></div>
      </div>
      <div className={styles.perspectiveVisual}>
        <div className={styles.visualMain}><Image src={item.gallery[0]} alt="" fill sizes="(max-width: 850px) 92vw, 62vw" /></div>
        <blockquote>{item.statement}</blockquote>
        <span className={styles.watermark} aria-hidden="true">ROOF</span>
      </div>
    </section>

    <section className={styles.pillars}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>What Shapes the Category</p><h2>Planning Principles.<br /><em>Purpose in Every Detail.</em></h2></div><p>Each decision is considered as part of a complete environment—not as an isolated feature.</p></div>
      <div className={styles.pillarGrid}>{item.pillars.map((pillar) => <article key={pillar.number}><span>{pillar.number}</span><i aria-hidden="true" /><h3>{pillar.title}</h3><p>{pillar.copy}</p></article>)}</div>
    </section>

    <section className={styles.galleryStory}>
      <div className={styles.galleryCopy}><p className={styles.eyebrow}>Designed as One</p><h2>From the Big Picture<br /><em>to Everyday Experience.</em></h2><p>Architecture, movement, landscape and infrastructure come together to shape how a place looks, feels and works over time.</p></div>
      <div className={styles.galleryLarge}><Image src={item.gallery[1]} alt="" fill sizes="(max-width: 850px) 100vw, 54vw" /></div>
      <div className={styles.gallerySmall}><Image src={item.gallery[2]} alt="" fill sizes="(max-width: 850px) 70vw, 25vw" /></div>
    </section>

    <section className={styles.process}>
      <div className={styles.processIntro}><p className={styles.eyebrow}>The ROOF Approach</p><h2>Considered at<br /><em>Every Stage.</em></h2></div>
      <div className={styles.processList}>{item.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>)}</div>
    </section>

    {item.projects.length > 0 ? <section className={styles.projects}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Explore the Portfolio</p><h2>Places Taking Shape.<br /><em>Stories Being Built.</em></h2></div><Link href="/properties">View all properties <span>→</span></Link></div>
      <div className={`${styles.projectGrid} ${item.projects.length === 1 ? styles.singleProject : ""}`}>{item.projects.map((project, index) => <Link href={project.href} className={styles.projectCard} key={project.name}>
        <Image src={project.image} alt={project.name} fill sizes="(max-width: 700px) 92vw, 42vw" />
        <div className={styles.projectShade} />
        <span className={styles.projectNumber}>0{index + 1}</span>
        <div><small>{project.location}</small><h3>{project.name}</h3></div>
        <i aria-hidden="true"><ArrowIcon /></i>
      </Link>)}</div>
    </section> : <section className={styles.portfolioCallout}>
      <div><p className={styles.eyebrow}>The Next ROOF Address</p><h2>Let&apos;s Talk About<br /><em>What Comes Next.</em></h2></div>
      <div><p>Speak with our project team to understand the thinking behind our commercial development vision and future opportunities.</p><Link className="goldButton" href="/contact#enquiry-form"><span>Connect with Our Team</span><span className="buttonArrow" aria-hidden="true"><ArrowIcon /></span></Link></div>
    </section>}

    <section className={styles.finalCta}>
      <Image src={item.heroImage} alt="" fill sizes="100vw" />
      <div className={styles.finalShade} />
      <div><p className={styles.eyebrow}>Begin a Conversation</p><h2>A Better Address Begins<br /><em>with a Clearer Vision.</em></h2><p>Explore the category with our project team and find the development that aligns with what you are building toward.</p><Link className="goldButton" href="/contact#enquiry-form"><span>Speak with ROOF</span><span className="buttonArrow" aria-hidden="true"><ArrowIcon /></span></Link></div>
    </section>

    <SiteFooter />
    <PageEnhancements scope=".developmentMotion" variant="editorial" />
  </main>;
}
