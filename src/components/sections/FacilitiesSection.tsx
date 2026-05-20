import Link from "next/link";
import {
  Stethoscope, HeartPulse, ScanLine, Activity, Pill, BedDouble, Accessibility, CreditCard, ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FACILITIES } from "@/data/facilities";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, MonitorHeart: HeartPulse, ScanLine, Activity, Pill, BedDouble, Accessibility, CreditCard,
};

export default function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Facilities"
          title="Everything You Need Under One Roof"
          subtitle="Sukhkarta Hospital is equipped with modern clinical and patient comfort facilities, making your care experience seamless and stress-free."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {FACILITIES.map(({ id, name, icon, description }) => {
            const Icon = ICONS[icon] ?? Stethoscope;
            return (
              <div
                key={id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-brand-blue-200 hover:shadow-card-hover transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-brand-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            View All Facilities
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
