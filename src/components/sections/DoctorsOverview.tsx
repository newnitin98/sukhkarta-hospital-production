import Link from "next/link";
import { Award, GraduationCap, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import DoctorPhoto from "@/components/ui/DoctorPhoto";
import { DOCTORS } from "@/data/doctors";

export default function DoctorsOverview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Specialists"
          title="Expert Doctors You Can Trust"
          subtitle="Sukhkarta Hospital is led by two highly qualified specialists who bring fellowship-trained expertise to orthopaedic surgery and interventional cardiology."
        />

        <div className="grid md:grid-cols-2 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow overflow-hidden group"
            >
              {/* Photo placeholder */}
              <div
                className={`h-8 ${
                  doctor.speciality === "Orthopaedics"
                    ? "bg-gradient-to-r from-brand-blue-600 to-brand-blue-700"
                    : "bg-gradient-to-r from-brand-red-500 to-brand-red-600"
                }`}
              />

              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-5 mb-5">
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
                    <h3 className="text-xl font-bold text-gray-900 font-display">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-0.5">
                      {doctor.qualificationsDisplay}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  {doctor.bio.slice(0, 200)}...
                </p>

                {/* Awards */}
                <div className="space-y-2 mb-6">
                  {doctor.awards.slice(0, 2).map((award) => (
                    <div
                      key={award.title + award.year}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Award className="h-4 w-4 text-amber-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        {award.title} - {award.event} ({award.year})
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-brand-blue-400 flex-shrink-0" />
                    <span className="text-gray-700">{doctor.subSpeciality}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto border-t border-gray-100">
                  <Link
                    href={`/doctors/${doctor.slug}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      doctor.speciality === "Orthopaedics"
                        ? "text-brand-blue-600 hover:text-brand-blue-700"
                        : "text-brand-red-600 hover:text-brand-red-700"
                    }`}
                  >
                    View Profile
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 hover:bg-gray-100 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ml-auto"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
