import Link from "next/link";
import { ChevronRight, Heart, Activity, Waves, HeartPulse, Zap, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CARDIAC_SERVICES } from "@/data/services";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity, Waves, HeartPulse, Zap, ShieldCheck, Heart,
};

export default function CardiacSection() {
  const highlighted = CARDIAC_SERVICES.filter((s) => "highlight" in s && s.highlight);
  const rest = CARDIAC_SERVICES.filter((s) => !("highlight" in s && s.highlight)).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cardiac Care"
          title="Advanced Heart Care Close to Home"
          subtitle="Dr. Tanu Dhundele brings DM Cardiology expertise and interventional cardiology to Saoner — from preventive screenings to complex cardiac procedures."
        />

        {/* Highlighted services */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {highlighted.map((svc) => {
            const Icon = ICONS[svc.icon] ?? Heart;
            return (
              <div
                key={svc.id}
                className="bg-gradient-to-br from-brand-red-500 to-brand-red-600 text-white rounded-2xl p-6 shadow-card"
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{svc.name}</h3>
                <p className="text-sm text-red-100 leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Other services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {rest.map((svc) => {
            const Icon = ICONS[svc.icon] ?? Heart;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-200 hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <Icon className="h-5 w-5 text-brand-red-500" />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-brand-red-700 transition-colors">
                    {svc.name}
                  </h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {svc.description.slice(0, 80)}…
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/cardiac-care"
            className="inline-flex items-center gap-2 bg-brand-red-500 hover:bg-brand-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
          >
            Explore All Cardiac Services
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
