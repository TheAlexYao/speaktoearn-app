
import { GradientContainer } from "@/components/GradientContainer";
import { BottomNav } from "@/components/BottomNav";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { LanguageExpertise } from "@/components/profile/LanguageExpertise";
import { PerformanceMetrics } from "@/components/profile/PerformanceMetrics";
import { RecentActivity } from "@/components/profile/RecentActivity";
import { Achievements } from "@/components/profile/Achievements";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative min-h-screen pb-32">
      <GradientContainer />
      
      <div className="relative z-10 max-w-lg mx-auto px-4 pt-8">
        <ProfileHeader />
        <LanguageExpertise />
        <PerformanceMetrics />
        <RecentActivity />
        <Achievements />
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
