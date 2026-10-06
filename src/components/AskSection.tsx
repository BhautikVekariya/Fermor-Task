"use client";

import { useState, useEffect, useRef } from "react";

const questions = [
  {
    q: "How much will my ₹10,000 SIP grow in 15 years?",
    a: "At 12% expected return, your ₹18L invested grows to approximately ₹50.4L — a gain of ₹32.4L (180%).",
    tag: "SIP",
  },
  {
    q: "Should I choose new or old tax regime?",
    a: "With ₹12L income and ₹1.5L in 80C deductions, the new regime saves you around ₹23,400 this year.",
    tag: "Tax",
  },
  {
    q: "What's the EMI on a ₹50L home loan at 8.5%?",
    a: "For a 20-year term at 8.5%, your monthly EMI is ₹43,391. Total interest payable: ₹54.1L.",
    tag: "EMI",
  },
  {
    q: "Is FD better than SIP for 5 years?",
    a: "At 7% FD vs 12% SIP: ₹1L in FD gives ₹1.41L. The same in SIP could give ₹1.76L — but SIP carries market risk.",
    tag: "Compare",
  },
];

export default function AskSection() {
  const [activeQ, setActiveQ] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const answer = questions[activeQ].a;
    setDisplayed("");
    setIsTyping(true);
    let i = 0;
    const type = () => {
      if (i <= answer.length) {
        setDisplayed(answer.slice(0, i));
        i++;
        timerRef.current = setTimeout(type, 18);
      } else {
        setIsTyping(false);
      }
    };
    timerRef.current = setTimeout(type, 200);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeQ]);

  return (
    <section
      id="ask"
      className="relative py-24 overflow-hidden"
      aria-label="Ask Fermor section"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(117,251,144,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#75FB90] mb-3">
              AI-Powered Answers
            </p>
            <h2
              className="font-[700] text-white tracking-tight mb-5"
              style={{
                fontFamily: "Sora, system-ui, sans-serif",
                fontSize: "clamp(28px, 4vw, 48px)",
              }}
            >
              Ask anything.
              <br />
              <span className="text-white/40">Get a real answer.</span>
            </h2>
            <p className="text-white/55 text-[16px] leading-relaxed mb-8">
              Type a plain-language question about your money. Fermor gives you
              clear, grounded answers — not generic advice, not a redirect to
              call your bank.
            </p>

            {/* Feature list */}
            <div className="space-y-3.5">
              {[
                "Personalized to your numbers",
                "Cites actual Indian tax slabs & rates",
                "No jargon, no paywalls",
                "Works without an account",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[rgba(117,251,144,0.15)] flex items-center justify-center flex-shrink-0">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="#75FB90"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] text-white/65">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — interactive demo */}
          <div>
            <div className="glass-strong rounded-3xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[rgba(117,251,144,0.15)] flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M21 1.5C22.8 11.8 30.2 19.2 40.5 21"
                      stroke="#75FB90"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 2L14.5 9L22 9L16 13.5L18.5 20.5L12 16.5L5.5 20.5L8 13.5L2 9L9.5 9L12 2Z"
                      fill="#75FB90"
                      stroke="#75FB90"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[13px] font-[700] text-white">
                  Ask Fermor
                </span>
                <span className="ml-auto text-[10.5px] font-[600] text-[#75FB90] bg-[rgba(117,251,144,0.1)] px-2.5 py-0.5 rounded-full">
                  Live
                </span>
              </div>

              {/* Question chips */}
              <div className="p-4 flex flex-wrap gap-2">
                {questions.map((qItem, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveQ(i)}
                    className={`text-[11.5px] font-[600] px-3 py-1.5 rounded-full transition-all duration-200 ${
                      i === activeQ
                        ? "bg-[#75FB90] text-[#0D0F10]"
                        : "glass text-white/60 hover:text-white"
                    }`}
                    aria-pressed={i === activeQ}
                  >
                    {qItem.tag}
                  </button>
                ))}
              </div>

              {/* Question */}
              <div className="px-5 pb-3">
                <div className="glass rounded-2xl p-4 mb-4">
                  <p className="text-[13.5px] font-[500] text-white/80 leading-relaxed">
                    <span className="text-white/30 mr-2">You:</span>
                    {questions[activeQ].q}
                  </p>
                </div>

                {/* Answer */}
                <div
                  className="rounded-2xl p-4 min-h-[80px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(117,251,144,0.06) 0%, rgba(79,217,106,0.03) 100%)",
                    border: "1px solid rgba(117,251,144,0.12)",
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-[10.5px] font-[700] uppercase tracking-widest text-[#75FB90]/70">
                      Fermor
                    </span>
                    {isTyping && (
                      <span className="flex gap-0.5">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="w-1 h-1 rounded-full bg-[#75FB90]"
                            style={{
                              animation: `pulse 1s ease-in-out ${i * 200}ms infinite`,
                            }}
                          />
                        ))}
                      </span>
                    )}
                  </div>
                  <p className="text-[13.5px] text-white/80 leading-relaxed">
                    {displayed}
                    {isTyping && (
                      <span className="inline-block w-0.5 h-3.5 bg-[#75FB90] ml-0.5 animate-pulse" />
                    )}
                  </p>
                </div>

                {/* Input bar */}
                <div className="mt-4 glass rounded-2xl flex items-center gap-3 px-4 py-3">
                  <input
                    type="text"
                    placeholder="Ask your question..."
                    className="flex-1 bg-transparent text-[13px] text-white placeholder:text-white/25 outline-none border-none"
                    aria-label="Ask Fermor a question"
                    readOnly
                  />
                  <button
                    className="w-8 h-8 rounded-xl bg-[#75FB90] flex items-center justify-center flex-shrink-0 hover:bg-[#8affa3] transition-colors"
                    aria-label="Send question"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0D0F10"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
