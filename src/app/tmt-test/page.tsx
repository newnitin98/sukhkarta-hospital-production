import type { Metadata } from "next";
import Link from "next/link";
import { Activity, CheckCircle, AlertTriangle, Phone } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/forms/AppointmentForm";
import SchemaScript from "@/components/ui/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";
import { PAGE_SEO, SITE_URL } from "@/data/seo";
import { HOSPITAL } from "@/data/hospital";

export const metadata: Metadata = {
  title: PAGE_SEO.tmt.title,
  description: PAGE_SEO.tmt.description,
  keywords: PAGE_SEO.tmt.keywords,
  alternates: { canonical: `${SITE_URL}/tmt-test` },
};

const WHO_NEEDS = [
  "Chest pain or tightness on exertion",
  "Breathlessness during physical activity",
  "Unexplained fatigue or dizziness",
  "Palpitations or irregular heartbeat",
  "Pre-surgical cardiac clearance",
  "Routine heart health screening (40+)",
  "Family history of heart disease",
  "Diabetes or hypertension management",
];

const HOW_IT_WORKS = [
  { step: "1", title: "Preparation", desc: "Avoid eating 2–3 hours before the test. Wear comfortable shoes." },
  { step: "2", title: "ECG Baseline", desc: "Resting ECG recorded to establish baseline heart activity." },
  { step: "3", title: "Walking on Treadmill", desc: "Speed and incline gradually increase in stages under medical supervision." },
  { step: "4", title: "Monitoring", desc: "ECG, blood pressure, and heart rate monitored continuously." },
  { step: "5", title: "Recovery", desc: "Test stops when target heart rate is reached or symptoms occur." },
  { step: "6", title: "Results", desc: "Results interpreted by Dr. Tanu Dhundele and shared the same day." },
];

export default function TMTTestPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "TMT Test", url: `${SITE_URL}/tmt-test` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "TMT Test" }]}
            className="text-blue-300 mb-5"
          />
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Activity className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                Cardiac Diagnostic
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold font-display">
                TMT Test in Saoner
              </h1>
            </div>
          </div>
          <p className="text-blue-200 text-lg max-w-2xl">
            Treadmill Test (Stress Test) available at Sukhkarta Hospital — a
            safe, non-invasive cardiac test for early detection of heart
            conditions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-brand-blue-700 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors"
            >
              Book TMT Test
            </Link>
            <Link
              href={`tel:${HOSPITAL.phones.primary}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {HOSPITAL.phones.display.primary}
            </Link>
          </div>
        </div>
      </section>

      {/* What is TMT */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 font-display mb-5">
                What is a TMT Test?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Treadmill Test (TMT), also known as an exercise stress test or
                cardiac stress test, is a diagnostic procedure that evaluates
                how your heart performs under physical exertion. It involves
                walking on a treadmill while your heart's electrical activity,
                blood pressure, and heart rate are continuously monitored.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The TMT helps detect coronary artery disease (blocked arteries),
                arrhythmias, and other conditions that may not be apparent at
                rest. It is one of the most widely recommended cardiac
                diagnostic tests for patients with chest pain, breathlessness,
                or cardiac risk factors.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Sukhkarta Hospital, TMT tests are supervised and interpreted
                by Dr. Tanu Dhundele (DM Cardiology), ensuring accurate results
                and personalised guidance.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Duration", value: "~30–60 minutes" },
                  { label: "Radiation", value: "None" },
                  { label: "Results", value: "Same Day" },
                  { label: "Supervised by", value: "DM Cardiologist" },
                ].map((item) => (
                  <div key={item.label} className="bg-brand-blue-50 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-500">{item.label}</div>
                    <div className="font-semibold text-gray-900 text-sm mt-0.5">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-display mb-5">
                Who Should Get a TMT?
              </h2>
              <div className="space-y-2">
                {WHO_NEEDS.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">
                    TMT is contraindicated in certain cardiac conditions. Please
                    consult Dr. Tanu for eligibility before scheduling. Do not
                    self-refer if you have active chest pain — call immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 font-display mb-10 text-center">
            How the Test Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl p-5 shadow-card"
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue-600 text-white text-sm font-bold flex items-center justify-center mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6 text-center">
            Schedule Your TMT Test
          </h2>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
