import { ShieldCheck, GraduationCap, Stethoscope, FlaskConical, Brain, Heart } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Ethical Practice",
    description:
      "No unnecessary procedures, no \"cut practice\", and complete transparency in every recommendation. Your health comes first, always.",
  },
  {
    icon: GraduationCap,
    title: "Advanced Training",
    description:
      "Trained at some of Mumbai's most premium institutes and worked alongside top-notch, world-renowned surgeons. Learning from the best, to offer the best.",
  },
  {
    icon: Stethoscope,
    title: "Minimally Invasive",
    description:
      "Utilizing the latest technology for accurate diagnosis and minimally invasive treatments, ensuring faster recovery and minimal discomfort.",
  },
  {
    icon: FlaskConical,
    title: "Allergy Expertise",
    description:
      "Certified Allergy Specialist offering comprehensive skin prick testing, patch testing, and evidence-based immunotherapy (SCIT & SLIT).",
  },
  {
    icon: Brain,
    title: "Skull Base Specialist",
    description:
      "Fellowship-trained for complex endoscopic skull base and sinonasal surgeries — including pituitary tumours, CSF leaks, and sinonasal tumours.",
  },
  {
    icon: Heart,
    title: "Patient-First Always",
    description:
      "She takes time to listen, explain, and guide every patient through their concerns, ensuring they feel heard and confident about their treatment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#1a2a45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
            Why Patients Choose Dr. Surabhi
          </p>
          <div className="section-divider mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
            Care You Can Trust
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">
            Dr. Surabhi&apos;s practice is built on strong ethical values, advanced clinical
            expertise, and a genuine commitment to every patient&apos;s well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0f1a2e] flex items-center justify-center mb-4 group-hover:bg-[#0f1a2e] transition-colors">
                <Icon
                  size={22}
                  className="text-[#C9A96E] group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FAFAFA] mb-2">{title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
