import type { Metadata } from "next";
import Link from "next/link";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Allergy Specialist Mumbai | Allergic Rhinitis & Immunotherapy | Dr. Surabhi",
  description: "Certified Allergy Specialist Dr. Surabhi Nikam Mirajkar offers comprehensive allergy testing, allergic rhinitis treatment, and immunotherapy in Mumbai.",
  alternates: { canonical: "https://drsurabhinikam.com/conditions/allergy" },
};

const conditions = [
  {
    name: "Allergic Rhinitis (Hay Fever)",
    description: "One of the most common allergy conditions, affecting millions in India. Triggered by pollen, dust, mold, or pet dander.",
    points: ["Sneezing", "Runny itchy nose", "Nasal congestion", "Watery itchy eyes", "Postnasal drip"],
    treatment: "Antihistamines, nasal corticosteroids, allergen avoidance, and long-term immunotherapy for lasting relief.",
  },
  {
    name: "Dust, Pollen & Environmental Allergies",
    description: "Allergic reactions to house dust mites, pollen, mold spores, cockroach droppings, and pet dander are the most common inhalant allergens in Mumbai.",
    points: ["Chronic sneezing", "Nasal blockage", "Itchy eyes and throat", "Worsening symptoms indoors or seasonally"],
    treatment: "Environmental control measures, pharmacotherapy, and allergen-specific immunotherapy (SCIT or SLIT).",
  },
  {
    name: "Food Allergy Evaluation",
    description: "Food allergies can manifest as nasal symptoms, hives, or systemic reactions. Proper testing helps identify culprits and guide management.",
    points: ["Itching in mouth or throat after eating", "Skin reactions", "Nasal congestion after specific foods", "Digestive symptoms"],
    treatment: "Allergy skin prick testing or serum IgE tests, dietary modifications, and emergency epinephrine if indicated.",
  },
  {
    name: "Skin Prick Testing (Allergy Testing)",
    description: "A safe, reliable, and evidence-based method to identify specific allergens. Results available within 20 minutes.",
    points: ["Identification of specific triggers", "Guides targeted treatment", "Panel of common Indian allergens tested"],
    treatment: "In-clinic procedure using a panel of common Indian allergens. Safe and well-tolerated by adults and children.",
  },
  {
    name: "Immunotherapy - SCIT & SLIT",
    description: "The only treatment that modifies the immune response and provides long-term allergy relief. Available as subcutaneous injections (SCIT) or sublingual drops/tablets (SLIT).",
    points: ["Suitable for moderate-to-severe allergic rhinitis", "Useful when multiple allergens are involved", "When medications provide inadequate control"],
    treatment: "3-5 year programme with gradually increasing allergen doses. Significantly reduces symptoms and medication dependence.",
  },
  {
    name: "Allergy-Related Chronic Sinusitis",
    description: "Untreated allergies are a major driver of chronic sinusitis. Addressing the underlying allergy is key to preventing recurrent sinus infections.",
    points: ["Chronic nasal congestion", "Recurrent sinus infections", "Post-nasal drip", "Loss of smell"],
    treatment: "Combined approach: allergy treatment plus sinus management including nasal steroids, saline rinses, and FESS if needed.",
  },
];

const faqs = [
  {
    q: "What is immunotherapy and how effective is it?",
    a: "Immunotherapy gradually desensitizes your immune system to specific allergens. It is the only disease-modifying treatment for allergies, providing 80-90% improvement in symptoms over a 3-5 year course.",
  },
  {
    q: "Is allergy testing painful?",
    a: "Skin prick testing involves small pricking sensations on the forearm or back, not injections. It is generally well-tolerated by adults and children. Results are available within 20 minutes.",
  },
  {
    q: "Can children undergo allergy testing?",
    a: "Yes. Allergy testing is safe and recommended for children from age 4 onwards. Immunotherapy is also effective and safe in children.",
  },
  {
    q: "What is the difference between SCIT and SLIT?",
    a: "SCIT involves weekly injections administered in the clinic. SLIT uses daily drops or tablets taken at home under the tongue. Both are effective options.",
  },
];

export default function AllergyPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-[#7dd3fc] mb-6">
            <Link href="/conditions" className="hover:text-white">Conditions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Allergy</span>
          </nav>
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Allergy &amp; Immunotherapy</h1>
          <p className="text-[#bae6fd] text-lg max-w-2xl mb-6">
            As a certified Allergy Specialist, Dr. Surabhi offers comprehensive allergy testing and evidence-based immunotherapy in Mumbai.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white">
            <Award size={16} className="text-[#7dd3fc]" />
            Certified Allergy Specialist
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1e293b] text-center mb-12">Allergy Conditions We Treat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((c) => (
              <article key={c.name} className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-6 card-hover">
                <h3 className="font-serif text-xl font-bold text-[#1e293b] mb-2">{c.name}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{c.description}</p>
                <ul className="space-y-1 mb-4">
                  {c.points.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[#1e293b]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0c9b85] shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="bg-[#f0fdf4] rounded-lg p-3 border border-[#bbf7d0]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0c9b85] mb-1">Treatment</p>
                  <p className="text-sm text-[#1e293b]">{c.treatment}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#1e293b] text-center mb-10">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-[#1e293b] hover:text-[#0c4a6e] list-none">
                  {faq.q}
                  <span className="ml-4 text-[#0c4a6e] text-xl group-open:rotate-45 transition-transform inline-block">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-[#64748b] leading-relaxed border-t border-[#e2e8f0] pt-3">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0c4a6e] text-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-3">Suffering from Allergies?</h2>
          <p className="text-[#bae6fd] mb-6">Book a consultation with Dr. Surabhi for comprehensive allergy testing and a long-term treatment plan.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 rounded-full bg-[#0c9b85] text-white font-semibold hover:bg-[#14b8a6] transition-colors">
            Book Allergy Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}