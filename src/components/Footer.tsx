"use client";

const footerLinks = {
  Products: [
    { label: "SIP Calculator", href: "#calculators" },
    { label: "EMI Calculator", href: "#calculators" },
    { label: "FD Calculator", href: "#calculators" },
    { label: "Income Tax", href: "#calculators" },
    { label: "Retirement", href: "#calculators" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Disclaimer", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden"
      aria-label="Site footer"
    >
      {/* Faint background glow */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl"
        style={{ background: "rgba(117,251,144,0.03)" }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#75FB90] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
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
            </div>
            <p className="text-[13.5px] text-white/45 leading-relaxed max-w-[260px] mb-5">
              Clarity for every financial decision. Free tools built for India,
              with your privacy at the centre.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              <a
                href="https://twitter.com/fermor_in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label="Follow Fermor on Twitter"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[11px] font-[800] uppercase tracking-[0.18em] text-white/30 mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13.5px] text-white/50 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30 text-center md:text-left">
            © {new Date().getFullYear()} Fermor. All rights reserved. Built for
            India.
          </p>
          <p className="text-[12px] text-white/25 text-center">
            Calculations are indicative only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
