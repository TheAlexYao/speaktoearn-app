
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Transaction {
  date: string;
  type: "withdrawal" | "task_payment";
  amount: string;
  status: "completed" | "pending";
}

const recentTransactions: Transaction[] = [
  {
    date: "2024-03-15",
    type: "withdrawal",
    amount: "-120.00 CUSD",
    status: "completed",
  },
  {
    date: "2024-03-14",
    type: "task_payment",
    amount: "+5.20 CUSD",
    status: "completed",
  },
  {
    date: "2024-03-14",
    type: "task_payment",
    amount: "+3.80 CUSD",
    status: "completed",
  },
];

export const ProfileHeader = () => {
  const { toast } = useToast();
  const [showTransactions, setShowTransactions] = useState(false);
  const walletAddress = "0x742d...f44e";

  const copyWalletAddress = () => {
    navigator.clipboard.writeText("0x742d35a7b9c1f44e");
    toast({
      title: "Copied!",
      description: "Wallet address copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="mb-8 animate-fade-up" style={{ animationDelay: '0ms' }}>
      <Card className="bg-white border-gray-200">
        <div className="p-4 sm:p-6">
          <div className="flex items-start gap-6 mb-6">
            <Avatar className="h-16 w-16 border border-primary/20 shadow-sm">
              <AvatarImage 
                src="/aisha-profile.webp" 
                alt="Aisha M." 
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-primary text-lg">
                AM
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">Aisha M.</h1>
              <div className="flex items-center gap-2 mt-1">
                <button 
                  onClick={copyWalletAddress}
                  className="text-sm text-gray-600 flex items-center gap-1 hover:text-gray-900 transition-colors"
                >
                  {walletAddress}
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-1 text-sm text-gray-600 font-medium">
                Expert in Swahili
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/20">
              <div className="text-lg font-semibold text-gray-900">342 CUSD</div>
              <div className="text-sm text-gray-600">Total Earned</div>
            </div>
            <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-primary/20">
              <div className="text-lg font-semibold text-gray-900">24.5 CUSD</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="default"
              className="bg-primary text-white hover:bg-primary/90 shadow-lg w-full sm:flex-1"
            >
              Withdraw Funds
            </Button>
            <Button 
              variant="outline"
              onClick={() => setShowTransactions(!showTransactions)}
              className="border-primary/20 bg-primary/10 hover:bg-primary/20 text-primary w-full sm:flex-1 flex items-center justify-center gap-2"
            >
              <span className="flex-1">Transaction History</span>
              {showTransactions ? (
                <ChevronUp className="w-4 h-4 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 flex-shrink-0" />
              )}
            </Button>
          </div>

          {showTransactions && (
            <div className="mt-6 space-y-4 border-t border-gray-200 pt-4">
              <div className="text-sm font-medium text-gray-900">Recent Transactions</div>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {transaction.type === 'withdrawal' ? 'Withdrawal' : 'Task Payment'}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(transaction.date).toLocaleDateString()}
                      </span>
                    </div>
                    <span className={cn(
                      "text-sm font-medium",
                      transaction.amount.startsWith('+') ? 'text-success-500' : 'text-primary'
                    )}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
