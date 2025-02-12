import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GradientContainer } from "@/components/GradientContainer";
import { useNavigate } from "react-router-dom";
import { useAddress, useConnect, useDisconnect, useNetworkMismatch, useNetwork } from "@thirdweb-dev/react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

// Celo Mainnet Chain ID
const CELO_CHAIN_ID = 42220;

const ConnectWallet = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const connect = useConnect();
  const disconnect = useDisconnect();
  const [, switchNetwork] = useNetwork();
  const isNetworkMismatch = useNetworkMismatch();
  const [isConnecting, setIsConnecting] = useState(false);
  
  useEffect(() => {
    // If user is already connected and on right network, redirect to tasks
    if (address && !isNetworkMismatch) {
      navigate('/tasks');
    }
  }, [address, isNetworkMismatch, navigate]);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      await connect("walletConnect");
      
      // Check if we need to switch to Celo network
      if (isNetworkMismatch) {
        try {
          await switchNetwork?.(CELO_CHAIN_ID);
        } catch (error) {
          console.error("Failed to switch network:", error);
          toast.error("Please switch to the Celo network in your wallet");
          return;
        }
      }
      
      toast.success("Wallet connected successfully!");
      navigate('/tasks');
    } catch (error: any) {
      console.error("Connection error:", error);
      toast.error(error?.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <GradientContainer />
      <div className="absolute inset-0">
        <div className="max-w-md mx-auto px-6 md:px-4 mt-8 md:mt-16 space-y-6 md:space-y-8">
          <div className="text-center text-white space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold animate-fade-up text-white drop-shadow-lg">
              Connect Your Wallet
            </h1>
            <p className="text-base md:text-lg text-white/90 animate-fade-up drop-shadow" 
              style={{ animationDelay: "100ms" }}
            >
              Join our community and start earning by preserving languages
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 animate-fade-up" 
            style={{ animationDelay: "200ms" }}
          >
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-lg p-3 md:p-4 text-white text-center shadow-xl">
              <div className="text-xl md:text-2xl font-bold">$12,467</div>
              <div className="text-xs md:text-sm text-white/90">Total Earnings</div>
            </div>
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-lg p-3 md:p-4 text-white text-center shadow-xl">
              <div className="text-xl md:text-2xl font-bold">847</div>
              <div className="text-xs md:text-sm text-white/90">Active Users</div>
            </div>
          </div>
          <div className="px-3 md:p-4 animate-fade-up" 
            style={{ animationDelay: "300ms" }}
          >
            <Button 
              className="w-full text-base md:text-lg py-4 md:py-6 bg-white hover:bg-white/90 text-[#4F46E5] font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 border-0" 
              variant="secondary"
              onClick={handleConnect}
              disabled={isConnecting}
            >
              {isConnecting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </div>
          <p className="text-center text-white/80 text-xs md:text-sm animate-fade-up drop-shadow px-4" 
            style={{ animationDelay: "400ms" }}
          >
            By connecting, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
