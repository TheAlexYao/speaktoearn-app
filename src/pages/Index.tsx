
import { HeroSection } from "@/components/HeroSection";
import { HighDemandSection } from "@/components/HighDemandSection";
import { StatsSection } from "@/components/StatsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <HighDemandSection />
    </main>
  );
};

export default Index;
