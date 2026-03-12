"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const conditions = [
  { label: "Ear & Hearing", href: "/conditions/ear" },
  { label: "Nose & Sinuses", href: "/conditions/nose-sinus" },
  { label: "Throat & Voice", href: "/conditions/throat-voice" },
  { label: "Allergy & Immunotherapy", href: "/conditions/allergy" },
  { label: "Skull Base Surgery", href: "/conditions/skull-base-surgery" },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0f1a2e]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#243355]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="font-serif text-lg font-bold text-[#C9A96E] group-hover:text-[#D4B483] transition-colors">
            Dr. Surabhi Nikam Mirajkar
          </span>
          <span className="text-[10px] text-[#94a3b8] font-sans uppercase tracking-widest">
            ENT &amp; Allergy Specialist
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            href="/about"
            className="px-4 py-2 text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans"
          >
            About
          </Link>

          {/* Conditions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 px-4 py-2 text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans"
              aria-expanded={dropdownOpen}
            >
              Conditions
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-[#1a2a45] border border-[#243355] rounded-lg shadow-xl shadow-black/30 py-2 z-50">
                {conditions.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#243355] transition-colors font-sans"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-[#FAFAFA] hover:text-[#C9A96E] transition-colors font-sans"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Appointment CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-medium text-[#C9A96E] border border-[#C9A96E] rounded-full hover:bg-[#C9A96E] hover:text-[#0f1a2e] transition-all duration-200 font-sans"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[#FAFAFA] hover:text-[#C9A96E] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f1a2e]/98 backdrop-blur-md border-t border-[#243355]">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#1a2a45] rounded-lg transition-colors font-sans text-sm"
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-3 text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#1a2a45] rounded-lg transition-colors font-sans text-sm"
              >
                Conditions
                <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {conditions.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => { setMobileOpen(false); setDropdownOpen(false); }}
                      className="block px-3 py-2 text-[#94a3b8] hover:text-[#C9A96E] text-sm rounded-lg hover:bg-[#1a2a45] transition-colors font-sans"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-[#FAFAFA] hover:text-[#C9A96E] hover:bg-[#1a2a45] rounded-lg transition-colors font-sans text-sm"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-[#243355]">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-3 text-sm font-medium text-[#C9A96E] border border-[#C9A96E] rounded-full hover:bg-[#C9A96E] hover:text-[#0f1a2e] transition-all font-sans"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
