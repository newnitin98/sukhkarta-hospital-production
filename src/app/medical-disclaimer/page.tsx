import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { AlertTriangle } from "lucide-react";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Sukhkarta Hospital",
  description: "Medical disclaimer for content published on the Sukhkarta Hospital website.",
  alternates: { canonical: `${SITE_URL}/medical-disclaimer` },
};

export default function MedicalDisclaimerPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Medical Disclaimer", url: `${SITE_URL}/medical-disclaimer` },
        ])}
      />
      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Medical Disclaimer" }]} className="text-blue-300 mb-5" />
          <h1 className="text-3xl sm:text-4xl font-bold font-display">Medical Disclaimer</h1>
          <p className="text-blue-200 mt-2 text-sm">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>Important:</strong> The content on this website is for
              general informational purposes only. It is not a substitute for
              professional medical advice, diagnosis, or treatment. For
              emergencies, call immediately or go to the nearest emergency
              facility.
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <h2>General Disclaimer</h2>
            <p>
              Sukhkarta Hospital&apos;s website (sukhkartahospital.com) provides
              general health information about orthopaedic and cardiac
              conditions and the services offered at our hospital. This content
              is intended to help visitors understand the types of care
              available and to assist in booking appointments.
            </p>
            <p>
              <strong>This website does not provide medical advice.</strong> No
              content on this site should be interpreted as a diagnosis,
              treatment recommendation, or substitute for consultation with a
              qualified and registered medical practitioner.
            </p>

            <h2>No Doctor-Patient Relationship</h2>
            <p>
              Submitting the appointment enquiry form or viewing content on this
              website does not create a doctor-patient relationship. A
              doctor-patient relationship is established only through an
              in-person consultation at the hospital.
            </p>

            <h2>Emergency Situations</h2>
            <p>
              If you are experiencing a medical emergency — including but not
              limited to chest pain, breathlessness, severe fracture, stroke
              symptoms, or sudden loss of consciousness — <strong>do not
              delay seeking emergency care</strong>. Call emergency services or
              go to the nearest emergency facility immediately. Do not wait for
              a website response.
            </p>

            <h2>Accuracy of Medical Content</h2>
            <p>
              Medical information is provided in good faith and is based on
              publicly available clinical knowledge. However, medical science
              evolves continuously. We do not warrant that content is complete,
              accurate, or current at any given time. Always seek updated
              guidance from a treating physician.
            </p>

            <h2>Service Availability</h2>
            <p>
              The list of services, procedures, and doctor specialisations
              described on this website reflects general service categories.
              Specific procedure availability is subject to clinical assessment
              by the treating doctor and may vary. Please confirm with the
              hospital before making health-related decisions based on this
              content.
            </p>

            <h2>Treatment Outcomes</h2>
            <p>
              This website does not guarantee any specific clinical outcomes or
              treatment results. Medical outcomes depend on individual patient
              factors, condition severity, and many other variables. Descriptions
              of procedures on this site are educational only.
            </p>

            <h2>Regulatory Compliance</h2>
            <p>
              Sukhkarta Hospital and its doctors are registered with the
              Maharashtra Medical Council (MMC) and Medical Council of India
              (MCI) as applicable. Registration details are provided on
              individual doctor profile pages. Any grievances may be directed to{" "}
              <a href={`mailto:${HOSPITAL.email}`}>{HOSPITAL.email}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
