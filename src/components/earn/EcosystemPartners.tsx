
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface EcosystemPartner {
  id: string;
  name: string;
  description: string;
  reward: string;
  tag: string;
  externalUrl: string;
  verified: boolean;
}

const ecosystemPartners: EcosystemPartner[] = [
  {
    id: "halofi",
    name: "HaloFi",
    description: "Earn up to 12% APY on your CUSD",
    reward: "12% APY",
    tag: "DeFi",
    externalUrl: "#",
    verified: true,
  },
  {
    id: "impact",
    name: "Impact Market",
    description: "Support UBI initiatives",
    reward: "2 CUSD/review",
    tag: "Social Impact",
    externalUrl: "#",
    verified: true,
  },
  {
    id: "goodghosting",
    name: "GoodGhosting",
    description: "Gamified savings pools",
    reward: "Up to 15% APY",
    tag: "GameFi",
    externalUrl: "#",
    verified: true,
  },
];

export const EcosystemPartners = () => {
  return (
    <div className="animate-fade-up" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Ecosystem Partners</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="border border-white/20 bg-white/10 text-white font-medium hover:bg-white/20 hover:text-white transition-colors"
        >
          Explore All
        </Button>
      </div>
      
      <div className="space-y-4">
        {ecosystemPartners.map((partner) => (
          <Card key={partner.id} className="hover:shadow-xl transition-all duration-300 border-white/20 backdrop-blur-sm bg-white/90">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{partner.name}</h3>
                    {partner.verified && (
                      <span className="text-xs bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-3 py-1 rounded-full font-medium">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs bg-gray-100 px-3 py-1.5 rounded-full font-medium">
                      {partner.tag}
                    </span>
                    <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {partner.reward}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
