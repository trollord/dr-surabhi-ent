import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Throat & Voice Treatment Mumbai | Tonsillitis, Snoring, Sleep Apnea | Dr. Surabhi",
  description:
    "Expert treatment of throat and voice conditions — tonsillitis, voice disorders, snoring, sleep apnea, swallowing difficulty — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/throat-voice" },
};

const conditions = [
  {
    name: "Tonsillitis & Adenoid Problems",
    description:
      "Inflammation of the tonsils (tonsillitis) or adenoids is common in children and adults. Recurrent infections or obstruction may require surgical removal.",
    symptoms: ["Severe sore throat", "Difficulty swallowing", "Swollen neck glands", "Fever", "Snoring in children"],
    treatment: "Antibiotics for bacterial tonsillitis. Recurrent cases or obstructive adenoids may require tonsillectomy / adenoidectomy.",
  },
  {
    name: "Voice Disorders & Hoarseness",
    description:
      "Voice changes, hoarseness, or voice loss can result from vocal cord nodules, polyps, laryngitis, or overuse. A laryngoscopy provides direct visualization.",
    symptoms: ["Hoarse or rough voice", "Voice fatigue", "Difficulty projecting voice", "Voice loss", "Throat clearing"],
    treatment: "Voice rest, speech therapy, medical management, or microlaryngoscopy for vocal cord lesions.",
  },
  {
    name: "Snoring & Sleep Apnea",
    description:
      "Snoring and obstructive sleep apnea (OSA) can significantly impact quality of life and health. ENT evaluation identifies the site of obstruction.",
    symptoms: ["Loud snoring", "Gasping during sleep", "Excessive daytime sleepiness", "Morning headaches", "Poor concentration"],
    treatment: "Lifestyle changes, CPAP therapy, and surgery (tonsillectomy, UPPP, turbinate reduction) based on the obstruction site.",
  },
  {
    name: "Throat Infections",
    description:
      "Bacterial and viral throat infections (pharyngitis, laryngitis) are very common. Proper diagnosis avoids unnecessary antibiotic use.",
    symptoms: ["Sore throat", "Pain on swallowing", "Redness in throat", "Fever", "Hoarseness"],
    treatment: "Rest, hydration, pain relief, and antibiotics only for confirmed bacterial infections (e.g., Group A Strep).",
  },
  {
    name: "Difficulty Swallowing (Dysphagia)",
    description:
      "Swallowing difficulty can arise from structural, neurological, or muscular causes. A thorough ENT assessment including flexible laryngoscopy is important.",
    symptoms: ["Food or liquid getting stuck", "Coughing or choking while eating", "Regurgitation", "Drooling", "Weight loss"],
    treatment: "Depends on the cause — may include dietary modifications, swallowing therapy, medications, or endoscopic procedures.",
  },
];

const faqs = [
  {
    q: "When should tonsils be removed?",
    a: "Tonsillectomy is recommended when there are 7 or more throat infections in one year, 5 per year for 2 years, or 3 per year for 3 years. Obstruction causing breathing problems or sleep apnea is also an indication.",
  },
  {
    q: "Is snoring always dangerous?",
    a: "Simple snoring without breathing pauses is usually not dangerous but can be disruptive. However, if snoring is accompanied by pauses in breathing, gasping, or excessive daytime sleepiness, it may indicate obstructive sleep apnea which needs evaluation.",
  },
  {
    q: "Can voice disorders be treated without surgery?",
    a: "Many voice conditions, including vocal cord nodules, can improve with voice rest and speech therapy. Surgery is reserved for lesions that don't respond to conservative management.",
  },
  {
    q: "What is a laryngoscopy?",
    a: "A laryngoscopy is a procedure to directly visualize the voice box (larynx) using a thin flexible camera through the nose or a rigid scope through the mouth. It is performed in-clinic and is usually well-tolerated.",
  },
];

export default function ThroatVoicePage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#7dd3fc] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Throat &amp; Voice</span>
          </nav>
          <div className="text-6xl mb-4" aria-hidden="true">🗣️</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Throat &amp; Voice
          </h1>
          <p className="text-[#bae6fd] text-lg max-w-2xl">
            Expert care for tonsillitis, voice disorders, snoring, sleep apnea, and swallowing
            problems. Dr. Surabhi provides comprehensive throat evaluations using endoscopic
            visualization.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#1e293b]">
              Throat &amp; Voice Conditions We Treat
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
            Concerned About Your Throat or Voice?
          </h2>
          <p className="text-[#bae6fd] mb-6">
            Book a consultation with Dr. Surabhi for expert ENT evaluation.
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
