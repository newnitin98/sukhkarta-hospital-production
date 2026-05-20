import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Phone,
  Languages,
  CheckCircle,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { DOCTORS } from "@/data/doctors";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";

const doctor = DOCTORS[0];

export const metadata: Metadata = {
  title: PAGE_SEO["dr-gunjan"].title,
  description: PAGE_SEO["dr-gunjan"].description,
  keywords: PAGE_SEO["dr-gunjan"].keywords,
  alternates: { canonical: `${SITE_URL}/doctors/${doctor.slug}` },
};

export default function DrGunjanPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Doctors", url: `${SITE_URL}/doctors` },
            { name: doctor.name, url: `${SITE_URL}/doctors/${doctor.slug}` },
          ]),
          physicianSchema(doctor),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Doctors", href: "/doctors" },
              { label: doctor.name },
            ]}
            className="text-blue-300 mb-5"
          />
          <div className="flex items-start gap-6">
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
              <Image
                src={doctor.image}
                alt={doctor.imageAlt}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
                Orthopaedic Surgeon
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-display mb-2">
                {doctor.name}
              </h1>
              <p className="text-blue-200 text-lg">
                {doctor.qualificationsDisplay}
              </p>
              <p className="text-blue-300 text-sm mt-1">{doctor.subSpeciality}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-4">
                  About Dr. Gunjan
                </h2>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-5">
                  Education & Training
                </h2>
                <div className="space-y-4">
                  {doctor.education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-brand-blue-200 transition-colors"
                    >
                      <GraduationCap className="h-5 w-5 text-brand-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {edu.degree}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {edu.institution} - {edu.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-5">
                  Awards & Recognition
                </h2>
                <div className="space-y-3">
                  {doctor.awards.map((award) => (
                    <div
                      key={award.title + award.year}
                      className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100"
                    >
                      <Award className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {award.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-0.5">
                          {award.event} - {award.year}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-5">
                  Conditions Treated
                </h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {doctor.conditions.map((condition) => (
                    <div
                      key={condition}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {condition}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 font-display mb-4">
                  Medical Registrations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {doctor.registrations.map((registration) => (
                    <span
                      key={registration.number}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                    >
                      {registration.body}: {registration.number}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-brand-blue-50 rounded-2xl p-6 border border-brand-blue-100">
                <h3 className="font-bold text-gray-900 mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Experience:</span>{" "}
                    <strong>{doctor.experience}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500">Speciality:</span>{" "}
                    <strong>{doctor.speciality}</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">
                      {doctor.languages.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-card p-6 space-y-3">
                <h3 className="font-bold text-gray-900">Book Appointment</h3>
                <Link
                  href={`tel:${doctor.phone}`}
                  className="flex items-center justify-center gap-2 w-full border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {doctor.displayPhone}
                </Link>
                <Link
                  href={buildWhatsAppUrl(doctor.phone, HOSPITAL.ctaMessages.orthopaedics)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                >
                  WhatsApp
                </Link>
              </div>

              <div className="bg-amber-50 rounded-xl p-4 text-xs text-amber-800 border border-amber-100">
                <strong>Photo:</strong> Placeholder image shown until the hospital
                shares an approved doctor portrait.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">
            Request Appointment with Dr. Gunjan
          </h2>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
