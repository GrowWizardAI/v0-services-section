import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — GrowWizardAI",
  description: "GrowWizardAI terms of service and usage conditions.",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <div className="mb-10">
        <a
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to GrowWizardAI
        </a>
      </div>

      <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">TERMS OF SERVICE</h1>
        <p className="text-sm text-muted-foreground">Last updated March 16, 2026</p>

        <h2 className="text-xl font-semibold text-foreground mt-10">AGREEMENT TO OUR LEGAL TERMS</h2>
        <p>
          We are GrowWizardAI LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;).
        </p>
        <p>
          We operate <a href="https://growwizardai.com" className="text-primary hover:underline">https://growwizardai.com</a>, as well as any other related products and services that refer or link to these legal terms (the &ldquo;Legal Terms&rdquo;) (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          You can contact us by email at <a href="mailto:hello@growwizardai.com" className="text-primary hover:underline">hello@growwizardai.com</a> or by mail to GotHawk Solutions LLC (DBA GrowWizardAI), 3401 Hartzdale Drive, Suite 103B, Camp Hill, PA 17011, USA.
        </p>
        <p>
          These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;), and GrowWizardAI LLC, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the &ldquo;Last updated&rdquo; date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.
        </p>
        <p>We recommend that you print a copy of these Legal Terms for your records.</p>

        <h2 className="text-xl font-semibold text-foreground mt-10">TABLE OF CONTENTS</h2>
        <ol className="list-decimal list-inside space-y-1">
          {[
            "OUR SERVICES",
            "INTELLECTUAL PROPERTY RIGHTS",
            "USER REPRESENTATIONS",
            "PROHIBITED ACTIVITIES",
            "USER GENERATED CONTRIBUTIONS",
            "CONTRIBUTION LICENSE",
            "SERVICES MANAGEMENT",
            "TERM AND TERMINATION",
            "MODIFICATIONS AND INTERRUPTIONS",
            "GOVERNING LAW",
            "DISPUTE RESOLUTION",
            "CORRECTIONS",
            "DISCLAIMER",
            "LIMITATIONS OF LIABILITY",
            "INDEMNIFICATION",
            "USER DATA",
            "ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
            "MISCELLANEOUS",
            "TCPA COMPLIANCE AND CLIENT RESPONSIBILITIES",
            "CONTACT US",
          ].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>

        <h2 className="text-xl font-semibold text-foreground mt-10">1. OUR SERVICES</h2>
        <p>
          GrowWizardAI provides done-for-you AI voice reactivation campaigns and inbound call automation for small businesses. We take a client&apos;s existing lead list, run automated AI phone outreach to qualify interest, and book appointments directly to their calendar — fully managed, no software to operate.
        </p>
        <p>
          The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <h3 className="text-base font-semibold text-foreground">Our intellectual property</h3>
        <p>
          We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &ldquo;Content&rdquo;), as well as the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;).
        </p>
        <p>
          Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.
        </p>
        <p>
          The Content and Marks are provided in or through the Services &ldquo;AS IS&rdquo; for your personal, non-commercial use or internal business purpose only.
        </p>
        <h3 className="text-base font-semibold text-foreground">Your use of our Services</h3>
        <p>
          Subject to your compliance with these Legal Terms, including the &ldquo;PROHIBITED ACTIVITIES&rdquo; section below, we grant you a non-exclusive, non-transferable, revocable license to access the Services and download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose.
        </p>
        <p>
          Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
        </p>
        <p>
          If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to: <a href="mailto:hello@growwizardai.com" className="text-primary hover:underline">hello@growwizardai.com</a>.
        </p>
        <p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.</p>
        <p>Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>
        <h3 className="text-base font-semibold text-foreground">Your submissions</h3>
        <p>
          By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&ldquo;Submissions&rdquo;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">3. USER REPRESENTATIONS</h2>
        <p>
          By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">4. PROHIBITED ACTIVITIES</h2>
        <p>You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us.</li>
          <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information.</li>
          <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
          <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
          <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
          <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          <li>Upload or transmit viruses, Trojan horses, or other harmful material that interferes with any party&apos;s uninterrupted use of the Services.</li>
          <li>Engage in any automated use of the system, such as using scripts, data mining, robots, or similar data gathering and extraction tools.</li>
          <li>Attempt to impersonate another user or person.</li>
          <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
          <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
          <li>Use the Services as part of any effort to compete with us or otherwise use the Services for any revenue-generating endeavor or commercial enterprise without our express written consent.</li>
          <li>Use the Services to advertise or offer to sell goods and services without our express written consent.</li>
          <li>Sell or otherwise transfer your access or rights under these Legal Terms.</li>
          <li>Provide contact lists that contain individuals who have not given prior express written consent to receive automated telephone calls or messages in violation of the Telephone Consumer Protection Act (TCPA) or any applicable federal, state, or local calling laws.</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground mt-10">5. USER GENERATED CONTRIBUTIONS</h2>
        <p>
          The Services do not offer users the ability to submit or post public content. We may provide you with the opportunity to submit content and materials to us directly, including text, feedback, or other information. Any such submissions are governed by the terms in Section 2 (Your submissions) above.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">6. CONTRIBUTION LICENSE</h2>
        <p>
          You and the Services agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings).
        </p>
        <p>
          By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">7. SERVICES MANAGEMENT</h2>
        <p>
          We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; and (4) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">8. TERM AND TERMINATION</h2>
        <p>
          These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
        </p>
        <p>
          For monthly subscription clients, either party may terminate the subscription by providing 30 days&apos; written notice to <a href="mailto:hello@growwizardai.com" className="text-primary hover:underline">hello@growwizardai.com</a>. Cancellations received less than 30 days before renewal will take effect the following billing cycle. Any campaigns already in progress at the time of cancellation will be completed as scheduled.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">9. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p>
          We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We cannot guarantee the Services will be available at all times. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">10. GOVERNING LAW</h2>
        <p>
          These Legal Terms shall be governed by and defined following the laws of the Commonwealth of Pennsylvania, United States. GrowWizardAI LLC and yourself irrevocably consent that the courts of Cumberland County, Pennsylvania shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms, subject to the arbitration provisions below.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">11. DISPUTE RESOLUTION</h2>
        <h3 className="text-base font-semibold text-foreground">Informal Negotiations</h3>
        <p>
          To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &ldquo;Dispute&rdquo;), the parties agree to first attempt to negotiate any Dispute informally for at least 30 days before initiating arbitration. Such informal negotiations commence upon written notice from one party to the other.
        </p>
        <h3 className="text-base font-semibold text-foreground">Binding Arbitration</h3>
        <p>
          Any dispute arising out of or in connection with these Legal Terms that cannot be resolved through informal negotiation shall be finally resolved by binding arbitration administered by the American Arbitration Association (&ldquo;AAA&rdquo;) under its Commercial Arbitration Rules. The number of arbitrators shall be one (1). The seat of arbitration shall be Camp Hill, Pennsylvania, USA. The language of the proceedings shall be English. The governing law shall be the substantive law of the Commonwealth of Pennsylvania.
        </p>
        <h3 className="text-base font-semibold text-foreground">Restrictions</h3>
        <p>
          The parties agree that any arbitration shall be limited to the Dispute between the parties individually. To the full extent permitted by law: (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
        </p>
        <h3 className="text-base font-semibold text-foreground">Exceptions</h3>
        <p>
          The following Disputes are not subject to the above arbitration provisions: (a) any Disputes seeking to enforce or protect intellectual property rights; (b) any Dispute related to allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.
        </p>
        <p>
          You agree that any cause of action arising out of or related to the Services must be commenced within one (1) year after the cause of action accrues, otherwise such cause of action is permanently barred.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">12. CORRECTIONS</h2>
        <p>
          There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, and availability. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">13. DISCLAIMER</h2>
        <p className="uppercase text-xs leading-relaxed">
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, PERSONAL INJURY OR PROPERTY DAMAGE, ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS, ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, OR ANY BUGS, VIRUSES, OR TROJAN HORSES WHICH MAY BE TRANSMITTED THROUGH THE SERVICES BY ANY THIRD PARTY. WE DO NOT GUARANTEE ANY SPECIFIC NUMBER OF APPOINTMENTS, LEADS, OR BUSINESS RESULTS FROM ANY CAMPAIGN OR SERVICE.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">14. LIMITATIONS OF LIABILITY</h2>
        <p className="uppercase text-xs leading-relaxed">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US IN THE THREE (3) MONTHS PRECEDING THE CLAIM. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">15. INDEMNIFICATION</h2>
        <p>
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">16. USER DATA</h2>
        <p>
          We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <p>
          Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">18. MISCELLANEOUS</h2>
        <p>
          These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">19. TCPA COMPLIANCE AND CLIENT RESPONSIBILITIES</h2>
        <p>
          <strong className="text-foreground">Client Responsibility for Contact List Compliance.</strong> Client represents and warrants that all contact lists provided to GrowWizardAI LLC have been compiled in compliance with the Telephone Consumer Protection Act (TCPA), the FTC&apos;s Telemarketing Sales Rule, and all applicable federal, state, and local laws governing telephone solicitation and automated calling. GrowWizardAI LLC is not responsible for any legal claims, fines, penalties, or damages arising from Client&apos;s use of non-compliant contact lists. Client agrees to indemnify and hold harmless GrowWizardAI LLC from any claims arising from Client-provided data.
        </p>
        <p>
          GrowWizardAI LLC operates automated AI voice calling systems on behalf of its clients. All campaigns are conducted under the direction and authority of the client, who bears sole responsibility for ensuring that their contact lists comply with applicable calling laws, including but not limited to prior express written consent requirements under the TCPA.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-10">20. CONTACT US</h2>
        <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
        <address className="not-italic mt-2 space-y-1">
          <p className="font-medium text-foreground">GrowWizardAI LLC</p>
          <p>3401 Hartzdale Drive, Suite 103B</p>
          <p>Camp Hill, PA 17011</p>
          <p>United States</p>
          <p>
            <a href="mailto:hello@growwizardai.com" className="text-primary hover:underline">
              hello@growwizardai.com
            </a>
          </p>
        </address>
      </div>
    </main>
  )
}
