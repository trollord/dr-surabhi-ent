"use client";

import { useEffect, useRef, useState } from "react";

const statsData = [
  { end: 500, suffix: "+", label: "Patients Treated", sublabel: "Satisfied & Recovered" },
  { end: 5, suffix: "+", label: "Years Experience", sublabel: "Clinical & Surgical" },
  { end: 3, suffix: "", label: "Specializations", sublabel: "ENT · Allergy · Skull Base" },
  { end: 0, suffix: "", label: "Zero Compromise", sublabel: "On Ethics & Patient Care" },
];

function Counter({ end, suffix, duration = 1800 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  if (end === 0) {
    return <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">&#10003;</span>;
  }

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-[#0f1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
            By the Numbers
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl sm:text-4xl font-bold text-white">
            Trusted Care, Proven Results
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center p-4 sm:p-6 bg-[#1a2a45] rounded-xl border border-[#243355]">
              <Counter end={stat.end} suffix={stat.suffix} />
              <div className="mt-2 text-sm sm:text-base font-semibold text-[#94a3b8]">{stat.label}</div>
              <div className="text-xs text-[#C9A96E] mt-0.5">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
