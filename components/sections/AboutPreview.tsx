import Link from "next/link";
import { Award, GraduationCap, Microscope } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "MBBS · MS (ENT)" },
  { icon: Award, text: "Allergy Specialist (Certified)" },
  { icon: Microscope, text: "Fellowship — Skull Base Surgery" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Image placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-gradient-to-br from-[#0c4a6e] to-[#0369a1] flex flex-col items-center justify-center shadow-xl">
              <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <span className="font-serif text-5xl font-bold text-white">S</span>
              </div>
              <span className="text-white font-medium text-center px-4 text-sm leading-snug">
                Dr. Surabhi Nikam Mirajkar
              </span>
              <span className="text-[#7dd3fc] text-xs mt-1">ENT &amp; Allergy Specialist</span>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#0c9b85] text-white rounded-xl px-4 py-3 shadow-lg text-center">
              <div className="font-bold text-xl">5+</div>
              <div className="text-xs">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] mb-2">
              About Dr. Surabhi
            </p>
            <div className="section-divider" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e293b] mb-6">
              Where Expertise Meets Empathy
            </h2>

            <p className="text-[#64748b] leading-relaxed mb-4">
              Welcome to the practice of Dr. Surabhi Nikam Mirajkar, a dedicated and compassionate
              ENT specialist committed to delivering ethical, patient-centered care. With
              qualifications including MBBS, MS (ENT), certification as an Allergy Specialist, and a
              Fellowship in Skull Base Surgery, Dr. Surabhi brings advanced expertise combined with a
              deeply human touch to every consultation.
            </p>

            <p className="text-[#64748b] leading-relaxed mb-8">
              Having trained at some of the city&apos;s most premium institutes and worked alongside
              top-notch, world-renowned surgeons, she believes that learning from the best translates
              into offering the best care. Her approach blends clinical excellence with the latest
              technology to ensure accurate diagnosis, minimally invasive treatments, and faster
              recovery.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-3 mb-8">
              {credentials.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#f0f7ff] border border-[#e2e8f0]"
                >
                  <Icon size={18} className="text-[#0c4a6e] shrink-0" />
                  <span className="text-sm font-medium text-[#1e293b]">{text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#0c4a6e] font-semibold hover:gap-3 transition-all"
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
