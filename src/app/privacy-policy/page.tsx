import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Privacy Policy | Sukhkarta Hospital",
  description: "Privacy policy for the Sukhkarta Hospital website - how we handle appointment enquiry data.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Privacy Policy", url: `${SITE_URL}/privacy-policy` },
        ])}
      />
      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} className="text-blue-300 mb-5" />
          <h1 className="text-3xl sm:text-4xl font-bold font-display">Privacy Policy</h1>
          <p className="text-blue-200 mt-2 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Sukhkarta Hospital (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the website
            sukhkartahospital.com. This Privacy Policy explains how we collect,
            use, and protect information submitted through this website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            Through the appointment enquiry form, we collect:
          </p>
          <ul>
            <li>Full name</li>
            <li>Mobile phone number</li>
            <li>Service of interest</li>
            <li>Preferred doctor and date</li>
            <li>Optional message (general nature only)</li>
          </ul>
          <p>
            <strong>We do not collect sensitive medical data.</strong> The form
            is for appointment enquiry purposes only. Please do not include
            detailed medical records or diagnoses.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            Information submitted through the form is used solely to:
          </p>
          <ul>
            <li>Respond to your appointment enquiry</li>
            <li>Confirm your appointment slot</li>
            <li>Contact you with relevant information about your visit</li>
          </ul>
          <p>
            In Phase 1, form submissions are transmitted via WhatsApp to our
            hospital staff and are not stored in any database on our servers.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            This website may include links to external services including:
          </p>
          <ul>
            <li><strong>WhatsApp</strong> - for direct communication. WhatsApp is operated by Meta Platforms.</li>
            <li><strong>Google Maps</strong> - for directions. Governed by Google&apos;s privacy policy.</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            This website does not use tracking cookies or analytics cookies in
            Phase 1. Standard browser cookies may be set by the web server for
            session management only.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            As appointment enquiry data is not stored on our servers in Phase 1,
            there is no server-side data to retain or delete. WhatsApp
            conversations are managed per WhatsApp&apos;s own data policies.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may request deletion of any information you have shared with us
            by contacting us at:{" "}
            <a href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a>
          </p>

          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to
            protect the website and any information in transit. The website uses
            HTTPS/TLS encryption and security headers.
          </p>

          <h2>9. Children</h2>
          <p>
            This website is not directed at children under 13 years of age. We
            do not knowingly collect personal information from children.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The &quot;last updated&quot; date
            at the top of this page indicates when changes were made.
          </p>

          <h2>11. Contact</h2>
          <p>
            For privacy-related queries: <a href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a>
            <br />
            Sukhkarta Hospital, {HOSPITAL.address.public}
          </p>
        </div>
      </section>
    </>
  );
}
