
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";
import { QuickActions } from "@/components/earn/QuickActions";
import { MiniLeaderboard } from "@/components/earn/MiniLeaderboard";
import { AchievementStreaks } from "@/components/earn/AchievementStreaks";
import { TaskCategories } from "@/components/earn/TaskCategories";
import { TodaysTasks } from "@/components/earn/TodaysTasks";
import { EcosystemPartners } from "@/components/earn/EcosystemPartners";
import { EducationalContent } from "@/components/earn/EducationalContent";
import { SkillsCertification } from "@/components/earn/SkillsCertification";
import { ReferralProgram } from "@/components/earn/ReferralProgram";
import { SpecializedTasks } from "@/components/earn/SpecializedTasks";

const Earn = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-32">
      <GradientContainer />
      
      <div className="relative z-10">
        <div className="max-w-lg mx-auto px-4 pt-8">
          <QuickActions 
            potentialEarnings="24.5 CUSD"
            streakDays={7}
            availableTasks={41}
          />

          <MiniLeaderboard />
          
          <AchievementStreaks />

          <TaskCategories />

          <EducationalContent />

          <SkillsCertification />

          <SpecializedTasks />

          <ReferralProgram />

          <TodaysTasks />

          <EcosystemPartners />
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Earn;
