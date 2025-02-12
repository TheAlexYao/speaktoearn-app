
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const ConnectWallet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-[#8B5CF6] px-4 py-8">
      {/* Navigation */}
      <nav className="max-w-7xl mx-auto">
        <Logo />
      </nav>

      {/* Main Content */}
      <div className="max-w-md mx-auto mt-16 space-y-8">
        {/* Header */}
        <div className="text-center text-white space-y-4">
          <h1 className="text-4xl font-bold animate-fade-up">
            Connect Your Wallet
          </h1>
          <p className="text-lg opacity-90 animate-fade-up" style={{ animationDelay: "100ms" }}>
            Join our community and start earning by preserving languages
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="glass-card rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold">$12,467</div>
            <div className="text-sm opacity-80">Total Earnings</div>
          </div>
          <div className="glass-card rounded-lg p-4 text-white text-center">
            <div className="text-2xl font-bold">847</div>
            <div className="text-sm opacity-80">Active Users</div>
          </div>
        </div>

        {/* Connect Button - Placeholder for now */}
        <div className="p-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Button 
            className="w-full text-lg py-6 glass-card hover:bg-white/20 border-2 border-white/20"
            variant="ghost"
          >
            Connect Wallet
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-white/60 text-sm animate-fade-up" style={{ animationDelay: "400ms" }}>
          By connecting, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default ConnectWallet;
