import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ear Conditions & Hearing Treatment Mumbai | Dr. Surabhi Nikam Mirajkar",
  description:
    "Expert diagnosis and treatment of ear conditions — hearing loss, ear infections, tinnitus, vertigo, eardrum perforation — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/ear" },
};

const conditions = [
  {
    name: "Hearing Loss",
    description:
      "Hearing loss can be conductive, sensorineural, or mixed. Early evaluation and audiometry testing is key to determining the right treatment path.",
    symptoms: ["Difficulty hearing conversations", "Asking others to repeat themselves", "Muffled sounds", "Ringing in the ears"],
    treatment: "Audiometry tests, hearing aids, medical management, or surgical options like myringoplasty depending on the cause.",
  },
  {
    name: "Ear Infections (Otitis Media & Externa)",
    description:
      "Ear infections are among the most common ENT presentations. Both middle ear (otitis media) and outer ear (swimmer's ear / otitis externa) are treated.",
    symptoms: ["Ear pain", "Discharge from ear", "Reduced hearing", "Fever (in children)", "Fullness in ear"],
    treatment: "Antibiotic ear drops, oral antibiotics, myringotomy for fluid drainage, and pain management.",
  },
  {
    name: "Tinnitus (Ringing in Ears)",
    description:
      "Tinnitus is the perception of sound (ringing, buzzing, hissing) without an external source. Can be caused by noise exposure, wax buildup, or hearing loss.",
    symptoms: ["Ringing, buzzing or hissing sounds", "Affects one or both ears", "Worse in quiet environments", "Associated hearing loss"],
    treatment: "Identifying and treating the underlying cause, sound therapy, tinnitus retraining therapy (TRT), and medical management.",
  },
  {
    name: "Vertigo & Balance Disorders",
    description:
      "Vertigo presents as a sensation of spinning and is often caused by inner ear conditions like BPPV, labyrinthitis, or Meniere's disease.",
    symptoms: ["Spinning sensation", "Nausea and vomiting", "Balance problems", "Involuntary eye movements (nystagmus)"],
    treatment: "Epley maneuver for BPPV, vestibular rehabilitation therapy, medications, and in rare cases surgery.",
  },
  {
    name: "Eardrum Perforation",
    description:
      "A hole or tear in the eardrum (tympanic membrane) caused by infection, trauma, or pressure changes. Can affect hearing and increase risk of infections.",
    symptoms: ["Sudden sharp ear pain", "Hearing loss", "Ear discharge", "Ringing in the ear"],
    treatment: "Many heal on their own. Persistent perforations may require myringoplasty (surgical repair).",
  },
  {
    name: "Earwax Impaction",
    description:
      "Excess earwax buildup can cause hearing loss, pain, and tinnitus. Safe removal by an ENT is the recommended approach — avoid cotton buds.",
    symptoms: ["Blocked sensation in ear", "Reduced hearing", "Earache", "Dizziness"],
    treatment: "Ear syringing, microsuction, or manual removal under direct vision — safe and effective.",
  },
];

const faqs = [
  {
    q: "How do I know if I need to see an ENT for my ear problem?",
    a: "If you have persistent ear pain, sudden hearing loss, discharge from the ear, ringing in the ears that doesn't go away, or balance problems, you should consult an ENT specialist promptly.",
  },
  {
    q: "Is it safe to use cotton buds to clean ears?",
    a: "No. Cotton buds push wax deeper and can cause impaction or injury to the eardrum. The ear is self-cleaning — if you feel blocked, consult an ENT for safe removal.",
  },
  {
    q: "Can hearing loss be treated?",
    a: "It depends on the type and cause. Conductive hearing loss due to wax or infections is often treatable. Sensorineural loss may require hearing aids. Early evaluation gives the best outcomes.",
  },
  {
    q: "What is BPPV and how is it treated?",
    a: "BPPV (Benign Paroxysmal Positional Vertigo) is caused by small crystals dislodging in the inner ear. It is treated with the Epley maneuver — a series of head movements performed by your ENT.",
  },
];

export default function EarPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#C9A96E] text-[#0f1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#C9A96E] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ear &amp; Hearing</span>
          </nav>
          <div className="text-6xl mb-4" aria-hidden="true">👂</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Ear &amp; Hearing
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Comprehensive diagnosis and treatment of ear conditions. From common infections to
            hearing loss, vertigo, and eardrum repair — expert care by Dr. Surabhi Nikam Mirajkar.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Ear Conditions We Treat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <article
                key={c.name}
                className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm p-6 card-hover"
              >
                <h3 className="font-serif text-xl font-bold text-[#FAFAFA] mb-2">{c.name}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{c.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
                    Common Symptoms
                  </p>
                  <ul className="space-y-1">
                    {c.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-[#FAFAFA]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0f1a2e] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#0f1a2e] rounded-lg p-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0f1a2e] mb-1">
                    Treatment Approach
                  </p>
                  <p className="text-sm text-[#FAFAFA]">{c.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#1a2a45]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-[#1a2a45] border border-[#243355] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-[#FAFAFA] hover:text-[#C9A96E] list-none">
                  {faq.q}
                  <span className="ml-4 text-[#0f1a2e] text-xl leading-none group-open:rotate-45 transition-transform inline-block">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#94a3b8] leading-relaxed border-t border-[#243355] pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C9A96E] text-[#0f1a2e] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-3">Have an Ear Concern?</h2>
          <p className="text-[#94a3b8] mb-6">
            Book a consultation with Dr. Surabhi for an expert evaluation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-[#C9A96E] text-white font-semibold hover:bg-[#D4B483] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
