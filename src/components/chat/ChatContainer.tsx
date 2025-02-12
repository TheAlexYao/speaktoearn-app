
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatContainerProps {
  children: React.ReactNode;
}

export const ChatContainer = ({ children }: ChatContainerProps) => {
  return (
    <Card className="w-full bg-white shadow-lg min-h-[calc(100vh-8rem)] flex flex-col">
      <ScrollArea className="flex-1 p-4 md:p-6">
        {children}
      </ScrollArea>
    </Card>
  );
};
