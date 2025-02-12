
import { HeroSection } from "@/components/HeroSection";
import { HighDemandSection } from "@/components/HighDemandSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CommunityImpactSection } from "@/components/CommunityImpactSection";
import { RecentEarningsSection } from "@/components/RecentEarningsSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <HighDemandSection />
      <CommunityImpactSection />
      <RecentEarningsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
