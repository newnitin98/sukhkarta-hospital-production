import Link from "next/link";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";

export default function LocationTimings() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-display mb-6">
              Find Us in Saoner
            </h2>
            <div className="bg-brand-blue-50 rounded-2xl h-56 flex flex-col items-center justify-center mb-6 border-2 border-brand-blue-100">
              <MapPin className="h-10 w-10 text-brand-blue-400 mb-3" />
              <p className="text-sm text-brand-blue-600 font-medium mb-2">
                Sukhkarta Hospital, Saoner
              </p>
              <Link
                href={HOSPITAL.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-brand-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-brand-blue-700 transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Open in Google Maps
              </Link>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Address:</strong> {HOSPITAL.address.public}
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5 text-brand-blue-600" />
                <h3 className="font-semibold text-gray-900">OPD Timings</h3>
              </div>
              {HOSPITAL.hours.display.map((slot) => (
                <div
                  key={slot.days}
                  className="flex justify-between items-center py-1.5 border-b border-gray-100 last:border-0 text-sm"
                >
                  <span className="text-gray-700">{slot.days}</span>
                  <span
                    className={`font-semibold ${
                      slot.hours === "Closed"
                        ? "text-brand-red-500"
                        : "text-gray-900"
                    }`}
                  >
                    {slot.hours}
                  </span>
                </div>
              ))}
              <p className="text-xs text-gray-500 mt-3 italic">
                {HOSPITAL.hours.emergency}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-4">
                Contact Numbers
              </h3>
              <div className="space-y-3">
                {HOSPITAL.phones.all.map((phone) => (
                  <Link
                    key={phone.key}
                    href={`tel:${phone.value}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-blue-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-brand-blue-500 flex-shrink-0" />
                    <span>
                      {phone.display}
                      <span className="ml-2 text-xs text-gray-500">
                        ({phone.label})
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">Email</h3>
              <div className="space-y-3">
                {HOSPITAL.emails.all.map((email) => (
                  <Link
                    key={email.key}
                    href={`mailto:${email.value}`}
                    className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-blue-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-brand-blue-500" />
                    <span>
                      {email.value}
                      <span className="ml-2 text-xs text-gray-500">
                        ({email.label})
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
