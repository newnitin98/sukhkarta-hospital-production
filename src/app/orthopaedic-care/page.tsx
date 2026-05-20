import type { Metadata } from "next";
import Link from "next/link";
import { Bone, Activity, AlignCenter, CircleDot, Dumbbell, Microscope, ChevronRight, Phone } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SectionHeader from "@/components/ui/SectionHeader";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { ORTHO_SERVICES } from "@/data/services";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: PAGE_SEO.orthopaedic.title,
  description: PAGE_SEO.orthopaedic.description,
  keywords: PAGE_SEO.orthopaedic.keywords,
  alternates: { canonical: `${SITE_URL}/orthopaedic-care` },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone, Activity, AlignCenter, CircleDot, Dumbbell, Microscope, Baby: Bone, Heart: Activity,
};

export default function OrthopaedicCarePage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Orthopaedic Care", url: `${SITE_URL}/orthopaedic-care` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Orthopaedic Care" }]}
            className="text-blue-300 mb-5"
          />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Orthopaedic Care in Saoner
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Expert bone, joint, and musculoskeletal care — from fractures and
            joint replacement to spine treatment and rehabilitation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              Book Appointment
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

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Services"
            title="Our Orthopaedic Services"
            subtitle="Comprehensive bone and joint care led by Dr. Gunjan R. Dhundele — fellowship-trained joint replacement and pelvi-acetabular reconstructive surgeon."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORTHO_SERVICES.map((svc) => {
              const Icon = ICONS[svc.icon] ?? Bone;
              return (
                <div
                  key={svc.id}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-brand-blue-200 hover:shadow-card transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-100 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-brand-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{svc.name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor CTA */}
      <section className="py-14 bg-brand-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-3">
            Meet Your Orthopaedic Specialist
          </h2>
          <p className="text-gray-600 mb-6">
            Dr. Gunjan R. Dhundele — M.B.B.S., D. Ortho (Gold Medalist), DNB Orthopaedics, MNAMS, FJRS — with 15+ years of orthopaedic expertise.
          </p>
          <Link
            href="/doctors/dr-gunjan-r-dhundele"
            className="inline-flex items-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            View Dr. Gunjan's Profile
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Disclaimer + Appointment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-8 text-xs text-amber-800">
            <strong>Disclaimer:</strong> Orthopaedic procedures vary by individual case. The services listed are performed subject to clinical assessment by the treating surgeon. Please consult with Dr. Gunjan for personalised evaluation and treatment planning.
          </div>
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">
            Book Orthopaedic Consultation
          </h2>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
