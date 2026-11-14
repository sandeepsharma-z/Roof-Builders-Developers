import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "./terms.module.css";

export const metadata:Metadata={
  title:"Terms & Conditions | ROOF Builders & Developers",
  description:"Terms and conditions governing the use of the ROOF Builders & Developers website, project information, enquiries and bookings.",
};

export default function TermsAndConditionsPage(){
  return <main className={styles.page}>
    <SiteHeader/>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p>Legal Information</p>
        <h1>Terms &amp; <em>Conditions.</em></h1>
        <span>Effective date: 21 July 2026</span>
      </div>
    </section>

    <section className={styles.content}>
      <div className={styles.intro}>
        <p>Welcome to ROOF Builders &amp; Developers (“ROOF”, “we”, “our” or “us”). By accessing <Link href="https://roofbuildersanddevelopers.com/">roofbuildersanddevelopers.com</Link>, submitting an enquiry or using our services, you agree to these Terms &amp; Conditions.</p>
      </div>

      <article>
        <h2>1. Company Information</h2>
        <dl>
          <div><dt>Brand Name</dt><dd>ROOF Builders &amp; Developers</dd></div>
          <div><dt>Website</dt><dd><a href="https://roofbuildersanddevelopers.com/">roofbuildersanddevelopers.com</a></dd></div>
          <div><dt>Email</dt><dd><a href="mailto:info@roofbuildersanddevelopers.com">info@roofbuildersanddevelopers.com</a></dd></div>
          <div><dt>Address</dt><dd>Unit No. 401, 4th Floor, Welldone Techpark, Sector 48, Sohna Road, Gurgaon – 122001, Haryana, India</dd></div>
        </dl>
      </article>

      <article>
        <h2>2. Nature of Business</h2>
        <p>ROOF Builders &amp; Developers is engaged in planning, developing, promoting and offering residential, commercial and plotted real estate developments. Information about each development, including its location, status and available property formats, is provided on the relevant project page.</p>
      </article>

      <article>
        <h2>3. Website and Project Information</h2>
        <p>Project information, prices, plans, specifications, amenities, dimensions, availability, timelines, photographs, renders, brochures and offers displayed on this website are indicative and may be revised as a development progresses or as permitted by applicable law.</p>
        <p>Artistic impressions, maps, illustrations and computer-generated images are for representation and may not depict the final delivered development exactly. Customers should rely on the latest approved plans, project documents and written communication issued by ROOF before making a decision.</p>
      </article>

      <article>
        <h2>4. Enquiries, Applications and Bookings</h2>
        <p>Submitting an enquiry, scheduling a site visit or registering interest does not create a booking, allotment or ownership right. A property is considered booked or allotted only after completion of the applicable documentation, receipt of the required amount and written confirmation from ROOF.</p>
        <p>Availability remains subject to confirmation at the time of booking. ROOF may accept or decline an application in accordance with project policy and applicable law.</p>
      </article>

      <article>
        <h2>5. Payments</h2>
        <p>Customers must make payments only through payment methods and bank details officially communicated by ROOF. Every payment remains subject to realization, applicable taxes, the relevant payment schedule and issuance of an authorized receipt or written acknowledgement.</p>
        <p>Booking, cancellation, refund and transfer conditions may differ by project and will be governed by the relevant application form, allotment terms, agreement, our <Link href="/refund-cancellation-policy">Refund &amp; Cancellation Policy</Link> and applicable law.</p>
      </article>

      <article>
        <h2>6. Customer Responsibilities</h2>
        <p>Customers agree to:</p>
        <ul>
          <li>Provide complete, current and accurate information.</li>
          <li>Submit valid identity, address, tax and other KYC documents when required.</li>
          <li>Review project documents, approvals, payment schedules and agreements before booking.</li>
          <li>Make payments only to officially communicated accounts and retain valid receipts.</li>
          <li>Comply with applicable laws and the terms of the relevant project documents.</li>
        </ul>
      </article>

      <article>
        <h2>7. Regulatory Information</h2>
        <p>Where a project is required to be registered under RERA or another authority, the applicable registration details are displayed on the relevant project page or in its official documents. Customers should review the latest information available from the relevant regulatory authority.</p>
      </article>

      <article>
        <h2>8. Intellectual Property</h2>
        <p>Unless otherwise stated, the website design, ROOF name and branding, text, graphics, plans, photographs, videos and other content are owned by or lawfully used by ROOF Builders &amp; Developers. They may not be copied, reproduced, modified, published or commercially used without prior written permission.</p>
      </article>

      <article>
        <h2>9. Third-Party Services and Links</h2>
        <p>The website may use or link to services such as maps, social platforms, messaging applications and payment providers. Their availability, security and data practices are governed by their own terms and policies. ROOF is not responsible for interruptions or content on third-party platforms.</p>
      </article>

      <article>
        <h2>10. Limitation of Liability</h2>
        <p>To the extent permitted by law, ROOF will not be liable for indirect or consequential loss arising from reliance on outdated website information, third-party service interruptions, events beyond reasonable control, or decisions made without reviewing the latest project-specific documents.</p>
        <p>Nothing in these Terms excludes any right or liability that cannot lawfully be excluded.</p>
      </article>

      <article>
        <h2>11. Privacy and Communications</h2>
        <p>Information submitted through this website may be used to respond to enquiries, arrange site visits, share project updates and provide requested services. By submitting your contact details, you authorize ROOF and its authorized representatives to contact you regarding your enquiry, subject to applicable law.</p>
      </article>

      <article>
        <h2>12. Changes to These Terms</h2>
        <p>ROOF may update these Terms &amp; Conditions when required. The revised version will be published on this page with an updated effective date. Continued use of the website after an update constitutes acceptance of the revised Terms.</p>
      </article>

      <article>
        <h2>13. Governing Law and Jurisdiction</h2>
        <p>These Terms are governed by the laws of India. Subject to applicable law, disputes relating to these Terms or use of the website shall fall under the jurisdiction of the courts of Gurugram, Haryana.</p>
      </article>

      <article>
        <h2>14. Contact Us</h2>
        <p>For questions about these Terms, email <a href="mailto:info@roofbuildersanddevelopers.com">info@roofbuildersanddevelopers.com</a> or contact us at our Gurgaon office.</p>
      </article>
    </section>
    <SiteFooter/>
  </main>
}
