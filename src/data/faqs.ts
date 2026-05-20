export const FAQS = [
  {
    id: "q1",
    question: "What are the hospital's consultation timings?",
    answer:
      "Our OPD consultation hours are Monday to Saturday from 12:00 PM to 7:00 PM. The hospital is closed on Sunday. For emergencies, please call our helpline immediately.",
    category: "general",
  },
  {
    id: "q2",
    question: "How do I book an appointment at Sukhkarta Hospital?",
    answer:
      "You can book an appointment by calling us at +91 70574 69651, sending a WhatsApp message, or filling out the appointment enquiry form on our website.",
    category: "appointment",
  },
  {
    id: "q3",
    question: "Is TMT (Treadmill Test) available at the hospital?",
    answer:
      "Yes, we offer Treadmill Test (TMT) / stress testing as part of our cardiac diagnostic services. It is a non-invasive test recommended for evaluating heart function during exertion. Please call ahead to schedule your test.",
    category: "cardiac",
  },
  {
    id: "q4",
    question: "Does the hospital perform joint replacement surgeries?",
    answer:
      "Yes. Dr. Gunjan R. Dhundele is a fellowship-trained joint replacement and pelvi-acetabular reconstructive surgeon. He performs total knee replacement, hip replacement, and complex reconstructive procedures.",
    category: "ortho",
  },
  {
    id: "q5",
    question: "Is the hospital wheelchair accessible?",
    answer:
      "Yes, Sukhkarta Hospital is fully wheelchair accessible, including the entrance, elevator, restrooms, and seating areas.",
    category: "general",
  },
  {
    id: "q6",
    question: "What cardiac procedures are available at the hospital?",
    answer:
      "Our interventional cardiology services include angioplasty with stenting, pacemaker implantation, TAVR/TAVI, ICD and CRT implantation, Holter monitoring, ABPM, IVUS-guided angioplasty, OCT and FFR, and preventive cardiac screenings, among others.",
    category: "cardiac",
  },
  {
    id: "q7",
    question: "Does the hospital have an ICU and operation theatre?",
    answer:
      "Yes. The hospital has a fully equipped modular operation theatre with laminar airflow and a dedicated ICU for post-operative and critical care monitoring.",
    category: "facilities",
  },
  {
    id: "q8",
    question: "Are UPI payments accepted?",
    answer:
      "Yes, we accept all major UPI payment apps for consultations, diagnostics, and billing. Cash is also accepted.",
    category: "general",
  },
  {
    id: "q9",
    question: "How do I reach Sukhkarta Hospital from Nagpur?",
    answer:
      "The hospital is located near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout, Saoner, Dist. Nagpur. Please use Google Maps or call us for directions.",
    category: "general",
  },
  {
    id: "q10",
    question:
      "Does Dr. Tanu Dhundele handle heart attack or emergency cardiac cases?",
    answer:
      "Dr. Tanu Dhundele is a DM Cardiology consultant and interventional cardiologist. For cardiac emergencies, please call immediately. Emergency cases are triaged on priority. Call the hospital or proceed to the nearest emergency facility without delay.",
    category: "cardiac",
  },
] as const;

export type FAQ = (typeof FAQS)[number];
