import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBadges from "@/components/sections/TrustBadges";
import DoctorsOverview from "@/components/sections/DoctorsOverview";
import OrthoSection from "@/components/sections/OrthoSection";
import CardiacSection from "@/components/sections/CardiacSection";
import TMTHighlight from "@/components/sections/TMTHighlight";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AppointmentProcess from "@/components/sections/AppointmentProcess";
import LocationTimings from "@/components/sections/LocationTimings";
import FAQSection from "@/components/sections/FAQSection";
import SchemaScript from "@/components/ui/SchemaScript";
import { faqSchema } from "@/lib/schema";
import { FAQS } from "@/data/faqs";
import { PAGE_SEO, SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={faqSchema(FAQS as unknown as Array<{ question: string; answer: string }>)} />
      <HeroSection />
      <TrustBadges />
      <DoctorsOverview />
      <OrthoSection />
      <CardiacSection />
      <TMTHighlight />
      <FacilitiesSection />
      <WhyChooseUs />
      <AppointmentProcess />
      <LocationTimings />
      <FAQSection />
    </>
  );
}
