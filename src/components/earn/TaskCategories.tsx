
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon, Mic, FileText, Languages, Edit } from "lucide-react";

interface TaskCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  availableTasks: number;
  rewardRange: string;
  isNew?: boolean;
}

const taskCategories: TaskCategory[] = [
  {
    id: "voice",
    title: "Voice Tasks",
    icon: Mic,
    availableTasks: 12,
    rewardRange: "0.5-2.0 CUSD",
    isNew: true,
  },
  {
    id: "review",
    title: "Review Tasks",
    icon: FileText,
    availableTasks: 8,
    rewardRange: "0.3-1.0 CUSD",
  },
  {
    id: "translation",
    title: "Translation",
    icon: Languages,
    availableTasks: 15,
    rewardRange: "1.0-3.0 CUSD",
  },
  {
    id: "writing",
    title: "Writing Tasks",
    icon: Edit,
    availableTasks: 6,
    rewardRange: "0.4-1.5 CUSD",
  },
];

export const TaskCategories = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '100ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Categories</h2>
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
          {taskCategories.map((category) => (
            <Card key={category.id} className="flex-none w-[250px] hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-3 w-fit mb-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-600">
                      {category.availableTasks} tasks available
                    </p>
                    <p className="text-sm font-medium text-primary mt-2">
                      {category.rewardRange}
                    </p>
                  </div>
                  {category.isNew && (
                    <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs px-3 py-1 rounded-full shadow-lg">
                      New
                    </span>
                  )}
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
