import {
  Shield,
  Award,
  MapPin,
  Clock,
  HeartHandshake,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { HOSPITAL } from "@/data/hospital";

const REASONS = [
  {
    icon: Award,
    title: "Gold Medalist Specialists",
    description:
      "Both our doctors are academic gold medalists - Dr. Gunjan in D. Ortho and Dr. Tanu in MBBS and MD General Medicine.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Shield,
    title: "Fellowship-Trained Surgeon",
    description:
      "Dr. Gunjan holds a fellowship in joint replacement and pelvi-acetabular reconstruction from Deenanath Mangeshkar Hospital, Pune.",
    color: "text-brand-blue-600",
    bg: "bg-brand-blue-50",
  },
  {
    icon: HeartHandshake,
    title: "Dual-Speciality Centre",
    description:
      "Orthopaedic surgery and interventional cardiology are available under one roof for patients in Saoner and Nagpur district.",
    color: "text-brand-red-500",
    bg: "bg-red-50",
  },
  {
    icon: MapPin,
    title: "Accessible Location",
    description:
      "Conveniently located in Saoner, reducing the need for patients to travel to Nagpur city for specialist consultations and procedures.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Regular OPD Hours",
    description: `Scheduled outpatient consultation six days a week (${HOSPITAL.hours.short}), with advance appointment booking available.`,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Patient-First Approach",
    description:
      "Clear communication in Hindi, English, Marathi, and Kannada, because understanding your treatment matters.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Sukhkarta"
          title="Why Patients Choose Sukhkarta Hospital"
          subtitle="We combine academic excellence, advanced training, and genuine patient care to deliver trusted medical services in your own community."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map(({ icon: Icon, title, description, color, bg }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 hover:shadow-card transition-shadow"
            >
              <div
                className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}
              >
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
