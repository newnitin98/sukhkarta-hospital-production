import Link from "next/link";
import { Phone, Clock, AlertCircle } from "lucide-react";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function EmergencyBar() {
  return (
    <div className="bg-brand-red-600 text-white text-xs sm:text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-start sm:items-center gap-2 font-medium">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed sm:leading-normal">
            {HOSPITAL.hours.emergency}{" "}
            <span className="whitespace-nowrap">
              Do not delay.{" "}
              <Link
                href={`tel:${HOSPITAL.phones.primary}`}
                className="font-bold underline underline-offset-2 hover:text-red-100 transition-colors ml-1"
              >
                {HOSPITAL.phones.display.primary}
              </Link>
            </span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-red-200">
            <Clock className="h-3.5 w-3.5" />
            {HOSPITAL.hours.short}
          </span>
          <Link
            href={buildWhatsAppUrl(
              HOSPITAL.phones.primary,
              HOSPITAL.ctaMessages.appointment
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white text-brand-red-600 font-semibold text-xs px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
          >
            WhatsApp Us
          </Link>
        </div>
      </div>
    </div>
  );
}
