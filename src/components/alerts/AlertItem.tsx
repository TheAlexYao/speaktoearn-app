
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
  urgent: "border-l-4 border-destructive bg-destructive/5 animate-pulse",
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
        "mb-3 p-4 transition-all hover:shadow-md",
        priorityStyles[alert.priority],
        alert.status === "read" ? "opacity-75" : "opacity-100",
        alert.pinned && "bg-muted/50"
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "rounded-full p-2",
          alert.priority === "urgent" ? "bg-destructive text-destructive-foreground" :
          alert.type === "payment" ? "bg-success text-success-foreground" :
          alert.type === "achievement" ? "bg-secondary text-secondary-foreground" :
          "bg-primary text-primary-foreground"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-foreground">
                {alert.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {alert.description}
              </p>
              {alert.metadata?.reward && (
                <span className="text-sm font-medium text-success mt-2 block">
                  Reward: {alert.metadata.reward}
                </span>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {new Date(alert.timePosted).toLocaleDateString()}
            </span>
          </div>
          
          {alert.actions && (
            <div className="mt-4 flex gap-2">
              {alert.actions.primary && (
                <Button 
                  asChild
                  variant={alert.priority === "urgent" ? "destructive" : "default"}
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
