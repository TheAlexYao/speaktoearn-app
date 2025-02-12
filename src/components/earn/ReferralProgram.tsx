
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Share2, Gift, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  totalEarned: string;
  referralCode: string;
}

const referralStats: ReferralStats = {
  totalReferrals: 12,
  activeReferrals: 8,
  totalEarned: "45.5 CUSD",
  referralCode: "EARN123",
};

export const ReferralProgram = () => {
  const { toast } = useToast();

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralStats.referralCode);
    toast({
      title: "Referral code copied!",
      description: "Share it with your friends to earn rewards",
    });
  };

  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">Referral Program</h2>
          <p className="text-sm text-white/80">Invite friends and earn together</p>
        </div>
      </div>
      
      <Card className="hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">Total Referrals</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {referralStats.totalReferrals}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Gift className="w-4 h-4" />
                <span className="text-sm font-medium">Total Earned</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {referralStats.totalEarned}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 bg-gray-50 rounded-lg p-3">
              <p className="text-sm text-gray-600 mb-1">Your Referral Code</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-semibold">
                  {referralStats.referralCode}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={copyReferralCode}
                  className="hover:bg-gray-100"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all duration-300"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share Referral Link
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
