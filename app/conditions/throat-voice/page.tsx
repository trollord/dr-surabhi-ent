import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mic } from "lucide-react";

export const metadata: Metadata = {
  title: "Throat & Voice Treatment Mumbai | Tonsillitis, Snoring, Sleep Apnea | Dr. Surabhi",
  description:
    "Expert treatment of throat and voice conditions — tonsillitis, voice disorders, snoring, sleep apnea, swallowing difficulty — by ENT specialist Dr. Surabhi in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/throat-voice" },
};

const conditions = [
  {
    name: "Tonsillitis & Adenoid Problems",
    image: "/images/conditions/throat/tonsillitis.webp",
    description:
      "Inflammation of the tonsils (tonsillitis) or adenoids is common in children and adults. Recurrent infections or obstruction may require surgical removal.",
    symptoms: ["Severe sore throat", "Difficulty swallowing", "Swollen neck glands", "Fever", "Snoring in children"],
    treatment: "Antibiotics for bacterial tonsillitis. Recurrent cases or obstructive adenoids may require tonsillectomy / adenoidectomy.",
  },
  {
    name: "Voice Disorders & Hoarseness",
    image: "/images/conditions/throat/voice-disorders.webp",
    description:
      "Voice changes, hoarseness, or voice loss can result from vocal cord nodules, polyps, laryngitis, or overuse. A laryngoscopy provides direct visualization.",
    symptoms: ["Hoarse or rough voice", "Voice fatigue", "Difficulty projecting voice", "Voice loss", "Throat clearing"],
    treatment: "Voice rest, speech therapy, medical management, or microlaryngoscopy for vocal cord lesions.",
  },
  {
    name: "Snoring & Sleep Apnea",
    image: "/images/conditions/throat/snoring.webp",
    description:
      "Snoring and obstructive sleep apnea (OSA) can significantly impact quality of life and health. ENT evaluation identifies the site of obstruction.",
    symptoms: ["Loud snoring", "Gasping during sleep", "Excessive daytime sleepiness", "Morning headaches", "Poor concentration"],
    treatment: "Lifestyle changes, CPAP therapy, and surgery (tonsillectomy, UPPP, turbinate reduction) based on the obstruction site.",
  },
  {
    name: "Throat Infections",
    image: "/images/conditions/throat/throat-infections.webp",
    description:
      "Bacterial and viral throat infections (pharyngitis, laryngitis) are very common. Proper diagnosis avoids unnecessary antibiotic use.",
    symptoms: ["Sore throat", "Pain on swallowing", "Redness in throat", "Fever", "Hoarseness"],
    treatment: "Rest, hydration, pain relief, and antibiotics only for confirmed bacterial infections (e.g., Group A Strep).",
  },
  {
    name: "Difficulty Swallowing (Dysphagia)",
    image: "/images/conditions/throat/dysphagia.webp",
    description:
      "Swallowing difficulty can arise from structural, neurological, or muscular causes. A thorough ENT assessment including flexible laryngoscopy is important.",
    symptoms: ["Food or liquid getting stuck", "Coughing or choking while eating", "Regurgitation", "Drooling", "Weight loss"],
    treatment: "Depends on the cause — may include dietary modifications, swallowing therapy, medications, or endoscopic procedures.",
  },
];

const surgeries = [
  {
    name: "Tonsillectomy & Adenoidectomy",
    image: "/images/conditions/throat/tonsillectomy.webp",
    description:
      "Tonsillectomy involves the removal of the tonsils — lymphoid tissues at the back of the throat. It is commonly recommended for patients with recurrent tonsillitis, sleep apnea, or obstructive sleep disorders. Adenoidectomy removes adenoid tissue located behind the nose and is often performed alongside tonsillectomy. Both are among the most frequently performed ENT surgeries, especially in children with chronic inflammation or recurrent infections.",
    details: [
      "Performed under general anaesthesia",
      "Procedure typically takes approximately 30 minutes",
      "Same-day discharge possible in most cases",
      "Highly effective for recurrent tonsillitis and obstructive sleep apnea",
    ],
  },
  {
    name: "Tracheostomy",
    image: "/images/conditions/throat/tracheostomy.webp",
    description:
      "Tracheostomy creates an alternative airway in the throat for patients experiencing difficulty breathing. A small opening is made in the front of the neck into the trachea (windpipe), through which a tube is placed to allow air to reach the lungs directly. This procedure may be temporary or permanent, depending on the underlying condition requiring intervention.",
    details: [
      "Provides a secure, direct airway when normal breathing is compromised",
      "Can be temporary (short-term) or permanent depending on the condition",
      "Performed under general anaesthesia in a hospital setting",
      "Comprehensive post-operative care and guidance provided",
    ],
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
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#C9A96E] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Throat &amp; Voice</span>
          </nav>
         
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">
            Throat &amp; Voice
          </h1>
          <p className="text-[#94a3b8] text-lg max-w-2xl">
            Expert care for tonsillitis, voice disorders, snoring, sleep apnea, and swallowing
            problems. Dr. Surabhi provides comprehensive throat evaluations using endoscopic
            visualization.
          </p>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA]">
              Throat &amp; Voice Conditions We Treat
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

      {/* Throat Surgery Procedures */}
      <section className="py-20 bg-[#0a1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
              Surgical Interventions
            </p>
            <h2 className="font-serif text-3xl font-bold text-[#FAFAFA] mb-4">
              Throat Surgery Procedures
            </h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Treatment for voice, swallowing, and airway disorders. Procedures are tailored to the patient&apos;s
              specific condition, age, and health status to ensure the most effective treatment.
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
            Concerned About Your Throat or Voice?
          </h2>
          <p className="text-[#94a3b8] mb-6">
            Book a consultation with Dr. Surabhi for expert ENT evaluation.
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
