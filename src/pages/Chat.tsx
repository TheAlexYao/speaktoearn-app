
import { TopicSelector } from "@/components/chat/TopicSelector";
import { TaskPrompt } from "@/components/chat/TaskPrompt";
import { RecordingInterface } from "@/components/chat/RecordingInterface";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { useState } from "react";
import { GradientContainer } from "@/components/GradientContainer";

type ChatState = "welcome" | "task" | "recording" | "review" | "follow_up" | "completion";

export default function Chat() {
  const [chatState, setChatState] = useState<ChatState>("welcome");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  
  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    setChatState("task");
  };

  const handleStartRecording = () => {
    setChatState("recording");
  };
  
  return (
    <div className="min-h-screen relative">
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
              onFinishRecording={() => setChatState("review")}
            />
          )}
        </ChatContainer>
      </div>
    </div>
  );
}
