export const DOCTORS = [
  {
    id: "dr-gunjan-dhundele",
    slug: "dr-gunjan-r-dhundele",
    name: "Dr. Gunjan R. Dhundele",
    shortName: "Dr. Gunjan",
    title: "Orthopaedic Surgeon & Joint Replacement Specialist",
    qualifications: [
      "M.B.B.S.",
      "D. Ortho (Gold Medalist)",
      "DNB Orthopaedics",
      "MNAMS",
      "FJRS",
    ],
    qualificationsDisplay:
      "M.B.B.S., D. Ortho Gold Medalist, DNB Orthopaedics, MNAMS, FJRS",
    speciality: "Orthopaedics",
    subSpeciality:
      "Consultant Joint Replacement and Pelvi-acetabular Reconstructive Surgeon",
    experience: "15+ Years Experience",
    experienceYears: 15,
    languages: ["English", "Hindi", "Kannada", "Marathi"],
    registrations: [
      { body: "MMC", number: "2023/01/0306" },
      { body: "MCI", number: "17-24261" },
      { body: "MCI", number: "13-13937" },
      { body: "MCI", number: "10-36539" },
    ],
    awards: [
      {
        title: "Best Paper Award",
        event: "MP Ortho Association Conference, Pachmarhi",
        year: 2017,
      },
      {
        title: "Gold Medal",
        event: "Diploma in Orthopaedics",
        year: 2013,
      },
    ],
    education: [
      {
        degree: "MBBS",
        institution:
          "NKP Salve Institute of Medical Sciences and Lata Mangeshkar Hospital, Nagpur",
        year: 2010,
      },
      {
        degree: "Diploma in Orthopaedics (Gold Medalist)",
        institution: "Kasturba Medical College, Manipal",
        year: 2013,
      },
      {
        degree: "DNB Orthopaedics",
        institution: "National Board of Education / Ruby Hall Clinic, Pune",
        year: 2016,
      },
      {
        degree:
          "Fellowship in Joint Replacement and Pelvi-acetabular Reconstruction",
        institution: "Deenanath Mangeshkar Hospital, Pune",
        year: 2018,
      },
      {
        degree: "MNAMS",
        institution: "National Academy of Medical Sciences, New Delhi",
        year: 2018,
      },
    ],
    conditions: [
      "Osteoarthritis",
      "Fractures",
      "Joint Disorders",
      "Cervical Spondylitis",
      "Lumbar Spondylosis",
      "Osteomyelitis",
      "Lumbar Disc Prolapse with Radiculopathy",
      "Lumbago",
      "Joint Pain",
      "Knee Pain",
      "Hip Pain",
      "Trauma and Orthopaedic Injuries",
    ],
    bio: "Dr. Gunjan R. Dhundele is a highly accomplished orthopaedic surgeon with over 15 years of experience specialising in joint replacement surgery and pelvi-acetabular reconstruction. A gold medalist in Diploma Orthopaedics, he completed advanced fellowship training at Deenanath Mangeshkar Hospital, Pune and has been recognised for academic contributions at national orthopaedic conferences. He serves patients across Saoner and greater Nagpur with compassionate, evidence-based orthopaedic care.",
    image: "/images/dr-gunjan-placeholder.svg",
    imageAlt:
      "Placeholder portrait for Dr. Gunjan R. Dhundele until hospital-approved photo is provided.",
    imageStatus: "placeholder",
    phone: "+917057469651",
    displayPhone: "+91 70574 69651",
  },
  {
    id: "dr-tanu-dhundele",
    slug: "dr-tanu-dhundele",
    name: "Dr. Tanu Dhundele",
    shortName: "Dr. Tanu",
    title: "Interventional Cardiologist",
    qualifications: [
      "MBBS (Gold Medalist)",
      "MD General Medicine (Gold Medalist)",
      "DM Cardiology",
    ],
    qualificationsDisplay:
      "MBBS Gold Medalist, MD General Medicine Gold Medalist, DM Cardiology",
    speciality: "Cardiology",
    subSpeciality: "DM Cardiology Consultant & Interventional Cardiologist",
    experience: "Consultant Cardiologist",
    experienceYears: 8,
    languages: ["English", "Hindi", "Marathi"],
    registrations: [{ body: "MMC", number: "2024/02/0781" }],
    awards: [
      { title: "Gold Medal", event: "MBBS", year: 2016 },
      { title: "Gold Medal", event: "MD General Medicine", year: 2020 },
    ],
    education: [
      {
        degree: "MBBS (Gold Medalist)",
        institution: "Medical College, Maharashtra",
        year: 2016,
      },
      {
        degree: "MD General Medicine (Gold Medalist)",
        institution: "Medical College, Maharashtra",
        year: 2020,
      },
      {
        degree: "DM Cardiology",
        institution: "Medical Institute, India",
        year: 2023,
      },
    ],
    conditions: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Hypertension",
      "Valvular Heart Disease",
      "Arrhythmias",
      "Peripheral Vascular Disease",
      "Cardiac Risk Assessment",
      "Preventive Cardiology",
    ],
    bio: "Dr. Tanu Dhundele is a gold-medal-winning interventional cardiologist with expertise in advanced cardiac procedures including coronary angioplasty, pacemaker implantation, and structural heart interventions. A double gold medalist in MBBS and MD General Medicine, she brings a strong academic foundation and clinical precision to complex cardiac care. She is committed to making advanced cardiac services accessible to patients in Saoner and the Nagpur region.",
    image: "/images/dr-tanu-placeholder.svg",
    imageAlt:
      "Placeholder portrait for Dr. Tanu Dhundele until hospital-approved photo is provided.",
    imageStatus: "placeholder",
    phone: "+919644363105",
    displayPhone: "+91 96443 63105",
    phoneAlt: "+917509491094",
    displayPhoneAlt: "+91 75094 91094",
    email: "tanug688@gmail.com",
  },
] as const;

export type Doctor = (typeof DOCTORS)[number];
