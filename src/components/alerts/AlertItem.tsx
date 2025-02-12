
import { Alert } from "@/types/alert";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlertTriangle, Bell, CheckCircle, Target, Trophy, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  task_opportunity: Target,
  payment: Wallet,
  achievement: Trophy,
  review: CheckCircle,
};

const priorityStyles = {
  urgent: "border-l-4 border-destructive bg-destructive/10 animate-pulse",
  normal: "border-l-4 border-primary",
  low: "border-l-4 border-muted-foreground",
};

interface AlertItemProps {
  alert: Alert;
  onMarkRead?: (id: string) => void;
}

export const AlertItem = ({ alert, onMarkRead }: AlertItemProps) => {
  const Icon = iconMap[alert.type];

  return (
    <Card 
      className={cn(
        "mb-3 p-4 transition-all hover:shadow-md shadow-lg",
        priorityStyles[alert.priority],
        alert.status === "read" ? "opacity-90" : "opacity-100",
        alert.priority === "urgent" ? "bg-destructive/5" : "bg-white",
        alert.pinned && "bg-white"
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "rounded-full p-2",
          alert.priority === "urgent" ? "bg-destructive text-destructive-foreground" :
          alert.type === "payment" ? "bg-green-500 text-white" :
          alert.type === "achievement" ? "bg-secondary text-secondary-foreground" :
          "bg-primary text-primary-foreground"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className={cn(
                "font-semibold",
                alert.priority === "urgent" ? "text-destructive" : "text-gray-900"
              )}>
                {alert.title}
              </h3>
              <p className={cn(
                "text-sm mt-1",
                alert.priority === "urgent" ? "text-destructive/90" : "text-gray-600"
              )}>
                {alert.description}
              </p>
              {alert.metadata?.reward && (
                <span className="text-sm font-medium text-green-600 mt-2 block">
                  Reward: {alert.metadata.reward}
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">
              {new Date(alert.timePosted).toLocaleDateString()}
            </span>
          </div>
          
          {alert.actions && (
            <div className="mt-4 flex gap-2">
              {alert.actions.primary && (
                <Button 
                  asChild
                  variant={alert.priority === "urgent" ? "destructive" : "secondary"}
                  size="sm"
                >
                  <Link to={alert.actions.primary.href}>
                    {alert.actions.primary.label}
                  </Link>
                </Button>
              )}
              {alert.actions.secondary && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={alert.actions.secondary.action}
                >
                  {alert.actions.secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
