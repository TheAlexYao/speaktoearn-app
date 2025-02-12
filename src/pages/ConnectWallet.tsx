
import { GradientContainer } from "@/components/GradientContainer";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { client, wallets } from "@/lib/thirdweb";
import { useToast } from "@/hooks/use-toast";

const ConnectWalletPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleConnect = () => {
    console.log("Wallet connected successfully");
    toast({
      title: "Wallet Connected",
      description: "Your wallet has been connected successfully!",
    });
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
            <p className="text-base md:text-lg text-white/90 animate-fade-up drop-shadow">
              Join our community and start earning by preserving languages
            </p>
          </div>
          
          <div className="px-3 md:p-4">
            <ConnectButton
              client={client}
              wallets={wallets}
              connectModal={{ size: "compact" }}
              onConnect={handleConnect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
