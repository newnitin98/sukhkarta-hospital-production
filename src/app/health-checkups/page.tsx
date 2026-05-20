import type { Metadata } from "next";
import { ShieldCheck, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Health Checkup Packages | Cardiac Screening | Sukhkarta Hospital Saoner",
  description:
    "Preventive health checkup packages at Sukhkarta Hospital, Saoner. Cardiac screening, ECG, TMT, BP evaluation, and orthopaedic health assessment. Book your checkup today.",
  alternates: { canonical: `${SITE_URL}/health-checkups` },
};

const PACKAGES = [
  {
    name: "Cardiac Basic Screening",
    color: "from-brand-red-500 to-brand-red-600",
    includes: [
      "ECG (Electrocardiogram)",
      "Blood Pressure Evaluation",
      "Heart Rate Assessment",
      "Cardiologist Consultation",
    ],
    forWhom: "Anyone 35+ with risk factors or family history",
  },
  {
    name: "Cardiac Advanced Screening",
    color: "from-brand-blue-600 to-brand-blue-700",
    includes: [
      "ECG",
      "Treadmill Test (TMT)",
      "Blood Pressure Monitoring",
      "Holter / ABPM (if indicated)",
      "Detailed Cardiology Consultation",
    ],
    forWhom: "Known hypertension, diabetes, chest pain, or prior cardiac history",
  },
  {
    name: "Orthopaedic Wellness Check",
    color: "from-green-500 to-green-600",
    includes: [
      "Joint Mobility Assessment",
      "Spine Evaluation",
      "X-Ray if indicated",
      "Orthopaedic Consultation",
    ],
    forWhom: "Joint pain, back pain, ageing-related bone concerns",
  },
];

export default function HealthCheckupsPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Health Checkups", url: `${SITE_URL}/health-checkups` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Health Checkups" }]} className="text-blue-300 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Preventive Health Checkups
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Early detection saves lives. Our cardiac and orthopaedic screening
            packages help you understand your health status before symptoms arise.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-3 text-center">
            Screening Packages
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto text-sm">
            Package inclusions are indicative. Final testing is based on clinical
            assessment during consultation. Please enquire for current availability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-2xl shadow-card overflow-hidden">
                <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white`}>
                  <ShieldCheck className="h-8 w-8 mb-3 opacity-80" />
                  <h3 className="text-xl font-bold font-display">{pkg.name}</h3>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Includes
                  </div>
                  <ul className="space-y-2 mb-5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500 mb-1">Recommended for</div>
                    <div className="text-xs text-gray-700">{pkg.forWhom}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 text-sm text-amber-800 mb-10">
            <strong>Note:</strong> Package pricing and exact inclusions are subject to clinical assessment. Please call or WhatsApp for current pricing. This page describes general service categories — not standardised packaged pricing.
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">
            Book Your Health Checkup
          </h2>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
