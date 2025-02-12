
import { useNavigate } from "react-router-dom";
import { Mic, FileText, Languages, Edit, ExternalLink, Trophy, Clock, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";
import { Card, CardContent } from "@/components/ui/card";

// Mock data
const taskCategories = [
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

const todaysTasks = [
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

const ecosystemPartners = [
  {
    id: "halofi",
    name: "HaloFi",
    description: "Earn up to 12% APY on your CUSD",
    reward: "12% APY",
    tag: "DeFi",
    externalUrl: "#",
    verified: true,
  },
  {
    id: "impact",
    name: "Impact Market",
    description: "Support UBI initiatives",
    reward: "2 CUSD/review",
    tag: "Social Impact",
    externalUrl: "#",
    verified: true,
  },
  {
    id: "goodghosting",
    name: "GoodGhosting",
    description: "Gamified savings pools",
    reward: "Up to 15% APY",
    tag: "GameFi",
    externalUrl: "#",
    verified: true,
  },
];

const Earn = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pb-32">
      <GradientContainer />
      
      <div className="relative z-10">
        <div className="max-w-lg mx-auto px-4 pt-8">
          {/* Quick Actions Dashboard */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
                <p className="text-sm text-gray-600">Continue your earning streak</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Today's Potential</p>
                <p className="text-xl font-bold text-primary">24.5 CUSD</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="text-lg font-semibold text-primary">7 Days</div>
                <div className="text-sm text-gray-600">Active Streak</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4">
                <div className="text-lg font-semibold text-primary">41</div>
                <div className="text-sm text-gray-600">Tasks Available</div>
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={() => navigate('/tasks')}
            >
              Start Latest Task
            </Button>
          </div>

          {/* Task Categories */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                {taskCategories.map((category) => (
                  <Card key={category.id} className="flex-none w-[250px]">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="bg-primary/10 rounded-full p-2 w-fit mb-3">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="font-semibold mb-1">{category.title}</h3>
                          <p className="text-sm text-gray-600">
                            {category.availableTasks} tasks available
                          </p>
                          <p className="text-sm font-medium text-primary mt-2">
                            {category.rewardRange}
                          </p>
                        </div>
                        {category.isNew && (
                          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
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

          {/* Today's Tasks */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Today's Tasks</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                See All Tasks
              </Button>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                {todaysTasks.map((task) => (
                  <Card key={task.id} className="flex-none w-[300px]">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-semibold">{task.title}</h3>
                        {task.isHot && (
                          <div className="flex items-center text-xs text-orange-500">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Hot
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Trophy className="w-4 h-4 mr-1" />
                          {task.reward}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {task.time}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {task.difficulty}
                        </span>
                        <Button size="sm">
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

          {/* Ecosystem Partners */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Ecosystem Partners</h2>
              <Button variant="ghost" size="sm" className="text-primary">
                Explore All
              </Button>
            </div>
            
            <div className="space-y-4">
              {ecosystemPartners.map((partner) => (
                <Card key={partner.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{partner.name}</h3>
                          {partner.verified && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{partner.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                            {partner.tag}
                          </span>
                          <span className="text-sm font-medium text-primary">
                            {partner.reward}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Open
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Earn;
