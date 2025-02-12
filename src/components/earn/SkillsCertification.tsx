
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Shield, Star, Award, ChevronRight } from "lucide-react";

interface Skill {
  id: string;
  name: string;
  level: string;
  progress: number;
  tasksCompleted: number;
  verified: boolean;
}

const skills: Skill[] = [
  {
    id: "1",
    name: "Voice Recording",
    level: "Expert",
    progress: 95,
    tasksCompleted: 248,
    verified: true,
  },
  {
    id: "2",
    name: "Translation",
    level: "Advanced",
    progress: 75,
    tasksCompleted: 156,
    verified: true,
  },
  {
    id: "3",
    name: "Content Review",
    level: "Intermediate",
    progress: 45,
    tasksCompleted: 89,
    verified: false,
  },
];

export const SkillsCertification = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '500ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Your Skills</h2>
          <p className="text-sm text-white/80">Progress and certifications</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 hover:text-white transition-colors"
        >
          All Skills
        </Button>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <Card key={skill.id} className="hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    {skill.verified && (
                      <Shield className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{skill.level}</span>
                    <span className="text-sm text-gray-500">· {skill.tasksCompleted} tasks</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                  <Award className="w-4 h-4 mr-2" />
                  Certificate
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Level Progress</span>
                  <span className="font-medium">{skill.progress}%</span>
                </div>
                <Progress value={skill.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
