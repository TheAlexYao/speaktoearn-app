
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { GradientContainer } from "@/components/GradientContainer";

const ConnectWallet = () => {
  return (
    <div className="relative">
      <GradientContainer />
      <div className="absolute inset-0">
        {/* Navigation */}
        <nav className="max-w-7xl mx-auto px-4 py-8">
          <Logo />
        </nav>

        {/* Main Content */}
        <div className="max-w-md mx-auto mt-16 space-y-8">
          {/* Header */}
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl font-bold animate-fade-up text-white drop-shadow-lg">
              Connect Your Wallet
            </h1>
            <p className="text-lg text-white/90 animate-fade-up drop-shadow" style={{ animationDelay: "100ms" }}>
              Join our community and start earning by preserving languages
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-lg p-4 text-white text-center shadow-xl">
              <div className="text-2xl font-bold">$12,467</div>
              <div className="text-sm text-white/90">Total Earnings</div>
            </div>
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-lg p-4 text-white text-center shadow-xl">
              <div className="text-2xl font-bold">847</div>
              <div className="text-sm text-white/90">Active Users</div>
            </div>
          </div>

          {/* Connect Button - Placeholder for now */}
          <div className="p-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button 
              className="w-full text-lg py-6 bg-white hover:bg-white/90 text-[#4F46E5] font-semibold shadow-2xl hover:shadow-white/20 transition-all duration-300 border-0"
              variant="secondary"
            >
              Connect Wallet
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-white/80 text-sm animate-fade-up drop-shadow" style={{ animationDelay: "400ms" }}>
            By connecting, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
