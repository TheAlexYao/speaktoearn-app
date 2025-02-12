
import { TopicSelector } from "@/components/chat/TopicSelector";
import { TaskPrompt } from "@/components/chat/TaskPrompt";
import { RecordingInterface } from "@/components/chat/RecordingInterface";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { useState } from "react";
import { GradientContainer } from "@/components/GradientContainer";
import { BottomNav } from "@/components/BottomNav";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ChatState = "welcome" | "task" | "recording" | "review" | "follow_up" | "completion";

export default function Chat() {
  const [chatState, setChatState] = useState<ChatState>("welcome");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const navigate = useNavigate();
  
  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setChatState("task");
  };

  const handleStartRecording = () => {
    setChatState("recording");
  };

  const handleFinishRecording = () => {
    setChatState("review");
  };

  const handleSubmitRecording = () => {
    setChatState("completion");
  };

  const handlePlayRecording = () => {
    // In a real implementation, this would play the recorded audio
    console.log("Playing recording...");
  };
  
  return (
    <div className="min-h-screen relative pb-16">
      <GradientContainer />
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-2xl">
        <ChatContainer>
          {chatState === "welcome" && (
            <TopicSelector onTopicSelect={handleTopicSelect} />
          )}
          {chatState === "task" && (
            <TaskPrompt 
              topicId={selectedTopic} 
              onStartRecording={handleStartRecording}
            />
          )}
          {chatState === "recording" && (
            <RecordingInterface 
              onFinishRecording={handleFinishRecording}
            />
          )}
          {chatState === "review" && (
            <div className="space-y-6 animate-fade-up px-4 md:px-6">
              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold text-gray-900">Review & Submit</h2>
                <p className="text-gray-600">Listen to your recording before submitting</p>
              </div>
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">Recording Duration: 0:15</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                      <Button 
                        variant="outline" 
                        className="w-full sm:w-auto"
                        onClick={handlePlayRecording}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Play Recording
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full sm:w-auto"
                        onClick={() => setChatState("recording")}
                      >
                        Record Again
                      </Button>
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={handleSubmitRecording}
                  >
                    Submit Recording
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
          {chatState === "completion" && (
            <div className="space-y-6 animate-fade-up px-4 md:px-6">
              <div className="text-center space-y-2">
                <h2 className="text-xl font-bold text-gray-900">Asante sana!</h2>
                <p className="text-gray-600">Recording submitted successfully</p>
              </div>
              <Card className="p-6">
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-2">+5 CUSD</p>
                    <p className="text-gray-600">Transaction completed</p>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => setChatState("welcome")}
                  >
                    Start New Topic
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </ChatContainer>
      </div>
      <BottomNav />
    </div>
  );
}
