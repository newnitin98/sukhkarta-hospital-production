import Link from "next/link";
import {
  Phone,
  ChevronRight,
  Award,
  Shield,
  Clock,
  MapPin,
} from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";

const TRUST_PILLS = [
  { icon: Award, text: "Gold Medalist Surgeons" },
  { icon: Shield, text: "15+ Years Experience" },
  { icon: Clock, text: HOSPITAL.hours.short },
] as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-900 text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue-600 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue-800 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Saoner&apos;s Dual-Speciality Care Centre
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Orthopaedic
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-300">
                Cardiac
              </span>{" "}
              Care
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              Sukhkarta Hospital brings specialist orthopaedic surgery, advanced
              cardiac interventions, TMT testing, and preventive care to Saoner
              and Nagpur district.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                  Orthopaedics
                </div>
                <div className="font-semibold text-white text-sm">
                  Dr. Gunjan R. Dhundele
                </div>
                <div className="text-xs text-blue-200">
                  DNB, Gold Medalist, 15+ Yrs, FJRS
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-xs font-semibold text-red-300 uppercase tracking-wider mb-1">
                  Cardiology
                </div>
                <div className="font-semibold text-white text-sm">
                  Dr. Tanu Dhundele
                </div>
                <div className="text-xs text-blue-200">
                  DM Cardiology, Double Gold Medalist
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-sm"
              >
                Book Appointment
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href={`tel:${HOSPITAL.phones.primary}`}
                className="inline-flex items-center gap-2 bg-brand-red-500 hover:bg-brand-red-600 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
              <Link
                href={buildWhatsAppUrl(
                  HOSPITAL.phones.primary,
                  HOSPITAL.ctaMessages.appointment
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg text-sm"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Link>
              <Link
                href={HOSPITAL.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg text-sm border border-white/20 backdrop-blur-sm"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {TRUST_PILLS.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-1.5 text-xs font-medium text-blue-200"
                >
                  <Icon className="h-3.5 w-3.5 text-blue-400" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4">
            {[
              {
                color: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
                badge: "Orthopaedics",
                badgeColor: "bg-blue-500/30 text-blue-200",
                title: "Joint Replacement & Fracture Care",
                items: [
                  "Total Knee & Hip Replacement",
                  "Pelvi-acetabular Reconstruction",
                  "Spine & Disc Management",
                  "Trauma & Fracture Surgery",
                ],
              },
              {
                color: "from-red-500/20 to-red-600/20 border-red-500/30",
                badge: "Cardiology",
                badgeColor: "bg-red-500/30 text-red-200",
                title: "Advanced Cardiac Interventions",
                items: [
                  "Angioplasty with Stenting",
                  "TMT Test & ECG",
                  "Pacemaker & ICD Implantation",
                  "TAVR / TAVI",
                ],
              },
            ].map((card) => (
              <div
                key={card.badge}
                className={`bg-gradient-to-br ${card.color} border backdrop-blur-sm rounded-2xl p-6`}
              >
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
                <h3 className="font-bold text-white mb-3">{card.title}</h3>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-blue-100"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-sm text-blue-200">
              <div className="font-semibold text-white mb-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                Sukhkarta Hospital, Saoner
              </div>
              {HOSPITAL.address.public}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
