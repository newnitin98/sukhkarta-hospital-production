import type { Metadata } from "next";
import Link from "next/link";
import { Award, GraduationCap, Languages, ChevronRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import DoctorPhoto from "@/components/ui/DoctorPhoto";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { DOCTORS } from "@/data/doctors";

export const metadata: Metadata = {
  title: PAGE_SEO.doctors.title,
  description: PAGE_SEO.doctors.description,
  alternates: { canonical: `${SITE_URL}/doctors` },
};

export default function DoctorsPage() {
  return (
    <>
      <SchemaScript
        schema={[
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Doctors", url: `${SITE_URL}/doctors` },
          ]),
          ...DOCTORS.map((d) => physicianSchema(d)),
        ]}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Doctors" }]}
            className="text-blue-300 mb-5"
          />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Our Specialist Doctors
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Meet the qualified specialists behind Sukhkarta Hospital's
            commitment to orthopaedic and cardiac care.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {DOCTORS.map((doctor) => (
              <Link
                key={doctor.id}
                href={`/doctors/${doctor.slug}`}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow overflow-hidden group block"
              >
                <div
                  className={`h-2 ${
                    doctor.speciality === "Orthopaedics"
                      ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-700"
                      : "bg-gradient-to-r from-brand-red-500 to-brand-red-600"
                  }`}
                />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <DoctorPhoto
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      status={doctor.imageStatus}
                      className="h-20 w-20 flex-shrink-0"
                    />
                    <div>
                      <div
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          doctor.speciality === "Orthopaedics"
                            ? "text-brand-blue-600"
                            : "text-brand-red-500"
                        }`}
                      >
                        {doctor.speciality}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 font-display">
                        {doctor.name}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {doctor.qualificationsDisplay}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-5">
                    {doctor.bio.slice(0, 180)}...
                  </p>

                  <div className="space-y-2 mb-5">
                    {doctor.awards.slice(0, 2).map((a) => (
                      <div key={a.title + a.year} className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-amber-500 flex-shrink-0" />
                        <span className="text-gray-700">
                          {a.title} - {a.event} ({a.year})
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 text-sm">
                      <GraduationCap className="h-4 w-4 text-brand-blue-400 flex-shrink-0" />
                      <span className="text-gray-700">{doctor.subSpeciality}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Languages className="h-4 w-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-700">
                        {doctor.languages.join(", ")}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all ${
                      doctor.speciality === "Orthopaedics"
                        ? "text-brand-blue-600"
                        : "text-brand-red-500"
                    }`}
                  >
                    View Full Profile <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
