import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fermor — Smart financial decisions for India",
  description:
    "Clarity for every financial decision. Free tools, insights and calculators that help you understand, plan and grow your money — built for India.",
  keywords: [
    "SIP calculator",
    "EMI calculator",
    "FD calculator",
    "income tax",
    "personal finance India",
    "investment planning",
  ],
  openGraph: {
    title: "Fermor — Smart financial decisions for India",
    description:
      "Free SIP, EMI, FD, tax, and retirement calculators built for India. No sign-up, no ads, just clear math.",
    type: "website",
    url: "https://fermor.in",
  },
  twitter: {
    card: "summary_large_image",
    site: "@fermor_in",
    title: "Fermor: Finance Smarter",
    description:
      "Free calculators, comparisons, and clear math for every money move in India.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
