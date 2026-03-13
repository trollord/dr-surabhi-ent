import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Award, Microscope, Heart, ShieldCheck, Stethoscope, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dr. Surabhi Nikam Mirajkar | ENT & Allergy Specialist Mumbai",
  description:
    "Learn about Dr. Surabhi Nikam Mirajkar — her qualifications (MBBS, MS ENT, Allergy Specialist, Fellowship in Skull Base Surgery), training, philosophy, and commitment to ethical ENT care in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/about" },
};

const qualifications = [
  {
    year: "Step 1",
    degree: "MBBS",
    detail: "Bachelor of Medicine & Bachelor of Surgery — Foundation in clinical medicine",
    icon: GraduationCap,
  },
  {
    year: "Step 2",
    degree: "MS (ENT)",
    detail: "Master of Surgery in Ear, Nose & Throat — Postgraduate surgical specialization",
    icon: Stethoscope,
  },
  {
    year: "Step 3",
    degree: "Allergy Specialist Certification",
    detail: "Certified training in allergy testing, diagnosis, and immunotherapy (SCIT & SLIT)",
    icon: FlaskConical,
  },
  {
    year: "Step 4",
    degree: "Fellowship — Skull Base Surgery",
    detail:
      "Advanced fellowship in endoscopic skull base surgery, sinonasal tumours & pituitary procedures",
    icon: Microscope,
  },
];

const philosophy = [
  {
    icon: ShieldCheck,
    title: "Ethical Transparency",
    desc: "No unnecessary procedures, no referral incentives, no cut practice. Every recommendation is in the patient's best interest.",
  },
  {
    icon: Heart,
    title: "Empathy-Led Care",
    desc: "She takes time to listen, explain, and guide — ensuring every patient feels heard and confident.",
  },
  {
    icon: Stethoscope,
    title: "Evidence-Based Medicine",
    desc: "Treatments grounded in current clinical evidence, not trends. Accurate diagnosis before any intervention.",
  },
  {
    icon: Microscope,
    title: "Minimally Invasive First",
    desc: "Wherever possible, she prefers the least invasive approach for faster recovery and minimal discomfort.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">
            Meet the Doctor
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            About Dr. Surabhi Nikam Mirajkar
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            MBBS &middot; MS (ENT) &middot; Allergy Specialist &middot; Fellowship in Skull Base
            Surgery
          </p>
        </div>
      </section>

      {/* Bio + Image */}
      <section className="py-20 bg-[#1a2a45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-start">
            {/* Image placeholder + credentials */}
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-xs sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#0f1a2e] to-[#1a2a45] flex flex-col items-center justify-center shadow-xl py-10 sm:py-0">
                <div className="w-28 h-28 rounded-full bg-[#1a2a45]/20 flex items-center justify-center mb-4">
                  <span className="font-serif text-5xl font-bold text-white">S</span>
                </div>
                <span className="text-white font-medium text-center px-4 text-sm leading-snug">
                  Dr. Surabhi Nikam Mirajkar
                </span>
                <span className="text-[#C9A96E] text-xs mt-1">ENT &amp; Allergy Specialist, Mumbai</span>
              </div>

              <div className="w-full max-w-sm space-y-3">
                {[
                  { icon: GraduationCap, text: "MBBS" },
                  { icon: Stethoscope, text: "MS (ENT)" },
                  { icon: Award, text: "Certified Allergy Specialist" },
                  { icon: Microscope, text: "Fellowship — Skull Base Surgery" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0f1a2e] border border-[#243355]"
                  >
                    <Icon size={18} className="text-[#C9A96E] shrink-0" />
                    <span className="text-sm font-medium text-[#FAFAFA]">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full intro text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
                Her Story
              </p>
              <div className="section-divider" />
              <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-6">
                Where Expertise Meets Empathy
              </h2>

              <div className="space-y-5 text-[#94a3b8] leading-relaxed">
                <p>
                  Welcome to the practice of Dr. Surabhi Nikam Mirajkar, a dedicated and compassionate
                  ENT specialist committed to delivering ethical, patient-centered care. With
                  qualifications including MBBS, MS (ENT), certification as an Allergy Specialist, and a
                  Fellowship in Skull Base Surgery, Dr. Surabhi brings advanced expertise combined with a
                  deeply human touch to every consultation.
                </p>
                <p>
                  Having trained at some of the city&apos;s most premium institutes and worked alongside
                  top-notch, world-renowned surgeons, she believes that learning from the best translates
                  into offering the best care. Her approach blends clinical excellence with the latest
                  technology to ensure accurate diagnosis, minimally invasive treatments, and faster
                  recovery.
                </p>
                <p>
                  Dr. Surabhi is known for being approachable and empathetic. She takes time to listen,
                  explain, and guide patients through their concerns, ensuring they feel heard and
                  confident about their treatment decisions. She firmly believes that healthcare is about
                  improving quality of life — not just treating symptoms.
                </p>
                <p>
                  Rooted in strong ethical values, she practices with integrity and transparency, and
                  does not believe in unnecessary procedures or &ldquo;cut practice.&rdquo; Her goal is
                  simple yet powerful: to provide high-quality, evidence-based ENT and allergy care that
                  prioritizes your well-being, comfort, and long-term health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Timeline */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Academic Journey
            </p>
            <div className="section-divider mx-auto" />
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Qualifications &amp; Training
            </h2>
          </div>

          <div className="relative pl-5 sm:pl-8 border-l-2 border-[#243355] space-y-6 sm:space-y-8">
            {qualifications.map(({ year, degree, detail, icon: Icon }) => (
              <div key={degree} className="relative">
                <div className="absolute -left-[2.35rem] w-9 h-9 rounded-full bg-[#0f1a2e] flex items-center justify-center">
                  <Icon size={16} className="text-white" />
                </div>
                <div className="bg-[#1a2a45] rounded-xl border border-[#243355] shadow-sm p-5">
                  <span className="inline-block text-xs font-bold text-[#C9A96E] uppercase tracking-widest mb-1">
                    {year}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#FAFAFA] mb-1">{degree}</h3>
                  <p className="text-sm text-[#94a3b8]">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-[#1a2a45]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Guiding Values
            </p>
            <div className="section-divider mx-auto" />
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">Her Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {philosophy.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm card-hover p-4 sm:p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0f1a2e] flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[#C9A96E]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#FAFAFA] mb-2">{title}</h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f1a2e] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-4">
            Ready to Experience Ethical ENT Care?
          </h2>
          <p className="text-[#94a3b8] mb-8">
            Book a consultation with Dr. Surabhi and take the first step toward better health.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#C9A96E] text-white font-semibold hover:bg-[#D4B483] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
