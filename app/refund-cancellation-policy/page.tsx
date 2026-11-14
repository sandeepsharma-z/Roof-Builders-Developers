import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import styles from "../terms-and-conditions/terms.module.css";

export const metadata:Metadata={
  title:"Refund & Cancellation Policy | ROOF Builders & Developers",
  description:"Refund and cancellation terms for project applications, bookings and payments made to ROOF Builders & Developers.",
};

export default function RefundCancellationPolicyPage(){
  return <main className={styles.page}>
    <SiteHeader/>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p>Payments &amp; Bookings</p>
        <h1>Refund &amp; <em>Cancellation Policy.</em></h1>
        <span>Effective date: 21 July 2026</span>
      </div>
    </section>

    <section className={styles.content}>
      <div className={styles.intro}>
        <p>This Refund &amp; Cancellation Policy explains how requests relating to project applications, bookings and payments made directly to ROOF Builders &amp; Developers (“ROOF”, “we”, “our” or “us”) are handled. Project-specific application forms, allotment terms, agreements and applicable law will prevail where they contain different or additional conditions.</p>
      </div>

      <article>
        <h2>1. Enquiries and Site Visits</h2>
        <p>Submitting a property enquiry, requesting a callback or scheduling a standard site visit through this website does not by itself create a paid booking. If any paid service is offered, its charges and cancellation conditions will be communicated and accepted separately before payment.</p>
      </article>

      <article>
        <h2>2. Application and Booking Amounts</h2>
        <p>An expression-of-interest, application, token or booking amount paid for a ROOF property will be governed by the relevant application form, booking form, allotment terms, payment plan and agreement executed or accepted for that project.</p>
        <p>Submitting an amount does not guarantee allotment until ROOF issues written confirmation. Where an application is not accepted or an allotment cannot be made, the eligible amount will be returned after verification, subject to any terms accepted at the time of payment and applicable law.</p>
      </article>

      <article>
        <h2>3. Customer-Initiated Cancellation</h2>
        <p>A customer who wishes to cancel must submit a written request from the registered email address or through another officially accepted channel. The request should include the customer’s name, project and property details, application or allotment number, payment receipts, reason for cancellation and bank details supported by the required verification documents.</p>
        <p>Any cancellation charge, earnest-money deduction, administrative expense, tax adjustment or other deduction will be applied only as stated in the relevant project documents and as permitted by law. Oral cancellation requests are not considered final until acknowledged in writing by ROOF.</p>
      </article>

      <article>
        <h2>4. Cancellation or Non-Allotment by ROOF</h2>
        <p>If ROOF does not accept an application, cannot make the requested allotment or cancels an allotment for reasons not attributable to the customer, the amount eligible for refund will be determined and processed in accordance with the relevant project documents and applicable law.</p>
        <p>Rights relating to delay, discontinuance or inability to deliver a registered project will remain governed by the applicable agreement and real estate law. Nothing in this Policy limits a right that cannot lawfully be excluded.</p>
      </article>

      <article>
        <h2>5. Duplicate Payments</h2>
        <p>If the same payment is successfully charged more than once because of a verified technical error, the duplicate amount will be refunded after reconciliation with our records, the bank and the payment provider. Customers should notify us promptly and provide the relevant transaction references.</p>
      </article>

      <article>
        <h2>6. Failed or Pending Transactions</h2>
        <p>If an amount is debited but ROOF does not receive successful payment confirmation, the transaction may be reversed automatically by the customer’s bank or payment provider. Please contact us with the transaction date, amount and reference if the issue remains unresolved after seven working days.</p>
        <p>ROOF can initiate a refund only for an amount confirmed as received in its authorized account.</p>
      </article>

      <article>
        <h2>7. Refund Method</h2>
        <p>Approved refunds will normally be made to the original payment source or to a verified bank account belonging to the registered applicant. Refunds will not be issued in cash or transferred to an unrelated third party. Additional verification may be required to prevent fraud or incorrect payment.</p>
      </article>

      <article>
        <h2>8. Processing Timeline</h2>
        <p>The applicable refund timeline will be the period stated in the relevant booking or project documents and required under applicable law. Processing begins only after cancellation is approved and all required documents, bank details and original receipts or declarations have been received and verified.</p>
        <p>Banking holidays, payment-provider reconciliation, incomplete documents, legal restrictions or disputes may affect the time taken to credit an approved refund. ROOF will share available status information with the registered applicant.</p>
      </article>

      <article>
        <h2>9. Taxes, Charges and Benefits</h2>
        <p>Taxes, statutory levies, payment-gateway charges and third-party expenses already deposited or incurred may be refundable only to the extent recoverable and permitted by law. Any promotional benefit, incentive, discount or item linked to a cancelled booking may be adjusted from the refundable amount where provided in the accepted project terms.</p>
      </article>

      <article>
        <h2>10. How to Submit a Request</h2>
        <p>Email your cancellation or refund request to <a href="mailto:info@roofbuildersanddevelopers.com">info@roofbuildersanddevelopers.com</a> with the subject “Refund/Cancellation Request – [Project Name]”.</p>
        <p>ROOF Builders &amp; Developers<br/>Unit No. 401, 4th Floor, Welldone Techpark, Sector 48, Sohna Road, Gurgaon – 122001, Haryana, India</p>
      </article>

      <article>
        <h2>11. Related Policies</h2>
        <p>This Policy should be read together with our <Link href="/terms-and-conditions">Terms &amp; Conditions</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.</p>
      </article>
    </section>
    <SiteFooter/>
  </main>
}
