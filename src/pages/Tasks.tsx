
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Clock, Star, Mic, Languages, CheckCircle2, FileText, Edit } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const TASKS_DATA = {
  featured: {
    type: "voice",
    title: "Record Medical Terms",
    language: "Bengali",
    reward: "8 CUSD",
    time: "5-10 mins",
    difficulty: "Medium",
    description: "Help create a medical pronunciation database by recording key medical terms in Bengali. Your voice will help healthcare providers better communicate with patients.",
  },
  tasks: [
    {
      type: "writing",
      title: "Paraphrase a Financial Report Sentence",
      language: "English",
      reward: "6 CUSD",
      time: "5 mins",
      difficulty: "Medium",
      description: "Rewrite the given sentence in your own words while retaining its meaning. This helps create diverse text variations for our language dataset.",
      icon: Edit,
      path: "/task/paraphrase"
    },
    {
      type: "review",
      title: "Correct a Misstated Fact",
      language: "English",
      reward: "7 CUSD",
      time: "8 mins",
      difficulty: "Medium",
      description: "Review a provided statement for factual accuracy. If the information is incorrect, rewrite it with the correct details and include a brief explanation.",
      icon: FileText,
      path: "/task/factual"
    },
    {
      type: "voice",
      title: "Basic Conversation Phrases",
      language: "Swahili",
      reward: "5 CUSD",
      time: "5 mins",
      difficulty: "Easy",
      description: "Record everyday conversational phrases to help build a natural speech database",
      icon: Mic,
    },
    {
      type: "voice",
      title: "Emergency Response Terms",
      language: "Hindi",
      reward: "6 CUSD",
      time: "7 mins",
      difficulty: "Easy",
      description: "Record emergency and safety-related terms to aid in crisis communication",
      icon: Mic,
    },
    {
      type: "translation",
      title: "Healthcare Documents",
      language: "Bengali → English",
      reward: "7 CUSD",
      time: "10 mins",
      difficulty: "Medium",
      description: "Translate medical consent forms while preserving cultural context",
      icon: Languages,
    },
    {
      type: "translation",
      title: "Legal Aid Materials",
      language: "Spanish → English",
      reward: "12 CUSD",
      time: "15 mins",
      difficulty: "Hard",
      description: "Help translate legal aid documents with attention to technical terminology",
      icon: Languages,
    },
    {
      type: "review",
      title: "Accent Verification",
      language: "Kurdish",
      reward: "3 CUSD",
      time: "3 mins",
      difficulty: "Easy",
      description: "Review recorded clips for proper accent and pronunciation",
      icon: CheckCircle2,
    },
    {
      type: "review",
      title: "Cultural Context Check",
      language: "Arabic → English",
      reward: "4 CUSD",
      time: "5 mins",
      difficulty: "Medium",
      description: "Verify translations maintain cultural accuracy and proper context",
      icon: CheckCircle2,
    },
  ],
};

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTasks = TASKS_DATA.tasks.filter((task) => 
    activeTab === "all" ? true : task.type === activeTab
  );

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "voice":
        return Mic;
      case "translation":
        return Languages;
      case "review":
        return CheckCircle2;
      case "writing":
        return Edit;
      default:
        return Star;
    }
  };

  return (
    <div className="relative min-h-screen pb-32">
      <GradientContainer />
      
      <div className="relative z-10">
        <div className="sticky top-0 z-20 bg-white shadow-sm">
          <div className="max-w-lg mx-auto px-4 pt-8 pb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Available Tasks</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-semibold text-primary">24.5 CUSD</div>
                <div className="text-sm text-gray-500">Your Balance</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-semibold text-primary">47</div>
                <div className="text-sm text-gray-500">Tasks Completed</div>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto px-4 pb-2">
            <ScrollArea className="w-full whitespace-nowrap">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="bg-transparent">
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="voice">Voice</TabsTrigger>
                  <TabsTrigger value="translation">Translation</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                  <TabsTrigger value="writing">Writing</TabsTrigger>
                </TabsList>
              </Tabs>
            </ScrollArea>
          </div>
        </div>

        <div className="relative z-10 max-w-lg mx-auto px-4 pt-4">
          <div className="mb-6">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span className="font-medium">Featured Task</span>
                </div>
                <span className="text-white/90 text-sm">{TASKS_DATA.featured.language}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{TASKS_DATA.featured.title}</h3>
              <p className="text-white/90 text-sm mb-4">{TASKS_DATA.featured.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    <span className="text-sm font-medium">{TASKS_DATA.featured.reward}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{TASKS_DATA.featured.time}</span>
                  </div>
                </div>
                <button className="px-4 py-1.5 bg-white text-primary text-sm font-medium rounded-full hover:bg-white/90 transition-colors">
                  Start Task
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-20">
            {filteredTasks.map((task, index) => {
              const Icon = getTypeIcon(task.type);
              const TaskWrapper = task.path ? Link : 'div';
              return (
                <TaskWrapper
                  key={index}
                  to={task.path || '#'}
                  className="block bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{task.language}</p>
                      <p className="text-sm text-gray-600">{task.description}</p>
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
                    <button className="px-4 py-1.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors">
                      Start Task
                    </button>
                  </div>
                </TaskWrapper>
              );
            })}
          </div>

          <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 py-2 shadow-lg">
            <div className="max-w-lg mx-auto px-4 flex justify-between items-center">
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">8 days</div>
                <div className="text-xs text-gray-500">Streak</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">94%</div>
                <div className="text-xs text-gray-500">Completion</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900">4.8/5</div>
                <div className="text-xs text-gray-500">Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Tasks;
