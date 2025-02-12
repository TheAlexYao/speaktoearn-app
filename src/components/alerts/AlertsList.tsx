
import { Alert } from "@/types/alert";
import { AlertItem } from "./AlertItem";
import { AlertTriangle, Bell, CheckCircle } from "lucide-react";

interface AlertsListProps {
  alerts: Alert[];
  onMarkRead?: (id: string) => void;
}

export const AlertsList = ({ alerts, onMarkRead }: AlertsListProps) => {
  // Group alerts by priority
  const pinnedAlerts = alerts.filter(alert => alert.pinned);
  const urgentAlerts = alerts.filter(alert => !alert.pinned && alert.priority === "urgent");
  const normalAlerts = alerts.filter(alert => !alert.pinned && alert.priority === "normal");
  const lowAlerts = alerts.filter(alert => !alert.pinned && alert.priority === "low");

  return (
    <div className="space-y-6 animate-fade-up">
      {pinnedAlerts.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-white/90 mb-3">
            Pinned
          </h2>
          {pinnedAlerts.map(alert => (
            <AlertItem 
              key={alert.id} 
              alert={alert} 
              onMarkRead={onMarkRead}
            />
          ))}
        </div>
      )}

      {urgentAlerts.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-white flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4" />
            Urgent & Important
          </h2>
          {urgentAlerts.map(alert => (
            <AlertItem 
              key={alert.id} 
              alert={alert} 
              onMarkRead={onMarkRead}
            />
          ))}
        </div>
      )}

      {normalAlerts.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-white flex items-center gap-2 mb-3">
            <Bell className="h-4 w-4" />
            General Notifications
          </h2>
          {normalAlerts.map(alert => (
            <AlertItem 
              key={alert.id} 
              alert={alert} 
              onMarkRead={onMarkRead}
            />
          ))}
        </div>
      )}

      {lowAlerts.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-white flex items-center gap-2 mb-3">
            <CheckCircle className="h-4 w-4" />
            Other Notifications
          </h2>
          {lowAlerts.map(alert => (
            <AlertItem 
              key={alert.id} 
              alert={alert} 
              onMarkRead={onMarkRead}
            />
          ))}
        </div>
      )}

      {alerts.length === 0 && (
        <div className="text-center py-12 text-white/70">
          No notifications to show
        </div>
      )}
    </div>
  );
};
