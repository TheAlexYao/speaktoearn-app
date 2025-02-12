
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  {
    language: "Swahili",
    proficiency: "Native",
    tasksCompleted: 32,
    acceptanceRate: 94,
    badge: "Expert",
  },
  {
    language: "English",
    proficiency: "Fluent",
    tasksCompleted: 15,
    acceptanceRate: 92,
    badge: "Advanced",
  },
];

export const LanguageExpertise = () => {
  const getAcceptanceRateColor = (rate: number) => {
    if (rate >= 90) return "text-success-500";
    if (rate >= 80) return "text-warning-500";
    return "text-destructive-500";
  };

  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Language Expertise</h2>
          <p className="text-sm text-white/80">Your language proficiency and performance</p>
        </div>
      </div>

      <div className="space-y-4">
        {languages.map((lang) => (
          <Card key={lang.language} className="hover:shadow-xl transition-all duration-300 bg-primary/10 backdrop-blur-sm border border-white/10">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg text-white">{lang.language}</h3>
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-sm font-medium text-white">{lang.proficiency}</span>
                    <span className="text-sm text-white/80">· {lang.tasksCompleted} tasks</span>
                  </div>
                </div>
                <span className={cn(
                  "text-sm font-medium",
                  getAcceptanceRateColor(lang.acceptanceRate)
                )}>
                  {lang.acceptanceRate}% Acceptance
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/80">Proficiency Level</span>
                  <span className="font-medium text-white">{lang.badge}</span>
                </div>
                <Progress value={lang.acceptanceRate} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
