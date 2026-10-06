"use client";

import { useState } from "react";

export default function WaitlistSection() {
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
      id="waitlist"
      className="relative py-24 overflow-hidden"
      aria-label="Join the Fermor waitlist"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #0f1a12 0%, #0a1409 40%, #0D0F10 100%)",
            border: "1px solid rgba(117,251,144,0.14)",
          }}
        >
          {/* BG glows */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl"
              style={{ background: "rgba(117,251,144,0.08)" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full blur-3xl"
              style={{ background: "rgba(117,251,144,0.05)" }}
            />
            {/* Grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(117,251,144,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(117,251,144,0.04) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(117,251,144,0.25)] bg-[rgba(117,251,144,0.06)] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75FB90] animate-pulse" />
              <span className="text-[11.5px] font-[700] text-[#75FB90] tracking-wider uppercase">
                Early access · Limited spots
              </span>
            </div>

            <h2
              className="font-[700] text-white tracking-tight mb-5"
              style={{
                fontFamily: "Sora, system-ui, sans-serif",
                fontSize: "clamp(30px, 5vw, 60px)",
                lineHeight: 1.05,
              }}
            >
              The full platform
              <br />
              is <span className="gradient-text">coming soon.</span>
            </h2>

            <p className="text-white/55 text-[17px] leading-relaxed mb-10 max-w-xl mx-auto">
              Fermor is building a complete financial platform — portfolio
              tracking, personalized insights, and smarter decisions. Be the
              first to know.
            </p>

            {/* Features coming */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Portfolio tracking",
                "Tax optimization",
                "Goal planning",
                "AI advisor",
                "Retirement calculator",
              ].map((feat) => (
                <span
                  key={feat}
                  className="glass text-[12.5px] text-white/60 font-[500] px-3.5 py-1.5 rounded-full"
                >
                  {feat}
                </span>
              ))}
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="max-w-[480px] mx-auto"
                noValidate
                id="cta-waitlist-form"
              >
                <div
                  className="flex items-center gap-2 rounded-full p-1.5 shadow-2xl"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <input
                    id="cta-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    className="flex-1 min-w-0 bg-transparent border-none outline-none text-[14.5px] text-white placeholder:text-white/25 px-4 py-2"
                    aria-label="Email address for waitlist"
                    aria-describedby={error ? "cta-email-error" : undefined}
                  />
                  <button
                    type="submit"
                    className="btn-green px-6 py-2.5 text-[13.5px] flex-shrink-0"
                  >
                    Notify me
                  </button>
                </div>
                {error && (
                  <p
                    id="cta-email-error"
                    role="alert"
                    className="mt-2 text-[12.5px] text-red-400 text-left px-2"
                  >
                    {error}
                  </p>
                )}
                <p className="mt-4 text-[12px] text-white/30">
                  No spam. Unsubscribe any time.
                </p>
              </form>
            ) : (
              <div className="max-w-sm mx-auto glass-strong rounded-2xl p-6 border border-[rgba(117,251,144,0.3)]">
                <div className="text-3xl mb-3">🎉</div>
                <p className="text-[16px] font-[700] text-[#75FB90] mb-1">
                  You&apos;re on the list!
                </p>
                <p className="text-[13px] text-white/55">
                  We&apos;ll send you an email when early access opens. Thank you for
                  believing in clearer finance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
