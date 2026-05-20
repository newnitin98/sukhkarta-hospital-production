import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";
import Image from "next/image";

const QUICK_LINKS = [
  { label: "About Hospital", href: "/about" },
  { label: "Orthopaedic Care", href: "/orthopaedic-care" },
  { label: "Cardiac Care", href: "/cardiac-care" },
  { label: "TMT Test", href: "/tmt-test" },
  { label: "Facilities", href: "/facilities" },
  { label: "Health Checkups", href: "/health-checkups" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact & Appointment", href: "/contact" },
];

const DOCTOR_LINKS = [
  {
    label: "Dr. Gunjan R. Dhundele",
    href: "/doctors/dr-gunjan-r-dhundele",
    sub: "Orthopaedic Surgeon",
  },
  {
    label: "Dr. Tanu Dhundele",
    href: "/doctors/dr-tanu-dhundele",
    sub: "Interventional Cardiologist",
  },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-white/20 flex-shrink-0">
              <Image 
                src="/images/logo_final.png" 
                alt="Sukhkarta Hospital Orthopaedic and Cardiac Care Centre logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <div className="font-bold text-white font-display leading-tight">
                Sukhkarta Hospital
              </div>
              <div className="text-xs text-blue-300 leading-tight">
                Orthopaedic & Cardiac Care Centre
              </div>
            </div>
          </div>
          <p className="text-sm text-blue-200 leading-relaxed mb-5">
            Compassionate, expert orthopaedic and cardiac care for patients in
            Saoner, Nagpur and surrounding areas.
          </p>
          <div className="space-y-2.5 text-sm text-blue-200">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-400" />
              <span>{HOSPITAL.address.public}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 flex-shrink-0 text-blue-400" />
              <span>{HOSPITAL.hours.short}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 flex-shrink-0 text-blue-400" />
              <Link
                href={`tel:${HOSPITAL.phones.primary}`}
                className="hover:text-white transition-colors"
              >
                {HOSPITAL.phones.display.primary}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 flex-shrink-0 text-blue-400" />
              <Link
                href={`mailto:${HOSPITAL.email}`}
                className="hover:text-white transition-colors break-all"
              >
                {HOSPITAL.email}
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Our Doctors
          </h3>
          <ul className="space-y-4">
            {DOCTOR_LINKS.map((doctor) => (
              <li key={doctor.href}>
                <Link href={doctor.href} className="group">
                  <div className="text-sm text-white font-medium group-hover:text-blue-300 transition-colors">
                    {doctor.label}
                  </div>
                  <div className="text-xs text-blue-300">{doctor.sub}</div>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
            Book Appointment
          </h3>
          <p className="text-sm text-blue-200 mb-5 leading-relaxed">
            Call, WhatsApp, or fill the enquiry form to schedule your
            consultation.
          </p>
          <div className="space-y-3">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-white text-brand-blue-700 text-sm font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href={buildWhatsAppUrl(
                HOSPITAL.phones.primary,
                HOSPITAL.ctaMessages.appointment
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
          <p>&copy; {year} Sukhkarta Hospital, Saoner. All rights reserved.</p>
          <p className="text-center sm:text-right">
            {HOSPITAL.legalDisclaimer}{" "}
            <Link href="/medical-disclaimer" className="underline hover:text-blue-300">
              Medical Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
