import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffdf6] text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <div id="press" aria-hidden className="sr-only" />
        <SocialProofSection />
        <ProblemSolutionSection />
        <BenefitsSection />
        <HowItWorksSection />
        <div id="waitlist" aria-hidden className="sr-only" />
        <div id="login" aria-hidden className="sr-only" />
      </main>
    </div>
  );
}
