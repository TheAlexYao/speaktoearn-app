
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Waves, Play } from "lucide-react";
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
    <div className="space-y-6 animate-fade-up px-4 md:px-6">
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
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            {isRecording ? (
              <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse" />
            ) : null}
            <div className={`relative z-10 p-6 rounded-full ${
              isRecording ? 'bg-red-500' : 'bg-primary'
            }`}>
              {isRecording ? (
                <Waves className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white" />
              )}
            </div>
          </div>

          <p className="text-2xl font-mono">{formatTime(recordingTime)}</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {isRecording ? (
              <Button
                variant="destructive"
                size="lg"
                onClick={handleStopRecording}
                className="w-full sm:w-auto"
              >
                Stop Recording
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsRecording(true)}
                  className="w-full sm:w-auto"
                >
                  Record Again
                </Button>
                <Button
                  size="lg"
                  onClick={onFinishRecording}
                  className="w-full sm:w-auto"
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
