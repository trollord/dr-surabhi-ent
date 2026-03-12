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
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-bold text-[#0c4a6e]">
            Dr. Surabhi Nikam Mirajkar
          </span>
          <span className="text-xs text-[#64748b] font-sans tracking-wide">
            ENT &amp; Allergy Specialist
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-[#1e293b] hover:text-[#0c4a6e] transition-colors"
          >
            About
          </Link>

          {/* Conditions dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-[#1e293b] hover:text-[#0c4a6e] transition-colors"
              aria-expanded={dropdownOpen}
            >
              Conditions
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#e2e8f0] py-2 z-50">
                {conditions.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#1e293b] hover:bg-[#f0f7ff] hover:text-[#0c4a6e] transition-colors"
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
              className="text-sm font-medium text-[#1e293b] hover:text-[#0c4a6e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Book Appointment CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#0c4a6e] text-white text-sm font-medium hover:bg-[#0369a1] transition-colors shadow-sm"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg text-[#1e293b] hover:bg-[#f0f7ff] transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#1e293b] hover:bg-[#f0f7ff] hover:text-[#0c4a6e]"
            >
              About
            </Link>

            <div>
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#1e293b] hover:bg-[#f0f7ff] hover:text-[#0c4a6e]"
              >
                Conditions
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {dropdownOpen && (
                <div className="ml-4 border-l-2 border-[#e2e8f0] pl-3 mt-1 flex flex-col gap-1">
                  {conditions.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setDropdownOpen(false);
                      }}
                      className="px-3 py-2 rounded-lg text-sm text-[#64748b] hover:text-[#0c4a6e] hover:bg-[#f0f7ff]"
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
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#1e293b] hover:bg-[#f0f7ff] hover:text-[#0c4a6e]"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-[#e2e8f0] mt-1">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-2.5 rounded-full bg-[#0c4a6e] text-white text-sm font-medium hover:bg-[#0369a1] transition-colors"
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
