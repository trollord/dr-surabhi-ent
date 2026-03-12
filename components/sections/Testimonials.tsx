"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya M.",
    condition: "Sinusitis",
    stars: 5,
    quote:
      "Dr. Surabhi was so patient and explained everything clearly. After years of chronic sinusitis, I finally have a proper treatment plan. She took the time to understand my history before suggesting any procedure — something I truly appreciated.",
  },
  {
    name: "Rahul S.",
    condition: "Ear Infection",
    stars: 5,
    quote:
      "Finally found an ENT who actually listens. I had been to multiple doctors but no one gave me a proper diagnosis. Dr. Surabhi identified the issue quickly, explained it thoroughly, and the treatment worked. Highly recommend her.",
  },
  {
    name: "Anita K.",
    condition: "Allergic Rhinitis",
    stars: 5,
    quote:
      "The allergy testing was thorough and the treatment worked wonders. I had been sneezing and suffering from blocked nose for years. Dr. Surabhi's approach to allergy care is comprehensive — she really knows her subject.",
  },
  {
    name: "Vikram P.",
    condition: "Deviated Septum Surgery",
    stars: 5,
    quote:
      "Minimal pain, quick recovery, and breathing freely for the first time in years. The surgery went smoothly. Dr. Surabhi made sure I understood every step and was always available for queries. A truly skilled and caring surgeon.",
  },
  {
    name: "Meera D.",
    condition: "Tonsillectomy",
    stars: 5,
    quote:
      "Dr. Surabhi made the whole experience stress-free. I was anxious about the surgery but she walked me through everything beforehand. Post-surgery support was excellent too. My daughter is doing great now. Thank you so much!",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
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
    <section className="py-20 bg-[#f0f7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0ea5e9] mb-2">
            Patient Stories
          </p>
          <div className="section-divider mx-auto" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1e293b] mb-4">
            What Patients Say
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto">
            Real experiences from patients who trusted Dr. Surabhi with their ENT and allergy care.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm p-8 text-center min-h-[240px] flex flex-col justify-between">
            <div>
              <div className="flex justify-center mb-4">
                <StarRating count={t.stars} />
              </div>
              <blockquote className="text-[#1e293b] text-base leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
            <div>
              <p className="font-semibold text-[#0c4a6e]">{t.name}</p>
              <p className="text-sm text-[#64748b]">{t.condition}</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center hover:bg-[#0c4a6e] hover:text-white hover:border-[#0c4a6e] transition-colors"
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
                    i === current ? "bg-[#0c4a6e]" : "bg-[#e2e8f0]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#e2e8f0] bg-white flex items-center justify-center hover:bg-[#0c4a6e] hover:text-white hover:border-[#0c4a6e] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
