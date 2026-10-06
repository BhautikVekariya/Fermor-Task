import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import CalculatorsSection from "@/components/CalculatorsSection";
import AskSection from "@/components/AskSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0D0F10]">
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <CalculatorsSection />
        <AskSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  );
}
