import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Ear } from "lucide-react";

export const metadata: Metadata = {
  title: "Ear Conditions, Hearing Loss & Ear Surgery Mumbai | Dr. Surabhi Nikam Mirajkar",
  description:
    "Expert diagnosis and treatment of ear conditions — hearing loss, sensorineural hearing loss, ear infections, tinnitus, vertigo, eardrum perforation, and ear surgeries — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/ear" },
};

const conditions = [
  {
    name: "Hearing Loss",
    image: "/images/conditions/ear/hearing-loss.webp",
    description:
      "Hearing loss can be conductive, sensorineural, or mixed. Early evaluation and audiometry testing is key to determining the right treatment path.",
    symptoms: ["Difficulty hearing conversations", "Asking others to repeat themselves", "Muffled sounds", "Ringing in the ears"],
    treatment: "Audiometry tests, hearing aids, medical management, or surgical options like myringoplasty depending on the cause.",
  },
  {
    name: "Ear Infections (Otitis Media & Externa)",
    image: "/images/conditions/ear/ear-infection.webp",
    description:
      "Ear infections are among the most common ENT presentations. Both middle ear (otitis media) and outer ear (swimmer's ear / otitis externa) are treated.",
    symptoms: ["Ear pain", "Discharge from ear", "Reduced hearing", "Fever (in children)", "Fullness in ear"],
    treatment: "Antibiotic ear drops, oral antibiotics, myringotomy for fluid drainage, and pain management.",
  },
  {
    name: "Tinnitus (Ringing in Ears)",
    image: "/images/conditions/ear/tinnitus.webp",
    description:
      "Tinnitus is the perception of sound (ringing, buzzing, hissing) without an external source. Can be caused by noise exposure, wax buildup, or hearing loss.",
    symptoms: ["Ringing, buzzing or hissing sounds", "Affects one or both ears", "Worse in quiet environments", "Associated hearing loss"],
    treatment: "Identifying and treating the underlying cause, sound therapy, tinnitus retraining therapy (TRT), and medical management.",
  },
  {
    name: "Vertigo & Balance Disorders",
    image: "/images/conditions/ear/vertigo.webp",
    description:
      "Vertigo presents as a sensation of spinning and is often caused by inner ear conditions like BPPV, labyrinthitis, or Meniere's disease.",
    symptoms: ["Spinning sensation", "Nausea and vomiting", "Balance problems", "Involuntary eye movements (nystagmus)"],
    treatment: "Epley maneuver for BPPV, vestibular rehabilitation therapy, medications, and in rare cases surgery.",
  },
  {
    name: "Eardrum Perforation",
    image: "/images/conditions/ear/eardrum-perforation.webp",
    description:
      "A hole or tear in the eardrum (tympanic membrane) caused by infection, trauma, or pressure changes. Can affect hearing and increase risk of infections.",
    symptoms: ["Sudden sharp ear pain", "Hearing loss", "Ear discharge", "Ringing in the ear"],
    treatment: "Many heal on their own. Persistent perforations may require myringoplasty (surgical repair).",
  },
  {
    name: "Earwax Impaction",
    image: "/images/conditions/ear/earwax.webp",
    description:
      "Excess earwax buildup can cause hearing loss, pain, and tinnitus. Safe removal by an ENT is the recommended approach — avoid cotton buds.",
    symptoms: ["Blocked sensation in ear", "Reduced hearing", "Earache", "Dizziness"],
    treatment: "Ear syringing, microsuction, or manual removal under direct vision — safe and effective.",
  },
];

const earSurgeries = [
  {
    name: "Myringotomy & Tympanostomy Tube Insertion",
    image: "/images/conditions/ear/myringotomy.webp",
    description:
      "Myringotomy is a surgical procedure involving a small incision in the eardrum to relieve pressure from excessive fluid buildup, typically resulting from chronic otitis media. Tympanostomy tubes (grommets) are often inserted to allow air circulation in the middle ear, particularly in children with recurrent ear infections.",
    details: [
      "Performed under general anaesthesia",
      "Procedure takes approximately 15 minutes",
      "Tubes typically fall out naturally within 6–18 months",
      "Commonly recommended for children with recurrent ear infections",
    ],
  },
  {
    name: "Tympanoplasty",
    image: "/images/conditions/ear/tympanoplasty.webp",
    description:
      "Tympanoplasty is performed to repair a perforated eardrum or address middle ear issues. The surgeon makes an incision in the ear canal, lifts the ear canal skin, and grafts tissue onto the perforation to create a seal that promotes healing and prevents recurrent infections.",
    details: [
      "Effectively restores hearing after eardrum perforation",
      "Prevents recurrent infections from entering the middle ear",
      "Tissue graft sourced from the patient's own body",
      "Day procedure or short hospital stay",
    ],
  },
  {
    name: "Mastoidectomy",
    image: "/images/conditions/ear/mastoidectomy.webp",
    description:
      "Mastoidectomy involves the surgical removal of infected or diseased cells from the mastoid bone located behind the ear. This procedure prevents infection from spreading to the skull and is typically performed for chronic mastoid infections that do not respond to conservative treatment.",
    details: [
      "Performed under general anaesthesia",
      "Prevents spread of infection to surrounding structures",
      "May be combined with tympanoplasty (combined approach)",
      "Surgical extent tailored to the degree of disease",
    ],
  },
  {
    name: "Stapedectomy",
    image: "/images/conditions/ear/stapedectomy.webp",
    description:
      "Stapedectomy treats otosclerosis — a condition where abnormal bone growth prevents the stapes (a tiny bone in the middle ear) from transmitting sound to the inner ear. The procedure involves removing and replacing the stapes with a prosthetic device to restore sound transmission and improve hearing.",
    details: [
      "Highly effective for conductive hearing loss due to otosclerosis",
      "Prosthetic stapes restores normal sound conduction",
      "Significant improvement in hearing outcomes",
      "Performed under local or general anaesthesia",
    ],
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
    a: "It depends on the type and cause. Conductive hearing loss due to wax or infections is often treatable. Sensorineural loss may require hearing aids or cochlear implants. Early evaluation gives the best outcomes.",
  },
  {
    q: "What is BPPV and how is it treated?",
    a: "BPPV (Benign Paroxysmal Positional Vertigo) is caused by small crystals dislodging in the inner ear. It is treated with the Epley maneuver — a series of head movements performed by your ENT.",
  },
  {
    q: "What are tympanostomy tubes and when are they needed?",
    a: "Tympanostomy tubes (grommets) are tiny ventilation tubes inserted into the eardrum to allow air into the middle ear and drain fluid. They are recommended for children with recurrent ear infections or persistent fluid affecting hearing.",
  },
  {
    q: "Can stapedectomy fully restore hearing?",
    a: "In most cases, stapedectomy significantly improves hearing in patients with otosclerosis. Many patients experience near-normal hearing after the procedure. Results vary depending on the severity and individual anatomy.",
  },
];

export default function EarPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#C9A96E] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ear &amp; Hearing</span>
          </nav>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Ear &amp; Hearing
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Comprehensive diagnosis and treatment of ear conditions. From common infections to
            hearing loss, vertigo, and advanced ear surgeries — expert care by Dr. Surabhi Nikam Mirajkar.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Ear Conditions We Treat
            </h2>
          </div>
          <div className="space-y-8">
            {conditions.map((c, idx) => (
              <article
                key={c.name}
                className="bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden card-hover"
              >
                <div className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="md:w-1/2 p-7 md:p-9">
                    <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">{c.name}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{c.description}</p>
                    <div className="mb-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
                        Common Symptoms
                      </p>
                      <ul className="space-y-1.5">
                        {c.symptoms.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-[#FAFAFA]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[#0f1a2e] rounded-lg p-4 border border-[#243355]">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-1">
                        Treatment Approach
                      </p>
                      <p className="text-sm text-[#FAFAFA] leading-relaxed">{c.treatment}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[260px] md:min-h-[420px]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sensorineural Hearing Loss */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              In Depth
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-4">
              Sensorineural Hearing Loss
            </h2>
            <p className="text-[#94a3b8] max-w-3xl mx-auto">
              Sensorineural hearing loss (SNHL) occurs when the delicate hair cells in the inner ear or the
              auditory nerve pathways become damaged, preventing sound signals from properly reaching the brain.
              Unlike conductive hearing loss, SNHL is typically permanent and cannot be reversed through
              medication or surgery alone.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            <div className="bg-[#1a2a45] border border-[#243355] rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-[#C9A96E] mb-3">Understanding Presbyacusis</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                Presbyacusis, or age-related hearing loss, is the most common type of sensorineural hearing loss
                affecting adults. This gradual condition typically begins after age 60 and affects both ears equally,
                making it difficult to hear high-pitched sounds and understand conversations — especially in noisy
                environments. Presbyacusis develops due to natural changes in the inner ear structures, reduced blood
                flow, and cumulative lifetime noise exposure.
              </p>
            </div>

            <div className="bg-[#1a2a45] border border-[#243355] rounded-xl p-6">
              <h3 className="font-serif text-xl font-bold text-[#C9A96E] mb-3">Hearing Solutions Available</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                Modern hearing solutions offer significant improvements in quality of life. Options are tailored
                to the degree and type of hearing loss.
              </p>
              <ul className="space-y-2">
                {[
                  "Hearing aids — digital technology to amplify speech and reduce background noise",
                  "Cochlear implants — for severe to profound hearing loss, bypassing damaged hair cells",
                  "Tinnitus management — sound therapy and retraining for associated ringing",
                  "Comprehensive audiological evaluation to choose the right solution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#FAFAFA]">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#1a2a45] border border-[#C9A96E]/30 rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-[#FAFAFA] font-medium mb-2">Early Intervention Is Crucial</p>
            <p className="text-sm text-[#94a3b8] mb-5">
              If you&apos;re experiencing difficulty hearing conversations, frequently asking people to repeat
              themselves, or turning up the television volume — schedule a comprehensive hearing evaluation.
              Our team can assess your hearing loss and recommend personalised solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#C9A96E] text-white text-sm font-semibold hover:bg-[#D4B483] transition-colors"
            >
              Book a Hearing Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* Ear Surgery Procedures */}
      <section className="py-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Surgical Interventions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-4">
              Ear Surgery Procedures
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Advanced otologic procedures for hearing restoration and ear health. Each intervention is
              tailored to the patient&apos;s specific condition, age, and overall health status.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#C9A96E] bg-[#C9A96E]/10 border border-[#C9A96E]/20 px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Most surgeries are day care procedures — go home the same day
            </p>
          </div>

          <div className="space-y-8">
            {earSurgeries.map((surgery, idx) => (
              <article
                key={surgery.name}
                className="bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden hover:border-[#C9A96E]/40 transition-colors"
              >
                <div className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="md:w-1/2 p-7 md:p-9">
                    <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">{surgery.name}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{surgery.description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
                        Key Details
                      </p>
                      <ul className="space-y-1.5">
                        {surgery.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#FAFAFA]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative min-h-[260px] md:min-h-[420px]">
                    <Image
                      src={surgery.image}
                      alt={surgery.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-sm text-[#94a3b8] mt-10 max-w-2xl mx-auto">
            Most ear surgeries are outpatient procedures, allowing patients to return home the same day.
            Proper post-operative care is essential for optimal recovery.
          </p>
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
                className="group bg-[#0f1a2e] border border-[#243355] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-[#FAFAFA] hover:text-[#C9A96E] list-none">
                  {faq.q}
                  <span className="ml-4 text-[#C9A96E] text-xl leading-none group-open:rotate-45 transition-transform inline-block">
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
      <section className="py-16 bg-[#0f1a2e] text-center">
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
