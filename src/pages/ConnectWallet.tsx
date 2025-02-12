
import { GradientContainer } from "@/components/GradientContainer";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "thirdweb/react";
import { client, supportedWallets } from "@/lib/thirdweb";

const ConnectWalletPage = () => {
  const navigate = useNavigate();

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
              wallets={supportedWallets}
              connectModal={{
                size: "compact"
              }}
              className="w-full text-base md:text-lg py-4 md:py-6 bg-white hover:bg-white/90 text-[#4F46E5] font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
