import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description:
    "Book a consultation with Dr. Surabhi Nikam Mirajkar, ENT & Allergy Specialist in Mumbai. Ethical, patient-centered care. No unnecessary referrals.",
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

const contactItems = [
  { icon: MapPin, label: "Address", value: "Mumbai, Maharashtra, India", href: null, sub: null },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210", sub: null },
  { icon: Mail, label: "Email", value: "dr.surabhi@drsurabhinikam.com", href: "mailto:dr.surabhi@drsurabhinikam.com", sub: null },
  { icon: Clock, label: "Clinic Hours", value: "Mon – Sat: 10 AM – 7 PM", href: null, sub: "Sunday: By appointment only" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-[#0a1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-4">Book a Consultation</h1>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto font-sans">
            Reach out to schedule a consultation with Dr. Surabhi Nikam Mirajkar. Ethical, transparent, patient-first ENT care in Mumbai.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-[#FAFAFA] mb-6">Send us a Message</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#FAFAFA] mb-1.5 font-sans" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" required placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent text-sm font-sans" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#FAFAFA] mb-1.5 font-sans" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent text-sm font-sans" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#FAFAFA] mb-1.5 font-sans" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent text-sm font-sans" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#FAFAFA] mb-1.5 font-sans" htmlFor="condition">Condition / Area of Concern *</label>
                    <select id="condition" name="condition" required
                      className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent text-sm font-sans">
                      <option value="">Select a category</option>
                      {conditionOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#FAFAFA] mb-1.5 font-sans" htmlFor="message">Describe Your Concern</label>
                    <textarea id="message" name="message" rows={4} placeholder="Brief description of your symptoms or question..."
                      className="w-full px-4 py-3 rounded-xl border border-[#243355] bg-[#0f1a2e] text-[#FAFAFA] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#C9A96E] focus:border-transparent text-sm font-sans resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 rounded-full bg-[#C9A96E] text-[#0f1a2e] font-semibold text-sm hover:bg-[#D4B483] hover:shadow-lg hover:shadow-[#C9A96E]/25 transition-all duration-200 font-sans">
                    Submit Consultation Request
                  </button>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact Info */}
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-6">
                <h2 className="font-serif text-xl font-bold text-[#FAFAFA] mb-5">Contact Information</h2>
                <ul className="space-y-5">
                  {contactItems.map(({ icon: Icon, label, value, href, sub }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#C9A96E]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase text-[#C9A96E] tracking-wide mb-0.5 font-sans">{label}</p>
                        {href ? (
                          <a href={href} className="text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans break-all">{value}</a>
                        ) : (
                          <p className="text-sm text-[#FAFAFA] font-sans">{value}</p>
                        )}
                        {sub && <p className="text-xs text-[#94a3b8] font-sans mt-0.5">{sub}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ethics Guarantee */}
              <div className="bg-[#1a2a45] border border-[#C9A96E]/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} className="text-[#C9A96E]" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#FAFAFA]">Ethical Practice Guarantee</h3>
                </div>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans">
                  Dr. Surabhi does not believe in unnecessary procedures, unnecessary referrals, or cut practice. Every recommendation is made solely in your best interest, with full transparency.
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl p-6">
                <p className="text-[#C9A96E] text-xs font-sans font-semibold uppercase tracking-widest mb-2">Quick Connect</p>
                <p className="text-sm text-[#94a3b8] font-sans mb-4">Prefer WhatsApp? Message Dr. Surabhi directly.</p>
                <a href="https://wa.me/919876543210?text=Hi%20Dr.%20Surabhi%2C%20I%27d%20like%20to%20book%20a%20consultation."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity font-sans"
                  style={{ backgroundColor: "#25D366" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
