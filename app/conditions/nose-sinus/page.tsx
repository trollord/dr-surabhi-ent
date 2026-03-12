import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sinusitis, Nasal Polyps & FESS Surgery Mumbai | Dr. Surabhi Nikam Mirajkar",
  description:
    "Expert treatment of nasal and sinus conditions — chronic sinusitis, deviated septum, nasal polyps, FESS surgery — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/nose-sinus" },
};

const conditions = [
  {
    name: "Sinusitis (Acute & Chronic)",
    description:
      "Inflammation of the sinuses causing pain, pressure, and congestion. Acute sinusitis lasts up to 4 weeks; chronic sinusitis persists beyond 12 weeks.",
    symptoms: ["Facial pain and pressure", "Nasal congestion", "Thick nasal discharge", "Reduced sense of smell", "Headache"],
    treatment: "Nasal saline rinses, decongestants, antibiotics for bacterial cases, nasal corticosteroids. Chronic or recurrent cases may require FESS.",
  },
  {
    name: "Deviated Nasal Septum",
    description:
      "A displacement of the cartilage and bone dividing the nostrils, causing one-sided blockage. Very common and often caused by trauma or congenital factors.",
    symptoms: ["One-sided nasal blockage", "Mouth breathing", "Snoring", "Recurrent nosebleeds", "Facial pain"],
    treatment: "Septoplasty — a minimally invasive surgical correction that straightens the septum for improved airflow.",
  },
  {
    name: "Nasal Polyps",
    description:
      "Soft, non-cancerous growths in the nasal lining or sinuses. Often associated with chronic inflammation, allergies, or asthma.",
    symptoms: ["Persistent nasal congestion", "Reduced or lost sense of smell", "Runny nose", "Postnasal drip", "Snoring"],
    treatment: "Nasal corticosteroid sprays, oral steroids, and surgical removal via endoscopic sinus surgery (FESS) if conservative treatment fails.",
  },
  {
    name: "Allergic Rhinitis",
    description:
      "Inflammation of the nasal lining triggered by allergens like dust, pollen, or pet dander. Dr. Surabhi, as a certified Allergy Specialist, offers comprehensive management.",
    symptoms: ["Sneezing", "Clear runny nose", "Nasal itching", "Watery eyes", "Post-nasal drip"],
    treatment: "Allergen avoidance, antihistamines, nasal steroids, and allergy immunotherapy (SCIT or SLIT) for long-term control.",
  },
  {
    name: "Nosebleeds (Epistaxis)",
    description:
      "Nosebleeds can be anterior (from the front) or posterior (from deeper vessels). Most are benign but recurrent cases need evaluation.",
    symptoms: ["Bleeding from one or both nostrils", "Blood dripping down the throat", "Associated with dryness or trauma"],
    treatment: "Nasal packing, cauterization, or treatment of underlying cause (hypertension, bleeding disorders, etc.).",
  },
  {
    name: "FESS — Functional Endoscopic Sinus Surgery",
    description:
      "A minimally invasive procedure using a nasal endoscope to open blocked sinus drainage pathways, remove polyps, and restore normal sinus function.",
    symptoms: ["Chronic sinusitis not responding to medication", "Nasal polyps", "Recurrent sinus infections"],
    treatment: "Performed under general anesthesia. Most patients go home the same day. Significant improvement in breathing and quality of life.",
  },
];

const faqs = [
  {
    q: "How long does recovery take after FESS surgery?",
    a: "Most patients return to normal activities within 1–2 weeks. There may be some nasal congestion and mild discomfort for the first few days. Follow-up nasal irrigation is important for healing.",
  },
  {
    q: "Can a deviated septum be corrected without surgery?",
    a: "Minor deviations can be managed with medications (decongestants, nasal steroids). However, significant deviations causing persistent blockage usually require septoplasty for lasting relief.",
  },
  {
    q: "Will nasal polyps come back after surgery?",
    a: "Polyps can recur, especially if the underlying trigger (allergy, asthma) is not managed. Post-surgery, nasal sprays and allergy treatment significantly reduce recurrence rates.",
  },
  {
    q: "Is FESS painful?",
    a: "FESS is performed under general anesthesia, so there is no pain during the procedure. Post-operative discomfort is usually mild and managed with pain medications.",
  },
];

export default function NoseSinusPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#7dd3fc] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nose &amp; Sinuses</span>
          </nav>
          <div className="text-6xl mb-4" aria-hidden="true">👃</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Nose &amp; Sinuses
          </h1>
          <p className="text-[#bae6fd] text-lg max-w-2xl">
            From chronic sinusitis and nasal polyps to deviated septum and FESS surgery — Dr.
            Surabhi offers expert, minimally invasive solutions to restore your breathing and
            quality of life.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#1e293b]">
              Nasal &amp; Sinus Conditions We Treat
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <article
                key={c.name}
                className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-6 card-hover"
              >
                <h3 className="font-serif text-xl font-bold text-[#1e293b] mb-2">{c.name}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{c.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0ea5e9] mb-2">
                    Common Symptoms
                  </p>
                  <ul className="space-y-1">
                    {c.symptoms.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-[#1e293b]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0c4a6e] shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f0f7ff] rounded-lg p-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0c4a6e] mb-1">
                    Treatment Approach
                  </p>
                  <p className="text-sm text-[#1e293b]">{c.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#1e293b]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-[#1e293b] hover:text-[#0c4a6e] list-none">
                  {faq.q}
                  <span className="ml-4 text-[#0c4a6e] text-xl leading-none group-open:rotate-45 transition-transform inline-block">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#64748b] leading-relaxed border-t border-[#e2e8f0] pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0c4a6e] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-3">
            Struggling with Sinus or Nasal Issues?
          </h2>
          <p className="text-[#bae6fd] mb-6">
            Let Dr. Surabhi evaluate and guide you toward lasting relief.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-[#0c9b85] text-white font-semibold hover:bg-[#14b8a6] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
