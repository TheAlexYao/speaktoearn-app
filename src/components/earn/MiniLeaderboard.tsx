
import { Trophy, Flame, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface LeaderboardEntry {
  id: string;
  name: string;
  earnings: string;
  streak: number;
  position: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { id: "1", name: "Sarah K.", earnings: "124.5 CUSD", streak: 14, position: 1 },
  { id: "2", name: "Michael R.", earnings: "98.2 CUSD", streak: 8, position: 2 },
  { id: "3", name: "David L.", earnings: "87.6 CUSD", streak: 12, position: 3 },
];

export const MiniLeaderboard = () => {
  return (
    <div className="mb-8 animate-fade-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Top Earners</h2>
      </div>
      
      <Card className="border-white/20 backdrop-blur-sm bg-white/90">
        <CardContent className="p-4">
          {leaderboardData.map((entry) => (
            <div key={entry.id} className="flex items-center justify-between py-3 border-b last:border-0 border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  {entry.position === 1 ? (
                    <Trophy className="w-4 h-4 text-primary" />
                  ) : entry.position === 2 ? (
                    <Medal className="w-4 h-4 text-primary" />
                  ) : (
                    <Medal className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{entry.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Flame className="w-3 h-3 text-orange-500" />
                    <span>{entry.streak} day streak</span>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-primary">{entry.earnings}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
