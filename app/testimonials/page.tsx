import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description: "Read what patients say about Dr. Surabhi Nikam Mirajkar, ENT specialist in Mumbai. Real experiences in ENT, allergy, and skull base surgery care.",
  alternates: { canonical: "https://drsurabhinikam.com/testimonials" },
};

const featured = [
  {
    name: "Vikram P.",
    condition: "Deviated Septum Surgery",
    stars: 5,
    quote: "Minimal pain, quick recovery, and breathing freely for the first time in years. The surgery went smoothly. Dr. Surabhi made sure I understood every step and was always available for queries. A truly skilled and caring surgeon.",
  },
  {
    name: "Kavya R.",
    condition: "Nasal Polyps & FESS Surgery",
    stars: 5,
    quote: "Had recurrent polyps for years. Dr. Surabhi explained the connection to my allergies and treated both together. Post-surgery recovery was smooth and there has been no recurrence so far. Truly exceptional care.",
  },
  {
    name: "Aditya N.",
    condition: "Skull Base Surgery",
    stars: 5,
    quote: "Dr. Surabhi coordinated my pituitary surgery alongside the neurosurgery team. She was calm, confident, and kept me informed throughout. Her expertise in endoscopic skull base surgery is outstanding.",
  },
];

const rest = [
  { name: "Priya M.", condition: "Chronic Sinusitis", stars: 5, quote: "After years of chronic sinusitis, I finally have a proper treatment plan. She took the time to understand my full history before suggesting any procedure." },
  { name: "Rahul S.", condition: "Ear Infection", stars: 5, quote: "Finally found an ENT who actually listens. Dr. Surabhi identified the issue quickly, explained it thoroughly, and the treatment worked." },
  { name: "Anita K.", condition: "Allergic Rhinitis", stars: 5, quote: "The allergy testing was thorough and the immunotherapy worked wonders. I had been sneezing for years — Dr. Surabhi really knows her subject." },
  { name: "Sunita B.", condition: "Vertigo (BPPV)", stars: 5, quote: "The Epley maneuver Dr. Surabhi performed resolved my vertigo in a single visit. I had been dizzy for weeks. Exceptional and quick." },
  { name: "Meera D.", condition: "Tonsillectomy", stars: 5, quote: "Dr. Surabhi made the whole experience stress-free. Post-surgery support was excellent. My daughter is doing great now." },
  { name: "Rohan J.", condition: "Sleep Apnea", stars: 5, quote: "Sleeping properly for the first time in years after Dr. Surabhi's evaluation and treatment. Cannot thank her enough." },
  { name: "Suresh T.", condition: "Tinnitus", stars: 5, quote: "Dr. Surabhi ran a thorough evaluation, explained the possible causes, and gave me a clear management plan. Significantly better now." },
  { name: "Deepak R.", condition: "Tympanoplasty", stars: 5, quote: "After the tympanoplasty, my hearing is back to normal. Dr. Surabhi's surgical skill and post-operative guidance were second to none." },
  { name: "Shreya P.", condition: "Adenoidectomy (Child)", stars: 5, quote: "Dr. Surabhi was wonderful with my 6-year-old. Post adenoidectomy, the transformation in his sleep and breathing has been remarkable." },
  { name: "Rekha M.", condition: "Immunotherapy", stars: 5, quote: "Three months into immunotherapy under Dr. Surabhi's guidance and the difference is remarkable. She monitors progress meticulously." },
  { name: "Sanjay K.", condition: "Myringotomy (Child)", stars: 5, quote: "Our daughter had recurrent ear infections. Dr. Surabhi recommended grommets and the change has been amazing — no infections since." },
  { name: "Kiran S.", condition: "Nosebleeds", stars: 5, quote: "Recurrent nosebleeds causing a lot of anxiety. Dr. Surabhi investigated thoroughly and performed cauterisation. No recurrence since." },
  { name: "Nisha V.", condition: "Ear Wax Removal", stars: 5, quote: "Quick, painless, and effective. Dr. Surabhi put me completely at ease and explained every step. Will come back for all ENT needs." },
  { name: "Amit L.", condition: "Voice Disorder", stars: 5, quote: "Persistent hoarseness was affecting my work. Dr. Surabhi did a thorough laryngoscopy and identified the issue quickly. Treatment worked beautifully." },
  { name: "Pooja N.", condition: "FESS Surgery", stars: 5, quote: "After years of headaches and sinus pressure, FESS has been life-changing. The surgery was smooth and recovery faster than expected." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-[#D4B483] text-[#D4B483]" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Patient Stories</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">What Patients Say</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto mb-6">
            Real experiences from patients who trusted Dr. Surabhi with their ENT, allergy, and skull base surgery care.
          </p>
          <div className="inline-flex items-center gap-3 bg-[#1a2a45] border border-[#243355] rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => <Star key={i} size={14} className="fill-[#D4B483] text-[#D4B483]" />)}
            </div>
            <span className="text-[#FAFAFA] text-sm font-semibold">5.0</span>
            <span className="text-[#94a3b8] text-sm">· 18 Google Reviews</span>
          </div>
        </div>
      </section>

      {/* Featured — 3 large cards */}
      <section className="py-16 bg-[#0f1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-8 text-center">Featured Reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((t) => (
              <article key={t.name} className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8 flex flex-col gap-5 hover:border-[#C9A96E]/40 transition-colors">
                <Quote size={28} className="text-[#C9A96E]/40" />
                <blockquote className="text-[#FAFAFA] text-base leading-relaxed flex-1 font-serif">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#243355] pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#FAFAFA] text-sm">{t.name}</p>
                    <p className="text-xs text-[#94a3b8] mt-0.5">{t.condition}</p>
                  </div>
                  <Stars count={t.stars} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Rest — compact two-column list */}
      <section className="pb-20 bg-[#0f1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A96E] mb-8 text-center">More Reviews</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((t) => (
              <article key={t.name} className="bg-[#1a2a45] border border-[#243355] rounded-xl p-5 flex gap-4 items-start hover:border-[#C9A96E]/30 transition-colors">
                <div className="w-9 h-9 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-[#C9A96E] font-bold text-sm">{t.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="font-semibold text-[#FAFAFA] text-sm">{t.name}</span>
                      <span className="text-[#94a3b8] text-xs ml-2">· {t.condition}</span>
                    </div>
                    <Stars count={t.stars} />
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a1220] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">Ready to Experience the Difference?</h2>
          <p className="text-[#94a3b8] mb-6 text-sm">
            Join hundreds of patients who trust Dr. Surabhi for ethical, expert ENT care.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-[#C9A96E] text-white font-semibold hover:bg-[#D4B483] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
