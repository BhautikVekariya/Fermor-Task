"use client";

const testimonials = [
  {
    name: "Priya S.",
    role: "Software Engineer, Bangalore",
    avatar: "PS",
    color: "#7C3AED",
    text: "I used Fermor's SIP calculator to finally understand why my mutual fund agent kept pushing for a longer tenure. The breakdown made it click instantly — Fermor shows you the math, not just the answer.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "Product Manager, Mumbai",
    avatar: "RM",
    color: "#0891B2",
    text: "The income tax calculator saved me hours of confusion. I could see exactly why the new regime was better for my salary structure. No CA needed for that basic decision.",
    rating: 5,
  },
  {
    name: "Divya K.",
    role: "Freelancer, Chennai",
    avatar: "DK",
    color: "#059669",
    text: "As a freelancer, I was always guessing my advance tax. Fermor's calculator walks you through each step. And the privacy thing is real — I checked the network tab, nothing sent.",
    rating: 5,
  },
  {
    name: "Arjun T.",
    role: "Financial Analyst, Hyderabad",
    avatar: "AT",
    color: "#D97706",
    text: "I recommend Fermor to everyone who asks me about personal finance. It's rare to find tools this clean and this honest. No upselling, no hidden agenda — just clear math.",
    rating: 5,
  },
  {
    name: "Neha R.",
    role: "Teacher, Pune",
    avatar: "NR",
    color: "#DB2777",
    text: "I was never good with numbers. Fermor's plain-language explanations made me feel confident about my FD choice. It's genuinely built for people who just want to understand.",
    rating: 5,
  },
  {
    name: "Vikram P.",
    role: "Startup Founder, Delhi",
    avatar: "VP",
    color: "#7C3AED",
    text: "I've tried every finance app. Most want your bank login or push products. Fermor just... helps. The EMI comparison tool alone is worth bookmarking.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="#75FB90"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
      aria-label="Testimonials from Fermor users"
    >
      {/* BG gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(117,251,144,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#75FB90] mb-3">
            Real people, real decisions
          </p>
          <h2
            className="font-[700] text-white tracking-tight"
            style={{
              fontFamily: "Sora, system-ui, sans-serif",
              fontSize: "clamp(28px, 4vw, 50px)",
            }}
          >
            Trusted by people who{" "}
            <span className="text-white/40">actually think about money.</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-5 flex flex-col gap-4 hover:border-[rgba(117,251,144,0.18)] transition-all duration-300 ${
                i === 1 || i === 4 ? "lg:mt-8" : ""
              }`}
            >
              <Stars count={t.rating} />
              <p className="text-[14px] text-white/70 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/[0.06]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-[800] text-white flex-shrink-0"
                  style={{ background: t.color }}
                  aria-label={t.name}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[13px] font-[700] text-white">{t.name}</p>
                  <p className="text-[11.5px] text-white/40">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom social proof */}
        <div className="mt-12 text-center">
          <p className="text-[13px] text-white/35">
            Join thousands of Indians making smarter financial decisions every day.
          </p>
        </div>
      </div>
    </section>
  );
}
