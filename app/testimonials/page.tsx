import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description: "Read what patients say about Dr. Surabhi Nikam Mirajkar, ENT specialist in Mumbai. Real experiences in ENT, allergy, and skull base surgery care.",
  alternates: { canonical: "https://drsurabhinikam.com/testimonials" },
};

const testimonials = [
  {
    name: "Priya M.",
    condition: "Chronic Sinusitis",
    stars: 5,
    quote: "Dr. Surabhi was so patient and explained everything clearly. After years of chronic sinusitis, I finally have a proper treatment plan. She took the time to understand my full history before suggesting any procedure — something I truly appreciated.",
  },
  {
    name: "Rahul S.",
    condition: "Ear Infection",
    stars: 5,
    quote: "Finally found an ENT who actually listens. I had been to multiple doctors but no one gave me a proper diagnosis. Dr. Surabhi identified the issue quickly, explained it thoroughly, and the treatment worked. Highly recommend.",
  },
  {
    name: "Anita K.",
    condition: "Allergic Rhinitis",
    stars: 5,
    quote: "The allergy testing was thorough and the immunotherapy worked wonders. I had been sneezing and suffering from a blocked nose for years. Dr. Surabhi's approach to allergy care is comprehensive — she really knows her subject.",
  },
  {
    name: "Vikram P.",
    condition: "Deviated Septum Surgery",
    stars: 5,
    quote: "Minimal pain, quick recovery, and breathing freely for the first time in years. The surgery went smoothly. Dr. Surabhi made sure I understood every step and was always available for queries. A truly skilled and caring surgeon.",
  },
  {
    name: "Meera D.",
    condition: "Tonsillectomy",
    stars: 5,
    quote: "Dr. Surabhi made the whole experience stress-free. I was anxious about the surgery but she walked me through everything beforehand. Post-surgery support was excellent too. My daughter is doing great now. Thank you so much!",
  },
  {
    name: "Suresh T.",
    condition: "Tinnitus",
    stars: 5,
    quote: "I had been living with ringing in my ears for over a year. Dr. Surabhi ran a thorough evaluation, explained the possible causes, and gave me a clear management plan. Significantly better now. Very grateful for her care.",
  },
  {
    name: "Kavya R.",
    condition: "Nasal Polyps & FESS Surgery",
    stars: 5,
    quote: "Had recurrent polyps for years. Dr. Surabhi explained the connection to my allergies and treated both together. Post-surgery recovery was smooth and there has been no recurrence so far. Truly exceptional.",
  },
  {
    name: "Aditya N.",
    condition: "Skull Base Surgery",
    stars: 5,
    quote: "Dr. Surabhi coordinated my pituitary surgery alongside the neurosurgery team. She was calm, confident, and kept me informed throughout. Her expertise in endoscopic skull base surgery is outstanding. Excellent post-operative care.",
  },
  {
    name: "Sunita B.",
    condition: "Vertigo (BPPV)",
    stars: 5,
    quote: "The Epley maneuver Dr. Surabhi performed resolved my vertigo in a single visit. I had been dizzy for weeks. She was calm, explained exactly what she was doing, and the result was immediate. Exceptional doctor.",
  },
  {
    name: "Rohan J.",
    condition: "Sleep Apnea",
    stars: 5,
    quote: "Snoring and sleep apnea were affecting my work and family. Dr. Surabhi did a thorough evaluation and suggested a targeted treatment. Sleeping properly for the first time in years. Cannot thank her enough.",
  },
  {
    name: "Nisha V.",
    condition: "Ear Wax Removal",
    stars: 5,
    quote: "Quick, painless, and effective. I was worried about the procedure but Dr. Surabhi put me completely at ease. She explained exactly what she was doing at each step. Will definitely come back for all ENT needs.",
  },
  {
    name: "Deepak R.",
    condition: "Tympanoplasty",
    stars: 5,
    quote: "I had a perforated eardrum for two years after a bad ear infection. After the tympanoplasty, my hearing is back to normal. Dr. Surabhi's surgical skill and post-operative guidance were second to none.",
  },
  {
    name: "Shreya P.",
    condition: "Adenoidectomy (Child)",
    stars: 5,
    quote: "My 6-year-old had chronic snoring and mouth breathing. Dr. Surabhi was wonderful with him — so calm and reassuring. Post adenoidectomy, the transformation in his sleep and breathing has been remarkable.",
  },
  {
    name: "Amit L.",
    condition: "Throat Infection & Voice Disorder",
    stars: 5,
    quote: "I had persistent hoarseness for months that was affecting my work. Dr. Surabhi did a thorough laryngoscopy and identified the issue quickly. Treatment worked beautifully. Very knowledgeable and approachable doctor.",
  },
  {
    name: "Rekha M.",
    condition: "Dust Allergy & Immunotherapy",
    stars: 5,
    quote: "After years of dust allergy causing constant sneezing and nasal congestion, I started immunotherapy under Dr. Surabhi's guidance. Three months in and the difference is remarkable. She monitors progress meticulously.",
  },
  {
    name: "Sanjay K.",
    condition: "Myringotomy (Child)",
    stars: 5,
    quote: "Our daughter had recurrent ear infections. Dr. Surabhi recommended grommets and the change has been amazing — no infections since. She explained the procedure clearly and our daughter was comfortable throughout.",
  },
  {
    name: "Pooja N.",
    condition: "Chronic Sinusitis & FESS",
    stars: 5,
    quote: "After years of headaches and sinus pressure, Dr. Surabhi performed FESS and the results have been life-changing. The surgery was smooth and recovery was faster than I expected. Highly skilled and caring doctor.",
  },
  {
    name: "Kiran S.",
    condition: "Nosebleeds (Epistaxis)",
    stars: 5,
    quote: "Recurrent nosebleeds were causing a lot of anxiety. Dr. Surabhi investigated thoroughly, identified the cause, and performed cauterisation. No recurrence since. Very professional and reassuring throughout the process.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#D4B483] text-[#D4B483]" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-3">Patient Stories</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">What Patients Say</h1>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto mb-6">
            Real experiences from patients who trusted Dr. Surabhi with their ENT, allergy, and skull base surgery care.
          </p>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-[#1a2a45] border border-[#243355] rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={14} className="fill-[#D4B483] text-[#D4B483]" />
              ))}
            </div>
            <span className="text-[#FAFAFA] text-sm font-semibold">5.0</span>
            <span className="text-[#94a3b8] text-sm">· 18 Google Reviews</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm card-hover p-4 sm:p-6 flex flex-col">
                <StarRating count={t.stars} />
                <blockquote className="text-[#FAFAFA] text-sm leading-relaxed italic my-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-[#243355] pt-4">
                  <p className="font-semibold text-[#FAFAFA]">{t.name}</p>
                  <p className="text-xs text-[#94a3b8]">{t.condition}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a1220] text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">Share Your Experience</h2>
          <p className="text-[#94a3b8] mb-6 text-sm">
            Had a good experience with Dr. Surabhi? Your review helps other patients find the right ENT care.
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
