
import { Button } from "@/components/ui/button";
import { Sun, ShoppingBag, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TopicOption {
  id: string;
  text: string;
  reward: string;
  icon: "sun" | "shopping-bag" | "users";
}

const topics: TopicOption[] = [
  {
    id: "weather",
    text: "Weather in Mombasa",
    reward: "5 CUSD",
    icon: "sun"
  },
  {
    id: "market",
    text: "Market Haggling",
    reward: "7 CUSD",
    icon: "shopping-bag"
  },
  {
    id: "family",
    text: "Family Greetings",
    reward: "4 CUSD",
    icon: "users"
  }
];

const iconMap = {
  "sun": Sun,
  "shopping-bag": ShoppingBag,
  "users": Users
};

interface TopicSelectorProps {
  onTopicSelect: (topicId: string) => void;
}

export const TopicSelector = ({ onTopicSelect }: TopicSelectorProps) => {
  return (
    <div className="space-y-6 animate-fade-up px-4 md:px-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Echo</h1>
        <p className="text-lg text-gray-700">Jambo! 👋 I'm learning Swahili.</p>
        <p className="text-sm text-gray-600">Help me understand how locals talk about:</p>
      </div>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => {
          const Icon = iconMap[topic.icon];
          return (
            <Card 
              key={topic.id}
              className="p-4 bg-white cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onTopicSelect(topic.id)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-900">{topic.text}</h3>
                <span className="text-sm font-medium text-green-600">
                  Reward: {topic.reward}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
