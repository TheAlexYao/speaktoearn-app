import { useState } from "react";
import { Alert, AlertType } from "@/types/alert";
import { AlertsList } from "@/components/alerts/AlertsList";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Check, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BottomNav } from "@/components/BottomNav";

// Demo data
const demoAlerts: Alert[] = [
  {
    id: "1",
    type: "task_opportunity",
    title: "New Medical Terms Task",
    description: "High-reward Swahili voice recording available",
    timePosted: new Date(Date.now() - 1000 * 60 * 5), // 5 mins ago
    status: "unread",
    priority: "urgent",
    pinned: true,
    metadata: {
      reward: "8 CUSD",
      deadline: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours from now
    },
    actions: {
      primary: {
        label: "Start Task",
        href: "/tasks/medical-terms",
      },
    },
  },
  {
    id: "2",
    type: "payment",
    title: "Payment Received",
    description: "5.2 CUSD for voice recording task #247",
    timePosted: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    status: "read",
    priority: "normal",
    metadata: {
      txHash: "0x7829a3...957c1",
    },
  },
  {
    id: "3",
    type: "achievement",
    title: "New Badge: Quality Master! 🌟",
    description: "You've maintained 90%+ quality for 30 days",
    timePosted: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    status: "read",
    priority: "normal",
  },
  {
    id: "4",
    type: "review",
    title: "Task Approved ✓",
    description: "Your Swahili recording met quality standards",
    timePosted: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
    status: "unread",
    priority: "low",
  },
];

const Alerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(demoAlerts);
  const [filter, setFilter] = useState<AlertType | "all">("all");
  const { toast } = useToast();

  const filteredAlerts = alerts.filter(
    alert => filter === "all" || alert.type === filter
  );

  const unreadCount = alerts.filter(alert => alert.status === "unread").length;

  const handleMarkAllRead = () => {
    setAlerts(alerts.map(alert => ({ ...alert, status: "read" })));
    toast({
      title: "All notifications marked as read",
      description: `${unreadCount} notifications updated`,
    });
  };

  const handleClearAll = () => {
    setAlerts([]);
    toast({
      title: "All notifications cleared",
      description: "Your notifications have been cleared",
    });
  };

  return (
    <div className="relative min-h-screen pb-32">
      <div className="container max-w-4xl py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Bell className="h-6 w-6" />
              Notifications
            </h1>
            {unreadCount > 0 && (
              <p className="text-sm text-muted-foreground mt-1">
                You have {unreadCount} unread notifications
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkAllRead}
                disabled={unreadCount === 0}
              >
                <Check className="h-4 w-4 mr-2" />
                Mark all read
              </Button>
            </div>
            
            <Select
              value={filter}
              onValueChange={(value) => setFilter(value as AlertType | "all")}
            >
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="task_opportunity">Tasks</SelectItem>
                <SelectItem value="payment">Payments</SelectItem>
                <SelectItem value="achievement">Achievements</SelectItem>
                <SelectItem value="review">Reviews</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <AlertsList 
          alerts={filteredAlerts}
          onMarkRead={(id) => {
            setAlerts(alerts.map(alert => 
              alert.id === id ? { ...alert, status: "read" } : alert
            ));
          }}
        />

        {/* Mobile actions - adjusted to be above bottom nav */}
        <div className="fixed bottom-16 left-4 right-4 flex gap-2 sm:hidden">
          <Button
            className="flex-1"
            variant="outline"
            onClick={handleMarkAllRead}
            disabled={unreadCount === 0}
          >
            <Check className="h-4 w-4 mr-2" />
            Mark all read
          </Button>
          <Button
            className="flex-1"
            variant="outline"
            onClick={handleClearAll}
            disabled={alerts.length === 0}
          >
            Clear all
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Alerts;
