
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ProfileHeader = () => {
  const { toast } = useToast();
  const walletAddress = "0x742d...f44e";

  const copyWalletAddress = () => {
    navigator.clipboard.writeText("0x742d35a7b9c1f44e"); // Full address
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '0ms' }}>
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-white/20 backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Aisha M.</h1>
              <div className="flex items-center gap-2 mt-1">
                <button 
                  onClick={copyWalletAddress}
                  className="text-sm text-gray-500 flex items-center gap-1 hover:text-gray-700 transition-colors"
                >
                  {walletAddress}
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-1 text-sm text-primary font-medium">
                Expert in Swahili
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/80 rounded-lg p-4">
              <div className="text-lg font-semibold text-primary">342 CUSD</div>
              <div className="text-sm text-gray-500">Total Earned</div>
            </div>
            <div className="bg-white/80 rounded-lg p-4">
              <div className="text-lg font-semibold text-primary">24.5 CUSD</div>
              <div className="text-sm text-gray-500">Available</div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              Withdraw Funds
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-white/20 bg-white/10 hover:bg-white/20"
            >
              Transaction History
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
