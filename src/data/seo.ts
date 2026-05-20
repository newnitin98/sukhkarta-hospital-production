export const SITE_URL = "https://sukhkartahospital.com";

export const DEFAULT_SEO = {
  siteName: "Sukhkarta Hospital",
  siteUrl: SITE_URL,
  defaultTitle:
    "Sukhkarta Hospital - Orthopaedic & Cardiac Care in Saoner, Nagpur",
  defaultDescription:
    "Sukhkarta Hospital in Saoner, Nagpur offers expert orthopaedic, joint replacement, and cardiac care. Consult Dr. Gunjan Dhundele (Orthopaedics) and Dr. Tanu Dhundele (Cardiologist). TMT, ECG, angioplasty, and more.",
  keywords: [
    "orthopaedic hospital Saoner",
    "cardiologist Saoner",
    "TMT test Saoner",
    "ECG test Nagpur",
    "joint replacement Nagpur",
    "fracture treatment Saoner",
    "Sukhkarta Hospital Saoner",
    "Dr Gunjan Dhundele orthopaedic",
    "Dr Tanu Dhundele cardiologist",
    "cardiac hospital Saoner",
    "knee replacement Nagpur",
    "hip replacement Nagpur",
    "heart specialist Nagpur district",
    "interventional cardiologist Saoner",
  ],
  ogImage: `${SITE_URL}/images/og-default.png`,
  twitterHandle: "@sukhkartahosp",
};

export const PAGE_SEO: Record<
  string,
  { title: string; description: string; keywords?: string[] }
> = {
  home: {
    title:
      "Sukhkarta Hospital - Orthopaedic & Cardiac Care Centre | Saoner, Nagpur",
    description:
      "Sukhkarta Hospital Saoner: Expert orthopaedic and cardiac care. Joint replacement, fracture treatment, TMT test, ECG, angioplasty, and consultations with Dr. Gunjan and Dr. Tanu Dhundele.",
    keywords: [
      "orthopaedic hospital Saoner",
      "cardiologist Saoner",
      "TMT test Saoner",
      "Sukhkarta Hospital",
    ],
  },
  about: {
    title:
      "About Sukhkarta Hospital | Orthopaedic & Cardiac Care Centre, Saoner",
    description:
      "Learn about Sukhkarta Hospital, a dedicated orthopaedic and cardiac care centre in Saoner, Nagpur with modular OT, ICU, and specialist consultants.",
  },
  doctors: {
    title:
      "Our Doctors | Orthopaedic Surgeon & Cardiologist | Sukhkarta Hospital Saoner",
    description:
      "Meet Dr. Gunjan R. Dhundele (Orthopaedic Surgeon, DNB, Gold Medalist) and Dr. Tanu Dhundele (DM Cardiology, Gold Medalist) at Sukhkarta Hospital, Saoner.",
  },
  "dr-gunjan": {
    title:
      "Dr. Gunjan R. Dhundele - Orthopaedic Surgeon | Joint Replacement Specialist | Saoner",
    description:
      "Dr. Gunjan R. Dhundele - MBBS, DNB Orthopaedics, Gold Medalist, FJRS. Fellowship-trained joint replacement and pelvi-acetabular reconstructive surgeon with 15+ years experience.",
    keywords: [
      "Dr Gunjan Dhundele orthopaedic",
      "joint replacement surgeon Saoner",
      "fracture specialist Nagpur",
    ],
  },
  "dr-tanu": {
    title:
      "Dr. Tanu Dhundele - DM Cardiology | Interventional Cardiologist | Saoner, Nagpur",
    description:
      "Dr. Tanu Dhundele - MBBS Gold Medalist, MD General Medicine Gold Medalist, DM Cardiology. Interventional cardiologist at Sukhkarta Hospital, Saoner.",
    keywords: [
      "Dr Tanu Dhundele cardiologist",
      "interventional cardiologist Saoner",
      "DM cardiology Nagpur",
    ],
  },
  orthopaedic: {
    title:
      "Orthopaedic Care | Joint Replacement, Fracture, Spine | Sukhkarta Hospital Saoner",
    description:
      "Comprehensive orthopaedic services in Saoner: joint replacement, fracture care, spine treatment, arthroscopy, and pelvi-acetabular reconstruction by Dr. Gunjan Dhundele.",
    keywords: [
      "orthopaedic care Saoner",
      "knee replacement Nagpur",
      "fracture treatment",
      "spine care Nagpur",
    ],
  },
  cardiac: {
    title:
      "Cardiac Care | Angioplasty, TMT, ECG, TAVR | Sukhkarta Hospital Saoner, Nagpur",
    description:
      "Advanced cardiac care in Saoner: angioplasty, pacemaker, TAVR, TMT test, ECG, Holter monitoring, and preventive screening by Dr. Tanu Dhundele, DM Cardiology.",
    keywords: [
      "cardiac hospital Saoner",
      "angioplasty Nagpur",
      "heart specialist Saoner",
      "TMT test Nagpur",
    ],
  },
  tmt: {
    title: "TMT Test in Saoner, Nagpur | Treadmill Test | Sukhkarta Hospital",
    description:
      "Get your TMT (Treadmill Test) done at Sukhkarta Hospital, Saoner. Non-invasive cardiac stress test for early detection of coronary artery disease. Book now.",
    keywords: [
      "TMT test Saoner",
      "treadmill test Nagpur",
      "cardiac stress test near me",
      "heart test Saoner",
    ],
  },
  facilities: {
    title:
      "Hospital Facilities | ICU, OT, X-Ray, Physiotherapy | Sukhkarta Hospital",
    description:
      "Sukhkarta Hospital offers modular operation theatre, ICU, digital X-ray, physiotherapy, in-house pharmacy, and comfortable rooms in Saoner, Nagpur.",
  },
  contact: {
    title: "Contact & Appointment | Sukhkarta Hospital Saoner, Nagpur",
    description:
      "Book an appointment at Sukhkarta Hospital, Saoner. Call +91 70574 69651 or WhatsApp. Near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout, Saoner, Dist. Nagpur. OPD: Monday to Saturday, 12:00 PM to 7:00 PM.",
    keywords: ["Sukhkarta Hospital contact", "book appointment Saoner"],
  },
};
