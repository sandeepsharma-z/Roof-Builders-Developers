import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "./faq.module.css";

export const metadata:Metadata={
  title:"Frequently Asked Questions | ROOF Builders & Developers",
  description:"Answers about ROOF developments, project information, site visits, pricing, bookings, payments, cancellations and channel partnerships.",
};

const faqGroups=[
  {
    title:"About ROOF",
    items:[
      ["What types of developments does ROOF create?","ROOF focuses on thoughtfully planned plotted, residential and commercial developments designed around dependable infrastructure, usable open spaces, connectivity and long-term community value."],
      ["Where are ROOF developments located?","Our current website highlights developments in Jhajjar, Pataudi, Haridwar and other connected growth corridors. Every project page includes its exact location and available connectivity information."],
      ["Which properties are currently featured?","The current collection includes Dream Valley in Sector 7, Jhajjar, along with upcoming plotted developments in Sector 27, Jhajjar and Sectors 1 and 4, Pataudi. Availability and launch information should always be confirmed with our project team."],
    ],
  },
  {
    title:"Project Information",
    items:[
      ["What should I evaluate before choosing a plotted development?","Review the location and approach roads, approved layout, plot dimensions, internal infrastructure, open spaces, utilities, project documentation, development status and the surrounding growth corridor."],
      ["Where can I find project approvals and RERA details?","Available registration and approval details are shown on the relevant project page or in its official documents. Request the latest approved documents from our team and verify applicable information with the relevant authority before booking."],
      ["Are website images and renders final?","Artistic impressions, maps and computer-generated visuals are representational. Final specifications, landscaping and finishes may evolve in accordance with approved plans, project documents and applicable law."],
      ["How do I receive current pricing and availability?","Submit an enquiry from the project or Contact page. Our team will share the latest confirmed inventory, applicable pricing, payment plan and availability for the property you are considering."],
      ["Can project information change?","Yes. Pricing, inventory, specifications, offers and development schedules may change. The latest written project communication and executed documents take precedence over older website or promotional information."],
    ],
  },
  {
    title:"Site Visits & Consultation",
    items:[
      ["Can I schedule a project site visit?","Yes. Use the site-visit form or Contact page and our team will coordinate a guided visit at an available time."],
      ["What happens during a guided site visit?","The project team can walk you through the approach, layout, available plots or units, planned infrastructure, current development status and the next steps relevant to your enquiry."],
      ["What should I carry for a site visit?","A regular exploratory visit usually requires only your contact details and confirmed appointment. If documentation is needed for a booking or application, our team will communicate the required KYC documents separately."],
      ["Can I request a consultation before visiting?","Yes. You can first speak with our team about your preferred location, property format, purpose and budget so the visit can focus on relevant options."],
    ],
  },
  {
    title:"Booking & Payments",
    items:[
      ["Does submitting an enquiry reserve a property?","No. An enquiry, callback request or site-visit registration does not create a booking or allotment. A property is reserved only after the required process, payment and written confirmation are completed."],
      ["How does the booking process work?","After selecting a property, our team will explain current availability, application requirements, payment schedule and project documents. Booking is confirmed according to the accepted application or allotment terms."],
      ["How should I make a payment?","Make payments only through bank details or payment methods officially communicated by ROOF. Always obtain and retain an authorized receipt or written acknowledgement."],
      ["Are home loans or finance facilities available?","Financing availability depends on the project, applicant eligibility and the lender’s independent assessment. Our team can share available project-related information, but loan approval remains the lender’s decision."],
      ["What is the cancellation and refund process?","Cancellation and refund eligibility depends on the relevant application, booking or allotment documents and applicable law. Review our Refund & Cancellation Policy and submit any request in writing with the required details."],
    ],
  },
  {
    title:"Support & Partnerships",
    items:[
      ["How can I receive project development updates?","You can contact the relevant project team or use the enquiry form. Updates displayed on the website and gallery are supplemented by the latest information shared directly by our authorized team."],
      ["How do I become a ROOF channel partner?","Complete the Become a Partner form with your professional and company details. Our partnership team will review the registration and contact you regarding the next steps."],
      ["How does ROOF use the information submitted through forms?","We use submitted information to respond to enquiries, coordinate visits, manage registrations and provide requested services. Please review our Privacy Policy for details about collection, use, sharing and your choices."],
      ["How can I contact ROOF?","Call +91 98765 43210, email info@roofbuildersanddevelopers.com or visit the Contact page. Our office is at Unit No. 401, 4th Floor, Welldone Techpark, Sector 48, Sohna Road, Gurgaon, Haryana."],
    ],
  },
];

export default function FaqPage(){
  let number=0;
  return <main className={styles.page}>
    <SiteHeader active="FAQs"/>
    <section className={styles.hero}>
      <div className={styles.heroShade}/>
      <div className={styles.heroContent}><p>Frequently Asked Questions</p><h1>Answers Before<br/><em>Your Next Step.</em></h1><span>Clear information for buyers, visitors and channel partners exploring ROOF.</span></div>
    </section>
    <section className={styles.faqSection}>
      <div className={styles.intro}><p>Quick Guidance</p><h2>Everything You May<br/><em>Want to Know.</em></h2><span>Select a question to view the answer. For project-specific information, our team can help with the latest verified details.</span></div>
      <div className={styles.groups}>{faqGroups.map((group)=><section className={styles.group} key={group.title}><h2>{group.title}</h2><div>{group.items.map(([question,answer])=>{number+=1;return <details className={styles.item} key={question}><summary><span>{String(number).padStart(2,"0")}</span><strong>{question}</strong><i aria-hidden="true"/></summary><p>{answer}</p></details>})}</div></section>)}</div>
    </section>
    <section className={styles.cta}><div><p>Still Have a Question?</p><h2>Speak with Our<br/><em>Project Team.</em></h2></div><Link className="goldButton" href="/contact"><span>Contact ROOF</span><span className="buttonArrow" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M5.5 14.5 14.5 5.5M8 5.5h6.5V12"/></svg></span></Link></section>
    <SiteFooter/>
  </main>
}
