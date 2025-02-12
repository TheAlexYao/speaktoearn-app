
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TaskPromptProps {
  topicId: string;
  onStartRecording: () => void;
}

const getTaskDetails = (topicId: string) => {
  const tasks = {
    "weather": {
      question: "How's the weather in Mombasa today?",
      context: "Imagine you're talking to a local about the hot and humid weather.",
      hint: "Use words like 'joto' (hot) and 'mvua' (rain)"
    },
    "market": {
      question: "How much for these mangoes?",
      context: "You're at Kongowea Market trying to buy fresh fruits.",
      hint: "Practice saying numbers and basic negotiation phrases"
    },
    "family": {
      question: "How are your parents doing?",
      context: "You're meeting a friend's family for the first time.",
      hint: "Remember to use respectful greetings for elders"
    }
  };
  
  return tasks[topicId as keyof typeof tasks];
};

export const TaskPrompt = ({ topicId, onStartRecording }: TaskPromptProps) => {
  const task = getTaskDetails(topicId);
  
  return (
    <div className="space-y-6 animate-fade-up px-4 md:px-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">Your Task</h2>
        <p className="text-gray-600">Record your response in Swahili</p>
      </div>
      
      <Card className="p-6 bg-white">
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">{task.question}</h3>
          <p className="text-gray-600">{task.context}</p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="text-sm text-primary">💡 Hint: {task.hint}</p>
          </div>
        </div>
      </Card>
      
      <div className="flex justify-center pt-4">
        <Button
          onClick={onStartRecording}
          className="flex items-center gap-2 w-full sm:w-auto"
          size="lg"
        >
          <Mic className="w-5 h-5" />
          Start Recording
        </Button>
      </div>
    </div>
  );
};
