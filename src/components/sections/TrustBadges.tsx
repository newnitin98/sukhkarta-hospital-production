import { Bone, Heart, Activity, Zap, BedDouble, Microscope } from "lucide-react";

const BADGES = [
  {
    icon: Bone,
    label: "Orthopaedic & Cardiac",
    sub: "Dual-speciality centre",
    color: "text-brand-blue-600",
    bg: "bg-brand-blue-50",
  },
  {
    icon: Activity,
    label: "TMT Available",
    sub: "Cardiac stress testing",
    color: "text-brand-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Zap,
    label: "Joint Replacement",
    sub: "Fellowship-trained surgeon",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Heart,
    label: "Interventional Cardiology",
    sub: "Angioplasty · Pacemaker · TAVR",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: BedDouble,
    label: "ICU & Modular OT",
    sub: "Critical & surgical care",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Microscope,
    label: "X-Ray & Physiotherapy",
    sub: "Diagnostic & rehab services",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {BADGES.map(({ icon: Icon, label, sub, color, bg }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center p-4 rounded-xl hover:shadow-card transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                <Icon className={`h-6 w-6 ${color}`} />
              </div>
              <div className="text-sm font-semibold text-gray-900 leading-tight">
                {label}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
