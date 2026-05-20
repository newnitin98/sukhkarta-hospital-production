import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: PAGE_SEO.contact.title,
  description: PAGE_SEO.contact.description,
  keywords: PAGE_SEO.contact.keywords,
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact & Appointment", url: `${SITE_URL}/contact` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact & Appointment" }]} className="text-blue-300 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Contact & Appointment
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Book an appointment, ask a question, or get directions to Sukhkarta
            Hospital in Saoner, Nagpur.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: form & map */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue-100 flex items-center justify-center text-brand-blue-600">1</span>
                  Request an Appointment
                </h2>
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-card border border-gray-100">
                  <AppointmentForm />
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-brand-blue-100 flex items-center justify-center text-brand-blue-600">2</span>
                  Find Us on Map
                </h2>
                <div className="bg-white p-2 rounded-2xl shadow-card border border-gray-100">
                  <div className="aspect-video sm:aspect-[21/9] lg:aspect-video bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center relative group">
                    <Link
                      href={HOSPITAL.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-brand-blue-900/5 group-hover:bg-brand-blue-900/20 transition-colors"
                    >
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                        <MapPin className="h-8 w-8 text-brand-blue-600" />
                      </div>
                      <span className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg shadow-md group-hover:-translate-y-1 transition-transform">
                        Open in Google Maps
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: contact info */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900 font-display">
                Reach Us
              </h2>

              {/* Emergency note */}
              <div className="bg-brand-red-50 border border-brand-red-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-brand-red-700 mb-1">
                  For Medical Emergencies
                </p>
                <p className="text-xs text-brand-red-600">
                  {HOSPITAL.hours.emergency}
                </p>
              </div>

              {/* Call */}
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-blue-600" />
                  Phone Numbers
                </h3>
                <div className="space-y-3">
                  {HOSPITAL.phones.all.map((phone) => (
                    <Link
                      key={phone.key}
                      href={`tel:${phone.value}`}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0 hover:text-brand-blue-600 transition-colors text-sm"
                    >
                      <span className="text-gray-700">
                        {phone.display}
                        <span className="ml-2 text-xs text-gray-500">
                          ({phone.label})
                        </span>
                      </span>
                      <span className="text-xs text-brand-blue-500 font-medium">Tap to Call</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <Link
                href={buildWhatsAppUrl(
                  HOSPITAL.phones.primary,
                  "Hello, I would like to book an appointment at Sukhkarta Hospital."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl transition-colors"
              >
                <div>
                  <div className="font-semibold text-sm">WhatsApp Us</div>
                  <div className="text-xs text-green-100">
                    {HOSPITAL.phones.display.primary}
                  </div>
                </div>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>

              {/* Email */}
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-blue-600" />
                  Email
                </h3>
                <div className="space-y-2">
                  {HOSPITAL.emails.all.map((email) => (
                    <Link
                      key={email.key}
                      href={`mailto:${email.value}`}
                      className="block text-sm text-brand-blue-600 hover:underline"
                    >
                      {email.value}
                      <span className="ml-2 text-xs text-gray-500">
                        ({email.label})
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-brand-blue-600" />
                  Address
                </h3>
                <p className="text-sm text-gray-700 mb-3">{HOSPITAL.address.public}</p>
                <Link
                  href={HOSPITAL.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue-600 hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in Google Maps
                </Link>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-brand-blue-600" />
                  OPD Hours
                </h3>
                {HOSPITAL.hours.display.map((slot) => (
                  <div key={slot.days} className="flex justify-between text-sm py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{slot.days}</span>
                    <span className={`font-semibold ${slot.hours === "Closed" ? "text-brand-red-500" : "text-gray-900"}`}>
                      {slot.hours}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
