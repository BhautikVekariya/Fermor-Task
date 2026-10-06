"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  {
    label: "Products",
    children: [
      { label: "SIP Calculator", href: "#calculators" },
      { label: "EMI Calculator", href: "#calculators" },
      { label: "FD Calculator", href: "#calculators" },
      { label: "Tax Calculator", href: "#calculators" },
    ],
  },
  { label: "Calculators", href: "#calculators" },
  { label: "Resources", href: "#how-it-works" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <nav
          className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "bg-[rgba(13,15,16,0.85)] backdrop-blur-2xl border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 mr-2"
            aria-label="Fermor home"
          >
            <div className="w-7 h-7 rounded-lg bg-[#75FB90] flex items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 1C8 1 13 5 13 9C13 11.7614 10.7614 14 8 14C5.23858 14 3 11.7614 3 9C3 5 8 1 8 1Z"
                  fill="#0D0F10"
                />
                <circle cx="8" cy="9" r="2.5" fill="#75FB90" />
              </svg>
            </div>
            <span
              className="text-[18px] font-[800] tracking-tight text-white"
              style={{ fontFamily: "Sora, system-ui, sans-serif" }}
            >
              Fermor
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1 flex-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                    className="flex items-center gap-1 px-3.5 py-2 rounded-xl text-[14px] font-[500] text-white/70 hover:text-white hover:bg-white/06 transition-all duration-150"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-200 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <path
                        d="M2 4L5 7L8 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass-strong rounded-xl p-1.5 shadow-2xl">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-3.5 py-2.5 rounded-lg text-[13.5px] font-[500] text-white/80 hover:text-white hover:bg-[rgba(117,251,144,0.12)] transition-all duration-150"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-2 rounded-xl text-[14px] font-[500] text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <a
              href="#"
              className="btn-outline px-4 py-2 text-[13.5px]"
            >
              Log in
            </a>
            <a
              href="#waitlist"
              className="btn-green px-4 py-2 text-[13.5px]"
            >
              Get started
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden ml-auto p-2 rounded-xl border border-white/10 text-white hover:bg-white/06 transition-all"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <path d="M18 6L6 18" />
                  <path d="M6 6L18 18" />
                </>
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href ?? "#"}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-[500] text-white/80 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/08 mt-2 pt-3 flex gap-2">
                <a
                  href="#"
                  className="btn-outline flex-1 py-2.5 text-[14px] text-center"
                >
                  Log in
                </a>
                <a
                  href="#waitlist"
                  className="btn-green flex-1 py-2.5 text-[14px] text-center"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
