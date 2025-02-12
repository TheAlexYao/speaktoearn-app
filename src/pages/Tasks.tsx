
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Clock, Star } from "lucide-react";

const Tasks = () => {
  return (
    <div className="relative min-h-screen pb-32">
      <GradientContainer />
      
      {/* Header with Stats */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-lg mx-auto px-4 pt-8 pb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Available Tasks</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/90 rounded-lg p-4 shadow-sm">
              <div className="text-lg font-semibold text-primary">24.5 CUSD</div>
              <div className="text-sm text-gray-500">Your Balance</div>
            </div>
            <div className="bg-white/90 rounded-lg p-4 shadow-sm">
              <div className="text-lg font-semibold text-primary">47</div>
              <div className="text-sm text-gray-500">Tasks Completed</div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-lg mx-auto px-4 pb-2">
          <ScrollArea className="w-full whitespace-nowrap">
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Tasks</TabsTrigger>
                <TabsTrigger value="voice">Voice</TabsTrigger>
                <TabsTrigger value="translation">Translation</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
              </TabsList>
            </Tabs>
          </ScrollArea>
        </div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto px-4 pt-4">
        {/* Featured Task */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span className="font-medium">Featured Task</span>
              </div>
              <span className="text-white/90 text-sm">Bengali</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Record Medical Terms</h3>
            <p className="text-white/90 text-sm mb-4">Help create a medical pronunciation database</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-sm font-medium">8 CUSD</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">5-10 mins</span>
                </div>
              </div>
              <button className="px-4 py-1.5 bg-white text-primary text-sm rounded-full hover:bg-white/90 transition-colors">
                Start Task
              </button>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4 mb-20">
          {[
            {
              type: "voice",
              title: "Daily Conversations",
              language: "Swahili",
              reward: "5 CUSD",
              time: "5 mins",
              difficulty: "Easy",
            },
            {
              type: "translation",
              title: "Medical Terms",
              language: "Bengali → English",
              reward: "7 CUSD",
              time: "10 mins",
              difficulty: "Medium",
            },
            {
              type: "review",
              title: "Voice Quality Check",
              language: "Kurdish",
              reward: "3 CUSD",
              time: "3 mins",
              difficulty: "Easy",
            },
          ].map((task, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.language}</p>
                </div>
                <span className="text-sm font-medium text-primary">{task.reward}</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                    {task.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{task.time}</span>
                </div>
                <button className="px-4 py-1.5 bg-primary text-white text-sm rounded-full hover:bg-primary/90 transition-colors">
                  Start Task
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="fixed bottom-16 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-2">
          <div className="max-w-lg mx-auto px-4 flex justify-between items-center">
            <div className="text-center">
              <div className="text-sm font-medium">8 days</div>
              <div className="text-xs text-gray-500">Streak</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">94%</div>
              <div className="text-xs text-gray-500">Completion</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium">4.8/5</div>
              <div className="text-xs text-gray-500">Quality</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Tasks;
