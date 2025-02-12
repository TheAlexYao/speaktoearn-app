
import { HeroSection } from "@/components/HeroSection";
import { HighDemandSection } from "@/components/HighDemandSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <HighDemandSection />
    </main>
  );
};

export default Index;
