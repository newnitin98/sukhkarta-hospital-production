import { HOSPITAL } from "@/data/hospital";
import { SITE_URL } from "@/data/seo";

export function hospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Hospital", "MedicalClinic", "LocalBusiness"],
    name: HOSPITAL.fullName,
    alternateName: HOSPITAL.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo_final.png`,
    telephone: HOSPITAL.phones.all.map((phone) => phone.value),
    email: HOSPITAL.emails.all.map((email) => email.value),
    address: {
      "@type": "PostalAddress",
      streetAddress: HOSPITAL.address.line1,
      addressLocality: HOSPITAL.address.city,
      addressRegion: HOSPITAL.address.state,
      postalCode: HOSPITAL.address.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "12:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: ["Orthopedic", "Cardiology"],
    availableService: [
      { "@type": "MedicalTherapy", name: "Joint Replacement Surgery" },
      { "@type": "MedicalTherapy", name: "Fracture Care" },
      { "@type": "DiagnosticTest", name: "Treadmill Test (TMT)" },
      { "@type": "DiagnosticTest", name: "ECG / Electrocardiogram" },
      { "@type": "MedicalTherapy", name: "Angioplasty with Stenting" },
    ],
    hasMap: HOSPITAL.address.googleMapsUrl,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    priceRange: "INR",
    accessibility: "WheelchairAccessible",
  };
}

export function physicianSchema(doctor: {
  name: string;
  qualificationsDisplay: string;
  speciality: string;
  subSpeciality: string;
  slug: string;
  phone: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.qualificationsDisplay,
    medicalSpecialty: doctor.speciality,
    jobTitle: doctor.subSpeciality,
    url: `${SITE_URL}/doctors/${doctor.slug}`,
    telephone: doctor.phone,
    worksFor: {
      "@type": "Hospital",
      name: HOSPITAL.fullName,
      address: {
        "@type": "PostalAddress",
        addressLocality: HOSPITAL.address.city,
        addressRegion: HOSPITAL.address.state,
        postalCode: HOSPITAL.address.pincode,
        addressCountry: "IN",
      },
    },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
