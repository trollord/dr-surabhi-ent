"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  { value: "500+", label: "Patients" },
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Specializations" },
  { value: "100%", label: "Ethical Practice" },
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0c4a6e]">
      {/* Parallax background layer */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0c4a6e] opacity-90" />
        {/* Wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
            fill="#f8fafb"
          />
        </svg>
      </div>

      {/* Decorative floating circles */}
      <div
        className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 border-2 border-white"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-32 w-40 h-40 rounded-full opacity-10 bg-white"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-10 border-2 border-[#0ea5e9]"
        aria-hidden="true"
      />
      {/* Medical cross decorative */}
      <div className="absolute top-1/3 right-16 opacity-5 text-white text-8xl font-bold select-none" aria-hidden="true">
        ✚
      </div>
      <div className="absolute bottom-1/3 left-16 opacity-5 text-white text-6xl font-bold select-none" aria-hidden="true">
        ✚
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#0c9b85] mr-2 animate-pulse" />
            ENT Specialist · Allergy · Skull Base Surgery · Mumbai
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-3">
            Expert ENT Care
          </h1>
          <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-teal-gradient bg-gradient-to-r from-[#7dd3fc] to-[#0ea5e9] bg-clip-text text-transparent">
              with a Human Touch
            </span>
          </p>

          <p className="text-base sm:text-lg text-[#bae6fd] leading-relaxed mb-8 max-w-2xl">
            Dr. Surabhi Nikam Mirajkar — MBBS, MS (ENT), Allergy Specialist, Fellowship in Skull
            Base Surgery — brings advanced expertise combined with a deeply human touch to every
            consultation. Ethical, evidence-based ENT care in Mumbai.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-[#0c9b85] text-white font-semibold text-base hover:bg-[#14b8a6] transition-colors shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/conditions"
              className="inline-flex items-center px-7 py-3.5 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#0c4a6e] transition-colors"
            >
              View Conditions
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-serif text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-[#7dd3fc] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
