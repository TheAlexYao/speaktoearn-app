
import { HeroSection } from "@/components/HeroSection";
import { HighDemandSection } from "@/components/HighDemandSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BuiltOnCeloSection } from "@/components/BuiltOnCeloSection";
import { CommunityImpactSection } from "@/components/CommunityImpactSection";
import { RecentEarningsSection } from "@/components/RecentEarningsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#4F46E5] via-[#7C3AED] to-[#8B5CF6]">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <BuiltOnCeloSection />
      <HighDemandSection />
      <CommunityImpactSection />
      <RecentEarningsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
