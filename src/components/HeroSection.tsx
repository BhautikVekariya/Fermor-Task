"use client";

import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12"
      aria-label="Hero section"
    >
      {/* Background glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="glow-orb absolute"
          style={{
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle, rgba(117,251,144,0.12) 0%, transparent 70%)",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <div
          className="glow-orb absolute"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(79,217,106,0.08) 0%, transparent 70%)",
            bottom: "5%",
            right: "10%",
            animationDelay: "2s",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[rgba(117,251,144,0.2)] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#75FB90] animate-pulse" />
          <span className="text-[12.5px] font-[600] text-[#75FB90] tracking-wide uppercase">
            Now in early access · Built for India
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up delay-100 font-[700] text-white leading-[1.05] tracking-[-0.035em] mb-6"
          style={{
            fontFamily: "Sora, system-ui, sans-serif",
            fontSize: "clamp(40px, 6.5vw, 80px)",
          }}
        >
          Your money,{" "}
          <span className="gradient-text">finally clear.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up delay-200 text-white/60 leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontSize: "clamp(16px, 2.2vw, 20px)" }}
        >
          Fermor gives you free tools, plain-language answers and honest
          numbers to make every financial decision with confidence — no jargon,
          no paywalls.
        </p>

        {/* Email waitlist form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="animate-fade-up delay-300 max-w-[480px] mx-auto mb-4"
            noValidate
            id="hero-waitlist-form"
          >
            <div className="flex items-center gap-2 glass-strong rounded-full p-1.5 shadow-xl">
              <input
                id="hero-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="you@example.com"
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-[14.5px] text-white placeholder:text-white/30 px-4 py-2"
                aria-label="Email address"
                aria-describedby={error ? "hero-email-error" : undefined}
              />
              <button
                type="submit"
                className="btn-green px-5 py-2.5 text-[13.5px] flex-shrink-0"
              >
                Join waiting list
              </button>
            </div>
            {error && (
              <p
                id="hero-email-error"
                role="alert"
                className="mt-2 text-[12.5px] text-red-400 text-left px-2"
              >
                {error}
              </p>
            )}
          </form>
        ) : (
          <div className="animate-fade-up max-w-[480px] mx-auto mb-4 glass-strong rounded-2xl p-4 border border-[rgba(117,251,144,0.3)]">
            <p className="text-[15px] font-[600] text-[#75FB90]">
              🎉 You&apos;re on the list!
            </p>
            <p className="text-[13px] text-white/60 mt-1">
              We&apos;ll notify you when Fermor is ready. Thank you!
            </p>
          </div>
        )}

        <p className="animate-fade-up delay-400 text-[12px] text-white/35">
          Free forever · No credit card · Your data stays private
        </p>

        {/* Dashboard preview */}
        <div className="animate-fade-up delay-500 mt-16 relative">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Glow behind card */}
      <div
        aria-hidden="true"
        className="absolute inset-x-16 -bottom-8 h-16 blur-3xl rounded-full"
        style={{ background: "rgba(117,251,144,0.18)" }}
      />

      <div className="glass-strong rounded-3xl p-1.5 shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-4">
            <div className="glass rounded-md h-5 flex items-center px-3 max-w-[220px] mx-auto">
              <span className="text-[10px] text-white/30">fermor.in</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Portfolio card */}
          <div className="glass rounded-2xl p-4 col-span-1">
            <p className="text-[10px] font-[700] uppercase tracking-widest text-white/40 mb-2">
              Portfolio Value
            </p>
            <p className="text-[28px] font-[700] text-white tracking-tight stat-number">
              ₹12,48,350
            </p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[11px] font-[600] text-[#75FB90]">
                ▲ 14.2%
              </span>
              <span className="text-[11px] text-white/40">this year</span>
            </div>
            <MiniChart />
          </div>

          {/* SIP card */}
          <div className="glass rounded-2xl p-4">
            <p className="text-[10px] font-[700] uppercase tracking-widest text-white/40 mb-2">
              Monthly SIP
            </p>
            <p className="text-[28px] font-[700] text-white tracking-tight stat-number">
              ₹10,000
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50">Invested</span>
                <span className="text-white font-[600]">₹3.60 L</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50">Returns</span>
                <span className="text-[#75FB90] font-[600]">₹1.42 L</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-white/50">Total</span>
                <span className="text-white font-[700]">₹5.02 L</span>
              </div>
            </div>
          </div>

          {/* EMI card */}
          <div className="glass rounded-2xl p-4">
            <p className="text-[10px] font-[700] uppercase tracking-widest text-white/40 mb-2">
              Home Loan EMI
            </p>
            <p className="text-[28px] font-[700] text-white tracking-tight stat-number">
              ₹42,600
            </p>
            <p className="text-[11px] text-white/40 mt-1">per month · 20 yr</p>
            <div className="mt-3">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "38%",
                    background:
                      "linear-gradient(90deg, #75FB90, #4fd96a)",
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] mt-1">
                <span className="text-white/40">8 of 240 EMIs paid</span>
                <span className="text-[#75FB90] font-[600]">3.3%</span>
              </div>
            </div>
          </div>

          {/* Ask bar */}
          <div className="col-span-1 sm:col-span-3 glass rounded-2xl p-3.5 flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-[rgba(117,251,144,0.15)] flex items-center justify-center flex-shrink-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#75FB90"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
            <span className="text-[13px] text-white/40 flex-1">
              Ask anything about your money...
            </span>
            <span className="text-[11px] font-[700] text-[#75FB90] bg-[rgba(117,251,144,0.1)] px-3 py-1 rounded-full">
              Ask Fermor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniChart() {
  const points = [30, 45, 38, 55, 48, 62, 58, 72, 65, 80, 75, 88];
  const w = 180;
  const h = 48;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const xs = points.map((_, i) => (i / (points.length - 1)) * w);
  const ys = points.map((p) => h - ((p - min) / range) * h * 0.9 - h * 0.05);
  const d = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const area = `${d} L${w},${h} L0,${h} Z`;

  return (
    <div className="mt-3 overflow-hidden rounded-lg">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" aria-hidden="true">
        <defs>
          <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#75FB90" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#75FB90" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#chart-grad)" />
        <path
          d={d}
          fill="none"
          stroke="#75FB90"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill="#75FB90" />
      </svg>
    </div>
  );
}
