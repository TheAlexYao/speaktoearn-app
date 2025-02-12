import { TopicSelector } from "@/components/chat/TopicSelector";
import { ChatContainer } from "@/components/chat/ChatContainer";
import { useState } from "react";
import { GradientContainer } from "@/components/GradientContainer";

type ChatState = "welcome" | "task" | "recording" | "review" | "follow_up" | "completion";

export default function Chat() {
  const [chatState, setChatState] = useState<ChatState>("welcome");
  
  return (
    <div className="min-h-screen relative">
      <GradientContainer />
      <div className="relative z-10 container mx-auto px-4 py-6 max-w-2xl">
        <ChatContainer>
          {chatState === "welcome" && (
            <TopicSelector onTopicSelect={() => setChatState("task")} />
          )}
          {/* Other states will be implemented here */}
        </ChatContainer>
      </div>
    </div>
  );
}
