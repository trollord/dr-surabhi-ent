"use client";

import { useState } from "react";

const conditionOptions = [
  "Ear & Hearing",
  "Nose & Sinuses",
  "Throat & Voice",
  "Allergy & Immunotherapy",
  "Skull Base Surgery",
  "General ENT Query",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(true);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      condition: (form.elements.namedItem("condition") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong");

      // Fade out form, then show success
      setVisible(false);
      setTimeout(() => {
        setStatus("success");
        setVisible(true);
      }, 350);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-6 sm:p-8 overflow-hidden">
      <div
        style={{
          transition: "opacity 350ms ease, transform 350ms ease",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
        }}
      >
        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-3">Message Submitted!</h3>
            <p className="text-sm text-[#94a3b8] font-sans leading-relaxed max-w-xs mx-auto">
              Thank you for reaching out. Dr. Surabhi&apos;s team will get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[#C9A96E] text-xs font-sans uppercase tracking-widest font-semibold mb-1">
              Request a Visit
            </p>
            <h2 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-6">Send Us a Message</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-[#94a3b8] mb-1.5 font-sans" htmlFor="name">
                    Full Name <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:border-[#C9A96E]/50 text-sm font-sans transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-[#94a3b8] mb-1.5 font-sans" htmlFor="phone">
                    Phone Number <span className="text-[#C9A96E]">*</span>
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:border-[#C9A96E]/50 text-sm font-sans transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-[#94a3b8] mb-1.5 font-sans" htmlFor="email">
                  Email Address
                </label>
                <input id="email" name="email" type="email" placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:border-[#C9A96E]/50 text-sm font-sans transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-[#94a3b8] mb-1.5 font-sans" htmlFor="condition">
                  Area of Concern <span className="text-[#C9A96E]">*</span>
                </label>
                <select id="condition" name="condition" required
                  className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:border-[#C9A96E]/50 text-sm font-sans transition-colors">
                  <option value="">Select a category</option>
                  {conditionOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-[#94a3b8] mb-1.5 font-sans" htmlFor="message">
                  Describe Your Concern
                </label>
                <textarea id="message" name="message" rows={4} placeholder="Brief description of your symptoms or question..."
                  className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/50 focus:border-[#C9A96E]/50 text-sm font-sans resize-none transition-colors" />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-red-400 font-sans">{errorMsg}</p>
                </div>
              )}

              <button type="submit" disabled={status === "loading"}
                className="w-full py-3.5 rounded-full bg-[#C9A96E] text-[#0f1a2e] font-semibold text-sm hover:bg-[#D4B483] hover:shadow-lg hover:shadow-[#C9A96E]/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 font-sans tracking-wide flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : "Submit Consultation Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
