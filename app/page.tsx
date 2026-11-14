"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import PageEnhancements from "./PageEnhancements";
import { blogPosts } from "./blogs/blog-data";
import importedFeaturedProperties from "../public/roof-assets-infra-featured-properties/all-featured-properties.json";

const heroSlides = [
  {
    image: "/south-city-greens.webp",
    position: "center 50%",
    location: "Jhajjar",
    title: "South City Greens, Sector 36",
    description: "A thoughtfully planned plotted community where landscaped avenues, strong connectivity and future-ready living come together.",
  },
  {
    image: "/dream-valley.webp",
    position: "center 48%",
    location: "Jhajjar",
    title: "Dream Valley, Sector 7",
    description: "A premium plotted address created for spacious living, meaningful neighbourhood connections and long-term value.",
  },
  {
    image: "/shri-hari-enclave.webp",
    position: "55% center",
    location: "Haridwar",
    title: "Shri Hari Enclave",
    description: "A calm residential township with effortless highway access, considered planning and room for life to grow.",
  },
  {
    image: "/ganga-valley-floors.webp",
    position: "58% center",
    location: "Gurugram",
    title: "Ganga Valley Floors",
    description: "Contemporary independent floors balancing privacy, elegant proportions and the everyday convenience of a connected location.",
  },
];

const dreamValley = importedFeaturedProperties.find((property) => property.slug === "dream-valley-sector-7-jhajjar")!;
const properties = [
  {
    ...dreamValley,
    name: "Dream Valley",
    location: "Sector 7, Jhajjar",
    badge: "Ongoing",
    image: `/roof-assets-infra-featured-properties/${dreamValley.image}`,
    href: "/projects/dream-valley",
    specs: [{ label: "Residential Plots", icon: "building" }, { label: "Sector 7", icon: "grade" }, { label: "View Details", icon: "area" }],
  },
  {
    slug: "sector-27-jhajjar", name: "Sector 27", location: "Sector 27, Jhajjar", price: "Coming Soon", summary: "An upcoming plotted community by Vedmaan Group in Sector 27, Jhajjar.", badge: "Upcoming", image: "/vedmaan-projects/sector-27.webp", href: "/coming-soon/sector-27", detailsUrl: "/coming-soon/sector-27", slide: 2, imageSource: "https://vedmaangroup.com/assets/gallery-1.webp",
    specs: [{ label: "Residential Plots", icon: "building" }, { label: "Sector 27", icon: "grade" }, { label: "Coming Soon", icon: "area" }],
  },
  {
    slug: "sector-1-pataudi", name: "Sector 1", location: "Sector 1, Pataudi", price: "Coming Soon", summary: "An upcoming plotted community by Vedmaan Group in Sector 1, Pataudi.", badge: "Upcoming", image: "/vedmaan-projects/sector-1.webp", href: "/coming-soon/sector-1", detailsUrl: "/coming-soon/sector-1", slide: 3, imageSource: "https://vedmaangroup.com/assets/gallery-2.webp",
    specs: [{ label: "Residential Plots", icon: "building" }, { label: "Sector 1", icon: "grade" }, { label: "Coming Soon", icon: "area" }],
  },
  {
    slug: "sector-4-pataudi", name: "Sector 4", location: "Sector 4, Pataudi", price: "Coming Soon", summary: "An upcoming plotted community by Vedmaan Group in Sector 4, Pataudi.", badge: "Upcoming", image: "/vedmaan-projects/sector-4.webp", href: "/coming-soon/sector-4", detailsUrl: "/coming-soon/sector-4", slide: 4, imageSource: "https://vedmaangroup.com/assets/gallery-5.webp",
    specs: [{ label: "Residential Plots", icon: "building" }, { label: "Sector 4", icon: "grade" }, { label: "Coming Soon", icon: "area" }],
  },
];

const services = [
  { number: "01", title: "Plotted Communities", tagline: "Well-planned today. Brighter tomorrows.", image: "/generated-portfolio/plotted-communities-v1.png", href: "/developments/plotted-communities" },
  { number: "02", title: "Commercial Developments", tagline: "Spaces for progress.", image: "/generated-portfolio/commercial-developments-v1.png", href: "/developments/commercial" },
  { number: "03", title: "Residential Developments", tagline: "Thriving communities.", image: "/generated-portfolio/residential-developments-v1.png", href: "/developments/residential" },
];

const journey = [
  { number: "01", title: "Discover", text: "We begin with your priorities—whether you are seeking a home, commercial space or plotted investment." },
  { number: "02", title: "Curate", text: "The right opportunities are considered through location, infrastructure, development quality and lasting relevance." },
  { number: "03", title: "Guide", text: "Clear communication and informed support keep every decision confident and transparent." },
  { number: "04", title: "Progress", text: "From project comparison to site visits and the next step, we keep your property journey considered." },
];

const scrollStory = [
  { kicker: "The ROOF Vision", title: "Development, Considered From Every Angle.", text: "" },
  { kicker: "01 / Masterplanned", title: "Planned with Intention.", text: "Roads, plots, open spaces, landscapes and essential services are considered together as one complete development." },
  { kicker: "02 / Connected", title: "Connected for Progress.", text: "Locations are considered around access to infrastructure, workplaces, education, healthcare and evolving growth corridors." },
  { kicker: "03 / Enduring", title: "Built for the Long Term.", text: "Every ROOF development is shaped with a long-term view of everyday usability, neighbourhood growth and enduring value." },
];

const developmentPhases = [
  { number: "01", title: "Vision" },
  { number: "02", title: "Masterplanning" },
  { number: "03", title: "Development" },
  { number: "04", title: "Community" },
];

const locations = [
  { city: "Gurugram", area: "Gurgaon", note: "Residential and commercial opportunities across established growth corridors", image: "/ganga-valley-floors.webp", href: "https://roofandassetsinfra.com/city/gurgaon/" },
  { city: "South Gurugram", area: "Sohna", note: "An evolving destination shaped by connectivity and planned development", image: "/category-commercial.webp", href: "https://roofandassetsinfra.com/city/sohna/" },
  { city: "Haryana", area: "Jhajjar", note: "Future-facing plotted communities with room for long-term growth", image: "/south-city-greens.webp", href: "https://roofandassetsinfra.com/properties/south-city-greens-sector-36-jhajjar/" },
];

const lifestyleAmenities = [
  { number: "01", title: "Planned Infrastructure", text: "Roads, access and essential services considered as part of a connected development experience.", position: { left: "50%", top: "47%" } },
  { number: "02", title: "Landscaped Greens", text: "Open and green spaces woven through addresses to create shade, breathing room and neighbourhood character.", position: { left: "84%", top: "61%" } },
  { number: "03", title: "Community Planning", text: "Residential, commercial and plotted environments shaped for connection, convenience and long-term relevance.", position: { left: "67%", top: "34%" } },
  { number: "04", title: "Secure Access", text: "Considered entry, circulation and dependable systems supporting confidence across the development.", position: { left: "25%", top: "58%" } },
];

const plottedAmenities = [
  { title: "Premium Clubhouse", text: "A refined social and leisure destination", image: "/generated-amenities/premium-clubhouse.png" },
  { title: "Gated Entry", text: "A defined arrival with controlled access", image: "/generated-amenities/gated-entry-v1.png" },
  { title: "Wide Internal Roads", text: "Planned movement across the community", image: "/category-plot.webp" },
  { title: "Landscaped Greens", text: "Open areas woven into everyday living", image: "/generated-amenities/landscaped-greens-v1.png" },
  { title: "Community Spaces", text: "Places designed for connection and leisure", image: "/generated-amenities/community-spaces-v1.png" },
  { title: "Outdoor Sports", text: "Multi-sport courts for an active community", image: "/generated-amenities/sports-courts.png" },
  { title: "Family Wellness Park", text: "Play, walking and wellness within nature", image: "/generated-amenities/family-wellness-park.png" },
  { title: "Secure Environment", text: "Considered planning for greater confidence", image: "/generated-amenities/secure-environment-v1.png" },
];

type GalleryCategory = { label: "Gallery" | "Amenities" | "Master Plan"; images?: string[]; amenities?: string[] };
type GalleryProject = { title: string; location: string; href: string; categories: GalleryCategory[] };

const plottedGallery: GalleryProject[] = [
  {
    title: "Dream Valley", location: "Sector 7, Jhajjar", href: "/projects/dream-valley",
    categories: [
      { label: "Gallery", images: ["/project-gallery/dream-hero.png", "/project-gallery/dream-view-1.png", "/project-gallery/dream-view-2.png", "/project-gallery/dream-view-3.png", "/project-gallery/dream-view-4.png"] },
      { label: "Amenities", amenities: ["24/7 Security", "Kids Play Area", "Open Gym", "Yoga & Meditation Garden", "Common Facility Area", "Sports Court", "Lush Green Parks", "Badminton Court", "Fresh Water Supply", "Jogging Track", "Gated Complex", "Storm Water & Sewage"] },
      { label: "Master Plan", images: ["/project-gallery/dream-layout.png"] },
    ],
  },
];

const roofStandards = [
  { icon: "plan", title: "Planned Developments", text: "Thoughtful layouts shaped for everyday living and long-term value." },
  { icon: "shield", title: "Complete Transparency", text: "Clear communication and a process you can understand at every step." },
  { icon: "pin", title: "Strategic Locations", text: "Well-connected addresses considered around access and future growth." },
  { icon: "people", title: "Customer-First Approach", text: "Responsive support from the first conversation through every next step." },
];

const milestones = [
  { value: "2500+", label: "Homes & Plots Sold" },
  { value: "2000+", label: "Customer Relationships" },
  { value: "20+", label: "Developments" },
  { value: "3+", label: "Growth Markets" },
  { value: "6", label: "Regional Offices" },
];

const showcaseProjectsCatalog = [
  {
    name: "South City Greens",
    location: "Sector 36, Jhajjar",
    type: "Premium Residential Plots",
    image: "/roof-assets-infra-featured-properties/south-city-greens-sector-36-jhajjar/featured.webp",
    href: "https://roofandassetsinfra.com/properties/south-city-greens-sector-36-jhajjar/",
    features: [{ icon: "road", label: "Planned Roads" }, { icon: "green", label: "Green Spaces" }, { icon: "security", label: "Secure Access" }, { icon: "gate", label: "Plotted Community" }],
  },
  {
    name: "Dream Valley",
    location: "Sector 7, Jhajjar",
    type: "Premium Residential Plots",
    image: "/roof-assets-infra-featured-properties/dream-valley-sector-7-jhajjar/featured.png",
    href: "/projects/dream-valley",
    features: [{ icon: "road", label: "Wide Roads" }, { icon: "green", label: "Green Areas" }, { icon: "security", label: "24×7 Security" }, { icon: "gate", label: "Gated Community" }],
  },
  {
    name: "M3M Capital Walk 113",
    location: "Dwarka Expressway, Gurugram",
    type: "Commercial & Retail Spaces",
    image: "/roof-assets-infra-featured-properties/m3m-capital-walk-sector-113/featured.jpg",
    href: "https://roofandassetsinfra.com/properties/m3m-capital-walk-sector-113/",
    features: [{ icon: "food", label: "Food Court" }, { icon: "lounge", label: "Bar & Lounge" }, { icon: "elevator", label: "High-Speed Lifts" }, { icon: "security", label: "Secure Access" }],
  },
  {
    name: "Signature Global City 81",
    location: "Sector 81, Gurugram",
    type: "2 & 3 BHK Residences",
    image: "/roof-assets-infra-featured-properties/signature-global-city-81/featured.jpg",
    href: "https://roofandassetsinfra.com/properties/signature-global-city-81/",
    features: [{ icon: "pool", label: "Swimming Pool" }, { icon: "yoga", label: "Yoga Lawn" }, { icon: "kids", label: "Kids Play Area" }, { icon: "jogging", label: "Jogging Track" }],
  },
];

const showcaseProjects = [showcaseProjectsCatalog[1], showcaseProjectsCatalog[0], ...showcaseProjectsCatalog.slice(2)];

const insights = blogPosts.map((post) => ({ ...post, date: post.read }));

const faqs = [
  { q: "What should buyers evaluate in a plotted development?", a: "Buyers should consider location and access, development planning, internal roads, essential infrastructure, open spaces, project documentation and how the surrounding growth corridor supports long-term usability and value." },
  { q: "What types of developments does ROOF create?", a: "ROOF focuses on residential, commercial and plotted developments shaped through considered planning, dependable infrastructure and long-term community value." },
  { q: "Where are ROOF projects located?", a: "The website currently highlights developments across Jhajjar, Haridwar and Gurugram. Visit an individual project page for complete location and connectivity details." },
  { q: "How can I receive project pricing and availability?", a: "Use the project enquiry or contact page to request the latest inventory, configuration and pricing information from the ROOF team." },
  { q: "Can I schedule a project site visit?", a: "Yes. Submit the site-visit form and the ROOF project team will coordinate a guided walkthrough of the development at a convenient time." },
];

const testimonials = [
  { name: "Sandeep Sharma", meta: "Local Guide · 11 reviews", rating: 5, image: "/testimonial-avatars/sandeep-sharma.jpg", quote: "Had a great experience with Roof Builders and Developers. The team is professional, helpful, and clearly explains all property details. Highly recommended for reliable real estate guidance in Gurgaon." },
  { name: "Hittendra Mehta", meta: "3 reviews", rating: 5, image: "/testimonial-avatars/hittendra-mehta.jpg", quote: "I had a seamless experience booking a property with Roof Builders & Developers. Their sales team was transparent, patient, and clear about pricing, floor plans, and future development timelines. They answered all my queries without pushing high-pressure sales tactics. Looking forward to the completion of the project!" },
  { name: "Pramod Kala", meta: "6 reviews", rating: 5, image: "/testimonial-avatars/pramod-kala.jpg", quote: "Impressed with the way the team handles customers. They are polite, responsive, and explain the property details properly. A reliable option for Gurgaon real estate." },
  { name: "Vipin Lamba", meta: "4 reviews", rating: 5, quote: "It is pleasure to be connected with Roof developer, fair and transparent deal." },
  { name: "Krishna Verma", meta: "4 reviews", rating: 5, quote: "Reliable investment, good service and good profits here." },
  { name: "Vishal Kumar", meta: "2 reviews", rating: 5, quote: "Really appreciate the team's support and professionalism. Communication was smooth and queries were handled properly. Overall, a good experience." },
  { name: "Aman Tanwar", meta: "3 reviews", rating: 5, image: "/testimonial-avatars/aman-tanwar.jpg", quote: "Property dealing ka experience kaafi smooth raha, team supportive thi aur sab kuch clearly explain kiya." },
  { name: "Vinay Tanwar", meta: "Google Reviewer", rating: 5, image: "/testimonial-avatars/vinay-tanwar.jpg", quote: "Achha experience raha, team helpful aur dealing smooth thi." },
  { name: "Ranjan Kumar", meta: "1 review", rating: 5, image: "/testimonial-avatars/ranjan-kumar.jpg", quote: "Had a great experience with Roof builder and developers. Their service was professional, timely and very supportive. Highly recommend." },
  { name: "Vikash", meta: "2 reviews", rating: 5, image: "/testimonial-avatars/vikash.jpg", quote: "All the projects are on the prime location, and the staff of Roof is extremely polite." },
  { name: "Mohd Bashar", meta: "4 reviews", rating: 5, image: "/testimonial-avatars/mohd-bashar.jpg", quote: "They were always just a quick text away and treated us like real family." },
  { name: "Jaishree Gill", meta: "2 reviews", rating: 5, quote: "They delivered our apartment right on schedule, and the build quality is top-notch." },
  { name: "Veena Thakur", meta: "2 reviews", rating: 5, image: "/testimonial-avatars/veena-thakur.jpg", quote: "Great service." },
  { name: "Tabasum Khan", meta: "2 reviews", rating: 5, quote: "Polite, honest, and hardworking. They took the time to answer all our questions and made the entire process seamless." },
  { name: "Dharmendra Kumar", meta: "2 reviews", rating: 5, quote: "From the first chat to grabbing the keys, every step was seamless." },
  { name: "Ankit Jatav", meta: "2 reviews", rating: 5, image: "/testimonial-avatars/ankit-jatav.jpg", quote: "Crisp design, calm atmosphere and hassle-free service—exactly what you want from a place like this." },
  { name: "Dhruv Chaudhary", meta: "3 reviews", rating: 5, image: "/testimonial-avatars/dhruv-chaudhary.jpg", quote: "Good environment, good services." },
  { name: "Vandana Yadav", meta: "1 review", rating: 5, quote: "Very efficient services." },
];

function Icon({ name }: { name: "phone" | "pin" | "building" | "budget" | "bed" | "search" | "grade" }) {
  const paths = {
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></>,
    building: <><rect x="4" y="9" width="16" height="12" rx="1" /><path d="M8 21V5l4-2 4 2v16M8 9h8M12 3v6M8 13h2m4 0h2M8 17h2m4 0h2" /></>,
    budget: <><circle cx="12" cy="12" r="9" /><path d="M16 8.5c-.8-.7-2-1.1-3.2-1.1-1.8 0-3.1.9-3.1 2.2 0 3.4 6.6 1.5 6.6 4.8 0 1.3-1.3 2.2-3.2 2.2-1.4 0-2.7-.5-3.6-1.3M12.8 5.5v13" /></>,
    bed: <><path d="M3 18v-7m18 7v-5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v4M3 16h18M7 11V8h5a3 3 0 0 1 3 3" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    grade: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function ButtonArrow() {
  return (
    <span className="buttonArrow" aria-hidden="true">
      <svg viewBox="0 0 20 20">
        <path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12" />
      </svg>
    </span>
  );
}

function RoofStandardIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    plan: <><path d="m4 7 8-4 8 4-8 4zM4 12l8 4 8-4M4 17l8 4 8-4" /></>,
    shield: <><path d="m12 2 8 3v6c0 5-3.2 9-8 11-4.8-2-8-6-8-11V5z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="2.5" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 21v-2a6 6 0 0 1 12 0v2M14 15a5 5 0 0 1 7 4v2" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function GoogleGIcon() {
  return <svg className="googleGIcon" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.91h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.4Z" />
    <path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.24-2.54c-.9.6-2.05.96-3.38.96-2.6 0-4.81-1.76-5.6-4.12H3.06v2.62A10 10 0 0 0 12 22Z" />
    <path fill="#FBBC05" d="M6.4 13.87A6 6 0 0 1 6.09 12c0-.65.11-1.28.31-1.87V7.51H3.06A10 10 0 0 0 2 12c0 1.61.39 3.14 1.06 4.49l3.34-2.62Z" />
    <path fill="#EA4335" d="M12 6.01c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.94 5.51l3.34 2.62C7.19 7.77 9.4 6.01 12 6.01Z" />
  </svg>;
}

function AnimatedMilestone({ value, delay }: { value: string; delay: number }) {
  const target = Number.parseInt(value, 10);
  const suffix = value.replace(/[\d,]/g, "");
  const [count, setCount] = useState(0);
  const numberRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = numberRef.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    let animationFrame = 0;
    let startTimer = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      startTimer = window.setTimeout(() => {
        const startedAt = performance.now();
        const duration = 1650;
        const animate = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setCount(Math.round(target * eased));
          if (progress < 1) animationFrame = window.requestAnimationFrame(animate);
        };
        animationFrame = window.requestAnimationFrame(animate);
      }, delay);
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.clearTimeout(startTimer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [delay, target]);

  return <strong ref={numberRef} aria-label={value}>{count}{suffix}</strong>;
}

function ChevronDown() {
  return (
    <svg className="selectChevron" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m4 6 4 4 4-4" />
    </svg>
  );
}

function HomeSearchSelect({ value, options, onChange, label }: { value: string; options: string[]; onChange: (value: string) => void; label: string }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const root = useRef<HTMLDivElement>(null);
  const matches = options.filter((option) => option.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    const close = (event: MouseEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return <div className="homeSearchSelect" ref={root}>
    <button type="button" className={open ? "open" : ""} aria-label={label} aria-haspopup="listbox" aria-expanded={open} onClick={() => { setOpen((current) => !current); setQuery(""); }}><span>{value}</span><ChevronDown /></button>
    {open && <div className="homeSearchMenu">
      <div className="homeSearchInput"><Icon name="search" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }} placeholder="Type to search..." aria-label={`Search ${label.toLowerCase()} options`} autoFocus /></div>
      <div role="listbox" aria-label={label}>{matches.length ? matches.map((option) => <button type="button" role="option" aria-selected={option === value} className={option === value ? "selected" : ""} onClick={() => { onChange(option); setOpen(false); setQuery(""); }} key={option}><span>{option}</span>{option === value && <b aria-hidden="true">✓</b>}</button>) : <p>No option found</p>}</div>
    </div>}
  </div>;
}

function propertyPriceLakh(price: string) {
  const amount = Number.parseFloat(price.replace(/[^0-9.]/g, ""));
  return /cr/i.test(price) ? amount * 100 : amount;
}

function propertyType(property: (typeof properties)[number]) {
  const content = `${property.name} ${property.summary}`.toLowerCase();
  if (/commercial|mall|market|business|office|retail|sco/.test(content)) return "Commercial";
  if (/plot|plotted|township|enclave|valley|drive|city/.test(content)) return "Plots";
  return "Residential";
}

function propertyConfiguration(property: (typeof properties)[number]) {
  const match = `${property.name} ${property.summary}`.match(/\b([1-5])\s*bhk\b/i);
  return match ? `${match[1]} BHK` : "Other";
}

function ProjectAmenityIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    elevator: <><rect x="5" y="2.5" width="14" height="19" rx="1" /><path d="M12 5v14M8.5 8 10 6.5 11.5 8M12.5 16l1.5 1.5 1.5-1.5" /></>,
    kitchen: <><path d="M3 12h18v9H3zM3 16h18M8 16v5M16 16v5M6 8h5v4M14 5h5v7M15.5 8h2" /><circle cx="8.5" cy="10" r=".8" /></>,
    power: <path d="m13.5 2-8 12h6L10.5 22l8-12h-6z" />,
    air: <><circle cx="12" cy="12" r="2" /><path d="M12 10c-1-5 2-7 4-5 1.7 1.8-.5 5-4 7M14 12c5-1 7 2 5 4-1.8 1.7-5-.5-7-4M12 14c1 5-2 7-4 5-1.7-1.8.5-5 4-7M10 12c-5 1-7-2-5-4 1.8-1.7 5 .5 7 4" /></>,
    road: <><path d="M7 22 10 2M17 22 14 2M12 4v3m0 3v3m0 3v4" /><path d="M3 22h18" /></>,
    green: <><path d="M20 4C12 4 5 8 5 15c0 3 2 5 5 5 7 0 10-8 10-16Z" /><path d="M4 21c3-6 7-9 13-13" /></>,
    security: <><path d="m12 2 8 3v6c0 5-3.2 9-8 11-4.8-2-8-6-8-11V5z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    gate: <><path d="M3 22V8l9-5 9 5v14M7 22V10l5-3 5 3v12M12 7v15M7 14h10" /></>,
    food: <><path d="M6 2v8m-3-8v5c0 2 1 3 3 3s3-1 3-3V2M6 10v12M16 2v20M16 2c4 2 5 7 0 10" /></>,
    lounge: <><path d="M5 13h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2ZM5 13V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5M5 19v3m14-3v3" /><path d="M8 10h8" /></>,
    pool: <><path d="M3 16c2 2 4 2 6 0s4-2 6 0 4 2 6 0M3 20c2 2 4 2 6 0s4-2 6 0 4 2 6 0M7 14V5a3 3 0 0 1 6 0M7 9h6" /></>,
    yoga: <><circle cx="12" cy="4" r="2" /><path d="M12 6v6m0-3L7 7m5 2 5-2M12 12l-4 4m4-4 4 4M5 20c2-3 4-4 7-4s5 1 7 4" /></>,
    kids: <><path d="M5 22 9 5h6l4 17M7 13h10M9 5 12 2l3 3M12 13v6" /><rect x="9.5" y="18" width="5" height="3" rx="1" /></>,
    jogging: <><circle cx="14" cy="4" r="2" /><path d="m12 7-3 5 4 2 2 6m-3-13 4 4 4 1M9 12l-5 3m9-1-5 7" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function SpecIcon({ type }: { type: string }) {
  const paths: Record<string, React.ReactNode> = {
    bed: <path d="M3 18v-7m18 7v-5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v4M3 16h18M7 11V8h5a3 3 0 0 1 3 3" />,
    bath: <path d="M4 13h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM7 13V6a3 3 0 0 1 6 0v1M4 10h3M7 20v2m10-2v2" />,
    area: <><path d="M9 4H4v5M4 4l5 5M15 4h5v5M20 4l-5 5M9 20H4v-5M4 20l5-5M15 20h5v-5M20 20l-5-5" /></>,
    building: <><path d="M5 21V7h10v14M15 11h4v10M3 21h18M8 10h1m3 0h1m-5 3h1m3 0h1m-5 3h1m3 0h1M8 7V4h4v3" /></>,
    office: <><path d="M4 21V8h16v13M2 21h20M8 21v-5h8v5M7 11h2m2 0h2m2 0h2M7 14h2m6 0h2M8 8V5h8v3" /></>,
    grade: <><circle cx="8" cy="11" r="3" /><circle cx="16" cy="11" r="3" /><path d="M3 21v-3c0-2.5 1.8-4 5-4s5 1.5 5 4v3M11 15c.8-.7 2-1 3.5-1 3.2 0 5.5 1.5 5.5 4v3M12 4l1 2 2 .3-1.5 1.5.4 2.2L12 9l-1.9 1 .4-2.2L9 6.3l2-.3z" /></>,
  };
  return <svg viewBox="0 0 24 24">{paths[type]}</svg>;
}

function FooterIcon({ type }: { type: "facebook" | "instagram" | "linkedin" | "youtube" | "whatsapp" | "mail" }) {
  const paths = {
    facebook: <path d="M13.5 22v-8h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.7-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.3 1.6-4.3 4.4v2.1H7.3V14h2.8v8h3.4Z" />,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></>,
    linkedin: <path d="M5.4 8.8H2.2V19h3.2V8.8ZM3.8 3.7a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM9 8.8V19h3.2v-5.1c0-1.3.3-2.7 2-2.7 1.7 0 1.7 1.6 1.7 2.8v5H19v-5.6c0-2.8-.6-4.9-3.8-4.9-1.5 0-2.6.8-3.1 1.6V8.8H9Z" />,
    youtube: <path fillRule="evenodd" clipRule="evenodd" d="M21 8.2c-.2-1.3-1-2.2-2.3-2.4C16.8 5.5 14.5 5.4 12 5.4s-4.8.1-6.7.4C4 6 3.2 6.9 3 8.2a21 21 0 0 0 0 7.6c.2 1.3 1 2.2 2.3 2.4 1.9.3 4.2.4 6.7.4s4.8-.1 6.7-.4c1.3-.2 2.1-1.1 2.3-2.4a21 21 0 0 0 0-7.6ZM10 9v6l5-3-5-3Z" />,
    whatsapp: <path d="M12.04 2a9.84 9.84 0 0 0-8.43 14.92L2.05 22l5.2-1.52A9.9 9.9 0 1 0 12.04 2Zm0 17.98a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.9.92-3-.2-.31a8.08 8.08 0 1 1 6.79 3.72Zm4.44-6.05c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.36-1.69c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  };
  return <svg className={`footerSvg footerSvg--${type}`} viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function GalleryAmenityIcon({ index }: { index: number }) {
  const icons = [
    <><path d="M5 20V9l7-5 7 5v11" /><path d="M9 20v-6h6v6M3 20h18" /></>,
    <><path d="M12 21V10" /><path d="M12 14c-4 0-7-2.4-7-6 4 0 7 2.4 7 6ZM12 11c3.8 0 6-2.2 6-5-3.8 0-6 2.2-6 5Z" /></>,
    <><path d="m13 2-7 11h6l-1 9 7-12h-6l1-8Z" /></>,
    <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-5" /></>,
    <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20v-2c0-3 2-5 5-5s5 2 5 5v2M14 14c3-.7 6 1 6 4v2" /></>,
    <><path d="M4 18V8h16v10M2 18h20" /><path d="M8 8V5h8v3M9 13h6" /></>,
    <><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /></>,
    <><path d="M3 17h18M5 13h14M7 9h10" /><path d="M6 21V5M18 21V5" /></>,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[index % icons.length]}</svg>;
}

function GalleryTabIcon({ label }: { label: GalleryCategory["label"] }) {
  const icons = {
    Gallery: <><rect x="3" y="4" width="18" height="16" rx="1.5" /><circle cx="9" cy="9" r="1.5" /><path d="m5 18 5-5 3 3 2-2 4 4" /></>,
    Amenities: <><path d="m12 3 8 4-8 4-8-4 8-4Z" /><path d="m4 12 8 4 8-4M4 17l8 4 8-4" /></>,
    "Master Plan": <><path d="m3 6 5-3 8 3 5-3v15l-5 3-8-3-5 3V6Z" /><path d="M8 3v15M16 6v15" /></>,
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[label]}</svg>;
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [searchProject, setSearchProject] = useState("All Projects");
  const [searchLocation, setSearchLocation] = useState("All Locations");
  const [searchStatus, setSearchStatus] = useState("All Status");
  const [activeAmenity, setActiveAmenity] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialVisibleCount, setTestimonialVisibleCount] = useState(3);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeShowcaseProject, setActiveShowcaseProject] = useState(0);
  const [activeScrollStory, setActiveScrollStory] = useState(0);
  const [activeGalleryProject, setActiveGalleryProject] = useState(0);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState(0);
  const [galleryModalIndex, setGalleryModalIndex] = useState<number | null>(null);
  const [galleryZoom, setGalleryZoom] = useState(1);
  const [galleryPan, setGalleryPan] = useState({x:0,y:0});
  const galleryPinchDistance = useRef<number | null>(null);
  const galleryDidPinch = useRef(false);
  const galleryDrag = useRef<{x:number;y:number;panX:number;panY:number}|null>(null);
  const galleryPinching = useRef(false);
  const galleryDidDrag = useRef(false);
  const scrollStoryTouchX = useRef<number | null>(null);
  const planShowcaseRef = useRef<HTMLElement>(null);
  const propertySliderRef = useRef<HTMLDivElement>(null);
  const activeGallery = plottedGallery[activeGalleryProject].categories[activeGalleryCategory];
  const sourceGalleryImages = activeGallery.images ?? [];
  const galleryImages = sourceGalleryImages;
  const testimonialLastSlide = Math.max(0, testimonials.length - testimonialVisibleCount);
  const projectOptions = ["All Projects", ...properties.map((property) => `${property.name} · ${property.location}`)];
  const locationOptions = ["All Locations", ...Array.from(new Set(properties.map((property) => property.location)))];
  const filteredProperties = properties.filter((property) => {
    const matchesProject = searchProject === "All Projects" || `${property.name} · ${property.location}` === searchProject;
    const matchesLocation = searchLocation === "All Locations" || property.location === searchLocation;
    const matchesStatus = searchStatus === "All Status" || property.badge === searchStatus;
    return matchesProject && matchesLocation && matchesStatus;
  });
  const showPropertyNavigation = filteredProperties.length > 2;
  const propertyNavigationClass = filteredProperties.length <= 4 ? " propertyNavMobileOnly" : "";

  const selectProject = (value: string) => {
    setSearchProject(value);
    if (value === "All Projects") {
      setSearchLocation("All Locations");
      setSearchStatus("All Status");
      return;
    }
    const property = properties.find((item) => `${item.name} · ${item.location}` === value);
    if (property) {
      setSearchLocation(property.location);
      setSearchStatus(property.badge);
    }
  };

  const selectLocation = (value: string) => {
    setSearchLocation(value);
    if (value === "All Locations") {
      setSearchProject("All Projects");
      setSearchStatus("All Status");
      return;
    }
    const property = properties.find((item) => item.location === value);
    if (property) {
      setSearchProject(`${property.name} · ${property.location}`);
      setSearchStatus(property.badge);
    }
  };

  const selectStatus = (value: string) => {
    setSearchStatus(value);
    if (value === "All Status") {
      setSearchProject("All Projects");
      setSearchLocation("All Locations");
      return;
    }
    const matches = properties.filter((property) => property.badge === value);
    if (matches.length === 1) {
      setSearchProject(`${matches[0].name} · ${matches[0].location}`);
      setSearchLocation(matches[0].location);
    } else {
      setSearchProject("All Projects");
      setSearchLocation("All Locations");
    }
  };

  const showSearchResults = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });

  useEffect(() => {
    const updateTestimonialVisibleCount = () => {
      const nextCount = window.innerWidth <= 540 ? 1 : window.innerWidth <= 820 ? 2 : 3;
      setTestimonialVisibleCount(nextCount);
      setActiveTestimonial((current) => Math.min(current, Math.max(0, testimonials.length - nextCount)));
    };
    updateTestimonialVisibleCount();
    window.addEventListener("resize", updateTestimonialVisibleCount);
    return () => window.removeEventListener("resize", updateTestimonialVisibleCount);
  }, []);

  useEffect(() => {
    if (galleryModalIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryModalIndex(null);
      if (event.key === "ArrowLeft") { setGalleryZoom(1); setGalleryModalIndex((current) => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length); }
      if (event.key === "ArrowRight") { setGalleryZoom(1); setGalleryModalIndex((current) => current === null ? null : (current + 1) % galleryImages.length); }
      if (event.key === "+" || event.key === "=") setGalleryZoom((current) => Math.min(3, current + .5));
      if (event.key === "-") setGalleryZoom((current) => Math.max(1, current - .5));
      if (event.key === "0") setGalleryZoom(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryModalIndex, galleryImages.length]);

  useEffect(()=>{if(galleryZoom<=1)setGalleryPan({x:0,y:0})},[galleryZoom]);
  useEffect(()=>{setGalleryPan({x:0,y:0})},[galleryModalIndex]);

  const scrollProperties = (direction: -1 | 1) => {
    const slider = propertySliderRef.current;
    const card = slider?.querySelector<HTMLElement>(".propertyCard");
    if (!slider || !card) return;
    const gap = Number.parseFloat(window.getComputedStyle(slider).columnGap) || 25;
    slider.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const autoplay = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(autoplay);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const amenityAutoplay = window.setTimeout(() => {
      setActiveAmenity((current) => (current + 1) % lifestyleAmenities.length);
    }, 3800);

    return () => window.clearTimeout(amenityAutoplay);
  }, [activeAmenity]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const testimonialAutoplay = window.setTimeout(() => {
      setActiveTestimonial((current) => current >= testimonialLastSlide ? 0 : current + 1);
    }, 5500);
    return () => window.clearTimeout(testimonialAutoplay);
  }, [activeTestimonial, testimonialLastSlide]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const projectAutoplay = window.setTimeout(() => {
      setActiveShowcaseProject((current) => (current + 1) % showcaseProjects.length);
    }, 5200);
    return () => window.clearTimeout(projectAutoplay);
  }, [activeShowcaseProject]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealSelectors = [
      ".searchWrap",
      ".sectionHeading > *", ".propertyCard",
      ".servicesTop > *", ".serviceCard",
      ".milestonesGrid article",
      ".buildersHeading > *", ".developerPhase",
      ".signatureVisuals", ".signatureContent > *",
      ".experienceVisual",
      ".sustainabilityHeading > *", ".sustainabilityContent > *", ".sustainabilityImage", ".sustainabilityFeatures article",
      ".plotAmenitiesHeading > *", ".plotAmenitiesGrid article",
      ".plotGalleryHeading > *", ".plotGalleryGrid article",
      ".roofStandardCopy > *", ".roofStandardVisual", ".roofStandardGrid article",
      ".journeyVisual", ".journeyContent > *",
      ".testimonialsIntro > *", ".testimonialStage",
      ".insightsGrid article",
      ".faqIntro > *", ".faqItem",
      ".siteVisitContent > *", ".siteVisitForm",
      ".finalCtaContent > *",
      ".footerPrelude > *", ".footerGrid > *",
    ];
    const variants = ["reveal-up", "reveal-left", "reveal-right", "reveal-scale", "reveal-soft"];
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors.join(",")))
      .filter((element) => !element.closest(".planShowcase") && !element.closest("[hidden]"));

    elements.forEach((element, index) => {
      const section = element.closest("section, footer");
      const siblings = section ? elements.filter((item) => item.closest("section, footer") === section) : elements;
      const localIndex = siblings.indexOf(element);
      const sectionIndex = section ? Array.from(document.querySelectorAll("main > section, main > footer")).indexOf(section) : 0;
      element.classList.add("scrollReveal", variants[(sectionIndex + localIndex) % variants.length]);
      element.style.setProperty("--reveal-delay", `${Math.min(localIndex % 5, 4) * 75}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("isRevealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = planShowcaseRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      section.style.setProperty("--roof-shift", `${-325 + progress * 650}px`);
      section.style.setProperty("--plan-shift", `${-10 + progress * 20}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".scrollStorySection");
    if (!section) return;
    const mobileQuery = window.matchMedia("(max-width: 540px)");
    if (mobileQuery.matches) return;

    let frame = 0;
    const updateStory = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollRange));
      const nextStory = progress < 0.36 ? 0 : progress < 0.62 ? 1 : progress < 0.86 ? 2 : 3;
      setActiveScrollStory(nextStory);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateStory);
    };

    updateStory();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 540px)");
    if (!mobileQuery.matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const autoplay = window.setInterval(() => {
      setActiveScrollStory((current) => (current + 1) % scrollStory.length);
    }, 4200);
    return () => window.clearInterval(autoplay);
  }, []);

  return (
    <main>
      <SiteHeader />

      <section className="videoHero" aria-label="ROOF brand introduction">
        <video className="videoHeroMedia" autoPlay loop muted playsInline preload="auto" poster="/luxury-villa-hero.png">
          <source src="/video/roof-brand-partner.mp4" type="video/mp4" />
        </video>
        <div className="videoHeroContent shell">
          <a href="#property-discovery" aria-label="Scroll to property search"><span>↓</span></a>
        </div>
      </section>

      <section className="hero" id="featured-developments" hidden aria-hidden="true">
        <div className="heroSlides" aria-hidden="true">
          {heroSlides.map((slide, index) => (
            <Image
              className={`heroImage ${index === activeSlide ? "active" : ""}`}
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: slide.position }}
              key={slide.image}
            />
          ))}
        </div>
        <div className="heroShade" />
        <div className="heroContent shell">
          <div className="heroCopy" key={activeSlide}>
            <p className="eyebrow">Premium Developments · {heroSlides[activeSlide].location}</p>
            <h1>{heroSlides[activeSlide].title}</h1>
            <p className="intro">{heroSlides[activeSlide].description}</p>
          </div>
          <div className="ctaRow">
            <a className="goldButton" href="#projects"><span>Explore Project</span><ButtonArrow /></a>
            <a className="outlineButton" href="#contact"><span>Book a Consultation</span><ButtonArrow /></a>
          </div>
        </div>
        <div className="sliderDots" aria-label="Hero slides">
          {heroSlides.map((_, index) => (
            <button
              className={index === activeSlide ? "active" : ""}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              onClick={() => setActiveSlide(index)}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="searchWrap searchWrapProjects shell" id="property-discovery" aria-label="Property search">
        <div className="filterItem"><span className="filterIcon"><Icon name="building" /></span><div><label>Select a Development</label><HomeSearchSelect label="Development" value={searchProject} onChange={selectProject} options={projectOptions} /></div></div>
        <div className="filterItem"><span className="filterIcon"><Icon name="pin" /></span><div><label>Location</label><HomeSearchSelect label="Location" value={searchLocation} onChange={selectLocation} options={locationOptions} /></div></div>
        <div className="filterItem"><span className="filterIcon"><Icon name="grade" /></span><div><label>Status</label><HomeSearchSelect label="Status" value={searchStatus} onChange={selectStatus} options={["All Status", "Ongoing", "Upcoming"]} /></div></div>
        <button className="searchButton" type="button" onClick={showSearchResults}><Icon name="search" /> View Developments</button>
      </section>

      <section className="propertiesSection" id="projects">
        <div className="shell">
          <div className="sectionHeading">
            <div><p className="eyebrow">Our Developments</p><h2>Places Taking Shape. <span className="scriptAccent">Built for Tomorrow.</span></h2></div>
            <a href="/properties">View all developments <span>→</span></a>
          </div>
          <div className="propertySlider">
            {showPropertyNavigation && <button className={`propertyNav propertyNavPrev${propertyNavigationClass}`} type="button" aria-label="Previous featured property" onClick={() => scrollProperties(-1)}><svg viewBox="0 0 24 24"><path d="m15 5-7 7 7 7" /></svg></button>}
          <div className="propertyGrid" ref={propertySliderRef}>
            {filteredProperties.map((property) => (
              <a className="propertyCard" href={property.href} key={property.name}>
                <div className="propertyImage">
                  <Image src={property.image} alt={property.name} fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 25vw" />
                  <span className={`propertyBadge ${property.badge === "Ongoing" ? "propertyBadgeOngoing" : "propertyBadgeUpcoming"}`}>{property.badge}</span>
                </div>
                <div className="propertyBody">
                  <h3>{property.name}</h3>
                  <p className="propertyLocation"><Icon name="pin" />{property.location}</p>
                  <div className="propertySpecs">{property.specs.map((spec) => <span key={spec.label}><SpecIcon type={spec.icon} />{spec.label}</span>)}</div>
                </div>
                <p className="propertyPrice">{property.price}</p>
              </a>
            ))}
            {!filteredProperties.length && <div className="propertySearchEmpty"><strong>No matching developments found.</strong><span>Select another project, location or status.</span><button type="button" onClick={() => { setSearchProject("All Projects"); setSearchLocation("All Locations"); setSearchStatus("All Status"); }}>Reset search</button></div>}
          </div>
            {showPropertyNavigation && <button className={`propertyNav propertyNavNext${propertyNavigationClass}`} type="button" aria-label="Next featured property" onClick={() => scrollProperties(1)}><svg viewBox="0 0 24 24"><path d="m9 5 7 7-7 7" /></svg></button>}
          </div>

        </div>
      </section>

      <section className="servicesSection" id="services">
        <div className="shell">
          <div className="servicesTop">
            <div><p className="eyebrow">Our Development Portfolio</p><h2>Places to Live.<br />Work. Grow.</h2></div>
            <div className="servicesIntro"><p>From plotted communities and residential neighbourhoods to commercial environments, every ROOF development is shaped with purpose.</p><a href="#contact">Connect with our project team <span>→</span></a></div>
            <div className="servicesMantra" aria-hidden="true"><i /><span>Three Spaces.<br />A Brighter Tomorrow.</span></div>
          </div>
          <div className="servicesGrid">
            {services.map((service) => (
              <a className="serviceCard" href={service.href} key={service.title} aria-label={`Explore ${service.title}`}>
                <Image src={service.image} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 25vw" />
                <div className="serviceShade" />
                <span className="serviceNumber">{service.number}</span>
                <div className="serviceCopy"><h3>{service.title}</h3><p>{service.tagline}</p><span className="serviceArrow" aria-hidden="true">→</span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="milestonesSection" hidden aria-hidden="true">
        <div className="milestonesBackdrop" role="img" aria-label="ROOF commercial development" />
        <div className="milestonesShade" />
        <div className="milestonesShell shell"><div className="milestonesGrid">{milestones.map((item, index) => <article key={item.label}><AnimatedMilestone value={item.value} delay={index * 110} /><h3>{item.label}</h3></article>)}</div></div>
      </section>

      <section className="buildersSection" id="development-approach" aria-labelledby="builders-title">
        <div className="developerStatement shell">
          <div className="developerStatementVisual">
            <Image src="/projects/south-city-greens/community-aerial.jpg" alt="Aerial view of a thoughtfully planned residential community" fill sizes="(max-width: 820px) 100vw, 56vw" />
            <div className="developerVisualShade" />
            <span className="developerVisualLabel">Planned communities · Enduring value</span>
          </div>
          <div className="developerStatementContent">
            <div className="buildersHeading">
              <span className="eyebrow">Built With Purpose</span>
              <h2 id="builders-title">From Land to <span className="scriptAccent">Landmark.</span></h2>
              <p>We develop more than square feet. We shape well-planned addresses through thoughtful design, dependable infrastructure and a long-term view of how communities live and grow.</p>
              <a className="goldButton roofPromiseButton" href="/properties"><span>Explore Our Developments</span><ButtonArrow /></a>
            </div>
            <div className="developerPhases" aria-label="Our development approach">
              {developmentPhases.map((item) => (
                <article className="developerPhase" key={item.number}><span>{item.number}</span><h3>{item.title}</h3></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="signatureSection" id="about-us">
        <div className="signatureShell shell">
          <div className="signatureVisuals">
            <div className="signatureMainImage">
              <Image src="/south-city-greens.webp" alt="South City Greens plotted development by ROOF Builders and Developers" fill sizes="(max-width: 900px) 92vw, 58vw" />
              <span className="imageLabel">Communities planned for long-term value</span>
            </div>
            <div className="signatureSmallImage">
              <Image src="/projects/dream-valley/dream-valley-banner-1.png" alt="Dream Valley entrance in Sector 7, Jhajjar" fill sizes="(max-width: 600px) 42vw, 260px" />
            </div>
            <div className="signatureMonogram" aria-hidden="true">ROOF</div>
          </div>

          <div className="signatureContent">
            <p className="eyebrow">How We Build</p>
            <h2>Development with<br />Discipline. Designed<br /><span className="scriptAccent">Around Life.</span></h2>
            <p className="signatureLead">Every ROOF development begins with the land and a long-term vision—bringing planning, infrastructure, landscape and everyday experience together as one complete community.</p>
            <div className="signaturePoints">
              <div><span>01</span><p><strong>Thoughtful Masterplanning</strong>Roads, plots, open spaces and essential infrastructure planned as one connected environment.</p></div>
              <div><span>02</span><p><strong>Strategic Land Selection</strong>Locations chosen through access, surrounding infrastructure and their capacity for sustained growth.</p></div>
              <div><span>03</span><p><strong>Quality Infrastructure</strong>Every layer—from circulation and services to landscape—is developed for dependable everyday use.</p></div>
              <div><span>04</span><p><strong>Enduring Communities</strong>Places designed to mature with time and support belonging, liveability and long-term value.</p></div>
            </div>
            <a className="goldButton signatureButton" href="/about"><span>Know Our Story</span><ButtonArrow /></a>
          </div>
        </div>
      </section>

      <section className="locationsSection" hidden aria-hidden="true">
        <div className="shell">
          <div className="locationsHeading"><div><p className="eyebrow">Prime Locations</p><h2>Addresses Positioned<br />for What Comes Next.</h2></div><p>Explore active real estate corridors through connectivity, neighbourhood potential and the kind of opportunity that suits your next move.</p></div>
          <div className="locationsGrid">
            {locations.map((location, index) => <article className="locationCard" key={location.area}><Image src={location.image} alt={`${location.area} property corridor`} fill sizes="(max-width: 820px) 92vw, 34vw" /><div className="locationShade" /><span className="locationIndex">0{index + 1}</span><div className="locationCopy"><small>{location.city}</small><h3>{location.area}</h3><p>{location.note}</p><a href={location.href}>Explore Location <span>↗</span></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="videoStory" aria-label="ROOF brand film" hidden aria-hidden="true">
        <div className="videoStoryShell">
          <video className="videoStoryMedia" autoPlay loop muted playsInline preload="metadata" poster="/luxury-villa-hero.png">
            <source src="/video/roof-brand-film.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="scrollStorySection" id="development-vision" aria-label="The ROOF development philosophy">
        <div className="scrollStoryFrame" onTouchStart={(event) => { scrollStoryTouchX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
          if (scrollStoryTouchX.current === null) return;
          const distance = event.changedTouches[0].clientX - scrollStoryTouchX.current;
          if (Math.abs(distance) > 45) setActiveScrollStory((current) => (current + (distance < 0 ? 1 : scrollStory.length - 1)) % scrollStory.length);
          scrollStoryTouchX.current = null;
        }}>
          <Image className="scrollStoryImage" src="/generated-portfolio/plotted-communities-v1.png" alt="A masterplanned plotted community with roads, green spaces and connected infrastructure" fill sizes="100vw" />
          <div className="scrollStoryShade" />
          <div className={`scrollStoryContent ${activeScrollStory === 0 ? "intro" : ""}`} key={activeScrollStory}>
            <p>{scrollStory[activeScrollStory].kicker}</p>
            <h2>{activeScrollStory === 0 ? <><span>Development,</span><span>Considered</span><span>From Every Angle.</span></> : scrollStory[activeScrollStory].title}</h2>
            {scrollStory[activeScrollStory].text && <div>{scrollStory[activeScrollStory].text}</div>}
          </div>
          <div className="scrollStoryDots" aria-label="Story slides">{scrollStory.map((item, index) => <button className={index === activeScrollStory ? "active" : ""} type="button" aria-label={`Show ${item.kicker}`} aria-current={index === activeScrollStory ? "true" : undefined} onClick={() => setActiveScrollStory(index)} key={item.kicker} />)}</div>
          <span className="scrollStoryHint">Scroll to explore</span>
        </div>
        <div className="scrollStoryTrack" aria-hidden="true">
          {scrollStory.map((item, index) => <div className="scrollStoryTrigger" data-story-index={index} key={item.kicker} />)}
        </div>
      </section>

      <section className="experienceSection" hidden aria-hidden="true">
        <div className="experienceShell shell">
          <div className="experienceLayout">
            <div className="experienceVisual">
              <Image src="/category-plot.webp" alt="A planned plotted community with connected roads, green spaces and development infrastructure" fill sizes="(max-width: 850px) 92vw, 90vw" />
              <div className="experienceVisualShade" />
              <div className="experienceStatement"><span>Planned for living, business and growth</span><h3>Every Opportunity,<br />Considered in Context.</h3></div>
              <div className="experienceHotspots" aria-label="Explore lifestyle amenities">
                {lifestyleAmenities.map((amenity, index) => <button className={index === activeAmenity ? "active" : ""} style={amenity.position} type="button" aria-label={amenity.title} aria-pressed={index === activeAmenity} onClick={() => setActiveAmenity(index)} key={amenity.number}><span>{amenity.number}</span></button>)}
              </div>
              <div className="experienceDetail" key={activeAmenity}>
                <span>{lifestyleAmenities[activeAmenity].number}</span>
                <div><h4>{lifestyleAmenities[activeAmenity].title}</h4><p>{lifestyleAmenities[activeAmenity].text}</p></div>
              </div>
              <a className="goldButton experienceFloatingCta" href="#projects"><span>Explore the Experience</span><ButtonArrow /></a>
            </div>
            <div className="experienceMobileCards">
              {lifestyleAmenities.map((amenity, index) => <button className={index === activeAmenity ? "active" : ""} type="button" onClick={() => setActiveAmenity(index)} key={amenity.number}><span>{amenity.number}</span><strong>{amenity.title}</strong></button>)}
            </div>
          </div>
        </div>
      </section>

      <section className="planShowcase" id="development-portfolio-visual" ref={planShowcaseRef} aria-label="ROOF planned developments">
        <div className="movingRoof" aria-hidden="true">ROOF</div>
        <div className="planCopy">
          <p className="planKicker">Signature Developments</p>
          <h2>A Vision<br />Taking Shape.</h2>
          <p className="planDescription">Thoughtfully planned communities where architecture, landscape and everyday living come together.</p>
          <a className="goldButton planButton" href="#projects"><span>Explore Our Developments</span><ButtonArrow /></a>
        </div>
        <div className="planImage">
          <Image src="/generated-portfolio/roof-tower-masterplan-v2.webp" alt="Three-tower residential masterplan with landscaped gardens, water features and a grand entrance" fill sizes="(max-width: 700px) 112vw, 68vw" loading="eager" />
        </div>
        <div className="planIndex" aria-hidden="true">BUILT FOR TOMORROW</div>
      </section>

      <section className="sustainabilitySection" hidden aria-hidden="true">
        <div className="sustainabilityShell shell">
          <div className="sustainabilityHeading">
            <div><p className="eyebrow">Selected Properties</p><h2>Find Your Next<br /><span className="scriptAccent">Remarkable Address.</span></h2></div>
            <a href="#projects">View All Properties <span>→</span></a>
          </div>
          <div className="sustainabilityShowcase">
            <div className="sustainabilityImage">
              <Image src={showcaseProjects[activeShowcaseProject].image} alt={showcaseProjects[activeShowcaseProject].name} fill sizes="(max-width: 850px) 92vw, 44vw" key={showcaseProjects[activeShowcaseProject].image} />
              <span>0{activeShowcaseProject + 1} / 0{showcaseProjects.length}</span>
            </div>
            <div className="sustainabilityContent" key={showcaseProjects[activeShowcaseProject].name}>
              <h3>{showcaseProjects[activeShowcaseProject].name}</h3>
              <div className="sustainabilityFacts"><div><span>Location</span><strong>{showcaseProjects[activeShowcaseProject].location}</strong></div><div><span>Property Type</span><strong>{showcaseProjects[activeShowcaseProject].type}</strong></div></div>
              <div className="sustainabilityFeatures">
                {showcaseProjects[activeShowcaseProject].features.map((feature) => <article key={feature.label}><ProjectAmenityIcon type={feature.icon} /><span>{feature.label}</span></article>)}
              </div>
              <a className="goldButton sustainabilityButton" href={showcaseProjects[activeShowcaseProject].href} target="_blank" rel="noreferrer"><span>View Project</span><ButtonArrow /></a>
              <div className="sustainabilityControls">
                <button type="button" aria-label="Previous project" onClick={() => setActiveShowcaseProject((activeShowcaseProject - 1 + showcaseProjects.length) % showcaseProjects.length)}>←</button>
                <div>{showcaseProjects.map((project, index) => <button className={index === activeShowcaseProject ? "active" : ""} type="button" aria-label={`Show ${project.name}`} onClick={() => setActiveShowcaseProject(index)} key={project.name} />)}</div>
                <button type="button" aria-label="Next project" onClick={() => setActiveShowcaseProject((activeShowcaseProject + 1) % showcaseProjects.length)}>→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="plotAmenitiesSection" aria-labelledby="plot-amenities-title">
        <div className="plotAmenitiesShell shell">
          <div className="plotAmenitiesHeading">
            <p className="eyebrow">Plotted Living Essentials</p>
            <h2 id="plot-amenities-title">Planned Around <span className="scriptAccent">Everyday Life.</span></h2>
            <p>Features that bring structure, comfort and community value to a thoughtfully planned plotted address.</p>
          </div>
          <div className="plotAmenitiesViewport">
            <div className="plotAmenitiesGrid">
              {[...plottedAmenities, ...plottedAmenities].map((amenity, index) => <article aria-hidden={index >= plottedAmenities.length} key={`${amenity.title}-${index}`}>
                <Image src={amenity.image} alt={index < plottedAmenities.length ? amenity.title : ""} fill sizes="(max-width: 640px) 78vw, 20vw" />
                <div className="plotAmenityShade" />
                <div><h3>{amenity.title}</h3><p>{amenity.text}</p></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="plotGallerySection" id="project-gallery" aria-labelledby="plot-gallery-title">
        <div className="shell">
          <div className="plotGalleryHeading"><div><p className="eyebrow">Project Gallery</p><h2 id="plot-gallery-title">See the Plan.<br /><span className="scriptAccent">Follow the Progress.</span></h2></div><p>Explore project masterplans, development views, and on-ground progress to see how Dream Valley is taking shape.</p></div>
          {plottedGallery.length>1&&<div className="plotProjectTabs" role="tablist" aria-label="Choose a plotted development">
            {plottedGallery.map((project, index) => <button className={activeGalleryProject === index ? "active" : ""} type="button" role="tab" aria-selected={activeGalleryProject === index} onClick={() => { setActiveGalleryProject(index); setActiveGalleryCategory(0); }} key={project.title}><span>0{index + 1}</span><strong>{project.title}</strong><small>{project.location}</small></button>)}
          </div>}
          {plottedGallery.length===1&&<div className="plotSingleProject"><strong>{plottedGallery[0].title}</strong><i aria-hidden="true" /><small>{plottedGallery[0].location}</small><b><span aria-hidden="true" />Ongoing</b></div>}
          <div className="plotGalleryToolbar">
            <div className="plotCategoryTabs" role="tablist" aria-label={`${plottedGallery[activeGalleryProject].title} gallery categories`}>
              {plottedGallery[activeGalleryProject].categories.map((category, index) => <button className={activeGalleryCategory === index ? "active" : ""} type="button" role="tab" aria-selected={activeGalleryCategory === index} onClick={() => setActiveGalleryCategory(index)} key={category.label}><GalleryTabIcon label={category.label} />{category.label}</button>)}
            </div>
            <a href={plottedGallery[activeGalleryProject].href} target="_blank" rel="noreferrer">View Project <span aria-hidden="true">→</span></a>
          </div>
          {activeGallery.label === "Amenities" ? (
            <div className="projectAmenitiesGrid" key={`${activeGalleryProject}-${activeGalleryCategory}`}>
              {activeGallery.amenities?.map((amenity, index) => <article key={amenity}>
                <div className="projectAmenityIcon"><GalleryAmenityIcon index={index} /></div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{amenity}</h3>
              </article>)}
            </div>
          ) : (
            <div className={`plotGalleryGrid count${galleryImages.length}`} key={`${activeGalleryProject}-${activeGalleryCategory}`}>
              {galleryImages.map((image, index) => <article key={`${image}-${index}`}>
                <button className="plotGalleryImageButton" type="button" onClick={() => { setGalleryZoom(1); setGalleryModalIndex(index); }} aria-label={`Open ${plottedGallery[activeGalleryProject].title} ${activeGallery.label} image ${index + 1}`}>
                  <Image src={image} alt={`${plottedGallery[activeGalleryProject].title} ${activeGallery.label} ${index + 1}`} fill sizes={index === 0 ? "(max-width: 800px) 92vw, 58vw" : "(max-width: 800px) 92vw, 30vw"} />
                  <div className="plotGalleryShade" /><span>0{index + 1}</span><i aria-hidden="true">↗</i>
                </button>
              </article>)}
            </div>
          )}
        </div>
      </section>

      {galleryModalIndex !== null && galleryImages[galleryModalIndex] && (
        <div className="galleryLightbox" role="dialog" aria-modal="true" aria-label={`${plottedGallery[activeGalleryProject].title} image preview`} onMouseDown={(event) => { if (event.target === event.currentTarget) setGalleryModalIndex(null); }}>
          <button className="galleryLightboxClose" type="button" onClick={() => setGalleryModalIndex(null)} aria-label="Close image preview">×</button>
          {galleryImages.length > 1 && <button className="galleryLightboxNav galleryLightboxPrev" type="button" onClick={() => { setGalleryZoom(1); setGalleryModalIndex((galleryModalIndex - 1 + galleryImages.length) % galleryImages.length); }} aria-label="Previous image">←</button>}
          <div className={`galleryLightboxImage ${galleryZoom>1?"isZoomed":""}`}
            onClick={()=>{if(galleryDidPinch.current){galleryDidPinch.current=false;return}if(galleryDidDrag.current){galleryDidDrag.current=false;return}if(galleryZoom===1)setGalleryZoom(2.5)}}
            onWheel={(event)=>{event.preventDefault();setGalleryZoom((current)=>Math.max(1,Math.min(3,current+(event.deltaY<0?0.25:-0.25))))}}
            onPointerDown={(event)=>{if(galleryZoom<=1||galleryPinching.current)return;galleryDidDrag.current=false;galleryDrag.current={x:event.clientX,y:event.clientY,panX:galleryPan.x,panY:galleryPan.y};event.currentTarget.setPointerCapture(event.pointerId)}}
            onPointerMove={(event)=>{if(!galleryDrag.current||galleryPinching.current)return;const dx=event.clientX-galleryDrag.current.x;const dy=event.clientY-galleryDrag.current.y;if(Math.abs(dx)+Math.abs(dy)>4)galleryDidDrag.current=true;const maxX=event.currentTarget.clientWidth*(galleryZoom-1)/2;const maxY=event.currentTarget.clientHeight*(galleryZoom-1)/2;setGalleryPan({x:Math.max(-maxX,Math.min(maxX,galleryDrag.current.panX+dx)),y:Math.max(-maxY,Math.min(maxY,galleryDrag.current.panY+dy))})}}
            onPointerUp={(event)=>{galleryDrag.current=null;if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId)}}
            onPointerCancel={()=>{galleryDrag.current=null}}
            onTouchStart={(event)=>{if(event.touches.length===2){galleryPinching.current=true;galleryDrag.current=null;const [a,b]=[event.touches[0],event.touches[1]];galleryPinchDistance.current=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);galleryDidPinch.current=true}}}
            onTouchMove={(event)=>{if(event.touches.length===2&&galleryPinchDistance.current){event.preventDefault();const [a,b]=[event.touches[0],event.touches[1]];const distance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);const ratio=distance/galleryPinchDistance.current;setGalleryZoom((current)=>Math.max(1,Math.min(3,current*ratio)));galleryPinchDistance.current=distance}}}
            onTouchEnd={(event)=>{if(event.touches.length<2){galleryPinchDistance.current=null;galleryPinching.current=false}}}
            title={galleryZoom>1?"Drag to move the zoomed image":"Click or scroll to zoom in"}>
            <Image src={galleryImages[galleryModalIndex]} alt={`${plottedGallery[activeGalleryProject].title} ${activeGallery.label} enlarged view`} fill sizes="96vw" priority draggable={false} style={{transform:`translate(${galleryZoom>1?galleryPan.x:0}px,${galleryZoom>1?galleryPan.y:0}px) scale(${galleryZoom})`}} />
          </div>
          <div className="galleryZoomControls" aria-label="Image zoom controls"><button type="button" onClick={()=>setGalleryZoom((current)=>Math.max(1,current-.5))} disabled={galleryZoom===1} aria-label="Zoom out">−</button><span>{Math.round(galleryZoom*100)}%</span><button type="button" onClick={()=>setGalleryZoom((current)=>Math.min(3,current+.5))} disabled={galleryZoom===3} aria-label="Zoom in">+</button><button type="button" onClick={()=>setGalleryZoom(1)} disabled={galleryZoom===1}>Reset</button></div>
          {galleryImages.length > 1 && <button className="galleryLightboxNav galleryLightboxNext" type="button" onClick={() => { setGalleryZoom(1); setGalleryModalIndex((galleryModalIndex + 1) % galleryImages.length); }} aria-label="Next image">→</button>}
          <div className="galleryLightboxCaption"><strong>{plottedGallery[activeGalleryProject].title}</strong><span>{activeGallery.label} · {String(galleryModalIndex + 1).padStart(2, "0")}</span></div>
        </div>
      )}

      <section className="roofStandardSection" id="roof-standard" aria-labelledby="roof-standard-title">
        <div className="roofStandardHero">
          <div className="roofStandardCopy">
            <p className="eyebrow">The ROOF Standard</p>
            <h2 id="roof-standard-title">More Than Property.<br /><span className="scriptAccent">A Clearer Perspective.</span></h2>
            <p>We look beyond the immediate transaction to create well-planned, considered and future-ready developments that add lasting value.</p>
            <a className="goldButton" href="/about"><span>Discover Our Approach</span><ButtonArrow /></a>
          </div>
          <div className="roofStandardVisual">
            <Image src="/generated-amenities/gated-entry-v1.png" alt="A thoughtfully planned gated community entrance at sunset" fill sizes="(max-width: 760px) 100vw, 58vw" />
          </div>
        </div>
        <div className="roofStandardLower shell">
          <div className="roofStandardGrid">
            {roofStandards.map((item) => <article key={item.title}><RoofStandardIcon type={item.icon} /><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
          <div className="roofStandardRule" aria-hidden="true">
            <i /><span><svg viewBox="0 0 64 42"><path d="M9 37V18l11-6v25M23 37V8l9-6 9 6v29M44 37V16l11 5v16M4 37h56M28 37V18h8v19" /></svg></span><i />
          </div>
        </div>
      </section>

      <section className="journeySection" hidden aria-hidden="true">
        <div className="journeyShell shell">
          <div className="journeyVisual">
            <Image src="/signature-courtyard.png" alt="Private landscaped courtyard with natural stone and water" fill sizes="(max-width: 850px) 92vw, 40vw" loading="eager" />
            <div className="journeyCaption"><span>ROOF</span><p>Considered from<br />every perspective.</p></div>
          </div>
          <div className="journeyContent">
            <p className="eyebrow">Your Journey With Roof</p>
            <h2>From Land to Landmark.<br /><span className="scriptAccent">A Clearer Journey.</span></h2>
            <p className="journeyLead">From understanding plotted opportunities and development context to comparing residences and commercial spaces, every step stays considered and informed.</p>
            <div className="journeySteps">
              {journey.map((step) => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonialsSection" id="google-reviews" aria-labelledby="testimonials-title">
        <div className="testimonialsShell shell">
          <div className="testimonialsIntro">
            <div><p className="eyebrow">Google Reviews</p><h2 id="testimonials-title">Trust, Told Through<br /><span className="scriptAccent">Real Experiences.</span></h2></div>
            <div className="testimonialsIntroCopy"><p>Strong developments are ultimately measured by the confidence of the people who choose them. Read their ROOF experience.</p></div>
          </div>
          <div className="testimonialStage">
            <div className="testimonialViewport">
              <div className="testimonialCards" style={{ transform: `translateX(calc(var(--testimonial-step) * -${activeTestimonial}))` }}>
                {testimonials.map((testimonial, index) => (
                  <article className={index === activeTestimonial ? "testimonialCard active" : "testimonialCard"} key={testimonial.name}>
                    <div className="testimonialGoogleHeader">
                      <div className="testimonialPerson"><span>{testimonial.image ? <Image src={testimonial.image} alt={`${testimonial.name} Google profile`} width={48} height={48} /> : testimonial.name.split(" ").map((part) => part[0]).join("")}</span><div><strong>{testimonial.name}</strong><small>{testimonial.meta}</small></div></div>
                      <span className="googleReviewBrand" aria-label="Google review"><GoogleGIcon /><small>Google</small></span>
                    </div>
                    <div className="testimonialRating" aria-label={`${testimonial.rating} out of 5 stars`}><span aria-hidden="true">{"★".repeat(testimonial.rating)}</span><small>{testimonial.rating}.0</small></div>
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="testimonialGoogleSource"><GoogleGIcon /><small>Google review</small></div>
                  </article>
                ))}
              </div>
            </div>
            <button className="testimonialNav testimonialPrev" type="button" aria-label="Previous client story" onClick={() => setActiveTestimonial((current) => current <= 0 ? testimonialLastSlide : current - 1)}>←</button>
            <button className="testimonialNav testimonialNext" type="button" aria-label="Next client story" onClick={() => setActiveTestimonial((current) => current >= testimonialLastSlide ? 0 : current + 1)}>→</button>
          </div>
        </div>
      </section>

      <section className="insightsSection" id="blog">
        <div className="shell"><div className="sectionHeading"><div><p className="eyebrow">The ROOF Journal</p><h2>Clarity Before the Next Move.</h2></div><a className="goldButton" href="/blogs"><span>View All Stories</span><ButtonArrow /></a></div><div className="insightsGrid">{insights.map((item) => <article key={item.slug}><div className="insightImage"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 92vw, 33vw" /></div><div className="insightCopy"><div><span>{item.tag}</span><small>{item.date}</small></div><h3>{item.title}</h3><a href={`/blogs/${item.slug}`}>Read story <span>↗</span></a></div></article>)}</div></div>
      </section>

      <section className="faqSection" id="faq">
        <div className="faqShell shell"><div className="faqIntro"><p className="eyebrow">Frequently Asked</p><h2>Before You<br />Begin.</h2><p>Quick answers for buyers, investors and partners exploring ROOF.</p><a className="goldButton" href="#contact"><span>Ask Us Anything</span><ButtonArrow /></a></div><div className="faqList">{faqs.map((faq, index) => <article className={`faqItem ${activeFaq === index ? "open" : ""}`} key={faq.q}><button type="button" aria-expanded={activeFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>0{index + 1}</span><strong>{faq.q}</strong><i /></button><div className="faqAnswer" id={`faq-answer-${index}`}><div><p>{faq.a}</p></div></div></article>)}</div></div>
      </section>

      <section className="siteVisitSection" id="contact">
        <div className="siteVisitImage"><Image src="/category-plot.webp" alt="Planned plotted community available for a site visit" fill sizes="100vw" /></div>
        <div className="siteVisitShade" />
        <div className="siteVisitShell shell">
          <div className="siteVisitContent">
            <p className="eyebrow">Guided Site Visit</p>
            <h2>Book a Site Visit with Our<br /><span className="siteVisitAccent">Project Experts.</span></h2>
            <p>At ROOF, we believe every property decision deserves firsthand clarity. Explore the masterplan, location and development progress with guidance from our project experts.</p>
            <div className="siteVisitBenefits">
              <div><span><Icon name="building" /></span><strong>Project<br />Walkthrough</strong></div>
              <div><span><Icon name="pin" /></span><strong>Masterplan<br />Clarity</strong></div>
              <div><span><Icon name="grade" /></span><strong>Development<br />Updates</strong></div>
              <div><span><Icon name="phone" /></span><strong>End-to-End<br />Support</strong></div>
            </div>
            <div className="siteVisitContact">
              <div className="siteVisitContactHead"><h3>Get in Touch</h3><p>Need help planning your visit? Speak directly with our project team.</p></div>
              <div className="siteVisitContactGrid">
                <a href="tel:+919876543210"><span><Icon name="phone" /></span><p><small>Call our team</small><strong>+91 98765 43210</strong></p></a>
                <a href="mailto:info@roofbuildersanddevelopers.com"><span><FooterIcon type="mail" /></span><p><small>Email us</small><strong>info@roofbuildersanddevelopers.com</strong></p></a>
              </div>
            </div>
          </div>
          <form className="siteVisitForm" onSubmit={(event) => event.preventDefault()}>
            <div className="siteVisitFormImage"><Image src="/generated-site-visit/site-visit-lifestyle-v3.webp" alt="Guided site visit: see the place and feel the possibility" fill sizes="(max-width: 900px) 100vw, 520px" /></div>
            <div className="siteVisitFormBody">
              <label><span>Your Name</span><input type="text" name="name" placeholder="Enter your name" autoComplete="name" required /></label>
              <label><span>Phone Number</span><div className="siteVisitPhone"><b>+91</b><input type="tel" name="phone" placeholder="Enter your phone number" autoComplete="tel" required /></div></label>
              <label><span>Location</span><input type="text" name="location" placeholder="Enter your preferred location" autoComplete="address-level2" required /></label>
              <button className="goldButton" type="submit"><span>Schedule My Site Visit</span><ButtonArrow /></button>
              <label className="siteVisitConsent"><input type="checkbox" name="consent" required /><span>I agree to be contacted by the ROOF team regarding this site visit request.</span></label>
            </div>
          </form>
        </div>
      </section>

      <section className="finalCta" hidden aria-hidden="true">
        <div className="finalCtaImage"><Image src="/luxury-villa-hero.png" alt="Luxury ROOF residence illuminated at dusk" fill sizes="100vw" /></div>
        <div className="finalCtaShade" />
        <div className="finalCtaContent shell">
          <div><p className="eyebrow">Your Next Chapter</p><h2>Let’s Create Something<br />Remarkable Together.</h2></div>
          <a className="goldButton" href="tel:+919876543210"><span>Book a Private Consultation</span><ButtonArrow /></a>
        </div>
      </section>

      <SiteFooter/>
      <PageEnhancements scope=".__homepage_assistant__" assistantOnly />
    </main>
  );
}
