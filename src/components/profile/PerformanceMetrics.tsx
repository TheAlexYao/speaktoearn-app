
import { Card } from "@/components/ui/card";
import { Award, Zap, Target, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    label: "Total Tasks",
    value: "47",
    icon: Award,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Current Streak",
    value: "8 days",
    icon: Zap,
    color: "text-warning-500",
    bgColor: "bg-warning-500/10",
  },
  {
    label: "Quality Score",
    value: "4.8/5",
    icon: Target,
    color: "text-success-500",
    bgColor: "bg-success-500/10",
  },
  {
    label: "Avg. Daily",
    value: "14.72 CUSD",
    icon: TrendingUp,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
];

export const PerformanceMetrics = () => {
  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">Performance</h2>
          <p className="text-sm text-white/80">Your activity metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label} className="p-4 hover:shadow-lg transition-shadow bg-white">
              <div className="flex items-start gap-3">
                <div className={cn("rounded-full p-2", metric.bgColor, metric.color)}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
