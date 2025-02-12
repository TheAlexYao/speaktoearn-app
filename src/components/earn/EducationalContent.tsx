
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, Users, GraduationCap } from "lucide-react";

interface EducationalItem {
  id: string;
  title: string;
  type: string;
  description: string;
  duration: string;
  reward: string;
  icon: typeof BookOpen;
}

const educationalContent: EducationalItem[] = [
  {
    id: "1",
    title: "Voice Recording Mastery",
    type: "Video Tutorial",
    description: "Learn professional voice recording techniques",
    duration: "15 mins",
    reward: "2.0 CUSD",
    icon: Video,
  },
  {
    id: "2",
    title: "Translation Best Practices",
    type: "Interactive Guide",
    description: "Expert tips for accurate translations",
    duration: "20 mins",
    reward: "2.5 CUSD",
    icon: BookOpen,
  },
  {
    id: "3",
    title: "Community Workshop",
    type: "Live Session",
    description: "Join top contributors and learn",
    duration: "45 mins",
    reward: "5.0 CUSD",
    icon: Users,
  },
];

export const EducationalContent = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '400ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Earn & Learn</h2>
          <p className="text-sm text-white/80">Improve your skills while earning</p>
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
          {educationalContent.map((item) => (
            <Card key={item.id} className="flex-none w-[300px] hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full p-2">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">{item.type}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{item.duration}</span>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    Earn {item.reward}
                  </div>
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
