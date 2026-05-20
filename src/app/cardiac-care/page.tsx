import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Activity, Waves, HeartPulse, Zap, ShieldCheck, Phone, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SectionHeader from "@/components/ui/SectionHeader";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { CARDIAC_SERVICES } from "@/data/services";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: PAGE_SEO.cardiac.title,
  description: PAGE_SEO.cardiac.description,
  keywords: PAGE_SEO.cardiac.keywords,
  alternates: { canonical: `${SITE_URL}/cardiac-care` },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity, Waves, HeartPulse, Zap, ShieldCheck, Heart,
  Radio: Heart, ScanLine: Activity, Shield: ShieldCheck,
  GitBranch: Activity, Cpu: Zap, Wind: Activity, Layers: Heart,
  RefreshCw: Activity, Landmark: Activity,
};

export default function CardiacCarePage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Cardiac Care", url: `${SITE_URL}/cardiac-care` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-red-700 to-brand-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Cardiac Care" }]}
            className="text-red-200 mb-5"
          />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Cardiac Care in Saoner, Nagpur
          </h1>
          <p className="text-red-100 text-lg max-w-2xl">
            Advanced interventional cardiology, preventive screening, TMT, ECG,
            angioplasty, and more — by Dr. Tanu Dhundele, DM Cardiology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-red-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-red-50 transition-colors"
            >
              Book Cardiac Consultation
            </Link>
            <Link
              href={`tel:${HOSPITAL.phones.primary}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Cardiac Services"
            title="Comprehensive Heart Care"
            subtitle="From preventive screenings to complex interventional procedures — all under the expert guidance of Dr. Tanu Dhundele."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CARDIAC_SERVICES.map((svc) => {
              const Icon = ICONS[svc.icon] ?? Heart;
              const isHighlighted = "highlight" in svc && svc.highlight;
              return (
                <div
                  key={svc.id}
                  className={`rounded-xl p-6 border transition-all ${
                    isHighlighted
                      ? "bg-gradient-to-br from-brand-red-500 to-brand-red-600 text-white border-transparent shadow-card"
                      : "bg-gray-50 border-gray-100 hover:border-red-200 hover:shadow-card"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                      isHighlighted ? "bg-white/20" : "bg-red-100"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${isHighlighted ? "text-white" : "text-brand-red-500"}`}
                    />
                  </div>
                  <h3
                    className={`font-semibold mb-2 ${isHighlighted ? "text-white" : "text-gray-900"}`}
                  >
                    {svc.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${isHighlighted ? "text-red-100" : "text-gray-600"}`}
                  >
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">
            Meet Your Cardiologist
          </h2>
          <p className="text-gray-600 mb-6">
            Dr. Tanu Dhundele — MBBS Gold Medalist, MD General Medicine Gold Medalist, DM Cardiology. Expert interventional cardiologist at Sukhkarta Hospital.
          </p>
          <Link
            href="/doctors/dr-tanu-dhundele"
            className="inline-flex items-center gap-2 bg-brand-red-500 hover:bg-brand-red-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            View Dr. Tanu's Profile
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-xs text-amber-800">
            <strong>Medical Disclaimer:</strong> Cardiac procedures are performed subject to clinical evaluation. Information on this page is for general awareness only. Please consult Dr. Tanu for personalised cardiac assessment and treatment. For emergencies, call immediately.
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">
            Book Cardiac Consultation
          </h2>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
