"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    condition: "Chronic Sinusitis",
    stars: 5,
    quote:
      "Dr. Surabhi was so patient and explained everything clearly. After years of chronic sinusitis, I finally have a proper treatment plan. She took the time to understand my full history before suggesting any procedure — something I truly appreciated.",
  },
  {
    name: "Rahul S.",
    condition: "Ear Infection",
    stars: 5,
    quote:
      "Finally found an ENT who actually listens. I had been to multiple doctors but no one gave me a proper diagnosis. Dr. Surabhi identified the issue quickly, explained it thoroughly, and the treatment worked. Highly recommend her.",
  },
  {
    name: "Kavya R.",
    condition: "Nasal Polyps & FESS Surgery",
    stars: 5,
    quote:
      "Had recurrent nasal polyps for years. Dr. Surabhi explained the connection to my allergies and treated both conditions together. Post-surgery recovery was smooth and there has been no recurrence so far. Truly excellent care.",
  },
  {
    name: "Vikram P.",
    condition: "Deviated Septum Surgery",
    stars: 5,
    quote:
      "Minimal pain, quick recovery, and breathing freely for the first time in years. The surgery went smoothly. Dr. Surabhi made sure I understood every step and was always available for queries. A truly skilled and caring surgeon.",
  },
  {
    name: "Sunita B.",
    condition: "Vertigo (BPPV)",
    stars: 5,
    quote:
      "The Epley maneuver Dr. Surabhi performed resolved my vertigo in a single visit. I had been dizzy for weeks and was very anxious. She was calm, explained exactly what she was doing, and the result was immediate. Exceptional.",
  },
  {
    name: "Meera D.",
    condition: "Tonsillectomy",
    stars: 5,
    quote:
      "Dr. Surabhi made the whole experience stress-free. I was anxious about the surgery but she walked me through everything beforehand. Post-surgery support was excellent. My daughter is doing great now. Thank you so much!",
  },
  {
    name: "Rohan J.",
    condition: "Sleep Apnea",
    stars: 5,
    quote:
      "Snoring and sleep apnea were affecting my work and family life. Dr. Surabhi did a thorough evaluation and suggested a targeted treatment plan. I am sleeping properly for the first time in years. Cannot thank her enough.",
  },
  {
    name: "Anita K.",
    condition: "Allergic Rhinitis",
    stars: 5,
    quote:
      "The allergy testing was thorough and the immunotherapy worked wonders. I had been sneezing and suffering from a blocked nose for years. Dr. Surabhi's approach to allergy care is comprehensive — she really knows her subject.",
  },
  {
    name: "Aditya N.",
    condition: "Skull Base Surgery",
    stars: 5,
    quote:
      "Dr. Surabhi coordinated my pituitary surgery alongside the neurosurgery team. She was calm, confident, and kept me informed throughout. Her expertise in endoscopic skull base surgery is outstanding. Excellent post-operative care.",
  },
  {
    name: "Suresh T.",
    condition: "Tinnitus",
    stars: 5,
    quote:
      "I had been living with ringing in my ears for over a year. Dr. Surabhi ran a thorough evaluation, explained the possible causes, and gave me a clear management plan. Significantly better now. Very grateful for her care.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#D4B483] text-[#D4B483]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[current];

  return (
    <section className="py-16 sm:py-20 bg-[#0f1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
            Patient Stories
          </p>
          <div className="section-divider mx-auto" />
          <h2 className="font-serif text-2xl sm:text-3xl sm:text-4xl font-bold text-[#FAFAFA] mb-4">
            What Patients Say
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto text-sm sm:text-base">
            Real experiences from patients who trusted Dr. Surabhi with their ENT and allergy care.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1a2a45] rounded-2xl border border-[#243355] shadow-sm p-4 sm:p-6 lg:p-8 text-center flex flex-col justify-between gap-4">
            <div>
              <div className="flex justify-center mb-4">
                <StarRating count={t.stars} />
              </div>
              <blockquote className="text-[#FAFAFA] text-sm sm:text-base leading-relaxed italic mb-4 sm:mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-[#FAFAFA]">{t.name}</p>
              <p className="text-sm text-[#94a3b8]">{t.condition}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#243355] bg-[#1a2a45] flex items-center justify-center text-[#FAFAFA] hover:bg-[#243355] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-[#C9A96E]" : "bg-[#243355]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#243355] bg-[#1a2a45] flex items-center justify-center text-[#FAFAFA] hover:bg-[#243355] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
