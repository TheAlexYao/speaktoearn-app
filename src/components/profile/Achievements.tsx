
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: "🌟",
    title: "Quality Master",
    description: "Maintained 90%+ quality for 30 days",
    progress: 100,
    completed: true,
  },
  {
    icon: "🎯",
    title: "On Fire",
    description: "8 day completion streak",
    progress: 100,
    completed: true,
  },
  {
    icon: "💫",
    title: "Rising Star",
    description: "Complete 50 tasks",
    progress: 94, // 47/50 tasks
    completed: false,
  },
];

export const Achievements = () => {
  return (
    <div className="mb-20 animate-fade-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Achievements</h2>
          <p className="text-sm text-gray-600">Your earned badges and ongoing challenges</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.title}
            className={cn(
              "flex-shrink-0 w-[280px] hover:shadow-lg transition-shadow bg-white",
              achievement.completed ? "bg-gradient-to-br from-primary/5 to-secondary/5" : ""
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <div className="font-medium text-gray-900">{achievement.title}</div>
                  <div className="text-sm text-gray-600">{achievement.description}</div>
                  {!achievement.completed && (
                    <div className="mt-2">
                      <Progress value={achievement.progress} className="h-1" />
                      <div className="text-xs text-gray-500 mt-1">
                        {achievement.progress}% Complete
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
