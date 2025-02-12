
import { Link, useLocation } from "react-router-dom";
import { Wallet, MessageCircle, List, Bell, User } from "lucide-react";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    {
      icon: Wallet,
      label: "Earn",
      path: "/earn",
    },
    {
      icon: MessageCircle,
      label: "Chat",
      path: "/chat",
    },
    {
      icon: List,
      label: "Tasks",
      path: "/tasks",
    },
    {
      icon: Bell,
      label: "Alerts",
      path: "/alerts",
      hasNotification: true,
    },
    {
      icon: User,
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2 z-50">
      <div className="max-w-lg mx-auto grid grid-cols-5">
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center py-1"
            >
              <div className="relative">
                <item.icon
                  size={24}
                  className={active ? "text-primary" : "text-gray-500"}
                />
                {item.hasNotification && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </div>
              <span
                className={`text-xs mt-1 ${
                  active ? "text-primary font-medium" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
