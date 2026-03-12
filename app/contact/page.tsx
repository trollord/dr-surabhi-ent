import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description: "Book a consultation with Dr. Surabhi Nikam Mirajkar, ENT & Allergy Specialist in Mumbai. Ethical, patient-centered care. No unnecessary referrals.",
  alternates: { canonical: "https://drsurabhinikam.com/contact" },
};

const conditionOptions = [
  "Ear & Hearing",
  "Nose & Sinuses",
  "Throat & Voice",
  "Allergy & Immunotherapy",
  "Skull Base Surgery",
  "General ENT Query",
  "Other",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb]">
      <section className="pt-24 pb-16 bg-[#0c4a6e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7dd3fc] mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-4">Book a Consultation</h1>
          <p className="text-[#bae6fd] text-lg max-w-xl mx-auto">
            Reach out to schedule a consultation with Dr. Surabhi Nikam Mirajkar. Ethical, transparent, patient-first ENT care in Mumbai.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            <div className="lg:col-span-3">
              <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-8">
                <h2 className="font-serif text-2xl font-bold text-[#1e293b] mb-6">Send us a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1e293b] mb-1.5" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafb] text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:border-transparent text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1e293b] mb-1.5" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafb] text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:border-transparent text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1e293b] mb-1.5" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafb] text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:border-transparent text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1e293b] mb-1.5" htmlFor="condition">Condition / Area of Concern *</label>
                    <select id="condition" name="condition" required className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafb] text-[#1e293b] focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:border-transparent text-sm">
                      <option value="">Select a category</option>
                      {conditionOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1e293b] mb-1.5" htmlFor="message">Describe Your Concern</label>
                    <textarea id="message" name="message" rows={4} placeholder="Brief description of your symptoms or question..." className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafb] text-[#1e293b] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#0c4a6e] focus:border-transparent text-sm resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 rounded-full bg-[#0c9b85] text-white font-semibold text-base hover:bg-[#14b8a6] transition-colors">
                    Submit Consultation Request
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-sm p-6">
                <h2 className="font-serif text-xl font-bold text-[#1e293b] mb-5">Contact Information</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center shrink-0"><MapPin size={18} className="text-[#0c4a6e]" /></div>
                    <div><p className="text-xs font-semibold uppercase text-[#0ea5e9] mb-0.5">Address</p><p className="text-sm text-[#1e293b]">Mumbai, Maharashtra, India</p></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center shrink-0"><Phone size={18} className="text-[#0c4a6e]" /></div>
                    <div><p className="text-xs font-semibold uppercase text-[#0ea5e9] mb-0.5">Phone</p><a href="tel:+919876543210" className="text-sm text-[#1e293b] hover:text-[#0c4a6e]">+91 98765 43210</a></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center shrink-0"><Mail size={18} className="text-[#0c4a6e]" /></div>
                    <div><p className="text-xs font-semibold uppercase text-[#0ea5e9] mb-0.5">Email</p><a href="mailto:dr.surabhi@drsurabhinikam.com" className="text-sm text-[#1e293b] hover:text-[#0c4a6e] break-all">dr.surabhi@drsurabhinikam.com</a></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#f0f7ff] flex items-center justify-center shrink-0"><Clock size={18} className="text-[#0c4a6e]" /></div>
                    <div><p className="text-xs font-semibold uppercase text-[#0ea5e9] mb-0.5">Clinic Hours</p><p className="text-sm text-[#1e293b]">Mon to Sat: 10 AM to 7 PM</p><p className="text-xs text-[#64748b]">Sunday: By appointment only</p></div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={20} className="text-[#0c9b85]" />
                  <h3 className="font-semibold text-[#1e293b] text-sm">Ethical Practice Guarantee</h3>
                </div>
                <p className="text-sm text-[#64748b] leading-relaxed">
                  Dr. Surabhi does not believe in unnecessary procedures, unnecessary referrals, or cut practice. Every recommendation is made solely in your best interest, with full transparency.
                </p>
              </div>

              <div className="bg-[#0c4a6e] rounded-2xl p-6 text-white">
                <p className="text-[#7dd3fc] text-xs font-semibold uppercase mb-2">Quick Connect</p>
                <p className="text-sm text-[#bae6fd] mb-4">Prefer WhatsApp? Message Dr. Surabhi directly.</p>
                <a href="https://wa.me/919876543210?text=Hi%20Dr.%20Surabhi%2C%20I%27d%20like%20to%20book%20a%20consultation." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}