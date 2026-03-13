import Link from "next/link";
import { Award, GraduationCap, Microscope } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "MBBS · MS (ENT)" },
  { icon: Award, text: "Allergy Specialist (Certified)" },
  { icon: Microscope, text: "Fellowship — Skull Base Surgery" },
];

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#1a2a45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 items-center">

          {/* Image placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-full max-w-xs sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-[#0f1a2e] to-[#1a2a45] flex flex-col items-center justify-center shadow-xl py-12 sm:py-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1a2a45]/20 flex items-center justify-center mb-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white">S</span>
              </div>
              <span className="text-white font-medium text-center px-4 text-sm leading-snug">
                Dr. Surabhi Nikam Mirajkar
              </span>
              <span className="text-[#C9A96E] text-xs mt-1">ENT &amp; Allergy Specialist</span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 right-4 sm:-right-6 bg-[#C9A96E] text-white rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg text-center">
              <div className="font-bold text-lg sm:text-xl">5+</div>
              <div className="text-xs">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 lg:mt-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              About Dr. Surabhi
            </p>
            <div className="section-divider" />
            <h2 className="font-serif text-2xl sm:text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4 sm:mb-6">
              Where Expertise Meets Empathy
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-4">
              Welcome to the practice of Dr. Surabhi Nikam Mirajkar, a dedicated and compassionate
              ENT specialist committed to delivering ethical, patient-centered care. With
              qualifications including MBBS, MS (ENT), certification as an Allergy Specialist, and a
              Fellowship in Skull Base Surgery, Dr. Surabhi brings advanced expertise combined with a
              deeply human touch to every consultation.
            </p>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6 sm:mb-8">
              Having trained at some of the city&apos;s most premium institutes and worked alongside
              top-notch, world-renowned surgeons, she believes that learning from the best translates
              into offering the best care.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
              {credentials.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0f1a2e] border border-[#243355]"
                >
                  <Icon size={18} className="text-[#C9A96E] shrink-0" />
                  <span className="text-sm font-medium text-[#FAFAFA]">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#C9A96E] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
            >
              Read Full Bio
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
