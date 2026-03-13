import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const conditionLinks = [
  { label: "Ear & Hearing", href: "/conditions/ear" },
  { label: "Nose & Sinuses", href: "/conditions/nose-sinus" },
  { label: "Throat & Voice", href: "/conditions/throat-voice" },
  { label: "Allergy & Immunotherapy", href: "/conditions/allergy" },
  { label: "Skull Base Surgery", href: "/conditions/skull-base-surgery" },
];

const quickLinks = [
  { label: "About Dr. Surabhi", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-[#1a2a45]/10 flex items-center justify-center hover:bg-[#1a2a45]/20 transition-colors"
              >
                <Youtube size={16} />
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
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <Phone size={16} className="shrink-0 text-[#C9A96E]" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#94a3b8]">
                <Mail size={16} className="shrink-0 text-[#C9A96E]" />
                <a
                  href="mailto:dr.surabhi@drsurabhinikam.com"
                  className="hover:text-white transition-colors break-all"
                >
                  dr.surabhi@drsurabhinikam.com
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
