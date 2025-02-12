
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Trophy, Globe } from "lucide-react";

interface SpecializedTask {
  id: string;
  title: string;
  type: "premium" | "timeSensitive" | "communityChoice" | "localImpact";
  description: string;
  reward: string;
  deadline?: string;
  requirements?: string[];
  location?: string;
}

const specializedTasks: SpecializedTask[] = [
  {
    id: "1",
    title: "Expert Medical Translation",
    type: "premium",
    description: "Translate complex medical documents",
    reward: "15.0 CUSD",
    requirements: ["Medical certification", "5+ years experience"],
  },
  {
    id: "2",
    title: "Urgent Legal Review",
    type: "timeSensitive",
    description: "Review legal documentation within 2 hours",
    reward: "10.0 CUSD",
    deadline: "2 hours",
  },
  {
    id: "3",
    title: "Local Community Project",
    type: "localImpact",
    description: "Support local initiatives documentation",
    reward: "5.0 CUSD",
    location: "San Francisco Bay Area",
  },
];

export const SpecializedTasks = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '700ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Specialized Tasks</h2>
          <p className="text-sm text-white/80">Premium opportunities</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 hover:text-white transition-colors"
        >
          View All
        </Button>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {specializedTasks.map((task) => (
            <Card key={task.id} className="flex-none w-[350px] hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  {task.type === "premium" && (
                    <div className="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Premium
                    </div>
                  )}
                  {task.type === "timeSensitive" && (
                    <div className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      Urgent
                    </div>
                  )}
                  {task.type === "localImpact" && (
                    <div className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium flex items-center">
                      <Globe className="w-3 h-3 mr-1" />
                      Local Impact
                    </div>
                  )}
                </div>

                <h3 className="font-semibold text-lg mb-2">{task.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{task.description}</p>

                {task.requirements && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                      {task.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {task.deadline && (
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-red-500 font-medium">
                      Deadline: {task.deadline}
                    </span>
                  </div>
                )}

                {task.location && (
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600">
                      {task.location}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">{task.reward}</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
