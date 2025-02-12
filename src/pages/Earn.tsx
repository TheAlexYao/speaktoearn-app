
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
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 mb-8 shadow-xl border border-white/20 animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-[#8B5CF6] bg-clip-text text-transparent">Quick Actions</h2>
                <p className="text-sm text-muted-foreground mt-1">Continue your earning streak</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Today's Potential</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">24.5 CUSD</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-white/10">
                <div className="text-xl font-semibold text-primary">7 Days</div>
                <div className="text-sm text-muted-foreground">Active Streak</div>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4 border border-white/10">
                <div className="text-xl font-semibold text-primary">41</div>
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

          {/* Task Categories */}
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

          {/* Today's Tasks */}
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

          {/* Ecosystem Partners */}
          <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Ecosystem Partners</h2>
              <Button 
                variant="outline" 
                size="sm" 
                className="border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 hover:text-white transition-colors"
              >
                Explore All
              </Button>
            </div>
            
            <div className="space-y-4">
              {ecosystemPartners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{partner.name}</h3>
                          {partner.verified && (
                            <span className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full font-medium">
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full font-medium">
                            {partner.tag}
                          </span>
                          <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {partner.reward}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                        <ExternalLink className="w-4 h-4 mr-2" />
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
