"use client";

import { useState } from "react";

type Calculator = {
  id: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
  tag: string;
  fields: Field[];
  compute: (vals: Record<string, number>) => Result;
};

type Field = {
  key: string;
  label: string;
  placeholder: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  defaultVal: number;
};

type Result = {
  primary: string;
  primaryLabel: string;
  breakdown: { label: string; value: string; highlight?: boolean }[];
};

const fmt = (n: number) =>
  n >= 1e7
    ? `₹${(n / 1e7).toFixed(2)} Cr`
    : n >= 1e5
    ? `₹${(n / 1e5).toFixed(2)} L`
    : `₹${Math.round(n).toLocaleString("en-IN")}`;

const calculators: Calculator[] = [
  {
    id: "sip",
    label: "SIP",
    tag: "Mutual Funds",
    desc: "Project the future value of your Systematic Investment Plan.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    fields: [
      { key: "monthly", label: "Monthly SIP (₹)", placeholder: "10000", unit: "₹", min: 500, max: 500000, step: 500, defaultVal: 10000 },
      { key: "rate", label: "Expected Return (%)", placeholder: "12", unit: "%", min: 1, max: 30, step: 0.5, defaultVal: 12 },
      { key: "years", label: "Time Period (Years)", placeholder: "10", unit: "yrs", min: 1, max: 40, step: 1, defaultVal: 10 },
    ],
    compute: ({ monthly, rate, years }) => {
      const n = years * 12;
      const r = rate / 100 / 12;
      const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = monthly * n;
      const returns = fv - invested;
      return {
        primary: fmt(fv),
        primaryLabel: "Estimated returns",
        breakdown: [
          { label: "Invested", value: fmt(invested) },
          { label: "Gains", value: fmt(returns), highlight: true },
          { label: "Total Value", value: fmt(fv), highlight: true },
          { label: "Return %", value: `${((returns / invested) * 100).toFixed(1)}%` },
        ],
      };
    },
  },
  {
    id: "emi",
    label: "EMI",
    tag: "Loans",
    desc: "Calculate your monthly loan EMI and total interest payable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    fields: [
      { key: "principal", label: "Loan Amount (₹)", placeholder: "5000000", unit: "₹", min: 10000, max: 50000000, step: 10000, defaultVal: 5000000 },
      { key: "rate", label: "Interest Rate (%)", placeholder: "8.5", unit: "%", min: 1, max: 25, step: 0.1, defaultVal: 8.5 },
      { key: "years", label: "Tenure (Years)", placeholder: "20", unit: "yrs", min: 1, max: 30, step: 1, defaultVal: 20 },
    ],
    compute: ({ principal, rate, years }) => {
      const n = years * 12;
      const r = rate / 100 / 12;
      const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      const interest = total - principal;
      return {
        primary: fmt(emi),
        primaryLabel: "Monthly EMI",
        breakdown: [
          { label: "Principal", value: fmt(principal) },
          { label: "Total Interest", value: fmt(interest) },
          { label: "Total Payable", value: fmt(total), highlight: true },
          { label: "Interest %", value: `${((interest / principal) * 100).toFixed(1)}%` },
        ],
      };
    },
  },
  {
    id: "fd",
    label: "FD",
    tag: "Savings",
    desc: "Calculate maturity amount and interest earned on Fixed Deposits.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    fields: [
      { key: "principal", label: "Deposit Amount (₹)", placeholder: "100000", unit: "₹", min: 1000, max: 10000000, step: 1000, defaultVal: 100000 },
      { key: "rate", label: "Interest Rate (%)", placeholder: "7", unit: "%", min: 1, max: 15, step: 0.1, defaultVal: 7 },
      { key: "years", label: "Tenure (Years)", placeholder: "3", unit: "yrs", min: 1, max: 20, step: 1, defaultVal: 3 },
    ],
    compute: ({ principal, rate, years }) => {
      const maturity = principal * Math.pow(1 + rate / 100 / 4, 4 * years);
      const interest = maturity - principal;
      return {
        primary: fmt(maturity),
        primaryLabel: "Maturity amount",
        breakdown: [
          { label: "Principal", value: fmt(principal) },
          { label: "Interest Earned", value: fmt(interest), highlight: true },
          { label: "Maturity Value", value: fmt(maturity), highlight: true },
          { label: "Effective Return", value: `${((interest / principal / years) * 100).toFixed(2)}% p.a.` },
        ],
      };
    },
  },
  {
    id: "tax",
    label: "Income Tax",
    tag: "Taxation",
    desc: "Estimate your income tax liability under new and old regimes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    fields: [
      { key: "income", label: "Annual Income (₹)", placeholder: "1200000", unit: "₹", min: 0, max: 50000000, step: 10000, defaultVal: 1200000 },
      { key: "deductions", label: "80C Deductions (₹)", placeholder: "150000", unit: "₹", min: 0, max: 150000, step: 5000, defaultVal: 150000 },
      { key: "hra", label: "HRA Exemption (₹)", placeholder: "0", unit: "₹", min: 0, max: 1000000, step: 5000, defaultVal: 0 },
    ],
    compute: ({ income, deductions, hra }) => {
      // Old regime
      const taxableOld = Math.max(0, income - deductions - hra - 50000);
      const calcOld = (ti: number) => {
        if (ti <= 250000) return 0;
        if (ti <= 500000) return (ti - 250000) * 0.05;
        if (ti <= 1000000) return 12500 + (ti - 500000) * 0.2;
        return 112500 + (ti - 1000000) * 0.3;
      };
      const taxOld = calcOld(taxableOld) * 1.04;

      // New regime
      const calcNew = (ti: number) => {
        if (ti <= 300000) return 0;
        if (ti <= 700000) return (ti - 300000) * 0.05;
        if (ti <= 1000000) return 20000 + (ti - 700000) * 0.1;
        if (ti <= 1200000) return 50000 + (ti - 1000000) * 0.15;
        if (ti <= 1500000) return 80000 + (ti - 1200000) * 0.2;
        return 140000 + (ti - 1500000) * 0.3;
      };
      const taxNew = calcNew(Math.max(0, income - 75000)) * 1.04;

      const better = taxNew <= taxOld ? "New" : "Old";
      return {
        primary: fmt(Math.min(taxOld, taxNew)),
        primaryLabel: `Minimum tax (${better} regime)`,
        breakdown: [
          { label: "Tax – Old Regime", value: fmt(taxOld) },
          { label: "Tax – New Regime", value: fmt(taxNew) },
          { label: `You save with ${better}`, value: fmt(Math.abs(taxOld - taxNew)), highlight: true },
          { label: "Best Regime", value: `${better} Regime`, highlight: true },
        ],
      };
    },
  },
];

export default function CalculatorsSection() {
  const [active, setActive] = useState(0);
  const [values, setValues] = useState<Record<string, Record<string, string>>>(
    () =>
      Object.fromEntries(
        calculators.map((c) => [
          c.id,
          Object.fromEntries(c.fields.map((f) => [f.key, String(f.defaultVal)])),
        ])
      )
  );

  const calc = calculators[active];
  const currentVals = values[calc.id];
  const numVals = Object.fromEntries(
    Object.entries(currentVals).map(([k, v]) => [k, parseFloat(v) || 0])
  );
  const result = calc.compute(numVals);

  const setVal = (key: string, val: string) => {
    setValues((prev) => ({
      ...prev,
      [calc.id]: { ...prev[calc.id], [key]: val },
    }));
  };

  return (
    <section
      id="calculators"
      className="relative py-24 overflow-hidden"
      aria-label="Financial calculators"
    >
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(117,251,144,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-[700] uppercase tracking-[0.2em] text-[#75FB90] mb-3">
            Free Tools
          </p>
          <h2
            className="font-[700] text-white tracking-tight mb-4"
            style={{
              fontFamily: "Sora, system-ui, sans-serif",
              fontSize: "clamp(30px, 4.5vw, 52px)",
            }}
          >
            Every calculator you need,
            <br />
            <span className="text-white/50">exactly when you need it.</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-lg mx-auto">
            Live, browser-based math. No sign-up. No data sent anywhere.
            Results you can trust.
          </p>
        </div>

        {/* Calculator tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {calculators.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13.5px] font-[600] transition-all duration-200 ${
                i === active
                  ? "bg-[#75FB90] text-[#0D0F10] shadow-lg shadow-[rgba(117,251,144,0.25)]"
                  : "glass text-white/60 hover:text-white hover:bg-white/[0.07]"
              }`}
              aria-pressed={i === active}
            >
              <span
                className={`${i === active ? "text-[#0D0F10]" : "text-[#75FB90]"}`}
              >
                {c.icon}
              </span>
              {c.label}
            </button>
          ))}
        </div>

        {/* Calculator panel */}
        <div className="glass-strong rounded-3xl p-6 md:p-8 grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block text-[10.5px] font-[700] uppercase tracking-[0.18em] text-white/35 bg-white/[0.05] px-3 py-1 rounded-full mb-2">
                  {calc.tag}
                </span>
                <h3
                  className="text-[18px] font-[700] text-white"
                  style={{ fontFamily: "Sora, system-ui, sans-serif" }}
                >
                  {calc.label} Calculator
                </h3>
                <p className="text-[13px] text-white/50 mt-1 leading-relaxed">
                  {calc.desc}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {calc.fields.map((field) => {
                const val = currentVals[field.key];
                const numVal = parseFloat(val) || 0;
                const pct =
                  ((numVal - field.min) / (field.max - field.min)) * 100;
                return (
                  <div key={field.key}>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor={`${calc.id}-${field.key}`}
                        className="text-[13px] font-[600] text-white/70"
                      >
                        {field.label}
                      </label>
                      <div className="glass rounded-lg px-3 py-1 flex items-center gap-1.5">
                        <span className="text-[11px] text-white/40">
                          {field.unit}
                        </span>
                        <input
                          id={`${calc.id}-${field.key}`}
                          type="number"
                          value={val}
                          min={field.min}
                          max={field.max}
                          step={field.step}
                          onChange={(e) => setVal(field.key, e.target.value)}
                          className="w-24 bg-transparent text-right text-[13px] font-[700] text-white outline-none border-none"
                          aria-label={field.label}
                        />
                      </div>
                    </div>
                    <input
                      type="range"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={numVal}
                      onChange={(e) => setVal(field.key, e.target.value)}
                      className="w-full appearance-none h-1.5 rounded-full outline-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #75FB90 ${pct}%, rgba(255,255,255,0.1) ${pct}%)`,
                      }}
                      aria-label={`Adjust ${field.label}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col justify-center">
            <div
              className="rounded-2xl p-6 text-center mb-6"
              style={{
                background:
                  "linear-gradient(135deg, rgba(117,251,144,0.08) 0%, rgba(79,217,106,0.04) 100%)",
                border: "1px solid rgba(117,251,144,0.15)",
              }}
            >
              <p className="text-[11px] font-[700] uppercase tracking-[0.18em] text-[#75FB90]/70 mb-2">
                {result.primaryLabel}
              </p>
              <p
                className="text-[42px] font-[800] text-white stat-number tracking-tight"
                style={{ fontFamily: "Sora, system-ui, sans-serif" }}
              >
                {result.primary}
              </p>
            </div>

            <div className="glass rounded-2xl divide-y divide-white/[0.06] overflow-hidden">
              {result.breakdown.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="text-[12.5px] text-white/50">{b.label}</span>
                  <span
                    className={`text-[13px] font-[700] stat-number ${
                      b.highlight ? "text-[#75FB90]" : "text-white"
                    }`}
                  >
                    {b.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-[11px] text-white/25 mt-4">
              Indicative values only. Consult a financial advisor for decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
