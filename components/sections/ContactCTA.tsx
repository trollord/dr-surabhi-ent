import Link from "next/link";
import { Phone, Clock, MapPin } from "lucide-react";

export default function ContactCTA() {
  const whatsappMsg = encodeURIComponent("Hi Dr. Surabhi, I'd like to book a consultation.");

  return (
    <section className="py-20 bg-[#0f1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#C9A96E] mb-2">
            Take the First Step
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Feel Better?
          </h2>
          <p className="text-[#94a3b8] max-w-xl mx-auto mb-8">
            Book a consultation with Dr. Surabhi Nikam Mirajkar and experience ethical,
            patient-centered ENT and allergy care in Mumbai.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[#C9A96E] text-white font-semibold text-base hover:bg-[#D4B483] transition-colors shadow-lg"
            >
              Book Consultation
            </Link>
            <a
              href={`https://wa.me/919876543210?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-[#1a2a45] hover:text-[#C9A96E] transition-colors"
            >
              {/* WhatsApp icon inline */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.664 4.802 1.82 6.807L2 30l7.395-1.79A13.934 13.934 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.39 1.06 1.1-4.27-.27-.44A11.44 11.44 0 014.5 16.003C4.5 9.66 9.66 4.5 16.003 4.5S27.5 9.66 27.5 16.003 22.343 27.5 16.003 27.5zm6.27-8.47c-.344-.172-2.036-1.004-2.352-1.118-.317-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.702.154-.153.344-.4.517-.6.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.602-.086-.172-.777-1.876-1.065-2.57-.28-.673-.565-.582-.777-.593l-.66-.012c-.23 0-.603.086-.918.43-.317.344-1.205 1.177-1.205 2.87s1.234 3.328 1.406 3.557c.172.23 2.43 3.71 5.888 5.202.823.355 1.465.568 1.965.727.826.263 1.578.226 2.172.137.663-.1 2.036-.832 2.322-1.635.287-.803.287-1.492.2-1.635-.086-.144-.316-.23-.66-.4z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Info strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-10">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1a2a45]/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[#C9A96E]" />
            </div>
            <div>
              <p className="text-xs text-[#C9A96E] uppercase font-semibold mb-1">Phone</p>
              <a href="tel:+919876543210" className="text-white text-sm hover:text-[#C9A96E] transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1a2a45]/10 flex items-center justify-center shrink-0">
              <Clock size={18} className="text-[#C9A96E]" />
            </div>
            <div>
              <p className="text-xs text-[#C9A96E] uppercase font-semibold mb-1">Clinic Hours</p>
              <p className="text-white text-sm">Mon – Sat: 10 AM – 7 PM</p>
              <p className="text-[#94a3b8] text-xs">Sunday: By appointment only</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1a2a45]/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-[#C9A96E]" />
            </div>
            <div>
              <p className="text-xs text-[#C9A96E] uppercase font-semibold mb-1">Location</p>
              <p className="text-white text-sm">Mumbai, Maharashtra</p>
              <p className="text-[#94a3b8] text-xs">India — 400 0XX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
