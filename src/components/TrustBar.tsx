"use client";

const logos = [
  { name: "NSE" },
  { name: "BSE" },
  { name: "SEBI Compliant" },
  { name: "RBI Guidelines" },
  { name: "ISO 27001" },
  { name: "Privacy First" },
];

const trustPoints = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Browser-only math",
    desc: "Your numbers never leave your device.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    label: "No account needed",
    desc: "Use every tool freely — sign up only to save.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    label: "100% free",
    desc: "No paywalls, no premium tiers, ever.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: "Updated daily",
    desc: "Rates, slabs & rules reflect current law.",
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative py-16 overflow-hidden"
      aria-label="Trust indicators"
    >
      {/* Top divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-white/10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Trust points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustPoints.map((pt) => (
            <div
              key={pt.label}
              className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-[rgba(117,251,144,0.2)] transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-xl bg-[rgba(117,251,144,0.08)] flex items-center justify-center group-hover:bg-[rgba(117,251,144,0.15)] transition-colors">
                {pt.icon}
              </div>
              <div>
                <p className="text-[13.5px] font-[700] text-white mb-0.5">
                  {pt.label}
                </p>
                <p className="text-[12px] text-white/50 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling marquee */}
        <div
          className="mt-10 overflow-hidden"
          aria-label="Trusted by India's financial frameworks"
        >
          <p className="text-center text-[11px] font-[700] uppercase tracking-[0.15em] text-white/25 mb-4">
            Built around India&apos;s financial framework
          </p>
          <div className="relative">
            <div className="flex animate-ticker gap-12 whitespace-nowrap">
              {[...logos, ...logos].map((l, i) => (
                <div
                  key={`${l.name}-${i}`}
                  className="flex items-center gap-2 text-white/30 flex-shrink-0"
                  aria-hidden={i >= logos.length}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-[12px] font-[600] tracking-wide">
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
