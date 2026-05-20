export const FACILITIES = [
  {
    id: "modular-ot",
    name: "Modular Operation Theatre",
    icon: "Stethoscope",
    description:
      "State-of-the-art modular OT with laminar airflow, ensuring sterile conditions for all surgical procedures.",
    category: "clinical",
  },
  {
    id: "icu",
    name: "ICU",
    icon: "HeartPulse",
    description:
      "Fully equipped Intensive Care Unit with continuous monitoring for post-operative and critical care patients.",
    category: "clinical",
  },
  {
    id: "xray",
    name: "X-Ray",
    icon: "ScanLine",
    description:
      "On-site digital X-ray facility enabling rapid imaging for fractures, joint assessments, and chest evaluations.",
    category: "diagnostic",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy Unit",
    icon: "Activity",
    description:
      "Dedicated physiotherapy room with modern equipment for rehabilitation after surgery, fractures, and joint conditions.",
    category: "rehabilitation",
  },
  {
    id: "pharmacy",
    name: "In-Hospital Pharmacy",
    icon: "Pill",
    description:
      "On-site pharmacy stocking prescribed medications for convenience of admitted and outpatient visitors.",
    category: "support",
  },
  {
    id: "deluxe-room",
    name: "Deluxe & Special Rooms",
    icon: "BedDouble",
    description:
      "Comfortable deluxe and special patient rooms ensuring privacy and rest during your recovery.",
    category: "accommodation",
  },
  {
    id: "wheelchair",
    name: "Wheelchair Accessible",
    icon: "Accessibility",
    description:
      "Fully accessible facility with wheelchair-friendly entrance, elevator, restroom, and seating throughout.",
    category: "accessibility",
  },
  {
    id: "upi",
    name: "UPI Payments Accepted",
    icon: "CreditCard",
    description:
      "Cashless payment convenience — all major UPI apps accepted for consultation, diagnostics, and billing.",
    category: "support",
  },
] as const;

export type Facility = (typeof FACILITIES)[number];
