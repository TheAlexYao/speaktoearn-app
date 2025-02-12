
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Languages } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const activities = [
  {
    date: "Today",
    tasks: [
      {
        type: "Voice Recording",
        description: "Medical Terms - Swahili",
        reward: "5.2 CUSD",
        time: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: "Completed",
        icon: Mic,
      },
      {
        type: "Translation",
        description: "School Announcement ENG → SWA",
        reward: "3.8 CUSD",
        time: new Date(Date.now() - 5 * 60 * 60 * 1000),
        status: "Completed",
        icon: Languages,
      },
    ],
  },
  {
    date: "Yesterday",
    tasks: [
      {
        type: "Voice Recording",
        description: "Common Phrases - Swahili",
        reward: "4.5 CUSD",
        time: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: "Completed",
        icon: Mic,
      },
    ],
  },
];

export const RecentActivity = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          <p className="text-sm text-white/80">Your latest completed tasks</p>
        </div>
      </div>

      <div className="space-y-6">
        {activities.map((day) => (
          <div key={day.date}>
            <h3 className="text-sm font-medium text-white/80 mb-3">{day.date}</h3>
            <div className="space-y-3">
              {day.tasks.map((task, index) => {
                const Icon = task.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full p-2 bg-primary/10 text-primary mt-1">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{task.type}</div>
                            <div className="text-sm text-gray-600">{task.description}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {formatDistanceToNow(task.time, { addSuffix: true })}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {task.reward}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
