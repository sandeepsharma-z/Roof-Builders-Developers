import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "../terms-and-conditions/terms.module.css";

export const metadata:Metadata={
  title:"Privacy Policy | ROOF Builders & Developers",
  description:"Learn how ROOF Builders & Developers collects, uses, protects and manages personal information submitted through its website and services.",
};

export default function PrivacyPolicyPage(){
  return <main className={styles.page}>
    <SiteHeader/>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p>Privacy &amp; Data</p>
        <h1>Privacy <em>Policy.</em></h1>
        <span>Effective date: 21 July 2026</span>
      </div>
    </section>

    <section className={styles.content}>
      <div className={styles.intro}>
        <p>ROOF Builders &amp; Developers (“ROOF”, “we”, “our” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, share, retain and protect personal information when you visit <a href="https://roofbuildersanddevelopers.com/">roofbuildersanddevelopers.com</a>, submit an enquiry, schedule a site visit, register as a channel partner or otherwise interact with us. Please read this Policy together with our <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>.</p>
      </div>

      <article>
        <h2>1. Scope of This Policy</h2>
        <p>This Policy applies to personal information collected through our website, enquiry forms, telephone calls, email, WhatsApp, site visits, events and other interactions relating to ROOF developments and services. It does not govern websites or services operated independently by third parties.</p>
      </article>

      <article>
        <h2>2. Information We Collect</h2>
        <p>Depending on how you interact with us, we may collect:</p>
        <ul>
          <li>Your name, phone number, email address and preferred location.</li>
          <li>Property preferences, budget, project interest, site-visit requirements and messages shared with us.</li>
          <li>Identity, address, tax, KYC, booking and payment-related information when required for a transaction.</li>
          <li>For channel-partner registration: company and director details, GSTIN, RERA number, team size, experience, office address, photograph, RM name and related registration information.</li>
          <li>Records of calls, emails, WhatsApp messages, meetings and other communications with our team.</li>
          <li>Technical information such as IP address, device and browser type, operating system, referring page, pages visited, approximate location, date and time of access, and cookie or analytics identifiers.</li>
        </ul>
      </article>

      <article>
        <h2>3. How We Collect Information</h2>
        <p>We collect information directly from you when you complete a form, contact us, register as a partner, visit a project, submit documents or enter into a transaction. We may also collect limited technical information automatically through cookies, server logs and similar technologies, or receive information from an authorized representative, referral source, channel partner or service provider where lawful.</p>
      </article>

      <article>
        <h2>4. How We Use Your Information</h2>
        <p>We may use personal information to:</p>
        <ul>
          <li>Respond to enquiries and provide requested project information.</li>
          <li>Arrange site visits, consultations, callbacks and project updates.</li>
          <li>Understand property preferences and recommend relevant ROOF developments.</li>
          <li>Process applications, bookings, documentation, payments and customer-service requests.</li>
          <li>Review and manage channel-partner registrations and relationships.</li>
          <li>Maintain transaction, communication and compliance records.</li>
          <li>Improve our website, services, project communication and customer experience.</li>
          <li>Protect our website, customers and business against fraud, misuse and security threats.</li>
          <li>Comply with legal, regulatory, tax, accounting and contractual obligations.</li>
        </ul>
      </article>

      <article>
        <h2>5. Consent and Communications</h2>
        <p>When you voluntarily provide your details, you authorize ROOF and its authorized representatives to contact you in relation to your enquiry or registration through phone, email, SMS or WhatsApp, as applicable. Where required by law, promotional communication will be sent on the basis of your consent or another permitted basis.</p>
        <p>You may request that promotional communication stop at any time by using an available unsubscribe option or contacting us at the email address below. Service, booking or transaction-related communication may continue where necessary.</p>
      </article>

      <article>
        <h2>6. Cookies and Analytics</h2>
        <p>Cookies and similar technologies may be used to operate the website, remember preferences, understand page usage, measure campaign performance and improve security. You can control or delete cookies through your browser settings. Disabling certain cookies may affect some website features.</p>
      </article>

      <article>
        <h2>7. How We Share Information</h2>
        <p>We do not sell personal information. We may share limited information, where reasonably necessary, with:</p>
        <ul>
          <li>Authorized employees, project teams and representatives who need it to respond or provide services.</li>
          <li>Technology, hosting, analytics, communication, document-processing, payment and other service providers acting for us.</li>
          <li>Professional advisers, auditors, financial institutions and regulatory or government authorities where required.</li>
          <li>Law-enforcement agencies, courts or other parties when disclosure is required by law or necessary to protect legal rights, safety or security.</li>
          <li>A successor or relevant party in connection with a lawful business reorganization, merger, acquisition or transfer.</li>
        </ul>
        <p>Recipients are expected to use the information only for the relevant purpose and protect it appropriately.</p>
      </article>

      <article>
        <h2>8. Payments</h2>
        <p>ROOF does not ask customers to submit card or banking credentials through ordinary enquiry forms. Where an online payment facility is provided, payment credentials may be collected and processed directly by the authorized bank or payment-service provider under its own privacy and security terms. ROOF may receive transaction references, payment status and limited billing details required for records and support.</p>
      </article>

      <article>
        <h2>9. Data Security</h2>
        <p>We use reasonable administrative, technical and organizational safeguards designed to protect personal information against unauthorized access, loss, misuse, alteration or disclosure. However, no website, transmission or storage system can be guaranteed to be completely secure. Please avoid sending sensitive credentials through unsecured channels.</p>
      </article>

      <article>
        <h2>10. Data Retention</h2>
        <p>We retain personal information only for as long as reasonably required for the purposes described in this Policy, including responding to enquiries, maintaining booking and transaction records, managing partner relationships, resolving disputes and satisfying legal or regulatory obligations. Information that is no longer required will be deleted, anonymized or securely archived in accordance with applicable requirements.</p>
      </article>

      <article>
        <h2>11. Your Rights and Choices</h2>
        <p>Subject to applicable law, you may request access to or correction of your personal information, ask for deletion where it is no longer required, withdraw consent for consent-based processing, opt out of promotional communication or raise a grievance about how your information is handled.</p>
        <p>To protect your information, we may need to verify your identity before acting on a request. Some information may be retained where required by law or for legitimate record-keeping purposes.</p>
      </article>

      <article>
        <h2>12. Third-Party Links and Platforms</h2>
        <p>Our website may link to maps, social media, WhatsApp, payment services or other third-party platforms. Those services operate under their own privacy policies and terms. We encourage you to review them before providing information.</p>
      </article>

      <article>
        <h2>13. Children’s Privacy</h2>
        <p>Our website and real estate services are intended for adults. We do not knowingly seek personal information from children. If you believe a child has provided information without appropriate authorization, please contact us so that we can take suitable action.</p>
      </article>

      <article>
        <h2>14. Updates to This Policy</h2>
        <p>We may update this Privacy Policy to reflect changes in our services, technology or legal requirements. The revised version will be published on this page with an updated effective date. We encourage you to review this page periodically.</p>
      </article>

      <article>
        <h2>15. Contact and Grievance Requests</h2>
        <p>For a privacy request, correction, consent withdrawal or grievance, contact us at <a href="mailto:info@roofbuildersanddevelopers.com">info@roofbuildersanddevelopers.com</a>.</p>
        <p>ROOF Builders &amp; Developers<br/>Unit No. 401, 4th Floor, Welldone Techpark, Sector 48, Sohna Road, Gurgaon – 122001, Haryana, India</p>
      </article>
    </section>
    <SiteFooter/>
  </main>
}
