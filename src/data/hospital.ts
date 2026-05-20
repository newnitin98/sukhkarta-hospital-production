const HOSPITAL_PHONE_CONTACTS = [
  {
    key: "primary",
    label: "Main Reception",
    value: "+917057469651",
    display: "+91 70574 69651",
  },
  {
    key: "secondary",
    label: "Appointments",
    value: "+919552106490",
    display: "+91 95521 06490",
  },
  {
    key: "tertiary",
    label: "Hospital Support",
    value: "+918208591540",
    display: "+91 82085 91540",
  },
  {
    key: "cardiology-primary",
    label: "Cardiology Desk",
    value: "+919644363105",
    display: "+91 96443 63105",
  },
  {
    key: "cardiology-secondary",
    label: "Cardiology Alternate",
    value: "+917509491094",
    display: "+91 75094 91094",
  },
] as const;

const HOSPITAL_EMAIL_CONTACTS = [
  {
    key: "hospital",
    label: "Hospital Email",
    value: "sukhkartahospitalsaoner@gmail.com",
  },
  {
    key: "cardiology",
    label: "Dr. Tanu Email",
    value: "tanug688@gmail.com",
  },
] as const;

export const HOSPITAL = {
  name: "Sukhkarta Hospital",
  tagline: "Orthopaedic & Cardiac Care Centre",
  fullName: "Sukhkarta Hospital Orthopaedic and Cardiac Care Centre",
  domain: "https://sukhkartahospital.com",
  email: "sukhkartahospitalsaoner@gmail.com",
  emails: {
    primary: "sukhkartahospitalsaoner@gmail.com",
    cardiology: "tanug688@gmail.com",
    all: HOSPITAL_EMAIL_CONTACTS,
  },
  phones: {
    primary: "+917057469651",
    secondary: "+919552106490",
    tertiary: "+918208591540",
    cardiologyPrimary: "+919644363105",
    cardiologySecondary: "+917509491094",
    display: {
      primary: "+91 70574 69651",
      secondary: "+91 95521 06490",
      tertiary: "+91 82085 91540",
      cardiologyPrimary: "+91 96443 63105",
      cardiologySecondary: "+91 75094 91094",
    },
    all: HOSPITAL_PHONE_CONTACTS,
  },
  address: {
    line1: "Near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout",
    city: "Saoner",
    district: "Nagpur",
    state: "Maharashtra",
    pincode: "441107",
    public:
      "Near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout, Saoner, Dist. Nagpur.",
    full: "Near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout, Saoner, Dist. Nagpur.",
    structured:
      "Near Balaji Lawn, Opp. Mauli Navnirman Co-op, Mohta Layout, Saoner, Dist. Nagpur, Maharashtra 441107",
    googleMapsQuery: "Sukhkarta+Hospital+Saoner+Nagpur",
    googleMapsUrl:
      "https://www.google.com/maps/search/Sukhkarta+Hospital+Saoner+Nagpur",
  },
  hours: {
    weekdays: "Monday to Saturday: 12:00 PM to 7:00 PM",
    sunday: "Sunday: Closed",
    short: "Mon-Sat: 12-7 PM",
    emergency:
      "For emergencies, call immediately or visit the nearest emergency facility.",
    display: [
      { days: "Monday to Saturday", hours: "12:00 PM to 7:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },
  social: {
    whatsapp: "https://wa.me/917057469651",
  },
  ctaMessages: {
    appointment:
      "Hello, I would like to book an appointment at Sukhkarta Hospital.",
    orthopaedics:
      "Hello, I would like to book an appointment with Dr. Gunjan R. Dhundele.",
    cardiology:
      "Hello, I would like to book an appointment with Dr. Tanu Dhundele (Cardiologist).",
  },
  founded: "2018",
  specialities: ["Orthopaedics", "Cardiology"],
  emergencyNote:
    "For medical emergencies, please call immediately or go to the nearest emergency facility. This website is for informational and appointment enquiry purposes only.",
  legalDisclaimer:
    "This website is for informational and appointment enquiry purposes only and does not provide emergency treatment advice or guaranteed outcomes.",
} as const;

export type Hospital = typeof HOSPITAL;
