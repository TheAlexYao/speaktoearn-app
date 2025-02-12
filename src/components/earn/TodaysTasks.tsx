
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, TrendingUp } from "lucide-react";

interface Task {
  id: string;
  type: string;
  title: string;
  reward: string;
  time: string;
  difficulty: string;
  isHot?: boolean;
}

const todaysTasks: Task[] = [
  {
    id: "1",
    type: "voice",
    title: "Record Medical Terms",
    reward: "1.50 CUSD",
    time: "5-10 mins",
    difficulty: "Medium",
    isHot: true,
  },
  {
    id: "2",
    type: "translation",
    title: "Legal Document Review",
    reward: "2.00 CUSD",
    time: "15 mins",
    difficulty: "Hard",
  },
  {
    id: "3",
    type: "writing",
    title: "AI Prompt Creation",
    reward: "0.75 CUSD",
    time: "5 mins",
    difficulty: "Easy",
    isHot: true,
  },
];

export const TodaysTasks = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Today's Tasks</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 hover:text-white transition-colors"
        >
          See All Tasks
        </Button>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {todaysTasks.map((task) => (
            <Card key={task.id} className="flex-none w-[300px] hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{task.title}</h3>
                  {task.isHot && (
                    <div className="flex items-center text-xs text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center bg-primary/5 px-3 py-1.5 rounded-full">
                    <Trophy className="w-4 h-4 mr-2 text-primary" />
                    {task.reward}
                  </div>
                  <div className="flex items-center bg-primary/5 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {task.time}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1.5 bg-gray-100 rounded-full font-medium">
                    {task.difficulty}
                  </span>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300">
                    Start Task
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
