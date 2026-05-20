import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sukhkarta Hospital",
  description: "Terms and conditions for use of the Sukhkarta Hospital website.",
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
};

export default function TermsPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Terms & Conditions", url: `${SITE_URL}/terms-and-conditions` },
        ])}
      />
      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Terms & Conditions" }]} className="text-blue-300 mb-5" />
          <h1 className="text-3xl sm:text-4xl font-bold font-display">Terms & Conditions</h1>
          <p className="text-blue-200 mt-2 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using sukhkartahospital.com, you agree to be bound
            by these Terms and Conditions. If you do not agree, please do not
            use this website.
          </p>

          <h2>2. Informational Purpose Only</h2>
          <p>
            This website is provided for general informational and appointment
            enquiry purposes only. Content on this site does not constitute
            medical advice, diagnosis, or treatment. Always consult a qualified
            medical professional for your health concerns.
          </p>

          <h2>3. Appointment Enquiries</h2>
          <p>
            Submitting the appointment enquiry form does not guarantee an
            appointment. It initiates a request that is reviewed by hospital
            staff, who will confirm availability. Appointment confirmation is
            only valid when communicated by hospital staff.
          </p>

          <h2>4. Accuracy of Information</h2>
          <p>
            We endeavour to keep information on this website accurate and
            up-to-date. However, we make no warranties regarding the accuracy,
            completeness, or timeliness of the content. Service availability,
            doctor schedules, and facility details may change without prior
            notice.
          </p>

          <h2>5. External Links</h2>
          <p>
            This website contains links to external services such as WhatsApp
            and Google Maps. We are not responsible for the content,
            privacy practices, or terms of those external sites.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website - including text, design, and images -
            is owned by or licensed to Sukhkarta Hospital. Reproduction without
            written permission is prohibited.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            Sukhkarta Hospital shall not be liable for any damages arising from
            reliance on information provided on this website. Medical
            emergencies require immediate in-person professional attention -
            this website cannot substitute for emergency care.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of Maharashtra, India. Any
            disputes shall be subject to the jurisdiction of courts in Nagpur,
            Maharashtra.
          </p>

          <h2>9. Changes</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued
            use of the website after changes constitutes acceptance of the
            updated terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            <a href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a>
            <br />
            {HOSPITAL.address.public}
          </p>
        </div>
      </section>
    </>
  );
}
