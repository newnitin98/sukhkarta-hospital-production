import Link from "next/link";
import { Activity, CheckCircle, Phone, ChevronRight } from "lucide-react";


const TMT_POINTS = [
  "Age above 40 with risk factors",
  "History of chest pain or breathlessness",
  "High BP, diabetes, or cholesterol",
  "Smoking or family history of heart disease",
  "10–15 minute evaluation",
  "Continuous ECG, BP & heart-rate monitoring",
];

export default function TMTHighlight() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left */}
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-blue-200 mb-5">
                <Activity className="h-3.5 w-3.5" />
                Cardiac Diagnostic
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                TMT (Treadmill Test) Available in Saoner
              </h2>
              <h3 className="text-lg font-semibold text-white mb-2">What is TMT?</h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                A Treadmill Test (TMT) evaluates your heart's response during physical activity. It is a critical screening tool that helps identify potential coronary issues that may not be apparent at rest.
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">Who should consider it?</h3>
              <ul className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {TMT_POINTS.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-sm text-blue-100">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tmt-test"
                  className="inline-flex items-center gap-2 bg-white text-brand-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
                >
                  Learn About TMT Test
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  Book TMT Appointment
                </Link>
              </div>
            </div>

            {/* Right: ECG visual */}
            <div className="bg-brand-blue-800/50 p-8 sm:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Activity className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                <p className="text-center text-blue-200 text-sm">
                  ECG / Electrocardiogram is also available
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Test Duration", value: "~30–60 minutes" },
                  { label: "Radiation", value: "None" },
                  { label: "Results", value: "Same Day" },
                  { label: "Supervised by", value: "DM Cardiologist" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-xs text-blue-300 mb-1">{item.label}</div>
                    <div className="font-semibold text-white text-sm">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
