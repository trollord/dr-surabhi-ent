import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

const conditionLinks = [
  { label: "Ear & Hearing", href: "/conditions/ear" },
  { label: "Nose & Sinuses", href: "/conditions/nose-sinus" },
  { label: "Throat & Voice", href: "/conditions/throat-voice" },
  { label: "Allergy & Immunotherapy", href: "/conditions/allergy" },
  { label: "Skull Base Surgery", href: "/conditions/skull-base-surgery" },
];

const quickLinks = [
  { label: "About Dr. Surabhi", href: "/about" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Book Consultation", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-tight mb-4">
              <span className="font-serif text-xl font-bold text-white">
                Dr. Surabhi Nikam Mirajkar
              </span>
              <span className="text-sm text-[#C9A96E] mt-0.5">ENT &amp; Allergy Specialist</span>
            </Link>
            <p className="text-sm text-[#94a3b8] leading-relaxed mt-3">
              Ethical, patient-centered ENT and allergy care rooted in advanced training, empathy,
              and a commitment to improving your quality of life — not just treating symptoms.
            </p>
            <p className="text-xs text-[#C9A96E] mt-4 font-medium italic">
              "Healthcare is about improving quality of life."
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/sense_surgeon?igsh=NGhqdWZzc2I0MzVl&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://share.google/s3WzJrn1oS2XUpZKT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://wa.me/919769783391"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.664 4.802 1.82 6.807L2 30l7.395-1.79A13.934 13.934 0 0016.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.5a11.44 11.44 0 01-5.84-1.6l-.42-.25-4.39 1.06 1.1-4.27-.27-.44A11.44 11.44 0 014.5 16.003C4.5 9.66 9.66 4.5 16.003 4.5S27.5 9.66 27.5 16.003 22.343 27.5 16.003 27.5zm6.27-8.47c-.344-.172-2.036-1.004-2.352-1.118-.317-.115-.547-.172-.777.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.913-1.712-2.04-1.912-2.384-.2-.344-.021-.53.15-.702.154-.153.344-.4.517-.6.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.602-.086-.172-.777-1.876-1.065-2.57-.28-.673-.565-.582-.777-.593l-.66-.012c-.23 0-.603.086-.918.43-.317.344-1.205 1.177-1.205 2.87s1.234 3.328 1.406 3.557c.172.23 2.43 3.71 5.888 5.202.823.355 1.465.568 1.965.727.826.263 1.578.226 2.172.137.663-.1 2.036-.832 2.322-1.635.287-.803.287-1.492.2-1.635-.086-.144-.316-.23-.66-.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Conditions */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Conditions Treated
            </h3>
            <ul className="space-y-2.5">
              {conditionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#94a3b8]">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A96E]" />
                <a href="https://maps.google.com/?q=G4+Akansha+CHS+Navpada+Thane+Maharashtra" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  G4 Akansha C.H.S, Navpada,<br />Thane, Maharashtra
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <Phone size={16} className="shrink-0 text-[#C9A96E]" />
                <a href="tel:+919769783391" className="hover:text-white transition-colors">
                  +91 97697 83391
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <Mail size={16} className="shrink-0 text-[#C9A96E]" />
                <a
                  href="mailto:nikam.surabhi@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  nikam.surabhi@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-full bg-[#C9A96E] text-white text-sm font-medium hover:bg-[#D4B483] transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#C9A96E]">
            &copy; {new Date().getFullYear()} Dr. Surabhi Nikam Mirajkar. All rights reserved.
          </p>
          <p className="text-xs text-[#C9A96E]">
            ENT Specialist &amp; Allergy Doctor &mdash; Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}
