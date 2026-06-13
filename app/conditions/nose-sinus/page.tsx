import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "Sinusitis, Nasal Polyps & FESS Surgery Mumbai | Dr. Surabhi Nikam Mirajkar",
  description:
    "Expert treatment of nasal and sinus conditions — chronic sinusitis, deviated septum, nasal polyps, FESS surgery — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/nose-sinus" },
};

const conditions = [
  {
    name: "Sinusitis (Acute & Chronic)",
    image: "/images/conditions/nose/sinusitis.webp",
    description:
      "Inflammation of the sinuses causing pain, pressure, and congestion. Acute sinusitis lasts up to 4 weeks; chronic sinusitis persists beyond 12 weeks.",
    symptoms: ["Facial pain and pressure", "Nasal congestion", "Thick nasal discharge", "Reduced sense of smell", "Headache"],
    treatment: "Nasal saline rinses, decongestants, antibiotics for bacterial cases, nasal corticosteroids. Chronic or recurrent cases may require FESS.",
  },
  {
    name: "Deviated Nasal Septum",
    image: "/images/conditions/nose/deviated-septum.webp",
    description:
      "A displacement of the cartilage and bone dividing the nostrils, causing one-sided blockage. Very common and often caused by trauma or congenital factors.",
    symptoms: ["One-sided nasal blockage", "Mouth breathing", "Snoring", "Recurrent nosebleeds", "Facial pain"],
    treatment: "Septoplasty — a minimally invasive surgical correction that straightens the septum for improved airflow.",
  },
  {
    name: "Nasal Polyps",
    image: "/images/conditions/nose/nasal-polyps.webp",
    description:
      "Soft, non-cancerous growths in the nasal lining or sinuses. Often associated with chronic inflammation, allergies, or asthma.",
    symptoms: ["Persistent nasal congestion", "Reduced or lost sense of smell", "Runny nose", "Postnasal drip", "Snoring"],
    treatment: "Nasal corticosteroid sprays, oral steroids, and surgical removal via endoscopic sinus surgery (FESS) if conservative treatment fails.",
  },
  {
    name: "Allergic Rhinitis",
    image: "/images/conditions/nose/allergic-rhinitis.webp",
    description:
      "Inflammation of the nasal lining triggered by allergens like dust, pollen, or pet dander. Dr. Surabhi, as a certified Allergy Specialist, offers comprehensive management.",
    symptoms: ["Sneezing", "Clear runny nose", "Nasal itching", "Watery eyes", "Post-nasal drip"],
    treatment: "Allergen avoidance, antihistamines, nasal steroids, and allergy immunotherapy (SCIT or SLIT) for long-term control.",
  },
  {
    name: "Nosebleeds (Epistaxis)",
    image: "/images/conditions/nose/nosebleeds.webp",
    description:
      "Nosebleeds can be anterior (from the front) or posterior (from deeper vessels). Most are benign but recurrent cases need evaluation.",
    symptoms: ["Bleeding from one or both nostrils", "Blood dripping down the throat", "Associated with dryness or trauma"],
    treatment: "Nasal packing, cauterization, or treatment of underlying cause (hypertension, bleeding disorders, etc.).",
  },
  {
    name: "FESS — Functional Endoscopic Sinus Surgery",
    image: "/images/conditions/nose/fess-condition.webp",
    description:
      "A minimally invasive procedure using a nasal endoscope to open blocked sinus drainage pathways, remove polyps, and restore normal sinus function.",
    symptoms: ["Chronic sinusitis not responding to medication", "Nasal polyps", "Recurrent sinus infections"],
    treatment: "Performed under general anesthesia. Most patients go home the same day. Significant improvement in breathing and quality of life.",
  },
];

const surgeries = [
  {
    name: "Septoplasty",
    image: "/images/conditions/nose/septoplasty.webp",
    description:
      "Septoplasty is the surgical correction of a deviated nasal septum to enable clear breathing and prevent nasal obstruction. This procedure addresses structural abnormalities that interfere with proper airflow through the nasal passages.",
    details: [
      "Straightens the cartilage and bone dividing the nostrils",
      "Minimally invasive — performed entirely inside the nose",
      "Significant improvement in nasal airflow",
      "Day procedure — same-day discharge in most cases",
    ],
  },
  {
    name: "Functional Endoscopic Sinus Surgery (FESS)",
    image: "/images/conditions/nose/fess-surgery.webp",
    description:
      "FESS is a minimally invasive procedure for patients with chronic sinusitis or seriously inflamed, infected, or blocked sinuses. Modern endoscopic techniques provide enhanced visualisation of the sinus passages, allowing surgeons to open blocked areas and improve airflow with minimal tissue disruption. Some procedures utilise balloon sinuplasty, which requires minimal cutting and offers quicker recovery times.",
    details: [
      "Endoscopic — no external incisions or cuts",
      "Removes polyps and opens blocked sinus drainage pathways",
      "Balloon sinuplasty option for quicker recovery",
      "Most patients return home the same day",
    ],
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
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#C9A96E] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Nose &amp; Sinuses</span>
          </nav>
        
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Nose &amp; Sinuses
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            From chronic sinusitis and nasal polyps to deviated septum and FESS surgery — Dr.
            Surabhi offers expert, minimally invasive solutions to restore your breathing and
            quality of life.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Nasal &amp; Sinus Conditions We Treat
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
                  <div className="md:w-1/2 relative min-h-[200px] md:min-h-[320px]">
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

      {/* Nose & Sinus Surgery Procedures */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Surgical Interventions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-4">
              Nose &amp; Sinus Surgery Procedures
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Minimally invasive procedures to restore breathing and sinus function. Modern endoscopic
              techniques allow for precise correction with minimal disruption and faster recovery.
            </p>
          </div>

          <div className="space-y-8">
            {surgeries.map((surgery, idx) => (
              <article
                key={surgery.name}
                className="bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden hover:border-[#C9A96E]/40 transition-colors"
              >
                <div className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="md:w-1/2 p-7 md:p-9">
                    <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">{surgery.name}</h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{surgery.description}</p>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">Key Details</p>
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
                  <div className="md:w-1/2 relative min-h-[200px] md:min-h-[320px]">
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
          <h2 className="font-serif text-2xl font-bold mb-3">
            Struggling with Sinus or Nasal Issues?
          </h2>
          <p className="text-[#94a3b8] mb-6">
            Let Dr. Surabhi evaluate and guide you toward lasting relief.
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
