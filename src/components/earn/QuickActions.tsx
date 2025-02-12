
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  potentialEarnings: string;
  streakDays: number;
  availableTasks: number;
}

export const QuickActions = ({ potentialEarnings, streakDays, availableTasks }: QuickActionsProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-xl border border-white/20 animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-[#8B5CF6] bg-clip-text text-transparent">Quick Actions</h2>
          <p className="text-sm text-muted-foreground mt-1">Continue your earning streak</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today's Potential</p>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{potentialEarnings}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-white/10">
          <div className="text-xl font-semibold text-primary">{streakDays} Days</div>
          <div className="text-sm text-muted-foreground">Active Streak</div>
        </div>
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-white/10">
          <div className="text-xl font-semibold text-primary">{availableTasks}</div>
          <div className="text-sm text-muted-foreground">Tasks Available</div>
        </div>
      </div>

      <Button 
        className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300"
        onClick={() => navigate('/tasks')}
      >
        Start Latest Task
      </Button>
    </div>
  );
};
