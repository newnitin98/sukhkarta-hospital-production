import Link from "next/link";
import { Phone, CalendarDays, Stethoscope, CheckCircle } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";

const STEPS = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    description:
      "Call, WhatsApp, or fill the online form to reach our team and check availability.",
  },
  {
    step: "02",
    icon: CalendarDays,
    title: "Book Your Slot",
    description:
      "Choose your preferred date and time. Our staff will confirm your appointment.",
  },
  {
    step: "03",
    icon: Stethoscope,
    title: "Consult the Specialist",
    description:
      "Visit the hospital for your consultation. Bring any previous reports or X-rays.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Start Your Care Plan",
    description:
      "Receive a personalised diagnosis, treatment plan, and follow-up guidance.",
  },
];

export default function AppointmentProcess() {
  return (
    <section className="py-16 md:py-24 bg-brand-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-100 text-brand-blue-700 mb-3 uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-display">
            Booking an Appointment is Easy
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We have made the process simple so you can focus on your health.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STEPS.map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="relative text-center">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-brand-blue-600" />
              </div>
              <div className="absolute -top-1 -right-1 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 sm:-top-2 w-6 h-6 rounded-full bg-brand-blue-600 text-white text-xs font-bold flex items-center justify-center">
                {step.replace("0", "")}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
          >
            <CalendarDays className="h-4 w-4" />
            Request Appointment
          </Link>
          <Link
            href={`tel:${HOSPITAL.phones.primary}`}
            className="inline-flex items-center gap-2 border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            {HOSPITAL.phones.display.primary}
          </Link>
          <Link
            href={buildWhatsAppUrl(
              HOSPITAL.phones.primary,
              HOSPITAL.ctaMessages.appointment
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
