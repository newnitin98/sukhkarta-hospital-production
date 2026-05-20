import Link from "next/link";
import { ChevronRight, Bone, Activity, AlignCenter, CircleDot, Dumbbell, Microscope } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ORTHO_SERVICES } from "@/data/services";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Bone, Activity, AlignCenter, CircleDot, Dumbbell, Microscope, Baby: Bone, Heart: Activity,
};

export default function OrthoSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: content */}
          <div>
            <SectionHeader
              badge="Orthopaedic Care"
              title="Comprehensive Bone & Joint Treatment"
              subtitle="Led by Dr. Gunjan R. Dhundele — a fellowship-trained joint replacement and pelvi-acetabular reconstructive surgeon with 15+ years of expertise."
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {ORTHO_SERVICES.slice(0, 6).map((svc) => {
                const Icon = ICONS[svc.icon] ?? Bone;
                return (
                  <div
                    key={svc.id}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-brand-blue-200 hover:shadow-card-hover bg-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-100 transition-colors">
                      <Icon className="h-5 w-5 text-brand-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-brand-blue-700 transition-colors">
                        {svc.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {svc.description.slice(0, 70)}…
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/orthopaedic-care"
              className="inline-flex items-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              Explore Orthopaedic Services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: visual panel */}
          <div className="bg-gradient-to-br from-brand-blue-50 to-brand-blue-100 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-card mb-4">
              <div className="text-xs font-semibold text-brand-blue-600 uppercase tracking-wider mb-2">
                Doctor
              </div>
              <div className="font-bold text-gray-900 text-lg font-display">
                Dr. Gunjan R. Dhundele
              </div>
              <div className="text-sm text-gray-600">
                M.B.B.S., D. Ortho (Gold Medalist), DNB Orthopaedics, MNAMS, FJRS
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {["15+ Yrs Exp.", "Gold Medalist", "Fellowship Trained", "MNAMS"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-brand-blue-100 text-brand-blue-700 px-2.5 py-0.5 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Joint Replacements", value: "Total Knee & Hip" },
                { label: "Speciality", value: "Pelvi-acetabular Recon." },
                { label: "Awards", value: "2 National Awards" },
                { label: "Training", value: "Deenanath Mangeshkar, Pune" },
              ].map((item) => (
                <div key={item.label} className="bg-white/70 rounded-xl p-3">
                  <div className="text-xs text-gray-500">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-900 mt-0.5">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
