
import { Card } from "@/components/ui/card";
import { Award, Zap, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Total Tasks",
    value: "47",
    icon: Award,
    color: "text-primary",
  },
  {
    label: "Current Streak",
    value: "8 days",
    icon: Zap,
    color: "text-warning-500",
  },
  {
    label: "Quality Score",
    value: "4.8/5",
    icon: Target,
    color: "text-success-500",
  },
  {
    label: "Avg. Daily",
    value: "14.72 CUSD",
    icon: TrendingUp,
    color: "text-secondary",
  },
];

export const PerformanceMetrics = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Performance</h2>
          <p className="text-sm text-gray-500">Your activity metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className={cn("rounded-full p-2 bg-gray-100", metric.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
