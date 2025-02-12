
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 py-8">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => navigate("/")}>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => navigate("/connect-wallet")}>
              Connect Wallet
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
