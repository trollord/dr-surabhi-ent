import type { Metadata } from "next";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description: "Read what patients say about Dr. Surabhi Nikam Mirajkar, ENT specialist in Mumbai. Real experiences in ENT, allergy, and skull base surgery care.",
  alternates: { canonical: "https://drsurabhinikam.com/testimonials" },
};

const testimonials = [
  { name: "Priya M.", condition: "Chronic Sinusitis", stars: 5, quote: "Dr. Surabhi was so patient and explained everything clearly. After years of chronic sinusitis, I finally have a proper treatment plan. She took the time to understand my history before suggesting any procedure." },
  { name: "Rahul S.", condition: "Ear Infection", stars: 5, quote: "Finally found an ENT who actually listens. I had been to multiple doctors but no one gave me a proper diagnosis. Dr. Surabhi identified the issue quickly and the treatment worked." },
  { name: "Anita K.", condition: "Allergic Rhinitis", stars: 5, quote: "The allergy testing was thorough and the immunotherapy worked wonders. I had been sneezing and suffering from a blocked nose for years. Dr. Surabhi really knows her subject." },
  { name: "Vikram P.", condition: "Deviated Septum Surgery", stars: 5, quote: "Minimal pain, quick recovery, and breathing freely for the first time in years. The surgery went smoothly. Dr. Surabhi made sure I understood every step and was always available for queries." },
  { name: "Meera D.", condition: "Tonsillectomy", stars: 5, quote: "Dr. Surabhi made the whole experience stress-free. I was anxious about the surgery but she walked me through everything beforehand. My daughter is doing great now. Thank you!" },
  { name: "Suresh T.", condition: "Tinnitus", stars: 5, quote: "I had been living with ringing in my ears for over a year. Dr. Surabhi ran a thorough evaluation, explained the possible causes, and gave me a clear management plan. Significantly better now." },
  { name: "Kavya R.", condition: "Nasal Polyps", stars: 5, quote: "Had recurrent polyps for years. Dr. Surabhi explained the connection to my allergies and treated both together. Post-surgery recovery was smooth and no recurrence so far." },
  { name: "Aditya N.", condition: "Pituitary Tumour Surgery", stars: 5, quote: "Dr. Surabhi coordinated my pituitary surgery alongside the neurosurgery team. She was calm, confident, and kept me informed throughout. Excellent post-operative care." },
  { name: "Sunita B.", condition: "Vertigo (BPPV)", stars: 5, quote: "The Epley maneuver Dr. Surabhi performed resolved my vertigo in a single visit. I had been dizzy for weeks. Quick, effective, and compassionate care." },
  { name: "Rohan J.", condition: "Sleep Apnea", stars: 5, quote: "Snoring and sleep apnea were affecting my work and family. Dr. Surabhi did a thorough evaluation and suggested a targeted treatment. Sleeping properly for the first time in years." },
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
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Real experiences from patients who trusted Dr. Surabhi with their ENT, allergy, and skull base surgery care.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <article key={t.name} className="bg-[#1a2a45] border border-[#243355] rounded-xl shadow-sm card-hover p-6 flex flex-col">
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
    </main>
  );
}
