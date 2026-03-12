import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Dr. Surabhi Nikam Mirajkar | ENT Specialist & Allergy Doctor Mumbai",
  description:
    "Dr. Surabhi Nikam Mirajkar — MBBS, MS (ENT), Certified Allergy Specialist, Fellowship in Skull Base Surgery. Expert, ethical, patient-centered ENT and allergy care in Mumbai. Book a consultation today.",
  alternates: { canonical: "https://drsurabhinikam.com" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero has its own pt-24 for fixed navbar clearance */}
      <Hero />
      <AboutPreview />
      <ConditionsGrid />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}
