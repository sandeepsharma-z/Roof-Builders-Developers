import PropertyArchive, { type ArchiveProperty } from "../PropertyArchive";

const root = "/roof-assets-infra-featured-properties/";

const legacyProperties: ArchiveProperty[] = [
  { name:"South City Greens", location:"Jhajjar", area:"Sector 36", price:"₹51.75 Lakh*", priceLakh:51.75, image:root+"south-city-greens-sector-36-jhajjar/featured.webp", href:"/projects/south-city-greens", tag:"Plot · Featured" },
  { name:"Dream Valley", location:"Jhajjar", area:"Sector 7", price:"₹62.51 Lakh*", priceLakh:62.51, image:"/projects/dream-valley/dream-valley-banner-1.png", href:"/projects/dream-valley", tag:"Plot · Premium" },
  { name:"Shree Hari Enclave", location:"Haridwar", area:"Bahadrabad Bypass", price:"₹55 Lakh*", priceLakh:55, image:"/projects/shree-hari-enclave/banner-image-1.png", href:"/projects/shree-hari-enclave", tag:"Plot · Township" },
  { name:"Saras City Phase 2", location:"Jhajjar", area:"Sector 21", price:"₹75 Lakh*", priceLakh:75, image:root+"saras-city-phase-2/featured.jpg", href:"https://roofandassetsinfra.com/properties/saras-city-phase-2/", tag:"Plot · DDJAY" },
  { name:"Palm Drive 2", location:"Pataudi", area:"Sector 3", price:"₹85 Lakh*", priceLakh:85, image:root+"palm-drive-2-sector-3-pataudi/featured.png", href:"https://roofandassetsinfra.com/properties/palm-drive-2-sector-3-pataudi/", tag:"Plot · New Launch" },
  { name:"Elite Homes", location:"Jhajjar", area:"Sector 30", price:"₹47 Lakh*", priceLakh:47, image:root+"elite-homes-sector-30-jhajjar/featured.png", href:"https://roofandassetsinfra.com/properties/elite-homes-sector-30-jhajjar/", tag:"Plot · Residential" },
  { name:"Palm Drive", location:"Pataudi", area:"Sector 3", price:"₹1.08 Cr*", priceLakh:108, image:root+"palm-drive-sector-3-pataudi/featured.png", href:"https://roofandassetsinfra.com/properties/palm-drive-sector-3-pataudi/", tag:"Plot · Township" },
  { name:"Mayur City", location:"Jhajjar", area:"Sector 27", price:"₹62 Lakh*", priceLakh:62, image:root+"mayur-city-sector-27-jhajjar/featured.webp", href:"https://roofandassetsinfra.com/properties/mayur-city-sector-27-jhajjar/", tag:"Plot · Plotted Living" },
  { name:"South City I", location:"Jhajjar", area:"Sector 36", price:"₹41 Lakh*", priceLakh:41, image:root+"south-city-i-sector-36-jhajjar/featured.jpg", href:"https://roofandassetsinfra.com/properties/south-city-i-sector-36-jhajjar/", tag:"Plot · Value Pick" },
  { name:"South City II", location:"Jhajjar", area:"Sector 37", price:"₹32 Lakh*", priceLakh:32, image:root+"south-city-ii-sector-37-jhajjar/featured.jpg", href:"https://roofandassetsinfra.com/properties/south-city-ii-sector-37-jhajjar/", tag:"Plot · Affordable" },
  { name:"Green Valley 2", location:"Sohna", area:"Sector 6", price:"₹99 Lakh*", priceLakh:99, image:root+"green-valley-2-sector-6-sohna/featured.jpg", href:"https://roofandassetsinfra.com/properties/green-valley-2-sector-6-sohna/", tag:"Plot · Premium" },
  { name:"Gokulam", location:"Sohna", area:"South Gurugram", price:"₹75 Lakh*", priceLakh:75, image:root+"gokulam/featured.jpg", href:"https://roofandassetsinfra.com/properties/gokulam/", tag:"Plot · Green Township" },
  { name:"Ganga Valley Floors", location:"Gurugram", area:"Sector 78", price:"₹2 Cr*", priceLakh:200, image:root+"ganga-valley-floors-sector-78-gurugram-2/featured.webp", href:"https://roofandassetsinfra.com/properties/ganga-valley-floors-sector-78-gurugram-2/", tag:"Residential · Floors" },
  { name:"LID Nivasa", location:"Sohna", area:"Sector 6", price:"₹1.12 Cr*", priceLakh:112, image:root+"lid-nivasa-sector-6-sohna/featured.jpg", href:"https://roofandassetsinfra.com/properties/lid-nivasa-sector-6-sohna/", tag:"Residential · Low Rise" },
  { name:"Palm Floors", location:"Pataudi", area:"Sector 3", price:"₹87 Lakh*", priceLakh:87, image:root+"palm-floors-sector-3-pataudi/featured.jpg", href:"https://roofandassetsinfra.com/properties/palm-floors-sector-3-pataudi/", tag:"Residential · 3 BHK" },
  { name:"Grace Resilviaa", location:"Gurugram", area:"Sector 78", price:"₹2.05 Cr*", priceLakh:205, image:root+"grace-resilviaa-in-sector-78-gurgaon/featured.jpg", href:"https://roofandassetsinfra.com/properties/grace-resilviaa-in-sector-78-gurgaon/", tag:"Residential · Premium" },
  { name:"Central Avenue", location:"Gurugram", area:"Sector 33", price:"₹4.5 Cr*", priceLakh:450, image:root+"central-avenue-sector-33-gurugram/featured.webp", href:"https://roofandassetsinfra.com/properties/central-avenue-sector-33-gurugram/", tag:"Residential · Luxury" },
  { name:"Avalon Ridgeview", location:"Neemrana", area:"NH-8", price:"₹35 Lakh*", priceLakh:35, image:root+"avalon-ridgeview-neemrana/featured.jpg", href:"https://roofandassetsinfra.com/properties/avalon-ridgeview-neemrana/", tag:"Residential · Value" },
  { name:"Signature Global City 93", location:"Gurugram", area:"Sector 93", price:"₹90 Lakh*", priceLakh:90, image:root+"signature-global-city-93/featured.png", href:"https://roofandassetsinfra.com/properties/signature-global-city-93/", tag:"Residential · Low Rise" },
  { name:"Signature Global City 79B", location:"Gurugram", area:"Sector 79B", price:"₹83 Lakh*", priceLakh:83, image:root+"signature-global-city-79b/featured.png", href:"https://roofandassetsinfra.com/properties/signature-global-city-79b/", tag:"Residential · Urban" },
  { name:"M3M Antalya Hills", location:"Gurugram", area:"Sector 79", price:"₹1.1 Cr*", priceLakh:110, image:root+"m3m-antalya-hills-sector-79-gurgaon/featured.png", href:"https://roofandassetsinfra.com/properties/m3m-antalya-hills-sector-79-gurgaon/", tag:"Residential · Luxury" },
  { name:"Amarah by Ashiana", location:"Gurugram", area:"Sector 93", price:"₹1.19 Cr*", priceLakh:119, image:root+"amarah-by-ashiana/featured.png", href:"https://roofandassetsinfra.com/properties/amarah-by-ashiana/", tag:"Residential · Family" },
  { name:"Imperia Esfera", location:"Gurugram", area:"Sector 37C", price:"₹94.68 Lakh*", priceLakh:94.68, image:root+"imperia-esfera-sector-37c-gurgaon/featured.jpg", href:"https://roofandassetsinfra.com/properties/imperia-esfera-sector-37c-gurgaon/", tag:"Residential · Ready" },
  { name:"Aradhya Homes", location:"Gurugram", area:"Sector 67A", price:"₹1.85 Cr*", priceLakh:185, image:root+"887-2/featured.jpg", href:"https://roofandassetsinfra.com/properties/887-2/", tag:"Residential · Premium" },
  { name:"LID Plaza", location:"Sohna", area:"Sector 6", price:"₹37 Lakh*", priceLakh:37, image:root+"lid-plaza-sector-6-sohna/featured.jpg", href:"https://roofandassetsinfra.com/properties/lid-plaza-sector-6-sohna/", tag:"Commercial · Retail" },
  { name:"Trehan IRIS Broadway", location:"Gurugram", area:"Sector 85", price:"₹36 Lakh*", priceLakh:36, image:root+"trehan-iris-broadway-sector-85-gurugram/featured.jpg", href:"https://roofandassetsinfra.com/properties/trehan-iris-broadway-sector-85-gurugram/", tag:"Commercial · High Street" },
  { name:"LID Mall Street", location:"Sohna", area:"Sector 6", price:"₹37 Lakh*", priceLakh:37, image:root+"lid-mall-street/featured.jpg", href:"https://roofandassetsinfra.com/properties/lid-mall-street/", tag:"Commercial · Retail" },
  { name:"The Omaxe State", location:"Delhi", area:"Sector 19B, Dwarka", price:"₹37.5 Lakh*", priceLakh:37.5, image:root+"the-omaxe-state-sector-19b-dwarka-delhi/featured.jpg", href:"https://roofandassetsinfra.com/properties/the-omaxe-state-sector-19b-dwarka-delhi/", tag:"Commercial · Landmark" },
  { name:"Ameya Sapphire 57", location:"Gurugram", area:"Sector 57", price:"₹1.17 Cr*", priceLakh:117, image:root+"ameya-sapphire-57-gurgaon/featured.jpg", href:"https://roofandassetsinfra.com/properties/ameya-sapphire-57-gurgaon/", tag:"Commercial · Premium" },
  { name:"ROF Normanton Mall", location:"Sohna", area:"Sector 36", price:"₹21 Lakh*", priceLakh:21, image:root+"rof-normanton-mall/featured.jpeg", href:"https://roofandassetsinfra.com/properties/rof-normanton-mall/", tag:"Commercial · Shops" },
  { name:"Devika Sadar", location:"Delhi", area:"Sadar Bazaar", price:"₹24 Lakh*", priceLakh:24, image:root+"devika-sadar/featured.jpg", href:"https://roofandassetsinfra.com/properties/devika-sadar/", tag:"Commercial · Landmark" },
  { name:"Swarnim 35", location:"Sohna", area:"Sector 35", price:"₹30.68 Lakh*", priceLakh:30.68, image:root+"swarnim-sector-35-sohna/featured.jpeg", href:"https://roofandassetsinfra.com/properties/swarnim-sector-35-sohna/", tag:"Commercial · Shops" },
  { name:"GLS Elitaire", location:"Gurugram", area:"Sector 81", price:"₹33.27 Lakh*", priceLakh:33.27, image:root+"gls-elitaire/featured.png", href:"https://roofandassetsinfra.com/properties/gls-elitaire/", tag:"Commercial · Shops" },
  { name:"M3M Prive 73", location:"Gurugram", area:"Sector 73", price:"₹72 Lakh*", priceLakh:72, image:root+"m3m-prive-73-sector-73/featured.png", href:"https://roofandassetsinfra.com/properties/m3m-prive-73-sector-73/", tag:"Commercial · High Street" },
  { name:"M3M Capital Walk 113", location:"Gurugram", area:"Sector 113", price:"₹75 Lakh*", priceLakh:75, image:root+"m3m-capital-walk-sector-113/featured.jpg", href:"https://roofandassetsinfra.com/properties/m3m-capital-walk-sector-113/", tag:"Commercial · Mixed Use" },
  { name:"M3M Route 65", location:"Gurugram", area:"Sector 65", price:"₹50 Lakh*", priceLakh:50, image:root+"m3m-route-65/featured.jpg", href:"https://roofandassetsinfra.com/properties/m3m-route-65/", tag:"Commercial · Retail" },
];

const properties: ArchiveProperty[] = [
  { name:"Dream Valley", location:"Jhajjar", area:"Sector 7", price:"₹60,000 / Sq. Yd.", priceLakh:60, image:"/projects/dream-valley/dream-valley-banner-1.png", href:"/projects/dream-valley", tag:"Plot · Ongoing" },
  { name:"Sector 27", location:"Jhajjar", area:"Sector 27", price:"Coming Soon", priceLakh:0, image:"/vedmaan-projects/sector-27.webp", href:"/coming-soon/sector-27", tag:"Plot · Upcoming" },
  { name:"Sector 1", location:"Pataudi", area:"Sector 1", price:"Coming Soon", priceLakh:0, image:"/vedmaan-projects/sector-1.webp", href:"/coming-soon/sector-1", tag:"Plot · Upcoming" },
  { name:"Sector 4", location:"Pataudi", area:"Sector 4", price:"Coming Soon", priceLakh:0, image:"/vedmaan-projects/sector-4.webp", href:"/coming-soon/sector-4", tag:"Plot · Upcoming" },
];

void legacyProperties;

export default function PropertiesPage() {
  return <PropertyArchive
    eyebrow="Complete Property Collection · Delhi NCR & Beyond"
    title="Every Opportunity."
    scriptTitle="All in One Place."
    heroCopy="Explore ROOF's complete collection of plotted developments, residences and commercial spaces across connected destinations."
    heroImage={root+"south-city-greens-sector-36-jhajjar/featured.webp"}
    sectionEyebrow="All Properties"
    sectionTitle="Find the Right Space"
    sectionScript="for Your Next Move."
    sectionCopy="Search and compare every plotted, residential and commercial opportunity in our current collection."
    resultLabel="properties across all categories"
    properties={properties}
    inventoryFilters
  />;
}
