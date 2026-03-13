import type { Metadata } from "next";
import Link from "next/link";
import { Ear, Wind, Mic, Leaf, Brain, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "ENT Conditions & Treatments Mumbai | Dr. Surabhi Nikam Mirajkar",
  description:
    "Explore the full range of ENT, allergy, and skull base conditions treated by Dr. Surabhi Nikam Mirajkar in Mumbai. Expert, ethical, minimally invasive care.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions" },
};

const conditions = [
  {
    icon: Ear,
    title: "Ear & Hearing",
    href: "/conditions/ear",
    description:
      "Hearing loss, ear infections, tinnitus, vertigo, eardrum perforations, and earwax issues.",
  },
  {
    icon: Wind,
    title: "Nose & Sinuses",
    href: "/conditions/nose-sinus",
    description:
      "Sinusitis, deviated septum, nasal polyps, allergic rhinitis, nosebleeds, and FESS surgery.",
  },
  {
    icon: Mic,
    title: "Throat & Voice",
    href: "/conditions/throat-voice",
    description:
      "Tonsillitis, voice disorders, hoarseness, snoring, sleep apnea, and swallowing difficulty.",
  },
  {
    icon: Leaf,
    title: "Allergy & Immunotherapy",
    href: "/conditions/allergy",
    description:
      "Allergic rhinitis, dust/pollen/food allergies, skin prick testing, and immunotherapy (SCIT/SLIT).",
  },
  {
    icon: Brain,
    title: "Skull Base Surgery",
    href: "/conditions/skull-base-surgery",
    description:
      "Endoscopic skull base surgery, pituitary tumours, sinonasal tumours, CSF leak repair, and choanal atresia.",
  },
];

export default function ConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">
            Areas of Expertise
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Conditions We Treat
          </h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Comprehensive ENT, allergy, and skull base care — from common infections to complex
            surgical procedures, all under one roof.
          </p>
        </div>
      </section>

      {/* Conditions grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group bg-[#1a2a45] border border-[#243355] hover:border-[#C9A96E]/40 rounded-2xl p-8 card-hover block transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-5">
                  <c.icon size={26} className="text-[#C9A96E]" />
                </div>
                <h2 className="font-serif text-xl font-bold text-[#FAFAFA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                  {c.title}
                </h2>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{c.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#C9A96E] group-hover:gap-2 transition-all">
                  Explore &rarr;
                </span>
              </Link>
            ))}

            {/* CTA card */}
            <div className="bg-[#0f1a2e] border border-[#243355] rounded-2xl p-8 flex flex-col justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center mb-5 mx-auto">
                <Stethoscope size={26} className="text-[#C9A96E]" />
              </div>
              <h2 className="font-serif text-xl font-bold text-white mb-2">
                Not Sure What You Have?
              </h2>
              <p className="text-sm text-[#94a3b8] mb-5">
                Book a consultation and Dr. Surabhi will guide you through the right diagnosis.
              </p>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-full bg-[#C9A96E] text-white text-sm font-semibold hover:bg-[#D4B483] transition-colors mx-auto"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
