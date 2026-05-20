import type { Metadata } from "next";
import { CheckCircle, MapPin, Clock, Phone } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: PAGE_SEO.about.title,
  description: PAGE_SEO.about.description,
  alternates: { canonical: `${SITE_URL}/about` },
};

const MILESTONES = [
  { year: "2018", event: "Hospital established in Saoner by specialist doctors" },
  { year: "2018", event: "Modular OT and ICU commissioned" },
  { year: "2019", event: "Cardiac care department launched under Dr. Tanu Dhundele" },
  { year: "2020", event: "TMT and ECG services introduced" },
  { year: "2022", event: "Advanced interventional cardiology procedures began" },
  { year: "2023", event: "Physiotherapy unit expanded" },
];

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "About", url: `${SITE_URL}/about` },
        ])}
      />

      {/* Page hero */}
      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "About Hospital" }]}
            className="text-blue-300 mb-5"
          />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            About Sukhkarta Hospital
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A dedicated dual-speciality orthopaedic and cardiac care centre
            serving Saoner, Nagpur, and surrounding districts.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-display mb-5">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Sukhkarta Hospital was founded with a clear purpose: to bring
                specialist orthopaedic and cardiac care closer to patients in
                Saoner and Nagpur district, reducing the need for long journeys
                to the city for specialist consultations and procedures.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                The hospital is led by Dr. Gunjan R. Dhundele, a gold-medal
                orthopaedic surgeon and fellowship-trained joint replacement
                specialist, and Dr. Tanu Dhundele, a double gold medalist DM
                Cardiologist with expertise in interventional cardiology. Together
                they bring advanced subspecialty care closer to the local
                community.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Beyond clinical expertise, we believe in honest communication,
                patient education, and care delivered in the patient's own
                language - Hindi, Marathi, English, and Kannada.
              </p>

              <div className="space-y-3">
                {[
                  "Fellowship-trained joint replacement surgeon",
                  "Double gold medalist interventional cardiologist",
                  "Modular OT, ICU, X-Ray, Physiotherapy",
                  "Wheelchair accessible, patient-friendly layout",
                  "UPI and cash payments accepted",
                  `OPD ${HOSPITAL.hours.weekdays}`,
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {/* Hospital info card */}
              <div className="bg-brand-blue-50 rounded-2xl p-6 border border-brand-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">Hospital Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-brand-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{HOSPITAL.address.public}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-brand-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{HOSPITAL.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand-blue-600 flex-shrink-0" />
                    <Link href={`tel:${HOSPITAL.phones.primary}`} className="text-brand-blue-600 hover:underline font-medium">
                      {HOSPITAL.phones.display.primary}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
                <h3 className="font-bold text-gray-900 mb-5">Key Milestones</h3>
                <div className="space-y-4">
                  {MILESTONES.map((m) => (
                    <div key={m.event} className="flex gap-4">
                      <div className="text-xs font-bold text-brand-blue-600 w-10 flex-shrink-0 pt-0.5">
                        {m.year}
                      </div>
                      <div className="text-sm text-gray-700 border-l-2 border-brand-blue-100 pl-4">
                        {m.event}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-amber-50 border-t border-amber-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-amber-800">
            <strong>Medical Disclaimer:</strong> This website is for
            informational and appointment enquiry purposes only. Content on this
            site does not constitute medical advice. For emergencies, please call
            immediately or go to the nearest emergency facility.
          </p>
        </div>
      </section>
    </>
  );
}
