"use client";

const steps = [
  {
    number: "01",
    title: "Choose your tool",
    desc: "Pick from SIP, EMI, FD, Tax, Retirement or any of our 20+ calculators. No account needed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Enter your numbers",
    desc: "Type in your figures. Every calculation runs live in your browser — nothing leaves your device.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get clear answers",
    desc: "Receive instant results with plain-language breakdowns. Understand the 'why', not just the number.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Save & revisit",
    desc: "Create a free account to save your calculations. Compare scenarios and track how your plan evolves.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#75FB90" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden"
      aria-label="How Fermor works"
    >
      {/* BG */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(117,251,144,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#75FB90] mb-3">
            How it works
          </p>
          <h2
            className="font-[700] text-white tracking-tight mb-4"
            style={{
              fontFamily: "Sora, system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 50px)",
            }}
          >
            Simple by design.
            <br />
            <span className="text-white/40">Powerful by default.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-11 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(117,251,144,0.25) 20%, rgba(117,251,144,0.25) 80%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-[88px] h-[88px] rounded-2xl glass-strong flex items-center justify-center group-hover:border-[rgba(117,251,144,0.3)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(117,251,144,0.1)]">
                    {step.icon}
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#75FB90] text-[#0D0F10] text-[10px] font-[800] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>

                <span className="text-[10px] font-[800] tracking-[0.2em] text-[#75FB90]/50 mb-2">
                  {step.number}
                </span>
                <h3
                  className="text-[16px] font-[700] text-white mb-2"
                  style={{ fontFamily: "Sora, system-ui, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "20+", label: "Free calculators" },
            { value: "0", label: "Data sent to servers" },
            { value: "₹0", label: "Cost, forever" },
            { value: "100%", label: "Browser-based" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center hover:border-[rgba(117,251,144,0.18)] transition-all duration-300"
            >
              <p
                className="text-[32px] font-[800] gradient-text stat-number tracking-tight mb-1"
                style={{ fontFamily: "Sora, system-ui, sans-serif" }}
              >
                {stat.value}
              </p>
              <p className="text-[12px] text-white/45 font-[500]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
