import type { Metadata } from "next";
import { Stethoscope, HeartPulse, ScanLine, Activity, Pill, BedDouble, Accessibility, CreditCard } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionHeader from "@/components/ui/SectionHeader";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { FACILITIES } from "@/data/facilities";
import Link from "next/link";

export const metadata: Metadata = {
  title: PAGE_SEO.facilities.title,
  description: PAGE_SEO.facilities.description,
  alternates: { canonical: `${SITE_URL}/facilities` },
};

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, MonitorHeart: HeartPulse, ScanLine, Activity, Pill, BedDouble, Accessibility, CreditCard,
};

export default function FacilitiesPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Facilities", url: `${SITE_URL}/facilities` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Facilities" }]} className="text-blue-300 mb-5" />
          <h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">
            Hospital Facilities
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Modern infrastructure designed for patient safety, comfort, and
            clinical excellence.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Infrastructure"
            title="What We Offer"
            subtitle="Every facility at Sukhkarta Hospital is maintained to high standards, ensuring the best possible care environment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map(({ id, name, icon, description }) => {
              const Icon = ICONS[icon] ?? Stethoscope;
              return (
                <div
                  key={id}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-blue-100 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-brand-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-blue-50 border-t border-brand-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-700 mb-4">
            Have a question about our facilities or want to arrange a visit?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
