import Link from "next/link";

const conditions = [
  {
    emoji: "👂",
    title: "Ear & Hearing",
    href: "/conditions/ear",
    description:
      "Comprehensive diagnosis and treatment of ear conditions affecting hearing, balance, and comfort.",
    bullets: [
      "Hearing Loss & Hearing Tests",
      "Ear Infections (Otitis Media/Externa)",
      "Tinnitus (Ringing in Ears)",
      "Vertigo & Balance Disorders",
    ],
  },
  {
    emoji: "👃",
    title: "Nose & Sinuses",
    href: "/conditions/nose-sinus",
    description:
      "Expert management of nasal and sinus conditions using minimally invasive techniques including FESS.",
    bullets: [
      "Sinusitis (Acute & Chronic)",
      "Nasal Polyps & Deviated Septum",
      "FESS (Functional Endoscopic Sinus Surgery)",
      "Nosebleeds (Epistaxis)",
    ],
  },
  {
    emoji: "🗣️",
    title: "Throat & Voice",
    href: "/conditions/throat-voice",
    description:
      "Evaluation and treatment of throat, voice, and upper airway conditions for all age groups.",
    bullets: [
      "Tonsillitis & Adenoid Issues",
      "Voice Disorders & Hoarseness",
      "Snoring & Sleep Apnea",
      "Throat Infections & Difficulty Swallowing",
    ],
  },
  {
    emoji: "🌿",
    title: "Allergy & Immunotherapy",
    href: "/conditions/allergy",
    description:
      "Certified allergy specialist offering comprehensive allergy testing and long-term immunotherapy solutions.",
    bullets: [
      "Allergic Rhinitis (Hay Fever)",
      "Dust, Pollen & Food Allergies",
      "Skin Prick & Allergy Testing",
      "SCIT / SLIT Immunotherapy",
    ],
  },
  {
    emoji: "🧠",
    title: "Skull Base Surgery",
    href: "/conditions/skull-base-surgery",
    description:
      "Fellowship-trained in endoscopic skull base surgery for complex sinonasal and intracranial tumours.",
    bullets: [
      "Pituitary Tumours (Endoscopic)",
      "Sinonasal & Skull Base Tumours",
      "CSF Leak Repair",
      "Choanal Atresia",
    ],
  },
];

export default function ConditionsGrid() {
  return (
    <section className="py-20 bg-[#f8fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] mb-2">
            Areas of Expertise
          </p>
          <div className="section-divider mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            Conditions We Treat
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            From common ear infections to complex skull base surgeries, Dr. Surabhi offers
            comprehensive ENT care with a minimally invasive, patient-first approach.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <article
              key={condition.href}
              className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm card-hover flex flex-col p-6"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{condition.emoji}</div>
              <h3 className="font-serif text-xl font-bold text-[#1e293b] mb-2">
                {condition.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                {condition.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1">
                {condition.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1e293b]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0c9b85] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={condition.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#0c4a6e] hover:gap-2 transition-all"
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}

          {/* CTA card */}
          <div className="bg-[#0c4a6e] rounded-xl shadow-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">🏥</div>
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Not Sure Where to Start?
            </h3>
            <p className="text-sm text-[#bae6fd] mb-5">
              Book a general consultation and Dr. Surabhi will guide you through the right
              diagnosis and treatment plan.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0c9b85] text-white text-sm font-semibold hover:bg-[#14b8a6] transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
