
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wave, Play } from "lucide-react";
import { useState } from "react";

interface RecordingInterfaceProps {
  onFinishRecording: () => void;
}

export const RecordingInterface = ({ onFinishRecording }: RecordingInterfaceProps) => {
  const [isRecording, setIsRecording] = useState(true);
  const [recordingTime, setRecordingTime] = useState(0);

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-gray-900">
          {isRecording ? "Recording..." : "Review Recording"}
        </h2>
        <p className="text-gray-600">
          {isRecording ? "Speak clearly in Swahili" : "Listen to your recording"}
        </p>
      </div>

      <Card className="p-6 bg-white">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-24 h-24 flex items-center justify-center">
            {isRecording ? (
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
            ) : null}
            <div className={`relative z-10 p-6 rounded-full ${
              isRecording ? 'bg-red-500' : 'bg-primary'
            }`}>
              {isRecording ? (
                <Wave className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </div>
          </div>

          <p className="text-2xl font-mono">{formatTime(recordingTime)}</p>

          <div className="flex gap-4">
            {isRecording ? (
              <Button
                variant="destructive"
                size="lg"
                onClick={handleStopRecording}
              >
                Stop Recording
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsRecording(true)}
                >
                  Record Again
                </Button>
                <Button
                  size="lg"
                  onClick={onFinishRecording}
                >
                  Submit Recording
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
