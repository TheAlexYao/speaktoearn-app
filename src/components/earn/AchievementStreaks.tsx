
import { Star, Trophy, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Achievement {
  id: string;
  title: string;
  progress: number;
  icon: typeof Star;
  reward: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Task Master",
    progress: 75,
    icon: Trophy,
    reward: "5.0 CUSD",
  },
  {
    id: "2",
    title: "Quality Champion",
    progress: 40,
    icon: Award,
    reward: "3.0 CUSD",
  },
  {
    id: "3",
    title: "Streak Builder",
    progress: 90,
    icon: Star,
    reward: "2.5 CUSD",
  },
];

export const AchievementStreaks = () => {
  return (
    <div className="mb-8 animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Achievements</h2>
      </div>
      
      <Card className="border-white/20 backdrop-blur-sm bg-white/90">
        <CardContent className="p-4 space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                    <achievement.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-sm text-gray-600">Reward: {achievement.reward}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-primary">{achievement.progress}%</span>
              </div>
              <Progress value={achievement.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
