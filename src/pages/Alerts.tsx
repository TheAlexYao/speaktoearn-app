
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
import { Bell, Check, Filter, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BottomNav } from "@/components/BottomNav";
import { GradientContainer } from "@/components/GradientContainer";

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
    <>
      <GradientContainer />
      <div className="relative min-h-screen pb-32">
        <div className="container max-w-4xl py-4 sm:py-8 px-3 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                Notifications
              </h1>
              {unreadCount > 0 && (
                <p className="text-sm text-white/80 mt-1">
                  You have {unreadCount} unread notifications
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="hidden sm:flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleMarkAllRead}
                  disabled={unreadCount === 0}
                  className="bg-white hover:bg-white/90 text-gray-900"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Mark all read
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleClearAll}
                  disabled={alerts.length === 0}
                  className="bg-white hover:bg-white/90 text-gray-900"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear all
                </Button>
              </div>
              
              <Select
                value={filter}
                onValueChange={(value) => setFilter(value as AlertType | "all")}
              >
                <SelectTrigger className="w-[120px] sm:w-[140px] bg-white border-none text-gray-900">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none">
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

          {/* Mobile actions - fixed at bottom */}
          <div className="fixed bottom-20 left-0 right-0 flex gap-2 p-3 sm:hidden z-50 bg-white/10 backdrop-blur-lg border-t border-white/20">
            <Button
              className="flex-1 bg-white hover:bg-white/90 text-gray-900 text-sm py-2 h-auto"
              variant="secondary"
              onClick={handleMarkAllRead}
              disabled={unreadCount === 0}
            >
              <Check className="h-4 w-4 mr-1.5" />
              Mark read
            </Button>
            <Button
              className="flex-1 bg-white hover:bg-white/90 text-gray-900 text-sm py-2 h-auto"
              variant="secondary"
              onClick={handleClearAll}
              disabled={alerts.length === 0}
            >
              <Trash2 className="h-4 w-4 mr-1.5" />
              Clear all
            </Button>
          </div>
        </div>

        <BottomNav />
      </div>
    </>
  );
};

export default Alerts;
