import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Consultation | Dr. Surabhi Nikam Mirajkar ENT Mumbai",
  description:
    "Book a consultation with Dr. Surabhi Nikam Mirajkar, ENT & Allergy Specialist in Mumbai. Ethical, transparent, patient-first care. Call or WhatsApp today.",
  alternates: { canonical: "https://drsurabhinikam.com/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e]">

      {/* Hero */}
      <section className="pt-28 pb-14 bg-[#0a1220]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A96E] text-sm font-sans uppercase tracking-widest mb-3 font-semibold">
            Book a Consultation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#FAFAFA] mb-5">
            Let&apos;s Talk About Your Health
          </h1>
          <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto mb-6" />
          <p className="text-[#94a3b8] text-lg font-sans leading-relaxed">
            Reach out to schedule a consultation with Dr. Surabhi Nikam Mirajkar.
            Ethical, transparent, patient-first ENT &amp; Allergy care in Thane.
          </p>
        </div>
      </section>

      {/* Quick contact bar */}
      <div className="bg-[#1a2a45] border-y border-[#243355]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
            <a
              href="tel:+919969561969"
              className="flex items-center gap-2.5 text-sm font-sans text-[#FAFAFA] hover:text-[#C9A96E] transition-colors"
            >
              <Phone size={15} className="text-[#C9A96E]" />
              +91 99695 61969
            </a>
            <span className="hidden sm:block w-px h-4 bg-[#243355]" />
            <a
              href="mailto:nikam.surabhi@gmail.com"
              className="flex items-center gap-2.5 text-sm font-sans text-[#FAFAFA] hover:text-[#C9A96E] transition-colors"
            >
              <Mail size={15} className="text-[#C9A96E]" />
              nikam.surabhi@gmail.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-[#243355]" />
            <a
              href="https://wa.me/919969561969?text=Hi%20Dr.%20Surabhi%2C%20I%27d%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-sans font-semibold hover:opacity-80 transition-opacity"
              style={{ color: "#25D366" }}
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Form + Info Panel */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Unified Info Panel */}
            <div className="lg:col-span-2 flex flex-col gap-0">
              <div className="bg-[#1a2a45] border border-[#243355] rounded-2xl overflow-hidden">

                {/* Header strip */}
                <div className="px-6 pt-6 pb-5 border-b border-[#243355]">
                  <p className="text-[#C9A96E] text-xs font-sans uppercase tracking-widest font-semibold mb-1">
                    Clinic Details
                  </p>
                  <h2 className="font-serif text-xl font-bold text-[#FAFAFA]">
                    Get in Touch
                  </h2>
                </div>

                {/* Contact items */}
                <div className="px-6 py-5 space-y-5 border-b border-[#243355]">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A96E] mb-0.5 font-sans">Address</p>
                      <p className="text-sm text-[#FAFAFA] font-sans leading-relaxed">
                        G4 Akansha C.H.S, Navpada,<br />Thane, Maharashtra
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={16} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A96E] mb-0.5 font-sans">Phone</p>
                      <a
                        href="tel:+919969561969"
                        className="text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans"
                      >
                        +91 99695 61969
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A96E] mb-0.5 font-sans">Email</p>
                      <a
                        href="mailto:nikam.surabhi@gmail.com"
                        className="text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans break-all"
                      >
                        nikam.surabhi@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#C9A96E]/10 border border-[#C9A96E]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-[#C9A96E]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A96E] mb-0.5 font-sans">Clinic Hours</p>
                      <p className="text-sm text-[#FAFAFA] font-sans">Tue – Sat: 5 PM – 8 PM</p>
                      <p className="text-xs text-[#94a3b8] font-sans mt-0.5">Sunday: 11 AM – 1 PM</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="px-6 py-5 border-b border-[#243355]">
                  <p className="text-xs text-[#94a3b8] font-sans mb-3">
                    Prefer to message directly? Reach Dr. Surabhi on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/919969561969?text=Hi%20Dr.%20Surabhi%2C%20I%27d%20like%20to%20book%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all font-sans"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="17" height="17">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Ethics note */}
                <div className="px-6 py-5 bg-[#C9A96E]/5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={17} className="text-[#C9A96E] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
                      <span className="text-[#C9A96E] font-semibold">Ethical Practice Guarantee —</span>{" "}
                      No unnecessary procedures, no referral cuts, no hidden agendas.
                      Every recommendation is made solely in your best interest.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-[#0f1a2e]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-[#C9A96E] text-xs font-sans uppercase tracking-widest font-semibold mb-1">Find Us</p>
            <h2 className="font-serif text-2xl font-bold text-[#FAFAFA]">Clinic Location</h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#243355] shadow-xl shadow-black/30">
            {/* Address overlay bar */}
            <div className="bg-[#1a2a45] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border-b border-[#243355]">
              <div className="flex items-center gap-2.5">
                <MapPin size={16} className="text-[#C9A96E] shrink-0" />
                <span className="text-sm text-[#FAFAFA] font-sans">
                  G4 Akansha C.H.S, Navpada, Thane, Maharashtra
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=G4+Akansha+CHS+Navpada+Thane"
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto text-xs font-semibold text-[#C9A96E] hover:text-[#D4B483] transition-colors font-sans shrink-0"
              >
                Open in Google Maps →
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.4463985305916!2d72.9664114139195!3d19.188622098828635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b98aa0a7a18f%3A0x5bee53b763628b30!2sDr%20Girish%20Mirajkar%20%7C%20Plastic%20Surgeon%20%7C%20Thane!5e1!3m2!1sen!2sin!4v1777452007518!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location — G4 Akansha C.H.S, Navpada, Thane"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
